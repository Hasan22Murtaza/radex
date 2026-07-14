import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';
const h4 = 'br-seo-subheading';

export const generalunternehmerSeoIntro = (
  <>
    <p className={p}>
      Ein Generalunternehmer übernimmt die Gesamtverantwortung für Ihr Sanierungsprojekt – von der ersten Planung bis
      zur schlüsselfertigen Übergabe. Statt selbst verschiedene Handwerksbetriebe zu suchen, zu terminieren und zu
      koordinieren, haben Sie einen festen Ansprechpartner, der sämtliche Gewerke fachlich und organisatorisch steuert.
    </p>
    <p className={p}>
      Gerade bei Projekten mit mehreren Gewerken – etwa Bad, Elektro, Heizung, Innenausbau und Oberflächen – entscheiden
      Abstimmung und Reihenfolge über Zeit, Kosten und Qualität. Radex Objektmanagement GmbH begleitet Sanierungen im
      Rhein-Main-Gebiet als Generalunternehmer und SHK-Meisterbetrieb und sorgt dafür, dass aus vielen Einzelleistungen
      ein strukturiertes Gesamtprojekt wird.
    </p>
  </>
);

export const generalunternehmerSeoSections = [
  {
    id: 'was-ist-ein-generalunternehmer',
    title: 'Was ist ein Generalunternehmer bei einer Sanierung?',
    content: (
      <>
        <p className={p}>
          Ein Generalunternehmer (GU) bündelt Planung, Koordination und Ausführung mehrerer Gewerke unter einem Vertrag.
          Eigentümer müssen nicht selbst Abfolgen, Schnittstellen und Termine steuern. Stattdessen übernimmt der
          Generalunternehmer die Organisation – inklusive Abstimmung der Fachpartner und laufender Qualitätskontrolle.
        </p>
        <p className={p}>Typische Aufgaben eines Generalunternehmers bei einer Sanierung sind:</p>
        <ul className={ul}>
          <li>Bestandsaufnahme und Zielklärung</li>
          <li>Maßnahmen- und Terminplanung</li>
          <li>Abstimmung aller Gewerke</li>
          <li>Material- und Schnittstellenkoordination</li>
          <li>Bauüberwachung und Kommunikation</li>
          <li>Abnahme und schlüsselfertige Übergabe</li>
        </ul>
        <p className={p}>
          Bei Radex bedeutet das konkret: Sie haben einen Ansprechpartner für Ihr Projekt. Heizung, Sanitär und
          Gebäudetechnik werden als SHK-Meisterbetrieb fachlich verantwortet; weitere Gewerke wie Elektro, Trockenbau,
          Fliesen oder Innenausbau werden durch eingespielte Fachpartner koordiniert.
        </p>
      </>
    ),
  },
  {
    id: 'wann-lohnt-sich-ein-gu',
    title: 'Wann lohnt sich ein Generalunternehmer?',
    content: (
      <>
        <p className={p}>
          Ein Generalunternehmer lohnt sich vor allem dann, wenn mehrere Gewerke ineinandergreifen und Fehler in der
          Reihenfolge teuer werden. Typische Anlässe sind:
        </p>
        <ul className={ul}>
          <li>
            <Link to="/komplettbadsanierung-rhein-main">Badsanierungen</Link> mit Sanitär, Abdichtung, Fliesen und Elektro
          </li>
          <li>
            <Link to="/wohnungssanierung-rhein-main">Wohnungssanierungen</Link> nach Kauf oder vor Neuvermietung
          </li>
          <li>
            <Link to="/haussanierung-rhein-main">Haussanierungen</Link> mit Heizung, Elektro, Bad und Innenausbau
          </li>
          <li>
            <Link to="/altbausanierung-rhein-main">Altbausanierungen</Link> mit Bestandsschutz und Technikmodernisierung
          </li>
          <li>Gewerbe- und Objektsanierungen mit klaren Fertigstellungsterminen</li>
        </ul>
        <p className={p}>
          Auch bei Teilsanierungen kann ein GU sinnvoll sein – sobald Schnittstellen entstehen, etwa zwischen Leitungen,
          Elektro und Oberflächen. Entscheidend ist nicht die Projektgröße allein, sondern die Komplexität der Abstimmung.
        </p>
      </>
    ),
  },
  {
    id: 'vorteile-aus-einer-hand',
    title: 'Vorteile einer Sanierung aus einer Hand',
    content: (
      <>
        <p className={p}>
          Wer Einzelgewerke selbst beauftragt, spart auf dem Papier scheinbar Kosten – verliert aber oft Zeit und Kontrolle.
          Ein Generalunternehmer reduziert genau diesen Aufwand.
        </p>
        <h4 className={h4}>Ein Ansprechpartner statt vieler Schnittstellen</h4>
        <p className={p}>
          Sie sprechen mit einer Person über Termin, Qualität und Änderungen. Rückfragen müssen nicht zwischen mehreren
          Betrieben hin und her gehen.
        </p>
        <h4 className={h4}>Klarer Ablauf und bessere Termine</h4>
        <p className={p}>
          Gewerke greifen nur dann sauber ineinander, wenn Reihenfolge und Vorleistungen stimmen. Die Koordination
          verhindert typische Wartezeiten und Doppelarbeiten.
        </p>
        <h4 className={h4}>Transparente Kostenstruktur</h4>
        <p className={p}>
          Nach der Begehung erhalten Sie ein belastbares Festpreisangebot. Änderungen werden nachvollziehbar
          dokumentiert – statt überraschend über Nachträge zu entstehen.
        </p>
        <h4 className={h4}>Technische Verantwortung dort, wo sie hingehört</h4>
        <p className={p}>
          Besonders bei Heizung, Sanitär und Gebäudetechnik profitieren Sie von der SHK-Meisterkompetenz vor Ort. So
          werden technische Entscheidungen früh mit dem Gesamtprojekt verknüpft.
        </p>
      </>
    ),
  },
  {
    id: 'gu-vs-einzelhandwerker',
    title: 'Generalunternehmer oder Einzelhandwerker?',
    content: (
      <>
        <p className={p}>
          Einzelhandwerker sind die richtige Wahl, wenn klar abgegrenzte Arbeiten ohne größere Schnittstellen anstehen –
          etwa ein isolierter Anstrich oder ein einfacher Austausch ohne Öffnungen in Wänden und Böden.
        </p>
        <p className={p}>
          Sobald jedoch Abdichtung, Rohinstallation, Elektro, Trockenbau und Oberflächen nacheinander und aufeinander
          abgestimmt laufen müssen, steigt der Steuerungsaufwand stark. Dann ist der Generalunternehmer meist die
          wirtschaftlichere und entspanntere Lösung – gerade für berufstätige Eigentümer, Vermieter und Käufer vor dem
          Einzug.
        </p>
        <p className={p}>
          Kurz gesagt: Einzelhandwerker liefern Fachleistungen. Der Generalunternehmer liefert das Gesamtergebnis.
        </p>
      </>
    ),
  },
  {
    id: 'ablauf-mit-radex',
    title: 'So läuft eine Sanierung mit Radex als Generalunternehmer ab',
    content: (
      <>
        <p className={p}>
          Jedes Objekt ist anders – der Ablauf folgt dennoch einer klaren Struktur, damit Sie jederzeit wissen, in welcher
          Phase sich Ihr Projekt befindet.
        </p>
        <h4 className={h4}>1. Erstgespräch und Zielklärung</h4>
        <p className={p}>
          Wir besprechen Ihre Ziele, den gewünschten Umfang und Rahmenbedingungen wie Budget, Zeitfenster und Nutzung.
        </p>
        <h4 className={h4}>2. Bestandsaufnahme vor Ort</h4>
        <p className={p}>
          Vor Ort prüfen wir technische Anlagen, sichtbare Mängel und Schnittstellen. Auf Wunsch können Sie vorab Fotos
          per WhatsApp senden.
        </p>
        <h4 className={h4}>3. Maßnahmenplan und Festpreisangebot</h4>
        <p className={p}>
          Aus der Begehung entsteht ein abgestimmtes Konzept mit transparenter Kostenaufstellung und realistischer
          Terminplanung.
        </p>
        <h4 className={h4}>4. Koordinierte Umsetzung</h4>
        <p className={p}>
          Radex steuert alle Gewerke in der richtigen Reihenfolge und begleitet die Bauphase mit einem festen
          Ansprechpartner.
        </p>
        <h4 className={h4}>5. Abnahme und Übergabe</h4>
        <p className={p}>
          Gemeinsame Endabnahme, Dokumentation und schlüsselfertige Übergabe schließen das Projekt ab.
        </p>
      </>
    ),
  },
  {
    id: 'welche-gewerke',
    title: 'Welche Gewerke koordiniert Radex?',
    content: (
      <>
        <p className={p}>
          Als Generalunternehmer koordiniert Radex typischerweise alle Leistungen, die für eine durchgängige Sanierung
          nötig sind – abhängig vom Objekt und Ihrem Zielbild.
        </p>
        <ul className={ul}>
          <li>Heizung, Sanitär und Gebäudetechnik (SHK-Meisterbetrieb)</li>
          <li>Badsanierung inklusive Abdichtung und Fliesenarbeiten</li>
          <li>Elektroinstallation durch Fachpartner</li>
          <li>Trockenbau, Innenausbau und Oberflächen</li>
          <li>Bodenbeläge und Malerarbeiten</li>
          <li>Rückbau sowie Schimmel- und Schadstoffthemen bei Bedarf</li>
        </ul>
        <p className={p}>
          Nicht jedes Projekt braucht jede Leistung. Entscheidend ist, dass die notwendigen Gewerke fachlich und
          zeitlich sauber verbunden werden – statt als lose Einzelaufträge nebeneinander zu laufen.
        </p>
      </>
    ),
  },
  {
    id: 'kosten-und-budget',
    title: 'Kosten und Budget bei einer GU-Sanierung',
    content: (
      <>
        <p className={p}>
          Die Kosten einer Sanierung aus einer Hand hängen vom Objekt, vom Sanierungsstau, von Materialwahl und vom Umfang
          der Gewerke ab. Pauschale Quadratmeterpreise allein reichen selten aus – eine Begehung bleibt die Grundlage.
        </p>
        <p className={p}>
          Für eine erste Orientierung finden Sie detaillierte Kosteninformationen und interaktive Rechner auf den
          jeweiligen Themenseiten:
        </p>
        <ul className={ul}>
          <li>
            <Link to="/badsanierung-kosten">Badsanierung Kosten</Link>
          </li>
          <li>
            <Link to="/wohnungssanierung-kosten">Wohnungssanierung Kosten</Link>
          </li>
          <li>
            <Link to="/haussanierung-kosten">Haussanierung Kosten</Link>
          </li>
          <li>
            <Link to="/altbausanierung-kosten">Altbausanierung Kosten</Link>
          </li>
        </ul>
        <p className={p}>
          Nach der Bestandsaufnahme erhalten Sie ein individuelles Festpreisangebot ohne versteckte Zusatzposten – so
          bleibt Ihr Budget planbar.
        </p>
      </>
    ),
  },
  {
    id: 'rhein-main-gebiet',
    title: 'Generalunternehmer im Rhein-Main-Gebiet',
    content: (
      <>
        <p className={p}>
          Radex arbeitet von Rödermark aus im gesamten Rhein-Main-Gebiet – unter anderem in und um Frankfurt am Main,
          Offenbach, Darmstadt, Wiesbaden, Mainz, Rodgau, Dreieich und vielen weiteren Städten und Gemeinden.
        </p>
        <p className={p}>
          Kurze Wege, regionale Erfahrung und eingespielte Partnernetzwerke sind entscheidend für zuverlässige Termine
          und eine hohe Ausführungsqualität. Mit über 40 Jahren Erfahrung in Sanierung, Umbau und Gebäudetechnik
          begleitet Radex private Eigentümer, Vermieter, Hausverwaltungen und gewerbliche Auftraggeber.
        </p>
        <p className={p}>
          Sie planen eine Sanierung mit mehreren Gewerken? Kontaktieren Sie uns unter{' '}
          <a href="tel:+496074960620">06074 960620</a> oder senden Sie Fotos per WhatsApp – wir geben Ihnen eine erste
          fachliche Einschätzung und planen den nächsten Schritt gemeinsam.
        </p>
      </>
    ),
  },
  {
    id: 'haeufige-fragen-gu',
    title: 'Häufige Fragen zum Generalunternehmer',
    content: (
      <>
        <h4 className={h4}>Muss ich bei Radex immer alle Gewerke beauftragen?</h4>
        <p className={p}>
          Nein. Wenn mehrere Gewerke oder technische Schnittstellen beteiligt sind, kann Radex auch eine Teilsanierung
          oder einen Projektabschnitt koordinieren. Entscheidend ist, was zum Objekt und zum Ziel passt.
        </p>
        <h4 className={h4}>Führt Radex Elektroarbeiten selbst aus?</h4>
        <p className={p}>
          Elektroarbeiten werden durch qualifizierte Elektrofachpartner ausgeführt. Radex plant und koordiniert diese
          Leistungen so, dass sie rechtzeitig und fachlich korrekt in den Bauablauf integriert werden.
        </p>
        <h4 className={h4}>Was passiert bei unerwarteten Funden wie Schadstoffen?</h4>
        <p className={p}>
          Dann wird der Befund fachlich eingeordnet, bevor weitergearbeitet wird. Radex ist für Schimmel- und
          Asbestthemen zertifiziert und verfügt über Sachkunde nach TRGS 519, sodass solche Themen in den Ablauf
          integriert werden können.
        </p>
        <h4 className={h4}>Wie früh sollte ich Radex kontaktieren?</h4>
        <p className={p}>
          Am besten bevor einzelne Gewerke bereits beauftragt sind. Je früher das Objekt bekannt ist, desto sauberer
          lassen sich Reihenfolge, Kostenrahmen und Schnittstellen planen.
        </p>
      </>
    ),
  },
];
