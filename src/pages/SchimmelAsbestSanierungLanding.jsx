import { useEffect } from 'react';
import {
  ShieldAlert,
  FlaskConical,
  TriangleAlert,
  Droplets,
  SearchCheck,
  UsersRound,
  ShieldCheck,
  Network,
  FileCheck2,
  Building2,
  BadgeEuro,
  UserRound,
  CalendarCheck,
  Workflow,
  MessagesSquare,
  Layers3,
  Microscope,
  Waves,
  Flame,
  TestTubeDiagonal,
  PaintRoller,
  PhoneCall,
  Search,
  ClipboardList,
  CircleCheckBig,
  PanelTopClose,
  Wind,
  HardHat,
  PackageCheck,
  BadgeCheck,
  Phone,
  Mail,
  MessageCircle,
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
  schimmelAsbestSanierungSeoIntro,
  schimmelAsbestSanierungSeoSections,
} from '../data/schimmelAsbestSanierungSeoContent';

const PAGE_PATH = '/schimmel-asbest-sanierung-rhein-main';
const HERO_IMAGE = '/img/schimmel-asbest-sanierung-rhein-main-radex.webp';
const VIDEO_POSTER = '/img/bernd-schimmel-asbest-sanierung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Schimmel- & Asbestsanierung Rhein-Main | Schadstoffe sicher beseitigen';
const META_DESCRIPTION =
  'Schimmel-, Asbest- und Schadstoffsanierung im Rhein-Main-Gebiet. Radex koordiniert Analyse, Abschottung, fachgerechte Sanierung und Wiederherstellung.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Leistungen', path: '/leistungen' },
  { name: 'Schimmel & Asbest', path: PAGE_PATH },
];

const TRUST_LINE = 'Koordinierte Abläufe · Qualifizierte Fachpartner · Transparente Dokumentation';

function SchimmelAsbestCTA({ isHero = false, centered = false }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href="#kontakt" className="btn br-btn-orange">
        Kostenlose Erstberatung
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn br-btn-outline-orange"
      >
        Fotos per WhatsApp senden
      </a>
    </div>
  );
}

const leistungsbereicheCards = [
  {
    title: 'Schadstoffsanierung',
    desc: 'Gebäudeschadstoffe wie künstliche Mineralfasern, PCB, PAK oder belastete Klebstoffe benötigen eine eindeutige Bewertung und ein abgestimmtes Sanierungskonzept.',
    icon: FlaskConical,
    to: '/schadstoffsanierung-rhein-main',
    cta: 'Zur Schadstoffsanierung',
  },
  {
    title: 'Asbestsanierung',
    desc: 'Bei einem Asbestverdacht dürfen belastete Materialien nicht unkontrolliert bearbeitet werden. Radex koordiniert Probenahme, Schutzmaßnahmen, fachgerechten Rückbau und dokumentierte Entsorgung mit entsprechend qualifizierten Partnern.',
    icon: TriangleAlert,
    to: '/asbestsanierung-rhein-main',
    cta: 'Zur Asbestsanierung',
  },
  {
    title: 'Schimmelsanierung',
    desc: 'Eine nachhaltige Schimmelsanierung berücksichtigt nicht nur den sichtbaren Befall, sondern auch die zugrunde liegende Feuchteursache und den betroffenen Bauteilaufbau.',
    icon: Droplets,
    to: '/schimmelsanierung-rhein-main',
    cta: 'Zur Schimmelsanierung',
  },
];

const whyRadexCards = [
  {
    title: 'Strukturierte Bestandsaufnahme',
    desc: 'Wir erfassen die sichtbaren Schäden, prüfen die Rahmenbedingungen und koordinieren bei Bedarf weiterführende Untersuchungen.',
    icon: SearchCheck,
  },
  {
    title: 'Qualifizierte Fachpartner',
    desc: 'Spezialisierte Leistungen werden durch entsprechend qualifizierte Sachverständige, Labore und Sanierungsunternehmen ausgeführt.',
    icon: UsersRound,
  },
  {
    title: 'Abgestimmte Schutzmaßnahmen',
    desc: 'Abschottung, Unterdruckhaltung und weitere Schutzmaßnahmen werden auf die jeweilige Belastung und Nutzung des Gebäudes abgestimmt.',
    icon: ShieldCheck,
  },
  {
    title: 'Koordination aller Beteiligten',
    desc: 'Radex verbindet Untersuchung, Sanierung, Entsorgung und Wiederherstellung zu einem klar organisierten Projektablauf.',
    icon: Network,
  },
  {
    title: 'Nachvollziehbare Dokumentation',
    desc: 'Projektfortschritt, ausgeführte Maßnahmen und relevante Nachweise werden transparent dokumentiert.',
    icon: FileCheck2,
  },
  {
    title: 'Sanierung und Wiederherstellung',
    desc: 'Nach dem Rückbau koordinieren wir auf Wunsch auch den fachgerechten Wiederaufbau der betroffenen Räume und Bauteile.',
    icon: Building2,
  },
];

