import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  Bath,
  ChevronDown,
  ClipboardList,
  FileText,
  Gem,
  Hammer,
  LayoutGrid,
  Mail,
  MessageSquare,
  PaintRoller,
  Phone,
  Send,
  ShowerHead,
  Sparkles,
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
import { FaqAccordion, PremiumIconCards } from '../components/landing/SharedLandingParts';
import {
  badrenovierungSeoIntro,
  badrenovierungSeoSections,
} from '../data/badrenovierungSeoContent';

const HERO_IMAGE = '/img/badrenovierung-hero.png';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Badrenovierung Rhein-Main | Bad renovieren lassen';
const META_DESCRIPTION =
  'Badrenovierung im Rhein-Main-Gebiet: Radex erneuert Badezimmer, Oberflächen, Sanitärbereiche und Ausstattung sauber und koordiniert.';

function BadrenovierungCTA({ isHero = false, centered = false, primaryHref = '#kontakt-form' }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        Badrenovierung anfragen
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
    title: 'Saubere Renovierung',
    desc: 'Sorgfältige Ausführung mit Rücksicht auf Ihr Zuhause.',
    icon: Sparkles,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Planung, Sanitär und Koordination aus einer Hand.',
    icon: ClipboardList,
  },
];

const solutionCards = [
  {
    title: 'Badrenovierung',
    desc: 'Gezielte Erneuerung von Oberflächen und Ausstattung – ohne komplette Entkernung.',
    icon: PaintRoller,
    to: '#intro',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Badmodernisierung',
    desc: 'Mehr Komfort und Technik: neue Dusche, moderne Ausstattung, zeitgemäße Lösungen.',
    icon: Wrench,
    to: '/badmodernisierung',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Badewanne austauschen',
    desc: 'Beschädigte oder veraltete Badewanne fachgerecht erneuern.',
    icon: Bath,
    to: '/badewanne-austauschen',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Komplettbadsanierung',
    desc: 'Vollständige Erneuerung von Grund auf – inkl. Technik und Abdichtung.',
    icon: Hammer,
    to: '/badsanierung/badezimmer-sanieren',
    cta: 'Mehr erfahren',
  },
];

const renovierenCards = [
  {
    title: 'Dusche',
    desc: 'Neue Duschlösung oder bestehende Dusche modernisieren.',
    icon: ShowerHead,
    to: '/dusche-statt-badewanne',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Badewanne',
    desc: 'Beschädigte oder veraltete Badewanne erneuern.',
    icon: Bath,
    to: '/badewanne-austauschen',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Waschtisch',
    desc: 'Neuer Waschplatz mit moderner Ausstattung.',
    icon: LayoutGrid,
    to: '/badplanung',
    cta: 'Mehr erfahren',
  },
  {
    title: 'Fliesen & Oberflächen',
    desc: 'Neue Wand- und Bodenfliesen sowie moderne Materialien.',
    icon: PaintRoller,
    to: '#kontakt-form',
    cta: 'Mehr erfahren',
  },
];

const whyOwnerCards = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten fachgerecht unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Persönliche Begleitung von der Beratung bis zur Übergabe.',
    icon: UserCheck,
  },
  {
    title: 'Hochwertige Markenprodukte',
    desc: 'Langlebige Materialien und geprüfte Markenqualität.',
    icon: Gem,
  },
  {
    title: 'Transparente Festpreisangebote',
    desc: 'Klare Leistungen und verbindliche Preise nach Besichtigung.',
    icon: FileText,
  },
];

const projectExamples = [
  {
    title: 'Frankfurt am Main',
    size: '7 m²',
    desc: 'Badrenovierung mit neuen Fliesen, moderner Dusche und hochwertigem Waschtisch.',
    image: '/img/bad1.webp',
    imageAlt: 'Renoviertes Badezimmer in Frankfurt am Main',
    to: RADEX_LIVE_URL,
  },
  {
    title: 'Hanau',
    size: '8 m²',
    desc: 'Familienbad renoviert: neue Sanitärkeramik, moderne Oberflächen und zeitgemäße Beleuchtung.',
    image: '/img/fertiges-bad-nach-badsanierung-radex.webp',
    imageAlt: 'Renoviertes Familienbad in Hanau',
    to: RADEX_LIVE_URL,
  },
  {
    title: 'Dreieich',
    size: '6 m²',
    desc: 'Optische und funktionale Renovierung mit neuer Ausstattung und modernen Materialien.',
    image: '/img/Komplettbadsanierung.webp',
    imageAlt: 'Renoviertes Badezimmer in Dreieich',
    to: RADEX_LIVE_URL,
  },
];

