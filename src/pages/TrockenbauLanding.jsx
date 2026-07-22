import { useEffect } from 'react';
import {
  PanelsTopLeft,
  Workflow,
  VolumeX,
  Shield,
  Clock3,
  Hammer,
  BadgeEuro,
  UserRound,
  CalendarClock,
  ShieldCheck,
  MessagesSquare,
  Sparkles,
  PanelTop,
  SquareStack,
  Wrench,
  HousePlus,
  PhoneCall,
  Ruler,
  ClipboardList,
  PaintRoller,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  Building2,
  Home,
  Briefcase,
  Store,
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
  SeoKnowledgeDrawer,
  RadexLiveSection,
  HorizontalProcessTimeline,
} from '../components/landing/SharedLandingParts';
import {
  trockenbauSeoIntro,
  trockenbauSeoSections,
  trockenbauSeoLinkSections,
} from '../data/trockenbauSeoContent';

const PAGE_PATH = '/trockenbau-rhein-main';
const HERO_IMAGE = '/img/trockenbau-rhein-main-radex.webp';
const VIDEO_POSTER = '/img/bernd-trockenbau-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Trockenbau Rhein-Main | Moderne Trockenbaulösungen von Radex';
const META_DESCRIPTION =
  'Professioneller Trockenbau im Rhein-Main-Gebiet. Trockenbauwände, Decken, Schallschutz, Brandschutz und individuelle Raumlösungen für Wohn- und Gewerbeimmobilien.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Innenausbau & Umbau', path: '/innenausbau-umbau-rhein-main' },
  { name: 'Trockenbau', path: PAGE_PATH },
];

function TrockenbauCTA({ isHero = false, centered = false }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href="#kontakt" className="btn br-btn-orange">
        Kostenlose Erstberatung
      </a>
      <a href="#kontakt" className="btn br-btn-outline-orange">
        Projekt anfragen
      </a>
    </div>
  );
}

const whyRadexCards = [
  {
    title: 'Individuelle Raumlösungen',
    desc: 'Trockenbau ermöglicht flexible Grundrisse und eine optimale Nutzung vorhandener Flächen.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Koordination aller Ausbauarbeiten',
    desc: 'Trockenbau wird optimal mit Maler-, Boden-, Elektro- und weiteren Ausbaugewerken abgestimmt.',
    icon: Workflow,
  },
  {
    title: 'Schallschutzlösungen',
    desc: 'Je nach Projektanforderung integrieren wir geeignete Trockenbausysteme zur Verbesserung der Raumakustik.',
    icon: VolumeX,
  },
  {
    title: 'Projektbezogene Brandschutzsysteme',
    desc: 'Bei entsprechenden Anforderungen werden geeignete Trockenbausysteme entsprechend Planung und Ausführung berücksichtigt.',
    icon: Shield,
  },
  {
    title: 'Effiziente Bauabläufe',
    desc: 'Trockenbau ermöglicht kurze Bauzeiten und flexible Anpassungen während des Innenausbaus.',
    icon: Clock3,
  },
  {
    title: 'Hochwertige Verarbeitung',
    desc: 'Präzise Montage und sorgfältige Detailausführung bilden die Grundlage langlebiger Trockenbaulösungen.',
    icon: Hammer,
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
    desc: 'Alle Trockenbauarbeiten werden effizient geplant und mit den übrigen Gewerken abgestimmt.',
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
    desc: 'Moderne Trockenbausysteme und eine präzise Ausführung schaffen dauerhaft hochwertige Innenräume.',
    icon: Sparkles,
  },
];

const leistungenCards = [
  {
    title: 'Trockenbauwände',
    desc: 'Neue Innenwände und Raumtrennungen schaffen flexible Grundrisse für Wohn- und Gewerbeimmobilien.',
    icon: PanelsTopLeft,
    to: '#trockenbauwaende',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Deckensysteme',
    desc: 'Abgehängte Decken für Beleuchtung, Lüftung, Akustik und moderne Raumgestaltung.',
    icon: PanelTop,
    to: '#deckensysteme',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Schallschutz & Brandschutz',
    desc: 'Projektbezogene Trockenbausysteme zur Verbesserung der Raumakustik sowie zur Umsetzung geplanter Brandschutzanforderungen.',
    icon: Shield,
    to: '#schallschutz',
    cta: 'Mehr erfahren',
  },
];