const qualityCards = [
  {
    title: 'Festpreisgarantie',
    desc: 'Vereinbarte Leistungen werden transparent kalkuliert und bilden eine verlässliche Grundlage für Ihre Projektplanung.',
    icon: BadgeEuro,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Eine zentrale Projektleitung begleitet Sie von der ersten Einschätzung bis zur abgeschlossenen Wiederherstellung.',
    icon: UserRound,
  },
  {
    title: 'Termingerechte Umsetzung',
    desc: 'Untersuchung, Sanierung und Folgearbeiten werden in einem realistischen und abgestimmten Zeitplan organisiert.',
    icon: CalendarCheck,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Fachgutachter, Labor, Sanierungsbetrieb, Entsorgung und Ausbaugewerke werden zentral koordiniert.',
    icon: Workflow,
  },
  {
    title: 'Geprüfte Qualität',
    desc: 'Die vereinbarten Arbeiten werden kontrolliert und erforderliche Nachweise werden projektbezogen berücksichtigt.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie erhalten verständliche Informationen zu Befund, Vorgehen, Kosten, Terminen und dem aktuellen Projektstand.',
    icon: MessagesSquare,
  },
];

const leistungenCards = [
  {
    title: 'Schadstoffsanierung',
    desc: 'Wir koordinieren die Untersuchung und Sanierung schadstoffbelasteter Baustoffe und Innenräume. Dazu gehören je nach Befund unter anderem PAK, PCB, künstliche Mineralfasern, belastete Klebstoffe oder weitere Gebäudeschadstoffe.',
    icon: FlaskConical,
    to: '/schadstoffsanierung-rhein-main',
    cta: 'Mehr zur Schadstoffsanierung',
  },
  {
    title: 'Asbestsanierung',
    desc: 'Bei einem Asbestverdacht organisieren wir die fachgerechte Bewertung, sichere Abschottung, kontrollierte Entfernung und dokumentierte Entsorgung durch entsprechend qualifizierte Fachbetriebe.',
    icon: TriangleAlert,
    to: '/asbestsanierung-rhein-main',
    cta: 'Mehr zur Asbestsanierung',
  },
  {
    title: 'Schimmelsanierung',
    desc: 'Wir begleiten die fachgerechte Beseitigung von Schimmelbefall und berücksichtigen dabei sowohl die betroffenen Bauteile als auch die zugrunde liegenden Feuchteursachen.',
    icon: Droplets,
    to: '/schimmelsanierung-rhein-main',
    cta: 'Mehr zur Schimmelsanierung',
  },
];

