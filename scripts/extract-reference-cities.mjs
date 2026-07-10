const res = await fetch('https://www.radex-objektmanagement.de/einsatzgebiete-rhein-main');
const html = await res.text();

// Extract city links from the grid section
const sectionMatch = html.match(/Unsere Einsatzgebiete[\s\S]*?(?=Regional vor Ort|Regionalität)/i);
const section = sectionMatch ? sectionMatch[0] : html;

const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?<\/a>/gi;
const cities = [];
const seen = new Set();

let match;
while ((match = linkRegex.exec(section)) !== null) {
  const href = match[1];
  if (!href.includes('sanierung') && !href.includes('modernisieren')) continue;
  const fullPath = href.startsWith('http') ? new URL(href).pathname : href;
  if (seen.has(fullPath)) continue;

  // Extract visible text / alt from link content
  const inner = match[0];
  const altMatch = inner.match(/alt="([^"]+)"/i);
  const textMatch = inner.match(/>([^<]+)</);
  const name = (altMatch?.[1] || textMatch?.[1] || '').trim();
  if (!name || name.length < 3) continue;

  seen.add(fullPath);
  cities.push({ name, path: fullPath, url: `https://www.radex-objektmanagement.de${fullPath}` });
}

console.log(JSON.stringify(cities, null, 2));
console.error(`Total: ${cities.length}`);
