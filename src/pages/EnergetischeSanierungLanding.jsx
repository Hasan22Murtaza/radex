import { useEffect } from 'react';
import {
  Leaf,
  Building,
  Home,
  PanelsTopLeft,
  Flame,
  Shield,
  ClipboardCheck,
  ClipboardList,
  Network,
  UserRound,
  Zap,
  MapPin,
  FileText,
  PhoneCall,
  SearchCheck,
  CircleCheckBig,
  Workflow,
  Phone,
  Mail,
  MessageCircle,
  Gauge,
  BadgeEuro,
  Hammer,
  BriefcaseBusiness,
  Layers3,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import '../data/legacyServiceStyles.css';
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
} from '../components/landing/SharedLandingParts';
import {
  energetischeSanierungSeoIntro,
  energetischeSanierungSeoSections,
  energetischeSanierungSeoInternalLinks,
} from '../data/energetischeSanierungSeoContent';
import { energetischeSanierungLegacySections } from '../data/energetischeSanierungLegacyContent';

const PAGE_PATH = '/energetische-sanierung-rhein-main';
const HERO_IMAGE = '/img/energetische-sanierung-rhein-main.webp';
const HERO_IMAGE_FALLBACK = '/img/sanierung-service-energetisch.webp';
const VIDEO_POSTER = '/img/bernd-energetische-sanierung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Energetische Sanierung Rhein-Main | Energie sparen & Immobilie modernisieren | Radex';
const META_DESCRIPTION =
  'Energetische Sanierung im Rhein-Main-Gebiet. Gebäude modernisieren, Energiekosten senken und den Wohnkomfort nachhaltig verbessern.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Energie & Förderung', path: '/energie-foerderung' },
  { name: 'Energetische Sanierung', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Ganzheitliche Sanierungsplanung',
  'Ein Ansprechpartner',
  'Energieeffiziente Lösungen',
  'Koordination aller Gewerke',
  'Rhein-Main-Gebiet',
];

const MASSNAHMEN_LIST = [
  'Fassadendämmung',
  'Dachdämmung',
  'Kellerdeckendämmung',
  'Austausch alter Fenster',
  'Austausch von Haustüren',
  'Heizungsmodernisierung',
  'Optimierung der Gebäudetechnik',
  'Verbesserung der Luftdichtheit',
  'Wärmeschutz',
  'Vorbereitung auf erneuerbare Energien',
];

const PLANUNG_LIST = [
  'Zustand der Gebäudehülle',
  'Heiztechnik',
  'Dämmstandard',
  'Fenster und Türen',
  'Lüftungskonzept',
  'Gebäudetechnik',
  'zukünftige Modernisierungsschritte',
  'mögliche Förderprogramme',
  'Wirtschaftlichkeit',
  'langfristige Energieeinsparung',
];

function EnergetischeSanierungCTA({ isHero = false, centered = false, primaryLabel = 'Kostenlose Beratung' }) {
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
    title: 'Individuelle Sanierungskonzepte',
    desc: 'Jede Immobilie wird individuell betrachtet und energetisch sinnvoll modernisiert.',
    icon: ClipboardList,
  },
  {
    title: 'Ganzheitliche Planung',
    desc: 'Alle Maßnahmen werden optimal aufeinander abgestimmt, um das bestmögliche Ergebnis zu erzielen.',
    icon: Network,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Wir koordinieren sämtliche Gewerke und begleiten Ihr Projekt während des gesamten Sanierungsprozesses.',
    icon: UserRound,
  },
  {
    title: 'Energieeffiziente Lösungen',
    desc: 'Unser Fokus liegt auf nachhaltigen Modernisierungen mit langfristigem Nutzen.',
    icon: Zap,
  },
  {
    title: 'Transparente Projektabwicklung',
    desc: 'Sie behalten jederzeit den Überblick über Planung, Ablauf und Fortschritt.',
    icon: FileText,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Wir begleiten energetische Sanierungsprojekte im gesamten Rhein-Main-Gebiet.',
    icon: MapPin,
  },
];

