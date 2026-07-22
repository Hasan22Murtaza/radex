import { useEffect } from 'react';
import {
  Droplets,
  SearchCheck,
  Workflow,
  ShieldCheck,
  Clock3,
  Building2,
  BadgeEuro,
  UserRound,
  CalendarClock,
  MessagesSquare,
  Cable,
  Thermometer,
  Construction,
  Warehouse,
  Wind,
  PhoneCall,
  Search,
  ClipboardList,
  CircleCheckBig,
  CloudRain,
  Briefcase,
  House,
  Fan,
  Hammer,
  Phone,
  Mail,
  MessageCircle,
  Landmark,
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
  BerndExplainsVideo,
} from '../components/landing/SharedLandingParts';
import {
  schimmelsanierungSeoIntro,
  schimmelsanierungSeoSections,
  schimmelsanierungSeoLinkSections,
} from '../data/schimmelsanierungSeoContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/schimmelsanierung-rhein-main';
const HERO_IMAGE = '/img/schimmelsanierung-rhein-main-radex.webp';
const VIDEO_POSTER = '/img/bernd-schimmelsanierung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Schimmelsanierung Rhein-Main | Schimmel fachgerecht beseitigen';
const META_DESCRIPTION =
  'Professionelle Schimmelsanierung im Rhein-Main-Gebiet. Ursachenanalyse, Feuchtigkeitsschäden beseitigen, Schimmel entfernen und Räume fachgerecht wiederherstellen.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Schimmel & Asbest', path: '/leistungen/schimmel-asbest' },
  { name: 'Schimmelsanierung', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Ursachenorientierte Sanierung',
  'Dokumentierte Abläufe',
  'Professionelle Wiederherstellung',
];

function SchimmelsanierungCTA({ isHero = false, centered = false }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href="#kontakt" className="btn br-btn-orange">
        Kostenlose Erstberatung
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
    title: 'Ursachenorientierte Analyse',
    desc: 'Wir betrachten nicht nur den sichtbaren Schimmelbefall, sondern auch die zugrunde liegenden Feuchtigkeitsursachen.',
    icon: SearchCheck,
  },
  {
    title: 'Feuchtigkeit im Fokus',
    desc: 'Leckagen, Wasserschäden, Wärmebrücken oder Baufeuchte werden bei der Planung der Sanierung berücksichtigt.',
    icon: Droplets,
  },
  {
    title: 'Koordination aller Maßnahmen',
    desc: 'Von der Analyse über Trocknung und Sanierung bis zum Wiederaufbau erhalten Sie alle Leistungen koordiniert aus einer Hand.',
    icon: Workflow,
  },
  {
    title: 'Fachgerechte Ausführung',
    desc: 'Alle Arbeiten werden nach einem strukturierten Sanierungskonzept durchgeführt und dokumentiert.',
    icon: ShieldCheck,
  },
  {
    title: 'Schnelle Reaktionszeiten',
    desc: 'Gerade nach Wasserschäden ist ein zügiges Handeln wichtig, um Folgeschäden möglichst gering zu halten.',
    icon: Clock3,
  },
  {
    title: 'Vollständige Wiederherstellung',
    desc: 'Nach der Schimmelsanierung koordinieren wir den Wiederaufbau der betroffenen Bereiche bis zur bezugsfertigen Übergabe.',
    icon: Building2,
  },
];

const qualityCards = [
  {
    title: 'Festpreisgarantie',
    desc: 'Transparente Angebote schaffen Planungssicherheit.',
    icon: BadgeEuro,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Sie werden während des gesamten Projekts persönlich betreut.',
    icon: UserRound,
  },
  {
    title: 'Termingerechte Umsetzung',
    desc: 'Sanierung und Wiederherstellung erfolgen nach einem abgestimmten Zeitplan.',
    icon: CalendarClock,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Trocknung, Sanierung, Innenausbau und Wiederherstellung werden zentral organisiert.',
    icon: Workflow,
  },
  {
    title: 'Geprüfte Qualität',
    desc: 'Alle ausgeführten Arbeiten werden sorgfältig kontrolliert und dokumentiert.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie erhalten jederzeit Informationen zum Projektfortschritt und den nächsten Schritten.',
    icon: MessagesSquare,
  },
];

