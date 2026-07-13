import { useEffect, useState } from 'react';
import { RADEX_LIVE_URL } from '../constants/brand';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  ArrowRight,
  Key,
  Building2,
  Clock,
  Handshake,
  FileText,
  UserCheck,
  Award,
  ShieldCheck,
  MapPin,
  Users,
  Bath,
  Home,
  Landmark,
} from 'lucide-react';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';

const HERO_IMAGE = '/img/sanierungs-soforthilfe-hero.webp';
const LIVE_IMAGE = '/img/sanierungs-soforthilfe-radex-live.webp';

const whenCards = [
  { title: 'Haus gekauft', desc: 'Modernisierung vor dem Einzug.', icon: Key },
  { title: 'Wohnung schnell renovieren', desc: 'Kurze Planungszeiten und koordinierte Umsetzung.', icon: Building2 },
  { title: 'Zeitkritische Projekte', desc: 'Wenn Termine eingehalten werden müssen.', icon: Clock },
  { title: 'Komplette Sanierung', desc: 'Ein Ansprechpartner für alle Gewerke.', icon: Handshake },
];

const whyRadexCards = [
  { title: 'Kurzfristige Erstberatung', desc: 'Schneller Erstkontakt und zeitnahe Klärung Ihres Sanierungsvorhabens.', icon: Phone },
  { title: 'Schnelle Projektplanung', desc: 'Strukturierte Planung mit klarer Priorisierung der Gewerke.', icon: FileText },
  { title: 'Ein Ansprechpartner für alle Gewerke', desc: 'Planung, Koordination und Ausführung aus einer Hand.', icon: UserCheck },
  { title: 'SHK-meistergeführter Fachbetrieb', desc: 'Heizung, Sanitär und Gebäudetechnik mit Meisterkompetenz.', icon: Award },
  { title: 'Transparente Festpreisangebote', desc: 'Klare Angebote ohne versteckte Kosten nach Besichtigung vor Ort.', icon: ShieldCheck },
  { title: 'Betreuung im gesamten Rhein-Main-Gebiet', desc: 'Über 60 Städte – kurze Wege und Erfahrung mit Bestandsimmobilien.', icon: MapPin },
];

const projectCards = [
  { to: '/badsanierung-rhein-main', title: 'Badsanierung', desc: 'Komplette Badmodernisierung mit koordinierter Ausführung.', icon: Bath },
  { to: '/wohnungssanierung-rhein-main', title: 'Wohnungssanierung', desc: 'Modernisierung von Eigentumswohnungen und Bestandswohnungen.', icon: Building2 },
  { to: '/haussanierung-rhein-main', title: 'Haussanierung', desc: 'Komplette Sanierung aus einer Hand.', icon: Home },
  { to: '/altbausanierung-rhein-main', title: 'Altbausanierung', desc: 'Modernisierung älterer Gebäude mit professioneller Planung.', icon: Landmark },
];

const processSteps = [
  'Kostenlose Erstberatung',
  'Kurzfristige Besichtigung',
  'Individuelle Projektplanung',
  'Festpreisangebot',
  'Koordinierte Ausführung aller Gewerke',
  'Fertigstellung & Übergabe',
];

const faqsData = [
  {
    q: 'Wie schnell kann ein Besichtigungstermin stattfinden?',
    a: 'Nach Ihrer Anfrage und ersten Fotos oder Angaben zum Objekt vereinbaren wir zeitnah einen Besichtigungstermin. Bei zeitkritischen Projekten priorisieren wir die Terminvergabe entsprechend.',
  },
  {
    q: 'Welche Sanierungsprojekte übernehmen Sie kurzfristig?',
    a: 'Radex koordiniert kurzfristig Badsanierungen, Wohnungssanierungen, Haussanierungen, Altbausanierungen und Teilsanierungen im Rhein-Main-Gebiet – immer mit klarer Planung und koordinierter Gewerkeabfolge.',
  },
  {
    q: 'Koordinieren Sie alle Gewerke?',
    a: 'Ja. Als Generalunternehmer koordiniert Radex SHK, Elektro, Trockenbau, Böden, Malerarbeiten und weitere Fachbetriebe in der richtigen Reihenfolge.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Ja. Nach Besichtigung und Abstimmung des Umfangs erstellen wir ein transparentes Festpreisangebot für Ihr Projekt.',
  },
  {
    q: 'Kann ich Fotos per WhatsApp senden?',
    a: 'Ja. Fotos von Räumen, Schäden oder Grundrissen helfen uns bei der ersten Einschätzung. Senden Sie diese einfach per WhatsApp – wir melden uns zeitnah zurück.',
  },
  {
    q: 'Arbeiten Sie im gesamten Rhein-Main-Gebiet?',
    a: 'Ja. Radex betreut Sanierungsprojekte in über 60 Städten und Gemeinden im Rhein-Main-Gebiet – unter anderem Frankfurt, Offenbach, Darmstadt, Hanau, Rodgau, Dreieich und Rödermark.',
  },
];

