import { useEffect, useState } from 'react';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  Thermometer,
  Flame,
  Droplets,
  Award,
  ShieldCheck,
  Users,
  Wrench,
  MapPin,
  UserCheck,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo from '../useSeo';

const HERO_IMAGE = '/img/heizung-sanitaer-hero.webp';
const LIVE_IMAGE = '/img/heizung-sanitaer-radex-live.webp';

const serviceCards = [
  {
    to: '/heizung-sanitaer-rhein-main',
    title: 'Heizung modernisieren',
    desc: 'Effizient heizen, Energiekosten senken und den Wohnkomfort nachhaltig verbessern.',
    icon: Thermometer,
  },
  {
    to: '/waermepumpe-rhein-main',
    title: 'Wärmepumpe',
    desc: 'Zukunftssichere Heiztechnik mit attraktiven Fördermöglichkeiten und professioneller Planung.',
    icon: Flame,
  },
  {
    to: '/heizung-sanitaer-rhein-main',
    title: 'Sanitärinstallation',
    desc: 'Moderne Sanitärtechnik für Bad, Küche und komplette Sanierungsprojekte – fachgerecht installiert vom SHK-Meisterbetrieb.',
    icon: Droplets,
  },
];

const whyRadexCards = [
  { title: 'SHK-Meisterbetrieb', desc: 'Alle Heizungs- und Sanitärarbeiten unter Meisterverantwortung von Bernd Knoop.', icon: Award },
  { title: 'Fachgerechte Installation', desc: 'Normgerechte Ausführung nach aktuellen technischen Richtlinien und Handwerksstandards.', icon: ShieldCheck },
  { title: 'Alles aus einer Hand', desc: 'Heizung, Sanitär und Gebäudetechnik abgestimmt mit Ihrer Sanierung – ein Ansprechpartner.', icon: Users },
  { title: 'Moderne Heizungs- und Sanitärtechnik', desc: 'Wärmepumpen, Heizungsmodernisierung und Sanitärinstallation für zukunftssichere Immobilien.', icon: Wrench },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Über 60 Städte – kurze Wege und lokale Erfahrung mit Bestandsgebäuden.', icon: MapPin },
  { title: 'Fester Ansprechpartner', desc: 'Von der Planung bis zur Übergabe begleitet Sie ein festes Team.', icon: UserCheck },
];

