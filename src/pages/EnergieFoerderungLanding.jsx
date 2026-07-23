import { useEffect } from 'react';
import {
  Leaf,
  Gauge,
  BadgeEuro,
  ClipboardCheck,
  Settings2,
  UserRound,
  Network,
  MapPin,
  Home,
  GaugeCircle,
  WalletCards,
  TrendingDown,
  ThermometerSun,
  TrendingUp,
  Shield,
  Phone,
  Mail,
  MessageCircle,
  BriefcaseBusiness,
  Hammer,
  Zap,
  Flame,
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
  RadexLiveSection,
  BerndExplainsVideo,
  FaqAccordion,
  MoneyPageQualityGrid,
} from '../components/landing/SharedLandingParts';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/energie-foerderung';
const HERO_IMAGE = '/img/energie-foerderung-rhein-main.webp';
const HERO_IMAGE_FALLBACK = '/img/haus-service-energie.png';
const VIDEO_POSTER = '/img/bernd-energie-foerderung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Energie & Förderung | Energetische Sanierung & Fördermittel | Radex';
const META_DESCRIPTION =
  'Alles rund um energetische Sanierungen, Energieeffizienz und Fördermöglichkeiten im Rhein-Main-Gebiet. Finden Sie die passende Lösung für Ihre Immobilie.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Energie & Förderung', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Individuelle Beratung',
  'Ganzheitliche Sanierungsplanung',
  'Energieeffiziente Lösungen',
  'Fördermöglichkeiten im Blick',
  'Rhein-Main-Gebiet',
];

