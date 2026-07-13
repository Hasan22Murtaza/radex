import { useEffect, useState } from 'react';
import { RADEX_LIVE_URL } from '../constants/brand';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  ArrowRight,
  UtensilsCrossed,
  Sofa,
  LayoutGrid,
  Home,
  Wrench,
  Users,
  Handshake,
  Sparkles,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';

const HERO_IMAGE = '/img/wand-entfernen-hero.webp';
const LIVE_IMAGE = '/img/wand-entfernen-radex-live.webp';

const projectCards = [
  { title: 'Küche zum Wohnraum öffnen', desc: 'Offene Wohnküche mit mehr Licht und Weite schaffen.', icon: UtensilsCrossed },
  { title: 'Wohnzimmer vergrößern', desc: 'Zwei Räume verbinden und den Wohnbereich erweitern.', icon: Sofa },
  { title: 'Räume zusammenlegen', desc: 'Kleine Zimmer zu einem großzügigen Raum verbinden.', icon: LayoutGrid },
  { title: 'Grundriss modernisieren', desc: 'Bestandsgrundriss an heutige Wohnbedürfnisse anpassen.', icon: Home },
];

const whyRadexCards = [
  { title: 'Individuelle Planung', desc: 'Jeder Wanddurchbruch wird objektbezogen geprüft und geplant.', icon: Wrench },
  { title: 'Koordination aller Gewerke', desc: 'Statik, Elektro, SHK, Trockenbau, Boden und Maler in der richtigen Reihenfolge.', icon: Users },
  { title: 'Alles aus einer Hand', desc: 'Ein fester Ansprechpartner von der Prüfung bis zur fertigen Übergabe.', icon: Handshake },
  { title: 'Saubere Ausführung', desc: 'Staubschutz, Schutz der Umgebung und saubere Anschlussarbeiten inklusive.', icon: Sparkles },
  { title: 'Festpreisgarantie', desc: 'Transparentes Angebot nach Besichtigung – ohne versteckte Kosten.', icon: ShieldCheck },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Über 60 Städte – Erfahrung mit Bestandswohnungen und -häusern.', icon: MapPin },
];

const processSteps = [
  'Beratung',
  'Besichtigung',
  'Prüfung der Wand',
  'Angebot',
  'Fachgerechte Ausführung',
  'Fertigstellung',
];

const faqsData = [
  {
    q: 'Welche Wände dürfen entfernt werden?',
    a: 'Nichttragende Wände lassen sich in vielen Fällen entfernen, wenn keine kritischen Leitungen betroffen sind und baurechtliche Vorgaben eingehalten werden. Tragende Wände dürfen nur nach fachlicher Prüfung und gegebenenfalls statischer Freigabe verändert werden.',
  },
  {
    q: 'Muss jede Wand statisch geprüft werden?',
    a: 'Bei Verdacht auf eine tragende Wand oder wenn Bauunterlagen fehlen, sollte ein Tragwerksplaner eingebunden werden. Radex koordiniert die Einbindung geeigneter Fachplaner und die anschließende Umsetzung.',
  },
  {
    q: 'Wie lange dauert ein Wanddurchbruch?',
    a: 'Ein einfacher Wanddurchbruch bei einer nicht tragenden Wand kann oft in wenigen Tagen umgesetzt werden. Tragende Eingriffe mit Statik, Sturzeinbau und Anschlussarbeiten dauern länger – der genaue Zeitrahmen ergibt sich nach der Prüfung.',
  },
  {
    q: 'Was kostet das Entfernen einer Wand?',
    a: 'Die Kosten hängen von Wandart, Tragfunktion, Leitungen, Statik, Staubschutz, Entsorgung und Anschlussarbeiten ab. Nach einer Bestandsaufnahme lässt sich der Aufwand seriös einschätzen.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Ja. Nach Besichtigung und Abstimmung des Umfangs erstellen wir ein transparentes Festpreisangebot für Ihr Projekt.',
  },
];

