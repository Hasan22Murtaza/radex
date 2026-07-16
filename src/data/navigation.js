import {
  Bath, ShowerHead, Accessibility, DoorOpen, Calculator, ListOrdered,
  Building2, Home, Landmark, Handshake, Flame, Zap, Hammer, Leaf,
  AlertTriangle, Zap as ExpressIcon,   Briefcase, MapPin, Users, Video, Wrench, Shield, FileText, Thermometer, Droplets,
  LayoutGrid, Trash2, Clock, Building, Sofa, Sparkles, Paintbrush
} from 'lucide-react';

const RADEX_LIVE_URL = 'https://www.radex-objektmanagement.de/radex-live/ger';
export { RADEX_LIVE_URL };

export const badsanierungCards = [
  {
    to: '/komplettbadsanierung-rhein-main',
    title: 'Komplettbadsanierung',
    desc: 'Ihr Badezimmer vollständig neu gestalten – von der Planung über Sanitär, Elektro und Fliesen bis zur schlüsselfertigen Übergabe als SHK-Meisterbetrieb.',
    cta: 'Mehr erfahren',
    icon: Bath,
    image: '/img/badsanierung-thema-komplett.png',
  },
  {
    to: '/dusche-statt-badewanne',
    title: 'Dusche statt Badewanne',
    desc: 'Mehr Komfort und Bewegungsfreiheit mit einer modernen Walk-in-Dusche – fachgerecht geplant, abgedichtet und als Festpreisangebot umgesetzt.',
    cta: 'Mehr erfahren',
    icon: ShowerHead,
    image: '/img/badsanierung-thema-dusche.png',
  },
  {
    to: '/badewanne-austauschen',
    title: 'Badewanne austauschen',
    desc: 'Alte Badewanne fachgerecht ersetzen – moderne Modelle, geprüfte Anschlüsse und saubere Ausführung vom SHK-Meisterbetrieb im Rhein-Main-Gebiet.',
    cta: 'Mehr erfahren',
    icon: Bath,
    image: '/img/badewanne-austauschen-hero.png',
  },
  {
    to: '/badmodernisierung',
    title: 'Badmodernisierung',
    desc: 'Bestehendes Badezimmer gezielt modernisieren – mehr Komfort, zeitgemäßes Design und hochwertige Ausstattung ohne vollständige Entkernung.',
    cta: 'Mehr erfahren',
    icon: Sparkles,
    image: '/img/badmodernisierung-hero.png',
  },
  {
    to: '/badrenovierung',
    title: 'Badrenovierung',
    desc: 'Bestehendes Badezimmer optisch und funktional erneuern – neue Fliesen, Sanitärkeramik und Materialien ohne komplette Badsanierung.',
    cta: 'Mehr erfahren',
    icon: Paintbrush,
    image: '/img/badrenovierung-rhein-main-radex.webp',
  },
  {
    to: '/barrierefreies-bad-rhein-main',
    title: 'Barrierefreies Bad',
    desc: 'Bodengleiche Duschen, sichere Bewegungsflächen und durchdachte Lösungen für ein barrierefreies Badezimmer im Bestand.',
    cta: 'Mehr erfahren',
    icon: Accessibility,
    image: '/img/badsanierung-thema-barrierefrei.png',
  },
  {
    to: '/gaeste-wc-sanieren-rhein-main',
    title: 'Gäste-WC modernisieren',
    desc: 'Auch auf kleiner Fläche ein funktionales, helles Gäste-WC – kompakt geplant, hochwertig ausgeführt und schnell fertiggestellt.',
    cta: 'Mehr erfahren',
    icon: DoorOpen,
    image: '/img/badsanierung-thema-gaestewc.png',
  },
  {
    to: '/badsanierung-kosten-rhein-main',
    title: 'Badsanierung Kosten',
    desc: 'Typische Einstiegspreise für Basis, Komfort und Premium – nutzen Sie unseren Badsanierung-Kostenrechner für eine erste Orientierung.',
    cta: 'Mehr erfahren',
    icon: Calculator,
    image: '/img/badsanierung-thema-kosten.png',
  },
  {
    to: '/badplanung',
    title: 'Badplanung',
    desc: 'Professionelle Badplanung im Rhein-Main-Gebiet – Raumaufteilung, Technik, Materialien und Design vor Baubeginn abstimmen.',
    cta: 'Mehr erfahren',
    icon: FileText,
    image: '/img/badplanung-hero.png',
  },
  {
    to: '/ablauf-badsanierung',
    title: 'Planung & Ablauf',
    desc: 'Von der Erstberatung bis zur schlüsselfertigen Übergabe – erfahren Sie Schritt für Schritt, wie Ihre Badsanierung mit Radex abläuft.',
    cta: 'Mehr erfahren',
    icon: ListOrdered,
    image: '/img/badsanierung-thema-ablauf.png',
  },
  {
    to: '/badsanierung-dauer',
    title: 'Badsanierung Dauer',
    desc: 'Wie lange dauert eine Badsanierung? Realistische Bauzeiten, Bauphasen und Terminplanung für Ihr Projekt im Rhein-Main-Gebiet.',
    cta: 'Mehr erfahren',
    icon: Clock,
    image: '/img/badsanierung-dauer-zeitplan-radex.webp',
  },
];

