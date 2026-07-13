import { useEffect, useState } from 'react';
import { RADEX_LIVE_URL } from '../constants/brand';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  ArrowRight,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Building2,
  UserCheck,
  CalendarCheck,
  Award,
  Users,
  ShieldCheck,
  MapPin,
  Hammer,
  Zap,
  Flame,
  Home,
} from 'lucide-react';
import { Link, useLocation } from '../router';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';

const HERO_IMAGE = '/img/gewerbesanierung-hero.webp';
const LIVE_IMAGE = '/img/gewerbesanierung-radex-live.webp';

const objectCards = [
  { title: 'Arztpraxen', desc: 'Moderne Praxisräume für Patienten und Mitarbeiter.', icon: Stethoscope },
  { title: 'Ladenlokale', desc: 'Attraktive Verkaufsflächen für Handel und Dienstleistung.', icon: Store },
  { title: 'Restaurants & Gastronomie', desc: 'Modernisierung von Gasträumen und Nebenbereichen.', icon: UtensilsCrossed },
  { title: 'Gewerbeeinheiten', desc: 'Sanierung von Bestandsflächen für neue Nutzungskonzepte.', icon: Building2 },
];

const whyRadexCards = [
  { title: 'Ein Ansprechpartner für alle Gewerke', desc: 'Planung, Koordination und Ausführung aus einer Hand – ohne Schnittstellenprobleme.', icon: UserCheck },
  { title: 'Termintreue Projektabwicklung', desc: 'Abgestimmte Bauabläufe reduzieren Leerstandszeiten und sichern den Betrieb.', icon: CalendarCheck },
  { title: 'SHK-meistergeführter Fachbetrieb', desc: 'Heizung, Sanitär und Gebäudetechnik werden fachgerecht und normkonform umgesetzt.', icon: Award },
  { title: 'Koordination aller Fachbetriebe', desc: 'Elektro, Trockenbau, Innenausbau und weitere Gewerke werden als Gesamtprojekt gesteuert.', icon: Users },
  { title: 'Transparente Festpreisangebote', desc: 'Nach Besichtigung erhalten Sie ein nachvollziehbares Angebot ohne versteckte Kosten.', icon: ShieldCheck },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Über 60 Städte – kurze Wege, schnelle Reaktionszeiten und lokale Erfahrung.', icon: MapPin },
];

const serviceCards = [
  { to: '/innenausbau-umbau-rhein-main', title: 'Innenausbau', desc: 'Trockenbau, Böden, Malerarbeiten und Raumgestaltung für Gewerbeflächen.', icon: Hammer },
  { to: '/elektroinstallation-rhein-main', title: 'Elektrotechnik', desc: 'Elektroinstallation, Beleuchtung und technische Infrastruktur im Gewerbe.', icon: Zap },
  { to: '/heizung-sanitaer-rhein-main', title: 'Heizung & Sanitär', desc: 'Sanitäranlagen, Heizung und Gebäudetechnik vom SHK-Meisterbetrieb.', icon: Flame },
  { to: '/komplettsanierung-rhein-main', title: 'Komplettsanierung', desc: 'Umfassende Modernisierung aller Gewerke aus einer Hand.', icon: Home },
];

const processSteps = [
  'Kostenlose Beratung',
  'Besichtigung der Gewerbefläche',
  'Projektplanung',
  'Festpreisangebot',
  'Koordination aller Gewerke',
  'Fertigstellung & Übergabe',
];

