import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Exact order from https://www.radex-objektmanagement.de/einsatzgebiete-rhein-main (53 cities)
const REFERENCE_CITIES = [
  { id: 'frankfurt', name: 'Frankfurt am Main', path: '/sanierung-frankfurt-am-main', featured: true, heroImg: '/img/staedte/opt_2818784-frankfurt-1709969.webp', districts: ['Sachsenhausen', 'Nordend', 'Bornheim', 'Bockenheim', 'Westend', 'Ostend', 'Gallus', 'Niederrad', 'Höchst', 'Riedberg'] },
  { id: 'offenbach', name: 'Offenbach am Main', path: '/sanierung-offenbach-am-main', featured: true, heroImg: '/img/staedte/opt_frankbender-offenbach-by-the-sea-5396484.webp', districts: ['Innenstadt', 'Bürgel', 'Bieber', 'Rumpenheim', 'Lauterborn', 'Tempelsee'] },
  { id: 'hanau', name: 'Hanau', path: '/sanierung-hanau', featured: true, heroImg: '/img/staedte/opt_hanau.webp', districts: ['Innenstadt', 'Kesselstadt', 'Großauheim', 'Steinheim', 'Wolfgang', 'Lamboy'] },
  { id: 'aschaffenburg', name: 'Aschaffenburg', path: '/sanierung-aschaffenburg', featured: true, heroImg: '/img/staedte/opt_aschaffenburg.webp', districts: ['Innenstadt', 'Damm', 'Leider', 'Nilkheim', 'Schweinheim', 'Strietwald'] },
  { id: 'dietzenbach', name: 'Dietzenbach', path: '/sanierung-dietzenbach', featured: true, heroImg: '/img/staedte/opt_wiki-dietzenbach.webp', districts: [] },
  { id: 'dreieich', name: 'Dreieich', path: '/sanierung-dreieich', featured: true, heroImg: '/img/staedte/opt_wiki-dreieich.webp', districts: [] },
  { id: 'eschborn', name: 'Eschborn', path: '/sanierung-eschborn', featured: true, heroImg: '/img/staedte/wiki-eschborn.jpg', districts: [] },
  { id: 'gross-gerau', name: 'Groß-Gerau', path: '/sanierung-gross-gerau', featured: true, heroImg: '/img/staedte/gg.webp', districts: [] },
  { id: 'heusenstamm', name: 'Heusenstamm', path: '/sanierung-heusenstamm', featured: false, heroImg: '/img/staedte/opt_wiki-heusenstamm.webp', districts: [] },
  { id: 'hofheim-am-taunus', name: 'Hofheim am Taunus', path: '/sanierung-hofheim-am-taunus', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'koenigstein-im-taunus', name: 'Königstein im Taunus', path: '/sanierung-koenigstein-im-taunus', featured: false, heroImg: '/img/staedte/wiki-koenigstein.jpg', districts: [] },
  { id: 'kronberg-im-taunus', name: 'Kronberg im Taunus', path: '/sanierung-kronberg-im-taunus', featured: false, heroImg: '/img/staedte/kronberg-8055498_1280.jpg', districts: [] },
  { id: 'langen', name: 'Langen', path: '/sanierung-langen', featured: false, heroImg: '/img/staedte/opt_wiki-langen.webp', districts: [] },
  { id: 'maintal', name: 'Maintal', path: '/sanierung-maintal', featured: false, heroImg: '/img/staedte/opt_wiki-maintal.webp', districts: [] },
  { id: 'muehlheim-am-main', name: 'Mühlheim am Main', path: '/sanierung-muehlheim-am-main', featured: false, heroImg: '/img/staedte/wiki-muehlheim.jpg', districts: [] },
  { id: 'neu-isenburg', name: 'Neu-Isenburg', path: '/sanierung-neu-isenburg', featured: false, heroImg: '/img/staedte/opt_Neu-Isenburg.webp', districts: [] },
  { id: 'obertshausen', name: 'Obertshausen', path: '/sanierung-obertshausen', featured: false, heroImg: '/img/staedte/opt_wiki-obertshausen.webp', districts: [] },
  { id: 'oberursel', name: 'Oberursel', path: '/sanierung-oberursel', featured: false, heroImg: '/img/staedte/wiki-oberursel.jpg', districts: [] },
  { id: 'rodgau', name: 'Rodgau', path: '/sanierung-rodgau', featured: false, heroImg: '/img/staedte/opt_wiki-rodgau.webp', districts: [] },
  { id: 'roedermark', name: 'Rödermark', path: '/sanierung-roedermark', featured: false, heroImg: '/img/staedte/opt_wiki-roedermark.webp', districts: ['Ober-Roden', 'Urberach', 'Waldacker'] },
  { id: 'ruesselsheim-am-main', name: 'Rüsselsheim am Main', path: '/sanierung-ruesselsheim-am-main', featured: false, heroImg: '/img/staedte/wiki-ruesselsheim-am-main.jpg', districts: [] },
  { id: 'seligenstadt', name: 'Seligenstadt', path: '/sanierung-seligenstadt', featured: false, heroImg: '/img/staedte/opt_wiki-seligenstadt.webp', districts: [] },
  { id: 'babenhausen', name: 'Babenhausen', path: '/sanierung-babenhausen', featured: false, heroImg: '/img/staedte/wiki-babenhausen.jpg', districts: [] },
  { id: 'bad-homburg', name: 'Bad Homburg v. d. Höhe', path: '/sanierung-bad-homburg-v-d-hoehe', featured: false, heroImg: '/img/staedte/opt_badhombrg.webp', districts: [] },
  { id: 'bad-nauheim', name: 'Bad Nauheim', path: '/sanierung-bad-nauheim', featured: false, heroImg: '/img/staedte/opt_wiki-bad-nauheim.webp', districts: [] },
  { id: 'bad-soden-am-taunus', name: 'Bad Soden am Taunus', path: '/villa-haus-modernisieren-bad-soden-am-taunus', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'bad-vilbel', name: 'Bad Vilbel', path: '/haus-wohnung-modernisieren-bad-vilbel', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'bruchkoebel', name: 'Bruchköbel', path: '/sanierung-bruchkoebel', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'buettelborn', name: 'Büttelborn', path: '/sanierung-buettelborn', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'darmstadt', name: 'Darmstadt', path: '/haus-wohnung-bad-modernisieren-darmstadt', featured: false, heroImg: '/img/staedte/opt_lapping-darmstadt-2209368.webp', districts: ['Bessungen', 'Eberstadt', 'Kranichstein', 'Arheilgen', 'Wixhausen', 'Innenstadt'] },
  { id: 'dieburg', name: 'Dieburg', path: '/sanierung-dieburg', featured: false, heroImg: '/img/staedte/opt_wiki-dieburg.webp', districts: [] },
  { id: 'egelsbach', name: 'Egelsbach', path: '/sanierung-egelsbach', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'erzhausen', name: 'Erzhausen', path: '/sanierung-erzhausen', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'floersheim-am-main', name: 'Flörsheim am Main', path: '/sanierung-floersheim-am-main', featured: false, heroImg: '/img/staedte/wiki-floersheim.jpg', districts: [] },
  { id: 'friedberg-hessen', name: 'Friedberg (Hessen)', path: '/sanierung-friedberg-hessen', featured: false, heroImg: '/img/staedte/wiki-friedberg.jpg', districts: [] },
  { id: 'friedrichsdorf', name: 'Friedrichsdorf', path: '/einfamilienhaus-wohnung-sanieren-friedrichsdorf', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'ginsheim-gustavsburg', name: 'Ginsheim-Gustavsburg', path: '/sanierung-ginsheim-gustavsburg', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'griesheim', name: 'Griesheim', path: '/sanierung-griesheim', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'grosskrotzenburg', name: 'Großkrotzenburg', path: '/sanierung-grosskrotzenburg', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'gross-umstadt', name: 'Groß-Umstadt', path: '/sanierung-gross-umstadt', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'hainburg', name: 'Hainburg', path: '/sanierung-hainburg', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'hattersheim-am-main', name: 'Hattersheim am Main', path: '/wohneigentum-modernisieren-hattersheim-am-main', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'karben', name: 'Karben', path: '/haus-wohnung-modernisieren-karben', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'kelkheim-taunus', name: 'Kelkheim (Taunus)', path: '/haus-modernisierung-kelkheim-taunus', featured: false, heroImg: '/img/staedte/taunus.webp', districts: [] },
  { id: 'kelsterbach', name: 'Kelsterbach', path: '/eigentumswohnung-haus-modernisieren-kelsterbach', featured: false, heroImg: '/img/staedte/wiki-kelsterbach.jpg', districts: [] },
  { id: 'mainz', name: 'Mainz', path: '/sanierung-mainz', featured: false, heroImg: '/img/staedte/opt_map-mainz.webp', districts: ['Altstadt', 'Neustadt', 'Oberstadt', 'Gonsenheim', 'Bretzenheim', 'Mombach'] },
  { id: 'moerfelden-walldorf', name: 'Mörfelden-Walldorf', path: '/sanierung-moerfelden-walldorf', featured: false, heroImg: '/img/staedte/opt_wiki-moerfelden.webp', districts: [] },
  { id: 'nidderau', name: 'Nidderau', path: '/sanierung-nidderau', featured: false, heroImg: '/img/staedte/wiki-nidderau.jpg', districts: [] },
  { id: 'raunheim', name: 'Raunheim', path: '/sanierung-raunheim', featured: false, heroImg: '/img/staedte/wiki-raunheim.jpg', districts: [] },
  { id: 'schwalbach-am-taunus', name: 'Schwalbach am Taunus', path: '/sanierung-schwalbach-am-taunus', featured: false, heroImg: '/img/staedte/wiki-schwalbach.jpg', districts: [] },
  { id: 'sulzbach-taunus', name: 'Sulzbach (Taunus)', path: '/sanierung-sulzbach-taunus', featured: false, heroImg: '/img/staedte/wiki-sulzbach.jpg', districts: [] },
  { id: 'weiterstadt', name: 'Weiterstadt', path: '/sanierung-weiterstadt', featured: false, heroImg: '/img/staedte/opt_wiki-weiterstadt.webp', districts: [] },
  { id: 'wiesbaden', name: 'Wiesbaden', path: '/sanierung-wiesbaden', featured: false, heroImg: '/img/staedte/opt_wiesbaden.webp', districts: ['Innenstadt', 'Biebrich', 'Bierstadt', 'Sonnenberg', 'Schierstein', 'Dotzheim'] },
];

