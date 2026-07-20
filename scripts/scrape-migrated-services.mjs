// One-off migration scraper: pulls the full original content of service pages
// from the live radex-objektmanagement.de site and stores it so the new site
// can render a true 1:1 copy inside an "Additional Information" section.
//
// Output: src/data/migratedServices.json
//   { globalCss, pages: { <slug>: { slug, title, description, label, h1, contentHtml, css } } }
//
// Run: node scripts/scrape-migrated-services.mjs

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ORIGIN = 'https://www.radex-objektmanagement.de';

// Service pages that exist on the old site but are missing (only redirected) on
// the new site. Each must become its own standalone page with its own URL.
const SLUGS = [
  // General Contractor & Renovation
  'generalunternehmer-rhein-main',
  'komplettsanierung-rhein-main',
  'kernsanierung-rhein-main',
  'teilsanierung-rhein-main',
  'bauleitung-projektsteuerung-rhein-main',
  // Heating & Plumbing
  'heizung-sanitaer-rhein-main',
  'heizungsmodernisierung-rhein-main',
  'waermepumpe-rhein-main',
  'sanitaerinstallation-rhein-main',
  // Electrical & Building Technology
  'elektroinstallation-rhein-main',
  'altbau-elektrik-erneuern-rhein-main',
  'elektrotechnik-rhein-main',
  'sicherungskasten-erneuern-rhein-main',
  // Interior Construction & Remodeling
  'innenausbau-umbau-rhein-main',
  'innenausbau-wohnung-rhein-main',
  'innenausbau-haus-rhein-main',
  'trockenbau-rhein-main',
  'wand-entfernen-rhein-main',
  // Energy & Funding
  'energetische-sanierung-rhein-main',
  'energieeffizienz-rhein-main',
  'sanierung-foerderung-rhein-main',
  // Mold & Asbestos
  'schadstoffsanierung-rhein-main',
  'asbestsanierung-rhein-main',
  'schimmelsanierung-rhein-main',
  // Emergency & Immediate Assistance
  'sanierungs-soforthilfe-rhein-main',
  'schnellsanierung-rhein-main',
  'bad-soforthilfe-rhein-main',
  'schnelle-badsanierung-rhein-main',
  // Commercial & Property Renovation
  'gewerbe-objektsanierung-rhein-main',
  'gewerbesanierung-rhein-main',
  'bueroumbau-rhein-main',
  'mieterausbau-rhein-main',
];

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

// ---- CSS scoping: prefix every rule with `scope` so styles can't leak out ----
function scopeSelector(sel, scope) {
  sel = sel.trim();
  if (!sel) return sel;
  if (sel.startsWith('@')) return sel; // keyframe stops (from/to/%), etc.
  if (sel === ':root' || sel === 'html' || sel === 'body' || sel === 'html body') return scope;
  // strip a leading html/body qualifier, then nest under the scope
  sel = sel.replace(/^html\s+/i, '').replace(/^body\s+/i, '').replace(/^html$/i, '').replace(/^body$/i, '');
  sel = sel.trim();
  if (!sel) return scope;
  return `${scope} ${sel}`;
}

function scopeBlock(css, scope) {
  let out = '';
  let i = 0;
  const n = css.length;
  while (i < n) {
    const brace = css.indexOf('{', i);
    if (brace === -1) { out += css.slice(i); break; }
    const prelude = css.slice(i, brace).trim();
    // find matching close brace
    let depth = 1;
    let j = brace + 1;
    while (j < n && depth > 0) {
      const c = css[j];
      if (c === '{') depth++;
      else if (c === '}') depth--;
      j++;
    }
    const body = css.slice(brace + 1, j - 1);
    if (/^@(media|supports|container)/i.test(prelude)) {
      out += `${prelude}{${scopeBlock(body, scope)}}`;
    } else if (/^@(keyframes|-webkit-keyframes|font-face|page|counter-style|property)/i.test(prelude)) {
      out += `${prelude}{${body}}`;
    } else if (prelude.startsWith('@')) {
      out += `${prelude}{${body}}`;
    } else {
      const scoped = prelude
        .split(',')
        .map((s) => scopeSelector(s, scope))
        .join(', ');
      out += `${scoped}{${body}}`;
    }
    i = j;
  }
  return out;
}