export const sanierungCards = [
  {
    to: '/wohnungssanierung-rhein-main',
    title: 'Wohnungssanierung',
    desc: 'Modernisieren Sie Ihre Eigentumswohnung oder Bestandswohnung – von neuen Böden über Elektro bis zur kompletten Badmodernisierung.',
    cta: 'Mehr erfahren',
    icon: Building2,
    image: '/img/sanierung-thema-wohnung.png',
  },
  {
    to: '/haussanierung-rhein-main',
    title: 'Haussanierung',
    desc: 'Komplette Modernisierung Ihres Hauses – technisch, energetisch und optisch aus einer Hand.',
    cta: 'Mehr erfahren',
    icon: Home,
    image: '/img/sanierung-thema-haus.png',
  },
  {
    to: '/altbausanierung-rhein-main',
    title: 'Altbausanierung',
    desc: 'Historische Gebäude und ältere Bestandsimmobilien professionell modernisieren und den Charakter erhalten.',
    cta: 'Mehr erfahren',
    icon: Landmark,
    image: '/img/sanierung-thema-altbau.png',
  },
  {
    to: '/generalunternehmer-rhein-main',
    title: 'Generalunternehmer',
    desc: 'Ein Ansprechpartner für Planung, Koordination und die komplette Umsetzung Ihrer Sanierung.',
    cta: 'Mehr erfahren',
    icon: Handshake,
    image: '/img/gu-hero.png',
  },
  {
    to: '/sanierungskosten-rhein-main',
    title: 'Sanierungskosten',
    desc: 'Nutzen Sie unseren Sanierungskosten-Rechner und erhalten Sie eine erste Orientierung für Ihr Projekt.',
    cta: 'Mehr erfahren',
    icon: Calculator,
    image: '/img/kosten-hero.png',
  },
  {
    to: '/sanierung-ablauf-rhein-main',
    title: 'Planung & Ablauf',
    desc: 'Erfahren Sie Schritt für Schritt, wie Ihre Sanierung mit Radex geplant und umgesetzt wird.',
    cta: 'Mehr erfahren',
    icon: ListOrdered,
    image: '/img/ablauf-hero.png',
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
      title: 'Heizung & Sanitär im Rhein-Main-Gebiet | SHK-Meisterbetrieb | Radex',
      description: 'Moderne Heizungs- und Sanitärtechnik vom SHK-Meisterbetrieb. Heizungsmodernisierung, Wärmepumpen und Sanitärinstallationen für private Eigentümer und Unternehmen im Rhein-Main-Gebiet.',
      path: '/leistungen/heizung-sanitaer',
    },
    subpages: [
      { to: '/heizung-sanitaer-rhein-main', title: 'Heizung modernisieren', desc: 'Heizungstausch, Heizkörper und Wärmeverteilung im Bestand.', icon: Thermometer },
      { to: '/waermepumpe-rhein-main', title: 'Wärmepumpe', desc: 'Luft- und Sole-Wasser-Wärmepumpen inkl. Förderabwicklung.', icon: Flame },
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
      { to: '/sicherungskasten-erneuern-rhein-main', title: 'Sicherungskasten erneuern', desc: 'Unterverteilung, FI-Schutz und Zählerschrank auf aktuellen Stand bringen.', icon: Shield },
    ],
  },
  'innenausbau-umbau': {
    title: 'Innenausbau & Umbau',
    subtitle: 'Räume neu gestalten, Wände versetzen und moderne Wohnkonzepte umsetzen.',
    seo: {
      title: 'Innenausbau & Umbau im Rhein-Main-Gebiet | Radex Objektmanagement',
      description: 'Innenausbau, Trockenbau und Umbauten für Wohnungen und Häuser im Rhein-Main-Gebiet. Professionell geplant und aus einer Hand umgesetzt.',
      path: '/leistungen/innenausbau-umbau',
    },
    subpages: [
      { to: '/raeume-umbauen-rhein-main', title: 'Räume umbauen', desc: 'Grundriss anpassen und Wohnflächen besser nutzen.', icon: Sofa },
      { to: '/innenausbau-wohnung-rhein-main', title: 'Innenausbau Wohnung', desc: 'Wohnungen modernisieren und an neue Nutzung anpassen.', icon: LayoutGrid },
      { to: '/innenausbau-haus-rhein-main', title: 'Innenausbau Haus', desc: 'Komplette Wohnhäuser modernisieren und Räume neu gestalten.', icon: Home },
      { to: '/trockenbau-rhein-main', title: 'Trockenbau', desc: 'Wände, Decken und Vorwandinstallationen fachgerecht erstellen.', icon: Hammer },
      { to: '/wand-entfernen-rhein-main', title: 'Wand entfernen', desc: 'Nichttragende Wände entfernen und Räume öffnen.', icon: Wrench },
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
      title: 'Schimmel & Asbest im Rhein-Main-Gebiet | Fachgerechte Sanierung | Radex',
      description: 'Schimmel fachgerecht beseitigen und Asbest sicher sanieren. Professionelle Schadstoffsanierung und koordinierte Sanierungslösungen im gesamten Rhein-Main-Gebiet.',
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
      { to: '/sanierungs-soforthilfe-rhein-main', title: 'Sanierungs-Soforthilfe', desc: 'Kurzfristige Beratung und schneller Sanierungsstart.', icon: ExpressIcon },
      { to: '/schnellsanierung-rhein-main', title: 'Schnellsanierung Rhein-Main', desc: 'Wohnung oder Haus schnell sanieren mit klarer Planung.', icon: ExpressIcon },
      { to: '/badsanierung-rhein-main', title: 'Bad-Soforthilfe', desc: 'Schnelle Hilfe bei dringenden Bad- und Sanitärproblemen.', icon: Bath },
      { to: '/schnelle-badsanierung-rhein-main', title: 'Schnelle Badsanierung', desc: 'Zeitnahe Badsanierung mit strukturiertem Ablauf.', icon: Clock },
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
      { to: '/gewerbesanierung-rhein-main', title: 'Gewerbesanierung', desc: 'Praxen, Läden und Gewerbeflächen modernisieren.', icon: Building },
      { to: '/gewerbe-objektsanierung-rhein-main', title: 'Büroumbau', desc: 'Büroflächen umbauen und an neue Nutzung anpassen.', icon: Briefcase },
      { to: '/mieterausbau-rhein-main', title: 'Mieterausbau', desc: 'Ausbau nach Mieterwunsch – termingerecht und sauber.', icon: Users },
    ],
  },
};