const EXISTING_IDS = new Set([
  'frankfurt', 'darmstadt', 'offenbach', 'hanau', 'wiesbaden', 'mainz', 'aschaffenburg', 'roedermark',
  'bad-homburg', 'dieburg', 'dietzenbach', 'dreieich', 'heusenstamm', 'langen', 'maintal',
  'moerfelden-walldorf', 'neu-isenburg', 'obertshausen', 'rodgau', 'seligenstadt', 'weiterstadt', 'bad-nauheim',
]);

const BASE_URL = 'https://www.radex-objektmanagement.de';

function cityKey(id) {
  return id.includes('-') ? `'${id}'` : id;
}

function serializeCityEntry(city) {
  const districts = city.districts?.length
    ? `[${city.districts.map((d) => `'${d}'`).join(', ')}]`
    : '[]';
  return `  ${cityKey(city.id)}: {
    name: ${JSON.stringify(city.name)},
    path: ${JSON.stringify(city.path)},
    heroImg: ${JSON.stringify(city.heroImg)},
    districts: ${districts},
    featured: ${city.featured},
  }`;
}

function generateCitiesJs() {
  const entries = REFERENCE_CITIES.map(serializeCityEntry).join(',\n');
  const scrapeUrls = REFERENCE_CITIES
    .filter((c) => c.id !== 'frankfurt')
    .map((c) => `  ${cityKey(c.id)}: ${JSON.stringify(BASE_URL + c.path)},`)
    .join('\n');

  return `export const cityDataMap = {
${entries}
};

export const cityIds = Object.keys(cityDataMap);

export const implementedCityPaths = new Set(
  Object.values(cityDataMap).map((city) => city.path)
);

export const featuredCities = cityIds
  .filter((id) => cityDataMap[id].featured)
  .map((id) => ({
    id,
    name: cityDataMap[id].name,
    img: cityDataMap[id].heroImg,
    link: cityDataMap[id].path,
  }));

export const additionalCities = cityIds
  .filter((id) => !cityDataMap[id].featured)
  .map((id) => ({
    id,
    name: cityDataMap[id].name,
    img: cityDataMap[id].heroImg,
    link: cityDataMap[id].path,
  }));

export const cityScrapeUrls = {
${scrapeUrls}
};
`;
}

