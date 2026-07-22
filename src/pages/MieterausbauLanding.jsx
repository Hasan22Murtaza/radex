import { useEffect } from 'react';
import {
  LayoutTemplate,
  Network,
  Clock3,
  Building2,
  ShieldCheck,
  MapPinned,
  BadgeEuro,
  UserRound,
  CalendarClock,
  MessagesSquare,
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
  mieterausbauSeoIntro,
  mieterausbauSeoSections,
} from '../data/mieterausbauSeoContent';
import { mieterausbauLegacySections } from '../data/mieterausbauLegacyContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/mieterausbau-rhein-main';
const HERO_IMAGE = '/img/mieterausbau-rhein-main-radex.webp';
const HERO_IMAGE_FALLBACK = '/img/gewerbesanierung-hero.webp';
const VIDEO_POSTER = '/img/bernd-mieterausbau-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Mieterausbau Rhein-Main | Individuelle Gewerbeflächen schlüsselfertig ausbauen';
const META_DESCRIPTION =
  'Mieterausbau im Rhein-Main-Gebiet für Büros, Praxen, Ladenlokale und Gewerbeflächen. Individuelle Ausbaukonzepte und schlüsselfertige Umsetzung.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Gewerbe & Objektsanierung', path: '/gewerbe-objektsanierung-rhein-main' },
  { name: 'Mieterausbau', path: PAGE_PATH },
];

function MieterausbauCTA({ isHero = false, centered = false }) {
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
    title: 'Individuelle Ausbaukonzepte',
    desc: 'Jede Fläche wird nach den Anforderungen des zukünftigen Mieters geplant und umgesetzt.',
    icon: LayoutTemplate,
  },
  {
    title: 'Alle Gewerke koordiniert',
    desc: 'Ein Ansprechpartner steuert sämtliche Ausbauarbeiten effizient und transparent.',
    icon: Network,
  },
  {
    title: 'Terminsichere Umsetzung',
    desc: 'Klare Bauabläufe sorgen für eine pünktliche Fertigstellung Ihrer Gewerbeflächen.',
    icon: Clock3,
  },
  {
    title: 'Für jede Gewerbefläche',
    desc: 'Ob Büro, Praxis, Ladenlokal oder Gewerbeeinheit – wir entwickeln passende Ausbaukonzepte.',
    icon: Building2,
  },
  {
    title: 'Hochwertige Ausführung',
    desc: 'Qualitätsmaterialien und präzise Verarbeitung sorgen für langlebige Ergebnisse.',
    icon: ShieldCheck,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Kurze Wege ermöglichen eine persönliche Betreuung während des gesamten Projekts.',
    icon: MapPinned,
  },
];

const qualityCards = [
  {
    title: 'Transparente Kosten',
    desc: 'Klare Angebote schaffen Planungssicherheit.',
    icon: BadgeEuro,
  },
  {
    title: 'Persönliche Betreuung',
    desc: 'Ein fester Ansprechpartner begleitet Ihr Projekt.',
    icon: UserRound,
  },
  {
    title: 'Zuverlässige Termine',
    desc: 'Der Ausbau erfolgt nach einem abgestimmten Zeitplan.',
    icon: CalendarClock,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Alle Ausbauarbeiten werden zentral organisiert.',
    icon: Network,
  },
  {
    title: 'Kontrollierte Qualität',
    desc: 'Jeder Bauabschnitt wird sorgfältig geprüft.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie werden während des gesamten Projekts über Fortschritt und Termine informiert.',
    icon: MessagesSquare,
  },
];

