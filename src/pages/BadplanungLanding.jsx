import { useEffect, useState } from 'react';
import {
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Euro,
  Hammer,
  LayoutTemplate,
  Lightbulb,
  Mail,
  MessageSquare,
  Package,
  Phone,
  Send,
  UserCheck,
  Wrench,
  X,
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
  badplanungSeoIntro,
  badplanungSeoSections,
} from '../data/badplanungSeoContent';

const HERO_IMAGE = '/img/badplanung-hero.png';
const PLANNING_IMAGE = '/img/badplanung-planungstisch.png';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Badplanung Rhein-Main | Neues Bad richtig planen';
const META_DESCRIPTION =
  'Badplanung im Rhein-Main-Gebiet: Radex plant Badezimmer mit Grundriss, Dusche, Sanitärtechnik, Licht, Materialien und klarer Umsetzung.';

function BadplanungCTA({ isHero = false, centered = false, primaryHref = '#badplaner' }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        Badplanung starten
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
    desc: 'Fachgerechte Planung und Sanitärtechnik unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Individuelle Planung',
    desc: 'Jedes Badkonzept wird auf Ihre Wünsche und Ihre Immobilie abgestimmt.',
    icon: LayoutTemplate,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Planung, Sanitär und Gewerkekoordination aus einer Hand.',
    icon: ClipboardList,
  },
  {
    title: 'Persönlicher Ansprechpartner',
    desc: 'Ein fester Kontakt von der ersten Idee bis zur Umsetzung.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Beratung',
    desc: 'Wir lernen Ihre Wünsche kennen.',
    icon: Phone,
  },
  {
    title: 'Planung',
    desc: 'Gemeinsam entwickeln wir Ihr neues Badezimmer.',
    icon: LayoutTemplate,
  },
  {
    title: 'Material & Ausstattung',
    desc: 'Fliesen, Armaturen, Möbel und Ausstattung werden abgestimmt.',
    icon: Package,
  },
  {
    title: 'Umsetzung',
    desc: 'Nach der Planung beginnt die koordinierte Ausführung.',
    icon: Hammer,
  },
];

const considerCards = [
  {
    title: 'Grundriss',
    desc: 'Optimale Anordnung von Dusche, WC, Waschtisch und Bewegungsflächen.',
    icon: LayoutTemplate,
  },
  {
    title: 'Sanitärtechnik',
    desc: 'Leitungen, Anschlüsse und Vorinstallation werden früh mitgedacht.',
    icon: Wrench,
  },
  {
    title: 'Stauraum',
    desc: 'Badmöbel und Nischen für einen aufgeräumten Alltag.',
    icon: Package,
  },
  {
    title: 'Beleuchtung',
    desc: 'Allgemein-, Spiegel- und Akzentlicht für Funktion und Atmosphäre.',
    icon: Lightbulb,
  },
  {
    title: 'Materialien',
    desc: 'Fliesen, Armaturen und Oberflächen passend zu Raum und Nutzung.',
    icon: ClipboardList,
  },
  {
    title: 'Budget',
    desc: 'Klare Prioritäten, damit Qualität und Kosten zusammenpassen.',
    icon: Euro,
  },
];

const projectExamples = [
  {
    title: 'Frankfurt am Main',
    size: '8 m²',
    desc: 'Durchdachte Badplanung mit Walk-in-Dusche, großformatigen Fliesen und klarer Raumaufteilung.',
    image: '/img/bad1.webp',
    imageAlt: 'Geplantes und umgesetztes Badezimmer in Frankfurt am Main',
    to: RADEX_LIVE_URL,
  },
  {
    title: 'Darmstadt',
    size: '7 m²',
    desc: 'Familienbad mit effizienter Planung, neuer Ausstattung und alltagstauglichem Stauraum.',
    image: '/img/fertiges-bad-nach-badsanierung-radex.webp',
    imageAlt: 'Geplantes Familienbad in Darmstadt',
    to: RADEX_LIVE_URL,
  },
  {
    title: 'Offenbach am Main',
    size: '9 m²',
    desc: 'Komfortorientierte Planung mit neuer Dusche, Waschtisch und abgestimmtem Lichtkonzept.',
    image: '/img/Komplettbadsanierung.webp',
    imageAlt: 'Geplantes Badezimmer in Offenbach am Main',
    to: RADEX_LIVE_URL,
  },
];

