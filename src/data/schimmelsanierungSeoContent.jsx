import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const schimmelsanierungSeoIntro = (
  <>
    <p className={p}>
      Eine professionelle Schimmelsanierung beginnt mit der Ursachenanalyse. Sichtbarer Schimmel ist häufig nur die Folge
      eines Feuchtigkeitsproblems, das ohne gezielte Maßnahmen erneut zu Schäden führen kann. Deshalb werden
      Feuchtigkeitseintritt, Wasserschäden und bauliche Gegebenheiten vor Beginn der Sanierung sorgfältig bewertet.
    </p>
    <p className={p}>
      Radex koordiniert die einzelnen Arbeitsschritte – von der Bestandsaufnahme über Trocknung und Schimmelbeseitigung
      bis zur vollständigen Wiederherstellung der betroffenen Bereiche.
    </p>
  </>
);

export const schimmelsanierungSeoSections = [
  {
    id: 'schimmelanalyse',
    title: 'Schimmelanalyse',
    content: (
      <p className={p}>
        Wir analysieren den sichtbaren Schimmelbefall, dokumentieren die betroffenen Bereiche und koordinieren bei Bedarf
        weiterführende Untersuchungen, um die Ursache der Feuchtigkeit einzugrenzen. Fotos allein reichen für eine
        belastbare Einschätzung nicht aus – eine fachliche Bestandsaufnahme vor Ort ist entscheidend.
      </p>
    ),
  },
  {
    id: 'schimmel-erkennen',
    title: 'Schimmelbefall richtig einschätzen',
    content: (
      <>
        <p className={p}>
          Nicht jede Verfärbung an einer Wand ist automatisch Schimmel. Ebenso lässt sich das tatsächliche Ausmaß eines
          Befalls häufig nicht allein anhand der sichtbaren Oberfläche beurteilen. Eine fachgerechte Bestandsaufnahme
          hilft dabei, den Schaden realistisch einzuordnen und die nächsten Schritte zu planen.
        </p>
        <p className={p}>
          Mehr zur{' '}
          <Link to="/leistungen/schimmel-asbest">Schimmel- &amp; Asbestsanierung Rhein-Main</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'ursachenanalyse',
    title: 'Ursachenanalyse',
    content: (
      <p className={p}>
        Eine nachhaltige Schimmelsanierung beginnt mit der Suche nach der Ursache. Typische Auslöser sind Rohrbrüche,
        Undichtigkeiten, Wärmebrücken, Kondenswasser oder unzureichend getrocknete Bauteile. Erst wenn die
        Feuchtigkeitsquelle beseitigt wurde, kann die eigentliche Sanierung langfristig erfolgreich sein.
      </p>
    ),
  },
  {
    id: 'wasserschaden',
    title: 'Schimmel nach Wasserschaden',
    content: (
      <p className={p}>
        Nach Leitungswasserschäden oder Überschwemmungen kann Feuchtigkeit tief in Wände, Decken und Böden eindringen.
        Vor der Wiederherstellung müssen die betroffenen Bereiche ausreichend getrocknet und beschädigte Materialien
        gegebenenfalls entfernt werden.
      </p>
    ),
  },
  {
    id: 'keller',
    title: 'Schimmel im Keller',
    content: (
      <p className={p}>
        Untergeschosse sind häufig von eindringender Feuchtigkeit oder dauerhaft hoher Luftfeuchtigkeit betroffen. Eine
        sorgfältige Analyse der Baukonstruktion und der Feuchtigkeitsursachen bildet die Grundlage für eine nachhaltige
        Sanierung.
      </p>
    ),
  },
  {
    id: 'badezimmer',
    title: 'Schimmel im Badezimmer',
    content: (
      <p className={p}>
        Hohe Luftfeuchtigkeit und unzureichende Belüftung können Schimmel in Badezimmern begünstigen. Je nach
        Schadensbild werden betroffene Oberflächen gereinigt oder beschädigte Bauteile erneuert.
      </p>
    ),
  },
  {
    id: 'buero',
    title: 'Schimmel im Büro',
    content: (
      <p className={p}>
        Schimmel in Büro- und Verwaltungsgebäuden kann den laufenden Betrieb beeinträchtigen. Radex koordiniert die
        Sanierung so, dass Arbeitsabläufe möglichst wenig gestört werden.
      </p>
    ),
  },
  {
    id: 'trocknung',
    title: 'Technische Trocknung',
    content: (
      <p className={p}>
        Vor dem Wiederaufbau müssen durchfeuchtete Bauteile häufig technisch getrocknet werden. Art und Dauer der
        Trocknung richten sich nach Material, Feuchtigkeitsgehalt und Schadensumfang.
      </p>
    ),
  },
  {
    id: 'schimmelbeseitigung',
    title: 'Fachgerechte Schimmelbeseitigung',
    content: (
      <p className={p}>
        Je nach Schadensbild werden betroffene Oberflächen gereinigt, belastete Materialien zurückgebaut oder vollständig
        ersetzt. Ziel ist eine nachhaltige Sanierung und nicht lediglich die optische Beseitigung sichtbarer Stellen.
      </p>
    ),
  },
  {
    id: 'luftreinigung',
    title: 'Luftreinigung und Schutzmaßnahmen',
    content: (
      <p className={p}>
        Abhängig vom Umfang der Arbeiten können Sanierungsbereiche abgeschottet und geeignete Luftreinigungsgeräte
        eingesetzt werden, um angrenzende Bereiche während der Arbeiten zu schützen.
      </p>
    ),
  },
  {
    id: 'wiederherstellung',
    title: 'Wiederherstellung der Räume',
    content: (
      <p className={p}>
        Nach erfolgreicher Schimmelsanierung übernimmt Radex auf Wunsch den vollständigen Innenausbau – einschließlich
        Trockenbau, Malerarbeiten, Bodenbelägen und Deckenarbeiten.
      </p>
    ),
  },
  {
    id: 'gewerbe',
    title: 'Schimmelsanierung in Gewerbeimmobilien',
    content: (
      <p className={p}>
        Ob Bürogebäude, Lagerhalle, Praxis oder Verkaufsfläche – wir koordinieren Sanierung und Wiederherstellung
        entsprechend den betrieblichen Anforderungen und vereinbarten Zeitplänen.
      </p>
    ),
  },
  {
    id: 'wohngebaeude',
    title: 'Schimmelsanierung in Wohngebäuden',
    content: (
      <p className={p}>
        In Wohnungen und Mehrfamilienhäusern stimmen wir die Sanierungsmaßnahmen auf die jeweilige Gebäudesituation und
        Nutzung ab und koordinieren anschließend die vollständige Wiederherstellung.
      </p>
    ),
  },
];

export const schimmelsanierungSeoLinkSections = [
  {
    id: 'hub-link',
    title: 'Schimmel- & Asbestsanierung Rhein-Main',
    to: '/leistungen/schimmel-asbest',
    content: (
      <p className={p}>
        Die Hubseite bündelt alle Leistungen rund um Schimmel-, Asbest- und Schadstoffsanierungen.
      </p>
    ),
  },
  {
    id: 'schadstoff-link',
    title: 'Schadstoffsanierung Rhein-Main',
    to: '/schadstoffsanierung-rhein-main',
    content: (
      <p className={p}>
        Professionelle Koordination von Analyse, Rückbau, Entsorgung und Wiederherstellung schadstoffbelasteter
        Gebäude.
      </p>
    ),
  },
  {
    id: 'asbest-link',
    title: 'Asbestsanierung Rhein-Main',
    to: '/asbestsanierung-rhein-main',
    content: (
      <p className={p}>
        Fachgerechte Planung und Koordination der Sanierung asbesthaltiger Baustoffe.
      </p>
    ),
  },
  {
    id: 'gewerbe-link',
    title: 'Gewerbe- & Objektsanierung Rhein-Main',
    to: '/gewerbe-objektsanierung-rhein-main',
    content: (
      <p className={p}>
        Nach Abschluss der Schimmelsanierung übernehmen wir auf Wunsch den vollständigen Innenausbau und die
        Modernisierung Ihrer Gewerbeimmobilie.
      </p>
    ),
  },
];
