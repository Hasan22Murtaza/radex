import { useEffect, useState } from 'react';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  Building2,
  Home,
  Hammer,
  Wrench,
  Users,
  UserCheck,
  ShieldCheck,
  MapPin,
  Award,
  LayoutGrid,
  Sofa,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo from '../useSeo';

const HERO_IMAGE = '/img/innenausbau-hero.webp';
const LIVE_IMAGE = '/img/innenausbau-radex-live.webp';

const projectCards = [
  {
    to: '/raeume-umbauen-rhein-main',
    title: 'Räume umbauen',
    desc: 'Grundriss modernisieren und Wohnflächen optimal nutzen.',
    icon: Sofa,
  },
  {
    to: '/innenausbau-wohnung-rhein-main',
    title: 'Innenausbau Wohnung',
    desc: 'Wohnungen modernisieren und optimal an neue Wohnbedürfnisse anpassen.',
    icon: Building2,
  },
  {
    to: '/innenausbau-haus-rhein-main',
    title: 'Innenausbau Haus',
    desc: 'Komplette Wohnhäuser modernisieren und Räume neu gestalten.',
    icon: Home,
  },
  {
    to: '/trockenbau-rhein-main',
    title: 'Trockenbau',
    desc: 'Flexible Raumlösungen mit modernen Trockenbausystemen schaffen.',
    icon: Hammer,
  },
  {
    to: '/wand-entfernen-rhein-main',
    title: 'Wand entfernen',
    desc: 'Offene Wohnkonzepte durch professionelle Wanddurchbrüche realisieren.',
    icon: Wrench,
  },
];