const faqsData = [
  {
    q: 'Sanieren Sie auch während des laufenden Betriebs?',
    a: 'Ja, je nach Umfang können Teilbereiche abschnittsweise saniert werden. Bei größeren Eingriffen planen wir die Arbeiten so, dass Betriebsunterbrechungen minimal bleiben.',
  },
  {
    q: 'Welche Gewerbeobjekte übernehmen Sie?',
    a: 'Radex modernisiert Arztpraxen, Ladenlokale, Restaurants, Büros, Kanzleien, Dienstleistungsflächen und weitere Gewerbeeinheiten im Rhein-Main-Gebiet.',
  },
  {
    q: 'Koordinieren Sie alle Gewerke?',
    a: 'Ja. Als Generalunternehmer koordiniert Radex SHK, Elektro, Trockenbau, Innenausbau, Böden und weitere Fachbetriebe als Gesamtprojekt.',
  },
  {
    q: 'Gibt es Festpreisangebote?',
    a: 'Nach einer Besichtigung vor Ort erstellen wir ein transparentes Festpreisangebot für Ihr Gewerbeobjekt – ohne versteckte Kosten.',
  },
  {
    q: 'Arbeiten Sie im gesamten Rhein-Main-Gebiet?',
    a: 'Ja. Radex ist in über 60 Städten und Gemeinden im Rhein-Main-Gebiet tätig, darunter Frankfurt, Wiesbaden, Mainz, Darmstadt, Offenbach und Hanau.',
  },
  {
    q: 'Kann ich Pläne oder Fotos per WhatsApp senden?',
    a: 'Ja. Senden Sie uns Fotos oder Pläne per WhatsApp und erhalten Sie eine erste fachliche Einschätzung zu Ihrem Gewerbeprojekt.',
  },
];

