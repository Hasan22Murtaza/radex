import {
  Bath, ShowerHead, Accessibility, DoorOpen, Calculator, ListOrdered,
  Building2, Home, Landmark, Handshake, Flame, Zap, Hammer, Leaf,
  AlertTriangle, Zap as ExpressIcon,   Briefcase, MapPin, Users, Video, Wrench, Shield, FileText, Thermometer, Droplets,
  LayoutGrid, Trash2, Clock, Building
} from 'lucide-react';

export const badsanierungCards = [
  {
    to: '/badsanierung/badezimmer-sanieren',
    title: 'Badezimmer sanieren',
    desc: 'Komplettbadsanierung und Badmodernisierung vom SHK-Meisterbetrieb – aus einer Hand.',
    cta: 'Badezimmer planen',
    icon: Bath,
  },
  {
    to: '/dusche-statt-badewanne',
    title: 'Dusche statt Badewanne',
    desc: 'Umbau von Wanne zu Dusche – mehr Komfort, bessere Nutzung und barrierearme Lösungen.',
    cta: 'Duschumbau anfragen',
    icon: ShowerHead,
  },
  {
    to: '/barrierefreies-bad',
    title: 'Barrierefreies Bad',
    desc: 'Bodengleiche Duschen, Haltegriffe und durchdachte Bewegungsflächen für sicheres Wohnen.',
    cta: 'Barrierefreies Bad planen',
    icon: Accessibility,
  },
  {
    to: '/gaeste-wc',
    title: 'Gäste-WC',
    desc: 'Kleine Räume optimal nutzen – funktionale und moderne Gäste-WC-Lösungen.',
    cta: 'Gäste-WC sanieren',
    icon: DoorOpen,
  },
  {
    to: '/badsanierung-kosten',
    title: 'Kosten',
    desc: 'Was kostet eine Badsanierung? Orientierung und kostenloser Sanierungskosten-Rechner.',
    cta: 'Kosten berechnen',
    icon: Calculator,
  },
  {
    to: '/badplanung',
    title: 'Planung & Ablauf',
    desc: 'Von der Beratung bis zur Übergabe – so läuft Ihre Badsanierung mit Radex ab.',
    cta: 'Ablauf ansehen',
    icon: ListOrdered,
  },
];

export const sanierungCards = [
  {
    to: '/sanierung/wohnungssanierung',
    title: 'Wohnung sanieren',
    desc: 'Modernisierung von Eigentumswohnungen und Kapitalanlagen aus einer Hand.',
    cta: 'Wohnung sanieren',
    icon: Building2,
  },
  {
    to: '/sanierung/haussanierung',
    title: 'Haus sanieren',
    desc: 'Ganzheitliche Sanierung von Einfamilienhäusern und Mehrfamilienhäusern.',
    cta: 'Haussanierung entdecken',
    icon: Home,
  },
  {
    to: '/sanierung/altbausanierung',
    title: 'Altbau sanieren',
    desc: 'Historischen Charme bewahren und moderne Wohnstandards integrieren.',
    cta: 'Altbausanierung planen',
    icon: Landmark,
  },
  {
    to: '/komplettsanierung-rhein-main',
    title: 'Alles aus einer Hand',
    desc: 'Komplettsanierung mit einem Ansprechpartner, Festpreis und klarer Bauleitung.',
    cta: 'Komplettsanierung anfragen',
    icon: Handshake,
  },
  {
    to: '/sanierungskosten-rechner',
    title: 'Kosten',
    desc: 'Sanierungskosten für Wohnung, Haus und Altbau kostenlos einschätzen.',
    cta: 'Kosten berechnen',
    icon: Calculator,
  },
  {
    to: '/generalunternehmer-rhein-main',
    title: 'Planung & Ablauf',
    desc: 'So steuert Radex Ihr Sanierungsprojekt – von der Planung bis zur Übergabe.',
    cta: 'Ablauf ansehen',
    icon: ListOrdered,
  },
];