export const ratgeberCards = [
  { to: '/ratgeber/kategorie/badsanierung', title: 'Badsanierung', desc: 'Kosten, Planung und Ablauf einer Badsanierung.', cta: 'Ratgeber öffnen', icon: Bath },
  { to: '/ratgeber/wohnung-sanieren-nach-kauf', title: 'Wohnungssanierung', desc: 'Wohnung sanieren nach Kauf oder vor Vermietung.', cta: 'Ratgeber öffnen', icon: Building2 },
  { to: '/ratgeber/haus-modernisieren-nach-kauf-erbschaft', title: 'Haussanierung', desc: 'Haus modernisieren – Umfang, Kosten und Reihenfolge.', cta: 'Ratgeber öffnen', icon: Home },
  { to: '/ratgeber/kategorie/heizung-sanitaer', title: 'Heizung & Sanitär', desc: 'Heizung modernisieren, Wärmepumpe und Sanitärleitungen.', cta: 'Ratgeber öffnen', icon: Flame },
  { to: '/ratgeber/kategorie/elektrotechnik', title: 'Elektrotechnik', desc: 'Elektroinstallation im Bestand sicher erneuern.', cta: 'Ratgeber öffnen', icon: Zap },
  { to: '/ratgeber/kategorie/energie-foerderung', title: 'Energie & Förderung', desc: 'Energetische Sanierung und Fördermittel nutzen.', cta: 'Ratgeber öffnen', icon: Leaf },
  { to: '/ratgeber/komplettsanierung-oder-teilsanierung', title: 'Komplettsanierung', desc: 'Komplett- oder Teilsanierung – was passt zu Ihrem Projekt?', cta: 'Ratgeber öffnen', icon: Handshake },
  { to: '/ratgeber/kategorie/schimmel-asbest', title: 'Schimmel & Asbest', desc: 'Schimmel und Schadstoffe fachgerecht sanieren.', cta: 'Ratgeber öffnen', icon: AlertTriangle },
  { to: '/sanierungskosten-rechner', title: 'Kosten & Rechner', desc: 'Sanierungskosten für Bad, Wohnung und Altbau berechnen.', cta: 'Kosten berechnen', icon: Calculator },
];

export const ueberRadexCards = [
  { to: '/ueber-uns#unternehmen', title: 'Unternehmen', desc: 'Team, Werte und Qualifikationen von Radex kennenlernen.', cta: 'Mehr erfahren', icon: Users },
  { to: '/karriere', title: 'Karriere', desc: 'Jobs und Perspektiven im Handwerk im Rhein-Main-Gebiet.', cta: 'Karriere entdecken', icon: Briefcase },
  { to: RADEX_LIVE_URL, title: 'Radex Live', desc: 'Laufende und abgeschlossene Projekte in Echtzeit verfolgen.', cta: 'Projekte ansehen', icon: Video },
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
