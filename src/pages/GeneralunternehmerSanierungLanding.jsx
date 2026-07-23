import { useEffect } from 'react';
import {
  Building2,
  Hammer,
  HousePlus,
  Wrench,
  ClipboardCheck,
  UserRound,
  Network,
  ClipboardList,
  MessagesSquare,
  ShieldCheck,
  CalendarClock,
  PhoneCall,
  Search,
  KeyRound,
  Phone,
  Mail,
  MessageCircle,
  HardHat,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildBreadcrumbSchema, buildServiceSchema } from '../useSeo';
import ReviewsMarquee from '../components/ReviewsMarquee';
import {
  PremiumIconCards,
  SectionTransition,
  SeoTocSection,
  SeoKnowledgeDrawer,
  RadexLiveSection,
  HorizontalProcessTimeline,
  BerndExplainsVideo,
  QualityPromiseBlock,
} from '../components/landing/SharedLandingParts';
import {
  generalunternehmerSanierungSeoIntro,
  generalunternehmerSanierungSeoSections,
} from '../data/generalunternehmerSanierungSeoContent';
import { generalunternehmerSanierungLegacySections } from '../data/generalunternehmerSanierungLegacyContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/generalunternehmer-sanierung-rhein-main';
const HERO_IMAGE = '/img/generalunternehmer-sanierung-rhein-main-hero.webp';
const VIDEO_POSTER = '/img/generalunternehmer-sanierung-bernd.webp';
const SEO_IMAGE = '/img/generalunternehmer-sanierung-projektplanung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Generalunternehmer & Sanierung Rhein-Main | Radex Objektmanagement';
const META_DESCRIPTION =
  'Generalunternehmer für Sanierungen im Rhein-Main-Gebiet. Komplettsanierung, Kernsanierung, Teilsanierung sowie Bauleitung und Projektsteuerung – alles aus einer Hand mit Radex Objektmanagement.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Generalunternehmer & Bauleitung', path: '/leistungen/generalunternehmer-bauleitung' },
  { name: 'Generalunternehmer & Sanierung', path: PAGE_PATH },
];

function GeneralunternehmerSanierungCTA({
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
        <a href={isHero ? '#leistungen' : '#kontakt'} className="btn br-btn-outline-orange">
          {secondaryLabel}
        </a>
      )}
    </div>
  );
}