const seoAccordions = [
  {
    title: 'SHK-Handwerk auf höchstem Niveau',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Als eingetragener SHK-Meisterbetrieb (Sanitär, Heizung, Klima) sind wir Ihr zertifizierter Partner für die fachgerechte Heizungsinstallation und die Sicherung der Trinkwasserhygiene im gesamten Rhein-Main-Gebiet. Vom ersten Planungsgespräch über die Wärmebedarfsberechnung bis zur Inbetriebnahme und Wartung erhalten Sie alle Leistungen aus einer Hand – ohne Schnittstellenprobleme zwischen verschiedenen Firmen. Bernd Knoop steht als eingetragener Meister für die fachliche Verantwortung.
        </p>
        <p className="text-gray-600">
          Heizung und Sanitär werden bei Radex nicht isoliert, sondern als Teil des gesamten Sanierungsprojekts betrachtet. Die Besonderheit liegt in der frühzeitigen Planung der technischen Grundlagen, lange bevor sichtbare Oberflächen entstehen. Mehr zum{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link> und zur{' '}
          <Link to="/sanierung/wohnungssanierung">Wohnungssanierung</Link>.
        </p>
      </>
    ),
  },
  {
    title: 'Sanitärinstallation im Bad',
    content: (
      <p className="text-gray-600">
        Zur Sanitärinstallation gehören die Verlegung neuer Wasserleitungen, der Anschluss von Dusche, Wanne, WC und Waschtisch, die Überprüfung und Erneuerung von Entwässerungsleitungen, die fachgerechte Abdichtung aller Nassbereiche sowie die Vorwandinstallation. Auch in Küche und Gäste-WC erneuern wir Wasser-, Warmwasser- und Abwasserleitungen. Veraltete Leitungen sind ein Hygiene- und Gesundheitsrisiko – wir installieren normgerecht nach DIN 1988 und der Trinkwasserverordnung und realisieren auf Wunsch barrierefreie Sanitärlösungen. Mehr zur{' '}
        <Link to="/badsanierung-rhein-main">Badsanierung</Link>.
      </p>
    ),
  },
  {
    title: 'Heizungsmodernisierung & Wärmepumpe',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Eine Heizungsmodernisierung ist mehr als ein neues Heizgerät. Entscheidend ist das Zusammenspiel aus Wärmeerzeuger, Wärmeverteilung, Heizkörpern bzw. Flächenheizung und dem energetischen Zustand des Gebäudes. Wir analysieren die Heizlast, führen einen hydraulischen Abgleich durch und sorgen dafür, dass Vorlauftemperaturen und Heizflächen optimal aufeinander abgestimmt sind.
        </p>
        <p className="text-gray-600">
          Der Umstieg von fossilen Brennstoffen auf eine Wärmepumpe ist einer der wichtigsten Schritte zu einem zukunftssicheren Heizsystem. Auch hybride Lösungen oder die Anbindung an eine Photovoltaikanlage realisieren wir zuverlässig. Details auf der Seite{' '}
          <Link to="/heizung-sanitaer-rhein-main">Heizung & Sanitär</Link> und zu{' '}
          <Link to="/energetische-sanierung-rhein-main">Energie & Förderung</Link>.
        </p>
      </>
    ),
  },
  {
    title: 'Fördermittel & Beratung',
    content: (
      <p className="text-gray-600">
        Die Beantragung von Fördermitteln über BAFA und KfW ist komplex und an Fristen gebunden. Wir arbeiten eng mit zertifizierten Energie-Effizienz-Experten zusammen, die Sie durch den Förderdschungel begleiten – damit Sie keine Zuschüsse verschenken. Sprechen Sie uns frühzeitig an, denn die Förderung muss in der Regel vor Auftragsvergabe beantragt werden. Mehr zu{' '}
        <Link to="/energetische-sanierung-rhein-main">Energie & Förderung</Link>.
      </p>
    ),
  },
  {
    title: 'Für wen ist diese Leistung?',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Bauherren:</strong> Komplette Heizungs- und Sanitärtechnik für Neubauten – effizient geplant und sauber installiert.</li>
        <li><strong>Modernisierer:</strong> Austausch der alten Öl- oder Gasheizung gegen eine förderfähige Wärmepumpe inkl. Wärmeverteilung und Heizkörpern.</li>
        <li><strong>Eigentümer & Vermieter:</strong> Erneuerung veralteter Leitungen, Sicherung der Trinkwasserhygiene und Wartung der Anlagen.</li>
        <li><strong>Sanierungsprojekte:</strong> Integration der Haustechnik in eine Bad-, Wohnungs- oder Komplettsanierung – früh abgestimmt mit Elektro und Trockenbau.</li>
      </ul>
    ),
  },
  {
    title: 'Unsere SHK-Leistungen',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Sanitärinstallation im Bad:</strong> Wasserleitungen, Abwasser, Abdichtung, Vorwandinstallation und Warmwasser – fachgerecht nach Norm.</li>
        <li><strong>Heizungsmodernisierung:</strong> Nicht nur ein neues Heizgerät, sondern Wärmeverteilung, Heizkörper und energetische Maßnahmen im Zusammenspiel.</li>
        <li><strong>Wärmepumpe:</strong> Luft-Wasser- und Sole-Wasser-Wärmepumpen inkl. hydraulischem Abgleich, Auslegung und Förderabwicklung.</li>
        <li><strong>Fußbodenheizung:</strong> Nachträgliches Einfräsen im Bestand oder klassische Verlegung im Neubau – ideal für niedrige Vorlauftemperaturen.</li>
      </ul>
    ),
  },
  {
    title: 'Kosten für Heizung & Sanitär',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Preise sind Richtwerte und abhängig von Gebäude, Technik und Aufwand – nach Bestandsaufnahme erstellen wir ein konkretes Angebot.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li><strong>Wärmepumpe (inkl. Einbau):</strong> ab €25.000</li>
          <li><strong>Fußbodenheizung:</strong> ab €50 / m²</li>
          <li><strong>Heizkörper-Austausch:</strong> ab €600 / Stück</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Warum sind Heizung und Sanitär bei einer Sanierung so wichtig?',
    content: (
      <p className="text-gray-600">
        Heizung und Sanitär gehören zu den wichtigsten technischen Grundlagen einer Sanierung. Sie liegen in Wänden, Böden und Schächten und müssen geplant sein, bevor Fliesen, Estrich und Oberflächen fertig sind. Wer diese Gewerke zu spät berücksichtigt, riskiert teure Nacharbeiten. Deshalb betrachtet Radex Heizung und Sanitär nicht isoliert, sondern als Teil des gesamten Sanierungsprojekts – ob bei{' '}
        <Link to="/sanierung/haussanierung">Haussanierung</Link> oder{' '}
        <Link to="/sanierung/altbausanierung">Altbausanierung</Link>.
      </p>
    ),
  },
  {
    title: 'Ist Radex ein zertifizierter SHK-Betrieb?',
    content: (
      <p className="text-gray-600">
        Ja. Radex ist ein eingetragener SHK-Meisterbetrieb. Bernd Knoop ist als SHK-Meister & Betriebsleiter für Sanitär, Heizung, Klima und Gebäudetechnik fachlich verantwortlich. Alle Heizungs- und Sanitärarbeiten werden unter dieser Meisterverantwortung ausgeführt.
      </p>
    ),
  },
  {
    title: 'Ist eine Wärmepumpe im Altbau sinnvoll?',
    content: (
      <p className="text-gray-600">
        Oft ja. Entscheidend ist eine möglichst niedrige Vorlauftemperatur, die wir durch große Heizflächen (Fußboden- oder Niedertemperaturheizkörper) und verbesserte Dämmung erreichen. Im Rahmen einer Vor-Ort-Analyse prüfen wir die Heizlast Ihres Gebäudes und sagen Ihnen verbindlich, ob sich eine Wärmepumpe lohnt.
      </p>
    ),
  },
  {
    title: 'Welche Förderungen gibt es für den Heizungstausch?',
    content: (
      <p className="text-gray-600">
        Über die Bundesförderung für effiziente Gebäude (BEG) sind aktuell Zuschüsse von bis zu 70 % für den Einbau einer Wärmepumpe möglich (Grundförderung, Klimageschwindigkeits- und Einkommensbonus). Wir übernehmen auf Wunsch die komplette Förderabwicklung mit Energie-Effizienz-Experten.
      </p>
    ),
  },
  {
    title: 'Müssen die Wasserleitungen bei einer Sanierung erneuert werden?',
    content: (
      <p className="text-gray-600">
        Alte verzinkte Stahl- oder Bleileitungen sollten dringend ersetzt werden, da sie verkalken und die Trinkwasserqualität beeinträchtigen. Bei einer Bad- oder Komplettsanierung erneuern wir die Leitungen direkt mit, solange die Wände ohnehin geöffnet sind.
      </p>
    ),
  },
  {
    title: 'Bieten Sie auch Wartung an?',
    content: (
      <p className="text-gray-600">
        Ja. Als SHK-Meisterbetrieb warten wir Ihre Heizungs- und Sanitäranlagen und stehen bei Störungen wie Heizungsausfall oder Wasserschäden zur Verfügung.{' '}
        <a href="/kontakt">Kontaktieren Sie uns</a> oder verfolgen Sie laufende Projekte bei{' '}
        <a href="/radex-live">Radex Live</a>.
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
        WhatsApp <MessageSquare size={18} color="#25D366" style={{ marginLeft: '8px' }} />
      </a>
      {!isHero && (
        <a
          href="tel:+496074960620"
          className="btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#fff',
            border: '1px solid #d1d5db',
            color: '#111827',
            padding: '12px 24px',
            borderRadius: '4px',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          <Phone size={18} /> Jetzt anrufen
        </a>
      )}
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

export default function HeizungSanitaerHub() {
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Heizung & Sanitär im Rhein-Main-Gebiet | SHK-Meisterbetrieb | Radex',
    description:
      'Moderne Heizungs- und Sanitärtechnik vom SHK-Meisterbetrieb. Heizungsmodernisierung, Wärmepumpen und Sanitärinstallationen für private Eigentümer und Unternehmen im Rhein-Main-Gebiet.',
    path: '/leistungen/heizung-sanitaer',
    image: HERO_IMAGE,
  });

  return (
    <main className="badsanierung-page">
      {/* 1. HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Heizung &<br />
              <span>Sanitär</span>
            </h1>
            <p className="br-hero-subtitle">
              Moderne Heizungs- und Sanitärtechnik – fachgerecht geplant und umgesetzt vom SHK-Meisterbetrieb.
            </p>
            <p className="br-hero-text">
              Ob Heizungsmodernisierung, Wärmepumpe oder Sanitärinstallation – eine moderne Haustechnik bildet die Grundlage für eine zuverlässige, energieeffiziente und zukunftssichere Immobilie. Radex begleitet private Eigentümer, Unternehmen und Wohnungsbaugesellschaften im gesamten Rhein-Main-Gebiet von der Planung bis zur fachgerechten Ausführung.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      {/* 2. LEISTUNGEN */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen im Bereich Heizung & Sanitär</h2>
            <p className="br-section-subtitle">
              Wählen Sie den Bereich aus, der am besten zu Ihrem Projekt passt.
            </p>
          </div>
          <PremiumIconCards cards={serviceCards} linked />
        </div>
      </section>

      {/* 3. WARUM RADEX */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      {/* 4. RADEX LIVE */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Radex Live</h2>
            <p className="br-section-subtitle">Aktuelle Baustellen, Projekte und echte Einblicke</p>
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
            Schauen Sie uns bei der Arbeit über die Schulter. Nicht jedes Projekt darf nach der Fertigstellung veröffentlicht werden. Deshalb zeigen wir Ihnen bei Radex Live echte Einblicke in laufende Heizungs-, Sanitär- und Sanierungsprojekte sowie ausgewählte abgeschlossene Arbeiten aus dem Rhein-Main-Gebiet. So erhalten Sie einen authentischen Eindruck davon, wie unsere Teams täglich arbeiten und Projekte professionell umsetzen.
          </p>

          <div className="br-projects-grid">
            <div className="br-project-card">
              <div
                className="br-project-img"
                style={{ backgroundImage: 'url(/img/Heizungstechnik.webp)' }}
              >
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Heizungsmodernisierung Altbau</h4>
                <p>Bad Homburg</p>
              </div>
            </div>
            <div className="br-project-card">
              <div
                className="br-project-img"
                style={{ backgroundImage: 'url(/img/Komplettbadsanierung.webp)' }}
              >
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Sanitärinstallation Badsanierung</h4>
                <p>Oberursel</p>
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
                <h4>Wärmepumpe im Bestand</h4>
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

      {/* 5. CTA */}
      <section id="kontakt" className="br-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Jetzt unverbindlich beraten lassen</h2>
            <p className="br-section-subtitle mb-8">
              Sie planen eine neue Heizungsanlage, eine Wärmepumpe oder eine Sanitärinstallation im Rahmen einer Sanierung?
              Lassen Sie sich unverbindlich beraten. Gemeinsam finden wir die passende Lösung für Ihre Immobilie.
            </p>
            <SharedCTABlock centered />
            <p className="br-hero-micro mt-6">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
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
                <strong>SHK-Meister</strong>
                <span>Zugelassener Fachbetrieb</span>
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
                <strong>500+</strong>
                <span>Abgeschlossene Projekte</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