// --- SEO scraping (from scrape-city-seo.mjs) ---

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
    // skip
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
    if (/^-\s+/.test(raw)) bulletParagraphs.push(raw.replace(/^-\s+/, ''));
  }

  const allItems = items.length > 0 ? items : bulletParagraphs;
  const paragraphs = extractParagraphs(contentHtml).filter((p) => !/^-\s/.test(p));

  if (paragraphs.length === 0 && allItems.length === 0) return null;

  let description = '';
  let closingNote = '';
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

  const serviceSections = splitSections(contentHtml).map(parseSectionBlock).filter(Boolean);

  let intro = '';
  const introSectionMatch = contentHtml.match(
    /<div class="intro-section[^"]*"[^>]*>[\s\S]*?<div class="intro-text">([\s\S]*?)<\/div>/i
  );
  if (introSectionMatch) intro = extractParagraphs(introSectionMatch[1]).join(' ');

  if (!intro) {
    const introBlockMatch = contentHtml.match(
      /rdx-bereich-grid[\s\S]*?<\/div>\s*<\/div>\s*<div class="section"[^>]*>([\s\S]*?)<div class="section-label">/i
    );
    if (introBlockMatch) {
      const introParagraphs = extractParagraphs(introBlockMatch[1]);
      if (introParagraphs.length > 0) intro = introParagraphs.join(' ');
    }
  }

  if (!intro) {
    const fallbackIntro = contentHtml.match(
      /rdx-bereich-grid[\s\S]*?<\/div>\s*<\/div>\s*<p[^>]*>([\s\S]*?)<\/p>/i
    );
    if (fallbackIntro) intro = stripTags(fallbackIntro[1]);
  }

  return { intro, serviceSections, faqs: extractFaqs(html) };
}

