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
  PaintRoller,
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
  badrenovierungSeoIntro,
  badrenovierungSeoSections,
} from '../data/badrenovierungSeoContent';

const HERO_IMAGE = '/img/badrenovierung-rhein-main-radex.webp';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Badrenovierung Rhein-Main | Bad renovieren lassen';
const META_DESCRIPTION =
  'Badrenovierung im Rhein-Main-Gebiet: Radex erneuert Badezimmer, Oberflächen, Sanitärbereiche und Ausstattung sauber und koordiniert.';

function BadrenovierungCTA({ isHero = false, centered = false, showThird = false, primaryHref = '#kontakt' }) {
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
    title: 'Neue Optik',
    desc: 'Moderne Materialien für ein zeitgemäßes Badezimmer.',
    icon: PaintRoller,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Hochwertige Materialien',
    desc: 'Langlebige Qualität für viele Jahre.',
    icon: Gem,
  },
  {
    title: 'Festpreis nach Besichtigung',
    desc: 'Transparente Planung und klare Kosten.',
    icon: FileText,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Erfahrung aus zahlreichen Badprojekten im Rhein-Main-Gebiet.',
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
    title: 'Neue Optik',
    desc: 'Neue Fliesen, moderne Farben und hochwertige Materialien verleihen Ihrem Badezimmer ein völlig neues Erscheinungsbild.',
    image: '/img/badrenovierung-vorteil-optik.webp',
    imageAlt: 'Renoviertes Badezimmer mit neuen Oberflächen und moderner Optik',
  },
  {
    title: 'Mehr Komfort',
    desc: 'Neue Armaturen, moderne Sanitärkeramik und praktische Details verbessern die tägliche Nutzung.',
    image: '/img/badrenovierung-vorteil-komfort.webp',
    imageAlt: 'Modernes Waschtischarrangement mit eleganten Armaturen',
  },
  {
    title: 'Langlebige Materialien',
    desc: 'Robuste Oberflächen und hochwertige Produkte sorgen für dauerhafte Freude an Ihrem Badezimmer.',
    image: '/img/badrenovierung-vorteil-materialien.png',
    imageAlt: 'Fachkraft bei Fliesenarbeiten in schwarzer Arbeitskleidung',
  },
  {
    title: 'Immobilie aufwerten',
    desc: 'Eine Badrenovierung steigert den Wohnkomfort und erhöht den Wert Ihrer Immobilie.',
    image: '/img/badrenovierung-vorteil-wert.webp',
    imageAlt: 'Fertig renoviertes Badezimmer in einer deutschen Wohnung',
  },
];

const serviceCards = [
  {
    title: 'Fliesen erneuern',
    desc: 'Neue Wand- und Bodenfliesen für eine moderne Optik.',
    icon: LayoutGrid,
  },
  {
    title: 'Waschtisch austauschen',
    desc: 'Neue Waschtische und moderne Armaturen installieren.',
    icon: Wrench,
  },
  {
    title: 'WC erneuern',
    desc: 'Zeitgemäße Sanitärkeramik für mehr Komfort.',
    icon: Toilet,
  },
  {
    title: 'Dusche renovieren',
    desc: 'Neue Duschlösungen mit moderner Ausstattung.',
    icon: ShowerHead,
  },
  {
    title: 'Beleuchtung erneuern',
    desc: 'Effiziente Lichtkonzepte für eine angenehme Atmosphäre.',
    icon: Lightbulb,
  },
  {
    title: 'Oberflächen modernisieren',
    desc: 'Farben, Materialien und Details harmonisch aufeinander abstimmen.',
    icon: PaintRoller,
  },
];

