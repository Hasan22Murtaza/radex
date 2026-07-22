import { useEffect } from 'react';
import {
  Building2,
  LayoutPanelTop,
  Workflow,
  Hammer,
  Clock3,
  Home,
  ClipboardCheck,
  BadgeEuro,
  UserRound,
  CalendarClock,
  ShieldCheck,
  MessagesSquare,
  Sparkles,
  PanelsTopLeft,
  LayoutGrid,
  Paintbrush,
  PanelTop,
  DoorOpen,
  PhoneCall,
  Ruler,
  ClipboardList,
  PaintRoller,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  Crown,
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
  BerndExplainsVideo,
} from '../components/landing/SharedLandingParts';
import {
  innenausbauWohnungSeoIntro,
  innenausbauWohnungSeoSections,
  innenausbauWohnungSeoLinkSections,
} from '../data/innenausbauWohnungSeoContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/innenausbau-wohnung-rhein-main';
const HERO_IMAGE = '/img/innenausbau-wohnung-rhein-main-radex.webp';
const VIDEO_POSTER = '/img/bernd-innenausbau-wohnung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Innenausbau Wohnung Rhein-Main | Wohnungsmodernisierung vom Profi';
const META_DESCRIPTION =
  'Professioneller Innenausbau für Wohnungen im Rhein-Main-Gebiet. Moderne Raumkonzepte, Trockenbau, Bodenbeläge, Malerarbeiten und komplette Wohnungsmodernisierung aus einer Hand.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Innenausbau & Umbau', path: '/innenausbau-umbau-rhein-main' },
  { name: 'Innenausbau Wohnung', path: PAGE_PATH },
];

function InnenausbauWohnungCTA({ isHero = false, centered = false }) {
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
    title: 'Individuelle Raumkonzepte',
    desc: 'Jede Wohnung wird auf ihre Nutzung, Größe und die Wünsche der Eigentümer abgestimmt.',
    icon: LayoutPanelTop,
  },
  {
    title: 'Alle Gewerke koordiniert',
    desc: 'Von Trockenbau über Bodenarbeiten bis zu Malerarbeiten werden sämtliche Leistungen zentral organisiert.',
    icon: Workflow,
  },
  {
    title: 'Hochwertige Handwerksqualität',
    desc: 'Präzise Ausführung und sorgfältig ausgewählte Materialien sorgen für langlebige Ergebnisse.',
    icon: Hammer,
  },
  {
    title: 'Zuverlässige Terminplanung',
    desc: 'Ein strukturierter Projektablauf reduziert Bauzeiten und schafft Planungssicherheit.',
    icon: Clock3,
  },
  {
    title: 'Wertsteigerung der Immobilie',
    desc: 'Ein professioneller Innenausbau erhöht Komfort, Attraktivität und den langfristigen Wert der Wohnung.',
    icon: Home,
  },
  {
    title: 'Persönliche Projektbegleitung',
    desc: 'Von der ersten Beratung bis zur Übergabe begleitet Sie ein fester Ansprechpartner.',
    icon: ClipboardCheck,
  },
];

const qualityCards = [
  {
    title: 'Transparente Angebote',
    desc: 'Nach definiertem Leistungsumfang erhalten Sie eine nachvollziehbare und transparente Kalkulation.',
    icon: BadgeEuro,
  },
  {
    title: 'Feste Projektleitung',
    desc: 'Ein persönlicher Ansprechpartner koordiniert alle Bauphasen.',
    icon: UserRound,
  },
  {
    title: 'Verlässliche Zeitplanung',
    desc: 'Alle Arbeiten werden frühzeitig abgestimmt und effizient organisiert.',
    icon: CalendarClock,
  },
  {
    title: 'Kontrollierte Qualität',
    desc: 'Jeder Bauabschnitt wird sorgfältig geprüft und dokumentiert.',
    icon: ShieldCheck,
  },
  {
    title: 'Offene Kommunikation',
    desc: 'Sie erhalten regelmäßige Informationen zum Projektfortschritt und den nächsten Arbeitsschritten.',
    icon: MessagesSquare,
  },
  {
    title: 'Hochwertige Ergebnisse',
    desc: 'Wir verbinden moderne Gestaltung mit funktionalen Lösungen und langlebiger Ausführungsqualität.',
    icon: Sparkles,
  },
];

