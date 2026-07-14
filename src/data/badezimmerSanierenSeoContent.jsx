import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const badezimmerSanierenSeoIntro = (
  <>
    <p className={p}>
      Wenn Menschen über eine Badsanierung nachdenken, stellen sie sich meist zuerst das fertige Ergebnis vor: eine
      bodengleiche Dusche, helle Fliesen, vielleicht einen frei stehenden Waschtischunterschrank. Was dazwischen liegt –
      Planung, Koordination, Technik, Logistik – ist weniger sichtbar, aber entscheidend dafür, ob eine Badsanierung
      reibungslos verläuft oder zur Belastungsprobe wird.
    </p>
    <p className={p}>
      Radex Objektmanagement GmbH übernimmt genau diesen Teil. Als Generalunternehmer und SHK-Meisterbetrieb mit Sitz in
      Rödermark koordinieren wir Badsanierungen im gesamten Rhein-Main-Gebiet – von der ersten Beratung über die{' '}
      <Link to="/badplanung">Badplanung</Link> bis zur schlüsselfertigen Übergabe. Sanitär und Heizungstechnik führen wir
      als Meisterbetrieb unter Verantwortung von Bernd Knoop selbst aus. Weitere Gewerke wie Elektro, Trockenbau,
      Fliesen und Innenausbau werden durch eingespielte Fachbetriebe realisiert, die wir koordinieren und verantworten.
    </p>
    <p className={p}>
      Den thematischen Überblick finden Sie auf der Seite{' '}
      <Link to="/badsanierung-rhein-main">Badsanierung Rhein-Main</Link>. Spezifische Lösungen wie{' '}
      <Link to="/dusche-statt-badewanne">Dusche statt Badewanne</Link>,{' '}
      <Link to="/barrierefreies-bad">barrierefreies Bad</Link> oder <Link to="/gaeste-wc">Gäste-WC</Link> sind dort und
      auf den jeweiligen Themenseiten ausführlich erklärt.
    </p>
  </>
);

