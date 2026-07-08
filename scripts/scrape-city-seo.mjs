import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { cityScrapeUrls } from '../src/data/cities.js';

const cities = Object.entries(cityScrapeUrls).map(([id, url]) => ({ id, url }));

const SKIP_TITLES = new Set([
  'Finden Sie den passenden Sanierungsbereich für Ihr Projekt.',
  'Häufige Fragen',
  'Jetzt Sanierungsprojekt anfragen',
  'Kostenlose Beratung sichern',
]);

const CTA_PATTERN = /^(Kostenlos|Angebot|Jetzt per|Unverbindlich|Beratungs|Heizungs|Altbau-|Ablauf|Gewerbe|Leistungen|Mehr zur|Schnelle|Gewerke|Telefon:|Modernisierung gemeinsam|Energiepotenzial|Schaden einschätzen|Sanierung unverbindlich)/i;

function decodeHtml(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTags(html) {
  return decodeHtml(html.replace(/<[^>]+>/g, ' '));
}

function extractListItems(html) {
  const items = [];
  const ulRegex = /<ul[^>]*>([\s\S]*?)<\/ul>/gi;
  let match;
  while ((match = ulRegex.exec(html)) !== null) {
    const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let liMatch;
    while ((liMatch = liRegex.exec(match[1])) !== null) {
      const text = stripTags(liMatch[1]);
      if (text) items.push(text);
    }
  }
  return items;
}

function extractParagraphs(html) {
  const paragraphs = [];
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = pRegex.exec(html)) !== null) {
    const text = stripTags(match[1]);
    if (text && !CTA_PATTERN.test(text)) paragraphs.push(text);
  }
  return paragraphs;
}

function extractFaqs(html) {
  const faqs = [];
  const faqMatch = html.match(/"@type"\s*:\s*"FAQPage"[\s\S]*?"mainEntity"\s*:\s*(\[[\s\S]*?\])\s*\}/);
  if (!faqMatch) return faqs;

  try {
    const entities = JSON.parse(faqMatch[1]);
    for (const entity of entities) {
      const q = entity.name?.replace(/\s+/g, ' ').trim();
      const a = entity.acceptedAnswer?.text?.replace(/\s+/g, ' ').trim();
      if (q && a) faqs.push({ q, a });
    }
  } catch {
    // skip malformed JSON-LD
  }
  return faqs;
}

function splitSections(mainHtml) {
  const parts = mainHtml.split(/<div class="section"[^>]*>/i);
  return parts.slice(1);
}

function parseSectionBlock(block) {
  const h2Match = block.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  if (!h2Match) return null;

  const title = stripTags(h2Match[1]);
  if (SKIP_TITLES.has(title)) return null;

  const afterH2 = block.slice(block.indexOf(h2Match[0]) + h2Match[0].length);
  const contentEnd = afterH2.search(/<div style="text-align:center|<\/div>\s*<\/div>\s*$/i);
  const contentHtml = contentEnd > 0 ? afterH2.slice(0, contentEnd) : afterH2;

  const items = extractListItems(contentHtml);
  const bulletParagraphs = [];
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let pMatch;
  while ((pMatch = pRegex.exec(contentHtml)) !== null) {
    const raw = stripTags(pMatch[1]);
    if (!raw || CTA_PATTERN.test(raw)) continue;
    if (/^-\s+/.test(raw)) {
      bulletParagraphs.push(raw.replace(/^-\s+/, ''));
    }
  }

  const allItems = items.length > 0 ? items : bulletParagraphs;
  const paragraphs = extractParagraphs(contentHtml).filter((p) => !/^-\s/.test(p));

  let description = '';
  let closingNote = '';

  if (paragraphs.length === 0 && allItems.length === 0) {
    return null;
  }

  if (paragraphs.length === 1) {
    description = paragraphs[0];
  } else if (paragraphs.length > 1) {
    if (allItems.length > 0) {
      const listIndex = contentHtml.search(/<ul|<p[^>]*>\s*-/i);
      description = listIndex > 0 ? stripTags(contentHtml.slice(0, listIndex)) : paragraphs[0];
      const last = paragraphs[paragraphs.length - 1];
      closingNote = last !== description && !description.includes(last.slice(0, 50)) ? last : '';
    } else {
      description = paragraphs.join(' ');
    }
  }

  const section = { title };
  if (description) section.description = description;
  if (allItems.length > 0) section.items = allItems;
  if (closingNote) section.closingNote = closingNote;

  return section;
}

function parseCityPage(html) {
  const mainStart = html.indexOf('id="main-content"');
  const mainHtml = mainStart >= 0 ? html.slice(mainStart) : html;
  const faqStart = mainHtml.search(/<h2[^>]*>\s*Häufige Fragen/i);
  const contentHtml = faqStart > 0 ? mainHtml.slice(0, faqStart) : mainHtml;

  const blocks = splitSections(contentHtml);
  const serviceSections = blocks.map(parseSectionBlock).filter(Boolean);

  let intro = '';
  const introSectionMatch = contentHtml.match(
    /<div class="intro-section[^"]*"[^>]*>[\s\S]*?<div class="intro-text">([\s\S]*?)<\/div>/i
  );
  if (introSectionMatch) {
    intro = extractParagraphs(introSectionMatch[1]).join(' ');
  }

  if (!intro) {
    const introBlockMatch = contentHtml.match(
      /rdx-bereich-grid[\s\S]*?<\/div>\s*<\/div>\s*<div class="section"[^>]*>([\s\S]*?)<div class="section-label">/i
    );
    if (introBlockMatch) {
      const introParagraphs = extractParagraphs(introBlockMatch[1]);
      if (introParagraphs.length > 0) {
        intro = introParagraphs.join(' ');
      }
    }
  }

  if (!intro) {
    const fallbackIntro = contentHtml.match(
      /rdx-bereich-grid[\s\S]*?<\/div>\s*<\/div>\s*<p[^>]*>([\s\S]*?)<\/p>/i
    );
    if (fallbackIntro) intro = stripTags(fallbackIntro[1]);
  }

  const faqs = extractFaqs(html);

  return { intro, serviceSections, faqs };
}

async function main() {
  const results = {};

  for (const city of cities) {
    console.log(`Fetching ${city.id}...`);
    const res = await fetch(city.url);
    const html = await res.text();
    results[city.id] = parseCityPage(html);
    console.log(`  -> ${results[city.id].serviceSections.length} sections, ${results[city.id].faqs.length} faqs`);
  }

  const outPath = join(__dirname, '..', 'src', 'data', 'scraped-city-seo.json');
  writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`Wrote ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