function adaptCityContent(template, cityName) {
  const replaceName = (text) => text.replace(/Rodgau/g, cityName);
  return {
    intro: template.intro ? replaceName(template.intro) : '',
    serviceSections: template.serviceSections.map((section) => ({
      ...section,
      title: replaceName(section.title),
      description: section.description ? replaceName(section.description) : undefined,
      items: section.items?.map(replaceName),
      closingNote: section.closingNote ? replaceName(section.closingNote) : undefined,
    })),
    faqs: template.faqs?.map((faq) => ({
      q: replaceName(faq.q),
      a: replaceName(faq.a),
    })),
  };
}

function serializeSection(section) {
  const parts = [`title: ${JSON.stringify(section.title)}`];
  if (section.description) parts.push(`description: ${JSON.stringify(section.description)}`);
  if (section.items?.length) {
    parts.push(`items: [\n${section.items.map((item) => `          ${JSON.stringify(item)}`).join(',\n')}\n        ]`);
  }
  if (section.closingNote) parts.push(`closingNote: ${JSON.stringify(section.closingNote)}`);
  return `      {\n        ${parts.join(',\n        ')}\n      }`;
}

function serializeSeoCity(id, data) {
  const lines = [`  ${cityKey(id)}: {`];
  if (data.intro) lines.push(`    intro: ${JSON.stringify(data.intro)},`);
  lines.push('    serviceSections: [');
  lines.push(data.serviceSections.map(serializeSection).join(',\n'));
  lines.push('    ],');
  if (data.faqs?.length) {
    lines.push('    faqs: [');
    for (const faq of data.faqs) {
      lines.push(`      { q: ${JSON.stringify(faq.q)}, a: ${JSON.stringify(faq.a)} },`);
    }
    lines.push('    ]');
  }
  lines.push('  },');
  return lines.join('\n');
}

async function scrapeNewCities() {
  const scrapedPath = join(root, 'src', 'data', 'scraped-city-seo.json');
  let existingScraped = {};
  if (existsSync(scrapedPath)) {
    existingScraped = JSON.parse(readFileSync(scrapedPath, 'utf8'));
  }

  const newCities = REFERENCE_CITIES.filter((c) => !EXISTING_IDS.has(c.id));
  const results = { ...existingScraped };

  for (const city of newCities) {
    const url = BASE_URL + city.path;
    console.log(`Scraping ${city.id} from ${url}...`);
    try {
      const res = await fetch(url);
      const html = await res.text();
      let data = parseCityPage(html);
      if (!data.serviceSections?.length && results.rodgau) {
        data = adaptCityContent(results.rodgau, city.name);
      }
      results[city.id] = data;
      console.log(`  -> ${data.serviceSections.length} sections, ${data.faqs.length} faqs`);
    } catch (err) {
      console.error(`  FAILED ${city.id}:`, err.message);
      if (results.rodgau) {
        results[city.id] = adaptCityContent(results.rodgau, city.name);
      }
    }
  }

  writeFileSync(scrapedPath, JSON.stringify(results, null, 2), 'utf8');
  return results;
}