const leistungenCards = [
  {
    title: 'Fassadendämmung',
    desc: 'Reduziert Wärmeverluste und verbessert die Energieeffizienz der Gebäudehülle.',
    icon: Building,
  },
  {
    title: 'Dachdämmung',
    desc: 'Über das Dach geht besonders viel Wärme verloren. Eine moderne Dämmung reduziert diesen Energieverlust.',
    icon: Home,
  },
  {
    title: 'Fenstermodernisierung',
    desc: 'Neue Fenster verbessern Wärmeschutz und Wohnkomfort.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Heizungsmodernisierung',
    desc: 'Moderne Heizsysteme arbeiten effizienter und reduzieren den Energieverbrauch.',
    icon: Flame,
  },
  {
    title: 'Gebäudehülle optimieren',
    desc: 'Eine abgestimmte Gebäudehülle verbessert das gesamte energetische Verhalten der Immobilie.',
    icon: Shield,
  },
  {
    title: 'Ganzheitliche Sanierungsplanung',
    desc: 'Alle energetischen Maßnahmen werden sinnvoll miteinander kombiniert.',
    icon: ClipboardCheck,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Analyse Ihrer Immobilie und Ihrer Ziele.',
    icon: PhoneCall,
  },
  {
    title: 'Bestandsaufnahme',
    desc: 'Bewertung des energetischen Zustands.',
    icon: SearchCheck,
  },
  {
    title: 'Sanierungskonzept',
    desc: 'Entwicklung eines individuellen Maßnahmenplans.',
    icon: ClipboardList,
  },
  {
    title: 'Projektkoordination',
    desc: 'Abstimmung aller beteiligten Fachbetriebe.',
    icon: Network,
  },
  {
    title: 'Umsetzung',
    desc: 'Koordinierte Durchführung sämtlicher Maßnahmen.',
    icon: Workflow,
  },
  {
    title: 'Abschluss',
    desc: 'Gemeinsame Abnahme und Übergabe.',
    icon: CircleCheckBig,
  },
];

const kombinierteMassnahmenCards = [
  {
    title: 'Fassadensanierung + Fensteraustausch',
    desc: 'Die Kombination reduziert Wärmeverluste deutlich und verbessert die Gesamtenergieeffizienz der Gebäudehülle.',
    icon: Layers3,
  },
  {
    title: 'Dachdämmung + Kellerdeckendämmung',
    desc: 'Durch die Dämmung der oberen und unteren Gebäudeabschlüsse bleibt deutlich mehr Wärme im Gebäude.',
    icon: Home,
  },
  {
    title: 'Heizungsmodernisierung + Gebäudehülle',
    desc: 'Erst wenn der Wärmebedarf reduziert wird, kann eine moderne Heizungsanlage besonders effizient arbeiten.',
    icon: Flame,
  },
  {
    title: 'Energetische Komplettsanierung',
    desc: 'Wer mehrere Maßnahmen in einem Projekt kombiniert, profitiert von einer optimal abgestimmten Modernisierung mit langfristigen Einsparpotenzialen.',
    icon: Hammer,
  },
];