const whyRadexCards = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten werden fachgerecht unter meisterlicher Leitung ausgeführt.',
    icon: Award,
  },
  {
    title: 'Individuelle Beratung',
    desc: 'Jede Badrenovierung wird auf Ihre Wünsche und Ihr Budget abgestimmt.',
    icon: ClipboardList,
  },
  {
    title: 'Hochwertige Materialien',
    desc: 'Langlebige Produkte und moderne Oberflächen sorgen für nachhaltige Qualität.',
    icon: Gem,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Von der ersten Beratung bis zur fertigen Übergabe begleiten wir Ihr Projekt persönlich.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Beratung',
    desc: 'Wir besprechen Ihre Wünsche und beraten Sie zu den passenden Renovierungsmöglichkeiten.',
    icon: Phone,
  },
  {
    title: 'Besichtigung',
    desc: 'Vor Ort prüfen wir den Zustand Ihres Badezimmers und den Umfang der Renovierungsarbeiten.',
    icon: Ruler,
  },
  {
    title: 'Planung',
    desc: 'Materialien, Farben und Ausstattung werden gemeinsam abgestimmt.',
    icon: ClipboardList,
  },
  {
    title: 'Festpreisangebot',
    desc: 'Sie erhalten ein transparentes Angebot mit allen vereinbarten Leistungen.',
    icon: FileText,
  },
  {
    title: 'Renovierung',
    desc: 'Alle Arbeiten werden fachgerecht, sauber und termingerecht ausgeführt.',
    icon: Hammer,
  },
  {
    title: 'Übergabe',
    desc: 'Nach Abschluss prüfen wir gemeinsam Ihr renoviertes Badezimmer.',
    icon: CheckCircle2,
  },
];

