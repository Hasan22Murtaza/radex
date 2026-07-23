import { useEffect } from 'react';
import {
  Shield,
  ShieldCheck,
  CircuitBoard,
  Car,
  Sun,
  PlusCircle,
  SearchCheck,
  Workflow,
  UserRound,
  CalendarClock,
  MessagesSquare,
  Sparkles,
  BadgeEuro,
  MapPin,
  PhoneCall,
  ClipboardList,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  Zap,
  Building2,
  Hammer,
  Building,
  ClipboardCheck,
  BriefcaseBusiness,
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
  SeoKnowledgeDrawer,
  RadexLiveSection,
  HorizontalProcessTimeline,
  ResponsiveChecklistSection,
  BerndExplainsVideo,
  FaqAccordion,
} from '../components/landing/SharedLandingParts';
import {
  sicherungskastenSeoIntro,
  sicherungskastenSeoSections,
  sicherungskastenSeoLinkSections,
} from '../data/sicherungskastenSeoContent';
import { sicherungskastenLegacySections } from '../data/sicherungskastenLegacyContent';

const PAGE_PATH = '/sicherungskasten-erneuern-rhein-main';
const HERO_IMAGE = '/img/sicherungskasten-erneuern-rhein-main.webp';
const VIDEO_POSTER = '/img/bernd-sicherungskasten-erneuern-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Sicherungskasten erneuern Rhein-Main | Moderne Unterverteilung | Radex';
const META_DESCRIPTION =
  'Sicherungskasten erneuern im Rhein-Main-Gebiet. Moderne Unterverteilungen mit zeitgemäßer Schutztechnik für Wohn- und Gewerbeimmobilien.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Elektrotechnik', path: '/elektrotechnik-gebaeudetechnik' },
  { name: 'Sicherungskasten erneuern', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Individuelle Beratung',
  'Moderne Schutztechnik',
  'Ein Ansprechpartner',
  'Koordination qualifizierter Elektrofachbetriebe',
  'Rhein-Main-Gebiet',
];