const priceCards = [
  {
    title: 'Basis',
    price: 'ab 8.000 €',
    desc: 'Renovierung mit neuer Sanitärkeramik und modernen Oberflächen.',
  },
  {
    title: 'Komfort',
    price: 'ab 15.000 €',
    desc: 'Neue Dusche, hochwertige Fliesen und moderne Ausstattung.',
  },
  {
    title: 'Premium',
    price: 'ab 25.000 €',
    desc: 'Umfangreiche Badrenovierung mit hochwertigen Materialien und individueller Gestaltung.',
  },
];

const faqsData = [
  {
    q: 'Was ist der Unterschied zwischen Badrenovierung und Badmodernisierung?',
    a: 'Bei einer Badrenovierung werden bestehende Bereiche optisch oder funktional erneuert. Eine Badmodernisierung kann zusätzlich technische Verbesserungen und umfangreichere Veränderungen umfassen.',
  },
  {
    q: 'Wie lange dauert eine Badrenovierung?',
    a: 'Je nach Umfang der Arbeiten dauert eine Badrenovierung in der Regel zwischen einer und drei Wochen.',
  },
  {
    q: 'Kann ich einzelne Bereiche renovieren lassen?',
    a: 'Ja. Häufig werden nur Fliesen, Dusche, Waschtisch oder Sanitärkeramik erneuert.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Nach einer Besichtigung erhalten Sie ein transparentes Festpreisangebot mit allen vereinbarten Leistungen.',
  },
  {
    q: 'Welche Materialien stehen zur Auswahl?',
    a: 'Gemeinsam wählen wir Fliesen, Sanitärkeramik, Armaturen und weitere Materialien passend zu Ihrem Stil und Budget aus.',
  },
  {
    q: 'In welchen Städten ist Radex tätig?',
    a: 'Von Rödermark aus renoviert Radex Badezimmer im gesamten Rhein-Main-Gebiet.',
  },
];

const roomSizeOptions = [
  { id: 'bis5', label: 'Bis 5 m²', factor: 1 },
  { id: '6bis8', label: '6 bis 8 m²', factor: 1.1 },
  { id: '9bis12', label: '9 bis 12 m²', factor: 1.2 },
  { id: 'ueber12', label: 'Über 12 m²', factor: 1.35 },
];

const scopeOptions = [
  { id: 'teil', label: 'Teilrenovierung', price: 0 },
  { id: 'bad', label: 'Badrenovierung', price: 3000 },
  { id: 'umfang', label: 'Umfangreiche Renovierung', price: 7000 },
];

const finishOptions = [
  { id: 'basis', label: 'Basis', price: 0 },
  { id: 'komfort', label: 'Komfort', price: 7000 },
  { id: 'premium', label: 'Premium', price: 17000 },
];

const extrasOptions = [
  { id: 'fliesen', label: 'Neue Fliesen', price: 2000 },
  { id: 'dusche', label: 'Neue Dusche', price: 2500 },
  { id: 'sanitaer', label: 'Neue Sanitärkeramik', price: 2000 },
  { id: 'licht', label: 'Neue Beleuchtung', price: 600 },
  { id: 'keine', label: 'Keine Zusatzleistungen', price: 0 },
];

const renovierenOptions = [
  'Komplettes Badezimmer',
  'Dusche',
  'Badewanne',
  'Waschtisch',
  'Fliesen',
  'Ich bin noch unsicher',
];

const groesseOptions = ['Bis 5 m²', '6 bis 8 m²', '9 bis 12 m²', 'Über 12 m²'];