const leistungenCards = [
  {
    title: 'Individueller Mieterausbau',
    desc: 'Jede Gewerbefläche wird exakt auf die Anforderungen des zukünftigen Mieters abgestimmt – funktional, wirtschaftlich und termingerecht.',
    icon: LayoutTemplate,
    to: '#schluesselfertiger-mieterausbau',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Innenausbau für Gewerbeflächen',
    desc: 'Wir realisieren moderne Raumlösungen mit Trockenbau, Bodenbelägen, Malerarbeiten, Decken- und Wandgestaltung sowie technischen Anpassungen.',
    icon: Hammer,
    to: '/innenausbau-umbau-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Schlüsselfertige Übergabe',
    desc: 'Von der ersten Planung bis zur bezugsfertigen Übergabe koordinieren wir sämtliche Gewerke aus einer Hand.',
    icon: KeyRound,
    to: '#schluesselfertiger-mieterausbau',
    cta: 'Mehr erfahren',
  },
];

const processSteps = [
  {
    title: 'Bedarfsanalyse',
    desc: 'Wir besprechen Nutzung, Anforderungen und Wünsche des zukünftigen Mieters und analysieren die vorhandene Fläche.',
    icon: Search,
  },
  {
    title: 'Ausbauplanung',
    desc: 'Auf Grundlage der Anforderungen entwickeln wir ein individuelles Ausbaukonzept inklusive Termin- und Kostenplanung.',
    icon: ClipboardList,
  },
  {
    title: 'Umsetzung',
    desc: 'Unsere Fachbetriebe setzen sämtliche Ausbauarbeiten fachgerecht und effizient um.',
    icon: Hammer,
  },
  {
    title: 'Qualitätsprüfung',
    desc: 'Vor der Übergabe werden sämtliche Arbeiten sorgfältig kontrolliert und dokumentiert.',
    icon: ShieldCheck,
  },
  {
    title: 'Bezugsfertige Übergabe',
    desc: 'Die modernisierte Gewerbefläche wird schlüsselfertig und einsatzbereit übergeben.',
    icon: CircleCheckBig,
  },
];

const videoTranscript =
  'Ein erfolgreicher Mieterausbau beginnt mit einer klaren Planung. Gemeinsam definieren wir die Anforderungen des zukünftigen Nutzers und entwickeln daraus ein passendes Ausbaukonzept. Anschließend koordinieren wir alle Gewerke und sorgen dafür, dass die Fläche termingerecht und bezugsfertig übergeben werden kann.';

