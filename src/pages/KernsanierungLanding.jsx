import { useEffect } from 'react';
import {
  Building2,
  Home,
  SearchCheck,
  Workflow,
  Award,
  UserRound,
  MessagesSquare,
  BadgeEuro,
  CalendarClock,
  ShieldCheck,
  Sparkles,
  Hammer,
  ShieldAlert,
  Flame,
  Droplets,
  LayoutPanelTop,
  Grid3X3,
  PaintRoller,
  ClipboardCheck,
  KeyRound,
  PhoneCall,
  ClipboardList,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  Building,
  Store,
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
  SeoKnowledgeDrawer,
  RadexLiveSection,
  HorizontalProcessTimeline,
  SanierungOptionComparison,
  ResponsiveChecklistSection,
  BerndExplainsVideo,
} from '../components/landing/SharedLandingParts';
import {
  kernsanierungSeoIntro,
  kernsanierungSeoSections,
} from '../data/kernsanierungSeoContent';
import { kernsanierungLegacySections } from '../data/kernsanierungLegacyContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/kernsanierung-rhein-main';
const HERO_IMAGE = '/img/kernsanierung-rhein-main-bestandsimmobilie.webp';
const HERO_IMAGE_FALLBACK = '/img/kernsanierung-rhein-main-bestand-radex.webp';
const VIDEO_POSTER = '/img/bernd-kernsanierung-rhein-main.webp';
const SEO_IMAGE = '/img/kernsanierung-bestandsimmobilie-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Kernsanierung Rhein-Main | Haus & Wohnung grundlegend sanieren | Radex';
const META_DESCRIPTION =
  'Kernsanierung im Rhein-Main-Gebiet für Häuser, Wohnungen und Gewerbeimmobilien. Radex erneuert Bestandsimmobilien mit einem festen Ansprechpartner und koordinierter Projektabwicklung.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Generalunternehmer & Bauleitung', path: '/leistungen/generalunternehmer-bauleitung' },
  { name: 'Kernsanierung', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Generalunternehmer für Kernsanierungen',
  'SHK-Meisterkompetenz',
  'Koordination aller Gewerke',
  'Bestandsimmobilien im Rhein-Main',
  'Ein Ansprechpartner während des gesamten Projekts',
];

function KernsanierungCTA({ isHero = false, centered = false, primaryLabel = 'Kostenlose Beratung' }) {
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
    title: 'Objektbezogene Analyse',
    desc: 'Jede Kernsanierung beginnt mit einer gründlichen Bestandsaufnahme. Erst danach wird entschieden, welche Maßnahmen tatsächlich erforderlich sind.',
    icon: SearchCheck,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Von Rückbau über Gebäudetechnik bis zum Innenausbau werden sämtliche Arbeiten zentral organisiert und aufeinander abgestimmt.',
    icon: Workflow,
  },
  {
    title: 'SHK-Meisterkompetenz',
    desc: 'Heizung, Sanitär und Gebäudetechnik werden unter Meisterverantwortung geplant und in das Gesamtkonzept integriert.',
    icon: Award,
  },
  {
    title: 'Erfahrung mit Bestandsimmobilien',
    desc: 'Wir kennen die typischen Herausforderungen älterer Gebäude – von gewachsenen Grundrissen bis zu veralteten Installationen.',
    icon: Building2,
  },
  {
    title: 'Transparente Projektsteuerung',
    desc: 'Während der gesamten Bauphase erhalten Sie klare Informationen zum Projektstand sowie zu den nächsten Arbeitsschritten.',
    icon: ClipboardCheck,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Sie kommunizieren während der gesamten Kernsanierung mit einem festen Projektleiter, der sämtliche Abläufe koordiniert.',
    icon: UserRound,
  },
];

