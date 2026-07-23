import { useEffect } from 'react';
import {
  Zap,
  Building2,
  Shield,
  UserRound,
  Network,
  ClipboardCheck,
  FileText,
  MapPin,
  House,
  Building,
  ShieldCheck,
  Phone,
  Mail,
  MessageCircle,
  Hammer,
  BriefcaseBusiness,
  PlugZap,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '../useSeo';
import ReviewsMarquee from '../components/ReviewsMarquee';
import {
  PremiumIconCards,
  SectionTransition,
  RadexLiveSection,
  BerndExplainsVideo,
  FaqAccordion,
  MoneyPageQualityGrid,
} from '../components/landing/SharedLandingParts';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/elektrotechnik-gebaeudetechnik';
const HERO_IMAGE = '/img/elektrotechnik-gebaeudetechnik-rhein-main.webp';
const HERO_IMAGE_FALLBACK = '/img/electrician.webp';
const VIDEO_POSTER = '/img/bernd-elektrotechnik-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Elektrotechnik & Gebäudetechnik | Elektroarbeiten im Rhein-Main | Radex';
const META_DESCRIPTION =
  'Elektrotechnik und Gebäudetechnik im Rhein-Main-Gebiet. Finden Sie die passende Leistung – von der Elektroinstallation über die Altbau-Elektrik bis zum neuen Sicherungskasten.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Elektrotechnik & Gebäudetechnik', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Persönliche Beratung',
  'Ein Ansprechpartner',
  'Koordination qualifizierter Elektrofachbetriebe',
  'Moderne Gebäudetechnik',
  'Rhein-Main-Gebiet',
];

