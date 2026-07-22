import { useEffect } from 'react';
import {
  Construction,
  SearchCheck,
  Building,
  Workflow,
  ShieldCheck,
  Hammer,
  LayoutPanelTop,
  BadgeEuro,
  UserRound,
  CalendarClock,
  MessagesSquare,
  Sparkles,
  Columns2,
  PanelsTopLeft,
  Paintbrush,
  LayoutGrid,
  PhoneCall,
  ClipboardList,
  CircleCheckBig,
  Phone,
  Mail,
  MessageCircle,
  Building2,
  Home,
  Briefcase,
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
} from '../components/landing/SharedLandingParts';
import {
  wandEntfernenSeoIntro,
  wandEntfernenSeoSections,
  wandEntfernenSeoLinkSections,
} from '../data/wandEntfernenSeoContent';

const PAGE_PATH = '/wand-entfernen-rhein-main';
const HERO_IMAGE = '/img/wand-entfernen-rhein-main-radex.webp';
const VIDEO_POSTER = '/img/bernd-wand-entfernen-rhein-main.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Wand entfernen Rhein-Main | Grundrisse professionell verändern';
const META_DESCRIPTION =
  'Wände professionell entfernen im Rhein-Main-Gebiet. Neue Raumkonzepte für Wohnungen, Häuser und Gewerbeimmobilien – fachgerecht geplant und umgesetzt.';

const BREADCRUMBS = [
  { name: 'Startseite', path: '/' },
  { name: 'Innenausbau & Umbau', path: '/innenausbau-umbau-rhein-main' },
  { name: 'Wand entfernen', path: PAGE_PATH },
];

function WandEntfernenCTA({ isHero = false, centered = false }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href="#kontakt" className="btn br-btn-orange">
        Kostenlose Erstberatung
      </a>
      <a href="#kontakt" className="btn br-btn-outline-orange">
        Projekt anfragen
      </a>
    </div>
  );
}

const whyRadexCards = [
  {
    title: 'Sorgfältige Bestandsaufnahme',
    desc: 'Vor jeder Grundrissänderung analysieren wir die vorhandene Gebäudesituation und entwickeln eine passende Lösung.',
    icon: SearchCheck,
  },
  {
    title: 'Individuelle Raumkonzepte',
    desc: 'Neue Raumaufteilungen werden auf die Nutzung und Architektur Ihrer Immobilie abgestimmt.',
    icon: Building,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Vom Rückbau über Trockenbau bis zu Maler- und Bodenarbeiten koordinieren wir sämtliche Leistungen aus einer Hand.',
    icon: Workflow,
  },
  {
    title: 'Fachgerechte Planung',
    desc: 'Bei Eingriffen in tragende Bauteile werden statische Anforderungen und erforderliche Genehmigungen frühzeitig berücksichtigt.',
    icon: ShieldCheck,
  },
  {
    title: 'Präzise Ausführung',
    desc: 'Alle Arbeiten erfolgen strukturiert und mit Blick auf den Schutz angrenzender Bauteile.',
    icon: Hammer,
  },
  {
    title: 'Offene Wohnkonzepte',
    desc: 'Wir schaffen moderne Räume mit einer optimalen Verbindung von Funktionalität, Komfort und Design.',
    icon: LayoutPanelTop,
  },
];

const qualityCards = [
  {
    title: 'Transparente Angebote',
    desc: 'Sie erhalten eine nachvollziehbare Kalkulation auf Basis eines klar definierten Leistungsumfangs.',
    icon: BadgeEuro,
  },
  {
    title: 'Persönliche Projektleitung',
    desc: 'Ein fester Ansprechpartner begleitet Ihr Projekt von der Planung bis zur Fertigstellung.',
    icon: UserRound,
  },
  {
    title: 'Strukturierte Terminplanung',
    desc: 'Alle Arbeiten werden effizient geplant und mit den beteiligten Gewerken abgestimmt.',
    icon: CalendarClock,
  },
  {
    title: 'Kontrollierte Qualität',
    desc: 'Jeder Bauabschnitt wird sorgfältig überwacht und dokumentiert.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Sie werden regelmäßig über den Projektfortschritt und die nächsten Arbeitsschritte informiert.',
    icon: MessagesSquare,
  },
  {
    title: 'Nachhaltige Raumlösungen',
    desc: 'Durchdachte Grundrissänderungen schaffen moderne Wohn- und Arbeitsbereiche mit langfristigem Mehrwert.',
    icon: Sparkles,
  },
];

