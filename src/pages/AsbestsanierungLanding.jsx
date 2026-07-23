import { useEffect } from 'react';
import {
  TriangleAlert,
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
  Layers3,
  Building,
  House,
  Cable,
  Shield,
  Settings,
  PhoneCall,
  Search,
  Microscope,
  ClipboardList,
  CircleCheckBig,
  PanelTopClose,
  Wind,
  HardHat,
  DoorOpen,
  PackageCheck,
  Phone,
  Mail,
  MessageCircle,
  Briefcase,
  Warehouse,
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
  SeoKnowledgeDrawer,
  RadexLiveSection,
  HorizontalProcessTimeline,
  BerndExplainsVideo,
} from '../components/landing/SharedLandingParts';
import {
  asbestsanierungSeoIntro,
  asbestsanierungSeoSections,
  asbestsanierungSeoLinkSections,
} from '../data/asbestsanierungSeoContent';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const PAGE_PATH = '/asbestsanierung-rhein-main';
const HERO_IMAGE = '/img/asbestsanierung-rhein-main-radex.webp';
const VIDEO_POSTER = '/img/bernd-asbestsanierung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Asbestsanierung Rhein-Main | Fachgerechte Entfernung asbesthaltiger Baustoffe';
const META_DESCRIPTION =
  'Professionelle Asbestsanierung im Rhein-Main-Gebiet. Koordination von Untersuchung, Rückbau, Entsorgung und Wiederherstellung mit qualifizierten Fachpartnern.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Schimmel & Asbest', path: '/schimmel-asbest-sanierung-rhein-main' },
  { name: 'Asbestsanierung', path: PAGE_PATH },
];

const TRUST_LINE = 'Koordinierte Projektabläufe · Qualifizierte Fachpartner · Dokumentierte Durchführung';

function AsbestsanierungCTA({ isHero = false, centered = false }) {
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
    title: 'Strukturierte Bestandsaufnahme',
    desc: 'Wir koordinieren die Erfassung verdächtiger Baustoffe und stimmen notwendige Untersuchungen mit qualifizierten Fachpartnern ab.',
    icon: SearchCheck,
  },
  {
    title: 'Qualifizierte Fachunternehmen',
    desc: 'Gesetzlich geregelte Arbeiten werden von entsprechend qualifizierten Fachbetrieben durchgeführt.',
    icon: UsersRound,
  },
  {
    title: 'Zentrale Projektkoordination',
    desc: 'Von der Untersuchung bis zur Wiederherstellung erhalten Sie einen festen Ansprechpartner.',
    icon: Workflow,
  },
  {
    title: 'Geplante Schutzmaßnahmen',
    desc: 'Arbeitsbereiche, Rückbau und Entsorgung werden auf Grundlage des jeweiligen Befunds organisiert.',
    icon: ShieldCheck,
  },
  {
    title: 'Dokumentierte Abläufe',
    desc: 'Alle relevanten Projektabschnitte werden nachvollziehbar dokumentiert.',
    icon: FileCheck2,
  },
  {
    title: 'Wiederherstellung aus einer Hand',
    desc: 'Nach Abschluss der Asbestsanierung koordinieren wir auf Wunsch den kompletten Innenausbau und die Wiederherstellung der betroffenen Bereiche.',
    icon: Building2,
  },
];

const qualityCards = [
  {
    title: 'Festpreisgarantie',
    desc: 'Transparente Angebote schaffen Planungssicherheit für Ihr Sanierungsprojekt.',
    icon: BadgeEuro,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Eine zentrale Projektleitung begleitet Sie von der Erstberatung bis zur Fertigstellung.',
    icon: UserRound,
  },
  {
    title: 'Termingerechte Umsetzung',
    desc: 'Alle Projektabschnitte werden anhand eines abgestimmten Terminplans koordiniert.',
    icon: CalendarClock,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Sachverständige, Fachbetriebe, Entsorgung und Wiederaufbau werden zentral organisiert.',
    icon: Workflow,
  },
  {
    title: 'Geprüfte Qualität',
    desc: 'Die ausgeführten Arbeiten werden projektbegleitend kontrolliert und dokumentiert.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie erhalten jederzeit Informationen zum Projektstand, zu Terminen und den nächsten Schritten.',
    icon: MessagesSquare,
  },
];