const projectExamples = [
  {
    title: 'Frankfurt am Main',
    subtitle: 'Badrenovierung · 7 m²',
    desc: 'Renovierung eines Badezimmers mit neuen Fliesen, moderner Dusche und hochwertigem Waschtisch.',
    image: '/img/badrenovierung-projekt-frankfurt.png',
    imageAlt: 'Symbolbild: renoviertes Badezimmer in Frankfurt',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
  {
    title: 'Hanau',
    subtitle: 'Familienbad renoviert',
    desc: 'Bestehendes Badezimmer mit neuer Sanitärkeramik, modernen Oberflächen und zeitgemäßer Beleuchtung renoviert.',
    image: '/img/badrenovierung-projekt-hanau.png',
    imageAlt: 'Symbolbild: renoviertes Familienbad in Hanau',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
  {
    title: 'Dreieich',
    subtitle: 'Badezimmer erneuert',
    desc: 'Optische und funktionale Renovierung eines Badezimmers mit neuer Ausstattung und modernen Materialien.',
    image: '/img/badrenovierung-projekt-dreieich.png',
    imageAlt: 'Symbolbild: erneuertes Badezimmer in Dreieich',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
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

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter bei der Radex Objektmanagement GmbH.',
  'Mit einer Badrenovierung bringen wir Ihr Badezimmer optisch und funktional auf einen neuen Stand. Oft reichen gezielte Renovierungsmaßnahmen aus, um den Raum deutlich aufzuwerten, ohne eine komplette Badsanierung durchführen zu müssen.',
  'Gemeinsam planen wir die passende Lösung für Ihr Badezimmer und koordinieren alle Arbeiten – von neuen Fliesen über moderne Sanitärkeramik bis zur fertigen Übergabe.',
  'So entsteht ein Badezimmer, das moderner aussieht, komfortabler genutzt werden kann und langfristig Freude bereitet.',
  'Senden Sie uns einfach Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Wir beraten Sie gerne.',
];

const videoTrustPoints = [
  'SHK-Meisterbetrieb',
  'Individuelle Beratung',
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
            <h3>E-Mail</h3>
            <p>Senden Sie uns Ihre Anfrage bequem per E-Mail.</p>
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
            <h2 className="br-section-title">Badrenovierung anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns schnellstmöglich mit einer ersten Einschätzung und beraten Sie
              persönlich zu Ihrer Badrenovierung.
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
            <label className="br-input-group">
              <span>Fotos hochladen</span>
              <input type="file" name="fotos" accept="image/*" multiple />
              <small>Laden Sie auf Wunsch Fotos Ihres Badezimmers hoch.</small>
            </label>
            <button type="submit" className="btn br-btn-orange br-ablauf-submit">
              Badrenovierung anfragen <Send size={18} />
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
            <BadrenovierungCTA isHero showThird primaryHref="#kontakt" />
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

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Wann lohnt sich eine Badrenovierung?">
        Eine Badrenovierung ist die richtige Lösung, wenn Ihr Badezimmer technisch noch in Ordnung ist, aber optisch
        oder funktional modernisiert werden soll. Bereits einzelne Maßnahmen können das Erscheinungsbild und den
        Komfort deutlich verbessern.
      </SectionTransition>

      {/* 3 Vorteile */}
      <section id="vorteile" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Ihre Vorteile einer Badrenovierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Mit einer Badrenovierung erhält Ihr Badezimmer ein neues Erscheinungsbild, mehr Komfort und eine
              zeitgemäße Ausstattung. Oft reichen gezielte Renovierungsmaßnahmen aus, um den Raum deutlich aufzuwerten
              und den Wohnkomfort nachhaltig zu verbessern.
            </p>
          </div>
          <ImageCardGrid cards={vorteilCards} />
        </div>
      </section>

      <SectionTransition title="Welche Arbeiten gehören zu einer Badrenovierung?">
        Je nach Zustand Ihres Badezimmers können einzelne Bereiche erneuert oder mehrere Renovierungsarbeiten
        miteinander kombiniert werden. Radex übernimmt die komplette Koordination aller Arbeiten.
      </SectionTransition>

      {/* 4 Leistungen */}
      <section id="leistungen" className="br-section br-bw-options-section">
        <div className="container">
          <PremiumIconCards cards={serviceCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Vorher und Nachher">
        Schon gezielte Renovierungsarbeiten können den Charakter eines Badezimmers vollständig verändern. Aus einem
        älteren Badezimmer entsteht ein moderner und einladender Wohlfühlraum.
      </SectionTransition>

      {/* 5 Vorher / Nachher */}
      <section id="vorher-nachher" className="br-section br-bg-light br-bw-before-after-section">
        <div className="container">
          <div className="br-bw-before-after-grid">
            <figure className="br-bw-before-after-card">
              <span className="br-bw-before-after-label">Vorher</span>
              <img
                src="/img/badrenovierung-vorher.png"
                alt="Altes Badezimmer vor der Renovierung"
                loading="lazy"
                width={800}
                height={600}
              />
            </figure>
            <figure className="br-bw-before-after-card">
              <span className="br-bw-before-after-label">Nachher</span>
              <img
                src="/img/badrenovierung-nachher.png"
                alt="Renoviertes Badezimmer mit moderner Ausstattung"
                loading="lazy"
                width={800}
                height={600}
              />
            </figure>
          </div>
          <div className="br-ablauf-cta-wrap">
            <BadrenovierungCTA centered primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Radex?">
        Eine professionelle Badrenovierung erfordert Erfahrung, hochwertige Materialien und eine saubere Ausführung. Im
        nächsten Abschnitt erfahren Sie, warum sich Eigentümer im gesamten Rhein-Main-Gebiet für Radex entscheiden.
      </SectionTransition>

      {/* 6 Warum Radex */}
      <section id="warum-radex" className="br-section br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex für Ihre Badrenovierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine Badrenovierung lebt von einer sorgfältigen Planung, hochwertigen Materialien und einer sauberen
              Ausführung. Als SHK-Meisterbetrieb modernisiert Radex Badezimmer im gesamten Rhein-Main-Gebiet –
              zuverlässig, termingerecht und mit einem festen Ansprechpartner.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Bernd Knoop, SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH, erklärt im Video, worauf es bei
        einer erfolgreichen Badrenovierung ankommt und welche Möglichkeiten bestehen, ein bestehendes Badezimmer
        optisch und funktional aufzuwerten.
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
              title="Bernd Knoop – Badrenovierung"
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
            <BadrenovierungCTA centered primaryHref="#kontakt" />
          </div>

          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition title="So renovieren wir Ihr Badezimmer">
        Von der ersten Beratung bis zur fertigen Übergabe koordinieren wir alle Arbeiten und sorgen für eine saubere,
        termingerechte und professionelle Umsetzung Ihrer Badrenovierung.
      </SectionTransition>

      {/* 8 Ablauf */}
      <section id="ablauf" className="br-section br-bg-light br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So renovieren wir Ihr Badezimmer</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jede Badrenovierung beginnt mit einer sorgfältigen Planung. Gemeinsam besprechen wir Ihre Wünsche, prüfen
              den Zustand Ihres Badezimmers und entwickeln eine passende Lösung. Anschließend koordinieren wir sämtliche
              Arbeiten bis zur fertigen Übergabe.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Einblicke in unsere Arbeit">
        Unsere Teams renovieren Badezimmer im gesamten Rhein-Main-Gebiet. Hier sehen Sie eine Auswahl aktueller
        Renovierungsprojekte und moderner Gestaltungsmöglichkeiten.
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

      <SectionTransition title="Was kostet eine Badrenovierung?">
        Die Kosten einer Badrenovierung hängen vom Umfang der Arbeiten, der Raumgröße und der gewünschten Ausstattung
        ab. Mit den folgenden Preisbeispielen erhalten Sie eine erste Orientierung.
      </SectionTransition>

      {/* 10 Preise */}
      <section id="preise" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet eine Badrenovierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten einer Badrenovierung hängen vom Umfang der Arbeiten, der Raumgröße und der gewünschten
              Ausstattung ab. Mit den folgenden Preisbeispielen erhalten Sie eine erste Orientierung.
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
        Beantworten Sie wenige Fragen und erhalten Sie eine unverbindliche Kosteneinschätzung für Ihre Badrenovierung.
      </SectionTransition>

      {/* 11 Kostenrechner */}
      <section id="kostenrechner" className="br-section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <BadrenovierungCalculator />

          <div className="br-ablauf-cta-box br-bw-cta-box">
            <h2 className="br-section-title">Sie möchten Ihr Badezimmer renovieren?</h2>
            <p className="br-section-subtitle">
              Senden Sie uns Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie einen persönlichen
              Beratungstermin. Wir beraten Sie gerne und erstellen eine erste unverbindliche Einschätzung.
            </p>
            <BadrenovierungCTA centered showThird primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Häufige Fragen zur Badrenovierung">
        Hier beantworten wir häufige Fragen rund um Kosten, Ablauf, Materialien und Möglichkeiten einer Badrenovierung.
      </SectionTransition>

      {/* 12 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zur Badrenovierung"
        intro="Hier finden Sie Antworten auf häufige Fragen rund um die Badrenovierung – von der Planung über die Kosten bis zur Ausführung."
      />

      <SectionTransition title="Lassen Sie uns Ihr Badezimmer gemeinsam renovieren">
        Ob kleine Renovierung oder umfangreiche Erneuerung – wir beraten Sie persönlich und entwickeln gemeinsam die
        passende Lösung für Ihr Badezimmer.
      </SectionTransition>

      {/* 13 Kontakt */}
      <BadrenovierungContactSection />

      {/* 14 Weitere Informationen */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-6">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '20px' }}>
              Im folgenden Bereich finden Sie ausführliche Informationen rund um die Badrenovierung, Materialien,
              Planung, Kosten, Möglichkeiten und den Ablauf einer professionellen Renovierung.
            </p>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
            >
              <h2 className="br-section-title">Weitere Informationen zur Badrenovierung</h2>
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
            aria-labelledby="br-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="br-seo-panel-title">Weitere Informationen zur Badrenovierung</h2>
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
                  Hier finden Sie ausführliche Informationen rund um die Badrenovierung, Materialien,
                  Gestaltungsmöglichkeiten, Planung, Kosten und den Ablauf einer professionellen Renovierung Ihres
                  Badezimmers.
                </p>
                {badrenovierungSeoIntro}
              </div>

              {badrenovierungSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Badrenovierung anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
