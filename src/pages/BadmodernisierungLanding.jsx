import { useEffect, useState } from 'react';
import {
  Award,
  Bath,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Hammer,
  LayoutTemplate,
  Mail,
  MessageSquare,
  Phone,
  Send,
  ShowerHead,
  UserCheck,
  X,
} from 'lucide-react';
import { Link } from '../router';
import { RADEX_LIVE_URL } from '../constants/brand';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildFaqSchema, buildServiceSchema } from '../useSeo';
import { FaqAccordion, PremiumIconCards } from '../components/landing/SharedLandingParts';
import {
  badmodernisierungSeoIntro,
  badmodernisierungSeoSections,
} from '../data/badmodernisierungSeoContent';

const HERO_IMAGE = '/img/badmodernisierung-hero.png';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Badmodernisierung Rhein-Main | Badezimmer modernisieren';
const META_DESCRIPTION =
  'Badmodernisierung im Rhein-Main-Gebiet: Radex modernisiert Badezimmer mit neuer Dusche, Sanitärtechnik, Beleuchtung und hochwertiger Ausstattung.';

function BadmodernisierungCTA({ isHero = false, centered = false, primaryHref = '#kontakt-form' }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        Badmodernisierung anfragen
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp br-btn-whatsapp--primary">
        <MessageSquare size={20} />
        Fotos senden. Erste Einschätzung erhalten.
      </a>
    </div>
  );
}

const trustCards = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Persönlicher Ansprechpartner',
    desc: 'Ein fester Kontakt von der Beratung bis zur Übergabe.',
    icon: UserCheck,
  },
  {
    title: 'Individuelle Badmodernisierung',
    desc: 'Maßgeschneiderte Lösungen für Ihr Badezimmer.',
    icon: LayoutTemplate,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Planung, Sanitär und Koordination aus einer Hand.',
    icon: ClipboardList,
  },
];

const modernisierenCards = [
  {
    title: 'Neue Dusche',
    desc: 'Moderne Duschlösungen für mehr Komfort und Barrierefreiheit.',
    icon: ShowerHead,
    to: '/dusche-statt-badewanne',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Neue Badewanne',
    desc: 'Veraltete oder beschädigte Badewannen fachgerecht austauschen.',
    icon: Bath,
    to: '/badewanne-austauschen',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Badmöbel & Armaturen',
    desc: 'Neue Möbel, moderne Armaturen und mehr Stauraum für Ihr Badezimmer.',
    icon: LayoutTemplate,
    to: '/badplanung',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Komplettes Badezimmer modernisieren',
    desc: 'Wenn mehrere Bereiche gleichzeitig erneuert werden sollen.',
    icon: Hammer,
    to: '#kontakt-form',
    cta: 'Mehr erfahren',
  },
];

const comparisonCards = [
  {
    title: 'Badmodernisierung',
    points: ['vorhandene Substanz bleibt erhalten', 'gezielte Modernisierung', 'kürzere Bauzeit'],
    to: '#intro',
  },
  {
    title: 'Badrenovierung',
    points: ['optische Auffrischung', 'einzelne Bereiche erneuern', 'geringer Aufwand'],
    to: '/badrenovierung',
  },
  {
    title: 'Komplettbadsanierung',
    points: ['vollständige Neuplanung', 'Technik kann erneuert werden', 'neues Badezimmer von Grund auf'],
    to: '/badsanierung/badezimmer-sanieren',
  },
];

const projectExamples = [
  {
    title: 'Frankfurt am Main',
    size: '8 m²',
    desc: 'Badmodernisierung mit neuer Walk-in-Dusche, großformatigen Fliesen und hochwertiger Sanitärkeramik.',
    image: '/img/bad1.webp',
    imageAlt: 'Modernisiertes Badezimmer in Frankfurt am Main',
    to: RADEX_LIVE_URL,
  },
  {
    title: 'Darmstadt',
    size: '7 m²',
    desc: 'Bestehendes Familienbad technisch und optisch modernisiert – mit neuer Ausstattung und zeitlosem Design.',
    image: '/img/fertiges-bad-nach-badsanierung-radex.webp',
    imageAlt: 'Modernisiertes Familienbad in Darmstadt',
    to: RADEX_LIVE_URL,
  },
  {
    title: 'Offenbach am Main',
    size: '9 m²',
    desc: 'Gezielte Modernisierung mit neuer Dusche, Waschtisch und energieeffizienter Beleuchtung.',
    image: '/img/Komplettbadsanierung.webp',
    imageAlt: 'Modernisiertes Badezimmer in Offenbach am Main',
    to: RADEX_LIVE_URL,
  },
];