function SicherungskastenCTA({ isHero = false, centered = false, primaryLabel = 'Kostenlose Beratung' }) {
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
    title: 'Individuelle Bestandsanalyse',
    desc: 'Wir prüfen die bestehende Elektroverteilung und bewerten den Modernisierungsbedarf.',
    icon: SearchCheck,
  },
  {
    title: 'Koordination qualifizierter Elektrofachbetriebe',
    desc: 'Die Arbeiten werden durch qualifizierte Elektrofachbetriebe ausgeführt und zentral koordiniert.',
    icon: Workflow,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Sie erhalten während des gesamten Projekts eine feste Ansprechperson.',
    icon: UserRound,
  },
  {
    title: 'Zukunftssichere Planung',
    desc: 'Bereits heute werden Reserven für spätere Erweiterungen berücksichtigt.',
    icon: CalendarClock,
  },
  {
    title: 'Transparente Projektabwicklung',
    desc: 'Sie werden jederzeit über den aktuellen Projektstand informiert.',
    icon: MessagesSquare,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Wir begleiten private und gewerbliche Projekte in der gesamten Region.',
    icon: MapPin,
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

const renewalChecklistItems = [
  'der Sicherungskasten mehrere Jahrzehnte alt ist',
  'keine FI-Schutzschalter vorhanden sind',
  'zusätzliche Stromkreise benötigt werden',
  'eine Wärmepumpe installiert werden soll',
  'eine Wallbox geplant ist',
  'eine Photovoltaikanlage integriert werden soll',
  'eine umfangreiche Sanierung durchgeführt wird',
  'die bestehende Unterverteilung keinen Platz für Erweiterungen bietet',
];

const leistungenCards = [
  {
    title: 'Moderne Unterverteilungen',
    desc: 'Neue Unterverteilungen schaffen mehr Sicherheit und Übersicht.',
    icon: Shield,
  },
  {
    title: 'FI-Schutztechnik',
    desc: 'Moderne Schutztechnik erhöht den Personenschutz innerhalb der gesamten Elektroanlage.',
    icon: ShieldCheck,
  },
  {
    title: 'Neue Stromkreise',
    desc: 'Zusätzliche Stromkreise schaffen Reserven für neue Verbraucher.',
    icon: CircuitBoard,
  },
  {
    title: 'Vorbereitung Wallbox',
    desc: 'Die Unterverteilung kann bereits für spätere Ladeinfrastruktur vorbereitet werden.',
    icon: Car,
  },
  {
    title: 'Vorbereitung Photovoltaik',
    desc: 'Auch zukünftige PV-Anlagen lassen sich frühzeitig berücksichtigen.',
    icon: Sun,
  },
  {
    title: 'Erweiterungsreserven',
    desc: 'Freie Plätze im Verteiler erleichtern spätere Modernisierungen erheblich.',
    icon: PlusCircle,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Analyse Ihrer bestehenden Elektroanlage.',
    icon: PhoneCall,
  },
  {
    title: 'Bestandsaufnahme',
    desc: 'Prüfung der vorhandenen Unterverteilung.',
    icon: SearchCheck,
  },
  {
    title: 'Planung',
    desc: 'Ausarbeitung einer passenden Modernisierung.',
    icon: ClipboardList,
  },
  {
    title: 'Koordination',
    desc: 'Abstimmung aller beteiligten Fachbetriebe.',
    icon: Workflow,
  },
  {
    title: 'Umsetzung',
    desc: 'Fachgerechte Erneuerung des Sicherungskastens.',
    icon: ShieldCheck,
  },
  {
    title: 'Abschluss',
    desc: 'Gemeinsame Abnahme und Übergabe.',
    icon: CircleCheckBig,
  },
];

const relatedCards = [
  {
    title: 'Elektroinstallation',
    desc: 'Moderne Elektroinstallationen für Neubau, Umbau und umfassende Sanierungen.',
    icon: Zap,
    to: '/elektroinstallation-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Altbau Elektrik erneuern',
    desc: 'Veraltete Elektroanlagen auf den heutigen Sicherheitsstandard bringen.',
    icon: Building2,
    to: '/altbau-elektrik-erneuern-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Komplettsanierung',
    desc: 'Elektrotechnik wird optimal in den gesamten Sanierungsablauf integriert.',
    icon: Hammer,
    to: '/komplettsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Kernsanierung',
    desc: 'Bei einer Kernsanierung wird häufig auch die gesamte Elektroverteilung modernisiert.',
    icon: Building,
    to: '/kernsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bauleitung & Projektsteuerung',
    desc: 'Wir koordinieren sämtliche Gewerke und sorgen für einen strukturierten Bauablauf.',
    icon: ClipboardCheck,
    to: '/bauleitung-projektsteuerung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Generalunternehmer',
    desc: 'Ein Ansprechpartner für Planung, Koordination und Umsetzung Ihres gesamten Bauprojekts.',
    icon: BriefcaseBusiness,
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const radexLiveProjects = [
  {
    image: '/img/haus-service-elektro.png',
    badge: 'LIVE',
    title: 'Sicherungskasten bei Haussanierung',
    location: 'Rodgau',
    desc: 'Modernisierung der Unterverteilung im Rahmen einer umfassenden Haussanierung – koordiniert mit allen Gewerken.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-service-elektro.png',
    badge: 'LIVE',
    title: 'Unterverteilung Wohnungssanierung',
    location: 'Frankfurt am Main',
    desc: 'FI-Schutzschalter und neue Stromkreise für Küche, Bad und Homeoffice in einer Bestandswohnung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-service-elektro.png',
    badge: 'Abgeschlossen',
    title: 'Altbau-Elektrik modernisieren',
    location: 'Offenbach am Main',
    desc: 'Veraltete Unterverteilung ersetzt und für zukünftige Erweiterungen vorbereitet.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-waermepumpe.png',
    badge: 'LIVE',
    title: 'Wärmepumpe & Elektroanschluss',
    location: 'Darmstadt',
    desc: 'Sicherungskasten und Stromkreise für Wärmepumpe und Wallbox-Vorbereitung abgestimmt.',
    cta: 'Projekt ansehen',
  },
];

const videoTranscript =
  'Ein Sicherungskasten ist die zentrale Schaltstelle Ihrer Elektroinstallation. Moderne Schutztechnik sorgt dafür, dass elektrische Anlagen sicher betrieben werden können und bietet gleichzeitig Reserven für zukünftige Erweiterungen wie Wärmepumpe, Photovoltaik oder Wallbox.';

const faqsData = [
  {
    q: 'Wann sollte ein Sicherungskasten erneuert werden?',
    a: 'Eine Modernisierung ist sinnvoll, wenn der Sicherungskasten veraltet ist, keine modernen Schutzsysteme vorhanden sind oder zusätzliche Stromkreise für neue Verbraucher benötigt werden.',
  },
  {
    q: 'Muss bei einem neuen Sicherungskasten auch die gesamte Elektroinstallation erneuert werden?',
    a: 'Nicht unbedingt. Ob weitere Maßnahmen erforderlich sind, hängt vom Zustand der vorhandenen Leitungen und der gesamten Elektroanlage ab.',
  },
  {
    q: 'Welche Vorteile bietet ein moderner Sicherungskasten?',
    a: 'Eine moderne Unterverteilung sorgt für mehr Sicherheit, eine übersichtliche Aufteilung der Stromkreise und schafft Reserven für spätere Erweiterungen.',
  },
  {
    q: 'Was ist ein FI-Schutzschalter?',
    a: 'Ein FI-Schutzschalter (Fehlerstromschutzschalter) erkennt Fehlerströme und unterbricht den Stromkreis innerhalb kürzester Zeit. Dadurch wird der Personenschutz deutlich erhöht.',
  },
  {
    q: 'Kann ein Sicherungskasten für eine Wallbox vorbereitet werden?',
    a: 'Ja. Bereits bei der Modernisierung können ausreichend Reserven und geeignete Stromkreise für eine spätere Wallbox eingeplant werden.',
  },
  {
    q: 'Kann auch eine Photovoltaikanlage berücksichtigt werden?',
    a: 'Ja. Moderne Unterverteilungen bieten die technischen Voraussetzungen, um spätere Photovoltaikanlagen einfacher zu integrieren.',
  },
  {
    q: 'Wie viele Stromkreise sollte eine moderne Unterverteilung besitzen?',
    a: 'Das richtet sich nach der Größe der Immobilie und den geplanten Verbrauchern. Ziel ist eine übersichtliche und ausreichend dimensionierte Aufteilung der einzelnen Stromkreise.',
  },
  {
    q: 'Für welche Gebäude eignet sich eine Modernisierung?',
    a: 'Für Einfamilienhäuser, Eigentumswohnungen, Mehrfamilienhäuser sowie gewerblich genutzte Immobilien jeder Größe.',
  },
];

const seoTocSections = [...sicherungskastenSeoSections, ...sicherungskastenSeoLinkSections];

export default function SicherungskastenErneuernLanding() {
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
        name: 'Sicherungskasten erneuern Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page sanierung-money-page sicherungskasten-page">
      {/* Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/elektrotechnik-gebaeudetechnik">Elektrotechnik</Link>
              <span aria-hidden="true">↓</span>
              <span>Sicherungskasten erneuern</span>
            </nav>
            <p className="br-hero-kicker">
              <Shield size={16} strokeWidth={1.5} aria-hidden="true" /> Mehr Sicherheit für Ihre Elektroinstallation
            </p>
            <p className="br-hero-kicker">Sicherungskasten erneuern im Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Sicherungskasten erneuern
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Moderne Unterverteilungen schaffen Sicherheit, Übersicht und Reserven für zukünftige Erweiterungen.
            </p>
            <p className="br-hero-text">
              Der Sicherungskasten ist das Herzstück jeder Elektroinstallation. Er verteilt den Strom innerhalb der
              Immobilie und schützt elektrische Anlagen durch moderne Sicherungs- und Schutzsysteme. Ist der
              Sicherungskasten veraltet oder entspricht er nicht mehr den heutigen Anforderungen, kann eine
              Modernisierung sinnvoll sein.
            </p>
            <p className="br-hero-text">
              Wir begleiten Ihr Projekt von der Planung bis zur Koordination der fachgerechten Umsetzung und stimmen
              sämtliche Arbeiten mit qualifizierten Elektrofachbetrieben ab.
            </p>
            <SicherungskastenCTA isHero />
            <ul className="br-hero-trust-list" aria-label="Vertrauenspunkte">
              {TRUST_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Moderner Sicherungskasten für Wohngebäude im Rhein-Main-Gebiet."
          title="Sicherungskasten erneuern Rhein-Main | Radex Objektmanagement"
        />
      </section>

      {/* Einführung */}
      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Warum einen Sicherungskasten erneuern?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Mit den Jahren steigen die Anforderungen an elektrische Anlagen kontinuierlich. Neue Haushaltsgeräte,
              zusätzliche Stromkreise, Photovoltaikanlagen, Wärmepumpen oder Wallboxen benötigen häufig mehr Platz und
              moderne Schutztechnik.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Ein veralteter Sicherungskasten bietet oftmals nicht ausreichend Reserven und entspricht unter Umständen
              nicht mehr den heutigen technischen Anforderungen. Im Rahmen einer Modernisierung kann die Unterverteilung
              an den aktuellen Stand angepasst und für zukünftige Erweiterungen vorbereitet werden.
            </p>
          </div>
        </div>
      </section>

      <ResponsiveChecklistSection
        title="Wann ist eine Erneuerung sinnvoll?"
        intro="Eine Modernisierung kann sinnvoll sein, wenn:"
        items={renewalChecklistItems}
      />

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
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen bei der Modernisierung von
        Sicherungskästen und Unterverteilungen.
      </SectionTransition>

      {/* Unsere Leistungen */}
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
        Abnahme Ihrer modernisierten Unterverteilung.
      </SectionTransition>

      <HorizontalProcessTimeline title="Projektablauf" steps={processSteps} />

      {/* Ansprechpartner */}
      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Ihr Ansprechpartner für Sicherungskästen & Unterverteilungen</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Wir beraten Sie, ob eine Modernisierung Ihres Sicherungskastens sinnvoll ist und koordinieren sämtliche
              erforderlichen Arbeiten zuverlässig.
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
              <p>Senden Sie uns Fotos Ihrer Unterverteilung für eine erste unverbindliche Einschätzung.</p>
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
        title="Wann sollte ein Sicherungskasten erneuert werden?"
        description="Bernd erklärt, warum moderne Unterverteilungen für die Sicherheit einer Immobilie wichtig sind, welche Vorteile FI-Schutzschalter bieten und wann sich eine Erneuerung lohnt."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt die Erneuerung eines Sicherungskastens."
        duration="ca. 3 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      {/* CTA */}
      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Sicherungskasten modernisieren und langfristig sicher planen</h2>
            <p>
              Ein moderner Sicherungskasten schafft die Grundlage für eine sichere Elektroinstallation und zukünftige
              Erweiterungen. Wir begleiten Ihr Projekt von der Beratung bis zur Koordination der fachgerechten Umsetzung.
            </p>
            <SicherungskastenCTA centered />
          </div>
        </div>
      </section>

      {sicherungskastenLegacySections.length > 0 && (
        <SeoKnowledgeDrawer
          title="Weitere Informationen"
          sections={sicherungskastenLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="sicherungskasten-legacy-panel"
        />
      )}

      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Sicherungskasten erneuern"
        intro={sicherungskastenSeoIntro}
        sections={seoTocSections}
        ctaLabel="Kostenlose Beratung"
        ctaHref="#kontakt"
        panelId="sicherungskasten-seo-panel"
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Elektroprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Sicherungskasten-Modernisierung, Unterverteilungen, Altbau-Elektrik und Wärmepumpenanschlüsse."
        projects={radexLiveProjects}
      />

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen" />

      {/* Das könnte Sie ebenfalls interessieren */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Das könnte Sie ebenfalls interessieren</h2>
          </div>
          <PremiumIconCards cards={relatedCards} linked largeIcons />
        </div>
      </section>

      {/* Warum sich ein neuer Sicherungskasten auszahlt */}
      <section className="br-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Warum sich ein neuer Sicherungskasten auszahlt</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Ein moderner Sicherungskasten bildet das Zentrum einer sicheren und leistungsfähigen Elektroinstallation.
              Er sorgt für eine strukturierte Verteilung aller Stromkreise, verbessert den Schutz von Personen und
              elektrischen Anlagen und schafft die technischen Voraussetzungen für zukünftige Erweiterungen.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Gerade im Zuge einer Sanierung lohnt es sich, die Unterverteilung auf den aktuellen Stand zu bringen. So
              lassen sich spätere Investitionen in Wärmepumpen, Photovoltaikanlagen, Smart-Home-Systeme oder Wallboxen
              einfacher umsetzen. Gleichzeitig wird die Elektroinstallation übersichtlich aufgebaut und an die heutigen
              Anforderungen angepasst.
            </p>
          </div>
        </div>
      </section>

      {/* Abschluss */}
      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Mehr Sicherheit beginnt mit einer modernen Unterverteilung</h2>
            <p>
              Ein neuer Sicherungskasten schafft die Grundlage für eine sichere, zuverlässige und zukunftsfähige
              Elektroinstallation. Wir beraten Sie persönlich, prüfen den Zustand Ihrer bestehenden Anlage und
              koordinieren die fachgerechte Modernisierung mit qualifizierten Elektrofachbetrieben – transparent,
              strukturiert und im gesamten Rhein-Main-Gebiet.
            </p>
            <SicherungskastenCTA centered />
          </div>
        </div>
      </section>
    </main>
  );
}
