import { useEffect, useState } from 'react';
import {
  Award,
  Calendar,
  ClipboardCheck,
  ClipboardList,
  FileText,
  Home,
  Mail,
  MessageSquare,
  Phone,
  SearchCheck,
  Send,
  UserCheck,
  Wrench,
  X,
  ChevronDown,
} from 'lucide-react';
import { Link } from '../router';
import { RADEX_LIVE_URL } from '../constants/brand';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildFaqSchema, buildServiceSchema } from '../useSeo';
import {
  FaqAccordion,
  HorizontalProcessTimeline,
  PremiumIconCards,
} from '../components/landing/SharedLandingParts';
import {
  ablaufBadsanierungSeoIntro,
  ablaufBadsanierungSeoSections,
} from '../data/ablaufBadsanierungSeoContent';

const HERO_IMAGE = '/img/ablauf-badsanierung-hero.png';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';
const HANDSHAKE_ICON = '/img/radex-icon-handshake.png';
const HOUSE_HANDSHAKE_ICON = '/img/radex-icon-house-handshake.png';

const META_TITLE = 'Ablauf Badsanierung | Schritt für Schritt zum neuen Bad';
const META_DESCRIPTION =
  'Wer eine Badsanierung plant, stellt sich früh eine ganz konkrete Frage: Was passiert eigentlich wann – und in welcher Reihenfolge? Radex erklärt alle Schritte – von Beratung und Planung bis Abnahme und Übergabe.';

function AblaufCTA({ isHero = false, centered = false, primaryHref = '#kontakt-form' }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        Badsanierung anfragen
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
    desc: 'Fachliche Leitung und Sanitärkompetenz aus dem Meisterbetrieb.',
    icon: Award,
  },
  {
    title: 'Persönlicher Ansprechpartner',
    desc: 'Ein fester Kontakt von der Beratung bis zur Übergabe.',
    icon: UserCheck,
  },
  {
    title: 'Zentrale Koordination aller Gewerke',
    desc: 'Alle Arbeiten greifen terminlich und fachlich ineinander.',
    icon: ClipboardList,
  },
  {
    title: 'Transparente Planung',
    desc: 'Klare Schritte, nachvollziehbare Termine, offene Kommunikation.',
    icon: ClipboardCheck,
  },
];

const processSteps = [
  {
    title: 'Anfrage & Erstberatung',
    desc: 'Sie schildern Ihr Projekt – wir klären Wünsche, Rahmen und nächste Schritte.',
    icon: Phone,
  },
  {
    title: 'Besichtigung & Aufmaß',
    desc: 'Vor Ort erfassen wir Maße, Technik und bauliche Besonderheiten.',
    icon: Home,
  },
  {
    title: 'Planung & Angebot',
    desc: 'Sie erhalten ein abgestimmtes Konzept und ein transparentes Festpreisangebot.',
    icon: FileText,
  },
  {
    title: 'Terminplanung & Vorbereitung',
    desc: 'Materialien, Gewerke und Bauzeiten werden verbindlich koordiniert.',
    icon: Calendar,
  },
  {
    title: 'Ausführung & Qualitätskontrolle',
    desc: 'Die Arbeiten folgen dem Plan – mit laufender Prüfung wichtiger Bauabschnitte.',
    icon: Wrench,
  },
  {
    title: 'Übergabe & Abnahme',
    desc: 'Gemeinsame Endkontrolle und schlüsselfertige Übergabe Ihres neuen Bads.',
    icon: SearchCheck,
  },
];

const coordinationCards = [
  {
    title: 'Abgestimmte Termine',
    desc: 'Alle Arbeiten werden sinnvoll aufeinander abgestimmt.',
    iconSrc: HANDSHAKE_ICON,
  },
  {
    title: 'Klare Zuständigkeiten',
    desc: 'Ein Ansprechpartner begleitet das gesamte Projekt.',
    iconSrc: HANDSHAKE_ICON,
  },
  {
    title: 'Kontrollierte Arbeitsschritte',
    desc: 'Jeder Bauabschnitt wird während der Umsetzung geprüft.',
    iconSrc: HOUSE_HANDSHAKE_ICON,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Planung, Koordination und Ausführung greifen nahtlos ineinander.',
    iconSrc: HOUSE_HANDSHAKE_ICON,
  },
];

