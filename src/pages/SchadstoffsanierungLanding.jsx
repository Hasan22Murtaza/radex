import { useEffect } from 'react';
import {
  FlaskConical,
  SearchCheck,
  UsersRound,
  Workflow,
  ShieldCheck,
  FileCheck2,
  Building2,
  BadgeEuro,
  UserRound,
  CalendarClock,
  MessagesSquare,
  Hammer,
  Waves,
  Flame,
  TestTubeDiagonal,
  PaintRoller,
  TriangleAlert,
  Microscope,
  PhoneCall,
  Search,
  ClipboardList,
  CircleCheckBig,
  PanelTopClose,
  Wind,
  DoorOpen,
  HardHat,
  PackageCheck,
  Phone,
  Mail,
  MessageCircle,
  Briefcase,
  Warehouse,
  House,
  Landmark,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildBreadcrumbSchema, buildServiceSchema } from '../useSeo';
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
  schadstoffsanierungSeoIntro,
  schadstoffsanierungSeoSections,
  schadstoffsanierungSeoLinkSections,
} from '../data/schadstoffsanierungSeoContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/schadstoffsanierung-rhein-main';
const HERO_IMAGE = '/img/schadstoffsanierung-rhein-main-radex.webp';
const VIDEO_POSTER = '/img/bernd-schadstoffsanierung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Schadstoffsanierung Rhein-Main | Fachgerechte Gebäudeschadstoffe sanieren';
const META_DESCRIPTION =
  'Professionelle Schadstoffsanierung im Rhein-Main-Gebiet. Koordination von Untersuchung, Sanierung, Rückbau und Wiederherstellung für Gewerbe- und Wohnimmobilien.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Schimmel & Asbest', path: '/schimmel-asbest-sanierung-rhein-main' },
  { name: 'Schadstoffsanierung', path: PAGE_PATH },
];

const TRUST_LINE = 'Koordination aller Gewerke · Dokumentierte Abläufe · Qualifizierte Fachpartner';

function SchadstoffsanierungCTA({ isHero = false, centered = false }) {
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
    title: 'Strukturierte Projektaufnahme',
    desc: 'Wir analysieren die Ausgangssituation und koordinieren bei Bedarf die notwendigen Untersuchungen und Fachleistungen.',
    icon: SearchCheck,
  },
  {
    title: 'Qualifizierte Fachpartner',
    desc: 'Spezialisierte Arbeiten werden durch entsprechend qualifizierte Sanierungsunternehmen und Sachverständige ausgeführt.',
    icon: UsersRound,
  },
  {
    title: 'Zentrale Projektkoordination',
    desc: 'Alle beteiligten Gewerke werden über einen festen Ansprechpartner organisiert und abgestimmt.',
    icon: Workflow,
  },
  {
    title: 'Fachgerechte Ausführung',
    desc: 'Sanierungsmaßnahmen erfolgen entsprechend der jeweiligen Anforderungen und geltenden Vorgaben.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Dokumentation',
    desc: 'Projektfortschritt, Sanierungsschritte und relevante Nachweise werden nachvollziehbar dokumentiert.',
    icon: FileCheck2,
  },
  {
    title: 'Wiederherstellung aus einer Hand',
    desc: 'Nach Abschluss der Schadstoffsanierung koordinieren wir auf Wunsch auch den Innenausbau und die vollständige Wiederherstellung der betroffenen Bereiche.',
    icon: Building2,
  },
];

const qualityCards = [
  {
    title: 'Festpreisgarantie',
    desc: 'Transparente Angebote schaffen eine verlässliche Grundlage für Ihre Projektplanung.',
    icon: BadgeEuro,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Sie werden während des gesamten Projekts von einer zentralen Projektleitung begleitet.',
    icon: UserRound,
  },
  {
    title: 'Termingerechte Umsetzung',
    desc: 'Sanierung und Folgearbeiten werden anhand eines abgestimmten Zeitplans koordiniert.',
    icon: CalendarClock,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Fachgutachter, Sanierungsbetriebe, Entsorgung und Wiederaufbau werden zentral gesteuert.',
    icon: Workflow,
  },
  {
    title: 'Geprüfte Qualität',
    desc: 'Alle Arbeiten werden kontinuierlich kontrolliert und dokumentiert.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie erhalten jederzeit Informationen zum Projektstand, zu Terminen und zum weiteren Ablauf.',
    icon: MessagesSquare,
  },
];