function EnergieFoerderungCTA({ isHero = false, centered = false, primaryLabel = 'Kostenlose Beratung' }) {
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

const leistungsbereicheCards = [
  {
    title: 'Energetische Sanierung',
    desc: 'Gebäude nachhaltig modernisieren – verbessern Sie die energetische Qualität Ihrer Immobilie durch aufeinander abgestimmte Sanierungsmaßnahmen.',
    icon: Leaf,
    to: '/energetische-sanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Energieeffizienz',
    desc: 'Energieverbrauch dauerhaft reduzieren – mit modernen Lösungen lässt sich der Energiebedarf Ihrer Immobilie nachhaltig senken und der Wohnkomfort steigern.',
    icon: Gauge,
    to: '/energieeffizienz-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Sanierung Förderung',
    desc: 'Fördermöglichkeiten optimal nutzen – informieren Sie sich über Zuschüsse und Finanzierungsmöglichkeiten für energetische Sanierungsmaßnahmen.',
    icon: BadgeEuro,
    to: '/sanierung-foerderung-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const whyRadexCards = [
  {
    title: 'Ganzheitliche Beratung',
    desc: 'Wir betrachten Ihre Immobilie als Gesamtsystem und entwickeln individuelle Sanierungslösungen.',
    icon: ClipboardCheck,
  },
  {
    title: 'Energieeffiziente Planung',
    desc: 'Sanierungsmaßnahmen werden sinnvoll aufeinander abgestimmt, um das bestmögliche Ergebnis zu erzielen.',
    icon: Settings2,
  },
  {
    title: 'Fördermöglichkeiten im Blick',
    desc: 'Wir unterstützen Sie dabei, geeignete Förderprogramme frühzeitig in die Planung einzubeziehen.',
    icon: BadgeEuro,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Während des gesamten Projekts begleiten wir Sie mit einer zentralen Ansprechperson.',
    icon: UserRound,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Energetische Maßnahmen werden optimal mit allen beteiligten Fachbetrieben abgestimmt.',
    icon: Network,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Wir begleiten private und gewerbliche Sanierungsprojekte in der gesamten Region.',
    icon: MapPin,
  },
];

const leistungenOverviewCards = [
  {
    title: 'Energetische Sanierung',
    desc: 'Mit einer energetischen Sanierung verbessern Sie die Gebäudehülle und reduzieren dauerhaft den Energieverbrauch Ihrer Immobilie.',
    icon: Leaf,
    to: '/energetische-sanierung-rhein-main',
    cta: 'Zur energetischen Sanierung',
  },
  {
    title: 'Energieeffizienz',
    desc: 'Steigern Sie die Energieeffizienz Ihrer Immobilie durch moderne Lösungen für Gebäude, Technik und Energieverbrauch.',
    icon: Gauge,
    to: '/energieeffizienz-rhein-main',
    cta: 'Zur Energieeffizienz',
  },
  {
    title: 'Sanierung Förderung',
    desc: 'Informieren Sie sich über aktuelle Fördermöglichkeiten und Finanzierungshilfen für energetische Sanierungsmaßnahmen.',
    icon: BadgeEuro,
    to: '/sanierung-foerderung-rhein-main',
    cta: 'Zur Förderung',
  },
];

const decisionCards = [
  {
    title: 'Ich möchte mein Gebäude energetisch modernisieren',
    desc: 'Energetische Sanierung – ideal, wenn Dach, Fassade, Fenster oder die Heiztechnik modernisiert werden sollen, um Energieverbrauch und Betriebskosten dauerhaft zu senken.',
    icon: Home,
    to: '/energetische-sanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Ich möchte langfristig Energie sparen',
    desc: 'Energieeffizienz – wenn Sie Ihre Immobilie effizienter machen und den Energiebedarf nachhaltig reduzieren möchten.',
    icon: GaugeCircle,
    to: '/energieeffizienz-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Ich möchte Fördermittel nutzen',
    desc: 'Sanierung Förderung – informieren Sie sich über Zuschüsse, Kredite und Förderprogramme für energetische Maßnahmen.',
    icon: WalletCards,
    to: '/sanierung-foerderung-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const benefitCards = [
  {
    title: 'Energiekosten senken',
    desc: 'Eine energieeffiziente Immobilie benötigt dauerhaft weniger Energie und reduziert langfristig die laufenden Betriebskosten.',
    icon: TrendingDown,
  },
  {
    title: 'Wohnkomfort erhöhen',
    desc: 'Moderne Gebäude bieten ein angenehmeres Raumklima, weniger Zugluft und eine gleichmäßigere Wärmeverteilung.',
    icon: ThermometerSun,
  },
  {
    title: 'Immobilienwert steigern',
    desc: 'Energetische Modernisierungen können den Marktwert und die Attraktivität einer Immobilie nachhaltig verbessern.',
    icon: TrendingUp,
  },
  {
    title: 'Zukunftssicher investieren',
    desc: 'Eine frühzeitige Modernisierung erleichtert die Anpassung an zukünftige technische und gesetzliche Anforderungen.',
    icon: Shield,
  },
];

const internalLinkCards = [
  {
    title: 'Energetische Sanierung',
    desc: 'Gebäudehülle, Heiztechnik und energetische Maßnahmen im Zusammenspiel – der Einstieg für eine nachhaltige Modernisierung.',
    icon: Leaf,
    to: '/energetische-sanierung-rhein-main',
    cta: 'Mehr über energetische Sanierungen erfahren',
  },
  {
    title: 'Energieeffizienz',
    desc: 'Energieverbrauch senken, Wohnkomfort steigern und den energetischen Standard Ihrer Immobilie verbessern.',
    icon: Gauge,
    to: '/energieeffizienz-rhein-main',
    cta: 'Mehr über Energieeffizienz erfahren',
  },
  {
    title: 'Sanierung Förderung',
    desc: 'Zuschüsse, Finanzierungshilfen und Förderprogramme für energetische Sanierungsmaßnahmen im Überblick.',
    icon: BadgeEuro,
    to: '/sanierung-foerderung-rhein-main',
    cta: 'Fördermöglichkeiten entdecken',
  },
];

const relatedClusterCards = [
  {
    title: 'Generalunternehmer',
    desc: 'Bei umfangreichen Modernisierungen koordinieren wir sämtliche Gewerke und übernehmen die komplette Projektsteuerung.',
    icon: BriefcaseBusiness,
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Komplettsanierung',
    desc: 'Energetische Maßnahmen lassen sich optimal in eine Komplettsanierung integrieren.',
    icon: Hammer,
    to: '/komplettsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Elektrotechnik & Gebäudetechnik',
    desc: 'Moderne Gebäudetechnik und energieeffiziente Elektroinstallationen ergänzen energetische Sanierungen sinnvoll.',
    icon: Zap,
    to: '/elektrotechnik-gebaeudetechnik',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Heizung & Sanitär',
    desc: 'Moderne Heizsysteme und effiziente Sanitärtechnik tragen entscheidend zur Energieeinsparung bei.',
    icon: Flame,
    to: '/heizung-sanitaer-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const radexLiveProjects = [
  {
    image: '/img/sanierung-service-haus.webp',
    badge: 'LIVE',
    title: 'Energetische Modernisierung Einfamilienhaus',
    location: 'Rodgau',
    desc: 'Gebäudehülle, Heiztechnik und Förderwege frühzeitig abgestimmt – laufende Einblicke in die Bauphase.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-heizung.png',
    badge: 'Abgeschlossen',
    title: 'Heizungstausch im Bestand',
    location: 'Offenbach am Main',
    desc: 'Moderne Heiztechnik mit abgestimmter Projektplanung und koordinierten Gewerken.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-service-energie.png',
    badge: 'Vorher & Nachher',
    title: 'Altbau energetisch modernisiert',
    location: 'Darmstadt',
    desc: 'Mehrere energetische Maßnahmen sinnvoll kombiniert – von der Planung bis zur Umsetzung.',
    cta: 'Projekt ansehen',
  },
];

const videoTranscript =
  'Eine energetische Sanierung ist weit mehr als nur eine neue Heizung. Erst das Zusammenspiel von Gebäudehülle, Heiztechnik, Dämmung und moderner Gebäudetechnik sorgt für eine nachhaltige Verbesserung der Energieeffizienz. Gleichzeitig können viele Maßnahmen durch staatliche Förderprogramme unterstützt werden.';

const faqsData = [
  {
    q: 'Was versteht man unter einer energetischen Sanierung?',
    a: 'Dabei werden Maßnahmen umgesetzt, die den Energieverbrauch einer Immobilie dauerhaft reduzieren. Dazu zählen beispielsweise Dämmmaßnahmen, moderne Heiztechnik oder neue Fenster.',
  },
  {
    q: 'Welche Vorteile bietet eine höhere Energieeffizienz?',
    a: 'Eine energieeffiziente Immobilie reduziert Energiekosten, verbessert den Wohnkomfort und kann langfristig den Immobilienwert steigern.',
  },
  {
    q: 'Gibt es Förderungen für energetische Sanierungen?',
    a: 'Ja. Je nach Maßnahme können Zuschüsse oder zinsgünstige Finanzierungen über staatliche Förderprogramme möglich sein. Details finden Sie auf unserer Seite Sanierung Förderung.',
  },
  {
    q: 'Muss ich alle Maßnahmen gleichzeitig umsetzen?',
    a: 'Nein. Viele energetische Modernisierungen lassen sich schrittweise durchführen. Eine gute Planung hilft dabei, einzelne Maßnahmen sinnvoll aufeinander abzustimmen.',
  },
  {
    q: 'Unterstützt Radex auch bei der Planung?',
    a: 'Ja. Wir begleiten Sie von der ersten Beratung über die Projektplanung bis zur Koordination aller beteiligten Fachbetriebe.',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Energetisch sanieren – welche Möglichkeiten gibt es?',
  description:
    'Bernd erklärt, wie energetische Sanierungen, Energieeffizienz und staatliche Förderprogramme zusammenhängen und worauf Eigentümer bei der Planung achten sollten.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT3M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function EnergieFoerderungLanding() {
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
        name: 'Energie & Förderung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page energie-foerderung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <span>Energie &amp; Förderung</span>
            </nav>
            <p className="br-hero-kicker">
              <Leaf size={16} strokeWidth={1.5} aria-hidden="true" /> Nachhaltig sanieren und Fördermöglichkeiten optimal
              nutzen
            </p>
            <h1 className="br-hero-title">Energie &amp; Förderung für Ihre Immobilie</h1>
            <p className="br-hero-lead">
              Energie sparen, den Wohnkomfort steigern und passende Fördermöglichkeiten für Ihre Sanierung nutzen.
            </p>
            <p className="br-hero-text">
              Eine energetische Modernisierung verbessert nicht nur die Energieeffizienz Ihrer Immobilie, sondern senkt
              langfristig die Betriebskosten und steigert den Immobilienwert. Gleichzeitig stehen für viele Maßnahmen
              attraktive Förderprogramme zur Verfügung.
            </p>
            <p className="br-hero-text">
              Ob energetische Sanierung, Energieeffizienz oder Informationen zu Fördermöglichkeiten – hier finden Sie den
              passenden Einstieg für Ihr Vorhaben.
            </p>
            <EnergieFoerderungCTA isHero />
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
          aria-label="Energetische Sanierung und Energieeffizienz im Rhein-Main-Gebiet."
          title="Energetische Sanierung und Energieeffizienz im Rhein-Main-Gebiet."
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Nachhaltig modernisieren und langfristig profitieren</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Steigende Energiekosten und höhere Anforderungen an Gebäude machen energieeffiziente Sanierungen wichtiger
              denn je. Mit einer durchdachten Planung lassen sich Energieverbrauch, Betriebskosten und CO₂-Emissionen
              dauerhaft reduzieren. Gleichzeitig verbessern moderne Maßnahmen den Wohnkomfort und steigern den Wert Ihrer
              Immobilie.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Je nach Ausgangssituation kommen unterschiedliche Lösungen infrage – von einer umfassenden energetischen
              Sanierung über einzelne Maßnahmen zur Verbesserung der Energieeffizienz bis hin zur Nutzung staatlicher
              Förderprogramme.
            </p>
          </div>
        </div>
      </section>

      <section id="leistungen" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <div className="br-leistungen-grid-three">
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

      <MoneyPageQualityGrid />

      <SectionTransition>
        Energetische Sanierung, Energieeffizienz oder Fördermittel – im nächsten Abschnitt finden Sie einen Überblick
        über unsere Leistungen im Bereich Energie &amp; Förderung.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <div className="br-leistungen-grid-three">
            <PremiumIconCards cards={leistungenOverviewCards} linked largeIcons />
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Leistung passt zu Ihrem Projekt?</h2>
          </div>
          <div className="br-leistungen-grid-three">
            <PremiumIconCards cards={decisionCards} linked largeIcons />
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum sich energetische Sanierungen lohnen</h2>
          </div>
          <div className="br-leistungen-grid-four">
            <PremiumIconCards cards={benefitCards} largeIcons />
          </div>
        </div>
      </section>

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Ihr Ansprechpartner für Energie &amp; Förderung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Sie möchten Ihre Immobilie energetisch modernisieren oder wissen, welche Fördermöglichkeiten zu Ihrem
              Vorhaben passen? Wir beraten Sie persönlich und unterstützen Sie bei der Planung Ihres Projekts.
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
              <p>Senden Sie uns Fotos oder Unterlagen Ihrer Immobilie. Wir geben Ihnen eine erste unverbindliche Einschätzung.</p>
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
        title="Energetisch sanieren – welche Möglichkeiten gibt es?"
        description="Bernd erklärt, wie energetische Sanierungen, Energieeffizienz und staatliche Förderprogramme zusammenhängen und worauf Eigentümer bei der Planung achten sollten."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt Energieeffizienz und Fördermöglichkeiten."
        duration="ca. 3 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Jetzt energieeffizient modernisieren und Fördermöglichkeiten nutzen</h2>
            <p>
              Ob energetische Sanierung, Maßnahmen zur Verbesserung der Energieeffizienz oder Informationen zu staatlichen
              Förderprogrammen – wir unterstützen Sie bei der Planung und begleiten Ihr Projekt Schritt für Schritt.
            </p>
            <EnergieFoerderungCTA centered />
          </div>
        </div>
      </section>

      <RadexLiveSection
        title="Radex Live"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: energetische Sanierungen, Heizungsmodernisierungen und koordinierte Modernisierungsprojekte."
        projects={radexLiveProjects}
      />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Energie &amp; Förderung – unsere Leistungsbereiche</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Finden Sie den passenden Einstieg für Ihr Vorhaben – von energetischer Sanierung über Energieeffizienz bis
              zu Fördermöglichkeiten.
            </p>
          </div>
          <div className="br-leistungen-grid-three">
            <PremiumIconCards cards={internalLinkCards} linked largeIcons />
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Weitere passende Leistungsbereiche</h2>
          </div>
          <div className="br-leistungen-grid-four">
            <PremiumIconCards cards={relatedClusterCards} linked largeIcons />
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen" />

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Gemeinsam energieeffizient in die Zukunft</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Ganz gleich, ob Sie Ihre Immobilie energetisch modernisieren, den Energieverbrauch senken oder sich über
              Fördermöglichkeiten informieren möchten – wir begleiten Sie bei jedem Schritt Ihres Projekts. Gemeinsam
              entwickeln wir eine nachhaltige Lösung, die zu Ihrer Immobilie und Ihren Zielen passt.
            </p>
            <div style={{ marginTop: '32px' }}>
              <EnergieFoerderungCTA centered />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
