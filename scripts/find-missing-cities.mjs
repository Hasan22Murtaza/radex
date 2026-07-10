const res = await fetch('https://www.radex-objektmanagement.de/einsatzgebiete-rhein-main');
const html = await res.text();

const names = ['Friedrichsdorf', 'Kelkheim (Taunus)', 'Kelkheim'];
for (const n of names) {
  const idx = html.indexOf(n);
  if (idx >= 0) {
    const snippet = html.slice(Math.max(0, idx - 300), idx + 400);
    const href = snippet.match(/href="([^"]+)"/g);
    console.log(n, 'hrefs:', href?.slice(-3));
  } else {
    console.log(n, 'NOT FOUND');
  }
}

// Find all img alt texts in city grid
const gridStart = html.indexOf('Unsere Einsatzgebiete');
const gridEnd = html.indexOf('Regional vor Ort');
const grid = html.slice(gridStart, gridEnd);
const alts = [...grid.matchAll(/alt="([^"]+)"/g)].map((m) => m[1]);
console.log('Alt count:', alts.length);
alts.forEach((a, i) => console.log((i + 1) + '. ' + a));