const faqsData = [
  {
    q: 'Was gehört zu einer Badmodernisierung?',
    a: 'Typisch sind neue Duschen oder Armaturen, moderne Badmöbel, aktuelle Beleuchtung sowie der Austausch von Sanitärobjekten. Die Grundsubstanz – Abdichtung, Leitungen und Grundriss – bleibt erhalten, sofern sie technisch in Ordnung ist.',
  },
  {
    q: 'Wann reicht eine Modernisierung aus?',
    a: 'Wenn Abdichtung, Leitungen und Grundriss noch funktionieren und keine baulichen Mängel vorliegen, reicht oft eine gezielte Modernisierung. Typische Anlässe: veraltete Armaturen, zu wenig Komfort in der Dusche oder eine überholte Optik.',
  },
  {
    q: 'Muss das komplette Badezimmer erneuert werden?',
    a: 'Nein. Viele Bäder lassen sich bereichsweise modernisieren. Ob einzelne Maßnahmen ausreichen oder eine umfassendere Sanierung sinnvoller ist, klären wir nach einer Bestandsaufnahme vor Ort.',
  },
  {
    q: 'Wie lange dauert eine Badmodernisierung?',
    a: 'Je nach Umfang zwischen wenigen Tagen und etwa ein bis drei Wochen. Ein Armaturentausch kann an einem Tag erledigt sein; größere Pakete mit Dusche, Licht und Ausstattung dauern länger.',
  },
  {
    q: 'Kann die Modernisierung in mehreren Schritten erfolgen?',
    a: 'Ja. Einzelne Maßnahmen lassen sich oft nacheinander umsetzen. In der Beratung zeigen wir, welche Schritte sinnvoll kombiniert werden und welche Reihenfolge technisch und wirtschaftlich passt.',
  },
  {
    q: 'Was kostet eine Badmodernisierung?',
    a: 'Die Kosten hängen vom Umfang, der Raumgröße und der gewünschten Ausstattung ab. Nach einer Besichtigung erhalten Sie ein individuelles Festpreisangebot. Eine erste Orientierung finden Sie auch unter Badsanierung Kosten.',
  },
];

const modernisierenOptions = [
  'Komplettes Badezimmer',
  'Dusche',
  'Badewanne',
  'Waschtisch / Badmöbel',
  'Armaturen',
  'Ich bin noch unsicher',
];

const groesseOptions = ['Bis 5 m²', '6 bis 8 m²', '9 bis 12 m²', 'Über 12 m²'];

function ProjectCard({ project }) {
  const isExternal = project.to.startsWith('http');
  const body = (
    <>
      <div
        className="br-ablauf-example-img"
        style={{ backgroundImage: `url(${project.image})` }}
        role="img"
        aria-label={project.imageAlt}
      />
      <div className="br-ablauf-example-body">
        <h3>{project.title}</h3>
        <p className="br-bw-project-subtitle">{project.size}</p>
        <p>{project.desc}</p>
        <span className="br-btn-orange">Projekt ansehen →</span>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={project.to}
        className="br-ablauf-example-card"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {body}
      </a>
    );
  }

  return (
    <Link to={project.to} className="br-ablauf-example-card" style={{ textDecoration: 'none', color: 'inherit' }}>
      {body}
    </Link>
  );
}

function NavServiceCard({ card }) {
  const Icon = card.icon;
  const isHash = card.to.startsWith('#');
  const content = (
    <>
      <div className="br-decision-icon br-decision-icon--large">
        <Icon size={36} strokeWidth={1.5} />
      </div>
      <h3>{card.title}</h3>
      <p>{card.desc}</p>
      <span className="br-btn-orange">{card.cta} →</span>
    </>
  );

  if (isHash) {
    return (
      <a href={card.to} className="br-decision-card">
        {content}
      </a>
    );
  }

  return (
    <Link to={card.to} className="br-decision-card">
      {content}
    </Link>
  );
}