const leistungenCards = [
  {
    title: 'Wohnungsmodernisierung',
    desc: 'Komplette Modernisierung von Eigentums- und Mietwohnungen – von einzelnen Räumen bis zur vollständigen Kernsanierung.',
    icon: Building2,
    to: '#wohnungsmodernisierung',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Trockenbau & Raumaufteilung',
    desc: 'Neue Raumkonzepte durch Trockenbauwände, Deckenlösungen und individuelle Grundrissanpassungen.',
    icon: PanelsTopLeft,
    to: '#trockenbau',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Schlüsselfertiger Innenausbau',
    desc: 'Nach Abschluss aller Ausbauarbeiten übergeben wir Ihre modernisierte Wohnung bezugsfertig – inklusive Oberflächen, Bodenbelägen und Endmontage.',
    icon: Hammer,
    to: '#schluesselfertig',
    cta: 'Mehr erfahren',
  },
];

const typischeLeistungenCards = [
  {
    title: 'Trockenbau',
    desc: 'Neue Innenwände, Raumtrennungen und Installationswände schaffen flexible Wohnkonzepte.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Bodenbeläge',
    desc: 'Verlegung von Vinyl, Parkett, Laminat oder weiteren Bodenbelägen passend zur Nutzung und Gestaltung.',
    icon: LayoutGrid,
  },
  {
    title: 'Malerarbeiten',
    desc: 'Hochwertige Spachtel-, Tapezier- und Malerarbeiten für moderne Wohnräume.',
    icon: Paintbrush,
  },
  {
    title: 'Decken',
    desc: 'Abgehängte Decken mit integrierter Beleuchtung oder Techniklösungen.',
    icon: PanelTop,
  },
  {
    title: 'Türen',
    desc: 'Einbau moderner Innentüren einschließlich Zargen und Beschlägen.',
    icon: DoorOpen,
  },
  {
    title: 'Raumaufteilung',
    desc: 'Anpassung bestehender Grundrisse für mehr Offenheit, Funktionalität und Wohnkomfort.',
    icon: LayoutPanelTop,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Gemeinsam besprechen wir Ihre Wünsche, die vorhandene Wohnung und den gewünschten Modernisierungsumfang.',
    icon: PhoneCall,
  },
  {
    title: 'Planung',
    desc: 'Wir entwickeln ein individuelles Ausbaukonzept mit Raumaufteilung, Materialien und Bauablauf.',
    icon: Ruler,
  },
  {
    title: 'Angebot',
    desc: 'Sie erhalten ein transparentes Angebot mit klar definiertem Leistungsumfang.',
    icon: ClipboardList,
  },
  {
    title: 'Innenausbau',
    desc: 'Unsere Projektleitung koordiniert sämtliche Ausbauarbeiten und sorgt für einen strukturierten Ablauf.',
    icon: Hammer,
  },
  {
    title: 'Oberflächen & Ausbau',
    desc: 'Böden, Wände, Decken, Türen und weitere Ausbauarbeiten werden fertiggestellt.',
    icon: PaintRoller,
  },
  {
    title: 'Übergabe',
    desc: 'Nach gemeinsamer Abnahme übergeben wir Ihre modernisierte Wohnung schlüsselfertig.',
    icon: CircleCheckBig,
  },
];

const einsatzbereicheCards = [
  {
    title: 'Eigentumswohnungen',
    desc: 'Individuelle Modernisierung zur langfristigen Wertsteigerung und Verbesserung des Wohnkomforts.',
    icon: Building2,
  },
  {
    title: 'Mietwohnungen',
    desc: 'Effiziente Renovierungs- und Modernisierungslösungen für Vermieter und Hausverwaltungen.',
    icon: Home,
  },
  {
    title: 'Kapitalanlagen',
    desc: 'Attraktive Innenausbauten zur besseren Vermietbarkeit und nachhaltigen Aufwertung der Immobilie.',
    icon: ClipboardCheck,
  },
  {
    title: 'Penthousewohnungen',
    desc: 'Exklusive Ausbaukonzepte mit hochwertigen Materialien und individuellen Detaillösungen.',
    icon: Crown,
  },
];

