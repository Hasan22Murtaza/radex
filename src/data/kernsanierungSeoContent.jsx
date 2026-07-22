import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const kernsanierungSeoIntro = (
  <>
    <p className={p}>
      Eine Kernsanierung ist die richtige Lösung, wenn die vorhandene Gebäudesubstanz nicht mehr den heutigen technischen
      oder baulichen Anforderungen entspricht. Anders als bei einer klassischen Renovierung oder einer Komplettsanierung
      werden dabei wesentliche Bestandteile der Immobilie grundlegend erneuert.
    </p>
    <p className={p}>
      Welche Maßnahmen notwendig sind, hängt immer vom Zustand des Gebäudes, der geplanten Nutzung und den Ergebnissen
      der Bestandsaufnahme ab.
    </p>
  </>
);

export const kernsanierungSeoSections = [
  {
    id: 'kernsanierung-nach-hauskauf',
    title: 'Kernsanierung nach Hauskauf',
    content: (
      <p className={p}>
        Viele ältere Immobilien werden direkt nach dem Kauf kernsaniert. Bevor Möbel einziehen oder neue Oberflächen
        eingebaut werden, können technische Anlagen, Leitungen und weitere Gebäudebestandteile umfassend erneuert werden.
        Durch die Bündelung aller Maßnahmen entsteht ein strukturierter Projektablauf, der spätere Doppelarbeiten vermeidet.{' '}
        <Link to="/generalunternehmer-rhein-main">Generalunternehmer Rhein-Main</Link>.
      </p>
    ),
  },
  {
    id: 'altbau-kernsanieren',
    title: 'Altbau kernsanieren',
    content: (
      <p className={p}>
        Altbauten besitzen häufig einen besonderen Charakter, gleichzeitig entsprechen viele technische Anlagen nicht mehr
        heutigen Anforderungen. Eine Kernsanierung schafft die Grundlage für modernes Wohnen und erhält gleichzeitig den
        Wert der Immobilie. Vor Beginn der Arbeiten wird geprüft, welche Bauteile erhalten werden können und welche
        Bereiche erneuert werden sollten.
      </p>
    ),
  },
  {
    id: 'kernsanierung-wohnung',
    title: 'Kernsanierung einer Wohnung',
    content: (
      <p className={p}>
        Auch Wohnungen können eine umfassende Kernsanierung benötigen. Häufig werden dabei Sanitärinstallationen,
        Bodenaufbauten, Wandflächen und technische Leitungen vollständig modernisiert. Alle Arbeiten werden so geplant,
        dass die einzelnen Gewerke effizient ineinandergreifen.{' '}
        <Link to="/komplettsanierung-rhein-main">Komplettsanierung Rhein-Main</Link>.
      </p>
    ),
  },
  {
    id: 'kernsanierung-einfamilienhaus',
    title: 'Kernsanierung eines Einfamilienhauses',
    content: (
      <p className={p}>
        Bei Einfamilienhäusern werden häufig mehrere Etagen sowie unterschiedliche technische Bereiche gleichzeitig
        modernisiert. Eine koordinierte Kernsanierung sorgt dafür, dass Rückbau, Gebäudetechnik und Innenausbau optimal
        aufeinander abgestimmt werden.{' '}
        <Link to="/innenausbau-haus-rhein-main">Innenausbau Haus Rhein-Main</Link>.
      </p>
    ),
  },
  {
    id: 'kernsanierung-mehrfamilienhaus',
    title: 'Kernsanierung eines Mehrfamilienhauses',
    content: (
      <p className={p}>
        Mehrfamilienhäuser stellen besondere Anforderungen an Planung und Organisation. Gemeinschaftsbereiche, Wohnungen
        und technische Anlagen müssen sorgfältig koordiniert werden. Eine strukturierte Projektsteuerung hilft dabei,
        Bauabläufe effizient zu organisieren.{' '}
        <Link to="/bauleitung-projektsteuerung-rhein-main">Bauleitung & Projektsteuerung</Link>.
      </p>
    ),
  },
  {
    id: 'technische-gebaeudeerneuerung',
    title: 'Technische Gebäudeerneuerung',
    content: (
      <p className={p}>
        Im Rahmen einer Kernsanierung werden häufig Heizungs-, Sanitär- und weitere technische Installationen modernisiert.
        Ziel ist eine zuverlässige und zukunftsfähige Gebäudetechnik. Die erforderlichen Maßnahmen richten sich nach dem
        tatsächlichen Zustand der Immobilie.{' '}
        <Link to="/heizung-sanitaer-rhein-main">Heizung & Sanitär</Link>,{' '}
        <Link to="/sanitaerinstallation-rhein-main">Sanitärinstallation</Link>.
      </p>
    ),
  },
  {
    id: 'grundrisse-modernisieren',
    title: 'Grundrisse modernisieren',
    content: (
      <p className={p}>
        Eine Kernsanierung bietet die Möglichkeit, bestehende Raumaufteilungen an heutige Wohn- und Arbeitsanforderungen
        anzupassen. Nicht tragende Wände können entfernt oder neue Raumkonzepte geschaffen werden, sofern die baulichen
        Voraussetzungen erfüllt sind.{' '}
        <Link to="/wand-entfernen-rhein-main">Wand entfernen Rhein-Main</Link>.
      </p>
    ),
  },
  {
    id: 'schadstoffe-kernsanierung',
    title: 'Schadstoffe vor der Kernsanierung',
    content: (
      <p className={p}>
        Bei älteren Gebäuden sollten vor umfangreichen Rückbauarbeiten mögliche Schadstoffe berücksichtigt werden. Eine
        fachgerechte Prüfung schafft Sicherheit für die nachfolgenden Arbeiten.{' '}
        <Link to="/schadstoffsanierung-rhein-main">Schadstoffsanierung</Link>,{' '}
        <Link to="/asbestsanierung-rhein-main">Asbestsanierung</Link>,{' '}
        <Link to="/schimmelsanierung-rhein-main">Schimmelsanierung</Link>.
      </p>
    ),
  },
  {
    id: 'kernsanierung-gewerbe',
    title: 'Kernsanierung von Gewerbeimmobilien',
    content: (
      <p className={p}>
        Büros, Praxen, Verkaufsflächen und andere Gewerbeobjekte stellen besondere Anforderungen an Terminplanung und
        Bauabläufe. Ziel ist eine Sanierung, die den zukünftigen Nutzungsanforderungen entspricht.{' '}
        <Link to="/gewerbesanierung-rhein-main">Gewerbesanierung Rhein-Main</Link>.
      </p>
    ),
  },
  {
    id: 'werterhalt-kernsanierung',
    title: 'Werterhalt durch Kernsanierung',
    content: (
      <p className={p}>
        Eine fachgerecht geplante Kernsanierung schafft die Grundlage für eine langfristige Nutzung der Immobilie.
        Gleichzeitig können technische Schwachstellen beseitigt und die Voraussetzungen für spätere Modernisierungen
        verbessert werden. Welche Maßnahmen wirtschaftlich sinnvoll sind, wird immer individuell anhand der
        Bestandsaufnahme bewertet.
      </p>
    ),
  },
];

export const kernsanierungSeoTocItems = kernsanierungSeoSections.map((section) => ({
  id: section.id,
  title: section.title,
}));