const leistungenCards = [
  {
    title: 'Asbestuntersuchung',
    desc: 'Vor Beginn von Umbau-, Rückbau- oder Sanierungsarbeiten koordinieren wir bei Bedarf die Untersuchung verdächtiger Baustoffe und stimmen die nächsten Schritte mit qualifizierten Fachpartnern ab.',
    icon: SearchCheck,
    to: '#asbestuntersuchung',
    cta: 'Mehr zur Asbestuntersuchung',
  },
  {
    title: 'Asbestsanierung',
    desc: 'Wir koordinieren die fachgerechte Sanierung asbesthaltiger Baustoffe – von der Planung der Schutzmaßnahmen über den Rückbau bis zur dokumentierten Entsorgung.',
    icon: TriangleAlert,
    to: '#asbestsanierung',
    cta: 'Mehr zur Asbestsanierung',
  },
  {
    title: 'Wiederherstellung',
    desc: 'Nach Abschluss der Sanierung übernehmen wir auf Wunsch den Innenausbau und stellen die betroffenen Räume oder Gewerbeflächen schlüsselfertig wieder her.',
    icon: Building2,
    to: '#wiederherstellung',
    cta: 'Mehr zur Wiederherstellung',
  },
];

const einsatzbereichCards = [
  {
    title: 'Bodenbeläge und Klebstoffe',
    desc: 'In älteren Bodenaufbauten können asbesthaltige Bodenplatten, Klebstoffe oder Spachtelmassen vorhanden sein. Vor dem Ausbau sollte eine fachgerechte Bewertung erfolgen.',
    icon: Layers3,
  },
  {
    title: 'Fassadenplatten',
    desc: 'Ältere Fassadenelemente können asbesthaltige Baustoffe enthalten. Rückbau und Entsorgung erfordern eine strukturierte Planung.',
    icon: Building,
  },
  {
    title: 'Dachplatten',
    desc: 'Bei älteren Dächern können asbesthaltige Faserzementprodukte verbaut worden sein. Die Sanierung erfolgt durch entsprechend qualifizierte Fachunternehmen.',
    icon: House,
  },
  {
    title: 'Rohrisolierungen',
    desc: 'Technische Anlagen und Leitungsisolierungen können asbesthaltige Materialien enthalten und müssen vor Umbauten geprüft werden.',
    icon: Cable,
  },
  {
    title: 'Brandschutzmaterialien',
    desc: 'Historische Brandschutzprodukte können asbesthaltige Bestandteile enthalten. Eine Untersuchung schafft Klarheit über den weiteren Sanierungsbedarf.',
    icon: Shield,
  },
  {
    title: 'Technische Anlagen',
    desc: 'Auch Dichtungen, Lüftungskomponenten oder technische Einbauten können je nach Baujahr asbesthaltige Materialien enthalten.',
    icon: Settings,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Wir besprechen die vorhandene Situation, den geplanten Umbau und mögliche Hinweise auf asbesthaltige Baustoffe.',
    icon: PhoneCall,
  },
  {
    title: 'Objektbesichtigung',
    desc: 'Verdächtige Bauteile werden dokumentiert und für eine mögliche Untersuchung eingegrenzt.',
    icon: Search,
  },
  {
    title: 'Materialanalyse',
    desc: 'Falls erforderlich, koordinieren qualifizierte Fachpartner die Probenahme und Laboranalyse.',
    icon: Microscope,
  },
  {
    title: 'Sanierungsplanung',
    desc: 'Auf Grundlage der Untersuchungsergebnisse werden Schutzmaßnahmen, Rückbau, Entsorgung und Wiederherstellung geplant.',
    icon: ClipboardList,
  },
  {
    title: 'Fachgerechte Durchführung',
    desc: 'Qualifizierte Fachunternehmen führen die gesetzlich geregelten Arbeiten entsprechend den geltenden Anforderungen aus.',
    icon: ShieldCheck,
  },
  {
    title: 'Abschluss und Wiederherstellung',
    desc: 'Nach Abschluss der Sanierung koordinieren wir Reinigung, Dokumentation und den anschließenden Wiederaufbau.',
    icon: CircleCheckBig,
  },
];

