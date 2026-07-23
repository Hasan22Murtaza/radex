const p = 'mb-4 text-gray-600';

export const energetischeSanierungSeoIntro = (
  <>
    <p className={p}>
      Eine energetische Sanierung verfolgt das Ziel, den Energiebedarf eines Gebäudes dauerhaft zu senken. Dabei werden
      verschiedene Maßnahmen sinnvoll miteinander kombiniert, um Wärmeverluste zu reduzieren und den Wohnkomfort
      nachhaltig zu verbessern. Die folgenden Themen zeigen wichtige Bestandteile einer ganzheitlichen energetischen
      Modernisierung.
    </p>
  </>
);

export const energetischeSanierungSeoSections = [
  {
    id: 'fassadendaemmung',
    title: 'Fassadendämmung',
    content: (
      <p className={p}>
        Eine hochwertige Fassadendämmung reduziert Wärmeverluste erheblich und verbessert die Energieeffizienz der
        gesamten Gebäudehülle.
      </p>
    ),
  },
  {
    id: 'dachdaemmung',
    title: 'Dachdämmung',
    content: (
      <p className={p}>
        Da ein großer Teil der Heizenergie über das Dach verloren gehen kann, zählt die Dachdämmung zu den
        wirkungsvollsten energetischen Maßnahmen.
      </p>
    ),
  },
  {
    id: 'kellerdeckendaemmung',
    title: 'Kellerdeckendämmung',
    content: (
      <p className={p}>
        Eine gedämmte Kellerdecke reduziert kalte Fußböden und verhindert unnötige Wärmeverluste in unbeheizte Bereiche.
      </p>
    ),
  },
  {
    id: 'fenster',
    title: 'Fenster austauschen',
    content: (
      <p className={p}>
        Moderne Fenster verbessern den Wärmeschutz, reduzieren Zugluft und steigern den Wohnkomfort deutlich.
      </p>
    ),
  },
  {
    id: 'haustuer',
    title: 'Haustüren modernisieren',
    content: (
      <p className={p}>
        Auch moderne Haustüren leisten einen wichtigen Beitrag zur Verbesserung der Gebäudehülle und minimieren
        Energieverluste.
      </p>
    ),
  },
  {
    id: 'luftdichtheit',
    title: 'Luftdichtheit verbessern',
    content: (
      <p className={p}>
        Eine luftdichte Gebäudehülle verhindert unkontrollierte Wärmeverluste und erhöht die Effizienz der gesamten
        Immobilie.
      </p>
    ),
  },
  {
    id: 'waermebruecken',
    title: 'Wärmebrücken vermeiden',
    content: (
      <p className={p}>
        Die Reduzierung von Wärmebrücken verbessert den Wärmeschutz und kann das Risiko von Feuchtigkeit und
        Schimmelbildung verringern.
      </p>
    ),
  },
  {
    id: 'wohnraumlueftung',
    title: 'Kontrollierte Wohnraumlüftung',
    content: (
      <p className={p}>
        Moderne Lüftungssysteme sorgen für einen kontinuierlichen Luftaustausch und können den Energieverbrauch
        zusätzlich optimieren.
      </p>
    ),
  },
  {
    id: 'isfp',
    title: 'Individueller Sanierungsfahrplan (iSFP)',
    content: (
      <p className={p}>
        Ein individueller Sanierungsfahrplan zeigt auf, welche Maßnahmen in welcher Reihenfolge sinnvoll umgesetzt werden
        können und kann je nach Förderprogramm zusätzliche Vorteile bieten.
      </p>
    ),
  },
  {
    id: 'effizienzhaus',
    title: 'Effizienzhaus-Standard erreichen',
    content: (
      <p className={p}>
        Durch die Kombination verschiedener energetischer Maßnahmen kann ein Gebäude schrittweise an höhere
        Effizienzstandards herangeführt werden.
      </p>
    ),
  },
];

import { Gauge, BadgeEuro, Hammer, Flame, Zap, BriefcaseBusiness } from 'lucide-react';

export const energetischeSanierungSeoInternalLinks = [
  {
    title: 'Energieeffizienz',
    desc: 'Optimieren Sie den Energieverbrauch Ihrer Immobilie durch moderne Gebäudetechnik und intelligente Lösungen.',
    icon: Gauge,
    to: '/energieeffizienz-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Sanierung Förderung',
    desc: 'Informieren Sie sich über Zuschüsse, Kredite und Förderprogramme für energetische Modernisierungen.',
    icon: BadgeEuro,
    to: '/sanierung-foerderung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Komplettsanierung',
    desc: 'Kombinieren Sie energetische Maßnahmen mit einer umfassenden Modernisierung Ihrer Immobilie.',
    icon: Hammer,
    to: '/komplettsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Heizung & Sanitär',
    desc: 'Moderne Heiztechnik und Sanitärinstallationen ergänzen energetische Sanierungen sinnvoll.',
    icon: Flame,
    to: '/heizung-sanitaer-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Elektrotechnik & Gebäudetechnik',
    desc: 'Elektroinstallation, Energiemanagement und moderne Gebäudetechnik für energieeffiziente Immobilien.',
    icon: Zap,
    to: '/elektrotechnik-gebaeudetechnik',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Generalunternehmer',
    desc: 'Ein Ansprechpartner koordiniert sämtliche Gewerke während Ihrer energetischen Sanierung.',
    icon: BriefcaseBusiness,
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr erfahren',
  },
];
