import { useEffect } from 'react';
import {
  House,
  HousePlus,
  LayoutPanelTop,
  Workflow,
  Hammer,
  Clock3,
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
  Home,
  Building2,
  Rows3,
  Landmark,
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
  innenausbauHausSeoIntro,
  innenausbauHausSeoSections,
  innenausbauHausSeoLinkSections,
} from '../data/innenausbauHausSeoContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/innenausbau-haus-rhein-main';
const HERO_IMAGE = '/img/innenausbau-haus-rhein-main-radex.webp';
const VIDEO_POSTER = '/img/bernd-innenausbau-haus-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Innenausbau Haus Rhein-Main | Haus modernisieren mit Radex';
const META_DESCRIPTION =
  'Professioneller Innenausbau für Häuser im Rhein-Main-Gebiet. Umbau, Trockenbau, Grundrissänderungen und hochwertige Modernisierung aus einer Hand.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Innenausbau & Umbau', path: '/innenausbau-umbau-rhein-main' },
  { name: 'Innenausbau Haus', path: PAGE_PATH },
];

function InnenausbauHausCTA({ isHero = false, centered = false }) {
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
    title: 'Individuelle Hauskonzepte',
    desc: 'Jedes Ausbauprojekt wird auf Architektur, Nutzung und persönliche Anforderungen abgestimmt.',
    icon: HousePlus,
  },
  {
    title: 'Zentrale Projektkoordination',
    desc: 'Alle Ausbaugewerke werden effizient geplant und während der gesamten Bauphase koordiniert.',
    icon: Workflow,
  },
  {
    title: 'Hochwertige Ausführung',
    desc: 'Sorgfältige Handwerksarbeit und ausgewählte Materialien sorgen für langlebige Ergebnisse.',
    icon: Hammer,
  },
  {
    title: 'Moderne Grundrisse',
    desc: 'Offene Wohnbereiche und funktionale Raumlösungen schaffen mehr Wohnqualität.',
    icon: LayoutPanelTop,
  },
  {
    title: 'Verlässliche Bauzeiten',
    desc: 'Durch strukturierte Abläufe und frühzeitige Planung bleiben Termine transparent und planbar.',
    icon: Clock3,
  },
  {
    title: 'Persönliche Betreuung',
    desc: 'Ein fester Ansprechpartner begleitet Ihr Bauvorhaben von der Planung bis zur Fertigstellung.',
    icon: ClipboardCheck,
  },
];

const qualityCards = [
  {
    title: 'Transparente Kalkulation',
    desc: 'Sie erhalten ein nachvollziehbares Angebot auf Basis eines klar definierten Leistungsumfangs.',
    icon: BadgeEuro,
  },
  {
    title: 'Feste Projektleitung',
    desc: 'Ein persönlicher Ansprechpartner koordiniert sämtliche Arbeiten und informiert Sie regelmäßig über den Projektfortschritt.',
    icon: UserRound,
  },
  {
    title: 'Strukturierte Terminplanung',
    desc: 'Alle Bauabschnitte werden frühzeitig abgestimmt und effizient organisiert.',
    icon: CalendarClock,
  },
  {
    title: 'Kontrollierte Qualität',
    desc: 'Jede Bauphase wird sorgfältig geprüft, um einen hohen Qualitätsstandard sicherzustellen.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie erhalten jederzeit einen klaren Überblick über den aktuellen Stand Ihres Projekts.',
    icon: MessagesSquare,
  },
  {
    title: 'Nachhaltige Wertsteigerung',
    desc: 'Ein professioneller Innenausbau verbessert Wohnkomfort, Funktionalität und den langfristigen Wert Ihres Hauses.',
    icon: Sparkles,
  },
];

const leistungenCards = [
  {
    title: 'Hausmodernisierung',
    desc: 'Komplette Modernisierung von Einfamilienhäusern, Doppelhäusern und Bestandsimmobilien – individuell geplant und hochwertig umgesetzt.',
    icon: HousePlus,
    to: '#haus-modernisieren',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Grundriss & Trockenbau',
    desc: 'Neue Raumaufteilungen, Trockenbauwände, Deckenlösungen und individuelle Wohnkonzepte für mehr Komfort und Funktionalität.',
    icon: PanelsTopLeft,
    to: '#trockenbau',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Schlüsselfertiger Innenausbau',
    desc: 'Von der ersten Planung bis zur fertigen Übergabe koordinieren wir sämtliche Ausbauarbeiten aus einer Hand.',
    icon: Hammer,
    to: '#schluesselfertig',
    cta: 'Mehr erfahren',
  },
];

