/**
 * Converts the 1:1 migrated legacy content (src/data/migratedServices.json)
 * into structured data (src/data/nativeMigratedServices.json) that the
 * MigratedServicePage renders using the project's native landing-page design
 * (same layout as WaermepumpeLanding).
 *
 * Strategy (robust across the varied legacy layouts):
 *   1. Strip the legacy hero (a native hero replaces it).
 *   2. Parse the FAQ list (.faq-item) separately.
 *   3. Cut the content at the FAQ heading; everything after (FAQ + contact
 *      form) is not a content section.
 *   4. Split the remaining body by <h2> → { title, body } content sections.
 *      Text before the first <h2> is the lead.
 *   5. Derive page-specific topic cards from the first content sections.
 *
 * Run: node scripts/build-native-services.mjs
 */
import { createRequire } from 'node:module';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const require = createRequire(import.meta.url);
const migrated = require('../src/data/migratedServices.json');
const __dirname = dirname(fileURLToPath(import.meta.url));

const stripTags = (s) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

function firstSentence(html, max = 150) {
  const t = stripTags(html);
  const idx = t.search(/[.!?](\s|$)/);
  const s = idx > 0 ? t.slice(0, idx + 1) : t;
  return s.length > max ? s.slice(0, max).replace(/\s+\S*$/, '') + '…' : s;
}