const typischeLeistungenCards = [
  {
    title: 'Trennwände',
    desc: 'Flexible Raumaufteilungen für Wohnungen, Häuser und Gewerbeobjekte.',
    icon: SquareStack,
  },
  {
    title: 'Installationswände',
    desc: 'Verkleidung von Leitungen sowie Vorbereitung für Sanitär-, Elektro- und Haustechnikinstallationen.',
    icon: Wrench,
  },
  {
    title: 'Abgehängte Decken',
    desc: 'Moderne Deckensysteme mit Platz für Beleuchtung, Lüftung oder Akustikelemente.',
    icon: PanelTop,
  },
  {
    title: 'Dachgeschossausbau',
    desc: 'Trockenbaulösungen für den Ausbau und die Modernisierung von Dachgeschossen.',
    icon: HousePlus,
  },
  {
    title: 'Schallschutz',
    desc: 'Geeignete Wand- und Deckensysteme können die Schallübertragung zwischen Räumen reduzieren.',
    icon: VolumeX,
  },
  {
    title: 'Brandschutz',
    desc: 'Projektbezogene Trockenbausysteme können zur Umsetzung geplanter Brandschutzkonzepte beitragen.',
    icon: ShieldCheck,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Wir besprechen Ihre Anforderungen, den gewünschten Grundriss und die geplante Nutzung der Räume.',
    icon: PhoneCall,
  },
  {
    title: 'Planung',
    desc: 'Gemeinsam entwickeln wir ein passendes Trockenbaukonzept einschließlich Wand-, Decken- und Installationslösungen.',
    icon: Ruler,
  },
  {
    title: 'Angebot',
    desc: 'Sie erhalten ein transparentes Angebot mit einem klar definierten Leistungsumfang.',
    icon: ClipboardList,
  },
  {
    title: 'Montage',
    desc: 'Unsere Fachkräfte errichten Wände, Decken und weitere Trockenbausysteme präzise nach Planung.',
    icon: Hammer,
  },
  {
    title: 'Oberflächenvorbereitung',
    desc: 'Verspachtelung, Schleifarbeiten und Vorbereitung für Maler- oder weitere Ausbauarbeiten.',
    icon: PaintRoller,
  },
  {
    title: 'Fertigstellung',
    desc: 'Nach Abschluss aller Arbeiten erfolgt die gemeinsame Abnahme und Übergabe.',
    icon: CircleCheckBig,
  },
];

const einsatzbereicheCards = [
  {
    title: 'Wohnungen',
    desc: 'Flexible Raumlösungen für Eigentums- und Mietwohnungen.',
    icon: Building2,
  },
  {
    title: 'Einfamilienhäuser',
    desc: 'Trockenbau für Modernisierung, Umbau und Dachgeschossausbau.',
    icon: Home,
  },
  {
    title: 'Bürogebäude',
    desc: 'Neue Büros, Besprechungsräume und funktionale Arbeitsplatzkonzepte.',
    icon: Briefcase,
  },
  {
    title: 'Gewerbeimmobilien',
    desc: 'Trockenbausysteme für Verkaufsflächen, Praxen, Lager- und Produktionsbereiche.',
    icon: Store,
  },
];

const radexLiveProjects = [
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Trockenbauwände Büroumbau',
    location: 'Frankfurt am Main',
    desc: 'Neue Raumstruktur mit Trockenbauwänden und abgehängten Decken – laufendes Projekt mit täglichen Updates.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buero2.webp',
    badge: 'Abgeschlossen',
    title: 'Büroausbau mit Deckensystemen',
    location: 'Offenbach am Main',
    desc: 'Abgehängte Decken mit integrierter Beleuchtung und Akustik für moderne Arbeitsplätze.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnzimmer.webp',
    badge: 'Vorher & Nachher',
    title: 'Wohnungsmodernisierung mit Trockenbau',
    location: 'Darmstadt',
    desc: 'Neue Raumaufteilung, Trockenbauwände und Oberflächenvorbereitung in einer Bestandswohnung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/renov1.webp',
    badge: 'Abgeschlossen',
    title: 'Dachgeschossausbau',
    location: 'Rodgau',
    desc: 'Dachgeschoss mit Trockenbauwänden, Dämmung und abgehängten Decken zu neuem Wohnraum ausgebaut.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'LIVE',
    title: 'Hausumbau mit Trockenbau',
    location: 'Dreieich',
    desc: 'Grundrissänderung und Trockenbau im Einfamilienhaus – koordiniert mit Maler- und Bodenarbeiten.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-haus.webp',
    badge: 'Video',
    title: 'Gewerbeausbau Trockenbau',
    location: 'Neu-Isenburg',
    desc: 'Authentischer Einblick in Trockenbauarbeiten, Deckensysteme und Anschlussgewerke auf einer Gewerbefläche.',
    cta: 'Video ansehen',
  },
];

