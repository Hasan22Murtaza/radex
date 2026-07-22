import { useEffect, useMemo } from 'react';
import {
  House,
  Building,
  BriefcaseBusiness,
  UserRoundCheck,
  Network,
  BadgeCheck,
  ClipboardCheck,
  MessagesSquare,
  Building2,
  Hammer,
  PanelsTopLeft,
  Bath,
  Flame,
  Zap,
  Layers3,
  PaintRoller,
  Grid3X3,
  DoorOpen,
  KeyRound,
  PhoneCall,
  SearchCheck,
  ClipboardList,
  CalendarRange,
  HardHat,
  CircleCheckBig,
  LayoutGrid,
  Wrench,
  Palette,
  DoorClosed,
  AlertTriangle,
  Phone,
  Mail,
  MessageCircle,
  Home,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import '../data/legacyServiceStyles.css';
import '../data/migratedServicePage.css';
import useSeo, { buildBreadcrumbSchema, buildServiceSchema } from '../useSeo';
import ReviewsMarquee from '../components/ReviewsMarquee';
import {
  PremiumIconCards,
  SectionTransition,
  SeoKnowledgeDrawer,
  RadexLiveSection,
  HorizontalProcessTimeline,
  ResponsiveChecklistSection,
  BerndExplainsVideo,
  MoneyPageQualityGrid,
} from '../components/landing/SharedLandingParts';
import {
  komplettsanierungSeoIntro,
  komplettsanierungSeoSections,
} from '../data/komplettsanierungSeoContent';
import { komplettsanierungLegacySections } from '../data/komplettsanierungLegacyContent';

const PAGE_PATH = '/komplettsanierung-rhein-main';
const HERO_IMAGE = '/img/komplettsanierung-rhein-main-haus-wohnung.webp';
const HERO_IMAGE_FALLBACK = '/img/sanierung-service-komplett.webp';
const VIDEO_POSTER = '/img/bernd-komplettsanierung-rhein-main.webp';
const SEO_IMAGE = '/img/komplettsanierung-bestandsimmobilie-planung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Komplettsanierung Rhein-Main | Haus & Wohnung mit Radex';
const META_DESCRIPTION =
  'Komplettsanierung im Rhein-Main-Gebiet für Haus, Wohnung und Gewerbe. Radex koordiniert alle Gewerke – mit einem Ansprechpartner von der Planung bis zur Übergabe.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Generalunternehmer & Bauleitung', path: '/leistungen/generalunternehmer-bauleitung' },
  { name: 'Komplettsanierung', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Ein fester Ansprechpartner',
  'Koordination aller beteiligten Gewerke',
  'SHK-Meisterkompetenz',
  'Erfahrung mit Bestandsimmobilien',
  'Regionale Betreuung im Rhein-Main-Gebiet',
];

const LEGACY_ID_MAP = {
  'komplettsanierung-eines-hauses-wenn-technik-komfort-und-raumaufteilung-zusammenk': 'komplettsanierung-haus',
  'komplettsanierung-einer-wohnung-bezugsfertig-vermietbar-oder-wertsteigernd-moder': 'komplettsanierung-wohnung',
};

function KomplettsanierungCTA({
  isHero = false,
  centered = false,
  primaryLabel = 'Kostenlose Erstberatung',
  secondaryLabel = 'Projektunterlagen senden',
}) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href="#kontakt" className="btn br-btn-orange">
        {primaryLabel}
      </a>
      <a href="#kontakt" className="btn br-btn-outline-orange">
        {secondaryLabel}
      </a>
    </div>
  );
}

const checklistItems = [
  'Sie ein Haus oder eine Wohnung vor dem Einzug modernisieren möchten.',
  'mehrere Räume und technische Bereiche gleichzeitig betroffen sind.',
  'Bad, Küche, Böden, Wände und Türen erneuert werden sollen.',
  'Wasser-, Abwasser- oder Heizungsinstallationen geprüft werden müssen.',
  'die Raumaufteilung verändert werden soll.',
  'eine Bestandsimmobilie technisch nicht mehr heutigen Anforderungen entspricht.',
  'nach einem Mieterwechsel eine umfassende Modernisierung geplant ist.',
  'eine geerbte Immobilie wieder nutzbar oder vermietbar gemacht werden soll.',
  'energetische Maßnahmen mit dem Innenausbau verbunden werden sollen.',
  'Sie nicht selbst verschiedene Handwerksbetriebe koordinieren möchten.',
];

