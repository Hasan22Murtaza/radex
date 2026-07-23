import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const asbestsanierungSeoIntro = (
  <>
    <p className={p}>
      Asbesthaltige Baustoffe kommen noch heute in vielen Bestandsgebäuden vor. Besonders bei Umbau-, Rückbau- oder
      Modernisierungsmaßnahmen ist eine frühzeitige Prüfung wichtig, damit der weitere Projektablauf sicher geplant
      werden kann.
    </p>
    <p className={p}>
      Radex übernimmt die Projektkoordination von der ersten Bestandsaufnahme über die Zusammenarbeit mit qualifizierten
      Fachunternehmen bis zur Wiederherstellung der sanierten Bereiche.
    </p>
  </>
);

export const asbestsanierungSeoSections = [
  {
    id: 'asbest-erkennen',
    title: 'Verdacht auf Asbest',
    content: (
      <>
        <p className={p}>
          Viele asbesthaltige Baustoffe sind äußerlich nicht eindeutig erkennbar. Baujahr, Materialart und Einbausituation
          liefern erste Hinweise, eine sichere Beurteilung ist jedoch nur durch geeignete Untersuchungen möglich.
        </p>
        <p className={p}>
          Mehr zur{' '}
          <Link to="/schimmel-asbest-sanierung-rhein-main">Schimmel- &amp; Asbestsanierung Rhein-Main</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'asbestuntersuchung',
    title: 'Materialproben und Laboranalysen',
    content: (
      <>
        <span id="materialproben" className="sr-only" aria-hidden="true" />
        <p className={p}>
          Falls erforderlich, koordinieren wir die fachgerechte Probenahme und Laboranalyse durch qualifizierte
          Fachpartner. Die Ergebnisse bilden die Grundlage für die weitere Planung.
        </p>
      </>
    ),
  },
  {
    id: 'asbestsanierung',
    title: 'Asbestsanierung',
    content: (
      <p className={p}>
        Wir koordinieren die fachgerechte Sanierung asbesthaltiger Baustoffe – von der Planung der Schutzmaßnahmen über
        den Rückbau bis zur dokumentierten Entsorgung. Gesetzlich geregelte Arbeiten werden von entsprechend qualifizierten
        Fachbetrieben durchgeführt.
      </p>
    ),
  },
  {
    id: 'bodenbelaege',
    title: 'Asbesthaltige Bodenbeläge und Klebstoffe',
    content: (
      <p className={p}>
        Ältere Bodenplatten, Spachtelmassen oder schwarze Klebstoffe können asbesthaltige Bestandteile enthalten. Vor einem
        Ausbau sollte eine fachgerechte Untersuchung erfolgen.
      </p>
    ),
  },
  {
    id: 'fassadenplatten',
    title: 'Fassadenplatten',
    content: (
      <p className={p}>
        Ältere Fassadensysteme können asbesthaltige Faserzementprodukte enthalten. Die Sanierung wird auf Grundlage des
        jeweiligen Befunds geplant.
      </p>
    ),
  },
  {
    id: 'dachplatten',
    title: 'Dachplatten',
    content: (
      <p className={p}>
        Auch Dacheindeckungen und Wellplatten aus älteren Gebäuden können asbesthaltige Materialien enthalten. Rückbau und
        Entsorgung erfolgen durch entsprechend qualifizierte Fachunternehmen.
      </p>
    ),
  },
  {
    id: 'rohrisolierungen',
    title: 'Rohrisolierungen und technische Anlagen',
    content: (
      <p className={p}>
        Technische Installationen, Isolierungen und Dichtungen älterer Gebäude können asbesthaltige Baustoffe enthalten und
        sollten vor Umbauarbeiten bewertet werden.
      </p>
    ),
  },
  {
    id: 'schutzmassnahmen',
    title: 'Schutzmaßnahmen',
    content: (
      <p className={p}>
        Je nach Sanierungsverfahren werden Arbeitsbereiche abgeschottet und geeignete Schutzmaßnahmen umgesetzt. Art und
        Umfang richten sich nach dem jeweiligen Befund und den geltenden Vorgaben.
      </p>
    ),
  },
  {
    id: 'rueckbau',
    title: 'Kontrollierter Rückbau',
    content: (
      <p className={p}>
        Belastete Materialien werden kontrolliert entfernt, sicher verpackt und für den fachgerechten Abtransport
        vorbereitet.
      </p>
    ),
  },
  {
    id: 'entsorgung',
    title: 'Fachgerechte Entsorgung',
    content: (
      <p className={p}>
        Asbesthaltige Baustoffe werden getrennt gesammelt, gekennzeichnet und über zugelassene Entsorgungswege abgeführt.
        Die erforderlichen Nachweise werden dokumentiert.
      </p>
    ),
  },
  {
    id: 'abschlusskontrolle',
    title: 'Reinigung und Abschlusskontrolle',
    content: (
      <p className={p}>
        Nach Abschluss der Sanierungsarbeiten werden die Arbeitsbereiche entsprechend dem festgelegten Verfahren gereinigt
        und kontrolliert, bevor weitere Ausbauarbeiten beginnen.
      </p>
    ),
  },
  {
    id: 'wiederherstellung',
    title: 'Wiederherstellung der Räume',
    content: (
      <p className={p}>
        Nach erfolgreicher Asbestsanierung übernimmt Radex auf Wunsch den vollständigen Wiederaufbau – von Trockenbau und
        Bodenbelägen bis zu Malerarbeiten und der schlüsselfertigen Übergabe.
      </p>
    ),
  },
  {
    id: 'gewerbe',
    title: 'Asbestsanierung in Gewerbeimmobilien',
    content: (
      <p className={p}>
        Bürogebäude, Produktionshallen, Lagerflächen oder Verkaufsräume stellen unterschiedliche Anforderungen an
        Terminplanung und Bauablauf. Radex koordiniert sämtliche Projektphasen und stimmt Sanierung sowie Wiederherstellung
        effizient aufeinander ab.
      </p>
    ),
  },
];

export const asbestsanierungSeoLinkSections = [
  {
    id: 'hub-link',
    title: 'Schimmel- & Asbestsanierung Rhein-Main',
    to: '/schimmel-asbest-sanierung-rhein-main',
    content: (
      <p className={p}>Hubseite für Schimmel-, Asbest- und Schadstoffsanierungen.</p>
    ),
  },
  {
    id: 'schadstoff-link',
    title: 'Schadstoffsanierung Rhein-Main',
    to: '/schadstoffsanierung-rhein-main',
    content: (
      <p className={p}>
        Koordination der Sanierung unterschiedlicher Gebäudeschadstoffe einschließlich Analyse, Rückbau und
        Wiederherstellung.
      </p>
    ),
  },
  {
    id: 'schimmel-link',
    title: 'Schimmelsanierung Rhein-Main',
    to: '/schimmelsanierung-rhein-main',
    content: (
      <p className={p}>
        Fachgerechte Beseitigung von Schimmelbefall einschließlich Ursachenanalyse und Sanierungskonzept.
      </p>
    ),
  },
];
