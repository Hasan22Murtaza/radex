import { useEffect } from 'react';
import {
  HardHat,
  Building2,
  Network,
  Workflow,
  ClipboardCheck,
  ShieldCheck,
  MapPinned,
  BadgeEuro,
  UserRound,
  CalendarClock,
  MessagesSquare,
  Building,
  Hammer,
  KeyRound,
  Search,
  ClipboardList,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import '../data/legacyServiceStyles.css';
import useSeo, { buildBreadcrumbSchema, buildServiceSchema } from '../useSeo';
import ReviewsMarquee from '../components/ReviewsMarquee';
import {
  PremiumIconCards,
  SectionTransition,
  SeoKnowledgeDrawer,
  RadexLiveSection,
  HorizontalProcessTimeline,
  BerndExplainsVideo,
} from '../components/landing/SharedLandingParts';
import {
  gewerbesanierungSeoIntro,
  gewerbesanierungSeoSections,
} from '../data/gewerbesanierungSeoContent';
import { gewerbesanierungLegacySections } from '../data/gewerbesanierungLegacyContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/gewerbesanierung-rhein-main';
const HERO_IMAGE = '/img/gewerbesanierung-rhein-main-radex.webp';
const HERO_IMAGE_FALLBACK = '/img/gewerbesanierung-hero.webp';
const VIDEO_POSTER = '/img/bernd-gewerbesanierung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Gewerbesanierung Rhein-Main | Gewerbeimmobilien professionell sanieren';
const META_DESCRIPTION =
  'Gewerbesanierung im Rhein-Main-Gebiet für Büros, Praxen, Ladenlokale und Gewerbeimmobilien. Modernisierung, Umbau und Sanierung aus einer Hand.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Gewerbe & Objektsanierung', path: '/gewerbe-objektsanierung-rhein-main' },
  { name: 'Gewerbesanierung', path: PAGE_PATH },
];

function GewerbesanierungCTA({ isHero = false, centered = false }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href="#kontakt" className="btn br-btn-orange">
        Kostenlose Beratung
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
        <MessageCircle size={20} />
        Fotos per WhatsApp senden
      </a>
    </div>
  );
}

const whyRadexCards = [
  {
    title: 'Spezialisiert auf Gewerbesanierungen',
    desc: 'Wir modernisieren Gewerbeimmobilien jeder Größe – von einzelnen Gewerbeflächen bis zu kompletten Unternehmensstandorten.',
    icon: Building2,
  },
  {
    title: 'Alle Gewerke aus einer Hand',
    desc: 'Von der Planung bis zur Fertigstellung koordinieren wir sämtliche Fachbereiche zentral und effizient.',
    icon: Network,
  },
  {
    title: 'Sanierung im laufenden Betrieb',
    desc: 'Auf Wunsch erfolgt die Umsetzung abschnittsweise, damit Ihr Unternehmen möglichst ohne größere Unterbrechungen weiterarbeiten kann.',
    icon: Workflow,
  },
  {
    title: 'Transparente Projektsteuerung',
    desc: 'Klare Abläufe, feste Termine und regelmäßige Abstimmungen sorgen für maximale Planungssicherheit.',
    icon: ClipboardCheck,
  },
  {
    title: 'Hochwertige Ausführung',
    desc: 'Wir setzen auf geprüfte Materialien, erfahrene Fachbetriebe und konsequente Qualitätskontrollen.',
    icon: ShieldCheck,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Kurze Wege ermöglichen eine schnelle Betreuung Ihrer Projekte in der gesamten Region.',
    icon: MapPinned,
  },
];

const qualityCards = [
  {
    title: 'Festpreisgarantie',
    desc: 'Klare Angebote und transparente Leistungen schaffen maximale Kostensicherheit.',
    icon: BadgeEuro,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Während der gesamten Gewerbesanierung begleitet Sie dieselbe Projektleitung.',
    icon: UserRound,
  },
  {
    title: 'Termingerechte Umsetzung',
    desc: 'Eine strukturierte Bauzeitenplanung sorgt für einen zuverlässigen Projektablauf.',
    icon: CalendarClock,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Alle beteiligten Fachbereiche werden zentral organisiert und aufeinander abgestimmt.',
    icon: Network,
  },
  {
    title: 'Geprüfte Qualität',
    desc: 'Jeder Projektabschnitt wird sorgfältig kontrolliert und fachgerecht ausgeführt.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie erhalten jederzeit einen klaren Überblick über Termine, Baufortschritt und die nächsten Schritte.',
    icon: MessagesSquare,
  },
];