const projectExamples = [
  {
    title: 'Frankfurt am Main',
    size: '8 m²',
    desc: 'Komplettbadsanierung mit neuer Sanitärinstallation, bodengleicher Dusche und großformatigen Fliesen.',
    image: '/img/bad1.webp',
    imageAlt: 'Fertiggestellte Badsanierung in Frankfurt am Main',
    to: RADEX_LIVE_URL,
  },
  {
    title: 'Darmstadt',
    size: '7 m²',
    desc: 'Strukturierte Badmodernisierung mit neuer Ausstattung, abgestimmten Gewerken und sauberer Übergabe.',
    image: '/img/fertiges-bad-nach-badsanierung-radex.webp',
    imageAlt: 'Modernisiertes Badezimmer nach Badsanierung in Darmstadt',
    to: RADEX_LIVE_URL,
  },
  {
    title: 'Offenbach am Main',
    size: '9 m²',
    desc: 'Koordinierte Komplettsanierung – von Rückbau und Installation bis zur schlüsselfertigen Übergabe.',
    image: '/img/Komplettbadsanierung.webp',
    imageAlt: 'Komplettbadsanierung in Offenbach am Main',
    to: RADEX_LIVE_URL,
  },
];

const faqsData = [
  {
    q: 'Wie beginnt eine Badsanierung?',
    a: 'Jede Badsanierung beginnt mit einer persönlichen Beratung und einer Besichtigung vor Ort. Dabei erfassen wir die räumlichen Gegebenheiten, besprechen Ihre Wünsche und entwickeln gemeinsam ein individuelles Konzept für Ihr neues Badezimmer.',
  },
  {
    q: 'Wann erhalte ich mein Angebot?',
    a: 'Nach der Besichtigung und der Projektplanung erstellen wir ein transparentes Festpreisangebot mit allen vereinbarten Leistungen.',
  },
  {
    q: 'Wer koordiniert die einzelnen Gewerke?',
    a: 'Die gesamte Projektkoordination übernimmt Radex. Alle beteiligten Fachbetriebe werden zeitlich aufeinander abgestimmt, damit die Arbeiten möglichst reibungslos ablaufen.',
  },
  {
    q: 'Habe ich während der Bauphase einen festen Ansprechpartner?',
    a: 'Ja. Während des gesamten Projekts steht Ihnen ein persönlicher Ansprechpartner zur Verfügung, der alle Abläufe koordiniert und Ihre Fragen beantwortet.',
  },
  {
    q: 'Wann erfolgt die Abnahme?',
    a: 'Nach Abschluss aller Arbeiten erfolgt eine gemeinsame Endkontrolle. Erst wenn alle vereinbarten Leistungen umgesetzt wurden, wird Ihr neues Badezimmer offiziell übergeben.',
  },
  {
    q: 'In welchen Regionen führt Radex Badsanierungen durch?',
    a: 'Von Rödermark aus begleitet Radex private Eigentümer und Modernisierungsprojekte im gesamten Rhein-Main-Gebiet – von der Planung bis zur schlüsselfertigen Übergabe.',
  },
];

const massnahmeOptions = [
  'Komplettbadsanierung',
  'Badmodernisierung',
  'Badrenovierung',
  'Gäste-WC',
  'Barrierefreies Bad',
  'Ich bin noch unsicher',
];

const startOptions = ['Sofort', 'Innerhalb von 3 Monaten', 'Innerhalb von 6 Monaten', 'Termin noch offen'];

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