const leistungenCards = [
  {
    title: 'Schimmelanalyse',
    desc: 'Wir analysieren den sichtbaren Schimmelbefall, dokumentieren die betroffenen Bereiche und koordinieren bei Bedarf weiterführende Untersuchungen, um die Ursache der Feuchtigkeit einzugrenzen.',
    icon: SearchCheck,
    to: '#schimmelanalyse',
    cta: 'Mehr zur Schimmelanalyse',
  },
  {
    title: 'Schimmelbeseitigung',
    desc: 'Die betroffenen Materialien werden entsprechend dem Sanierungskonzept gereinigt, zurückgebaut oder ersetzt. Ziel ist eine nachhaltige Sanierung statt einer rein oberflächlichen Behandlung.',
    icon: Droplets,
    to: '#schimmelbeseitigung',
    cta: 'Mehr zur Schimmelbeseitigung',
  },
  {
    title: 'Wiederherstellung',
    desc: 'Nach Abschluss der Sanierung übernehmen wir auf Wunsch den vollständigen Innenausbau und stellen die betroffenen Räume wieder bezugsfertig her.',
    icon: Building2,
    to: '#wiederherstellung',
    cta: 'Mehr zur Wiederherstellung',
  },
];

const ursachenCards = [
  {
    title: 'Wasserschäden',
    desc: 'Rohrbrüche, Undichtigkeiten oder Überschwemmungen können Feuchtigkeit tief in Wände, Böden und Decken eindringen lassen.',
    icon: Droplets,
  },
  {
    title: 'Leckagen',
    desc: 'Defekte Leitungen oder undichte Anschlüsse führen häufig zu dauerhaft erhöhter Feuchtigkeit innerhalb der Gebäudekonstruktion.',
    icon: Cable,
  },
  {
    title: 'Wärmebrücken',
    desc: 'Ungünstige Bauteilkonstruktionen können zu Kondenswasserbildung und langfristigen Feuchtigkeitsproblemen führen.',
    icon: Thermometer,
  },
  {
    title: 'Baufeuchte',
    desc: 'Nach Neubau- oder Sanierungsarbeiten kann verbliebene Baufeuchte das Wachstum von Schimmel begünstigen.',
    icon: Construction,
  },
  {
    title: 'Kellerfeuchtigkeit',
    desc: 'Untergeschosse und Keller sind häufig von eindringender Feuchtigkeit oder dauerhaft hoher Luftfeuchtigkeit betroffen.',
    icon: Warehouse,
  },
  {
    title: 'Lüftungsprobleme',
    desc: 'Unzureichender Luftaustausch kann die Feuchtigkeit in Innenräumen erhöhen und Schimmelbildung begünstigen.',
    icon: Wind,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Wir besprechen den Schaden, die bisher bekannten Ursachen und die Nutzung der betroffenen Räume.',
    icon: PhoneCall,
  },
  {
    title: 'Besichtigung',
    desc: 'Die betroffenen Bereiche werden dokumentiert und die möglichen Ursachen der Feuchtigkeit analysiert.',
    icon: Search,
  },
  {
    title: 'Ursachenanalyse',
    desc: 'Leckagen, Feuchtigkeitseintritt oder Wasserschäden werden untersucht und die notwendigen Sanierungsmaßnahmen abgestimmt.',
    icon: Droplets,
  },
  {
    title: 'Sanierungskonzept',
    desc: 'Auf Basis der Analyse entsteht ein individuelles Konzept für Trocknung, Schimmelbeseitigung und Wiederherstellung.',
    icon: ClipboardList,
  },
  {
    title: 'Fachgerechte Schimmelsanierung',
    desc: 'Die betroffenen Bereiche werden entsprechend dem Sanierungskonzept bearbeitet und gereinigt. Beschädigte Materialien werden – sofern erforderlich – ausgetauscht.',
    icon: ShieldCheck,
  },
  {
    title: 'Wiederherstellung',
    desc: 'Nach Abschluss der Arbeiten koordinieren wir Maler-, Trockenbau-, Boden- und weitere Ausbauarbeiten bis zur fertigen Übergabe.',
    icon: CircleCheckBig,
  },
];