const leistungenCards = [
  {
    title: 'Generalunternehmer',
    desc: 'Sie möchten sich um nichts kümmern? Wir übernehmen die komplette Organisation Ihres Bauprojekts – von der Planung über die Koordination aller Handwerker bis zur schlüsselfertigen Übergabe. Sie haben einen festen Ansprechpartner für alle Fragen.',
    icon: Building2,
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Komplettsanierung',
    desc: 'Ihre Immobilie soll vollständig modernisiert werden? Wir sanieren Wohnungen, Häuser und Gewerbeobjekte ganzheitlich. Alle Arbeiten werden professionell geplant und aufeinander abgestimmt.',
    icon: Hammer,
    to: '/komplettsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Kernsanierung',
    desc: 'Ihre Immobilie muss grundlegend erneuert werden? Wenn Gebäude technisch und baulich umfassend modernisiert werden müssen, übernehmen wir die vollständige Kernsanierung mit allen erforderlichen Gewerken.',
    icon: HousePlus,
    to: '/kernsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Teilsanierung',
    desc: 'Es soll nur ein bestimmter Bereich modernisiert werden? Nicht jedes Projekt erfordert eine vollständige Sanierung. Wir modernisieren gezielt einzelne Räume oder Gebäudebereiche – effizient und bedarfsgerecht.',
    icon: Wrench,
    to: '/teilsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bauleitung & Projektsteuerung',
    desc: 'Sie möchten Ihr Bauprojekt professionell begleiten lassen? Wir koordinieren alle beteiligten Gewerke, überwachen Termine, Qualität und Kosten und sorgen für einen reibungslosen Bauablauf.',
    icon: ClipboardCheck,
    to: '/bauleitung-projektsteuerung-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const whyRadexCards = [
  {
    title: 'Ein Ansprechpartner',
    desc: 'Während des gesamten Projekts haben Sie einen festen Ansprechpartner, der alle Abläufe koordiniert und jederzeit für Ihre Fragen erreichbar ist.',
    icon: UserRound,
  },
  {
    title: 'Alle Gewerke aus einer Hand',
    desc: 'Wir übernehmen die Abstimmung sämtlicher beteiligter Fachbereiche und sorgen für einen reibungslosen Projektablauf.',
    icon: Network,
  },
  {
    title: 'Strukturierte Projektplanung',
    desc: 'Jedes Bauvorhaben wird sorgfältig geplant, damit Termine, Ressourcen und Abläufe optimal aufeinander abgestimmt sind.',
    icon: ClipboardList,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie werden regelmäßig über den aktuellen Projektstand informiert und behalten jederzeit den Überblick.',
    icon: MessagesSquare,
  },
  {
    title: 'Qualitätskontrolle',
    desc: 'Alle Arbeiten werden kontinuierlich überwacht, damit höchste Qualitätsstandards eingehalten werden.',
    icon: ShieldCheck,
  },
  {
    title: 'Termintreue Umsetzung',
    desc: 'Durch professionelle Bauleitung und Projektsteuerung sorgen wir für einen effizienten Ablauf und eine planbare Fertigstellung.',
    icon: CalendarClock,
  },
];

const processSteps = [
  {
    title: 'Persönliche Erstberatung',
    desc: 'Wir besprechen Ihr Bau- oder Sanierungsvorhaben, beantworten Ihre Fragen und klären gemeinsam, welche Lösung am besten zu Ihrer Immobilie passt.',
    icon: PhoneCall,
  },
  {
    title: 'Besichtigung & Bestandsaufnahme',
    desc: 'Vor Ort verschaffen wir uns einen genauen Überblick über den Zustand der Immobilie und erfassen alle relevanten Anforderungen für die Umsetzung.',
    icon: Search,
  },
  {
    title: 'Planung & Angebot',
    desc: 'Auf Grundlage der Bestandsaufnahme erstellen wir ein transparentes Konzept inklusive Leistungsumfang, Zeitplanung und Kostenübersicht.',
    icon: ClipboardList,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Wir übernehmen die Organisation sämtlicher beteiligter Handwerksbetriebe und koordinieren alle Arbeiten effizient und termingerecht.',
    icon: Building2,
  },
  {
    title: 'Bauleitung & Qualitätskontrolle',
    desc: 'Während der gesamten Bauphase überwachen wir Termine, Qualität und Fortschritt, damit alle Arbeiten fachgerecht ausgeführt werden.',
    icon: ShieldCheck,
  },
  {
    title: 'Fertigstellung & Übergabe',
    desc: 'Nach erfolgreicher Endkontrolle übergeben wir Ihnen Ihr fertiggestelltes Projekt – sauber, dokumentiert und bereit zur Nutzung.',
    icon: KeyRound,
  },
];

const radexLiveProjects = [
  {
    image: '/img/komplettsanierung-rhein-main-haus-wohnung.webp',
    badge: 'LIVE',
    title: 'Komplettsanierung Bestandsimmobilie',
    location: 'Frankfurt am Main',
    desc: 'Umfassende Modernisierung mit koordinierter Gewerkeabstimmung – von Rückbau bis zur schlüsselfertigen Übergabe.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/kernsanierung-rhein-main-bestandsimmobilie.webp',
    badge: 'Vorher & Nachher',
    title: 'Kernsanierung Einfamilienhaus',
    location: 'Darmstadt',
    desc: 'Grundlegende Erneuerung von Technik, Ausbau und Oberflächen mit zentraler Projektleitung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'Abgeschlossen',
    title: 'Teilsanierung Wohnung',
    location: 'Offenbach am Main',
    desc: 'Gezielte Modernisierung einzelner Räume mit abgestimmten Handwerksbetrieben.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Gewerbesanierung mit Bauleitung',
    location: 'Hanau',
    desc: 'Koordinierte Sanierung einer Gewerbefläche mit professioneller Projektsteuerung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-haus.webp',
    badge: 'Video',
    title: 'Generalunternehmer auf der Baustelle',
    location: 'Rodgau',
    desc: 'Authentischer Einblick in die Koordination mehrerer Gewerke bei einer umfangreichen Sanierung.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/renov1.webp',
    badge: 'Abgeschlossen',
    title: 'Sanierung aus einer Hand',
    location: 'Neu-Isenburg',
    desc: 'Komplettes Bauprojekt mit festem Ansprechpartner und strukturiertem Ablauf.',
    cta: 'Projekt ansehen',
  },
];

const videoTranscript =
  'Bei größeren Bauprojekten arbeiten oft viele verschiedene Gewerke zusammen. Ohne klare Koordination entstehen schnell Verzögerungen und Missverständnisse. Als Generalunternehmer übernehmen wir die komplette Organisation, koordinieren alle Beteiligten und sorgen dafür, dass Ihr Projekt effizient und termingerecht umgesetzt wird.';

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Warum ein Generalunternehmer Zeit, Kosten und Aufwand spart',
  description:
    'Bernd erklärt, wie Bauprojekte mit nur einem Ansprechpartner deutlich effizienter umgesetzt werden und welche Vorteile eine professionelle Projektsteuerung bietet.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function GeneralunternehmerSanierungLanding() {
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
        name: 'Generalunternehmer & Sanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page generalunternehmer-sanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/leistungen/generalunternehmer-bauleitung">Generalunternehmer &amp; Bauleitung</Link>
              <span aria-hidden="true">↓</span>
              <span>Generalunternehmer &amp; Sanierung</span>
            </nav>
            <p className="br-hero-kicker">
              <HardHat size={16} strokeWidth={1.5} aria-hidden="true" /> Generalunternehmer &amp; Sanierung ·
              Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">Generalunternehmer &amp; Sanierung im Rhein-Main-Gebiet</h1>
            <p className="br-hero-lead">
              Ein Ansprechpartner. Alle Gewerke. Ein erfolgreiches Bauprojekt.
            </p>
            <p className="br-hero-text">
              Ob Wohnung, Einfamilienhaus, Mehrfamilienhaus oder Gewerbeimmobilie – bei umfangreichen Bau- und
              Sanierungsprojekten ist eine professionelle Koordination entscheidend. Als Generalunternehmer übernimmt Radex
              Objektmanagement die Planung, Organisation und Umsetzung Ihres Projekts. Sie haben einen festen
              Ansprechpartner, während wir sämtliche Gewerke koordinieren und den Bauablauf effizient steuern.
            </p>
            <GeneralunternehmerSanierungCTA isHero secondaryLabel="Unsere Leistungen" />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Generalunternehmer für Sanierung und Bauprojekte im Rhein-Main-Gebiet."
          title="Modernisiertes Wohnhaus während einer hochwertigen Sanierung mit Handwerkern verschiedener Gewerke."
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Warum ein Generalunternehmer?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Viele Bauprojekte scheitern nicht an der eigentlichen Arbeit, sondern an der Abstimmung zwischen
              verschiedenen Handwerksbetrieben. Termine verschieben sich, Informationen gehen verloren und
              Verantwortlichkeiten sind oft unklar.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Mit Radex Objektmanagement erhalten Sie einen zentralen Ansprechpartner für Ihr gesamtes Projekt. Wir
              koordinieren sämtliche Gewerke, überwachen Qualität und Termine und sorgen dafür, dass Ihr Bauvorhaben
              strukturiert und effizient umgesetzt wird.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Ganz gleich, ob Sie eine komplette Immobilie modernisieren, eine umfassende Kernsanierung planen oder nur
              einzelne Bereiche erneuern möchten – wir begleiten Sie von der ersten Beratung bis zur fertigen Übergabe.
            </p>
          </div>
        </div>
      </section>

      <section id="leistungen" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <PremiumIconCards cards={leistungenCards} linked largeIcons />
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

      <QualityPromiseBlock intro="Bei umfangreichen Sanierungs- und Bauprojekten setzen wir auf klare Abläufe, zentrale Koordination und transparente Kommunikation – von der ersten Beratung bis zur Projektübergabe." />

      <SectionTransition>
        Von der Erstberatung bis zur fertigen Übergabe – im nächsten Abschnitt sehen Sie, wie wir Ihr Bauprojekt Schritt
        für Schritt begleiten.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der persönlichen Erstberatung bis zur dokumentierten Übergabe – so koordinieren wir Ihr Sanierungsprojekt im Rhein-Main-Gebiet."
        steps={processSteps}
      />

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              <strong>Ihr Ansprechpartner für Generalunternehmer &amp; Sanierung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Von der ersten Idee bis zur fertigen Übergabe begleitet Sie unser Team während des gesamten Projekts. Wir
              koordinieren sämtliche Gewerke, beantworten Ihre Fragen und sorgen für einen strukturierten sowie
              transparenten Ablauf.
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
                Senden Sie uns Fotos, Pläne oder Informationen zu Ihrem Bauvorhaben. Wir geben Ihnen eine erste
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
        title="Warum ein Generalunternehmer Zeit, Kosten und Aufwand spart"
        description="Bernd erklärt, wie Bauprojekte mit nur einem Ansprechpartner deutlich effizienter umgesetzt werden und welche Vorteile eine professionelle Projektsteuerung bietet."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt die Vorteile eines Generalunternehmers für Sanierungsprojekte."
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Ihr Bauprojekt beginnt mit einer guten Planung.</h2>
            <p>
              Ob komplette Modernisierung, umfangreiche Sanierung oder professionelle Bauleitung – mit Radex
              Objektmanagement erhalten Sie einen erfahrenen Partner, der Ihr Projekt zuverlässig plant, koordiniert und
              umsetzt. Lassen Sie sich unverbindlich beraten und finden Sie gemeinsam mit uns die passende Lösung.
            </p>
            <GeneralunternehmerSanierungCTA centered />
          </div>
        </div>
      </section>

      {generalunternehmerSanierungLegacySections.length > 0 && (
        <SeoKnowledgeDrawer
          title="Weitere Informationen"
          sections={generalunternehmerSanierungLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="generalunternehmer-sanierung-legacy-panel"
        />
      )}

      <SeoTocSection
        title="Unsere Leistungen im Bereich Generalunternehmer & Sanierung"
        intro={generalunternehmerSanierungSeoIntro}
        sections={generalunternehmerSanierungSeoSections}
        showAllContent
        panelId="generalunternehmer-sanierung-seo-panel"
        ctaLabel="Kostenlose Beratung"
      />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Noch unsicher, welche Sanierungsleistung Sie benötigen?</h2>
            <p>
              Beschreiben Sie uns kurz Ihr Vorhaben. Wir prüfen gemeinsam, ob ein Generalunternehmer, eine
              Komplettsanierung, eine Kernsanierung, eine Teilsanierung oder eine separate Bauleitung zu Ihrem Projekt
              passt.
            </p>
            <GeneralunternehmerSanierungCTA
              centered
              primaryLabel="Projekt kostenlos besprechen"
              secondaryLabel="Fotos und Pläne senden"
              showWhatsAppSecondary
            />
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '920px' }}>
          <img
            src={SEO_IMAGE}
            alt="Projektplanung für eine Sanierung mit Generalunternehmer im Rhein-Main-Gebiet."
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
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Komplettsanierungen, Kernsanierungen, Teilsanierungen, Gewerbesanierungen und Projekte mit professioneller Bauleitung."
        projects={radexLiveProjects}
      />
    </main>
  );
}
