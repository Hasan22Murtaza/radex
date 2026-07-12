import { useEffect, useState } from 'react';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  ArrowRight,
  Building2,
  Home,
  Landmark,
  Bath,
  Clock,
  Users,
  UserCheck,
  ShieldCheck,
  MapPin,
  CalendarCheck,
  Handshake,
} from 'lucide-react';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';

const HERO_IMAGE = '/img/schnellsanierung-hero.webp';
const LIVE_IMAGE = '/img/schnellsanierung-radex-live.webp';

const whenCards = [
  { title: 'Wohnung modernisieren', desc: 'Kurze Bauzeiten für Eigentumswohnungen.', icon: Building2 },
  { title: 'Haus modernisieren', desc: 'Effiziente Komplettsanierungen.', icon: Home },
  { title: 'Altbau modernisieren', desc: 'Schnelle Planung für Bestandsgebäude.', icon: Landmark },
  { title: 'Badezimmer erneuern', desc: 'Modernes Bad mit optimierter Bauzeit.', icon: Bath },
];

const whyRadexCards = [
  { title: 'Optimierte Bauabläufe', desc: 'Klare Planung, Materialauswahl und Gewerkeabfolge für eine möglichst kurze Bauzeit.', icon: Clock },
  { title: 'Koordination aller Gewerke', desc: 'Sanitär, Elektro, Innenausbau, Maler, Boden und weitere Fachbetriebe abgestimmt.', icon: Users },
  { title: 'Ein fester Ansprechpartner', desc: 'Von der Erstberatung bis zur Übergabe – ein Ansprechpartner für Ihr gesamtes Projekt.', icon: UserCheck },
  { title: 'Transparente Festpreisangebote', desc: 'Nach Besichtigung erhalten Sie ein klares Angebot ohne versteckte Kosten.', icon: ShieldCheck },
  { title: 'Termintreue', desc: 'Realistische Zeitpläne und strukturierte Umsetzung – besonders vor Einzug oder Neuvermietung.', icon: CalendarCheck },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Über 60 Städte – kurze Wege und Erfahrung mit Bestandsimmobilien.', icon: MapPin },
];

const serviceCards = [
  { to: '/badsanierung-rhein-main', title: 'Badsanierung', desc: 'Bad modernisieren mit koordinierter Ausführung und kurzer Bauzeit.', icon: Bath },
  { to: '/wohnungssanierung-rhein-main', title: 'Wohnungssanierung', desc: 'Eigentumswohnungen effizient modernisieren – aus einer Hand.', icon: Building2 },
  { to: '/haussanierung-rhein-main', title: 'Haussanierung', desc: 'Häuser gezielt und strukturiert modernisieren.', icon: Home },
  { to: '/komplettsanierung-rhein-main', title: 'Komplettsanierung', desc: 'Mehrere Bereiche in einem abgestimmten Gesamtprojekt.', icon: Handshake },
];

const processSteps = [
  'Kostenlose Erstberatung',
  'Kurzfristige Besichtigung',
  'Projektplanung',
  'Festpreisangebot',
  'Koordinierte Ausführung',
  'Fertigstellung & Übergabe',
];

const faqsData = [
  {
    q: 'Wie schnell kann eine Sanierung beginnen?',
    a: 'Nach Ihrer Anfrage und ersten Fotos oder Angaben zum Objekt vereinbaren wir zeitnah einen Besichtigungstermin. Bei zeitkritischen Projekten priorisieren wir die Terminvergabe entsprechend.',
  },
  {
    q: 'Wie lange dauert eine Schnellsanierung?',
    a: 'Das hängt vom Umfang, Zustand und den gewählten Materialien ab. Eine gezielte Wohnungssanierung kann oft in wenigen Wochen umgesetzt werden – bei klarer Planung und abgestimmten Gewerken.',
  },
  {
    q: 'Welche Projekte eignen sich dafür?',
    a: 'Besonders gut geeignet sind Sanierungen nach Immobilienkauf, vor Einzug oder Neuvermietung sowie gezielte Modernisierungen von Bad, Böden, Wänden, Elektro und Innenausbau.',
  },
  {
    q: 'Koordinieren Sie alle Gewerke?',
    a: 'Ja. Radex koordiniert als Generalunternehmer alle notwendigen Gewerke – von Sanitär und Elektro über Trockenbau und Malerarbeiten bis zu Böden und Innenausbau.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Ja. Nach Besichtigung und Abstimmung des Umfangs erstellen wir ein transparentes Festpreisangebot für Ihr Projekt.',
  },
  {
    q: 'Arbeiten Sie im gesamten Rhein-Main-Gebiet?',
    a: 'Ja. Radex betreut Schnellsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet – unter anderem Frankfurt, Offenbach, Darmstadt, Hanau, Rodgau, Dreieich und Rödermark.',
  },
];

