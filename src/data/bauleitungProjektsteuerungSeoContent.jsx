import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const bauleitungProjektsteuerungSeoIntro = (
  <>
    <p className={p}>
      Eine Sanierung besteht häufig aus zahlreichen Entscheidungen, Abhängigkeiten und Übergängen zwischen unterschiedlichen
      Gewerken. Dabei reicht es nicht aus, einzelne Handwerksleistungen lediglich nacheinander zu beauftragen. Entscheidend
      ist, dass Planung, Ausführung und Kommunikation als zusammenhängender Prozess organisiert werden.
    </p>
    <p className={p}>
      Radex übernimmt die Bauleitung und Projektsteuerung für Sanierungsprojekte im Rhein-Main-Gebiet. Der konkrete
      Leistungsumfang wird passend zum Gebäude, zur Nutzung und zur Aufgabenverteilung zwischen Eigentümern, Planern und
      ausführenden Fachbetrieben festgelegt.
    </p>
  </>
);

export const bauleitungProjektsteuerungSeoSections = [
  {
    id: 'bauleitung-sanierung-bestand',
    title: 'Bauleitung bei Sanierungen im Bestand',
    content: (
      <>
        <p className={p}>
          Sanierungen im Bestand unterscheiden sich grundlegend von vollständig neu geplanten Bauvorhaben. Nicht alle
          Leitungsverläufe, Wandaufbauten oder früheren Veränderungen sind vor Beginn der Arbeiten sichtbar oder ausreichend
          dokumentiert.
        </p>
        <p className={p}>
          Eine strukturierte Bauleitung berücksichtigt diese Unsicherheiten bereits bei der Vorbereitung. Der vorhandene
          Zustand wird geprüft, bekannte Risiken werden eingeordnet und notwendige Entscheidungen werden in den Projektablauf
          integriert.
        </p>
        <p className={p}>
          So kann auch dann geordnet weitergearbeitet werden, wenn sich während des Rückbaus zusätzliche Aufgaben ergeben.
        </p>
        <p className={p}>
          <Link to="/kernsanierung-rhein-main">Kernsanierung Rhein-Main</Link>
          {' · '}
          <Link to="/altbausanierung-rhein-main">Altbausanierung Rhein-Main</Link>
        </p>
      </>
    ),
  },
  {
    id: 'gewerke-schnittstellen-koordinieren',
    title: 'Schnittstellen zwischen den Gewerken koordinieren',
    content: (
      <>
        <p className={p}>
          Viele Probleme bei Sanierungen entstehen nicht innerhalb eines einzelnen Gewerks, sondern an den Übergängen zwischen
          mehreren Arbeiten. Leitungen müssen beispielsweise fertiggestellt und geprüft sein, bevor Wände geschlossen oder
          Oberflächen hergestellt werden.
        </p>
        <p className={p}>
          Radex koordiniert diese Schnittstellen und stimmt die erforderliche Reihenfolge mit den beteiligten Fachbetrieben ab.
          SHK-Leistungen werden unter eigener Meisterverantwortung eingebunden. Elektroarbeiten und weitere zulassungspflichtige
          Leistungen übernehmen entsprechend qualifizierte Fachpartner.
        </p>
        <p className={p}>
          Eine klare Schnittstellenplanung reduziert unnötige Rückfragen, Wartezeiten und nachträgliche Eingriffe in bereits
          fertiggestellte Bereiche.
        </p>
        <p className={p}>
          <Link to="/heizung-sanitaer-rhein-main">Heizung &amp; Sanitär Rhein-Main</Link>
          {' · '}
          <Link to="/elektroinstallation-rhein-main">Elektroinstallation Rhein-Main</Link>
          {' · '}
          <Link to="/innenausbau-umbau-rhein-main">Innenausbau &amp; Umbau Rhein-Main</Link>
        </p>
      </>
    ),
  },
  {
    id: 'projektsteuerung-vor-baubeginn',
    title: 'Projektsteuerung vor Beginn der Bauarbeiten',
    content: (
      <>
        <p className={p}>
          Eine wirksame Projektsteuerung beginnt nicht erst mit dem ersten Handwerkertermin. Vor dem Baustart sollten Ziele,
          Leistungsumfang, Zuständigkeiten, Materialentscheidungen und Abhängigkeiten zwischen den Gewerken möglichst eindeutig
          geklärt sein.
        </p>
        <p className={p}>
          Radex strukturiert diese Vorbereitung und entwickelt einen Ablauf, der zur Immobilie und zum geplanten Sanierungsumfang
          passt. Dabei wird auch geprüft, welche Entscheidungen der Auftraggeber vor Beginn der jeweiligen Bauphase treffen
          muss.
        </p>
        <p className={p}>
          Je besser ein Projekt vorbereitet ist, desto geringer ist der spätere Improvisationsbedarf auf der Baustelle.
        </p>
        <p className={p}>
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer Rhein-Main</Link>
        </p>
      </>
    ),
  },
  {
    id: 'bauleitung-bewohnte-immobilie',
    title: 'Sanierung in bewohnten Immobilien organisieren',
    content: (
      <>
        <p className={p}>
          Sanierungsarbeiten in einer bewohnten Wohnung oder einem genutzten Haus erfordern eine besonders sorgfältige
          Organisation. Zugänge, Schutzmaßnahmen, Staubbelastung, Wasserunterbrechungen und nutzbare Bereiche müssen frühzeitig
          berücksichtigt werden.
        </p>
        <p className={p}>
          Nicht jedes Vorhaben kann sinnvoll während der Nutzung ausgeführt werden. Radex prüft deshalb gemeinsam mit dem
          Auftraggeber, welche Arbeiten abschnittsweise möglich sind und wann eine vorübergehende Räumung einzelner Bereiche
          erforderlich werden kann.
        </p>
        <p className={p}>
          Klare Absprachen helfen dabei, die Belastung für Bewohner so planbar wie möglich zu halten.
        </p>
        <p className={p}>
          <Link to="/teilsanierung-rhein-main">Teilsanierung Rhein-Main</Link>
        </p>
      </>
    ),
  },
  {
    id: 'bauleitung-hausverwaltung-weg',
    title: 'Abstimmung mit Hausverwaltung und WEG',
    content: (
      <>
        <p className={p}>
          Bei Arbeiten in einer Eigentumswohnung können neben dem Sondereigentum auch gemeinschaftlich relevante Bauteile oder
          technische Anschlüsse betroffen sein. Je nach Maßnahme müssen deshalb Hausverwaltung, Eigentümergemeinschaft oder
          weitere Ansprechpartner einbezogen werden.
        </p>
        <p className={p}>
          Radex unterstützt bei der projektbezogenen Abstimmung und stellt die für die Ausführung benötigten Informationen
          zusammen. Rechtliche oder genehmigungsbezogene Entscheidungen verbleiben bei den jeweils verantwortlichen Beteiligten.
        </p>
        <p className={p}>
          Eine frühzeitige Klärung verhindert, dass notwendige Freigaben erst während der laufenden Arbeiten eingeholt werden
          müssen.
        </p>
      </>
    ),
  },
  {
    id: 'bauleitung-auswaertige-eigentuemer',
    title: 'Bauleitung für auswärtige Eigentümer',
    content: (
      <>
        <p className={p}>
          Nicht jeder Eigentümer kann regelmäßig selbst auf der Baustelle sein. Das betrifft insbesondere Kapitalanleger,
          Erbengemeinschaften oder Auftraggeber, die außerhalb des Rhein-Main-Gebiets wohnen.
        </p>
        <p className={p}>
          Ein zentraler Projektleiter bündelt Rückfragen, dokumentiert wichtige Projektstände und bereitet notwendige
          Entscheidungen vor. Dadurch bleibt der Auftraggeber eingebunden, ohne jeden Termin persönlich begleiten zu müssen.
        </p>
        <p className={p}>
          Der Umfang und die Form der Dokumentation werden passend zum jeweiligen Projekt vereinbart.
        </p>
      </>
    ),
  },
  {
    id: 'unerwartete-befunde-sanierung',
    title: 'Umgang mit unerwarteten Befunden',
    content: (
      <>
        <p className={p}>
          Erst nach dem Öffnen von Böden, Wänden oder Verkleidungen wird manchmal sichtbar, dass zusätzliche Schäden oder
          veraltete Installationen vorhanden sind. Möglich sind beispielsweise Feuchtigkeit, beschädigte Leitungen, ungeeignete
          Untergründe oder ein Schadstoffverdacht.
        </p>
        <p className={p}>
          In solchen Situationen muss zunächst geklärt werden, welche Untersuchung oder Fachleistung erforderlich ist. Radex
          koordiniert die nächsten Schritte und bindet bei Bedarf geeignete Spezialisten ein.
        </p>
        <p className={p}>
          Zusätzliche Maßnahmen werden nicht einfach ungeprüft ausgeführt, sondern zunächst eingeordnet und mit dem
          Auftraggeber abgestimmt.
        </p>
        <p className={p}>
          <Link to="/schadstoffsanierung-rhein-main">Schadstoffsanierung Rhein-Main</Link>
          {' · '}
          <Link to="/schimmelsanierung-rhein-main">Schimmelsanierung Rhein-Main</Link>
          {' · '}
          <Link to="/asbestsanierung-rhein-main">Asbestsanierung Rhein-Main</Link>
        </p>
      </>
    ),
  },
  {
    id: 'materialauswahl-baustellenlogistik',
    title: 'Materialauswahl und Baustellenlogistik',
    content: (
      <>
        <p className={p}>
          Materialentscheidungen beeinflussen nicht nur die Gestaltung, sondern auch Lieferzeiten, Anschlüsse und den zeitlichen
          Bauablauf. Werden Sanitärobjekte, Fliesen, Türen oder Bodenbeläge zu spät ausgewählt, können Folgearbeiten nicht wie
          geplant beginnen.
        </p>
        <p className={p}>
          Zur Projektsteuerung gehört deshalb, relevante Entscheidungen rechtzeitig vorzubereiten und benötigte Materialien in
          den Ablauf einzuordnen. Auch Anlieferung, Zwischenlagerung, Entsorgung und Zugänglichkeit der Baustelle müssen
          berücksichtigt werden.
        </p>
        <p className={p}>
          Besonders bei Wohnungen, engen Zufahrten oder genutzten Gewerbeobjekten ist eine abgestimmte Logistik entscheidend.
        </p>
      </>
    ),
  },
  {
    id: 'aenderungen-sanierung-steuern',
    title: 'Änderungen während der Sanierung steuern',
    content: (
      <>
        <p className={p}>
          Während einer Sanierung können neue Wünsche entstehen oder Anpassungen aufgrund des Bestands notwendig werden. Jede
          Änderung kann Auswirkungen auf Kosten, Termine, Materialien und nachfolgende Gewerke haben.
        </p>
        <p className={p}>
          Eine professionelle Projektsteuerung bewertet deshalb nicht nur den einzelnen Änderungswunsch, sondern auch dessen
          Folgen für das Gesamtprojekt. Erst danach wird entschieden, wie die Anpassung sinnvoll in den Ablauf integriert werden
          kann.
        </p>
        <p className={p}>
          Dadurch bleiben Entscheidungen nachvollziehbar und unkontrollierte Veränderungen auf der Baustelle werden vermieden.
        </p>
      </>
    ),
  },
  {
    id: 'abnahme-dokumentation-projektuebergabe',
    title: 'Abnahme, Dokumentation und Projektübergabe',
    content: (
      <>
        <p className={p}>
          Mit der Fertigstellung der handwerklichen Arbeiten ist das Projekt noch nicht vollständig abgeschlossen. Vor der
          Übergabe werden die vereinbarten Leistungen gemeinsam betrachtet und noch offene Punkte nachvollziehbar festgehalten.
        </p>
        <p className={p}>
          Radex koordiniert die abschließenden Arbeiten und begleitet die strukturierte Projektübergabe. Welche Unterlagen,
          Nachweise oder Dokumentationen bereitgestellt werden, richtet sich nach dem vereinbarten Leistungsumfang und den
          beteiligten Fachgewerken.
        </p>
        <p className={p}>
          So erhält der Auftraggeber einen klaren Abschluss statt einer Sammlung unverbundener Einzeltermine.
        </p>
      </>
    ),
  },
];
