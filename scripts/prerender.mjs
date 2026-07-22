// Post-build prerender: render each route to static HTML so the full page
// content (incl. the SEO accordion text) is present in the served HTML for
// crawlers, instead of an empty <div id="root"> that only fills via JS.
//
// Run after `vite build` (client) and `vite build --ssr` (server entry).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { cityDataMap } from '../src/data/cities.js';
import { citySeoContent } from '../src/data/citySeoContent.js';
import { listCityServiceRoutes } from '../src/data/cityServiceRoutes.js';
import { leistungenCategories } from '../src/data/navigation.js';
import { ratgeberArticles, ratgeberCategories } from '../src/data/ratgeber.js';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const migratedServices = require('../src/data/migratedServices.json');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const SITE = 'https://www.radex-objektmanagement.de';

const cityNames = Object.fromEntries(
  Object.entries(cityDataMap).map(([id, city]) => [city.path, city.name])
);

const cityMeta = Object.fromEntries(
  Object.entries(cityNames).map(([p, name]) => [
    p,
    {
      title: `Sanierung ${name} | Bad, Wohnung & Haus modernisieren | Radex`,
      description: `Sanierung & Badsanierung in ${name} aus einer Hand: Wohnungs-, Haus- & Altbausanierung, Heizung, Elektro & mehr vom SHK-Meisterbetrieb. Festpreis. Jetzt Beratung sichern!`
    }
  ])
);

const cleanCityMeta = Object.fromEntries(
  Object.entries(cityDataMap).flatMap(([id, city]) => {
    const hubPath = `/${id}`;
    const hub = [
      hubPath,
      {
        title: `Sanierung ${city.name} | Bad, Wohnung & Haus modernisieren | Radex`,
        description: `Sanierung & Badsanierung in ${city.name} aus einer Hand: Wohnungs-, Haus- & Altbausanierung, Heizung, Elektro & mehr vom SHK-Meisterbetrieb. Festpreis. Jetzt Beratung sichern!`,
      },
    ];
    const services = listCityServiceRoutes(id, citySeoContent[id]).map((service) => [
      service.path,
      {
        title: `${service.titleSuffix} ${city.name} | Radex`,
        description: `${service.titleSuffix} in ${city.name} mit Radex: Planung, Umsetzung und Beratung aus einer Hand.`,
      },
    ]);
    return [hub, ...services];
  })
);