const seoAccordions = [
  {
    title: 'Was bedeutet Schnellsanierung?',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Eine Schnellsanierung ist eine Sanierung mit klar begrenztem Umfang, guter Vorbereitung und abgestimmtem Ablauf. Ziel ist, eine Immobilie möglichst effizient wieder nutzbar, vermietbar oder bezugsfertig zu machen.
        </p>
        <p className="mb-4 text-gray-600">Typische Maßnahmen:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>Böden erneuern</li>
          <li>Wände und Decken überarbeiten</li>
          <li>Bad modernisieren</li>
          <li>Elektroarbeiten koordinieren</li>
          <li>Türen und Innenausbau erneuern</li>
          <li>kleinere Grundrissanpassungen</li>
          <li>Sanitärarbeiten</li>
          <li>Malerarbeiten</li>
        </ul>
        <p className="text-gray-600">
          Eine Schnellsanierung funktioniert besonders gut, wenn vor Beginn klar ist, welche Arbeiten notwendig sind und welche Materialien verwendet werden. Mehr zur{' '}
          <a href="/sanierung-rhein-main">Sanierung Rhein-Main</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Wohnung schnell sanieren',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Eine Wohnung soll oft schnell saniert werden, wenn sie gekauft, geerbt, neu vermietet oder nach Auszug eines Mieters aufgewertet werden soll. Bei Wohnungen ist eine gute Koordination besonders wichtig, weil Hausordnung, Nachbarn, Zugänge und Ruhezeiten berücksichtigt werden müssen.
        </p>
        <p className="mb-4 text-gray-600">Typische Arbeiten:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>Bad modernisieren</li>
          <li>Böden erneuern</li>
          <li>Wände streichen</li>
          <li>Elektro prüfen</li>
          <li>Türen erneuern</li>
          <li>Innenausbau anpassen</li>
        </ul>
        <p className="text-gray-600">
          <a href="/wohnungssanierung-rhein-main">Wohnungssanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Haus schnell sanieren',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Bei einem Haus können mehrere Bereiche gleichzeitig betroffen sein: Bad, Heizung, Elektro, Innenausbau, Keller oder Dachgeschoss. Deshalb ist eine klare Priorisierung wichtig. Nicht immer muss alles sofort gemacht werden. Häufig ist eine gezielte Schnellsanierung sinnvoll, um das Haus zunächst nutzbar oder bezugsfertig zu machen.
        </p>
        <p className="mb-4 text-gray-600">Typische Arbeiten:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>Bad und Gäste-WC</li>
          <li>Heizung und Sanitär</li>
          <li>Elektroarbeiten</li>
          <li>Böden und Wände</li>
          <li>Türen und Innenausbau</li>
          <li>kleinere Umbauten</li>
        </ul>
        <p className="text-gray-600">
          <a href="/haussanierung-rhein-main">Haussanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Sanierung nach Kauf',
    content: (
      <p className="text-gray-600">
        Nach dem Kauf einer Immobilie ist der Zeitpunkt für eine Sanierung besonders günstig. Die Räume sind meist leer, Entscheidungen können gebündelt werden und Arbeiten lassen sich vor dem Einzug effizient umsetzen. Radex unterstützt Eigentümer dabei, die wichtigsten Maßnahmen zu priorisieren und in einen klaren Ablauf zu bringen.{' '}
        <a href="/generalunternehmer-rhein-main">Generalunternehmer</a>.
      </p>
    ),
  },
  {
    title: 'Schneller Innenausbau',
    content: (
      <p className="text-gray-600">
        Der Innenausbau bestimmt, wie schnell eine Immobilie wieder genutzt werden kann. Böden, Wände, Türen, Decken und kleine Umbauten haben großen Einfluss auf das fertige Ergebnis. Wenn mehrere Gewerke gleichzeitig oder in kurzer Folge arbeiten, braucht es eine klare Abstimmung. Genau hier übernimmt Radex die Koordination.{' '}
        <a href="/innenausbau-umbau-rhein-main">Innenausbau & Umbau</a>.
      </p>
    ),
  },
  {
    title: 'Was beschleunigt eine Sanierung?',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Schnelle Sanierungen entstehen nicht durch Zufall. Entscheidend sind klare Entscheidungen vor Beginn. Wichtig sind:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>feste Materialauswahl</li>
          <li>klare Prioritäten</li>
          <li>realistischer Zeitplan</li>
          <li>abgestimmte Gewerke</li>
          <li>schnelle Kommunikation</li>
          <li>ein Ansprechpartner</li>
          <li>vorbereitete Baustelle</li>
        </ul>
        <p className="text-gray-600">
          Je weniger während der Bauphase geändert wird, desto schneller kann die Umsetzung erfolgen.
        </p>
      </>
    ),
  },
  {
    title: 'Warum Radex?',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Ein Ansprechpartner:</strong> Sie haben während des Projekts einen festen Ansprechpartner.</li>
        <li><strong>Koordinierte Gewerke:</strong> Radex stimmt Sanitär, Elektro, Innenausbau, Maler, Boden und weitere Gewerke ab.</li>
        <li><strong>Erfahrung im Bestand:</strong> Sanierungen im Bestand erfordern klare Abläufe und realistische Einschätzung.</li>
        <li><strong>Rhein-Main-Gebiet:</strong> Radex ist in Frankfurt, Offenbach, Darmstadt, Hanau, Rodgau, Dreieich, Rödermark und Umgebung tätig.</li>
      </ul>
    ),
  },
  {
    title: 'Verwandte Leistungen',
    content: (
      <ul className="space-y-2 text-gray-600">
        <li><a href="/sanierung-rhein-main">Sanierung Rhein-Main</a></li>
        <li><a href="/wohnungssanierung-rhein-main">Wohnungssanierung</a></li>
        <li><a href="/haussanierung-rhein-main">Haussanierung</a></li>
        <li><a href="/altbausanierung-rhein-main">Altbausanierung</a></li>
        <li><a href="/sanierungs-soforthilfe-rhein-main">Sanierungs-Soforthilfe</a></li>
        <li><a href="/bad-soforthilfe-rhein-main">Bad-Soforthilfe</a></li>
        <li><a href="/schnelle-badsanierung-rhein-main">Schnelle Badsanierung</a></li>
        <li><a href="/badsanierung-rhein-main">Badsanierung</a></li>
        <li><a href="/generalunternehmer-rhein-main">Generalunternehmer</a></li>
        <li><a href="/radex-live">Radex Live</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
    ),
  },
  {
    title: 'Was ist eine Schnellsanierung?',
    content: (
      <p className="text-gray-600">
        Eine Schnellsanierung ist eine Sanierung mit klarer Planung, begrenztem Umfang und abgestimmten Gewerken.
      </p>
    ),
  },
  {
    title: 'Kann eine Wohnung schnell saniert werden?',
    content: (
      <p className="text-gray-600">
        Ja. Besonders leere Wohnungen vor Einzug oder Neuvermietung lassen sich effizient sanieren.
      </p>
    ),
  },
  {
    title: 'Kann ein Haus schnell saniert werden?',
    content: (
      <p className="text-gray-600">
        Ja, wenn der Umfang klar definiert ist und die Arbeiten gut geplant sind.
      </p>
    ),
  },
  {
    title: 'Welche Arbeiten eignen sich für eine Schnellsanierung?',
    content: (
      <p className="text-gray-600">
        Böden, Wände, Bad, Elektroprüfung, Türen, Innenausbau und kleinere Modernisierungen.
      </p>
    ),
  },
  {
    title: 'Ist eine Schnellsanierung auch nach Immobilienkauf sinnvoll?',
    content: (
      <p className="text-gray-600">
        Ja. Vor dem Einzug lassen sich viele Arbeiten besonders gut bündeln.
      </p>
    ),
  },
  {
    title: 'Übernimmt Radex alle Gewerke?',
    content: (
      <p className="text-gray-600">
        Radex koordiniert die notwendigen Gewerke und stellt einen festen Ansprechpartner.
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

function PremiumIconCards({ cards, linked = false }) {
  return (
    <div className="br-nav-landing-grid">
      {cards.map((card) => {
        const Icon = card.icon;
        const content = (
          <>
            <div className="br-decision-icon">
              <Icon size={40} strokeWidth={1.5} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            {linked && card.to && <span className="br-btn-orange">Mehr erfahren</span>}
          </>
        );

        if (linked && card.to) {
          return (
            <a key={card.title} href={card.to} className="br-decision-card">
              {content}
            </a>
          );
        }

        return (
          <div key={card.title} className="br-decision-card" style={{ cursor: 'default' }}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default function SchnellsanierungLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Schnellsanierung im Rhein-Main-Gebiet | Schnell modernisieren | Radex',
    description:
      'Wohnung oder Haus schnell sanieren. Professionelle Planung, koordinierte Ausführung und kurze Bauzeiten im gesamten Rhein-Main-Gebiet.',
    path: '/schnellsanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Schnellsanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">
              Kurze Bauzeiten. Klare Planung. Professionelle Umsetzung.
            </p>
            <p className="br-hero-text">
              Sie möchten Ihre Immobilie möglichst schnell modernisieren, ohne auf Qualität zu verzichten? Durch eine professionelle Planung und die Koordination aller Gewerke sorgt Radex für einen reibungslosen Ablauf und kurze Bauzeiten. So wird Ihre Sanierung effizient umgesetzt – vom ersten Termin bis zur Fertigstellung.
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
            <h2 className="br-section-title">Für welche Projekte eignet sich eine Schnellsanierung?</h2>
          </div>
          <PremiumIconCards cards={whenCards} />
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
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Schnellsanierungen</h2>
          </div>
          <PremiumIconCards cards={serviceCards} linked />
        </div>
      </section>

      <section className="br-section">
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

      <section className="br-section br-bg-light">
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
            Nicht jedes Projekt darf veröffentlicht werden. Deshalb zeigen wir Ihnen bei Radex Live aktuelle Sanierungen und laufende Baustellen aus dem gesamten Rhein-Main-Gebiet. Erleben Sie Schritt für Schritt, wie Immobilien modernisiert werden und wie unsere Teams professionell zusammenarbeiten.
          </p>

          <div className="br-projects-grid">
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: `url(${LIVE_IMAGE})` }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Wohnungssanierung</h4>
                <p>Frankfurt am Main</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/wohnzimmer.webp)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Haussanierung</h4>
                <p>Offenbach</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/boden.webp)' }}>
                <span className="br-project-badge">Abgeschlossen</span>
              </div>
              <div className="br-project-info">
                <h4>Komplettsanierung</h4>
                <p>Darmstadt</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/radex-live" className="br-btn-outline-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Alle Projekte ansehen
            </a>
            <a href="#kontakt" className="br-btn-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Projekt anfragen
            </a>
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="br-section-title">So läuft Ihre Schnellsanierung ab</h2>
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

      <section className="br-section br-bg-light">
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

      <section id="kontakt" className="br-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Jetzt kostenlos beraten lassen</h2>
            <p className="br-section-subtitle mb-8">
              Sie möchten Ihre Immobilie schnell und professionell modernisieren?
              Senden Sie uns Fotos Ihres Projekts per WhatsApp oder vereinbaren Sie eine persönliche Beratung. Gemeinsam entwickeln wir einen realistischen Zeitplan für Ihre Sanierung.
            </p>
            <SharedCTABlock centered />
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
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
