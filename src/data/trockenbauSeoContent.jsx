import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const trockenbauSeoIntro = (
  <>
    <p className={p}>
      Trockenbau gehört zu den flexibelsten Ausbauverfahren im modernen Innenausbau. Neue Raumaufteilungen,
      abgehängte Decken, Installationswände und individuelle Ausbaukonzepte lassen sich effizient und sauber
      umsetzen – sowohl in Wohngebäuden als auch in Gewerbeimmobilien.
    </p>
    <p className={p}>
      Radex plant und koordiniert Trockenbauprojekte von der ersten Idee bis zur fertigen Übergabe und stimmt
      sämtliche Arbeiten mit den weiteren Ausbaugewerken ab.
    </p>
  </>
);

export const trockenbauSeoSections = [
  {
    id: 'trockenbauwaende',
    title: 'Trockenbauwände',
    content: (
      <p className={p}>
        Trockenbauwände ermöglichen flexible Raumaufteilungen ohne aufwendige massive Bauarbeiten. Sie eignen sich
        für Wohnungen, Einfamilienhäuser, Büros und Gewerbeobjekte und können individuell an die Nutzung angepasst
        werden.
      </p>
    ),
  },
  {
    id: 'raumaufteilung',
    title: 'Neue Raumaufteilungen',
    content: (
      <p className={p}>
        Mit Trockenbau lassen sich zusätzliche Räume schaffen oder bestehende Bereiche neu strukturieren. Dadurch
        entstehen moderne Wohn- und Arbeitswelten mit einer optimalen Flächennutzung.
      </p>
    ),
  },
  {
    id: 'deckensysteme',
    title: 'Abgehängte Decken',
    content: (
      <p className={p}>
        Abgehängte Deckensysteme schaffen Platz für Beleuchtung, Lüftung, Lautsprecher oder weitere technische
        Installationen. Gleichzeitig sorgen sie für eine ruhige und hochwertige Raumoptik.
      </p>
    ),
  },
  {
    id: 'installationswaende',
    title: 'Installationswände',
    content: (
      <p className={p}>
        Installationswände bieten Raum für Leitungen, Sanitärinstallationen und Elektrotechnik. Sie erleichtern
        Modernisierungen und ermöglichen eine saubere Integration der Haustechnik.
      </p>
    ),
  },
  {
    id: 'dachgeschoss',
    title: 'Dachgeschossausbau',
    content: (
      <p className={p}>
        Trockenbau eignet sich besonders für den Ausbau von Dachgeschossen. Neue Wände, Decken und Dämmkonstruktionen
        schaffen zusätzlichen Wohnraum und verbessern die Nutzbarkeit vorhandener Flächen.
      </p>
    ),
  },
  {
    id: 'schallschutz',
    title: 'Schallschutz',
    content: (
      <p className={p}>
        Geeignete Trockenbausysteme können die Schallübertragung zwischen Räumen reduzieren. Die Ausführung wird auf
        die Nutzung und die Anforderungen des jeweiligen Projekts abgestimmt.
      </p>
    ),
  },
  {
    id: 'brandschutz',
    title: 'Brandschutz',
    content: (
      <p className={p}>
        Für Gebäude mit entsprechenden Anforderungen können projektbezogene Trockenbausysteme vorgesehen werden.
        Planung und Ausführung orientieren sich an den jeweiligen technischen Vorgaben und dem Bauvorhaben.
      </p>
    ),
  },
  {
    id: 'spachtelarbeiten',
    title: 'Spachtelarbeiten',
    content: (
      <p className={p}>
        Sorgfältige Spachtel- und Schleifarbeiten schaffen die Grundlage für hochwertige Oberflächen sowie nachfolgende
        Maler- oder Tapezierarbeiten.
      </p>
    ),
  },
  {
    id: 'beleuchtung',
    title: 'Beleuchtung integrieren',
    content: (
      <p className={p}>
        Deckenspots, indirekte Beleuchtung oder Lichtvouten lassen sich bereits während der Trockenbauplanung
        berücksichtigen und harmonisch in das Raumkonzept integrieren.
      </p>
    ),
  },
  {
    id: 'gewerbe',
    title: 'Trockenbau für Gewerbeimmobilien',
    content: (
      <p className={p}>
        Ob Büro, Praxis, Ladenfläche oder Produktionsbereich – Trockenbau ermöglicht flexible Raumkonzepte, die an
        betriebliche Anforderungen angepasst werden können.
      </p>
    ),
  },
  {
    id: 'wohnhaus',
    title: 'Trockenbau im Wohnhaus',
    content: (
      <p className={p}>
        Vom einzelnen Zimmer bis zum kompletten Hausumbau unterstützt Trockenbau moderne Wohnkonzepte mit kurzen
        Bauzeiten und hoher Gestaltungsfreiheit.
      </p>
    ),
  },
  {
    id: 'schluesselfertig',
    title: 'Schlüsselfertige Trockenbauprojekte',
    content: (
      <p className={p}>
        Radex koordiniert alle Arbeitsschritte – von der Planung über die Montage bis zur Vorbereitung für Maler-,
        Boden- und weitere Ausbauarbeiten. Dadurch entstehen durchgängige Abläufe und hochwertige Ergebnisse.
      </p>
    ),
  },
];

export const trockenbauSeoLinkSections = [
  {
    id: 'hub',
    title: 'Innenausbau & Umbau Rhein-Main',
    to: '/innenausbau-umbau-rhein-main',
    content: (
      <p className={p}>
        Überblick über alle Leistungen rund um Innenausbau, Umbau und Modernisierung im Rhein-Main-Gebiet.
      </p>
    ),
  },
  {
    id: 'wohnung-link',
    title: 'Innenausbau Wohnung Rhein-Main',
    to: '/innenausbau-wohnung-rhein-main',
    content: (
      <p className={p}>
        Professioneller Innenausbau für Eigentumswohnungen, Mietwohnungen und Kapitalanlagen.
      </p>
    ),
  },
  {
    id: 'haus-link',
    title: 'Innenausbau Haus Rhein-Main',
    to: '/innenausbau-haus-rhein-main',
    content: (
      <p className={p}>
        Individuelle Modernisierung und hochwertiger Innenausbau für Einfamilienhäuser und Bestandsimmobilien.
      </p>
    ),
  },
  {
    id: 'wand-entfernen-link',
    title: 'Wand entfernen Rhein-Main',
    to: '/wand-entfernen-rhein-main',
    content: (
      <p className={p}>Fachgerechter Rückbau von Innenwänden für offene Wohn- und Arbeitsbereiche.</p>
    ),
  },
  {
    id: 'gewerbe-link',
    title: 'Gewerbe- & Objektsanierung Rhein-Main',
    to: '/gewerbe-objektsanierung-rhein-main',
    content: (
      <p className={p}>
        Komplette Modernisierung und Ausbau von Büro-, Gewerbe- und Bestandsimmobilien.
      </p>
    ),
  },
];