function AblaufContactSection() {
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
    const massnahme = form.massnahme.value;
    const start = form.start.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Badsanierung Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Maßnahme: ${massnahme}`,
      `Gewünschter Start: ${start}`,
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
            <p>Besprechen Sie den Ablauf Ihrer Badsanierung direkt mit unserem Team.</p>
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
              Badsanierung anfragen
            </a>
          </div>
        </div>

        <div id="kontakt-form" className="br-ablauf-contact-form-wrap br-bw-form-wrap">
          <div className="text-center mb-10">
            <h2 className="br-section-title">Badsanierung anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns schnellstmöglich mit einer ersten Einschätzung.
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
                  <span>Welche Maßnahme planen Sie?</span>
                  <select name="massnahme" required defaultValue="">
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {massnahmeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="br-input-group">
                  <span>Wann möchten Sie starten?</span>
                  <select name="start" required defaultValue="">
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {startOptions.map((opt) => (
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
                  placeholder="Beschreiben Sie Ihr Badezimmer und Ihre Wünsche möglichst genau."
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
                Badsanierung anfragen <Send size={18} />
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

export default function AblaufBadsanierungLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (ablaufBadsanierungSeoSections.some((s) => s.id === hash)) {
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
    path: '/ablauf-badsanierung',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Ablauf einer Badsanierung',
        description:
          'Strukturierter Ablauf einer Badsanierung mit Radex Objektmanagement GmbH – von der Erstberatung bis zur schlüsselfertigen Übergabe im Rhein-Main-Gebiet.',
        path: '/ablauf-badsanierung',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/badsanierung-rhein-main">Badsanierung</Link>
              <span aria-hidden="true">↓</span>
              <span>Ablauf einer Badsanierung</span>
            </nav>
            <p className="br-hero-kicker">SHK-Meisterbetrieb · Projektablauf · Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Ablauf einer Badsanierung
              <br />
              <span>Schritt für Schritt zum neuen Bad</span>
            </h1>
            <p className="br-hero-lead">
              Struktur. Transparenz. Sicherheit – von der ersten Beratung bis zur schlüsselfertigen Übergabe.
            </p>
            <p className="br-hero-text">
              Wer eine Badsanierung plant, möchte wissen, was wann passiert. Radex erklärt den kompletten Projektablauf
              Ihrer Badsanierung im Rhein-Main-Gebiet – klar strukturiert, transparent begleitet und unter fachlicher
              Leitung eines SHK-Meisterbetriebs.
            </p>
            <AblaufCTA isHero />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modernes Badezimmer nach einer strukturierten Badsanierung"
          title="Ablauf Badsanierung | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      {/* 3 Six-step process */}
      <HorizontalProcessTimeline
        title="Die sechs Schritte Ihrer Badsanierung"
        intro="Jede Badsanierung folgt einem klaren Ablauf. Bereits vor dem ersten Arbeitstag werden Termine, Materialien und Gewerke abgestimmt – damit Sie jederzeit wissen, was als Nächstes kommt."
        steps={processSteps}
      />

      {/* 4 Warum Koordination */}
      <section id="koordination" className="br-section br-bg-light br-bw-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum die Koordination entscheidend ist</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Bei einer Badsanierung greifen Sanitär, Elektro, Trockenbau, Abdichtung, Fliesenarbeiten und Montage
              direkt ineinander. Werden einzelne Arbeitsschritte nicht optimal koordiniert, entstehen schnell
              Wartezeiten, unnötige Nacharbeiten oder zusätzliche Kosten. Radex koordiniert sämtliche Gewerke zentral
              und begleitet das Projekt von der ersten Planung bis zur Übergabe mit einem festen Ansprechpartner.
            </p>
          </div>
          <PremiumIconCards cards={coordinationCards} largeIcons />
        </div>
      </section>

      {/* 5 Bernd Knoop Video Placeholder */}
      <section id="video" className="br-section br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="text-center mb-10">
            <h2 className="br-section-title">Fachlich erklärt vom SHK-Meister</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Bernd Knoop erklärt den Ablauf einer professionellen Badsanierung.
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
              Unsere Teams sind täglich im gesamten Rhein-Main-Gebiet im Einsatz. Begleiten Sie uns auf ausgewählten
              Baustellen und verschaffen Sie sich einen Eindruck davon, wie professionelle Badsanierungen in der Praxis
              entstehen.
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

      {/* 7 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zum Ablauf einer Badsanierung"
        intro="Kurze Antworten auf die wichtigsten Fragen rund um Projektablauf, Organisation und Zusammenarbeit."
      />

      {/* 8 + 9 Contact + Form */}
      <AblaufContactSection />

      {/* 10 Weitere Informationen (+ regional) */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="br-bw-regional-teaser">
            <p>
              Radex begleitet Badsanierungen im gesamten Rhein-Main-Gebiet – unter anderem in Frankfurt, Offenbach,
              Hanau, Darmstadt, Dreieich, Rodgau, Rödermark, Neu-Isenburg, Dietzenbach und vielen weiteren Städten der
              Region.
            </p>
            <Link to="/einsatzgebiete-rhein-main" className="btn br-btn-orange">
              Alle Einsatzgebiete ansehen
            </Link>
          </div>

          <div className="text-center" style={{ marginTop: '48px' }}>
            <p className="br-section-subtitle" style={{ marginBottom: '16px' }}>
              Ausführliche Informationen zu Planung, Bauphasen, Gewerken und Übergabe finden Sie hier.
            </p>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
              aria-controls="ablauf-seo-panel"
            >
              <h2 id="ablauf-seo-heading" className="br-section-title">
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
            id="ablauf-seo-panel"
            className="br-city-seo-panel br-ablauf-seo-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ablauf-seo-heading"
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
              <div className="br-city-seo-panel-block br-ablauf-seo-intro">{ablaufBadsanierungSeoIntro}</div>

              {ablaufBadsanierungSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt-form" className="br-city-seo-article-cta" onClick={() => setSeoPanelOpen(false)}>
                Ablauf besprechen – Beratung anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
