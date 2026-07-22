import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const notice =
  'Hinweis: Eingriffe in tragende Bauteile erfordern eine fachliche statische Bewertung sowie gegebenenfalls erforderliche Genehmigungen. Tragende Wände dürfen nicht ohne entsprechende Planung entfernt oder verändert werden.';

export const wandEntfernenSeoIntro = (
  <>
    <p className={p}>
      Offene Wohnbereiche und moderne Grundrisse zählen zu den häufigsten Modernisierungsmaßnahmen im Bestand. Durch den
      gezielten Rückbau geeigneter Innenwände entstehen großzügige Räume mit mehr Tageslicht und einer besseren Nutzung
      der vorhandenen Wohnfläche.
    </p>
    <p className={p}>
      Nicht jede Wand darf jedoch entfernt werden. Vor jedem Eingriff wird geprüft, ob es sich um eine tragende oder
      nichttragende Konstruktion handelt. Bei tragenden Bauteilen erfolgen Planung und Umsetzung ausschließlich nach
      fachlicher statischer Prüfung sowie unter Berücksichtigung eventuell erforderlicher Genehmigungen.
    </p>
  </>
);

export const wandEntfernenSeoSections = [
  {
    id: 'nichttragende-waende',
    title: 'Nichttragende Wände entfernen',
    content: (
      <>
        <p className={p}>
          Nichttragende Innenwände können häufig entfernt werden, um Räume zusammenzuführen oder eine offenere
          Raumgestaltung zu ermöglichen. Vor Beginn der Arbeiten wird die Konstruktion sorgfältig geprüft.
        </p>
        <p className={p}>
          Auch bei nichttragenden Wänden können Leitungen, Schallschutzanforderungen oder baurechtliche Vorgaben eine
          Rolle spielen. Radex koordiniert die Bestandsaufnahme und die anschließenden Ausbauarbeiten aus einer Hand.
        </p>
      </>
    ),
  },
  {
    id: 'tragende-waende',
    title: 'Tragende Wände',
    content: (
      <>
        <p className={p}>
          Tragende Wände übernehmen statische Aufgaben innerhalb des Gebäudes und dürfen nicht ohne fachliche Planung
          verändert oder entfernt werden. Erforderliche statische Nachweise sowie gegebenenfalls notwendige Genehmigungen
          müssen vor Beginn der Arbeiten vorliegen.
        </p>
        <p className={p}>
          <strong>{notice}</strong>
        </p>
      </>
    ),
  },
  {
    id: 'wanddurchbruch',
    title: 'Wanddurchbruch herstellen',
    content: (
      <p className={p}>
        Ein Wanddurchbruch verbindet bestehende Räume und schafft offene Wohn- oder Arbeitsbereiche. Planung, Ausführung
        und erforderliche Sicherungsmaßnahmen richten sich nach den baulichen Gegebenheiten – insbesondere dann, wenn
        tragende Bauteile betroffen sein könnten.
      </p>
    ),
  },
  {
    id: 'wohnkueche',
    title: 'Offene Wohnküche',
    content: (
      <p className={p}>
        Durch den Rückbau geeigneter Innenwände entstehen großzügige Wohn- und Essbereiche mit fließenden Übergängen
        zwischen Küche und Wohnraum. Küchenwände enthalten häufig Leitungen und technische Anschlüsse, die vorab
        geprüft werden müssen.
      </p>
    ),
  },
  {
    id: 'grundriss',
    title: 'Grundriss modernisieren',
    content: (
      <p className={p}>
        Ältere Grundrisse lassen sich an heutige Wohn- und Arbeitsanforderungen anpassen. Ziel ist eine bessere Nutzung
        der vorhandenen Fläche sowie ein modernes Raumgefühl – immer auf Basis einer sorgfältigen Bestandsanalyse.
      </p>
    ),
  },
  {
    id: 'haus',
    title: 'Grundriss im Einfamilienhaus',
    content: (
      <p className={p}>
        Im Haus lassen sich Wohnbereiche häufig neu strukturieren, um großzügigere Familien- und Aufenthaltsräume zu
        schaffen. Die vorhandene Gebäudestruktur wird dabei vollständig berücksichtigt. Mehr zum{' '}
        <Link to="/innenausbau-haus-rhein-main">Innenausbau Haus Rhein-Main</Link>.
      </p>
    ),
  },
  {
    id: 'wohnung',
    title: 'Grundriss in der Wohnung',
    content: (
      <p className={p}>
        Auch Eigentumswohnungen profitieren von intelligenten Grundrissänderungen. Vor Beginn der Arbeiten werden die
        baulichen Voraussetzungen sorgfältig geprüft. Mehr zum{' '}
        <Link to="/innenausbau-wohnung-rhein-main">Innenausbau Wohnung Rhein-Main</Link>.
      </p>
    ),
  },
  {
    id: 'trockenbau',
    title: 'Trockenbau nach dem Rückbau',
    content: (
      <p className={p}>
        Nach einem Wandrückbau können neue Raumstrukturen durch Trockenbau ergänzt werden. So entstehen moderne
        Raumkonzepte mit hoher Flexibilität.{' '}
        <Link to="/trockenbau-rhein-main">Trockenbau Rhein-Main</Link>
      </p>
    ),
  },
  {
    id: 'oberflaechen',
    title: 'Oberflächen wiederherstellen',
    content: (
      <p className={p}>
        Nach Abschluss der Rückbauarbeiten werden Wände, Decken und Anschlüsse fachgerecht vorbereitet. Spachtel-, Putz-
        und Malerarbeiten sorgen für ein einheitliches Erscheinungsbild.
      </p>
    ),
  },
  {
    id: 'boden',
    title: 'Bodenanschlüsse anpassen',
    content: (
      <p className={p}>
        Nach einer Grundrissänderung werden bestehende Bodenflächen angepasst oder erneuert, sodass ein harmonisches
        Gesamtbild entsteht.
      </p>
    ),
  },
  {
    id: 'gewerbe',
    title: 'Grundrissänderungen im Gewerbe',
    content: (
      <p className={p}>
        Offene Bürolandschaften, Besprechungsräume oder moderne Verkaufsflächen entstehen durch eine professionelle
        Neuorganisation vorhandener Flächen. Mehr zur{' '}
        <Link to="/gewerbe-objektsanierung-rhein-main">Gewerbe- & Objektsanierung Rhein-Main</Link>.
      </p>
    ),
  },
  {
    id: 'schluesselfertig',
    title: 'Schlüsselfertige Umsetzung',
    content: (
      <p className={p}>
        Radex übernimmt die Koordination aller Arbeiten – vom Rückbau über Trockenbau und Oberflächenarbeiten bis zur
        fertigen Übergabe. Dadurch entstehen effiziente Bauabläufe und hochwertige Ergebnisse aus einer Hand.
      </p>
    ),
  },
];

