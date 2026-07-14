import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';
const h4 = 'br-seo-subheading';

export const sanierungskostenSeoIntro = (
  <>
    <p className={p}>
      Wer eine Immobilie modernisieren möchte, stellt sich früher oder später dieselbe Frage:{' '}
      <strong>Was kostet eine Sanierung?</strong> Eine pauschale Antwort gibt es darauf nicht, denn jedes Gebäude
      bringt unterschiedliche Voraussetzungen mit. Größe der Immobilie, Baujahr, Zustand der Bausubstanz, vorhandene
      Technik, gewünschte Materialien und der Umfang der Arbeiten beeinflussen den späteren Gesamtpreis erheblich.
    </p>
    <p className={p}>
      Genau deshalb ist es wichtig, Sanierungskosten nicht als festen Quadratmeterpreis zu betrachten. Eine Wohnung aus
      den 1990er-Jahren verursacht andere Kosten als ein Altbau aus der Gründerzeit oder ein Einfamilienhaus aus den
      1960er-Jahren. Während bei manchen Immobilien lediglich Oberflächen modernisiert werden, müssen bei anderen
      Gebäuden zusätzlich Heizungsanlagen, Wasserleitungen, Elektroinstallationen oder tragende Bauteile erneuert
      werden.
    </p>
    <p className={p}>
      Die <strong>Radex Objektmanagement GmbH</strong> begleitet Eigentümer im gesamten Rhein-Main-Gebiet bei der
      Planung unterschiedlichster Sanierungsprojekte. Als SHK-meistergeführter Fachbetrieb und Generalunternehmer
      betrachten wir jede Immobilie individuell und erstellen nach einer persönlichen Besichtigung ein transparentes
      Festpreisangebot. Unser{' '}
      <Link to="/sanierungskosten-rechner">Sanierungskosten-Rechner</Link> dient dabei als erste Orientierung und hilft
      Ihnen, die Größenordnung Ihrer Investition besser einzuschätzen.
    </p>
    <p className={p}>
      Unter der technischen Leitung von <strong>Bernd Knoop</strong>, SHK-Meister und Betriebsleiter, entstehen
      realistische Kosteneinschätzungen, die nicht auf pauschalen Durchschnittswerten basieren, sondern die
      tatsächlichen Anforderungen moderner Sanierungsprojekte berücksichtigen.
    </p>
    <p className={p}>
      Ganz gleich, ob Sie eine Badsanierung, Wohnungssanierung, Haussanierung oder Altbausanierung planen – eine
      fundierte Kostenplanung schafft Planungssicherheit und bildet die Grundlage für eine wirtschaftlich sinnvolle
      Modernisierung.
    </p>
  </>
);

