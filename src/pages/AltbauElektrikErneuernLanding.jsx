import { useEffect } from 'react';
import {
  Building2,
  Cable,
  CircuitBoard,
  Plug,
  Lightbulb,
  Network,
  HousePlus,
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
  Zap,
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
  ResponsiveChecklistSection,
  BerndExplainsVideo,
  FaqAccordion,
  MoneyPageQualityGrid,
} from '../components/landing/SharedLandingParts';
import {
  altbauElektrikSeoIntro,
  altbauElektrikSeoSections,
  altbauElektrikSeoLinkSections,
} from '../data/altbauElektrikSeoContent';
import { altbauElektrikLegacySections } from '../data/altbauElektrikLegacyContent';

const PAGE_PATH = '/altbau-elektrik-erneuern-rhein-main';
const HERO_IMAGE = '/img/altbau-elektrik-erneuern-rhein-main.webp';
const HERO_IMAGE_FALLBACK = '/img/elektroinstallation-rhein-main.webp';
const VIDEO_POSTER = '/img/bernd-altbau-elektrik-erneuern-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Altbau Elektrik erneuern Rhein-Main | Elektroanlage modernisieren | Radex';
const META_DESCRIPTION =
  'Altbau Elektrik erneuern im Rhein-Main-Gebiet. Moderne Elektroanlagen für mehr Sicherheit, Komfort und Zukunftssicherheit in Bestandsimmobilien.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Elektrotechnik', path: '/elektrotechnik-gebaeudetechnik' },
  { name: 'Altbau Elektrik erneuern', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Individuelle Bestandsanalyse',
  'Ein Ansprechpartner',
  'Koordination qualifizierter Elektrofachbetriebe',
  'Moderne Sicherheitsstandards',
  'Rhein-Main-Gebiet',
];