export const wandEntfernenSeoLinkSections = [
  {
    id: 'hub',
    title: 'Innenausbau & Umbau Rhein-Main',
    to: '/innenausbau-umbau-rhein-main',
    content: (
      <p className={p}>
        Der zentrale Überblick über alle Leistungen rund um Innenausbau, Umbau und Modernisierung im Rhein-Main-Gebiet.
      </p>
    ),
  },
  {
    id: 'trockenbau-link',
    title: 'Trockenbau Rhein-Main',
    to: '/trockenbau-rhein-main',
    content: (
      <p className={p}>
        Flexible Trockenbaulösungen für neue Raumaufteilungen, Decken- und Wandsysteme nach dem Rückbau.
      </p>
    ),
  },
  {
    id: 'wohnung-link',
    title: 'Innenausbau Wohnung Rhein-Main',
    to: '/innenausbau-wohnung-rhein-main',
    content: (
      <p className={p}>Professioneller Innenausbau und hochwertige Modernisierung von Wohnungen im Bestand.</p>
    ),
  },
  {
    id: 'haus-link',
    title: 'Innenausbau Haus Rhein-Main',
    to: '/innenausbau-haus-rhein-main',
    content: (
      <p className={p}>
        Komplette Modernisierung und Innenausbau für Einfamilienhäuser und Bestandsimmobilien.
      </p>
    ),
  },
  {
    id: 'gewerbe-link',
    title: 'Gewerbe- & Objektsanierung Rhein-Main',
    to: '/gewerbe-objektsanierung-rhein-main',
    content: (
      <p className={p}>
        Professionelle Umbau- und Sanierungslösungen für Gewerbe- und Bestandsimmobilien.
      </p>
    ),
  },
];