const whyRadexCards = [
  { title: 'Alles aus einer Hand', desc: 'Planung, Koordination und Ausführung aus einer Hand – ein Ansprechpartner für Ihr Projekt.', icon: Users },
  { title: 'Fester Ansprechpartner', desc: 'Von der ersten Beratung bis zur Übergabe begleitet Sie ein festes Team.', icon: UserCheck },
  { title: 'Koordination aller Gewerke', desc: 'Elektro, SHK, Trockenbau, Böden und Malerarbeiten in der richtigen Reihenfolge.', icon: LayoutGrid },
  { title: 'Individuelle Planung', desc: 'Jeder Innenausbau wird objektbezogen geplant – passend zu Nutzung und Bestand.', icon: Award },
  { title: 'Festpreisgarantie', desc: 'Transparente Angebote ohne versteckte Kosten nach Besichtigung vor Ort.', icon: ShieldCheck },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Über 60 Städte – kurze Wege und Erfahrung mit Bestandsimmobilien.', icon: MapPin },
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
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link> und führt Heizung, Sanitär und Gebäudetechnik als SHK-Meisterbetrieb mit Bernd Knoop als SHK-Meister und Betriebsleiter ein.
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
          <a href="/radex-live">Radex Live</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Für wen Innenausbau und Umbau sinnvoll ist',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Eigentümer von Wohnungen:</strong> Wenn Böden, Türen, Wände, Licht oder Raumaufteilung erneuert werden sollen, braucht es einen sauber geplanten Innenausbau.</li>
        <li><strong>Eigentümer von Häusern:</strong> Bei Häusern kommen oft mehrere Ebenen, Haustechnik, Dachgeschoss, Keller und spätere Erweiterungen zusammen.</li>
        <li><strong>Käufer vor dem Einzug:</strong> Wer eine Immobilie nach dem Kauf modernisiert, kann Innenausbau, Bad, Elektro und Technik in einer sinnvollen Reihenfolge bündeln.</li>
        <li><strong>Vermieter und Bestandshalter:</strong> Für Neuvermietung, Leerstand oder Modernisierung im Bestand sind klare Bauabschnitte und kurze Stillstandszeiten entscheidend.</li>
        <li><strong>Gewerbliche Nutzer:</strong> Auch Büros, Praxen und Dienstleistungsflächen profitieren von besserer Raumstruktur, Trockenbau, Licht und technisch sauberer Planung.</li>
      </ul>
    ),
  },
  {
    title: 'Typische Leistungen beim Innenausbau und Umbau',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Raumaufteilung und Grundriss:</strong> Offenere Wohnbereiche, neue Zimmerzuschnitte, bessere Flure oder ein zusätzliches Homeoffice.</li>
        <li><strong>Trockenbau:</strong> Neue Trennwände, abgehängte Decken, Vorwände und Installationsflächen für Leitungen und Technik.</li>
        <li><strong>Böden:</strong> Parkett, Designbelag, Vinyl, Fliesen oder andere Bodenlösungen mit sauberer Untergrundvorbereitung.</li>
        <li><strong>Wände und Decken:</strong> Spachteln, Verputzen, Streichen, Verkleiden und fachgerechte Vorbereitung der Oberflächen.</li>
        <li><strong>Türen und Zargen:</strong> Neue Innentüren, passende Zargen und saubere Anschlüsse für einen stimmigen Gesamteindruck.</li>
        <li><strong>Technik im Innenausbau:</strong> Elektro, Licht, Heizung und Sanitär werden früh mitgedacht und mit dem Ausbau abgestimmt.</li>
      </ul>
    ),
  },
  {
    title: 'Kosten für Innenausbau und Umbau',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Die Kosten hängen stark von Fläche, Zustand, Technik und Umfang ab. Die Angaben dienen nur der Orientierung – ein realistisches Angebot entsteht nach Begehung.
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
        Zum Innenausbau gehören Böden, Wände, Decken, Türen, Zargen, Trockenbau, Raumaufteilung, Oberflächen, Beleuchtung, Elektro, Heizung, Sanitär und alle Arbeiten, die das Innere einer Wohnung oder eines Hauses nutzbar und fertig machen. Mehr zur{' '}
        <Link to="/badsanierung-rhein-main">Badsanierung</Link> und{' '}
        <a href="/innenausbau-wohnung-rhein-main">Innenausbau Wohnung</a>.
      </p>
    ),
  },
  {
    title: 'Wann lohnt sich ein Umbau im Bestand?',
    content: (
      <p className="text-gray-600">
        Ein Umbau lohnt sich, wenn die Substanz grundsätzlich gut ist, aber Grundriss, Technik, Böden, Wände oder Ausstattung nicht mehr zur heutigen Nutzung passen. Besonders nach Kauf, vor Einzug oder bei veränderten Wohnbedürfnissen ist das oft sinnvoll.{' '}
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
        Nein. Vor einem Wanddurchbruch müssen Statik, Leitungsführung, Deckenanschluss, Bodenanschluss und mögliche Genehmigungsfragen geprüft werden. Erst danach lässt sich eine sichere und sinnvolle Lösung planen.{' '}
        <a href="/wand-entfernen-rhein-main">Wand entfernen</a>.
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
        Ja. Radex koordiniert Innenausbau für Eigentumswohnungen, Altbauwohnungen, Einfamilienhäuser, Doppelhaushälften, Reihenhäuser und Bestandshäuser im Rhein-Main-Gebiet.{' '}
        <a href="/innenausbau-wohnung-rhein-main">Innenausbau Wohnung</a> ·{' '}
        <a href="/innenausbau-haus-rhein-main">Innenausbau Haus</a>.
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
            {linked && <span className="br-btn-orange">Mehr erfahren</span>}
          </>
        );

        if (linked && card.to) {
          if (card.to.startsWith('http') || card.to.includes('-rhein-main')) {
            return (
              <a key={card.title} href={card.to} className="br-decision-card">
                {content}
              </a>
            );
          }
          return (
            <Link key={card.title} to={card.to} className="br-decision-card">
              {content}
            </Link>
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

export default function InnenausbauUmbauHub() {
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Innenausbau & Umbau im Rhein-Main-Gebiet | Radex Objektmanagement',
    description:
      'Innenausbau, Trockenbau und Umbauten für Wohnungen und Häuser im Rhein-Main-Gebiet. Professionell geplant und aus einer Hand umgesetzt.',
    path: '/leistungen/innenausbau-umbau',
    image: HERO_IMAGE,
  });

  return (
    <main className="badsanierung-page">
      {/* 1. HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Innenausbau &<br />
              <span>Umbau</span>
            </h1>
            <p className="br-hero-subtitle">
              Wohnräume modernisieren. Grundrisse verbessern. Mehr Wohnqualität schaffen.
            </p>
            <p className="br-hero-text">
              Ob einzelne Räume oder die komplette Immobilie – mit einem professionellen Innenausbau schaffen Sie mehr Wohnkomfort, eine bessere Raumnutzung und steigern gleichzeitig den Wert Ihrer Immobilie. Radex koordiniert sämtliche Innenausbau- und Umbauarbeiten im gesamten Rhein-Main-Gebiet – von der Planung bis zur fertigen Übergabe.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      {/* 2. PROJEKTE */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welches Projekt möchten Sie umsetzen?</h2>
            <p className="br-section-subtitle">
              Wählen Sie den Bereich aus, der am besten zu Ihrem Vorhaben passt. Auf den jeweiligen Detailseiten finden Sie weitere Informationen zu Leistungen, Ablauf und Kosten.
            </p>
          </div>
          <PremiumIconCards cards={projectCards} linked />
        </div>
      </section>

      {/* 3. WARUM RADEX */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex wählen</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      {/* 4. RADEX LIVE */}
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

          <div className="br-projects-grid">
            <div className="br-project-card">
              <div
                className="br-project-img"
                style={{ backgroundImage: 'url(/img/boden.webp)' }}
              >
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Innenausbau Wohnung</h4>
                <p>Frankfurt am Main</p>
              </div>
            </div>
            <div className="br-project-card">
              <div
                className="br-project-img"
                style={{ backgroundImage: 'url(/img/wohnzimmer.webp)' }}
              >
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Trockenbau & Boden</h4>
                <p>Bad Homburg</p>
              </div>
            </div>
            <div className="br-project-card">
              <div
                className="br-project-img"
                style={{ backgroundImage: `url(${LIVE_IMAGE})` }}
              >
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Innenausbau Einfamilienhaus</h4>
                <p>Oberursel</p>
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

      {/* 5. CTA */}
      <section id="kontakt" className="br-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Lassen Sie sich kostenlos beraten</h2>
            <p className="br-section-subtitle mb-8">
              Sie planen einen Innenausbau oder möchten Ihre Räume modernisieren?
              Senden Sie uns Fotos Ihres Projekts per WhatsApp oder vereinbaren Sie eine persönliche Beratung. Gemeinsam entwickeln wir die passende Lösung für Ihre Immobilie.
            </p>
            <SharedCTABlock centered />
          </div>
        </div>
      </section>

      {/* 6. SEO ACCORDIONS */}
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
