import { useEffect, useMemo } from 'react';
import {
  Building2,
  Layers3,
  BriefcaseBusiness,
  ClipboardCheck,
  MapPinned,
  HardHat,
  BadgeEuro,
  UserRound,
  CalendarClock,
  Network,
  ShieldCheck,
  MessagesSquare,
  Building,
  LayoutTemplate,
  Search,
  ClipboardList,
  Hammer,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  RefreshCw,
  PanelsTopLeft,
  Store,
  Stethoscope,
  Landmark,
  Workflow,
  KeyRound,
  Settings2,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import '../data/legacyServiceStyles.css';
import useSeo, { buildBreadcrumbSchema, buildServiceSchema } from '../useSeo';
import ReviewsMarquee from '../components/ReviewsMarquee';
import { cityDataMap, cityIds } from '../data/cities';
import {
  PremiumIconCards,
  SectionTransition,
  SeoKnowledgeDrawer,
  RadexLiveSection,
  HorizontalProcessTimeline,
  BerndExplainsVideo,
  PageAnchorNav,
  ExpandableSeoServiceGrid,
  RegionalServiceCities,
} from '../components/landing/SharedLandingParts';
import {
  gewerbeObjektsanierungHubSeoIntro,
  gewerbeObjektsanierungHubSeoServices,
} from '../data/gewerbeObjektsanierungHubSeoContent';
import { gewerbeObjektsanierungLegacySections } from '../data/gewerbeObjektsanierungLegacyContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/gewerbe-objektsanierung-rhein-main';
const HERO_IMAGE = '/img/gewerbe-objektsanierung-rhein-main-radex.webp';
const HERO_IMAGE_FALLBACK = '/img/gewerbesanierung-rhein-main-radex.webp';
const VIDEO_POSTER = '/img/bernd-gewerbesanierung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE =
  'Gewerbe- & Objektsanierung Rhein-Main | Büroumbau, Gewerbesanierung & Mieterausbau';
const META_DESCRIPTION =
  'Gewerbe- & Objektsanierung im Rhein-Main-Gebiet für Büros, Gewerbeimmobilien, Praxen und Ladenlokale. Planung, Umbau, Sanierung und Modernisierung aus einer Hand.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Gewerbe & Objektsanierung', path: PAGE_PATH },
];

const ANCHOR_NAV = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#projektablauf', label: 'Projektablauf' },
  { href: '#kontakt', label: 'Kontakt' },
  { href: '#video', label: 'Video' },
  { href: '#weitere-informationen', label: 'Informationen' },
  { href: '#weitere-leistungen', label: 'Serviceübersicht' },
  { href: '#einsatzgebiete', label: 'Einsatzgebiete' },
];

const iconMap = {
  Building2,
  RefreshCw,
  PanelsTopLeft,
  BriefcaseBusiness,
  Store,
  Stethoscope,
  LayoutTemplate,
  Landmark,
  Workflow,
  KeyRound,
  Layers3,
  Settings2,
};

function GewerbeObjektsanierungCTA({ isHero = false, centered = false }) {
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
    title: 'Spezialisiert auf Gewerbeimmobilien',
    desc: 'Von Bürogebäuden über Praxen bis zu Ladenlokalen – wir modernisieren Gewerbeobjekte unterschiedlichster Branchen mit einem klaren Fokus auf Qualität, Funktionalität und Wirtschaftlichkeit.',
    icon: Building2,
  },
  {
    title: 'Alle Gewerke aus einer Hand',
    desc: 'Trockenbau, Elektroinstallation, Sanitär, Bodenbeläge, Malerarbeiten und viele weitere Leistungen werden zentral geplant und koordiniert.',
    icon: Layers3,
  },
  {
    title: 'Umbau im laufenden Betrieb',
    desc: 'Viele Projekte können abschnittsweise umgesetzt werden, damit Ihr Unternehmen während der Bauphase möglichst ohne größere Einschränkungen weiterarbeiten kann.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Strukturierte Projektsteuerung',
    desc: 'Klare Zeitpläne, transparente Kommunikation und eine professionelle Bauleitung sorgen für einen effizienten Projektablauf.',
    icon: ClipboardCheck,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Kurze Wege ermöglichen eine persönliche Betreuung Ihrer Projekte in Frankfurt am Main, Offenbach am Main, Hofheim am Taunus, Dreieich, Wiesbaden und vielen weiteren Städten.',
    icon: MapPinned,
  },
  {
    title: 'Lösungen für jede Unternehmensgröße',
    desc: 'Ob einzelne Gewerbeeinheit oder kompletter Unternehmensstandort – wir entwickeln maßgeschneiderte Lösungen für kleine Betriebe, Mittelstand und größere Gewerbeobjekte.',
    icon: HardHat,
  },
];

