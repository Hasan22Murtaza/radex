import { useEffect } from 'react';
import {
  Zap,
  Cable,
  Plug,
  Lightbulb,
  Network,
  HousePlus,
  Lamp,
  SearchCheck,
  Workflow,
  UserRound,
  MessagesSquare,
  MapPin,
  PhoneCall,
  ClipboardList,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  Building2,
  Shield,
  Hammer,
  Building,
  ClipboardCheck,
  BriefcaseBusiness,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import '../data/legacyServiceStyles.css';
import useSeo, { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '../useSeo';
import ReviewsMarquee from '../components/ReviewsMarquee';
import {
  PremiumIconCards,
  SectionTransition,
  SeoKnowledgeDrawer,
  SeoTocSection,
  RadexLiveSection,
  HorizontalProcessTimeline,
  BerndExplainsVideo,
  FaqAccordion,
  MoneyPageQualityGrid,
} from '../components/landing/SharedLandingParts';
import {
  elektroinstallationSeoIntro,
  elektroinstallationSeoSections,
  elektroinstallationSeoLinkSections,
} from '../data/elektroinstallationSeoContent';
import { elektroinstallationLegacySections } from '../data/elektroinstallationLegacyContent';

const PAGE_PATH = '/elektroinstallation-rhein-main';
const HERO_IMAGE = '/img/elektroinstallation-rhein-main.webp';
const HERO_IMAGE_FALLBACK = '/img/electrician.webp';
const VIDEO_POSTER = '/img/bernd-elektroinstallation-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Elektroinstallation Rhein-Main | Moderne Elektroinstallationen | Radex';
const META_DESCRIPTION =
  'Professionelle Elektroinstallationen für Neubau, Umbau und Sanierung im Rhein-Main-Gebiet. Moderne Stromversorgung, strukturierte Planung und zuverlässige Projektkoordination.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Elektrotechnik', path: '/elektrotechnik-gebaeudetechnik' },
  { name: 'Elektroinstallation', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Individuelle Planung',
  'Ein Ansprechpartner',
  'Koordination qualifizierter Elektrofachbetriebe',
  'Moderne Gebäudetechnik',
  'Rhein-Main-Gebiet',
];

function ElektroinstallationCTA({ isHero = false, centered = false, primaryLabel = 'Kostenlose Beratung' }) {
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
    title: 'Individuelle Planung',
    desc: 'Jede Elektroinstallation wird auf die Anforderungen Ihrer Immobilie und Ihre zukünftigen Nutzungswünsche abgestimmt.',
    icon: SearchCheck,
  },
  {
    title: 'Koordination qualifizierter Elektrofachbetriebe',
    desc: 'Elektroarbeiten werden durch entsprechend qualifizierte Fachbetriebe ausgeführt und zentral koordiniert.',
    icon: Workflow,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Während des gesamten Projekts begleiten wir Sie als zentrale Anlaufstelle und koordinieren sämtliche Abläufe.',
    icon: UserRound,
  },
  {
    title: 'Abstimmung mit allen Gewerken',
    desc: 'Elektroinstallationen werden frühzeitig mit Heizungs-, Sanitär-, Trockenbau- und Innenausbauarbeiten abgestimmt.',
    icon: ClipboardCheck,
  },
  {
    title: 'Transparente Projektabläufe',
    desc: 'Von der Planung bis zur Fertigstellung behalten Sie jederzeit den Überblick über den Projektfortschritt.',
    icon: MessagesSquare,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Wir begleiten Bau- und Sanierungsprojekte für private und gewerbliche Kunden in der gesamten Region.',
    icon: MapPin,
  },
];

