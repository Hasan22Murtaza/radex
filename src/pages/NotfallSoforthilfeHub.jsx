import { useEffect } from 'react';
import {
  Siren,
  Clock,
  UserRound,
  Workflow,
  ClipboardList,
  Timer,
  MapPin,
  Zap,
  Bath,
  ShowerHead,
  PhoneCall,
  SearchCheck,
  Hammer,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  CircleCheck,
  Camera,
  ShieldAlert,
  FileText,
  ShieldCheck,
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
  FaqAccordion,
  QualityPromiseBlock,
  ResponsiveChecklistSection,
} from '../components/landing/SharedLandingParts';
import {
  notfallSoforthilfeSeoIntro,
  notfallSoforthilfeSeoSections,
  notfallSoforthilfeSeoLinkSections,
} from '../data/notfallSoforthilfeSeoContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/notfall-soforthilfe-rhein-main';
const HERO_IMAGE = '/img/notfall-soforthilfe-rhein-main.webp';
const VIDEO_POSTER = '/img/bernd-notfall-soforthilfe-rhein-main.webp';
const CHECKLIST_IMAGE = '/img/schadensdokumentation-soforthilfe-rhein-main.webp';
const CTA_IMAGE = '/img/projektanfrage-notfall-soforthilfe-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Notfall & Soforthilfe Rhein-Main | Schnelle Sanierung | Radex';
const META_DESCRIPTION =
  'Schnelle Hilfe bei dringenden Sanierungen im Rhein-Main-Gebiet. Ob Wasserschaden, beschädigtes Bad oder kurzfristige Sanierungsmaßnahmen – Radex koordiniert die komplette Umsetzung.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Leistungen', path: '/leistungen' },
  { name: 'Notfall & Soforthilfe', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Schnelle Projektaufnahme',
  'Koordination aller Gewerke',
  'Ein Ansprechpartner',
  'Transparente Abläufe',
  'Rhein-Main-Gebiet',
];

function NotfallCTA({
  isHero = false,
  centered = false,
  primaryLabel = 'Soforthilfe anfragen',
  showPhone = false,
  showWhatsApp = false,
}) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href="#kontakt" className="btn br-btn-orange">
        {primaryLabel}
      </a>
      {showWhatsApp ? (
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn br-btn-outline-orange"
        >
          Fotos per WhatsApp senden
        </a>
      ) : (
        <a href="#kontakt" className="btn br-btn-outline-orange">
          Kostenlose Erstberatung
        </a>
      )}
      {showPhone && (
        <a href={PHONE_TEL} className="btn br-btn-outline-orange">
          Telefonisch Kontakt aufnehmen
        </a>
      )}
    </div>
  );
}

const whyRadexCards = [
  {
    title: 'Schnelle Reaktionszeiten',
    desc: 'Wir organisieren kurzfristige Sanierungsmaßnahmen strukturiert und effizient.',
    icon: Clock,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Während des gesamten Projekts haben Sie einen festen Ansprechpartner.',
    icon: UserRound,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Alle beteiligten Fachunternehmen arbeiten abgestimmt zusammen.',
    icon: Workflow,
  },
  {
    title: 'Strukturierte Projektsteuerung',
    desc: 'Klare Abläufe sorgen für Transparenz und Planungssicherheit.',
    icon: ClipboardList,
  },
  {
    title: 'Weniger Ausfallzeiten',
    desc: 'Durch eine koordinierte Umsetzung können betroffene Bereiche schneller wieder genutzt werden.',
    icon: Timer,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Persönliche Betreuung für private und gewerbliche Immobilien.',
    icon: MapPin,
  },
];

