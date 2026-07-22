import { useEffect } from 'react';
import {
  FileText,
  Network,
  Flame,
  Leaf,
  Route,
  Settings2,
  Layers3,
  ClipboardCheck,
  UserRound,
  Workflow,
  CalendarClock,
  MapPin,
  PhoneCall,
  SearchCheck,
  ClipboardList,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  Gauge,
  Zap,
  Hammer,
  BriefcaseBusiness,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import '../data/legacyServiceStyles.css';
import '../data/migratedServicePage.css';
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
  QualityPromiseBlock,
} from '../components/landing/SharedLandingParts';
import {
  sanierungFoerderungSeoIntro,
  sanierungFoerderungSeoSections,
} from '../data/sanierungFoerderungSeoContent';
import { sanierungFoerderungLegacySections } from '../data/sanierungFoerderungLegacyContent';

const PAGE_PATH = '/sanierung-foerderung-rhein-main';
const HERO_IMAGE = '/img/sanierung-foerderung-rhein-main.webp';
const HERO_IMAGE_FALLBACK = '/img/haus-service-energie.png';
const VIDEO_POSTER = '/img/bernd-sanierung-foerderung-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Sanierung Förderung Rhein-Main | KfW, BAFA & Fördermittel | Radex';
const META_DESCRIPTION =
  'Fördermöglichkeiten für energetische Sanierungen im Rhein-Main-Gebiet. Wir unterstützen Sie bei der Planung förderfähiger Sanierungsprojekte und koordinieren alle beteiligten Gewerke.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Energie & Förderung', path: '/leistungen/energie-foerderung' },
  { name: 'Sanierung Förderung', path: PAGE_PATH },
];

const TRUST_POINTS = [
  'Förderorientierte Projektplanung',
  'Ein Ansprechpartner für alle Gewerke',
  'Koordination komplexer Sanierungen',
  'Transparente Projektabläufe',
  'Rhein-Main-Gebiet',
];

function SanierungFoerderungCTA({ isHero = false, centered = false, primaryLabel = 'Kostenlose Beratung' }) {
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
    title: 'Ganzheitliche Projektbetrachtung',
    desc: 'Wir betrachten Gebäude, Technik und Sanierungsmaßnahmen als Gesamtkonzept.',
    icon: Layers3,
  },
  {
    title: 'Förderorientierte Planung',
    desc: 'Bereits in der frühen Projektphase werden förderrelevante Anforderungen berücksichtigt.',
    icon: ClipboardCheck,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Wir koordinieren sämtliche beteiligten Fachbetriebe während des gesamten Projekts.',
    icon: UserRound,
  },
  {
    title: 'Strukturierte Projektsteuerung',
    desc: 'Klare Abläufe sorgen für Transparenz und einen reibungslosen Projektverlauf.',
    icon: Workflow,
  },
  {
    title: 'Gewerke intelligent koordinieren',
    desc: 'Elektro, Heizung, Dämmung, Fenster und weitere Maßnahmen werden sinnvoll miteinander verbunden.',
    icon: Network,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Persönliche Betreuung für private und gewerbliche Sanierungsprojekte.',
    icon: MapPin,
  },
];