const schadstoffCards = [
  {
    title: 'Asbesthaltige Baustoffe',
    desc: 'Asbest kann in älteren Bodenbelägen, Klebstoffen, Brandschutzprodukten, Fassadenelementen, Dichtungen und weiteren Baustoffen enthalten sein. Eine eindeutige Bewertung ist nur durch eine qualifizierte Untersuchung möglich.',
    icon: Layers3,
  },
  {
    title: 'Schimmel und mikrobielle Belastungen',
    desc: 'Schimmel entsteht häufig durch erhöhte Feuchtigkeit, Leckagen, Wärmebrücken oder unzureichende Trocknung. Für eine nachhaltige Sanierung muss die Ursache geklärt werden.',
    icon: Microscope,
  },
  {
    title: 'Künstliche Mineralfasern',
    desc: 'Ältere Dämmstoffe können lungengängige Fasern freisetzen. Rückbau und Entsorgung müssen abhängig vom Material und Baujahr mit geeigneten Schutzmaßnahmen erfolgen.',
    icon: Waves,
  },
  {
    title: 'PAK-haltige Materialien',
    desc: 'Polyzyklische aromatische Kohlenwasserstoffe können unter anderem in älteren Klebstoffen, Abdichtungen und teerhaltigen Baustoffen vorkommen.',
    icon: Flame,
  },
  {
    title: 'PCB-Belastungen',
    desc: 'PCB wurde früher unter anderem in Fugendichtungen, Beschichtungen und technischen Anwendungen eingesetzt. Belastete Bereiche benötigen eine fachgerechte Bewertung und Sanierungsplanung.',
    icon: TestTubeDiagonal,
  },
  {
    title: 'Belastete Klebstoffe und Beschichtungen',
    desc: 'Alte Klebstoffe, Spachtelmassen und Beschichtungen können schadstoffhaltige Bestandteile enthalten. Vor dem Rückbau empfiehlt sich eine gezielte Materialprüfung.',
    icon: PaintRoller,
  },
];

const processSteps = [
  {
    title: 'Erstkontakt und Situationserfassung',
    desc: 'Wir erfassen die Art des Objekts, die sichtbaren Auffälligkeiten, bekannte Vorschäden und die geplante Nutzung der betroffenen Bereiche.',
    icon: PhoneCall,
  },
  {
    title: 'Besichtigung und Bestandsaufnahme',
    desc: 'Die betroffenen Räume und Bauteile werden vor Ort geprüft. Verdächtige Materialien werden dokumentiert und für weitere Untersuchungen eingegrenzt.',
    icon: Search,
  },
  {
    title: 'Probenahme und Analyse',
    desc: 'Falls erforderlich, koordinieren qualifizierte Fachleute die Probenahme und Untersuchung durch ein geeignetes Labor.',
    icon: Microscope,
  },
  {
    title: 'Sanierungs- und Schutzkonzept',
    desc: 'Auf Grundlage des Befunds werden Arbeitsbereiche, Schutzmaßnahmen, Rückbauverfahren, Entsorgung und Wiederherstellung geplant.',
    icon: ClipboardList,
  },
  {
    title: 'Fachgerechte Sanierung',
    desc: 'Die Arbeiten erfolgen durch entsprechend qualifizierte Fachbetriebe unter Berücksichtigung der notwendigen Schutz- und Dokumentationsmaßnahmen.',
    icon: ShieldCheck,
  },
  {
    title: 'Kontrolle und Wiederherstellung',
    desc: 'Nach Abschluss der Sanierung werden die betroffenen Bereiche kontrolliert und anschließend für die weitere Nutzung wiederhergestellt.',
    icon: CircleCheckBig,
  },
];

const schutzCards = [
  {
    title: 'Abschottung der Arbeitsbereiche',
    desc: 'Sanierungsbereiche werden abhängig von Art und Umfang der Belastung räumlich von anderen Gebäudebereichen getrennt.',
    icon: PanelTopClose,
  },
  {
    title: 'Unterdruckhaltung und Luftreinigung',
    desc: 'Geeignete Geräte können verhindern, dass belastete Stäube oder Partikel unkontrolliert in angrenzende Räume gelangen.',
    icon: Wind,
  },
  {
    title: 'Persönliche Schutzausrüstung',
    desc: 'Die eingesetzten Fachkräfte verwenden eine auf die jeweilige Belastung abgestimmte Schutz- und Arbeitsausrüstung.',
    icon: HardHat,
  },
  {
    title: 'Kontrollierter Materialtransport',
    desc: 'Ausgebaute Materialien werden sicher verpackt, gekennzeichnet und nach den geltenden Vorgaben transportiert.',
    icon: PackageCheck,
  },
  {
    title: 'Dokumentierte Entsorgung',
    desc: 'Die Entsorgung schadstoffbelasteter Materialien erfolgt über geeignete und zugelassene Entsorgungswege.',
    icon: FileCheck2,
  },
  {
    title: 'Freigabe und Abschlusskontrolle',
    desc: 'Je nach Sanierungsverfahren können Sichtkontrollen, Reinigungsnachweise oder weiterführende Messungen erforderlich sein.',
    icon: BadgeCheck,
  },
];