const leistungenCards = [
  {
    title: 'Gewerbeimmobilien sanieren',
    desc: 'Wir modernisieren bestehende Gewerbeimmobilien nachhaltig und wirtschaftlich. Von der ersten Analyse bis zur fertigen Übergabe koordinieren wir sämtliche Arbeiten und sorgen für einen reibungslosen Ablauf.',
    icon: Building,
    href: '#gewerbeimmobilien-sanieren',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Innenausbau & Modernisierung',
    desc: 'Durch neue Raumkonzepte, hochwertige Materialien und moderne Ausstattungen schaffen wir funktionale Arbeits- und Gewerbeflächen, die langfristig überzeugen.',
    icon: Hammer,
    href: '#innenausbau-gewerbe',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Schlüsselfertige Umsetzung',
    desc: 'Als zentraler Ansprechpartner übernehmen wir die komplette Projektkoordination aller Gewerke – zuverlässig, termingerecht und transparent.',
    icon: KeyRound,
    href: '#schluesselfertige-gewerbesanierung',
    cta: 'Mehr erfahren',
  },
];

const processSteps = [
  {
    title: 'Analyse',
    desc: 'Wir besichtigen die Immobilie, erfassen den Sanierungsbedarf und besprechen Ihre Ziele.',
    icon: Search,
  },
  {
    title: 'Planung',
    desc: 'Auf Basis der Bestandsaufnahme entwickeln wir ein individuelles Sanierungskonzept inklusive Zeit- und Kostenplanung.',
    icon: ClipboardList,
  },
  {
    title: 'Umsetzung',
    desc: 'Unsere Fachkräfte setzen sämtliche Arbeiten präzise, sauber und termingerecht um.',
    icon: Hammer,
  },
  {
    title: 'Qualitätskontrolle',
    desc: 'Alle Leistungen werden geprüft und dokumentiert, bevor das Projekt abgeschlossen wird.',
    icon: ShieldCheck,
  },
  {
    title: 'Übergabe',
    desc: 'Nach der gemeinsamen Abnahme erhalten Sie eine modernisierte Gewerbeimmobilie, die sofort genutzt werden kann.',
    icon: CircleCheckBig,
  },
];

const videoTranscript =
  'Jede Gewerbeimmobilie ist anders. Deshalb beginnt jede Sanierung mit einer gründlichen Analyse. Gemeinsam planen wir alle Maßnahmen, koordinieren sämtliche Gewerke und sorgen dafür, dass Ihr Projekt effizient und termingerecht umgesetzt wird – auf Wunsch auch während des laufenden Betriebs.';