const sanierungsleistungenCards = [
  {
    title: 'Schimmel nach Wasserschaden',
    desc: 'Sanierung nach Rohrbrüchen, Leckagen oder Überschwemmungen einschließlich Wiederherstellung der betroffenen Bereiche.',
    icon: CloudRain,
  },
  {
    title: 'Schimmel im Keller',
    desc: 'Analyse und Sanierung feuchtigkeitsbelasteter Keller- und Untergeschossbereiche.',
    icon: Warehouse,
  },
  {
    title: 'Schimmel im Büro',
    desc: 'Sanierung von Büro- und Verwaltungsflächen mit möglichst geringer Beeinträchtigung des laufenden Betriebs.',
    icon: Briefcase,
  },
  {
    title: 'Schimmel in Wohngebäuden',
    desc: 'Sanierung von Wohnungen, Mehrfamilienhäusern und Wohnanlagen einschließlich Innenausbau.',
    icon: House,
  },
  {
    title: 'Technische Trocknung',
    desc: 'Nach Feuchtigkeitsschäden koordinieren wir die erforderlichen Trocknungsmaßnahmen als Grundlage für die anschließende Sanierung.',
    icon: Fan,
  },
  {
    title: 'Innenausbau nach Schimmelsanierung',
    desc: 'Nach erfolgreicher Sanierung übernehmen wir den Wiederaufbau von Wänden, Decken, Böden und Oberflächen.',
    icon: Hammer,
  },
];

const einsatzbereicheCards = [
  {
    title: 'Bürogebäude',
    desc: 'Sanierung von Schimmelbefall in Büro- und Verwaltungsgebäuden.',
    icon: Briefcase,
  },
  {
    title: 'Gewerbeimmobilien',
    desc: 'Koordination von Sanierungsmaßnahmen in Lager-, Produktions- und Verkaufsflächen.',
    icon: Store,
  },
  {
    title: 'Wohngebäude',
    desc: 'Schimmelsanierung in Wohnungen, Mehrfamilienhäusern und Wohnanlagen.',
    icon: House,
  },
  {
    title: 'Öffentliche Gebäude',
    desc: 'Sanierung in Schulen, Kindergärten, Verwaltungsgebäuden und weiteren öffentlichen Einrichtungen.',
    icon: Landmark,
  },
];

const radexLiveProjects = [
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Schimmelsanierung nach Wasserschaden',
    location: 'Frankfurt am Main',
    desc: 'Ursachenanalyse, technische Trocknung und Wiederaufbau in einem Bürogebäude – laufendes Projekt mit täglichen Updates.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'Vorher & Nachher',
    title: 'Feuchteschaden in Wohnung saniert',
    location: 'Offenbach am Main',
    desc: 'Schimmel nach Leitungswasserschaden – von der Trocknung bis zur vollständigen Wiederherstellung der Wohnräume.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/wohnzimmer.webp',
    badge: 'Abgeschlossen',
    title: 'Innenausbau nach Schimmelsanierung',
    location: 'Darmstadt',
    desc: 'Trockenbau, Malerarbeiten und Bodenbeläge nach fachgerechter Schimmelbeseitigung in einer Bestandswohnung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buero2.webp',
    badge: 'LIVE',
    title: 'Gewerbeobjekt – Feuchteschaden',
    location: 'Rodgau',
    desc: 'Koordinierte Sanierung in einer Gewerbeimmobilie mit minimaler Betriebsunterbrechung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-haus.webp',
    badge: 'Abgeschlossen',
    title: 'Kellerfeuchtigkeit saniert',
    location: 'Dreieich',
    desc: 'Analyse, Trocknung und Wiederherstellung eines feuchtigkeitsbelasteten Kellerbereichs im Einfamilienhaus.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gu-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Schimmelsanierung',
    location: 'Neu-Isenburg',
    desc: 'Authentischer Einblick in Ursachenanalyse, Schutzmaßnahmen und Wiederaufbau auf einer echten Baustelle.',
    cta: 'Video ansehen',
  },
];