const leistungenCards = [
  {
    title: 'Sanierungs-Soforthilfe',
    desc: 'Akute Unterstützung bei dringenden Sanierungsmaßnahmen nach unerwarteten Schäden.',
    icon: Zap,
    to: '/sanierungs-soforthilfe-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Schnellsanierung',
    desc: 'Beschleunigte Sanierungsprojekte mit professioneller Koordination aller Gewerke.',
    icon: Clock,
    to: '/schnellsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bad-Soforthilfe',
    desc: 'Schnelle Hilfe bei beschädigten oder nicht mehr nutzbaren Badezimmern.',
    icon: ShowerHead,
    to: '/bad-soforthilfe-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Schnelle Badsanierung',
    desc: 'Komplette Badmodernisierung innerhalb kurzer Projektlaufzeiten.',
    icon: Bath,
    to: '/schnelle-badsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const processSteps = [
  {
    title: 'Erstkontakt',
    desc: 'Schnelle Aufnahme Ihres Anliegens.',
    icon: PhoneCall,
  },
  {
    title: 'Erste Einschätzung',
    desc: 'Bewertung der Situation und Festlegung der nächsten Schritte.',
    icon: SearchCheck,
  },
  {
    title: 'Projektplanung',
    desc: 'Organisation aller notwendigen Maßnahmen.',
    icon: ClipboardList,
  },
  {
    title: 'Koordination',
    desc: 'Abstimmung sämtlicher beteiligter Fachbetriebe.',
    icon: Workflow,
  },
  {
    title: 'Umsetzung',
    desc: 'Durchführung der Sanierungsarbeiten.',
    icon: Hammer,
  },
  {
    title: 'Abschluss',
    desc: 'Gemeinsame Abnahme und Übergabe des Projekts.',
    icon: CircleCheckBig,
  },
];

const decisionCards = [
  {
    title: 'Sanierungs-Soforthilfe Rhein-Main',
    desc: 'Ein unerwarteter Gebäudeschaden muss schnell bearbeitet werden. Geeignet für dringende Wiederherstellungs- und Sanierungsmaßnahmen nach plötzlich entstandenen Schäden.',
    icon: Zap,
    to: '/sanierungs-soforthilfe-rhein-main',
    cta: 'Sanierungs-Soforthilfe ansehen',
  },
  {
    title: 'Schnellsanierung Rhein-Main',
    desc: 'Eine Immobilie muss innerhalb kurzer Zeit saniert werden. Geeignet für zeitkritische Renovierungen, Instandsetzungen, Mieterwechsel oder kurzfristig geplante Modernisierungen.',
    icon: Clock,
    to: '/schnellsanierung-rhein-main',
    cta: 'Schnellsanierung ansehen',
  },
  {
    title: 'Bad-Soforthilfe Rhein-Main',
    desc: 'Ein Badezimmer ist beschädigt oder nicht mehr nutzbar. Geeignet für akute Probleme im Bad, bei denen schnelle Reparatur-, Rückbau- oder Wiederherstellungsmaßnahmen erforderlich sind.',
    icon: ShowerHead,
    to: '/bad-soforthilfe-rhein-main',
    cta: 'Bad-Soforthilfe ansehen',
  },
  {
    title: 'Schnelle Badsanierung Rhein-Main',
    desc: 'Ein Bad soll möglichst schnell vollständig erneuert werden. Geeignet für eine koordinierte Komplettmodernisierung mit optimierten Abläufen und möglichst kurzen Bauzeiten.',
    icon: Bath,
    to: '/schnelle-badsanierung-rhein-main',
    cta: 'Schnelle Badsanierung ansehen',
  },
];

const emergencySteps = [
  {
    title: 'Gefahrenbereich sichern',
    desc: 'Betroffene Bereiche möglichst nicht betreten, wenn Strom, Wasser, herabfallende Bauteile oder andere unmittelbare Gefahren bestehen.',
    icon: CircleCheck,
  },
  {
    title: 'Zuständige Notdienste verständigen',
    desc: 'Bei akuten Gefahren zuerst Feuerwehr, Polizei, Netzbetreiber oder den passenden technischen Notdienst kontaktieren.',
    icon: ShieldAlert,
  },
  {
    title: 'Schaden dokumentieren',
    desc: 'Erstellen Sie Fotos und Videos, sofern dies gefahrlos möglich ist. Dokumentieren Sie betroffene Räume, Bauteile und sichtbare Schäden.',
    icon: Camera,
  },
  {
    title: 'Unterlagen bereithalten',
    desc: 'Hilfreich sind Gebäudepläne, Versicherungsdaten, vorhandene Angebote und Informationen zu bereits ausgeführten Sofortmaßnahmen.',
    icon: FileText,
  },
  {
    title: 'Radex kontaktieren',
    desc: 'Übermitteln Sie uns eine kurze Beschreibung, die Objektadresse und vorhandene Fotos für eine erste Projekteinschätzung.',
    icon: PhoneCall,
  },
];

const projectRequestItems = [
  'Standort der Immobilie',
  'Art des Schadens oder der gewünschten Sanierung',
  'betroffene Räume oder Gebäudebereiche',
  'aktuelle Nutzbarkeit',
  'gewünschter Zeitrahmen',
  'Fotos oder Videos',
  'Kontaktdaten eines erreichbaren Ansprechpartners',
];

const internalLinkCards = [
  {
    title: 'Sanierungs-Soforthilfe Rhein-Main',
    desc: 'Akute Unterstützung bei dringenden Sanierungsmaßnahmen und unerwarteten Gebäudeschäden.',
    icon: Zap,
    to: '/sanierungs-soforthilfe-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Schnellsanierung Rhein-Main',
    desc: 'Beschleunigte Sanierungsprojekte mit strukturierter Koordination aller Gewerke.',
    icon: Clock,
    to: '/schnellsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bad-Soforthilfe Rhein-Main',
    desc: 'Schnelle Hilfe bei beschädigten oder nicht nutzbaren Badezimmern.',
    icon: ShowerHead,
    to: '/bad-soforthilfe-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Schnelle Badsanierung Rhein-Main',
    desc: 'Komplette Badmodernisierung mit kurzen Projektlaufzeiten und professioneller Umsetzung.',
    icon: Bath,
    to: '/schnelle-badsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const radexLiveProjects = [
  {
    image: '/img/sanierung-service-haus.webp',
    badge: 'LIVE',
    title: 'Soforthilfe nach Wasserschaden',
    location: 'Offenbach am Main',
    desc: 'Kurzfristige Koordination von Trocknung, Rückbau und Wiederherstellung – laufendes Projekt.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-bad.webp',
    badge: 'Abgeschlossen',
    title: 'Bad-Soforthilfe Bestandswohnung',
    location: 'Frankfurt am Main',
    desc: 'Schnelle Wiederherstellung eines beschädigten Badezimmers mit abgestimmten Gewerken.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'Vorher & Nachher',
    title: 'Schnellsanierung nach Mieterwechsel',
    location: 'Darmstadt',
    desc: 'Zeitkritische Renovierung einzelner Wohnungsbereiche mit strukturierter Projektsteuerung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Gewerbliche Soforthilfe',
    location: 'Hanau',
    desc: 'Kurzfristige Instandsetzung und Koordination mehrerer Gewerke in einem Gewerbeobjekt.',
    cta: 'Projekt ansehen',
  },
];

const videoTranscript =
  'Wenn eine schnelle Sanierung notwendig wird, zählt eine strukturierte Projektkoordination. Radex nimmt Ihr Anliegen auf, bewertet den Schaden und organisiert die nächsten Schritte mit allen beteiligten Fachbetrieben – transparent und mit einem festen Ansprechpartner.';

const faqsData = [
  {
    q: 'Ist Radex ein klassischer 24-Stunden-Notdienst?',
    a: 'Radex koordiniert dringende Sanierungs- und Wiederherstellungsmaßnahmen. Die konkrete Verfügbarkeit und der mögliche Projektbeginn werden nach der ersten Einschätzung individuell bestätigt. Bei akuten Gefahren für Personen oder Gebäude sind zunächst Feuerwehr, Polizei, Netzbetreiber oder der zuständige technische Notdienst zu kontaktieren.',
  },
  {
    q: 'Welche Schäden können kurzfristig bearbeitet werden?',
    a: 'Wir unterstützen unter anderem bei dringenden Sanierungsmaßnahmen nach Wasserschäden, beschädigten Badezimmern, notwendigen Instandsetzungen sowie zeitkritischen Renovierungen und Wiederherstellungen.',
  },
  {
    q: 'Wie schnell kann Radex reagieren?',
    a: 'Nach Ihrer Anfrage prüfen wir die Situation, den Projektumfang und die benötigten Gewerke. Anschließend erhalten Sie eine realistische Einschätzung zu den nächsten Schritten und den möglichen Terminen.',
  },
  {
    q: 'Welche Informationen werden für die erste Einschätzung benötigt?',
    a: 'Hilfreich sind eine kurze Beschreibung, aussagekräftige Fotos, die Adresse des Objekts und Angaben dazu, welche Bereiche aktuell nicht nutzbar oder beschädigt sind.',
  },
  {
    q: 'Koordiniert Radex alle beteiligten Gewerke?',
    a: 'Ja. Abhängig vom Schaden koordinieren wir beispielsweise Sanitär-, Heizungs-, Elektro-, Trockenbau-, Maler-, Fliesen- und weitere notwendige Facharbeiten.',
  },
  {
    q: 'Unterstützt Radex auch Hausverwaltungen und Unternehmen?',
    a: 'Ja. Unsere Soforthilfe richtet sich an private Eigentümer, Vermieter, Hausverwaltungen, Gewerbebetriebe, Unternehmen und Investoren im Rhein-Main-Gebiet.',
  },
  {
    q: 'Kann Radex nach einem Versicherungsfall unterstützen?',
    a: 'Wir können die erforderlichen Sanierungsarbeiten koordinieren und vorhandene Unterlagen in die Projektplanung einbeziehen. Die Prüfung der Kostenübernahme und die verbindliche Leistungsfreigabe erfolgen durch die jeweilige Versicherung.',
  },
  {
    q: 'Werden auch einzelne Räume saniert?',
    a: 'Ja. Neben größeren Sanierungsprojekten können abhängig vom Schaden auch einzelne Badezimmer, Wohnungen, Gewerberäume oder abgegrenzte Gebäudebereiche bearbeitet werden.',
  },
];

const seoDrawerSections = [...notfallSoforthilfeSeoSections, ...notfallSoforthilfeSeoLinkSections];

const serviceOfferCatalog = {
  '@type': 'OfferCatalog',
  name: 'Notfall & Soforthilfe Leistungen',
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Sanierungs-Soforthilfe Rhein-Main',
        url: `${SITE_URL}/sanierungs-soforthilfe-rhein-main`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Schnellsanierung Rhein-Main',
        url: `${SITE_URL}/schnellsanierung-rhein-main`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Bad-Soforthilfe Rhein-Main',
        url: `${SITE_URL}/bad-soforthilfe-rhein-main`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Schnelle Badsanierung Rhein-Main',
        url: `${SITE_URL}/schnelle-badsanierung-rhein-main`,
      },
    },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: META_TITLE,
  description: META_DESCRIPTION,
  url: `${SITE_URL}${PAGE_PATH}`,
  isPartOf: { '@id': `${SITE_URL}/#website` },
};

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Was tun, wenn eine schnelle Sanierung notwendig wird?',
  description:
    'Bernd erklärt, warum eine strukturierte Projektkoordination bei kurzfristigen Sanierungen entscheidend ist und wie Radex Eigentümer im Ernstfall unterstützt.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT3M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function NotfallSoforthilfeHub() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const serviceSchema = {
    ...buildServiceSchema({
      name: 'Notfall & Soforthilfe Rhein-Main',
      description: META_DESCRIPTION,
      path: PAGE_PATH,
    }),
    hasOfferCatalog: serviceOfferCatalog,
  };

  useSeo({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: PAGE_PATH,
    image: HERO_IMAGE,
    jsonLd: [
      webPageSchema,
      serviceSchema,
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page notfall-soforthilfe-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/leistungen">Leistungen</Link>
              <span aria-hidden="true">↓</span>
              <span>Notfall & Soforthilfe</span>
            </nav>
            <p className="br-hero-kicker">
              <Siren size={16} strokeWidth={1.5} aria-hidden="true" /> Schnelle Hilfe bei dringenden Sanierungen
            </p>
            <p className="br-hero-kicker">Notfall & Soforthilfe im Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Notfall & Soforthilfe
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Wenn schnelles Handeln gefragt ist, sorgt Radex für eine strukturierte Projektkoordination – von der
              ersten Einschätzung bis zur vollständigen Sanierung.
            </p>
            <p className="br-hero-text">
              Nicht jede Sanierung kann langfristig geplant werden. Wasserschäden, beschädigte Badezimmer oder andere
              unerwartete Ereignisse erfordern häufig eine schnelle Reaktion, um Folgeschäden zu vermeiden und
              betroffene Bereiche schnell wieder nutzbar zu machen.
            </p>
            <p className="br-hero-text">
              Radex Objektmanagement koordiniert kurzfristige Sanierungsprojekte im gesamten Rhein-Main-Gebiet und
              übernimmt die Abstimmung aller beteiligten Gewerke – zuverlässig, strukturiert und mit einem festen
              Ansprechpartner.
            </p>
            <NotfallCTA isHero />
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
          aria-label="Schnelle Hilfe und Koordination einer Sanierung im Rhein-Main-Gebiet."
          title="Notfall & Soforthilfe Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Schnelle Entscheidungen verhindern größere Schäden</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Bei einem unerwarteten Schaden zählt oft jede Stunde. Eine schnelle Organisation der notwendigen Maßnahmen
              hilft dabei, Ausfallzeiten zu reduzieren, Folgeschäden zu begrenzen und den normalen Betrieb möglichst
              schnell wiederherzustellen.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex unterstützt Eigentümer, Unternehmen und Hausverwaltungen bei kurzfristigen Sanierungsprojekten und
              übernimmt die komplette Koordination aller beteiligten Fachbetriebe.
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

      <QualityPromiseBlock intro="Auch bei kurzfristigen Sanierungen setzen wir auf klare Abläufe, fachgerechte Koordination und transparente Kommunikation – von der ersten Einschätzung bis zur Projektübergabe." />

      <SectionTransition>
        Je nach Situation unterstützen wir Sie in unterschiedlichen Spezialbereichen – von akuter Sanierungs-Soforthilfe
        bis zur schnellen Komplettbadsanierung.
      </SectionTransition>

      <section id="leistungen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <div className="br-leistungen-grid-two">
            <PremiumIconCards cards={leistungenCards} linked largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Orientierung – von der ersten Kontaktaufnahme bis zur
        gemeinsamen Abnahme.
      </SectionTransition>

      <HorizontalProcessTimeline title="Projektablauf" steps={processSteps} />

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p className="br-hero-kicker">Notfall & Soforthilfe</p>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Ihr Ansprechpartner für Notfall & Soforthilfe</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Ob kurzfristige Sanierung, beschädigtes Badezimmer oder dringende Modernisierungsmaßnahmen – wir
              unterstützen Sie bei einer schnellen und strukturierten Projektorganisation.
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
                Senden Sie uns Fotos oder eine kurze Beschreibung Ihres Anliegens – wir melden uns schnellstmöglich
                zurück.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
                WhatsApp öffnen
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#kontakt" className="btn br-btn-orange">
              Jetzt Soforthilfe anfragen
            </a>
          </div>
        </div>
      </section>

      <BerndExplainsVideo
        title="Was tun, wenn eine schnelle Sanierung notwendig wird?"
        description="Bernd erklärt, warum eine strukturierte Projektkoordination bei kurzfristigen Sanierungen entscheidend ist und wie Radex Eigentümer im Ernstfall unterstützt."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt die Soforthilfe bei dringenden Sanierungsprojekten."
        duration="ca. 3 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Jetzt schnelle Unterstützung für Ihr Sanierungsprojekt erhalten</h2>
            <p>
              Ob Wasserschaden, beschädigtes Bad oder kurzfristige Sanierungsmaßnahme – wir koordinieren Ihr Projekt
              schnell, transparent und zuverlässig im gesamten Rhein-Main-Gebiet.
            </p>
            <NotfallCTA centered />
          </div>
        </div>
      </section>

      <SeoKnowledgeDrawer
        title="Weitere Informationen"
        intro={notfallSoforthilfeSeoIntro}
        sections={seoDrawerSections}
        ctaLabel="Soforthilfe anfragen"
        ctaHref="#kontakt"
        panelId="notfall-soforthilfe-seo-panel"
      />

      <FaqAccordion faqs={faqsData} title="Häufige Fragen zu Notfall & Soforthilfe" />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Leistung passt zu Ihrer Situation?</h2>
          </div>
          <div className="br-leistungen-grid-two">
            <PremiumIconCards cards={decisionCards} linked largeIcons />
          </div>
        </div>
      </section>

      <section className="br-section br-icon-checklist-section">
        <div className="container">
          <div className="text-center mb-10" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 className="br-section-title">Erste Schritte im Schadensfall</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Diese Hinweise ersetzen keine Gefahrenbewertung durch zuständige Notdienste oder Fachpersonal. Bei
              unmittelbarer Gefahr wenden Sie sich zuerst an die zuständigen Notdienste.
            </p>
          </div>
          <ul className="br-icon-checklist-grid">
            {emergencySteps.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="br-icon-checklist-item">
                  <span className="br-icon-checklist-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ResponsiveChecklistSection
        title="Projektanfrage vorbereiten"
        intro="Für eine schnelle und möglichst belastbare Einschätzung benötigen wir nur wenige Angaben:"
        items={projectRequestItems}
      />

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '920px' }}>
          <img
            src={CHECKLIST_IMAGE}
            alt="Vorbereitung einer Soforthilfe-Anfrage mit Fotos und Unterlagen zu einem Gebäudeschaden."
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="br-seo-inline-image"
          />
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="br-trust-notice-box" role="note">
            <div className="br-trust-notice-icon" aria-hidden="true">
              <ShieldCheck size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="br-trust-notice-title">Klare Einschätzung statt unrealistischer Versprechen</h2>
              <p>
                Die mögliche Reaktionszeit hängt vom Schadensbild, der Erreichbarkeit des Objekts, der Verfügbarkeit
                benötigter Fachbetriebe und erforderlicher Materialien ab. Nach der ersten Prüfung informieren wir
                transparent darüber, welche Maßnahmen kurzfristig möglich sind und wie der weitere Ablauf geplant werden
                kann.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="br-section br-gwc-cta-section notfall-final-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box br-gwc-cta-box--with-image">
            <div className="br-gwc-cta-copy">
              <h2>Dringende Sanierung? Jetzt Situation prüfen lassen</h2>
              <p>
                Senden Sie uns eine kurze Beschreibung und aussagekräftige Fotos. Wir prüfen Ihr Anliegen und melden uns
                mit einer ersten Einschätzung zu den erforderlichen Maßnahmen und dem möglichen weiteren Ablauf.
              </p>
              <NotfallCTA centered showWhatsApp showPhone />
            </div>
            <img
              src={CTA_IMAGE}
              alt="Prüfung einer Anfrage für eine dringende Sanierung im Rhein-Main-Gebiet."
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="br-gwc-cta-image"
            />
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '920px' }}>
          <div className="text-center mb-10">
            <h2 className="br-section-title">Entdecken Sie unsere Leistungen im Bereich Notfall & Soforthilfe</h2>
          </div>
          <div className="br-leistungen-grid-two">
            <PremiumIconCards cards={internalLinkCards} linked largeIcons />
          </div>
        </div>
      </section>

      <RadexLiveSection
        title="Radex Live"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Soforthilfe, Schnellsanierung, Badprojekte und koordinierte Wiederherstellung nach Schäden."
        projects={radexLiveProjects}
      />
    </main>
  );
}