const radexLiveProjects = [
  {
    image: '/img/sanierung-service-haus.webp',
    badge: 'LIVE',
    title: 'Schimmelsanierung nach Wasserschaden',
    location: 'Offenbach am Main',
    desc: 'Ursachenklärung, Trocknung und fachgerechte Beseitigung mikrobieller Belastungen – laufendes Projekt.',
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
    title: 'Asbestsanierung Altbau',
    location: 'Darmstadt',
    desc: 'Fachgerechte Entfernung asbesthaltiger Bodenbeläge und dokumentierte Entsorgung durch qualifizierte Partner.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/renov1.webp',
    badge: 'Abgeschlossen',
    title: 'Trocknung und Wiederaufbau',
    location: 'Rodgau',
    desc: 'Technische Trocknung nach Wasserschaden und anschließender Innenausbau der betroffenen Bereiche.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/buero1.webp',
    badge: 'LIVE',
    title: 'Schadstoffsanierung Gewerbeobjekt',
    location: 'Hanau',
    desc: 'Abschnittsweise Sanierung mit Abschottung, Rückbau und Vorbereitung für den Folgeausbau.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnzimmer.webp',
    badge: 'Video',
    title: 'Baustelleneinblick Schadstoffsanierung',
    location: 'Dreieich',
    desc: 'Authentischer Einblick in Abschottung, kontrollierten Rückbau und Wiederherstellung auf einer echten Baustelle.',
    cta: 'Video ansehen',
  },
];

const videoTranscript =
  'Bei einem Verdacht auf Schimmel, Asbest oder andere Gebäudeschadstoffe sollte das betroffene Material zunächst nicht weiter bearbeitet werden. Im ersten Schritt wird geklärt, welche Bauteile betroffen sind und ob eine Probenahme notwendig ist. Auf Grundlage der Ergebnisse planen wir gemeinsam mit qualifizierten Fachpartnern die Schutzmaßnahmen, die Sanierung und die anschließende Wiederherstellung.';

const faqsData = [
  {
    q: 'Wann ist eine Schadstoffuntersuchung sinnvoll?',
    a: 'Vor umfangreichen Rückbau-, Umbau- oder Sanierungsarbeiten in älteren Gebäuden sollte geprüft werden, ob schadstoffverdächtige Materialien vorhanden sein könnten. Auch nach Wasserschäden oder bei sichtbarem Schimmelbefall ist eine fachliche Einschätzung der nächsten Schritte sinnvoll.',
  },
  {
    q: 'Wer führt Probenahme und Laboranalysen durch?',
    a: 'Probenahme und Laboranalysen werden durch entsprechend qualifizierte Fachpartner durchgeführt. Radex koordiniert die Untersuchung und stimmt das weitere Vorgehen auf die geplanten Bau- oder Sanierungsarbeiten ab.',
  },
  {
    q: 'Was passiert bei einem Asbestverdacht?',
    a: 'Verdächtige Materialien sollten zunächst nicht weiter bearbeitet werden. Nach einer fachgerechten Bewertung werden bei Bedarf Schutzmaßnahmen, kontrollierter Rückbau und dokumentierte Entsorgung durch qualifizierte Fachbetriebe organisiert.',
  },
  {
    q: 'Wie läuft eine Schimmelsanierung ab?',
    a: 'Eine nachhaltige Schimmelsanierung beginnt mit der Klärung der Feuchteursache. Anschließend werden betroffene Bauteile bewertet, gegebenenfalls getrocknet und fachgerecht saniert. Radex koordiniert die einzelnen Schritte bis zur Wiederherstellung.',
  },
  {
    q: 'Koordiniert Radex auch die Wiederherstellung nach der Sanierung?',
    a: 'Ja. Auf Wunsch integrieren wir Ausbau- und Renovierungsarbeiten direkt in den Projektablauf, damit Verantwortlichkeiten, Termine und Schnittstellen übersichtlich bleiben.',
  },
  {
    q: 'In welchem Gebiet ist Radex tätig?',
    a: 'Radex begleitet Schimmel- und Schadstoffsanierungen im gesamten Rhein-Main-Gebiet – unter anderem in Frankfurt, Offenbach, Darmstadt, Hanau, Rodgau und über 60 weiteren Gemeinden.',
  },
];

