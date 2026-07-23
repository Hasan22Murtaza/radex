import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const notfallSoforthilfeSeoIntro = (
  <>
    <p className={p}>
      Nicht jeder Schaden kann warten. Plötzlich auftretende Probleme an einer Immobilie erfordern häufig schnelles und
      strukturiertes Handeln, damit sich Folgeschäden vermeiden und Gebäude möglichst schnell wieder vollständig nutzen
      lassen.
    </p>
    <p className={p}>
      Radex Objektmanagement unterstützt private Eigentümer, Unternehmen, Hausverwaltungen und Investoren bei
      kurzfristigen Sanierungsprojekten im gesamten Rhein-Main-Gebiet. Dabei übernehmen wir nicht nur die Organisation
      einzelner Arbeiten, sondern koordinieren sämtliche beteiligten Gewerke bis zum erfolgreichen Projektabschluss.
    </p>
    <p className={p}>
      Unser Ziel ist es, Ausfallzeiten zu minimieren und Sanierungsmaßnahmen effizient umzusetzen.
    </p>
  </>
);

export const notfallSoforthilfeSeoSections = [
  {
    id: 'wann-soforthilfe',
    title: 'Wann ist eine Soforthilfe sinnvoll?',
    content: (
      <>
        <p className={p}>
          Viele Schäden entstehen unerwartet und dulden keinen langen Planungsprozess. Je früher notwendige Maßnahmen
          eingeleitet werden, desto besser lassen sich Folgeschäden häufig begrenzen.
        </p>
        <p className={p}>Eine schnelle Projektorganisation kann insbesondere sinnvoll sein bei:</p>
        <ul className={ul}>
          <li>Wasserschäden</li>
          <li>beschädigten Badezimmern</li>
          <li>kurzfristigen Modernisierungen</li>
          <li>Sanierungen nach Mieterwechsel</li>
          <li>dringenden Instandsetzungen</li>
          <li>versicherungsbedingten Sanierungen</li>
          <li>notwendigen Renovierungen vor Neuvermietungen</li>
          <li>kurzfristigen Gewerbeumbauten</li>
        </ul>
        <p className={p}>
          Je nach Projektumfang koordinieren wir sämtliche notwendigen Arbeiten und sorgen für einen strukturierten Ablauf.
        </p>
      </>
    ),
  },
  {
    id: 'fuer-wen',
    title: 'Für wen eignet sich unsere Soforthilfe?',
    content: (
      <>
        <p className={p}>
          Unsere Leistungen richten sich an unterschiedliche Auftraggeber, die kurzfristig Unterstützung bei
          Sanierungsmaßnahmen benötigen.
        </p>
        <p className={p}>Dazu gehören unter anderem:</p>
        <ul className={ul}>
          <li>private Hauseigentümer</li>
          <li>Wohnungseigentümer</li>
          <li>Vermieter</li>
          <li>Hausverwaltungen</li>
          <li>Wohnungsbaugesellschaften</li>
          <li>Unternehmen</li>
          <li>Gewerbebetriebe</li>
          <li>Investoren</li>
        </ul>
        <p className={p}>
          Jedes Projekt wird individuell bewertet und entsprechend der jeweiligen Anforderungen geplant.
        </p>
      </>
    ),
  },
  {
    id: 'schnelle-entscheidungen',
    title: 'Schnelle Entscheidungen reduzieren Folgeschäden',
    content: (
      <>
        <p className={p}>
          Bei vielen Sanierungsprojekten entscheidet die Reaktionsgeschwindigkeit über Aufwand und Kosten. Werden
          notwendige Maßnahmen frühzeitig koordiniert, lassen sich Arbeitsabläufe besser organisieren und unnötige
          Verzögerungen vermeiden.
        </p>
        <p className={p}>Durch eine zentrale Projektsteuerung können:</p>
        <ul className={ul}>
          <li>Gewerke effizient geplant werden</li>
          <li>Wartezeiten reduziert werden</li>
          <li>Termine besser koordiniert werden</li>
          <li>Materialien rechtzeitig bereitstehen</li>
          <li>Arbeiten sinnvoll aufeinander aufbauen</li>
        </ul>
        <p className={p}>
          Dadurch entsteht ein strukturierter Projektablauf mit klaren Verantwortlichkeiten.
        </p>
      </>
    ),
  },
  {
    id: 'vier-spezialbereiche',
    title: 'Unsere vier Spezialbereiche',
    content: (
      <>
        <p className={p}>Je nach Situation bieten wir unterschiedliche Leistungen an.</p>
        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Sanierungs-Soforthilfe</h3>
        <p className={p}>
          Für akute Sanierungsmaßnahmen nach unerwarteten Schäden oder dringendem Handlungsbedarf.{' '}
          <Link to="/sanierungs-soforthilfe-rhein-main">Mehr erfahren →</Link>
        </p>
        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Schnellsanierung</h3>
        <p className={p}>
          Wenn Modernisierungen oder Instandsetzungen innerhalb kurzer Zeit umgesetzt werden sollen.{' '}
          <Link to="/schnellsanierung-rhein-main">Mehr erfahren →</Link>
        </p>
        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Bad-Soforthilfe</h3>
        <p className={p}>
          Schnelle Unterstützung bei beschädigten oder nicht nutzbaren Badezimmern.{' '}
          <Link to="/bad-soforthilfe-rhein-main">Mehr erfahren →</Link>
        </p>
        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Schnelle Badsanierung</h3>
        <p className={p}>
          Komplette Badmodernisierung mit optimierter Projektkoordination und kurzen Bauzeiten.{' '}
          <Link to="/schnelle-badsanierung-rhein-main">Mehr erfahren →</Link>
        </p>
      </>
    ),
  },
  {
    id: 'ein-ansprechpartner',
    title: 'Ein Ansprechpartner für das gesamte Projekt',
    content: (
      <p className={p}>
        Gerade bei kurzfristigen Sanierungen entstehen häufig Abstimmungsprobleme zwischen verschiedenen Fachbetrieben.
        Radex übernimmt die Koordination sämtlicher Projektbeteiligten und sorgt dafür, dass die einzelnen Arbeiten
        sinnvoll aufeinander abgestimmt werden. Dadurch erhalten Sie einen zentralen Ansprechpartner, der Termine,
        Abläufe und Kommunikation bündelt.
      </p>
    ),
  },
  {
    id: 'regional',
    title: 'Regional im gesamten Rhein-Main-Gebiet',
    content: (
      <>
        <p className={p}>Wir betreuen Sanierungsprojekte unter anderem in:</p>
        <ul className={ul}>
          <li>Frankfurt am Main</li>
          <li>Wiesbaden</li>
          <li>Mainz</li>
          <li>Darmstadt</li>
          <li>Offenbach</li>
          <li>Hanau</li>
          <li>Bad Homburg</li>
          <li>Rüsselsheim</li>
          <li>Taunus</li>
          <li>Main-Taunus-Kreis</li>
          <li>Hochtaunuskreis</li>
          <li>Wetteraukreis</li>
          <li>Kreis Groß-Gerau</li>
          <li>Main-Kinzig-Kreis</li>
          <li>Rheingau-Taunus-Kreis</li>
        </ul>
        <p className={p}>Auch angrenzende Regionen prüfen wir gerne auf Anfrage.</p>
      </>
    ),
  },
  {
    id: 'weitere-leistungen',
    title: 'Weitere Leistungen von Radex',
    content: (
      <>
        <p className={p}>
          Neben kurzfristigen Sanierungen unterstützen wir unsere Kunden auch bei umfangreichen Modernisierungs- und
          Sanierungsprojekten.
        </p>
        <p className={p}>Dazu gehören unter anderem:</p>
        <ul className={ul}>
          <li>
            <Link to="/komplettsanierung-rhein-main">Komplettsanierungen</Link>
          </li>
          <li>
            <Link to="/energetische-sanierung-rhein-main">Energetische Sanierungen</Link>
          </li>
          <li>
            <Link to="/badsanierung-rhein-main">Badsanierungen</Link>
          </li>
          <li>
            <Link to="/innenausbau-umbau-rhein-main">Innenausbau</Link>
          </li>
          <li>
            <Link to="/elektrotechnik-gebaeudetechnik">Elektrotechnik</Link>
          </li>
          <li>
            <Link to="/heizung-sanitaer-rhein-main">Heizungs- und Sanitärtechnik</Link>
          </li>
          <li>
            <Link to="/generalunternehmer-rhein-main">Generalunternehmerleistungen</Link>
          </li>
        </ul>
      </>
    ),
  },
];

export const notfallSoforthilfeSeoLinkSections = [
  {
    id: 'link-sanierungs-soforthilfe',
    title: 'Sanierungs-Soforthilfe Rhein-Main',
    to: '/sanierungs-soforthilfe-rhein-main',
    desc: 'Akute Unterstützung bei dringenden Sanierungsmaßnahmen und unerwarteten Gebäudeschäden.',
  },
  {
    id: 'link-schnellsanierung',
    title: 'Schnellsanierung Rhein-Main',
    to: '/schnellsanierung-rhein-main',
    desc: 'Beschleunigte Sanierungsprojekte mit strukturierter Koordination aller Gewerke.',
  },
  {
    id: 'link-bad-soforthilfe',
    title: 'Bad-Soforthilfe Rhein-Main',
    to: '/bad-soforthilfe-rhein-main',
    desc: 'Schnelle Hilfe bei beschädigten oder nicht nutzbaren Badezimmern.',
  },
  {
    id: 'link-schnelle-badsanierung',
    title: 'Schnelle Badsanierung Rhein-Main',
    to: '/schnelle-badsanierung-rhein-main',
    desc: 'Komplette Badmodernisierung mit kurzen Projektlaufzeiten und professioneller Umsetzung.',
  },
];