const leistungenCards = [
  {
    title: 'Nichttragende Wände entfernen',
    desc: 'Rückbau nichttragender Innenwände zur Schaffung offener und funktionaler Raumkonzepte.',
    icon: Construction,
    to: '#nichttragende-waende',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Wanddurchbrüche',
    desc: 'Professionell geplante Wandöffnungen für neue Raumverbindungen und moderne Grundrisse.',
    icon: Columns2,
    to: '#wanddurchbruch',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Grundriss modernisieren',
    desc: 'Komplette Neuorganisation von Wohn- und Arbeitsbereichen inklusive aller erforderlichen Ausbauarbeiten.',
    icon: LayoutPanelTop,
    to: '#grundriss',
    cta: 'Mehr erfahren',
  },
];

const typischeLeistungenCards = [
  {
    title: 'Innenwände zurückbauen',
    desc: 'Rückbau geeigneter Innenwände zur Schaffung größerer und offener Räume.',
    icon: Hammer,
  },
  {
    title: 'Wanddurchbrüche herstellen',
    desc: 'Herstellung neuer Wandöffnungen für optimierte Raumverbindungen und moderne Wohnkonzepte.',
    icon: Columns2,
  },
  {
    title: 'Grundrisse optimieren',
    desc: 'Anpassung bestehender Raumaufteilungen an heutige Wohn- und Nutzungsanforderungen.',
    icon: LayoutPanelTop,
  },
  {
    title: 'Trockenbau anschließen',
    desc: 'Errichtung neuer Trockenbauwände oder Raumtrennungen als Bestandteil des neuen Grundrisses.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Oberflächen wiederherstellen',
    desc: 'Spachtel-, Putz- und Malerarbeiten sorgen für ein einheitliches und hochwertiges Gesamtbild.',
    icon: Paintbrush,
  },
  {
    title: 'Bodenanschlüsse anpassen',
    desc: 'Anpassung oder Erneuerung von Bodenbelägen nach der Grundrissänderung.',
    icon: LayoutGrid,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Wir besprechen Ihre Vorstellungen sowie die vorhandene Gebäudesituation und prüfen die Machbarkeit Ihres Projekts.',
    icon: PhoneCall,
  },
  {
    title: 'Bestandsaufnahme',
    desc: 'Die bestehende Bausubstanz wird analysiert. Bei möglichen Eingriffen in tragende Bauteile erfolgt eine statische Prüfung durch die hierfür zuständigen Fachstellen.',
    icon: SearchCheck,
  },
  {
    title: 'Angebot',
    desc: 'Sie erhalten ein transparentes Angebot mit allen vorgesehenen Leistungen und dem geplanten Projektablauf.',
    icon: ClipboardList,
  },
  {
    title: 'Rückbau',
    desc: 'Geeignete Innenwände werden fachgerecht zurückgebaut. Erforderliche Schutzmaßnahmen werden während der Arbeiten umgesetzt.',
    icon: Hammer,
  },
  {
    title: 'Ausbauarbeiten',
    desc: 'Trockenbau, Oberflächen, Bodenanschlüsse sowie weitere Ausbauleistungen werden professionell ausgeführt.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Übergabe',
    desc: 'Nach gemeinsamer Endabnahme wird Ihr modernisierter Grundriss bezugsfertig übergeben.',
    icon: CircleCheckBig,
  },
];