const qualityCards = [
  {
    title: 'Festpreisgarantie',
    desc: 'Eine transparente Kalkulation und klar definierte Leistungsumfänge schaffen Planungssicherheit für Ihre Gewerbe- & Objektsanierung.',
    icon: BadgeEuro,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Unsere Projektleitung begleitet Ihr Bauvorhaben von der ersten Abstimmung bis zur erfolgreichen Fertigstellung und koordiniert sämtliche Abläufe.',
    icon: UserRound,
  },
  {
    title: 'Termingerechte Umsetzung',
    desc: 'Durch eine strukturierte Bauzeitenplanung und abgestimmte Arbeitsabläufe werden Projekte zuverlässig und effizient umgesetzt.',
    icon: CalendarClock,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Alle beteiligten Fachbereiche arbeiten zentral gesteuert zusammen – für kurze Abstimmungswege und einen reibungslosen Bauablauf.',
    icon: Network,
  },
  {
    title: 'Geprüfte Qualität',
    desc: 'Sorgfältige Ausführung, hochwertige Materialien und konsequente Qualitätskontrollen sichern langlebige Ergebnisse.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Während des gesamten Projekts informieren wir Sie nachvollziehbar über Baufortschritt, Termine und die nächsten Umsetzungsschritte.',
    icon: MessagesSquare,
  },
];

const leistungenCards = [
  {
    title: 'Gewerbesanierung',
    desc: 'Eine professionelle Gewerbesanierung schafft moderne, wirtschaftliche und zukunftssichere Gewerbeimmobilien. Wir modernisieren Bestandsgebäude, Bürohäuser, Gewerbeeinheiten und Unternehmensstandorte – von einzelnen Bereichen bis zur vollständigen Sanierung.',
    icon: Building,
    to: '/gewerbesanierung-rhein-main',
    cta: 'Mehr zur Gewerbesanierung',
  },
  {
    title: 'Büroumbau',
    desc: 'Moderne Arbeitswelten steigern Produktivität, Kommunikation und Wohlbefinden. Wir planen und realisieren Büroumbauten für Unternehmen jeder Größe – individuell auf Ihre Arbeitsprozesse abgestimmt.',
    icon: BriefcaseBusiness,
    to: '/bueroumbau-rhein-main',
    cta: 'Mehr zum Büroumbau',
  },
  {
    title: 'Mieterausbau',
    desc: 'Wir realisieren schlüsselfertige Mieterausbauten nach den Anforderungen neuer oder bestehender Mieter. Von der Planung bis zur Übergabe erhalten Sie sämtliche Leistungen aus einer Hand.',
    icon: LayoutTemplate,
    to: '/mieterausbau-rhein-main',
    cta: 'Mehr zum Mieterausbau',
  },
];

const processSteps = [
  {
    title: 'Beratung & Objektanalyse',
    desc: 'Gemeinsam besprechen wir Ihre Anforderungen, analysieren die bestehende Immobilie und entwickeln die optimale Lösung für Ihr Unternehmen.',
    icon: Search,
  },
  {
    title: 'Planung & Konzept',
    desc: 'Wir erstellen ein individuelles Sanierungs- oder Umbaukonzept inklusive Zeitplan, Leistungsumfang und transparenter Kostenübersicht.',
    icon: ClipboardList,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Unsere Projektleitung organisiert sämtliche Fachbereiche und sorgt für einen reibungslosen Bauablauf ohne unnötige Abstimmungswege.',
    icon: Network,
  },
  {
    title: 'Fachgerechte Umsetzung',
    desc: 'Alle Arbeiten werden termingerecht und mit hochwertigen Materialien durch erfahrene Fachbetriebe ausgeführt.',
    icon: Hammer,
  },
  {
    title: 'Abnahme & Übergabe',
    desc: 'Nach einer gemeinsamen Qualitätskontrolle übergeben wir Ihnen Ihre modernisierte Gewerbeimmobilie schlüsselfertig.',
    icon: CircleCheckBig,
  },
];