const faqsData = [
  {
    q: 'Warum ist eine Badplanung wichtig?',
    a: 'Eine gute Badplanung legt Raumaufteilung, Technik, Materialien und Budget fest, bevor die Bauarbeiten beginnen. So vermeiden Sie teure Änderungen auf der Baustelle und erhalten ein Bad, das im Alltag wirklich funktioniert.',
  },
  {
    q: 'Wann sollte ich mit der Planung beginnen?',
    a: 'Idealerweise mehrere Wochen vor dem gewünschten Baubeginn. So bleibt genug Zeit für Beratung, Aufmaß, Materialentscheidungen und eine belastbare Terminplanung.',
  },
  {
    q: 'Kann ich eigene Ideen einbringen?',
    a: 'Selbstverständlich. Ihre Wünsche und Vorstellungen bilden die Grundlage der gesamten Planung. Gemeinsam entwickeln wir daraus ein realistisches und individuelles Badkonzept.',
  },
  {
    q: 'Unterstützt Radex bei der Materialauswahl?',
    a: 'Ja. Fliesen, Armaturen, Badmöbel und weitere Ausstattungsdetails werden gemeinsam abgestimmt – passend zu Stil, Nutzung und Budget.',
  },
  {
    q: 'Wie lange dauert die Planung?',
    a: 'Je nach Umfang oft zwei bis drei Wochen für klar definierte Projekte. Umfangreichere Umbauten mit Grundrissänderung oder individueller Ausstattung brauchen mehr Zeit für fundierte Entscheidungen.',
  },
  {
    q: 'Was kostet eine Badplanung?',
    a: 'Beratung und Konzepterstellung im Rahmen einer geplanten Badsanierung sind bei Radex kostenlos. Eine erste Orientierung zu Gesamtkosten finden Sie unter Badsanierung Kosten.',
  },
];

const BAD_TYPE_OPTIONS = ['Gäste-WC', 'Familienbad', 'Hauptbad', 'Neubau'];
const SIZE_OPTIONS = ['bis 5 m²', '5–8 m²', '8–12 m²', 'größer als 12 m²'];
const MODERNISIEREN_OPTIONS = [
  'Dusche',
  'Badewanne',
  'Dusche statt Badewanne',
  'WC',
  'Waschbecken',
  'Fliesen',
  'Badmöbel',
  'Beleuchtung',
  'Komplettmodernisierung',
];
const AUSSTATTUNG_OPTIONS = ['Basis', 'Komfort', 'Premium'];
const START_OPTIONS = ['sofort', 'innerhalb von 3 Monaten', 'innerhalb von 6 Monaten', 'ich informiere mich zunächst'];

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