export const badezimmerSanierenSeoSections = [
  {
    id: 'komplettbadsanierung',
    title: 'Komplettbadsanierung',
    content: (
      <>
        <p className={p}>
          Bei einer Komplettbadsanierung wird das Bad vollständig entkernt und neu aufgebaut – von der Rohinstallation
          über Abdichtung und Fliesen bis zur schlüsselfertigen Übergabe. Richtig, wenn Leitungen, Abdichtung und
          Grundsubstanz erneuert werden müssen.
        </p>
        <p className={p}>
          Radex plant und koordiniert Komplettbadsanierungen im gesamten Rhein-Main-Gebiet als SHK-Meisterbetrieb und{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link>. Den Überblick finden Sie auf der{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung-Hubseite</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'badmodernisierung',
    title: 'Badmodernisierung',
    content: (
      <>
        <p className={p}>
          Badmodernisierung bedeutet mehr Komfort, bessere Optik und neue Funktionen mit weniger Bauaufwand – neue
          Armaturen, moderne Beleuchtung oder eine zeitgemäße Dusche. Sinnvoll, wenn die Grundsubstanz noch in
          Ordnung ist.
        </p>
        <p className={p}>
          Erfahren Sie mehr über <Link to="/dusche-statt-badewanne">Dusche statt Badewanne</Link> und{' '}
          <Link to="/barrierefreies-bad">barrierefreie Bäder</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'fliesen-oberflaechen',
    title: 'Fliesen & Oberflächen',
    content: (
      <>
        <p className={p}>
          Großformatige Bodenfliesen, Wandfliesen im Wunschformat oder Mosaik – durch routinierte Fliesenleger, die mit
          modernen Abdichtungssystemen vertraut sind. Radex koordiniert Fliesenarbeiten als Teil der Gesamtplanung der{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'aus-einer-hand',
    title: 'Badsanierung aus einer Hand – was das wirklich bedeutet',
    href: '/generalunternehmer-rhein-main',
  },
  {
    id: 'komplett-vs-modernisierung',
    title: 'Komplettbadsanierung, Badmodernisierung oder Teilmaßnahme?',
    content: (
      <>
        <p className={p}>Nicht jede Badsanierung ist ein kompletter Neustart. Typische Vorhaben:</p>
        <ul className={ul}>
          <li>
            <strong>Komplettbadsanierung:</strong> vollständiger Rückbau und Neuaufbau inkl. Leitungen und Abdichtung
          </li>
          <li>
            <strong>Badmodernisierung:</strong> mehr Komfort und Optik mit geringerem Bauaufwand
          </li>
          <li>
            <strong>Teilmaßnahmen:</strong>{' '}
            <Link to="/dusche-statt-badewanne">Dusche statt Badewanne</Link>, neue Armaturen oder gezielte Oberflächen
          </li>
          <li>
            <strong>Barrierefreies Bad:</strong> bewegungsfreundlich und zukunftssicher – Details unter{' '}
            <Link to="/barrierefreies-bad">barrierefreies Bad</Link>
          </li>
          <li>
            <strong>Gäste-WC &amp; kleines Bad:</strong> kompakt geplant auf{' '}
            <Link to="/gaeste-wc">Gäste-WC</Link>
          </li>
        </ul>
        <p className={p}>
          Mehr Überblick auf der{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung-Hubseite</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'ablauf',
    title: 'Von der Idee zum fertigen Bad – so arbeitet Radex',
    content: (
      <>
        <p className={p}>
          <strong>1. Kostenlose Beratung &amp; Bestandsaufnahme:</strong> Wir kommen zu Ihnen und schauen uns das Bad
          gemeinsam an. Dabei klären wir: Welche Leitungen liegen wo? Wie ist der Zustand von Abdichtung, Fliesen und
          Sanitärobjekten? Was möchten Sie verändern? Dieser Termin ist kostenlos und unverbindlich.
        </p>
        <p className={p}>
          <strong>2. Planung &amp; Materialauswahl:</strong> Auf Basis der Bestandsaufnahme entwickeln wir gemeinsam ein
          Konzept: Grundriss, Ausstattung, Materialien, Lichtführung. Eine gute Planung ist die Grundlage für eine
          verlässliche Kostenaussage – mehr unter <Link to="/badplanung">Badplanung</Link>.
        </p>
        <p className={p}>
          <strong>3. Verbindliches Angebot:</strong> Sie erhalten ein konkretes, nachvollziehbares Angebot –
          aufgeschlüsselt nach Leistungsbereichen, ohne versteckte Positionen.
        </p>
        <p className={p}>
          <strong>4. Ausführung &amp; Koordination:</strong> Nach Auftragserteilung übernimmt Radex die komplette
          Steuerung. Rückbau, Rohinstallation, Abdichtung, Trockenbau, Elektro, Fliesen, Ausbau – alle Schritte werden in
          abgestimmter Reihenfolge ausgeführt.
        </p>
        <p className={p}>
          <strong>5. Übergabe:</strong> Das Bad wird vollständig fertiggestellt übergeben – sauber, geprüft, mit allen
          Anschlüssen in Betrieb. Wir stehen auch danach als Ansprechpartner zur Verfügung.
        </p>
      </>
    ),
  },
  {
    id: 'leistungsumfang',
    title: 'Was gehört zu einer Badsanierung?',
    content: (
      <>
        <p className={p}>
          Bei einer Komplettbadsanierung typischerweise: Rückbau, Erneuerung oder Verlegung von Wasser- und
          Abwasserleitungen, Abdichtung aller Nass- und Spritzwasserbereiche, Trockenbau- und Vorwandinstallation,
          Elektroarbeiten, Fliesen sowie Montage von Sanitärobjekten, Armaturen und Badmöbeln.
        </p>
        <p className={p}>
          Sanitär und Heizung führen wir als SHK-Meisterbetrieb selbst aus – mehr unter{' '}
          <Link to="/heizung-sanitaer-rhein-main">Heizung &amp; Sanitär</Link>. Fliesen, Elektro und Trockenbau
          koordinieren wir im Gesamtablauf.
        </p>
      </>
    ),
  },
  {
    id: 'kosten',
    title: 'Kosten einer Badsanierung im Rhein-Main-Gebiet',
    content: (
      <>
        <p className={p}>
          Die Kosten hängen von Badgröße, Umfang der Arbeiten, Zustand der Leitungen und Abdichtung, Materialien und
          Ausstattung sowie Aufwand für Rückbau und ggf. Grundrissänderungen ab. Pauschale Preisangaben ohne
          Bestandsaufnahme sind wenig verlässlich – Radex erstellt nach einem Ortstermin ein verbindliches Angebot.
        </p>
        <p className={p}>
          Erste Orientierung bieten Richtwerte und der{' '}
          <Link to="/badsanierung-kosten">Badsanierung Kostenrechner</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'einsatzgebiet',
    title: 'Badsanierung im Rhein-Main-Gebiet – wo Radex tätig ist',
    content: (
      <>
        <p className={p}>
          Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Der Ausgangspunkt ist
          Rödermark im südlichen Hessen – von dort aus sind wir regelmäßig in der gesamten Rhein-Main-Region aktiv, ohne
          lange Anfahrtszeiten und ohne Aufschläge für die Entfernung.
        </p>
        <p className={p}>
          Zu unseren typischen Einsatzgebieten gehören Frankfurt am Main, Offenbach am Main, Darmstadt und Hanau, aber
          auch Dreieich, Rodgau, Neu-Isenburg, Dietzenbach und Heusenstamm. Viele unserer Kunden kommen aus dem
          Landkreis Offenbach und den angrenzenden Landkreisen Darmstadt-Dieburg und Main-Kinzig. Wir sind auch
          regelmäßig im Wetteraukreis, im Rheingau-Taunus-Kreis und im Aschaffenburger Raum tätig.
        </p>
        <p className={p}>
          Starten Sie mit dem Überblick auf{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung Rhein-Main</Link> oder wählen Sie direkt ein Thema wie{' '}
          <Link to="/dusche-statt-badewanne">Dusche statt Badewanne</Link>,{' '}
          <Link to="/barrierefreies-bad">barrierefreies Bad</Link>, <Link to="/gaeste-wc">Gäste-WC</Link> oder{' '}
          <Link to="/badplanung">Badplanung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'shk-meisterbetrieb',
    title: 'SHK-Meisterbetrieb Bernd Knoop',
    content: (
      <>
        <p className={p}>
          Radex Objektmanagement GmbH ist ein eingetragener SHK-Meisterbetrieb. Betriebsleiter und eingetragener Meister
          ist Bernd Knoop – zugelassen für die Gewerke Sanitär, Heizung, Klimatechnik und Gebäudetechnik. Alle Sanitär-
          und Heizungsarbeiten führen wir als Meisterbetrieb selbst aus.
        </p>
        <p className={p}>
          Für weitere Gewerke – Elektro, Trockenbau, Fliesen, Innenausbau – koordinieren wir eingespielte Fachbetriebe,
          für deren Arbeit wir die Verantwortung tragen. So bleibt die fachliche Qualität und die Koordination in einer
          Hand.
        </p>
      </>
    ),
  },
];
