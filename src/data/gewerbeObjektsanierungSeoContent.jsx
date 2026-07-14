import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const gewerbeObjektsanierungSeoIntro = (
  <>
    <p className={p}>
      Gewerbe- und Objektsanierung bedeutet, Flächen so zu modernisieren, dass sie im Alltag für Mitarbeiter, Kunden,
      Betreiber und Eigentümer zuverlässig funktionieren. Optik ist wichtig – ohne passende Technik, Raumstruktur und
      Termintreue bleibt die Fläche problematisch.
    </p>
    <p className={p}>
      Die Radex Objektmanagement GmbH koordiniert Büro-, Praxis-, Laden- und Objektprojekte im Rhein-Main-Gebiet.
      Heizung, Sanitär und Gebäudetechnik werden als SHK-Meisterbetrieb durch Bernd Knoop geführt; weitere Gewerke wie
      Elektro, Trockenbau und Innenausbau werden abgestimmt gesteuert.
    </p>
  </>
);

export const gewerbeObjektsanierungSeoSections = [
  {
    id: 'gewerbeflaechen',
    title: 'Gewerbeflächen müssen funktionieren',
    content: (
      <>
        <p className={p}>
          Gewerbliche Flächen stehen unter Nutzungsdruck: Mietbeginn, Kundenfrequenz, Hygienevorgaben oder Leerstand
          bestimmen den Ablauf. Deshalb beginnt jedes Projekt mit einer klaren Bestandsaufnahme – Raumstruktur, Technik,
          Sanitär, Elektro, Oberflächen, Zugang und Schnittstellen.
        </p>
        <p className={p}>
          Radex plant Rückbau, Trockenbau, Technik und Oberflächen so, dass Übergabe und Betrieb zusammenpassen. Mehr zur{' '}
          <Link to="/gewerbesanierung-rhein-main">Gewerbesanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'gewerbe-vs-objekt',
    title: 'Gewerbesanierung und Objektsanierung',
    content: (
      <>
        <p className={p}>
          Gewerbesanierung bezieht sich oft auf eine konkrete Fläche – Büro, Praxis oder Laden. Objektsanierung kann
          größer gedacht sein und mehrere Einheiten oder gemeinschaftliche Bereiche betreffen.
        </p>
        <p className={p}>
          In beiden Fällen zählt die Koordination der Gewerke: Heizung, Sanitär, Elektro, Innenausbau und Oberflächen
          müssen zur Nutzung passen und in der richtigen Reihenfolge kommen.
        </p>
      </>
    ),
  },
  {
    id: 'buero-praxis-laden',
    title: 'Büro, Praxis, Laden und Mieterausbau',
    content: (
      <>
        <p className={p}>Typische Einsatzfelder:</p>
        <ul className={ul}>
          <li>
            <strong>Büroumbau:</strong> Trockenbau, Akustik, Licht, Arbeitsplätze und Raumaufteilung
          </li>
          <li>
            <strong>Praxisumbau:</strong> Raumstruktur, Sanitär, Hygiene, Wartebereiche und technische Anforderungen
          </li>
          <li>
            <strong>Ladenfläche:</strong> Beleuchtung, Boden, Kundenführung und Aufenthaltsqualität
          </li>
          <li>
            <strong>Mieterausbau:</strong> Fläche gezielt für den neuen Mieter vorbereiten und schlüsselfertig übergeben
          </li>
        </ul>
        <p className={p}>
          Details zum{' '}
          <Link to="/mieterausbau-rhein-main">Mieterausbau</Link> finden Sie auf der zugehörigen Themenseite.
        </p>
      </>
    ),
  },
  {
    id: 'bestand-betrieb',
    title: 'Bestandsprüfung, Betrieb und Zeitfenster',
    content: (
      <>
        <p className={p}>
          Gewerbliche Bestände haben oft viele Umbauten hinter sich. Erst aus einer realistischen Bestandsaufnahme
          entsteht ein Sanierungsfahrplan für Büro, Praxis, Laden, Dienstleistung oder gemischt genutzte Flächen.
        </p>
        <p className={p}>
          Bei laufendem Betrieb können Teilbereiche abschnittsweise saniert werden. Bei größeren Eingriffen kann eine
          temporäre Sperrung sinnvoller sein. Wenn Schadstoff-, Brandschutz- oder Genehmigungsthemen dazukommen, werden
          sie früh in die Reihenfolge integriert.
        </p>
      </>
    ),
  },
  {
    id: 'technik-innenausbau',
    title: 'Technik und Innenausbau zusammen denken',
    content: (
      <>
        <p className={p}>
          Elektro, Licht, Netzwerk, WC-Anlagen, Teeküchen, Heizung und Sanitär müssen zu Raumaufteilung und Nutzung
          passen. Wer Technik zu spät plant, riskiert fertige Flächen, die nochmals geöffnet werden müssen.
        </p>
        <p className={p}>
          Radex sorgt dafür, dass diese Schnittstellen rechtzeitig abgestimmt werden und die Fläche nutzungsgerecht
          übergeben werden kann – inklusive{' '}
          <Link to="/heizung-sanitaer-rhein-main">Heizung &amp; Sanitär</Link> unter Meisterverantwortung.
        </p>
      </>
    ),
  },
  {
    id: 'kosten',
    title: 'Kosten einer Gewerbe- und Objektsanierung',
    content: (
      <>
        <p className={p}>
          Die Kosten hängen von Fläche, Zustand, Nutzung, Gewerken, Technik, Materialqualität, Zeitfenster und möglicher
          Fachplanung ab. Teilumbau, Bürofläche, Praxis, Laden und Mieterausbau werden individuell nach Begehung
          kalkuliert.
        </p>
        <p className={p}>
          Ein realistisches Angebot entsteht erst vor Ort – ohne pauschale Versprechen und mit transparenter
          Leistungsbeschreibung.
        </p>
      </>
    ),
  },
  {
    id: 'regional',
    title: 'Regional im Rhein-Main-Gebiet',
    content: (
      <>
        <p className={p}>
          Ob Büro in Eschborn, Praxis in Darmstadt, Objekt in Hanau oder Ladenfläche in Neu-Isenburg: Radex arbeitet
          regional mit Erfahrung aus über 40 Jahren und ist unter 06074 960620 gut erreichbar.
        </p>
        <p className={p}>
          Ziel ist immer eine wirtschaftlich sinnvolle und sauber koordinierte Sanierung – für Betreiber, Vermieter und
          Hausverwaltungen.
        </p>
      </>
    ),
  },
];
