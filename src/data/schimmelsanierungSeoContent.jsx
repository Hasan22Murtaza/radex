import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const schimmelsanierungSeoIntro = (
  <>
    <p className={p}>
      Schimmel ist nie nur ein optischer Mangel. Sichtbare Flecken, Geruch oder feuchte Stellen zeigen fast immer ein
      Feuchtigkeitsproblem an, das bauphysikalisch oder technisch eingeordnet werden muss – sonst entsteht der Befall
      erneut.
    </p>
    <p className={p}>
      Die Radex Objektmanagement GmbH koordiniert Schimmelsanierungen im Rhein-Main-Gebiet. Radex ist zertifiziert für
      Schimmelsanierung und verfügt zusätzlich über Sachkunde nach TRGS&nbsp;519 für Asbest. Im Bereich Heizung, Sanitär
      und Gebäudetechnik ist Bernd Knoop als SHK-Meister und Betriebsleiter fachlich verantwortlich.
    </p>
  </>
);

export const schimmelsanierungSeoSections = [
  {
    id: 'ursache-folge',
    title: 'Schimmel ist immer ein Ursache-Folge-Thema',
    content: (
      <>
        <p className={p}>
          Oberflächliches Entfernen beseitigt nur den sichtbaren Befall. Bleibt die Feuchtigkeit, kommt der Schimmel
          zurück. Deshalb prüft Radex Ursache, Tiefe des Befalls und betroffene Bauteile – nicht nur die Oberfläche.
        </p>
        <p className={p}>
          Typische Auslöser sind Wasserschäden, undichte Leitungen, Kältebrücken, mangelnde Lüftung, undichte Bäder oder
          aufsteigende Feuchtigkeit im Keller. Erst wenn die Ursache klar ist, entsteht ein nachhaltiger Sanierungsplan.
        </p>
      </>
    ),
  },
  {
    id: 'bad-keller-aussenwand',
    title: 'Schimmel im Bad, Keller und an Außenwänden',
    content: (
      <>
        <p className={p}>
          Besonders häufig tritt Schimmel in Bädern, Kellern, Schlafzimmern und an Außenwänden auf. Dort treffen
          Feuchtigkeit, kalte Flächen und ungünstige Luftführung oft zusammen.
        </p>
        <p className={p}>
          Gerade nach einem Wasserschaden oder bei älteren Bädern muss geprüft werden, wie tief der Schaden reicht und
          welche Bauteile betroffen sind. Abdichtung, Fugen, Lüftung, Wandaufbau und mögliche Leitungsprobleme gehören
          in dieselbe Bewertung. Mehr zur{' '}
          <Link to="/komplettbadsanierung-rhein-main">Badsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'zertifizierung-trgs',
    title: 'Zertifizierung und TRGS-519-Sachkunde',
    content: (
      <>
        <p className={p}>
          Radex ist zertifiziert für Schimmelsanierung. Zusätzlich verfügt der Betrieb über Sachkunde nach
          TRGS&nbsp;519 – relevant, wenn im selben Projekt Asbestverdacht oder weitere Schadstoffe auftreten.
        </p>
        <p className={p}>
          Im Bestand können Schimmel und Verdachtsmaterialien gemeinsam vorkommen. Deshalb ist ein fachkundiger Blick
          auf Feuchtigkeit und Schadstoffe wichtig, bevor blind rückgebaut wird. Mehr zur{' '}
          <Link to="/asbestsanierung-rhein-main">Asbestsanierung</Link> und zur{' '}
          <Link to="/schadstoffsanierung-rhein-main">Schadstoffsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'ablauf-wiederaufbau',
    title: 'Prüfen, trocknen, sanieren, wiederaufbauen',
    content: (
      <>
        <p className={p}>
          Wenn ein Bereich geöffnet wird, sollte nicht blind weitergearbeitet werden. Die sinnvolle Reihenfolge lautet:
          erst prüfen, dann rückbauen, dann trocknen und erst danach wiederaufbauen. Das schützt vor Doppelarbeit und
          Folgeschäden.
        </p>
        <p className={p}>
          Radex koordiniert Schimmelbeseitigung, Trocknung, Abdichtung, SHK-Leistungen, Wiederaufbau und die
          Schnittstellen zu weiteren Gewerken – ideal, wenn Bad, Innenausbau oder eine umfassendere{' '}
          <Link to="/sanierung/altbausanierung">Altbausanierung</Link> ansteht.
        </p>
      </>
    ),
  },
  {
    id: 'wasserschaden',
    title: 'Schimmel nach Wasserschaden',
    content: (
      <>
        <p className={p}>
          Nach Rohrbruch, undichten Leitungen oder eindringender Feuchtigkeit muss zuerst die Ursache gestoppt werden.
          Danach werden betroffene Bauteile getrocknet und geprüft. Erst im Anschluss folgt der Wiederaufbau.
        </p>
        <p className={p}>
          Je nach Schadenstiefe reichen oberflächliche Maßnahmen nicht aus. Oft sind Rückbau, technische Trocknung und
          eine dokumentierte Wiederherstellung nötig – insbesondere in vermieteten Objekten oder bei Versicherungsfällen.
        </p>
      </>
    ),
  },
  {
    id: 'kosten',
    title: 'Kosten einer Schimmelsanierung',
    content: (
      <>
        <p className={p}>
          Die Kosten hängen von Befund, Ursache, Zugänglichkeit und Wiederaufbau ab. Die folgenden Angaben dienen nur der
          Orientierung:
        </p>
        <ul className={ul}>
          <li>Oberflächlicher Schimmel: ab 300&nbsp;€</li>
          <li>Tiefsitzender Befall: ab 1.500&nbsp;€</li>
          <li>Trocknung und Wiederaufbau: ab 3.500&nbsp;€</li>
          <li>Asbestprüfung und Rückbau im selben Projekt: projektbezogen</li>
        </ul>
        <p className={p}>
          Nach der Bestandsaufnahme erstellen wir ein konkretes Angebot ohne versteckte Kosten.
        </p>
      </>
    ),
  },
  {
    id: 'region',
    title: 'Schimmelsanierung im Rhein-Main-Gebiet',
    content: (
      <>
        <p className={p}>
          Radex ist in über 60 Städten im Rhein-Main-Gebiet aktiv – unter anderem in Rödermark, Rodgau, Dietzenbach,
          Dreieich, Langen, Neu-Isenburg, Offenbach, Frankfurt, Hanau, Darmstadt, Bad Vilbel, Bad Homburg und Oberursel.
        </p>
        <p className={p}>
          Für eine erste Einschätzung genügt oft ein Anruf unter 06074&nbsp;960620 oder eine Anfrage über den{' '}
          <Link to="/kontakt">Kontaktbereich</Link>. Fotos vom Befund helfen, den nächsten Schritt schnell
          einzuordnen.
        </p>
      </>
    ),
  },
];
