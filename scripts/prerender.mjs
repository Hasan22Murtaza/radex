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
  '/komplettsanierung-rhein-main': {
    title: 'Komplettsanierung Rhein-Main | Haus & Wohnung mit Radex',
    description:
      'Komplettsanierung im Rhein-Main-Gebiet für Haus, Wohnung und Gewerbe. Radex koordiniert alle Gewerke – mit einem Ansprechpartner von der Planung bis zur Übergabe.',
  },
  '/generalunternehmer-rhein-main': { title: 'Generalunternehmer Rhein-Main | Sanierung aus einer Hand | Radex', description: 'Generalunternehmer im Rhein-Main-Gebiet: ein Vertragspartner, ein Festpreis, ein Bauleiter für Ihr gesamtes Sanierungsprojekt. 5 Jahre Gewährleistung. Jetzt anfragen!' },
  '/generalunternehmer-sanierung-rhein-main': {
    title: 'Generalunternehmer & Sanierung Rhein-Main | Radex Objektmanagement',
    description:
      'Generalunternehmer für Sanierungen im Rhein-Main-Gebiet. Komplettsanierung, Kernsanierung, Teilsanierung sowie Bauleitung und Projektsteuerung – alles aus einer Hand mit Radex Objektmanagement.',
  },
  '/energetische-sanierung-rhein-main': {
    title: 'Energetische Sanierung Rhein-Main | Energie sparen & Immobilie modernisieren | Radex',
    description:
      'Energetische Sanierung im Rhein-Main-Gebiet. Gebäude modernisieren, Energiekosten senken und den Wohnkomfort nachhaltig verbessern.',
  },
  '/gewerbesanierung-rhein-main': { title: 'Gewerbesanierung im Rhein-Main-Gebiet | Gewerbe modernisieren | Radex', description: 'Professionelle Gewerbesanierung für Praxen, Ladenlokale, Restaurants und Gewerbeflächen im Rhein-Main-Gebiet. Planung, Koordination und Ausführung aus einer Hand.' },
  '/mieterausbau-rhein-main': { title: 'Mieterausbau Rhein-Main | Individuelle Gewerbeflächen schlüsselfertig ausbauen', description: 'Mieterausbau im Rhein-Main-Gebiet für Büros, Praxen, Ladenlokale und Gewerbeflächen. Individuelle Ausbaukonzepte und schlüsselfertige Umsetzung.' },
  '/bueroumbau-rhein-main': { title: 'Büroumbau Rhein-Main | Moderne Büros professionell umbauen', description: 'Büroumbau im Rhein-Main-Gebiet für Unternehmen jeder Größe. Moderne Arbeitswelten, neue Raumkonzepte und professionelle Umsetzung aus einer Hand.' },
  '/gewerbe-objektsanierung-rhein-main': { title: 'Gewerbe- & Objektsanierung Rhein-Main | Büroumbau, Gewerbesanierung & Mieterausbau', description: 'Gewerbe- & Objektsanierung im Rhein-Main-Gebiet für Büros, Gewerbeimmobilien, Praxen und Ladenlokale. Planung, Umbau, Sanierung und Modernisierung aus einer Hand.' },
  '/schadstoffsanierung-rhein-main': { title: 'Schadstoffsanierung Rhein-Main | Fachgerechte Gebäudeschadstoffe sanieren', description: 'Professionelle Schadstoffsanierung im Rhein-Main-Gebiet. Koordination von Untersuchung, Sanierung, Rückbau und Wiederherstellung für Gewerbe- und Wohnimmobilien.' },
  '/schimmelsanierung-rhein-main': { title: 'Schimmelsanierung Rhein-Main | Schimmel fachgerecht beseitigen', description: 'Professionelle Schimmelsanierung im Rhein-Main-Gebiet. Ursachenanalyse, Feuchtigkeitsschäden beseitigen, Schimmel entfernen und Räume fachgerecht wiederherstellen.' },
  '/asbestsanierung-rhein-main': {
    title: 'Asbestsanierung Rhein-Main | Fachgerechte Entfernung asbesthaltiger Baustoffe',
    description:
      'Professionelle Asbestsanierung im Rhein-Main-Gebiet. Koordination von Untersuchung, Rückbau, Entsorgung und Wiederherstellung mit qualifizierten Fachpartnern.',
  },
  '/heizung-sanitaer-rhein-main': { title: 'Heizung & Sanitär Rhein-Main | Wärmepumpe vom SHK-Meister | Radex', description: 'Heizung & Sanitär im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Wärmepumpe, Heizungstausch, Fußbodenheizung & Sanitärinstallation inkl. Förderung. Jetzt Beratung sichern!' },
  '/elektroinstallation-rhein-main': {
    title: 'Elektroinstallation Rhein-Main | Moderne Elektroinstallationen | Radex',
    description:
      'Professionelle Elektroinstallationen für Neubau, Umbau und Sanierung im Rhein-Main-Gebiet. Moderne Stromversorgung, strukturierte Planung und zuverlässige Projektkoordination.',
  },
  '/bauleitung-projektsteuerung-rhein-main': {
    title: 'Bauleitung & Projektsteuerung Rhein-Main | Sanierungsprojekte professionell koordinieren | Radex',
    description:
      'Bauleitung und Projektsteuerung im Rhein-Main-Gebiet. Radex koordiniert Sanierungsprojekte, organisiert alle Gewerke und begleitet Ihr Bauvorhaben von der Planung bis zur Übergabe.',
  },
  '/innenausbau-umbau-rhein-main': { title: 'Innenausbau & Umbau Rhein-Main | Radex Objektmanagement', description: 'Professioneller Innenausbau und Umbau im Rhein-Main-Gebiet. Trockenbau, Grundrissänderungen, Wohnungs- und Hausumbau sowie komplette Innenausbauprojekte aus einer Hand.' },
  '/raeume-umbauen-rhein-main': { title: 'Räume umbauen im Rhein-Main-Gebiet | Grundriss modernisieren | Radex', description: 'Räume professionell umbauen und Wohnflächen optimal nutzen. Grundrisse modernisieren, Wohnkomfort steigern und Umbauten fachgerecht umsetzen – alles aus einer Hand im Rhein-Main-Gebiet.' },
  '/notfall-soforthilfe-rhein-main': { title: 'Notfall & Soforthilfe Rhein-Main | Schnelle Sanierung | Radex', description: 'Schnelle Hilfe bei dringenden Sanierungen im Rhein-Main-Gebiet. Ob Wasserschaden, beschädigtes Bad oder kurzfristige Sanierungsmaßnahmen – Radex koordiniert die komplette Umsetzung.' },
  '/sanierungs-soforthilfe-rhein-main': { title: 'Sanierungs-Soforthilfe im Rhein-Main-Gebiet | Schnell zum Sanierungsstart | Radex', description: 'Kurzfristige Beratung, schnelle Besichtigung und professionelle Projektplanung für Sanierungen im gesamten Rhein-Main-Gebiet. Jetzt kostenlose Ersteinschätzung sichern.' },
  '/schnellsanierung-rhein-main': { title: 'Schnellsanierung im Rhein-Main-Gebiet | Schnell modernisieren | Radex', description: 'Wohnung oder Haus schnell sanieren. Professionelle Planung, koordinierte Ausführung und kurze Bauzeiten im gesamten Rhein-Main-Gebiet.' },
  '/wand-entfernen-rhein-main': { title: 'Wand entfernen Rhein-Main | Grundrisse professionell verändern', description: 'Wände professionell entfernen im Rhein-Main-Gebiet. Neue Raumkonzepte für Wohnungen, Häuser und Gewerbeimmobilien – fachgerecht geplant und umgesetzt.' },
  '/trockenbau-rhein-main': { title: 'Trockenbau Rhein-Main | Moderne Trockenbaulösungen von Radex', description: 'Professioneller Trockenbau im Rhein-Main-Gebiet. Trockenbauwände, Decken, Schallschutz, Brandschutz und individuelle Raumlösungen für Wohn- und Gewerbeimmobilien.' },
  '/innenausbau-wohnung-rhein-main': { title: 'Innenausbau Wohnung Rhein-Main | Wohnungsmodernisierung vom Profi', description: 'Professioneller Innenausbau für Wohnungen im Rhein-Main-Gebiet. Moderne Raumkonzepte, Trockenbau, Bodenbeläge, Malerarbeiten und komplette Wohnungsmodernisierung aus einer Hand.' },
  '/schimmel-asbest-sanierung-rhein-main': { title: 'Schimmel- & Asbestsanierung Rhein-Main | Schadstoffe sicher beseitigen', description: 'Schimmel-, Asbest- und Schadstoffsanierung im Rhein-Main-Gebiet. Radex koordiniert Analyse, Abschottung, fachgerechte Sanierung und Wiederherstellung.' },
  '/teilsanierung-rhein-main': { title: 'Teilsanierung Rhein-Main | Einzelne Bereiche professionell sanieren | Radex', description: 'Teilsanierung im Rhein-Main-Gebiet für Häuser, Wohnungen und Gewerbeimmobilien. Radex modernisiert gezielt einzelne Bereiche Ihrer Immobilie – professionell geplant und fachgerecht umgesetzt.' },
  '/kernsanierung-rhein-main': { title: 'Kernsanierung Rhein-Main | Haus & Wohnung grundlegend sanieren | Radex', description: 'Kernsanierung im Rhein-Main-Gebiet für Häuser, Wohnungen und Gewerbeimmobilien. Radex erneuert Bestandsimmobilien mit einem festen Ansprechpartner und koordinierter Projektabwicklung.' },
  '/sicherungskasten-erneuern-rhein-main': { title: 'Sicherungskasten erneuern Rhein-Main | Moderne Unterverteilung | Radex', description: 'Sicherungskasten erneuern im Rhein-Main-Gebiet. Moderne Unterverteilungen mit zeitgemäßer Schutztechnik für Wohn- und Gewerbeimmobilien.' },
  '/altbau-elektrik-erneuern-rhein-main': {
    title: 'Altbau Elektrik erneuern Rhein-Main | Elektroanlage modernisieren | Radex',
    description:
      'Altbau Elektrik erneuern im Rhein-Main-Gebiet. Moderne Elektroanlagen für mehr Sicherheit, Komfort und Zukunftssicherheit in Bestandsimmobilien.',
  },
  '/sanierung-foerderung-rhein-main': { title: 'Sanierung Förderung Rhein-Main | KfW, BAFA & Fördermittel | Radex', description: 'Fördermöglichkeiten für energetische Sanierungen im Rhein-Main-Gebiet. Wir unterstützen Sie bei der Planung förderfähiger Sanierungsprojekte und koordinieren alle beteiligten Gewerke.' },
  '/energieeffizienz-rhein-main': { title: 'Energieeffizienz Rhein-Main | Energieverbrauch dauerhaft senken | Radex', description: 'Mehr Energieeffizienz für Wohn- und Gewerbeimmobilien im Rhein-Main-Gebiet. Moderne Gebäudetechnik, intelligente Steuerung und nachhaltige Optimierung für dauerhaft niedrigere Energiekosten.' },
  '/elektrotechnik-gebaeudetechnik': {
    title: 'Elektrotechnik & Gebäudetechnik | Elektroarbeiten im Rhein-Main | Radex',
    description:
      'Elektrotechnik und Gebäudetechnik im Rhein-Main-Gebiet. Finden Sie die passende Leistung – von der Elektroinstallation über die Altbau-Elektrik bis zum neuen Sicherungskasten.',
  },
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
    Object.entries(migratedServices.pages)
      .filter(
        ([slug]) =>
          slug !== 'teilsanierung-rhein-main' &&
          slug !== 'kernsanierung-rhein-main' &&
          slug !== 'komplettsanierung-rhein-main' &&
          slug !== 'sicherungskasten-erneuern-rhein-main' &&
          slug !== 'sanierung-foerderung-rhein-main' &&
          slug !== 'energieeffizienz-rhein-main' &&
          slug !== 'mieterausbau-rhein-main' &&
          slug !== 'bueroumbau-rhein-main' &&
          slug !== 'innenausbau-wohnung-rhein-main' &&
          slug !== 'energetische-sanierung-rhein-main' &&
          slug !== 'elektroinstallation-rhein-main' &&
          slug !== 'altbau-elektrik-erneuern-rhein-main' &&
          slug !== 'bauleitung-projektsteuerung-rhein-main',
      )
      .map(([slug, page]) => [
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