const leistungenCards = [
  {
    title: 'Schadstofferkundung',
    desc: 'Vor Umbau-, Rückbau- oder Modernisierungsarbeiten prüfen wir gemeinsam mit qualifizierten Fachpartnern, ob schadstoffverdächtige Baustoffe vorhanden sind und welche weiteren Untersuchungen erforderlich werden.',
    icon: SearchCheck,
    to: '#schadstofferkundung',
    cta: 'Mehr zur Schadstofferkundung',
  },
  {
    title: 'Schadstoffrückbau',
    desc: 'Belastete Baustoffe werden kontrolliert ausgebaut, sicher verpackt und über geeignete Entsorgungswege abgeführt. Schutzmaßnahmen und Arbeitsabläufe werden auf den jeweiligen Befund abgestimmt.',
    icon: Hammer,
    to: '#schadstoffrueckbau',
    cta: 'Mehr zum Schadstoffrückbau',
  },
  {
    title: 'Wiederherstellung',
    desc: 'Nach Abschluss der Sanierung koordinieren wir den fachgerechten Wiederaufbau von Wänden, Böden, Decken, Dämmungen und weiteren betroffenen Bauteilen.',
    icon: Building2,
    to: '#wiederherstellung',
    cta: 'Mehr zur Wiederherstellung',
  },
];

const schadstoffCards = [
  {
    title: 'Künstliche Mineralfasern',
    desc: 'Ältere Dämmstoffe und technische Isolierungen können Fasern freisetzen. Art, Alter und Zustand des Materials bestimmen, welche Schutzmaßnahmen beim Ausbau notwendig sind.',
    icon: Waves,
  },
  {
    title: 'PAK-haltige Baustoffe',
    desc: 'PAK kann unter anderem in älteren Parkettklebstoffen, Abdichtungen, Estrichaufbauten und teerhaltigen Produkten vorkommen.',
    icon: Flame,
  },
  {
    title: 'PCB-haltige Materialien',
    desc: 'PCB wurde früher beispielsweise in Fugendichtungen, Beschichtungen und technischen Anwendungen eingesetzt. Eine Laboranalyse schafft Klarheit über eine mögliche Belastung.',
    icon: TestTubeDiagonal,
  },
  {
    title: 'Belastete Klebstoffe',
    desc: 'Klebstoffe unter Bodenbelägen, Spachtelmassen und Beschichtungen können schadstoffhaltige Bestandteile enthalten und sollten vor mechanischer Bearbeitung geprüft werden.',
    icon: PaintRoller,
  },
  {
    title: 'Asbesthaltige Baustoffe',
    desc: 'Asbest kann in verschiedenen älteren Bauprodukten enthalten sein. Bei einem entsprechenden Verdacht verweisen wir auf unsere spezialisierte Leistung zur Asbestsanierung.',
    icon: TriangleAlert,
    to: '/asbestsanierung-rhein-main',
    cta: 'Zur Asbestsanierung',
  },
  {
    title: 'Mikrobielle Belastungen',
    desc: 'Feuchtigkeitsschäden können Schimmel und weitere mikrobielle Belastungen verursachen. Für diese Fälle steht die spezialisierte Schimmelsanierung zur Verfügung.',
    icon: Microscope,
    to: '/schimmelsanierung-rhein-main',
    cta: 'Zur Schimmelsanierung',
  },
];

