import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const komplettsanierungSeoIntro = (
  <>
    <p className={p}>
      Eine Komplettsanierung kann aus sehr unterschiedlichen Gründen erforderlich werden. Manche Eigentümer möchten eine
      neu gekaufte Immobilie vor dem Einzug modernisieren. Andere müssen ein geerbtes Haus auf einen zeitgemäßen Stand
      bringen, eine leer stehende Wohnung für die Vermietung vorbereiten oder ein bewohntes Gebäude schrittweise
      erneuern.
    </p>
    <p className={p}>
      Radex stimmt den Sanierungsumfang auf den Zustand, die Nutzung und das gewünschte Ergebnis der Immobilie ab. Die
      folgenden Leistungen zeigen typische Situationen, in denen eine koordinierte Komplettsanierung sinnvoll sein kann.
    </p>
  </>
);

export const komplettsanierungSeoSections = [
  {
    id: 'komplettsanierung-nach-immobilienkauf',
    title: 'Komplettsanierung nach Immobilienkauf',
    content: (
      <>
        <p className={p}>
          Nach dem Kauf eines Hauses oder einer Wohnung bietet sich häufig die beste Gelegenheit für eine umfassende
          Modernisierung. Die Räume sind meist noch leer und erforderliche Eingriffe lassen sich durchführen, bevor
          Möbel, Küche und persönliche Einrichtung eingebaut werden.
        </p>
        <p className={p}>
          Radex prüft gemeinsam mit Ihnen, welche Bereiche vor dem Einzug erneuert werden sollten und welche Maßnahmen
          später umgesetzt werden können. Dabei werden technische Arbeiten, Raumgestaltung und Innenausbau als
          zusammenhängendes Projekt betrachtet.{' '}
          <Link to="/generalunternehmer-rhein-main">Komplettsanierung mit einem Generalunternehmer koordinieren</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'komplettsanierung-vor-einzug',
    title: 'Komplettsanierung vor dem Einzug',
    content: (
      <>
        <p className={p}>
          Wer vor dem Einzug saniert, vermeidet spätere Baustellen im bereits eingerichteten Zuhause. Bad,
          Küchenanschlüsse, Böden, Wände, Türen und technische Installationen können in einer sinnvollen Reihenfolge
          bearbeitet werden.
        </p>
        <p className={p}>
          Gemeinsam definieren wir, welcher Zustand bei der Übergabe erreicht werden soll. Je nach Auftrag kann die
          Immobilie vorbereitet, modernisiert oder vollständig bezugsfertig übergeben werden.
        </p>
      </>
    ),
  },
  {
    id: 'geerbte-immobilie-sanieren',
    title: 'Geerbte Immobilie komplett sanieren',
    content: (
      <>
        <p className={p}>
          Bei einer geerbten Immobilie ist der tatsächliche Sanierungsbedarf häufig zunächst unklar. Frühere Umbauten,
          ältere Installationen und unterschiedlich modernisierte Gebäudebereiche müssen sorgfältig eingeordnet werden.
        </p>
        <p className={p}>
          Radex unterstützt bei der Bestandsaufnahme und entwickelt ein Sanierungskonzept passend zur geplanten Nutzung.
          Dabei kann berücksichtigt werden, ob die Immobilie selbst genutzt, vermietet oder verkauft werden soll.{' '}
          <Link to="/kernsanierung-rhein-main">Prüfen, ob eine tiefgreifende Kernsanierung erforderlich ist</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'komplettsanierung-nach-mieterwechsel',
    title: 'Komplettsanierung nach Mieterwechsel',
    content: (
      <>
        <p className={p}>
          Ein Mieterwechsel bietet Eigentümern die Möglichkeit, mehrere erforderliche Modernisierungen ohne
          Beeinträchtigung der Bewohner durchzuführen.
        </p>
        <p className={p}>
          Je nach Zustand können Bad, Bodenbeläge, Wandflächen, Türen, Heizkörper und Anschlüsse gemeinsam erneuert
          werden. Ziel ist eine technisch zuverlässige, gepflegte und zur Zielgruppe passende Mietimmobilie.{' '}
          <Link to="/teilsanierung-rhein-main">Komplettsanierung und gezielte Teilsanierung vergleichen</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'bezugsfertige-wohnungssanierung',
    title: 'Bezugsfertige Wohnungssanierung',
    content: (
      <>
        <p className={p}>
          Bei einer bezugsfertigen Wohnungssanierung werden die vereinbarten Arbeiten so koordiniert, dass die Wohnung
          nach der Übergabe unmittelbar eingerichtet und genutzt werden kann.
        </p>
        <p className={p}>
          Radex stimmt Rückbau, technische Installationen, Innenausbau und abschließende Oberflächenarbeiten aufeinander
          ab. Der genaue Übergabezustand wird vor Projektbeginn eindeutig festgelegt.{' '}
          <Link to="/innenausbau-wohnung-rhein-main">Mehr über den Innenausbau einer Wohnung erfahren</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'komplettsanierung-einfamilienhaus',
    title: 'Komplettsanierung eines Einfamilienhauses',
    content: (
      <>
        <p className={p}>
          Bei einem Einfamilienhaus sind häufig mehrere Etagen, technische Anlagen und unterschiedliche Ausbauphasen
          miteinander verbunden. Eine koordinierte Planung hilft dabei, unnötige Doppelarbeiten zu vermeiden.
        </p>
        <p className={p}>
          Wir betrachten das Haus als Ganzes und stimmen die Maßnahmen auf die zukünftige Nutzung der Bewohner ab. Dazu
          können neue Raumstrukturen, modernisierte Bäder, technische Anpassungen und ein vollständiger Innenausbau
          gehören.{' '}
          <Link to="/innenausbau-haus-rhein-main">Innenausbau für ein modernisiertes Haus planen</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'komplettsanierung-mehrfamilienhaus',
    title: 'Komplettsanierung eines Mehrfamilienhauses',
    content: (
      <>
        <p className={p}>
          Die Komplettsanierung eines Mehrfamilienhauses erfordert eine besonders strukturierte Ablaufplanung.
          Gemeinschaftsflächen, einzelne Wohnungen, technische Leitungswege und die Interessen mehrerer Beteiligter
          müssen berücksichtigt werden.
        </p>
        <p className={p}>
          Radex koordiniert die vereinbarten Bauabschnitte und stimmt Zugänge, Arbeitszeiten, Materialtransporte und
          Übergaben mit Eigentümern oder Hausverwaltungen ab.{' '}
          <Link to="/bauleitung-projektsteuerung-rhein-main">Bauleitung und Projektsteuerung für größere Objekte</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'komplettsanierung-bewohnter-zustand',
    title: 'Komplettsanierung im bewohnten Zustand',
    content: (
      <>
        <p className={p}>
          Ist ein vollständiger Auszug nicht möglich, muss die Sanierung in klar abgegrenzte Abschnitte unterteilt
          werden. Dabei sind Zugänglichkeit, Staubschutz, nutzbare Räume und notwendige Versorgungsunterbrechungen zu
          berücksichtigen.
        </p>
        <p className={p}>
          Nach der Bestandsaufnahme klären wir, ob eine Komplettsanierung im bewohnten Zustand realistisch ist oder ob
          einzelne Projektphasen während einer vorübergehenden Räumung ausgeführt werden sollten.
        </p>
      </>
    ),
  },
  {
    id: 'komplettsanierung-altbau-bestand',
    title: 'Komplettsanierung von Alt- und Bestandsbauten',
    content: (
      <>
        <p className={p}>
          Alt- und Bestandsgebäude besitzen häufig eine gute Grundsubstanz, gleichzeitig aber gewachsene technische und
          bauliche Strukturen. Deshalb sollte nicht pauschal zurückgebaut werden.
        </p>
        <p className={p}>
          Radex prüft, welche Bauteile erhalten werden können und wo eine Erneuerung erforderlich ist. Vor
          Rückbauarbeiten werden mögliche Feuchtigkeits-, Schimmel- oder Schadstoffthemen berücksichtigt.{' '}
          <Link to="/schadstoffsanierung-rhein-main">Schadstoffe vor der Sanierung fachgerecht prüfen</Link>,{' '}
          <Link to="/asbestsanierung-rhein-main">Informationen zur Asbestsanierung</Link> und{' '}
          <Link to="/schimmelsanierung-rhein-main">Ursachenorientierte Schimmelsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'komplettsanierung-gewerbeimmobilie',
    title: 'Komplettsanierung einer Gewerbeimmobilie',
    content: (
      <>
        <p className={p}>
          Bei Gewerbeimmobilien richtet sich die Sanierung nach der zukünftigen Nutzung. Büros, Praxen, Verkaufsflächen
          und andere Gewerbeeinheiten stellen unterschiedliche Anforderungen an Raumstruktur, Gebäudetechnik,
          Oberflächen und Terminplanung.
        </p>
        <p className={p}>
          Radex koordiniert die beteiligten Gewerke und berücksichtigt betriebliche Fristen sowie geplante
          Eröffnungs- oder Übergabetermine. Verbindliche Termine werden erst nach Prüfung des tatsächlichen
          Leistungsumfangs vereinbart.{' '}
          <Link to="/gewerbesanierung-rhein-main">Komplettsanierung einer Gewerbeimmobilie planen</Link>.
        </p>
      </>
    ),
  },
];
