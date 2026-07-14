import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const elektroinstallationSeoIntro = (
  <>
    <p className={p}>
      Eine moderne Elektroinstallation ist ein zentraler Bestandteil jeder Sanierung. Sie entscheidet darüber, ob ein
      Haus, eine Wohnung, ein Bad, eine Küche, ein Büro oder eine Gewerbefläche im Alltag wirklich funktioniert. Licht,
      Steckdosen, Sicherungskasten, Stromkreise, Netzwerk, Badtechnik, Lüftung, Smart-Home-Vorbereitung, Homeoffice,
      Außenbereiche, Ladeinfrastruktur und Gebäudetechnik müssen früh geplant werden.
    </p>
    <p className={p}>
      Die Radex Objektmanagement GmbH aus Rödermark begleitet Sanierungen im Rhein-Main-Gebiet mit
      gewerkeübergreifender Koordination. Elektroarbeiten werden durch qualifizierte Elektrofachbetriebe ausgeführt und
      von Radex in den Sanierungsablauf eingebunden. Im Bereich Heizung, Sanitär und Gebäudetechnik ist Radex
      SHK-meistergeführt durch Bernd Knoop, SHK-Meister und Betriebsleiter.
    </p>
  </>
);

export const elektroinstallationSeoSections = [
  {
    id: 'elektrokoordination',
    title: 'Elektrokoordination bei Sanierungen',
    content: (
      <>
        <p className={p}>
          Wer Elektro erst dann berücksichtigt, wenn Wände geschlossen, Fliesen gesetzt oder Böden verlegt sind, riskiert
          unnötige Nacharbeiten. Gerade bei Sanierungen im Bestand ist Elektrokoordination besonders wichtig: Viele
          Immobilien wurden zu einer Zeit geplant, in der der elektrische Bedarf deutlich geringer war.
        </p>
        <p className={p}>
          Heute brauchen Eigentümer mehr Steckdosen, mehr Lichtpunkte, bessere Küchenanschlüsse, sichere Badtechnik,
          Netzwerk für Homeoffice, Ladevorbereitung und teilweise smarte Gebäudefunktionen. Radex stimmt Elektro früh mit
          allen Gewerken ab – die Ausführung erfolgt durch qualifizierte Elektrofachpartner. Mehr zum{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link> und zur{' '}
          <Link to="/sanierung/wohnungssanierung">Wohnungssanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'frueh-planen',
    title: 'Warum Elektroinstallation früh geplant werden muss',
    content: (
      <>
        <p className={p}>
          Elektroinstallation gehört zu den Gewerken, die später oft nicht sichtbar sind, aber täglich genutzt werden.
          Leitungen liegen in Wänden, Decken oder Böden. Eine neue Küche braucht eigene Stromkreise für Kochfeld,
          Backofen, Spülmaschine, Kühlschrank, Dunstabzug, Arbeitsflächensteckdosen und Beleuchtung. Ein Bad braucht
          geschützte Elektrobereiche, Spiegelanschlüsse, Lüfter und Steckdosen. Ein Homeoffice braucht Netzwerk und
          ausreichend Steckdosen. Eine Wärmepumpe oder Wallbox stellt zusätzliche Anforderungen.
        </p>
        <p className={p}>
          Eine gute Elektroplanung bedeutet nicht, wahllos überall Steckdosen zu setzen. Sie bedeutet, den späteren
          Alltag zu verstehen: Wo wird gearbeitet? Wo stehen Möbel? Wo kommt die Küche hin? Wie wird das Bad genutzt? Wo
          werden Geräte geladen? Radex koordiniert diese Fragen im Rahmen der Sanierung – die Elektroarbeiten selbst
          werden durch qualifizierte Elektrofachbetriebe ausgeführt. Mehr zur{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung</Link> und zur{' '}
          <Link to="/sicherungskasten-erneuern-rhein-main">Sicherungskasten-Erneuerung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'altbau-elektrik',
    title: 'Altbau-Elektrik erneuern – besondere Anforderungen im Bestand',
    content: (
      <>
        <p className={p}>
          In älteren Immobilien ist Elektroinstallation ein besonders sensibles Thema. Alte Leitungen, veraltete
          Sicherungen, fehlende Schutzschalter, zu wenige Stromkreise oder improvisierte Ergänzungen können bei einer
          Sanierung sichtbar werden.
        </p>
        <ul className={ul}>
          <li>Sehr wenige Steckdosen oder alte Schalter und Sicherungen</li>
          <li>Häufig auslösende Sicherungen</li>
          <li>Küche, die nicht für moderne Geräte vorbereitet ist</li>
          <li>Alte Unterverteilung ohne FI-/LS-Schutz</li>
        </ul>
        <p className={p}>
          Wenn Wände, Böden oder Decken ohnehin geöffnet werden, ist der richtige Zeitpunkt, Leitungen, Stromkreise und
          Sicherungskasten fachlich zu prüfen. Bei Altbauten können zusätzlich Schadstoffthemen relevant sein – Radex ist
          zertifiziert für Schimmel- und Asbestsanierung und verfügt über Sachkunde nach TRGS 519. Mehr zur{' '}
          <Link to="/sanierung/altbausanierung">Altbausanierung</Link> und zur{' '}
          <Link to="/schimmelsanierung-rhein-main">Schimmel- &amp; Schadstoffsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'netzwerk-smart-home',
    title: 'Netzwerk, Homeoffice & Smart Home',
    content: (
      <>
        <p className={p}>
          Homeoffice, Streaming, Smart-TV, WLAN, Videokonferenzen und smarte Geräte haben die Anforderungen an Wohn- und
          Gewerberäume verändert. Eine moderne Sanierung sollte deshalb nicht nur Strom, sondern auch Daten und Netzwerk
          berücksichtigen. Gerade bei größeren Häusern, mehreren Etagen oder Homeoffice-Arbeitsplätzen bietet eine feste
          Netzwerkstruktur Stabilität und Geschwindigkeit.
        </p>
        <p className={p}>
          Smart Home ist kein Muss, aber für viele Eigentümer interessant: Licht, Rollläden, Heizung, Lüftung,
          Sicherheit und Beschattung lassen sich sinnvoll verbinden. Wichtig ist, dies früh zu planen, da spätere
          Nachrüstung aufwendiger ist. Radex koordiniert Beleuchtung, Schalterpositionen und Smart-Home-Vorbereitung mit
          den Elektrofachpartnern. Mehr zum{' '}
          <Link to="/innenausbau-umbau-rhein-main">Innenausbau</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'ablauf-einsatzgebiet',
    title: 'Ablauf der Elektrokoordination & Einsatzgebiet',
    content: (
      <>
        <p className={p}>
          Radex koordiniert Elektroinstallation als Teil der Sanierung in einem klaren Ablauf:
        </p>
        <ul className={ul}>
          <li>Erstgespräch und Bedarfsanalyse</li>
          <li>Bestandsaufnahme vor Ort</li>
          <li>Einbindung qualifizierter Elektrofachpartner</li>
          <li>Schnittstellenplanung mit SHK, Trockenbau, Fliesen und Innenausbau</li>
          <li>Koordinierte Ausführung in der richtigen Reihenfolge</li>
          <li>Geordnete Übergabe</li>
        </ul>
        <p className={p}>
          Radex sitzt in Rödermark und begleitet Sanierungen mit Elektrokoordination im gesamten Rhein-Main-Gebiet, unter
          anderem in Frankfurt, Offenbach, Darmstadt, Hanau, Aschaffenburg, Wiesbaden, Mainz, Bad Homburg, Neu-Isenburg,
          Dreieich, Langen, Rodgau, Heusenstamm, Obertshausen, Dietzenbach, Mühlheim, Seligenstadt, Groß-Gerau, Maintal,
          Rüsselsheim, Eschborn, Hofheim, Bad Soden, Kronberg und Königstein. Details zur{' '}
          <Link to="/waermepumpe-rhein-main">Wärmepumpe</Link> und zur{' '}
          <Link to="/heizung-sanitaer-rhein-main">Heizung &amp; Sanitär</Link>.
        </p>
      </>
    ),
  },
];