const processSteps = [
  {
    title: 'Erstkontakt und Bedarfsklärung',
    desc: 'Wir erfassen Objektart, bekannte Auffälligkeiten, geplante Bauarbeiten und die aktuelle Nutzung der betroffenen Bereiche.',
    icon: PhoneCall,
  },
  {
    title: 'Besichtigung und Bestandsaufnahme',
    desc: 'Verdächtige Materialien und betroffene Bauteile werden vor Ort dokumentiert und für mögliche Untersuchungen eingegrenzt.',
    icon: Search,
  },
  {
    title: 'Probenahme und Laboranalyse',
    desc: 'Falls notwendig, koordinieren qualifizierte Fachleute eine fachgerechte Probenahme und die Untersuchung in einem geeigneten Labor.',
    icon: Microscope,
  },
  {
    title: 'Sanierungs- und Schutzkonzept',
    desc: 'Auf Grundlage der Ergebnisse werden Arbeitsbereiche, Schutzmaßnahmen, Rückbauverfahren, Transportwege und Entsorgung geplant.',
    icon: ClipboardList,
  },
  {
    title: 'Fachgerechte Sanierung',
    desc: 'Entsprechend qualifizierte Fachbetriebe führen die vereinbarten Arbeiten kontrolliert und unter den erforderlichen Schutzmaßnahmen aus.',
    icon: ShieldCheck,
  },
  {
    title: 'Abschlusskontrolle und Wiederherstellung',
    desc: 'Nach Reinigung und erforderlichen Kontrollen werden die betroffenen Bereiche für den weiteren Ausbau vorbereitet und anschließend wiederhergestellt.',
    icon: CircleCheckBig,
  },
];

const schutzCards = [
  {
    title: 'Räumliche Abschottung',
    desc: 'Arbeitsbereiche werden abhängig von der Belastung und Gebäudenutzung von angrenzenden Bereichen getrennt.',
    icon: PanelTopClose,
  },
  {
    title: 'Unterdruckhaltung',
    desc: 'Bei staub- oder faserfreisetzenden Arbeiten kann eine kontrollierte Luftführung mit geeigneter Filtertechnik erforderlich sein.',
    icon: Wind,
  },
  {
    title: 'Personen- und Materialschleusen',
    desc: 'Schleusensysteme unterstützen die kontrollierte Trennung zwischen Sanierungs- und Nutzungsbereichen.',
    icon: DoorOpen,
  },
  {
    title: 'Persönliche Schutzausrüstung',
    desc: 'Die eingesetzten Fachkräfte verwenden eine auf Material und Verfahren abgestimmte Schutzausrüstung.',
    icon: HardHat,
  },
  {
    title: 'Sichere Verpackung',
    desc: 'Belastete Materialien werden sachgerecht verpackt, gekennzeichnet und für den Abtransport vorbereitet.',
    icon: PackageCheck,
  },
  {
    title: 'Dokumentierte Entsorgung',
    desc: 'Die Entsorgung erfolgt über geeignete Wege und wird entsprechend den projektbezogenen Anforderungen dokumentiert.',
    icon: FileCheck2,
  },
];

const einsatzbereicheCards = [
  {
    title: 'Büro- und Verwaltungsgebäude',
    desc: 'Bei Modernisierung, Mieterausbau oder Rückbau können schadstoffverdächtige Materialien in Boden-, Wand- und Deckenaufbauten relevant werden.',
    icon: Briefcase,
  },
  {
    title: 'Gewerbe- und Industrieimmobilien',
    desc: 'Produktionshallen, Lagerflächen und technische Bereiche erfordern häufig eine besonders genaue Abstimmung von Sanierung und laufendem Betrieb.',
    icon: Warehouse,
  },
  {
    title: 'Wohngebäude',
    desc: 'In Mehrfamilienhäusern und bewohnten Immobilien müssen Schutzmaßnahmen, Zugänglichkeit und Kommunikation sorgfältig geplant werden.',
    icon: House,
  },
  {
    title: 'Schulen und öffentliche Gebäude',
    desc: 'Bei sensibel genutzten Immobilien sind klare Abläufe, dokumentierte Maßnahmen und abgestimmte Zeitfenster besonders wichtig.',
    icon: Landmark,
  },
];