export const leistungenCards = [
  {
    to: '/leistungen/generalunternehmer-bauleitung',
    title: 'Generalunternehmer & Bauleitung',
    desc: 'Ein Vertragspartner für Planung, Koordination und Ausführung aller Gewerke.',
    cta: 'Leistungen ansehen',
    icon: Handshake,
  },
  {
    to: '/leistungen/heizung-sanitaer',
    title: 'Heizung & Sanitär',
    desc: 'Heizungsmodernisierung, Wärmepumpen und fachgerechte Sanitärinstallation.',
    cta: 'Leistungen ansehen',
    icon: Flame,
  },
  {
    to: '/leistungen/elektrotechnik',
    title: 'Elektrotechnik',
    desc: 'Elektroinstallation, Altbau-Elektrik und Sicherungskasten erneuern.',
    cta: 'Leistungen ansehen',
    icon: Zap,
  },
  {
    to: '/leistungen/innenausbau-umbau',
    title: 'Innenausbau & Umbau',
    desc: 'Räume umbauen, Trockenbau und Wanddurchbrüche fachgerecht umsetzen.',
    cta: 'Leistungen ansehen',
    icon: Hammer,
  },
  {
    to: '/leistungen/energie-foerderung',
    title: 'Energie & Förderung',
    desc: 'Energetische Sanierung, Energieeffizienz und Fördermöglichkeiten nutzen.',
    cta: 'Leistungen ansehen',
    icon: Leaf,
  },
  {
    to: '/leistungen/schimmel-asbest',
    title: 'Schimmel & Asbest',
    desc: 'Schimmel entfernen, Asbest sanieren und Schadstoffe fachgerecht beseitigen.',
    cta: 'Leistungen ansehen',
    icon: AlertTriangle,
  },
  {
    to: '/leistungen/express-soforthilfe',
    title: 'Express & Soforthilfe',
    desc: 'Schnelle Sanierung und Soforthilfe bei dringenden Bad- und Sanierungsprojekten.',
    cta: 'Leistungen ansehen',
    icon: Clock,
  },
  {
    to: '/leistungen/gewerbe-objektsanierung',
    title: 'Gewerbe & Objektsanierung',
    desc: 'Gewerbesanierung, Büroumbau und Mieterausbau mit minimaler Betriebsunterbrechung.',
    cta: 'Leistungen ansehen',
    icon: Briefcase,
  },
];