const typischeLeistungenCards = [
  {
    title: 'Offene Wohnbereiche',
    desc: 'Durch intelligente Grundrissanpassungen entstehen großzügige Wohn-, Ess- und Küchenbereiche.',
    icon: LayoutPanelTop,
  },
  {
    title: 'Trockenbau',
    desc: 'Neue Innenwände, Raumtrennungen und Installationswände ermöglichen flexible Raumlösungen.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Deckenbau',
    desc: 'Abgehängte Decken schaffen Platz für Beleuchtung, Lüftung und moderne Haustechnik.',
    icon: PanelTop,
  },
  {
    title: 'Bodenbeläge',
    desc: 'Verlegung hochwertiger Bodenbeläge passend zu Nutzung, Design und Beanspruchung.',
    icon: LayoutGrid,
  },
  {
    title: 'Malerarbeiten',
    desc: 'Professionelle Oberflächen für Wände und Decken bilden den hochwertigen Abschluss des Innenausbaus.',
    icon: Paintbrush,
  },
  {
    title: 'Türen & Zargen',
    desc: 'Einbau moderner Innentüren sowie Anpassung bestehender Türöffnungen an neue Raumkonzepte.',
    icon: DoorOpen,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Wir besprechen Ihre Vorstellungen, die bestehende Immobilie und den gewünschten Umfang des Innenausbaus.',
    icon: PhoneCall,
  },
  {
    title: 'Planung',
    desc: 'Gemeinsam entwickeln wir ein individuelles Ausbaukonzept mit Grundriss, Materialauswahl und Bauablauf.',
    icon: Ruler,
  },
  {
    title: 'Angebot',
    desc: 'Sie erhalten ein transparentes Angebot mit einem klar definierten Leistungsumfang.',
    icon: ClipboardList,
  },
  {
    title: 'Umsetzung',
    desc: 'Unsere Projektleitung koordiniert sämtliche Ausbaugewerke und sorgt für einen reibungslosen Bauablauf.',
    icon: Hammer,
  },
  {
    title: 'Ausbau & Fertigstellung',
    desc: 'Alle Oberflächen, Bodenbeläge, Türen und weiteren Ausbauleistungen werden fachgerecht ausgeführt.',
    icon: PaintRoller,
  },
  {
    title: 'Übergabe',
    desc: 'Nach gemeinsamer Abnahme übergeben wir Ihr modernisiertes Haus schlüsselfertig.',
    icon: CircleCheckBig,
  },
];

const einsatzbereicheCards = [
  {
    title: 'Einfamilienhäuser',
    desc: 'Individuelle Modernisierung bestehender Wohnhäuser mit maßgeschneiderten Ausbaukonzepten.',
    icon: Home,
  },
  {
    title: 'Doppelhäuser',
    desc: 'Umbau und Modernisierung einzelner oder beider Haushälften unter Berücksichtigung der bestehenden Gebäudestruktur.',
    icon: Building2,
  },
  {
    title: 'Reihenhäuser',
    desc: 'Effiziente Innenausbauprojekte für Reihenhäuser mit optimaler Nutzung der vorhandenen Wohnfläche.',
    icon: Rows3,
  },
  {
    title: 'Bestandsimmobilien',
    desc: 'Modernisierung älterer Wohngebäude mit zeitgemäßen Raumkonzepten und hochwertigen Materialien.',
    icon: Landmark,
  },
];

