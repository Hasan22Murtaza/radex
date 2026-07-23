import { useEffect } from 'react';
import {
  Search,
  Settings,
  Cpu,
  LineChart,
  ClipboardCheck,
  Target,
  Layers3,
  Settings2,
  ShieldCheck,
  Workflow,
  MapPin,
  PhoneCall,
  SearchCheck,
  ClipboardList,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  Gauge,
  Leaf,
  BadgeEuro,
  Zap,
  Hammer,
  BriefcaseBusiness,
  House,
  Building2,
  Factory,
  KeyRound,
  Activity,
  ChartNoAxesCombined,
  BellRing,
  CircleCheck,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import '../data/legacyServiceStyles.css';
import '../data/migratedServicePage.css';
import useSeo, { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '../useSeo';
import ReviewsMarquee from '../components/ReviewsMarquee';
import {
  PremiumIconCards,
  SectionTransition,
  SeoTocSection,
  SeoKnowledgeDrawer,
  RadexLiveSection,
  HorizontalProcessTimeline,
  BerndExplainsVideo,
  FaqAccordion,
  QualityPromiseBlock,
  ResponsiveChecklistSection,
} from '../components/landing/SharedLandingParts';
import {
  energieeffizienzSeoIntro,
  energieeffizienzSeoSections,
  energieeffizienzSeoLinkSections,
} from '../data/energieeffizienzSeoContent';
import { energieeffizienzLegacySections } from '../data/energieeffizienzLegacyContent';

const PAGE_PATH = '/energieeffizienz-rhein-main';
const HERO_IMAGE = '/img/energieeffizienz-rhein-main.webp';
const HERO_IMAGE_FALLBACK = '/img/haus-service-energie.png';
const VIDEO_POSTER = '/img/bernd-energieeffizienz-rhein-main.webp';
const TECH_IMAGE = '/img/intelligentes-energiemanagement-gebaeude-rhein-main.webp';
const TECH_IMAGE_FALLBACK = '/img/heizung-service-waermepumpe.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Energieeffizienz Rhein-Main | Energieverbrauch dauerhaft senken | Radex';
const META_DESCRIPTION =
  'Mehr Energieeffizienz für Wohn- und Gewerbeimmobilien im Rhein-Main-Gebiet. Moderne Gebäudetechnik, intelligente Steuerung und nachhaltige Optimierung für dauerhaft niedrigere Energiekosten.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Energie & Förderung', path: '/energie-foerderung' },
  { name: 'Energieeffizienz', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Individuelle Energieoptimierung',
  'Moderne Gebäudetechnik',
  'Zukunftssichere Lösungen',
  'Ganzheitliche Beratung',
  'Rhein-Main-Gebiet',
];

function EnergieeffizienzCTA({ isHero = false, centered = false, primaryLabel = 'Kostenlose Beratung' }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href="#kontakt" className="btn br-btn-orange">
        {primaryLabel}
      </a>
      <a href="#kontakt" className="btn br-btn-outline-orange">
        Projekt anfragen
      </a>
    </div>
  );
}

const whyRadexCards = [
  {
    title: 'Ganzheitliche Betrachtung',
    desc: 'Wir analysieren Gebäude, Technik und Nutzung als Gesamtsystem.',
    icon: Layers3,
  },
  {
    title: 'Individuelle Optimierung',
    desc: 'Jede Immobilie erhält ein auf ihre Anforderungen abgestimmtes Effizienzkonzept.',
    icon: ClipboardCheck,
  },
  {
    title: 'Moderne Gebäudetechnik',
    desc: 'Wir integrieren aktuelle Technologien für einen wirtschaftlichen Betrieb.',
    icon: Settings2,
  },
  {
    title: 'Zukunftssichere Lösungen',
    desc: 'Unsere Konzepte berücksichtigen zukünftige Anforderungen an Energie und Nachhaltigkeit.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Projektsteuerung',
    desc: 'Alle Maßnahmen werden klar geplant und koordiniert.',
    icon: Workflow,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Persönliche Betreuung und kurze Wege während des gesamten Projekts.',
    icon: MapPin,
  },
];