const qualityCards = [
  {
    title: 'Transparente Angebote',
    desc: 'Klare Leistungsbeschreibungen und nachvollziehbare Kalkulationen schaffen Planungssicherheit.',
    icon: BadgeEuro,
  },
  {
    title: 'Persönliche Projektleitung',
    desc: 'Ein fester Ansprechpartner begleitet Ihr Projekt von der Planung bis zur Fertigstellung.',
    icon: UserRound,
  },
  {
    title: 'Strukturierte Terminplanung',
    desc: 'Alle Arbeiten werden effizient geplant und mit den übrigen Gewerken abgestimmt.',
    icon: CalendarClock,
  },
  {
    title: 'Kontrollierte Ausführung',
    desc: 'Jeder Bauabschnitt wird sorgfältig geprüft und dokumentiert.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie erhalten regelmäßige Informationen über Baufortschritt und Projektstatus.',
    icon: MessagesSquare,
  },
  {
    title: 'Langlebige Qualität',
    desc: 'Fachgerechte Ausführung und abgestimmte Gewerke schaffen dauerhaft hochwertige Ergebnisse.',
    icon: Sparkles,
  },
];

const checklistItems = [
  'ältere Leitungen vollständig ersetzt werden müssen',
  'Elektroinstallationen nicht mehr heutigen Anforderungen entsprechen',
  'Heizung und Sanitär gleichzeitig erneuert werden sollen',
  'Böden, Wände und Decken bis auf den Aufbau geöffnet werden müssen',
  'eine Immobilie nach dem Kauf vollständig modernisiert werden soll',
  'eine geerbte Immobilie technisch überholt ist',
  'Grundrisse umfangreich verändert werden',
  'Schadstoffe oder Feuchtigkeit überprüft werden müssen',
  'mehrere Gewerke gleichzeitig betroffen sind',
  'eine langfristige technische Grundlage geschaffen werden soll',
];

const comparisonOptions = [
  {
    title: 'Komplettsanierung',
    desc: 'Eine Komplettsanierung modernisiert sämtliche vereinbarten Bereiche einer Immobilie. Viele Gewerke werden erneuert, ohne dass zwangsläufig tief in die technische oder bauliche Grundstruktur eingegriffen werden muss.',
    icon: Home,
    to: '/komplettsanierung-rhein-main',
    cta: 'Komplettsanierung ansehen',
  },
  {
    title: 'Kernsanierung',
    desc: 'Eine Kernsanierung geht deutlich weiter. Neben Oberflächen werden häufig auch Leitungen, Elektroinstallationen, Heizungs- und Sanitärtechnik, Bodenaufbauten, Innenwände und weitere zentrale Gebäudebestandteile erneuert. Welche Maßnahmen erforderlich sind, richtet sich immer nach dem tatsächlichen Zustand der Immobilie.',
    icon: Building2,
  },
];

const leistungenCards = [
  {
    title: 'Entkernung & Rückbau',
    desc: 'Vor dem Neuaufbau werden nicht mehr benötigte Bauteile, Bodenaufbauten, Decken, Verkleidungen und alte Installationen fachgerecht entfernt. So entsteht eine sichere Grundlage für die weiteren Arbeiten.',
    icon: Hammer,
  },
  {
    title: 'Schadstoffprüfung',
    desc: 'Vor umfangreichen Rückbauarbeiten sollte geprüft werden, ob Schadstoffe wie Asbest oder andere belastete Baustoffe vorhanden sind. Dadurch können notwendige Schutzmaßnahmen frühzeitig berücksichtigt werden.',
    icon: ShieldAlert,
    to: '/schadstoffsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Heizungsmodernisierung',
    desc: 'Im Rahmen einer Kernsanierung werden bestehende Heizungsanlagen geprüft und – sofern erforderlich – durch moderne Systeme ersetzt oder angepasst.',
    icon: Flame,
    to: '/heizung-sanitaer-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Sanitärinstallation',
    desc: 'Wasser-, Abwasser- und Sanitärinstallationen werden an den heutigen technischen Standard angepasst und in das neue Gebäudekonzept integriert.',
    icon: Droplets,
    to: '/sanitaerinstallation-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Trockenbau & Raumgestaltung',
    desc: 'Neue Raumaufteilungen, Vorsatzschalen, Decken und Trennwände schaffen moderne Grundrisse und flexible Nutzungsmöglichkeiten.',
    icon: LayoutPanelTop,
    to: '/trockenbau-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Innenausbau',
    desc: 'Nach Abschluss der technischen Arbeiten erfolgt der hochwertige Innenausbau mit Wand-, Decken- und Oberflächenarbeiten sowie dem Einbau von Türen und weiteren Ausbauelementen.',
    icon: Home,
    to: '/innenausbau-umbau-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bodenaufbau',
    desc: 'Beschädigte oder veraltete Bodenaufbauten werden erneuert und für den späteren Bodenbelag vorbereitet.',
    icon: Grid3X3,
  },
  {
    title: 'Wand- und Deckenflächen',
    desc: 'Nach den technischen Installationen werden Wände und Decken gespachtelt, verputzt und für die spätere Gestaltung vorbereitet.',
    icon: PaintRoller,
  },
  {
    title: 'Projektkoordination',
    desc: 'Alle beteiligten Gewerke werden zentral koordiniert. Dadurch greifen sämtliche Arbeiten sinnvoll ineinander und der Bauablauf bleibt übersichtlich.',
    icon: ClipboardCheck,
    to: '/bauleitung-projektsteuerung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bezugsfertige Übergabe',
    desc: 'Nach erfolgreicher Qualitätskontrolle wird die kernsanierte Immobilie gemeinsam mit Ihnen abgenommen und ordnungsgemäß übergeben.',
    icon: KeyRound,
  },
];