function formatEuro(value) {
  return `${Math.round(value).toLocaleString('de-DE')} €`;
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

function BadrenovierungCalculator() {
  const [roomSize, setRoomSize] = useState('bis5');
  const [scope, setScope] = useState('teil');
  const [finish, setFinish] = useState('basis');
  const [extras, setExtras] = useState([]);

  const toggleExtra = (id) => {
    if (id === 'keine') {
      setExtras(['keine']);
      return;
    }
    setExtras((prev) => {
      const withoutKeine = prev.filter((item) => item !== 'keine');
      if (withoutKeine.includes(id)) {
        return withoutKeine.filter((item) => item !== id);
      }
      return [...withoutKeine, id];
    });
  };

  const { min, max } = useMemo(() => {
    const base = 8000;
    const sizeFactor = roomSizeOptions.find((o) => o.id === roomSize)?.factor || 1;
    const scopePrice = scopeOptions.find((o) => o.id === scope)?.price || 0;
    const finishPrice = finishOptions.find((o) => o.id === finish)?.price || 0;
    const extrasPrice = extras
      .filter((id) => id !== 'keine')
      .reduce((sum, id) => sum + (extrasOptions.find((o) => o.id === id)?.price || 0), 0);
    const total = (base + finishPrice) * sizeFactor + scopePrice + extrasPrice;
    return { min: total, max: Math.round(total * 1.2) };
  }, [roomSize, scope, finish, extras]);

  return (
    <div className="br-bw-calculator">
      <div className="br-bw-calc-question">
        <h3>Wie groß ist Ihr Badezimmer?</h3>
        <div className="br-bw-calc-options">
          {roomSizeOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`br-bw-calc-btn${roomSize === opt.id ? ' is-active' : ''}`}
              onClick={() => setRoomSize(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-bw-calc-question">
        <h3>Welche Renovierung ist geplant?</h3>
        <div className="br-bw-calc-options">
          {scopeOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`br-bw-calc-btn${scope === opt.id ? ' is-active' : ''}`}
              onClick={() => setScope(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-bw-calc-question">
        <h3>Welche Ausstattung wünschen Sie?</h3>
        <div className="br-bw-calc-options">
          {finishOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`br-bw-calc-btn${finish === opt.id ? ' is-active' : ''}`}
              onClick={() => setFinish(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-bw-calc-question">
        <h3>Welche Arbeiten sollen ausgeführt werden?</h3>
        <div className="br-bw-calc-options">
          {extrasOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`br-bw-calc-btn${extras.includes(opt.id) ? ' is-active' : ''}`}
              onClick={() => toggleExtra(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-bw-calc-result">
        <h3>Ihre erste Kosteneinschätzung</h3>
        <p className="br-bw-calc-range">
          ca. {formatEuro(min)} bis {formatEuro(max)}
        </p>
        <p className="br-bw-calc-note">
          Diese Berechnung dient als erste Orientierung. Nach einer Besichtigung kann der tatsächliche Preis je nach
          Zustand des Badezimmers und gewünschter Ausstattung niedriger oder höher ausfallen.
        </p>
      </div>
    </div>
  );
}

function BadrenovierungContactSection() {
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
    const renovieren = form.renovieren.value;
    const groesse = form.groesse.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Badrenovierung Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Was möchten Sie renovieren?: ${renovieren}`,
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
              Badrenovierung anfragen
            </a>
          </div>
        </div>

        <div id="kontakt-form" className="br-ablauf-contact-form-wrap br-bw-form-wrap">
          <div className="text-center mb-10">
            <h2 className="br-section-title">Badrenovierung anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns schnellstmöglich mit einer ersten Einschätzung und beraten Sie
              persönlich zu Ihrer Badrenovierung.
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
                  <span>Was möchten Sie renovieren?</span>
                  <select name="renovieren" required defaultValue="">
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {renovierenOptions.map((opt) => (
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
                Badrenovierung anfragen <Send size={18} />
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

export default function BadrenovierungLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (badrenovierungSeoSections.some((s) => s.id === hash)) {
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
    path: '/badrenovierung',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Badrenovierung',
        description: META_DESCRIPTION,
        path: '/badrenovierung',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badrenovierung-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <nav className="br-bw-breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">↓</span>
              <Link to="/badsanierung-rhein-main">Badsanierung</Link>
              <span aria-hidden="true">↓</span>
              <span>Badrenovierung</span>
            </nav>
            <p className="br-hero-kicker">Badrenovierung</p>
            <h1 className="br-hero-title">
              Badrenovierung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">Frisch. Modern. Werterhalt. Neue Optik. Mehr Komfort.</p>
            <p className="br-hero-text">
              Mit einer Badrenovierung erhält Ihr Badezimmer eine neue Optik und mehr Komfort – ohne dass immer eine
              komplette Badsanierung notwendig ist. Neue Fliesen, moderne Sanitärkeramik und zeitgemäße Materialien
              schaffen ein Badezimmer, das wieder viele Jahre Freude bereitet.
            </p>
            <BadrenovierungCTA isHero />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Renoviertes Badezimmer nach Badrenovierung"
          title="Badrenovierung | Radex Objektmanagement"
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
            <h2 className="br-section-title">Badrenovierung im Rhein-Main-Gebiet</h2>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              Nicht jedes Badezimmer muss vollständig saniert werden. Häufig reichen gezielte Renovierungsmaßnahmen aus,
              um Optik, Komfort und Funktion deutlich zu verbessern. Neue Fliesen, moderne Armaturen, ein neuer
              Waschtisch oder eine moderne Dusche verleihen Ihrem Badezimmer ein neues Erscheinungsbild – ohne dass
              immer eine komplette Badsanierung notwendig ist. Gemeinsam entwickeln wir die passende Lösung für Ihr
              Badezimmer.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Welche Lösung passt? */}
      <section id="loesungen" className="br-section br-bm-nav-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Lösung passt zu Ihrem Badezimmer?</h2>
          </div>
          <div className="br-nav-landing-grid br-nav-landing-grid--large-icons">
            {solutionCards.map((card) => (
              <NavServiceCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* 5 Was möchten Sie renovieren? */}
      <section id="renovieren" className="br-section br-bg-light br-br-renovieren-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was möchten Sie renovieren?</h2>
          </div>
          <div className="br-nav-landing-grid br-nav-landing-grid--large-icons">
            {renovierenCards.map((card) => (
              <NavServiceCard key={card.title} card={card} />
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
              Bernd Knoop erklärt, wann eine Badrenovierung sinnvoll ist und welche Möglichkeiten Eigentümer heute
              haben.
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

      {/* 7 Warum Eigentümer */}
      <section id="warum-radex" className="br-section br-bg-light br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer ihre Badrenovierung mit Radex umsetzen</h2>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyOwnerCards} largeIcons />
          </div>
        </div>
      </section>

      {/* 8 Projekte */}
      <section id="projekte" className="br-section br-ablauf-examples-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Einblicke in unsere Arbeit</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Unsere Teams renovieren täglich Badezimmer im gesamten Rhein-Main-Gebiet. Begleiten Sie unsere Projekte
              von der ersten Beratung bis zur fertigen Übergabe.
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

      {/* 9 Kosten & Rechner */}
      <section id="preise" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet eine Badrenovierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten einer Badrenovierung hängen vom Umfang der Arbeiten, der Raumgröße und der gewünschten
              Ausstattung ab. Mit den folgenden Preisbeispielen und dem Kostenrechner erhalten Sie eine erste
              Orientierung.
            </p>
          </div>
          <div className="br-costs-grid br-costs-grid--three">
            {priceCards.map((card) => (
              <div key={card.title} className="br-cost-card" style={{ cursor: 'default' }}>
                <div className="br-cost-header">
                  <h3>{card.title}</h3>
                  <p className="br-cost-price">
                    <span>{card.price}</span>
                  </p>
                </div>
                <p className="br-cost-desc">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="br-bw-price-note">
            Die genannten Preise dienen als erste Orientierung. Nach einer Besichtigung erhalten Sie ein individuelles
            Festpreisangebot. Weitere Details finden Sie unter{' '}
            <Link to="/badsanierung-kosten">Badsanierung Kosten</Link>.
          </p>

          <div id="kostenrechner" className="br-br-calc-wrap">
            <h3 className="br-br-calc-heading">Ermitteln Sie Ihre erste Kosteneinschätzung</h3>
            <p className="br-section-subtitle" style={{ marginBottom: '28px' }}>
              Beantworten Sie wenige Fragen und erhalten Sie eine unverbindliche Kosteneinschätzung für Ihre
              Badrenovierung.
            </p>
            <BadrenovierungCalculator />
            <div className="br-ablauf-cta-wrap" style={{ marginTop: '32px' }}>
              <BadrenovierungCTA centered />
            </div>
          </div>
        </div>
      </section>

      {/* 10 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zur Badrenovierung"
        intro="Hier finden Sie Antworten auf häufige Fragen rund um die Badrenovierung – von der Planung über die Kosten bis zur Ausführung."
      />

      {/* 11 + 12 Contact + Form */}
      <BadrenovierungContactSection />

      {/* 13 Weitere Informationen */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="br-bw-regional-teaser">
            <p>
              Radex renoviert Badezimmer im gesamten Rhein-Main-Gebiet – unter anderem in Frankfurt, Offenbach, Hanau,
              Darmstadt, Dreieich, Rodgau, Rödermark, Neu-Isenburg, Dietzenbach und vielen weiteren Städten der Region.
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
              aria-controls="br-seo-panel"
            >
              <h2 id="br-seo-heading" className="br-section-title">
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
            id="br-seo-panel"
            className="br-city-seo-panel br-ablauf-seo-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="br-seo-heading"
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
              <div className="br-city-seo-panel-block br-ablauf-seo-intro">{badrenovierungSeoIntro}</div>

              {badrenovierungSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt-form" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Badrenovierung anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