const leistungenCards = [
  {
    title: 'Energieanalyse',
    desc: 'Analyse des aktuellen Energieverbrauchs Ihrer Immobilie.',
    icon: Search,
  },
  {
    title: 'Gebäudetechnik optimieren',
    desc: 'Optimierung bestehender technischer Anlagen für einen effizienteren Betrieb.',
    icon: Settings,
  },
  {
    title: 'Digitale Steuerung',
    desc: 'Intelligente Steuerungen sorgen für einen bedarfsgerechten Energieeinsatz.',
    icon: Cpu,
  },
  {
    title: 'Verbrauchsoptimierung',
    desc: 'Reduzierung unnötiger Energieverluste im laufenden Betrieb.',
    icon: LineChart,
  },
  {
    title: 'Energieberatung',
    desc: 'Gemeinsam entwickeln wir wirtschaftliche Optimierungsmöglichkeiten.',
    icon: ClipboardCheck,
  },
  {
    title: 'Zukunftsplanung',
    desc: 'Schrittweise Verbesserung der Energieeffizienz Ihrer Immobilie.',
    icon: Target,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Analyse der Ausgangssituation.',
    icon: PhoneCall,
  },
  {
    title: 'Energieanalyse',
    desc: 'Bewertung von Gebäude und Technik.',
    icon: SearchCheck,
  },
  {
    title: 'Optimierungskonzept',
    desc: 'Entwicklung individueller Maßnahmen.',
    icon: ClipboardList,
  },
  {
    title: 'Planung',
    desc: 'Koordination aller erforderlichen Arbeiten.',
    icon: Workflow,
  },
  {
    title: 'Umsetzung',
    desc: 'Fachgerechte Modernisierung.',
    icon: Settings2,
  },
  {
    title: 'Erfolgskontrolle',
    desc: 'Überprüfung der umgesetzten Optimierungen.',
    icon: CircleCheckBig,
  },
];

const buildingTypeSolutions = [
  {
    icon: House,
    title: 'Einfamilienhäuser',
    subtitle: 'Energieverbrauch transparent senken',
    desc: 'Bei Einfamilienhäusern stehen häufig Heizungsregelung, Warmwasserbereitung, Beleuchtung, Smart-Home-Steuerung und die Reduzierung unnötiger Grundlasten im Mittelpunkt.',
    measures: [
      'Heizzeiten optimieren',
      'Raumtemperaturen bedarfsgerecht steuern',
      'Stromverbrauch überwachen',
      'Beleuchtung modernisieren',
      'Eigenverbrauch intelligent organisieren',
    ],
  },
  {
    icon: Building2,
    title: 'Mehrfamilienhäuser',
    subtitle: 'Technik und Verbrauch zentral optimieren',
    desc: 'In Mehrfamilienhäusern müssen Effizienz, Wirtschaftlichkeit und die Anforderungen verschiedener Nutzer sinnvoll miteinander verbunden werden.',
    measures: [
      'Heizungsanlage hydraulisch optimieren',
      'Allgemeinstrom reduzieren',
      'Verbrauchserfassung verbessern',
      'Beleuchtung in Gemeinschaftsflächen modernisieren',
      'Technische Anlagen bedarfsgerecht steuern',
    ],
  },
  {
    icon: Factory,
    title: 'Gewerbeimmobilien',
    subtitle: 'Betriebskosten und Lastspitzen reduzieren',
    desc: 'Bei Gewerbeobjekten entstehen hohe Einsparpotenziale oft durch Betriebszeiten, Beleuchtung, technische Anlagen, Lastmanagement und ein kontinuierliches Energiemonitoring.',
    measures: [
      'Lastspitzen analysieren',
      'Betriebszeiten anpassen',
      'Beleuchtung automatisieren',
      'Energieflüsse überwachen',
      'Gebäudetechnik zentral steuern',
    ],
  },
  {
    icon: KeyRound,
    title: 'Vermietete Immobilien',
    subtitle: 'Betriebskosten und Attraktivität verbessern',
    desc: 'Eine effizient betriebene Immobilie kann Nebenkosten reduzieren, die Vermietbarkeit unterstützen und den langfristigen Werterhalt verbessern.',
    measures: [
      'Verbrauchsdaten auswerten',
      'Allgemeinflächen optimieren',
      'Heizungsregelung verbessern',
      'Wartung und Betrieb koordinieren',
      'Modernisierungsschritte priorisieren',
    ],
  },
];