const radexLiveProjects = [
  {
    image: '/img/wohnzimmer.webp',
    badge: 'Vorher & Nachher',
    title: 'Wohnungsmodernisierung Eigentumswohnung',
    location: 'Frankfurt am Main',
    desc: 'Neue Raumaufteilung, Bodenbeläge und Oberflächen in einer Bestandswohnung – komplett koordiniert.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'LIVE',
    title: 'Mietwohnung vor Neuvermietung',
    location: 'Offenbach am Main',
    desc: 'Trockenbau, Malerarbeiten und neue Bodenbeläge – laufendes Modernisierungsprojekt.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-service-innenausbau.png',
    badge: 'Abgeschlossen',
    title: 'Neue Raumaufteilung mit Trockenbau',
    location: 'Darmstadt',
    desc: 'Flexible Grundrissanpassung und hochwertiger Innenausbau in einer Eigentumswohnung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-service-boeden.png',
    badge: 'Abgeschlossen',
    title: 'Bodenbeläge & Malerarbeiten',
    location: 'Rodgau',
    desc: 'Komplette Oberflächenmodernisierung mit neuen Böden und Wandgestaltung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/bad1.webp',
    badge: 'LIVE',
    title: 'Kapitalanlage modernisieren',
    location: 'Dreieich',
    desc: 'Wohnungsausbau zur besseren Vermietbarkeit – Trockenbau, Böden und Malerarbeiten im Einsatz.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/renov1.webp',
    badge: 'Video',
    title: 'Baustelleneinblick Wohnungsausbau',
    location: 'Neu-Isenburg',
    desc: 'Authentischer Einblick in Trockenbau, Bodenverlegung und Malerarbeiten auf einer echten Baustelle.',
    cta: 'Video ansehen',
  },
];

const videoTranscript =
  'Jede Wohnung ist anders. Deshalb beginnen wir mit einer detaillierten Planung und entwickeln gemeinsam ein individuelles Ausbaukonzept. Anschließend koordinieren wir alle Gewerke – vom Trockenbau über Boden- und Malerarbeiten bis zur schlüsselfertigen Übergabe.';

