import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const duscheStattBadewanneSeoIntro = (
  <>
    <p className={p}>
      Der Umbau von Badewanne zu Dusche ist eine der häufigsten Badsanierungen im Rhein-Main-Gebiet. Mehr Komfort,
      bessere Nutzung der Fläche und barrierearme Einstiege machen die Dusche für viele Eigentümer zur klaren Wahl.
    </p>
    <p className={p}>
      Radex plant Entwässerung, Abdichtung und Installationsführung sorgfältig – als SHK-Meisterbetrieb unter
      Verantwortung von Bernd Knoop. So entsteht ein dauerhaft dichtes, komfortables Bad statt einer schnellen Optiklösung.
    </p>
  </>
);

export const duscheStattBadewanneSeoSections = [
  {
    id: 'warum-dusche',
    title: 'Warum Dusche statt Badewanne?',
    content: (
      <>
        <p className={p}>
          Eine bodengleiche oder niedrige Dusche ist im Alltag oft praktischer als eine Wanne. Auf kleiner Fläche lässt
          sich mit einer Dusche meist mehr Nutzfläche schaffen – und die Stolpergefahr sinkt.
        </p>
        <p className={p}>
          Dazu kommt die Wertsteigerung: Ein modernes Bad mit zeitgemäßer Dusche wirkt beim Verkauf oder der Vermietung
          deutlich attraktiver. Mehr zur{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'technik',
    title: 'Technik: Entwässerung, Gefälle und Abdichtung',
    content: (
      <>
        <p className={p}>
          Entscheidend beim Umbau sind Entwässerung, ausreichendes Gefälle und die fachgerechte Abdichtung der
          Nassbereiche. Wer hier spart, riskiert Feuchteschäden hinter Fliesen und Verkleidungen.
        </p>
        <p className={p}>
          Radex prüft den Bestand vor Ort und plant die Installationsführung so, dass Wanne, Abläufe und neue
          Duschtechnik sauber ineinandergreifen – abgestimmt auf Trockenbau und Fliesen.
        </p>
      </>
    ),
  },
  {
    id: 'varianten',
    title: 'Varianten: Walk-in, Duschkabine und barrierearm',
    content: (
      <>
        <p className={p}>Je nach Wunsch und Grundriss kommen unterschiedliche Lösungen infrage:</p>
        <ul className={ul}>
          <li>Walk-in-Dusche mit bodengleichem Einstieg</li>
          <li>Duschkabine mit niedriger Einstiegsschwelle</li>
          <li>Barrierearme oder barrierefreie Ausführung mit Haltegriffen</li>
        </ul>
        <p className={p}>
          Mehr zum{' '}
          <Link to="/barrierefreies-bad">barrierefreien Bad</Link> und zur{' '}
          <Link to="/heizung-sanitaer-rhein-main">Sanitärinstallation</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'kosten',
    title: 'Kosten: Dusche statt Badewanne',
    content: (
      <>
        <p className={p}>
          Die Kosten hängen von Umfang, Abdichtung, Fliesen und Ausstattung ab. Orientierungswerte für verwandte
          Badsanierungen liegen typischerweise zwischen Gäste-WC und Komfortbad.
        </p>
        <p className={p}>
          Nach dem Ortstermin erhalten Sie ein verbindliches Festpreisangebot. Nutzen Sie auch den{' '}
          <Link to="/badsanierung-kosten">Badsanierung Kostenrechner</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'ablauf',
    title: 'Ablauf des Umbaus',
    content: (
      <>
        <p className={p}>Von der Beratung bis zur Übergabe begleitet Radex den Umbau strukturiert:</p>
        <ul className={ul}>
          <li>Kostenlose Erstberatung und Vor-Ort-Termin</li>
          <li>Bestandsaufnahme von Entwässerung und Abdichtung</li>
          <li>Planung und Festpreisangebot</li>
          <li>Rückbau der Wanne, Rohinstallation, Abdichtung</li>
          <li>Fliesen, Montage und schlüsselfertige Übergabe</li>
        </ul>
      </>
    ),
  },
  {
    id: 'warum-radex',
    title: 'Warum Radex für den Umbau',
    content: (
      <>
        <p className={p}>
          <strong>SHK-Meisterbetrieb:</strong> Sanitärarbeiten unter Meisterverantwortung von Bernd Knoop.
        </p>
        <p className={p}>
          <strong>Abdichtung im Fokus:</strong> Feuchteschutz und Gefälle werden nicht dem Zufall überlassen.
        </p>
        <p className={p}>
          <strong>Alles aus einer Hand:</strong> Elektro, Trockenbau und Fliesen werden mitgeplant und koordiniert.
        </p>
      </>
    ),
  },
];

export const barrierefreiesBadSeoIntro = (
  <>
    <p className={p}>
      Ein barrierefreies Bad bedeutet mehr Sicherheit und Komfort – nicht nur im Alter. Bodengleiche Duschen,
      Haltegriffe und gut geplante Bewegungsflächen machen das Bad langfristig nutzbar für alle Lebensphasen.
    </p>
    <p className={p}>
      Radex plant barrierefreie Bäder fachgerecht und koordiniert alle Gewerke. Im Sanitärbereich arbeitet der Betrieb
      als SHK-Meisterbetrieb mit Bernd Knoop als Meister und Betriebsleiter.
    </p>
  </>
);

export const barrierefreiesBadSeoSections = [
  {
    id: 'was-bedeutet',
    title: 'Was bedeutet barrierefreies Bad?',
    content: (
      <>
        <p className={p}>
          Barrierefreiheit im Bad meint vor allem schwellenlose oder niedrige Einstiege, ausreichend Bewegungsfläche,
          erreichbare Armaturen und rutschhemmende Beläge. Oft reicht eine barrierearme Planung – je nach Bedarf und
          Budget.
        </p>
        <p className={p}>
          Früh geplant spart spätere teure Umbauten und erhält die Wohnqualität. Mehr zur{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'elemente',
    title: 'Typische Elemente eines barrierefreien Bads',
    content: (
      <>
        <ul className={ul}>
          <li>Bodengleiche Dusche mit Gefälle und sicherer Entwässerung</li>
          <li>Haltegriffe und stabile Montagepunkte</li>
          <li>Unterfahrbarer Waschtisch und gut erreichbare Armaturen</li>
          <li>Rutschhemmende Fliesen und ausreichend Bewegungsfläche</li>
          <li>Bei Bedarf Platz für Hilfsmittel oder Rollstuhl</li>
        </ul>
        <p className={p}>
          Der Umbau von{' '}
          <Link to="/dusche-statt-badewanne">Dusche statt Badewanne</Link> ist oft der erste Schritt.
        </p>
      </>
    ),
  },
  {
    id: 'foerderung',
    title: 'Förderung für barrierefreie Maßnahmen',
    content: (
      <>
        <p className={p}>
          Je nach Maßnahme und Voraussetzungen können Förderprogramme greifen. Förderfähigkeit und Antragszeitpunkt
          müssen immer aktuell geprüft werden – Radex ersetzt keine Förderzusage, kann das Thema aber im Ablauf
          mitdenken.
        </p>
        <p className={p}>
          Mehr zu{' '}
          <Link to="/energetische-sanierung-rhein-main">Energie &amp; Förderung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'kosten',
    title: 'Kosten eines barrierefreien Bads',
    content: (
      <>
        <p className={p}>
          Die Kosten hängen von Badgröße, Bewegungsflächen, Sanitärobjekten und dem Umfang der Gewerke ab. Nach dem
          Ortstermin erhalten Sie ein Festpreisangebot.
        </p>
        <p className={p}>
          Erste Orientierung bietet der{' '}
          <Link to="/badsanierung-kosten">Badsanierung Kostenrechner</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'ablauf',
    title: 'Ablauf der barrierefreien Badsanierung',
    content: (
      <>
        <ul className={ul}>
          <li>Beratung zu Bedarf und Alltagssituation</li>
          <li>Vor-Ort-Aufmaß und Bestandsaufnahme</li>
          <li>Grundriss- und Bewegungsflächenplanung</li>
          <li>Festpreisangebot und Materialabstimmung</li>
          <li>Koordinierte Ausführung und Übergabe</li>
        </ul>
      </>
    ),
  },
  {
    id: 'warum-radex',
    title: 'Warum Radex für barrierefreie Bäder',
    content: (
      <>
        <p className={p}>
          <strong>SHK-Meisterbetrieb:</strong> Sanitär und Abdichtung unter Meisterverantwortung.
        </p>
        <p className={p}>
          <strong>Durchdachte Planung:</strong> Bewegungsflächen und Alltagstauglichkeit stehen im Vordergrund.
        </p>
        <p className={p}>
          <strong>Regional &amp; festpreisbasiert:</strong> Rhein-Main-Gebiet, klarer Ablauf, ein Ansprechpartner.
        </p>
      </>
    ),
  },
];

export const gaesteWcSeoIntro = (
  <>
    <p className={p}>
      Auf kleiner Fläche ein helles, funktionales Gäste-WC schaffen – das gelingt mit klarer Planung, modernen
      Sanitärobjekten und fachgerechter Installation. Radex kennt die typischen Grundrisse im Rhein-Main-Gebiet.
    </p>
    <p className={p}>
      Als SHK-Meisterbetrieb modernisiert Radex Gäste-WCs mit Festpreis nach Begehung – von der Technik bis zur
      fertigen Oberfläche.
    </p>
  </>
);

export const gaesteWcSeoSections = [
  {
    id: 'kleine-raeume',
    title: 'Gäste-WC: kleine Räume optimal nutzen',
    content: (
      <>
        <p className={p}>
          Enge Grundrisse, schräge Wände und begrenzte Leitungsführung sind typisch für Gäste-WCs. Mit passenden
          Sanitärobjekten, Vorwandtechnik und heller Gestaltung entsteht trotzdem ein hochwertiger Eindruck.
        </p>
        <p className={p}>
          Mehr zur{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung</Link> und zur{' '}
          <Link to="/heizung-sanitaer-rhein-main">Sanitärinstallation</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'massnahmen',
    title: 'Typische Maßnahmen bei der Gäste-WC-Sanierung',
    content: (
      <>
        <ul className={ul}>
          <li>Neue Sanitärobjekte, Armaturen und Oberflächen</li>
          <li>Platzoptimierung durch clevere Grundrisslösungen</li>
          <li>Leitungen, Abdichtung und Entwässerung erneuern</li>
          <li>Aufwertung vor Vermietung oder Verkauf</li>
        </ul>
      </>
    ),
  },
  {
    id: 'kosten',
    title: 'Was kostet ein Gäste-WC?',
    content: (
      <>
        <p className={p}>Gäste-WCs sind oft günstiger als Komplettbäder – der genaue Umfang entscheidet:</p>
        <ul className={ul}>
          <li>
            <strong>Basis:</strong> ab ca. 5.000&nbsp;€
          </li>
          <li>
            <strong>Komfort:</strong> ab ca. 7.500&nbsp;€
          </li>
          <li>
            <strong>Premium:</strong> ab ca. 10.000&nbsp;€
          </li>
        </ul>
        <p className={p}>
          Nach dem Ortstermin erhalten Sie ein Festpreisangebot. Mehr unter{' '}
          <Link to="/badsanierung-kosten">Badsanierung Kosten</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'ablauf',
    title: 'Ablauf der Gäste-WC-Sanierung',
    content: (
      <>
        <ul className={ul}>
          <li>Kostenlose Beratung und Aufmaß</li>
          <li>Planung von Layout und Ausstattung</li>
          <li>Festpreisangebot</li>
          <li>Ausführung inkl. Technik und Oberflächen</li>
          <li>Übergabe</li>
        </ul>
      </>
    ),
  },
  {
    id: 'warum-radex',
    title: 'Warum Radex für Ihr Gäste-WC',
    content: (
      <>
        <p className={p}>
          <strong>Erfahrung mit Kompaktbädern:</strong> Typische Rhein-Main-Grundrisse und praxiserprobte Lösungen.
        </p>
        <p className={p}>
          <strong>SHK-Meisterqualität:</strong> Leitungen und Abdichtung fachgerecht – auch auf kleiner Fläche.
        </p>
        <p className={p}>
          <strong>Festpreis &amp; ein Ansprechpartner:</strong> Transparent von der ersten Einschätzung bis zur Übergabe.
        </p>
      </>
    ),
  },
];