function scopeCss(css, scope) {
  css = css.replace(/\/\*[\s\S]*?\*\//g, ''); // drop comments
  // Drop @import (fonts are already loaded site-wide) and @charset. Matching the
  // full url(...) first avoids stopping at semicolons inside the URL (e.g. font weights).
  css = css.replace(/@import\s+url\((['"]?)[^)]*\1\)\s*[^;]*;/gi, '');
  css = css.replace(/@import\s+[^;]*;/gi, '');
  css = css.replace(/@charset[^;]*;/gi, '');
  return scopeBlock(css, scope);
}

// ---- URL rewriting inside the migrated content ----
// Resolve relative asset paths the same way a browser would from /{slug}.
function resolveAssetUrl(path, slug) {
  if (/^(https?:|data:|\/\/)/i.test(path)) return path;
  try {
    return new URL(path, `${ORIGIN}/${slug}`).href;
  } catch {
    return `${ORIGIN}/${String(path).replace(/^\//, '')}`;
  }
}

function absolutizeAssets(html, slug) {
  // <a href> -> keep root-relative so links stay on the NEW site
  html = html.replace(/href="https?:\/\/(?:www\.)?radex-objektmanagement\.de/gi, 'href="');
  // src / poster relative -> hotlink to the original domain (resolve ../ and ../../)
  html = html.replace(/\b(src|poster)="(?!https?:|data:|\/\/)([^"]+)"/gi, (m, attr, path) => `${attr}="${resolveAssetUrl(path, slug)}"`);
  // srcset relative candidates -> hotlink
  html = html.replace(/\bsrcset="([^"]+)"/gi, (m, val) => {
    const fixed = val
      .split(',')
      .map((part) => {
        const seg = part.trim();
        if (!seg) return seg;
        const [url, ...desc] = seg.split(/\s+/);
        if (/^(https?:|data:|\/\/)/.test(url)) return seg;
        return [resolveAssetUrl(url, slug), ...desc].join(' ');
      })
      .join(', ');
    return `srcset="${fixed}"`;
  });
  // url(...) inside inline styles -> hotlink
  html = html.replace(/url\((['"]?)(?!https?:|data:|\/\/|#)([^'")]+)\1\)/gi, (m, q, path) => `url(${q}${resolveAssetUrl(path, slug)}${q})`);
  return html;
}

// Remove a <div id="..."> and its full subtree (depth-aware for nested divs).
function removeDivById(html, id) {
  const re = new RegExp(`<div[^>]*\\bid="${id}"`, 'i');
  const m = re.exec(html);
  if (!m) return html;
  const start = m.index;
  const tagRe = /<\/?div\b[^>]*>/gi;
  tagRe.lastIndex = html.indexOf('>', start) + 1;
  let depth = 1;
  let t;
  while ((t = tagRe.exec(html)) !== null) {
    depth += t[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return html.slice(0, start) + html.slice(t.index + t[0].length);
  }
  return html.slice(0, start);
}

function extractContent(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : html;
  body = body.replace(/<nav\b[^>]*id="main-nav"[\s\S]*?<\/nav>/i, '');
  body = body.replace(/<div class="nav-mobile-overlay"[\s\S]*?<\/div>/i, '');
  body = body.replace(/<a[^>]*class="skip-to-content"[\s\S]*?<\/a>/i, '');
  body = body.replace(/<div id="main-content"[^>]*>\s*<\/div>/i, '');
  body = body.replace(/<footer\b[\s\S]*?<\/footer>/i, '');
  // Legacy global cookie-consent chrome (non-functional here; the new site has its own).
  body = removeDivById(body, 'cookie-banner');
  body = removeDivById(body, 'cookie-modal');
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<style[\s\S]*?<\/style>/gi, '');
  body = body.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  return body.trim();
}

async function fetchPage(slug) {
  const url = `${ORIGIN}/${slug}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (migration-bot)' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const html = await res.text();

  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1];
  const description = (html.match(/<meta\s+name="description"\s+content="([\s\S]*?)"/i) || [])[1];

  const inlineStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
    .map((m) => m[1])
    .join('\n');

  let content = extractContent(html);

  const label = (content.match(/<div class="section-label">([\s\S]*?)<\/div>/i) || [])[1];
  const h1 = (content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];

  content = absolutizeAssets(content, slug);

  return {
    slug,
    title: title ? decodeEntities(title).trim() : '',
    description: description ? decodeEntities(description).trim() : '',
    label: label ? stripTags(label) : '',
    h1: h1 ? stripTags(h1) : '',
    contentHtml: content,
    css: scopeCss(inlineStyles, '.radex-legacy'),
  };
}

async function main() {
  // shared global stylesheet, scoped once
  const cssRes = await fetch(`${ORIGIN}/style.css`, { headers: { 'User-Agent': 'Mozilla/5.0 (migration-bot)' } });
  const globalCss = scopeCss(await cssRes.text(), '.radex-legacy');

  const pages = {};
  for (const slug of SLUGS) {
    process.stdout.write(`Fetching ${slug} ... `);
    try {
      const page = await fetchPage(slug);
      pages[slug] = page;
      console.log(`ok (title="${page.title.slice(0, 40)}...", ${page.contentHtml.length} bytes)`);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }
  }

  // Shared, scoped global stylesheet -> real CSS file (imported once by the app)
  const cssPath = join(__dirname, '..', 'src', 'data', 'legacyServiceStyles.css');
  writeFileSync(
    cssPath,
    `/* AUTO-GENERATED by scripts/scrape-migrated-services.mjs. Do not edit by hand. */\n/* Original radex-objektmanagement.de global styles, scoped under .radex-legacy. */\n${globalCss}\n`,
    'utf8'
  );
  console.log(`Wrote ${cssPath}`);

  const out = { generatedAt: new Date().toISOString(), pages };
  const outPath = join(__dirname, '..', 'src', 'data', 'migratedServices.json');
  writeFileSync(outPath, JSON.stringify(out), 'utf8');
  console.log(`Wrote ${outPath} (${Object.keys(pages).length} pages)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
