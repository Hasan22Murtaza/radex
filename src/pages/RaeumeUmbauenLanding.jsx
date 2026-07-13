import { useEffect, useState } from 'react';
import { RADEX_LIVE_URL } from '../constants/brand';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  ArrowRight,
  Sofa,
  UtensilsCrossed,
  LayoutGrid,
  Home,
  Award,
  Users,
  UserCheck,
  ShieldCheck,
  MapPin,
  Wrench,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';

const HERO_IMAGE = '/img/raeume-umbauen-hero.webp';
const LIVE_IMAGE = '/img/raeume-umbauen-radex-live.webp';

const roomCards = [
  { title: 'Wohnzimmer öffnen', desc: 'Mehr Licht und offene Wohnbereiche schaffen.', icon: Sofa },
  { title: 'Küche integrieren', desc: 'Wohnküche und offene Grundrisse realisieren.', icon: UtensilsCrossed },
  { title: 'Räume neu aufteilen', desc: 'Wohnfläche optimal an neue Bedürfnisse anpassen.', icon: LayoutGrid },
  { title: 'Kompletter Umbau', desc: 'Mehrere Räume gleichzeitig modernisieren.', icon: Home },
];

const whyRadexCards = [
  { title: 'Individuelle Planung', desc: 'Jeder Umbau wird objektbezogen geplant – passend zu Nutzung, Bestand und Ziel.', icon: Wrench },
  { title: 'Alles aus einer Hand', desc: 'Planung, Koordination und Ausführung mit einem festen Ansprechpartner.', icon: Users },
  { title: 'Koordination aller Gewerke', desc: 'Elektro, SHK, Trockenbau, Böden und Malerarbeiten in der richtigen Reihenfolge.', icon: LayoutGrid },
  { title: 'Fester Ansprechpartner', desc: 'Von der ersten Idee bis zur Übergabe begleitet Sie ein festes Team.', icon: UserCheck },
  { title: 'Festpreisgarantie', desc: 'Transparente Angebote ohne versteckte Kosten nach Besichtigung vor Ort.', icon: ShieldCheck },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Über 60 Städte – Erfahrung mit Bestandswohnungen und -häusern.', icon: MapPin },
];

const processSteps = [
  'Kostenlose Beratung',
  'Besichtigung vor Ort',
  'Planung des neuen Grundrisses',
  'Umbauarbeiten',
  'Qualitätskontrolle',
  'Fertigstellung & Übergabe',
];

const faqsData = [
  {
    q: 'Welche Räume können umgebaut werden?',
    a: 'Grundsätzlich lassen sich Wohnzimmer, Küchen, Flure, Schlafzimmer, Arbeitsbereiche und weitere Innenräume in Wohnungen und Häusern umbauen. Entscheidend sind Bestand, Statik, Leitungen und die gewünschte Nutzung.',
  },
  {
    q: 'Kann der Grundriss verändert werden?',
    a: 'Ja, wenn Substanz, Statik und Leitungsführung es zulassen. Radex prüft vorab, welche Wände geöffnet, versetzt oder neu gesetzt werden können und welche Genehmigungen nötig sein könnten.',
  },
  {
    q: 'Muss dafür eine Wand entfernt werden?',
    a: 'Nicht immer. Manchmal reichen neue Durchgänge, Trockenbauwände oder eine andere Raumaufteilung. Ob eine Wand entfernt werden kann, hängt von Tragwerk, Leitungen und baurechtlichen Fragen ab.',
  },
  {
    q: 'Wie lange dauert ein Raumumbau?',
    a: 'Das hängt vom Umfang ab. Einzelne Räume oder Wandöffnungen können oft in wenigen Wochen umgesetzt werden. Größere Umbauten mit Technik, Böden und mehreren Gewerken brauchen länger – der Zeitplan wird nach der Planung festgelegt.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Ja. Nach Besichtigung und Abstimmung des Umfangs erstellen wir ein transparentes Festpreisangebot für Ihr Projekt.',
  },
  {
    q: 'Übernehmen Sie alle Gewerke?',
    a: 'Ja. Radex koordiniert Trockenbau, Elektro, SHK, Böden, Malerarbeiten und weitere Fachbetriebe als Gesamtprojekt – ideal als Generalunternehmer im Rhein-Main-Gebiet.',
  },
];