const faqsData = [
  {
    q: 'Was umfasst ein professioneller Innenausbau für Wohnungen?',
    a: 'Ein Innenausbau kann Trockenbau, neue Raumaufteilungen, Bodenbeläge, Malerarbeiten, Decken, Türen, Bad- und Küchenvorbereitung sowie die Koordination aller Ausbaugewerke umfassen – von einzelnen Räumen bis zur kompletten Wohnungsmodernisierung.',
  },
  {
    q: 'Modernisiert Radex Eigentums- und Mietwohnungen?',
    a: 'Ja. Radex begleitet Innenausbauten für Eigentumswohnungen, Mietwohnungen vor Neuvermietung, Kapitalanlagen und Penthousewohnungen im gesamten Rhein-Main-Gebiet.',
  },
  {
    q: 'Kann eine Wohnung während der Belegung modernisiert werden?',
    a: 'Viele Maßnahmen lassen sich abschnittsweise planen. Ob eine Modernisierung im bewohnten Zustand möglich ist, hängt vom Umfang, den betroffenen Räumen und dem Zeitplan ab – das klären wir in der Erstberatung.',
  },
  {
    q: 'Übernimmt Radex auch Trockenbau und Grundrissänderungen?',
    a: 'Ja. Neue Raumkonzepte durch Trockenbau, Wanddurchbrüche oder Grundrissanpassungen werden geplant und mit allen Anschlussgewerken koordiniert.',
  },
  {
    q: 'Was bedeutet schlüsselfertiger Innenausbau?',
    a: 'Nach Abschluss aller Ausbauarbeiten – inklusive Oberflächen, Bodenbeläge und Endmontage – übergeben wir die Wohnung bezugsfertig. Alle Leistungen werden zentral koordiniert.',
  },
  {
    q: 'In welchen Städten ist Radex für Wohnungsausbau tätig?',
    a: 'Radex realisiert Innenausbauten im gesamten Rhein-Main-Gebiet – unter anderem in Frankfurt, Offenbach, Darmstadt, Hanau, Rodgau und über 60 weiteren Gemeinden.',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Wie läuft eine Wohnungsmodernisierung ab?',
  description:
    'Bernd erklärt, wie aus einer bestehenden Wohnung Schritt für Schritt ein moderner, funktionaler und hochwertiger Wohnraum entsteht.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const seoTocSections = [...innenausbauWohnungSeoSections, ...innenausbauWohnungSeoLinkSections];

export default function InnenausbauWohnungLanding() {
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
        name: 'Innenausbau Wohnung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page innenausbau-wohnung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/innenausbau-umbau-rhein-main">Innenausbau & Umbau</Link>
              <span aria-hidden="true">↓</span>
              <span>Innenausbau Wohnung</span>
            </nav>
            <p className="br-hero-kicker">
              <Building2 size={16} strokeWidth={1.5} aria-hidden="true" /> Innenausbau Wohnung · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Innenausbau für Wohnungen
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Individuelle Wohnungsmodernisierung mit hochwertigem Innenausbau, klarer Projektkoordination und präziser
              handwerklicher Ausführung.
            </p>
            <p className="br-hero-text">
              Ob Eigentumswohnung, Mietwohnung oder Kapitalanlage – ein professioneller Innenausbau verbessert
              Wohnkomfort, Funktionalität und langfristigen Immobilienwert. Von der neuen Raumaufteilung über Trockenbau
              und Oberflächen bis zu Bodenbelägen und Türen koordiniert Radex sämtliche Ausbauarbeiten aus einer Hand.
            </p>
            <p className="br-hero-text">
              Wir entwickeln individuelle Lösungen für bewohnte und leerstehende Wohnungen und sorgen für einen
              strukturierten Bauablauf mit transparenten Abläufen und einer termingerechten Umsetzung.
            </p>
            <InnenausbauWohnungCTA isHero />
            <p className="br-hero-micro" style={{ marginTop: '16px' }}>
              Wohnungsmodernisierung · Komplettkoordination · Hochwertige Ausführung
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Professioneller Innenausbau einer modernisierten Wohnung im Rhein-Main-Gebiet."
          title="Innenausbau Wohnung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Moderne Wohnungen funktional und hochwertig gestalten</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Ein zeitgemäßer Innenausbau passt Wohnräume an neue Anforderungen an. Offene Grundrisse, moderne
              Materialien und durchdachte Raumkonzepte schaffen mehr Wohnqualität und steigern gleichzeitig den Wert der
              Immobilie.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex begleitet Wohnungsmodernisierungen von der Planung bis zur Fertigstellung. Durch die Koordination
              aller Ausbaugewerke entstehen effiziente Abläufe und hochwertige Ergebnisse – unabhängig davon, ob
              einzelne Räume modernisiert oder komplette Wohnungen umgebaut werden.
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
        Von der Wohnungsmodernisierung bis zum schlüsselfertigen Innenausbau – im nächsten Abschnitt finden Sie einen
        Überblick über unsere Leistungen im Bereich Innenausbau Wohnung.
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
        Trockenbau, Bodenbeläge, Malerarbeiten, Decken, Türen und Raumaufteilung – typische Ausbauleistungen für
        moderne Wohnungen im Rhein-Main-Gebiet.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Ausbauleistungen</h2>
          </div>
          <PremiumIconCards cards={typischeLeistungenCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur
        schlüsselfertigen Übergabe Ihrer modernisierten Wohnung.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstberatung bis zur schlüsselfertigen Übergabe – so begleiten wir Ihre Wohnungsmodernisierung Schritt für Schritt."
        steps={processSteps}
      />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Einsatzbereiche</h2>
          </div>
          <PremiumIconCards cards={einsatzbereicheCards} largeIcons />
        </div>
      </section>

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Das Team Wohnungsmodernisierung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleitung begleitet Ihr Modernisierungsprojekt von der Planung bis zur schlüsselfertigen
              Übergabe und koordiniert sämtliche Ausbaugewerke zentral.
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
                Senden Sie Grundrisse oder Fotos Ihrer Wohnung und erhalten Sie eine unverbindliche Ersteinschätzung.
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
        title="Wie läuft eine Wohnungsmodernisierung ab?"
        description="Bernd erklärt, wie aus einer bestehenden Wohnung Schritt für Schritt ein moderner, funktionaler und hochwertiger Wohnraum entsteht."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf einer professionellen Wohnungsmodernisierung im Rhein-Main-Gebiet."
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Sie möchten Ihre Wohnung modernisieren?</h2>
            <p>
              Ob Eigentumswohnung, Mietwohnung oder Kapitalanlage – Radex begleitet Ihr Projekt von der ersten Idee bis
              zur fertigen Übergabe. Gemeinsam entwickeln wir ein individuelles Ausbaukonzept, das Funktionalität,
              Design und Qualität verbindet.
            </p>
            <InnenausbauWohnungCTA centered />
          </div>
        </div>
      </section>

      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Innenausbau Wohnung"
        intro={innenausbauWohnungSeoIntro}
        sections={seoTocSections}
        ctaLabel="Kostenlose Erstberatung"
        ctaHref="#kontakt"
        panelId="innenausbau-wohnung-seo-panel"
        showToc
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Wohnungsmodernisierungen"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Wohnungsmodernisierung, Eigentumswohnungen, Mietwohnungen, Trockenbau, neue Raumaufteilungen, Bodenbeläge und Malerarbeiten."
        projects={radexLiveProjects}
      />
    </main>
  );
}