const relatedCards = [
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
    title: 'Generalunternehmer',
    desc: 'Ein Ansprechpartner koordiniert sämtliche Gewerke während Ihrer energetischen Sanierung.',
    icon: BriefcaseBusiness,
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const radexLiveProjects = [
  {
    image: '/img/haus-service-energie.png',
    badge: 'LIVE',
    title: 'Energetische Haussanierung',
    location: 'Dreieich',
    desc: 'Gebäudehülle, Dämmung und Heiztechnik im Zusammenspiel – laufende Einblicke in die Bauphase.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-service-energie.png',
    badge: 'LIVE',
    title: 'Fassadendämmung im Bestand',
    location: 'Rodgau',
    desc: 'Wärmeverluste reduzieren und den Wohnkomfort nachhaltig verbessern – koordiniert von Radex.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-waermepumpe.png',
    badge: 'Vorher & Nachher',
    title: 'Heizungsmodernisierung',
    location: 'Offenbach am Main',
    desc: 'Moderne Heiztechnik mit abgestimmter Gebäudehülle und koordinierten Gewerken.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-heizung.png',
    badge: 'Abgeschlossen',
    title: 'Energetische Modernisierung',
    location: 'Darmstadt',
    desc: 'Mehrere energetische Maßnahmen sinnvoll kombiniert – von der Planung bis zur Umsetzung.',
    cta: 'Projekt ansehen',
  },
];

const videoTranscript =
  'Eine energetische Sanierung besteht nicht aus einer einzelnen Maßnahme. Erst wenn Gebäudehülle, Heiztechnik und Gebäudetechnik sinnvoll aufeinander abgestimmt werden, lassen sich Energieverbrauch, Wohnkomfort und langfristige Betriebskosten nachhaltig verbessern.';

const faqsData = [
  {
    q: 'Was versteht man unter einer energetischen Sanierung?',
    a: 'Unter einer energetischen Sanierung versteht man alle baulichen und technischen Maßnahmen, die den Energieverbrauch eines Gebäudes dauerhaft reduzieren. Dazu zählen unter anderem Dämmmaßnahmen, moderne Fenster, energieeffiziente Heizsysteme sowie die Optimierung der Gebäudetechnik.',
  },
  {
    q: 'Welche Maßnahmen bringen die größte Energieeinsparung?',
    a: 'Das hängt vom Zustand der Immobilie ab. Besonders wirkungsvoll sind häufig die Dämmung der Gebäudehülle, der Austausch alter Fenster sowie die Modernisierung der Heizungsanlage. Die besten Ergebnisse entstehen durch ein aufeinander abgestimmtes Gesamtkonzept.',
  },
  {
    q: 'Kann ich eine energetische Sanierung schrittweise durchführen?',
    a: 'Ja. Viele Eigentümer setzen energetische Maßnahmen in mehreren Bauabschnitten um. Wichtig ist dabei eine langfristige Planung, damit spätere Arbeiten optimal auf bereits umgesetzte Maßnahmen abgestimmt sind.',
  },
  {
    q: 'Erhöht eine energetische Sanierung den Immobilienwert?',
    a: 'In vielen Fällen ja. Eine energieeffiziente Immobilie ist attraktiver für Käufer und Mieter, verursacht geringere Betriebskosten und erfüllt häufig modernere energetische Anforderungen.',
  },
  {
    q: 'Unterstützt Radex auch bei der Planung?',
    a: 'Ja. Wir begleiten Ihr Projekt von der ersten Bestandsaufnahme über die Planung bis zur Koordination aller beteiligten Gewerke und sorgen für einen strukturierten Ablauf.',
  },
  {
    q: 'Sind energetische Sanierungen förderfähig?',
    a: (
      <>
        Viele Maßnahmen können über staatliche Förderprogramme unterstützt werden. Welche Förderungen im Einzelfall
        möglich sind, hängt von der geplanten Maßnahme und den jeweils geltenden Voraussetzungen ab. Weitere
        Informationen finden Sie auf unserer Seite{' '}
        <Link to="/sanierung-foerderung-rhein-main">Sanierung Förderung</Link>.
      </>
    ),
  },
];

export default function EnergetischeSanierungLanding() {
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
        name: 'Energetische Sanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(
        faqsData.map((faq) => ({
          q: faq.q,
          a: typeof faq.a === 'string' ? faq.a : 'Viele Maßnahmen können über staatliche Förderprogramme unterstützt werden. Weitere Informationen finden Sie auf unserer Seite Sanierung Förderung.',
        })),
      ),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page sanierung-money-page energetische-sanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/energie-foerderung">Energie &amp; Förderung</Link>
              <span aria-hidden="true">↓</span>
              <span>Energetische Sanierung</span>
            </nav>
            <p className="br-hero-kicker">
              <Leaf size={16} strokeWidth={1.5} aria-hidden="true" /> Nachhaltig modernisieren und Energiekosten dauerhaft
              senken
            </p>
            <p className="br-hero-kicker">Energetische Sanierung im Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Energetische Sanierung
              <br />
              <span>Rhein-Main</span>
            </h1>
            <p className="br-hero-lead">
              Mehr Energieeffizienz, geringere Heizkosten und eine zukunftssichere Immobilie durch aufeinander
              abgestimmte Sanierungsmaßnahmen.
            </p>
            <p className="br-hero-text">
              Eine energetische Sanierung verbessert die Energieeffizienz Ihrer Immobilie nachhaltig. Durch die
              Kombination verschiedener Maßnahmen lassen sich Wärmeverluste reduzieren, Energiekosten senken und der
              Wohnkomfort deutlich steigern.
            </p>
            <p className="br-hero-text">
              Ob Einfamilienhaus, Mehrfamilienhaus oder Gewerbeimmobilie – wir begleiten Ihr Projekt von der ersten
              Planung bis zur Koordination aller beteiligten Fachbetriebe und entwickeln ein individuelles
              Sanierungskonzept.
            </p>
            <EnergetischeSanierungCTA isHero />
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
          aria-label="Energetische Sanierung einer Immobilie im Rhein-Main-Gebiet."
          title="Modernisiertes Wohnhaus mit gedämmter Fassade, neuen Fenstern und energieeffizienter Heiztechnik."
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Warum lohnt sich eine energetische Sanierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Steigende Energiekosten und höhere Anforderungen an Gebäude machen energetische Sanierungen zu einer
              sinnvollen Investition. Durch die gezielte Modernisierung der Gebäudehülle und der technischen
              Gebäudeausstattung lässt sich der Energieverbrauch dauerhaft reduzieren.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Gleichzeitig verbessert eine energetische Sanierung den Wohnkomfort, erhöht den Wert der Immobilie und
              schafft die Voraussetzungen für moderne Heizsysteme sowie zukünftige gesetzliche Anforderungen.
            </p>
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Was gehört zu einer energetischen Sanierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '16px' }}>
              Je nach Gebäude können unterschiedliche Maßnahmen sinnvoll kombiniert werden. Dazu gehören beispielsweise:
            </p>
            <ul className="br-seo-list" style={{ textAlign: 'left', maxWidth: '560px', margin: '0 auto' }}>
              {MASSNAHMEN_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} largeIcons />
        </div>
      </section>

      <QualityPromiseBlock intro="Bei energetischen Sanierungsprojekten achten wir besonders auf ganzheitliche Planung, abgestimmte Gewerke und transparente Projektabläufe." />

      <SectionTransition>
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen im Bereich der energetischen Sanierung.
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
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur gemeinsamen
        Abnahme Ihrer energetischen Sanierung.
      </SectionTransition>

      <HorizontalProcessTimeline title="Projektablauf" steps={processSteps} />

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Ihr Ansprechpartner für energetische Sanierungen</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Sie möchten Ihre Immobilie energieeffizient modernisieren und langfristig Energiekosten senken? Wir beraten
              Sie persönlich und entwickeln gemeinsam ein passendes Sanierungskonzept.
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
              <p>Senden Sie uns Fotos, Pläne oder vorhandene Angebote – wir geben Ihnen eine erste Einschätzung.</p>
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
        title="Was bringt eine energetische Sanierung wirklich?"
        description="Bernd erklärt, welche Maßnahmen eine energetische Sanierung umfasst, wie diese zusammenwirken und warum eine ganzheitliche Planung langfristig die besten Ergebnisse erzielt."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt die Vorteile einer energetischen Sanierung."
        duration="ca. 3 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Jetzt Ihre Immobilie energieeffizient modernisieren</h2>
            <p>
              Ob einzelne Maßnahmen oder eine umfassende energetische Sanierung – wir entwickeln gemeinsam mit Ihnen ein
              individuelles Konzept und koordinieren die Umsetzung aller beteiligten Fachbetriebe.
            </p>
            <EnergetischeSanierungCTA centered />
          </div>
        </div>
      </section>

      {energetischeSanierungLegacySections.length > 0 && (
        <SeoKnowledgeDrawer
          title="Weitere Informationen"
          sections={energetischeSanierungLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="energetische-sanierung-legacy-panel"
        />
      )}

      <SeoTocSection
        title="Unsere Leistungen im Bereich Energetische Sanierung"
        intro={energetischeSanierungSeoIntro}
        sections={energetischeSanierungSeoSections}
        showAllContent
        panelId="energetische-sanierung-seo-panel"
        ctaLabel="Kostenlose Beratung"
      />

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Passende Leistungen</h2>
          </div>
          <PremiumIconCards cards={energetischeSanierungSeoInternalLinks} linked largeIcons />
        </div>
      </section>

      <RadexLiveSection
        title="Radex Live – Einblicke in energetische Sanierungsprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Fassadendämmung, Heizungsmodernisierung, energetische Gebäudehülle und ganzheitliche Sanierungsplanung."
        projects={radexLiveProjects}
      />

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen" />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Häufig kombinierte Maßnahmen</h2>
          </div>
          <PremiumIconCards cards={kombinierteMassnahmenCards} largeIcons />
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Warum eine ganzheitliche Planung entscheidend ist</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '16px' }}>
              Viele Gebäude verlieren Energie nicht nur an einer Stelle. Werden einzelne Maßnahmen ohne Gesamtkonzept
              umgesetzt, entstehen häufig vermeidbare Mehrkosten oder technische Nachteile. Deshalb betrachten wir jede
              Immobilie als Gesamtsystem.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '16px' }}>
              Unsere Planung berücksichtigt unter anderem:
            </p>
            <ul className="br-seo-list" style={{ textAlign: 'left', maxWidth: '560px', margin: '0 auto 16px' }}>
              {PLANUNG_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              So entstehen Sanierungskonzepte, die technisch sinnvoll, wirtschaftlich und nachhaltig sind.
            </p>
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
            <h2 className="br-section-title">Nachhaltig modernisieren – dauerhaft profitieren</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Eine energetische Sanierung ist eine Investition in die Zukunft Ihrer Immobilie. Sie senkt langfristig
              Energiekosten, erhöht den Wohnkomfort und verbessert den Wert des Gebäudes. Mit einer durchdachten Planung
              und einer professionellen Umsetzung lassen sich einzelne Maßnahmen optimal miteinander verbinden und
              nachhaltig wirksame Ergebnisse erzielen.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex Objektmanagement begleitet Sie von der ersten Beratung über die Planung bis zur Koordination aller
              beteiligten Gewerke – zuverlässig, transparent und mit dem Blick auf eine wirtschaftliche und
              zukunftssichere Lösung.
            </p>
          </div>
        </div>
      </section>

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Starten Sie jetzt Ihre energetische Sanierung</h2>
            <p>
              Lassen Sie Ihre Immobilie professionell bewerten und entwickeln Sie gemeinsam mit unseren Experten ein
              individuelles Sanierungskonzept für mehr Energieeffizienz, niedrigere Betriebskosten und nachhaltigen
              Werterhalt.
            </p>
            <EnergetischeSanierungCTA centered />
          </div>
        </div>
      </section>
    </main>
  );
}