const leistungenCards = [
  {
    title: 'Förderorientierte Projektplanung',
    desc: 'Wir unterstützen Sie dabei, Sanierungsmaßnahmen strukturiert und förderorientiert vorzubereiten.',
    icon: ClipboardCheck,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Alle beteiligten Fachunternehmen werden sinnvoll miteinander abgestimmt.',
    icon: Network,
  },
  {
    title: 'Heizungsmodernisierung',
    desc: 'Wir koordinieren den Austausch moderner Heizsysteme innerhalb Ihres Sanierungsprojekts.',
    icon: Flame,
  },
  {
    title: 'Energetische Sanierung',
    desc: 'Energetische Maßnahmen werden sinnvoll miteinander kombiniert.',
    icon: Leaf,
  },
  {
    title: 'Projektsteuerung',
    desc: 'Von der Planung bis zur Fertigstellung behalten wir Termine und Abläufe im Blick.',
    icon: Route,
  },
  {
    title: 'Technische Abstimmung',
    desc: 'Gebäudetechnik, Elektroinstallation und Heiztechnik werden frühzeitig gemeinsam geplant.',
    icon: Settings2,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Analyse Ihrer Immobilie und Ihrer Modernisierungsziele.',
    icon: PhoneCall,
  },
  {
    title: 'Projektaufnahme',
    desc: 'Bewertung der geplanten Maßnahmen und technischen Ausgangssituation.',
    icon: SearchCheck,
  },
  {
    title: 'Sanierungsplanung',
    desc: 'Abstimmung aller erforderlichen Gewerke.',
    icon: ClipboardList,
  },
  {
    title: 'Förderorientierte Vorbereitung',
    desc: 'Berücksichtigung relevanter Rahmenbedingungen für das geplante Vorhaben.',
    icon: FileText,
  },
  {
    title: 'Umsetzung',
    desc: 'Koordination sämtlicher beteiligter Fachbetriebe.',
    icon: Workflow,
  },
  {
    title: 'Projektabschluss',
    desc: 'Gemeinsame Abnahme und Dokumentation der ausgeführten Arbeiten.',
    icon: CircleCheckBig,
  },
];