const routes = {
  '/': { title: 'Radex Objektmanagement | Sanierung & Badsanierung im Rhein-Main-Gebiet', description: 'Sanierung, Badsanierung & Modernisierung im Rhein-Main-Gebiet aus einer Hand. Zugelassener SHK-Meisterbetrieb & Generalunternehmer aus Rödermark. Jetzt kostenlose Beratung sichern!' },
  '/sanierung-rhein-main': { title: 'Sanierung im Rhein-Main-Gebiet | Haus, Wohnung & Altbau sanieren | Radex', description: 'Wohnung, Haus oder Altbau sanieren? Radex begleitet Ihr Sanierungsprojekt im Rhein-Main-Gebiet – von der ersten Beratung bis zur fertigen Übergabe. Jetzt kostenlos beraten lassen.' },
  '/sanierung-ablauf-rhein-main': { title: 'Sanierung Ablauf im Rhein-Main-Gebiet | Planung bis Fertigstellung | Radex', description: 'Erfahren Sie Schritt für Schritt, wie eine Sanierung mit Radex abläuft – von der ersten Beratung über die Planung bis zur schlüsselfertigen Übergabe.' },
  '/sanierungskosten-rhein-main': { title: 'Sanierungskosten im Rhein-Main-Gebiet | Kosten einer Sanierung berechnen | Radex', description: 'Sanierungskosten für Wohnung, Haus und Altbau einfach einschätzen. Nutzen Sie den Radex Sanierungskosten-Rechner und erhalten Sie eine erste Orientierung für Ihr Projekt.' },
  '/leistungen': { title: 'Leistungen für Sanierung, Badsanierung & Modernisierung | Radex Objektmanagement', description: 'Entdecken Sie alle Leistungen von Radex Objektmanagement im Rhein-Main-Gebiet. Generalunternehmer, Badsanierung, Heizung & Sanitär, Elektrotechnik, Innenausbau, energetische Sanierung, Schimmel- und Asbestsanierung – alles aus einer Hand.' },
  '/einsatzgebiete-rhein-main': { title: 'Einsatzgebiete | Sanierung im Rhein-Main-Gebiet | Radex', description: 'Radex saniert in über 60 Städten im Rhein-Main-Gebiet: Frankfurt, Offenbach, Darmstadt, Wiesbaden, Mainz, Hanau, Aschaffenburg, Rödermark u. v. m. Jetzt vor Ort beraten lassen!' },
  '/badsanierung-rhein-main': { title: 'Badsanierung Rhein-Main | Bad sanieren mit Radex', description: 'Badsanierung im Rhein-Main-Gebiet: Radex plant und koordiniert Badmodernisierung, Sanitär, Dusche, Gäste-WC und barrierearme Bäder aus einer Hand.' },
  '/badsanierung/badezimmer-sanieren': { title: 'Komplettbadsanierung Rhein-Main | Bad komplett sanieren | Radex', description: 'Komplettbadsanierung im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Rückbau, Sanitär, Elektro, Abdichtung, Fliesen und Montage aus einer Hand – mit einem festen Ansprechpartner bis zur fertigen Übergabe.' },
  '/dusche-statt-badewanne': { title: 'Dusche statt Badewanne | Umbau im Rhein-Main-Gebiet | Radex', description: 'Badewanne durch Dusche ersetzen im Rhein-Main-Gebiet: bodengleich, barrierearm und fachgerecht abgedichtet vom SHK-Meisterbetrieb Radex.' },
  '/badewanne-austauschen': { title: 'Badewanne austauschen Rhein-Main | Wanne erneuern', description: 'Badewanne austauschen im Rhein-Main-Gebiet: Radex erneuert Wannen, prüft Anschlüsse und koordiniert den sauberen Badumbau.' },
  '/badmodernisierung': { title: 'Badmodernisierung Rhein-Main | Badezimmer modernisieren', description: 'Badmodernisierung im Rhein-Main-Gebiet: Radex modernisiert Badezimmer mit neuer Dusche, Sanitärtechnik, Beleuchtung und hochwertiger Ausstattung.' },
  '/badrenovierung': { title: 'Badrenovierung Rhein-Main | Bad renovieren lassen', description: 'Badrenovierung im Rhein-Main-Gebiet: Radex erneuert Badezimmer, Oberflächen, Sanitärbereiche und Ausstattung sauber und koordiniert.' },
  '/barrierefreies-bad': { title: 'Barrierefreies Bad | Sanierung im Rhein-Main-Gebiet | Radex', description: 'Barrierefreies Bad im Rhein-Main-Gebiet: bodengleiche Dusche, Haltegriffe und durchdachte Bewegungsflächen vom SHK-Meisterbetrieb Radex.' },
  '/barrierefreies-bad-kosten': { title: 'Barrierefreies Bad Kosten | Bad altersgerecht umbauen', description: 'Barrierefreies Bad Kosten: Radex erklärt Preisfaktoren für bodengleiche Dusche, Bewegungsflächen, Ausstattung, Sicherheit und Badumbau.' },
  '/gaeste-wc': { title: 'Gäste-WC sanieren im Rhein-Main-Gebiet | Radex', description: 'Gäste-WC sanieren im Rhein-Main-Gebiet: Radex modernisiert kleine WCs mit platzsparenden Lösungen, modernem Design und hochwertiger Ausstattung – aus einer Hand zum Festpreis.' },
  '/kleines-bad-sanieren': { title: 'Kleines Bad sanieren im Rhein-Main-Gebiet | Radex', description: 'Kleines Bad sanieren im Rhein-Main-Gebiet: Radex schafft mit intelligenter Planung, platzsparenden Lösungen und hellem Design mehr Platz und Komfort auf wenigen Quadratmetern – vom SHK-Meisterbetrieb zum Festpreis.' },
  '/badplanung': { title: 'Badplanung Rhein-Main | Neues Bad richtig planen', description: 'Badplanung im Rhein-Main-Gebiet: Radex plant Badezimmer mit Grundriss, Dusche, Sanitärtechnik, Licht, Materialien und klarer Umsetzung.' },
  '/ablauf-badsanierung': { title: 'Ablauf Badsanierung | Schritt für Schritt zum neuen Bad', description: 'Wer eine Badsanierung plant, stellt sich früh eine ganz konkrete Frage: Was passiert eigentlich wann – und in welcher Reihenfolge? Radex erklärt alle Schritte – von Beratung und Planung bis Abnahme und Übergabe.' },
  '/badsanierung-dauer': { title: 'Badsanierung Dauer Rhein-Main | Ablauf & Zeitplan', description: 'Wie lange dauert eine Badsanierung? Radex erklärt Ablauf, Bauzeit, Planung, Rückbau, Sanitär, Elektro, Trockenbau und Fertigstellung.' },
  '/badsanierung-festpreis': { title: 'Badsanierung Festpreis Rhein-Main | Klar planen', description: 'Badsanierung Festpreis im Rhein-Main-Gebiet: Radex erklärt, wann ein Festpreis sinnvoll ist und welche Planung dafür nötig ist.' },
  '/ratgeber': { title: 'Ratgeber für Sanierung, Badsanierung & Modernisierung | Radex', description: 'Hilfreiche Informationen rund um Badsanierung, Sanierung, Heizung, Schimmel, Asbest, Energie und Modernisierung im Rhein-Main-Gebiet.' },
  '/sanierung/wohnungssanierung': { title: 'Wohnungssanierung Rhein-Main | Festpreis & aus einer Hand | Radex', description: 'Wohnungssanierung im Rhein-Main-Gebiet: Teilsanierung, Kernsanierung & Modernisierung vom Generalunternehmer. Termingerecht, staubarm, zum Festpreis. Jetzt anfragen!' },
  '/sanierung/haussanierung': { title: 'Haussanierung Rhein-Main | Modernisierung aus einer Hand | Radex', description: 'Haussanierung im Rhein-Main-Gebiet: energetische Modernisierung, Grundrissoptimierung, Dach & Fassade vom Generalunternehmer. Festpreis & feste Termine. Jetzt anfragen!' },
  '/sanierung/altbausanierung': { title: 'Altbausanierung Rhein-Main | Denkmalgerecht modernisieren | Radex', description: 'Altbausanierung im Rhein-Main-Gebiet: historischen Charme erhalten, moderne Technik integrieren. Denkmalgerecht, fachgerecht, aus einer Hand. Jetzt Beratung sichern!' },
  '/komplettsanierung-rhein-main': { title: 'Komplettsanierung Rhein-Main | Kernsanierung zum Festpreis | Radex', description: 'Komplettsanierung & Kernsanierung im Rhein-Main-Gebiet vom Generalunternehmer: ein Ansprechpartner, ein Festpreis, ein Zeitplan. Jetzt kostenlose Beratung sichern!' },
  '/generalunternehmer-rhein-main': { title: 'Generalunternehmer Rhein-Main | Sanierung aus einer Hand | Radex', description: 'Generalunternehmer im Rhein-Main-Gebiet: ein Vertragspartner, ein Festpreis, ein Bauleiter für Ihr gesamtes Sanierungsprojekt. 5 Jahre Gewährleistung. Jetzt anfragen!' },
  '/energetische-sanierung-rhein-main': { title: 'Energetische Sanierung Rhein-Main | Förderung & Wärmepumpe | Radex', description: 'Energetische Sanierung im Rhein-Main-Gebiet: Dämmung, Fenster, Wärmepumpe & Förderung (BAFA/KfW) aus einer Hand. Heizkosten senken, Wert steigern. Jetzt Beratung sichern!' },
  '/gewerbesanierung-rhein-main': { title: 'Gewerbesanierung im Rhein-Main-Gebiet | Gewerbe modernisieren | Radex', description: 'Professionelle Gewerbesanierung für Praxen, Ladenlokale, Restaurants und Gewerbeflächen im Rhein-Main-Gebiet. Planung, Koordination und Ausführung aus einer Hand.' },
  '/mieterausbau-rhein-main': { title: 'Mieterausbau im Rhein-Main-Gebiet | Gewerbe modernisieren | Radex', description: 'Mieterausbau und Gewerbeflächen-Vorbereitung im Rhein-Main-Gebiet: termingerecht, sauber und aus einer Hand vom SHK-Meisterbetrieb Radex.' },
  '/gewerbe-objektsanierung-rhein-main': { title: 'Gewerbesanierung Rhein-Main | Büro, Praxis & Ladenbau | Radex', description: 'Gewerbe- & Objektsanierung im Rhein-Main-Gebiet: Büroumbau, Praxis, Gastronomie, Einzelhandel & Mieterausbau mit minimaler Betriebsunterbrechung. Jetzt Projekt besprechen!' },
  '/schadstoffsanierung-rhein-main': { title: 'Schadstoffsanierung im Rhein-Main-Gebiet | Fachgerechte Gebäudesanierung | Radex', description: 'Schadstoffsanierung im Rhein-Main-Gebiet. Gefahrstoffe erkennen, Sanierungen professionell planen und Gebäude sicher modernisieren – alles aus einer Hand.' },
  '/schimmelsanierung-rhein-main': { title: 'Schimmel- & Schadstoffsanierung Rhein-Main | Zertifiziert | Radex', description: 'Schimmel- & Schadstoffsanierung im Rhein-Main-Gebiet: Ursachenanalyse, Bautrocknung & sichere Beseitigung durch zertifizierte Experten (TRGS 519). Jetzt Befundung anfragen!', canonical: '/schadstoffsanierung-rhein-main' },
  '/asbestsanierung-rhein-main': { title: 'Asbestsanierung Rhein-Main | TRGS 519 zertifiziert | Radex', description: 'Asbestsanierung im Rhein-Main-Gebiet: sichere Entfernung & Entsorgung von Asbest und Gefahrstoffen nach TRGS 519, vollständig dokumentiert. Jetzt Beratung anfragen!' },
  '/heizung-sanitaer-rhein-main': { title: 'Heizung & Sanitär Rhein-Main | Wärmepumpe vom SHK-Meister | Radex', description: 'Heizung & Sanitär im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Wärmepumpe, Heizungstausch, Fußbodenheizung & Sanitärinstallation inkl. Förderung. Jetzt Beratung sichern!' },
  '/elektroinstallation-rhein-main': { title: 'Elektrotechnik Rhein-Main | Elektroinstallation & Smart Home | Radex', description: 'Elektrotechnik im Rhein-Main-Gebiet: Elektroinstallation, Zählerschrank, Wallbox, PV-Vorbereitung & Smart Home nach VDE. Sicher & zukunftsfähig. Jetzt Beratung sichern!' },
  '/innenausbau-umbau-rhein-main': { title: 'Innenausbau & Umbau Rhein-Main | Trockenbau & Böden | Radex', description: 'Innenausbau & Umbau im Rhein-Main-Gebiet: Trockenbau, Böden, Malerarbeiten, Wanddurchbrüche & Raumgestaltung aus einer Hand. Sauber & fachgerecht. Jetzt anfragen!' },
  '/raeume-umbauen-rhein-main': { title: 'Räume umbauen im Rhein-Main-Gebiet | Grundriss modernisieren | Radex', description: 'Räume professionell umbauen und Wohnflächen optimal nutzen. Grundrisse modernisieren, Wohnkomfort steigern und Umbauten fachgerecht umsetzen – alles aus einer Hand im Rhein-Main-Gebiet.' },
  '/sanierungs-soforthilfe-rhein-main': { title: 'Sanierungs-Soforthilfe im Rhein-Main-Gebiet | Schnell zum Sanierungsstart | Radex', description: 'Kurzfristige Beratung, schnelle Besichtigung und professionelle Projektplanung für Sanierungen im gesamten Rhein-Main-Gebiet. Jetzt kostenlose Ersteinschätzung sichern.' },
  '/schnellsanierung-rhein-main': { title: 'Schnellsanierung im Rhein-Main-Gebiet | Schnell modernisieren | Radex', description: 'Wohnung oder Haus schnell sanieren. Professionelle Planung, koordinierte Ausführung und kurze Bauzeiten im gesamten Rhein-Main-Gebiet.' },
  '/wand-entfernen-rhein-main': { title: 'Wand entfernen Rhein-Main | Grundrisse professionell verändern', description: 'Wände professionell entfernen im Rhein-Main-Gebiet. Neue Raumkonzepte für Wohnungen, Häuser und Gewerbeimmobilien – fachgerecht geplant und umgesetzt.' },
  '/trockenbau-rhein-main': { title: 'Trockenbau Rhein-Main | Moderne Trockenbaulösungen von Radex', description: 'Professioneller Trockenbau im Rhein-Main-Gebiet. Trockenbauwände, Decken, Schallschutz, Brandschutz und individuelle Raumlösungen für Wohn- und Gewerbeimmobilien.' },
  '/sicherungskasten-erneuern-rhein-main': { title: 'Sicherungskasten erneuern im Rhein-Main-Gebiet | Radex', description: 'Sicherungskasten erneuern vom Fachbetrieb. Moderne Unterverteilungen, FI-Schutzschalter und Zählerschränke für mehr Sicherheit im gesamten Rhein-Main-Gebiet.' },
  '/schnelle-badsanierung-rhein-main': { title: 'Schnelle Badsanierung im Rhein-Main-Gebiet | Modernes Bad | Radex', description: 'Komplettbadsanierung mit kurzer Bauzeit. Professionelle Planung, koordinierte Ausführung und moderne Badezimmer im gesamten Rhein-Main-Gebiet.' },
  '/waermepumpe-rhein-main': { title: 'Wärmepumpe im Rhein-Main-Gebiet | Beratung, Planung & Einbau | Radex', description: 'Wärmepumpe vom SHK-Meisterbetrieb. Beratung, Planung, Einbau und Fördermöglichkeiten für private Eigentümer im gesamten Rhein-Main-Gebiet. Jetzt kostenlos beraten lassen.' },
  '/ueber-uns': { title: 'Über Radex | SHK-Meisterbetrieb & Generalunternehmer im Rhein-Main-Gebiet', description: 'Lernen Sie Radex kennen. Über 40 Jahre Erfahrung als SHK-meistergeführter Fachbetrieb und Generalunternehmer für Badsanierung, Sanierung und Modernisierung im Rhein-Main-Gebiet.' },
  '/radex-qualitaetsversprechen': { title: 'Das Radex Qualitätsversprechen | Qualität & Gewährleistung | Radex', description: 'Das Radex Qualitätsversprechen: klare Angebote, fachgerechte Ausführung, ein persönlicher Ansprechpartner und nachvollziehbare Qualitätskontrollen – von der Beratung bis zur gemeinsamen Übergabe.' },
  '/karriere': { title: 'Karriere bei Radex | Jobs im Handwerk im Rhein-Main-Gebiet', description: 'Jobs bei Radex im Rhein-Main-Gebiet: Elektriker, Bauhelfer, Bauleiter & Allrounder (m/w/d). Sicherer Arbeitsplatz, faire Bezahlung, starkes Team. Jetzt unkompliziert bewerben!' },
  '/sanierungskosten-rechner': { title: 'Sanierungskosten Rechner | Bad, Wohnung & Altbau | Radex', description: 'Sanierungskosten Rechner von Radex: Badsanierung Kosten, Wohnungssanierung Kosten und Altbausanierung Kosten kostenlos einschätzen.' },
  '/badsanierung-kosten': { title: 'Badsanierung Kosten Rhein-Main | Preise & Faktoren', description: 'Badsanierung Kosten im Rhein-Main-Gebiet: Radex erklärt Preisfaktoren für Badgröße, Sanitär, Dusche, Fliesen, Elektro, Planung und Ausstattung.' },
  '/wohnungssanierung-kosten': { title: 'Wohnungssanierung Kosten | Sanierungskosten Rechner | Radex', description: 'Wohnungssanierung Kosten online einschätzen: Radex Sanierungskosten Rechner mit Basis, Komfort und Premium für das Rhein-Main-Gebiet.' },
  '/altbausanierung-kosten': { title: 'Altbausanierung Kosten | Sanierungskosten Rechner | Radex', description: 'Altbausanierung Kosten online berechnen: kostenlose Orientierung für Sanierung, Kernsanierung und Modernisierung im Rhein-Main-Gebiet.' },
  '/impressum': { title: 'Impressum | Radex Objektmanagement GmbH', description: 'Impressum der Radex Objektmanagement GmbH, Odenwaldstraße 61, 63322 Rödermark.' },
  '/datenschutz': { title: 'Datenschutz | Radex Objektmanagement GmbH', description: 'Datenschutzerklärung der Radex Objektmanagement GmbH gemäß DSGVO.' },
  ...Object.fromEntries(
    Object.entries(leistungenCategories).map(([id, category]) => [
      category.seo.path,
      { title: category.seo.title, description: category.seo.description },
    ])
  ),
  ...Object.fromEntries(
    ratgeberArticles.map((article) => [
      article.seo.path,
      { title: article.seo.title, description: article.seo.description },
    ])
  ),
  ...Object.fromEntries(
    ratgeberCategories.map((cat) => [
      `/ratgeber/kategorie/${cat.id}`,
      {
        title: `${cat.title} | Ratgeber | Radex`,
        description: `${cat.desc} – Fachartikel und Tipps im Radex Ratgeber für das Rhein-Main-Gebiet.`,
      },
    ])
  ),
  ...cityMeta,
  ...cleanCityMeta,
  ...Object.fromEntries(
    Object.entries(migratedServices.pages).map(([slug, page]) => [
      `/${slug}`,
      { title: page.title, description: page.description },
    ])
  ),
};

function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

// Replace the title/description/canonical/OG in the template head per route.
function applyHead(html, route, meta) {
  const canonicalPath = meta.canonical || route;
  const canonical = `${SITE}${canonicalPath === '/' ? '/' : canonicalPath}`;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`);
  html = html.replace(
    /<meta name="description" content="[\s\S]*?" \/>/,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`
  );
  html = html.replace(
    /<link rel="canonical" href="[\s\S]*?" \/>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[\s\S]*?" \/>/,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[\s\S]*?" \/>/,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[\s\S]*?" \/>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  return html;
}

async function main() {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  const { render } = await import(pathToFileURL(path.join(distDir, 'server', 'entry-server.js')).href);

  let count = 0;
  for (const [route, meta] of Object.entries(routes)) {
    let appHtml = '';
    try {
      appHtml = render(route);
    } catch (err) {
      console.error(`  ✗ render failed for ${route}:`, err.message);
      continue;
    }

    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    html = applyHead(html, route, meta);

    // Write to dist/<route>/index.html so static hosting serves it directly.
    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route, 'index.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
    count++;
  }
  console.log(`Prerendered ${count} routes to static HTML.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