function extractHeroImage(html) {
  const m = /page-hero-bg">\s*<img[^>]*\bsrc="([^"]+)"/i.exec(html);
  return m ? m[1] : null;
}

/** Depth-aware removal of the first `<div class="page-hero">…</div>`. */
function stripLegacyHero(html) {
  const start = html.indexOf('<div class="page-hero"');
  if (start === -1) return html;
  const tag = /<\/?div\b[^>]*>/gi;
  tag.lastIndex = html.indexOf('>', start) + 1;
  let depth = 1;
  let m;
  while ((m = tag.exec(html))) {
    depth += m[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return html.slice(0, start) + html.slice(tag.lastIndex);
  }
  return html;
}

/** Remove all `<div class="…sub…">…</div>` blocks (depth-aware). */
function removeDivByClass(html, sub) {
  let out = html;
  const needle = new RegExp('<div\\b[^>]*class="[^"]*' + sub + '[^"]*"[^>]*>', 'i');
  let idx;
  while ((idx = out.search(needle)) !== -1) {
    const open = needle.exec(out.slice(idx))[0];
    const tag = /<\/?div\b[^>]*>/gi;
    tag.lastIndex = idx + open.length;
    let depth = 1;
    let end = -1;
    let m;
    while ((m = tag.exec(out))) {
      depth += m[0].startsWith('</') ? -1 : 1;
      if (depth === 0) { end = tag.lastIndex; break; }
    }
    if (end === -1) break;
    out = out.slice(0, idx) + out.slice(end);
  }
  return out;
}

function removeTagBlocks(html, tag) {
  return html.replace(new RegExp('<' + tag + '\\b[^>]*>[\\s\\S]*?</' + tag + '>', 'gi'), '');
}

/** Clean a rich content fragment to semantic markup that the native theme styles. */
function cleanRich(html) {
  let out = html;
  out = out.replace(/<!--[\s\S]*?-->/g, '');
  out = removeTagBlocks(out, 'svg');
  out = removeTagBlocks(out, 'form');
  out = removeTagBlocks(out, 'button');
  out = removeTagBlocks(out, 'label');
  out = out.replace(/<input\b[^>]*>/gi, '');
  for (const c of ['section-label', 'cta-row', 'anchor-nav-inner', 'anchor-nav', 'nav-card-label', 'nav-card', 'content-block-cta', 'cta-form', 'form-field', 'cta-form-dsgvo']) {
    out = removeDivByClass(out, c);
  }
  // Drop legacy CTA/anchor links but keep normal internal links.
  out = out.replace(/<a\b[^>]*class="[^"]*btn[^"]*"[^>]*>[\s\S]*?<\/a>/gi, '');
  // Strip presentational attributes so legacy CSS vars don't leak.
  out = out.replace(/\s(?:style|class|id|fetchpriority|loading|decoding|width|height)="[^"]*"/gi, '');
  // Unwrap all remaining <div> layout wrappers (keep their inner content).
  out = out.replace(/<\/?div\b[^>]*>/gi, '');
  out = out.replace(/<p>\s*<\/p>/gi, '');
  out = out.replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim();
  return out;
}

function parseFaqs(html) {
  const questions = [...html.matchAll(/<div class="faq-question">([\s\S]*?)<span class="faq-icon"/gi)].map((x) => stripTags(x[1]));
  const answers = [...html.matchAll(/<div class="faq-answer">([\s\S]*?)<\/div>\s*<\/div>/gi)].map((x) => cleanRich(x[1]));
  return questions.map((q, i) => ({ q, a: answers[i] || '' })).filter((f) => f.q);
}

const CARD_ICONS = ['ClipboardCheck', 'Ruler', 'Hammer', 'Wrench', 'Layers', 'Gauge', 'ShieldCheck', 'Home'];
const CONTACT_TITLE = /(anfragen|anfrage|beratung sichern|jetzt starten|kontakt)/i;

function build(page) {
  const full = stripLegacyHero(page.contentHtml);

  // FAQs
  const faqs = /faq-list/.test(full) ? parseFaqs(full) : [];

  // Determine where the content region ends (before the FAQ heading / contact form).
  let contentEnd = full.length;
  const faqListIdx = full.indexOf('faq-list');
  if (faqListIdx !== -1) {
    const before = full.slice(0, faqListIdx);
    const lastH2 = before.lastIndexOf('<h2');
    contentEnd = lastH2 !== -1 ? lastH2 : faqListIdx;
  } else {
    const formIdx = full.search(/<form|kontakt-formular/i);
    if (formIdx !== -1) {
      const before = full.slice(0, formIdx);
      const lastH2 = before.lastIndexOf('<h2');
      contentEnd = lastH2 !== -1 ? lastH2 : formIdx;
    }
  }
  const region = full.slice(0, contentEnd);

  // Lead = everything before the first <h2>; sections split by <h2>.
  const firstH2 = region.indexOf('<h2');
  const leadRaw = firstH2 === -1 ? region : region.slice(0, firstH2);
  const leadLabelM = /<div class="section-label"[^>]*>([\s\S]*?)<\/div>/i.exec(leadRaw);
  const leadLabel = leadLabelM ? stripTags(leadLabelM[1]) : '';
  const lead = cleanRich(leadRaw);

  const sections = [];
  if (firstH2 !== -1) {
    const parts = region.slice(firstH2).split(/(?=<h2)/i);
    for (const part of parts) {
      const tm = /<h2[^>]*>([\s\S]*?)<\/h2>/i.exec(part);
      if (!tm) continue;
      const title = stripTags(tm[1]);
      if (!title) continue;
      const body = cleanRich(part.replace(tm[0], ''));
      if (CONTACT_TITLE.test(title) && (!body || stripTags(body).length < 40)) continue;
      sections.push({ title, body });
    }
  }

  const cards = sections
    .filter((s) => stripTags(s.body).length > 30)
    .slice(0, 6)
    .map((s, i) => ({ title: s.title, desc: firstSentence(s.body), icon: CARD_ICONS[i % CARD_ICONS.length] }));

  return {
    title: page.title,
    description: page.description,
    label: page.label || leadLabel,
    h1: page.h1,
    heroImage: extractHeroImage(page.contentHtml),
    leadLabel,
    lead,
    cards,
    sections,
    faqs,
  };
}

const out = { pages: {} };
for (const [slug, page] of Object.entries(migrated.pages)) {
  out.pages[slug] = build(page);
}

const target = resolve(__dirname, '../src/data/nativeMigratedServices.json');
writeFileSync(target, JSON.stringify(out, null, 2), 'utf8');

for (const [slug, p] of Object.entries(out.pages)) {
  console.log(slug.padEnd(36), 'sec:', String(p.sections.length).padStart(2), 'cards:', p.cards.length, 'faqs:', String(p.faqs.length).padStart(2), 'lead:', p.lead ? 'Y' : 'N', 'img:', p.heroImage ? 'Y' : 'N');
}
console.log('\nWrote', target);
