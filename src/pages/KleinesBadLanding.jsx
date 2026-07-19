import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  BadgeEuro,
  CheckCircle2,
  Droplet,
  FileText,
  FolderOpen,
  Gem,
  Grid3x3,
  Hammer,
  LayoutGrid,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  PencilRuler,
  Phone,
  Ruler,
  Send,
  ShowerHead,
  Sparkles,
  UserCheck,
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
  kleinesBadSanierenSeoIntro,
  kleinesBadSanierenSeoSections,
} from '../data/kleinesBadSanierenSeoContent';

const HERO_IMAGE = '/img/kleines-bad-sanieren-hero.webp';
const VIDEO_POSTER = '/img/kleines-bad-nachher.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Kleines Bad sanieren im Rhein-Main-Gebiet | Radex';
const META_DESCRIPTION =
  'Kleines Bad sanieren im Rhein-Main-Gebiet: Radex schafft mit intelligenter Planung, platzsparenden Lösungen und hellem Design mehr Platz und Komfort auf wenigen Quadratmetern – vom SHK-Meisterbetrieb zum Festpreis.';

function KleinesBadCTA({
  isHero = false,
  centered = false,
  showThird = false,
  primaryHref = '#kontakt',
  primaryLabel = 'Kleines Bad anfragen',
}) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        {primaryLabel}
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn br-btn-whatsapp br-btn-whatsapp--primary"
      >
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
    title: 'Optimale Raumnutzung',
    desc: 'Jeder Zentimeter wird sinnvoll genutzt.',
    icon: LayoutGrid,
  },
  {
    title: 'Platzsparende Lösungen',
    desc: 'Mehr Bewegungsfreiheit durch intelligente Planung.',
    icon: ShowerHead,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Festpreis nach Besichtigung',
    desc: 'Klare Planung und transparente Kosten.',
    icon: BadgeEuro,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Erfahrung mit kleinen und großen Badezimmern.',
    icon: FolderOpen,
  },
  {
    title: 'Im gesamten Rhein-Main-Gebiet',
    desc: 'Von Rödermark aus täglich im Einsatz.',
    icon: MapPin,
  },
];

const vorteileCards = [
  {
    title: 'Mehr Bewegungsfreiheit',
    desc: 'Eine clevere Raumaufteilung schafft mehr Platz und verbessert den täglichen Komfort.',
    image: '/img/kleines-bad-vorteil-bewegungsfreiheit.webp',
    imageAlt: 'Symbolbild: Kleines Bad mit offener Bodenfläche und bodengleicher Dusche',
  },
  {
    title: 'Intelligente Stauraumlösungen',
    desc: 'Spiegelschränke, Nischen und maßgeschneiderte Möbel schaffen zusätzlichen Stauraum ohne den Raum zu überladen.',
    image: '/img/kleines-bad-vorteil-stauraum.webp',
    imageAlt: 'Symbolbild: Spiegelschrank, Nischen und kompakter Waschtisch im kleinen Bad',
  },
  {
    title: 'Helle Gestaltung',
    desc: 'Großformatige Fliesen, helle Farben und moderne Beleuchtung lassen kleine Badezimmer großzügiger wirken.',
    image: '/img/kleines-bad-vorteil-helle-gestaltung.webp',
    imageAlt: 'Symbolbild: Helles kleines Bad mit großformatigen Fliesen und indirekter Beleuchtung',
  },
  {
    title: 'Individuelle Planung',
    desc: 'Jedes kleine Badezimmer wird exakt an die vorhandene Raumgröße und Ihre Wünsche angepasst.',
    image: '/img/kleines-bad-vorteil-planung.webp',
    imageAlt: 'Symbolbild: Handwerker vermisst ein kleines Badezimmer für die individuelle Planung',
  },
];