function appendSeoContent(scraped) {
  const seoPath = join(root, 'src', 'data', 'citySeoContent.js');
  let content = readFileSync(seoPath, 'utf8');

  const newIds = REFERENCE_CITIES.map((c) => c.id).filter((id) => !EXISTING_IDS.has(id));
  const newBlocks = newIds.map((id) => {
    if (content.includes(`${cityKey(id)}:`)) {
      console.log(`SEO content for ${id} already exists, skipping`);
      return null;
    }
    const data = scraped[id];
    if (!data) throw new Error(`No scraped data for ${id}`);
    return serializeSeoCity(id, data);
  }).filter(Boolean);

  if (newBlocks.length === 0) {
    console.log('No new SEO blocks to append');
    return;
  }

  content = content.replace(/\n};\s*$/, `\n${newBlocks.join('\n')}\n};\n`);
  writeFileSync(seoPath, content, 'utf8');
  console.log(`Appended ${newBlocks.length} city SEO entries`);
}

function updateSitemap() {
  const sitemapPath = join(root, 'public', 'sitemap.xml');
  let content = readFileSync(sitemapPath, 'utf8');

  const cityUrlBlock = REFERENCE_CITIES.map((city) => `  <url>
    <loc>https://www.radex-objektmanagement.de${city.path}</loc>
    <lastmod>2026-07-10</lastmod>
    <priority>0.7</priority>
  </url>`).join('\n');

  const startMarker = '  <url>\n    <loc>https://www.radex-objektmanagement.de/sanierung-frankfurt-am-main</loc>';
  const endMarker = '  <url>\n    <loc>https://www.radex-objektmanagement.de/sanierung-bad-nauheim</loc>';

  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);
  if (startIdx >= 0 && endIdx >= 0) {
    const endOfLastUrl = content.indexOf('</url>', endIdx) + 6;
    content = content.slice(0, startIdx) + cityUrlBlock + '\n' + content.slice(endOfLastUrl);
  } else {
    content = content.replace('</urlset>', `${cityUrlBlock}\n</urlset>`);
  }

  writeFileSync(sitemapPath, content, 'utf8');
  console.log('Updated sitemap.xml');
}

function updateVercelRedirects() {
  const vercelPath = join(root, 'vercel.json');
  const config = JSON.parse(readFileSync(vercelPath, 'utf8'));
  const implementedPaths = new Set(REFERENCE_CITIES.map((c) => c.path));

  // Remove redirects that send implemented city pages to the hub
  config.redirects = config.redirects.filter((r) => {
    if (r.destination !== '/einsatzgebiete-rhein-main') return true;
    if (implementedPaths.has(r.source)) return false;
    return true;
  });

  // Add alias redirects from reference alternate paths to our canonical paths
  const aliasRedirects = [
    { source: '/sanierung-bad-homburg-vor-der-hoehe', destination: '/sanierung-bad-homburg-v-d-hoehe' },
    { source: '/sanierung-bad-homburg', destination: '/sanierung-bad-homburg-v-d-hoehe' },
    { source: '/immobilie-modernisieren-moerfelden-walldorf', destination: '/sanierung-moerfelden-walldorf' },
    { source: '/sanierung-kelkheim', destination: '/haus-modernisierung-kelkheim-taunus' },
  ];

  for (const alias of aliasRedirects) {
    const exists = config.redirects.some((r) => r.source === alias.source);
    if (!exists) {
      config.redirects.push({ ...alias, permanent: true });
    } else {
      config.redirects = config.redirects.map((r) =>
        r.source === alias.source ? { ...r, destination: alias.destination, permanent: true } : r
      );
    }
  }

  writeFileSync(vercelPath, JSON.stringify(config, null, 2) + '\n', 'utf8');
  console.log('Updated vercel.json redirects');
}

async function main() {
  console.log(`Syncing ${REFERENCE_CITIES.length} cities (${REFERENCE_CITIES.length - EXISTING_IDS.size} new)...`);

  writeFileSync(join(root, 'src', 'data', 'cities.js'), generateCitiesJs(), 'utf8');
  console.log('Updated cities.js');

  const scraped = await scrapeNewCities();
  appendSeoContent(scraped);
  updateSitemap();
  updateVercelRedirects();

  const newCityNames = REFERENCE_CITIES.filter((c) => !EXISTING_IDS.has(c.id)).map((c) => c.name);
  writeFileSync(
    join(root, 'scripts', 'sync-report.json'),
    JSON.stringify({
      referenceTotal: REFERENCE_CITIES.length,
      beforeTotal: EXISTING_IDS.size,
      afterTotal: REFERENCE_CITIES.length,
      newlyAdded: newCityNames,
      featuredOrder: REFERENCE_CITIES.filter((c) => c.featured).map((c) => c.name),
      fullOrder: REFERENCE_CITIES.map((c) => c.name),
    }, null, 2),
    'utf8'
  );

  console.log('Done!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