export const leistungenCategories = {
  'generalunternehmer-bauleitung': {
    title: 'Generalunternehmer & Bauleitung',
    subtitle: 'Planung, Koordination und Steuerung Ihres Sanierungsprojekts aus einer Hand.',
    seo: {
      title: 'Generalunternehmer & Bauleitung | Leistungen | Radex',
      description: 'Generalunternehmer und Bauleitung im Rhein-Main-Gebiet: ein Ansprechpartner, Festpreis und professionelle Projektsteuerung für Ihre Sanierung.',
      path: '/leistungen/generalunternehmer-bauleitung',
    },
    subpages: [
      { to: '/generalunternehmer-rhein-main', title: 'Generalunternehmer', desc: 'Alle Gewerke aus einer Hand mit Festpreisgarantie.', icon: Handshake },
      { to: '/generalunternehmer-rhein-main', title: 'Bauleitung & Projektsteuerung', desc: 'Professionelle Koordination, Terminplanung und Qualitätskontrolle.', icon: FileText },
    ],
  },
  'heizung-sanitaer': {
    title: 'Heizung & Sanitär',
    subtitle: 'Moderne Haustechnik vom SHK-Meisterbetrieb – Heizung, Wärmepumpe und Sanitär.',
    seo: {
      title: 'Heizung & Sanitär | Leistungen | Radex',
      description: 'Heizung modernisieren, Wärmepumpe installieren und Sanitärinstallation im Rhein-Main-Gebiet vom SHK-Meisterbetrieb Radex.',
      path: '/leistungen/heizung-sanitaer',
    },
    subpages: [
      { to: '/heizung-sanitaer-rhein-main', title: 'Heizung modernisieren', desc: 'Heizungstausch, Heizkörper und Wärmeverteilung im Bestand.', icon: Thermometer },
      { to: '/heizung-sanitaer-rhein-main', title: 'Wärmepumpe', desc: 'Luft- und Sole-Wasser-Wärmepumpen inkl. Förderabwicklung.', icon: Flame },
      { to: '/heizung-sanitaer-rhein-main', title: 'Sanitärinstallation', desc: 'Wasserleitungen, Abwasser und Sanitäranlagen fachgerecht installiert.', icon: Droplets },
    ],
  },
  'elektrotechnik': {
    title: 'Elektrotechnik',
    subtitle: 'Elektrische Aufwertungen und Gebäudetechnik für Wohnung, Haus und Gewerbe.',
    seo: {
      title: 'Elektrotechnik | Leistungen | Radex',
      description: 'Elektroinstallation, Altbau-Elektrik erneuern und Sicherungskasten modernisieren im Rhein-Main-Gebiet.',
      path: '/leistungen/elektrotechnik',
    },
    subpages: [
      { to: '/elektroinstallation-rhein-main', title: 'Elektroinstallation', desc: 'Steckdosen, Leitungen, Licht und Gebäudetechnik nach VDE.', icon: Zap },
      { to: '/elektroinstallation-rhein-main', title: 'Altbau Elektrik erneuern', desc: 'Veraltete Installationen sicher und normgerecht modernisieren.', icon: Home },
      { to: '/elektroinstallation-rhein-main', title: 'Sicherungskasten erneuern', desc: 'Unterverteilung, FI-Schutz und Zählerschrank auf aktuellen Stand bringen.', icon: Shield },
    ],
  },
  'innenausbau-umbau': {
    title: 'Innenausbau & Umbau',
    subtitle: 'Räume neu gestalten, Wände versetzen und moderne Wohnkonzepte umsetzen.',
    seo: {
      title: 'Innenausbau & Umbau | Leistungen | Radex',
      description: 'Räume umbauen, Trockenbau und Wand entfernen im Rhein-Main-Gebiet – koordiniert aus einer Hand.',
      path: '/leistungen/innenausbau-umbau',
    },
    subpages: [
      { to: '/innenausbau-umbau-rhein-main', title: 'Räume umbauen', desc: 'Grundriss anpassen und Wohnflächen besser nutzen.', icon: LayoutGrid },
      { to: '/innenausbau-umbau-rhein-main', title: 'Trockenbau', desc: 'Wände, Decken und Vorwandinstallationen fachgerecht erstellen.', icon: Hammer },
      { to: '/innenausbau-umbau-rhein-main', title: 'Wand entfernen', desc: 'Nichttragende Wände entfernen und Räume öffnen.', icon: Wrench },
    ],
  },
  'energie-foerderung': {
    title: 'Energie & Förderung',
    subtitle: 'Energiekosten senken, Effizienz steigern und staatliche Förderungen nutzen.',
    seo: {
      title: 'Energie & Förderung | Leistungen | Radex',
      description: 'Energetische Sanierung, Energieeffizienz verbessern und Fördermöglichkeiten (KfW/BAFA) im Rhein-Main-Gebiet nutzen.',
      path: '/leistungen/energie-foerderung',
    },
    subpages: [
      { to: '/energetische-sanierung-rhein-main', title: 'Energetische Sanierung', desc: 'Dämmung, Fenster, Heizung und Gebäudetechnik im Zusammenspiel.', icon: Leaf },
      { to: '/energetische-sanierung-rhein-main', title: 'Energieeffizienz', desc: 'Heizkosten senken und den energetischen Standard verbessern.', icon: Thermometer },
      { to: '/energetische-sanierung-rhein-main', title: 'Fördermöglichkeiten', desc: 'KfW- und BAFA-Förderungen frühzeitig prüfen und beantragen.', icon: FileText },
    ],
  },
  'schimmel-asbest': {
    title: 'Schimmel & Asbest',
    subtitle: 'Professionelle Schadstoffsanierung nach TRGS 519 – sicher und dokumentiert.',
    seo: {
      title: 'Schimmel & Asbest | Leistungen | Radex',
      description: 'Schimmel entfernen, Asbest sanieren und Schadstoffsanierung im Rhein-Main-Gebiet durch zertifizierte Experten.',
      path: '/leistungen/schimmel-asbest',
    },
    subpages: [
      { to: '/schimmelsanierung-rhein-main', title: 'Schimmel entfernen', desc: 'Ursachenanalyse, Bautrocknung und dauerhafte Beseitigung.', icon: AlertTriangle },
      { to: '/asbestsanierung-rhein-main', title: 'Asbest entfernen', desc: 'Fachgerechte Entfernung und Entsorgung nach TRGS 519.', icon: Shield },
      { to: '/schadstoffsanierung-rhein-main', title: 'Schadstoffsanierung', desc: 'Gefahrstoffe sicher beseitigen und dokumentieren.', icon: Trash2 },
    ],
  },
  'express-soforthilfe': {
    title: 'Express & Soforthilfe',
    subtitle: 'Schnelle Hilfe bei dringenden Sanierungs- und Badprojekten.',
    seo: {
      title: 'Express & Soforthilfe | Leistungen | Radex',
      description: 'Express-Sanierung, Bad-Soforthilfe und schnelle Badsanierung im Rhein-Main-Gebiet – wenn es schnell gehen muss.',
      path: '/leistungen/express-soforthilfe',
    },
    subpages: [
      { to: '/sanierung-rhein-main', title: 'Express-Sanierung', desc: 'Beschleunigte Sanierungsprojekte mit klarer Priorisierung.', icon: ExpressIcon },
      { to: '/badsanierung-rhein-main', title: 'Bad-Soforthilfe', desc: 'Schnelle Hilfe bei dringenden Bad- und Sanitärproblemen.', icon: Bath },
      { to: '/badsanierung/badezimmer-sanieren', title: 'Schnelle Badsanierung', desc: 'Zeitnahe Badsanierung mit strukturiertem Ablauf.', icon: Clock },
    ],
  },
  'gewerbe-objektsanierung': {
    title: 'Gewerbe & Objektsanierung',
    subtitle: 'Sanierung und Modernisierung von Büros, Praxen und Gewerbeflächen.',
    seo: {
      title: 'Gewerbe & Objektsanierung | Leistungen | Radex',
      description: 'Gewerbesanierung, Büroumbau und Mieterausbau im Rhein-Main-Gebiet mit minimaler Betriebsunterbrechung.',
      path: '/leistungen/gewerbe-objektsanierung',
    },
    subpages: [
      { to: '/gewerbe-objektsanierung-rhein-main', title: 'Gewerbesanierung', desc: 'Praxen, Läden und Gewerbeflächen modernisieren.', icon: Building },
      { to: '/gewerbe-objektsanierung-rhein-main', title: 'Büroumbau', desc: 'Büroflächen umbauen und an neue Nutzung anpassen.', icon: Briefcase },
      { to: '/gewerbe-objektsanierung-rhein-main', title: 'Mieterausbau', desc: 'Ausbau nach Mieterwunsch – termingerecht und sauber.', icon: Users },
    ],
  },
};