const seoAccordions = [
  {
    title: 'Wanddurchbruch bei Sanierungen im Bestand',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Eine Wand zu entfernen klingt im ersten Moment nach einer einfachen Idee: Küche und Wohnzimmer öffnen, einen kleinen Flur auflösen, zwei Räume verbinden oder mehr Licht in den Wohnbereich bringen. In der Praxis ist ein Wanddurchbruch aber deutlich mehr als ein schneller Abriss. Bevor eine Wand fällt, muss klar sein, ob sie tragend ist, ob Leitungen darin verlaufen, welche Anschlussarbeiten entstehen und welche Fachleute eingebunden werden müssen.
        </p>
        <p className="text-gray-600">
          Die Radex Objektmanagement GmbH koordiniert Wanddurchbrüche, Wandöffnungen, Grundrissänderungen und Innenausbau im Rhein-Main-Gebiet als Teil professioneller Sanierungsprojekte. Mehr zum{' '}
          <a href="/leistungen/innenausbau-umbau">Innenausbau & Umbau</a> und{' '}
          <a href="/generalunternehmer-rhein-main">Generalunternehmer</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Warum ein Wanddurchbruch sorgfältig geplant werden muss',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Ein Wanddurchbruch verändert nicht nur die Optik eines Raumes. Er greift in die Bausubstanz ein. Selbst wenn eine Wand auf den ersten Blick wie eine einfache Trennwand wirkt, können dahinter wichtige Funktionen liegen: Lastabtragung, Schallschutz, Brandschutz, Leitungsführung, Heizkörperanschlüsse, Elektroinstallation, Abluft oder Abwasserstränge.
        </p>
        <p className="text-gray-600">
          Radex koordiniert diese Schritte, damit der Wanddurchbruch nicht zum Baustellenrisiko wird. Eigentümer bekommen einen festen Ansprechpartner, der die einzelnen Gewerke in die richtige Reihenfolge bringt.
        </p>
      </>
    ),
  },
  {
    title: 'Tragende oder nicht tragende Wand',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Die entscheidende Frage vor jedem Wanddurchbruch lautet: Ist die Wand tragend? Tragende Wände leiten Lasten aus Decken, Dach oder oberen Geschossen weiter. Ob eine Wand tragend ist, lässt sich nicht zuverlässig per Augenmaß entscheiden. Bei Verdacht muss ein Tragwerksplaner oder Statiker eingebunden werden.
        </p>
        <p className="text-gray-600">
          Radex übernimmt keine statische Berechnung, koordiniert aber die Einbindung geeigneter Fachplaner. Nicht tragende Wände lassen sich in vielen Fällen einfacher entfernen – trotzdem gilt: erst prüfen, dann öffnen.
        </p>
      </>
    ),
  },
  {
    title: 'Leitungen in der Wand – Strom, Wasser, Heizung und Abluft',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Viele Wände sind nicht leer. In ihnen können Stromleitungen, Wasserleitungen, Heizungsrohre, Abwasserleitungen, Abluftkanäle oder alte Installationen verlaufen. Leitungen müssen vor dem Wanddurchbruch lokalisiert und fachgerecht gesichert oder umgelegt werden.
        </p>
        <p className="text-gray-600">
          Elektroarbeiten werden mit qualifizierten Fachpartnern koordiniert. SHK-Leitungen werden durch die meistergeführte Kompetenz von Radex eingebunden.
        </p>
      </>
    ),
  },
  {
    title: 'Wand entfernen in Wohnung, Haus oder Altbau',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          In Wohnungen geht es häufig um eine bessere Verbindung zwischen Küche, Essbereich und Wohnzimmer. In Einfamilienhäusern oft um größere Wohnbereiche und bessere Lichtführung. In Altbauten ist besondere Sorgfalt nötig – alte Baupläne, nachträgliche Leitungen und mögliche Schadstoffe müssen berücksichtigt werden.
        </p>
        <p className="text-gray-600">
          <a href="/innenausbau-wohnung-rhein-main">Innenausbau Wohnung</a> ·{' '}
          <a href="/innenausbau-haus-rhein-main">Innenausbau Haus</a> ·{' '}
          <a href="/raeume-umbauen-rhein-main">Räume umbauen</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Wanddurchbruch und neue Raumaufteilung',
    content: (
      <p className="text-gray-600">
        Eine Wand wird selten nur entfernt, weil sie stört. Meist steht dahinter ein neues Raumkonzept. Radex koordiniert Wanddurchbrüche deshalb zusammen mit Innenausbau und Umbau. Nach dem Rückbau folgen Trockenbau, Putz, Malerarbeiten, Bodenanschlüsse, Elektrokoordination und gegebenenfalls Anpassungen an Heizung oder Sanitär.{' '}
        <a href="/trockenbau-rhein-main">Trockenbau</a>.
      </p>
    ),
  },
  {
    title: 'Wanddurchbruch bei offener Küche',
    content: (
      <p className="text-gray-600">
        Eine der häufigsten Anfragen betrifft die offene Küche. In Küchenwänden verlaufen oft Stromleitungen, Wasseranschlüsse, Abwasser, Abluft oder Heizungsleitungen. Radex koordiniert solche Umbauten mit den passenden Gewerken: Statik bei Bedarf, Elektrofachpartner, SHK, Trockenbau, Boden, Malerarbeiten und Innenausbau.
      </p>
    ),
  },
  {
    title: 'Wanddurchbruch bei Badsanierung oder Badvergrößerung',
    content: (
      <p className="text-gray-600">
        Auch bei Badsanierungen kann das Entfernen einer Wand sinnvoll sein – wenn ein Bad vergrößert, ein WC integriert oder ein Abstellraum eingebunden werden soll. Radex bringt SHK-Meisterkompetenz ein und koordiniert Abdichtung, Trockenbau, Fliesen, Elektro und Malerarbeiten in der richtigen Reihenfolge.
      </p>
    ),
  },
  {
    title: 'Staubschutz, Lärm und Schutz der bewohnten Immobilie',
    content: (
      <p className="text-gray-600">
        Beim Entfernen einer Wand entstehen Staub, Lärm und Bauschutt. Besonders in bewohnten Häusern und Eigentumswohnungen ist ein sauberer Baustellenschutz wichtig. Radex plant Abdeckungen, Staubschutz, Arbeitszeiten und Schutz der Umgebung mit ein.
      </p>
    ),
  },
  {
    title: 'Anschlussarbeiten nach dem Wanddurchbruch',
    content: (
      <p className="text-gray-600">
        Der eigentliche Wanddurchbruch ist nur ein Teil des Projekts. Typische Anschlussarbeiten sind das Schließen von Bodenlücken, Verputzen von Wandflächen, Verspachteln von Deckenanschlüssen, Streichen, Anpassen von Sockelleisten, Erneuern von Bodenbelägen und Umlegen von Steckdosen. Radex koordiniert die Anschlussgewerke so, dass der Raum fertig nutzbar ist.
      </p>
    ),
  },
  {
    title: 'Wand entfernen in Eigentumswohnungen',
    content: (
      <p className="text-gray-600">
        In Eigentumswohnungen gelten besondere Anforderungen. Teilungserklärung, Hausordnung, Pläne und Vorgaben der Eigentümergemeinschaft sollten geprüft werden. Bei tragenden Eingriffen ist häufig eine Zustimmung erforderlich. Radex koordiniert die handwerkliche Seite und bindet bei Bedarf Fachplaner ein.
      </p>
    ),
  },
  {
    title: 'Tragende Wand öffnen – was fachlich dazugehört',
    content: (
      <p className="text-gray-600">
        Wenn eine tragende Wand geöffnet werden soll, legt ein Tragwerksplaner fest, wie die Last abgefangen wird. Typische Maßnahmen können temporäre Abstützungen, ein Stahlträger oder Betonsturz sein. Radex koordiniert diese Schritte mit den beteiligten Fachkräften – ersetzt aber keinen Statiker.
      </p>
    ),
  },
  {
    title: 'Nicht tragende Wand entfernen',
    content: (
      <p className="text-gray-600">
        Nicht tragende Wände sind in vielen Wohnungen reine Raumtrenner. Der Aufwand liegt oft weniger im Rückbau selbst, sondern in der Fertigstellung danach: Boden, Decke, Wandflächen, Sockelleisten, Elektrik und Oberflächen müssen sauber angepasst werden.
      </p>
    ),
  },
  {
    title: 'Wanddurchbruch bei Altbausanierung',
    content: (
      <p className="text-gray-600">
        Altbauten bringen besondere Fragen mit: unklare Leitungen, unterschiedliche Baustoffe und mögliche Schadstoffe. Radex ist zertifiziert für Schimmel- und Asbestsanierung mit Sachkunde nach TRGS 519. Wenn bei einem Umbau Schadstoffverdacht besteht, wird dieser in den Ablauf integriert.
      </p>
    ),
  },
  {
    title: 'Wanddurchbruch im Gewerbeobjekt',
    content: (
      <p className="text-gray-600">
        Bei Gewerbeflächen geht es häufig um neue Nutzung: ein Büro soll offener werden, eine Praxis braucht andere Räume oder ein Ladenlokal soll umgebaut werden. Radex koordiniert Wanddurchbrüche mit Blick auf Nutzung, Ablauf und Übergabe.
      </p>
    ),
  },
  {
    title: 'Kosten für Wand entfernen und Wanddurchbruch',
    content: (
      <p className="text-gray-600">
        Die Kosten hängen von Wandart, Tragfunktion, Leitungen, Statik, Staubschutz, Entsorgung und Anschlussarbeiten ab. Seriöse Kosten lassen sich erst nach einer Bestandsaufnahme nennen. Radex gibt keine pauschalen Versprechen ohne Objektkenntnis.
      </p>
    ),
  },
  {
    title: 'Typische Fehler beim Wand entfernen',
    content: (
      <p className="text-gray-600">
        Häufige Fehler sind: keine Prüfung der Statik, keine Leitungsortung, fehlender Staubschutz, kein Plan für Bodenanschlüsse und zu spätes Einbinden von Trockenbau oder Malerarbeiten. Radex betrachtet den Wanddurchbruch als Umbauprojekt – Ziel ist ein fertiger Raum.
      </p>
    ),
  },
  {
    title: 'Regionale Einsatzgebiete im Rhein-Main-Gebiet',
    content: (
      <p className="text-gray-600">
        Radex ist in über 60 Städten im Rhein-Main-Gebiet aktiv – unter anderem Rödermark, Rodgau, Dietzenbach, Dreieich, Langen, Neu-Isenburg, Offenbach, Frankfurt, Darmstadt, Hanau, Seligenstadt und viele weitere Gemeinden.{' '}
        <a href="/einsatzgebiete-rhein-main">Einsatzgebiete</a>.
      </p>
    ),
  },
  {
    title: 'Verwandte Leistungen',
    content: (
      <ul className="space-y-2 text-gray-600">
        <li><a href="/leistungen/innenausbau-umbau">Innenausbau & Umbau</a></li>
        <li><a href="/trockenbau-rhein-main">Trockenbau</a></li>
        <li><a href="/raeume-umbauen-rhein-main">Räume umbauen</a></li>
        <li><a href="/innenausbau-wohnung-rhein-main">Innenausbau Wohnung</a></li>
        <li><a href="/innenausbau-haus-rhein-main">Innenausbau Haus</a></li>
        <li><a href="/generalunternehmer-rhein-main">Generalunternehmer</a></li>
        <li><a href={RADEX_LIVE_URL}>Radex Live</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
    ),
  },
  {
    title: 'Kann man jede Wand einfach entfernen?',
    content: (
      <p className="text-gray-600">
        Nein. Vor dem Entfernen einer Wand muss geprüft werden, ob sie tragend ist, ob Leitungen darin verlaufen und ob Genehmigungen oder Zustimmungen notwendig sind.
      </p>
    ),
  },
  {
    title: 'Wie erkenne ich, ob eine Wand tragend ist?',
    content: (
      <p className="text-gray-600">
        Einige Merkmale können Hinweise geben, zum Beispiel Wandstärke, Material oder Lage im Grundriss. Sicher ist das aber erst nach Prüfung von Bauunterlagen und gegebenenfalls durch einen Tragwerksplaner.
      </p>
    ),
  },
  {
    title: 'Brauche ich für einen Wanddurchbruch einen Statiker?',
    content: (
      <p className="text-gray-600">
        Wenn die Wand tragend ist oder nicht sicher ausgeschlossen werden kann, dass sie tragend ist, sollte ein Tragwerksplaner eingebunden werden.
      </p>
    ),
  },
  {
    title: 'Was passiert, wenn Leitungen in der Wand verlaufen?',
    content: (
      <p className="text-gray-600">
        Leitungen müssen vor dem Rückbau geortet, gesichert oder umgelegt werden. Elektroarbeiten dürfen nur durch Elektrofachkräfte ausgeführt werden. Heizungs- und Sanitärleitungen werden durch SHK-Fachleute bearbeitet.
      </p>
    ),
  },
  {
    title: 'Kann Radex eine tragende Wand entfernen?',
    content: (
      <p className="text-gray-600">
        Radex koordiniert Wanddurchbrüche auch bei tragenden Wänden, wenn die notwendige Fachplanung vorliegt. Die statische Berechnung übernimmt ein Tragwerksplaner.
      </p>
    ),
  },
  {
    title: 'Kann ein Wanddurchbruch in einer bewohnten Wohnung erfolgen?',
    content: (
      <p className="text-gray-600">
        Ja, das ist möglich, erfordert aber guten Staubschutz, klare Arbeitszeiten und eine gute Abstimmung. Radex plant solche Maßnahmen im Ablauf mit ein.
      </p>
    ),
  },
  {
    title: 'Was ist bei Eigentumswohnungen zu beachten?',
    content: (
      <p className="text-gray-600">
        Bei Eigentumswohnungen müssen Teilungserklärung, Gemeinschaftseigentum, Hausverwaltung und gegebenenfalls Zustimmung der Eigentümergemeinschaft geprüft werden.
      </p>
    ),
  },
  {
    title: 'Kann ein Wanddurchbruch mit einer Badsanierung kombiniert werden?',
    content: (
      <p className="text-gray-600">
        Ja. Wenn ein Bad vergrößert oder ein Grundriss verändert werden soll, kann der Wanddurchbruch Teil der Badsanierung sein. Dabei müssen Sanitär, Abdichtung, Elektro, Fliesen und Trockenbau abgestimmt werden.
      </p>
    ),
  },
];

