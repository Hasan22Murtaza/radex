import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileText,
  FolderOpen,
  Gem,
  Hammer,
  LayoutGrid,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  Palette,
  Phone,
  Ruler,
  Send,
  ShowerHead,
  Toilet,
  UserCheck,
  Wrench,
  X,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildFaqSchema, buildServiceSchema } from '../useSeo';
import {
  FaqAccordion,
  ImageCardGrid,
  PremiumIconCards,
  SectionTransition,
} from '../components/landing/SharedLandingParts';
import testVideo from '../assets/test.mp4';
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

function BadmodernisierungCTA({ isHero = false, centered = false, showThird = false, primaryHref = '#kontakt' }) {
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
      {showThird && (
        <a href={PHONE_TEL} className="btn br-btn-phone">
          <Phone size={18} /> Jetzt anrufen
        </a>
      )}
    </div>
  );
}

const trustCards = [
  {
    title: 'Modernes Design',
    desc: 'Zeitgemäße Materialien und hochwertige Ausstattung.',
    icon: ShowerHead,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Individuelle Gestaltung',
    desc: 'Passend zu Ihrem Stil und Ihren Anforderungen.',
    icon: Palette,
  },
  {
    title: 'Festpreis nach Besichtigung',
    desc: 'Transparente Planung ohne Überraschungen.',
    icon: FileText,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Erfahrung aus zahlreichen Modernisierungen im Rhein-Main-Gebiet.',
    icon: FolderOpen,
  },
  {
    title: 'Im gesamten Rhein-Main-Gebiet',
    desc: 'Von Rödermark aus täglich im Einsatz.',
    icon: MapPin,
  },
];

const vorteilCards = [
  {
    title: 'Modernes Design',
    desc: 'Neue Materialien und zeitlose Gestaltung verleihen Ihrem Badezimmer eine hochwertige Optik.',
    image: '/img/badmodernisierung-vorteil-design.png',
    imageAlt: 'Modernes Badezimmer mit schwebendem Waschtisch und beleuchtetem Spiegel',
  },
  {
    title: 'Mehr Komfort',
    desc: 'Moderne Armaturen, neue Dusche und funktionale Lösungen erhöhen den täglichen Komfort.',
    image: '/img/badmodernisierung-vorteil-komfort.png',
    imageAlt: 'Walk-in-Dusche mit modernen Armaturen in einem deutschen Badezimmer',
  },
  {
    title: 'Technik erneuern',
    desc: 'Sanitärinstallationen und Ausstattung werden auf den aktuellen Stand gebracht.',
    image: '/img/badmodernisierung-vorteil-technik.png',
    imageAlt: 'Fachkraft beim fachgerechten Einbau eines Waschtischs',
  },
  {
    title: 'Immobilie aufwerten',
    desc: 'Ein modernisiertes Badezimmer steigert Wohnqualität und den Wert Ihrer Immobilie.',
    image: '/img/badmodernisierung-vorteil-wert.png',
    imageAlt: 'Fertig modernisiertes Badezimmer in einem deutschen Wohnhaus',
  },
];

const serviceCards = [
  {
    title: 'Dusche modernisieren',
    desc: 'Neue Duschen mit zeitgemäßem Komfort und moderner Optik.',
    icon: ShowerHead,
  },
  {
    title: 'Waschtisch erneuern',
    desc: 'Moderne Waschtische und hochwertige Armaturen.',
    icon: Wrench,
  },
  {
    title: 'Sanitärkeramik austauschen',
    desc: 'WC und Bidet modern und platzsparend erneuern.',
    icon: Toilet,
  },
  {
    title: 'Fliesen erneuern',
    desc: 'Neue Wand- und Bodenfliesen für eine zeitlose Gestaltung.',
    icon: LayoutGrid,
  },
  {
    title: 'Beleuchtung modernisieren',
    desc: 'Effiziente Lichtkonzepte für mehr Atmosphäre und Komfort.',
    icon: Lightbulb,
  },
  {
    title: 'Komplette Modernisierung',
    desc: 'Alle Arbeiten professionell aus einer Hand koordiniert.',
    icon: Hammer,
  },
];