function AltbauElektrikCTA({ isHero = false, centered = false, primaryLabel = 'Kostenlose Beratung' }) {
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

const modernizationChecklistItems = [
  'die Elektroinstallation mehrere Jahrzehnte alt ist',
  'nur wenige Steckdosen vorhanden sind',
  'häufig Mehrfachsteckdosen genutzt werden',
  'Sicherungen regelmäßig auslösen',
  'Leitungen sichtbar beschädigt sind',
  'umfangreiche Umbauten geplant werden',
  'moderne Geräte oder zusätzliche Stromkreise benötigt werden',
  'die Immobilie energetisch oder technisch modernisiert wird',
];

const whyRadexCards = [
  {
    title: 'Individuelle Bestandsaufnahme',
    desc: 'Jede Immobilie wird sorgfältig analysiert, um den tatsächlichen Modernisierungsbedarf zu bestimmen.',
    icon: SearchCheck,
  },
  {
    title: 'Koordination qualifizierter Elektrofachbetriebe',
    desc: 'Die Erneuerung der Elektroinstallation wird mit erfahrenen Fachbetrieben abgestimmt und koordiniert.',
    icon: Workflow,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Sie erhalten eine zentrale Ansprechperson während des gesamten Projekts.',
    icon: UserRound,
  },
  {
    title: 'Abstimmung aller Gewerke',
    desc: 'Elektroarbeiten werden optimal mit Trockenbau, Sanitär, Heizung und Innenausbau kombiniert.',
    icon: ClipboardCheck,
  },
  {
    title: 'Transparente Projektplanung',
    desc: 'Sie erhalten einen strukturierten Ablaufplan und jederzeit Informationen über den Projektfortschritt.',
    icon: MessagesSquare,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Wir begleiten private und gewerbliche Modernisierungsprojekte in der gesamten Region.',
    icon: MapPin,
  },
];

const leistungenCards = [
  {
    title: 'Leitungen modernisieren',
    desc: 'Veraltete Leitungen werden im Rahmen der Modernisierung überprüft und bei Bedarf ersetzt.',
    icon: Cable,
  },
  {
    title: 'Neue Stromkreise',
    desc: 'Die elektrische Anlage wird an heutige Nutzungsanforderungen angepasst.',
    icon: CircuitBoard,
  },
  {
    title: 'Steckdosen erweitern',
    desc: 'Mehr Steckdosen sorgen für höheren Komfort und mehr Flexibilität im Alltag.',
    icon: Plug,
  },
  {
    title: 'Moderne Beleuchtung',
    desc: 'Vorbereitung zeitgemäßer Beleuchtungslösungen für Wohn- und Arbeitsbereiche.',
    icon: Lightbulb,
  },
  {
    title: 'Netzwerk vorbereiten',
    desc: 'Planung strukturierter Netzwerk- und Datenleitungen.',
    icon: Network,
  },
  {
    title: 'Gebäudetechnik vorbereiten',
    desc: 'Die Elektroinstallation kann bereits für zukünftige Smart-Home-Anwendungen vorbereitet werden.',
    icon: HousePlus,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Analyse Ihrer Immobilie und Ihrer Modernisierungswünsche.',
    icon: PhoneCall,
  },
  {
    title: 'Bestandsaufnahme',
    desc: 'Prüfung der vorhandenen Elektroinstallation.',
    icon: SearchCheck,
  },
  {
    title: 'Planung',
    desc: 'Erstellung eines individuellen Modernisierungskonzepts.',
    icon: ClipboardList,
  },
  {
    title: 'Koordination',
    desc: 'Abstimmung aller beteiligten Fachbetriebe.',
    icon: Workflow,
  },
  {
    title: 'Umsetzung',
    desc: 'Fachgerechte Modernisierung der Elektroanlage.',
    icon: CircleCheckBig,
  },
  {
    title: 'Abschluss',
    desc: 'Abnahme und Übergabe der modernisierten Elektroinstallation.',
    icon: CircleCheckBig,
  },
];

const relatedCards = [
  {
    title: 'Elektroinstallation',
    desc: 'Planung moderner Elektroinstallationen für Neubau, Umbau und Sanierung.',
    icon: Zap,
    to: '/elektroinstallation-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Sicherungskasten erneuern',
    desc: 'Mehr Sicherheit und moderne Schutztechnik durch eine neue Unterverteilung.',
    icon: Shield,
    to: '/sicherungskasten-erneuern-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Komplettsanierung',
    desc: 'Elektroarbeiten werden optimal in den gesamten Sanierungsablauf integriert.',
    icon: Hammer,
    to: '/komplettsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Kernsanierung',
    desc: 'Bei Kernsanierungen wird die Elektroinstallation häufig vollständig modernisiert.',
    icon: Building,
    to: '/kernsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Bauleitung & Projektsteuerung',
    desc: 'Wir koordinieren sämtliche Gewerke und sorgen für einen reibungslosen Projektablauf.',
    icon: ClipboardCheck,
    to: '/bauleitung-projektsteuerung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Generalunternehmer',
    desc: 'Ein Ansprechpartner für Planung, Koordination und Umsetzung Ihres gesamten Bauprojekts.',
    icon: BriefcaseBusiness,
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const radexLiveProjects = [
  {
    image: '/img/altbau-service-elektro.png',
    badge: 'LIVE',
    title: 'Altbau-Elektrik modernisieren',
    location: 'Offenbach am Main',
    desc: 'Veraltete Leitungen und Stromkreise erneuert und für zukünftige Erweiterungen vorbereitet.',
    cta: 'Projekt ansehen',
  },
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
    image: '/img/buro1.webp',
    badge: 'Abgeschlossen',
    title: 'Gewerbe-Elektroinstallation',
    location: 'Darmstadt',
    desc: 'Strukturierte Elektroplanung für Büroflächen mit Netzwerk, Beleuchtung und Gebäudetechnik.',
    cta: 'Projekt ansehen',
  },
];

const videoTranscript =
  'Viele Altbauten verfügen noch über Elektroinstallationen, die vor Jahrzehnten geplant wurden. Die Anforderungen an Stromversorgung, Sicherheit und Komfort haben sich jedoch deutlich verändert. Wer ohnehin saniert, sollte die Elektroanlage gleich mit modernisieren und die Immobilie für die Zukunft vorbereiten.';

const faqsData = [
  {
    q: 'Wann sollte die Elektrik in einem Altbau erneuert werden?',
    a: 'Eine Modernisierung empfiehlt sich, wenn die Elektroinstallation veraltet ist, nicht mehr den heutigen Sicherheitsanforderungen entspricht oder im Zuge einer Sanierung ohnehin Wände und Decken geöffnet werden.',
  },
  {
    q: 'Muss immer die komplette Elektroanlage erneuert werden?',
    a: 'Nicht zwangsläufig. Welche Maßnahmen sinnvoll sind, hängt vom Zustand der vorhandenen Installation und den zukünftigen Anforderungen der Immobilie ab.',
  },
  {
    q: 'Woran erkennt man eine veraltete Elektroinstallation?',
    a: 'Typische Hinweise sind wenige Steckdosen, alte Leitungen, fehlende FI-Schutzschalter, ein veralteter Sicherungskasten oder häufig auslösende Sicherungen.',
  },
  {
    q: 'Kann die Elektroinstallation während einer Sanierung erneuert werden?',
    a: 'Ja. Der ideale Zeitpunkt ist eine umfassende Sanierung, da Leitungen einfacher erneuert und neue Stromkreise effizient integriert werden können.',
  },
  {
    q: 'Kann die Elektroinstallation für Smart Home vorbereitet werden?',
    a: 'Ja. Im Zuge der Modernisierung können Leerrohre, zusätzliche Leitungen und technische Voraussetzungen für zukünftige Smart-Home-Systeme eingeplant werden.',
  },
  {
    q: 'Werden auch zusätzliche Steckdosen installiert?',
    a: 'Ja. Bei einer Modernisierung lässt sich die Anzahl der Steckdosen an heutige Wohn- und Arbeitsgewohnheiten anpassen.',
  },
  {
    q: 'Muss der Sicherungskasten ebenfalls erneuert werden?',
    a: 'Das hängt vom Zustand der vorhandenen Anlage ab. Häufig wird im Rahmen einer Modernisierung auch die Unterverteilung an aktuelle Anforderungen angepasst.',
  },
  {
    q: 'Für welche Gebäude eignet sich eine Modernisierung?',
    a: 'Für Einfamilienhäuser, Eigentumswohnungen, Mehrfamilienhäuser sowie gewerblich genutzte Bestandsimmobilien im gesamten Rhein-Main-Gebiet.',
  },
];

const seoTocSections = [...altbauElektrikSeoSections, ...altbauElektrikSeoLinkSections];

export default function AltbauElektrikErneuernLanding() {
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
        name: 'Altbau Elektrik erneuern Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page sanierung-money-page altbau-elektrik-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/elektrotechnik-gebaeudetechnik">Elektrotechnik</Link>
              <span aria-hidden="true">↓</span>
              <span>Altbau Elektrik erneuern</span>
            </nav>
            <p className="br-hero-kicker">
              <Building2 size={16} strokeWidth={1.5} aria-hidden="true" /> Moderne Elektroanlagen für
              Bestandsimmobilien
            </p>
            <p className="br-hero-kicker">Altbau Elektrik erneuern im Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Altbau Elektrik erneuern
              <br />
              <span>Rhein-Main</span>
            </h1>
            <p className="br-hero-lead">
              Mehr Sicherheit, moderne Technik und eine Elektroinstallation nach heutigen Anforderungen.
            </p>
            <p className="br-hero-text">
              Viele ältere Gebäude verfügen noch über Elektroinstallationen, die Jahrzehnte alt sind und heutigen
              Anforderungen an Sicherheit und Komfort nicht mehr entsprechen. Im Rahmen einer Modernisierung werden
              elektrische Anlagen überprüft und – je nach Zustand – schrittweise oder vollständig erneuert.
            </p>
            <p className="br-hero-text">
              Wir begleiten Ihr Projekt von der Planung bis zur Koordination der Ausführung und sorgen dafür, dass die
              Elektroarbeiten optimal mit allen weiteren Gewerken abgestimmt werden.
            </p>
            <AltbauElektrikCTA isHero />
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
          aria-label="Erneuerung einer Altbau-Elektrik im Rhein-Main-Gebiet."
          title="Altbau Elektrik erneuern Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Warum sollte die Elektrik im Altbau erneuert werden?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              In vielen Altbauten stammen Leitungen, Sicherungen oder Verteilungen aus einer Zeit, in der deutlich weniger
              elektrische Geräte genutzt wurden als heute. Moderne Haushalte benötigen jedoch eine leistungsfähige und
              sichere Elektroinstallation, die den aktuellen Anforderungen gerecht wird.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Wer die Elektrik im Rahmen einer Sanierung erneuert, schafft nicht nur mehr Sicherheit, sondern erhöht
              auch den Wohnkomfort und bereitet die Immobilie auf zukünftige Technologien vor.
            </p>
          </div>
        </div>
      </section>

      <ResponsiveChecklistSection
        title="Typische Anzeichen für eine Modernisierung"
        intro="Eine Erneuerung der Altbau-Elektrik kann sinnvoll sein, wenn:"
        items={modernizationChecklistItems}
      />

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} largeIcons />
        </div>
      </section>

      <MoneyPageQualityGrid />

      <SectionTransition>
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen im Bereich der Altbau-Elektrik.
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
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur Abnahme Ihrer
        modernisierten Elektroinstallation.
      </SectionTransition>

      <HorizontalProcessTimeline title="Projektablauf" steps={processSteps} />

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Ihr Ansprechpartner für Altbau-Elektrik</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Wir beraten Sie, welche Bereiche Ihrer Elektroinstallation modernisiert werden sollten und koordinieren
              sämtliche Arbeiten zuverlässig.
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
        title="Wann sollte die Elektrik eines Altbaus erneuert werden?"
        description="Bernd erklärt, welche Anzeichen auf eine veraltete Elektroinstallation hinweisen und warum eine Modernisierung häufig im Rahmen einer Sanierung sinnvoll ist."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt die Erneuerung einer Altbau-Elektrik."
        duration="ca. 3 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Altbau-Elektrik modernisieren und langfristig sicher planen</h2>
            <p>
              Ob einzelne Bereiche oder die komplette Elektroanlage – wir begleiten Ihr Modernisierungsprojekt von der
              Bestandsaufnahme bis zur Koordination der Ausführung und sorgen für eine zukunftssichere Lösung.
            </p>
            <AltbauElektrikCTA centered />
          </div>
        </div>
      </section>

      {altbauElektrikLegacySections.length > 0 && (
        <SeoKnowledgeDrawer
          title="Weitere Informationen"
          sections={altbauElektrikLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="altbau-elektrik-legacy-panel"
        />
      )}

      <SeoTocSection
        title="Unsere Leistungen im Bereich Altbau-Elektrik erneuern"
        intro={altbauElektrikSeoIntro}
        sections={seoTocSections}
        showAllContent
        panelId="altbau-elektrik-seo-panel"
        ctaLabel="Kostenlose Beratung"
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Elektroprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Altbau-Elektrik, Leitungsmodernisierung, Stromkreise und koordinierte Sanierungsprojekte."
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
            <h2 className="br-section-title">Warum sich die Erneuerung einer Altbau-Elektrik lohnt</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Die Modernisierung einer veralteten Elektroinstallation verbessert nicht nur die Sicherheit Ihrer Immobilie,
              sondern schafft auch die technischen Voraussetzungen für modernes Wohnen. Ausreichend Stromkreise,
              zeitgemäße Schutztechnik und eine durchdachte Planung sorgen dafür, dass elektrische Anlagen heutigen
              Anforderungen gerecht werden und zukünftige Erweiterungen problemlos möglich sind.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Wer die Elektroinstallation im Rahmen einer Sanierung erneuert, spart häufig Zeit und Aufwand, da
              notwendige Arbeiten direkt mit anderen Gewerken abgestimmt werden können. Dadurch entstehen effiziente
              Abläufe und eine langfristig zukunftssichere Lösung.
            </p>
          </div>
        </div>
      </section>

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Machen Sie Ihre Immobilie fit für die Zukunft</h2>
            <p>
              Eine moderne Elektroinstallation schafft Sicherheit, Komfort und Flexibilität für viele Jahre. Wir beraten
              Sie persönlich, bewerten den Zustand Ihrer bestehenden Anlage und koordinieren alle erforderlichen Arbeiten
              mit qualifizierten Elektrofachbetrieben – zuverlässig und abgestimmt auf Ihr Sanierungsvorhaben.
            </p>
            <AltbauElektrikCTA centered />
          </div>
        </div>
      </section>
    </main>
  );
}
