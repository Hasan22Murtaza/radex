import { useEffect } from 'react';
import {
  Layers3,
  House,
  UserRound,
  Workflow,
  Award,
  MessagesSquare,
  BadgeEuro,
  CalendarClock,
  ShieldCheck,
  Sparkles,
  Bath,
  ChefHat,
  Sofa,
  Grid3X3,
  PaintRoller,
  Droplets,
  Flame,
  LayoutPanelTop,
  Home,
  ClipboardCheck,
  PhoneCall,
  SearchCheck,
  ClipboardList,
  Hammer,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  Building2,
  Store,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import '../data/legacyServiceStyles.css';
import '../data/migratedServicePage.css';
import useSeo, { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '../useSeo';
import ReviewsMarquee from '../components/ReviewsMarquee';
import {
  PremiumIconCards,
  SectionTransition,
  SeoKnowledgeDrawer,
  RadexLiveSection,
  HorizontalProcessTimeline,
  SanierungOptionComparison,
  ResponsiveChecklistSection,
  BerndExplainsVideo,
} from '../components/landing/SharedLandingParts';
import {
  teilsanierungSeoIntro,
  teilsanierungSeoSections,
} from '../data/teilsanierungSeoContent';
import { teilsanierungLegacySections } from '../data/teilsanierungLegacyContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/teilsanierung-rhein-main';
const HERO_IMAGE = '/img/teilsanierung-rhein-main.webp';
const HERO_IMAGE_FALLBACK = '/img/teilsanierung-rhein-main-bad-haus-wohnung-radex.webp';
const VIDEO_POSTER = '/img/bernd-teilsanierung-rhein-main.webp';
const SEO_IMAGE = '/img/teilsanierung-wohnbereich-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Teilsanierung Rhein-Main | Einzelne Bereiche professionell sanieren | Radex';
const META_DESCRIPTION =
  'Teilsanierung im Rhein-Main-Gebiet für Häuser, Wohnungen und Gewerbeimmobilien. Radex modernisiert gezielt einzelne Bereiche Ihrer Immobilie – professionell geplant und fachgerecht umgesetzt.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Generalunternehmer & Bauleitung', path: '/leistungen/generalunternehmer-bauleitung' },
  { name: 'Teilsanierung', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Individuelle Sanierungskonzepte',
  'Fester Ansprechpartner',
  'Koordination aller Gewerke',
  'SHK-Meisterbetrieb',
  'Rhein-Main-Gebiet',
];

function TeilsanierungCTA({ isHero = false, centered = false, primaryLabel = 'Kostenlose Beratung' }) {
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
    title: 'Individuelle Beratung',
    desc: 'Jede Immobilie ist anders. Deshalb entwickeln wir Sanierungslösungen, die zu Ihrem Gebäude und Ihrem Budget passen.',
    icon: UserRound,
  },
  {
    title: 'Flexible Projektgrößen',
    desc: 'Ob einzelner Raum oder mehrere Bereiche – wir planen den Umfang Ihrer Teilsanierung passend zu Ihrem Vorhaben.',
    icon: Layers3,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Auch kleinere Projekte profitieren von einer strukturierten Abstimmung aller beteiligten Fachbetriebe.',
    icon: Workflow,
  },
  {
    title: 'SHK-Meisterkompetenz',
    desc: 'Heizungs-, Sanitär- und gebäudetechnische Arbeiten werden fachgerecht geplant und in den Gesamtablauf integriert.',
    icon: Award,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie wissen jederzeit, welche Arbeiten als Nächstes erfolgen und wie sich Ihr Projekt entwickelt.',
    icon: MessagesSquare,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Während der gesamten Teilsanierung steht Ihnen ein fester Ansprechpartner zur Verfügung.',
    icon: ShieldCheck,
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

const projectChecklistItems = [
  'einzelne Wohnungen',
  'Badezimmer',
  'Küchen',
  'Wohnräume',
  'Büros',
  'Praxisräume',
  'vermietete Immobilien',
  'Eigentumswohnungen',
  'Teilbereiche von Einfamilienhäusern',
  'kleinere Gewerbeeinheiten',
];

const leistungenCards = [
  {
    title: 'Badezimmer modernisieren',
    desc: 'Ein neues Badezimmer steigert Wohnkomfort und Wert Ihrer Immobilie. Von der Erneuerung der Sanitäranlagen bis zu modernen Fliesen koordinieren wir sämtliche Arbeiten.',
    icon: Bath,
    to: '/badsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Küche erneuern',
    desc: 'Ob neue Anschlüsse, Wandgestaltung oder Bodenbeläge – wir schaffen die baulichen Voraussetzungen für Ihre neue Küche.',
    icon: ChefHat,
  },
  {
    title: 'Wohnräume modernisieren',
    desc: 'Wohn- und Essbereiche erhalten neue Böden, Wandoberflächen, Decken oder Raumlösungen – abgestimmt auf Ihre Wünsche.',
    icon: Sofa,
  },
  {
    title: 'Bodenbeläge erneuern',
    desc: 'Alte Bodenbeläge werden entfernt und durch moderne Lösungen ersetzt. Gemeinsam finden wir den passenden Belag für Ihre Nutzung.',
    icon: Grid3X3,
  },
  {
    title: 'Wände & Decken',
    desc: 'Von Spachtelarbeiten über Putz bis hin zu neuen Oberflächen entstehen moderne und hochwertige Räume.',
    icon: PaintRoller,
  },
  {
    title: 'Sanitärinstallation',
    desc: 'Einzelne Sanitärbereiche können unabhängig von einer Komplettsanierung modernisiert oder erweitert werden.',
    icon: Droplets,
    to: '/sanitaerinstallation-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Heizungsmodernisierung',
    desc: 'Auch einzelne Heizungsanlagen oder Heizkörper lassen sich im Rahmen einer Teilsanierung erneuern und an aktuelle Anforderungen anpassen.',
    icon: Flame,
    to: '/heizung-sanitaer-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Trockenbau',
    desc: 'Neue Raumaufteilungen, abgehängte Decken oder Trennwände ermöglichen eine flexible Nutzung vorhandener Flächen.',
    icon: LayoutPanelTop,
    to: '/trockenbau-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Innenausbau',
    desc: 'Nach Abschluss aller Arbeiten sorgen hochwertige Oberflächen und Ausbauleistungen für ein stimmiges Gesamtbild.',
    icon: Home,
    to: '/innenausbau-umbau-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Projektkoordination',
    desc: 'Auch kleinere Sanierungsprojekte profitieren von einer professionellen Planung und einer abgestimmten Koordination aller beteiligten Gewerke.',
    icon: ClipboardCheck,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Wir besprechen Ihre Wünsche, den Zustand der Immobilie und den Umfang der gewünschten Teilsanierung.',
    icon: PhoneCall,
  },
  {
    title: 'Besichtigung',
    desc: 'Vor Ort prüfen wir die betroffenen Bereiche und entwickeln eine passende Lösung für Ihr Projekt.',
    icon: SearchCheck,
  },
  {
    title: 'Planung',
    desc: 'Sie erhalten ein individuelles Konzept mit den erforderlichen Leistungen und einem transparenten Projektablauf.',
    icon: ClipboardList,
  },
  {
    title: 'Umsetzung',
    desc: 'Die vereinbarten Arbeiten werden durch die beteiligten Fachgewerke fachgerecht und koordiniert ausgeführt.',
    icon: Hammer,
  },
  {
    title: 'Qualitätskontrolle',
    desc: 'Während der gesamten Bauphase überwachen wir Termine, Qualität und die Abstimmung aller Arbeiten.',
    icon: ShieldCheck,
  },
  {
    title: 'Fertige Übergabe',
    desc: 'Nach erfolgreicher Endkontrolle erfolgt die gemeinsame Abnahme Ihrer modernisierten Bereiche.',
    icon: CircleCheckBig,
  },
];

const typischeProjekteCards = [
  {
    title: 'Badezimmer',
    desc: 'Gezielte Modernisierung einzelner Bäder im Bestand.',
    icon: Bath,
  },
  {
    title: 'Küche',
    desc: 'Bauliche Vorbereitung und Modernisierung rund um den Kücheneinbau.',
    icon: ChefHat,
  },
  {
    title: 'Eigentumswohnung',
    desc: 'Schrittweise Modernisierung einzelner Räume ohne vollständige Sanierung.',
    icon: Building2,
  },
  {
    title: 'Gewerbeflächen',
    desc: 'Umbauten einzelner Büro-, Praxis- oder Verkaufsbereiche während des laufenden Betriebs, soweit möglich.',
    icon: Store,
  },
];

const comparisonOptions = [
  {
    title: 'Teilsanierung',
    desc: 'Bei einer Teilsanierung werden gezielt einzelne Räume oder Gebäudebereiche modernisiert. Ziel ist es, den gewünschten Bereich technisch und optisch aufzuwerten, ohne die gesamte Immobilie zu sanieren.',
    icon: Layers3,
  },
  {
    title: 'Komplettsanierung',
    desc: 'Eine Komplettsanierung umfasst mehrere oder sämtliche Bereiche einer Immobilie und eignet sich insbesondere dann, wenn umfassende Modernisierungen geplant sind.',
    icon: House,
    to: '/komplettsanierung-rhein-main',
    cta: 'Zur Komplettsanierung',
  },
];

const videoTranscript =
  'Nicht jede Immobilie muss vollständig saniert werden. Oft reicht es aus, einzelne Räume oder technische Bereiche gezielt zu modernisieren. Gemeinsam prüfen wir den Zustand Ihrer Immobilie und entwickeln eine Lösung, die zu Ihren Anforderungen und Ihrem Budget passt.';

const faqsData = [
  {
    q: 'Was bedeutet Teilsanierung?',
    a: 'Eine Teilsanierung bedeutet, dass nur bestimmte Bereiche einer Immobilie saniert werden. Das kann ein Bad, ein Gäste-WC, eine Heizung, ein Keller, einzelne Räume, eine Wohnung nach Mieterwechsel oder ein Gewerbebereich sein.',
  },
  {
    q: 'Wann reicht eine Teilsanierung aus?',
    a: 'Eine Teilsanierung reicht oft aus, wenn die Immobilie insgesamt in gutem Zustand ist und nur einzelne Bereiche technisch oder optisch modernisiert werden müssen. Radex prüft, ob die Maßnahme sinnvoll abgegrenzt werden kann.',
  },
  {
    q: 'Was ist der Unterschied zwischen Teilsanierung und Komplettsanierung?',
    a: 'Eine Teilsanierung betrifft ausgewählte Bereiche. Eine Komplettsanierung umfasst mehrere zentrale Bereiche einer Immobilie. Wenn Bad, Heizung, Elektro, Böden, Wände und Innenausbau gleichzeitig betroffen sind, kann eine Komplettsanierung sinnvoller sein.',
  },
  {
    q: 'Kann Radex nur ein Bad sanieren?',
    a: 'Ja. Radex saniert Bäder und Gäste-WCs im Rhein-Main-Gebiet. Dabei werden Sanitär, Abdichtung, Heizung, Trockenbau, Fliesen, Elektrokoordination und Endmontage abgestimmt.',
  },
  {
    q: 'Kann Radex eine Teilsanierung im bewohnten Haus umsetzen?',
    a: 'Ja. Viele Teilsanierungen werden im bewohnten Zustand geplant. Dabei sind Staubschutz, Bauabschnitte, Zugänge, Sanitärnutzung und Zeitplanung besonders wichtig.',
  },
  {
    q: 'Kann eine Teilsanierung später erweitert werden?',
    a: 'Ja. Eine Teilsanierung kann Teil eines langfristigen Plans sein. Wichtig ist, spätere Maßnahmen früh mitzudenken, damit bereits erledigte Arbeiten nicht wieder geöffnet werden müssen.',
  },
];

const radexLiveProjects = [
  {
    image: '/img/bad1.webp',
    badge: 'LIVE',
    title: 'Badsanierung als Teilsanierung',
    location: 'Frankfurt am Main',
    desc: 'Gezielte Badmodernisierung in einer Bestandswohnung – koordiniert mit Sanitär, Fliesen und Elektro.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnzimmer.webp',
    badge: 'Vorher & Nachher',
    title: 'Wohnbereich modernisieren',
    location: 'Darmstadt',
    desc: 'Neue Böden, Wandoberflächen und Decken in einem Wohnbereich – ohne vollständige Wohnungssanierung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Gewerbefläche teilsanieren',
    location: 'Offenbach am Main',
    desc: 'Abschnittsweise Modernisierung einzelner Bürobereiche während des laufenden Betriebs.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'Abgeschlossen',
    title: 'Eigentumswohnung Schritt für Schritt',
    location: 'Rodgau',
    desc: 'Einzelne Räume und technische Bereiche modernisiert – geplant als Etappenprojekt.',
    cta: 'Projekt ansehen',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Wann reicht eine Teilsanierung aus?',
  description:
    'Bernd erklärt, wann eine Teilsanierung sinnvoll ist, welche Bereiche modernisiert werden können und wann eine Komplett- oder Kernsanierung die bessere Wahl ist.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function TeilsanierungLanding() {
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
        name: 'Teilsanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page teilsanierung-page">
      {/* Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/leistungen/generalunternehmer-bauleitung">Generalunternehmer & Bauleitung</Link>
              <span aria-hidden="true">↓</span>
              <span>Teilsanierung</span>
            </nav>
            <p className="br-hero-kicker">
              <Layers3 size={16} strokeWidth={1.5} aria-hidden="true" /> Gezielte Modernisierung statt kompletter Umbau
            </p>
            <p className="br-hero-kicker">Teilsanierung im Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Teilsanierung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">Sie möchten nur bestimmte Bereiche Ihrer Immobilie modernisieren?</p>
            <p className="br-hero-text">
              Nicht jede Immobilie benötigt eine Komplett- oder Kernsanierung. Oft reicht es aus, einzelne Räume oder
              technische Bereiche gezielt zu modernisieren. So können Sie Ihre Immobilie Schritt für Schritt aufwerten
              und Investitionen genau dort einsetzen, wo sie den größten Nutzen bringen.
            </p>
            <p className="br-hero-text">
              Radex Objektmanagement begleitet Teilsanierungen im gesamten Rhein-Main-Gebiet – von der Planung bis zur
              fertigen Umsetzung.
            </p>
            <TeilsanierungCTA isHero />
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
          aria-label="Teilsanierung einer Wohnung im Rhein-Main-Gebiet."
          title="Teilsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      {/* Einführung */}
      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Nicht immer ist eine komplette Sanierung notwendig.</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Viele Eigentümer möchten ihre Immobilie modernisieren, ohne das gesamte Gebäude umzubauen. Häufig betrifft
              dies einzelne Räume wie das Badezimmer, die Küche oder Wohnbereiche. Auch technische Anlagen können gezielt
              erneuert werden, ohne dass eine vollständige Kernsanierung erforderlich ist.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Eine Teilsanierung ermöglicht es, einzelne Maßnahmen sinnvoll zu planen und an den Zustand der Immobilie
              anzupassen. So bleiben funktionierende Bereiche erhalten, während modernisierungsbedürftige Abschnitte
              fachgerecht erneuert werden.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex unterstützt Sie dabei mit einer strukturierten Planung und einer koordinierten Umsetzung aller
              notwendigen Arbeiten.
            </p>
          </div>
        </div>
      </section>

      <SanierungOptionComparison
        title="Teilsanierung oder Komplettsanierung?"
        options={comparisonOptions}
      />

      <ResponsiveChecklistSection
        title="Für welche Projekte eignet sich eine Teilsanierung?"
        intro="Eine Teilsanierung eignet sich besonders für:"
        items={projectChecklistItems}
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
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen im Rahmen einer Teilsanierung – von Bad
        und Küche bis zu Technik, Innenausbau und Projektkoordination.
      </SectionTransition>

      {/* Unsere Leistungen */}
      <section id="leistungen" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <PremiumIconCards cards={leistungenCards} linked largeIcons />
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur fertigen
        Übergabe Ihrer modernisierten Bereiche.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstberatung bis zur fertigen Übergabe – so begleiten wir Ihre Teilsanierung Schritt für Schritt."
        steps={processSteps}
      />

      {/* Typische Projekte */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Projekte</h2>
          </div>
          <PremiumIconCards cards={typischeProjekteCards} largeIcons />
        </div>
      </section>

      {/* Ansprechpartner */}
      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              <strong>Ihr Ansprechpartner für Teilsanierungen</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Ganz gleich, ob Sie ein Badezimmer modernisieren, Wohnräume erneuern oder einzelne Gebäudebereiche umbauen
              möchten – unser Projektteam begleitet Sie von der Planung bis zur fertigen Umsetzung.
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
                Senden Sie uns Fotos Ihrer Immobilie oder des betroffenen Bereichs. Auf dieser Grundlage erhalten Sie eine
                erste unverbindliche Einschätzung.
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
        title="Wann reicht eine Teilsanierung aus?"
        description="Bernd erklärt, wann eine Teilsanierung sinnvoll ist, welche Bereiche modernisiert werden können und wann eine Komplett- oder Kernsanierung die bessere Wahl ist."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf einer Teilsanierung."
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      {/* CTA */}
      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Planen Sie eine Teilsanierung Ihrer Immobilie?</h2>
            <p>
              Ob Badezimmer, Küche, Wohnräume oder einzelne technische Bereiche – wir beraten Sie persönlich und
              entwickeln ein Sanierungskonzept, das genau zu Ihrer Immobilie passt.
            </p>
            <TeilsanierungCTA centered />
          </div>
        </div>
      </section>

      <SeoKnowledgeDrawer
        title="Weitere Informationen"
        sections={teilsanierungLegacySections}
        ctaLabel="Kostenlose Beratung"
        ctaHref="#kontakt"
        panelId="teilsanierung-legacy-panel"
      />

      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Teilsanierung"
        intro={teilsanierungSeoIntro}
        sections={teilsanierungSeoSections}
        ctaLabel="Kostenlose Erstberatung"
        ctaHref="#kontakt"
        panelId="teilsanierung-seo-panel"
      />

      {/* Abschluss-CTA */}
      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Planen Sie eine Teilsanierung Ihrer Immobilie?</h2>
            <p>
              Gemeinsam prüfen wir, welche Bereiche modernisiert werden sollten und entwickeln ein Sanierungskonzept,
              das zu Ihrer Immobilie, Ihrem Zeitplan und Ihrem Budget passt.
            </p>
            <TeilsanierungCTA centered primaryLabel="Kostenlose Erstberatung" />
          </div>
        </div>
      </section>

      {/* SEO-Bild */}
      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '920px' }}>
          <img
            src={SEO_IMAGE}
            alt="Teilsanierung eines Wohnbereichs im Rhein-Main-Gebiet."
            width={1400}
            height={933}
            loading="lazy"
            decoding="async"
            className="br-seo-inline-image"
          />
        </div>
      </section>

      <RadexLiveSection
        title="Radex Live – Einblicke in Teilsanierungsprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Badsanierung, Wohnbereichsmodernisierung, Gewerbeflächen und schrittweise Eigentumswohnungsprojekte."
        projects={radexLiveProjects}
      />
    </main>
  );
}
