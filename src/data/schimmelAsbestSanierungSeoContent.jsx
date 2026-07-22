import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const schimmelAsbestSanierungSeoIntro = (
  <>
    <p className={p}>
      Schimmel, Asbest und andere Gebäudeschadstoffe können unterschiedliche Bauteile, Materialien und
      Nutzungsbereiche betreffen. Welche Maßnahmen erforderlich sind, hängt vom jeweiligen Stoff, dem Zustand des
      Materials, dem Umfang der Belastung und der geplanten Nutzung des Gebäudes ab.
    </p>
    <p className={p}>
      Radex koordiniert die einzelnen Schritte von der Bestandsaufnahme über die fachgerechte Untersuchung und Sanierung
      bis zur Wiederherstellung der betroffenen Räume. Bei spezialisierten oder gesetzlich geregelten Leistungen arbeiten
      wir mit entsprechend qualifizierten Fachbetrieben, Sachverständigen und Laboren zusammen.
    </p>
  </>
);

export const schimmelAsbestSanierungSeoSections = [
  {
    id: 'schadstofferkundung-vor-sanierung',
    title: 'Schadstofferkundung vor Umbau und Sanierung',
    content: (
      <>
        <p className={p}>
          Vor Umbau-, Rückbau- oder Modernisierungsarbeiten sollte geklärt werden, ob schadstoffverdächtige Baustoffe
          vorhanden sind. Besonders bei älteren Gebäuden können Bodenaufbauten, Klebstoffe, Dämmstoffe, Fugenmassen,
          Beschichtungen oder technische Bauteile betroffen sein.
        </p>
        <p className={p}>
          Eine frühzeitige Erkundung reduziert ungeplante Baustopps und schafft eine verlässliche Grundlage für
          Ausschreibung, Schutzmaßnahmen, Entsorgung und Terminplanung.
        </p>
        <p className={p}>
          <Link to="/schadstoffsanierung-rhein-main">Mehr zur Schadstoffsanierung im Rhein-Main-Gebiet</Link>
        </p>
      </>
    ),
  },
  {
    id: 'materialproben-laboranalysen',
    title: 'Materialproben und Laboranalysen',
    content: (
      <>
        <p className={p}>
          Verdächtige Baustoffe lassen sich nicht zuverlässig allein anhand von Farbe, Struktur oder Baujahr beurteilen.
          Je nach Ausgangslage kann eine fachgerechte Probenahme mit anschließender Laboranalyse erforderlich sein.
        </p>
        <p className={p}>
          Radex koordiniert bei Bedarf geeignete Fachpartner und stimmt die Untersuchung auf die geplanten Bau- oder
          Sanierungsarbeiten ab. Die Ergebnisse bilden die Grundlage für das weitere Vorgehen.
        </p>
        <p className={p}>
          <Link to="/schadstoffsanierung-rhein-main#schadstoffanalyse">Mehr zur Schadstoffanalyse</Link>
        </p>
      </>
    ),
  },
  {
    id: 'sanierungskonzept-gebaeudeschadstoffe',
    title: 'Sanierungskonzepte für belastete Gebäude',
    content: (
      <>
        <p className={p}>
          Ein Sanierungskonzept beschreibt, welche Bereiche betroffen sind, wie der Arbeitsbereich gesichert wird und
          nach welchem Verfahren belastete Materialien bearbeitet oder entfernt werden.
        </p>
        <p className={p}>
          Dabei werden unter anderem Zugangswege, Abschottungen, Luftführung, persönliche Schutzausrüstung,
          Materialtransport, Entsorgung und Wiederherstellung berücksichtigt. So entsteht ein nachvollziehbarer Ablauf für
          alle Projektbeteiligten.
        </p>
        <p className={p}>
          <Link to="/schadstoffsanierung-rhein-main#sanierungskonzept">Mehr zum Sanierungskonzept</Link>
        </p>
      </>
    ),
  },
  {
    id: 'schadstoffsanierung-gewerbeimmobilien',
    title: 'Schadstoffsanierung in Gewerbeimmobilien',
    content: (
      <>
        <p className={p}>
          In Bürogebäuden, Verkaufsflächen, Praxen, Lagerhallen und anderen Gewerbeobjekten müssen Sanierungsmaßnahmen
          häufig mit festen Übergabe- oder Umbauterminen abgestimmt werden.
        </p>
        <p className={p}>
          Radex koordiniert Fachunternehmen und Folgegewerke so, dass notwendige Schutzmaßnahmen, Rückbauarbeiten und der
          anschließende Innenausbau sinnvoll ineinandergreifen. Auch abschnittsweise Sanierungen können abhängig von Befund
          und Gebäudenutzung geplant werden.
        </p>
        <p className={p}>
          <Link to="/schadstoffsanierung-rhein-main#gewerbeimmobilien">Schadstoffsanierung in Gewerbeimmobilien</Link>
        </p>
      </>
    ),
  },
  {
    id: 'schadstoffsanierung-wohngebaeude',
    title: 'Schadstoffsanierung in Wohngebäuden',
    content: (
      <>
        <p className={p}>
          Bei Mehrfamilienhäusern und bewohnten Immobilien spielen neben der technischen Sanierung auch Zugänglichkeit,
          Kommunikation und die Trennung zu weiterhin genutzten Bereichen eine wichtige Rolle.
        </p>
        <p className={p}>
          Der Ablauf wird an den tatsächlichen Befund und die Nutzung des Gebäudes angepasst. Erforderliche Fachleistungen
          werden koordiniert und die betroffenen Räume nach Abschluss der Arbeiten wiederhergestellt.
        </p>
        <p className={p}>
          <Link to="/schadstoffsanierung-rhein-main#wohngebaeude">Schadstoffsanierung in Wohngebäuden</Link>
        </p>
      </>
    ),
  },
  {
    id: 'asbest-bodenbelaege-klebstoffe',
    title: 'Asbesthaltige Bodenbeläge und Klebstoffe',
    content: (
      <>
        <p className={p}>
          In älteren Gebäuden können bestimmte Bodenplatten, Bahnenbeläge, Spachtelmassen oder schwarze Klebstoffe
          asbesthaltig sein. Vor dem Schleifen, Fräsen oder Entfernen verdächtiger Materialien sollte eine fachgerechte
          Bewertung erfolgen.
        </p>
        <p className={p}>
          Bestätigt sich der Verdacht, müssen Rückbau und Entsorgung durch entsprechend qualifizierte Betriebe und unter
          den erforderlichen Schutzmaßnahmen durchgeführt werden.
        </p>
        <p className={p}>
          <Link to="/asbestsanierung-rhein-main#bodenbelaege-klebstoffe">
            Asbestsanierung von Bodenbelägen und Klebstoffen
          </Link>
        </p>
      </>
    ),
  },
  {
    id: 'asbest-fassade-dach',
    title: 'Asbesthaltige Fassaden- und Dachbauteile',
    content: (
      <>
        <p className={p}>
          Asbest kann auch in älteren Fassadenplatten, Dachprodukten, Lüftungsbauteilen oder technischen Verkleidungen
          enthalten sein. Zustand, Befestigung und Zugänglichkeit beeinflussen die Planung des Rückbaus.
        </p>
        <p className={p}>
          Radex koordiniert die notwendigen Fachleistungen sowie auf Wunsch die anschließende Erneuerung der betroffenen
          Bauteile.
        </p>
        <p className={p}>
          <Link to="/asbestsanierung-rhein-main#fassade-dach">Asbestsanierung an Fassade und Dach</Link>
        </p>
      </>
    ),
  },
  {
    id: 'schimmel-nach-wasserschaden',
    title: 'Schimmel nach Leitungs- und Wasserschäden',
    content: (
      <>
        <p className={p}>
          Nach einem Rohrbruch, einer Undichtigkeit oder einem eingedrungenen Niederschlag kann Feuchtigkeit in Wand-,
          Boden- oder Deckenkonstruktionen zurückbleiben. Wird der Aufbau nicht ausreichend geprüft und getrocknet, können
          mikrobielle Belastungen entstehen.
        </p>
        <p className={p}>
          Eine nachhaltige Sanierung verbindet deshalb Ursachenklärung, Feuchtemessung, gegebenenfalls technische
          Trocknung, die Entfernung betroffener Materialien und den anschließenden Wiederaufbau.
        </p>
        <p className={p}>
          <Link to="/schimmelsanierung-rhein-main#wasserschaden">Schimmelsanierung nach einem Wasserschaden</Link>
        </p>
      </>
    ),
  },
  {
    id: 'schimmel-keller-untergeschoss',
    title: 'Schimmel in Kellern und Untergeschossen',
    content: (
      <>
        <p className={p}>
          Keller und Untergeschosse sind häufig von erhöhter Luftfeuchtigkeit, eindringender Feuchte, Wärmebrücken oder
          unzureichender Lüftung betroffen. Sichtbarer Schimmel kann dabei nur ein Teil des vorhandenen Schadensbildes
          sein.
        </p>
        <p className={p}>
          Vor der Sanierung muss geklärt werden, woher die Feuchtigkeit stammt und welche Bauteile betroffen sind. Erst
          danach lässt sich eine geeignete Kombination aus Ursachenbeseitigung, Reinigung, Rückbau und Wiederherstellung
          festlegen.
        </p>
        <p className={p}>
          <Link to="/schimmelsanierung-rhein-main#keller">Schimmelsanierung in Kellern und Untergeschossen</Link>
        </p>
      </>
    ),
  },
  {
    id: 'kuenstliche-mineralfasern-daemmstoffe',
    title: 'Künstliche Mineralfasern und alte Dämmstoffe',
    content: (
      <>
        <p className={p}>
          Ältere Mineralwolle und technische Dämmstoffe können beim Ausbau Fasern und Stäube freisetzen. Welche
          Schutzmaßnahmen notwendig sind, hängt unter anderem vom Material, dem Einbauzeitraum und der Art der geplanten
          Arbeiten ab.
        </p>
        <p className={p}>
          Radex koordiniert den kontrollierten Ausbau, die geeignete Verpackung und die fachgerechte Entsorgung belasteter
          Dämmstoffe.
        </p>
        <p className={p}>
          <Link to="/schadstoffsanierung-rhein-main#kuenstliche-mineralfasern">
            Sanierung künstlicher Mineralfasern
          </Link>
        </p>
      </>
    ),
  },
  {
    id: 'pak-teerhaltige-baustoffe',
    title: 'PAK- und teerhaltige Baustoffe',
    content: (
      <>
        <p className={p}>
          PAK-haltige Materialien können beispielsweise in älteren Parkettklebstoffen, Abdichtungen, Estrichaufbauten oder
          teerhaltigen Produkten vorkommen. Bei geplanten Rückbauarbeiten ist eine Untersuchung verdächtiger Materialien
          sinnvoll.
        </p>
        <p className={p}>
          Nach Bestätigung der Belastung wird ein abgestimmtes Verfahren für Ausbau, Staubminimierung, Reinigung und
          Entsorgung festgelegt.
        </p>
        <p className={p}>
          <Link to="/schadstoffsanierung-rhein-main#pak-sanierung">PAK-Sanierung im Rhein-Main-Gebiet</Link>
        </p>
      </>
    ),
  },
  {
    id: 'pcb-fugen-beschichtungen',
    title: 'PCB-haltige Fugen und Beschichtungen',
    content: (
      <>
        <p className={p}>
          PCB wurde in bestimmten Bauzeiträumen unter anderem in elastischen Fugendichtungen, Anstrichen und Beschichtungen
          eingesetzt. Neben den eigentlichen Primärquellen können angrenzende Materialien bei der Sanierungsplanung
          relevant sein.
        </p>
        <p className={p}>
          Die erforderlichen Maßnahmen richten sich nach Untersuchungsergebnissen, Objektbedingungen und Nutzung. Radex
          koordiniert Analyse, Fachplanung und Umsetzung.
        </p>
        <p className={p}>
          <Link to="/schadstoffsanierung-rhein-main#pcb-sanierung">PCB-Sanierung koordinieren</Link>
        </p>
      </>
    ),
  },
  {
    id: 'abschottung-unterdruckhaltung',
    title: 'Abschottung und Unterdruckhaltung',
    content: (
      <>
        <p className={p}>
          Bei staub- oder faserfreisetzenden Arbeiten kann eine räumliche Trennung des Sanierungsbereichs erforderlich
          sein. Abhängig von der Belastung kommen staubdichte Abschottungen, Personenschleusen, Materialschleusen,
          Unterdruckgeräte und geeignete Filtertechnik zum Einsatz.
        </p>
        <p className={p}>
          Die konkrete Ausstattung wird durch das Sanierungsverfahren und die fachlichen beziehungsweise gesetzlichen
          Anforderungen bestimmt.
        </p>
        <p className={p}>
          <Link to="/asbestsanierung-rhein-main#schutzmassnahmen">Schutzmaßnahmen bei der Asbestsanierung</Link>
        </p>
      </>
    ),
  },
  {
    id: 'ausbau-verpackung-entsorgung',
    title: 'Ausbau, Verpackung und Entsorgung',
    content: (
      <>
        <p className={p}>
          Belastete Baustoffe müssen kontrolliert ausgebaut, sicher verpackt und über geeignete Entsorgungswege abgeführt
          werden. Vermischungen mit unbelastetem Bauschutt können zusätzliche Kosten und Verzögerungen verursachen.
        </p>
        <p className={p}>
          Eine frühzeitige Planung berücksichtigt deshalb Materialmengen, Transportwege, Behälter, Kennzeichnung und
          erforderliche Entsorgungsnachweise.
        </p>
        <p className={p}>
          <Link to="/schadstoffsanierung-rhein-main#entsorgung">Entsorgung schadstoffbelasteter Materialien</Link>
        </p>
      </>
    ),
  },
  {
    id: 'reinigung-abschlusskontrolle',
    title: 'Reinigung und Abschlusskontrolle',
    content: (
      <>
        <p className={p}>
          Nach Abschluss der Rückbauarbeiten werden Sanierungsbereiche entsprechend dem festgelegten Verfahren gereinigt.
          Abhängig vom Schadstoff und Sanierungsumfang können Sichtkontrollen, Staubkontrollen, Freigabemessungen oder
          weitere Nachweise erforderlich sein.
        </p>
        <p className={p}>
          Erst nach Abschluss der vorgesehenen Kontrollen wird der Bereich für die nächsten Arbeiten vorbereitet oder
          freigegeben.
        </p>
        <p className={p}>
          <Link to="/asbestsanierung-rhein-main#freigabe">Freigabe nach der Asbestsanierung</Link>
        </p>
      </>
    ),
  },
  {
    id: 'wiederherstellung-nach-schadstoffsanierung',
    title: 'Wiederherstellung nach der Schadstoffsanierung',
    content: (
      <>
        <p className={p}>
          Nach der Entfernung belasteter Materialien müssen Böden, Wände, Decken, Dämmungen oder technische Bauteile häufig
          neu aufgebaut werden. Radex kann die anschließenden Ausbau- und Renovierungsarbeiten direkt in den Projektablauf
          integrieren.
        </p>
        <p className={p}>
          Dadurch bleiben Verantwortlichkeiten, Termine und Schnittstellen übersichtlich – von der Schadstoffsanierung bis
          zum wieder nutzbaren Raum.
        </p>
        <p className={p}>
          <Link to="/gewerbe-objektsanierung-rhein-main">Gewerbe- und Objektsanierung Rhein-Main</Link>
        </p>
      </>
    ),
  },
];