const seoAccordions = [
  {
    title: 'Gewerbeflächen müssen funktionieren',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Gewerbe- und Objektsanierung bedeutet, Flächen so zu modernisieren, dass sie im Alltag für Mitarbeiter, Kunden, Betreiber und Eigentümer zuverlässig funktionieren. Optik ist wichtig, aber ohne funktionierende Technik und Raumstruktur bleibt die Fläche problematisch.
        </p>
        <p className="text-gray-600">
          Radex koordiniert solche Projekte als{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer im Rhein-Main-Gebiet</Link>{' '}
          und bringt Heizung, Sanitär und Gebäudetechnik als SHK-Meisterbetrieb mit ein.
        </p>
      </>
    ),
  },
  {
    title: 'Bestandsprüfung vor der Planung',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Gewerbliche Bestände haben oft viele Vorarbeiten und Umbauten hinter sich. Deshalb beginnt die sinnvolle Planung immer mit einer Bestandsaufnahme: Raumstruktur, Technik, Sanitär, Elektro, Oberflächen, Zugang und mögliche Schnittstellen.
        </p>
        <p className="text-gray-600">
          Erst daraus entsteht ein realistischer Sanierungsfahrplan für Büro, Praxis, Laden, Dienstleistung oder gemischt genutzte Flächen.
        </p>
      </>
    ),
  },
  {
    title: 'Mieterausbau, Betrieb und Zeitfenster',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Bei gewerblichen Projekten sind Termine oft eng. Radex plant deshalb Rückbau, Trockenbau, Technik, Oberflächen und Übergabe so, dass Leerstand, Nutzung oder laufender Betrieb möglichst wenig gestört werden.
        </p>
        <p className="text-gray-600">
          Wenn Schadstoffthemen, Brandschutz oder technische Anpassungen dazukommen, werden diese früh in die Reihenfolge integriert. Mehr zum{' '}
          <a href="/mieterausbau-rhein-main">Mieterausbau</a> und{' '}
          <a href="/bueroumbau-rhein-main">Büroumbau</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Technik und Innenausbau zusammen denken',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Elektro, Licht, Netzwerk, WC-Anlagen, Teeküchen, Heizung und Sanitär müssen zu Raumaufteilung und Nutzung passen. Wer Technik zu spät plant, riskiert fertige Flächen, die nochmals geöffnet werden müssen.
        </p>
        <p className="text-gray-600">
          Radex sorgt dafür, dass diese Schnittstellen rechtzeitig abgestimmt werden. Dazu gehören{' '}
          <Link to="/innenausbau-umbau-rhein-main">Innenausbau</Link>,{' '}
          <Link to="/elektroinstallation-rhein-main">Elektrotechnik</Link> und{' '}
          <Link to="/heizung-sanitaer-rhein-main">Heizung & Sanitär</Link>.
        </p>
      </>
    ),
  },
  {
    title: 'Regionale Stärke im Rhein-Main-Gebiet',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Ob Büro in Eschborn, Praxis in Darmstadt, Objekt in Hanau oder Ladenfläche in Neu-Isenburg: Radex arbeitet regional mit Erfahrung aus über 40 Jahren und ist unter 06074 960620 gut erreichbar.
        </p>
        <p className="text-gray-600">
          Ziel ist immer eine wirtschaftlich sinnvolle und sauber koordinierte Sanierung. Verfolgen Sie laufende Projekte bei{' '}
          <a href={RADEX_LIVE_URL}>Radex Live</a> oder{' '}
          <a href="/kontakt">kontaktieren Sie uns</a> direkt.
        </p>
      </>
    ),
  },
  {
    title: 'Für wen Gewerbe- und Objektsanierung wichtig ist',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Bürobetreiber:</strong> Wenn Raumaufteilung, Akustik, Licht, Netzwerk und Arbeitsplätze neu gedacht werden müssen.</li>
        <li><strong>Praxisinhaber:</strong> Wenn Sanitär, Hygiene, Zugänge, Wartebereiche und technische Anforderungen zusammenkommen.</li>
        <li><strong>Einzelhandel und Ladenflächen:</strong> Wenn Kundenführung, Beleuchtung, Boden und Nutzung für den Betrieb stimmen müssen.</li>
        <li><strong>Vermieter und Bestandshalter:</strong> Wenn Leerstand, Neuvermietung oder die Vorbereitung auf einen neuen Mieter im Vordergrund stehen.</li>
        <li><strong>Hausverwaltungen und Objektverantwortliche:</strong> Wenn mehrere Nutzer, enge Zeitfenster und klare Kommunikation den Ablauf bestimmen.</li>
      </ul>
    ),
  },
  {
    title: 'Typische Gewerbe- und Objektprojekte',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong><a href="/bueroumbau-rhein-main">Büroumbau</a>:</strong> Trockenbau, Akustik, Licht, Arbeitsplätze und Raumaufteilung für neue Nutzungsanforderungen.</li>
        <li><strong>Praxisumbau:</strong> Raumstruktur, Sanitär, Hygiene, Wartebereiche und technische Anforderungen werden abgestimmt.</li>
        <li><strong>Ladenfläche modernisieren:</strong> Beleuchtung, Boden, Kassenbereich, Schaufensterwirkung und Aufenthaltsqualität werden verbessert.</li>
        <li><strong><a href="/mieterausbau-rhein-main">Mieterausbau</a>:</strong> Fläche wird gezielt für den neuen Mieter vorbereitet und schlüsselfertig übergeben.</li>
        <li><strong>Objektsanierung:</strong> Mehrere Einheiten oder gemeinschaftliche Bereiche werden als Gesamtprojekt betrachtet.</li>
        <li><strong>Sanitär und Technik:</strong> WC-Anlagen, Teeküchen, Leitungen, Heizkörper und Elektrokoordination werden mitgedacht.</li>
      </ul>
    ),
  },
  {
    title: 'Kosten einer Gewerbe- und Objektsanierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Die Kosten hängen von Fläche, Zustand, Nutzung, Zeitfenster und Fachgewerken ab. Ein realistisches Angebot entsteht nach Begehung.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li><strong>Teilumbau:</strong> projektbezogen</li>
          <li><strong>Bürofläche:</strong> nach Begehung</li>
          <li><strong>Praxis oder Laden:</strong> individuell kalkuliert</li>
          <li><strong>Mieterausbau:</strong> objektbezogen</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Was gehört zu einer Gewerbe- und Objektsanierung?',
    content: (
      <p className="text-gray-600">
        Dazu können Rückbau, Bestandsaufnahme, Innenausbau, Trockenbau, Elektro, Netzwerk, Heizung, Sanitär, Böden, Decken, Oberflächen, Brandschutzthemen, Mieterausbau und die Modernisierung gewerblicher Flächen gehören.
      </p>
    ),
  },
  {
    title: 'Für welche Gewerbeflächen arbeitet Radex?',
    content: (
      <p className="text-gray-600">
        Radex begleitet Büroflächen, Praxen, Ladenflächen, Dienstleistungsflächen, Verwaltungsbereiche, Mietflächen, gemischt genutzte Objekte und gewerbliche Bestandsflächen im Rhein-Main-Gebiet.
      </p>
    ),
  },
  {
    title: 'Was ist der Unterschied zwischen Gewerbesanierung und Objektsanierung?',
    content: (
      <p className="text-gray-600">
        Gewerbesanierung bezieht sich oft auf eine konkrete gewerbliche Fläche wie Büro, Praxis oder Laden. Objektsanierung kann größer gedacht sein und mehrere Einheiten oder gemeinschaftliche Bereiche betreffen.
      </p>
    ),
  },
  {
    title: 'Kann Radex mehrere Gewerke bei einer Objektsanierung koordinieren?',
    content: (
      <p className="text-gray-600">
        Ja. Radex koordiniert SHK, Elektro, Trockenbau, Innenausbau, Böden, Oberflächen, Rückbau und weitere Fachgewerke als Gesamtprojekt.
      </p>
    ),
  },
  {
    title: 'Kann eine Gewerbesanierung im laufenden Betrieb stattfinden?',
    content: (
      <p className="text-gray-600">
        Das hängt vom Umfang ab. Teilbereiche können häufig abschnittsweise saniert werden. Bei größeren Eingriffen kann eine temporäre Sperrung sinnvoller sein.
      </p>
    ),
  },
  {
    title: 'Was kostet eine Gewerbe- und Objektsanierung?',
    content: (
      <p className="text-gray-600">
        Die Kosten hängen von Fläche, Zustand, Nutzung, Gewerken, Technik, Materialqualität, Zeitfenster und möglicher Fachplanung ab. Ein realistisches Angebot entsteht nach Begehung.
      </p>
    ),
  },
  {
    title: 'Was ist beim Mieterausbau wichtig?',
    content: (
      <p className="text-gray-600">
        Beim Mieterausbau müssen Übergabezustand, Mietbeginn, Anforderungen des Mieters, technische Anschlüsse, Raumaufteilung, Sanitär, Elektro, Böden und Oberflächen früh geklärt werden.
      </p>
    ),
  },
  {
    title: 'Muss eine Objektsanierung genehmigt werden?',
    content: (
      <p className="text-gray-600">
        Das hängt vom Umfang ab. Wenn Nutzungsänderungen, Brandschutz, Fluchtwege, tragende Bauteile oder öffentlich zugängliche Bereiche betroffen sind, können Fachplanung oder Abstimmung nötig werden.
      </p>
    ),
  },
  {
    title: 'Arbeitet Radex auch für Hausverwaltungen?',
    content: (
      <p className="text-gray-600">
        Ja. Radex begleitet Hausverwaltungen bei der Sanierung einzelner Gewerbeeinheiten, gemeinschaftlicher Bereiche und gewerblicher Bestandsflächen.
      </p>
    ),
  },
  {
    title: 'In welchen Städten bietet Radex Gewerbe- und Objektsanierung an?',
    content: (
      <p className="text-gray-600">
        Radex ist in über 60 Städten und Gemeinden im Rhein-Main-Gebiet tätig, unter anderem in Rödermark, Eschborn, Bad Homburg, Oberursel, Neu-Isenburg, Dreieich, Langen, Darmstadt, Wiesbaden, Mainz, Hanau, Rodgau, Mörfelden-Walldorf und Groß-Gerau.
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

export default function GewerbesanierungLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openSeo, setOpenSeo] = useState(null);
  const { pathname } = useLocation();

  const isMieterausbau = pathname === '/mieterausbau-rhein-main';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: isMieterausbau
      ? 'Mieterausbau im Rhein-Main-Gebiet | Gewerbe modernisieren | Radex'
      : 'Gewerbesanierung im Rhein-Main-Gebiet | Gewerbe modernisieren | Radex',
    description: isMieterausbau
      ? 'Mieterausbau und Gewerbeflächen-Vorbereitung im Rhein-Main-Gebiet: termingerecht, sauber und aus einer Hand vom SHK-Meisterbetrieb Radex.'
      : 'Professionelle Gewerbesanierung für Praxen, Ladenlokale, Restaurants und Gewerbeflächen im Rhein-Main-Gebiet. Planung, Koordination und Ausführung aus einer Hand.',
    path: pathname,
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      {/* 1. HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Gewerbesanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">
              Gewerbe modernisieren. Betrieb sichern. Zukunft gestalten.
            </p>
            <p className="br-hero-text">
              Ob Praxis, Ladenlokal, Restaurant, Kanzlei oder Gewerbeeinheit – moderne Gewerberäume müssen funktional, repräsentativ und wirtschaftlich sein. Radex übernimmt die Planung, Koordination und Umsetzung Ihrer Gewerbesanierung im gesamten Rhein-Main-Gebiet. Durch abgestimmte Bauabläufe und einen festen Ansprechpartner reduzieren wir Leerstandszeiten und schaffen optimale Voraussetzungen für den weiteren Geschäftsbetrieb.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      {/* 2. GEWERBEOBJEKTE */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Gewerbeobjekte modernisieren wir?</h2>
          </div>
          <PremiumIconCards cards={objectCards} />
        </div>
      </section>

      {/* 3. WARUM RADEX */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Unternehmen Radex wählen</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      {/* 4. LEISTUNGEN */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen</h2>
          </div>
          <PremiumIconCards cards={serviceCards} linked />
        </div>
      </section>

      {/* 5. KOSTENORIENTIERUNG */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Erste Kostenorientierung</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Nutzen Sie unseren Sanierungskosten-Rechner für eine erste Orientierung. Nach einer Besichtigung erstellen wir ein individuelles Festpreisangebot für Ihr Gewerbeobjekt.
            </p>
          </div>
        </div>
        <SanierungskostenRechner defaultType="wohnung" compact />
      </section>

      {/* 6. RADEX LIVE */}
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
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="br-project-img"
                style={{ backgroundImage: `url(/img/buero1.webp)` }}
              >
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Büroumbau Eschborn</h4>
                <p>Eschborn</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="br-project-img"
                style={{ backgroundImage: `url(/img/buro2.webp)` }}
              >
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Praxisumbau Bad Homburg</h4>
                <p>Bad Homburg</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="br-project-img"
                style={{ backgroundImage: `url(/img/gewerbesanierung-radex-live.webp)` }}
              >
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Gewerbesanierung Frankfurt</h4>
                <p>Frankfurt am Main</p>
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

      {/* 7. ABLAUF */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="br-section-title">So läuft Ihre Gewerbesanierung ab</h2>
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

      {/* 8. FAQ */}
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
                  className="home-faq-answer"
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

      {/* 9. CTA */}
      <section id="kontakt" className="br-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Jetzt kostenlos beraten lassen</h2>
            <p className="br-section-subtitle mb-8">
              Sie möchten Ihre Gewerbeimmobilie modernisieren oder für eine neue Nutzung vorbereiten?
              Senden Sie uns Fotos oder Pläne per WhatsApp oder vereinbaren Sie eine persönliche Beratung. Gemeinsam entwickeln wir die passende Lösung für Ihr Objekt.
            </p>
            <SharedCTABlock centered />
          </div>
        </div>
      </section>

      {/* 10. SEO ACCORDIONS */}
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
