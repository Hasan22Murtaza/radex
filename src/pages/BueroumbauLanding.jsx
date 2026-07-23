import { useEffect } from 'react';
import {
  BriefcaseBusiness,
  Building2,
  Workflow,
  Network,
  LayoutTemplate,
  Clock3,
  MapPinned,
  BadgeEuro,
  UserRound,
  CalendarClock,
  ShieldCheck,
  MessagesSquare,
  Building,
  KeyRound,
  Search,
  ClipboardList,
  Hammer,
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
  SeoTocSection,
  RadexLiveSection,
  HorizontalProcessTimeline,
  BerndExplainsVideo,
} from '../components/landing/SharedLandingParts';
import { bueroumbauSeoIntro, bueroumbauSeoSections } from '../data/bueroumbauSeoContent';
import { bueroumbauLegacySections } from '../data/bueroumbauLegacyContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/bueroumbau-rhein-main';
const HERO_IMAGE = '/img/bueroumbau-rhein-main-radex.webp';
const HERO_IMAGE_FALLBACK = '/img/buro2.webp';
const VIDEO_POSTER = '/img/bernd-bueroumbau-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Büroumbau Rhein-Main | Moderne Büros professionell umbauen';
const META_DESCRIPTION =
  'Büroumbau im Rhein-Main-Gebiet für Unternehmen jeder Größe. Moderne Arbeitswelten, neue Raumkonzepte und professionelle Umsetzung aus einer Hand.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Gewerbe & Objektsanierung', path: '/gewerbe-objektsanierung-rhein-main' },
  { name: 'Büroumbau', path: PAGE_PATH },
];

function BueroumbauCTA({ isHero = false, centered = false }) {
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
    title: 'Individuelle Bürokonzepte',
    desc: 'Jede Bürofläche wird auf Arbeitsprozesse, Unternehmensgröße und zukünftige Anforderungen abgestimmt.',
    icon: Building2,
  },
  {
    title: 'Umbau während des Betriebs',
    desc: 'Auf Wunsch erfolgt die Umsetzung abschnittsweise, sodass der Geschäftsbetrieb möglichst ohne größere Unterbrechungen weiterlaufen kann.',
    icon: Workflow,
  },
  {
    title: 'Alle Gewerke zentral koordiniert',
    desc: 'Ein Ansprechpartner übernimmt die Abstimmung sämtlicher Ausbauarbeiten und sorgt für einen reibungslosen Ablauf.',
    icon: Network,
  },
  {
    title: 'Moderne Raumlösungen',
    desc: 'Wir schaffen offene Arbeitsbereiche, Besprechungsräume, Empfangszonen und Rückzugsbereiche mit durchdachter Flächenplanung.',
    icon: LayoutTemplate,
  },
  {
    title: 'Effiziente Projektabwicklung',
    desc: 'Klare Zeitpläne und eine strukturierte Baukoordination sorgen für eine termingerechte Umsetzung.',
    icon: Clock3,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Kurze Wege ermöglichen eine persönliche Betreuung und schnelle Abstimmung während des gesamten Projekts.',
    icon: MapPinned,
  },
];

const qualityCards = [
  {
    title: 'Transparente Kosten',
    desc: 'Sie erhalten eine nachvollziehbare Kalkulation mit klar definierten Leistungen und hoher Planungssicherheit.',
    icon: BadgeEuro,
  },
  {
    title: 'Persönliche Projektbetreuung',
    desc: 'Ein fester Ansprechpartner begleitet Ihr Projekt von der ersten Besichtigung bis zur Übergabe.',
    icon: UserRound,
  },
  {
    title: 'Verlässliche Terminplanung',
    desc: 'Alle Arbeiten werden strukturiert geplant und auf Ihren Betriebsablauf abgestimmt.',
    icon: CalendarClock,
  },
  {
    title: 'Koordination aller Fachbereiche',
    desc: 'Trockenbau, Elektro, Bodenbeläge, Malerarbeiten und weitere Gewerke werden zentral gesteuert.',
    icon: Network,
  },
  {
    title: 'Qualitätsorientierte Ausführung',
    desc: 'Sorgfältige Verarbeitung und hochwertige Materialien sorgen für langlebige Ergebnisse.',
    icon: ShieldCheck,
  },
  {
    title: 'Offene Kommunikation',
    desc: 'Während des gesamten Büroumbaus informieren wir Sie transparent über Fortschritt, Termine und die nächsten Projektschritte.',
    icon: MessagesSquare,
  },
];