const whyRadexCards = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten werden fachgerecht unter meisterlicher Leitung ausgeführt.',
    icon: Award,
  },
  {
    title: 'Individuelle Planung',
    desc: 'Jedes Badezimmer wird passend zu Ihren Wünschen und Ihrem Budget modernisiert.',
    icon: ClipboardList,
  },
  {
    title: 'Hochwertige Materialien',
    desc: 'Langlebige Produkte und moderne Oberflächen für dauerhafte Qualität.',
    icon: Gem,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Von der Beratung bis zur fertigen Übergabe begleiten wir Ihr Projekt persönlich.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Beratung',
    desc: 'Wir besprechen Ihre Wünsche und die Möglichkeiten der Badmodernisierung.',
    icon: Phone,
  },
  {
    title: 'Besichtigung',
    desc: 'Vor Ort prüfen wir den Zustand Ihres Badezimmers und beraten Sie zu den passenden Modernisierungsmöglichkeiten.',
    icon: Ruler,
  },
  {
    title: 'Planung',
    desc: 'Materialien, Ausstattung und Gestaltung werden gemeinsam abgestimmt.',
    icon: ClipboardList,
  },
  {
    title: 'Festpreisangebot',
    desc: 'Sie erhalten ein transparentes Angebot mit allen vereinbarten Leistungen.',
    icon: FileText,
  },
  {
    title: 'Modernisierung',
    desc: 'Alle Arbeiten werden fachgerecht und sauber durch unsere Teams umgesetzt.',
    icon: Hammer,
  },
  {
    title: 'Übergabe',
    desc: 'Nach Abschluss aller Arbeiten prüfen wir gemeinsam Ihr modernisiertes Badezimmer.',
    icon: CheckCircle2,
  },
];

