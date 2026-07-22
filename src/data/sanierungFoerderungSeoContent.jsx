import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const sanierungFoerderungSeoIntro = (
  <>
    <p className={p}>
      Die Förderlandschaft für energetische Sanierungen entwickelt sich kontinuierlich weiter. Eigentümer stehen häufig
      vor der Frage, welche Förderprogramme zu ihrem Vorhaben passen und welche Voraussetzungen erfüllt werden müssen.
      Je nach Maßnahme kommen unterschiedliche Programme infrage – beispielsweise für Heizungsmodernisierungen,
      Einzelmaßnahmen an der Gebäudehülle oder umfassende Effizienzhaus-Sanierungen.
    </p>
    <p className={p}>
      Eine frühzeitige Planung hilft dabei, technische Anforderungen, Projektabläufe und mögliche Förderwege sinnvoll
      miteinander zu verbinden.
    </p>
  </>
);

export const sanierungFoerderungSeoSections = [
  {
    id: 'beg',
    title: 'Bundesförderung für effiziente Gebäude (BEG)',
    content: (
      <>
        <p className={p}>
          Die Bundesförderung für effiziente Gebäude (BEG) bildet die Grundlage der staatlichen Förderung energetischer
          Modernisierungen. Sie bündelt verschiedene Programme für Wohngebäude und unterstützt sowohl umfassende
          Sanierungen als auch einzelne energetische Maßnahmen.
        </p>
        <p className={p}>Je nach Projekt können unter anderem folgende Bereiche berücksichtigt werden:</p>
        <ul className={ul}>
          <li>energetische Komplettsanierungen</li>
          <li>Einzelmaßnahmen</li>
          <li>Heizungsmodernisierung</li>
          <li>Gebäudehülle</li>
          <li>Anlagentechnik</li>
          <li>Heizungsoptimierung</li>
          <li>Fachplanung und Baubegleitung</li>
        </ul>
        <p className={p}>
          Die konkreten Voraussetzungen unterscheiden sich je nach Förderprogramm und Antragsteller.
        </p>
      </>
    ),
  },
  {
    id: 'kfw',
    title: 'KfW-Förderung',
    content: (
      <>
        <p className={p}>
          Die KfW unterstützt verschiedene energetische Sanierungsmaßnahmen über Zuschüsse oder zinsgünstige
          Finanzierungen. Besonders relevant ist die Förderung umfassender Sanierungen zum Effizienzhaus sowie die
          Heizungsförderung für private Eigentümer.
        </p>
        <p className={p}>Je nach Programm gelten unterschiedliche Anforderungen an:</p>
        <ul className={ul}>
          <li>Gebäudealter</li>
          <li>Nutzung</li>
          <li>Eigentumsverhältnisse</li>
          <li>technische Ausführung</li>
          <li>Nachweise</li>
          <li>Antragstellung</li>
        </ul>
        <p className={p}>
          Welche Programme aktuell verfügbar sind, sollte immer anhand der geltenden Förderbedingungen geprüft werden.
        </p>
      </>
    ),
  },
  {
    id: 'bafa',
    title: 'BAFA-Förderung',
    content: (
      <>
        <p className={p}>
          Das BAFA fördert insbesondere bestimmte energetische Einzelmaßnahmen im Gebäudebestand. Dazu gehören
          beispielsweise Maßnahmen an der Gebäudehülle, der Anlagentechnik oder Optimierungen bestehender Heizsysteme.
        </p>
        <p className={p}>Typische Beispiele:</p>
        <ul className={ul}>
          <li>Fassadendämmung</li>
          <li>Dachdämmung</li>
          <li>Kellerdeckendämmung</li>
          <li>Fenster</li>
          <li>Außentüren</li>
          <li>Lüftungstechnik</li>
          <li>Heizungsoptimierung</li>
        </ul>
        <p className={p}>
          Welche Maßnahmen förderfähig sind, richtet sich nach den jeweils aktuellen technischen Mindestanforderungen.
        </p>
      </>
    ),
  },
  {
    id: 'heizungsfoerderung',
    title: 'Heizungsförderung',
    content: (
      <>
        <p className={p}>
          Der Austausch alter Heizungsanlagen gehört zu den wichtigsten Förderbereichen energetischer Modernisierungen.
        </p>
        <p className={p}>
          Gefördert werden – abhängig vom jeweils gültigen Förderprogramm – unter anderem:
        </p>
        <ul className={ul}>
          <li>Wärmepumpen</li>
          <li>Biomasseheizungen</li>
          <li>Solarthermie</li>
          <li>Anschluss an Wärmenetze</li>
          <li>innovative Heiztechnik</li>
        </ul>
        <p className={p}>
          Vor der Umsetzung sollten Gebäudezustand, Heizflächen und technische Voraussetzungen sorgfältig geprüft werden.
        </p>
      </>
    ),
  },
  {
    id: 'waermepumpe',
    title: 'Wärmepumpenförderung',
    content: (
      <>
        <p className={p}>
          Die Wärmepumpe zählt zu den am häufigsten nachgefragten Förderthemen. Ob eine Wärmepumpe wirtschaftlich
          betrieben werden kann, hängt jedoch von mehreren Faktoren ab.
        </p>
        <p className={p}>Dazu gehören beispielsweise:</p>
        <ul className={ul}>
          <li>Dämmstandard</li>
          <li>Heizkörper oder Fußbodenheizung</li>
          <li>Vorlauftemperaturen</li>
          <li>Gebäudegröße</li>
          <li>Stromversorgung</li>
          <li>Elektroinstallation</li>
          <li>Photovoltaik</li>
          <li>Batteriespeicher</li>
          <li>Warmwasserbereitung</li>
          <li>Schallschutz</li>
        </ul>
        <p className={p}>
          Erst die Kombination aller Komponenten ermöglicht eine langfristig effiziente Lösung.
        </p>
      </>
    ),
  },
  {
    id: 'einzelmassnahmen',
    title: 'Einzelmaßnahmen fördern lassen',
    content: (
      <>
        <p className={p}>
          Nicht jede Immobilie wird vollständig energetisch saniert. Viele Eigentümer modernisieren ihr Gebäude Schritt
          für Schritt.
        </p>
        <p className={p}>Typische Einzelmaßnahmen sind:</p>
        <ul className={ul}>
          <li>Fenster austauschen</li>
          <li>Haustüren erneuern</li>
          <li>Fassaden dämmen</li>
          <li>Dach dämmen</li>
          <li>Kellerdecke dämmen</li>
          <li>Lüftung verbessern</li>
          <li>Heizungsoptimierung</li>
          <li>Gebäudetechnik modernisieren</li>
        </ul>
        <p className={p}>
          Auch einzelne Maßnahmen können – abhängig vom Förderprogramm – förderfähig sein.
        </p>
      </>
    ),
  },
  {
    id: 'effizienzhaus',
    title: 'Effizienzhaus-Förderung',
    content: (
      <>
        <p className={p}>
          Wer eine umfassende energetische Modernisierung plant, sollte prüfen, ob das Gebäude nach Abschluss einen
          förderfähigen Effizienzhaus-Standard erreichen kann.
        </p>
        <p className={p}>Dabei werden sämtliche energetischen Maßnahmen gemeinsam betrachtet.</p>
        <p className={p}>Häufig kombiniert werden:</p>
        <ul className={ul}>
          <li>Gebäudehülle</li>
          <li>Fenster</li>
          <li>Dach</li>
          <li>Keller</li>
          <li>Heiztechnik</li>
          <li>Lüftung</li>
          <li>Gebäudetechnik</li>
          <li>erneuerbare Energien</li>
        </ul>
      </>
    ),
  },
  {
    id: 'isfp',
    title: 'Individueller Sanierungsfahrplan (iSFP)',
    content: (
      <>
        <p className={p}>
          Ein individueller Sanierungsfahrplan zeigt auf, welche Modernisierungsschritte langfristig sinnvoll sind. Er
          dient Eigentümern als Orientierung und kann – je nach geltendem Förderprogramm – zusätzliche Vorteile bei
          bestimmten Einzelmaßnahmen ermöglichen.
        </p>
        <p className={p}>
          Ein strukturierter Sanierungsfahrplan hilft außerdem dabei, Maßnahmen sinnvoll aufeinander aufzubauen und
          spätere Doppelarbeiten zu vermeiden.
        </p>
      </>
    ),
  },
  {
    id: 'energieberater',
    title: 'Energieeffizienz-Experte',
    content: (
      <>
        <p className={p}>
          Für verschiedene Förderprogramme ist die Einbindung eines qualifizierten Energieeffizienz-Experten erforderlich.
        </p>
        <p className={p}>Dieser unterstützt beispielsweise bei:</p>
        <ul className={ul}>
          <li>energetischer Bewertung</li>
          <li>Sanierungskonzept</li>
          <li>technischen Nachweisen</li>
          <li>Projektbegleitung</li>
          <li>Dokumentation</li>
        </ul>
        <p className={p}>Die genauen Anforderungen hängen vom jeweiligen Förderprogramm ab.</p>
      </>
    ),
  },
  {
    id: 'foerderfaehige-kosten',
    title: 'Förderfähige Kosten',
    content: (
      <>
        <p className={p}>Je nach Förderprogramm können unterschiedliche Kosten berücksichtigt werden.</p>
        <p className={p}>Dazu gehören unter anderem:</p>
        <ul className={ul}>
          <li>Material</li>
          <li>Fachunternehmerleistungen</li>
          <li>technische Planung</li>
          <li>Fachplanung</li>
          <li>Baubegleitung</li>
          <li>notwendige Nebenarbeiten</li>
          <li>Anlagentechnik</li>
          <li>energetische Maßnahmen</li>
        </ul>
        <p className={p}>
          Welche Kosten tatsächlich berücksichtigt werden, richtet sich nach den jeweils gültigen Förderbedingungen.
        </p>
        <p className={p}>
          <Link to="/energetische-sanierung-rhein-main">Energetische Sanierung</Link>
          {' · '}
          <Link to="/energieeffizienz-rhein-main">Energieeffizienz</Link>
          {' · '}
          <Link to="/komplettsanierung-rhein-main">Komplettsanierung</Link>
          {' · '}
          <Link to="/heizung-sanitaer">Heizung &amp; Sanitär</Link>
          {' · '}
          <Link to="/elektrotechnik-gebaeudetechnik">Elektrotechnik &amp; Gebäudetechnik</Link>
          {' · '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link>
        </p>
      </>
    ),
  },
  {
    id: 'steuerbonus',
    title: 'Steuerbonus nach §35c EStG',
    content: (
      <>
        <p className={p}>
          Nicht jede energetische Modernisierung muss zwingend über klassische Förderprogramme laufen. Unter bestimmten
          gesetzlichen Voraussetzungen kann alternativ eine steuerliche Förderung nach §35c Einkommensteuergesetz (EStG)
          infrage kommen.
        </p>
        <p className={p}>
          Diese richtet sich an selbstnutzende Eigentümer bestimmter Wohngebäude und ermöglicht die steuerliche
          Berücksichtigung ausgewählter energetischer Maßnahmen.
        </p>
        <p className={p}>Wichtig dabei:</p>
        <ul className={ul}>
          <li>Nicht jede Maßnahme ist automatisch begünstigt.</li>
          <li>Die technischen Anforderungen müssen erfüllt werden.</li>
          <li>Erforderliche Bescheinigungen sind notwendig.</li>
          <li>Eine Kombination mit Fördermitteln für dieselben Kosten ist nicht uneingeschränkt möglich.</li>
        </ul>
        <p className={p}>
          Vor einer Entscheidung sollte immer geprüft werden, welcher Förderweg wirtschaftlich sinnvoller ist.
        </p>
      </>
    ),
  },
  {
    id: 'ergaenzungskredit',
    title: 'Ergänzungskredit der KfW',
    content: (
      <>
        <p className={p}>
          Nicht jede Sanierung lässt sich vollständig aus Eigenmitteln finanzieren. Je nach Projekt können ergänzende
          Finanzierungsmöglichkeiten sinnvoll sein.
        </p>
        <p className={p}>Der Ergänzungskredit kann beispielsweise dabei helfen,</p>
        <ul className={ul}>
          <li>Eigenanteile zu finanzieren</li>
          <li>größere Sanierungsprojekte umzusetzen</li>
          <li>verschiedene Maßnahmen zeitlich zusammenzuführen</li>
          <li>Liquidität während der Modernisierung zu sichern</li>
        </ul>
        <p className={p}>
          Welche Finanzierung sinnvoll ist, hängt von Gebäude, Eigentümer, Förderweg und Investitionsumfang ab.
        </p>
      </>
    ),
  },
  {
    id: 'kombination',
    title: 'Förderprogramme kombinieren',
    content: (
      <>
        <p className={p}>Viele Eigentümer möchten mehrere Förderprogramme gleichzeitig nutzen.</p>
        <p className={p}>
          Grundsätzlich können Förderprogramme teilweise miteinander kombiniert werden – allerdings gelten dabei klare
          Regeln.
        </p>
        <p className={p}>Vor einer Kombination sollte geprüft werden:</p>
        <ul className={ul}>
          <li>dürfen Zuschüsse kombiniert werden?</li>
          <li>dürfen Kredite ergänzt werden?</li>
          <li>werden dieselben Kosten mehrfach gefördert?</li>
          <li>gibt es Höchstgrenzen?</li>
          <li>greifen regionale Programme zusätzlich?</li>
          <li>bestehen kommunale Fördermöglichkeiten?</li>
        </ul>
        <p className={p}>Eine strukturierte Planung verhindert spätere Probleme bei der Antragstellung.</p>
      </>
    ),
  },
  {
    id: 'vorhabenbeginn',
    title: 'Vorhabenbeginn richtig planen',
    content: (
      <>
        <p className={p}>Der Zeitpunkt der Antragstellung gehört zu den häufigsten Fehlerquellen.</p>
        <p className={p}>Bei vielen Förderprogrammen gilt:</p>
        <p className={p}>
          Die maßgeblichen Voraussetzungen müssen erfüllt sein, bevor ein förderschädlicher Vorhabenbeginn erfolgt. Was
          genau als Vorhabenbeginn gilt, unterscheidet sich je nach Programm und den jeweils geltenden
          Förderbedingungen.
        </p>
        <p className={p}>Deshalb empfiehlt sich folgende Reihenfolge:</p>
        <ol className={`${ul} list-decimal pl-5`}>
          <li>Projektidee entwickeln</li>
          <li>Gebäude analysieren</li>
          <li>Förderweg prüfen</li>
          <li>Erforderliche Fachleute einbinden</li>
          <li>Förderrelevante Unterlagen vorbereiten</li>
          <li>Antrag entsprechend den geltenden Vorgaben stellen</li>
          <li>
            Anschließend die Umsetzung beginnen, sofern die Programmvoraussetzungen erfüllt sind
          </li>
        </ol>
        <p className={p}>Eine frühzeitige Planung hilft dabei, unnötige Risiken zu vermeiden.</p>
      </>
    ),
  },
  {
    id: 'fehler',
    title: 'Häufige Fehler bei Förderanträgen',
    content: (
      <>
        <p className={p}>
          Viele Schwierigkeiten entstehen nicht durch die eigentliche Sanierung, sondern bereits während der
          Vorbereitung.
        </p>
        <p className={p}>Typische Fehler sind:</p>
        <ul className={ul}>
          <li>Fördermöglichkeiten erst nach der Beauftragung prüfen</li>
          <li>Maßnahmen nicht aufeinander abstimmen</li>
          <li>technische Anforderungen übersehen</li>
          <li>unvollständige Unterlagen</li>
          <li>fehlende Nachweise</li>
          <li>falsche Reihenfolge der Projektphasen</li>
          <li>unrealistische Zeitplanung</li>
          <li>fehlende Abstimmung zwischen den Gewerken</li>
          <li>keine langfristige Sanierungsstrategie</li>
          <li>Förderprogramme nicht regelmäßig auf Aktualität prüfen</li>
        </ul>
        <p className={p}>Eine strukturierte Projektplanung reduziert diese Risiken erheblich.</p>
      </>
    ),
  },
];

export const sanierungFoerderungSeoTocItems = sanierungFoerderungSeoSections.map(({ id, title }) => ({
  id,
  title,
}));