const radexLiveProjects = [
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Büroumbau Eschborn',
    location: 'Eschborn',
    desc: 'Modernisierung von Büroflächen mit Trockenbau, Elektro und Bodenbelägen – koordiniert aus einer Hand.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gewerbesanierung-radex-live.webp',
    badge: 'Vorher & Nachher',
    title: 'Gewerbesanierung Frankfurt',
    location: 'Frankfurt am Main',
    desc: 'Umfassende Sanierung einer Gewerbefläche mit neuer Raumaufteilung und technischer Modernisierung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/buro2.webp',
    badge: 'Abgeschlossen',
    title: 'Praxisumbau Bad Homburg',
    location: 'Bad Homburg',
    desc: 'Funktionale Raumaufteilung, Sanitärbereiche und technische Anpassungen für eine medizinische Praxis.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gewerbesanierung-hero.webp',
    badge: 'LIVE',
    title: 'Ladenfläche modernisieren',
    location: 'Hanau',
    desc: 'Verkaufsfläche mit neuer Beleuchtung, robusten Böden und angepasster Elektroinstallation saniert.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buero1.webp',
    badge: 'Video',
    title: 'Gewerbesanierung im Bestand',
    location: 'Neu-Isenburg',
    desc: 'Authentischer Einblick in Trockenbau, Innenausbau und SHK-Arbeiten auf einer Gewerbebaustelle.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/gewerbesanierung-radex-live.webp',
    badge: 'Abgeschlossen',
    title: 'Servicefläche nach Mieterwechsel',
    location: 'Darmstadt',
    desc: 'Komplette Gewerbesanierung mit Rückbau, Technik und schlüsselfertiger Übergabe.',
    cta: 'Projekt ansehen',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Was gehört zu einer professionellen Gewerbesanierung?',
  description:
    'Bernd erklärt, wie eine Gewerbesanierung geplant wird, welche Leistungen dazugehören und warum eine strukturierte Projektsteuerung Zeit und Kosten spart.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function GewerbesanierungLanding() {
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
        name: 'Gewerbesanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page gewerbesanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/gewerbe-objektsanierung-rhein-main">Gewerbe &amp; Objektsanierung</Link>
              <span aria-hidden="true">↓</span>
              <span>Gewerbesanierung</span>
            </nav>
            <p className="br-hero-kicker">
              <HardHat size={16} strokeWidth={1.5} aria-hidden="true" /> Gewerbesanierung · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Professionelle Gewerbesanierung
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Radex modernisiert Gewerbeimmobilien wirtschaftlich, termingerecht und aus einer Hand – von der ersten
              Bestandsaufnahme bis zur schlüsselfertigen Übergabe.
            </p>
            <p className="br-hero-text">
              Eine moderne Gewerbeimmobilie steigert nicht nur den Wert einer Immobilie, sondern verbessert auch
              Arbeitsabläufe, Energieeffizienz und den ersten Eindruck bei Kunden und Mitarbeitern. Radex übernimmt die
              komplette Gewerbesanierung von Büros, Praxen, Ladenlokalen, Produktionsflächen und weiteren Gewerbeobjekten
              im gesamten Rhein-Main-Gebiet.
            </p>
            <p className="br-hero-text">
              Durch eine strukturierte Planung, die Koordination aller Gewerke und einen festen Ansprechpartner entstehen
              wirtschaftliche Lösungen mit hoher Ausführungsqualität – auch bei Sanierungen im laufenden Betrieb.
            </p>
            <GewerbesanierungCTA isHero />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE}), url(${HERO_IMAGE_FALLBACK})` }}
          role="img"
          aria-label="Professionell sanierte Gewerbeimmobilie im Rhein-Main-Gebiet durch Radex Objektmanagement."
          title="Modernisierte Gewerbeimmobilie mit hochwertigen Büro- und Gewerbeflächen nach einer umfassenden Sanierung."
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Jede Gewerbeimmobilie stellt unterschiedliche Anforderungen an Planung, Technik und Nutzung. Deshalb
              entwickelt Radex für jedes Projekt ein individuelles Sanierungskonzept, das auf die bestehende
              Gebäudestruktur und die zukünftige Nutzung abgestimmt ist.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Ob einzelne Büroetage, komplette Gewerbeeinheit oder größeres Bestandsgebäude – wir übernehmen die
              Planung, Koordination und Umsetzung sämtlicher Arbeiten. Dazu gehören unter anderem Trockenbau,
              Bodenbeläge, Malerarbeiten, Elektroinstallationen, Sanitärarbeiten sowie Modernisierungsmaßnahmen im
              Innenausbau.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Unsere Gewerbesanierungen realisieren wir unter anderem in Frankfurt am Main, Wiesbaden, Mainz, Offenbach
              am Main, Hanau, Darmstadt, Eschborn, Neu-Isenburg und im gesamten Rhein-Main-Gebiet.
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

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Qualitätsversprechen</h2>
          </div>
          <PremiumIconCards cards={qualityCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Von der Gewerbeimmobilien-Sanierung bis zur schlüsselfertigen Umsetzung – im nächsten Abschnitt finden Sie einen
        Überblick über unsere Leistungen im Bereich Gewerbesanierung.
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
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Analyse bis zur schlüsselfertigen
        Übergabe Ihrer modernisierten Gewerbeimmobilie.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Analyse bis zur schlüsselfertigen Übergabe – so begleiten wir Ihre Gewerbesanierung Schritt für Schritt."
        steps={processSteps}
      />

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ihre Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Das Team Gewerbesanierung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleiter begleiten Sanierungen jeder Größenordnung – von einzelnen Gewerbeflächen bis zu
              kompletten Bestandsimmobilien. Sie erhalten eine persönliche Betreuung, kurze Entscheidungswege und eine
              zuverlässige Koordination aller Projektphasen.
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
              <p>Projektfotos senden und eine unverbindliche Ersteinschätzung erhalten.</p>
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
        title="Was gehört zu einer professionellen Gewerbesanierung?"
        description="In diesem Video erklärt Bernd, wie eine Gewerbesanierung geplant wird, welche Leistungen dazugehören und warum eine strukturierte Projektsteuerung Zeit und Kosten spart."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf einer professionellen Gewerbesanierung im Rhein-Main-Gebiet."
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Ihre Gewerbeimmobilie verdient eine professionelle Sanierung.</h2>
            <p>
              Ob Modernisierung, Umbau oder komplette Gewerbesanierung – Radex begleitet Sie von der ersten Beratung bis
              zur schlüsselfertigen Fertigstellung mit festen Ansprechpartnern und transparenten Abläufen.
            </p>
            <GewerbesanierungCTA centered />
          </div>
        </div>
      </section>

      <div id="weitere-informationen">
        <SeoKnowledgeDrawer
          title="Weitere Informationen zur Gewerbesanierung"
          sections={gewerbesanierungLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="gewerbesanierung-legacy-panel"
        />
      </div>

      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Gewerbesanierung"
        intro={gewerbesanierungSeoIntro}
        sections={gewerbesanierungSeoSections}
        ctaLabel="Kostenlose Beratung"
        ctaHref="#kontakt"
        panelId="gewerbesanierung-seo-panel"
        showToc
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Gewerbesanierungen"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Büroumbauten, Praxissanierungen, Ladenflächen und schlüsselfertige Gewerbeübergaben."
        projects={radexLiveProjects}
      />
    </main>
  );
}