const schutzCards = [
  {
    title: 'Abschottung',
    desc: 'Sanierungsbereiche werden räumlich getrennt, um angrenzende Gebäudeteile während der Arbeiten zu schützen.',
    icon: PanelTopClose,
  },
  {
    title: 'Unterdrucktechnik',
    desc: 'Je nach Verfahren kommen Unterdruckgeräte und geeignete Filtersysteme zum Einsatz.',
    icon: Wind,
  },
  {
    title: 'Persönliche Schutzausrüstung',
    desc: 'Die ausführenden Fachkräfte verwenden eine dem jeweiligen Arbeitsverfahren angepasste Schutzausrüstung.',
    icon: HardHat,
  },
  {
    title: 'Materialschleusen',
    desc: 'Materialien werden kontrolliert aus den Sanierungsbereichen transportiert.',
    icon: DoorOpen,
  },
  {
    title: 'Sichere Verpackung',
    desc: 'Ausgebaute Baustoffe werden ordnungsgemäß verpackt und gekennzeichnet.',
    icon: PackageCheck,
  },
  {
    title: 'Dokumentierte Entsorgung',
    desc: 'Die Entsorgung erfolgt über zugelassene Entsorgungswege und wird nachvollziehbar dokumentiert.',
    icon: FileCheck2,
  },
];

const nutzungsCards = [
  {
    title: 'Bürogebäude',
    desc: 'Asbesthaltige Baustoffe werden häufig im Rahmen von Modernisierungen oder Mieterausbauten entdeckt.',
    icon: Briefcase,
  },
  {
    title: 'Gewerbeimmobilien',
    desc: 'Bei Produktions-, Lager- oder Verwaltungsgebäuden werden Sanierung und spätere Ausbauarbeiten eng aufeinander abgestimmt.',
    icon: Warehouse,
  },
  {
    title: 'Wohngebäude',
    desc: 'In Bestandsimmobilien erfolgt die Sanierung entsprechend der jeweiligen Gebäudesituation und den erforderlichen Schutzmaßnahmen.',
    icon: House,
  },
  {
    title: 'Öffentliche Gebäude',
    desc: 'Schulen, Verwaltungsgebäude oder kommunale Einrichtungen benötigen eine besonders sorgfältige Projektplanung und Dokumentation.',
    icon: Landmark,
  },
];

const radexLiveProjects = [
  {
    image: '/img/sanierung-service-altbau.webp',
    badge: 'LIVE',
    title: 'Asbestsanierung Gewerbeobjekt',
    location: 'Hanau',
    desc: 'Koordinierte Sanierung mit Abschottung, kontrolliertem Rückbau und Vorbereitung für den Folgeausbau.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'Abgeschlossen',
    title: 'Asbestsanierung Bestandswohnung',
    location: 'Frankfurt am Main',
    desc: 'Probenahme, Schutzmaßnahmen und Rückbau asbesthaltiger Baustoffe mit anschließender Wiederherstellung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gu-card-altbau.png',
    badge: 'Vorher & Nachher',
    title: 'Asbestrückbau Bestandsgebäude',
    location: 'Darmstadt',
    desc: 'Fachgerechter Rückbau und dokumentierte Entsorgung durch qualifizierte Partner in einem Altbau.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/wohnzimmer.webp',
    badge: 'Abgeschlossen',
    title: 'Innenausbau nach Asbestsanierung',
    location: 'Offenbach am Main',
    desc: 'Trockenbau, Malerarbeiten und Bodenbeläge nach abgeschlossener Sanierung in einer Bestandswohnung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Asbestsanierung Gewerbeimmobilie',
    location: 'Rodgau',
    desc: 'Koordinierte Sanierung mit Abschottung, Rückbau und Wiederherstellung in einem Gewerbeobjekt.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buero2.webp',
    badge: 'Video',
    title: 'Baustelleneinblick Asbestsanierung',
    location: 'Dreieich',
    desc: 'Authentischer Einblick in Abschottung, kontrollierten Rückbau und Wiederherstellung auf einer echten Baustelle.',
    cta: 'Video ansehen',
  },
];