function DigitalerBadplaner() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [badType, setBadType] = useState('');
  const [size, setSize] = useState('');
  const [modernisieren, setModernisieren] = useState([]);
  const [ausstattung, setAusstattung] = useState('');
  const [start, setStart] = useState('');
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState('');
  const [telefon, setTelefon] = useState('');
  const [email, setEmail] = useState('');

  const totalSteps = 7;
  const progress = ((step + 1) / totalSteps) * 100;

  const toggleModernisieren = (label) => {
    setModernisieren((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label],
    );
  };

  const canContinue = () => {
    if (step === 0) return Boolean(badType);
    if (step === 1) return Boolean(size);
    if (step === 2) return modernisieren.length > 0;
    if (step === 3) return Boolean(ausstattung);
    if (step === 4) return Boolean(start);
    if (step === 5) return true;
    if (step === 6) return Boolean(name.trim() && telefon.trim() && email.trim());
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canContinue()) return;

    const subject = `Digitale Badplanung Anfrage von ${name.trim()}`;
    const body = [
      'Digitale Badplanung – Anfrage',
      '',
      `Name: ${name.trim()}`,
      `Telefon: ${telefon.trim()}`,
      `E-Mail: ${email.trim()}`,
      '',
      `Badezimmertyp: ${badType}`,
      `Badgröße: ${size}`,
      `Gewünschte Leistungen: ${modernisieren.join(', ') || '–'}`,
      `Ausstattung: ${ausstattung}`,
      `Projektstart: ${start}`,
      photos.length
        ? `Hochgeladene Fotos: ${photos.length} Datei(en) – bitte zusätzlich per WhatsApp oder E-Mail senden (${Array.from(photos)
            .map((f) => f.name)
            .join(', ')})`
        : 'Hochgeladene Fotos: keine',
    ].join('\n');

    window.location.href = `mailto:info@radex-objektmanagement.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="br-bw-calculator br-badplaner">
        <div className="br-badplaner-header">
          <h3>Vielen Dank für Ihre Angaben</h3>
          <p>Ihre Planungshinweise wurden vorbereitet und an die Anfrage angehängt.</p>
        </div>
        <div className="br-bw-calc-result br-badplaner-result">
          <p className="br-bw-form-success-title">Anfrage vorbereitet</p>
          <p>
            Ihr E-Mail-Programm wurde geöffnet. Sobald Sie die Nachricht absenden, kann sich Radex optimal auf das erste
            Gespräch vorbereiten. Alternativ erreichen Sie uns unter <a href={PHONE_TEL}>06074 960620</a> oder per{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="br-bw-calculator br-badplaner">
      <div className="br-badplaner-header">
        <h3>Planen Sie Ihr Badezimmer Schritt für Schritt</h3>
        <p>
          Mit unserem digitalen Badplaner können Sie Ihr Projekt in wenigen Minuten beschreiben. So kennen wir Ihre
          Wünsche bereits vor dem ersten Beratungsgespräch und können uns optimal auf Ihre Anfrage vorbereiten.
        </p>
        <div className="br-badplaner-progress" aria-hidden="true">
          <div className="br-badplaner-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="br-badplaner-step-label">
          Schritt {step + 1} von {totalSteps}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 0 && (
          <div className="br-bw-calc-question">
            <h3>Welches Badezimmer möchten Sie planen?</h3>
            <div className="br-bw-calc-options">
              {BAD_TYPE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`br-bw-calc-btn${badType === opt ? ' is-active' : ''}`}
                  onClick={() => setBadType(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="br-bw-calc-question">
            <h3>Wie groß ist Ihr Badezimmer?</h3>
            <div className="br-bw-calc-options">
              {SIZE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`br-bw-calc-btn${size === opt ? ' is-active' : ''}`}
                  onClick={() => setSize(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="br-bw-calc-question">
            <h3>Was möchten Sie modernisieren?</h3>
            <p className="br-badplaner-hint">Mehrfachauswahl möglich</p>
            <div className="br-bw-calc-options">
              {MODERNISIEREN_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`br-bw-calc-btn${modernisieren.includes(opt) ? ' is-active' : ''}`}
                  onClick={() => toggleModernisieren(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="br-bw-calc-question">
            <h3>Welche Ausstattung wünschen Sie?</h3>
            <div className="br-bw-calc-options">
              {AUSSTATTUNG_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`br-bw-calc-btn${ausstattung === opt ? ' is-active' : ''}`}
                  onClick={() => setAusstattung(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="br-bw-calc-question">
            <h3>Wann soll das Projekt beginnen?</h3>
            <div className="br-bw-calc-options">
              {START_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`br-bw-calc-btn${start === opt ? ' is-active' : ''}`}
                  onClick={() => setStart(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="br-bw-calc-question">
            <h3>Fotos hochladen</h3>
            <p className="br-badplaner-hint">
              Laden Sie Bilder Ihres aktuellen Badezimmers hoch – auch direkt vom Smartphone.
            </p>
            <label className="br-input-group br-bw-photo-upload">
              <span>Fotos auswählen</span>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                multiple
                onChange={(e) => setPhotos(Array.from(e.target.files || []))}
              />
              <small>
                {photos.length > 0
                  ? `${photos.length} Datei(en) ausgewählt.`
                  : 'Optional, aber hilfreich für eine erste Einschätzung.'}
              </small>
            </label>
          </div>
        )}

        {step === 6 && (
          <div className="br-bw-calc-question">
            <h3>Kontaktdaten</h3>
            <div className="br-badplaner-summary">
              <p>
                <strong>Badgröße:</strong> {size}
              </p>
              <p>
                <strong>Gewünschte Leistungen:</strong> {modernisieren.join(', ')}
              </p>
              <p>
                <strong>Ausstattung:</strong> {ausstattung}
              </p>
              <p>
                <strong>Projektstart:</strong> {start}
              </p>
              <p>
                <strong>Hochgeladene Fotos:</strong>{' '}
                {photos.length ? `${photos.length} Datei(en)` : 'keine'}
              </p>
            </div>
            <label className="br-input-group">
              <span>Name *</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </label>
            <label className="br-input-group">
              <span>Telefonnummer *</span>
              <input
                type="tel"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                required
                autoComplete="tel"
                inputMode="tel"
              />
            </label>
            <label className="br-input-group">
              <span>E-Mail *</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                inputMode="email"
              />
            </label>
          </div>
        )}

        <div className="br-badplaner-nav">
          {step > 0 ? (
            <button type="button" className="btn br-btn-phone" onClick={() => setStep((s) => s - 1)}>
              <ChevronLeft size={18} /> Zurück
            </button>
          ) : (
            <span />
          )}
          {step < totalSteps - 1 ? (
            <button
              type="button"
              className="btn br-btn-orange"
              disabled={!canContinue()}
              onClick={() => canContinue() && setStep((s) => s + 1)}
            >
              Weiter <ChevronRight size={18} />
            </button>
          ) : (
            <button type="submit" className="btn br-btn-orange" disabled={!canContinue()}>
              Anfrage senden <Send size={18} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function BadplanungContactSection() {
  const [sent, setSent] = useState(false);
  const [photoCount, setPhotoCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Badplanung Anfrage von ${name}`;
    const body = [
      `Name: ${name}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      '',
      'Nachricht:',
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
            <p>Sie möchten Ihre Badplanung persönlich besprechen?</p>
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
              Badplanung starten
            </a>
          </div>
        </div>

        <div id="kontakt-form" className="br-ablauf-contact-form-wrap br-bw-form-wrap">
          <div className="text-center mb-10">
            <h2 className="br-section-title">Badplanung anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns zeitnah und bereiten das erste Beratungsgespräch vor.
            </p>
          </div>

          {sent ? (
            <div className="br-bw-form-success" role="status">
              <p className="br-bw-form-success-title">Vielen Dank für Ihre Anfrage.</p>
              <p>
                Ihr E-Mail-Programm wurde geöffnet. Sobald Sie die Nachricht absenden, melden wir uns zeitnah bei Ihnen.
                Alternativ erreichen Sie uns unter <a href={PHONE_TEL}>06074 960620</a> oder per{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                .
              </p>
            </div>
          ) : (
            <form className="br-ablauf-contact-form br-bw-contact-form" onSubmit={handleSubmit}>
              <label className="br-input-group">
                <span>Name *</span>
                <input type="text" name="name" required autoComplete="name" />
              </label>
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
                <span>Ihre Nachricht *</span>
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
                Badplanung starten <Send size={18} />
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

export default function BadplanungLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (badplanungSeoSections.some((s) => s.id === hash)) {
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
    path: '/badplanung',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Badplanung',
        description: META_DESCRIPTION,
        path: '/badplanung',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badplanung-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/badsanierung-rhein-main">Badsanierung</Link>
              <span aria-hidden="true">↓</span>
              <span>Badplanung</span>
            </nav>
            <p className="br-hero-kicker">Badplanung</p>
            <h1 className="br-hero-title">
              Professionelle Badplanung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">Planung. Sicherheit. Individuelle Lösungen.</p>
            <p className="br-hero-text">
              Jede erfolgreiche Badsanierung beginnt mit einer klaren Planung. Radex entwickelt mit Ihnen ein
              individuelles Badkonzept – bevor die ersten Arbeiten starten.
            </p>
            <BadplanungCTA isHero />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Professionelle Badplanung: Beratung mit Grundriss und Materialproben"
          title="Badplanung | Radex Objektmanagement"
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
            <h2 className="br-section-title">Badplanung im Rhein-Main-Gebiet</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Eine gute Badplanung entscheidet darüber, wie funktional, komfortabel und langlebig Ihr neues Badezimmer
              wird. Gemeinsam entwickeln wir ein individuelles Konzept, das Ihre Wünsche, die räumlichen Gegebenheiten
              und Ihr Budget berücksichtigt. So entsteht bereits vor Beginn der Arbeiten ein durchdachter Plan für Ihre
              spätere Badsanierung.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Process timeline */}
      <HorizontalProcessTimeline
        title="Wie läuft eine Badplanung ab?"
        intro="Vier klare Schritte – von der ersten Beratung bis zur koordinierten Umsetzung."
        steps={processSteps}
      />

      {/* 5 What is considered */}
      <section id="beruecksichtigt" className="br-section br-bg-light br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was wird bei einer Badplanung berücksichtigt?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Technik, Raum und Alltag müssen zusammenpassen – diese sechs Punkte bilden die Grundlage.
            </p>
          </div>
          <div
            className="br-premium-timeline-hero mb-12"
            style={{ backgroundImage: `url(${PLANNING_IMAGE})` }}
            role="img"
            aria-label="Badplanung mit Grundriss, Fliesenmustern, Materialproben und Tablet"
          />
          <PremiumIconCards cards={considerCards} largeIcons />
        </div>
      </section>

      {/* 6 Digitaler Badplaner */}
      <section id="badplaner" className="br-section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <div className="text-center mb-10">
            <h2 className="br-section-title">Digitaler Badplaner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Qualifizieren Sie Ihre Anfrage in wenigen Minuten – wir bereiten uns auf das erste Gespräch vor.
            </p>
          </div>
          <DigitalerBadplaner />
        </div>
      </section>

      {/* 7 Bernd Knoop Video Placeholder */}
      <section id="video" className="br-section br-bg-light br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="text-center mb-10">
            <h2 className="br-section-title">Fachlich erklärt vom SHK-Meister</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Bernd Knoop erklärt, warum eine professionelle Badplanung der wichtigste Schritt vor jeder Badsanierung
              ist.
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

      {/* 8 Projekte */}
      <section id="projekte" className="br-section br-ablauf-examples-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Einblicke in unsere Arbeit</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Teams planen und modernisieren täglich Badezimmer im gesamten Rhein-Main-Gebiet. Begleiten Sie
              unsere Projekte vom ersten Planungsgespräch bis zur fertigen Umsetzung.
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

      {/* 9 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zur Badplanung"
        intro="Kurze Antworten auf die wichtigsten Fragen rund um Ihre Badplanung."
      />

      {/* 10 + 11 Contact + Form */}
      <BadplanungContactSection />

      {/* 12 Weitere Informationen */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="br-bw-regional-teaser">
            <p>
              Radex plant Badezimmer im gesamten Rhein-Main-Gebiet – unter anderem in Frankfurt, Offenbach, Hanau,
              Darmstadt, Dreieich, Rodgau, Rödermark, Neu-Isenburg, Dietzenbach und vielen weiteren Städten der Region.
            </p>
            <Link to="/einsatzgebiete-rhein-main" className="btn br-btn-orange">
              Alle Einsatzgebiete ansehen
            </Link>
            <p className="br-bw-internal-links">
              Weiterführend:{' '}
              <Link to="/badmodernisierung">Badmodernisierung</Link>
              {' · '}
              <Link to="/badrenovierung">Badrenovierung</Link>
              {' · '}
              <Link to="/badsanierung/badezimmer-sanieren">Komplettbadsanierung</Link>
              {' · '}
              <Link to="/dusche-statt-badewanne">Dusche statt Badewanne</Link>
              {' · '}
              <Link to="/badewanne-austauschen">Badewanne austauschen</Link>
              {' · '}
              <Link to="/ablauf-badsanierung">Ablauf einer Badsanierung</Link>
              {' · '}
              <Link to="/badsanierung-kosten">Badsanierung Kosten</Link>
              {' · '}
              <a href={RADEX_LIVE_URL} target="_blank" rel="noopener noreferrer">
                Alle Badprojekte
              </a>
            </p>
          </div>

          <div className="text-center" style={{ marginTop: '48px' }}>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
              aria-controls="bp-seo-panel"
            >
              <h2 id="bp-seo-heading" className="br-section-title">
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
            id="bp-seo-panel"
            className="br-city-seo-panel br-ablauf-seo-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bp-seo-heading"
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
              <div className="br-city-seo-panel-block br-ablauf-seo-intro">{badplanungSeoIntro}</div>

              {badplanungSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#badplaner" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Badplanung starten
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