const videoTranscript =
  'Bei einer erfolgreichen Schimmelsanierung entfernen wir nicht nur den sichtbaren Befall. Zunächst klären wir, wodurch die Feuchtigkeit entstanden ist. Erst wenn die Ursache behoben wurde, erfolgt die eigentliche Sanierung und anschließend die vollständige Wiederherstellung der betroffenen Räume.';

const faqsData = [
  {
    q: 'Warum reicht das Entfernen sichtbaren Schimmels nicht aus?',
    a: 'Sichtbarer Schimmel ist oft nur ein Teil des Problems. Bleibt die Feuchtigkeitsquelle bestehen, kann der Befall erneut auftreten. Deshalb ist die Ursachenanalyse und Beseitigung der Feuchtigkeit ein wesentlicher Bestandteil einer nachhaltigen Sanierung.',
  },
  {
    q: 'Kann Schimmel allein anhand von Fotos beurteilt werden?',
    a: 'Nein. Fotos können eine erste Orientierung geben, ersetzen aber keine fachliche Bestandsaufnahme vor Ort. Das tatsächliche Ausmaß und die Ursache lassen sich erst nach einer Besichtigung und Analyse realistisch einschätzen.',
  },
  {
    q: 'Was passiert nach einem Wasserschaden?',
    a: 'Zuerst wird die Feuchtigkeitsquelle gestoppt. Anschließend werden betroffene Bereiche dokumentiert, getrocknet und geprüft. Erst danach folgen Schimmelbeseitigung und gegebenenfalls der Wiederaufbau der betroffenen Räume.',
  },
  {
    q: 'Wie läuft eine Schimmelsanierung im Büro ab?',
    a: 'Radex plant die Sanierung so, dass der laufende Betrieb möglichst wenig beeinträchtigt wird. Dazu gehören abgestimmte Bauabschnitte, Schutzmaßnahmen und eine koordinierte Wiederherstellung der betroffenen Flächen.',
  },
  {
    q: 'Übernimmt Radex auch den Wiederaufbau nach der Sanierung?',
    a: 'Ja. Auf Wunsch koordinieren wir Trockenbau, Malerarbeiten, Bodenbeläge und weitere Ausbauarbeiten bis zur bezugsfertigen Übergabe der betroffenen Bereiche.',
  },
  {
    q: 'Welche Gebäude betreut Radex im Rhein-Main-Gebiet?',
    a: 'Radex begleitet Schimmelsanierungen in Wohngebäuden, Büro- und Verwaltungsgebäuden, Gewerbeimmobilien und öffentlichen Einrichtungen im gesamten Rhein-Main-Gebiet.',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Wie läuft eine professionelle Schimmelsanierung ab?',
  description:
    'Bernd erklärt, warum die Beseitigung der Feuchtigkeitsursache entscheidend ist und wie Analyse, Trocknung, Schimmelbeseitigung und Wiederherstellung sinnvoll ineinandergreifen.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const seoTocSections = [...schimmelsanierungSeoSections, ...schimmelsanierungSeoLinkSections];

export default function MoldRemediation() {
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
        name: 'Schimmelsanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page schimmelsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/leistungen/schimmel-asbest">Schimmel &amp; Asbest</Link>
              <span aria-hidden="true">↓</span>
              <span>Schimmelsanierung</span>
            </nav>
            <p className="br-hero-kicker">
              <Droplets size={16} strokeWidth={1.5} aria-hidden="true" /> Schimmelsanierung · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Schimmelsanierung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Nachhaltige Schimmelbeseitigung durch Ursachenanalyse, fachgerechte Sanierung und professionelle
              Wiederherstellung der betroffenen Bereiche.
            </p>
            <p className="br-hero-text">
              Schimmel entsteht häufig durch Feuchtigkeit, Wasserschäden, Wärmebrücken oder unzureichende Trocknung. Eine
              dauerhafte Lösung erfordert mehr als das Entfernen sichtbarer Stellen – entscheidend ist die Beseitigung
              der Ursache.
            </p>
            <p className="br-hero-text">
              Radex begleitet Eigentümer, Unternehmen und Hausverwaltungen von der ersten Bestandsaufnahme über die
              Koordination geeigneter Sanierungsmaßnahmen bis zur vollständigen Wiederherstellung der betroffenen Räume.
            </p>
            <SchimmelsanierungCTA isHero />
            <ul className="br-hero-trust-list" aria-label="Vertrauenspunkte">
              {TRUST_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Professionelle Schimmelsanierung nach einem Feuchtigkeitsschaden im Rhein-Main-Gebiet."
          title="Schimmelsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Schimmel dauerhaft beseitigen statt nur überdecken</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Sichtbarer Schimmel ist häufig nur ein Hinweis auf ein tieferliegendes Feuchtigkeitsproblem. Ohne die
              Ursache zu beheben, kann der Befall erneut auftreten.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex entwickelt individuelle Sanierungskonzepte für Wohn- und Gewerbeimmobilien. Dazu gehören die Analyse
              der Schadensursache, die Koordination notwendiger Sanierungsmaßnahmen sowie die Wiederherstellung der
              betroffenen Räume – von einzelnen Wandbereichen bis hin zu kompletten Nutzungseinheiten.
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
        Von der Ursachenanalyse bis zur bezugsfertigen Wiederherstellung – im nächsten Abschnitt finden Sie unsere
        zentralen Leistungen im Bereich Schimmelsanierung.
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
        Schimmel entsteht fast immer durch Feuchtigkeit. Die folgenden Ursachen treten in Wohn- und Gewerbeimmobilien
        besonders häufig auf – eine fachliche Bestandsaufnahme klärt, welche Faktoren in Ihrem Fall relevant sind.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Ursachen für Schimmel</h2>
          </div>
          <PremiumIconCards cards={ursachenCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Ein strukturierter Projektablauf schafft Planungssicherheit – von der Erstberatung bis zur fertigen Übergabe der
        sanierten Räume.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstberatung bis zur Wiederherstellung – so begleiten wir Ihre Schimmelsanierung Schritt für Schritt."
        steps={processSteps}
      />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Sanierungsleistungen</h2>
          </div>
          <PremiumIconCards cards={sanierungsleistungenCards} largeIcons />
        </div>
      </section>

      <section className="br-section">
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
            <h2 className="br-section-title">Ihre Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Das Team Schimmelsanierung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleitung begleitet Eigentümer, Unternehmen und Hausverwaltungen von der Ursachenanalyse über
              die Schimmelbeseitigung bis zur vollständigen Wiederherstellung der betroffenen Bereiche.
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
                Fotos der betroffenen Bereiche senden und eine erste unverbindliche Einschätzung erhalten.
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
        title="Wie läuft eine professionelle Schimmelsanierung ab?"
        description="Bernd erklärt, warum die Beseitigung der Feuchtigkeitsursache entscheidend ist und wie Analyse, Trocknung, Schimmelbeseitigung und Wiederherstellung sinnvoll ineinandergreifen."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf einer professionellen Schimmelsanierung im Rhein-Main-Gebiet."
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Schimmel in Ihrem Gebäude festgestellt?</h2>
            <p>
              Senden Sie uns Fotos und eine kurze Beschreibung des Schadens. Gemeinsam besprechen wir die nächsten
              sinnvollen Schritte und koordinieren bei Bedarf Ursachenanalyse, Schimmelsanierung und die anschließende
              Wiederherstellung.
            </p>
            <SchimmelsanierungCTA centered />
          </div>
        </div>
      </section>

      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Schimmelsanierung"
        intro={schimmelsanierungSeoIntro}
        sections={seoTocSections}
        ctaLabel="Kostenlose Erstberatung"
        ctaHref="#kontakt"
        panelId="schimmelsanierung-seo-panel"
        showToc
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Schimmelsanierungsprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Schimmelsanierung, Wasserschäden, technische Trocknung, Innenausbau sowie Gewerbe- und Wohnimmobilien."
        projects={radexLiveProjects}
      />
    </main>
  );
}
