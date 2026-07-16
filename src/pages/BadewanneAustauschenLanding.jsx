import { useEffect, useState } from 'react';
import {
  Award,
  Bath,
  ChevronDown,
  ClipboardList,
  Hammer,
  LayoutTemplate,
  Mail,
  MessageSquare,
  Paintbrush,
  Phone,
  Send,
  ShieldCheck,
  ShowerHead,
  Sparkles,
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
  badewanneAustauschenSeoIntro,
  badewanneAustauschenSeoSections,
} from '../data/badewanneAustauschenSeoContent';

const HERO_IMAGE = '/img/badewanne-austauschen-hero.png';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Badewanne austauschen Rhein-Main | Wanne erneuern';
const META_DESCRIPTION =
  'Badewanne austauschen im Rhein-Main-Gebiet: Radex erneuert Wannen, prüft Anschlüsse und koordiniert den sauberen Badumbau.';

function BadewanneCTA({ isHero = false, centered = false, primaryHref = '#kontakt-form' }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        Badewanne austauschen anfragen
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
    title: 'Fachgerechter Austausch',
    desc: 'Präziser Ausbau und Einbau mit sauberer Abdichtung.',
    icon: ShieldCheck,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Sanitär, Fliesen und Koordination aus einer Hand.',
    icon: ClipboardList,
  },
];

const whyReplaceCards = [
  {
    title: 'Beschädigte Oberfläche',
    desc: 'Risse, Abplatzungen oder starke Gebrauchsspuren sprechen häufig für einen Austausch.',
    icon: Paintbrush,
  },
  {
    title: 'Modernere Optik',
    desc: 'Eine neue Badewanne wertet das gesamte Badezimmer sichtbar auf.',
    icon: Sparkles,
  },
  {
    title: 'Bessere Funktion',
    desc: 'Neue Modelle bieten mehr Komfort und bessere Nutzungsmöglichkeiten.',
    icon: Bath,
  },
  {
    title: 'Vorbereitung für spätere Modernisierung',
    desc: 'Der Austausch kann sinnvoll mit weiteren Modernisierungen kombiniert werden.',
    icon: LayoutTemplate,
  },
];

const projectExamples = [
  {
    title: 'Frankfurt am Main',
    size: '8 m²',
    desc: 'Badewanne fachgerecht ausgetauscht, Anschlüsse erneuert und Wannenrand neu abgedichtet.',
    image: '/img/bad1.webp',
    imageAlt: 'Modernisiertes Badezimmer mit neuer Badewanne in Frankfurt',
    to: RADEX_LIVE_URL,
  },
  {
    title: 'Darmstadt',
    size: '7 m²',
    desc: 'Neue Einbauwanne mit zeitgemäßer Armatur und sauber angepasster Verkleidung.',
    image: '/img/fertiges-bad-nach-badsanierung-radex.webp',
    imageAlt: 'Fertig modernisiertes Bad mit neuer Badewanne in Darmstadt',
    to: RADEX_LIVE_URL,
  },
  {
    title: 'Offenbach am Main',
    size: '9 m²',
    desc: 'Wannentausch im Bestandsbad – gezielte Modernisierung ohne komplette Badsanierung.',
    image: '/img/Komplettbadsanierung.webp',
    imageAlt: 'Badezimmer nach Badewannenaustausch in Offenbach',
    to: RADEX_LIVE_URL,
  },
];

const solutionCards = [
  {
    title: 'Badewanne austauschen',
    desc: 'Gezielter Austausch der vorhandenen Wanne – oft ohne komplette Badsanierung.',
    icon: Bath,
    to: '#intro',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Dusche statt Badewanne',
    desc: 'Umbau auf eine moderne Dusche, wenn mehr Komfort und Bewegungsfreiheit gefragt sind.',
    icon: ShowerHead,
    to: '/dusche-statt-badewanne',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Komplettbadsanierung',
    desc: 'Vollständige Erneuerung des Badezimmers – von der Planung bis zur schlüsselfertigen Übergabe.',
    icon: Hammer,
    to: '/komplettbadsanierung-rhein-main',
    cta: 'Mehr erfahren',
  },
];