const seoTocSections = [...schimmelAsbestSanierungSeoSections];

const weiterfuehrendeLeistungenCards = [
  {
    title: 'Schadstoffsanierung Rhein-Main',
    desc: 'Untersuchung, Planung und koordinierte Sanierung unterschiedlicher Gebäudeschadstoffe.',
    icon: FlaskConical,
    to: '/schadstoffsanierung-rhein-main',
    cta: 'Zur Schadstoffsanierung',
  },
  {
    title: 'Asbestsanierung Rhein-Main',
    desc: 'Fachgerechte Bewertung und Sanierung asbesthaltiger Baustoffe mit qualifizierten Partnern.',
    icon: TriangleAlert,
    to: '/asbestsanierung-rhein-main',
    cta: 'Zur Asbestsanierung',
  },
  {
    title: 'Schimmelsanierung Rhein-Main',
    desc: 'Ursachenorientierte Beseitigung von Schimmelbefall und Wiederherstellung betroffener Räume.',
    icon: Droplets,
    to: '/schimmelsanierung-rhein-main',
    cta: 'Zur Schimmelsanierung',
  },
  {
    title: 'Gewerbe- und Objektsanierung Rhein-Main',
    desc: 'Innenausbau und Wiederherstellung von Gewerbeimmobilien nach abgeschlossenen Sanierungsarbeiten.',
    icon: Building2,
    to: '/gewerbe-objektsanierung-rhein-main',
    cta: 'Zur Objektsanierung',
  },
];

