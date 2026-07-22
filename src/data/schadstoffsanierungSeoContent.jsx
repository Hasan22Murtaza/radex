import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const schadstoffsanierungSeoIntro = (
  <>
    <p className={p}>
      Schadstoffsanierungen gehören zu den anspruchsvollsten Arbeiten im Gebäudebestand. Unterschiedliche Baustoffe,
      verschiedene Schadstoffarten und gesetzliche Anforderungen machen eine sorgfältige Planung unverzichtbar. Radex
      koordiniert die einzelnen Projektschritte – von der ersten Bestandsaufnahme über die Zusammenarbeit mit
      qualifizierten Fachpartnern bis zur Wiederherstellung der sanierten Bereiche.
    </p>
  </>
);

export const schadstoffsanierungSeoSections = [
  {
    id: 'schadstofferkundung',
    title: 'Schadstofferkundung',
    content: (
      <>
        <p className={p}>
          Vor jedem Rückbau sollte geprüft werden, ob schadstoffhaltige Baustoffe vorhanden sein könnten. Eine
          strukturierte Bestandsaufnahme hilft dabei, Risiken frühzeitig zu erkennen und den weiteren Projektablauf sicher
          zu planen.
        </p>
        <p className={p}>
          Mehr zur{' '}
          <Link to="/schimmel-asbest-sanierung-rhein-main">Schimmel- &amp; Asbestsanierung Rhein-Main</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'laboranalyse',
    title: 'Materialproben und Laboranalysen',
    content: (
      <p className={p}>
        Ob tatsächlich eine Schadstoffbelastung vorliegt, lässt sich häufig erst durch eine fachgerechte Probenahme und
        Laboranalyse feststellen. Die Ergebnisse bilden die Grundlage für die weitere Planung. Probenahme und Analyse
        werden durch entsprechend qualifizierte Fachpartner durchgeführt.
      </p>
    ),
  },
  {
    id: 'pak',
    title: 'PAK-Sanierung',
    content: (
      <p className={p}>
        Polyzyklische aromatische Kohlenwasserstoffe können sich in älteren Klebstoffen, Abdichtungen oder Bodenaufbauten
        befinden. Je nach Analyseergebnis werden geeignete Rückbau- und Entsorgungsverfahren festgelegt.
      </p>
    ),
  },
  {
    id: 'pcb',
    title: 'PCB-Sanierung',
    content: (
      <p className={p}>
        PCB-belastete Fugen, Beschichtungen oder technische Bauteile erfordern eine sorgfältige Bewertung und eine
        abgestimmte Sanierungsstrategie.
      </p>
    ),
  },
  {
    id: 'kmf',
    title: 'KMF-Sanierung',
    content: (
      <p className={p}>
        Künstliche Mineralfasern aus älteren Dämmstoffen müssen abhängig von Materialart und Zustand kontrolliert
        ausgebaut und fachgerecht entsorgt werden.
      </p>
    ),
  },
  {
    id: 'schadstoffrueckbau',
    title: 'Schadstoffrückbau',
    content: (
      <p className={p}>
        Belastete Baustoffe werden kontrolliert entfernt, sicher verpackt und für den Transport vorbereitet. Dabei werden
        Staubentwicklung und Materialverschleppung soweit wie möglich minimiert.
      </p>
    ),
  },
  {
    id: 'abschottung',
    title: 'Abschottung der Arbeitsbereiche',
    content: (
      <p className={p}>
        Je nach Sanierungsverfahren werden staubdichte Arbeitsbereiche eingerichtet, um angrenzende Gebäudeteile während
        der Arbeiten zu schützen.
      </p>
    ),
  },
  {
    id: 'entsorgung',
    title: 'Fachgerechte Entsorgung',
    content: (
      <p className={p}>
        Belastete Baustoffe werden getrennt gesammelt, gekennzeichnet und über zugelassene Entsorgungswege abgeführt. Alle
        relevanten Nachweise werden dokumentiert.
      </p>
    ),
  },
  {
    id: 'abschlusskontrolle',
    title: 'Reinigung und Abschlusskontrolle',
    content: (
      <p className={p}>
        Nach Abschluss der Sanierungsarbeiten werden die Arbeitsbereiche gereinigt und entsprechend dem vorgesehenen
        Verfahren kontrolliert, bevor weitere Ausbauarbeiten beginnen.
      </p>
    ),
  },
  {
    id: 'wiederherstellung',
    title: 'Wiederherstellung der Flächen',
    content: (
      <p className={p}>
        Nach der Schadstoffsanierung übernimmt Radex auf Wunsch den vollständigen Wiederaufbau – von Trockenbau und
        Bodenbelägen bis zu Malerarbeiten und der schlüsselfertigen Übergabe.
      </p>
    ),
  },
  {
    id: 'gewerbe',
    title: 'Schadstoffsanierung in Gewerbeimmobilien',
    content: (
      <p className={p}>
        Ob Bürogebäude, Produktionshalle oder Einzelhandelsfläche – wir koordinieren die Sanierung so, dass Betriebsabläufe
        und Terminpläne bestmöglich berücksichtigt werden.
      </p>
    ),
  },
  {
    id: 'bestand',
    title: 'Schadstoffsanierung im Gebäudebestand',
    content: (
      <p className={p}>
        Bei Bestandsimmobilien werden Schadstoffsanierung und Modernisierung häufig miteinander kombiniert. Dadurch lassen
        sich Rückbau, Innenausbau und technische Erneuerungen effizient aufeinander abstimmen.
      </p>
    ),
  },
];

export const schadstoffsanierungSeoLinkSections = [
  {
    id: 'hub-link',
    title: 'Schimmel- & Asbestsanierung Rhein-Main',
    to: '/schimmel-asbest-sanierung-rhein-main',
    content: (
      <p className={p}>
        Hubseite mit Informationen zu Schimmel-, Asbest- und Schadstoffsanierungen.
      </p>
    ),
  },
  {
    id: 'asbest-link',
    title: 'Asbestsanierung Rhein-Main',
    to: '/asbestsanierung-rhein-main',
    content: (
      <p className={p}>
        Fachgerechte Bewertung, Rückbau und Entsorgung asbesthaltiger Baustoffe.
      </p>
    ),
  },
  {
    id: 'schimmel-link',
    title: 'Schimmelsanierung Rhein-Main',
    to: '/schimmelsanierung-rhein-main',
    content: (
      <p className={p}>
        Nachhaltige Beseitigung von Schimmelbefall inklusive Ursachenanalyse und Wiederherstellung.
      </p>
    ),
  },
];
