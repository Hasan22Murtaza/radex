import { useEffect } from 'react';
import {
  Building2,
  HardHat,
  ClipboardCheck,
  ClipboardList,
  CalendarDays,
  Users,
  Construction,
  ShieldCheck,
  FileText,
  MessagesSquare,
  RefreshCcw,
  KeyRound,
  PhoneCall,
  SearchCheck,
  UserRound,
  Network,
  Phone,
  Mail,
  MessageCircle,
  Hammer,
  HousePlus,
  Building,
  Home,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import '../data/legacyServiceStyles.css';
import useSeo, { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '../useSeo';
import ReviewsMarquee from '../components/ReviewsMarquee';
import nativeMigratedServices from '../data/nativeMigratedServices.json';
import {
  PremiumIconCards,
  SectionTransition,
  SeoKnowledgeDrawer,
  SeoTocSection,
  RadexLiveSection,
  HorizontalProcessTimeline,
  BerndExplainsVideo,
  MoneyPageQualityGrid,
  SanierungOptionComparison,
  FaqAccordion,
} from '../components/landing/SharedLandingParts';
import {
  bauleitungProjektsteuerungSeoIntro,
  bauleitungProjektsteuerungSeoSections,
} from '../data/bauleitungProjektsteuerungSeoContent';
import { bauleitungProjektsteuerungLegacySections } from '../data/bauleitungProjektsteuerungLegacyContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/bauleitung-projektsteuerung-rhein-main';
const HERO_IMAGE = '/img/bauleitung-projektsteuerung-rhein-main.webp';
const HERO_IMAGE_FALLBACK = '/img/generalunternehmer-sanierung-projektplanung-rhein-main.webp';
const VIDEO_POSTER = '/img/bernd-bauleitung-rhein-main.webp';
const VIDEO_POSTER_FALLBACK = '/img/generalunternehmer-sanierung-bernd.webp';
const SEO_IMAGE = '/img/bauleitung-gewerkekoordination-sanierung-rhein-main.webp';
const SEO_IMAGE_FALLBACK = '/img/generalunternehmer-sanierung-projektplanung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE =
  'Bauleitung & Projektsteuerung Rhein-Main | Sanierungsprojekte professionell koordinieren | Radex';
const META_DESCRIPTION =
  'Bauleitung und Projektsteuerung im Rhein-Main-Gebiet. Radex koordiniert Sanierungsprojekte, organisiert alle Gewerke und begleitet Ihr Bauvorhaben von der Planung bis zur Übergabe.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Generalunternehmer & Bauleitung', path: '/leistungen/generalunternehmer-bauleitung' },
  { name: 'Bauleitung & Projektsteuerung', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Fester Projektleiter',
  'Koordination aller Gewerke',
  'Transparente Projektabläufe',
  'Qualitätskontrolle',
  'Betreuung im gesamten Rhein-Main-Gebiet',
];

function stripHtml(html) {
  return String(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const faqsData =
  nativeMigratedServices.pages['bauleitung-projektsteuerung-rhein-main']?.faqs?.map((faq) => ({
    q: faq.q,
    a: stripHtml(faq.a),
  })) ?? [];

function BauleitungProjektsteuerungCTA({
  isHero = false,
  centered = false,
  primaryLabel = 'Kostenlose Beratung',
  secondaryLabel = 'Projekt anfragen',
  showWhatsAppSecondary = false,
}) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href="#kontakt" className="btn br-btn-orange">
        {primaryLabel}
      </a>
      {showWhatsAppSecondary ? (
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-outline-orange">
          {secondaryLabel}
        </a>
      ) : (
        <a href="#kontakt" className="btn br-btn-outline-orange">
          {secondaryLabel}
        </a>
      )}
    </div>
  );
}

const comparisonOptions = [
  {
    title: 'Generalunternehmer',
    desc: 'Der Generalunternehmer übernimmt die vertragliche Gesamtverantwortung für die vereinbarten Bauleistungen und koordiniert die beteiligten Gewerke.',
    icon: Building2,
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bauleitung',
    desc: 'Die Bauleitung organisiert den täglichen Bauablauf, überwacht die Ausführung der Arbeiten und sorgt für eine koordinierte Umsetzung auf der Baustelle.',
    icon: HardHat,
  },
  {
    title: 'Projektsteuerung',
    desc: 'Die Projektsteuerung begleitet das Bauvorhaben auf organisatorischer Ebene. Dazu gehören Terminplanung, Abstimmung der Gewerke, Kommunikation und die strukturierte Steuerung des gesamten Projekts.',
    icon: ClipboardCheck,
  },
];

const whyRadexCards = [
  {
    title: 'Zentrale Projektkoordination',
    desc: 'Sie kommunizieren mit einem festen Ansprechpartner, der sämtliche Abläufe Ihres Projekts organisiert.',
    icon: UserRound,
  },
  {
    title: 'Strukturierte Terminplanung',
    desc: 'Alle Gewerke werden sinnvoll aufeinander abgestimmt, damit Wartezeiten und unnötige Unterbrechungen vermieden werden.',
    icon: CalendarDays,
  },
  {
    title: 'Qualitätskontrolle',
    desc: 'Während der Bauphase überwachen wir die vereinbarten Leistungen und begleiten die Ausführung der Arbeiten.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie erhalten nachvollziehbare Informationen über den Projektfortschritt und die nächsten Bauabschnitte.',
    icon: MessagesSquare,
  },
  {
    title: 'Erfahrung mit Sanierungsprojekten',
    desc: 'Von der Teilsanierung bis zur Kernsanierung koordinieren wir Projekte unterschiedlicher Größen und Anforderungen.',
    icon: Network,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Planung, Koordination und Projektbegleitung greifen ineinander, damit Ihr Bauvorhaben effizient umgesetzt werden kann.',
    icon: ClipboardList,
  },
];

const leistungenCards = [
  {
    title: 'Projektplanung',
    desc: 'Jedes Bauprojekt beginnt mit einer strukturierten Planung. Gemeinsam definieren wir den Leistungsumfang, den zeitlichen Ablauf und die einzelnen Projektphasen.',
    icon: ClipboardList,
  },
  {
    title: 'Terminplanung',
    desc: 'Alle Arbeiten werden so koordiniert, dass die beteiligten Gewerke möglichst reibungslos ineinandergreifen und unnötige Wartezeiten vermieden werden.',
    icon: CalendarDays,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Wir stimmen sämtliche beteiligten Fachbetriebe aufeinander ab und sorgen dafür, dass jeder Arbeitsschritt zum richtigen Zeitpunkt erfolgt.',
    icon: Users,
    to: '/generalunternehmer-rhein-main',
    cta: 'Generalunternehmer ansehen',
  },
  {
    title: 'Baustellenorganisation',
    desc: 'Eine strukturierte Baustellenorganisation sorgt für klare Abläufe, eine bessere Kommunikation und einen übersichtlichen Projektverlauf.',
    icon: Construction,
  },
  {
    title: 'Qualitätskontrollen',
    desc: 'Während der gesamten Bauphase überprüfen wir regelmäßig den Fortschritt der vereinbarten Arbeiten und begleiten die Qualitätssicherung.',
    icon: ShieldCheck,
  },
  {
    title: 'Baufortschritt dokumentieren',
    desc: 'Wir dokumentieren wichtige Projektabschnitte und halten Sie über den aktuellen Stand Ihrer Sanierung auf dem Laufenden.',
    icon: FileText,
  },
  {
    title: 'Kommunikation mit allen Beteiligten',
    desc: 'Eigentümer, Fachbetriebe und weitere Projektbeteiligte erhalten einen zentralen Ansprechpartner für alle organisatorischen Fragen.',
    icon: MessagesSquare,
  },
  {
    title: 'Änderungsmanagement',
    desc: 'Sollten sich während der Bauphase Änderungen ergeben, werden diese strukturiert bewertet und in den weiteren Projektablauf integriert.',
    icon: RefreshCcw,
  },
  {
    title: 'Unterstützung bei Sanierungsprojekten',
    desc: 'Ob Teil-, Komplett- oder Kernsanierung – wir begleiten Projekte unterschiedlicher Größen mit einer strukturierten Projektsteuerung.',
    icon: Building2,
    actions: [
      { label: 'Komplettsanierung', to: '/komplettsanierung-rhein-main' },
      { label: 'Kernsanierung', to: '/kernsanierung-rhein-main' },
    ],
  },
  {
    title: 'Projektabschluss',
    desc: 'Nach Abschluss aller Arbeiten begleiten wir die gemeinsame Endabnahme und sorgen für eine strukturierte Übergabe Ihres Projekts.',
    icon: KeyRound,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Wir lernen Ihr Bauvorhaben kennen und besprechen die Ziele, den Umfang und die gewünschte Projektorganisation.',
    icon: PhoneCall,
  },
  {
    title: 'Analyse',
    desc: 'Wir verschaffen uns einen Überblick über die Immobilie, den Sanierungsumfang und die beteiligten Gewerke.',
    icon: SearchCheck,
  },
  {
    title: 'Projektplanung',
    desc: 'Auf Basis der Bestandsaufnahme entwickeln wir einen strukturierten Ablaufplan und koordinieren die einzelnen Projektphasen.',
    icon: ClipboardCheck,
  },
  {
    title: 'Steuerung der Bauphase',
    desc: 'Während der Umsetzung koordinieren wir alle beteiligten Fachbetriebe, stimmen Termine ab und begleiten den Bauablauf.',
    icon: Users,
  },
  {
    title: 'Laufende Kontrolle',
    desc: 'Wir überwachen die vereinbarten Leistungen, dokumentieren den Fortschritt und stehen für Rückfragen jederzeit zur Verfügung.',
    icon: ShieldCheck,
  },
  {
    title: 'Übergabe',
    desc: 'Nach Abschluss der Arbeiten begleiten wir die Endabnahme und sorgen für eine geordnete Übergabe Ihres Sanierungsprojekts.',
    icon: KeyRound,
  },
];

const typischeProjekteCards = [
  {
    title: 'Komplettsanierungen',
    desc: 'Koordination umfangreicher Modernisierungsprojekte mit mehreren Gewerken.',
    icon: Hammer,
  },
  {
    title: 'Kernsanierungen',
    desc: 'Steuerung komplexer Bauabläufe bei umfassenden Gebäudeerneuerungen.',
    icon: HousePlus,
  },
  {
    title: 'Gewerbeobjekte',
    desc: 'Projektsteuerung für Büros, Praxen, Ladenflächen und weitere Gewerbeimmobilien.',
    icon: Building,
  },
  {
    title: 'Mehrfamilienhäuser',
    desc: 'Koordination umfangreicher Sanierungsmaßnahmen in Gebäuden mit mehreren Nutzungseinheiten.',
    icon: Home,
  },
];

const radexLiveProjects = [
  {
    image: '/img/komplettsanierung-rhein-main-haus-wohnung.webp',
    badge: 'LIVE',
    title: 'Komplettsanierung mit Bauleitung',
    location: 'Frankfurt am Main',
    desc: 'Koordinierte Gewerkeabstimmung bei einer umfangreichen Modernisierung – von der Planung bis zur Übergabe.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/kernsanierung-rhein-main-bestandsimmobilie.webp',
    badge: 'Vorher & Nachher',
    title: 'Kernsanierung mit Projektsteuerung',
    location: 'Darmstadt',
    desc: 'Strukturierte Steuerung komplexer Bauabläufe bei einer umfassenden Gebäudeerneuerung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Gewerbesanierung mit Bauleitung',
    location: 'Hanau',
    desc: 'Projektsteuerung für Büroflächen mit abgestimmten Fachbetrieben und transparentem Ablauf.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'Abgeschlossen',
    title: 'Wohnungssanierung koordiniert',
    location: 'Offenbach am Main',
    desc: 'Zentrale Bauleitung bei einer Wohnungssanierung mit mehreren Gewerken im Mehrfamilienhaus.',
    cta: 'Projekt ansehen',
  },
];

const videoTranscript =
  'Bei einem Sanierungsprojekt arbeiten häufig mehrere Gewerke gleichzeitig oder nacheinander. Unsere Aufgabe besteht darin, alle Arbeiten zu koordinieren, Termine abzustimmen und den Überblick über den gesamten Bauablauf zu behalten. So vermeiden wir unnötige Verzögerungen und schaffen einen transparenten Projektverlauf.';

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Warum ist eine professionelle Bauleitung so wichtig?',
  description:
    'Bernd erklärt, wie eine strukturierte Bauleitung und Projektsteuerung dazu beitragen, Sanierungsprojekte effizient zu organisieren und verschiedene Gewerke optimal aufeinander abzustimmen.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function BauleitungProjektsteuerungLanding() {
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
        name: 'Bauleitung & Projektsteuerung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page sanierung-money-page bauleitung-projektsteuerung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/leistungen/generalunternehmer-bauleitung">Generalunternehmer &amp; Bauleitung</Link>
              <span aria-hidden="true">↓</span>
              <span>Bauleitung &amp; Projektsteuerung</span>
            </nav>
            <p className="br-hero-kicker">
              <HardHat size={16} strokeWidth={1.5} aria-hidden="true" /> Strukturierte Bauprojekte ohne
              Koordinationsaufwand
            </p>
            <p className="br-hero-kicker">Bauleitung &amp; Projektsteuerung im Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Bauleitung &amp; Projektsteuerung
              <br />
              <span>Rhein-Main</span>
            </h1>
            <p className="br-hero-lead">
              Ein Ansprechpartner für Planung, Koordination und einen reibungslosen Bauablauf.
            </p>
            <p className="br-hero-text">
              Bei einer Sanierung treffen häufig mehrere Gewerke, Termine und Arbeitsschritte aufeinander. Ohne eine
              strukturierte Bauleitung entstehen schnell Verzögerungen, Abstimmungsprobleme oder unnötige Mehrkosten.
            </p>
            <p className="br-hero-text">
              Radex Objektmanagement übernimmt die Bauleitung und Projektsteuerung Ihres Sanierungsprojekts im
              Rhein-Main-Gebiet. Wir koordinieren die beteiligten Fachbetriebe, überwachen den Bauablauf und sorgen dafür,
              dass alle Arbeiten sinnvoll aufeinander abgestimmt werden.
            </p>
            <BauleitungProjektsteuerungCTA isHero />
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
          aria-label="Projektsteuerung und Bauleitung einer Sanierung im Rhein-Main-Gebiet."
          title="Projektleiter bespricht den Bauablauf mit Handwerksbetrieben auf einer Sanierungsbaustelle."
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Erfolgreiche Sanierungen brauchen eine professionelle Koordination.</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Je umfangreicher ein Sanierungsprojekt wird, desto wichtiger ist eine klare Organisation. Unterschiedliche
              Gewerke müssen in der richtigen Reihenfolge arbeiten, Materialien müssen rechtzeitig verfügbar sein und alle
              Beteiligten benötigen einen aktuellen Überblick über den Projektstand.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Eine professionelle Bauleitung sorgt dafür, dass Termine eingehalten, Arbeitsschritte abgestimmt und
              Qualitätsstandards kontrolliert werden. Gleichzeitig erhalten Eigentümer einen festen Ansprechpartner, der
              sämtliche Abläufe koordiniert und offene Fragen zentral beantwortet.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              So entsteht ein strukturierter Projektablauf – unabhängig davon, ob es sich um eine Teilsanierung,
              Komplettsanierung oder Kernsanierung handelt.
            </p>
          </div>
        </div>
      </section>

      <SanierungOptionComparison
        title="Generalunternehmer oder Bauleitung?"
        options={comparisonOptions}
        threeColumn
      />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} largeIcons />
        </div>
      </section>

      <MoneyPageQualityGrid />

      <SectionTransition>
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen im Bereich Bauleitung und Projektsteuerung.
      </SectionTransition>

      <section id="leistungen" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <div className="br-leistungen-grid-three">
            <PremiumIconCards cards={leistungenCards} linked largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur geordneten
        Übergabe Ihres Sanierungsprojekts.
      </SectionTransition>

      <HorizontalProcessTimeline title="Projektablauf" steps={processSteps} />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Projekte</h2>
          </div>
          <PremiumIconCards cards={typischeProjekteCards} largeIcons />
        </div>
      </section>

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Ihr Ansprechpartner für Bauleitung &amp; Projektsteuerung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unser Projektteam begleitet Ihr Bauvorhaben von der ersten Planung bis zur fertigen Übergabe. Während der
              gesamten Bauphase koordinieren wir alle Abläufe und stehen Ihnen als zentraler Ansprechpartner zur Verfügung.
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
                Senden Sie uns Ihre Pläne, Grundrisse oder Fotos. Wir geben Ihnen eine erste Einschätzung zum Projektablauf.
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
        title="Warum ist eine professionelle Bauleitung so wichtig?"
        description="Bernd erklärt, wie eine strukturierte Bauleitung und Projektsteuerung dazu beitragen, Sanierungsprojekte effizient zu organisieren und verschiedene Gewerke optimal aufeinander abzustimmen."
        poster={VIDEO_POSTER}
        posterFallback={VIDEO_POSTER_FALLBACK}
        posterAlt="Bernd erklärt die Aufgaben der Bauleitung und Projektsteuerung."
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Sie möchten Ihr Bauprojekt professionell begleiten lassen?</h2>
            <p>
              Mit einer strukturierten Bauleitung und Projektsteuerung behalten Sie den Überblick über Termine, Gewerke und
              den gesamten Bauablauf. Wir begleiten Ihr Projekt zuverlässig von der Planung bis zur Übergabe.
            </p>
            <BauleitungProjektsteuerungCTA centered />
          </div>
        </div>
      </section>

      {bauleitungProjektsteuerungLegacySections.length > 0 && (
        <SeoKnowledgeDrawer
          title="Weitere Informationen"
          sections={bauleitungProjektsteuerungLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="bauleitung-projektsteuerung-legacy-panel"
        />
      )}

      <SeoTocSection
        title="Unsere Leistungen im Bereich Bauleitung & Projektsteuerung"
        intro={bauleitungProjektsteuerungSeoIntro}
        sections={bauleitungProjektsteuerungSeoSections}
        showAllContent
        panelId="bauleitung-projektsteuerung-seo-panel"
        ctaLabel="Kostenlose Erstberatung"
      />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Wer behält bei Ihrer Sanierung den Überblick?</h2>
            <p>
              Überlassen Sie Termine, Gewerke und Baustellenabstimmungen nicht dem Zufall. Radex entwickelt einen
              strukturierten Projektablauf und begleitet Ihre Sanierung von der Vorbereitung bis zur geordneten Übergabe.
            </p>
            <BauleitungProjektsteuerungCTA
              centered
              primaryLabel="Kostenlose Erstberatung"
              secondaryLabel="Projektunterlagen senden"
              showWhatsAppSecondary
            />
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '920px' }}>
          <img
            src={SEO_IMAGE}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = SEO_IMAGE_FALLBACK;
            }}
            alt="Bauleitung und Koordination mehrerer Gewerke bei einer Sanierung im Rhein-Main-Gebiet."
            width={1400}
            height={933}
            loading="lazy"
            decoding="async"
            className="br-seo-inline-image"
          />
        </div>
      </section>

      <RadexLiveSection
        title="Radex Live – Einblicke in Sanierungsprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Komplettsanierungen, Kernsanierungen, Gewerbesanierungen und Projekte mit professioneller Bauleitung und Projektsteuerung."
        projects={radexLiveProjects}
      />

      {faqsData.length > 0 && <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen" />}
    </main>
  );
}