const propertyIntentCards = [
  {
    title: 'Haus komplett sanieren',
    desc: 'Ihr Haus soll technisch, funktional und gestalterisch modernisiert werden? Wir koordinieren die erforderlichen Arbeiten und stimmen Gebäudetechnik, Innenausbau und Oberflächen aufeinander ab.',
    icon: House,
    href: '#komplettsanierung-haus',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Wohnung komplett sanieren',
    desc: 'Ob vor dem Einzug, nach einem Mieterwechsel oder zur Wertsteigerung: Wir organisieren die vollständige Modernisierung Ihrer Wohnung bis zur bezugsfertigen Übergabe.',
    icon: Building,
    href: '#komplettsanierung-wohnung',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Gewerbeimmobilie komplett sanieren',
    desc: 'Wir modernisieren Büros, Praxen, Verkaufsflächen und weitere Gewerbeobjekte passend zur geplanten Nutzung und zum erforderlichen Zeitrahmen.',
    icon: BriefcaseBusiness,
    to: '/gewerbesanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const whyRadexCards = [
  {
    title: 'Ein Ansprechpartner',
    desc: 'Sie müssen nicht selbst mit jedem Handwerksbetrieb Termine und Arbeitsschritte abstimmen. Die zentrale Projektkommunikation läuft über Radex.',
    icon: UserRoundCheck,
  },
  {
    title: 'Koordinierte Gewerke',
    desc: 'Wir bringen Rückbau, Gebäudetechnik, Innenausbau und Oberflächen in eine fachlich sinnvolle Reihenfolge.',
    icon: Network,
  },
  {
    title: 'SHK-Meisterkompetenz',
    desc: 'Heizung, Sanitär und Gebäudetechnik werden bei Radex unter Meisterverantwortung geführt. Das ist besonders wichtig, wenn Leitungen, Bad, Wärmeversorgung und Warmwasser Teil der Sanierung sind.',
    icon: BadgeCheck,
  },
  {
    title: 'Objektbezogene Planung',
    desc: 'Wir arbeiten nicht mit starren Sanierungspaketen. Der tatsächliche Zustand der Immobilie und Ihr gewünschtes Ergebnis bestimmen den Leistungsumfang.',
    icon: ClipboardCheck,
  },
  {
    title: 'Transparente Abstimmung',
    desc: 'Sie erhalten verständliche Informationen über den Projektstand, erforderliche Entscheidungen und mögliche Befunde im Bestand.',
    icon: MessagesSquare,
  },
  {
    title: 'Erfahrung mit Bestandsimmobilien',
    desc: 'Bei älteren Immobilien können nach dem Öffnen von Bauteilen zusätzliche Themen sichtbar werden. Wir berücksichtigen solche Schnittstellen bereits in der Planung und ordnen neue Befunde fachlich ein.',
    icon: Building2,
  },
];

const leistungenCards = [
  {
    title: 'Rückbau & Entkernung',
    desc: 'Nicht mehr benötigte Einbauten, Oberflächen und Bauteile werden kontrolliert zurückgebaut. Dadurch entsteht eine saubere Grundlage für die weitere Sanierung.',
    icon: Hammer,
    to: '/abbruch-rueckbau-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Grundrissanpassung',
    desc: 'Wände, Türen und Raumaufteilungen können an neue Nutzungswünsche angepasst werden, sofern die baulichen Voraussetzungen dies zulassen.',
    icon: PanelsTopLeft,
    to: '/wand-entfernen-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Sanitärmodernisierung',
    desc: 'Bäder, Leitungen und sanitäre Anschlüsse werden passend zum Gesamtkonzept erneuert und mit den übrigen Gewerken abgestimmt.',
    icon: Bath,
    to: '/sanitaerinstallation-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Heizungs- und Gebäudetechnik',
    desc: 'Bestehende technische Anlagen werden geprüft und bei Bedarf modernisiert, damit die Immobilie zuverlässig und zeitgemäß genutzt werden kann.',
    icon: Flame,
    to: '/heizung-sanitaer-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Elektroarbeiten',
    desc: 'Elektroinstallationen, Leitungen, Schalter, Steckdosen und Beleuchtung werden entsprechend dem geplanten Nutzungsumfang berücksichtigt und koordiniert.',
    icon: Zap,
  },
  {
    title: 'Trockenbau',
    desc: 'Neue Raumstrukturen, Vorsatzschalen, Decken und Installationsverkleidungen werden fachgerecht hergestellt.',
    icon: Layers3,
    to: '/trockenbau-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Wand- und Deckenflächen',
    desc: 'Wände und Decken werden vorbereitet, ausgebessert, verputzt, gespachtelt oder gestrichen.',
    icon: PaintRoller,
  },
  {
    title: 'Bodenarbeiten',
    desc: 'Bestehende Bodenbeläge können entfernt, Untergründe vorbereitet und neue Bodenlösungen eingebaut werden.',
    icon: Grid3X3,
  },
  {
    title: 'Türen & Innenausbau',
    desc: 'Innentüren, Zargen, Verkleidungen und weitere Ausbauleistungen werden in das Gesamtkonzept integriert.',
    icon: DoorOpen,
    to: '/innenausbau-umbau-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bezugsfertige Übergabe',
    desc: 'Nach Abschluss der Arbeiten wird das Objekt kontrolliert, dokumentiert und in einem abgestimmten Zustand übergeben.',
    icon: KeyRound,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Wir besprechen Ihre Immobilie, den aktuellen Zustand und das gewünschte Ergebnis. Fotos, Grundrisse und vorhandene Unterlagen helfen bei einer ersten Einschätzung.',
    icon: PhoneCall,
  },
  {
    title: 'Besichtigung & Bestandsaufnahme',
    desc: 'Vor Ort prüfen wir die relevanten Gebäudebereiche und klären, welche Maßnahmen für die geplante Komplettsanierung sinnvoll sind.',
    icon: SearchCheck,
  },
  {
    title: 'Sanierungskonzept & Angebot',
    desc: 'Wir definieren den Leistungsumfang, ordnen die Gewerke und erstellen eine nachvollziehbare Planung mit den vereinbarten Arbeiten.',
    icon: ClipboardList,
  },
  {
    title: 'Termin- und Ablaufplanung',
    desc: 'Die einzelnen Bauabschnitte werden in eine sinnvolle Reihenfolge gebracht. Lieferzeiten, Trocknungszeiten und technische Abhängigkeiten werden berücksichtigt.',
    icon: CalendarRange,
  },
  {
    title: 'Umsetzung & Koordination',
    desc: 'Radex koordiniert die beteiligten Fachbetriebe, begleitet die Ausführung und informiert Sie über wichtige Projektstände.',
    icon: HardHat,
  },
  {
    title: 'Kontrolle & Übergabe',
    desc: 'Nach Abschluss der vereinbarten Leistungen erfolgt eine gemeinsame Kontrolle. Restpunkte werden dokumentiert und geordnet abgeschlossen.',
    icon: CircleCheckBig,
  },
];

const scopeFactorCards = [
  {
    title: 'Zustand der Immobilie',
    desc: 'Je älter oder stärker beansprucht das Gebäude ist, desto mehr Bauteile und technische Bereiche müssen geprüft werden.',
    icon: Home,
  },
  {
    title: 'Größe und Anzahl der Räume',
    desc: 'Wohn- und Nutzfläche beeinflussen Materialbedarf, Bauzeit und die Zahl der erforderlichen Arbeitsschritte.',
    icon: LayoutGrid,
  },
  {
    title: 'Technische Installationen',
    desc: 'Der Zustand von Heizung, Sanitär, Elektro und Leitungen kann den Sanierungsumfang erheblich verändern.',
    icon: Wrench,
  },
  {
    title: 'Gewünschter Ausstattungsstandard',
    desc: 'Materialien, Oberflächen, Sanitärausstattung und individuelle Ausbauwünsche wirken sich auf das Gesamtkonzept aus.',
    icon: Palette,
  },
  {
    title: 'Änderungen am Grundriss',
    desc: 'Neue Raumaufteilungen, Wandöffnungen oder Türversetzungen erfordern zusätzliche Planung und Prüfung.',
    icon: DoorClosed,
  },
  {
    title: 'Befunde im Bestand',
    desc: 'Verdeckte Schäden oder Schadstoffe können erst nach dem Öffnen von Bauteilen sichtbar werden und zusätzliche Maßnahmen erforderlich machen.',
    icon: AlertTriangle,
  },
];

const radexLiveProjects = [
  {
    image: '/img/sanierung-service-haus.webp',
    badge: 'LIVE',
    title: 'Komplettsanierung Einfamilienhaus',
    location: 'Rodgau',
    desc: 'Koordinierte Modernisierung von Technik, Innenausbau und Oberflächen in einem Bestandshaus.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'Vorher & Nachher',
    title: 'Wohnungssanierung vor dem Einzug',
    location: 'Frankfurt am Main',
    desc: 'Bad, Böden, Wände und technische Anpassungen in einem abgestimmten Gesamtprojekt.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/renov1.webp',
    badge: 'LIVE',
    title: 'Bestandsimmobilie modernisieren',
    location: 'Darmstadt',
    desc: 'Rückbau, Gebäudetechnik und Innenausbau koordiniert aus einer Hand.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buero1.webp',
    badge: 'Abgeschlossen',
    title: 'Gewerbeobjekt komplett sanieren',
    location: 'Offenbach am Main',
    desc: 'Modernisierung einer Gewerbefläche mit abgestimmter Termin- und Gewerkeplanung.',
    cta: 'Projekt ansehen',
  },
];

const videoTranscript =
  'Bei einer Komplettsanierung werden mehrere Bereiche einer Immobilie gemeinsam betrachtet. Es geht also nicht nur um neue Böden oder frische Wände. Je nach Zustand können auch Sanitär, Heizung, Elektro, Trockenbau und die Raumaufteilung dazugehören. Wichtig ist, dass alle Gewerke in der richtigen Reihenfolge arbeiten und ein Ansprechpartner den Überblick behält.';

export default function KomplettsanierungLanding() {
  const legacySections = useMemo(
    () =>
      komplettsanierungLegacySections.map((section) => ({
        ...section,
        id: LEGACY_ID_MAP[section.id] || section.id,
      })),
    [],
  );

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
        name: 'Komplettsanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page komplettsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/leistungen/generalunternehmer-bauleitung">Generalunternehmer & Bauleitung</Link>
              <span aria-hidden="true">↓</span>
              <span>Komplettsanierung</span>
            </nav>
            <p className="br-hero-kicker">
              <House size={16} strokeWidth={1.5} aria-hidden="true" /> Komplettsanierung für Haus, Wohnung und Gewerbe
            </p>
            <p className="br-hero-kicker">Komplettsanierung im Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Komplettsanierung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Alle notwendigen Arbeiten koordiniert aus einer Hand – mit einem festen Ansprechpartner für Ihr gesamtes
              Sanierungsprojekt.
            </p>
            <p className="br-hero-text">
              Sie möchten Ihre Immobilie nicht nur oberflächlich renovieren, sondern technisch, funktional und optisch
              umfassend modernisieren? Radex plant und koordiniert Ihre Komplettsanierung von der Bestandsaufnahme bis
              zur fertigen Übergabe.
            </p>
            <p className="br-hero-text">
              Wir stimmen Rückbau, Gebäudetechnik, Innenausbau und Oberflächen sinnvoll aufeinander ab. Dadurch müssen
              Sie nicht selbst unterschiedliche Handwerksbetriebe organisieren und behalten dennoch jederzeit den
              Überblick.
            </p>
            <KomplettsanierungCTA
              isHero
              primaryLabel="Komplettsanierung anfragen"
              secondaryLabel="Kostenlose Erstberatung"
            />
            <ul className="br-hero-trust-list" aria-label="Vertrauenssignale">
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
          aria-label="Komplettsanierung eines Hauses im Rhein-Main-Gebiet mit Radex Objektmanagement"
          title="Komplettsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Ihre Immobilie soll vollständig modernisiert werden?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Eine Komplettsanierung ist sinnvoll, wenn mehrere Bereiche einer Immobilie gleichzeitig erneuert werden
              sollen. Statt Bad, Leitungen, Heizung, Innenausbau, Böden und Oberflächen nacheinander durch verschiedene
              Unternehmen bearbeiten zu lassen, werden die erforderlichen Maßnahmen als gemeinsames Projekt geplant.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Das ist besonders hilfreich, wenn Sie ein Haus oder eine Wohnung gekauft oder geerbt haben, eine Immobilie
              vor dem Einzug modernisieren möchten oder nach vielen Jahren ein größerer Sanierungsbedarf entstanden ist.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex übernimmt die Koordination der beteiligten Fachbereiche als{' '}
              <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link>. Sie erhalten einen zentralen
              Ansprechpartner, der den Ablauf plant, Schnittstellen berücksichtigt und dafür sorgt, dass die einzelnen
              Arbeiten in der richtigen Reihenfolge ausgeführt werden.{' '}
              <Link to="/bauleitung-projektsteuerung-rhein-main">Bauleitung und Projektsteuerung</Link> sowie{' '}
              <Link to="/heizung-sanitaer-rhein-main">Heizung & Sanitär</Link> werden dabei mit eingeplant.
            </p>
            <div
              className="br-section-subtitle br-section-subtitle--wide"
              style={{
                marginTop: '24px',
                padding: '20px 24px',
                background: '#fff7ed',
                borderRadius: '12px',
                border: '1px solid #fed7aa',
                textAlign: 'left',
              }}
            >
              <strong>Kurzer Orientierungshinweis:</strong> Komplettsanierung bedeutet nicht automatisch Kernsanierung.
              Bei einer Komplettsanierung werden alle für Ihr Projekt relevanten Bereiche umfassend modernisiert.
              Erhaltenswerte Bauteile können bestehen bleiben. Eine{' '}
              <Link to="/kernsanierung-rhein-main">Kernsanierung</Link> greift dagegen wesentlich tiefer in die
              Gebäudesubstanz und die technischen Installationen ein. Welche Sanierungstiefe erforderlich ist, wird nach
              einer objektbezogenen Bestandsaufnahme festgelegt. Bei Bedarf prüfen wir auch{' '}
              <Link to="/schadstoffsanierung-rhein-main">Schadstoffthemen</Link> vor dem Rückbau.
            </div>
          </div>
        </div>
      </section>

      <ResponsiveChecklistSection
        title="Passt eine Komplettsanierung zu Ihrem Vorhaben?"
        intro="Eine Komplettsanierung kann die passende Lösung sein, wenn:"
        items={checklistItems}
        withCircleCheck
      />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Immobilie möchten Sie komplett sanieren?</h2>
          </div>
          <PremiumIconCards cards={propertyIntentCards} linked largeIcons />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex für Ihre Komplettsanierung?</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} largeIcons />
        </div>
      </section>

      <MoneyPageQualityGrid />

      <SectionTransition>
        Im nächsten Abschnitt finden Sie einen Überblick über typische Leistungen einer Komplettsanierung – von Rückbau
        und Grundrissanpassung bis zur bezugsfertigen Übergabe. Eine gezielte{' '}
        <Link to="/teilsanierung-rhein-main">Teilsanierung</Link> kann sinnvoll sein, wenn nur einzelne Bereiche
        modernisiert werden sollen.
      </SectionTransition>

      <section id="leistungen" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <PremiumIconCards cards={leistungenCards} linked largeIcons />
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der Erstberatung bis zur gemeinsamen
        Übergabe Ihrer modernisierten Immobilie.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstberatung bis zur fertigen Übergabe – so begleiten wir Ihre Komplettsanierung Schritt für Schritt."
        steps={processSteps}
      />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Wovon hängt der Umfang einer Komplettsanierung ab?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Der konkrete Umfang einer Komplettsanierung lässt sich nicht pauschal festlegen. Entscheidend sind
              insbesondere:
            </p>
          </div>
          <PremiumIconCards cards={scopeFactorCards} largeIcons />
        </div>
      </section>

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              <strong>Ihr Team für Komplettsanierungen</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Sie planen die umfassende Sanierung eines Hauses, einer Wohnung oder eines Gewerbeobjekts? Unser
              Projektteam unterstützt Sie bei der ersten Einschätzung, der Bestandsaufnahme und der Koordination der
              erforderlichen Arbeiten.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Senden Sie uns vorhandene Grundrisse, Fotos und eine kurze Beschreibung Ihres Vorhabens. So können wir uns
              gezielt auf das erste Gespräch vorbereiten.
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
                Senden Sie uns Bilder oder Unterlagen zu Ihrer Immobilie für eine erste unverbindliche Einschätzung.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
                WhatsApp öffnen
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#kontakt" className="btn br-btn-orange">
              Komplettsanierung besprechen
            </a>
          </div>
        </div>
      </section>

      <BerndExplainsVideo
        title="Was gehört zu einer Komplettsanierung?"
        description="Bernd erklärt, wann eine Komplettsanierung sinnvoll ist, welche Gewerke beteiligt sein können und warum eine klare Reihenfolge der Arbeiten entscheidend ist."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf einer Komplettsanierung im Rhein-Main-Gebiet"
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Ihre Immobilie soll vollständig modernisiert werden?</h2>
            <p>
              Radex Objektmanagement plant und koordiniert Ihre Komplettsanierung im Rhein-Main-Gebiet. Sie erhalten einen
              festen Ansprechpartner für die vereinbarten Gewerke und einen strukturierten Ablauf von der
              Bestandsaufnahme bis zur Übergabe.
            </p>
            <KomplettsanierungCTA centered primaryLabel="Kostenlose Erstberatung" secondaryLabel="Projektunterlagen senden" />
          </div>
        </div>
      </section>

      <SeoKnowledgeDrawer
        title="Weitere Informationen"
        sections={legacySections}
        ctaLabel="Kostenlose Erstberatung"
        ctaHref="#kontakt"
        panelId="komplettsanierung-legacy-panel"
      />

      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Komplettsanierung"
        intro={komplettsanierungSeoIntro}
        sections={komplettsanierungSeoSections}
        ctaLabel="Komplettsanierung anfragen"
        ctaHref="#kontakt"
        panelId="komplettsanierung-seo-panel"
        showToc
      />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Welche Komplettsanierung passt zu Ihrer Immobilie?</h2>
            <p>
              Senden Sie uns eine kurze Beschreibung, Fotos und vorhandene Grundrisse. Wir prüfen mit Ihnen, welche
              Bereiche gemeinsam saniert werden sollten und ob eine Komplettsanierung,{' '}
              <Link to="/kernsanierung-rhein-main">Kernsanierung</Link> oder{' '}
              <Link to="/teilsanierung-rhein-main">Teilsanierung</Link> die passende Lösung ist.
            </p>
            <KomplettsanierungCTA
              centered
              primaryLabel="Komplettsanierung anfragen"
              secondaryLabel="Fotos und Grundrisse senden"
            />
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '920px' }}>
          <img
            src={SEO_IMAGE}
            alt="Planung einer Komplettsanierung für eine Bestandsimmobilie im Rhein-Main-Gebiet"
            width={1400}
            height={933}
            loading="lazy"
            decoding="async"
            className="br-seo-inline-image"
          />
        </div>
      </section>

      <RadexLiveSection
        title="Radex Live – Einblicke in Komplettsanierungsprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Haussanierung, Wohnungssanierung, Bestandsmodernisierung und Gewerbeobjekte."
        projects={radexLiveProjects}
      />
    </main>
  );
}