export const sanierungskostenSeoSections = [
  {
    id: 'zusammensetzung-sanierungskosten',
    title: 'Wie setzen sich Sanierungskosten zusammen?',
    content: (
      <>
        <p className={p}>
          Viele Eigentümer gehen zunächst davon aus, dass sich Sanierungskosten ausschließlich über die Wohnfläche
          berechnen lassen. Tatsächlich spielt die Quadratmeterzahl zwar eine wichtige Rolle, sie ist jedoch nur einer
          von vielen Faktoren.
        </p>
        <p className={p}>
          Die Gesamtkosten setzen sich aus verschiedenen Bereichen zusammen, die je nach Projekt unterschiedlich stark
          ins Gewicht fallen.
        </p>
        <p className={p}>Dazu gehören unter anderem:</p>
        <ul className={ul}>
          <li>Zustand der Immobilie</li>
          <li>Größe der Wohnfläche</li>
          <li>Baujahr</li>
          <li>Bausubstanz</li>
          <li>technische Anlagen</li>
          <li>Heizungsanlage</li>
          <li>Sanitärinstallation</li>
          <li>Elektroinstallation</li>
          <li>Innenausbau</li>
          <li>Materialqualität</li>
          <li>Arbeitsaufwand</li>
          <li>gewünschte Ausstattung</li>
          <li>Umfang der Sanierung</li>
        </ul>
        <p className={p}>
          Je umfangreicher die Modernisierung ausfällt, desto größer wird der Anteil verschiedener Gewerke am
          Gesamtprojekt. Genau deshalb sollte jede Immobilie individuell bewertet werden.
        </p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> betrachtet Sanierungskosten deshalb niemals pauschal,
          sondern entwickelt für jedes Projekt eine individuelle Kalkulation auf Grundlage der tatsächlichen
          Gegebenheiten.
        </p>
      </>
    ),
  },
  {
    id: 'unterschiede-sanierungskosten',
    title: 'Warum unterscheiden sich Sanierungskosten so stark?',
    content: (
      <>
        <p className={p}>
          Zwei Häuser mit identischer Wohnfläche können vollkommen unterschiedliche Sanierungskosten verursachen.
          Während eine Immobilie bereits teilweise modernisiert wurde, befindet sich die andere möglicherweise noch im
          ursprünglichen Zustand.
        </p>
        <p className={p}>
          Auch das Baujahr spielt eine entscheidende Rolle. Ältere Gebäude benötigen häufig umfangreichere Arbeiten an
          der technischen Infrastruktur.
        </p>
        <p className={p}>Besonders häufig beeinflussen folgende Punkte den Gesamtpreis:</p>
        <ul className={ul}>
          <li>alte Wasserleitungen</li>
          <li>veraltete Elektroinstallation</li>
          <li>fehlende Wärmedämmung</li>
          <li>beschädigte Bausubstanz</li>
          <li>Feuchtigkeitsschäden</li>
          <li>Schimmelbefall</li>
          <li>Schadstoffe</li>
          <li>alte Heizungsanlagen</li>
          <li>Grundrissänderungen</li>
          <li>Dachsanierung</li>
          <li>Fassadensanierung</li>
        </ul>
        <p className={p}>
          Gerade diese Unterschiede zeigen, warum seriöse Sanierungskosten immer individuell berechnet werden sollten.
        </p>
      </>
    ),
  },
  {
    id: 'sanierungsarten',
    title: 'Welche Sanierungsarten gibt es?',
    content: (
      <>
        <p className={p}>
          Nicht jede Modernisierung umfasst dieselben Arbeiten. Deshalb unterscheiden sich auch die Kosten je nach Art
          des Projekts erheblich.
        </p>
        <p className={p}>Die häufigsten Sanierungsarten sind:</p>
        <h4 className={h4}>Badsanierung</h4>
        <p className={p}>
          Modernisierung von Badezimmern inklusive Sanitärinstallation, Fliesenarbeiten, Elektroinstallation und neuer
          Badausstattung.
        </p>
        <h4 className={h4}>Wohnungssanierung</h4>
        <p className={p}>
          Modernisierung kompletter Eigentumswohnungen oder Bestandswohnungen einschließlich Böden, Wände, Decken,
          Elektrik, Sanitär und Innenausbau.
        </p>
        <h4 className={h4}>Haussanierung</h4>
        <p className={p}>
          Sanierung von Einfamilienhäusern, Reihenhäusern oder Doppelhaushälften inklusive Heizungsmodernisierung,
          Gebäudetechnik, Innenausbau und energetischen Maßnahmen.
        </p>
        <h4 className={h4}>Altbausanierung</h4>
        <p className={p}>
          Modernisierung historischer Gebäude und älterer Bestandsimmobilien unter Berücksichtigung der vorhandenen
          Bausubstanz, moderner Gebäudetechnik und energetischer Anforderungen.
        </p>
        <p className={p}>
          Jede dieser Sanierungsarten besitzt eigene Kostenstrukturen und individuelle Anforderungen. Deshalb bietet die{' '}
          <strong>Radex Objektmanagement GmbH</strong> für jede Projektart eigene Informationsseiten sowie spezielle
          Kostenrechner an, die eine erste realistische Orientierung ermöglichen – etwa für{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung</Link>,{' '}
          <Link to="/wohnungssanierung-kosten">Wohnungssanierung</Link>,{' '}
          <Link to="/haussanierung-kosten">Haussanierung</Link> und{' '}
          <Link to="/altbausanierung-kosten">Altbausanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'kosten-badsanierung',
    title: 'Kosten einer Badsanierung',
    content: (
      <>
        <p className={p}>
          Eine Badsanierung gehört zu den häufigsten Modernisierungsmaßnahmen in privaten Wohnimmobilien. Gleichzeitig
          unterscheiden sich die Kosten erheblich, da nahezu jedes Badezimmer andere Voraussetzungen mitbringt. Größe,
          Grundriss, Leitungsführung und gewünschte Ausstattung wirken sich unmittelbar auf den Gesamtpreis aus.
        </p>
        <p className={p}>
          Viele Eigentümer planen zunächst lediglich neue Fliesen oder moderne Sanitärobjekte. Während der
          Bestandsaufnahme zeigt sich jedoch häufig, dass zusätzlich Wasserleitungen, Abwasserleitungen oder die
          Elektroinstallation erneuert werden sollten. Gerade ältere Badezimmer entsprechen oftmals nicht mehr den
          heutigen technischen Anforderungen.
        </p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> betrachtet deshalb jedes Badezimmer als individuelles
          Projekt. Als SHK-meistergeführter Fachbetrieb entwickeln wir gemeinsam mit unseren Kunden ein
          Sanierungskonzept, das Funktionalität, Design und langfristige Wirtschaftlichkeit miteinander verbindet.
        </p>
        <p className={p}>Typische Arbeiten einer Badsanierung sind:</p>
        <ul className={ul}>
          <li>Demontage des alten Badezimmers</li>
          <li>Sanitärinstallation erneuern</li>
          <li>Trinkwasserleitungen austauschen</li>
          <li>Abwasserleitungen modernisieren</li>
          <li>Elektroinstallation erneuern</li>
          <li>Abdichtung nach aktuellen Normen</li>
          <li>Fliesenarbeiten</li>
          <li>Bodenaufbau</li>
          <li>Deckenarbeiten</li>
          <li>Beleuchtung</li>
          <li>Waschtisch</li>
          <li>Dusche</li>
          <li>Badewanne</li>
          <li>WC</li>
          <li>Badmöbel</li>
          <li>Armaturen</li>
          <li>Endmontage</li>
        </ul>
        <p className={p}>Je nach Ausstattung unterscheiden sich auch die Investitionskosten deutlich.</p>
        <p className={p}>Zur Orientierung gelten häufig folgende Bereiche:</p>
        <h4 className={h4}>Basis</h4>
        <p className={p}>funktionale Modernisierung</p>
        <p className={p}>
          ca. <strong>8.000 bis 15.000 Euro</strong>
        </p>
        <h4 className={h4}>Komfort</h4>
        <p className={p}>hochwertige Standardausstattung</p>
        <p className={p}>
          ca. <strong>15.000 bis 25.000 Euro</strong>
        </p>
        <h4 className={h4}>Premium</h4>
        <p className={p}>individuelle Planung</p>
        <p className={p}>hochwertige Materialien</p>
        <p className={p}>großformatige Fliesen</p>
        <p className={p}>Designausstattung</p>
        <p className={p}>
          ca. <strong>25.000 bis 45.000 Euro oder mehr</strong>
        </p>
        <p className={p}>Diese Werte dienen ausschließlich der ersten Orientierung.</p>
        <p className={p}>
          Nach einer Besichtigung erstellt die <strong>Radex Objektmanagement GmbH</strong> ein transparentes
          Festpreisangebot. Mehr Informationen finden Sie unter{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung Rhein-Main</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'kosten-wohnungssanierung',
    title: 'Kosten einer Wohnungssanierung',
    content: (
      <>
        <p className={p}>
          Bei einer Wohnungssanierung unterscheiden sich die Kosten vor allem nach dem Umfang der Modernisierung.
        </p>
        <p className={p}>
          Während manche Eigentümer lediglich Böden und Wände erneuern möchten, planen andere eine vollständige
          Modernisierung inklusive Badezimmer, Elektroinstallation und Innenausbau.
        </p>
        <p className={p}>Typische Leistungen sind:</p>
        <ul className={ul}>
          <li>Bodenbeläge</li>
          <li>Malerarbeiten</li>
          <li>Innenausbau</li>
          <li>Trockenbau</li>
          <li>Türen</li>
          <li>Elektroinstallation</li>
          <li>Sanitärinstallation</li>
          <li>Badezimmer</li>
          <li>Heizkörper</li>
          <li>Beleuchtung</li>
          <li>Grundrissänderungen</li>
        </ul>
        <p className={p}>
          Zur ersten Orientierung werden Wohnungssanierungen häufig über Quadratmeter kalkuliert.
        </p>
        <p className={p}>Typische Orientierungswerte:</p>
        <h4 className={h4}>Basis</h4>
        <p className={p}>
          ca. <strong>300–600 €/m²</strong>
        </p>
        <h4 className={h4}>Komfort</h4>
        <p className={p}>
          ca. <strong>600–1.000 €/m²</strong>
        </p>
        <h4 className={h4}>Premium</h4>
        <p className={p}>
          ca. <strong>1.000–1.800 €/m²</strong>
        </p>
        <p className={p}>
          Welche Kosten tatsächlich entstehen, hängt jedoch immer vom Zustand der Wohnung und den gewünschten
          Ausstattungsmerkmalen ab. Nutzen Sie den{' '}
          <Link to="/wohnungssanierung-kosten">Wohnungssanierung-Kostenrechner</Link> für eine erste Einschätzung.
        </p>
      </>
    ),
  },
  {
    id: 'kosten-haussanierung',
    title: 'Kosten einer Haussanierung',
    content: (
      <>
        <p className={p}>
          Eine Haussanierung umfasst häufig deutlich mehr Gewerke als eine Wohnungssanierung. Neben dem Innenausbau
          spielen oftmals Heizungsmodernisierung, Dach, Fassade, Fenster oder energetische Maßnahmen eine wichtige Rolle.
        </p>
        <p className={p}>
          Gerade ältere Einfamilienhäuser bieten enormes Modernisierungspotenzial, benötigen jedoch häufig
          umfangreichere technische Arbeiten.
        </p>
        <p className={p}>Typische Maßnahmen:</p>
        <ul className={ul}>
          <li>Heizungsmodernisierung</li>
          <li>Wärmepumpe</li>
          <li>Sanitärinstallation</li>
          <li>Elektroinstallation</li>
          <li>Dachsanierung</li>
          <li>Fassadensanierung</li>
          <li>Fenster</li>
          <li>Innenausbau</li>
          <li>Bodenbeläge</li>
          <li>Malerarbeiten</li>
          <li>Badsanierung</li>
          <li>Dämmmaßnahmen</li>
        </ul>
        <p className={p}>Typische Orientierungswerte:</p>
        <h4 className={h4}>Leichte Modernisierung</h4>
        <p className={p}>
          ca. <strong>400–600 €/m²</strong>
        </p>
        <h4 className={h4}>Standard-Sanierung</h4>
        <p className={p}>
          ca. <strong>800–1.200 €/m²</strong>
        </p>
        <h4 className={h4}>Umfassende Sanierung</h4>
        <p className={p}>
          ca. <strong>1.500–2.500 €/m²</strong>
        </p>
        <p className={p}>Auch hier gilt:</p>
        <p className={p}>Jede Immobilie wird individuell bewertet.</p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> erstellt deshalb keine pauschalen Angebote, sondern
          entwickelt für jedes Haus eine transparente und nachvollziehbare Kostenplanung. Mehr dazu unter{' '}
          <Link to="/haussanierung-kosten">Haussanierung Kosten</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'kosten-altbausanierung',
    title: 'Kosten einer Altbausanierung',
    content: (
      <>
        <p className={p}>
          Altbauten gehören zu den anspruchsvollsten Sanierungsprojekten überhaupt. Historische Bausubstanz,
          unterschiedliche Bauweisen und frühere Umbauten führen dazu, dass jedes Gebäude individuell betrachtet werden
          muss.
        </p>
        <p className={p}>Besonders häufig entstehen zusätzliche Arbeiten durch:</p>
        <ul className={ul}>
          <li>alte Wasserleitungen</li>
          <li>historische Elektroinstallation</li>
          <li>beschädigte Holzbalken</li>
          <li>fehlende Dämmung</li>
          <li>Feuchtigkeit</li>
          <li>Schadstoffe</li>
          <li>Asbest</li>
          <li>alte Heizungsanlagen</li>
          <li>Dachsanierung</li>
          <li>Fassadensanierung</li>
        </ul>
        <p className={p}>Orientierungswerte:</p>
        <h4 className={h4}>Leichte Modernisierung</h4>
        <p className={p}>
          ca. <strong>300–500 €/m²</strong>
        </p>
        <h4 className={h4}>Standard-Altbausanierung</h4>
        <p className={p}>
          ca. <strong>800–1.500 €/m²</strong>
        </p>
        <h4 className={h4}>Kernsanierung Altbau</h4>
        <p className={p}>
          ca. <strong>1.500–3.000 €/m²</strong>
        </p>
        <p className={p}>
          Je älter das Gebäude ist, desto wichtiger wird eine sorgfältige Bestandsaufnahme.
        </p>
        <p className={p}>
          Unter der technischen Leitung von <strong>Bernd Knoop</strong>, SHK-Meister und Betriebsleiter, entwickelt die{' '}
          <strong>Radex Objektmanagement GmbH</strong> individuelle Sanierungskonzepte für Altbauten im gesamten
          Rhein-Main-Gebiet und erstellt auf Grundlage der tatsächlichen Gegebenheiten ein transparentes
          Festpreisangebot. Details finden Sie unter{' '}
          <Link to="/altbausanierung-kosten">Altbausanierung Kosten</Link> sowie{' '}
          <Link to="/altbausanierung-rhein-main">Altbausanierung Rhein-Main</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'preisfaktoren',
    title: 'Welche Faktoren beeinflussen den Preis?',
    content: (
      <>
        <p className={p}>
          Viele Eigentümer suchen im Internet nach einer einfachen Antwort auf die Frage:{' '}
          <strong>„Was kostet eine Sanierung pro Quadratmeter?“</strong> Tatsächlich lässt sich diese Frage jedoch
          nicht pauschal beantworten. Der Quadratmeterpreis dient lediglich als grobe Orientierung. Entscheidend sind
          immer die individuellen Gegebenheiten Ihrer Immobilie.
        </p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> bewertet deshalb jedes Sanierungsprojekt persönlich. Bereits
          bei der ersten Besichtigung werden sämtliche kostenrelevanten Faktoren analysiert. Dadurch entsteht keine
          theoretische Schätzung, sondern eine realistische Grundlage für die spätere Kostenplanung.
        </p>
        <h4 className={h4}>1. Größe der Immobilie</h4>
        <p className={p}>Die Wohnfläche ist einer der wichtigsten Faktoren bei der Kostenberechnung.</p>
        <p className={p}>
          Je größer eine Immobilie ist, desto mehr Material, Arbeitszeit und Koordination werden benötigt.
        </p>
        <p className={p}>
          Gleichzeitig sinken bei größeren Projekten einzelne Quadratmeterpreise häufig leicht, weil bestimmte Arbeiten
          effizienter ausgeführt werden können.
        </p>
        <p className={p}>
          Eine kleine Wohnung verursacht deshalb nicht automatisch niedrigere Quadratmeterkosten als ein
          Einfamilienhaus.
        </p>
        <h4 className={h4}>2. Baujahr des Gebäudes</h4>
        <p className={p}>Das Baujahr beeinflusst den Sanierungsaufwand erheblich.</p>
        <p className={p}>
          Ein Haus aus den 2000er-Jahren benötigt häufig deutlich weniger technische Arbeiten als eine Immobilie aus
          den 1950er- oder 1960er-Jahren.
        </p>
        <p className={p}>Besonders ältere Gebäude benötigen oftmals:</p>
        <ul className={ul}>
          <li>neue Wasserleitungen</li>
          <li>neue Heizungsrohre</li>
          <li>moderne Elektroinstallation</li>
          <li>bessere Wärmedämmung</li>
          <li>neue Fenster</li>
          <li>Dachsanierung</li>
          <li>Abdichtungsmaßnahmen</li>
        </ul>
        <p className={p}>
          Gerade deshalb unterscheiden sich die Kosten verschiedener Immobilien trotz identischer Wohnfläche oft
          erheblich.
        </p>
        <h4 className={h4}>3. Zustand der Bausubstanz</h4>
        <p className={p}>Nicht jede Immobilie wurde in den vergangenen Jahrzehnten gleich gepflegt.</p>
        <p className={p}>
          Während manche Gebäude bereits teilweise modernisiert wurden, befinden sich andere noch weitgehend im
          Originalzustand.
        </p>
        <p className={p}>
          Vor Beginn einer Sanierung prüft die <strong>Radex Objektmanagement GmbH</strong> deshalb unter anderem:
        </p>
        <ul className={ul}>
          <li>Wände</li>
          <li>Decken</li>
          <li>Böden</li>
          <li>Dach</li>
          <li>Keller</li>
          <li>Außenfassade</li>
          <li>Feuchtigkeit</li>
          <li>Schimmel</li>
          <li>tragende Bauteile</li>
          <li>vorhandene Installationen</li>
        </ul>
        <p className={p}>Diese Bestandsaufnahme bildet die Grundlage für eine seriöse Kostenplanung.</p>
        <h4 className={h4}>4. Technische Gebäudeausstattung</h4>
        <p className={p}>
          Ein erheblicher Teil der Sanierungskosten entfällt häufig auf die technische Infrastruktur.
        </p>
        <p className={p}>Dazu gehören beispielsweise:</p>
        <ul className={ul}>
          <li>Heizungsanlage</li>
          <li>Sanitärinstallation</li>
          <li>Trinkwasserleitungen</li>
          <li>Abwasserleitungen</li>
          <li>Elektroinstallation</li>
          <li>Sicherungskasten</li>
          <li>Netzwerkverkabelung</li>
          <li>Gebäudetechnik</li>
          <li>Lüftung</li>
          <li>Smart-Home-Vorbereitung</li>
        </ul>
        <p className={p}>
          Gerade bei älteren Gebäuden entstehen hier häufig größere Modernisierungsmaßnahmen.
        </p>
        <h4 className={h4}>5. Materialauswahl</h4>
        <p className={p}>Auch die Materialwahl beeinflusst den Gesamtpreis.</p>
        <p className={p}>Bereits bei Bodenbelägen oder Fliesen entstehen deutliche Preisunterschiede.</p>
        <p className={p}>Beispiele:</p>
        <ul className={ul}>
          <li>Laminat oder Parkett</li>
          <li>Standardfliesen oder Feinsteinzeug</li>
          <li>Standardarmaturen oder Designausstattung</li>
          <li>Standardtüren oder Echtholztüren</li>
          <li>Standardwaschtisch oder Maßanfertigung</li>
        </ul>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> unterstützt Eigentümer dabei, Materialien auszuwählen, die
          sowohl zum Budget als auch zum gewünschten Qualitätsniveau passen.
        </p>
        <h4 className={h4}>6. Umfang der Sanierung</h4>
        <p className={p}>Nicht jede Modernisierung umfasst dieselben Arbeiten.</p>
        <p className={p}>Man unterscheidet grundsätzlich zwischen:</p>
        <ul className={ul}>
          <li>Renovierung</li>
          <li>Teilsanierung</li>
          <li>Komplettsanierung</li>
          <li>Kernsanierung</li>
          <li>energetischer Sanierung</li>
        </ul>
        <p className={p}>
          Je umfangreicher das Projekt wird, desto größer wird der Anteil verschiedener Gewerke.
        </p>
        <p className={p}>
          Gerade deshalb lohnt sich eine professionelle Projektkoordination durch einen{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'materialkosten-arbeitskosten',
    title: 'Materialkosten und Arbeitskosten',
    content: (
      <>
        <p className={p}>
          Viele Eigentümer konzentrieren sich zunächst ausschließlich auf Materialpreise. Tatsächlich setzt sich der
          Gesamtpreis einer Sanierung jedoch aus deutlich mehr Bestandteilen zusammen. Erst das Zusammenspiel von
          Material, Arbeitszeit, Planung, Bauleitung und technischer Umsetzung ergibt die tatsächlichen
          Sanierungskosten.
        </p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> betrachtet deshalb jedes Projekt ganzheitlich. Bereits
          während der Planungsphase wird ermittelt, welche Arbeiten notwendig sind und wie diese wirtschaftlich
          miteinander kombiniert werden können.
        </p>
        <p className={p}>Grundsätzlich setzen sich Sanierungskosten aus folgenden Bereichen zusammen:</p>
        <ul className={ul}>
          <li>Materialkosten</li>
          <li>Arbeitskosten</li>
          <li>Planung</li>
          <li>Bauleitung</li>
          <li>Baustelleneinrichtung</li>
          <li>Entsorgung</li>
          <li>Transport</li>
          <li>Qualitätskontrolle</li>
          <li>Endmontage</li>
        </ul>
        <p className={p}>Je nach Sanierungsprojekt verschieben sich diese Anteile unterschiedlich stark.</p>
        <h4 className={h4}>Materialkosten</h4>
        <p className={p}>
          Die Materialauswahl beeinflusst nicht nur den späteren Preis, sondern auch die Lebensdauer einer Sanierung.
        </p>
        <p className={p}>Besonders große Preisunterschiede entstehen bei:</p>
        <ul className={ul}>
          <li>Bodenbelägen</li>
          <li>Fliesen</li>
          <li>Sanitärobjekten</li>
          <li>Armaturen</li>
          <li>Heizkörpern</li>
          <li>Fenstern</li>
          <li>Türen</li>
          <li>Dämmstoffen</li>
          <li>Beleuchtung</li>
          <li>Badmöbeln</li>
        </ul>
        <p className={p}>
          Zwischen einer funktionalen Standardausstattung und hochwertigen Designmaterialien können erhebliche
          Preisunterschiede liegen.
        </p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> unterstützt Eigentümer dabei, Materialien auszuwählen, die
          sowohl zum Budget als auch zur gewünschten Qualität passen.
        </p>
        <h4 className={h4}>Arbeitskosten</h4>
        <p className={p}>
          Neben den Materialien machen die handwerklichen Leistungen einen wesentlichen Teil der Gesamtkosten aus.
        </p>
        <p className={p}>Dazu gehören unter anderem:</p>
        <ul className={ul}>
          <li>Demontage</li>
          <li>Rückbau</li>
          <li>Sanitärinstallation</li>
          <li>Heizungsarbeiten</li>
          <li>Elektroinstallation</li>
          <li>Trockenbau</li>
          <li>Fliesenarbeiten</li>
          <li>Bodenverlegung</li>
          <li>Malerarbeiten</li>
          <li>Endmontage</li>
        </ul>
        <p className={p}>
          Je komplexer die Arbeiten werden, desto wichtiger wird eine professionelle Koordination aller Gewerke.
        </p>
        <p className={p}>
          Als Generalunternehmer übernimmt die <strong>Radex Objektmanagement GmbH</strong> diese Projektsteuerung
          vollständig und sorgt dafür, dass sämtliche Arbeiten effizient aufeinander abgestimmt werden.
        </p>
        <h4 className={h4}>Warum günstige Angebote nicht immer günstiger sind</h4>
        <p className={p}>
          Viele Eigentümer vergleichen zunächst ausschließlich den Endpreis verschiedener Angebote. Dabei bleibt
          häufig unberücksichtigt, welche Leistungen tatsächlich enthalten sind.
        </p>
        <p className={p}>
          Ein scheinbar günstiger Preis kann später durch zusätzliche Arbeiten deutlich steigen, wenn wichtige
          Positionen ursprünglich nicht berücksichtigt wurden.
        </p>
        <p className={p}>
          Deshalb empfiehlt die <strong>Radex Objektmanagement GmbH</strong>, Angebote nicht ausschließlich nach dem
          Preis zu vergleichen, sondern insbesondere auf folgende Punkte zu achten:
        </p>
        <ul className={ul}>
          <li>vollständige Leistungsbeschreibung</li>
          <li>Materialqualität</li>
          <li>enthaltene Gewerke</li>
          <li>Bauleitung</li>
          <li>Projektkoordination</li>
          <li>Gewährleistung</li>
          <li>transparente Kalkulation</li>
          <li>nachvollziehbare Positionen</li>
        </ul>
        <p className={p}>
          Ein realistisches Angebot schafft deutlich mehr Planungssicherheit als ein niedriger Einstiegspreis mit
          späteren Zusatzkosten.
        </p>
        <h4 className={h4}>Sanierungskosten langfristig betrachten</h4>
        <p className={p}>
          Viele Modernisierungen verursachen zunächst Investitionskosten, reduzieren jedoch langfristig laufende
          Ausgaben.
        </p>
        <p className={p}>Beispiele hierfür sind:</p>
        <ul className={ul}>
          <li>moderne Heizungsanlagen</li>
          <li>Wärmepumpen</li>
          <li>energieeffiziente Fenster</li>
          <li>bessere Dämmung</li>
          <li>wassersparende Sanitärtechnik</li>
          <li>LED-Beleuchtung</li>
          <li>moderne Gebäudetechnik</li>
        </ul>
        <p className={p}>
          Dadurch sinken häufig Energie- und Wartungskosten, während gleichzeitig der Wohnkomfort und der Wert der
          Immobilie steigen.
        </p>
        <p className={p}>
          Gerade deshalb sollte eine Sanierung nicht ausschließlich unter dem Gesichtspunkt der kurzfristigen
          Investition betrachtet werden, sondern als langfristige Aufwertung der gesamten Immobilie.
        </p>
      </>
    ),
  },
  {
    id: 'festpreis-oder-schaetzung',
    title: 'Festpreis oder Kostenschätzung?',
    content: (
      <>
        <h4 className={h4}>Warum eine Vor-Ort-Besichtigung unverzichtbar ist</h4>
        <p className={p}>
          Viele Preisrechner im Internet arbeiten ausschließlich mit Durchschnittswerten. Diese können zwar eine erste
          Orientierung liefern, berücksichtigen jedoch nicht die Besonderheiten Ihrer Immobilie.
        </p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> empfiehlt deshalb immer eine persönliche Besichtigung.
        </p>
        <p className={p}>Erst vor Ort lassen sich unter anderem beurteilen:</p>
        <ul className={ul}>
          <li>Zustand der Leitungen</li>
          <li>Zustand der Heizungsanlage</li>
          <li>Bausubstanz</li>
          <li>Feuchtigkeit</li>
          <li>Schadstoffe</li>
          <li>Raumaufteilung</li>
          <li>technische Besonderheiten</li>
          <li>tatsächlicher Arbeitsumfang</li>
        </ul>
        <p className={p}>Erst danach entsteht ein realistisches Festpreisangebot.</p>
        <h4 className={h4}>Warum ein Festpreisangebot Sicherheit schafft</h4>
        <p className={p}>
          Nach Abschluss der Bestandsaufnahme entwickelt die <strong>Radex Objektmanagement GmbH</strong> ein
          individuelles Sanierungskonzept.
        </p>
        <p className={p}>Darauf aufbauend erhalten Eigentümer ein transparentes Festpreisangebot.</p>
        <p className={p}>Dadurch wissen Sie bereits vor Beginn der Arbeiten,</p>
        <ul className={ul}>
          <li>welche Leistungen enthalten sind,</li>
          <li>welche Materialien verwendet werden,</li>
          <li>welche Gewerke beteiligt sind,</li>
          <li>wie der Projektablauf aussieht,</li>
          <li>und welche Investition für Ihre Sanierung realistisch einzuplanen ist.</li>
        </ul>
        <p className={p}>
          Gerade bei umfangreichen Sanierungsprojekten schafft diese Transparenz ein hohes Maß an Planungssicherheit
          und Vertrauen.
        </p>
        <h4 className={h4}>Warum sich eine frühzeitige Kostenplanung lohnt</h4>
        <p className={p}>
          Je früher die tatsächlichen Kosten realistisch eingeschätzt werden, desto besser lassen sich Budget,
          Bauablauf und Materialauswahl aufeinander abstimmen.
        </p>
        <p className={p}>
          Der <Link to="/sanierungskosten-rechner">Sanierungskosten-Rechner</Link> der{' '}
          <strong>Radex Objektmanagement GmbH</strong> liefert hierfür eine erste Orientierung.
        </p>
        <p className={p}>
          Die persönliche Besichtigung bildet anschließend die Grundlage für eine individuelle Kostenplanung und ein
          transparentes Festpreisangebot.
        </p>
        <p className={p}>
          So erhalten Eigentümer bereits vor Beginn der Arbeiten eine realistische Einschätzung der Investition und
          können ihre Sanierung mit einem sicheren Gefühl planen.
        </p>
      </>
    ),
  },
  {
    id: 'typische-fehler',
    title: 'Typische Fehler bei der Kostenplanung',
    content: (
      <>
        <p className={p}>
          Eine Sanierung ist eine langfristige Investition. Umso wichtiger ist eine realistische Kostenplanung.
          Dennoch erleben viele Eigentümer während ihres Projekts unerwartete Überraschungen – häufig nicht, weil die
          eigentlichen Arbeiten teurer werden, sondern weil der Aufwand zu Beginn falsch eingeschätzt wurde.
        </p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> legt deshalb großen Wert auf eine sorgfältige
          Bestandsaufnahme. Erst wenn alle relevanten Faktoren bekannt sind, kann eine seriöse Kostenkalkulation
          erstellt werden.
        </p>
        <p className={p}>Zu den häufigsten Fehlern gehören:</p>
        <h4 className={h4}>Fehler 1 – Nur mit Quadratmeterpreisen rechnen</h4>
        <p className={p}>Quadratmeterpreise liefern lediglich eine erste Orientierung.</p>
        <p className={p}>
          Zwei Häuser mit identischer Wohnfläche können sich hinsichtlich Baujahr, Technik und Bausubstanz erheblich
          unterscheiden. Deshalb entstehen häufig völlig unterschiedliche Sanierungskosten.
        </p>
        <p className={p}>
          Eine individuelle Besichtigung liefert deutlich verlässlichere Ergebnisse als allgemeine Durchschnittswerte
          aus dem Internet.
        </p>
        <h4 className={h4}>Fehler 2 – Versteckte Arbeiten unterschätzen</h4>
        <p className={p}>Viele Arbeiten sind vor Beginn einer Sanierung nicht sichtbar.</p>
        <p className={p}>Dazu gehören beispielsweise:</p>
        <ul className={ul}>
          <li>alte Wasserleitungen</li>
          <li>beschädigte Abwasserleitungen</li>
          <li>veraltete Elektroinstallation</li>
          <li>fehlende Abdichtungen</li>
          <li>Feuchtigkeit</li>
          <li>Schimmel</li>
          <li>beschädigte Untergründe</li>
          <li>alte Heizungsrohre</li>
        </ul>
        <p className={p}>
          Gerade diese Bereiche beeinflussen den späteren Gesamtpreis häufig stärker als neue Fliesen oder
          Bodenbeläge.
        </p>
        <h4 className={h4}>Fehler 3 – Nur Materialpreise vergleichen</h4>
        <p className={p}>Viele Eigentümer vergleichen zunächst ausschließlich Materialpreise.</p>
        <p className={p}>Dabei entstehen die eigentlichen Unterschiede häufig durch:</p>
        <ul className={ul}>
          <li>handwerkliche Ausführung</li>
          <li>Baukoordination</li>
          <li>Planung</li>
          <li>Qualitätskontrolle</li>
          <li>Gewährleistung</li>
          <li>Projektleitung</li>
        </ul>
        <p className={p}>Eine hochwertige Sanierung besteht aus deutlich mehr als einzelnen Materialien.</p>
        <h4 className={h4}>Fehler 4 – Zu knapp kalkulieren</h4>
        <p className={p}>
          Viele Budgets werden ausschließlich auf Grundlage einer ersten Internetrecherche festgelegt.
        </p>
        <p className={p}>
          Eine professionelle Sanierung sollte jedoch immer ausreichend finanziellen Spielraum berücksichtigen.
        </p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> erstellt deshalb transparente Festpreisangebote, die auf
          einer persönlichen Bestandsaufnahme basieren.
        </p>
        <h4 className={h4}>Warum jede Immobilie individuell bewertet werden muss</h4>
        <p className={p}>Keine zwei Gebäude sind identisch.</p>
        <p className={p}>Selbst Häuser aus derselben Straße unterscheiden sich häufig erheblich.</p>
        <p className={p}>Unterschiede entstehen unter anderem durch:</p>
        <ul className={ul}>
          <li>Baujahr</li>
          <li>frühere Umbauten</li>
          <li>technische Modernisierungen</li>
          <li>Leitungsführung</li>
          <li>Heizungsanlage</li>
          <li>Grundriss</li>
          <li>Bausubstanz</li>
          <li>Materialqualität</li>
          <li>Pflegezustand</li>
        </ul>
        <p className={p}>
          Genau deshalb erstellt die <strong>Radex Objektmanagement GmbH</strong> keine pauschalen Preisangebote.
        </p>
        <p className={p}>
          Jede Immobilie wird individuell analysiert und erhält eine maßgeschneiderte Kostenplanung.
        </p>
        <h4 className={h4}>Warum sich eine Sanierung wirtschaftlich lohnt</h4>
        <p className={p}>
          Viele Eigentümer betrachten Sanierungskosten zunächst ausschließlich als Ausgabe.
        </p>
        <p className={p}>
          Tatsächlich handelt es sich vielmehr um eine Investition in den langfristigen Wert der Immobilie.
        </p>
        <p className={p}>Eine professionelle Modernisierung bietet zahlreiche Vorteile:</p>
        <ul className={ul}>
          <li>höherer Wohnkomfort</li>
          <li>geringerer Energieverbrauch</li>
          <li>moderne Gebäudetechnik</li>
          <li>geringere Wartungskosten</li>
          <li>höhere Sicherheit</li>
          <li>attraktiveres Wohnumfeld</li>
          <li>langfristiger Werterhalt</li>
          <li>bessere Vermietbarkeit</li>
          <li>höhere Marktattraktivität</li>
        </ul>
        <p className={p}>
          Gerade hochwertige Sanierungen steigern den Wert einer Immobilie häufig deutlich und schaffen gleichzeitig
          eine wesentlich höhere Wohnqualität.
        </p>
        <h4 className={h4}>Wie unterstützt die Radex Objektmanagement GmbH bei der Kostenplanung?</h4>
        <p className={p}>
          Eine seriöse Kostenplanung beginnt nicht mit einem Angebot, sondern mit einer ausführlichen Beratung.
        </p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> begleitet Eigentümer Schritt für Schritt.
        </p>
        <p className={p}>Der Ablauf sieht typischerweise so aus:</p>
        <h4 className={h4}>Persönliche Beratung</h4>
        <p className={p}>
          Gemeinsam besprechen wir Ihre Wünsche, Ziele und den geplanten Sanierungsumfang.
        </p>
        <h4 className={h4}>Bestandsaufnahme</h4>
        <p className={p}>
          Vor Ort analysieren wir die vorhandene Bausubstanz, technische Anlagen und alle kostenrelevanten Faktoren.
        </p>
        <h4 className={h4}>Individuelle Planung</h4>
        <p className={p}>
          Auf Grundlage der Besichtigung entwickeln wir ein Sanierungskonzept, das optimal zu Ihrer Immobilie passt.
        </p>
        <h4 className={h4}>Transparentes Festpreisangebot</h4>
        <p className={p}>
          Sie erhalten eine nachvollziehbare Kalkulation mit klar definierten Leistungen und einer realistischen
          Kosteneinschätzung.
        </p>
        <h4 className={h4}>Umsetzung</h4>
        <p className={p}>
          Als Generalunternehmer koordiniert die <strong>Radex Objektmanagement GmbH</strong> sämtliche Gewerke und
          begleitet Ihr Projekt bis zur schlüsselfertigen Übergabe.
        </p>
        <p className={p}>
          Unter der technischen Leitung von <strong>Bernd Knoop</strong>, SHK-Meister und Betriebsleiter, entstehen
          Sanierungslösungen, die wirtschaftlich geplant, technisch durchdacht und langfristig wertbeständig sind.
        </p>
        <p className={p}>
          So schaffen Sie bereits vor Beginn der Arbeiten eine sichere Entscheidungsgrundlage und vermeiden
          unangenehme Überraschungen während der Bauphase.
        </p>
      </>
    ),
  },
  {
    id: 'foerdermoeglichkeiten',
    title: 'Fördermöglichkeiten',
    content: (
      <>
        <p className={p}>
          Je nach Art der Sanierung können Eigentümer unter bestimmten Voraussetzungen Förderprogramme oder
          zinsgünstige Finanzierungsmöglichkeiten nutzen.
        </p>
        <p className={p}>Besonders häufig betrifft dies:</p>
        <ul className={ul}>
          <li>energetische Sanierungen</li>
          <li>Heizungsmodernisierung</li>
          <li>Wärmepumpen</li>
          <li>Dämmmaßnahmen</li>
          <li>Fenstererneuerung</li>
          <li>Maßnahmen zur Energieeffizienz</li>
        </ul>
        <p className={p}>
          Da sich Förderbedingungen regelmäßig ändern, empfiehlt die <strong>Radex Objektmanagement GmbH</strong>,
          diese bereits in der Planungsphase zu berücksichtigen. Mehr Informationen finden Sie unter{' '}
          <Link to="/energetische-sanierung-rhein-main">Energetische Sanierung &amp; Förderung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'faq-sanierungskosten',
    title: 'Häufig gestellte Fragen',
    content: (
      <>
        <p className={p}>
          Bevor Eigentümer eine Sanierung beginnen, möchten sie vor allem eines wissen: Welche Kosten kommen
          tatsächlich auf mich zu? Da jede Immobilie unterschiedliche Voraussetzungen mitbringt, entstehen viele Fragen
          rund um Preis, Planung und Ablauf. Nachfolgend beantworten wir die häufigsten Fragen, die der{' '}
          <strong>Radex Objektmanagement GmbH</strong> täglich gestellt werden.
        </p>
        <h4 className={h4}>Wie genau ist der Sanierungskosten-Rechner?</h4>
        <p className={p}>
          Der Sanierungskosten-Rechner liefert eine realistische erste Orientierung auf Grundlage typischer
          Sanierungsprojekte im Rhein-Main-Gebiet. Er ersetzt jedoch keine persönliche Besichtigung.
        </p>
        <p className={p}>Jede Immobilie unterscheidet sich hinsichtlich:</p>
        <ul className={ul}>
          <li>Baujahr</li>
          <li>Zustand</li>
          <li>Wohnfläche</li>
          <li>Technik</li>
          <li>Ausstattung</li>
          <li>Umfang der Arbeiten</li>
        </ul>
        <p className={p}>Deshalb dient der Rechner ausschließlich als Planungsgrundlage.</p>
        <p className={p}>
          Nach einer Vor-Ort-Besichtigung erstellt die <strong>Radex Objektmanagement GmbH</strong> ein individuelles
          Festpreisangebot.
        </p>
        <h4 className={h4}>Warum unterscheiden sich Angebote verschiedener Unternehmen?</h4>
        <p className={p}>Nicht jedes Angebot enthält den gleichen Leistungsumfang.</p>
        <p className={p}>
          Einige Angebote berücksichtigen ausschließlich einzelne Gewerke, während andere bereits Planung, Bauleitung,
          Koordination oder Qualitätskontrollen enthalten.
        </p>
        <p className={p}>Deshalb sollten Angebote immer vollständig verglichen werden.</p>
        <p className={p}>Achten Sie insbesondere auf:</p>
        <ul className={ul}>
          <li>enthaltene Leistungen</li>
          <li>Materialqualität</li>
          <li>Bauleitung</li>
          <li>Projektkoordination</li>
          <li>Gewährleistung</li>
          <li>Festpreisregelungen</li>
          <li>transparente Leistungsbeschreibung</li>
        </ul>
        <p className={p}>
          Ein günstiger Angebotspreis bedeutet nicht automatisch niedrigere Gesamtkosten.
        </p>
        <h4 className={h4}>Kann ich einzelne Arbeiten später durchführen?</h4>
        <p className={p}>Grundsätzlich ja.</p>
        <p className={p}>Allerdings lohnt es sich häufig, mehrere Maßnahmen miteinander zu verbinden.</p>
        <p className={p}>
          Wer beispielsweise ohnehin Böden öffnet oder Wände erneuert, sollte gleichzeitig prüfen, ob folgende Arbeiten
          sinnvoll kombiniert werden können:
        </p>
        <ul className={ul}>
          <li>Wasserleitungen erneuern</li>
          <li>Elektroinstallation modernisieren</li>
          <li>Heizungsleitungen austauschen</li>
          <li>Badezimmer modernisieren</li>
          <li>Fußbodenheizung vorbereiten</li>
          <li>Netzwerkverkabelung installieren</li>
        </ul>
        <p className={p}>Dadurch lassen sich spätere Doppelarbeiten häufig vermeiden.</p>
        <h4 className={h4}>Wann lohnt sich eine Komplettsanierung?</h4>
        <p className={p}>
          Eine Komplettsanierung empfiehlt sich insbesondere dann, wenn mehrere Bereiche der Immobilie gleichzeitig
          modernisiert werden müssen.
        </p>
        <p className={p}>Typische Gründe sind:</p>
        <ul className={ul}>
          <li>veraltete Gebäudetechnik</li>
          <li>umfangreicher Modernisierungsbedarf</li>
          <li>Kauf einer Bestandsimmobilie</li>
          <li>energetische Verbesserung</li>
          <li>geänderte Wohnbedürfnisse</li>
          <li>langfristiger Werterhalt</li>
        </ul>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> prüft gemeinsam mit Ihnen, ob eine Teilsanierung oder eine
          umfassende Komplettsanierung wirtschaftlich sinnvoller ist.
        </p>
        <h4 className={h4}>Wie lange dauert eine Sanierung?</h4>
        <p className={p}>Die Bauzeit richtet sich nach Art und Umfang des Projekts.</p>
        <p className={p}>
          Eine Badsanierung dauert deutlich kürzer als eine komplette Haus- oder Altbausanierung.
        </p>
        <p className={p}>Entscheidend sind unter anderem:</p>
        <ul className={ul}>
          <li>Projektgröße</li>
          <li>Anzahl der Gewerke</li>
          <li>Materialverfügbarkeit</li>
          <li>technische Anforderungen</li>
          <li>Umfang der Modernisierung</li>
        </ul>
        <p className={p}>
          Durch eine professionelle Projektplanung sorgt die <strong>Radex Objektmanagement GmbH</strong> dafür, dass
          sämtliche Bauabschnitte effizient aufeinander abgestimmt werden.
        </p>
        <h4 className={h4}>Kann ich während der Sanierung in der Immobilie wohnen?</h4>
        <p className={p}>Das hängt vom Umfang der Arbeiten ab.</p>
        <p className={p}>Kleinere Modernisierungen können häufig abschnittsweise durchgeführt werden.</p>
        <p className={p}>
          Bei umfangreichen Komplettsanierungen oder Kernsanierungen kann es sinnvoll sein, die Immobilie während der
          Bauphase zeitweise nicht zu bewohnen.
        </p>
        <p className={p}>Dies wird bereits während der Planung individuell besprochen.</p>
        <h4 className={h4}>Warum Eigentümer auf Transparenz setzen sollten</h4>
        <p className={p}>Eine seriöse Sanierung beginnt immer mit einer ehrlichen Beratung.</p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> legt großen Wert darauf, sämtliche Kosten nachvollziehbar zu
          erklären und keine unrealistischen Preisversprechen zu machen.
        </p>
        <p className={p}>
          Unser Ziel ist nicht der niedrigste Preis, sondern die wirtschaftlich sinnvollste Lösung für Ihre Immobilie.
        </p>
        <p className={p}>Deshalb erhalten Sie:</p>
        <ul className={ul}>
          <li>persönliche Beratung</li>
          <li>individuelle Bestandsaufnahme</li>
          <li>transparente Kalkulation</li>
          <li>nachvollziehbare Leistungsbeschreibung</li>
          <li>professionelles Festpreisangebot</li>
          <li>einen festen Ansprechpartner</li>
          <li>strukturierte Projektplanung</li>
        </ul>
        <p className={p}>
          Unter der technischen Leitung von <strong>Bernd Knoop</strong>, SHK-Meister und Betriebsleiter, entstehen
          Sanierungskonzepte, die Funktionalität, Qualität und Wirtschaftlichkeit miteinander verbinden.
        </p>
      </>
    ),
  },
  {
    id: 'rhein-main-gebiet',
    title: 'Sanierungskosten im gesamten Rhein-Main-Gebiet',
    content: (
      <>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> begleitet Eigentümer bei der Planung und Umsetzung
          unterschiedlichster Sanierungsprojekte im gesamten Rhein-Main-Gebiet.
        </p>
        <p className={p}>
          Unsere Teams beraten regelmäßig Kunden in Frankfurt am Main, Offenbach am Main, Rödermark, Rodgau, Dreieich,
          Dietzenbach, Neu-Isenburg, Langen, Egelsbach, Heusenstamm, Obertshausen, Mühlheim am Main, Hanau, Maintal,
          Seligenstadt, Hainburg, Mainhausen, Babenhausen, Dieburg, Darmstadt, Weiterstadt, Griesheim, Erzhausen,
          Messel, Groß-Umstadt, Ober-Ramstadt, Bad Homburg, Oberursel, Kronberg, Eschborn, Hofheim am Taunus,
          Hattersheim am Main, Flörsheim am Main, Kelsterbach, Raunheim, Rüsselsheim am Main, Mörfelden-Walldorf,
          Groß-Gerau, Büttelborn, Nauheim und vielen weiteren Städten und Gemeinden.
        </p>
        <p className={p}>
          Ganz gleich, ob Sie die Kosten einer <strong>Badsanierung</strong>, <strong>Wohnungssanierung</strong>,{' '}
          <strong>Haussanierung</strong>, <strong>Altbausanierung</strong>, <strong>Kernsanierung</strong>,{' '}
          <strong>energetischen Sanierung</strong> oder <strong>Komplettsanierung</strong> kalkulieren möchten – die{' '}
          <strong>Radex Objektmanagement GmbH</strong> unterstützt Sie mit einer realistischen Ersteinschätzung, einem
          transparenten Festpreisangebot und einer professionellen Umsetzung aus einer Hand.
        </p>
        <p className={p}>
          So erhalten Sie Planungssicherheit, bevor die eigentlichen Bauarbeiten beginnen, und können Ihre Investition
          auf einer verlässlichen Grundlage planen.
        </p>
      </>
    ),
  },
  {
    id: 'fazit',
    title: 'Fazit – Sanierungskosten richtig planen und langfristig investieren',
    content: (
      <>
        <p className={p}>
          Eine Sanierung ist weit mehr als eine kurzfristige Ausgabe. Sie ist eine Investition in den Werterhalt Ihrer
          Immobilie, in moderne Gebäudetechnik, in mehr Wohnkomfort und in eine nachhaltige Zukunft. Wer frühzeitig
          plant und die tatsächlichen Kosten realistisch einschätzt, schafft die Grundlage für ein erfolgreiches
          Sanierungsprojekt ohne unangenehme Überraschungen.
        </p>
        <p className={p}>
          Dabei sollte nicht allein der Quadratmeterpreis im Mittelpunkt stehen. Entscheidend sind immer die
          individuellen Gegebenheiten Ihrer Immobilie. Baujahr, Zustand der Bausubstanz, technische Anlagen, gewünschte
          Ausstattung und der Umfang der Modernisierung beeinflussen den späteren Gesamtpreis wesentlich stärker als
          pauschale Durchschnittswerte aus dem Internet.
        </p>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> verfolgt deshalb einen anderen Ansatz. Jede Immobilie wird
          individuell betrachtet, persönlich besichtigt und technisch bewertet. Auf dieser Grundlage entsteht eine
          nachvollziehbare Kostenplanung, die zu Ihrem Gebäude, Ihren Wünschen und Ihrem Budget passt.
        </p>
        <h4 className={h4}>Warum eine realistische Kostenplanung so wichtig ist</h4>
        <p className={p}>
          Viele Eigentümer möchten möglichst früh wissen, welche Investition auf sie zukommt. Gleichzeitig soll genug
          Planungssicherheit bestehen, um Finanzierungen, Eigenmittel oder einzelne Bauabschnitte sinnvoll vorbereiten
          zu können.
        </p>
        <p className={p}>Eine professionelle Kostenplanung bietet Ihnen unter anderem folgende Vorteile:</p>
        <ul className={ul}>
          <li>realistische Budgetplanung</li>
          <li>transparente Entscheidungsgrundlage</li>
          <li>bessere Vergleichbarkeit verschiedener Ausstattungen</li>
          <li>wirtschaftliche Materialauswahl</li>
          <li>optimale Reihenfolge der Gewerke</li>
          <li>frühzeitige Erkennung technischer Besonderheiten</li>
          <li>weniger finanzielle Überraschungen</li>
          <li>höhere Planungssicherheit</li>
          <li>strukturierter Projektablauf</li>
          <li>langfristige Investitionssicherheit</li>
        </ul>
        <p className={p}>
          Genau deshalb beginnt jedes Projekt der <strong>Radex Objektmanagement GmbH</strong> mit einer persönlichen
          Beratung und einer sorgfältigen Analyse der vorhandenen Immobilie.
        </p>
        <h4 className={h4}>Vom Kostenrechner zum Festpreisangebot</h4>
        <p className={p}>
          Der Sanierungskosten-Rechner liefert eine erste Orientierung und hilft Ihnen dabei, die Größenordnung Ihres
          Projekts besser einzuschätzen.
        </p>
        <p className={p}>Die tatsächliche Planung erfolgt anschließend Schritt für Schritt.</p>
        <h4 className={h4}>1. Erste Orientierung</h4>
        <p className={p}>Nutzen Sie den Sanierungskosten-Rechner und wählen Sie die passende Sanierungsart.</p>
        <h4 className={h4}>2. Persönliche Beratung</h4>
        <p className={p}>
          Gemeinsam besprechen wir Ihre Wünsche, Ziele und den geplanten Umfang der Modernisierung.
        </p>
        <h4 className={h4}>3. Besichtigung Ihrer Immobilie</h4>
        <p className={p}>
          Unsere Experten prüfen die vorhandene Bausubstanz, technische Anlagen und sämtliche kostenrelevanten Faktoren
          direkt vor Ort.
        </p>
        <h4 className={h4}>4. Individuelle Planung</h4>
        <p className={p}>
          Auf Grundlage der Bestandsaufnahme entwickelt die <strong>Radex Objektmanagement GmbH</strong> ein
          wirtschaftliches Sanierungskonzept.
        </p>
        <h4 className={h4}>5. Transparentes Festpreisangebot</h4>
        <p className={p}>
          Sie erhalten eine nachvollziehbare Kalkulation mit klar definierten Leistungen und einem strukturierten
          Projektablauf.
        </p>
        <h4 className={h4}>6. Professionelle Umsetzung</h4>
        <p className={p}>
          Als Generalunternehmer koordinieren wir sämtliche Gewerke bis zur schlüsselfertigen Übergabe.
        </p>
        <p className={p}>
          Unter der technischen Leitung von <strong>Bernd Knoop</strong>, SHK-Meister und Betriebsleiter, entstehen
          hochwertige Sanierungslösungen mit klarer Planung, transparenter Kommunikation und professioneller
          Baukoordination.
        </p>
        <h4 className={h4}>Ihr Partner für Sanierungskosten im gesamten Rhein-Main-Gebiet</h4>
        <p className={p}>
          Die <strong>Radex Objektmanagement GmbH</strong> begleitet Eigentümer, Bauherren, Vermieter und Unternehmen
          bei Sanierungsprojekten im gesamten Rhein-Main-Gebiet.
        </p>
        <p className={p}>
          Unsere Teams sind täglich unter anderem in <strong>Frankfurt am Main</strong>,{' '}
          <strong>Offenbach am Main</strong>, <strong>Rödermark</strong>, <strong>Rodgau</strong>,{' '}
          <strong>Dreieich</strong>, <strong>Dietzenbach</strong>, <strong>Neu-Isenburg</strong>,{' '}
          <strong>Langen</strong>, <strong>Egelsbach</strong>, <strong>Heusenstamm</strong>,{' '}
          <strong>Obertshausen</strong>, <strong>Mühlheim am Main</strong>, <strong>Hanau</strong>,{' '}
          <strong>Maintal</strong>, <strong>Seligenstadt</strong>, <strong>Hainburg</strong>,{' '}
          <strong>Mainhausen</strong>, <strong>Babenhausen</strong>, <strong>Dieburg</strong>,{' '}
          <strong>Darmstadt</strong>, <strong>Weiterstadt</strong>, <strong>Griesheim</strong>,{' '}
          <strong>Erzhausen</strong>, <strong>Messel</strong>, <strong>Groß-Umstadt</strong>,{' '}
          <strong>Ober-Ramstadt</strong>, <strong>Bad Homburg</strong>, <strong>Oberursel</strong>,{' '}
          <strong>Kronberg</strong>, <strong>Eschborn</strong>, <strong>Hofheim am Taunus</strong>,{' '}
          <strong>Hattersheim am Main</strong>, <strong>Flörsheim am Main</strong>, <strong>Kelsterbach</strong>,{' '}
          <strong>Raunheim</strong>, <strong>Rüsselsheim am Main</strong>, <strong>Mörfelden-Walldorf</strong>,{' '}
          <strong>Groß-Gerau</strong>, <strong>Büttelborn</strong>, <strong>Nauheim</strong> sowie in zahlreichen
          weiteren Städten und Gemeinden im gesamten Rhein-Main-Gebiet im Einsatz.
        </p>
        <p className={p}>
          Ganz gleich, ob Sie die Kosten einer <strong>Badsanierung</strong>, <strong>Wohnungssanierung</strong>,{' '}
          <strong>Haussanierung</strong>, <strong>Altbausanierung</strong>, <strong>Kernsanierung</strong>,{' '}
          <strong>energetischen Sanierung</strong>, <strong>Komplettsanierung</strong>,{' '}
          <strong>Badmodernisierung</strong>, <strong>Hausmodernisierung</strong>,{' '}
          <strong>Wohnungsmodernisierung</strong> oder einer umfassenden <strong>Immobiliensanierung</strong>{' '}
          kalkulieren möchten – wir unterstützen Sie mit Erfahrung, technischer Kompetenz und einer transparenten
          Kostenplanung.
        </p>
      </>
    ),
  },
];