const gebaeudetechnikItems = [
  'Heizung und Warmwasser',
  'Raumtemperaturregelung',
  'Beleuchtung',
  'Sonnenschutz und Verschattung',
  'Lüftung',
  'Photovoltaik',
  'Batteriespeicher',
  'Wärmepumpe',
  'Wallbox',
  'elektrische Großverbraucher',
];

const systemIntegrationItems = [
  'Photovoltaikstrom bevorzugt im Gebäude nutzen',
  'Wärmepumpen bedarfsgerecht ansteuern',
  'Batteriespeicher sinnvoll einbinden',
  'Ladezeiten der Wallbox koordinieren',
  'elektrische Verbraucher priorisieren',
  'Energieflüsse transparent darstellen',
  'Lastspitzen reduzieren',
  'den Eigenverbrauch verbessern',
];

const operationChecklistItems = [
  {
    title: 'Regelmäßig Verbrauchsdaten prüfen',
    desc: 'Vergleichswerte helfen dabei, ungewöhnliche Entwicklungen frühzeitig zu erkennen.',
  },
  {
    title: 'Heizkurve und Zeitprogramme kontrollieren',
    desc: 'Falsch eingestellte Temperaturen und Betriebszeiten können unnötig Energie verbrauchen.',
  },
  {
    title: 'Technische Anlagen warten',
    desc: 'Saubere, gewartete und korrekt eingestellte Systeme arbeiten zuverlässiger und effizienter.',
  },
  {
    title: 'Nutzerverhalten berücksichtigen',
    desc: 'Die beste Technik funktioniert nur dann optimal, wenn sie verständlich und bedarfsgerecht bedient wird.',
  },
  {
    title: 'Veränderungen dokumentieren',
    desc: 'Nach Anpassungen sollte überprüft werden, ob sich Energieverbrauch und Komfort tatsächlich verbessert haben.',
  },
];

const monitoringCards = [
  {
    title: 'Verbrauch sichtbar machen',
    desc: 'Ein systematisches Energiemonitoring schafft Transparenz über Strom-, Wärme- und gegebenenfalls Wasserverbräuche.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Auffälligkeiten erkennen',
    desc: 'Ungewöhnliche Grundlasten, Verbrauchsspitzen und ineffiziente Betriebszeiten werden leichter sichtbar.',
    icon: BellRing,
  },
  {
    title: 'Maßnahmen vergleichen',
    desc: 'Verbrauchswerte vor und nach einer Optimierung helfen dabei, die Wirkung einzelner Maßnahmen zu beurteilen.',
    icon: Activity,
  },
  {
    title: 'Betrieb dauerhaft verbessern',
    desc: 'Auf Basis realer Daten lassen sich Einstellungen schrittweise weiter optimieren.',
    icon: Gauge,
  },
];

const energyAnalysisTriggers = [
  'die Betriebskosten deutlich gestiegen sind',
  'Räume unterschiedlich warm werden',
  'die Heizungsanlage häufig taktet',
  'hohe Stromgrundlasten auftreten',
  'eine Wärmepumpe geplant ist',
  'Photovoltaik und Speicher integriert werden sollen',
  'eine Wallbox installiert werden soll',
  'ein Gebäude modernisiert oder umgenutzt wird',
  'technische Anlagen nicht zentral steuerbar sind',
  'Verbrauchsdaten fehlen oder unklar sind',
];