const leistungenCards = [
  {
    title: 'Stromkreise planen',
    desc: 'Eine strukturierte Planung sorgt für ausreichend Leistungsreserven und eine sichere Stromversorgung.',
    icon: Cable,
  },
  {
    title: 'Steckdosen & Schalter',
    desc: 'Positionierung und Anzahl werden individuell auf Ihre Nutzung abgestimmt.',
    icon: Plug,
  },
  {
    title: 'Beleuchtung',
    desc: 'Innen- und Außenbeleuchtung werden funktional und energieeffizient geplant.',
    icon: Lightbulb,
  },
  {
    title: 'Netzwerk & Datenleitungen',
    desc: 'Vorbereitung moderner Kommunikations- und Netzwerktechnik für private und gewerbliche Immobilien.',
    icon: Network,
  },
  {
    title: 'Smart Home Vorbereitung',
    desc: 'Elektroinstallationen können bereits heute für zukünftige Smart-Home-Systeme vorbereitet werden.',
    icon: HousePlus,
  },
  {
    title: 'Außenbereiche',
    desc: 'Auch Garagen, Terrassen, Gärten oder Einfahrten lassen sich frühzeitig in die Elektroplanung integrieren.',
    icon: Lamp,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Gemeinsame Analyse Ihrer Anforderungen und Wünsche.',
    icon: PhoneCall,
  },
  {
    title: 'Bestandsaufnahme',
    desc: 'Prüfung der vorhandenen Bausituation und technischen Voraussetzungen.',
    icon: SearchCheck,
  },
  {
    title: 'Planung',
    desc: 'Erstellung eines individuellen Elektro-Konzepts.',
    icon: ClipboardList,
  },
  {
    title: 'Koordination',
    desc: 'Abstimmung aller beteiligten Fachbetriebe und Gewerke.',
    icon: Workflow,
  },
  {
    title: 'Ausführung',
    desc: 'Fachgerechte Umsetzung der geplanten Elektroinstallation.',
    icon: CircleCheckBig,
  },
  {
    title: 'Abnahme',
    desc: 'Gemeinsame Abschlusskontrolle und Projektübergabe.',
    icon: CircleCheckBig,
  },
];