const processSteps = [
  {
    title: 'Persönliche Erstberatung',
    desc: 'Wir besprechen Ihr Sanierungsvorhaben, analysieren Ihre Ziele und beantworten erste Fragen rund um den Ablauf einer Kernsanierung.',
    icon: PhoneCall,
  },
  {
    title: 'Bestandsaufnahme',
    desc: 'Vor Ort prüfen wir die Bausubstanz, technische Installationen und den allgemeinen Zustand der Immobilie. Auf dieser Grundlage lässt sich der tatsächliche Sanierungsbedarf ermitteln.',
    icon: SearchCheck,
  },
  {
    title: 'Individuelle Planung',
    desc: 'Wir entwickeln ein auf Ihre Immobilie abgestimmtes Sanierungskonzept und koordinieren die erforderlichen Gewerke sowie den zeitlichen Ablauf.',
    icon: ClipboardList,
  },
  {
    title: 'Rückbau & Erneuerung',
    desc: 'Die notwendigen Rückbauarbeiten werden durchgeführt. Anschließend beginnen die technischen und baulichen Erneuerungsmaßnahmen in einer abgestimmten Reihenfolge.',
    icon: Hammer,
  },
  {
    title: 'Bauüberwachung',
    desc: 'Während der gesamten Kernsanierung überwachen wir Qualität, Termine und die Koordination aller beteiligten Fachbetriebe.',
    icon: ShieldCheck,
  },
  {
    title: 'Abnahme & Übergabe',
    desc: 'Nach Abschluss aller vereinbarten Leistungen erfolgt die gemeinsame Endabnahme und die dokumentierte Übergabe Ihrer modernisierten Immobilie.',
    icon: CircleCheckBig,
  },
];

const typischeProjekteCards = [
  {
    title: 'Altbau',
    desc: 'Umfassende Erneuerung älterer Wohngebäude mit modernem technischen Standard und zeitgemäßer Raumgestaltung.',
    icon: Building2,
  },
  {
    title: 'Einfamilienhaus',
    desc: 'Grundlegende Modernisierung von Bestandsimmobilien vor dem Einzug oder zur langfristigen Werterhaltung.',
    icon: Home,
  },
  {
    title: 'Mehrfamilienhaus',
    desc: 'Koordination umfangreicher Sanierungsmaßnahmen bei Wohngebäuden mit mehreren Einheiten.',
    icon: Building,
  },
  {
    title: 'Gewerbeimmobilie',
    desc: 'Kernsanierungen für Büros, Praxen, Ladenflächen und weitere Gewerbeobjekte mit abgestimmter Projektplanung.',
    icon: Store,
  },
];

const videoTranscript =
  'Eine Kernsanierung geht weit über eine klassische Renovierung hinaus. Je nach Zustand der Immobilie werden technische Installationen, Bodenaufbauten und weitere Gebäudebestandteile grundlegend erneuert. Durch eine strukturierte Planung und die Koordination aller Gewerke entsteht Schritt für Schritt eine moderne und zukunftsfähige Immobilie.';