const relatedCards = [
  {
    title: 'Energetische Sanierung',
    desc: 'Verbinden Sie technische Effizienzmaßnahmen mit einer ganzheitlichen Modernisierung der Immobilie.',
    icon: Leaf,
    to: '/energetische-sanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Sanierung Förderung',
    desc: 'Erfahren Sie, welche Förderwege für geplante Energie- und Sanierungsmaßnahmen relevant sein können.',
    icon: BadgeEuro,
    to: '/sanierung-foerderung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Elektrotechnik & Gebäudetechnik',
    desc: 'Schaffen Sie die technische Grundlage für Smart Home, Energiemanagement, Wallbox und moderne elektrische Verbraucher.',
    icon: Zap,
    to: '/elektrotechnik-gebaeudetechnik',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Komplettsanierung',
    desc: 'Integrieren Sie Energieeffizienzmaßnahmen strukturiert in eine umfassende Modernisierung.',
    icon: Hammer,
    to: '/komplettsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bauleitung & Projektsteuerung',
    desc: 'Koordinieren Sie komplexe technische Maßnahmen, Fachunternehmen und Bauabläufe aus einer Hand.',
    icon: ClipboardList,
    to: '/bauleitung-projektsteuerung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Generalunternehmer',
    desc: 'Ein zentraler Ansprechpartner übernimmt die Koordination der beteiligten Gewerke.',
    icon: BriefcaseBusiness,
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const radexLiveProjects = [
  {
    image: '/img/heizung-service-waermepumpe.png',
    badge: 'LIVE',
    title: 'Intelligentes Energiemanagement im Einfamilienhaus',
    location: 'Rodgau',
    desc: 'Wärmepumpe, Photovoltaik und Steuerungstechnik abgestimmt geplant – Einblicke in die technische Umsetzung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/haus-service-energie.png',
    badge: 'LIVE',
    title: 'Gebäudetechnik optimieren',
    location: 'Dreieich',
    desc: 'Heizungsregelung, Verbrauchsanalyse und technische Modernisierung in einem Bestandsgebäude.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-heizung.png',
    badge: 'Abgeschlossen',
    title: 'Energieeffizienz im Mehrfamilienhaus',
    location: 'Offenbach am Main',
    desc: 'Hydraulischer Abgleich, Heizungsoptimierung und Verbrauchserfassung koordiniert umgesetzt.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-service-energie.png',
    badge: 'Vorher & Nachher',
    title: 'Technische Optimierung im Bestand',
    location: 'Darmstadt',
    desc: 'Smart-Home-Steuerung, LED-Beleuchtung und Heizungsregelung in einem älteren Gebäude.',
    cta: 'Projekt ansehen',
  },
];

const videoTranscript =
  'Viele denken bei Energieeffizienz zuerst an Dämmung. Tatsächlich spielen auch Heizungsregelung, Gebäudetechnik, Beleuchtung und digitale Steuerungen eine entscheidende Rolle. Oft lassen sich bereits durch intelligente Optimierungen erhebliche Einsparungen erzielen.';

const faqsData = [
  {
    q: 'Was bedeutet Energieeffizienz bei einer Immobilie?',
    a: 'Energieeffizienz beschreibt, wie wirkungsvoll ein Gebäude die eingesetzte Energie nutzt. Eine energieeffiziente Immobilie erreicht den gewünschten Komfort mit einem möglichst geringen Energieverbrauch.',
  },
  {
    q: 'Wie kann ich den Energieverbrauch meines Hauses senken?',
    a: 'Mögliche Maßnahmen sind die Optimierung der Heizungsregelung, ein hydraulischer Abgleich, moderne LED-Beleuchtung, intelligentes Energiemanagement und die Überwachung des laufenden Verbrauchs. Welche Schritte sinnvoll sind, hängt von Gebäude, Technik und Nutzung ab.',
  },
  {
    q: 'Lohnt sich ein Smart-Home-System zum Energiesparen?',
    a: 'Ein sinnvoll geplantes Smart-Home-System kann Heizung, Beleuchtung, Verschattung und elektrische Verbraucher bedarfsgerecht steuern. Dadurch lassen sich unnötige Laufzeiten und vermeidbarer Energieverbrauch reduzieren.',
  },
  {
    q: 'Was bringt ein hydraulischer Abgleich?',
    a: 'Der hydraulische Abgleich verbessert die Wärmeverteilung innerhalb des Heizsystems. Heizkörper und Heizflächen werden bedarfsgerecht versorgt, wodurch die Anlage effizienter arbeiten und der Komfort steigen kann.',
  },
  {
    q: 'Ist Energiemonitoring auch für ein Einfamilienhaus sinnvoll?',
    a: 'Ja. Durch ein Energiemonitoring werden Verbrauchswerte transparent. Ungewöhnlich hohe Verbräuche, unnötige Grundlasten und ineffiziente Betriebszeiten lassen sich dadurch leichter erkennen.',
  },
  {
    q: 'Können auch ältere Gebäude energieeffizienter werden?',
    a: 'Ja. Gerade Bestandsgebäude bieten häufig verschiedene Optimierungsmöglichkeiten. Neben umfangreichen Modernisierungen können bereits technische Anpassungen und eine bessere Steuerung messbare Verbesserungen erzielen.',
  },
  {
    q: 'Betrachtet Radex auch Gewerbeimmobilien?',
    a: 'Ja. Wir entwickeln Energieeffizienzlösungen für Wohngebäude, Mehrfamilienhäuser, vermietete Immobilien und Gewerbeobjekte im Rhein-Main-Gebiet.',
  },
  {
    q: 'Gibt es Förderungen für Energieeffizienzmaßnahmen?',
    a: 'Je nach Maßnahme und Gebäude können Förderprogramme oder steuerliche Möglichkeiten relevant sein. Die Voraussetzungen unterscheiden sich jedoch. Weitere Informationen finden Sie auf der Money Page Sanierung Förderung Rhein-Main.',
    aNode: (
      <>
        Je nach Maßnahme und Gebäude können Förderprogramme oder steuerliche Möglichkeiten relevant sein. Die
        Voraussetzungen unterscheiden sich jedoch. Weitere Informationen finden Sie auf der Money Page{' '}
        <Link to="/sanierung-foerderung-rhein-main">Sanierung Förderung Rhein-Main</Link>.
      </>
    ),
  },
];

const faqsDisplay = faqsData.map((faq) => ({
  q: faq.q,
  a: faq.aNode ?? faq.a,
}));

const seoTocSections = [...energieeffizienzSeoSections, ...energieeffizienzSeoLinkSections];

export default function EnergieeffizienzLanding() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useSeo({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: PAGE_PATH,
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Energieeffizienz Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page sanierung-money-page energieeffizienz-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/energie-foerderung">Energie &amp; Förderung</Link>
              <span aria-hidden="true">↓</span>
              <span>Energieeffizienz</span>
            </nav>
            <p className="br-hero-kicker">
              <Gauge size={16} strokeWidth={1.5} aria-hidden="true" /> Mehr Effizienz. Weniger Energieverbrauch. Mehr
              Zukunft.
            </p>
            <p className="br-hero-kicker">Energieeffizienz für Wohn- und Gewerbeimmobilien</p>
            <h1 className="br-hero-title">
              Energieeffizienz
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Mit intelligenten Lösungen den Energieverbrauch nachhaltig reduzieren und den Wohnkomfort deutlich
              verbessern.
            </p>
            <p className="br-hero-text">
              Eine hohe Energieeffizienz entsteht nicht nur durch Dämmmaßnahmen. Moderne Gebäudetechnik, intelligente
              Steuerungen und optimal aufeinander abgestimmte Systeme helfen dabei, Energie effizient einzusetzen und
              laufende Betriebskosten dauerhaft zu senken.
            </p>
            <p className="br-hero-text">
              Radex entwickelt individuelle Konzepte für private, gewerbliche und vermietete Immobilien im gesamten
              Rhein-Main-Gebiet.
            </p>
            <EnergieeffizienzCTA isHero />
            <ul className="br-hero-trust-list" aria-label="Vertrauenspunkte">
              {TRUST_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE}), url(${HERO_IMAGE_FALLBACK})` }}
          role="img"
          aria-label="Energieeffiziente Immobilie im Rhein-Main-Gebiet."
          title="Energieeffizienz Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Energie effizient nutzen statt Energie verschwenden</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Jede Immobilie verbraucht Energie – entscheidend ist jedoch, wie effizient diese genutzt wird. Moderne
              Technologien ermöglichen es, den Energiebedarf deutlich zu reduzieren, ohne auf Komfort verzichten zu
              müssen.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Durch intelligente Gebäudetechnik, optimierte Heizungsregelungen, effiziente Beleuchtung und digitale
              Steuerungen entstehen nachhaltige Einsparpotenziale, die sich langfristig auf die Betriebskosten
              auswirken.
            </p>
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} largeIcons />
        </div>
      </section>

      <QualityPromiseBlock intro="Bei Energieeffizienzprojekten achten wir besonders auf eine ganzheitliche Betrachtung von Gebäude, Technik und Nutzung – für wirtschaftliche und zukunftssichere Lösungen." />

      <SectionTransition>
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen zur Verbesserung der Energieeffizienz
        Ihrer Immobilie.
      </SectionTransition>

      <section id="leistungen" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <div className="br-leistungen-grid-three">
            <PremiumIconCards cards={leistungenCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur Erfolgskontrolle
        Ihrer Energieoptimierung.
      </SectionTransition>

      <HorizontalProcessTimeline title="Projektablauf" steps={processSteps} />

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Ihr Ansprechpartner für Energieeffizienz</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Sie möchten den Energieverbrauch Ihrer Immobilie dauerhaft senken und moderne Gebäudetechnik sinnvoll
              einsetzen? Wir entwickeln gemeinsam mit Ihnen eine wirtschaftliche und zukunftssichere Lösung.
            </p>
          </div>

          <div className="br-ablauf-contact-cards">
            <div className="br-ablauf-contact-card">
              <div className="br-ablauf-contact-icon">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <h3>Telefon</h3>
              <p>+49 (0) 6074 960620</p>
              <a href={PHONE_TEL} className="br-ablauf-contact-number">
                06074 960620
              </a>
            </div>

            <div className="br-ablauf-contact-card">
              <div className="br-ablauf-contact-icon">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <h3>E-Mail</h3>
              <p>Schreiben Sie uns Ihre Anfrage.</p>
              <a href="mailto:info@radex-objektmanagement.de" className="br-ablauf-contact-number">
                info@radex-objektmanagement.de
              </a>
            </div>

            <div className="br-ablauf-contact-card">
              <div className="br-ablauf-contact-icon br-ablauf-contact-icon--wa">
                <MessageCircle size={24} strokeWidth={1.5} />
              </div>
              <h3>WhatsApp</h3>
              <p>
                Senden Sie uns Fotos, Pläne oder vorhandene Verbrauchsdaten – wir geben Ihnen eine erste Einschätzung zu
                Ihrem Energieeffizienzprojekt.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
                WhatsApp öffnen
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#kontakt" className="btn br-btn-orange">
              Kostenlose Beratung
            </a>
          </div>
        </div>
      </section>

      <BerndExplainsVideo
        title="Wie wird ein Gebäude wirklich energieeffizient?"
        description="Bernd erklärt, warum Energieeffizienz weit über eine gute Dämmung hinausgeht und wie moderne Gebäudetechnik, intelligente Steuerungssysteme und regelmäßige Optimierungen den Energieverbrauch dauerhaft reduzieren."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt Energieeffizienz bei Wohn- und Gewerbeimmobilien."
        duration="ca. 3 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Mehr Effizienz für Ihre Immobilie</h2>
            <p>
              Wir analysieren den Energieverbrauch Ihrer Immobilie und entwickeln wirtschaftliche Lösungen, mit denen Sie
              Energie sparen, Betriebskosten reduzieren und den Wohnkomfort nachhaltig verbessern.
            </p>
            <EnergieeffizienzCTA centered />
          </div>
        </div>
      </section>

      {energieeffizienzLegacySections.length > 0 && (
        <SeoKnowledgeDrawer
          title="Weitere Informationen"
          sections={energieeffizienzLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="energieeffizienz-legacy-panel"
        />
      )}

      <SeoTocSection
        title="Unsere Leistungen im Bereich Energieeffizienz"
        intro={energieeffizienzSeoIntro}
        sections={seoTocSections}
        showAllContent
        panelId="energieeffizienz-seo-panel"
        ctaLabel="Kostenlose Beratung"
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Energieeffizienzprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Gebäudetechnik, Heizungsoptimierung, Smart-Home-Steuerung und intelligente Energiemanagement-Lösungen."
        projects={radexLiveProjects}
      />

      <FaqAccordion faqs={faqsDisplay} title="Häufig gestellte Fragen" />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Effizienzlösungen nach Gebäudeart</h2>
          </div>
          <div className="br-sanierung-compare-grid">
            {buildingTypeSolutions.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.title} href="#kontakt" className="br-decision-card br-sanierung-compare-card">
                  <div className="br-decision-icon br-decision-icon--large">
                    <Icon size={36} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>
                    <strong>{item.subtitle}</strong>
                  </p>
                  <p>{item.desc}</p>
                  <p style={{ fontSize: '14px', fontWeight: 600, marginTop: '12px', marginBottom: '8px' }}>
                    Typische Maßnahmen
                  </p>
                  <ul className="br-seo-list" style={{ textAlign: 'left', marginBottom: '16px' }}>
                    {item.measures.map((measure) => (
                      <li key={measure}>{measure}</li>
                    ))}
                  </ul>
                  <span className="br-btn-orange">Kostenlose Beratung &rarr;</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="br-split-tools" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <h2 className="br-section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
                Energieeffizienz mit moderner Gebäudetechnik
              </h2>
              <p className="br-section-subtitle br-section-subtitle--wide" style={{ textAlign: 'left', marginBottom: '16px' }}>
                Eine effiziente Immobilie benötigt Technik, die nicht dauerhaft mit voller Leistung arbeitet, sondern sich
                am tatsächlichen Bedarf orientiert. Moderne Gebäudetechnik verbindet verschiedene Verbraucher und
                ermöglicht eine abgestimmte Steuerung.
              </p>
              <p className="br-section-subtitle br-section-subtitle--wide" style={{ textAlign: 'left', marginBottom: '12px' }}>
                Dazu können gehören:
              </p>
              <ul className="br-seo-list">
                {gebaeudetechnikItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="br-section-subtitle br-section-subtitle--wide" style={{ textAlign: 'left', marginTop: '16px', marginBottom: 0 }}>
                Je besser diese Systeme miteinander kommunizieren, desto gezielter kann die verfügbare Energie eingesetzt
                werden. Besonders bei der Kombination von Photovoltaik, Wärmepumpe, Stromspeicher und Elektromobilität
                wird ein intelligentes Energiemanagement zunehmend wichtig.
              </p>
            </div>
            <div>
              <img
                src={TECH_IMAGE}
                onError={(e) => {
                  e.currentTarget.src = TECH_IMAGE_FALLBACK;
                }}
                alt="Intelligentes Energiemanagement für ein energieeffizientes Gebäude im Rhein-Main-Gebiet."
                width={1400}
                height={1050}
                loading="lazy"
                decoding="async"
                className="br-seo-inline-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center mb-10">
            <h2 className="br-section-title">Wärmepumpe, Photovoltaik und Wallbox intelligent verbinden</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Moderne Immobilien nutzen zunehmend mehrere elektrische Systeme gleichzeitig. Eine Wärmepumpe erzeugt Wärme,
              eine Photovoltaikanlage liefert eigenen Strom und eine Wallbox lädt das Elektrofahrzeug. Ohne abgestimmte
              Steuerung können jedoch unnötige Lastspitzen oder ungünstige Verbrauchszeiten entstehen.
            </p>
          </div>
          <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '12px' }}>
            Ein intelligentes Energiemanagement kann:
          </p>
          <ul className="br-seo-checklist br-seo-checklist--grid br-seo-checklist--circle">
            {systemIntegrationItems.map((item) => (
              <li key={item}>
                <CircleCheck size={20} strokeWidth={1.5} className="br-seo-checklist-icon" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '20px', marginBottom: 0 }}>
            Entscheidend ist, dass Elektroinstallation, Gebäudetechnik und Wärmeversorgung von Beginn an gemeinsam geplant
            werden.
          </p>
          <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
            <Link to="/elektrotechnik-gebaeudetechnik">Elektrotechnik &amp; Gebäudetechnik</Link>
            {' · '}
            <Link to="/sanierung-foerderung-rhein-main">Sanierung Förderung</Link>
            {' · '}
            <Link to="/energetische-sanierung-rhein-main">Energetische Sanierung</Link>
            {' · '}
            <Link to="/heizung-sanitaer">Heizung &amp; Sanitär</Link>
          </p>
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center mb-10">
            <h2 className="br-section-title">Energieeffizienz im laufenden Betrieb</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Technische Modernisierungen entfalten ihre volle Wirkung nur dann, wenn die Anlagen im Alltag richtig
              betrieben werden. Einstellungen, Zeitprogramme und Verbrauchsgewohnheiten sollten daher regelmäßig
              überprüft werden.
            </p>
          </div>
          <ol className="br-seo-checklist" style={{ listStyle: 'none', padding: 0 }}>
            {operationChecklistItems.map((item, index) => (
              <li
                key={item.title}
                style={{
                  marginBottom: '20px',
                  padding: '20px 24px',
                  background: '#f9fafb',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                }}
              >
                <strong>
                  {index + 1}. {item.title}
                </strong>
                <p style={{ margin: '8px 0 0', color: '#6b7280', lineHeight: 1.6 }}>{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Energiemonitoring und Erfolgskontrolle</h2>
          </div>
          <PremiumIconCards cards={monitoringCards} largeIcons />
        </div>
      </section>

      <ResponsiveChecklistSection
        title="Wann ist eine Energieanalyse sinnvoll?"
        intro="Eine Energieanalyse ist besonders sinnvoll, wenn:"
        items={energyAnalysisTriggers}
        withCircleCheck
      />

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p className="br-section-subtitle br-section-subtitle--wide text-center" style={{ marginBottom: 0 }}>
            Eine strukturierte Bestandsaufnahme schafft die Grundlage für gezielte Maßnahmen und verhindert, dass
            einzelne Systeme isoliert betrachtet werden.
          </p>
          <div className="text-center mt-8">
            <a href="#kontakt" className="btn br-btn-orange">
              Energieanalyse anfragen
            </a>
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Passende Leistungen</h2>
          </div>
          <PremiumIconCards cards={relatedCards} linked largeIcons />
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">
              Energie sinnvoll einsetzen und Betriebskosten nachhaltig reduzieren
            </h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Energieeffizienz entsteht durch das Zusammenspiel aus moderner Technik, intelligenter Steuerung und einem
              transparenten Gebäudebetrieb. Nicht jede Immobilie benötigt sofort eine umfassende Sanierung. Häufig lassen
              sich bereits durch gezielte technische Optimierungen wirkungsvolle Verbesserungen erzielen.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex Objektmanagement betrachtet Ihre Immobilie als Gesamtsystem. Wir analysieren vorhandene Technik,
              identifizieren Optimierungsmöglichkeiten und koordinieren die erforderlichen Maßnahmen für Wohn- und
              Gewerbeimmobilien im Rhein-Main-Gebiet.
            </p>
          </div>
        </div>
      </section>

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Jetzt Energieeffizienz Ihrer Immobilie verbessern</h2>
            <p>
              Lassen Sie Gebäude, Technik und Energieverbrauch professionell betrachten. Gemeinsam entwickeln wir eine
              individuelle Lösung für niedrigere Betriebskosten, moderne Gebäudetechnik und einen wirtschaftlichen
              Betrieb.
            </p>
            <EnergieeffizienzCTA centered />
          </div>
        </div>
      </section>
    </main>
  );
}
