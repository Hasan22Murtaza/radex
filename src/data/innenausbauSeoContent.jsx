import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const innenausbauSeoIntro = (
  <>
    <p className={p}>
      Im Bestand geht es selten nur um neue Oberflächen. Innenausbau bedeutet meist, die innere Struktur einer Immobilie
      sinnvoll an die heutige Nutzung anzupassen. Dazu gehören Raumaufteilung, Licht, Technik, Böden, Türen, Oberflächen
      und die richtige Reihenfolge der Gewerke.
    </p>
    <p className={p}>
      Radex arbeitet im Rhein-Main-Gebiet als Generalunternehmer und führt Heizung, Sanitär und Gebäudetechnik als
      SHK-Meisterbetrieb mit Bernd Knoop als SHK-Meister und Betriebsleiter ein.
    </p>
  </>
);

export const innenausbauSeoSections = [
  {
    id: 'bestandswissen',
    title: 'Innenausbau im Bestand braucht Bestandswissen',
    content: (
      <>
        <p className={p}>
          Im Bestand geht es selten nur um neue Oberflächen. Innenausbau bedeutet meist, die innere Struktur einer
          Immobilie sinnvoll an die heutige Nutzung anzupassen. Dazu gehören Raumaufteilung, Licht, Technik, Böden,
          Türen, Oberflächen und die richtige Reihenfolge der Gewerke.
        </p>
        <p className={p}>
          Radex arbeitet im Rhein-Main-Gebiet als Generalunternehmer und führt Heizung, Sanitär und Gebäudetechnik als
          SHK-Meisterbetrieb mit Bernd Knoop als SHK-Meister und Betriebsleiter ein. Mehr zum{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link> und zu{' '}
          <Link to="/raeume-umbauen-rhein-main">Räume umbauen</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'bestandsaufnahme',
    title: 'Warum die Bestandsaufnahme so wichtig ist',
    content: (
      <>
        <p className={p}>
          Hinter Wänden können alte Leitungen liegen, unter Böden mehrere Schichten, und frühere Umbauten verändern die
          heutige Ausgangslage. Deshalb beginnt ein gutes Innenausbauprojekt immer mit einer realistischen Begehung.
        </p>
        <p className={p}>
          So lassen sich Risiken wie Feuchtigkeit, unklare Wandaufbauten, alte Kleber, Leitungen oder mögliche
          Schadstoffthemen früh erkennen und in die Planung einordnen.
        </p>
      </>
    ),
  },
  {
    id: 'typische-arbeiten',
    title: 'Typische Arbeiten beim Umbau',
    content: (
      <>
        <p className={p}>
          Trockenbau, Raumaufteilung, Böden, Wände, Decken, Türen und technische Anpassungen gehören oft zusammen. Eine
          neue Wand braucht etwa Boden-, Decken- und Elektroanschlüsse. Ein neuer Boden muss mit Sockelleisten, Türen und
          Nutzungsanforderungen passen.
        </p>
        <p className={p}>
          Radex koordiniert diese Arbeiten so, dass Technik vor Oberfläche und Funktion vor reiner Optik kommt. Bei
          geplanten Wandöffnungen prüfen wir Statik und Leitungen – mehr zu{' '}
          <Link to="/wand-entfernen-rhein-main">Wand entfernen</Link> und zur{' '}
          <Link to="/elektroinstallation-rhein-main">Elektroinstallation</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'bewohnter-bestand',
    title: 'Umbau im bewohnten Bestand',
    content: (
      <>
        <p className={p}>
          Nicht jedes Projekt findet im Leerstand statt. Wenn Eigentümer während der Arbeiten im Objekt wohnen, müssen
          Bauabschnitte, Staubschutz, Zugang, Lärm und Nutzung sauber organisiert werden.
        </p>
        <p className={p}>
          Radex spricht solche Rahmenbedingungen offen an und bewertet realistisch, ob eine Etappensanierung oder eine
          größere Maßnahme sinnvoller ist.
        </p>
      </>
    ),
  },
  {
    id: 'rhein-main',
    title: 'Rhein-Main, 40+ Jahre Erfahrung und klare Ansprechpartner',
    content: (
      <>
        <p className={p}>
          Radex begleitet Innenausbau- und Umbauprojekte in über 60 Städten und Gemeinden im Rhein-Main-Gebiet. Der
          Standort Rödermark liegt zentral im Einsatzgebiet.
        </p>
        <p className={p}>
          Für eine erste Einschätzung reicht oft ein Gespräch unter 06074 960620 oder über den Kontaktbereich.
        </p>
      </>
    ),
  },
];