const einsatzbereicheCards = [
  {
    title: 'Eigentumswohnungen',
    desc: 'Moderne offene Wohnbereiche und optimierte Raumaufteilungen für Bestandswohnungen.',
    icon: Building2,
  },
  {
    title: 'Einfamilienhäuser',
    desc: 'Grundrissänderungen zur Anpassung älterer Häuser an heutige Wohnkonzepte.',
    icon: Home,
  },
  {
    title: 'Büroflächen',
    desc: 'Neue Besprechungsräume, Open-Space-Bereiche und flexible Arbeitsplatzlösungen.',
    icon: Briefcase,
  },
  {
    title: 'Gewerbeimmobilien',
    desc: 'Optimierung bestehender Flächen für Praxen, Ladenlokale und Gewerbeobjekte.',
    icon: Store,
  },
];

const radexLiveProjects = [
  {
    image: '/img/haus-service-innenausbau.png',
    badge: 'LIVE',
    title: 'Wanddurchbruch Wohnbereich',
    location: 'Offenbach am Main',
    desc: 'Offene Wohnküche durch fachgerechten Wanddurchbruch – laufendes Projekt mit täglichen Updates.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-service-innenausbau.png',
    badge: 'Vorher & Nachher',
    title: 'Offene Wohnküche',
    location: 'Frankfurt am Main',
    desc: 'Grundrissänderung in einer Eigentumswohnung mit neuem offenen Wohn- und Essbereich.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/haus-process.png',
    badge: 'Abgeschlossen',
    title: 'Grundrissmodernisierung Einfamilienhaus',
    location: 'Darmstadt',
    desc: 'Wohnbereiche neu strukturiert – vom Rückbau bis zum fertigen Innenausbau.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-service-boeden.png',
    badge: 'Abgeschlossen',
    title: 'Wohnungsumbau mit Trockenbau',
    location: 'Rodgau',
    desc: 'Nach dem Wandrückbau: neue Raumstruktur, Böden und Oberflächen schlüsselfertig übergeben.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gu-process.png',
    badge: 'LIVE',
    title: 'Büroumbau mit offenen Bereichen',
    location: 'Neu-Isenburg',
    desc: 'Gewerbliche Grundrissänderung für moderne Open-Space-Arbeitsplätze.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnzimmer.webp',
    badge: 'Video',
    title: 'Baustelleneinblick Grundrissänderung',
    location: 'Dreieich',
    desc: 'Authentischer Einblick in Rückbau, Trockenbau und Anschlussarbeiten auf einer echten Baustelle.',
    cta: 'Video ansehen',
  },
];

const videoTranscript =
  'Nicht jede Wand kann ohne Weiteres entfernt werden. Zunächst prüfen wir die bestehende Gebäudesituation. Bei tragenden Bauteilen sind eine statische Bewertung und – je nach Bauvorhaben – weitere erforderliche Schritte unverzichtbar. Erst danach erfolgt die fachgerechte Umsetzung und der anschließende Innenausbau.';

const faqsData = [
  {
    q: 'Kann jede Innenwand entfernt werden?',
    a: 'Nein. Vor jedem Eingriff muss geprüft werden, ob es sich um eine tragende oder nichttragende Wand handelt. Tragende Wände dürfen nicht ohne fachliche statische Bewertung und gegebenenfalls erforderliche Genehmigungen verändert werden.',
  },
  {
    q: 'Was ist der Unterschied zwischen tragender und nichttragender Wand?',
    a: 'Tragende Wände leiten Lasten aus Decken oder oberen Geschossen weiter und erfüllen statische Aufgaben. Nichttragende Innenwände dienen primär der Raumtrennung. Die Einordnung erfolgt durch Bestandsanalyse und gegebenenfalls Fachplanung.',
  },
  {
    q: 'Brauche ich einen Statiker für einen Wanddurchbruch?',
    a: 'Wenn eine tragende Wand betroffen sein könnte oder dies nicht sicher ausgeschlossen werden kann, ist eine statische Prüfung durch die zuständigen Fachstellen erforderlich, bevor mit den Arbeiten begonnen wird.',
  },
  {
    q: 'Wie lange dauert eine Grundrissänderung?',
    a: 'Die Dauer hängt von Umfang, Statik, Leitungen und Anschlussarbeiten ab. Ein einfacher Rückbau einer nichttragenden Wand kann oft in wenigen Tagen umgesetzt werden. Größere Projekte werden nach der Bestandsaufnahme terminiert.',
  },
  {
    q: 'Übernimmt Radex auch Trockenbau und Oberflächen nach dem Rückbau?',
    a: 'Ja. Radex koordiniert den gesamten Ablauf – vom Rückbau über Trockenbau und Oberflächenarbeiten bis zur fertigen Übergabe.',
  },
  {
    q: 'In welchen Städten ist Radex tätig?',
    a: 'Radex begleitet Grundrissänderungen im gesamten Rhein-Main-Gebiet – unter anderem in Frankfurt, Offenbach, Darmstadt, Hanau, Rodgau und über 60 weiteren Gemeinden.',
  },
];