function SharedCTABlock({ isHero = false, centered = false }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? '' : 'mt-8'}`}
      style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: centered ? 'center' : 'flex-start',
      }}
    >
      <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
      <a
        href="https://wa.me/496074960620"
        target="_blank"
        rel="noopener noreferrer"
        className="btn br-btn-whatsapp"
      >
        Fotos über WhatsApp senden <MessageSquare size={18} color="#25D366" style={{ marginLeft: '8px' }} />
      </a>
      <a
        href="tel:+496074960620"
        className="btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: isHero ? 'transparent' : '#fff',
          border: isHero ? '1px solid #111827' : '1px solid #d1d5db',
          color: '#111827',
          padding: '12px 24px',
          borderRadius: '4px',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        <Phone size={18} /> Jetzt anrufen
      </a>
    </div>
  );
}

function PremiumIconCards({ cards }) {
  return (
    <div className="br-nav-landing-grid">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.title} className="br-decision-card" style={{ cursor: 'default' }}>
            <div className="br-decision-icon">
              <Icon size={40} strokeWidth={1.5} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function WandEntfernenLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Wand entfernen im Rhein-Main-Gebiet | Räume öffnen | Radex',
    description:
      'Nichttragende Wände fachgerecht entfernen und moderne Wohnräume schaffen. Professionelle Planung und Umbauten im gesamten Rhein-Main-Gebiet.',
    path: '/wand-entfernen-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Wand entfernen im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">
              Mehr Licht. Mehr Platz. Offene Wohnkonzepte.
            </p>
            <p className="br-hero-text">
              Das Entfernen nichttragender Wände schafft offene Grundrisse, mehr Tageslicht und ein völlig neues Wohngefühl. Radex prüft die baulichen Voraussetzungen und koordiniert sämtliche Arbeiten fachgerecht im Rahmen Ihrer Sanierung oder Modernisierung.
            </p>
            <p className="br-hero-text" style={{ fontSize: '14px', color: '#6b7280', marginTop: '12px' }}>
              Hinweis: Tragende Wände dürfen nur nach fachlicher Prüfung und gegebenenfalls statischer Freigabe verändert werden.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Umbauprojekte</h2>
          </div>
          <PremiumIconCards cards={projectCards} />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Kosten</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Mit unserem Sanierungskosten-Rechner erhalten Sie eine erste Orientierung. Nach einer Besichtigung erstellen wir ein individuelles Festpreisangebot.
            </p>
          </div>
        </div>
        <SanierungskostenRechner defaultType="wohnung" compact />
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Radex Live</h2>
            <p className="br-section-subtitle">Schauen Sie uns bei der Arbeit über die Schulter.</p>
          </div>

          <div
            className="br-project-img mb-10"
            style={{
              backgroundImage: `url(${LIVE_IMAGE})`,
              height: '420px',
              borderRadius: '8px',
            }}
          />

          <div className="br-projects-grid">
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: `url(${LIVE_IMAGE})` }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Offene Wohnküche</h4>
                <p>Frankfurt am Main</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/wohnzimmer.webp)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Wanddurchbruch Wohnbereich</h4>
                <p>Offenbach</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/boden.webp)' }}>
                <span className="br-project-badge">Abgeschlossen</span>
              </div>
              <div className="br-project-info">
                <h4>Grundrissmodernisierung</h4>
                <p>Darmstadt</p>
              </div>
            </a>
          </div>

          <div className="text-center mt-10" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={RADEX_LIVE_URL} className="br-btn-outline-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Alle Projekte ansehen
            </a>
            <a href="#kontakt" className="br-btn-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Projekt anfragen
            </a>
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="br-section-title">Projektablauf</h2>
          </div>
          <div className="br-process-flow">
            {processSteps.map((step, idx) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="br-process-step">
                  <div className="br-step-number">{idx + 1}</div>
                  <h4>{step}</h4>
                </div>
                {idx < processSteps.length - 1 && <ArrowRight className="br-step-arrow" size={24} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-12">
            <h2 className="br-section-title">Häufig gestellte Fragen</h2>
          </div>
          <div className="br-faq-grid">
            {faqsData.map((faq, i) => (
              <div key={faq.q} className="home-faq-item">
                <button
                  type="button"
                  className="home-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left' }}>{faq.q}</span>
                  <ChevronDown
                    style={{
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                    color="#9ca3af"
                    size={18}
                  />
                </button>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: openFaq === i ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease',
                    padding: 0,
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ borderTop: '1px solid #f9fafb', padding: '16px', color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Jetzt kostenlos beraten lassen</h2>
            <p className="br-section-subtitle mb-8">
              Sie möchten eine Wand entfernen, Küche und Wohnzimmer verbinden oder Ihren Grundriss modernisieren?
              Senden Sie uns Fotos per WhatsApp oder vereinbaren Sie eine persönliche Beratung.
            </p>
            <SharedCTABlock centered />
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-12">
            <h2 className="br-section-title">Weitere Informationen</h2>
          </div>
          <div className="br-faq-grid">
            {seoAccordions.map((item, i) => (
              <div key={item.title} className="home-faq-item">
                <button
                  type="button"
                  className="home-faq-btn"
                  onClick={() => setOpenSeo(openSeo === i ? null : i)}
                  aria-expanded={openSeo === i}
                >
                  <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left' }}>{item.title}</span>
                  <ChevronDown
                    style={{
                      transform: openSeo === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                    color="#9ca3af"
                    size={18}
                  />
                </button>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: openSeo === i ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ borderTop: '1px solid #f9fafb', padding: '16px', fontSize: '15px', lineHeight: '1.6' }}>
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
