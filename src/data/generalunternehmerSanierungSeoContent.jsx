import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const generalunternehmerSanierungSeoIntro = (
  <>
    <p className={p}>
      Eine Sanierung besteht häufig aus mehreren Arbeiten, Gewerken und Entscheidungen. Damit Kunden schnell erkennen,
      welche Lösung zu ihrem Vorhaben passt, bündelt Radex Objektmanagement alle wichtigen Leistungen rund um
      Generalunternehmer, Sanierung und Projektsteuerung.
    </p>
    <p className={p}>
      Ob Sie die komplette Verantwortung abgeben, eine Immobilie umfassend modernisieren oder nur einzelne Bereiche
      erneuern möchten: Wir unterstützen Sie bei der Auswahl der passenden Leistung und führen Sie direkt zur jeweiligen
      Fachseite.
    </p>
  </>
);

export const generalunternehmerSanierungSeoSections = [
  {
    id: 'welche-sanierungsleistung',
    title: 'Welche Sanierungsleistung passt zu meinem Projekt?',
    content: (
      <>
        <p className={p}>
          Nicht jedes Bauvorhaben benötigt denselben Leistungsumfang. Entscheidend ist, wie stark die Immobilie verändert
          werden soll und welche Verantwortung Radex übernehmen soll.
        </p>
        <p className={p}>
          Wer die vollständige Organisation des Projekts abgeben möchte, entscheidet sich für einen{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link>. Eine{' '}
          <Link to="/komplettsanierung-rhein-main">Komplettsanierung</Link> eignet sich für die umfassende Modernisierung
          einer Immobilie. Bei einer <Link to="/kernsanierung-rhein-main">Kernsanierung</Link> werden auch grundlegende
          Bauteile und technische Systeme erneuert. Eine{' '}
          <Link to="/teilsanierung-rhein-main">Teilsanierung</Link> konzentriert sich dagegen auf einzelne Räume oder
          Gebäudebereiche.
        </p>
        <p className={p}>
          Wenn Sie vor allem eine professionelle Begleitung des Bauablaufs benötigen, ist{' '}
          <Link to="/bauleitung-projektsteuerung-rhein-main">Bauleitung &amp; Projektsteuerung</Link> die passende
          Ergänzung oder Alternative.
        </p>
      </>
    ),
  },
  {
    id: 'generalunternehmer-bauprojekte',
    title: 'Generalunternehmer für komplette Bauprojekte',
    content: (
      <>
        <p className={p}>
          Als Generalunternehmer übernimmt Radex die zentrale Verantwortung für die Organisation und Umsetzung des
          vereinbarten Bauvorhabens. Kunden müssen nicht selbst verschiedene Handwerksbetriebe beauftragen und
          miteinander abstimmen.
        </p>
        <p className={p}>
          Sie erhalten einen festen Ansprechpartner, der den Ablauf koordiniert, Informationen bündelt und den
          Projektfortschritt begleitet.
        </p>
        <p className={p}>
          <Link to="/generalunternehmer-rhein-main">Mehr über Radex als Generalunternehmer erfahren</Link>
        </p>
      </>
    ),
  },
  {
    id: 'komplettsanierung-immobilien',
    title: 'Komplettsanierung von Immobilien',
    content: (
      <>
        <p className={p}>
          Bei einer Komplettsanierung wird eine Immobilie umfassend modernisiert. Dabei können Innenausbau, Oberflächen,
          technische Installationen und weitere Gebäudebereiche erneuert werden.
        </p>
        <p className={p}>
          Alle Maßnahmen werden gemeinsam geplant und zeitlich aufeinander abgestimmt. Dadurch entsteht ein einheitliches
          Ergebnis, ohne dass der Eigentümer jedes Gewerk einzeln koordinieren muss.
        </p>
        <p className={p}>
          <Link to="/komplettsanierung-rhein-main">Informationen zur Komplettsanierung</Link>
        </p>
      </>
    ),
  },
  {
    id: 'kernsanierung-erneuerungsbedarf',
    title: 'Kernsanierung bei umfassendem Erneuerungsbedarf',
    content: (
      <>
        <p className={p}>
          Eine Kernsanierung ist sinnvoll, wenn nicht nur die sichtbaren Oberflächen, sondern auch grundlegende
          Bestandteile der Immobilie erneuert werden müssen.
        </p>
        <p className={p}>
          Dazu können beispielsweise Leitungen, technische Anlagen, Bodenaufbauten, Wände und weitere Bauteile gehören.
          Welche Maßnahmen erforderlich sind, wird nach einer sorgfältigen Bestandsaufnahme festgelegt.
        </p>
        <p className={p}>
          <Link to="/kernsanierung-rhein-main">Mehr über die Kernsanierung erfahren</Link>
        </p>
      </>
    ),
  },
  {
    id: 'teilsanierung-bereiche',
    title: 'Teilsanierung einzelner Bereiche',
    content: (
      <>
        <p className={p}>
          Bei einer Teilsanierung werden nur ausgewählte Räume, Etagen oder technische Bereiche modernisiert. Das ist
          sinnvoll, wenn die Immobilie insgesamt nutzbar ist, einzelne Abschnitte jedoch nicht mehr den gewünschten
          Anforderungen entsprechen.
        </p>
        <p className={p}>
          Der Leistungsumfang wird klar abgegrenzt und auf die bestehende Bausubstanz abgestimmt.
        </p>
        <p className={p}>
          <Link to="/teilsanierung-rhein-main">Möglichkeiten der Teilsanierung ansehen</Link>
        </p>
      </>
    ),
  },
  {
    id: 'bauleitung-projektsteuerung',
    title: 'Bauleitung und Projektsteuerung',
    content: (
      <>
        <p className={p}>
          Die Bauleitung sorgt dafür, dass die vereinbarten Arbeiten auf der Baustelle fachgerecht umgesetzt werden. Die
          Projektsteuerung betrachtet zusätzlich Termine, Abläufe, Kommunikation und die Abstimmung der Beteiligten.
        </p>
        <p className={p}>
          Radex behält den Gesamtüberblick und informiert den Auftraggeber transparent über den Projektstand.
        </p>
        <p className={p}>
          <Link to="/bauleitung-projektsteuerung-rhein-main">Bauleitung und Projektsteuerung kennenlernen</Link>
        </p>
      </>
    ),
  },
  {
    id: 'ansprechpartner-alle-gewerke',
    title: 'Ein Ansprechpartner für alle Gewerke',
    content: (
      <>
        <p className={p}>
          Bei Sanierungen arbeiten häufig unterschiedliche Fachbetriebe zusammen. Ohne eine zentrale Koordination müssen
          Eigentümer Fragen, Termine und Änderungen selbst mit jedem Unternehmen einzeln klären.
        </p>
        <p className={p}>
          Radex bündelt diese Kommunikation. Dadurch werden Entscheidungswege kürzer, Verantwortlichkeiten klarer und der
          Aufwand für den Kunden deutlich reduziert.
        </p>
      </>
    ),
  },
  {
    id: 'kosten-bauzeiten-planen',
    title: 'Planung von Kosten und Bauzeiten',
    content: (
      <>
        <p className={p}>
          Vor Beginn der Arbeiten werden der geplante Leistungsumfang, die einzelnen Bauabschnitte und der zeitliche Ablauf
          festgelegt.
        </p>
        <p className={p}>
          Eine strukturierte Planung schafft Transparenz und hilft dabei, Abhängigkeiten zwischen den Gewerken frühzeitig zu
          erkennen. Sollten sich während des Projekts Änderungen ergeben, werden diese nachvollziehbar kommuniziert und
          abgestimmt.
        </p>
      </>
    ),
  },
  {
    id: 'handwerksbetriebe-koordinieren',
    title: 'Koordination der Handwerksbetriebe',
    content: (
      <>
        <p className={p}>
          Viele Arbeiten können erst beginnen, wenn vorherige Gewerke ihre Leistungen abgeschlossen haben. Deshalb ist eine
          klare Reihenfolge entscheidend.
        </p>
        <p className={p}>
          Radex koordiniert die beteiligten Fachbetriebe, stimmt Übergaben ab und sorgt dafür, dass die Arbeiten sinnvoll
          aufeinander aufbauen.
        </p>
      </>
    ),
  },
  {
    id: 'qualitaetssicherung-bauphase',
    title: 'Qualitätssicherung während der Bauphase',
    content: (
      <>
        <p className={p}>
          Qualität entsteht nicht erst bei der Abnahme. Sie muss während der gesamten Ausführung kontrolliert werden.
        </p>
        <p className={p}>
          Deshalb werden Arbeitsstände geprüft, Schnittstellen zwischen den Gewerken begleitet und erkennbare Abweichungen
          frühzeitig geklärt. So lassen sich unnötige Nacharbeiten vermeiden.
        </p>
      </>
    ),
  },
  {
    id: 'sanierung-wohnimmobilien',
    title: 'Sanierung von Wohnimmobilien',
    content: (
      <>
        <p className={p}>
          Radex begleitet Sanierungen von Wohnungen, Einfamilienhäusern und Mehrfamilienhäusern. Der Ablauf wird an die
          Größe, den Zustand und die geplante Nutzung der Immobilie angepasst.
        </p>
        <p className={p}>
          Dabei stehen eine verständliche Kommunikation, saubere Koordination und ein möglichst planbarer Projektverlauf im
          Mittelpunkt.
        </p>
        <p className={p}>
          Passende Leistungen: <Link to="/innenausbau-umbau-rhein-main">Innenausbau &amp; Umbau</Link>,{' '}
          <Link to="/sanitaerinstallation-rhein-main">Sanitärinstallation</Link>,{' '}
          <Link to="/schimmel-asbest-sanierung-rhein-main">Schimmel- und Schadstoffsanierung</Link>
        </p>
      </>
    ),
  },
  {
    id: 'sanierung-gewerbeimmobilien',
    title: 'Sanierung von Gewerbeimmobilien',
    content: (
      <>
        <p className={p}>
          Bei Gewerbeobjekten spielen neben der baulichen Qualität häufig auch betriebliche Abläufe, feste Eröffnungstermine
          und kurze Ausfallzeiten eine wichtige Rolle.
        </p>
        <p className={p}>
          Radex plant die Maßnahmen deshalb unter Berücksichtigung der späteren Nutzung und koordiniert die Ausführung mit
          den beteiligten Ansprechpartnern.
        </p>
        <p className={p}>
          Passende Leistungen: <Link to="/gewerbe-objektsanierung-rhein-main">Gewerbe- und Objektsanierung</Link>,{' '}
          <Link to="/gewerbesanierung-rhein-main">Innenausbau Gewerbe</Link>,{' '}
          <Link to="/bauleitung-projektsteuerung-rhein-main">Bauleitung &amp; Projektsteuerung</Link>
        </p>
      </>
    ),
  },
  {
    id: 'sanierung-bewohnter-zustand',
    title: 'Sanierung im bewohnten Zustand',
    content: (
      <>
        <p className={p}>
          Nicht jede Immobilie kann während der Arbeiten vollständig geräumt werden. In solchen Fällen muss die Sanierung
          besonders sorgfältig geplant werden.
        </p>
        <p className={p}>
          Mögliche Bauabschnitte, Zugänge, Schutzmaßnahmen und Arbeitszeiten werden vorab abgestimmt. Ob eine Umsetzung im
          bewohnten Zustand sinnvoll ist, hängt vom Umfang der geplanten Arbeiten ab.
        </p>
      </>
    ),
  },
  {
    id: 'dokumentation-projektuebergabe',
    title: 'Dokumentation und Projektübergabe',
    content: (
      <>
        <p className={p}>
          Nach Abschluss der Arbeiten erfolgt eine gemeinsame Kontrolle des vereinbarten Leistungsumfangs. Offene Punkte
          werden dokumentiert und nachvollziehbar bearbeitet.
        </p>
        <p className={p}>
          Anschließend wird das fertiggestellte Projekt geordnet an den Auftraggeber übergeben.
        </p>
      </>
    ),
  },
];
