import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export { duscheStattBadewanneSeoIntro, duscheStattBadewanneSeoSections } from './duscheStattBadewanneSeoContent';

export { barrierefreiesBadSeoIntro, barrierefreiesBadSeoSections } from './barrierefreiesBadSeoContent';

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
