import { useEffect } from 'react';
import {
  Hammer,
  Building2,
  House,
  PanelsTopLeft,
  Construction,
  ClipboardCheck,
  Workflow,
  LayoutPanelTop,
  Clock3,
  Building,
  BadgeEuro,
  UserRound,
  CalendarClock,
  ShieldCheck,
  MessagesSquare,
  Sparkles,
  SquareStack,
  PanelTop,
  VolumeX,
  Shield,
  Layers3,
  Paintbrush,
  LayoutGrid,
  DoorOpen,
  PhoneCall,
  Ruler,
  ClipboardList,
  PaintRoller,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  Briefcase,
  Stethoscope,
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
  SeoTocSection,
  RadexLiveSection,
  HorizontalProcessTimeline,
  BerndExplainsVideo,
} from '../components/landing/SharedLandingParts';
import {
  innenausbauUmbauSeoIntro,
  innenausbauUmbauSeoSections,
} from '../data/innenausbauUmbauSeoContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/innenausbau-umbau-rhein-main';
const HERO_IMAGE = '/img/innenausbau-umbau-rhein-main-radex.webp';
const VIDEO_POSTER = '/img/bernd-innenausbau-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Innenausbau & Umbau Rhein-Main | Radex Objektmanagement';
const META_DESCRIPTION =
  'Professioneller Innenausbau und Umbau im Rhein-Main-Gebiet. Trockenbau, Grundrissänderungen, Wohnungs- und Hausumbau sowie komplette Innenausbauprojekte aus einer Hand.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Innenausbau & Umbau', path: PAGE_PATH },
];

const TRUST_LINE = 'Komplette Projektkoordination · Hochwertige Ausführung · Alles aus einer Hand';