const leistungenCards = [
  {
    title: 'Büro modernisieren',
    desc: 'Bestehende Büroflächen werden funktional, technisch und optisch an moderne Arbeitsanforderungen angepasst. Wir schaffen Arbeitsumgebungen, die Produktivität, Zusammenarbeit und Flexibilität fördern.',
    icon: Building,
    href: '#bueroflaechen-modernisieren',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Büroflächen neu strukturieren',
    desc: 'Ob Open Space, Einzelbüros oder hybride Arbeitsbereiche – wir entwickeln Raumkonzepte, die optimal zu Ihrem Unternehmen passen.',
    icon: LayoutTemplate,
    href: '#open-space-buero',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Schlüsselfertiger Büroumbau',
    desc: 'Von der Planung bis zur Übergabe koordinieren wir sämtliche Gewerke und sorgen für einen reibungslosen Projektablauf.',
    icon: KeyRound,
    href: '#schluesselfertiger-bueroumbau',
    cta: 'Mehr erfahren',
  },
];

const processSteps = [
  {
    title: 'Analyse & Beratung',
    desc: 'Wir besichtigen Ihre Büroflächen, besprechen Ihre Anforderungen und entwickeln erste Lösungsansätze.',
    icon: Search,
  },
  {
    title: 'Planung',
    desc: 'Auf Basis Ihrer Ziele erstellen wir ein individuelles Umbaukonzept inklusive Termin- und Ablaufplanung.',
    icon: ClipboardList,
  },
  {
    title: 'Umsetzung',
    desc: 'Unsere Fachbetriebe setzen sämtliche Ausbauarbeiten fachgerecht und termingerecht um.',
    icon: Hammer,
  },
  {
    title: 'Qualitätskontrolle',
    desc: 'Alle Leistungen werden vor der Übergabe geprüft und dokumentiert.',
    icon: ShieldCheck,
  },
  {
    title: 'Fertige Übergabe',
    desc: 'Sie erhalten moderne Büroflächen, die sofort bezogen und genutzt werden können.',
    icon: CircleCheckBig,
  },
];

const videoTranscript =
  'Ein erfolgreicher Büroumbau beginnt mit einer guten Planung. Gemeinsam analysieren wir Ihre Arbeitsabläufe und entwickeln ein Raumkonzept, das Funktionalität, Design und Wirtschaftlichkeit optimal verbindet. Anschließend koordinieren wir alle Gewerke und sorgen für eine termingerechte Umsetzung.';