export const ratgeberCards = [
  { to: '/badsanierung/badezimmer-sanieren', title: 'Badsanierung', desc: 'Kosten, Planung und Ablauf einer Badsanierung.', cta: 'Ratgeber öffnen', icon: Bath },
  { to: '/sanierung/wohnungssanierung', title: 'Wohnungssanierung', desc: 'Wohnung sanieren nach Kauf oder vor Vermietung.', cta: 'Ratgeber öffnen', icon: Building2 },
  { to: '/sanierung/haussanierung', title: 'Haussanierung', desc: 'Haus modernisieren – Umfang, Kosten und Reihenfolge.', cta: 'Ratgeber öffnen', icon: Home },
  { to: '/heizung-sanitaer-rhein-main', title: 'Heizung & Sanitär', desc: 'Heizung modernisieren, Wärmepumpe und Sanitärleitungen.', cta: 'Ratgeber öffnen', icon: Flame },
  { to: '/elektroinstallation-rhein-main', title: 'Elektrotechnik', desc: 'Elektroinstallation im Bestand sicher erneuern.', cta: 'Ratgeber öffnen', icon: Zap },
  { to: '/energetische-sanierung-rhein-main', title: 'Energie & Förderung', desc: 'Energetische Sanierung und Fördermittel nutzen.', cta: 'Ratgeber öffnen', icon: Leaf },
  { to: '/komplettsanierung-rhein-main', title: 'Komplettsanierung', desc: 'Komplett- oder Teilsanierung – was passt zu Ihrem Projekt?', cta: 'Ratgeber öffnen', icon: Handshake },
  { to: '/schadstoffsanierung-rhein-main', title: 'Schimmel & Asbest', desc: 'Schimmel und Schadstoffe fachgerecht sanieren.', cta: 'Ratgeber öffnen', icon: AlertTriangle },
  { to: '/sanierungskosten-rechner', title: 'Kosten & Rechner', desc: 'Sanierungskosten für Bad, Wohnung und Altbau berechnen.', cta: 'Kosten berechnen', icon: Calculator },
];

export const ueberRadexCards = [
  { to: '/ueber-uns#unternehmen', title: 'Unternehmen', desc: 'Team, Werte und Qualifikationen von Radex kennenlernen.', cta: 'Mehr erfahren', icon: Users },
  { to: '/karriere', title: 'Karriere', desc: 'Jobs und Perspektiven im Handwerk im Rhein-Main-Gebiet.', cta: 'Karriere entdecken', icon: Briefcase },
  { to: '/#beispiele', title: 'Radex Live', desc: 'Laufende und abgeschlossene Projekte in Echtzeit verfolgen.', cta: 'Projekte ansehen', icon: Video },
];

export const einsatzgebieteCards = [
  {
    to: '/einsatzgebiete-rhein-main#staedte',
    title: 'Alle Einsatzgebiete',
    desc: 'Über 60 Städte im Rhein-Main-Gebiet – finden Sie Ihren lokalen Ansprechpartner.',
    cta: 'Städte ansehen',
    icon: MapPin,
  },
];