const radexLiveProjects = [
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Schadstoffsanierung Gewerbeobjekt',
    location: 'Hanau',
    desc: 'Abschnittsweise Sanierung mit Abschottung, kontrolliertem Rückbau und Vorbereitung für den Folgeausbau.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'Abgeschlossen',
    title: 'Schadstoffsanierung Bestandswohnung',
    location: 'Frankfurt am Main',
    desc: 'Koordinierte Probenahme, Abschottung und Rückbau belasteter Baustoffe mit anschließender Wiederherstellung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-altbau.webp',
    badge: 'Vorher & Nachher',
    title: 'Rückbau belasteter Baustoffe',
    location: 'Darmstadt',
    desc: 'Fachgerechter Rückbau und dokumentierte Entsorgung durch qualifizierte Partner in einem Altbau.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/wohnzimmer.webp',
    badge: 'Abgeschlossen',
    title: 'Innenausbau nach Schadstoffsanierung',
    location: 'Offenbach am Main',
    desc: 'Trockenbau, Malerarbeiten und Bodenbeläge nach abgeschlossener Sanierung in einer Bestandswohnung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/renov1.webp',
    badge: 'LIVE',
    title: 'Schadstoffsanierung Bestandsgebäude',
    location: 'Rodgau',
    desc: 'Koordinierte Sanierung mit Abschottung, Rückbau und Wiederherstellung in einem Mehrfamilienhaus.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buero2.webp',
    badge: 'Video',
    title: 'Baustelleneinblick Schadstoffsanierung',
    location: 'Dreieich',
    desc: 'Authentischer Einblick in Abschottung, kontrollierten Rückbau und Wiederherstellung auf einer echten Baustelle.',
    cta: 'Video ansehen',
  },
];

const videoTranscript =
  'Bei einer Schadstoffsanierung steht am Anfang immer die Frage, welche Materialien tatsächlich betroffen sind. Deshalb koordinieren wir zunächst die Bestandsaufnahme und bei Bedarf eine Laboranalyse. Auf dieser Grundlage entstehen das Schutz- und Sanierungskonzept. Anschließend werden Rückbau, Entsorgung und Wiederherstellung so aufeinander abgestimmt, dass der gesamte Ablauf transparent und planbar bleibt.';

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Wie läuft eine Schadstoffsanierung ab?',
  description:
    'Bernd erklärt, warum vor dem Rückbau eine fachgerechte Untersuchung sinnvoll ist und wie Analyse, Schutzkonzept, Sanierung, Entsorgung und Wiederherstellung aufeinander abgestimmt werden.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const seoTocSections = [...schadstoffsanierungSeoSections, ...schadstoffsanierungSeoLinkSections];

