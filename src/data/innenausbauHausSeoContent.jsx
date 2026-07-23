import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const innenausbauHausSeoIntro = (
  <>
    <p className={p}>
      Der Innenausbau eines Hauses bietet zahlreiche Möglichkeiten, Wohnkomfort, Funktionalität und den langfristigen
      Wert einer Immobilie zu steigern. Ob einzelne Räume modernisiert oder komplette Wohnbereiche neu gestaltet werden
      – eine sorgfältige Planung und die Koordination aller Gewerke bilden die Grundlage für ein erfolgreiches
      Bauprojekt.
    </p>
    <p className={p}>
      Radex begleitet Eigentümer vom ersten Konzept über den Innenausbau bis zur schlüsselfertigen Fertigstellung und
      sorgt für einen strukturierten Bauablauf aus einer Hand.
    </p>
  </>
);

export const innenausbauHausSeoSections = [
  {
    id: 'haus-modernisieren',
    title: 'Haus modernisieren',
    content: (
      <p className={p}>
        Ein professioneller Innenausbau verbessert die Nutzung bestehender Wohnflächen und passt das Haus an aktuelle
        Wohnbedürfnisse an. Moderne Materialien und durchdachte Raumkonzepte schaffen langfristige Wohnqualität.
      </p>
    ),
  },
  {
    id: 'grundriss',
    title: 'Grundriss verändern',
    content: (
      <>
        <p className={p}>
          Viele ältere Häuser verfügen über kleinteilige Raumaufteilungen. Durch neue Wandstellungen oder den Rückbau
          einzelner Innenwände können großzügigere Wohnbereiche entstehen.
        </p>
        <p className={p}>
          Bei tragenden Bauteilen erfolgen Planung und Umsetzung ausschließlich nach fachlicher statischer Prüfung sowie
          – sofern erforderlich – mit den notwendigen Genehmigungen.{' '}
          <Link to="/wand-entfernen-rhein-main">Wand entfernen Rhein-Main</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'offene-wohnkonzepte',
    title: 'Offene Wohnkonzepte',
    content: (
      <p className={p}>
        Offene Wohn-, Ess- und Küchenbereiche verbessern Lichtverhältnisse, Kommunikation und die flexible Nutzung der
        vorhandenen Wohnfläche.
      </p>
    ),
  },
  {
    id: 'trockenbau',
    title: 'Trockenbau',
    content: (
      <p className={p}>
        Trockenbau ermöglicht neue Raumaufteilungen, Installationswände, Dachgeschossausbauten sowie moderne Decken- und
        Wandkonstruktionen mit kurzen Bauzeiten.{' '}
        <Link to="/trockenbau-rhein-main">Trockenbau Rhein-Main</Link>.
      </p>
    ),
  },
  {
    id: 'deckenbau',
    title: 'Deckensysteme',
    content: (
      <p className={p}>
        Abgehängte Decken schaffen Platz für Beleuchtung, Lüftung, Lautsprecher oder weitere technische Installationen
        und sorgen gleichzeitig für eine moderne Raumgestaltung.
      </p>
    ),
  },
  {
    id: 'bodenbelaege',
    title: 'Bodenbeläge',
    content: (
      <p className={p}>
        Neue Bodenbeläge verleihen Wohnräumen eine hochwertige Optik und erhöhen den Wohnkomfort. Die Auswahl richtet
        sich nach Nutzung, Untergrund und gewünschtem Design.
      </p>
    ),
  },
  {
    id: 'malerarbeiten',
    title: 'Malerarbeiten',
    content: (
      <p className={p}>
        Spachtelarbeiten, Anstriche und hochwertige Oberflächen bilden den sichtbaren Abschluss eines modernen
        Innenausbaus.
      </p>
    ),
  },
  {
    id: 'tueren',
    title: 'Türen & Zargen',
    content: (
      <p className={p}>
        Neue Innentüren und Zargen werden harmonisch in das neue Raumkonzept integriert. Auch Türöffnungen können im
        Rahmen eines Umbaus angepasst werden.
      </p>
    ),
  },
  {
    id: 'bad',
    title: 'Badezimmer modernisieren',
    content: (
      <p className={p}>
        Ein modernes Badezimmer verbindet Funktionalität, Komfort und Design. Im Rahmen eines Innenausbaus können
        Grundriss, Ausstattung und Oberflächen vollständig neu gestaltet werden.
      </p>
    ),
  },
  {
    id: 'kueche',
    title: 'Küche modernisieren',
    content: (
      <p className={p}>
        Die Küche bildet häufig den Mittelpunkt des Hauses. Bereits während der Planung werden Anschlüsse, Beleuchtung
        und Arbeitsabläufe optimal aufeinander abgestimmt.
      </p>
    ),
  },
  {
    id: 'bestand',
    title: 'Innenausbau im Bestand',
    content: (
      <p className={p}>
        Bei älteren Häusern müssen bestehende Konstruktionen, Installationen und bauliche Besonderheiten berücksichtigt
        werden. Eine sorgfältige Bestandsaufnahme schafft die Grundlage für eine sichere und wirtschaftliche Umsetzung.
      </p>
    ),
  },
  {
    id: 'schluesselfertig',
    title: 'Schlüsselfertiger Innenausbau',
    content: (
      <p className={p}>
        Von der Planung über Trockenbau, Bodenarbeiten und Malerleistungen bis zur Endmontage übernimmt Radex die
        Koordination sämtlicher Ausbauarbeiten und übergibt Ihr Haus bezugsfertig.
      </p>
    ),
  },
];

export const innenausbauHausSeoLinkSections = [
  {
    id: 'hub',
    title: 'Innenausbau & Umbau Rhein-Main',
    to: '/innenausbau-umbau-rhein-main',
    content: (
      <p className={p}>
        Die Hubseite bietet einen umfassenden Überblick über Innenausbau-, Umbau- und Modernisierungsleistungen.
      </p>
    ),
  },
  {
    id: 'wohnung-link',
    title: 'Innenausbau Wohnung Rhein-Main',
    to: '/innenausbau-wohnung-rhein-main',
    content: (
      <p className={p}>
        Professioneller Innenausbau und hochwertige Modernisierung von Eigentums- und Mietwohnungen.
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
      <p className={p}>
        Fachgerechter Rückbau von Innenwänden für offene Wohnkonzepte und moderne Grundrisse.
      </p>
    ),
  },
  {
    id: 'gewerbe-link',
    title: 'Gewerbe- & Objektsanierung Rhein-Main',
    to: '/gewerbe-objektsanierung-rhein-main',
    content: (
      <p className={p}>
        Komplette Modernisierung und Sanierung von Gewerbe- und Bestandsimmobilien aus einer Hand.
      </p>
    ),
  },
];
