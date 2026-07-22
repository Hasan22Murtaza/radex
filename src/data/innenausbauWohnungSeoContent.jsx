import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const innenausbauWohnungSeoIntro = (
  <>
    <p className={p}>
      Ein professioneller Innenausbau verwandelt bestehende Wohnungen in moderne, funktionale und wertbeständige
      Lebensräume. Ob Eigentumswohnung, Mietwohnung oder Kapitalanlage – durch eine durchdachte Planung und die
      Koordination aller Gewerke entstehen hochwertige Ergebnisse aus einer Hand.
    </p>
    <p className={p}>
      Radex begleitet Wohnungsmodernisierungen von der ersten Idee bis zur schlüsselfertigen Fertigstellung und sorgt
      für einen reibungslosen Ablauf aller Ausbauarbeiten.
    </p>
  </>
);

export const innenausbauWohnungSeoSections = [
  {
    id: 'wohnungsmodernisierung',
    title: 'Wohnungsmodernisierung',
    content: (
      <>
        <h4 className="font-semibold text-gray-800 mb-2">Moderne Wohnungen nachhaltig aufwerten</h4>
        <p className={p}>
          Ein hochwertiger Innenausbau verbessert Wohnkomfort, Energieeffizienz und Funktionalität. Gleichzeitig kann
          eine Modernisierung die Attraktivität der Immobilie steigern und sie besser auf zukünftige Anforderungen
          vorbereiten.
        </p>
      </>
    ),
  },
  {
    id: 'grundriss',
    title: 'Grundriss verändern',
    content: (
      <>
        <h4 className="font-semibold text-gray-800 mb-2">Grundrisse optimieren</h4>
        <p className={p}>
          Viele ältere Wohnungen verfügen über kleine, voneinander getrennte Räume. Durch neue Raumkonzepte entstehen
          offenere Wohnbereiche und eine bessere Nutzung der vorhandenen Fläche.{' '}
          <Link to="/wand-entfernen-rhein-main">Wand entfernen Rhein-Main</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'trockenbau',
    title: 'Trockenbau',
    content: (
      <>
        <h4 className="font-semibold text-gray-800 mb-2">Trockenbau im Wohnungsausbau</h4>
        <p className={p}>
          Trockenbau ermöglicht flexible Raumaufteilungen, Installationswände sowie moderne Deckenkonstruktionen mit
          vergleichsweise kurzen Bauzeiten.{' '}
          <Link to="/trockenbau-rhein-main">Trockenbau Rhein-Main</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'decken',
    title: 'Deckenlösungen',
    content: (
      <>
        <h4 className="font-semibold text-gray-800 mb-2">Moderne Deckensysteme</h4>
        <p className={p}>
          Abgehängte Decken schaffen Platz für Beleuchtung, Lüftung oder Akustiklösungen und sorgen gleichzeitig für
          eine hochwertige Raumgestaltung.
        </p>
      </>
    ),
  },
  {
    id: 'bodenbelaege',
    title: 'Bodenbeläge',
    content: (
      <p className={p}>
        Vinyl, Parkett, Laminat oder Fliesen werden passend zum Wohnstil, zur Nutzung und zum vorhandenen Untergrund
        ausgewählt und fachgerecht verlegt.
      </p>
    ),
  },
  {
    id: 'malerarbeiten',
    title: 'Malerarbeiten',
    content: (
      <>
        <h4 className="font-semibold text-gray-800 mb-2">Hochwertige Oberflächen</h4>
        <p className={p}>
          Spachtelarbeiten, Anstriche und weitere Oberflächenarbeiten verleihen modernisierten Wohnungen ein
          einheitliches und hochwertiges Erscheinungsbild.
        </p>
      </>
    ),
  },
  {
    id: 'tueren',
    title: 'Türen & Zargen',
    content: (
      <>
        <h4 className="font-semibold text-gray-800 mb-2">Türen und Zargen</h4>
        <p className={p}>
          Neue Innentüren verbessern sowohl die Optik als auch den Wohnkomfort. Im Zuge einer Modernisierung können
          Türpositionen und Türsysteme an das neue Raumkonzept angepasst werden.
        </p>
      </>
    ),
  },
  {
    id: 'bad',
    title: 'Badezimmer modernisieren',
    content: (
      <p className={p}>
        Im Rahmen eines Innenausbaus lassen sich Bäder funktional und gestalterisch an aktuelle Anforderungen anpassen
        – von neuen Oberflächen bis zur vollständigen Neugestaltung.
      </p>
    ),
  },
  {
    id: 'kueche',
    title: 'Küche modernisieren',
    content: (
      <p className={p}>
        Eine moderne Küche verbindet ergonomische Arbeitsabläufe mit hochwertigem Design. Bereits bei der Planung
        werden Anschlüsse, Beleuchtung und Stauraum berücksichtigt.
      </p>
    ),
  },
  {
    id: 'beleuchtung',
    title: 'Beleuchtung',
    content: (
      <>
        <h4 className="font-semibold text-gray-800 mb-2">Beleuchtungskonzepte</h4>
        <p className={p}>
          Durchdachte Lichtlösungen mit indirekter Beleuchtung, Deckenspots oder Pendelleuchten schaffen eine angenehme
          Atmosphäre und unterstützen die Raumwirkung.
        </p>
      </>
    ),
  },
  {
    id: 'kapitalanlage',
    title: 'Kapitalanlagen modernisieren',
    content: (
      <>
        <h4 className="font-semibold text-gray-800 mb-2">Wohnungen als Kapitalanlage modernisieren</h4>
        <p className={p}>
          Modernisierte Wohnungen lassen sich häufig attraktiver vermieten oder verkaufen. Hochwertige Materialien und
          zeitlose Gestaltungskonzepte tragen zu einer nachhaltigen Wertentwicklung der Immobilie bei.
        </p>
      </>
    ),
  },
  {
    id: 'schluesselfertig',
    title: 'Schlüsselfertiger Innenausbau',
    content: (
      <p className={p}>
        Von der Planung über Trockenbau, Bodenarbeiten und Malerarbeiten bis zur Endreinigung koordiniert Radex
        sämtliche Ausbauleistungen und übergibt die Wohnung bezugsfertig.
      </p>
    ),
  },
];

export const innenausbauWohnungSeoLinkSections = [
  {
    id: 'hub',
    title: 'Innenausbau & Umbau Rhein-Main',
    to: '/innenausbau-umbau-rhein-main',
    content: (
      <p className={p}>
        Die Hubseite bietet einen Überblick über sämtliche Leistungen rund um Innenausbau, Trockenbau und
        Umbauprojekte.
      </p>
    ),
  },
  {
    id: 'haus-link',
    title: 'Innenausbau Haus Rhein-Main',
    to: '/innenausbau-haus-rhein-main',
    content: (
      <p className={p}>
        Professionelle Modernisierung und hochwertiger Innenausbau für Einfamilienhäuser und Bestandsimmobilien.
      </p>
    ),
  },
  {
    id: 'trockenbau-link',
    title: 'Trockenbau Rhein-Main',
    to: '/trockenbau-rhein-main',
    content: (
      <p className={p}>
        Flexible Trockenbaulösungen für neue Raumaufteilungen, Decken- und Wandsysteme.
      </p>
    ),
  },
  {
    id: 'wand-entfernen-link',
    title: 'Wand entfernen Rhein-Main',
    to: '/wand-entfernen-rhein-main',
    content: (
      <p className={p}>Neue offene Wohnkonzepte durch den fachgerechten Rückbau von Innenwänden.</p>
    ),
  },
];