const radexLiveProjects = [
  {
    image: '/img/buro2.webp',
    badge: 'LIVE',
    title: 'Büroumbau Eschborn',
    location: 'Eschborn',
    desc: 'Modernisierung von Büroflächen mit Trockenbau, Elektro und Bodenbelägen – koordiniert aus einer Hand.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gewerbesanierung-radex-live.webp',
    badge: 'Vorher & Nachher',
    title: 'Bürofläche modernisieren',
    location: 'Frankfurt am Main',
    desc: 'Umfassender Büroumbau mit neuer Raumaufteilung, Akustiklösungen und technischer Modernisierung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/buro2.webp',
    badge: 'Abgeschlossen',
    title: 'Open-Space-Büro Neu-Isenburg',
    location: 'Neu-Isenburg',
    desc: 'Neue Raumstruktur mit Besprechungsräumen, Empfangsbereich und moderner Beleuchtung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gewerbesanierung-hero.webp',
    badge: 'LIVE',
    title: 'Büroumbau im laufenden Betrieb',
    location: 'Darmstadt',
    desc: 'Abschnittsweise Umsetzung mit Trockenbau, Elektro und Bodenbelägen während des Geschäftsbetriebs.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buro2.webp',
    badge: 'Video',
    title: 'Büroumbau im Bestand',
    location: 'Wiesbaden',
    desc: 'Authentischer Einblick in Trockenbau, Innenausbau und technische Anpassungen auf einer Bürobaustelle.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/gewerbesanierung-radex-live.webp',
    badge: 'Abgeschlossen',
    title: 'Bürofläche nach Mieterwechsel',
    location: 'Mainz',
    desc: 'Kompletter Büroumbau mit Rückbau, Technik und schlüsselfertiger Übergabe.',
    cta: 'Projekt ansehen',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Wie läuft ein professioneller Büroumbau ab?',
  description:
    'Erfahren Sie, wie moderne Büroflächen geplant werden, welche Arbeiten während eines Büroumbaus durchgeführt werden und wie Radex sämtliche Gewerke koordiniert.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function BueroumbauLanding() {
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
        name: 'Büroumbau Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page bueroumbau-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/gewerbe-objektsanierung-rhein-main">Gewerbe &amp; Objektsanierung</Link>
              <span aria-hidden="true">↓</span>
              <span>Büroumbau</span>
            </nav>
            <p className="br-hero-kicker">
              <BriefcaseBusiness size={16} strokeWidth={1.5} aria-hidden="true" /> Büroumbau · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Büroumbau im Rhein-Main-Gebiet
              <br />
              <span>Moderne Arbeitswelten mit Konzept</span>
            </h1>
            <p className="br-hero-lead">
              Radex plant und realisiert Büroumbauten, die Funktionalität, Design und effiziente Arbeitsabläufe
              miteinander verbinden – von der ersten Idee bis zur schlüsselfertigen Übergabe.
            </p>
            <p className="br-hero-text">
              Ein Büro ist mehr als ein Arbeitsplatz. Es beeinflusst Kommunikation, Produktivität und den ersten
              Eindruck bei Kunden sowie Mitarbeitenden. Mit einem durchdachten Büroumbau entstehen moderne
              Arbeitswelten, die sich an neue Unternehmensstrukturen, flexible Arbeitsmodelle und zukünftiges Wachstum
              anpassen.
            </p>
            <p className="br-hero-text">
              Radex begleitet Unternehmen, Eigentümer und Investoren bei der Modernisierung bestehender Büroflächen. Ob
              einzelne Etagen, komplette Bürogebäude oder laufende Umbauten während des Geschäftsbetriebs – wir
              koordinieren sämtliche Arbeiten und schaffen hochwertige Arbeitsumgebungen mit klaren Abläufen und festen
              Ansprechpartnern.
            </p>
            <BueroumbauCTA isHero />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE}), url(${HERO_IMAGE_FALLBACK})` }}
          role="img"
          aria-label="Modernisierte Bürofläche nach einem professionellen Büroumbau im Rhein-Main-Gebiet."
          title="Modernes Großraumbüro mit Besprechungsräumen, hochwertigen Arbeitsplätzen und zeitgemäßer Innenarchitektur nach einem professionellen Büroumbau."
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Unternehmen verändern sich – und mit ihnen die Anforderungen an ihre Büroflächen. Neue Arbeitsweisen,
              wachsende Teams oder eine effizientere Nutzung vorhandener Räume machen einen professionellen Büroumbau
              häufig zur wirtschaftlichsten Lösung.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex entwickelt individuelle Umbaukonzepte für kleine Büros, mehrgeschossige Bürogebäude und
              Unternehmenszentralen. Von der Planung über den Innenausbau bis zur Fertigstellung koordinieren wir
              sämtliche Gewerke und schaffen moderne Arbeitswelten, die Funktionalität, Komfort und ein professionelles
              Erscheinungsbild miteinander verbinden.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Unsere Projekte realisieren wir unter anderem in Frankfurt am Main, Eschborn, Neu-Isenburg, Wiesbaden,
              Mainz, Offenbach am Main, Darmstadt und im gesamten Rhein-Main-Gebiet.
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
        Von der Büromodernisierung bis zum schlüsselfertigen Umbau – im nächsten Abschnitt finden Sie einen Überblick
        über unsere Leistungen im Bereich Büroumbau.
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
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Analyse bis zur
        schlüsselfertigen Übergabe Ihrer modernisierten Büroflächen.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Analyse bis zur fertigen Übergabe – so begleiten wir Ihren Büroumbau Schritt für Schritt."
        steps={processSteps}
      />

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ihre Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Das Team Büroumbau</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleiter begleiten Unternehmen bei der Modernisierung und Umgestaltung bestehender
              Büroflächen. Von der ersten Beratung bis zur Fertigstellung erhalten Sie einen festen Ansprechpartner und
              eine transparente Projektkoordination.
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
              <p>Fotos senden und eine erste Einschätzung erhalten.</p>
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
        title="Wie läuft ein professioneller Büroumbau ab?"
        description="Erfahren Sie, wie moderne Büroflächen geplant werden, welche Arbeiten während eines Büroumbaus durchgeführt werden und wie Radex sämtliche Gewerke koordiniert."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf eines professionellen Büroumbaus im Rhein-Main-Gebiet."
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Gestalten Sie Ihre Büroflächen zukunftssicher.</h2>
            <p>
              Ob einzelne Büroräume oder komplette Unternehmensstandorte – Radex entwickelt individuelle Umbaukonzepte
              und realisiert moderne Arbeitswelten mit einem festen Ansprechpartner und klaren Projektabläufen.
            </p>
            <BueroumbauCTA centered />
          </div>
        </div>
      </section>

      <div id="weitere-informationen">
        <SeoKnowledgeDrawer
          title="Weitere Informationen zum Büroumbau"
          sections={bueroumbauLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="bueroumbau-legacy-panel"
        />
      </div>

      <SeoTocSection
        title="Unsere Leistungen im Bereich Büroumbau"
        intro={bueroumbauSeoIntro}
        sections={bueroumbauSeoSections}
        showAllContent
        panelId="bueroumbau-seo-panel"
        ctaLabel="Kostenlose Beratung"
        ctaHref="#kontakt"
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Büroumbauten"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Büromodernisierungen, Open-Space-Konzepte, Besprechungsräume und schlüsselfertige Büroübergaben."
        projects={radexLiveProjects}
      />
    </main>
  );
}
