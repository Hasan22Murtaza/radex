const p = 'mb-4 text-gray-600';

export const altbauElektrikSeoIntro = (
  <>
    <p className={p}>
      Die Modernisierung einer Altbau-Elektrik bedeutet weit mehr als den Austausch einzelner Leitungen. Ziel ist es,
      die elektrische Anlage an heutige Sicherheitsanforderungen und den tatsächlichen Energiebedarf anzupassen. Die
      folgenden Themen zeigen typische Maßnahmen, die im Rahmen einer Altbausanierung berücksichtigt werden können.
    </p>
  </>
);

export const altbauElektrikSeoSections = [
  {
    id: 'stoffleitungen',
    title: 'Alte Stoffleitungen ersetzen',
    content: (
      <p className={p}>
        In vielen älteren Gebäuden sind noch Stoff- oder gummiisolierte Leitungen vorhanden. Diese sollten im Rahmen
        einer Sanierung überprüft und gegebenenfalls ersetzt werden.
      </p>
    ),
  },
  {
    id: 'zweiadrige-leitungen',
    title: 'Zweiadrige Leitungen modernisieren',
    content: (
      <p className={p}>
        Ältere Installationen verfügen häufig noch über zweiadrige Leitungen ohne separaten Schutzleiter. Moderne
        Installationen erfüllen aktuelle Sicherheitsanforderungen.
      </p>
    ),
  },
  {
    id: 'fi-schutzschalter',
    title: 'FI-Schutzschalter nachrüsten',
    content: (
      <p className={p}>
        Fehlerstromschutzschalter erhöhen den Personenschutz und gehören heute zum Standard moderner
        Elektroinstallationen.
      </p>
    ),
  },
  {
    id: 'potentialausgleich',
    title: 'Potentialausgleich prüfen',
    content: (
      <p className={p}>
        Ein funktionierender Potentialausgleich trägt wesentlich zur Sicherheit der gesamten elektrischen Anlage bei.
      </p>
    ),
  },
  {
    id: 'unterputzleitungen',
    title: 'Unterputzleitungen erneuern',
    content: (
      <p className={p}>
        Beschädigte oder veraltete Leitungen können im Zuge einer umfassenden Sanierung erneuert werden.
      </p>
    ),
  },
  {
    id: 'verteilerdosen',
    title: 'Verteilerdosen modernisieren',
    content: (
      <p className={p}>
        Auch Abzweig- und Verteilerdosen sollten überprüft und an den aktuellen technischen Stand angepasst werden.
      </p>
    ),
  },
  {
    id: 'bestandsaufnahme',
    title: 'Elektrische Bestandsaufnahme',
    content: (
      <p className={p}>
        Vor jeder Modernisierung empfiehlt sich eine gründliche Analyse der vorhandenen Elektroinstallation.
      </p>
    ),
  },
  {
    id: 'strombedarf',
    title: 'Stromversorgung an heutigen Bedarf anpassen',
    content: (
      <p className={p}>
        Moderne Haushalte benötigen deutlich mehr elektrische Leistung als ältere Gebäude ursprünglich vorgesehen
        hatten.
      </p>
    ),
  },
  {
    id: 'sanierungsplanung',
    title: 'Elektrik bei Altbausanierungen planen',
    content: (
      <p className={p}>
        Die Erneuerung der Elektroinstallation sollte frühzeitig mit allen anderen Sanierungsmaßnahmen abgestimmt
        werden.
      </p>
    ),
  },
  {
    id: 'zukunft',
    title: 'Elektroinstallation zukunftssicher vorbereiten',
    content: (
      <p className={p}>
        Bereits heute können Leerrohre, zusätzliche Stromkreise und Reserven für spätere Erweiterungen eingeplant
        werden.
      </p>
    ),
  },
];

export const altbauElektrikSeoLinkSections = [
  {
    id: 'elektroinstallation-link',
    title: 'Elektroinstallation',
    to: '/elektroinstallation-rhein-main',
  },
  {
    id: 'sicherungskasten-link',
    title: 'Sicherungskasten erneuern',
    to: '/sicherungskasten-erneuern-rhein-main',
  },
  {
    id: 'komplettsanierung-link',
    title: 'Komplettsanierung',
    to: '/komplettsanierung-rhein-main',
  },
  {
    id: 'kernsanierung-link',
    title: 'Kernsanierung',
    to: '/kernsanierung-rhein-main',
  },
  {
    id: 'bauleitung-link',
    title: 'Bauleitung & Projektsteuerung',
    to: '/bauleitung-projektsteuerung-rhein-main',
  },
  {
    id: 'generalunternehmer-link',
    title: 'Generalunternehmer',
    to: '/generalunternehmer-rhein-main',
  },
];