export default function SchimmelAsbestSanierungLanding() {
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
        name: 'Schimmel- und Asbestsanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page schimmel-asbest-sanierung-page">
      {/* Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/leistungen">Leistungen</Link>
              <span aria-hidden="true">↓</span>
              <span>Schimmel & Asbest</span>
            </nav>
            <p className="br-hero-kicker">
              <ShieldAlert size={16} strokeWidth={1.5} aria-hidden="true" /> Schimmel & Asbest · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Schimmel- und Asbestsanierung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Radex koordiniert die fachgerechte Untersuchung, Schadstoffsanierung und Wiederherstellung belasteter
              Gebäude und Innenräume.
            </p>
            <p className="br-hero-text">
              Schimmel, Asbest und andere Gebäudeschadstoffe erfordern ein strukturiertes Vorgehen. Entscheidend sind eine
              belastbare Bewertung, geeignete Schutzmaßnahmen und eine fachgerechte Ausführung nach den geltenden
              Vorgaben.
            </p>
            <p className="br-hero-text">
              Radex begleitet Eigentümer, Hausverwaltungen und Unternehmen von der ersten Bestandsaufnahme über die
              Koordination qualifizierter Fachbetriebe bis zur Wiederherstellung der betroffenen Bereiche.
            </p>
            <SchimmelAsbestCTA isHero />
            <p className="br-hero-micro" style={{ marginTop: '16px' }}>
              {TRUST_LINE}
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Fachgerecht abgeschotteter Bereich bei einer Schimmel- und Asbestsanierung im Rhein-Main-Gebiet"
          title="Schimmel- und Asbestsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      {/* Einleitung */}
      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Schadstoffbelastungen erkennen, eingrenzen und fachgerecht sanieren</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Schadstoffe in Gebäuden sind nicht immer direkt sichtbar. Schimmel kann sich hinter Wandverkleidungen, unter
              Bodenbelägen oder innerhalb von Dämmkonstruktionen ausbreiten. Asbesthaltige Materialien befinden sich häufig
              in älteren Bodenbelägen, Klebstoffen, Fassadenelementen, Brandschutzprodukten oder technischen Bauteilen.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Vor Beginn einer Sanierung muss deshalb geklärt werden, welche Materialien betroffen sind und welche Maßnahmen
              erforderlich sind. Radex organisiert die einzelnen Projektschritte und sorgt dafür, dass Untersuchung,
              Schutzmaßnahmen, Rückbau, Entsorgung und Wiederherstellung aufeinander abgestimmt werden.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Unsere Leistungen im Überblick:{' '}
              <Link to="/schadstoffsanierung-rhein-main">Schadstoffsanierung Rhein-Main</Link>
              {' · '}
              <Link to="/asbestsanierung-rhein-main">Asbestsanierung Rhein-Main</Link>
              {' · '}
              <Link to="/schimmelsanierung-rhein-main">Schimmelsanierung Rhein-Main</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Leistungsbereiche */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Leistungsbereiche</h2>
          </div>
          <div className="br-leistungen-grid-three">
            <PremiumIconCards cards={leistungsbereicheCards} linked largeIcons />
          </div>
        </div>
      </section>

      {/* Warum Radex */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} largeIcons />
        </div>
      </section>

      {/* Qualitätsversprechen */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Qualitätsversprechen</h2>
          </div>
          <PremiumIconCards cards={qualityCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen bei Schimmel-, Asbest- und
        Schadstoffsanierung – von der Untersuchung bis zur Wiederherstellung.
      </SectionTransition>

      {/* Unsere Leistungen */}
      <section id="leistungen" className="br-section br-bg-light">
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
        Schimmel, Asbest und weitere Gebäudeschadstoffe treten in unterschiedlichen Materialien und Bauteilen auf – eine
        fachgerechte Bewertung ist dabei unverzichtbar.
      </SectionTransition>

      {/* Typische Schadstoffe */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Schadstoffe und Belastungen</h2>
          </div>
          <PremiumIconCards cards={schadstoffCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Einschätzung bis zur
        Wiederherstellung der betroffenen Bereiche.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstkontaktaufnahme bis zur Wiederherstellung – so koordinieren wir Schimmel- und Schadstoffsanierungen Schritt für Schritt."
        steps={processSteps}
      />

      {/* Sicherheit und Schutzmaßnahmen */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Sicherheit und Schutzmaßnahmen</h2>
          </div>
          <PremiumIconCards cards={schutzCards} largeIcons />
        </div>
      </section>

      {/* Ansprechpartner */}
      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ihre Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Das Team Schimmel- und Schadstoffsanierung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleitung begleitet Eigentümer, Hausverwaltungen und Unternehmen bei der Untersuchung und
              Sanierung belasteter Gebäude. Sie erhalten eine zentrale Ansprechstelle für die Koordination von
              Fachgutachtern, Laboren, Sanierungsbetrieben, Entsorgung und Wiederherstellung.
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
        title="Was tun bei Schimmel- oder Asbestverdacht?"
        description="Bernd erklärt, warum verdächtige Baustoffe nicht eigenständig bearbeitet werden sollten, wie eine fachgerechte Untersuchung abläuft und welche Schritte bis zur sicheren Sanierung erforderlich sind."
        poster={VIDEO_POSTER}
        posterAlt="Erklärung zum Ablauf einer Schimmel- und Asbestsanierung im Rhein-Main-Gebiet"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      {/* CTA */}
      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Verdacht auf Schimmel, Asbest oder andere Schadstoffe?</h2>
            <p>
              Senden Sie uns erste Informationen und Fotos der betroffenen Bereiche. Wir besprechen die nächsten
              sinnvollen Schritte und koordinieren bei Bedarf Untersuchung, Sanierung und Wiederherstellung.
            </p>
            <SchimmelAsbestCTA centered />
          </div>
        </div>
      </section>

      {/* SEO Leistungsbereich mit sticky Inhaltsverzeichnis */}
      <SeoTocSection
        title="Unsere Leistungen im Bereich Schimmel- und Schadstoffsanierung"
        intro={schimmelAsbestSanierungSeoIntro}
        sections={seoTocSections}
        showAllContent
        panelId="schimmel-asbest-sanierung-seo-panel"
        ctaLabel="Kostenlose Beratung"
      />

      {/* Weiterführende Leistungen */}
      <section className="br-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center mb-10">
            <h2 className="br-section-title">Weiterführende Leistungen</h2>
          </div>
          <PremiumIconCards cards={weiterfuehrendeLeistungenCards} linked largeIcons />
        </div>
      </section>

      <RadexLiveSection
        title="Radex Live – Einblicke in Schimmel- und Schadstoffsanierungen"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Schimmelsanierung, Schadstoffsanierung, Rückbau, Trocknung und Wiederherstellung."
        projects={radexLiveProjects}
      />
    </main>
  );
}