const relatedCards = [
  {
    title: 'Altbau Elektrik erneuern',
    desc: 'Veraltete Elektroanlagen sicher modernisieren und an heutige Standards anpassen.',
    icon: Building2,
    to: '/altbau-elektrik-erneuern-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Sicherungskasten erneuern',
    desc: 'Moderne Unterverteilungen schaffen mehr Sicherheit und ermöglichen zukünftige Erweiterungen.',
    icon: Shield,
    to: '/sicherungskasten-erneuern-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Komplettsanierung',
    desc: 'Bei einer Komplettsanierung wird die Elektroinstallation optimal in den gesamten Bauablauf integriert.',
    icon: Hammer,
    to: '/komplettsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Kernsanierung',
    desc: 'Im Rahmen einer Kernsanierung wird die gesamte Elektroanlage häufig vollständig erneuert.',
    icon: Building,
    to: '/kernsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bauleitung & Projektsteuerung',
    desc: 'Wir koordinieren sämtliche Gewerke und sorgen für einen strukturierten Projektablauf.',
    icon: ClipboardCheck,
    to: '/bauleitung-projektsteuerung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Generalunternehmer',
    desc: 'Ein Ansprechpartner für die Koordination aller beteiligten Fachbetriebe – von der Planung bis zur Fertigstellung.',
    icon: BriefcaseBusiness,
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const radexLiveProjects = [
  {
    image: '/img/haus-service-elektro.png',
    badge: 'LIVE',
    title: 'Elektroinstallation Haussanierung',
    location: 'Rodgau',
    desc: 'Neue Stromkreise, Steckdosen und Netzwerkverkabelung im Rahmen einer umfassenden Haussanierung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-service-elektro.png',
    badge: 'LIVE',
    title: 'Elektroinstallation Wohnungssanierung',
    location: 'Frankfurt am Main',
    desc: 'Moderne Elektroinstallation mit Küchenanschlüssen, Badtechnik und Homeoffice-Netzwerk in einer Bestandswohnung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-service-elektro.png',
    badge: 'Abgeschlossen',
    title: 'Altbau-Elektrik modernisieren',
    location: 'Offenbach am Main',
    desc: 'Veraltete Leitungen und Stromkreise erneuert und für zukünftige Erweiterungen vorbereitet.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buro1.webp',
    badge: 'LIVE',
    title: 'Gewerbe-Elektroinstallation',
    location: 'Darmstadt',
    desc: 'Strukturierte Elektroplanung für Büroflächen mit Netzwerk, Beleuchtung und Gebäudetechnik.',
    cta: 'Projekt ansehen',
  },
];

const videoTranscript =
  'Eine Elektroinstallation begleitet Sie oft über Jahrzehnte. Deshalb sollte sie nicht nur Ihren heutigen Bedarf erfüllen, sondern auch zukünftige Anforderungen berücksichtigen. Ausreichend Steckdosen, sinnvoll geplante Stromkreise und Reserven für spätere Erweiterungen sparen langfristig Zeit, Kosten und Aufwand.';

const faqsData = [
  {
    q: 'Was gehört zu einer Elektroinstallation?',
    a: 'Eine Elektroinstallation umfasst alle elektrischen Komponenten einer Immobilie – von Leitungen, Stromkreisen und Steckdosen über Schalter und Beleuchtung bis hin zu Verteilungen und Anschlüssen für moderne Gebäudetechnik.',
  },
  {
    q: 'Wann sollte eine Elektroinstallation erneuert werden?',
    a: 'Spätestens wenn Leitungen, Sicherungen oder Schutzmaßnahmen nicht mehr den aktuellen Sicherheitsstandards entsprechen oder umfangreiche Umbauten geplant sind.',
  },
  {
    q: 'Kann eine Elektroinstallation erweitert werden?',
    a: 'Ja. Bestehende Anlagen können häufig erweitert werden. Voraussetzung ist, dass die vorhandene Installation den technischen Anforderungen entspricht und ausreichend Reserven vorhanden sind.',
  },
  {
    q: 'Wird die Elektroinstallation individuell geplant?',
    a: 'Ja. Jede Immobilie hat unterschiedliche Anforderungen. Deshalb werden Stromkreise, Steckdosen, Beleuchtung und zukünftige Erweiterungen individuell geplant.',
  },
  {
    q: 'Kann die Elektroinstallation für Smart Home vorbereitet werden?',
    a: 'Ja. Bereits während der Installation können Leitungen und Anschlüsse vorgesehen werden, damit spätere Smart-Home-Systeme problemlos integriert werden können.',
  },
  {
    q: 'Lässt sich eine Wallbox später nachrüsten?',
    a: 'Ja. Wird die Elektroinstallation entsprechend vorbereitet, kann eine Wallbox in vielen Fällen später einfacher installiert werden.',
  },
  {
    q: 'Werden Elektroarbeiten mit anderen Gewerken abgestimmt?',
    a: 'Ja. Elektroinstallationen werden frühzeitig mit Trockenbau, Sanitär, Heizung, Malerarbeiten und weiteren Gewerken koordiniert, um einen reibungslosen Bauablauf sicherzustellen.',
  },
  {
    q: 'Für welche Immobilien eignet sich eine neue Elektroinstallation?',
    a: 'Für Einfamilienhäuser, Eigentumswohnungen, Mehrfamilienhäuser, Bürogebäude, Gewerbeeinheiten sowie Immobilien, die modernisiert oder umfassend saniert werden.',
  },
];

const seoTocSections = [...elektroinstallationSeoSections, ...elektroinstallationSeoLinkSections];

export default function ElektroinstallationLanding() {
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
        name: 'Elektroinstallation Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page sanierung-money-page elektroinstallation-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/elektrotechnik-gebaeudetechnik">Elektrotechnik</Link>
              <span aria-hidden="true">↓</span>
              <span>Elektroinstallation</span>
            </nav>
            <p className="br-hero-kicker">
              <Zap size={16} strokeWidth={1.5} aria-hidden="true" /> Moderne Elektroinstallationen für Wohn- und
              Gewerbeimmobilien
            </p>
            <p className="br-hero-kicker">Elektroinstallation im Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Elektroinstallation
              <br />
              <span>Rhein-Main</span>
            </h1>
            <p className="br-hero-lead">
              Sichere, zukunftsfähige und individuell geplante Elektroinstallationen für Neubau, Umbau und Sanierung.
            </p>
            <p className="br-hero-text">
              Eine moderne Elektroinstallation bildet die Grundlage für den sicheren und zuverlässigen Betrieb jeder
              Immobilie. Ob Neubau, umfassende Sanierung oder Modernisierung bestehender Räume – wir koordinieren
              sämtliche Elektroarbeiten mit qualifizierten Elektrofachbetrieben und sorgen dafür, dass alle Komponenten
              optimal aufeinander abgestimmt sind.
            </p>
            <p className="br-hero-text">
              Von der Planung der Stromkreise über Steckdosen und Beleuchtung bis hin zur Vorbereitung moderner
              Gebäudetechnik begleiten wir Ihr Projekt im gesamten Rhein-Main-Gebiet.
            </p>
            <ElektroinstallationCTA isHero />
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
          aria-label="Professionelle Elektroinstallation im Rhein-Main-Gebiet."
          title="Elektroinstallation Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Moderne Elektroinstallationen für heute und morgen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Die Anforderungen an elektrische Anlagen sind in den vergangenen Jahren deutlich gestiegen. Neben einer
              sicheren Stromversorgung spielen Komfort, Energieeffizienz und die Vorbereitung auf zukünftige Technologien
              eine immer größere Rolle. Eine sorgfältig geplante Elektroinstallation schafft die Grundlage für eine
              langfristig zuverlässige Nutzung Ihrer Immobilie.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Ob Einfamilienhaus, Eigentumswohnung, Mehrfamilienhaus oder Gewerbeobjekt – jede Immobilie stellt
              unterschiedliche Anforderungen an die elektrische Infrastruktur. Deshalb wird jede Elektroinstallation
              individuell geplant und auf die vorhandene Bausituation abgestimmt.
            </p>
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Warum eine professionelle Elektroinstallation wichtig ist</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Eine moderne Elektroinstallation sorgt nicht nur für die zuverlässige Versorgung mit Strom. Sie schafft auch
              die Voraussetzungen für intelligente Gebäudetechnik, energieeffiziente Beleuchtung, komfortable
              Steuerungssysteme und zukünftige Erweiterungen.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Wer bereits während einer Sanierung oder eines Umbaus auf eine durchdachte Planung setzt, vermeidet spätere
              Eingriffe in Wände und Decken und schafft langfristige Sicherheit.
            </p>
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
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen im Bereich der Elektroinstallation.
      </SectionTransition>

      <section id="leistungen" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <div className="br-leistungen-grid-three">
            <PremiumIconCards cards={leistungenCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur gemeinsamen
        Abnahme Ihrer Elektroinstallation.
      </SectionTransition>

      <HorizontalProcessTimeline title="Projektablauf" steps={processSteps} />

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Ihr Ansprechpartner für Elektroinstallationen</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Sie planen eine neue Elektroinstallation oder möchten Ihre bestehende Anlage modernisieren? Wir beraten Sie
              persönlich und koordinieren Ihr Projekt zuverlässig.
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
              <p>Senden Sie uns Fotos, Pläne oder vorhandene Angebote – wir geben Ihnen eine erste Einschätzung.</p>
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
        title="Warum lohnt sich eine moderne Elektroinstallation?"
        description="Bernd erklärt, warum eine professionelle Planung der Elektroinstallation langfristig für mehr Sicherheit, Komfort und Flexibilität sorgt und welche Punkte bereits bei Neubau oder Sanierung berücksichtigt werden sollten."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt moderne Elektroinstallationen."
        duration="ca. 3 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Planen Sie eine neue Elektroinstallation?</h2>
            <p>
              Ganz gleich, ob Neubau, Umbau oder Sanierung – wir begleiten Ihr Projekt von der Planung bis zur
              Koordination der Ausführung und sorgen für eine moderne Elektroinstallation, die optimal zu Ihrer Immobilie
              passt.
            </p>
            <ElektroinstallationCTA centered />
          </div>
        </div>
      </section>

      {elektroinstallationLegacySections.length > 0 && (
        <SeoKnowledgeDrawer
          title="Weitere Informationen"
          sections={elektroinstallationLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="elektroinstallation-legacy-panel"
        />
      )}

      <SeoTocSection
        title="Unsere Leistungen im Bereich Elektroinstallation"
        intro={elektroinstallationSeoIntro}
        sections={seoTocSections}
        showAllContent
        panelId="elektroinstallation-seo-panel"
        ctaLabel="Kostenlose Beratung"
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Elektroprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Elektroinstallationen, Netzwerkverkabelung, Smart-Home-Vorbereitung und koordinierte Sanierungsprojekte."
        projects={radexLiveProjects}
      />

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen" />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Das könnte Sie ebenfalls interessieren</h2>
          </div>
          <PremiumIconCards cards={relatedCards} linked largeIcons />
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Warum sich eine moderne Elektroinstallation langfristig lohnt</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Eine moderne Elektroinstallation schafft nicht nur Sicherheit, sondern erhöht auch den Wohnkomfort und die
              Zukunftsfähigkeit Ihrer Immobilie. Bereits während der Planung können ausreichend Stromkreise, Steckdosen,
              Netzwerkanschlüsse und Reserven für spätere Erweiterungen berücksichtigt werden. Das reduziert spätere
              Umbauten und erleichtert die Integration neuer Technologien.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Wer heute in eine hochwertige Elektroinstallation investiert, schafft die Grundlage für energieeffizientes
              Wohnen, moderne Gebäudetechnik und eine langfristig zuverlässige Stromversorgung.
            </p>
          </div>
        </div>
      </section>

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Ihre neue Elektroinstallation beginnt mit einer guten Planung</h2>
            <p>
              Ganz gleich, ob Neubau, Umbau oder umfassende Sanierung – wir unterstützen Sie bei der Planung und
              koordinieren sämtliche Elektroarbeiten mit qualifizierten Elektrofachbetrieben. Gemeinsam entwickeln wir eine
              Lösung, die heute überzeugt und auch zukünftigen Anforderungen gerecht wird.
            </p>
            <ElektroinstallationCTA centered />
          </div>
        </div>
      </section>
    </main>
  );
}