const projectExamples = [
  {
    title: 'Frankfurt am Main',
    subtitle: 'Badmodernisierung · 8 m²',
    desc: 'Modernisierung eines Badezimmers mit neuer Walk-in-Dusche, großformatigen Fliesen und hochwertiger Sanitärkeramik.',
    image: '/img/badmodernisierung-projekt-frankfurt.png',
    imageAlt: 'Symbolbild: modernisiertes Badezimmer in Frankfurt',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
  {
    title: 'Darmstadt',
    subtitle: 'Modernes Familienbad',
    desc: 'Bestehendes Badezimmer technisch und optisch vollständig modernisiert – mit neuer Ausstattung und zeitlosem Design.',
    image: '/img/badmodernisierung-projekt-darmstadt.png',
    imageAlt: 'Symbolbild: modernes Familienbad in Darmstadt',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
  {
    title: 'Offenbach am Main',
    subtitle: 'Badezimmer modernisiert',
    desc: 'Neue Fliesen, moderne Dusche, hochwertiger Waschtisch und energieeffiziente Beleuchtung sorgen für ein komplett neues Raumgefühl.',
    image: '/img/badmodernisierung-projekt-offenbach.png',
    imageAlt: 'Symbolbild: renoviertes Badezimmer in Offenbach',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
];

const priceCards = [
  {
    title: 'Basis',
    price: 'ab 8.000 €',
    desc: 'Für funktionale Modernisierungen mit neuer Sanitärkeramik und zeitgemäßer Ausstattung.',
  },
  {
    title: 'Komfort',
    price: 'ab 15.000 €',
    desc: 'Mit neuer Dusche, hochwertigen Fliesen, moderner Beleuchtung und individueller Gestaltung.',
  },
  {
    title: 'Premium',
    price: 'ab 25.000 €',
    desc: 'Umfangreiche Badmodernisierung mit hochwertiger Ausstattung und exklusiven Materialien.',
  },
];

const faqsData = [
  {
    q: 'Was ist der Unterschied zwischen einer Badmodernisierung und einer Komplettbadsanierung?',
    a: 'Bei einer Badmodernisierung werden gezielt einzelne Bereiche oder Ausstattungen erneuert. Eine Komplettbadsanierung umfasst dagegen die vollständige Erneuerung des Badezimmers inklusive Technik und Leitungen.',
  },
  {
    q: 'Lohnt sich eine Badmodernisierung?',
    a: 'Ja. Moderne Sanitärkeramik, neue Fliesen und eine zeitgemäße Ausstattung steigern Komfort, Wohnqualität und den Wert Ihrer Immobilie.',
  },
  {
    q: 'Wie lange dauert eine Badmodernisierung?',
    a: 'Je nach Umfang der Arbeiten dauert eine Badmodernisierung in der Regel zwischen einer und drei Wochen.',
  },
  {
    q: 'Kann ich mein Badezimmer teilweise modernisieren?',
    a: 'Ja. Je nach Zustand können einzelne Bereiche wie Dusche, Waschtisch, WC oder Fliesen unabhängig voneinander modernisiert werden.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Nach einer persönlichen Besichtigung erstellen wir ein transparentes Festpreisangebot mit allen abgestimmten Leistungen.',
  },
  {
    q: 'In welchen Städten modernisiert Radex Badezimmer?',
    a: 'Von Rödermark aus betreut Radex Kunden im gesamten Rhein-Main-Gebiet.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter bei der Radex Objektmanagement GmbH.',
  'Mit einer Badmodernisierung bringen wir Ihr Badezimmer technisch und optisch auf den neuesten Stand. Nicht immer ist eine komplette Badsanierung notwendig – oft lassen sich bereits mit gezielten Modernisierungen Komfort, Funktion und Design deutlich verbessern.',
  'Gemeinsam planen wir die passende Lösung für Ihr Badezimmer und koordinieren alle Arbeiten – von der Sanitärtechnik über Fliesen bis zur fertigen Übergabe.',
  'So entsteht ein modernes Badezimmer, das zu Ihren Wünschen passt und Ihnen viele Jahre Freude bereitet.',
  'Senden Sie uns einfach Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Wir beraten Sie gerne.',
];

const videoTrustPoints = [
  'SHK-Meisterbetrieb',
  'Individuelle Planung',
  'Hochwertige Materialien',
  'Ein Ansprechpartner',
];

const roomSizeOptions = [
  { id: 'bis5', label: 'Bis 5 m²', factor: 1 },
  { id: '6bis8', label: '6 bis 8 m²', factor: 1.1 },
  { id: '9bis12', label: '9 bis 12 m²', factor: 1.2 },
  { id: 'ueber12', label: 'Über 12 m²', factor: 1.35 },
];

const scopeOptions = [
  { id: 'teil', label: 'Teilmodernisierung', price: 0 },
  { id: 'bad', label: 'Badmodernisierung', price: 3000 },
  { id: 'fast', label: 'Fast komplette Modernisierung', price: 7000 },
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

const modernisierenOptions = [
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

function BadmodernisierungCalculator() {
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
        <h3>Was möchten Sie modernisieren?</h3>
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
        <h3>Welche zusätzlichen Arbeiten sind geplant?</h3>
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

function BadmodernisierungContactSection() {
  const [sent, setSent] = useState(false);

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
            <h3>E-Mail</h3>
            <p>Schicken Sie uns Ihre Anfrage bequem per E-Mail.</p>
            <a href="mailto:info@radex-objektmanagement.de" className="br-ablauf-contact-number">
              info@radex-objektmanagement.de
            </a>
            <a href="mailto:info@radex-objektmanagement.de" className="btn br-btn-orange">
              E-Mail schreiben
            </a>
          </div>
        </div>

        <div id="kontakt-form" className="br-ablauf-contact-form-wrap">
          <div className="text-center mb-10">
            <h2 className="br-section-title">Badmodernisierung anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns zeitnah mit einer ersten Einschätzung und beraten Sie
              persönlich zu Ihrer Badmodernisierung.
            </p>
          </div>

          <form className="br-ablauf-contact-form" onSubmit={handleSubmit}>
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
                <input type="tel" name="telefon" required autoComplete="tel" />
              </label>
              <label className="br-input-group">
                <span>E-Mail-Adresse *</span>
                <input type="email" name="email" required autoComplete="email" />
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
            <label className="br-input-group">
              <span>Fotos hochladen</span>
              <input type="file" name="fotos" accept="image/*" multiple />
              <small>Laden Sie auf Wunsch Fotos Ihres Badezimmers hoch.</small>
            </label>
            <button type="submit" className="btn br-btn-orange br-ablauf-submit">
              Badmodernisierung anfragen <Send size={18} />
            </button>
            {sent && (
              <p className="br-ablauf-form-success" role="status">
                Vielen Dank! Ihr E-Mail-Programm wurde geöffnet. Alternativ erreichen Sie uns unter 06074 960620.
              </p>
            )}
            <p className="br-ablauf-privacy">
              Mit dem Absenden erklären Sie sich mit unserer <Link to="/datenschutz">Datenschutzerklärung</Link>{' '}
              einverstanden.
            </p>
          </form>
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
            <BadmodernisierungCTA isHero showThird primaryHref="#kontakt" />
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

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Wann lohnt sich eine Badmodernisierung?">
        Nicht jedes Badezimmer muss vollständig entkernt werden. Oft reichen gezielte Modernisierungen aus, um Komfort,
        Design und Funktion deutlich zu verbessern. Neue Sanitärkeramik, moderne Fliesen und eine zeitgemäße Ausstattung
        schaffen ein Badezimmer, das wieder viele Jahre Freude bereitet.
      </SectionTransition>

      {/* 3 Vorteile */}
      <section id="vorteile" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Ihre Vorteile einer Badmodernisierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Mit einer Badmodernisierung lassen sich Komfort, Design und Funktion deutlich verbessern. Moderne
              Materialien, neue Sanitärkeramik und zeitgemäße Technik schaffen ein Badezimmer, das Ihren heutigen
              Ansprüchen gerecht wird.
            </p>
          </div>
          <ImageCardGrid cards={vorteilCards} />
        </div>
      </section>

      <SectionTransition title="Welche Arbeiten gehören zu einer Badmodernisierung?">
        Je nach Zustand Ihres Badezimmers können einzelne Bereiche modernisiert oder mehrere Arbeiten miteinander
        kombiniert werden. Radex übernimmt die komplette Planung und Koordination aller Gewerke.
      </SectionTransition>

      {/* 4 Leistungen */}
      <section id="leistungen" className="br-section br-bw-options-section">
        <div className="container">
          <PremiumIconCards cards={serviceCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Vorher und Nachher">
        Mit einer durchdachten Badmodernisierung entsteht aus einem in die Jahre gekommenen Badezimmer ein moderner
        Wohlfühlraum mit neuer Technik und hochwertigem Design.
      </SectionTransition>

      {/* 5 Vorher / Nachher */}
      <section id="vorher-nachher" className="br-section br-bg-light br-bw-before-after-section">
        <div className="container">
          <div className="br-bw-before-after-grid">
            <figure className="br-bw-before-after-card">
              <span className="br-bw-before-after-label">Vorher</span>
              <img
                src="/img/badmodernisierung-vorher.png"
                alt="Altes Badezimmer vor der Modernisierung"
                loading="lazy"
                width={800}
                height={600}
              />
            </figure>
            <figure className="br-bw-before-after-card">
              <span className="br-bw-before-after-label">Nachher</span>
              <img
                src="/img/badmodernisierung-nachher.png"
                alt="Modernisiertes Badezimmer mit Walk-in-Dusche"
                loading="lazy"
                width={800}
                height={600}
              />
            </figure>
          </div>
          <div className="br-ablauf-cta-wrap">
            <BadmodernisierungCTA centered primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Radex?">
        Eine erfolgreiche Badmodernisierung beginnt mit einer guten Planung und einer fachgerechten Umsetzung. Erfahren
        Sie, warum Eigentümer im gesamten Rhein-Main-Gebiet auf Radex vertrauen.
      </SectionTransition>

      {/* 6 Warum Radex */}
      <section id="warum-radex" className="br-section br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex für Ihre Badmodernisierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine Badmodernisierung erfordert Erfahrung, eine durchdachte Planung und eine saubere Ausführung. Ob neue
              Dusche, moderne Fliesen oder hochwertige Sanitärkeramik – als SHK-Meisterbetrieb begleitet Radex Ihr
              Projekt von der ersten Beratung bis zur fertigen Übergabe.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Bernd Knoop, SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH, erklärt im Video, worauf es bei
        einer erfolgreichen Badmodernisierung ankommt und wie aus einem bestehenden Badezimmer wieder ein moderner
        Wohlfühlraum entsteht.
      </SectionTransition>

      {/* 7 Video */}
      <section id="video" className="br-section br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="br-ablauf-video-frame">
            <video
              src={testVideo}
              controls
              playsInline
              preload="none"
              poster={VIDEO_POSTER}
              title="Bernd Knoop – Badmodernisierung"
            />
          </div>

          <ul className="br-ablauf-video-trust">
            {videoTrustPoints.map((point) => (
              <li key={point}>
                <CheckCircle2 size={18} color="#f97316" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <div className="br-ablauf-cta-wrap">
            <BadmodernisierungCTA centered primaryHref="#kontakt" />
          </div>

          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition title="So modernisieren wir Ihr Badezimmer">
        Von der ersten Beratung bis zur fertigen Übergabe koordinieren wir alle Arbeiten und sorgen für eine saubere und
        zuverlässige Umsetzung Ihrer Badmodernisierung.
      </SectionTransition>

      {/* 8 Ablauf */}
      <section id="ablauf" className="br-section br-bg-light br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So modernisieren wir Ihr Badezimmer</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine erfolgreiche Badmodernisierung beginnt mit einer sorgfältigen Planung. Gemeinsam entwickeln wir eine
              Lösung, die zu Ihrem Badezimmer, Ihren Wünschen und Ihrem Budget passt. Anschließend koordinieren wir
              sämtliche Arbeiten bis zur fertigen Übergabe.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Einblicke in unsere Arbeit">
        Unsere Teams modernisieren Badezimmer täglich im gesamten Rhein-Main-Gebiet. Hier sehen Sie eine Auswahl
        aktueller Modernisierungsprojekte.
      </SectionTransition>

      {/* 9 Projekte */}
      <section id="projekte" className="br-section br-ablauf-examples-section">
        <div className="container">
          <div className="br-ablauf-examples-grid">
            {projectExamples.map((project) => (
              <article key={project.title} className="br-ablauf-example-card">
                <div
                  className="br-ablauf-example-img"
                  style={{ backgroundImage: `url(${project.image})` }}
                  role="img"
                  aria-label={project.imageAlt}
                >
                  <span className="br-ablauf-symbolbild">Symbolbild</span>
                </div>
                <div className="br-ablauf-example-body">
                  <h3>{project.title}</h3>
                  <p className="br-bw-project-subtitle">{project.subtitle}</p>
                  <p>{project.desc}</p>
                  <Link to={project.to} className="br-btn-orange">
                    {project.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/badsanierung-rhein-main" className="btn br-btn-orange">
              Alle Badprojekte ansehen
            </Link>
          </div>
        </div>
      </section>

      <SectionTransition title="Was kostet eine Badmodernisierung?">
        Die Kosten einer Badmodernisierung richten sich nach dem Umfang der Arbeiten, der Raumgröße und der gewünschten
        Ausstattung. Mit den folgenden Preisbeispielen erhalten Sie eine erste Orientierung.
      </SectionTransition>

      {/* 10 Preise */}
      <section id="preise" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet eine Badmodernisierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten einer Badmodernisierung hängen vom Umfang der Arbeiten, der Raumgröße und der gewünschten
              Ausstattung ab. Mit den folgenden Preisbeispielen erhalten Sie eine erste Orientierung für Ihr Projekt.
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
            Festpreisangebot.
          </p>
        </div>
      </section>

      <SectionTransition title="Ermitteln Sie Ihre erste Kosteneinschätzung">
        Mit wenigen Angaben erhalten Sie eine unverbindliche Kosteneinschätzung für Ihre Badmodernisierung.
      </SectionTransition>

      {/* 11 Kostenrechner */}
      <section id="kostenrechner" className="br-section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <BadmodernisierungCalculator />

          <div className="br-ablauf-cta-box br-bw-cta-box">
            <h2 className="br-section-title">Sie möchten Ihr Badezimmer modernisieren?</h2>
            <p className="br-section-subtitle">
              Senden Sie uns Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie einen persönlichen
              Beratungstermin. Gemeinsam finden wir die passende Lösung für Ihre Badmodernisierung.
            </p>
            <BadmodernisierungCTA centered showThird primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Häufige Fragen zur Badmodernisierung">
        Hier beantworten wir häufige Fragen rund um Planung, Kosten, Materialien und den Ablauf einer Badmodernisierung.
      </SectionTransition>

      {/* 12 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zur Badmodernisierung"
        intro="Eine Badmodernisierung wirft viele Fragen auf – von den Kosten über die Dauer bis zur richtigen Ausstattung. Hier finden Sie Antworten auf häufig gestellte Fragen."
      />

      <SectionTransition title="Lassen Sie uns Ihr Badezimmer gemeinsam modernisieren">
        Ob kleine Veränderungen oder eine umfangreiche Modernisierung – wir beraten Sie persönlich und entwickeln
        gemeinsam die passende Lösung für Ihr Badezimmer.
      </SectionTransition>

      {/* 13 Kontakt */}
      <BadmodernisierungContactSection />

      {/* 14 Weitere Informationen – city-style side drawer */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-6">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '20px' }}>
              Im folgenden Bereich finden Sie ausführliche Informationen rund um die Badmodernisierung, Planung,
              Materialien, Kosten, Ablauf und Modernisierungsmöglichkeiten.
            </p>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
            >
              <h2 className="br-section-title">Weitere Informationen zur Badmodernisierung</h2>
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
            className="br-city-seo-panel br-ablauf-seo-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bm-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="bm-seo-panel-title">Weitere Informationen zur Badmodernisierung</h2>
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
              <div className="br-city-seo-panel-block br-ablauf-seo-intro">
                <p className="mb-4 text-gray-600">
                  Hier finden Sie ausführliche Informationen rund um die Badmodernisierung, moderne
                  Gestaltungsmöglichkeiten, Materialien, Planung, Kosten und den Ablauf einer erfolgreichen
                  Modernisierung Ihres Badezimmers.
                </p>
                {badmodernisierungSeoIntro}
              </div>

              {badmodernisierungSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Badmodernisierung anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