const faqsData = [
  {
    q: 'Was bedeutet Kernsanierung?',
    a: 'Eine Kernsanierung ist eine tiefgreifende Sanierung, bei der eine Immobilie technisch und baulich grundlegend erneuert wird. Dazu können Rückbau, Leitungen, Heizung, Sanitär, Elektrokoordination, Innenausbau, Bodenaufbau, Wände, Decken und Schadstoffprüfung gehören.',
  },
  {
    q: 'Wann ist eine Kernsanierung notwendig?',
    a: 'Eine Kernsanierung ist sinnvoll, wenn mehrere zentrale Bereiche technisch überholt sind oder wenn ein Gebäude tiefgreifend neu aufgebaut werden soll. Typische Gründe sind alte Leitungen, veraltete Elektrostruktur, Feuchtigkeit, Schadstoffverdacht oder Sanierung nach Kauf.',
  },
  {
    q: 'Was ist der Unterschied zwischen Kernsanierung und Komplettsanierung?',
    a: 'Eine Komplettsanierung erneuert viele Bereiche einer Immobilie, muss aber nicht bis auf die technische oder bauliche Grundlage gehen. Eine Kernsanierung ist tiefer und umfasst häufig starken Rückbau, Erneuerung von Installationen, Boden- und Wandaufbauten sowie technische Grundsysteme.',
  },
  {
    q: 'Kann Radex ein Haus kernsanieren?',
    a: 'Ja. Radex koordiniert Kernsanierungen von Häusern im Rhein-Main-Gebiet – von Rückbau über Heizung und Sanitär bis zum Innenausbau und zur fachgerechten Übergabe.',
  },
  {
    q: 'Kann Radex eine Wohnung kernsanieren?',
    a: 'Ja. Radex begleitet Wohnungskernsanierungen vor Einzug, nach Kauf oder nach langer Nutzung. Dabei werden Bad, Küche, Böden, Wände, Leitungen, Elektrokoordination und mögliche Schadstoffthemen geplant.',
  },
  {
    q: 'Was kostet eine Kernsanierung?',
    a: 'Die Kosten hängen von Objektgröße, Zustand, Rückbauumfang, Leitungen, Heizung, Bad, Elektrokoordination, Innenausbau, Materialwahl und energetischen Maßnahmen ab. Radex erstellt nach Bestandsaufnahme ein nachvollziehbares Angebot.',
  },
];