const seoTocSections = [...wandEntfernenSeoSections, ...wandEntfernenSeoLinkSections];

export default function WandEntfernenLanding() {
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
        name: 'Wand entfernen Rhein-Main',
        description: META_DESCRIPTION,
        path: PAGE_PATH,
      }),
      buildBreadcrumbSchema(BREADCRUMBS),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page wand-entfernen-page">
      {/* Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/innenausbau-umbau-rhein-main">Innenausbau & Umbau</Link>
              <span aria-hidden="true">↓</span>
              <span>Wand entfernen</span>
            </nav>
            <p className="br-hero-kicker">
              <Construction size={16} strokeWidth={1.5} aria-hidden="true" /> Wand entfernen · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Wände entfernen im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Professionelle Grundrissänderungen für Wohnungen, Häuser und Gewerbeimmobilien – sorgfältig geplant und
              fachgerecht umgesetzt.
            </p>
            <p className="br-hero-text">
              Offene Wohnbereiche und flexible Raumkonzepte gehören heute zu den häufigsten Modernisierungsmaßnahmen.
              Durch den Rückbau geeigneter Innenwände lassen sich Räume neu strukturieren und an veränderte
              Anforderungen anpassen.
            </p>
            <p className="br-hero-text">
              Radex begleitet Ihr Projekt von der Bestandsaufnahme über die Planung bis zur Fertigstellung. Bei
              Eingriffen in tragende Bauteile erfolgen Planung und Umsetzung ausschließlich nach fachlicher statischer
              Prüfung und unter Berücksichtigung der jeweils erforderlichen Genehmigungen.
            </p>
            <WandEntfernenCTA isHero />
            <p className="br-hero-micro" style={{ marginTop: '16px' }}>
              Professionelle Planung · Sichere Ausführung · Moderne Raumkonzepte
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Professionelle Grundrissänderung durch das Entfernen einer Innenwand im Rhein-Main-Gebiet"
          title="Wand entfernen Rhein-Main | Radex Objektmanagement"
        />
      </section>

      {/* Einleitung */}
      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Mehr Raum durch intelligente Grundrissplanung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Die Anforderungen an Wohn- und Arbeitsräume verändern sich. Offene Küchen, großzügige Wohnbereiche und
              flexible Büroflächen ersetzen zunehmend klassische, kleinteilige Grundrisse. Der gezielte Rückbau
              geeigneter Innenwände ermöglicht eine moderne Nutzung vorhandener Flächen.
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '16px', marginBottom: 0 }}>
              Radex plant und koordiniert Grundrissänderungen für Wohnungen, Einfamilienhäuser und Gewerbeimmobilien.
              Dabei werden bestehende Gebäudestrukturen sorgfältig bewertet und sämtliche Ausbauarbeiten professionell
              aufeinander abgestimmt.
            </p>
          </div>
        </div>
      </section>

      {/* Warum Radex */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} largeIcons />
        </div>
      </section>

      {/* Qualitätsversprechen */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Qualitätsversprechen</h2>
          </div>
          <PremiumIconCards cards={qualityCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Von der Planung bis zur fertigen Raumlösung – im nächsten Abschnitt finden Sie einen Überblick über unsere
        Leistungen rund um Wand entfernen und Grundrissänderungen.
      </SectionTransition>

      {/* Unsere Leistungen */}
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
        Neben dem eigentlichen Wandrückbau gehören Anschlussarbeiten zum neuen Grundriss. Die folgenden typischen
        Leistungen werden bei Bedarf koordiniert.
      </SectionTransition>

      {/* Typische Leistungen */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Leistungen</h2>
          </div>
          <PremiumIconCards cards={typischeLeistungenCards} largeIcons />
        </div>
      </section>

      <SectionTransition>
        Ein klar strukturierter Projektablauf schafft Planungssicherheit – von der ersten Beratung bis zur bezugsfertigen
        Übergabe.
      </SectionTransition>

      <HorizontalProcessTimeline
        title="Projektablauf"
        intro="Von der Erstberatung bis zur bezugsfertigen Übergabe – so begleiten wir Ihre Grundrissänderung Schritt für Schritt."
        steps={processSteps}
      />

      {/* Einsatzbereiche */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Einsatzbereiche</h2>
          </div>
          <PremiumIconCards cards={einsatzbereicheCards} largeIcons />
        </div>
      </section>

      {/* Ansprechpartner */}
      <section id="kontakt" className="br-section br-dept-contact-section">
        <div className="container">
          <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Ansprechpartner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '8px' }}>
              <strong>Das Team Grundrissänderungen</strong>
            </p>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Projektleitung begleitet Ihr Vorhaben von der ersten Beratung bis zur fertigen Raumlösung. Alle
              beteiligten Gewerke werden zentral koordiniert und aufeinander abgestimmt.
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
                Senden Sie Fotos, Skizzen oder Grundrisse Ihrer Immobilie und erhalten Sie eine unverbindliche
                Ersteinschätzung.
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

      {/* Bernd erklärt */}
      <section id="video" className="br-section br-bg-light br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="text-center mb-10">
            <p className="br-hero-kicker">Bernd erklärt</p>
            <h2 className="br-section-title">Wann kann eine Wand entfernt werden?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Bernd erklärt den Unterschied zwischen tragenden und nichttragenden Wänden sowie den typischen Ablauf einer
              professionellen Grundrissänderung.
            </p>
            <p className="br-hero-micro">Dauer: ca. 2 Minuten</p>
          </div>
          <div
            className="br-ablauf-video-frame br-bw-video-placeholder"
            style={{ backgroundImage: `url(${VIDEO_POSTER})` }}
            role="img"
            aria-label="Bernd erklärt die professionelle Planung einer Grundrissänderung im Rhein-Main-Gebiet"
          >
            <div className="br-bw-video-placeholder-overlay">
              <span className="br-bw-video-placeholder-play" aria-hidden="true" />
              <p>Video folgt in Kürze</p>
            </div>
          </div>
          <div className="br-ablauf-video-transcript">
            <h3>Platzhalter-Skript</h3>
            <p>{videoTranscript}</p>
          </div>
        </div>
      </section>

      {/* Google Bewertungen */}
      <ReviewsMarquee />

      {/* CTA */}
      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Sie möchten Ihren Grundriss modernisieren?</h2>
            <p>
              Ob Wohnung, Einfamilienhaus oder Gewerbeimmobilie – Radex begleitet Ihr Projekt von der ersten
              Bestandsaufnahme bis zur fertigen Raumlösung. Mit einer sorgfältigen Planung und professionellen
              Umsetzung schaffen wir moderne, funktionale und hochwertige Innenräume.
            </p>
            <WandEntfernenCTA centered />
          </div>
        </div>
      </section>

      {/* SEO Leistungsbereich – Inhalt im Seiten-Drawer wie auf City-Seiten */}
      <SeoKnowledgeDrawer
        title="Unsere Leistungen im Bereich Wand entfernen"
        intro={wandEntfernenSeoIntro}
        sections={seoTocSections}
        ctaLabel="Kostenlose Erstberatung"
        ctaHref="#kontakt"
        panelId="wand-entfernen-seo-panel"
      />

      <RadexLiveSection
        title="Radex Live – Einblicke in Grundrissänderungen"
        intro="Authentische Baustelleneinblicke aus dem Rhein-Main-Gebiet: Wanddurchbrüche, offene Wohnküchen, Grundrissänderungen und Trockenbau nach dem Rückbau."
        projects={radexLiveProjects}
      />
    </main>
  );
}