const faqsData = [
  {
    q: 'Wie läuft eine Asbestsanierung ab?',
    a: 'Zunächst werden Situation und geplante Arbeiten besprochen. Verdächtige Baustoffe werden dokumentiert und bei Bedarf durch qualifizierte Fachpartner untersucht. Auf dieser Grundlage werden Schutzmaßnahmen, Rückbau, Entsorgung und Wiederherstellung geplant und koordiniert.',
  },
  {
    q: 'Kann man Asbest am Aussehen erkennen?',
    a: 'Viele asbesthaltige Baustoffe sind äußerlich nicht eindeutig erkennbar. Baujahr, Materialart und Einbausituation liefern erste Hinweise. Eine sichere Beurteilung ist nur durch geeignete Untersuchungen möglich.',
  },
  {
    q: 'Wer führt die Asbestsanierung durch?',
    a: 'Gesetzlich geregelte Arbeiten werden von entsprechend qualifizierten Fachbetrieben durchgeführt. Radex koordiniert Untersuchung, Schutzmaßnahmen, Rückbau, Entsorgung und die anschließende Wiederherstellung.',
  },
  {
    q: 'Was passiert nach der Asbestsanierung?',
    a: 'Nach Abschluss der Sanierungsarbeiten werden die Arbeitsbereiche gereinigt und kontrolliert. Auf Wunsch übernimmt Radex den vollständigen Wiederaufbau der betroffenen Räume oder Gewerbeflächen.',
  },
  {
    q: 'In welchen Gebäuden tritt Asbest häufig auf?',
    a: 'Asbesthaltige Baustoffe können in älteren Bodenaufbauten, Fassadensystemen, Dacheindeckungen, Rohrisolierungen und technischen Anlagen vorkommen. Vor Umbau- oder Rückbauarbeiten sollte eine fachgerechte Bewertung erfolgen.',
  },
];

const videoTranscript =
  'Asbest lässt sich häufig nicht sicher mit bloßem Auge erkennen. Deshalb beginnt jedes Projekt mit einer sorgfältigen Bestandsaufnahme und – falls erforderlich – einer Materialanalyse. Anschließend koordinieren wir gemeinsam mit qualifizierten Fachunternehmen die Schutzmaßnahmen, den Rückbau, die Entsorgung und den vollständigen Wiederaufbau der betroffenen Bereiche.';

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Wie läuft eine Asbestsanierung ab?',
  description:
    'Bernd erklärt, warum eine fachgerechte Untersuchung vor dem Rückbau wichtig ist und wie Untersuchung, Schutzmaßnahmen, Sanierung und Wiederherstellung sinnvoll aufeinander abgestimmt werden.',
  thumbnailUrl: `${SITE_URL}${VIDEO_POSTER}`,
  duration: 'PT2M',
  inLanguage: 'de',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const seoTocSections = [...asbestsanierungSeoSections, ...asbestsanierungSeoLinkSections];

