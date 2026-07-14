import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const energetischeSanierungSeoIntro = (
  <>
    <p className={p}>
      Energetische Sanierung ist mehr als ein Gerätetausch. Gebäudehülle, Heizung, Warmwasser, Lüftung,
      Feuchtigkeitsschutz und Innenausbau müssen zusammenpassen, damit sich Maßnahmen wirklich lohnen und der
      Wohnkomfort steigt.
    </p>
    <p className={p}>
      Die Radex Objektmanagement GmbH koordiniert energetische Sanierungen im Rhein-Main-Gebiet. Im Bereich Heizung,
      Sanitär und Gebäudetechnik ist Bernd Knoop als SHK-Meister und Betriebsleiter fachlich verantwortlich – so greifen
      Technik, Förderung und Bauablauf sauber ineinander.
    </p>
  </>
);

export const energetischeSanierungSeoSections = [
  {
    id: 'gesamtsystem',
    title: 'Energetische Sanierung als Gesamtsystem',
    content: (
      <>
        <p className={p}>
          Wer nur die Heizung oder nur Fenster betrachtet, übersieht oft Schnittstellen: Vorlauftemperaturen, Heizflächen,
          Anschlüsse, Lüftung und Feuchteverhalten. Eine strukturierte Bestandsaufnahme klärt, was dringend ist, was
          sinnvoll ist und was später folgen kann.
        </p>
        <p className={p}>
          Radex bringt die SHK-Meisterkompetenz in Heizung und Gebäudetechnik ein und koordiniert Dämmung, Fenster,
          Bad und Innenausbau so, dass die Maßnahmen bauphysikalisch und wirtschaftlich stimmig sind. Mehr zum{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link> und zur{' '}
          <Link to="/sanierung/haussanierung">Haussanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'bestandsgebaeude',
    title: 'Warum Bestandsgebäude sorgfältig geplant werden müssen',
    content: (
      <>
        <p className={p}>
          Bestandsobjekte haben alte Leitungen, unterschiedliche Modernisierungsstände und oft mehrere Bauschichten. Wer
          Maßnahmen isoliert umsetzt, riskiert Zugluft, Schimmel oder unnötig hohe Folgekosten.
        </p>
        <p className={p}>
          Eine gute Bestandsaufnahme macht die Reihenfolge technisch sinnvoll und wirtschaftlich nachvollziehbar – egal
          ob Einzelmaßnahme, Heizungstausch oder umfassendere energetische Sanierung.
        </p>
      </>
    ),
  },
  {
    id: 'heizung-daemmung',
    title: 'Heizung, Dämmung und Wärmepumpe',
    content: (
      <>
        <p className={p}>
          Die Heizungsmodernisierung ist oft der Ausgangspunkt. Für Wärmepumpen sind Vorlauftemperatur, Heizflächen,
          Aufstellort, Schallschutz und Elektroanschluss genauso wichtig wie der Zustand der Gebäudehülle.
        </p>
        <p className={p}>
          Dämmmaßnahmen an Dach, Fassade oder Kellerdecke müssen bauphysikalisch passen. Feuchtigkeit, Anschlüsse und
          Lüftung dürfen nicht aus dem Blick geraten. Details zur{' '}
          <Link to="/waermepumpe-rhein-main">Wärmepumpe</Link> und zu{' '}
          <Link to="/heizung-sanitaer-rhein-main">Heizung &amp; Sanitär</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'lueftung-feuchte',
    title: 'Feuchtigkeit, Lüftung und Schimmel mitdenken',
    content: (
      <>
        <p className={p}>
          Wenn Gebäude dichter werden, verändert sich das Raumklima. Besonders Bäder, Küchen, Schlafzimmer und Keller
          müssen im Zusammenhang mit Lüftung und Feuchte beurteilt werden – sonst entsteht später Schimmelrisiko.
        </p>
        <p className={p}>
          Radex ist zertifiziert für Schimmel- und Asbestsanierung und verfügt über TRGS-519-Sachkunde, sodass
          Schadstoffthemen im Ablauf fachlich eingeordnet werden können. Mehr zur{' '}
          <Link to="/schimmelsanierung-rhein-main">Schimmel- &amp; Schadstoffsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'foerderung',
    title: 'Förderung und regionale Erreichbarkeit',
    content: (
      <>
        <p className={p}>
          Förderprogramme (z.&nbsp;B. BEG über BAFA/KfW) können die Wirtschaftlichkeit verbessern, müssen aber vor Beginn
          und immer aktuell geprüft werden. Radex ersetzt keine Förderzusage, kann Förderthemen im Sanierungsablauf aber
          mitdenken und bei Bedarf Energie-Effizienz-Experten einbinden.
        </p>
        <p className={p}>
          Für eine erste Einschätzung unter 06074 960620 oder über den Kontaktbereich ist Radex im gesamten
          Rhein-Main-Gebiet erreichbar. Mehr zu{' '}
          <Link to="/sanierungskosten-rhein-main">Sanierungskosten</Link> und{' '}
          <Link to="/einsatzgebiete-rhein-main">Einsatzgebieten</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'fuer-wen',
    title: 'Für wen ist energetische Sanierung sinnvoll?',
    content: (
      <>
        <p className={p}>Energieeffizienz ist immer dann ein Thema, wenn Gebäudehülle und Haustechnik nicht mehr zusammenpassen:</p>
        <ul className={ul}>
          <li>
            <strong>Eigentümer älterer Häuser:</strong> hohe Heizkosten, Zugluft oder alte Heiztechnik dauerhaft
            verbessern.
          </li>
          <li>
            <strong>Käufer vor dem Einzug:</strong> Heizung, Dämmung, Fenster und Innenausbau noch sinnvoll bündeln.
          </li>
          <li>
            <strong>Vermieter &amp; Bestandshalter:</strong> wirtschaftlich modernisieren mit klarer Reihenfolge und wenig
            Leerstand.
          </li>
          <li>
            <strong>Eigentümer mit Feuchtigkeit oder Schimmel:</strong> Ursachen vor weiteren Maßnahmen klären.
          </li>
          <li>
            <strong>Sanierer mit Förderinteresse:</strong> Programme vor Auftragsvergabe prüfen und planen.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'massnahmen',
    title: 'Typische Maßnahmen der energetischen Sanierung',
    content: (
      <>
        <p className={p}>Radex betrachtet das Gebäude immer als Gesamtsystem. Typische Maßnahmen sind:</p>
        <ul className={ul}>
          <li>Heizungsmodernisierung und Regelungstechnik</li>
          <li>Wärmepumpe im Bestand inkl. Heizflächen und hydraulischem Abgleich</li>
          <li>Dämmung von Dach, Fassade und Kellerdecke</li>
          <li>Fenster und dichte Anschlüsse</li>
          <li>Lüftung und Feuchtigkeitsschutz</li>
          <li>Bad und Innenausbau mitdenken – Warmwasser, Heizkörper, Oberflächen</li>
        </ul>
      </>
    ),
  },
  {
    id: 'kosten',
    title: 'Kosten einer energetischen Sanierung',
    content: (
      <>
        <p className={p}>
          Die Kosten hängen von Gebäudezustand, Maßnahmefolge, Förderfähigkeit und Ausbauumfang ab. Orientierungswerte:
        </p>
        <ul className={ul}>
          <li>
            <strong>Einzelmaßnahme:</strong> ab ca. 10.000&nbsp;€
          </li>
          <li>
            <strong>Heizungstausch:</strong> ab ca. 20.000&nbsp;€
          </li>
          <li>
            <strong>Umfassende energetische Sanierung:</strong> ab ca. 80.000&nbsp;€
          </li>
        </ul>
        <p className={p}>
          Nach der Bestandsaufnahme erhalten Sie ein konkretes Angebot. Nutzen Sie auch unseren{' '}
          <Link to="/sanierungskosten-rhein-main">Sanierungskosten-Rechner</Link> für eine erste Schätzung.
        </p>
      </>
    ),
  },
  {
    id: 'ablauf',
    title: 'So läuft die energetische Sanierung mit Radex ab',
    content: (
      <>
        <p className={p}>Ein strukturierter Ablauf schafft Planungssicherheit:</p>
        <ul className={ul}>
          <li>Ziel und Objekt klären</li>
          <li>Bestandsaufnahme vor Ort</li>
          <li>Maßnahmen und Reihenfolge einordnen</li>
          <li>Förder- und Fachfragen prüfen</li>
          <li>Umsetzung und Gewerkeabstimmung</li>
          <li>Übergabe und Nachbetreuung</li>
        </ul>
        <p className={p}>
          Mehr zum{' '}
          <Link to="/sanierung-ablauf-rhein-main">Sanierungsablauf</Link> und zur{' '}
          <Link to="/sanierung/altbausanierung">Altbausanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'warum-radex',
    title: 'Warum Radex für energetische Sanierung',
    content: (
      <>
        <p className={p}>
          <strong>SHK-Meisterkompetenz:</strong> Heizung und Gebäudetechnik unter Meisterverantwortung von Bernd Knoop.
        </p>
        <p className={p}>
          <strong>Gesamtsystem statt Einzelaktionen:</strong> Dämmung, Fenster, Lüftung und Innenausbau werden
          abgestimmt.
        </p>
        <p className={p}>
          <strong>Förderung mitdenken:</strong> Antragszeitpunkte und technische Anforderungen werden im Ablauf
          berücksichtigt – ohne Garantieversprechen.
        </p>
        <p className={p}>
          <strong>Regional im Rhein-Main-Gebiet:</strong> kurze Wege, lokale Bestandserfahrung und ein fester
          Ansprechpartner.
        </p>
      </>
    ),
  },
];