const faqsData = [
  {
    q: 'Wann sollte eine Badewanne ausgetauscht werden?',
    a: 'Wenn Beschädigungen, Abnutzung oder technische Mängel auftreten oder Sie mehr Komfort und eine moderne Optik wünschen, ist der Austausch einer Badewanne sinnvoll.',
  },
  {
    q: 'Kann die neue Badewanne an derselben Stelle eingebaut werden?',
    a: 'Ja. In vielen Fällen kann die bestehende Badewanne gegen ein neues Modell an derselben Stelle ausgetauscht werden – sofern Anschlüsse und Einbaumaße passen.',
  },
  {
    q: 'Muss dabei neu gefliest werden?',
    a: 'Das hängt von der vorhandenen Situation ab. Häufig sind kleinere Fliesenarbeiten am Wannenrand erforderlich, um ein sauberes und dauerhaftes Ergebnis zu erzielen.',
  },
  {
    q: 'Wie lange dauert der Austausch?',
    a: 'Je nach Umfang dauert der Austausch in der Regel zwischen ein und drei Arbeitstagen. Zusätzliche Fliesen- oder Sanitärarbeiten können die Ausführungszeit verlängern.',
  },
  {
    q: 'Kann ich später auf eine Dusche umbauen?',
    a: 'Ja. Ein Wannentausch steht einem späteren Umbau nicht im Weg. Wenn Sie bereits jetzt eine Dusche bevorzugen, beraten wir Sie gerne zur Alternative „Dusche statt Badewanne“.',
  },
  {
    q: 'Was kostet der Austausch einer Badewanne?',
    a: 'Die Kosten hängen vom Wannenmodell, den Anschlüssen und dem Umfang der Fliesenarbeiten ab. Nach einer Besichtigung erhalten Sie ein individuelles Festpreisangebot.',
  },
];

const wanneOptions = [
  'Standardbadewanne',
  'Eckbadewanne',
  'Freistehende Badewanne',
  'Ich bin noch unsicher',
];

const wunschOptions = [
  'Neue Badewanne',
  'Neue Armaturen',
  'Teilmodernisierung',
  'Ich möchte mich beraten lassen',
];

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