const seoAccordions = [
  {
    title: 'Schnelle Einschätzung bei Schäden und Sanierungsbedarf',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Ein Wasserschaden, Rohrbruch oder Feuchtigkeitsschaden in einer Wohnung oder einem Haus sollte schnell geprüft werden. Oft ist auf den ersten Blick nicht erkennbar, wie weit sich die Feuchtigkeit bereits ausgebreitet hat. Wände, Böden, Decken, Leitungen und angrenzende Räume können betroffen sein.
        </p>
        <p className="text-gray-600">
          Radex unterstützt Eigentümer, Vermieter und Hausverwaltungen im Rhein-Main-Gebiet bei der Einschätzung von Schäden und der anschließenden Sanierung. Wir prüfen die Situation vor Ort, besprechen die nächsten Schritte und koordinieren die notwendigen Arbeiten. Mehr zur{' '}
          <a href="/schnellsanierung-rhein-main">Schnellsanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Wasserschaden in Wohnung oder Haus',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Ein Wasserschaden kann durch defekte Leitungen, undichte Anschlüsse, beschädigte Abdichtungen, Heizungsleitungen oder Feuchtigkeitseintritt entstehen. Besonders kritisch ist, dass Feuchtigkeit oft unsichtbar bleibt.
        </p>
        <p className="mb-4 text-gray-600">Typische Anzeichen:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>feuchte Wände</li>
          <li>nasse Böden</li>
          <li>Wasserflecken</li>
          <li>muffiger Geruch</li>
          <li>aufgequollene Bodenbeläge</li>
          <li>Schimmelbildung</li>
          <li>beschädigte Decken</li>
        </ul>
        <p className="text-gray-600">
          Je früher der Schaden geprüft wird, desto besser lassen sich Folgeschäden vermeiden.
        </p>
      </>
    ),
  },
  {
    title: 'Rohrbruch und Leitungswasserschaden',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Ein Rohrbruch erfordert schnelles Handeln. Zuerst muss die Wasserzufuhr gestoppt und der Schaden dokumentiert werden. Danach müssen betroffene Leitungen, Wandbereiche und Bodenaufbauten geprüft werden.
        </p>
        <p className="text-gray-600">
          Nach einem Rohrbruch geht es nicht nur um die Reparatur der Leitung. Entscheidend ist, welche Bauteile durch Wasser beschädigt wurden und ob eine Sanierung notwendig wird.
        </p>
      </>
    ),
  },
  {
    title: 'Schimmel und Feuchtigkeit',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Schimmel entsteht häufig dort, wo Feuchtigkeit dauerhaft vorhanden ist. Die Ursache kann ein Wasserschaden, eine undichte Leitung, falsche Belüftung oder eine bauliche Schwachstelle sein.
        </p>
        <p className="text-gray-600">
          Wichtig ist, nicht nur den sichtbaren Schimmel zu entfernen. Die Ursache muss gefunden und dauerhaft beseitigt werden. Erst danach ist eine fachgerechte Wiederherstellung sinnvoll.
        </p>
      </>
    ),
  },
  {
    title: 'Sanierung nach Versicherungsschaden',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Bei Wasserschäden oder Rohrbrüchen ist häufig eine Versicherung beteiligt. Dafür ist eine saubere Dokumentation wichtig.
        </p>
        <p className="text-gray-600">
          Radex kann den Zustand aufnehmen, den Sanierungsumfang einschätzen und die Wiederherstellung koordinieren. So entsteht eine klare Grundlage für die weitere Bearbeitung.
        </p>
      </>
    ),
  },
  {
    title: 'Wohnung nach Schaden sanieren',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Nach einem Wasserschaden in einer Wohnung können Böden, Wände, Bad, Küche, Decken oder Leitungen betroffen sein. Je nach Umfang kann eine Teilsanierung oder vollständige Wohnungssanierung sinnvoll sein.
        </p>
        <p className="text-gray-600">
          Radex koordiniert die notwendigen Gewerke und sorgt dafür, dass die Wohnung wieder nutzbar wird.{' '}
          <a href="/wohnungssanierung-rhein-main">Wohnungssanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Haus nach Schaden sanieren',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          In einem Haus können Schäden mehrere Etagen, Keller, Leitungen oder technische Anlagen betreffen. Deshalb ist eine strukturierte Bestandsaufnahme wichtig.
        </p>
        <p className="text-gray-600">
          Radex prüft die betroffenen Bereiche und koordiniert die Sanierung vom Rückbau bis zur Wiederherstellung.{' '}
          <a href="/haussanierung-rhein-main">Haussanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Warum Radex für Sanierungs-Soforthilfe',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Ein Ansprechpartner:</strong> Sie haben einen festen Ansprechpartner für die gesamte Sanierung.</li>
        <li><strong>Koordinierte Gewerke:</strong> Radex koordiniert Sanitär, Innenausbau, Trockenbau, Elektro, Boden und weitere Gewerke.</li>
        <li><strong>SHK-Meisterkompetenz:</strong> Heizung, Sanitär und Gebäudetechnik werden fachlich betreut.</li>
        <li><strong>Rhein-Main-Gebiet:</strong> Radex ist in Frankfurt, Offenbach, Darmstadt, Hanau, Rodgau, Dreieich, Rödermark und Umgebung tätig.</li>
      </ul>
    ),
  },
  {
    title: 'Verwandte Leistungen',
    content: (
      <ul className="space-y-2 text-gray-600">
        <li><a href="/sanierung-rhein-main">Zur Sanierung Rhein-Main</a></li>
        <li><a href="/wohnungssanierung-rhein-main">Zur Wohnungssanierung</a></li>
        <li><a href="/haussanierung-rhein-main">Zur Haussanierung</a></li>
        <li><a href="/altbausanierung-rhein-main">Zur Altbausanierung</a></li>
        <li><a href="/bad-soforthilfe-rhein-main">Zur Bad-Soforthilfe</a></li>
        <li><a href="/schnelle-badsanierung-rhein-main">Zur schnellen Badsanierung</a></li>
        <li><a href="/badsanierung-rhein-main">Zur Badsanierung</a></li>
        <li><a href="/generalunternehmer-rhein-main">Generalunternehmer</a></li>
        <li><a href={RADEX_LIVE_URL}>Radex Live</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
    ),
  },
  {
    title: 'Was tun bei einem Wasserschaden in der Wohnung?',
    content: (
      <p className="text-gray-600">
        Zuerst Wasser stoppen, Schaden dokumentieren und betroffene Bereiche prüfen lassen.
      </p>
    ),
  },
  {
    title: 'Wer hilft bei einem Rohrbruch im Haus?',
    content: (
      <p className="text-gray-600">
        Nach dem Wasserstopp sollten Leitungen, Wände, Böden und angrenzende Bereiche geprüft werden.
      </p>
    ),
  },
  {
    title: 'Wann muss nach einem Wasserschaden saniert werden?',
    content: (
      <p className="text-gray-600">
        Wenn Feuchtigkeit Bauteile, Böden, Wände oder technische Anlagen beschädigt hat.
      </p>
    ),
  },
  {
    title: 'Kann Radex eine Wohnung nach Wasserschaden sanieren?',
    content: (
      <p className="text-gray-600">
        Ja. Radex koordiniert die notwendigen Arbeiten und begleitet die Sanierung.
      </p>
    ),
  },
  {
    title: 'Kann Radex ein Haus nach Rohrbruch sanieren?',
    content: (
      <p className="text-gray-600">
        Ja. Auch größere Schäden in Häusern können geprüft und koordiniert saniert werden.
      </p>
    ),
  },
  {
    title: 'Was kostet eine Sanierung nach Wasserschaden?',
    content: (
      <p className="text-gray-600">
        Das hängt vom Schadenumfang ab. Eine Einschätzung ist erst nach einer Besichtigung sinnvoll.
      </p>
    ),
  },
  {
    title: 'Hilft Radex bei Schimmel?',
    content: (
      <p className="text-gray-600">
        Ja. Wichtig ist, die Ursache der Feuchtigkeit zu erkennen und zu beheben.
      </p>
    ),
  },
  {
    title: 'Ist eine komplette Sanierung immer notwendig?',
    content: (
      <p className="text-gray-600">
        Nein. Manchmal reicht eine Teilsanierung. Das hängt vom Schadenbild ab.
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

export default function SanierungsSoforthilfeLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Sanierungs-Soforthilfe im Rhein-Main-Gebiet | Schnell zum Sanierungsstart | Radex',
    description:
      'Kurzfristige Beratung, schnelle Besichtigung und professionelle Projektplanung für Sanierungen im gesamten Rhein-Main-Gebiet. Jetzt kostenlose Ersteinschätzung sichern.',
    path: '/sanierungs-soforthilfe-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Sanierungs-Soforthilfe im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">
              Ihr Sanierungsprojekt soll schnell starten? Wir bringen es auf den Weg.
            </p>
            <p className="br-hero-text">
              Nicht jedes Sanierungsprojekt kann monatelang warten. Ob nach dem Hauskauf, vor dem Einzug oder wegen eines dringenden Modernisierungsbedarfs – Radex unterstützt Sie mit einer kurzfristigen Erstberatung, schneller Projektplanung und einer professionellen Koordination aller Gewerke. So vermeiden Sie lange Wartezeiten und schaffen frühzeitig Planungssicherheit.
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
            <h2 className="br-section-title">Wann ist unsere Sanierungs-Soforthilfe die richtige Lösung?</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Unsere Sanierungs-Soforthilfe richtet sich an Eigentümer, die keine Zeit verlieren möchten und ihr Projekt möglichst schnell starten wollen.
            </p>
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
            <h2 className="br-section-title">Welche Projekte übernehmen wir kurzfristig?</h2>
          </div>
          <PremiumIconCards cards={projectCards} linked />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Erste Kostenorientierung</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Nutzen Sie unseren Sanierungskosten-Rechner für eine erste Einschätzung. Nach einer Besichtigung erhalten Sie ein transparentes Festpreisangebot.
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
            Nicht jedes Projekt darf veröffentlicht werden. Deshalb zeigen wir Ihnen bei Radex Live laufende Sanierungen und aktuelle Baustellen aus dem gesamten Rhein-Main-Gebiet. So erhalten Sie authentische Einblicke in unsere tägliche Arbeit und erleben, wie koordinierte Sanierungen professionell umgesetzt werden.
          </p>

          <div className="br-projects-grid">
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/boden.webp)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Wohnungssanierung Innenausbau</h4>
                <p>Frankfurt am Main</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/wohnzimmer.webp)' }}>
                <span className="br-project-badge">Abgeschlossen</span>
              </div>
              <div className="br-project-info">
                <h4>Komplettsanierung Einfamilienhaus</h4>
                <p>Bad Homburg</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: `url(${LIVE_IMAGE})` }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Koordinierte Gewerke vor Ort</h4>
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

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="br-section-title">So läuft Ihre Sanierung ab</h2>
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
              Sie möchten Ihr Sanierungsprojekt ohne lange Wartezeiten starten?
              Senden Sie uns Fotos Ihrer Immobilie per WhatsApp oder vereinbaren Sie eine persönliche Beratung. Gemeinsam planen wir den schnellstmöglichen und professionellen Start Ihres Projekts.
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
