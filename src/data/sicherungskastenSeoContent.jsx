import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const sicherungskastenSeoIntro = (
  <>
    <p className={p}>
      Ein moderner Sicherungskasten ist weit mehr als eine Sammlung von Sicherungen. Er schützt Personen und elektrische
      Anlagen, verteilt die Stromkreise übersichtlich und schafft die technischen Voraussetzungen für zukünftige
      Erweiterungen. Die folgenden Themen zeigen typische Leistungen, die bei einer Modernisierung berücksichtigt werden
      können.
    </p>
  </>
);

export const sicherungskastenSeoSections = [
  {
    id: 'fi-schutzschalter',
    title: 'FI-Schutzschalter nachrüsten',
    content: (
      <p className={p}>
        Fehlerstromschutzschalter erhöhen den Personenschutz und gehören heute zu den wichtigsten Bestandteilen moderner
        Elektroinstallationen.
      </p>
    ),
  },
  {
    id: 'leitungsschutzschalter',
    title: 'Leitungsschutzschalter modernisieren',
    content: (
      <p className={p}>
        Zeitgemäße Leitungsschutzschalter sorgen für eine zuverlässige Absicherung einzelner Stromkreise.
      </p>
    ),
  },
  {
    id: 'unterverteilung',
    title: 'Unterverteilung erneuern',
    content: (
      <p className={p}>
        Eine moderne Unterverteilung schafft Übersicht und ermöglicht eine strukturierte Stromverteilung innerhalb der
        Immobilie.
      </p>
    ),
  },
  {
    id: 'ueberspannungsschutz',
    title: 'Überspannungsschutz integrieren',
    content: (
      <p className={p}>
        Ein Überspannungsschutz kann elektrische Geräte vor Spannungsspitzen schützen und ergänzt moderne Elektroanlagen
        sinnvoll.
      </p>
    ),
  },
  {
    id: 'zaehlerschrank',
    title: 'Zählerschrank modernisieren',
    content: (
      <p className={p}>
        Im Rahmen größerer Modernisierungen kann auch der Zählerschrank an aktuelle technische Anforderungen angepasst
        werden.
      </p>
    ),
  },
  {
    id: 'reserve',
    title: 'Reserveplätze einplanen',
    content: (
      <p className={p}>
        Freie Modulplätze erleichtern spätere Erweiterungen und vermeiden aufwendige Umbauten.
      </p>
    ),
  },
  {
    id: 'stromkreise',
    title: 'Stromkreise sauber aufteilen',
    content: (
      <p className={p}>
        Eine übersichtliche Aufteilung der Stromkreise verbessert Wartung, Sicherheit und spätere Anpassungen.
      </p>
    ),
  },
  {
    id: 'photovoltaik',
    title: 'Photovoltaik vorbereiten',
    content: (
      <p className={p}>
        Bereits heute können die Voraussetzungen für die spätere Integration einer Photovoltaikanlage geschaffen werden.
      </p>
    ),
  },
  {
    id: 'waermepumpe',
    title: 'Wärmepumpe anschließen',
    content: (
      <p className={p}>
        Ein moderner Sicherungskasten bietet die technischen Voraussetzungen für leistungsstarke Verbraucher wie
        Wärmepumpen.
      </p>
    ),
  },
  {
    id: 'wallbox',
    title: 'Wallbox sicher integrieren',
    content: (
      <p className={p}>
        Mit einer vorausschauenden Planung lässt sich eine Ladeinfrastruktur für Elektrofahrzeuge problemlos
        berücksichtigen.
      </p>
    ),
  },
];

export const sicherungskastenSeoLinkSections = [
  {
    id: 'elektroinstallation-link',
    title: 'Elektroinstallation',
    to: '/elektroinstallation-rhein-main',
  },
  {
    id: 'altbau-elektrik-link',
    title: 'Altbau Elektrik erneuern',
    to: '/altbau-elektrik-erneuern-rhein-main',
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