const videoTranscript =
  'Viele Unternehmen stehen irgendwann vor der Frage, wie sich ihre Gewerbeimmobilie modernisieren lässt, ohne den laufenden Betrieb unnötig zu beeinträchtigen. Genau hier setzen wir an. Gemeinsam analysieren wir Ihr Objekt, entwickeln ein passendes Sanierungskonzept und koordinieren alle Gewerke – von Trockenbau und Elektro über Sanitär bis zu Bodenbelägen und Malerarbeiten. Unser Ziel ist eine termingerechte Umsetzung mit klaren Abläufen und einem festen Ansprechpartner. So entstehen moderne Büroflächen, Ladenlokale und Gewerbeobjekte, die langfristig den Anforderungen Ihres Unternehmens gerecht werden.';

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
  name: 'Wie läuft eine professionelle Gewerbe- & Objektsanierung ab?',
  description:
    'Bernd erklärt, wie Unternehmen, Eigentümer und Investoren ihre Gewerbeimmobilie wirtschaftlich modernisieren können, welche Leistungen Radex übernimmt und warum eine strukturierte Projektsteuerung entscheidend für den Projekterfolg ist.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT3M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const regionalCities = cityIds.map((id) => ({
  id,
  name: cityDataMap[id].name,
  path: cityDataMap[id].path,
}));