function SolutionCard({ card }) {
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

function BadewanneContactSection() {
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
    const wanne = form.wanne.value;
    const wunsch = form.wunsch.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Badewanne austauschen Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Bestehende Badewanne: ${wanne}`,
      `Wunsch: ${wunsch}`,
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
            <p>Sie möchten den Austausch Ihrer Badewanne persönlich besprechen?</p>
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
            <p>Senden Sie uns Fotos Ihrer bestehenden Badewanne und erhalten Sie eine erste Einschätzung.</p>
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
              Badewanne austauschen anfragen
            </a>
          </div>
        </div>

        <div id="kontakt-form" className="br-ablauf-contact-form-wrap br-bw-form-wrap">
          <div className="text-center mb-10">
            <h2 className="br-section-title">Badewanne austauschen anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns schnellstmöglich mit einer ersten Einschätzung.
            </p>
          </div>

          {sent ? (
            <div className="br-bw-form-success" role="status">
              <p className="br-bw-form-success-title">Vielen Dank für Ihre Anfrage.</p>
              <p>
                Ihr E-Mail-Programm wurde geöffnet. Sobald Sie die Nachricht absenden, melden wir uns zeitnah bei
                Ihnen. Alternativ erreichen Sie uns unter{' '}
                <a href={PHONE_TEL}>06074 960620</a> oder per{' '}
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
                  <span>Welche Badewanne möchten Sie austauschen?</span>
                  <select name="wanne" required defaultValue="">
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {wanneOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="br-input-group">
                  <span>Was wünschen Sie sich?</span>
                  <select name="wunsch" required defaultValue="">
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {wunschOptions.map((opt) => (
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
                  placeholder="Beschreiben Sie kurz Ihre bestehende Badewanne und Ihre Wünsche."
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
                  Laden Sie Fotos Ihrer bestehenden Badewanne hoch – auch direkt vom Smartphone.
                  {photoCount > 0 ? ` ${photoCount} Datei(en) ausgewählt.` : ''}
                </small>
              </label>
              <button type="submit" className="btn br-btn-orange br-ablauf-submit">
                Badewanne austauschen anfragen <Send size={18} />
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

export default function BadewanneAustauschenLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (badewanneAustauschenSeoSections.some((s) => s.id === hash)) {
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
    path: '/badewanne-austauschen',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Badewanne austauschen',
        description: META_DESCRIPTION,
        path: '/badewanne-austauschen',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badewanne-austauschen-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/badsanierung-rhein-main">Badsanierung</Link>
              <span aria-hidden="true">↓</span>
              <span>Badewanne austauschen</span>
            </nav>
            <p className="br-hero-kicker">Badewanne austauschen</p>
            <h1 className="br-hero-title">
              Badewanne austauschen
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">Mehr Komfort. Neue Badewanne. Modernes Badezimmer. Langlebige Qualität.</p>
            <p className="br-hero-text">
              Eine neue Badewanne verbessert nicht nur die Optik Ihres Badezimmers, sondern erhöht auch Komfort,
              Sicherheit und Funktionalität. Ob Austausch einer alten Badewanne oder der Wechsel auf ein modernes
              Modell – Radex übernimmt die komplette Planung und fachgerechte Umsetzung im gesamten Rhein-Main-Gebiet.
            </p>
            <BadewanneCTA isHero />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modernes Badezimmer mit neuer Badewanne"
          title="Badewanne austauschen | Radex Objektmanagement"
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
            <h2 className="br-section-title">Badewanne austauschen – modernisieren statt komplett sanieren</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Nicht jede Badmodernisierung erfordert eine komplette Badsanierung. Häufig reicht bereits der Austausch
              einer in die Jahre gekommenen Badewanne aus, um Komfort, Optik und Funktion deutlich zu verbessern. Ob
              beschädigte Oberfläche, veraltetes Design oder der Wunsch nach einer modernen Lösung – Radex prüft die
              vorhandene Situation und zeigt Ihnen die sinnvollste Lösung für Ihr Badezimmer.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Wann lohnt sich der Austausch? */}
      <section id="wann-lohnt-sich" className="br-section br-bw-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Wann lohnt sich der Austausch einer Badewanne?</h2>
          </div>
          <PremiumIconCards cards={whyReplaceCards} largeIcons />
        </div>
      </section>

      {/* 5 Bernd Knoop Video Placeholder */}
      <section id="video" className="br-section br-bg-light br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="text-center mb-10">
            <h2 className="br-section-title">Fachlich erklärt vom SHK-Meister</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Bernd Knoop erklärt, worauf beim Austausch einer Badewanne besonders zu achten ist.
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

      {/* 6 Projekte */}
      <section id="projekte" className="br-section br-ablauf-examples-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Einblicke in unsere Arbeit</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Teams tauschen täglich Badewannen aus und modernisieren Badezimmer im gesamten Rhein-Main-Gebiet.
            </p>
            <p className="br-bw-project-slogan">Schauen Sie unseren Teams bei der Arbeit über die Schulter.</p>
          </div>
          <div className="br-ablauf-examples-grid">
            {projectExamples.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={RADEX_LIVE_URL}
              className="btn br-btn-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alle Badprojekte ansehen
            </a>
          </div>
        </div>
      </section>

      {/* 7 Alternative Lösungen */}
      <section id="loesungen" className="br-section br-bg-light br-bw-solutions-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Lösung passt am besten zu Ihrem Badezimmer?</h2>
          </div>
          <div className="br-nav-landing-grid br-nav-landing-grid--large-icons">
            {solutionCards.map((card) => (
              <SolutionCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* 8 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zum Austausch einer Badewanne"
        intro="Kurze Antworten auf die wichtigsten Fragen rund um den Austausch Ihrer Badewanne."
      />

      {/* 9 + 10 Contact + Form */}
      <BadewanneContactSection />

      {/* 11 Weitere Informationen (+ compact regional note) */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="br-bw-regional-teaser">
            <p>
              Radex tauscht Badewannen im gesamten Rhein-Main-Gebiet aus. Dazu gehören unter anderem Frankfurt,
              Offenbach, Hanau, Darmstadt, Dreieich, Rodgau, Rödermark, Neu-Isenburg sowie viele weitere Städte der
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
              aria-controls="bw-seo-panel"
            >
              <h2 id="bw-seo-heading" className="br-section-title">
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
            id="bw-seo-panel"
            className="br-city-seo-panel br-ablauf-seo-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bw-seo-heading"
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
              <div className="br-city-seo-panel-block br-ablauf-seo-intro">{badewanneAustauschenSeoIntro}</div>

              {badewanneAustauschenSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt-form" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Badewanne austauschen – Beratung anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