const radexLiveProjects = [
  {
    image: '/img/sanierung-service-haus.webp',
    badge: 'Vorher & Nachher',
    title: 'Hausmodernisierung Einfamilienhaus',
    location: 'Offenbach am Main',
    desc: 'Kompletter Innenausbau mit offenem Wohnbereich, neuen Bodenbelägen und Trockenbau – koordiniert aus einer Hand.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/wohnzimmer.webp',
    badge: 'LIVE',
    title: 'Offene Wohnbereiche im Bestand',
    location: 'Frankfurt am Main',
    desc: 'Grundrissanpassung und Trockenbau für einen großzügigen Wohn-Ess-Kochbereich in einem Bestandshaus.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/boden.webp',
    badge: 'Abgeschlossen',
    title: 'Bodenbeläge & Malerarbeiten',
    location: 'Darmstadt',
    desc: 'Hochwertige Bodenverlegung und Oberflächenarbeiten im Rahmen einer Hausmodernisierung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/renov1.webp',
    badge: 'LIVE',
    title: 'Dachgeschossausbau',
    location: 'Rodgau',
    desc: 'Trockenbau und Innenausbau für zusätzlichen Wohnraum im Dachgeschoss eines Einfamilienhauses.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/komplettsanierung-rhein-main-haus-wohnung.webp',
    badge: 'Abgeschlossen',
    title: 'Kompletter Hausumbau',
    location: 'Dreieich',
    desc: 'Vollständige Modernisierung eines Bestandshauses – von Trockenbau über Böden bis zur schlüsselfertigen Übergabe.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buro2.webp',
    badge: 'Video',
    title: 'Baustelleneinblick Hausausbau',
    location: 'Neu-Isenburg',
    desc: 'Authentischer Einblick in Trockenbau, Grundrissänderungen und Malerarbeiten auf einer echten Hausbaustelle.',
    cta: 'Video ansehen',
  },
];

const videoTranscript =
  'Jedes Haus hat andere Voraussetzungen. Deshalb analysieren wir zunächst den Bestand und entwickeln daraus ein individuelles Ausbaukonzept. Anschließend koordinieren wir sämtliche Gewerke – von Trockenbau und Bodenarbeiten bis zu Malerarbeiten und der fertigen Übergabe.';

