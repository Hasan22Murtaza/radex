import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const heizungSanitaerSeoIntro = (
  <>
    <p className={p}>
      Heizung und Sanitär gehören zu den wichtigsten technischen Grundlagen einer Sanierung. Sie liegen in Wänden,
      Böden und Schächten und müssen geplant sein, bevor Fliesen, Estrich und Oberflächen entstehen. Wer diese Gewerke
      zu spät berücksichtigt, riskiert teure Nacharbeiten.
    </p>
    <p className={p}>
      Die Radex Objektmanagement GmbH ist im Bereich Heizung, Sanitär und Gebäudetechnik durch Bernd Knoop
      SHK-meistergeführt. Eigentümer im Rhein-Main-Gebiet erhalten Heizungsmodernisierung, Wärmepumpe,
      Fußbodenheizung und Sanitärinstallation fachgerecht – abgestimmt auf Bad-, Wohnungs- oder
      Komplettsanierung.
    </p>
  </>
);

export const heizungSanitaerSeoSections = [
  {
    id: 'shk-meisterbetrieb',
    title: 'SHK-Handwerk auf höchstem Niveau',
    content: (
      <>
        <p className={p}>
          Als eingetragener SHK-Meisterbetrieb (Sanitär, Heizung, Klima) sind wir Ihr zertifizierter Partner für die
          fachgerechte Heizungsinstallation und die Sicherung der Trinkwasserhygiene im gesamten Rhein-Main-Gebiet.
          Vom ersten Planungsgespräch über die Wärmebedarfsberechnung bis zur Inbetriebnahme und Wartung erhalten Sie
          alle Leistungen aus einer Hand – ohne Schnittstellenprobleme zwischen verschiedenen Firmen. Bernd Knoop steht
          als eingetragener Meister für die fachliche Verantwortung.
        </p>
        <p className={p}>
          Heizung und Sanitär werden bei Radex nicht isoliert, sondern als Teil des gesamten Sanierungsprojekts
          betrachtet. Die Besonderheit liegt in der frühzeitigen Planung der technischen Grundlagen, lange bevor
          sichtbare Oberflächen entstehen. Mehr zum{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link> und zur{' '}
          <Link to="/sanierung/wohnungssanierung">Wohnungssanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'sanitaerinstallation',
    title: 'Sanitärinstallation im Bad',
    content: (
      <>
        <p className={p}>
          Zur Sanitärinstallation gehören die Verlegung neuer Wasserleitungen, der Anschluss von Dusche, Wanne, WC und
          Waschtisch, die Überprüfung und Erneuerung von Entwässerungsleitungen, die fachgerechte Abdichtung aller
          Nassbereiche sowie die Vorwandinstallation. Auch in Küche und Gäste-WC erneuern wir Wasser-, Warmwasser- und
          Abwasserleitungen.
        </p>
        <p className={p}>
          Veraltete Leitungen sind ein Hygiene- und Gesundheitsrisiko – wir installieren normgerecht nach DIN 1988 und
          der Trinkwasserverordnung und realisieren auf Wunsch barrierefreie Sanitärlösungen. Mehr zur{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'heizungsmodernisierung',
    title: 'Heizungsmodernisierung & Wärmepumpe',
    content: (
      <>
        <p className={p}>
          Eine Heizungsmodernisierung ist mehr als ein neues Heizgerät. Entscheidend ist das Zusammenspiel aus
          Wärmeerzeuger, Wärmeverteilung, Heizkörpern bzw. Flächenheizung und dem energetischen Zustand des Gebäudes.
          Wir analysieren die Heizlast, führen einen hydraulischen Abgleich durch und sorgen dafür, dass
          Vorlauftemperaturen und Heizflächen optimal aufeinander abgestimmt sind.
        </p>
        <p className={p}>
          Der Umstieg von fossilen Brennstoffen auf eine Wärmepumpe ist einer der wichtigsten Schritte zu einem
          zukunftssicheren Heizsystem. Auch hybride Lösungen oder die Anbindung an eine Photovoltaikanlage realisieren
          wir zuverlässig. Details zur{' '}
          <Link to="/waermepumpe-rhein-main">Wärmepumpe</Link> und zu{' '}
          <Link to="/energetische-sanierung-rhein-main">Energie & Förderung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'foerdermittel',
    title: 'Fördermittel & Beratung',
    content: (
      <>
        <p className={p}>
          Die Beantragung von Fördermitteln über BAFA und KfW ist komplex und an Fristen gebunden. Wir arbeiten eng mit
          zertifizierten Energie-Effizienz-Experten zusammen, die Sie durch den Förderdschungel begleiten – damit Sie
          keine Zuschüsse verschenken.
        </p>
        <p className={p}>
          Sprechen Sie uns frühzeitig an, denn die Förderung muss in der Regel vor Auftragsvergabe beantragt werden.
          Über die Bundesförderung für effiziente Gebäude (BEG) sind aktuell Zuschüsse von bis zu 70 % für den Einbau
          einer Wärmepumpe möglich. Mehr zu{' '}
          <Link to="/energetische-sanierung-rhein-main">Energie & Förderung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'fuer-wen',
    title: 'Für wen ist Heizung & Sanitär sinnvoll?',
    content: (
      <>
        <p className={p}>
          Heizung und Sanitär als Teil des gesamten Sanierungsprojekts gedacht – typische Auftraggeber sind:
        </p>
        <ul className={ul}>
          <li>
            <strong>Bauherren:</strong> Komplette Heizungs- und Sanitärtechnik für Neubauten – effizient geplant und
            sauber installiert.
          </li>
          <li>
            <strong>Modernisierer:</strong> Austausch der alten Öl- oder Gasheizung gegen eine förderfähige Wärmepumpe
            inkl. Wärmeverteilung und Heizkörpern.
          </li>
          <li>
            <strong>Eigentümer & Vermieter:</strong> Erneuerung veralteter Leitungen, Sicherung der Trinkwasserhygiene
            und Wartung der Anlagen.
          </li>
          <li>
            <strong>Sanierungsprojekte:</strong> Integration der Haustechnik in eine Bad-, Wohnungs- oder
            Komplettsanierung – früh abgestimmt mit Elektro und Trockenbau.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'leistungen',
    title: 'Unsere SHK-Leistungen im Überblick',
    content: (
      <>
        <p className={p}>Heizung, Sanitär und Warmwasser aus einer Hand – unter Meisterverantwortung:</p>
        <ul className={ul}>
          <li>
            <strong>Sanitärinstallation im Bad:</strong> Wasserleitungen, Abwasser, Abdichtung, Vorwandinstallation und
            Warmwasser – fachgerecht nach Norm.
          </li>
          <li>
            <strong>Heizungsmodernisierung:</strong> Nicht nur ein neues Heizgerät, sondern Wärmeverteilung, Heizkörper
            und energetische Maßnahmen im Zusammenspiel.
          </li>
          <li>
            <strong>Wärmepumpe:</strong> Luft-Wasser- und Sole-Wasser-Wärmepumpen inkl. hydraulischem Abgleich, Auslegung
            und Förderabwicklung.
          </li>
          <li>
            <strong>Fußbodenheizung:</strong> Nachträgliches Einfräsen im Bestand oder klassische Verlegung im Neubau –
            ideal für niedrige Vorlauftemperaturen.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'kosten',
    title: 'Kosten für Heizung & Sanitär',
    content: (
      <>
        <p className={p}>
          Preise sind Richtwerte und abhängig von Gebäude, Technik und Aufwand – nach Bestandsaufnahme erstellen wir ein
          konkretes Angebot.
        </p>
        <ul className={ul}>
          <li>
            <strong>Wärmepumpe (inkl. Einbau):</strong> ab €25.000
          </li>
          <li>
            <strong>Fußbodenheizung:</strong> ab €50 / m²
          </li>
          <li>
            <strong>Heizkörper-Austausch:</strong> ab €600 / Stück
          </li>
        </ul>
        <p className={p}>
          Für eine individuelle Einschätzung senden Sie uns gerne Fotos Ihrer Anlage oder vereinbaren Sie eine
          Besichtigung.
        </p>
      </>
    ),
  },
  {
    id: 'waermepumpe-altbau',
    title: 'Ist eine Wärmepumpe im Altbau sinnvoll?',
    content: (
      <>
        <p className={p}>
          Oft ja. Entscheidend ist eine möglichst niedrige Vorlauftemperatur, die wir durch große Heizflächen
          (Fußboden- oder Niedertemperaturheizkörper) und verbesserte Dämmung erreichen. Im Rahmen einer Vor-Ort-Analyse
          prüfen wir die Heizlast Ihres Gebäudes und sagen Ihnen verbindlich, ob sich eine Wärmepumpe lohnt.
        </p>
        <p className={p}>
          Mehr Details finden Sie auf unserer Seite zur <Link to="/waermepumpe-rhein-main">Wärmepumpe</Link> und zur{' '}
          <Link to="/sanierung/altbausanierung">Altbausanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'leitungen-erneuern',
    title: 'Müssen Wasserleitungen bei einer Sanierung erneuert werden?',
    content: (
      <>
        <p className={p}>
          Alte verzinkte Stahl- oder Bleileitungen sollten dringend ersetzt werden, da sie verkalken und die
          Trinkwasserqualität beeinträchtigen. Bei einer Bad- oder Komplettsanierung erneuern wir die Leitungen direkt
          mit, solange die Wände ohnehin geöffnet sind – das ist meist die wirtschaftlichste Lösung.
        </p>
      </>
    ),
  },
  {
    id: 'wartung',
    title: 'Wartung & Störungsdienst',
    content: (
      <>
        <p className={p}>
          Als SHK-Meisterbetrieb warten wir Ihre Heizungs- und Sanitäranlagen und stehen bei Störungen wie
          Heizungsausfall oder Wasserschäden zur Verfügung.{' '}
          <Link to="/kontakt">Kontaktieren Sie uns</Link>, um einen Wartungstermin zu vereinbaren.
        </p>
      </>
    ),
  },
  {
    id: 'fazit',
    title: 'Fazit: Haustechnik früh planen',
    content: (
      <>
        <p className={p}>
          Ob Heizungsmodernisierung, Wärmepumpe, Fußbodenheizung oder Sanitärinstallation – erfolgreiche Haustechnik
          beginnt mit frühzeitiger Planung und Meisterverantwortung. Radex integriert Heizung und Sanitär in Ihr
          Sanierungsprojekt, damit Technik und Oberflächen sauber ineinandergreifen.
        </p>
        <p className={p}>
          Sie planen Heizung & Sanitär im Rhein-Main-Gebiet?{' '}
          <Link to="/kontakt">Sprechen Sie uns an</Link> – wir beraten Sie persönlich und erstellen nach Besichtigung
          ein transparentes Angebot.
        </p>
      </>
    ),
  },
];