function ComparisonCard({ card }) {
  const isHash = card.to.startsWith('#');
  const content = (
    <>
      <h3>{card.title}</h3>
      <ul className="br-bm-compare-list">
        {card.points.map((point) => (
          <li key={point}>
            <CheckCircle2 size={18} color="#f97316" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <span className="br-btn-orange">Mehr erfahren →</span>
    </>
  );

  if (isHash) {
    return (
      <a href={card.to} className="br-decision-card br-bm-compare-card">
        {content}
      </a>
    );
  }

  return (
    <Link to={card.to} className="br-decision-card br-bm-compare-card">
      {content}
    </Link>
  );
}

function BadmodernisierungContactSection() {
  const [sent, setSent] = useState(false);
  const [photoCount, setPhotoCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const plzOrt = form.plzOrt.value.trim();
    const modernisieren = form.modernisieren.value;
    const groesse = form.groesse.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Badmodernisierung Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Was möchten Sie modernisieren?: ${modernisieren}`,
      `Badezimmergröße: ${groesse}`,
      '',
      'Projektbeschreibung:',
      nachricht,
      files?.length ? `\nAnhänge: ${files.length} Datei(en) – bitte zusätzlich per WhatsApp oder E-Mail senden.` : '',
    ].join('\n');

    window.location.href = `mailto:info@radex-objektmanagement.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="kontakt" className="br-section br-ablauf-contact-section">
      <div className="container">
        <div className="br-ablauf-contact-cards">
          <div className="br-ablauf-contact-card">
            <div className="br-ablauf-contact-icon">
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <h3>Telefon</h3>
            <p>Sie möchten Ihr Projekt persönlich besprechen?</p>
            <a href={PHONE_TEL} className="br-ablauf-contact-number">
              06074 960620
            </a>
            <a href={PHONE_TEL} className="btn br-btn-orange">
              Jetzt anrufen
            </a>
          </div>

          <div className="br-ablauf-contact-card">
            <div className="br-ablauf-contact-icon br-ablauf-contact-icon--wa">
              <MessageSquare size={24} strokeWidth={1.5} />
            </div>
            <h3>WhatsApp</h3>
            <p>Senden Sie uns Fotos Ihres Badezimmers und erhalten Sie eine erste Einschätzung.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              Fotos senden. Erste Einschätzung erhalten.
            </a>
          </div>

          <div className="br-ablauf-contact-card">
            <div className="br-ablauf-contact-icon">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <h3>Anfrageformular</h3>
            <p>Beschreiben Sie Ihr Projekt und laden Sie bei Bedarf Fotos hoch.</p>
            <a href="#kontakt-form" className="btn br-btn-orange">
              Badmodernisierung anfragen
            </a>
          </div>
        </div>

        <div id="kontakt-form" className="br-ablauf-contact-form-wrap br-bw-form-wrap">
          <div className="text-center mb-10">
            <h2 className="br-section-title">Badmodernisierung anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns zeitnah mit einer ersten Einschätzung und beraten Sie
              persönlich zu Ihrer Badmodernisierung.
            </p>
          </div>

          {sent ? (
            <div className="br-bw-form-success" role="status">
              <p className="br-bw-form-success-title">Vielen Dank für Ihre Anfrage.</p>
              <p>
                Ihr E-Mail-Programm wurde geöffnet. Sobald Sie die Nachricht absenden, melden wir uns zeitnah bei
                Ihnen. Alternativ erreichen Sie uns unter <a href={PHONE_TEL}>06074 960620</a> oder per{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                .
              </p>
            </div>
          ) : (
            <form className="br-ablauf-contact-form br-bw-contact-form" onSubmit={handleSubmit}>
              <div className="br-form-row">
                <label className="br-input-group">
                  <span>Vorname *</span>
                  <input type="text" name="vorname" required autoComplete="given-name" />
                </label>
                <label className="br-input-group">
                  <span>Nachname *</span>
                  <input type="text" name="nachname" required autoComplete="family-name" />
                </label>
              </div>
              <div className="br-form-row">
                <label className="br-input-group">
                  <span>Telefonnummer *</span>
                  <input type="tel" name="telefon" required autoComplete="tel" inputMode="tel" />
                </label>
                <label className="br-input-group">
                  <span>E-Mail-Adresse *</span>
                  <input type="email" name="email" required autoComplete="email" inputMode="email" />
                </label>
              </div>
              <label className="br-input-group">
                <span>PLZ / Ort *</span>
                <input type="text" name="plzOrt" required autoComplete="postal-code" />
              </label>
              <div className="br-form-row">
                <label className="br-input-group">
                  <span>Was möchten Sie modernisieren?</span>
                  <select name="modernisieren" required defaultValue="">
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {modernisierenOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="br-input-group">
                  <span>Wie groß ist Ihr Badezimmer?</span>
                  <select name="groesse" required defaultValue="">
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {groesseOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="br-input-group">
                <span>Projektbeschreibung *</span>
                <textarea
                  name="nachricht"
                  rows={5}
                  required
                  placeholder="Beschreiben Sie kurz Ihr Badezimmer und Ihre Wünsche."
                />
              </label>
              <label className="br-input-group br-bw-photo-upload">
                <span>Fotos hochladen</span>
                <input
                  type="file"
                  name="fotos"
                  accept="image/*"
                  capture="environment"
                  multiple
                  onChange={(e) => setPhotoCount(e.target.files?.length || 0)}
                />
                <small>
                  Laden Sie Fotos Ihres Badezimmers hoch – auch direkt vom Smartphone.
                  {photoCount > 0 ? ` ${photoCount} Datei(en) ausgewählt.` : ''}
                </small>
              </label>
              <button type="submit" className="btn br-btn-orange br-ablauf-submit">
                Badmodernisierung anfragen <Send size={18} />
              </button>
              <p className="br-ablauf-privacy">
                Mit dem Absenden erklären Sie sich mit unserer <Link to="/datenschutz">Datenschutzerklärung</Link>{' '}
                einverstanden.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function BadmodernisierungLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (badmodernisierungSeoSections.some((s) => s.id === hash)) {
      setSeoPanelOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!seoPanelOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setSeoPanelOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [seoPanelOpen]);

  useEffect(() => {
    if (!seoPanelOpen) return undefined;
    const hash = window.location.hash.slice(1);
    if (!hash) return undefined;
    const timer = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 320);
    return () => window.clearTimeout(timer);
  }, [seoPanelOpen]);

  useSeo({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: '/badmodernisierung',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Badmodernisierung',
        description: META_DESCRIPTION,
        path: '/badmodernisierung',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badmodernisierung-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/badsanierung-rhein-main">Badsanierung</Link>
              <span aria-hidden="true">↓</span>
              <span>Badmodernisierung</span>
            </nav>
            <p className="br-hero-kicker">Badmodernisierung</p>
            <h1 className="br-hero-title">
              Badmodernisierung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">Modern. Zeitgemäß. Mehr Komfort. Mehr Design. Mehr Wohnqualität.</p>
            <p className="br-hero-text">
              Eine Badmodernisierung bringt Ihr Badezimmer technisch und optisch auf den neuesten Stand – ohne dass immer
              eine komplette Entkernung notwendig ist. Radex modernisiert Badezimmer mit durchdachter Planung,
              hochwertigen Materialien und sauberer Ausführung im gesamten Rhein-Main-Gebiet.
            </p>
            <BadmodernisierungCTA isHero />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modernes Badezimmer nach Badmodernisierung"
          title="Badmodernisierung | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      {/* 3 Introduction */}
      <section id="intro" className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="text-center">
            <h2 className="br-section-title">Badmodernisierung im Rhein-Main-Gebiet</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Nicht jedes Badezimmer muss komplett saniert werden. Oft reichen gezielte Modernisierungsmaßnahmen aus, um
              Komfort, Funktion und Design deutlich zu verbessern. Ob neue Dusche, moderne Badmöbel, hochwertige
              Armaturen oder eine vollständige optische Neugestaltung – Radex entwickelt gemeinsam mit Ihnen die passende
              Lösung für Ihr Badezimmer.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Was möchten Sie modernisieren? */}
      <section id="modernisieren" className="br-section br-bm-nav-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was möchten Sie modernisieren?</h2>
          </div>
          <div className="br-nav-landing-grid br-nav-landing-grid--large-icons">
            {modernisierenCards.map((card) => (
              <NavServiceCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* 5 Comparison */}
      <section id="loesungen" className="br-section br-bg-light br-bm-compare-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Lösung passt am besten zu Ihrem Badezimmer?</h2>
          </div>
          <div className="br-nav-landing-grid br-nav-landing-grid--large-icons">
            {comparisonCards.map((card) => (
              <ComparisonCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* 6 Bernd Knoop Video Placeholder */}
      <section id="video" className="br-section br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="text-center mb-10">
            <h2 className="br-section-title">Fachlich erklärt vom SHK-Meister</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Bernd Knoop erklärt, welche Möglichkeiten eine professionelle Badmodernisierung bietet und wann sich
              welche Lösung empfiehlt.
            </p>
          </div>
          <div
            className="br-ablauf-video-frame br-bw-video-placeholder"
            style={{ backgroundImage: `url(${VIDEO_POSTER})` }}
            role="img"
            aria-label="Videoplatzhalter: Bernd Knoop, SHK-Meister"
          >
            <div className="br-bw-video-placeholder-overlay">
              <span className="br-bw-video-placeholder-play" aria-hidden="true" />
              <p>Video folgt in Kürze</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Projekte */}
      <section id="projekte" className="br-section br-bg-light br-ablauf-examples-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Einblicke in unsere Arbeit</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Teams modernisieren täglich Badezimmer im gesamten Rhein-Main-Gebiet. Begleiten Sie unsere Projekte
              vom ersten Beratungsgespräch bis zur fertigen Übergabe und erleben Sie, wie moderne Badezimmer Schritt für
              Schritt entstehen.
            </p>
            <p className="br-bw-project-slogan">Schauen Sie unseren Teams bei der Arbeit über die Schulter.</p>
          </div>
          <div className="br-ablauf-examples-grid">
            {projectExamples.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={RADEX_LIVE_URL} className="btn br-btn-orange" target="_blank" rel="noopener noreferrer">
              Alle Badprojekte ansehen
            </a>
          </div>
        </div>
      </section>

      {/* 8 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zur Badmodernisierung"
        intro="Kurze Antworten auf die wichtigsten Fragen rund um Ihre Badmodernisierung."
      />

      {/* 9 + 10 Contact + Form */}
      <BadmodernisierungContactSection />

      {/* 11 Weitere Informationen (+ compact regional note) */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="br-bw-regional-teaser">
            <p>
              Radex modernisiert Badezimmer im gesamten Rhein-Main-Gebiet – unter anderem in Frankfurt, Offenbach,
              Hanau, Darmstadt, Dreieich, Rodgau, Rödermark, Neu-Isenburg, Dietzenbach und vielen weiteren Städten der
              Region.
            </p>
            <Link to="/einsatzgebiete-rhein-main" className="btn br-btn-orange">
              Alle Einsatzgebiete ansehen
            </Link>
          </div>

          <div className="text-center" style={{ marginTop: '48px' }}>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
              aria-controls="bm-seo-panel"
            >
              <h2 id="bm-seo-heading" className="br-section-title">
                Weitere Informationen
              </h2>
              <ChevronDown size={28} className="br-seo-toc-toggle-icon" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={`br-city-seo-panel-root ${seoPanelOpen ? 'open' : ''}`} aria-hidden={!seoPanelOpen}>
          <button
            type="button"
            className="br-city-seo-panel-backdrop"
            aria-label="Hintergrund schließen"
            tabIndex={seoPanelOpen ? 0 : -1}
            onClick={() => setSeoPanelOpen(false)}
          />
          <aside
            id="bm-seo-panel"
            className="br-city-seo-panel br-ablauf-seo-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bm-seo-heading"
          >
            <div className="br-city-seo-panel-header">
              <p className="br-bw-seo-panel-label">Weitere Informationen</p>
              <button
                type="button"
                className="br-city-seo-panel-close"
                aria-label="Schließen"
                onClick={() => setSeoPanelOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <div className="br-city-seo-panel-body">
              <div className="br-city-seo-panel-block br-ablauf-seo-intro">{badmodernisierungSeoIntro}</div>

              {badmodernisierungSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt-form" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Badmodernisierung anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