export default function AsbestsanierungLanding() {
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
        name: 'Asbestsanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
      videoSchema,
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page asbestsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/schimmel-asbest-sanierung-rhein-main">Schimmel &amp; Asbest</Link>
              <span aria-hidden="true">↓</span>
              <span>Asbestsanierung</span>
            </nav>
            <p className="br-hero-kicker">
              <TriangleAlert size={16} strokeWidth={1.5} aria-hidden="true" /> Asbestsanierung · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Asbestsanierung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Professionelle Planung, Koordination und fachgerechte Sanierung asbesthaltiger Baustoffe – von der
              Bestandsaufnahme bis zur Wiederherstellung.
            </p>
            <p className="br-hero-text">
              Asbest wurde über viele Jahrzehnte in zahlreichen Baustoffen verwendet und ist heute noch in vielen
              Bestandsgebäuden vorhanden. Vor Umbau-, Rückbau- oder Sanierungsarbeiten sollte deshalb geprüft werden, ob
              betroffene Materialien vorhanden sind.
            </p>
            <p className="br-hero-text">
              Radex begleitet Eigentümer, Unternehmen und Hausverwaltungen während des gesamten Projekts. Gemeinsam mit
              qualifizierten Fachpartnern koordinieren wir Untersuchung, Schutzmaßnahmen, Rückbau, Entsorgung und den
              anschließenden Wiederaufbau.
            </p>
            <AsbestsanierungCTA isHero />
            <p className="br-hero-micro" style={{ marginTop: '16px' }}>
              {TRUST_LINE}
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Professionelle Asbestsanierung in einem Gebäude im Rhein-Main-Gebiet."
          title="Fachgerecht abgeschotteter Arbeitsbereich während einer Asbestsanierung mit Schutzkleidung, Unterdrucktechnik und gesicherten Arbeitsbereichen."
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Asbest fachgerecht erkennen und sanieren</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Asbesthaltige Baustoffe lassen sich häufig nicht sicher anhand ihres Aussehens erkennen. Erst eine
              fachgerechte Untersuchung kann klären, ob tatsächlich eine Belastung vorliegt und welche Maßnahmen
              erforderlich sind.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex unterstützt bei der Organisation des gesamten Projekts – von der ersten Bestandsaufnahme über die
              Koordination qualifizierter Fachunternehmen bis zur Wiederherstellung der betroffenen Räume nach Abschluss
              der Sanierung.
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
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen im Bereich Asbestsanierung – von der
        Untersuchung bis zur Wiederherstellung.
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
        Asbesthaltige Baustoffe können in unterschiedlichen Bauteilen vorkommen – eine fachgerechte Bewertung ist dabei
        unverzichtbar. Materialien lassen sich nicht zuverlässig allein anhand des Aussehens identifizieren.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Einsatzbereiche</h2>
          </div>
          <PremiumIconCards cards={einsatzbereichCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Einschätzung bis zur
        Wiederherstellung der betroffenen Bereiche.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstberatung bis zur Wiederherstellung – so koordinieren wir Asbestsanierungen Schritt für Schritt."
        steps={processSteps}
      />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Schutzmaßnahmen</h2>
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
            <PremiumIconCards cards={nutzungsCards} largeIcons />
          </div>
        </div>
      </section>

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ihre Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Das Team Asbestsanierung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleitung begleitet Eigentümer, Unternehmen und Hausverwaltungen während des gesamten Projekts.
              Wir koordinieren Sachverständige, qualifizierte Fachunternehmen, Entsorgung sowie die anschließende
              Wiederherstellung der betroffenen Bereiche.
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
              <p>Fotos der betroffenen Bereiche senden und eine erste unverbindliche Einschätzung erhalten.</p>
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
        title="Wie läuft eine Asbestsanierung ab?"
        description="Bernd erklärt, warum eine fachgerechte Untersuchung vor dem Rückbau wichtig ist und wie Untersuchung, Schutzmaßnahmen, Sanierung und Wiederherstellung sinnvoll aufeinander abgestimmt werden."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt den Ablauf einer professionellen Asbestsanierung im Rhein-Main-Gebiet."
        duration="ca. 2 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Asbestverdacht in Ihrem Gebäude?</h2>
            <p>
              Senden Sie uns Fotos und Informationen zu Ihrem Objekt. Wir besprechen die nächsten sinnvollen Schritte und
              koordinieren bei Bedarf Untersuchung, Sanierung, Entsorgung und die anschließende Wiederherstellung.
            </p>
            <AsbestsanierungCTA centered />
          </div>
        </div>
      </section>

      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Asbestsanierung"
        intro={asbestsanierungSeoIntro}
        sections={seoTocSections}
        ctaLabel="Kostenlose Erstberatung"
        ctaHref="#kontakt"
        panelId="asbestsanierung-seo-panel"
        showToc
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Asbestsanierungen"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Asbestsanierung, Rückbau, Innenausbau nach Sanierung, Gewerbeobjekte und Bestandsgebäude."
        projects={radexLiveProjects}
      />
    </main>
  );
}