const loesungenCards = [
  {
    title: 'Bodengleiche Dusche',
    desc: 'Mehr Bewegungsfreiheit und ein offenes Raumgefühl.',
    icon: ShowerHead,
  },
  {
    title: 'Großer Spiegel',
    desc: 'Lässt kleine Räume optisch größer wirken.',
    icon: Sparkles,
  },
  {
    title: 'Mehr Stauraum',
    desc: 'Maßgeschneiderte Möbel und praktische Nischen.',
    icon: LayoutGrid,
  },
  {
    title: 'Lichtkonzept',
    desc: 'Direkte und indirekte Beleuchtung für mehr Raumwirkung.',
    icon: Lightbulb,
  },
  {
    title: 'Großformatige Fliesen',
    desc: 'Ruhige Flächen schaffen eine großzügige Optik.',
    icon: Grid3x3,
  },
  {
    title: 'Platzsparende Ausstattung',
    desc: 'Kompakte Waschtische und moderne Sanitärkeramik.',
    icon: Droplet,
  },
];

const whyRadexCards = [
  {
    title: 'Maßgeschneiderte Planung',
    desc: 'Jedes kleine Badezimmer wird individuell geplant und optimal genutzt.',
    icon: LayoutGrid,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten werden fachgerecht unter meisterlicher Leitung ausgeführt.',
    icon: Award,
  },
  {
    title: 'Durchdachte Raumlösungen',
    desc: 'Stauraum, Komfort und Design werden perfekt aufeinander abgestimmt.',
    icon: Gem,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Von der ersten Idee bis zur fertigen Übergabe begleiten wir Ihr Projekt persönlich.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Beratung',
    desc: 'Wir besprechen Ihre Wünsche und analysieren die Möglichkeiten Ihres Badezimmers.',
    icon: Phone,
  },
  {
    title: 'Aufmaß',
    desc: 'Vor Ort vermessen wir Ihr Badezimmer millimetergenau und prüfen alle Anschlüsse.',
    icon: Ruler,
  },
  {
    title: 'Raumplanung',
    desc: 'Wir entwickeln eine Lösung, die jeden verfügbaren Zentimeter optimal nutzt.',
    icon: PencilRuler,
  },
  {
    title: 'Festpreisangebot',
    desc: 'Sie erhalten ein transparentes Angebot mit allen abgestimmten Leistungen.',
    icon: FileText,
  },
  {
    title: 'Umbau',
    desc: 'Unsere Teams setzen alle Arbeiten sauber, termingerecht und fachgerecht um.',
    icon: Hammer,
  },
  {
    title: 'Fertige Übergabe',
    desc: 'Gemeinsam prüfen wir Ihr neues Badezimmer bis ins kleinste Detail.',
    icon: CheckCircle2,
  },
];

const beforeAfter = [
  {
    label: 'Vorher',
    image: '/img/kleines-bad-vorher.webp',
    imageAlt: 'Symbolbild: Kleines Badezimmer vor der Sanierung mit veralteten Fliesen und Badewanne',
  },
  {
    label: 'Nachher',
    image: '/img/kleines-bad-nachher.webp',
    imageAlt: 'Symbolbild: Kleines Badezimmer nach der Sanierung mit bodengleicher Dusche und beleuchtetem Spiegel',
  },
];

const projectExamples = [
  {
    title: 'Frankfurt am Main',
    subtitle: 'Kleines Bad · 4 m²',
    desc: 'Aus einer alten Badewanne entstand ein modernes Badezimmer mit bodengleicher Dusche und deutlich mehr Bewegungsfreiheit.',
    image: '/img/kleines-bad-projekt-frankfurt.webp',
    imageAlt: 'Symbolbild: Kleines Bad mit bodengleicher Dusche in Frankfurt am Main',
  },
  {
    title: 'Dreieich',
    subtitle: 'Altbau-Badezimmer modernisiert',
    desc: 'Intelligente Raumaufteilung mit maßgefertigten Möbeln und zusätzlichem Stauraum für eine junge Familie.',
    image: '/img/kleines-bad-projekt-dreieich.webp',
    imageAlt: 'Symbolbild: Modernisiertes Altbau-Badezimmer in Dreieich',
  },
  {
    title: 'Offenbach am Main',
    subtitle: '3,5 m² Badezimmer',
    desc: 'Durch neue Fliesen, moderne Sanitärkeramik und eine offene Gestaltung wirkt das Badezimmer deutlich größer.',
    image: '/img/kleines-bad-projekt-offenbach.webp',
    imageAlt: 'Symbolbild: Kompaktes 3,5 m² Badezimmer in Offenbach am Main',
  },
];