const videoTranscript =
  'Trockenbau bietet eine schnelle und flexible Möglichkeit, Räume neu zu strukturieren. Gemeinsam planen wir die optimale Lösung für Ihr Projekt und koordinieren anschließend alle Arbeiten – von der Montage der Wände bis zur Vorbereitung für Maler- und Bodenarbeiten.';

const faqsData = [
  {
    q: 'Was kostet Trockenbau im Rhein-Main-Gebiet?',
    a: 'Die Kosten hängen von Umfang, Wand- und Deckenflächen, Schallschutzanforderungen und Anschlussarbeiten ab. Nach einer Bestandsaufnahme erhalten Sie ein transparentes Angebot mit klar definiertem Leistungsumfang.',
  },
  {
    q: 'Welche Vorteile bietet Trockenbau gegenüber massivem Mauerwerk?',
    a: 'Trockenbau ermöglicht kurze Bauzeiten, flexible Raumaufteilungen und eine saubere Integration von Leitungen und Technik. Wände und Decken lassen sich bei veränderten Anforderungen oft einfacher anpassen.',
  },
  {
    q: 'Kann Trockenbau Schallschutz verbessern?',
    a: 'Ja. Je nach Projektanforderung können geeignete Wand- und Deckensysteme die Schallübertragung zwischen Räumen reduzieren. Die Auswahl richtet sich nach Nutzung und baulichen Gegebenheiten.',
  },
  {
    q: 'Wird Brandschutz bei Trockenbau berücksichtigt?',
    a: 'Bei entsprechenden Anforderungen können projektbezogene Trockenbausysteme vorgesehen werden. Planung und Ausführung orientieren sich an den jeweiligen technischen Vorgaben des Bauvorhabens.',
  },
  {
    q: 'Übernimmt Radex auch Maler- und Bodenarbeiten nach dem Trockenbau?',
    a: 'Ja. Radex koordiniert Trockenbau mit Maler-, Boden-, Elektro- und weiteren Ausbaugewerken – für durchgängige Abläufe aus einer Hand.',
  },
  {
    q: 'In welchen Städten ist Radex für Trockenbau tätig?',
    a: 'Radex realisiert Trockenbauprojekte im gesamten Rhein-Main-Gebiet – unter anderem in Frankfurt, Offenbach, Darmstadt, Hanau, Rodgau und über 60 weiteren Gemeinden.',
  },
];

const seoTocSections = [...trockenbauSeoSections, ...trockenbauSeoLinkSections];

