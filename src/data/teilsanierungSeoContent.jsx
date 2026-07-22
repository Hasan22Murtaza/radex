import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const teilsanierungSeoIntro = (
  <>
    <p className={p}>
      Nicht jede Immobilie benötigt eine vollständige Modernisierung. Häufig besteht der Wunsch, einzelne Räume oder
      bestimmte Gebäudebereiche gezielt zu erneuern. Eine Teilsanierung ermöglicht es, genau dort zu investieren, wo
      Modernisierungsbedarf besteht – ohne die gesamte Immobilie umzubauen.
    </p>
    <p className={p}>
      Welche Maßnahmen sinnvoll sind, hängt vom Zustand des Gebäudes, Ihren Zielen und dem geplanten Nutzungsumfang ab.
      Durch eine strukturierte Planung lassen sich einzelne Sanierungsmaßnahmen effizient umsetzen und bei Bedarf später
      erweitern.
    </p>
  </>
);

export const teilsanierungSeoSections = [
  {
    id: 'badezimmer-teilsanieren',
    title: 'Badezimmer teilsanieren',
    content: (
      <>
        <p className={p}>
          Ein Badezimmer gehört zu den häufigsten Bereichen einer Teilsanierung. Moderne Sanitäranlagen, neue Oberflächen
          und eine funktionale Raumgestaltung verbessern Komfort und Alltag gleichermaßen.
        </p>
        <p className={p}>
          Je nach Umfang können einzelne Bereiche modernisiert oder das gesamte Bad erneuert werden.{' '}
          <Link to="/badsanierung-rhein-main">Mehr zur Badsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'kueche-modernisieren',
    title: 'Küche modernisieren',
    content: (
      <p className={p}>
        Vor dem Einbau einer neuen Küche werden häufig Anschlüsse, Wandflächen oder Bodenbeläge erneuert. Eine
        abgestimmte Planung sorgt dafür, dass alle vorbereitenden Arbeiten rechtzeitig abgeschlossen sind.
      </p>
    ),
  },
  {
    id: 'wohnraeume-renovieren',
    title: 'Wohnräume renovieren',
    content: (
      <p className={p}>
        Wohn-, Schlaf- oder Arbeitszimmer lassen sich unabhängig von einer vollständigen Sanierung modernisieren. Neue
        Böden, Wandoberflächen oder Decken schaffen eine zeitgemäße Wohnatmosphäre.
      </p>
    ),
  },
  {
    id: 'eigentumswohnung-modernisieren',
    title: 'Eigentumswohnung modernisieren',
    content: (
      <p className={p}>
        Bei Eigentumswohnungen konzentriert sich eine Teilsanierung häufig auf einzelne Räume oder technische Bereiche.
        So kann die Wohnung Schritt für Schritt modernisiert werden, ohne umfassende Eingriffe in alle Bereiche
        vorzunehmen.{' '}
        <Link to="/wohnungsrenovierung-rhein-main">Mehr zur Wohnungsrenovierung</Link>.
      </p>
    ),
  },
  {
    id: 'vermietete-immobilien',
    title: 'Vermietete Immobilien sanieren',
    content: (
      <p className={p}>
        Nach einem Mieterwechsel bietet sich häufig die Gelegenheit, einzelne Bereiche der Wohnung oder des Hauses zu
        modernisieren. Dadurch bleibt die Immobilie langfristig attraktiv und gut vermietbar.
      </p>
    ),
  },
  {
    id: 'gewerke-kombinieren',
    title: 'Einzelne Gewerke kombinieren',
    content: (
      <p className={p}>
        Viele Projekte verbinden mehrere Leistungen miteinander – beispielsweise Trockenbau, Sanitärarbeiten und neue
        Bodenbeläge. Eine zentrale Koordination sorgt dafür, dass alle Arbeiten sinnvoll aufeinander abgestimmt werden.{' '}
        <Link to="/trockenbau-rhein-main">Trockenbau</Link>,{' '}
        <Link to="/sanitaerinstallation-rhein-main">Sanitärinstallation</Link> und{' '}
        <Link to="/innenausbau-umbau-rhein-main">Innenausbau</Link>.
      </p>
    ),
  },
  {
    id: 'schrittweise-modernisierung',
    title: 'Schrittweise Modernisierung',
    content: (
      <p className={p}>
        Nicht jede Sanierung muss in einem Bauabschnitt erfolgen. Viele Eigentümer entscheiden sich dafür, ihre
        Immobilie über mehrere Jahre hinweg schrittweise zu modernisieren. Eine langfristige Planung erleichtert die
        spätere Umsetzung weiterer Maßnahmen.
      </p>
    ),
  },
  {
    id: 'gewerbe-teilsanierung',
    title: 'Teilsanierung von Gewerbeimmobilien',
    content: (
      <p className={p}>
        Auch Büros, Praxen oder Ladenflächen werden häufig abschnittsweise modernisiert. So können einzelne Bereiche
        erneuert werden, ohne das gesamte Objekt gleichzeitig umzubauen.{' '}
        <Link to="/gewerbesanierung-rhein-main">Mehr zur Gewerbesanierung</Link>.
      </p>
    ),
  },
  {
    id: 'werterhalt-teilsanierung',
    title: 'Werterhalt durch Teilmodernisierung',
    content: (
      <p className={p}>
        Bereits einzelne Modernisierungsmaßnahmen können dazu beitragen, den Zustand einer Immobilie langfristig zu
        verbessern. Durch die gezielte Erneuerung stark beanspruchter Bereiche bleibt die Immobilie funktional und
        attraktiv.
      </p>
    ),
  },
  {
    id: 'wann-teilsanierung',
    title: 'Wann reicht eine Teilsanierung aus?',
    content: (
      <>
        <p className={p}>
          Eine Teilsanierung ist häufig die passende Lösung, wenn nur einzelne Räume oder Gebäudebereiche modernisiert
          werden sollen und die übrige Bausubstanz sowie die technische Ausstattung weiterhin in einem guten Zustand
          sind.
        </p>
        <p className={p}>
          Erst nach einer Besichtigung lässt sich beurteilen, ob eine Teilsanierung ausreicht oder eine umfassendere
          Modernisierung wirtschaftlicher ist.{' '}
          <Link to="/komplettsanierung-rhein-main">Komplettsanierung</Link> und{' '}
          <Link to="/kernsanierung-rhein-main">Kernsanierung</Link>.
        </p>
      </>
    ),
  },
];

export const teilsanierungSeoTocItems = teilsanierungSeoSections.map((section) => ({
  id: section.id,
  title: section.title,
}));