export const schimmelAsbestSanierungLinkSections = [
  {
    id: 'link-schadstoffsanierung',
    title: 'Schadstoffsanierung Rhein-Main',
    to: '/schadstoffsanierung-rhein-main',
    content: (
      <p className={p}>
        Untersuchung, Planung und koordinierte Sanierung unterschiedlicher Gebäudeschadstoffe.
      </p>
    ),
  },
  {
    id: 'link-asbestsanierung',
    title: 'Asbestsanierung Rhein-Main',
    to: '/asbestsanierung-rhein-main',
    content: (
      <p className={p}>
        Fachgerechte Bewertung und Sanierung asbesthaltiger Baustoffe mit qualifizierten Partnern.
      </p>
    ),
  },
  {
    id: 'link-schimmelsanierung',
    title: 'Schimmelsanierung Rhein-Main',
    to: '/schimmelsanierung-rhein-main',
    content: (
      <p className={p}>
        Ursachenorientierte Beseitigung von Schimmelbefall und Wiederherstellung betroffener Räume.
      </p>
    ),
  },
  {
    id: 'link-gewerbe',
    title: 'Gewerbe- und Objektsanierung Rhein-Main',
    to: '/gewerbe-objektsanierung-rhein-main',
    content: (
      <p className={p}>
        Innenausbau und Wiederherstellung von Gewerbeimmobilien nach abgeschlossenen Sanierungsarbeiten.
      </p>
    ),
  },
];