const priceCards = [
  {
    title: 'Basis',
    price: 'ab 8.000 €',
    desc: 'Funktionale Sanierung mit moderner Sanitärkeramik und platzsparender Ausstattung.',
  },
  {
    title: 'Komfort',
    price: 'ab 15.000 €',
    desc: 'Mit bodengleicher Dusche, neuen Fliesen und hochwertigen Möbeln.',
  },
  {
    title: 'Premium',
    price: 'ab 25.000 €',
    desc: 'Individuelle Raumplanung mit maßgeschneiderten Lösungen und exklusiver Ausstattung.',
  },
];

const faqsData = [
  {
    q: 'Kann ein kleines Badezimmer größer wirken?',
    a: 'Ja. Mit einer intelligenten Raumplanung, hellen Farben, großformatigen Fliesen und einer bodengleichen Dusche lässt sich ein kleines Badezimmer optisch deutlich vergrößern.',
  },
  {
    q: 'Lohnt sich eine bodengleiche Dusche in kleinen Bädern?',
    a: 'Ja. Sie schafft mehr Bewegungsfreiheit und sorgt für ein offenes, modernes Raumgefühl.',
  },
  {
    q: 'Wie viel Stauraum lässt sich schaffen?',
    a: 'Durch maßgefertigte Möbel, Spiegelschränke und integrierte Nischen lässt sich auch auf kleiner Fläche überraschend viel Stauraum gewinnen.',
  },
  {
    q: 'Wie lange dauert die Sanierung eines kleinen Badezimmers?',
    a: 'Je nach Umfang der Arbeiten dauert die Sanierung in der Regel zwischen einer und drei Wochen.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Nach einer persönlichen Besichtigung erhalten Sie ein transparentes Festpreisangebot mit allen abgestimmten Leistungen.',
  },
  {
    q: 'In welchen Städten ist Radex tätig?',
    a: 'Von Rödermark aus realisiert Radex kleine Badezimmer im gesamten Rhein-Main-Gebiet.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH.',
  'Gerade kleine Badezimmer erfordern besonders viel Erfahrung. Unser Ziel ist es, aus jedem Quadratmeter das Maximum herauszuholen und ein Badezimmer zu schaffen, das funktional, modern und angenehm zu nutzen ist.',
  'Mit einer intelligenten Raumplanung, hochwertigen Materialien und passenden Sanitärlösungen entstehen kleine Bäder, die deutlich großzügiger wirken und gleichzeitig mehr Komfort bieten.',
  'Gemeinsam entwickeln wir eine Lösung, die exakt zu Ihrem Badezimmer passt – von der ersten Beratung bis zur fertigen Umsetzung.',
  'Senden Sie uns einfach Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Wir beraten Sie gerne.',
];

const videoTrustPoints = [
  'Individuelle Raumplanung',
  'SHK-Meisterbetrieb',
  'Platzsparende Lösungen',
  'Ein Ansprechpartner',
];

const veraendernOptions = [
  'Dusche',
  'Badewanne',
  'Waschtisch',
  'Komplettes Badezimmer',
  'Ich bin noch unsicher',
];

const sizeOptions = ['Bis 4 m²', '4 bis 5 m²', 'Über 5 m²'];

const formatEuro = (value) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);

const CALC_START_PRICE = 8000;

const calcSizeOptions = [
  { label: 'Bis 4 m²', factor: 0 },
  { label: '4 bis 5 m²', factor: 0.1 },
  { label: 'Über 5 m²', factor: 0.2 },
];

