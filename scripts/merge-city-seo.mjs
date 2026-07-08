import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const existingPath = join(root, 'src', 'data', 'citySeoContent.js');
const scrapedPath = join(root, 'src', 'data', 'scraped-city-seo.json');

const existing = readFileSync(existingPath, 'utf8');
const scraped = JSON.parse(readFileSync(scrapedPath, 'utf8'));

const frankfurtMatch = existing.match(/frankfurt:\s*\{[\s\S]*?\n  \},\n/);
if (!frankfurtMatch) {
  throw new Error('Could not extract frankfurt block from citySeoContent.js');
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

function serializeCity(id, data) {
  const key = id.includes('-') ? `'${id}'` : id;
  const lines = [`  ${key}: {`];
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

const cityOrder = [
  'frankfurt',
  'darmstadt',
  'offenbach',
  'hanau',
  'wiesbaden',
  'mainz',
  'aschaffenburg',
  'roedermark',
  'bad-homburg',
  'dieburg',
  'dietzenbach',
  'dreieich',
  'heusenstamm',
  'langen',
  'maintal',
  'moerfelden-walldorf',
  'neu-isenburg',
  'obertshausen',
  'rodgau',
  'seligenstadt',
  'weiterstadt',
  'bad-nauheim',
];
const cityBlocks = cityOrder.map((id) => {
  if (id === 'frankfurt') return `  ${frankfurtMatch[0].trim()}`;
  let data = scraped[id];
  if (!data?.serviceSections?.length && scraped.rodgau) {
    const cityName = id === 'bad-homburg'
      ? 'Bad Homburg'
      : id === 'moerfelden-walldorf'
        ? 'Mörfelden-Walldorf'
        : id;
    data = adaptCityContent(scraped.rodgau, cityName);
  }
  if (!data) throw new Error(`Missing scraped data for ${id}`);
  return serializeCity(id, data);
});

const output = `export const citySeoContent = {\n${cityBlocks.join('\n')}\n};\n`;
writeFileSync(existingPath, output, 'utf8');
console.log('Updated', existingPath);