export default function GewerbeObjektsanierungLanding() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const seoServices = useMemo(
    () =>
      gewerbeObjektsanierungHubSeoServices.map((service) => ({
        ...service,
        icon: iconMap[service.icon],
      })),
    [],
  );

  useSeo({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: PAGE_PATH,
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Gewerbe- & Objektsanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page gewerbe-objektsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <span>Gewerbe &amp; Objektsanierung</span>
            </nav>
            <p className="br-hero-kicker">
              <Building2 size={16} strokeWidth={1.5} aria-hidden="true" /> Gewerbe &amp; Objektsanierung ·
              Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Gewerbe- &amp; Objektsanierung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Ob Gewerbesanierung, Büroumbau oder Mieterausbau – Radex Objektmanagement modernisiert Gewerbeimmobilien
              wirtschaftlich, termingerecht und aus einer Hand. Wir begleiten Unternehmen von der ersten Planung bis zur
              schlüsselfertigen Fertigstellung und schaffen moderne Arbeits-, Verkaufs- und Gewerbeflächen, die
              langfristig überzeugen.
            </p>
            <p className="br-hero-text">
              Eine moderne Gewerbeimmobilie ist die Visitenkarte Ihres Unternehmens. Gleichzeitig muss sie wirtschaftlich,
              funktional und flexibel nutzbar sein. Radex Objektmanagement unterstützt Unternehmen, Eigentümer,
              Investoren und Hausverwaltungen bei der professionellen Gewerbe- &amp; Objektsanierung im gesamten
              Rhein-Main-Gebiet.
            </p>
            <p className="br-hero-text">
              Ob einzelne Büroflächen, komplette Gewerbeimmobilien oder umfangreiche Modernisierungen – wir koordinieren
              sämtliche Gewerke und sorgen für einen reibungslosen Projektablauf. Von Frankfurt am Main über Wiesbaden und
              Mainz bis nach Offenbach am Main, Hanau und Darmstadt realisieren wir hochwertige Umbau- und
              Sanierungsprojekte für unterschiedlichste Branchen.
            </p>
            <GewerbeObjektsanierungCTA isHero />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE}), url(${HERO_IMAGE_FALLBACK})` }}
          role="img"
          aria-label="Professionelle Gewerbe- & Objektsanierung einer modernen Gewerbeimmobilie im Rhein-Main-Gebiet durch Radex Objektmanagement."
          title="Modernes Bürogebäude mit hochwertig modernisierten Innenräumen während einer Gewerbe- & Objektsanierung."
        />
      </section>

      <PageAnchorNav items={ANCHOR_NAV} />

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Jede Gewerbeimmobilie stellt individuelle Anforderungen an Planung, Bauablauf und Ausführung. Ob
              Bürogebäude, Praxis, Ladenlokal, Hotel, Gastronomiebetrieb oder Industriehalle – eine erfolgreiche
              Gewerbe- &amp; Objektsanierung verbindet wirtschaftliche Lösungen mit einer professionellen Umsetzung.
              Radex Objektmanagement übernimmt sämtliche Leistungen von der ersten Bestandsaufnahme über die
              Projektsteuerung bis zur schlüsselfertigen Fertigstellung.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Als Generalunternehmer koordinieren wir alle beteiligten Gewerke und schaffen moderne Arbeitswelten,
              funktionale Verkaufsflächen sowie zukunftssichere Gewerbeobjekte. Dabei berücksichtigen wir bestehende
              Betriebsabläufe, technische Anforderungen und individuelle Nutzungskonzepte. Unsere Projekte realisieren
              wir unter anderem in Frankfurt am Main, Eschborn, Neu-Isenburg, Bad Homburg, Wiesbaden, Mainz, Darmstadt,
              Hanau, Rüsselsheim am Main und zahlreichen weiteren Städten des Rhein-Main-Gebiets.
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
        Von Gewerbesanierung über Büroumbau bis Mieterausbau – im nächsten Abschnitt finden Sie unsere Leistungen im
        Bereich Gewerbe- &amp; Objektsanierung.
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
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur
        schlüsselfertigen Übergabe Ihrer modernisierten Gewerbeimmobilie.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Beratung bis zur schlüsselfertigen Übergabe – so begleiten wir Ihre Gewerbe- & Objektsanierung Schritt für Schritt."
        steps={processSteps}
      />

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ihre Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Unsere Experten für Gewerbe &amp; Objektsanierung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Fachabteilung begleitet Unternehmen, Investoren, Eigentümer und Hausverwaltungen von der ersten
              Beratung bis zur erfolgreichen Fertigstellung ihrer Projekte. Ob Gewerbesanierung, Büroumbau oder
              Mieterausbau – unser Projektteam koordiniert sämtliche Gewerke, überwacht Termine und sorgt für eine
              transparente Kommunikation während der gesamten Bauphase.
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
              <p>Direkt Fotos senden und eine erste Einschätzung erhalten.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
                WhatsApp öffnen
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#kontakt" className="btn br-btn-orange">
              Kostenlose Beratung anfragen
            </a>
          </div>
        </div>
      </section>

      <BerndExplainsVideo
        title="Wie läuft eine professionelle Gewerbe- & Objektsanierung ab?"
        description="Bernd erklärt, wie Unternehmen, Eigentümer und Investoren ihre Gewerbeimmobilie wirtschaftlich modernisieren können, welche Leistungen Radex übernimmt und warum eine strukturierte Projektsteuerung entscheidend für den Projekterfolg ist."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf einer professionellen Gewerbe- & Objektsanierung im Rhein-Main-Gebiet."
        duration="ca. 2–3 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Lassen Sie uns Ihr Projekt gemeinsam realisieren.</h2>
            <p>
              Ob Gewerbesanierung, Büroumbau oder Mieterausbau – wir begleiten Ihr Unternehmen von der Planung bis zur
              schlüsselfertigen Umsetzung. Gemeinsam entwickeln wir eine Lösung, die zu Ihrer Immobilie und Ihren
              Anforderungen passt.
            </p>
            <GewerbeObjektsanierungCTA centered />
          </div>
        </div>
      </section>

      <div id="weitere-informationen" className="br-legacy-content-wrap">
        <SeoKnowledgeDrawer
          title="Weitere Informationen zur Gewerbe- & Objektsanierung"
          sections={gewerbeObjektsanierungLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="gewerbe-objektsanierung-legacy-panel"
        />
      </div>

      <ExpandableSeoServiceGrid
        id="weitere-leistungen"
        title="Unsere Leistungen im Bereich Gewerbe- & Objektsanierung"
        intro={gewerbeObjektsanierungHubSeoIntro}
        services={seoServices}
      />

      <RegionalServiceCities
        id="einsatzgebiete"
        title="Unsere Einsatzgebiete"
        intro="Klicken Sie auf eine Stadt, um regionale Informationen zu unseren Leistungen vor Ort aufzurufen. Radex betreut Unternehmen, Eigentümer, Investoren und Hausverwaltungen im gesamten Rhein-Main-Gebiet. Kurze Wege, schnelle Reaktionszeiten und eine persönliche Projektbetreuung sorgen dafür, dass Sanierungs-, Umbau- und Ausbauprojekte zuverlässig koordiniert werden können."
        regionalText="Unsere Teams begleiten Gewerbe- und Objektprojekte in Frankfurt am Main, Offenbach am Main, Hanau, Aschaffenburg, Wiesbaden, Mainz, Darmstadt und zahlreichen weiteren Städten und Gemeinden der Region. Abhängig vom jeweiligen Projekt betreuen wir auch Stadtteile wie Frankfurt-Sachsenhausen, Frankfurt-Höchst, Offenbach-Bieber, Wiesbaden-Biebrich und Mainz-Gonsenheim."
        cities={regionalCities}
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Gewerbe- & Objektsanierungen"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Büroumbauten, Gewerbesanierungen, Praxissanierungen, Ladenflächen und schlüsselfertige Mieterausbauten."
        projects={radexLiveProjects}
      />
    </main>
  );
}