export default function TrockenbauLanding() {
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
        name: 'Trockenbau Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page trockenbau-page">
      {/* Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/innenausbau-umbau-rhein-main">Innenausbau & Umbau</Link>
              <span aria-hidden="true">↓</span>
              <span>Trockenbau</span>
            </nav>
            <p className="br-hero-kicker">
              <PanelsTopLeft size={16} strokeWidth={1.5} aria-hidden="true" /> Trockenbau · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Trockenbau im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Flexible Trockenbaulösungen für moderne Wohn- und Gewerbeimmobilien – präzise geplant und hochwertig
              umgesetzt.
            </p>
            <p className="br-hero-text">
              Trockenbau ermöglicht eine schnelle und flexible Gestaltung von Innenräumen. Neue Wände, abgehängte
              Decken, Installationsverkleidungen sowie Schall- und Brandschutzlösungen schaffen funktionale Raumkonzepte
              für Wohnungen, Häuser und Gewerbeobjekte.
            </p>
            <p className="br-hero-text">
              Radex übernimmt die Planung, Koordination und Umsetzung sämtlicher Trockenbauarbeiten und integriert
              diese nahtlos in Ihr Innenausbau- oder Modernisierungsprojekt.
            </p>
            <TrockenbauCTA isHero />
            <p className="br-hero-micro" style={{ marginTop: '16px' }}>
              Flexible Raumkonzepte · Präzise Ausführung · Moderne Trockenbausysteme
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Professioneller Trockenbau mit modernen Gipskartonwänden im Rhein-Main-Gebiet"
          title="Trockenbau Rhein-Main | Radex Objektmanagement"
        />
      </section>

      {/* Einleitung */}
      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Flexible Raumlösungen mit modernem Trockenbau</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Trockenbau zählt heute zu den vielseitigsten Ausbauverfahren im Innenausbau. Räume lassen sich effizient
              neu strukturieren, technische Installationen elegant integrieren und individuelle Anforderungen an Akustik
              oder Brandschutz projektbezogen berücksichtigen.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex plant und realisiert Trockenbauarbeiten für Wohnungen, Einfamilienhäuser, Bürogebäude und
              Gewerbeimmobilien. Von einzelnen Trennwänden bis zu kompletten Ausbauprojekten koordinieren wir
              sämtliche Arbeitsschritte aus einer Hand.
            </p>
          </div>
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
        Von der Planung bis zur fertigen Raumlösung – im nächsten Abschnitt finden Sie einen Überblick über unsere
        Leistungen im Bereich Trockenbau.
      </SectionTransition>

      {/* Unsere Leistungen */}
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
        Neben Wänden und Decken gehören Installationsverkleidungen, Schallschutz und Dachgeschossausbau zu den
        typischen Trockenbauleistungen – bei Bedarf koordiniert aus einer Hand.
      </SectionTransition>

      {/* Typische Trockenbauleistungen */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Trockenbauleistungen</h2>
          </div>
          <PremiumIconCards cards={typischeLeistungenCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur fertigen
        Übergabe.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstberatung bis zur fertigen Übergabe – so begleiten wir Ihr Trockenbauprojekt Schritt für Schritt."
        steps={processSteps}
      />

      {/* Einsatzbereiche */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Einsatzbereiche</h2>
          </div>
          <PremiumIconCards cards={einsatzbereicheCards} largeIcons />
        </div>
      </section>

      {/* Ansprechpartner */}
      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Das Team Trockenbau</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleitung begleitet Ihr Trockenbauprojekt von der Planung bis zur Fertigstellung und
              koordiniert sämtliche Arbeiten mit den weiteren Ausbaugewerken.
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
              <p>
                Senden Sie Grundrisse oder Fotos Ihres Projekts und erhalten Sie eine unverbindliche Ersteinschätzung.
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

      {/* Bernd erklärt */}
      <section id="video" className="br-section br-bg-light br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="text-center mb-10">
            <p className="br-hero-kicker">Bernd erklärt</p>
            <h2 className="br-section-title">Wie läuft ein Trockenbauprojekt ab?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Bernd erklärt, wie neue Raumkonzepte mit Trockenbau entstehen und welche Vorteile moderne Wand- und
              Deckensysteme bieten.
            </p>
            <p className="br-hero-micro">Dauer: ca. 2 Minuten</p>
          </div>
          <div
            className="br-ablauf-video-frame br-bw-video-placeholder"
            style={{ backgroundImage: `url(${VIDEO_POSTER})` }}
            role="img"
            aria-label="Bernd erklärt professionelle Trockenbauarbeiten im Rhein-Main-Gebiet"
          >
            <div className="br-bw-video-placeholder-overlay">
              <span className="br-bw-video-placeholder-play" aria-hidden="true" />
              <p>Video folgt in Kürze</p>
            </div>
          </div>
          <div className="br-ablauf-video-transcript">
            <h3>Platzhalter-Skript</h3>
            <p>{videoTranscript}</p>
          </div>
        </div>
      </section>

      {/* Google Bewertungen */}
      <ReviewsMarquee />

      {/* CTA */}
      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Sie planen Trockenbauarbeiten?</h2>
            <p>
              Ob neue Raumaufteilungen, abgehängte Decken oder individuelle Trockenbaulösungen – Radex begleitet Ihr
              Projekt von der Planung bis zur fertigen Umsetzung. Gemeinsam entwickeln wir eine Lösung, die
              Funktionalität, Qualität und Design optimal verbindet.
            </p>
            <TrockenbauCTA centered />
          </div>
        </div>
      </section>

      {/* SEO Leistungsbereich – Inhalt im Seiten-Drawer */}
      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Trockenbau"
        intro={trockenbauSeoIntro}
        sections={seoTocSections}
        ctaLabel="Kostenlose Erstberatung"
        ctaHref="#kontakt"
        panelId="trockenbau-seo-panel"
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Trockenbauprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Trockenbauwände, abgehängte Decken, Büroausbau, Dachgeschossausbau und Wohnungsmodernisierung."
        projects={radexLiveProjects}
      />
    </main>
  );
}