function ElektrotechnikCTA({ isHero = false, centered = false, primaryLabel = 'Kostenlose Beratung' }) {
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

const leistungsbereicheCards = [
  {
    title: 'Elektroinstallation',
    desc: 'Sie planen eine neue Elektroanlage oder möchten Ihre Immobilie umfassend modernisieren? Hier finden Sie alle Informationen rund um zeitgemäße Elektroinstallationen.',
    icon: Zap,
    to: '/elektroinstallation-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Altbau Elektrik erneuern',
    desc: 'Veraltete Leitungen oder fehlende Schutzmaßnahmen können ein Sicherheitsrisiko darstellen. Erfahren Sie, wann eine Modernisierung sinnvoll ist.',
    icon: Building2,
    to: '/altbau-elektrik-erneuern-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Sicherungskasten erneuern',
    desc: 'Ein neuer Sicherungskasten verbessert den Schutz Ihrer Elektroanlage und schafft die Grundlage für spätere Erweiterungen.',
    icon: Shield,
    to: '/sicherungskasten-erneuern-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const whyRadexCards = [
  {
    title: 'Persönliche Beratung',
    desc: 'Wir analysieren Ihr Projekt und empfehlen die passende Lösung für Ihre Immobilie.',
    icon: UserRound,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Während des gesamten Projekts steht Ihnen ein zentraler Ansprechpartner zur Verfügung.',
    icon: ClipboardCheck,
  },
  {
    title: 'Koordination qualifizierter Elektrofachbetriebe',
    desc: 'Elektroarbeiten werden durch entsprechend qualifizierte Fachbetriebe ausgeführt und in den Projektablauf integriert.',
    icon: Network,
  },
  {
    title: 'Gebäudetechnik ganzheitlich gedacht',
    desc: 'Elektrotechnik wird optimal mit Heizungs-, Sanitär- und Sanierungsleistungen abgestimmt.',
    icon: PlugZap,
  },
  {
    title: 'Transparente Projektabläufe',
    desc: 'Sie wissen jederzeit, welche Arbeiten anstehen und wie Ihr Projekt voranschreitet.',
    icon: FileText,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Wir begleiten private und gewerbliche Bau- und Sanierungsprojekte in der gesamten Region.',
    icon: MapPin,
  },
];

const leistungenOverviewCards = [
  {
    title: 'Elektroinstallation',
    desc: 'Sie planen einen Neubau, Umbau oder eine umfangreiche Sanierung? Moderne Elektroinstallationen schaffen die Grundlage für eine sichere Stromversorgung und zukunftsfähige Gebäudetechnik.',
    icon: Zap,
    to: '/elektroinstallation-rhein-main',
    cta: 'Zur Elektroinstallation',
  },
  {
    title: 'Altbau Elektrik erneuern',
    desc: 'Viele ältere Gebäude verfügen noch über Elektroanlagen, die nicht mehr den heutigen Anforderungen entsprechen. Erfahren Sie, wann eine Modernisierung sinnvoll ist.',
    icon: Building2,
    to: '/altbau-elektrik-erneuern-rhein-main',
    cta: 'Altbau Elektrik erneuern',
  },
  {
    title: 'Sicherungskasten erneuern',
    desc: 'Ein moderner Sicherungskasten verbessert den Schutz Ihrer Elektroanlage und bietet Reserven für spätere Erweiterungen oder Modernisierungen.',
    icon: Shield,
    to: '/sicherungskasten-erneuern-rhein-main',
    cta: 'Sicherungskasten erneuern',
  },
];

const decisionCards = [
  {
    title: 'Ich modernisiere meine gesamte Immobilie',
    desc: 'Empfohlen: Elektroinstallation. Wenn Leitungen, Steckdosen, Schalter und Stromkreise vollständig neu geplant oder erneuert werden sollen.',
    icon: House,
    to: '/elektroinstallation-rhein-main',
    cta: 'Zur Leistung',
  },
  {
    title: 'Meine Immobilie ist älter',
    desc: 'Empfohlen: Altbau Elektrik erneuern. Wenn die vorhandene Elektroanlage veraltet ist und heutigen Sicherheitsanforderungen nicht mehr entspricht.',
    icon: Building,
    to: '/altbau-elektrik-erneuern-rhein-main',
    cta: 'Zur Leistung',
  },
  {
    title: 'Nur der Verteiler soll erneuert werden',
    desc: 'Empfohlen: Sicherungskasten erneuern. Wenn die bestehende Unterverteilung modernisiert oder für zukünftige Erweiterungen vorbereitet werden soll.',
    icon: ShieldCheck,
    to: '/sicherungskasten-erneuern-rhein-main',
    cta: 'Zur Leistung',
  },
];

const benefitCards = [
  {
    title: 'Mehr Sicherheit',
    desc: 'Moderne Schutztechnik reduziert Risiken und sorgt für einen sicheren Betrieb elektrischer Anlagen.',
    icon: Shield,
  },
  {
    title: 'Mehr Komfort',
    desc: 'Ausreichend Steckdosen, moderne Beleuchtung und zeitgemäße Stromkreise erleichtern den Alltag und schaffen Flexibilität.',
    icon: Zap,
  },
  {
    title: 'Zukunftssicher planen',
    desc: 'Eine moderne Elektroinstallation bietet die Grundlage für spätere Erweiterungen wie Smart Home, Photovoltaik oder Ladeinfrastruktur.',
    icon: PlugZap,
  },
  {
    title: 'Werterhalt der Immobilie',
    desc: 'Zeitgemäße Elektrotechnik trägt dazu bei, Wohn- und Gewerbeimmobilien langfristig attraktiv und funktional zu halten.',
    icon: Building2,
  },
];

const internalLinkCards = [
  {
    title: 'Elektroinstallation',
    desc: 'Steckdosen, Leitungen, Licht und Gebäudetechnik nach VDE – der Einstieg für eine umfassende Modernisierung Ihrer Elektroanlage.',
    icon: Zap,
    to: '/elektroinstallation-rhein-main',
    cta: 'Mehr über moderne Elektroinstallationen erfahren',
  },
  {
    title: 'Altbau Elektrik erneuern',
    desc: 'Veraltete Installationen sicher und normgerecht modernisieren – wenn Leitungen, Schutzmaßnahmen und Stromkreise erneuert werden müssen.',
    icon: Building2,
    to: '/altbau-elektrik-erneuern-rhein-main',
    cta: 'Jetzt Altbau-Elektrik modernisieren',
  },
  {
    title: 'Sicherungskasten erneuern',
    desc: 'Moderne Unterverteilungen mit zeitgemäßer Schutztechnik und Reserven für spätere Erweiterungen Ihrer Elektroanlage.',
    icon: Shield,
    to: '/sicherungskasten-erneuern-rhein-main',
    cta: 'Mehr über den Austausch von Sicherungskästen erfahren',
  },
];

const relatedClusterCards = [
  {
    title: 'Komplettsanierung',
    desc: 'Bei einer Komplettsanierung wird die Elektroinstallation frühzeitig in die Gesamtplanung integriert.',
    icon: Hammer,
    to: '/komplettsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Kernsanierung',
    desc: 'Bei einer Kernsanierung werden Elektroarbeiten häufig vollständig neu geplant und auf den aktuellen Stand gebracht.',
    icon: Building,
    to: '/kernsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bauleitung & Projektsteuerung',
    desc: 'Wir koordinieren sämtliche Gewerke und sorgen für einen reibungslosen Projektablauf.',
    icon: ClipboardCheck,
    to: '/bauleitung-projektsteuerung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Generalunternehmer',
    desc: 'Ein Ansprechpartner für die Koordination aller beteiligten Fachbetriebe – von der Planung bis zur Fertigstellung.',
    icon: BriefcaseBusiness,
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const radexLiveProjects = [
  {
    image: '/img/sicherungskasten-erneuern-rhein-main.webp',
    badge: 'LIVE',
    title: 'Sicherungskasten erneuern im Bestand',
    location: 'Rodgau',
    desc: 'Moderne Unterverteilung mit zeitgemäßer Schutztechnik – koordiniert im Rahmen einer Sanierung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/electrician.webp',
    badge: 'Abgeschlossen',
    title: 'Elektroinstallation Wohnhaus',
    location: 'Offenbach am Main',
    desc: 'Komplette Erneuerung der Elektroanlage mit abgestimmter Gebäudetechnik und klarer Projektplanung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/kernsanierung-rhein-main-bestand-radex.webp',
    badge: 'Vorher & Nachher',
    title: 'Altbau-Elektrik modernisiert',
    location: 'Darmstadt',
    desc: 'Veraltete Installationen auf den heutigen Stand gebracht – sicher, normgerecht und zukunftsfähig.',
    cta: 'Projekt ansehen',
  },
];

const videoTranscript =
  'Nicht jedes Projekt ist gleich. Manchmal reicht es aus, den Sicherungskasten zu erneuern. In anderen Fällen sollte die gesamte Elektroinstallation modernisiert werden. Gemeinsam prüfen wir den Zustand Ihrer Immobilie und finden die passende Lösung.';

const faqsData = [
  {
    q: 'Welche Elektroleistung benötige ich?',
    a: 'Das hängt vom Zustand Ihrer Immobilie ab. Bei einer umfassenden Modernisierung ist häufig eine neue Elektroinstallation sinnvoll. Sind nur einzelne Komponenten veraltet, kann auch die Erneuerung der Altbau-Elektrik oder des Sicherungskastens ausreichen.',
  },
  {
    q: 'Wann sollte die Elektrik eines Altbaus erneuert werden?',
    a: 'Wenn Leitungen, Schutzmaßnahmen oder der Sicherungskasten nicht mehr dem heutigen Stand entsprechen oder die Elektroanlage erweitert werden soll.',
  },
  {
    q: 'Reicht es aus, nur den Sicherungskasten zu erneuern?',
    a: 'Nicht immer. Der Sicherungskasten ist nur ein Teil der gesamten Elektroinstallation. Ob weitere Maßnahmen erforderlich sind, hängt vom Zustand der vorhandenen Leitungen und Stromkreise ab.',
  },
  {
    q: 'Führt Radex die Elektroarbeiten selbst aus?',
    a: 'Radex übernimmt die Planung, Koordination und Projektsteuerung. Elektroarbeiten werden durch qualifizierte Elektrofachbetriebe ausgeführt.',
  },
  {
    q: 'Kann ich mehrere Leistungen kombinieren?',
    a: 'Ja. Elektroarbeiten werden häufig mit Sanierungen, Innenausbau oder Heizungs- und Sanitärarbeiten kombiniert und gemeinsam geplant.',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Welche Elektroleistung benötigen Sie?',
  description:
    'Bernd erklärt die Unterschiede zwischen einer neuen Elektroinstallation, der Erneuerung einer Altbau-Elektrik und dem Austausch eines Sicherungskastens.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function ElektrotechnikGebaeudetechnikLanding() {
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
        name: 'Elektrotechnik & Gebäudetechnik Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page elektrotechnik-gebaeudetechnik-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <span>Elektrotechnik &amp; Gebäudetechnik</span>
            </nav>
            <p className="br-hero-kicker">
              <Zap size={16} strokeWidth={1.5} aria-hidden="true" /> Elektrotechnik für Wohn- und Gewerbeimmobilien
            </p>
            <h1 className="br-hero-title">Elektrotechnik &amp; Gebäudetechnik im Rhein-Main-Gebiet</h1>
            <p className="br-hero-lead">
              Moderne Elektroanlagen für mehr Sicherheit, Komfort und Zukunftssicherheit.
            </p>
            <p className="br-hero-text">
              Ob Neubau, Modernisierung oder Sanierung – eine zeitgemäße Elektroinstallation bildet die Grundlage für eine
              sichere und leistungsfähige Immobilie. Von der kompletten Elektroinstallation über die Erneuerung veralteter
              Altbau-Elektrik bis zum Austausch des Sicherungskastens begleiten wir Ihr Projekt und koordinieren die
              erforderlichen Arbeiten mit qualifizierten Elektrofachbetrieben.
            </p>
            <p className="br-hero-text">Hier finden Sie schnell die passende Leistung für Ihr Vorhaben.</p>
            <ElektrotechnikCTA isHero />
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
          aria-label="Moderne Elektrotechnik und Gebäudetechnik im Rhein-Main-Gebiet."
          title="Moderne Elektrotechnik und Gebäudetechnik im Rhein-Main-Gebiet."
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Welche Elektroleistung passt zu Ihrem Projekt?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Elektrische Anlagen entwickeln sich ständig weiter. Gleichzeitig steigen die Anforderungen an Sicherheit,
              Energieeffizienz und Komfort. Je nach Zustand Ihrer Immobilie kommen unterschiedliche Leistungen infrage – von
              einer komplett neuen Elektroinstallation über die Modernisierung einer Altbau-Elektrik bis hin zum Austausch
              eines veralteten Sicherungskastens.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Damit Sie schnell die passende Lösung finden, haben wir unsere Leistungen übersichtlich für Sie
              zusammengestellt.
            </p>
          </div>
        </div>
      </section>

      <section id="leistungen" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <div className="br-leistungen-grid-three">
            <PremiumIconCards cards={leistungsbereicheCards} linked largeIcons />
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

      <MoneyPageQualityGrid />

      <SectionTransition>
        Elektroinstallation, Altbau-Elektrik oder Sicherungskasten – im nächsten Abschnitt finden Sie einen Überblick
        über unsere Leistungen im Bereich Elektrotechnik &amp; Gebäudetechnik.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <div className="br-leistungen-grid-three">
            <PremiumIconCards cards={leistungenOverviewCards} linked largeIcons />
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Leistung passt zu Ihrem Projekt?</h2>
          </div>
          <div className="br-leistungen-grid-three">
            <PremiumIconCards cards={decisionCards} linked largeIcons />
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum eine moderne Elektroanlage wichtig ist</h2>
          </div>
          <div className="br-leistungen-grid-four">
            <PremiumIconCards cards={benefitCards} largeIcons />
          </div>
        </div>
      </section>

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Ihr Ansprechpartner für Elektrotechnik &amp; Gebäudetechnik</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Sie möchten Ihre Elektroanlage modernisieren oder wissen nicht, welche Leistung für Ihr Projekt die richtige
              ist? Wir beraten Sie persönlich und begleiten Sie bei der Planung Ihres Vorhabens.
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
                Senden Sie uns Fotos oder Pläne Ihrer Immobilie. Wir geben Ihnen eine erste unverbindliche Einschätzung.
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
        title="Welche Elektroleistung benötigen Sie?"
        description="Bernd erklärt die Unterschiede zwischen einer neuen Elektroinstallation, der Erneuerung einer Altbau-Elektrik und dem Austausch eines Sicherungskastens."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt die Leistungen im Bereich Elektrotechnik und Gebäudetechnik."
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Sie planen Elektroarbeiten an Ihrer Immobilie?</h2>
            <p>
              Ganz gleich, ob Sie eine neue Elektroinstallation planen, die Elektrik eines Altbaus modernisieren oder Ihren
              Sicherungskasten erneuern möchten – wir unterstützen Sie bei der Auswahl der passenden Leistung und
              koordinieren Ihr Projekt zuverlässig.
            </p>
            <ElektrotechnikCTA centered />
          </div>
        </div>
      </section>

      <RadexLiveSection
        title="Radex Live"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Elektroinstallationen, Sicherungskasten-Modernisierungen und koordinierte Sanierungsprojekte."
        projects={radexLiveProjects}
      />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Elektrotechnik &amp; Gebäudetechnik – unsere Leistungsbereiche</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Finden Sie die passende Leistung für Ihr Vorhaben – von der Elektroinstallation über die Altbau-Elektrik bis
              zum Sicherungskasten.
            </p>
          </div>
          <div className="br-leistungen-grid-three">
            <PremiumIconCards cards={internalLinkCards} linked largeIcons />
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Weitere passende Leistungsbereiche</h2>
          </div>
          <div className="br-leistungen-grid-four">
            <PremiumIconCards cards={relatedClusterCards} linked largeIcons />
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen" />

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Noch unsicher, welche Leistung die richtige ist?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Kein Problem. Wir beraten Sie persönlich und zeigen Ihnen, welche Lösung am besten zu Ihrer Immobilie und
              Ihrem Vorhaben passt. Gemeinsam planen wir die nächsten Schritte und koordinieren die erforderlichen
              Arbeiten zuverlässig.
            </p>
            <div style={{ marginTop: '32px' }}>
              <ElektrotechnikCTA centered />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