const calcSolutionOptions = [
  'Platzsparende Modernisierung',
  'Komplettes neues Bad',
  'Ich bin noch unsicher',
];

const calcEquipmentOptions = [
  { label: 'Basis', add: 0 },
  { label: 'Komfort', add: 3000 },
  { label: 'Premium', add: 7000 },
];

const calcExtraOptions = [
  { label: 'Bodengleiche Dusche', add: 2500 },
  { label: 'Neue Fliesen', add: 2000 },
  { label: 'Maßmöbel', add: 2000 },
  { label: 'Neue Beleuchtung', add: 600 },
  { label: 'Keine Zusatzleistungen', add: 0, exclusive: true },
];

function KleinesBadKostenrechner() {
  const [size, setSize] = useState(0);
  const [solution, setSolution] = useState(0);
  const [equipment, setEquipment] = useState(0);
  const [extras, setExtras] = useState([]);

  const toggleExtra = (index) => {
    const option = calcExtraOptions[index];
    setExtras((current) => {
      if (option.exclusive) {
        return current.includes(index) ? [] : [index];
      }
      const withoutExclusive = current.filter(
        (i) => !calcExtraOptions[i].exclusive,
      );
      return withoutExclusive.includes(index)
        ? withoutExclusive.filter((i) => i !== index)
        : [...withoutExclusive, index];
    });
  };

  const { lower, upper } = useMemo(() => {
    const sizeFactor = calcSizeOptions[size].factor;
    const equipmentAdd = calcEquipmentOptions[equipment].add;
    const extrasAdd = extras.reduce((sum, i) => sum + calcExtraOptions[i].add, 0);
    const base = CALC_START_PRICE * (1 + sizeFactor) + equipmentAdd + extrasAdd;
    return { lower: Math.round(base), upper: Math.round(base * 1.2) };
  }, [size, equipment, extras]);

  return (
    <div className="br-gwc-calc">
      <div className="br-gwc-calc-question">
        <span className="br-gwc-calc-step">1</span>
        <h3>Wie groß ist Ihr Badezimmer?</h3>
        <div className="br-gwc-calc-options">
          {calcSizeOptions.map((opt, i) => (
            <button
              key={opt.label}
              type="button"
              className={`br-gwc-calc-option${size === i ? ' is-active' : ''}`}
              onClick={() => setSize(i)}
              aria-pressed={size === i}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-gwc-calc-question">
        <span className="br-gwc-calc-step">2</span>
        <h3>Welche Lösung wünschen Sie?</h3>
        <div className="br-gwc-calc-options">
          {calcSolutionOptions.map((opt, i) => (
            <button
              key={opt}
              type="button"
              className={`br-gwc-calc-option${solution === i ? ' is-active' : ''}`}
              onClick={() => setSolution(i)}
              aria-pressed={solution === i}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="br-gwc-calc-question">
        <span className="br-gwc-calc-step">3</span>
        <h3>Welche Ausstattung wünschen Sie?</h3>
        <div className="br-gwc-calc-options">
          {calcEquipmentOptions.map((opt, i) => (
            <button
              key={opt.label}
              type="button"
              className={`br-gwc-calc-option${equipment === i ? ' is-active' : ''}`}
              onClick={() => setEquipment(i)}
              aria-pressed={equipment === i}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-gwc-calc-question">
        <span className="br-gwc-calc-step">4</span>
        <h3>Welche zusätzlichen Arbeiten sind geplant?</h3>
        <p className="br-gwc-calc-hint">Mehrfachauswahl möglich</p>
        <div className="br-gwc-calc-options">
          {calcExtraOptions.map((opt, i) => (
            <button
              key={opt.label}
              type="button"
              className={`br-gwc-calc-option${extras.includes(i) ? ' is-active' : ''}`}
              onClick={() => toggleExtra(i)}
              aria-pressed={extras.includes(i)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-gwc-calc-result" aria-live="polite">
        <span className="br-gwc-calc-result-label">Ihre erste Kosteneinschätzung</span>
        <strong className="br-gwc-calc-result-value">
          ca. {formatEuro(lower)} bis {formatEuro(upper)}
        </strong>
        <p className="br-gwc-calc-result-note">
          Diese Berechnung dient als erste Orientierung. Nach einer Besichtigung kann der tatsächliche Preis je nach
          Grundriss, Ausstattung und baulichen Gegebenheiten niedriger oder höher ausfallen.
        </p>
      </div>
    </div>
  );
}

function KleinesBadContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const plzOrt = form.plzOrt.value.trim();
    const veraendern = form.veraendern.value;
    const groesse = form.groesse.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Kleines Bad Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Was verändern: ${veraendern}`,
      `Größe des Badezimmers: ${groesse}`,
      '',
      'Projektbeschreibung:',
      nachricht,
      files?.length
        ? `\nAnhänge: ${files.length} Datei(en) – bitte zusätzlich per WhatsApp oder E-Mail senden.`
        : '',
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
            <h2 className="br-section-title">Kleines Bad anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns schnellstmöglich mit einer ersten Einschätzung und beraten Sie
              persönlich zu den Möglichkeiten für Ihr kleines Badezimmer.
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
                <span>Was möchten Sie verändern?</span>
                <select name="veraendern" required defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {veraendernOptions.map((opt) => (
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
                  {sizeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="br-input-group">
              <span>Projektbeschreibung</span>
              <textarea
                name="nachricht"
                rows={5}
                placeholder="Beschreiben Sie kurz Ihr Badezimmer und Ihre Wünsche."
              />
            </label>
            <label className="br-input-group">
              <span>Fotos hochladen</span>
              <input type="file" name="fotos" accept="image/*" multiple />
              <small>Laden Sie auf Wunsch Fotos Ihres Badezimmers hoch.</small>
            </label>
            <button type="submit" className="btn br-btn-orange br-ablauf-submit">
              Kleines Bad anfragen <Send size={18} />
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

export default function KleinesBadLanding() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    const hash = window.location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
    return () => window.clearTimeout(timer);
  }, []);

  useSeo({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: '/kleines-bad-sanieren',
    image: 'https://www.radex-objektmanagement.de/img/kleines-bad-sanieren-rhein-main-radex.webp',
    jsonLd: [
      buildServiceSchema({
        name: 'Kleines Bad sanieren',
        description: META_DESCRIPTION,
        path: '/kleines-bad-sanieren',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badsanierung-kosten-page gaeste-wc-page kleines-bad-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Kleines Bad sanieren</p>
            <h1 className="br-hero-title">
              Kleines Bad sanieren
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">Mehr Platz. Mehr Komfort. Clevere Lösungen. Modernes Design.</p>
            <p className="br-hero-text">
              Auch ein kleines Badezimmer kann großzügig wirken. Mit einer intelligenten Planung, platzsparenden Lösungen
              und hochwertigen Materialien entsteht ein modernes Bad, das jeden Zentimeter optimal nutzt. Radex
              entwickelt individuelle Konzepte für kleine Badezimmer im gesamten Rhein-Main-Gebiet.
            </p>
            <KleinesBadCTA isHero showThird primaryHref="#kontakt" />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modernes kleines Badezimmer mit bodengleicher Dusche, schwebendem Waschtisch und beleuchtetem Spiegelschrank"
          title="Kleines Bad sanieren | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Wie wird aus wenig Platz ein modernes Badezimmer?">
        Ein kleines Bad stellt besondere Anforderungen an Planung und Gestaltung. Mit der richtigen Raumaufteilung,
        hellen Materialien und maßgeschneiderten Lösungen entsteht ein Badezimmer, das größer wirkt, mehr Stauraum
        bietet und den Alltag deutlich komfortabler macht.
      </SectionTransition>

      {/* 3 Vorteile */}
      <section id="vorteile" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Mehr Raum auf wenigen Quadratmetern</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Ein kleines Badezimmer muss kein Kompromiss sein. Mit einer durchdachten Planung entstehen funktionale
              Laufwege, praktische Stauraumlösungen und ein modernes Design, das den Raum optisch größer wirken lässt.
            </p>
          </div>
          <ImageCardGrid cards={vorteileCards} />
        </div>
      </section>

      <SectionTransition title="Welche Lösungen eignen sich für kleine Badezimmer?">
        Nicht jedes kleine Bad ist gleich. Je nach Grundriss entwickeln wir individuelle Lösungen, um vorhandenen Platz
        optimal zu nutzen und den Wohnkomfort deutlich zu erhöhen.
      </SectionTransition>

      {/* 4 Lösungen */}
      <section id="loesungen" className="br-section br-bw-process-section">
        <div className="container">
          <PremiumIconCards cards={loesungenCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Vorher und Nachher">
        Mit einer durchdachten Planung lässt sich selbst ein kleines Badezimmer vollständig verändern. Das Ergebnis ist
        ein moderner Raum mit mehr Komfort und einer deutlich großzügigeren Wirkung.
      </SectionTransition>

      {/* 5 Vorher / Nachher */}
      <section id="vorher-nachher" className="br-section br-bg-light br-gwc-ba-section">
        <div className="container">
          <div className="br-gwc-ba-grid">
            {beforeAfter.map((item) => (
              <figure key={item.label} className="br-gwc-ba-card">
                <div
                  className="br-gwc-ba-img"
                  style={{ backgroundImage: `url(${item.image})` }}
                  role="img"
                  aria-label={item.imageAlt}
                >
                  <span className="br-gwc-ba-label">{item.label}</span>
                  <span className="br-ablauf-symbolbild">Symbolbild</span>
                </div>
              </figure>
            ))}
          </div>
          <div className="br-ablauf-cta-wrap" style={{ marginTop: '36px' }}>
            <KleinesBadCTA centered primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Radex?">
        Ein kleines Badezimmer verlangt Erfahrung, kreative Planung und präzise Ausführung. Im nächsten Abschnitt zeigen
        wir Ihnen, warum Eigentümer im Rhein-Main-Gebiet auf Radex vertrauen.
      </SectionTransition>

      {/* 6 Warum Radex */}
      <section id="warum-radex" className="br-section br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex für Ihr kleines Badezimmer?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Ein kleines Badezimmer stellt hohe Anforderungen an Planung und Ausführung. Jeder Zentimeter muss sinnvoll
              genutzt werden. Als SHK-Meisterbetrieb entwickelt Radex individuelle Raumkonzepte, die Funktion, Komfort
              und modernes Design optimal miteinander verbinden.
            </p>
          </div>
          <div className="br-ablauf-why-grid br-gwc-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Bernd Knoop, SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH, erklärt im Video, wie selbst kleine
        Badezimmer optimal geplant werden und welche Lösungen den verfügbaren Platz bestmöglich nutzen.
      </SectionTransition>

      {/* 7 Bernd Knoop Video */}
      <section id="video" className="br-section br-bg-light br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="br-ablauf-video-frame">
            <video
              src={testVideo}
              controls
              playsInline
              preload="none"
              poster={VIDEO_POSTER}
              title="Bernd Knoop – Kleines Bad sanieren"
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
            <KleinesBadCTA centered primaryHref="#kontakt" />
          </div>

          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Ablauf */}
      <section id="ablauf" className="br-section br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So entsteht Ihr neues kleines Badezimmer</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine erfolgreiche Badsanierung beginnt mit einer präzisen Planung. Gerade bei kleinen Badezimmern
              entscheidet jedes Detail über Komfort, Stauraum und Bewegungsfreiheit. Gemeinsam entwickeln wir eine
              Lösung, die optimal zu Ihrem Grundriss passt.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Einblicke in unsere Arbeit">
        Ob Dachgeschoss, Altbau oder kompakter Grundriss – unsere Teams realisieren täglich kleine Badezimmer im
        gesamten Rhein-Main-Gebiet. Hier sehen Sie eine Auswahl aktueller Projekte.
      </SectionTransition>

      {/* 9 Projekte */}
      <section id="projekte" className="br-section br-bg-light br-ablauf-examples-section">
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
                  <a href="#kontakt" className="br-gwc-project-link">
                    Projekt ansehen →
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/badsanierung-rhein-main"
              className="br-btn-outline-orange"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              Alle Badprojekte ansehen
            </Link>
          </div>
        </div>
      </section>

      <SectionTransition title="Was kostet die Sanierung eines kleinen Badezimmers?">
        Die Kosten hängen von Raumgröße, gewünschter Ausstattung und den baulichen Gegebenheiten ab. Mit den folgenden
        Preisbeispielen erhalten Sie eine erste Orientierung für Ihr Projekt.
      </SectionTransition>

      {/* 10 Preise */}
      <section id="preise" className="br-section">
        <div className="container">
          <div className="br-kosten-price-grid">
            {priceCards.map((card) => (
              <article key={card.title} className="br-kosten-price-card">
                <h3>{card.title}</h3>
                <p className="br-kosten-price-value">{card.price}</p>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
          <p className="br-bw-price-note">
            Die genannten Preise dienen als erste Orientierung. Nach einer Besichtigung erhalten Sie ein individuelles
            Festpreisangebot.
          </p>
        </div>
      </section>

      <SectionTransition title="Ermitteln Sie Ihre erste Kosteneinschätzung">
        Beantworten Sie wenige Fragen und erhalten Sie eine unverbindliche Kosteneinschätzung für Ihr kleines
        Badezimmer.
      </SectionTransition>

      {/* 11 Kostenrechner */}
      <section id="kostenrechner" className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '860px' }}>
          <KleinesBadKostenrechner />
        </div>
      </section>

      {/* CTA Box */}
      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Sie möchten Ihr kleines Badezimmer neu gestalten?</h2>
            <p>
              Senden Sie uns Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie einen persönlichen
              Beratungstermin. Gemeinsam entwickeln wir die optimale Lösung für Ihren vorhandenen Grundriss.
            </p>
            <KleinesBadCTA centered showThird primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Häufige Fragen zu kleinen Badezimmern">
        Hier beantworten wir häufige Fragen rund um Planung, Kosten, Stauraum, Gestaltung und den Ablauf einer
        Badsanierung auf kleiner Fläche.
      </SectionTransition>

      {/* 12 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zum kleinen Badezimmer"
        intro="Ein kleines Badezimmer wirft oft besondere Fragen auf. Hier finden Sie Antworten rund um Planung, Platzgewinn, Kosten und Gestaltungsmöglichkeiten."
      />

      <SectionTransition title="Gemeinsam entwickeln wir die optimale Lösung für Ihr Badezimmer">
        Jedes kleine Badezimmer ist anders. Deshalb planen wir Ihr Projekt individuell und entwickeln eine Lösung, die
        optimal zu Ihrem Grundriss und Ihren Wünschen passt.
      </SectionTransition>

      {/* 13 Kontakt */}
      <KleinesBadContactSection />

      <SectionTransition title="Weitere Informationen zum Thema Kleines Bad sanieren">
        Im folgenden Bereich finden Sie ausführliche Informationen rund um Planung, Gestaltung, Stauraum, Materialien,
        Kosten und den Ablauf einer professionellen Badsanierung auf kleiner Fläche.
      </SectionTransition>

      {/* 14 Weitere Informationen (SEO-Migration) */}
      <section id="seo-informationen" className="br-section br-kosten-seo-article">
        <div className="container br-kosten-seo-container">
          <div className="br-ablauf-seo-intro br-kosten-seo-intro">{kleinesBadSanierenSeoIntro}</div>

          {kleinesBadSanierenSeoSections.map((section) => (
            <article key={section.id} id={section.id} className="br-kosten-seo-block">
              <h2 className="br-kosten-seo-title">{section.title}</h2>
              <div className="br-ablauf-seo-article-body">{section.content}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