function InnenausbauUmbauCTA({ isHero = false, centered = false }) {
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

const leistungsbereicheCards = [
  {
    title: 'Innenausbau Wohnung',
    desc: 'Moderne Wohnungsmodernisierung mit individuellen Raumlösungen, hochwertigem Innenausbau und kompletter Projektkoordination.',
    icon: Building2,
    to: '/innenausbau-wohnung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Innenausbau Haus',
    desc: 'Umbau und Modernisierung von Einfamilienhäusern, Doppelhäusern und Bestandsimmobilien – individuell geplant und professionell umgesetzt.',
    icon: House,
    to: '/innenausbau-haus-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Trockenbau',
    desc: 'Flexible Trockenbaulösungen für neue Raumaufteilungen, Decken, Wände, Schallschutz und moderne Innenraumgestaltung.',
    icon: PanelsTopLeft,
    to: '/trockenbau-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Wand entfernen',
    desc: 'Wir schaffen offene Raumkonzepte durch den fachgerechten Rückbau nichttragender und – nach statischer Prüfung – tragender Wände in Abstimmung mit den erforderlichen Fachplanern.',
    icon: Construction,
    to: '/wand-entfernen-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const whyRadexCards = [
  {
    title: 'Individuelle Planung',
    desc: 'Jedes Ausbauprojekt wird auf die Anforderungen Ihrer Immobilie und Ihre persönlichen Wünsche abgestimmt.',
    icon: ClipboardCheck,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Wir übernehmen die Abstimmung sämtlicher Ausbauarbeiten und sorgen für einen reibungslosen Bauablauf.',
    icon: Workflow,
  },
  {
    title: 'Hochwertige Ausführung',
    desc: 'Präzise Handwerksarbeit und hochwertige Materialien bilden die Grundlage langlebiger Ergebnisse.',
    icon: Hammer,
  },
  {
    title: 'Moderne Raumkonzepte',
    desc: 'Wir schaffen funktionale und optisch ansprechende Räume für Wohnen und Arbeiten.',
    icon: LayoutPanelTop,
  },
  {
    title: 'Terminsicherheit',
    desc: 'Klare Projektplanung und strukturierte Abläufe sorgen für eine zuverlässige Umsetzung.',
    icon: Clock3,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Von der ersten Idee bis zur fertigen Immobilie erhalten Sie sämtliche Leistungen zentral koordiniert.',
    icon: Building,
  },
];

const qualityCards = [
  {
    title: 'Transparente Festpreise',
    desc: 'Nach definiertem Leistungsumfang erhalten Sie eine nachvollziehbare Kalkulation ohne versteckte Kosten.',
    icon: BadgeEuro,
  },
  {
    title: 'Persönliche Projektleitung',
    desc: 'Ein fester Ansprechpartner begleitet Ihr Ausbauprojekt während sämtlicher Bauphasen.',
    icon: UserRound,
  },
  {
    title: 'Verlässliche Terminplanung',
    desc: 'Alle Arbeiten werden frühzeitig koordiniert und transparent abgestimmt.',
    icon: CalendarClock,
  },
  {
    title: 'Geprüfte Qualität',
    desc: 'Jede Bauphase wird sorgfältig kontrolliert, um einen hohen Qualitätsstandard sicherzustellen.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie werden regelmäßig über Baufortschritt, Termine und nächste Arbeitsschritte informiert.',
    icon: MessagesSquare,
  },
  {
    title: 'Nachhaltige Wertsteigerung',
    desc: 'Durchdachte Innenausbau- und Umbaukonzepte erhöhen Komfort, Funktionalität und den langfristigen Wert Ihrer Immobilie.',
    icon: Sparkles,
  },
];

const leistungenCards = [
  {
    title: 'Innenausbau Wohnung',
    desc: 'Kompletter Innenausbau von Eigentumswohnungen, Mietwohnungen und Wohnanlagen – von der Modernisierung einzelner Räume bis zur Kernsanierung.',
    icon: Building2,
    to: '/innenausbau-wohnung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Innenausbau Haus',
    desc: 'Modernisierung und Umbau von Einfamilienhäusern, Doppelhäusern und Bestandsimmobilien mit individueller Planung und hochwertiger Ausführung.',
    icon: House,
    to: '/innenausbau-haus-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Trockenbau',
    desc: 'Flexible Trockenbauarbeiten für neue Grundrisse, Raumtrennungen, Deckenlösungen sowie Schall- und Brandschutz.',
    icon: PanelsTopLeft,
    to: '/trockenbau-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Wand entfernen',
    desc: 'Wir schaffen offene Wohn- und Arbeitsbereiche durch den fachgerechten Rückbau von Wänden. Tragende Bauteile werden ausschließlich nach statischer Prüfung und den erforderlichen Genehmigungen angepasst.',
    icon: Construction,
    to: '/wand-entfernen-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const weitereAusbauleistungenCards = [
  {
    title: 'Trockenbauwände',
    desc: 'Flexible Raumaufteilungen für Wohn- und Gewerbeimmobilien.',
    icon: SquareStack,
  },
  {
    title: 'Abgehängte Decken',
    desc: 'Moderne Deckensysteme für Beleuchtung, Akustik und Technik.',
    icon: PanelTop,
  },
  {
    title: 'Schallschutz',
    desc: 'Optimierte Raumakustik für Wohnungen, Büros und Besprechungsräume.',
    icon: VolumeX,
  },
  {
    title: 'Brandschutz',
    desc: 'Ausführung geeigneter Trockenbausysteme entsprechend den jeweiligen Projektanforderungen.',
    icon: Shield,
  },
  {
    title: 'Bodenaufbau',
    desc: 'Vorbereitung moderner Bodenaufbauten als Grundlage für den Innenausbau.',
    icon: Layers3,
  },
  {
    title: 'Malerarbeiten',
    desc: 'Hochwertige Oberflächen für Wände und Decken als Abschluss des Innenausbaus.',
    icon: Paintbrush,
  },
  {
    title: 'Bodenbeläge',
    desc: 'Verlegung verschiedenster Bodenbeläge passend zum Nutzungskonzept.',
    icon: LayoutGrid,
  },
  {
    title: 'Türen & Zargen',
    desc: 'Montage neuer Innentüren und moderner Türsysteme.',
    icon: DoorOpen,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Gemeinsam besprechen wir Ihre Vorstellungen, Anforderungen und den gewünschten Umfang des Innenausbaus.',
    icon: PhoneCall,
  },
  {
    title: 'Planung',
    desc: 'Wir entwickeln ein passendes Ausbaukonzept inklusive Raumaufteilung, Materialauswahl und Bauablauf.',
    icon: Ruler,
  },
  {
    title: 'Angebot',
    desc: 'Sie erhalten ein transparentes Angebot mit klar definiertem Leistungsumfang.',
    icon: ClipboardList,
  },
  {
    title: 'Umsetzung',
    desc: 'Unsere Projektleitung koordiniert sämtliche Ausbauarbeiten und sorgt für einen strukturierten Bauablauf.',
    icon: Hammer,
  },
  {
    title: 'Ausbau & Fertigstellung',
    desc: 'Nach Abschluss aller Ausbauarbeiten erfolgen Oberflächen, Endmontagen und Detailarbeiten.',
    icon: PaintRoller,
  },
  {
    title: 'Übergabe',
    desc: 'Gemeinsame Abnahme und schlüsselfertige Übergabe der modernisierten Immobilie.',
    icon: CircleCheckBig,
  },
];

const einsatzbereicheCards = [
  {
    title: 'Wohnungen',
    desc: 'Modernisierung einzelner Räume oder kompletter Wohnungen.',
    icon: Building2,
  },
  {
    title: 'Einfamilienhäuser',
    desc: 'Individuelle Umbau- und Ausbauprojekte für Bestandsimmobilien.',
    icon: House,
  },
  {
    title: 'Mehrfamilienhäuser',
    desc: 'Sanierung und Modernisierung einzelner oder mehrerer Wohneinheiten.',
    icon: Building,
  },
  {
    title: 'Bürogebäude',
    desc: 'Neue Raumkonzepte für moderne Arbeitswelten.',
    icon: Briefcase,
  },
  {
    title: 'Praxen',
    desc: 'Funktionale Innenausbauten für medizinische Einrichtungen.',
    icon: Stethoscope,
  },
  {
    title: 'Gewerbeimmobilien',
    desc: 'Individuelle Ausbaukonzepte für Verkaufs-, Lager- und Produktionsflächen.',
    icon: Store,
  },
];

const weiterfuehrendeLeistungenCards = [
  {
    title: 'Innenausbau Wohnung Rhein-Main',
    desc: 'Kompletter Innenausbau und Umbau von Wohnungen – von der Modernisierung einzelner Räume bis zur umfassenden Neugestaltung.',
    icon: Building2,
    to: '/innenausbau-wohnung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Innenausbau Haus Rhein-Main',
    desc: 'Individuelle Ausbau- und Modernisierungslösungen für Einfamilienhäuser und weitere Wohngebäude.',
    icon: House,
    to: '/innenausbau-haus-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Trockenbau Rhein-Main',
    desc: 'Trockenbauwände, Decken, Verkleidungen sowie Schall- und Brandschutzlösungen.',
    icon: PanelsTopLeft,
    to: '/trockenbau-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Wand entfernen Rhein-Main',
    desc: 'Fachgerechter Rückbau von Innenwänden für neue Raumkonzepte und offene Grundrisse.',
    icon: Construction,
    to: '/wand-entfernen-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Gewerbe- & Objektsanierung Rhein-Main',
    desc: 'Komplette Modernisierung und Sanierung von Büro-, Gewerbe- und Bestandsimmobilien.',
    icon: Store,
    to: '/gewerbe-objektsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const radexLiveProjects = [
  {
    image: '/img/wohnzimmer.webp',
    badge: 'Vorher & Nachher',
    title: 'Wohnungsumbau mit neuem Grundriss',
    location: 'Frankfurt am Main',
    desc: 'Trockenbau, Bodenbeläge und Malerarbeiten für eine modernisierte Eigentumswohnung mit offener Raumaufteilung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/sanierung-service-haus.webp',
    badge: 'LIVE',
    title: 'Hausumbau im Bestand',
    location: 'Darmstadt',
    desc: 'Grundrissänderung, Trockenbau und Innenausbau in einem Einfamilienhaus – laufendes Projekt.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Gewerbeausbau Bürofläche',
    location: 'Offenbach am Main',
    desc: 'Neue Raumstruktur mit Trockenbauwänden, abgehängten Decken und moderner Innenraumgestaltung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/renov1.webp',
    badge: 'Abgeschlossen',
    title: 'Wanddurchbruch und Raumöffnung',
    location: 'Rodgau',
    desc: 'Fachgerechter Rückbau einer Innenwand und Anpassung der angrenzenden Oberflächen für ein offenes Wohnkonzept.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'Abgeschlossen',
    title: 'Kompletter Innenausbau Wohnung',
    location: 'Dreieich',
    desc: 'Schlüsselfertige Modernisierung mit Trockenbau, Böden, Türen und Malerarbeiten.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buero2.webp',
    badge: 'Video',
    title: 'Trockenbau auf der Baustelle',
    location: 'Neu-Isenburg',
    desc: 'Authentischer Einblick in Trockenbauarbeiten, Deckensysteme und Anschlussgewerke bei einem Innenausbauprojekt.',
    cta: 'Video ansehen',
  },
];

const videoTranscript =
  'Ein erfolgreicher Innenausbau beginnt mit einer guten Planung. Gemeinsam entwickeln wir ein Raumkonzept, koordinieren alle Gewerke und setzen den Umbau Schritt für Schritt um. So entstehen hochwertige Wohn- und Arbeitsräume mit einer durchdachten Funktion und langlebiger Qualität.';

const faqsData = [
  {
    q: 'Was umfasst ein professioneller Innenausbau?',
    a: 'Ein Innenausbau kann einzelne Leistungen wie Trockenbau, Bodenbeläge oder Malerarbeiten umfassen oder einen kompletten Umbau von Wohnungen, Häusern und Gewerbeflächen. Radex koordiniert Planung, Rückbau, Ausbau und Fertigstellung zentral.',
  },
  {
    q: 'Kann Radex Wohnungen und Häuser im Rhein-Main-Gebiet ausbauen?',
    a: 'Ja. Radex realisiert Innenausbau- und Umbauprojekte für Wohnungen, Einfamilienhäuser, Mehrfamilienhäuser und Gewerbeimmobilien im gesamten Rhein-Main-Gebiet.',
  },
  {
    q: 'Darf ich eine tragende Wand selbst entfernen?',
    a: 'Nein. Tragende Wände dürfen nur nach fachgereicher statischer Prüfung und den erforderlichen Genehmigungen angepasst werden. Radex koordiniert den Rückbau in Abstimmung mit den erforderlichen Fachplanern.',
  },
  {
    q: 'Welche Leistungen gehören zum Trockenbau?',
    a: 'Typische Trockenbauleistungen sind neue Innenwände, abgehängte Decken, Installationsverkleidungen sowie projektbezogene Schall- und Brandschutzlösungen. Mehr dazu auf der Seite Trockenbau Rhein-Main.',
  },
  {
    q: 'Übernimmt Radex die Koordination aller Gewerke?',
    a: 'Ja. Von Trockenbau über Bodenaufbau, Malerarbeiten und Türen bis zur schlüsselfertigen Übergabe werden sämtliche Ausbaugewerke zentral koordiniert und aufeinander abgestimmt.',
  },
  {
    q: 'Wie läuft ein Innenausbauprojekt ab?',
    a: 'Nach einer Erstberatung entwickeln wir ein Ausbaukonzept, erstellen ein transparentes Angebot und koordinieren die Umsetzung bis zur gemeinsamen Abnahme und Übergabe.',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Wie läuft ein Innenausbauprojekt ab?',
  description:
    'Bernd erklärt den typischen Ablauf eines Innenausbauprojekts – von der Planung über Trockenbau und Umbau bis zur schlüsselfertigen Übergabe.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const seoTocSections = [...innenausbauUmbauSeoSections];

export default function InnenausbauUmbauLanding() {
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
        name: 'Innenausbau & Umbau Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page innenausbau-umbau-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <span>Innenausbau & Umbau</span>
            </nav>
            <p className="br-hero-kicker">
              <Hammer size={16} strokeWidth={1.5} aria-hidden="true" /> Innenausbau & Umbau · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Innenausbau & Umbau im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Individuelle Innenausbau- und Umbauprojekte für Wohnungen, Häuser und Gewerbeimmobilien – professionell
              geplant und hochwertig umgesetzt.
            </p>
            <p className="br-hero-text">
              Ein moderner Innenausbau verbindet Funktionalität, Design und präzise Handwerksarbeit. Ob einzelne Räume,
              komplette Wohnungen, Einfamilienhäuser oder Gewerbeflächen – Radex begleitet Ihr Projekt von der Planung
              bis zur schlüsselfertigen Fertigstellung.
            </p>
            <p className="br-hero-text">
              Wir koordinieren sämtliche Ausbaugewerke, schaffen neue Raumkonzepte und realisieren individuelle Lösungen,
              die auf Ihre Anforderungen und die Nutzung Ihrer Immobilie abgestimmt sind.
            </p>
            <InnenausbauUmbauCTA isHero />
            <p className="br-hero-micro" style={{ marginTop: '16px' }}>
              {TRUST_LINE}
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Professioneller Innenausbau und Umbau einer Immobilie im Rhein-Main-Gebiet."
          title="Innenausbau & Umbau Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Maßgeschneiderter Innenausbau für moderne Immobilien</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Ein hochwertiger Innenausbau steigert nicht nur den Wert einer Immobilie, sondern verbessert auch deren
              Funktionalität und Nutzbarkeit. Neue Raumkonzepte, moderne Materialien und präzise Ausführung sorgen dafür,
              dass Wohn- und Arbeitsbereiche optimal auf die jeweiligen Anforderungen abgestimmt werden.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex übernimmt den kompletten Innenausbau von Wohnungen, Häusern und Gewerbeobjekten – von Trockenbau und
              Grundrissänderungen bis zur fertigen Übergabe. Durch die Koordination aller beteiligten Gewerke entstehen
              effiziente Abläufe, kurze Bauzeiten und ein einheitlich hoher Qualitätsstandard.
            </p>
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungsbereiche</h2>
          </div>
          <div className="br-leistungen-grid-four">
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

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Qualitätsversprechen</h2>
          </div>
          <PremiumIconCards cards={qualityCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Von Wohnungs- und Hausumbau bis Trockenbau und Wanddurchbruch – im nächsten Abschnitt finden Sie unsere
        Leistungen im Bereich Innenausbau & Umbau.
      </SectionTransition>

      <section id="leistungen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <div className="br-leistungen-grid-four">
            <PremiumIconCards cards={leistungenCards} linked largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition>
        Trockenbauwände, Decken, Schallschutz, Böden, Malerarbeiten und Türen – typische Ausbauleistungen für moderne
        Wohn- und Gewerbeimmobilien.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Weitere Ausbauleistungen</h2>
          </div>
          <PremiumIconCards cards={weitereAusbauleistungenCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur
        schlüsselfertigen Übergabe.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstberatung bis zur schlüsselfertigen Übergabe – so begleiten wir Ihr Innenausbauprojekt Schritt für Schritt."
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
              <strong>Das Team Innenausbau & Umbau</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleitung begleitet Sie von der ersten Idee über die Planung bis zur fertigen Übergabe Ihres
              Innenausbauprojekts. Sämtliche Gewerke werden zentral koordiniert und aufeinander abgestimmt.
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
              <p>Grundrisse, Fotos oder Ideen senden und unverbindlich beraten lassen.</p>
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
        title="Wie läuft ein Innenausbauprojekt ab?"
        description="Bernd erklärt den typischen Ablauf eines Innenausbauprojekts – von der Planung über Trockenbau und Umbau bis zur schlüsselfertigen Übergabe."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf eines professionellen Innenausbaus im Rhein-Main-Gebiet."
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Sie planen einen Innenausbau oder Umbau?</h2>
            <p>
              Ob Wohnung, Haus oder Gewerbeimmobilie – wir begleiten Ihr Projekt von der ersten Planung bis zur
              schlüsselfertigen Fertigstellung. Lassen Sie sich unverbindlich beraten und erhalten Sie ein individuelles
              Konzept für Ihren Innenausbau.
            </p>
            <InnenausbauUmbauCTA centered />
          </div>
        </div>
      </section>

      <SeoTocSection
        title="Unsere Leistungen im Bereich Innenausbau & Umbau"
        intro={innenausbauUmbauSeoIntro}
        sections={seoTocSections}
        showAllContent
      />

      <section className="br-section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <div className="text-center mb-10">
            <h2 className="br-section-title">Weiterführende Leistungen</h2>
          </div>
          <PremiumIconCards cards={weiterfuehrendeLeistungenCards} linked largeIcons />
        </div>
      </section>

      <RadexLiveSection
        title="Radex Live – Einblicke in Innenausbauprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Innenausbau, Wohnungsumbau, Hausumbau, Trockenbau, Grundrissänderungen, Wanddurchbrüche und Gewerbeausbau."
        projects={radexLiveProjects}
      />
    </main>
  );
}