const relatedCards = [
  {
    title: 'Energetische Sanierung',
    desc: 'Die technische Grundlage für viele förderfähige Modernisierungen bildet eine durchdachte energetische Sanierung.',
    icon: Leaf,
    to: '/energetische-sanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Energieeffizienz',
    desc: 'Durch höhere Energieeffizienz sinken langfristig Energieverbrauch und Betriebskosten.',
    icon: Gauge,
    to: '/energieeffizienz-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Heizung & Sanitär',
    desc: 'Moderne Heiztechnik spielt bei vielen Förderprogrammen eine zentrale Rolle.',
    icon: Flame,
    to: '/heizung-sanitaer',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Elektrotechnik & Gebäudetechnik',
    desc: 'Elektroinstallation, Energiemanagement und moderne Gebäudetechnik ergänzen viele Sanierungsmaßnahmen sinnvoll.',
    icon: Zap,
    to: '/elektrotechnik-gebaeudetechnik',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Komplettsanierung',
    desc: 'Mehrere energetische Maßnahmen lassen sich im Rahmen einer Komplettsanierung optimal miteinander verbinden.',
    icon: Hammer,
    to: '/komplettsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Generalunternehmer',
    desc: 'Ein zentraler Ansprechpartner koordiniert alle Gewerke während der gesamten Sanierung.',
    icon: BriefcaseBusiness,
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const radexLiveProjects = [
  {
    image: '/img/heizung-service-waermepumpe.png',
    badge: 'LIVE',
    title: 'Heizungsmodernisierung mit Förderplanung',
    location: 'Rodgau',
    desc: 'Wärmepumpe und Heizflächen im Rahmen einer energetischen Sanierung – förderorientiert geplant und koordiniert.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/haus-service-energie.png',
    badge: 'LIVE',
    title: 'Energetische Haussanierung',
    location: 'Dreieich',
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
  'Förderungen sollten bereits vor Beginn einer Sanierung berücksichtigt werden. Eine gute Projektplanung hilft dabei, technische Anforderungen, Abläufe und Förderwege frühzeitig zusammenzudenken und spätere Probleme zu vermeiden.';

const faqsData = [
  {
    q: 'Gibt es Förderungen für eine energetische Sanierung?',
    a: 'Ja. Für viele energetische Modernisierungen stehen – abhängig von Gebäude, Maßnahme und den jeweils gültigen Förderbedingungen – verschiedene Förderprogramme zur Verfügung.',
  },
  {
    q: 'Werden Wärmepumpen gefördert?',
    a: 'Je nach aktueller Förderlage können förderfähige Wärmepumpen im Rahmen der geltenden Programme unterstützt werden. Voraussetzung sind unter anderem die Einhaltung technischer Anforderungen und die richtige Antragstellung.',
  },
  {
    q: 'Kann ich mehrere Förderprogramme kombinieren?',
    a: 'Teilweise ja. Allerdings dürfen bestimmte Förderungen nicht für dieselben förderfähigen Kosten kombiniert werden. Vor Beginn der Maßnahme sollte geprüft werden, welche Kombination zulässig ist.',
  },
  {
    q: 'Brauche ich immer einen Energieeffizienz-Experten?',
    a: 'Nicht für jedes Vorhaben. Bei bestimmten Förderprogrammen oder umfassenden Sanierungen ist jedoch die Einbindung eines qualifizierten Energieeffizienz-Experten erforderlich.',
  },
  {
    q: 'Muss der Antrag vor Beginn der Sanierung gestellt werden?',
    a: 'Bei vielen Programmen ist die zeitliche Reihenfolge entscheidend. Welche Anforderungen gelten, richtet sich nach dem jeweiligen Förderprogramm. Deshalb sollte der Förderweg bereits in der Planungsphase berücksichtigt werden.',
  },
  {
    q: 'Unterstützt Radex bei der Förderplanung?',
    a: 'Radex unterstützt Eigentümer bei der strukturierten Vorbereitung ihres Sanierungsprojekts, koordiniert die beteiligten Gewerke und berücksichtigt förderrelevante Anforderungen im Projektablauf. Förderentscheidungen treffen ausschließlich die zuständigen Förderstellen.',
  },
];

export default function SanierungFoerderungLanding() {
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
        name: 'Sanierung Förderung Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page sanierung-money-page sanierung-foerderung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/leistungen/energie-foerderung">Energie &amp; Förderung</Link>
              <span aria-hidden="true">↓</span>
              <span>Sanierung Förderung</span>
            </nav>
            <p className="br-hero-kicker">
              <FileText size={16} strokeWidth={1.5} aria-hidden="true" /> Fördermöglichkeiten clever nutzen
            </p>
            <p className="br-hero-kicker">Förderung für Ihre Sanierung im Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Sanierung Förderung
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Von der ersten Projektidee bis zur abgestimmten Umsetzung – wir helfen dabei, Sanierungsmaßnahmen
              förderorientiert zu planen und alle beteiligten Gewerke sinnvoll zu koordinieren.
            </p>
            <p className="br-hero-text">
              Wer energetisch saniert, kann je nach Maßnahme von attraktiven Fördermöglichkeiten profitieren.
              Entscheidend ist jedoch, dass Planung, Reihenfolge und technische Umsetzung von Beginn an aufeinander
              abgestimmt werden.
            </p>
            <p className="br-hero-text">
              Radex begleitet Sanierungsprojekte im gesamten Rhein-Main-Gebiet und unterstützt Eigentümer dabei,
              Modernisierungsmaßnahmen strukturiert vorzubereiten, Fachbetriebe zu koordinieren und förderrelevante
              Anforderungen frühzeitig zu berücksichtigen.
            </p>
            <SanierungFoerderungCTA isHero primaryLabel="Kostenlose Erstberatung" />
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
          aria-label="Beratung zu Fördermöglichkeiten einer energetischen Sanierung im Rhein-Main-Gebiet."
          title="Sanierung Förderung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Förderungen beginnen mit einer guten Planung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Bei vielen Sanierungsvorhaben entscheidet nicht nur die technische Ausführung über den Erfolg, sondern
              bereits die richtige Vorbereitung. Förderprogramme setzen häufig voraus, dass Maßnahmen sinnvoll geplant,
              technische Anforderungen erfüllt und bestimmte Abläufe eingehalten werden.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Deshalb lohnt es sich, Fördermöglichkeiten bereits zu Beginn eines Projekts mitzudenken. So lassen sich
              Modernisierungen wirtschaftlich planen und verschiedene Gewerke optimal aufeinander abstimmen.
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

      <QualityPromiseBlock intro="Bei förderorientierten Sanierungsprojekten achten wir besonders auf strukturierte Planung, abgestimmte Gewerke und transparente Projektabläufe." />

      <SectionTransition>
        Im nächsten Abschnitt finden Sie einen Überblick über unsere Leistungen bei der förderorientierten Planung und
        Koordination energetischer Sanierungsprojekte.
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
        Abnahme Ihres Sanierungsprojekts.
      </SectionTransition>

      <HorizontalProcessTimeline title="Projektablauf" steps={processSteps} />

      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Ihr Ansprechpartner für Energie &amp; Förderung</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Sie planen eine energetische Sanierung, eine Heizungsmodernisierung oder möchten Fördermöglichkeiten
              frühzeitig in Ihre Projektplanung integrieren? Wir begleiten Ihr Vorhaben von der ersten Beratung bis zur
              koordinierten Umsetzung.
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
              <p>
                Senden Sie uns Fotos, Pläne oder vorhandene Angebote – wir geben Ihnen eine erste Einschätzung zu Ihrem
                Sanierungsprojekt.
              </p>
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
        title="Sanierungsförderung verständlich erklärt"
        description="Bernd erklärt, warum Förderungen bereits vor Beginn einer Sanierung berücksichtigt werden sollten und wie eine gute Projektplanung spätere Probleme vermeiden kann."
        poster={VIDEO_POSTER}
        posterAlt="Bernd erklärt Fördermöglichkeiten bei energetischen Sanierungen."
        duration="ca. 3 Minuten"
        transcript={videoTranscript}
      />

      <ReviewsMarquee />

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Jetzt Fördermöglichkeiten frühzeitig in Ihre Sanierung einplanen</h2>
            <p>
              Je früher Förderprogramme und technische Anforderungen berücksichtigt werden, desto besser lassen sich
              Sanierungsmaßnahmen wirtschaftlich und strukturiert umsetzen. Wir unterstützen Sie bei der Planung Ihres
              Projekts im gesamten Rhein-Main-Gebiet.
            </p>
            <SanierungFoerderungCTA centered />
          </div>
        </div>
      </section>

      {sanierungFoerderungLegacySections.length > 0 && (
        <SeoKnowledgeDrawer
          title="Weitere Informationen"
          sections={sanierungFoerderungLegacySections}
          ctaLabel="Kostenlose Beratung"
          ctaHref="#kontakt"
          panelId="sanierung-foerderung-legacy-panel"
        />
      )}

      <SeoTocSection
        title="Unsere Leistungen im Bereich Sanierungsförderung"
        intro={sanierungFoerderungSeoIntro}
        sections={sanierungFoerderungSeoSections}
        showAllContent
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in energetische Sanierungsprojekte"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Heizungsmodernisierung, energetische Sanierung, Wärmepumpen und förderorientierte Projektplanung."
        projects={radexLiveProjects}
      />

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen" />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Passende Leistungen</h2>
          </div>
          <PremiumIconCards cards={relatedCards} linked largeIcons />
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Fördermöglichkeiten optimal nutzen – Projekte strukturiert umsetzen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Eine erfolgreiche Sanierung beginnt mit einer guten Planung. Wer Fördermöglichkeiten frühzeitig
              berücksichtigt, technische Anforderungen kennt und alle Projektbeteiligten sinnvoll koordiniert, schafft
              die Grundlage für eine wirtschaftliche und nachhaltige Modernisierung.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex Objektmanagement begleitet Eigentümer, Unternehmen und Investoren im gesamten Rhein-Main-Gebiet bei
              der Vorbereitung und Koordination energetischer Sanierungsprojekte. Gemeinsam entwickeln wir einen klar
              strukturierten Projektablauf – von der ersten Idee bis zur erfolgreichen Umsetzung.
            </p>
          </div>
        </div>
      </section>

      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Jetzt Ihr Sanierungsprojekt förderorientiert planen</h2>
            <p>
              Lassen Sie uns gemeinsam prüfen, welche Maßnahmen zu Ihrer Immobilie passen und wie sich Ihr
              Sanierungsprojekt optimal vorbereiten lässt. Wir koordinieren die technischen Abläufe und unterstützen
              Sie dabei, Fördermöglichkeiten von Anfang an sinnvoll in die Planung einzubeziehen.
            </p>
            <SanierungFoerderungCTA centered />
          </div>
        </div>
      </section>
    </main>
  );
}