const radexLiveProjects = [
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'LIVE',
    title: 'Altbau Kernsanierung',
    location: 'Offenbach am Main',
    desc: 'Umfassende technische Erneuerung eines älteren Wohngebäudes – koordiniert von Rückbau bis Innenausbau.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnzimmer.webp',
    badge: 'Vorher & Nachher',
    title: 'Einfamilienhaus nach Hauskauf',
    location: 'Rodgau',
    desc: 'Kernsanierung vor dem Einzug: Leitungen, Heizung, Sanitär und Innenausbau aus einer Hand.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Gewerbeimmobilie kernsanieren',
    location: 'Frankfurt am Main',
    desc: 'Bürofläche mit neuer Gebäudetechnik, Grundrissanpassung und hochwertigem Innenausbau.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/bad1.webp',
    badge: 'Abgeschlossen',
    title: 'Wohnung technisch neu aufgebaut',
    location: 'Darmstadt',
    desc: 'Kernsanierung einer Bestandswohnung mit vollständiger Erneuerung der Installationen.',
    cta: 'Projekt ansehen',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Wann ist eine Kernsanierung die richtige Entscheidung?',
  description:
    'Bernd erklärt, wann eine Kernsanierung sinnvoll ist, welche Arbeiten dazugehören und wie sich der Ablauf von einer klassischen Komplettsanierung unterscheidet.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function KernsanierungLanding() {
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
        name: 'Kernsanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page kernsanierung-page">
      {/* Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/leistungen/generalunternehmer-bauleitung">Generalunternehmer & Bauleitung</Link>
              <span aria-hidden="true">↓</span>
              <span>Kernsanierung</span>
            </nav>
            <p className="br-hero-kicker">
              <Building2 size={16} strokeWidth={1.5} aria-hidden="true" /> Grundlegende Gebäudesanierung für
              Bestandsimmobilien
            </p>
            <p className="br-hero-kicker">Kernsanierung im Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Kernsanierung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Wenn Ihre Immobilie technisch und baulich neu aufgebaut werden muss.
            </p>
            <p className="br-hero-text">
              Nicht jede Immobilie benötigt eine Kernsanierung. Sind jedoch Leitungen, Gebäudetechnik, Innenwände,
              Bodenaufbauten oder große Teile der Bausubstanz veraltet, reicht eine oberflächliche Modernisierung häufig
              nicht mehr aus.
            </p>
            <p className="br-hero-text">
              Radex Objektmanagement plant und koordiniert Kernsanierungen für Häuser, Wohnungen und Gewerbeimmobilien im
              gesamten Rhein-Main-Gebiet. Sie erhalten einen festen Ansprechpartner, während sämtliche Gewerke
              professionell aufeinander abgestimmt werden.
            </p>
            <KernsanierungCTA isHero />
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
          aria-label="Professionelle Kernsanierung einer Bestandsimmobilie im Rhein-Main-Gebiet."
          title="Kernsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      {/* Einführung */}
      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Eine Kernsanierung schafft eine neue technische Grundlage.</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Mit zunehmendem Alter einer Immobilie reichen einzelne Renovierungsarbeiten oft nicht mehr aus. Alte
              Leitungen, veraltete Elektroinstallationen, nicht mehr zeitgemäße Heiztechnik oder beschädigte Bauteile
              können dazu führen, dass größere Bereiche vollständig erneuert werden müssen.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Im Gegensatz zu einer klassischen Modernisierung wird bei einer Kernsanierung zunächst geprüft, welche
              Bauteile erhalten werden können und welche Bereiche grundlegend erneuert werden sollten. Erst auf dieser
              Basis entsteht ein neues technisches und bauliches Fundament für die spätere Nutzung.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Als <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link> übernimmt Radex die Planung, die
              Koordination aller beteiligten Gewerke und begleitet Ihr Projekt von der ersten Bestandsaufnahme bis zur
              fertigen Übergabe. Gerade bei älteren Häusern, Wohnungen oder Bestandsimmobilien sorgt diese strukturierte
              Vorgehensweise für einen sicheren und nachvollziehbaren Ablauf – abgestimmt mit{' '}
              <Link to="/heizung-sanitaer-rhein-main">Heizung & Sanitär</Link>,{' '}
              <Link to="/innenausbau-umbau-rhein-main">Innenausbau</Link> und{' '}
              <Link to="/schadstoffsanierung-rhein-main">Schadstoffsanierung</Link>, wo erforderlich.
            </p>
          </div>
        </div>
      </section>

      <SanierungOptionComparison title="Kernsanierung oder Komplettsanierung?" options={comparisonOptions} />

      <ResponsiveChecklistSection
        title="Wann ist eine Kernsanierung sinnvoll?"
        intro="Eine Kernsanierung ist häufig sinnvoll, wenn:"
        items={checklistItems}
      />

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p className="br-section-subtitle br-section-subtitle--wide text-center" style={{ marginBottom: 0 }}>
            Diese Situationen nennt Radex als typische Anwendungsfälle einer Kernsanierung im Bestand. Ob eine{' '}
            <Link to="/komplettsanierung-rhein-main">Komplettsanierung</Link> oder{' '}
            <Link to="/teilsanierung-rhein-main">Teilsanierung</Link> ausreicht, prüfen wir in der Bestandsaufnahme –
            unterstützt durch <Link to="/bauleitung-projektsteuerung-rhein-main">Bauleitung & Projektsteuerung</Link>.
          </p>
        </div>
      </section>

      {/* Warum Radex */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} largeIcons />
        </div>
      </section>

      {/* Qualitätsversprechen */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Qualitätsversprechen</h2>
          </div>
          <PremiumIconCards cards={qualityCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen im Rahmen einer Kernsanierung – von
        Entkernung und Schadstoffprüfung bis zu Gebäudetechnik, Innenausbau und Projektkoordination.
      </SectionTransition>

      {/* Unsere Leistungen */}
      <section id="leistungen" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <PremiumIconCards cards={leistungenCards} linked largeIcons />
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur fertigen
        Übergabe Ihrer kernsanierten Immobilie.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstberatung bis zur Abnahme – so begleiten wir Ihre Kernsanierung Schritt für Schritt."
        steps={processSteps}
      />

      {/* Typische Projekte */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Projekte für eine Kernsanierung</h2>
          </div>
          <PremiumIconCards cards={typischeProjekteCards} largeIcons />
        </div>
      </section>

      {/* Ansprechpartner */}
      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              <strong>Ihr Ansprechpartner für Kernsanierungen</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Von der ersten Besichtigung bis zur fertigen Übergabe begleitet Sie unser Projektteam durch sämtliche
              Bauphasen. Wir koordinieren alle Gewerke und sorgen für einen transparenten Projektablauf.
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
              <p>info@radex-objektmanagement.de</p>
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
                Senden Sie uns Fotos oder Pläne Ihrer Immobilie. Wir prüfen Ihr Vorhaben und geben Ihnen eine erste
                unverbindliche Einschätzung.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
                WhatsApp öffnen
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#kontakt" className="btn br-btn-orange">
              Kostenlose Erstberatung
            </a>
          </div>
        </div>
      </section>

      <BerndExplainsVideo
        title="Wann ist eine Kernsanierung die richtige Entscheidung?"
        description="Bernd erklärt, wann eine Kernsanierung sinnvoll ist, welche Arbeiten dazugehören und wie sich der Ablauf von einer klassischen Komplettsanierung unterscheidet."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf einer Kernsanierung im Rhein-Main-Gebiet."
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      {/* CTA */}
      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Ist Ihre Immobilie bereit für eine Kernsanierung?</h2>
            <p>
              Lassen Sie Ihre Immobilie professionell bewerten. Gemeinsam analysieren wir den Zustand Ihres Gebäudes und
              entwickeln ein individuelles Konzept für eine fachgerechte Kernsanierung – transparent, strukturiert und aus
              einer Hand.
            </p>
            <KernsanierungCTA centered />
          </div>
        </div>
      </section>

      <SeoKnowledgeDrawer
        title="Weitere Informationen"
        sections={kernsanierungLegacySections}
        ctaLabel="Kostenlose Beratung"
        ctaHref="#kontakt"
        panelId="kernsanierung-legacy-panel"
      />

      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Kernsanierung"
        intro={kernsanierungSeoIntro}
        sections={kernsanierungSeoSections}
        ctaLabel="Kostenlose Erstberatung"
        ctaHref="#kontakt"
        panelId="kernsanierung-seo-panel"
        showToc
      />

      {/* Abschluss-CTA */}
      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Ist eine Kernsanierung die richtige Lösung für Ihre Immobilie?</h2>
            <p>
              Lassen Sie Ihre Immobilie unverbindlich bewerten. Gemeinsam analysieren wir den aktuellen Zustand und
              besprechen, welche Maßnahmen für eine wirtschaftliche und nachhaltige Kernsanierung sinnvoll sind.
            </p>
            <KernsanierungCTA centered primaryLabel="Kostenlose Erstberatung" />
          </div>
        </div>
      </section>

      {/* SEO-Bild */}
      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '920px' }}>
          <img
            src={SEO_IMAGE}
            alt="Planung einer Kernsanierung für eine Bestandsimmobilie im Rhein-Main-Gebiet."
            width={1400}
            height={933}
            loading="lazy"
            decoding="async"
            className="br-seo-inline-image"
          />
        </div>
      </section>

      <RadexLiveSection
        title="Radex Live – Einblicke in Kernsanierungsprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Altbau-Kernsanierungen, Einfamilienhäuser nach Hauskauf, Gewerbeimmobilien und technische Gebäudeerneuerung."
        projects={radexLiveProjects}
      />
    </main>
  );
}