export default function SchadstoffsanierungLanding() {
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
        name: 'Schadstoffsanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page schadstoffsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/schimmel-asbest-sanierung-rhein-main">Schimmel &amp; Asbest</Link>
              <span aria-hidden="true">↓</span>
              <span>Schadstoffsanierung</span>
            </nav>
            <p className="br-hero-kicker">
              <FlaskConical size={16} strokeWidth={1.5} aria-hidden="true" /> Schadstoffsanierung · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Schadstoffsanierung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Professionelle Koordination von Untersuchung, Rückbau, Schadstoffsanierung und Wiederherstellung belasteter
              Gebäude.
            </p>
            <p className="br-hero-text">
              Schadstoffbelastete Baustoffe erfordern eine strukturierte Vorgehensweise. Vor einer Sanierung müssen
              Materialien bewertet, geeignete Schutzmaßnahmen geplant und die Arbeiten fachgerecht umgesetzt werden.
            </p>
            <p className="br-hero-text">
              Radex begleitet Eigentümer, Unternehmen und Hausverwaltungen während des gesamten Projekts und koordiniert
              alle beteiligten Fachunternehmen – von der ersten Bestandsaufnahme bis zur abschließenden Wiederherstellung
              der betroffenen Bereiche.
            </p>
            <SchadstoffsanierungCTA isHero />
            <p className="br-hero-micro" style={{ marginTop: '16px' }}>
              {TRUST_LINE}
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Professionelle Schadstoffsanierung in einem Gewerbegebäude im Rhein-Main-Gebiet."
          title="Schadstoffsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Fachgerechte Sanierung schadstoffbelasteter Gebäude</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              In Bestandsgebäuden können unterschiedliche Schadstoffe vorhanden sein, die bei Umbau-, Rückbau- oder
              Sanierungsarbeiten berücksichtigt werden müssen. Dazu zählen unter anderem belastete Klebstoffe, künstliche
              Mineralfasern, PAK-haltige Baustoffe, PCB-haltige Materialien oder weitere Gebäudeschadstoffe.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Eine erfolgreiche Schadstoffsanierung beginnt deshalb mit einer fundierten Bestandsaufnahme und einer klaren
              Projektplanung. Radex koordiniert die erforderlichen Untersuchungen, Schutzmaßnahmen, Fachbetriebe und
              Folgegewerke, damit die betroffenen Bereiche sicher saniert und anschließend wieder genutzt werden können.
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
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen im Bereich Schadstoffsanierung – von der
        Erkundung bis zur Wiederherstellung.
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
        In Bestandsgebäuden treten unterschiedliche Schadstoffe auf – eine fachgerechte Bewertung ist dabei
        unverzichtbar. Materialien lassen sich nicht zuverlässig allein anhand des Aussehens identifizieren.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Schadstoffe in Gebäuden</h2>
          </div>
          <PremiumIconCards cards={schadstoffCards} linked largeIcons />
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Einschätzung bis zur
        Wiederherstellung der betroffenen Bereiche.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstkontaktaufnahme bis zur Wiederherstellung – so koordinieren wir Schadstoffsanierungen Schritt für Schritt."
        steps={processSteps}
      />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Schutzmaßnahmen bei der Schadstoffsanierung</h2>
          </div>
          <PremiumIconCards cards={schutzCards} largeIcons />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Einsatzbereiche</h2>
          </div>
          <div className="br-leistungen-grid-two">
            <PremiumIconCards cards={einsatzbereicheCards} largeIcons />
          </div>
        </div>
      </section>

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ihre Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Das Team Schadstoffsanierung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleitung begleitet Eigentümer, Unternehmen, Hausverwaltungen und Investoren bei der
              Untersuchung und Sanierung belasteter Gebäude. Sie erhalten eine zentrale Ansprechstelle für Sachverständige,
              Labore, Fachbetriebe, Entsorgung und Wiederherstellung.
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
                Fotos der betroffenen Bereiche senden und eine erste unverbindliche Einschätzung anfragen.
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
        title="Wie läuft eine Schadstoffsanierung ab?"
        description="Bernd erklärt, warum vor dem Rückbau eine fachgerechte Untersuchung sinnvoll ist und wie Analyse, Schutzkonzept, Sanierung, Entsorgung und Wiederherstellung aufeinander abgestimmt werden."
        poster={VIDEO_POSTER}
        posterAlt="Erklärung zum Ablauf einer Schadstoffsanierung im Rhein-Main-Gebiet"
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Schadstoffverdacht in Ihrem Gebäude?</h2>
            <p>
              Senden Sie uns erste Informationen und Fotos der betroffenen Bereiche. Wir besprechen das sinnvolle weitere
              Vorgehen und koordinieren bei Bedarf Untersuchung, Sanierung, Entsorgung und Wiederherstellung.
            </p>
            <SchadstoffsanierungCTA centered />
          </div>
        </div>
      </section>

      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Schadstoffsanierung"
        intro={schadstoffsanierungSeoIntro}
        sections={seoTocSections}
        ctaLabel="Kostenlose Erstberatung"
        ctaHref="#kontakt"
        panelId="schadstoffsanierung-seo-panel"
        showToc
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Schadstoffsanierungen"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Schadstoffsanierung, Rückbau, Innenausbau nach Sanierung, Gewerbeobjekte und Bestandsgebäude."
        projects={radexLiveProjects}
      />
    </main>
  );
}
