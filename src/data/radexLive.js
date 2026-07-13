/**
 * Radex Live – CMS-ready content model.
 * Edit projects, videos and page copy here without touching component code.
 */

export const radexLivePageMeta = {
  title: 'Radex Live – Baustellen & Projekte im Rhein-Main-Gebiet',
  description:
    'Verfolgen Sie laufende und abgeschlossene Sanierungsprojekte von Radex im Rhein-Main-Gebiet: Baustellen-Updates, Videos, Vorher/Nachher und Projektberichte.',
  path: '/radex-live',
};

export const radexLiveIntro = {
  kicker: 'Radex Live',
  title: 'Schauen Sie uns über die Schulter.',
  subtitle:
    'Fotos zeigen Ergebnisse – Videos zeigen echte Arbeit. Hier finden Sie laufende Baustellen, abgeschlossene Referenzen, Fortschritts-Updates und Projektberichte aus dem gesamten Rhein-Main-Gebiet.',
};

/** Filter tabs – add or reorder categories in CMS */
export const radexLiveFilters = [
  { id: 'all', label: 'Alle Projekte' },
  { id: 'ongoing', label: 'Laufende Projekte' },
  { id: 'completed', label: 'Abgeschlossen' },
  { id: 'before-after', label: 'Vorher / Nachher' },
  { id: 'video', label: 'Videos' },
];

/**
 * Projects – editable list for CMS
 * status: 'ongoing' | 'completed'
 * type: 'project' | 'before-after' | 'video'
 */
export const radexLiveProjects = [
  {
    id: 'wohnung-offenbach',
    status: 'ongoing',
    type: 'project',
    badge: 'Live',
    title: 'Wohnungssanierung',
    location: 'Offenbach am Main',
    desc: 'Komplette Modernisierung einer Eigentumswohnung inklusive Bad, Böden und Elektro – dokumentiert auf der Baustelle.',
    image: '/img/home-sanierung.webp',
    cta: 'Projekt verfolgen',
  },
  {
    id: 'bad-frankfurt',
    status: 'ongoing',
    type: 'project',
    badge: 'Live',
    title: 'Komplettbadsanierung',
    location: 'Frankfurt am Main',
    desc: 'Bodengleiche Dusche, neue Sanitärinstallation und großformatige Fliesen – Schritt für Schritt auf Radex Live.',
    image: '/img/home-badsanierung.webp',
    cta: 'Projekt verfolgen',
  },
  {
    id: 'haus-darmstadt',
    status: 'completed',
    type: 'project',
    badge: null,
    title: 'Haussanierung',
    location: 'Darmstadt',
    desc: 'Ganzheitliche Modernisierung eines Einfamilienhauses – abgeschlossen und dokumentiert.',
    image: '/img/home-hero.webp',
    cta: 'Referenz ansehen',
  },
  {
    id: 'altbau-frankfurt',
    status: 'completed',
    type: 'before-after',
    badge: 'Vorher / Nachher',
    title: 'Altbausanierung',
    location: 'Frankfurt am Main',
    desc: 'Aus einem Badezimmer der 90er-Jahre entstand ein modernes, helles Wohlfühlbad.',
    image: '/img/Komplettbadsanierung.jpg',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    id: 'komplett-roedermark',
    status: 'completed',
    type: 'project',
    badge: null,
    title: 'Komplettsanierung',
    location: 'Rödermark',
    desc: 'Schlüsselfertige Kernsanierung mit Koordination aller Gewerke aus einer Hand.',
    image: '/img/leistungen-radex-live.webp',
    cta: 'Referenz ansehen',
  },
  {
    id: 'gewerbe-offenbach',
    status: 'ongoing',
    type: 'project',
    badge: 'Live',
    title: 'Gewerbesanierung',
    location: 'Offenbach am Main',
    desc: 'Modernisierung einer Gewerbefläche – Fortschritt und Bauphasen in Echtzeit.',
    image: '/img/leistungen-radex-live.webp',
    cta: 'Projekt verfolgen',
  },
];

/** Featured videos – YouTube IDs editable in CMS */
export const radexLiveVideos = [
  {
    id: 'site-walkthrough',
    youtubeId: '4A0f7A5mPLI',
    title: 'Baustellen-Einblick',
    location: 'Rhein-Main-Gebiet',
    desc: 'Live-Einblick in eine laufende Radex-Sanierung – echte Arbeit, echte Baustelle.',
  },
];

export const radexLiveHeroImage = '/img/leistungen-radex-live.webp';