const radexLiveProjects = [
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Bürofläche nach Mieterausbau',
    location: 'Frankfurt am Main',
    desc: 'Individueller Ausbau mit Trockenbau, Elektro und Bodenbelägen – termingerecht für den neuen Mieter.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gewerbesanierung-radex-live.webp',
    badge: 'Vorher & Nachher',
    title: 'Ladenlokal vorbereiten',
    location: 'Offenbach am Main',
    desc: 'Verkaufsfläche mit neuer Raumaufteilung, Beleuchtung und Oberflächen schlüsselfertig übergeben.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/buero1.webp',
    badge: 'Abgeschlossen',
    title: 'Praxisausbau im Bestand',
    location: 'Darmstadt',
    desc: 'Funktionale Raumaufteilung, Sanitärbereiche und technische Anpassungen für eine neue Praxis.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gewerbesanierung-hero.webp',
    badge: 'LIVE',
    title: 'Gewerbefläche für neuen Mieter',
    location: 'Rodgau',
    desc: 'Koordinierter Mieterausbau mit Rückbau, Trockenbau, SHK und schlüsselfertiger Übergabe.',
    cta: 'Projekt ansehen',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Wie funktioniert ein professioneller Mieterausbau?',
  description:
    'Bernd erklärt, wie aus einer leeren oder bestehenden Gewerbefläche ein bezugsfertiges Büro, Ladenlokal oder eine moderne Praxis entsteht und warum eine frühzeitige Planung entscheidend für den Projekterfolg ist.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function MieterausbauLanding() {
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
        name: 'Mieterausbau Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page mieterausbau-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/gewerbe-objektsanierung-rhein-main">Gewerbe &amp; Objektsanierung</Link>
              <span aria-hidden="true">↓</span>
              <span>Mieterausbau</span>
            </nav>
            <p className="br-hero-kicker">
              <LayoutTemplate size={16} strokeWidth={1.5} aria-hidden="true" /> Mieterausbau · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Mieterausbau im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Radex realisiert individuelle Mieterausbauten für Büros, Praxen, Ladenlokale und Gewerbeeinheiten – von
              der Planung bis zur schlüsselfertigen Übergabe.
            </p>
            <p className="br-hero-text">
              Jede Gewerbefläche muss zu den Anforderungen ihres zukünftigen Nutzers passen. Ein professioneller
              Mieterausbau schafft funktionale Arbeitsbereiche, moderne Verkaufsflächen und repräsentative
              Geschäftsräume. Radex übernimmt die komplette Planung, Koordination und Umsetzung aller Ausbauarbeiten und
              sorgt dafür, dass Ihre Flächen termingerecht bezugsfertig werden.
            </p>
            <MieterausbauCTA isHero />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE}), url(${HERO_IMAGE_FALLBACK})` }}
          role="img"
          aria-label="Professionell ausgebautes Gewerbeobjekt nach einem Mieterausbau im Rhein-Main-Gebiet."
          title="Mieterausbau Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Ein Mieterausbau beginnt mit den Anforderungen des zukünftigen Nutzers. Raumaufteilung, technische
              Ausstattung und Design werden individuell geplant und auf die vorgesehene Nutzung abgestimmt. Radex
              begleitet Unternehmen, Vermieter und Investoren bei der schlüsselfertigen Umsetzung und koordiniert
              sämtliche Ausbaugewerke aus einer Hand.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Ganz gleich, ob Bürofläche, Praxis, Einzelhandel oder Gewerbeeinheit – wir schaffen moderne Räume, die sofort
              genutzt werden können und langfristig überzeugen.
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
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen im Bereich Mieterausbau – von der
        individuellen Planung bis zur schlüsselfertigen Übergabe.
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
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der Bedarfsanalyse bis zur bezugsfertigen
        Übergabe Ihrer Gewerbefläche.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Bedarfsanalyse bis zur schlüsselfertigen Übergabe – so begleiten wir Ihren Mieterausbau Schritt für Schritt."
        steps={processSteps}
      />

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ihre Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Das Team Mieterausbau</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleiter begleiten Eigentümer, Vermieter und Unternehmen bei der Realisierung individueller
              Mieterausbauten. Von der ersten Planung bis zur Fertigstellung koordinieren wir sämtliche Ausbauarbeiten
              und sorgen für eine reibungslose Umsetzung.
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
        title="Wie funktioniert ein professioneller Mieterausbau?"
        description="Bernd erklärt, wie aus einer leeren oder bestehenden Gewerbefläche ein bezugsfertiges Büro, Ladenlokal oder eine moderne Praxis entsteht und warum eine frühzeitige Planung entscheidend für den Projekterfolg ist."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf eines professionellen Mieterausbaus."
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Gestalten Sie Ihre Gewerbefläche nach Ihren Anforderungen.</h2>
            <p>
              Ob Büro, Praxis oder Ladenlokal – Radex entwickelt individuelle Ausbaukonzepte und übernimmt die komplette
              Umsetzung bis zur schlüsselfertigen Übergabe.
            </p>
            <MieterausbauCTA centered />
          </div>
        </div>
      </section>

      <div id="weitere-informationen">
        <SeoKnowledgeDrawer
          title="Weitere Informationen zum Mieterausbau"
          sections={mieterausbauLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="mieterausbau-legacy-panel"
        />
      </div>

      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Mieterausbau"
        intro={mieterausbauSeoIntro}
        sections={mieterausbauSeoSections}
        ctaLabel="Kostenlose Beratung"
        ctaHref="#kontakt"
        panelId="mieterausbau-seo-panel"
        showToc
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Mieterausbauten"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Büroflächen, Praxisausbauten, Ladenlokale und schlüsselfertige Gewerbeübergaben."
        projects={radexLiveProjects}
      />
    </main>
  );
}