const faqsData = [
  {
    q: 'Was umfasst ein professioneller Innenausbau für Häuser?',
    a: 'Ein Innenausbau für Häuser kann Grundrissänderungen, Trockenbau, Deckenbau, Bodenbeläge, Malerarbeiten, Türen, Bad- und Küchenmodernisierung sowie die zentrale Koordination aller Ausbaugewerke umfassen – von einzelnen Räumen bis zur kompletten Hausmodernisierung.',
  },
  {
    q: 'Modernisiert Radex Einfamilienhäuser, Doppelhäuser und Bestandsimmobilien?',
    a: 'Ja. Radex begleitet Innenausbauprojekte für Einfamilienhäuser, Doppelhäuser, Reihenhäuser und Bestandsimmobilien im gesamten Rhein-Main-Gebiet.',
  },
  {
    q: 'Können Grundrisse im Bestand verändert werden?',
    a: 'Ja. Durch neue Wandstellungen oder den fachgerechten Rückbau von Innenwänden entstehen oft großzügigere Wohnbereiche. Bei tragenden Bauteilen erfolgen Planung und Umsetzung ausschließlich nach statischer Prüfung und – sofern erforderlich – mit den notwendigen Genehmigungen.',
  },
  {
    q: 'Übernimmt Radex auch Trockenbau und Dachgeschossausbau?',
    a: 'Ja. Trockenbauwände, Deckensysteme, Installationswände und Dachgeschossausbauten werden geplant und mit allen Anschlussgewerken koordiniert.',
  },
  {
    q: 'Was bedeutet schlüsselfertiger Innenausbau für Häuser?',
    a: 'Radex koordiniert sämtliche Ausbauarbeiten – von der Planung über Trockenbau, Bodenarbeiten und Malerleistungen bis zur Endmontage – und übergibt Ihr Haus bezugsfertig.',
  },
  {
    q: 'In welchen Städten ist Radex für Hausausbau tätig?',
    a: 'Radex realisiert Innenausbauprojekte im gesamten Rhein-Main-Gebiet – unter anderem in Frankfurt, Offenbach, Darmstadt, Hanau, Rodgau und über 60 weiteren Gemeinden.',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Wie läuft ein Hausumbau ab?',
  description:
    'Bernd erklärt, wie ein Haus Schritt für Schritt modernisiert wird – von der Planung über Trockenbau und Grundrissänderungen bis zur schlüsselfertigen Übergabe.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const seoTocSections = [...innenausbauHausSeoSections, ...innenausbauHausSeoLinkSections];

export default function InnenausbauHausLanding() {
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
        name: 'Innenausbau Haus Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page innenausbau-haus-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/innenausbau-umbau-rhein-main">Innenausbau & Umbau</Link>
              <span aria-hidden="true">↓</span>
              <span>Innenausbau Haus</span>
            </nav>
            <p className="br-hero-kicker">
              <House size={16} strokeWidth={1.5} aria-hidden="true" /> Innenausbau Haus · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Innenausbau für Häuser
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Individuelle Umbau- und Ausbaukonzepte für Einfamilienhäuser, Doppelhäuser und Bestandsimmobilien –
              professionell geplant und hochwertig umgesetzt.
            </p>
            <p className="br-hero-text">
              Ein Haus sollte sich den Bedürfnissen seiner Bewohner anpassen. Ob neue Raumaufteilungen, moderne
              Wohnkonzepte oder die umfassende Modernisierung eines Bestandsgebäudes – Radex begleitet Ihr Projekt von
              der ersten Idee bis zur schlüsselfertigen Fertigstellung.
            </p>
            <p className="br-hero-text">
              Durch die zentrale Koordination aller Ausbaugewerke entstehen effiziente Abläufe, hochwertige Ergebnisse
              und ein Innenausbau, der Funktionalität, Wohnkomfort und langfristige Wertbeständigkeit miteinander
              verbindet.
            </p>
            <InnenausbauHausCTA isHero />
            <p className="br-hero-micro" style={{ marginTop: '16px' }}>
              Hausmodernisierung · Individuelle Planung · Alles aus einer Hand
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Professioneller Innenausbau eines modernisierten Hauses im Rhein-Main-Gebiet."
          title="Innenausbau Haus Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Häuser modernisieren und Wohnqualität nachhaltig verbessern</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Der Innenausbau eines Hauses bietet die Möglichkeit, bestehende Grundrisse neu zu gestalten, Wohnkomfort zu
              erhöhen und den Wert der Immobilie langfristig zu steigern. Besonders Bestandsimmobilien profitieren von
              modernen Raumkonzepten, hochwertigen Materialien und einer professionellen Projektkoordination.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex übernimmt sämtliche Ausbauleistungen – von Trockenbau und Grundrissänderungen über Oberflächen und
              Bodenbeläge bis zur fertigen Übergabe. Dabei werden alle Gewerke effizient koordiniert und aufeinander
              abgestimmt.
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
        Von der Hausmodernisierung bis zum schlüsselfertigen Innenausbau – im nächsten Abschnitt finden Sie einen
        Überblick über unsere Leistungen im Bereich Innenausbau Haus.
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
        Offene Wohnbereiche, Trockenbau, Deckenbau, Bodenbeläge, Malerarbeiten sowie Türen und Zargen – typische
        Ausbauleistungen für die Modernisierung von Häusern im Rhein-Main-Gebiet.
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
        schlüsselfertigen Übergabe Ihres modernisierten Hauses.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstberatung bis zur schlüsselfertigen Übergabe – so begleiten wir Ihren Hausausbau Schritt für Schritt."
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
              <strong>Das Team Hausmodernisierung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleitung begleitet Ihr Innenausbauprojekt von der ersten Beratung über die Planung bis zur
              schlüsselfertigen Fertigstellung. Sämtliche Gewerke werden zentral koordiniert und effizient aufeinander
              abgestimmt.
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
                Senden Sie Grundrisse oder Fotos Ihres Hauses und erhalten Sie eine unverbindliche Ersteinschätzung.
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
        title="Wie läuft ein Hausumbau ab?"
        description="Bernd erklärt, wie ein Haus Schritt für Schritt modernisiert wird – von der Planung über Trockenbau und Grundrissänderungen bis zur schlüsselfertigen Übergabe."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf eines professionellen Innenausbaus für Häuser im Rhein-Main-Gebiet."
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Sie möchten Ihr Haus modernisieren?</h2>
            <p>
              Ob Einfamilienhaus, Doppelhaus oder Bestandsimmobilie – Radex begleitet Ihr Projekt von der ersten
              Planung bis zur schlüsselfertigen Fertigstellung. Gemeinsam entwickeln wir ein individuelles
              Ausbaukonzept, das Funktionalität, Wohnkomfort und hochwertige Ausführung verbindet.
            </p>
            <InnenausbauHausCTA centered />
          </div>
        </div>
      </section>

      <SeoTocSection
        title="Unsere Leistungen im Bereich Innenausbau Haus"
        intro={innenausbauHausSeoIntro}
        sections={seoTocSections}
        showAllContent
        panelId="innenausbau-haus-seo-panel"
        ctaLabel="Kostenlose Erstberatung"
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Hausmodernisierungen"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Hausmodernisierung, Innenausbau Einfamilienhaus, offene Wohnbereiche, Trockenbau, Dachgeschossausbau, Bodenbeläge und komplette Hausumbauten."
        projects={radexLiveProjects}
      />
    </main>
  );
}