const seoAccordions = [
  {
    title: 'Innenausbau im Bestand braucht Bestandswissen',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Im Bestand geht es selten nur um neue Oberflächen. Innenausbau bedeutet meist, die innere Struktur einer Immobilie sinnvoll an die heutige Nutzung anzupassen. Dazu gehören Raumaufteilung, Licht, Technik, Böden, Türen, Oberflächen und die richtige Reihenfolge der Gewerke.
        </p>
        <p className="text-gray-600">
          Radex arbeitet im Rhein-Main-Gebiet als{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link> und führt Heizung, Sanitär und Gebäudetechnik als SHK-Meisterbetrieb mit Bernd Knoop als SHK-Meister und Betriebsleiter ein. Mehr zum{' '}
          <Link to="/leistungen/innenausbau-umbau">Innenausbau & Umbau</Link>.
        </p>
      </>
    ),
  },
  {
    title: 'Warum die Bestandsaufnahme so wichtig ist',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Hinter Wänden können alte Leitungen liegen, unter Böden mehrere Schichten, und frühere Umbauten verändern die heutige Ausgangslage. Deshalb beginnt ein gutes Innenausbauprojekt immer mit einer realistischen Begehung.
        </p>
        <p className="text-gray-600">
          So lassen sich Risiken wie Feuchtigkeit, unklare Wandaufbauten, alte Kleber, Leitungen oder mögliche Schadstoffthemen früh erkennen und in die Planung einordnen.
        </p>
      </>
    ),
  },
  {
    title: 'Typische Arbeiten beim Umbau',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Trockenbau, Raumaufteilung, Böden, Wände, Decken, Türen und technische Anpassungen gehören oft zusammen. Eine neue Wand braucht etwa Boden-, Decken- und Elektroanschlüsse. Ein neuer Boden muss mit Sockelleisten, Türen und Nutzungsanforderungen passen.
        </p>
        <p className="text-gray-600">
          Radex koordiniert diese Arbeiten so, dass Technik vor Oberfläche und Funktion vor reiner Optik kommt. Mehr zu{' '}
          <a href="/trockenbau-rhein-main">Trockenbau</a> und{' '}
          <a href="/wand-entfernen-rhein-main">Wand entfernen</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Umbau im bewohnten Bestand',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Nicht jedes Projekt findet im Leerstand statt. Wenn Eigentümer während der Arbeiten im Objekt wohnen, müssen Bauabschnitte, Staubschutz, Zugang, Lärm und Nutzung sauber organisiert werden.
        </p>
        <p className="text-gray-600">
          Radex spricht solche Rahmenbedingungen offen an und bewertet realistisch, ob eine Etappensanierung oder eine größere Maßnahme sinnvoller ist.
        </p>
      </>
    ),
  },
  {
    title: 'Rhein-Main, 40+ Jahre Erfahrung und klare Ansprechpartner',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Radex begleitet Innenausbau- und Umbauprojekte in über 60 Städten und Gemeinden im Rhein-Main-Gebiet. Der Standort Rödermark liegt zentral im Einsatzgebiet.
        </p>
        <p className="text-gray-600">
          Für eine erste Einschätzung reicht oft ein Gespräch unter 06074 960620 oder über den{' '}
          <a href="/kontakt">Kontaktbereich</a>. Verfolgen Sie laufende Projekte bei{' '}
          <a href={RADEX_LIVE_URL}>Radex Live</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Für wen Innenausbau und Umbau sinnvoll ist',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Eigentümer von Wohnungen:</strong> Wenn Böden, Türen, Wände, Licht oder Raumaufteilung erneuert werden sollen.</li>
        <li><strong>Eigentümer von Häusern:</strong> Bei mehreren Ebenen, Haustechnik, Dachgeschoss und Keller.</li>
        <li><strong>Käufer vor dem Einzug:</strong> Innenausbau, Bad, Elektro und Technik in sinnvoller Reihenfolge bündeln.</li>
        <li><strong>Vermieter und Bestandshalter:</strong> Klare Bauabschnitte und kurze Stillstandszeiten bei Neuvermietung.</li>
        <li><strong>Gewerbliche Nutzer:</strong> Bessere Raumstruktur, Trockenbau und technisch saubere Planung.</li>
      </ul>
    ),
  },
  {
    title: 'Typische Leistungen beim Innenausbau und Umbau',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Raumaufteilung und Grundriss:</strong> Offenere Wohnbereiche, neue Zimmerzuschnitte, bessere Flure oder Homeoffice.</li>
        <li><strong>Trockenbau:</strong> Neue Trennwände, abgehängte Decken, Vorwände und Installationsflächen.</li>
        <li><strong>Böden:</strong> Parkett, Designbelag, Vinyl, Fliesen mit sauberer Untergrundvorbereitung.</li>
        <li><strong>Wände und Decken:</strong> Spachteln, Verputzen, Streichen und fachgerechte Vorbereitung.</li>
        <li><strong>Türen und Zargen:</strong> Neue Innentüren und saubere Anschlüsse.</li>
        <li><strong>Technik im Innenausbau:</strong> Elektro, Licht, Heizung und Sanitär früh mitgedacht.</li>
      </ul>
    ),
  },
  {
    title: 'Kosten für Innenausbau und Umbau',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Die Kosten hängen stark von Fläche, Zustand, Technik und Umfang ab. Die Angaben dienen nur der Orientierung.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li><strong>Trockenbauwand:</strong> ab 60 € / m²</li>
          <li><strong>Malerarbeiten:</strong> ab 15 € / m²</li>
          <li><strong>Bodenverlegung:</strong> ab 40 € / m²</li>
          <li><strong>Wanddurchbruch:</strong> projektbezogen</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Was gehört zum Innenausbau bei einer Sanierung?',
    content: (
      <p className="text-gray-600">
        Zum Innenausbau gehören Böden, Wände, Decken, Türen, Zargen, Trockenbau, Raumaufteilung, Oberflächen, Beleuchtung, Elektro, Heizung, Sanitär und alle Arbeiten, die das Innere nutzbar machen.{' '}
        <a href="/innenausbau-wohnung-rhein-main">Innenausbau Wohnung</a> ·{' '}
        <a href="/innenausbau-haus-rhein-main">Innenausbau Haus</a>.
      </p>
    ),
  },
  {
    title: 'Wann lohnt sich ein Umbau im Bestand?',
    content: (
      <p className="text-gray-600">
        Ein Umbau lohnt sich, wenn die Substanz grundsätzlich gut ist, aber Grundriss, Technik, Böden, Wände oder Ausstattung nicht mehr zur heutigen Nutzung passen. Besonders nach Kauf, vor Einzug oder bei veränderten Wohnbedürfnissen.{' '}
        <a href="/wohnungssanierung-rhein-main">Wohnungssanierung</a> ·{' '}
        <a href="/haussanierung-rhein-main">Haussanierung</a>.
      </p>
    ),
  },
  {
    title: 'Was ist der Unterschied zwischen Innenausbau und Sanierung?',
    content: (
      <p className="text-gray-600">
        Innenausbau betrifft vor allem den inneren Ausbau mit Wänden, Böden, Decken, Türen und technischer Integration. Sanierung ist breiter und kann zusätzlich Bad, Heizung, Leitungen, Fenster, Energie oder Schadstoffe betreffen.
      </p>
    ),
  },
  {
    title: 'Kann Radex Raumaufteilung und Trockenbau mitplanen?',
    content: (
      <p className="text-gray-600">
        Ja. Radex koordiniert neue Raumaufteilungen, Trockenbauwände, abgehängte Decken, Vorsatzschalen, Schallschutz und Wandöffnungen. Vor Eingriffen in vorhandene Wände wird geprüft, ob Tragwerk, Leitungen oder Fachplanung betroffen sind.
      </p>
    ),
  },
  {
    title: 'Kann eine Wand einfach entfernt werden?',
    content: (
      <p className="text-gray-600">
        Nein. Vor einem Wanddurchbruch müssen Statik, Leitungsführung, Deckenanschluss, Bodenanschluss und mögliche Genehmigungsfragen geprüft werden. Erst danach lässt sich eine sichere und sinnvolle Lösung planen.
      </p>
    ),
  },
  {
    title: 'Wie koordiniert Radex Innenausbau, Elektro und Sanitär?',
    content: (
      <p className="text-gray-600">
        Radex plant die Gewerke in der richtigen Reihenfolge. Elektro, SHK und Leitungen werden vor Trockenbau, Böden und Oberflächen berücksichtigt. Im SHK-Bereich bringt Radex die Meisterkompetenz von Bernd Knoop ein.
      </p>
    ),
  },
  {
    title: 'Kann Innenausbau im bewohnten Objekt stattfinden?',
    content: (
      <p className="text-gray-600">
        Das hängt vom Umfang ab. Einzelne Räume oder Etappen sind oft möglich. Wenn Bad, Küche, Elektro, Heizung oder größere Rückbauarbeiten betroffen sind, kann eine temporäre Ausweichlösung sinnvoller sein.
      </p>
    ),
  },
  {
    title: 'Was kostet Innenausbau im Rhein-Main-Gebiet?',
    content: (
      <p className="text-gray-600">
        Die Kosten hängen von Umfang, Zustand, Technik, Materialien und beteiligten Gewerken ab. Ein realistisches Angebot entsteht erst nach Begehung und klarer Leistungsabstimmung.
      </p>
    ),
  },
  {
    title: 'Bietet Radex Innenausbau für Wohnungen und Häuser an?',
    content: (
      <p className="text-gray-600">
        Ja. Radex koordiniert Innenausbau für Eigentumswohnungen, Altbauwohnungen, Einfamilienhäuser, Doppelhaushälften, Reihenhäuser und Bestandshäuser im Rhein-Main-Gebiet.
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

export default function RaeumeUmbauenLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Räume umbauen im Rhein-Main-Gebiet | Grundriss modernisieren | Radex',
    description:
      'Räume professionell umbauen und Wohnflächen optimal nutzen. Grundrisse modernisieren, Wohnkomfort steigern und Umbauten fachgerecht umsetzen – alles aus einer Hand im Rhein-Main-Gebiet.',
    path: '/raeume-umbauen-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Räume umbauen im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">
              Mehr Platz, bessere Raumaufteilung und modernes Wohnen.
            </p>
            <p className="br-hero-text">
              Viele Grundrisse entsprechen heute nicht mehr den Anforderungen des modernen Wohnens. Durch den professionellen Umbau einzelner Räume entstehen offene Wohnbereiche, mehr Tageslicht und eine deutlich bessere Nutzung der vorhandenen Wohnfläche. Radex plant und koordiniert sämtliche Umbauarbeiten im gesamten Rhein-Main-Gebiet – von der ersten Idee bis zur fertigen Umsetzung.
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
            <h2 className="br-section-title">Welche Räume möchten Sie verändern?</h2>
          </div>
          <PremiumIconCards cards={roomCards} />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex wählen</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Kosten für einen Raumumbau</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Nutzen Sie unseren Sanierungskosten-Rechner für eine erste Orientierung. Nach einer Besichtigung erstellen wir ein individuelles Festpreisangebot für Ihr Projekt.
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

          <p className="br-section-subtitle text-center mb-10" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
            Nicht jedes Projekt darf nach der Fertigstellung veröffentlicht werden. Deshalb zeigen wir Ihnen bei Radex Live echte Einblicke in laufende Umbauprojekte und abgeschlossene Modernisierungen aus dem gesamten Rhein-Main-Gebiet. So sehen Sie, wie bestehende Räume Schritt für Schritt in moderne Wohnbereiche verwandelt werden.
          </p>

          <div className="br-projects-grid">
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/boden.webp)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Grundrissumbau Wohnung</h4>
                <p>Frankfurt am Main</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/wohnzimmer.webp)' }}>
                <span className="br-project-badge">Abgeschlossen</span>
              </div>
              <div className="br-project-info">
                <h4>Offenes Wohnkonzept</h4>
                <p>Bad Homburg</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: `url(${LIVE_IMAGE})` }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Raumumbau Einfamilienhaus</h4>
                <p>Oberursel</p>
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
            <h2 className="br-section-title">So läuft Ihr Projekt ab</h2>
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
              Sie möchten Räume neu gestalten oder Ihren Grundriss modernisieren?
              Senden Sie uns Fotos oder Grundrisse per WhatsApp oder vereinbaren Sie eine persönliche Beratung. Gemeinsam entwickeln wir die optimale Lösung für Ihre Immobilie.
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

          <div className="br-trust-footer mt-12">
            <div className="br-trust-item">
              <Award size={32} color="#aaa" />
              <div>
                <strong>500+</strong>
                <span>Abgeschlossene Projekte</span>
              </div>
            </div>
            <div className="br-trust-item">
              <MapPin size={32} color="#aaa" />
              <div>
                <strong>60+</strong>
                <span>Betreute Städte</span>
              </div>
            </div>
            <div className="br-trust-item">
              <ShieldCheck size={32} color="#aaa" />
              <div>
                <strong>100%</strong>
                <span>Festpreisgarantie</span>
              </div>
            </div>
            <div className="br-trust-item">
              <Users size={32} color="#aaa" />
              <div>
                <strong>SHK-Meister</strong>
                <span>Zugelassener Fachbetrieb</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
