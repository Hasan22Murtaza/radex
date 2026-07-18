import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  Bath,
  BadgeEuro,
  CheckCircle2,
  Droplet,
  FileText,
  FolderOpen,
  Gem,
  Grid3x3,
  Hammer,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  PaintRoller,
  PencilRuler,
  Phone,
  Ruler,
  Send,
  UserCheck,
  Waves,
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
  QualityPromiseBlock,
  SectionTransition,
} from '../components/landing/SharedLandingParts';
import testVideo from '../assets/test.mp4';
import {
  gaesteWcSanierenSeoIntro,
  gaesteWcSanierenSeoSections,
} from '../data/gaesteWcSanierenSeoContent';

const HERO_IMAGE = '/img/gaeste-wc-sanieren-hero.webp';
const VIDEO_POSTER = '/img/gaeste-wc-nachher.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Gäste-WC sanieren im Rhein-Main-Gebiet | Radex';
const META_DESCRIPTION =
  'Gäste-WC sanieren im Rhein-Main-Gebiet: Radex modernisiert kleine WCs mit platzsparenden Lösungen, modernem Design und hochwertiger Ausstattung – aus einer Hand zum Festpreis.';

function GaesteWcCTA({
  isHero = false,
  centered = false,
  showThird = false,
  primaryHref = '#kontakt',
  primaryLabel = 'Gäste-WC anfragen',
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
    title: 'Platzsparende Lösungen',
    desc: 'Durchdachte Konzepte für kleine Räume.',
    icon: Bath,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Modernes Design',
    desc: 'Zeitlose Materialien und hochwertige Ausstattung.',
    icon: PaintRoller,
  },
  {
    title: 'Festpreis nach Besichtigung',
    desc: 'Klare Planung und transparente Kosten.',
    icon: BadgeEuro,
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

const vorteileCards = [
  {
    title: 'Mehr Platz auf kleiner Fläche',
    desc: 'Jeder Zentimeter wird optimal genutzt – für mehr Bewegungsfreiheit und eine bessere Raumnutzung.',
    image: '/img/gaeste-wc-vorteil-platz.webp',
    imageAlt: 'Symbolbild: Platzsparendes Gäste-WC auf kleiner Fläche',
  },
  {
    title: 'Modernes Design',
    desc: 'Zeitlose Materialien und hochwertige Ausstattung sorgen für einen stilvollen Gesamteindruck.',
    image: '/img/gaeste-wc-vorteil-design.webp',
    imageAlt: 'Symbolbild: Modernes Gäste-WC mit beleuchtetem Spiegel und schwebendem Waschtisch',
  },
  {
    title: 'Leichte Reinigung',
    desc: 'Moderne Oberflächen und wandhängende Sanitärkeramik erleichtern die tägliche Reinigung.',
    image: '/img/gaeste-wc-vorteil-reinigung.webp',
    imageAlt: 'Symbolbild: Wandhängendes WC und fugenloser Boden für leichte Reinigung',
  },
  {
    title: 'Wertsteigerung Ihrer Immobilie',
    desc: 'Ein modernes Gäste-WC wertet Ihre Immobilie auf und hinterlässt bei Besuchern einen hochwertigen Eindruck.',
    image: '/img/gaeste-wc-vorteil-wertsteigerung.webp',
    imageAlt: 'Symbolbild: Hochwertig modernisiertes Gäste-WC in warmem Tageslicht',
  },
];

const leistungenCards = [
  {
    title: 'WC austauschen',
    desc: 'Moderne wandhängende WC-Anlagen fachgerecht montieren.',
    icon: Bath,
  },
  {
    title: 'Waschtisch erneuern',
    desc: 'Kompakte Lösungen für kleine Räume.',
    icon: Droplet,
  },
  {
    title: 'Fliesenarbeiten',
    desc: 'Neue Wand- und Bodenfliesen sauber verlegen.',
    icon: Grid3x3,
  },
  {
    title: 'Sanitärinstallation',
    desc: 'Leitungen und Anschlüsse fachgerecht erneuern.',
    icon: Waves,
  },
  {
    title: 'Beleuchtung',
    desc: 'Moderne Lichtkonzepte für kleine Räume.',
    icon: Lightbulb,
  },
  {
    title: 'Oberflächen erneuern',
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
    title: 'Optimale Raumplanung',
    desc: 'Auch kleine Räume werden funktional und hochwertig geplant.',
    icon: PencilRuler,
  },
  {
    title: 'Hochwertige Materialien',
    desc: 'Langlebige Oberflächen und moderne Sanitärkeramik für ein dauerhaft schönes Ergebnis.',
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
    desc: 'Wir besprechen Ihre Wünsche und prüfen die Möglichkeiten für Ihr Gäste-WC.',
    icon: Phone,
  },
  {
    title: 'Besichtigung',
    desc: 'Vor Ort prüfen wir Platzverhältnisse, Leitungen und die vorhandene Bausubstanz.',
    icon: Ruler,
  },
  {
    title: 'Planung',
    desc: 'Gemeinsam entwickeln wir eine platzsparende und moderne Lösung für Ihr Gäste-WC.',
    icon: PencilRuler,
  },
  {
    title: 'Festpreisangebot',
    desc: 'Sie erhalten ein transparentes Angebot mit allen abgestimmten Leistungen.',
    icon: FileText,
  },
  {
    title: 'Modernisierung',
    desc: 'Sanitär, Fliesen, Oberflächen und Ausstattung werden fachgerecht umgesetzt.',
    icon: Hammer,
  },
  {
    title: 'Übergabe',
    desc: 'Nach Abschluss aller Arbeiten übergeben wir Ihr neues Gäste-WC gemeinsam mit Ihnen.',
    icon: CheckCircle2,
  },
];

const beforeAfter = [
  {
    label: 'Vorher',
    image: '/img/gaeste-wc-vorher.webp',
    imageAlt: 'Symbolbild: Altes Gäste-WC mit veralteten Fliesen und Stand-WC',
  },
  {
    label: 'Nachher',
    image: '/img/gaeste-wc-nachher.webp',
    imageAlt: 'Symbolbild: Modernisiertes Gäste-WC mit Wand-WC, beleuchtetem Spiegel und großformatigen Fliesen',
  },
];

const projectExamples = [
  {
    title: 'Frankfurt am Main',
    subtitle: 'Modernes Gäste-WC · 2 m²',
    desc: 'Kompakte Modernisierung mit wandhängendem WC, Waschtisch und großformatigen Fliesen.',
    image: '/img/gaeste-wc-projekt-frankfurt.webp',
    imageAlt: 'Symbolbild: Modernes Gäste-WC in Frankfurt am Main',
  },
  {
    title: 'Dreieich',
    subtitle: 'Gäste-WC modernisiert',
    desc: 'Platzsparende Raumlösung mit moderner Sanitärkeramik und hochwertigen Oberflächen.',
    image: '/img/gaeste-wc-projekt-dreieich.webp',
    imageAlt: 'Symbolbild: Modernisiertes Gäste-WC in Dreieich',
  },
  {
    title: 'Offenbach am Main',
    subtitle: 'Kleines Gäste-WC',
    desc: 'Komplette Neugestaltung eines Gäste-WCs mit zeitlosem Design und optimaler Raumnutzung.',
    image: '/img/gaeste-wc-projekt-offenbach.webp',
    imageAlt: 'Symbolbild: Neu gestaltetes kleines Gäste-WC in Offenbach am Main',
  },
];

const priceCards = [
  {
    title: 'Basis',
    price: 'ab 4.500 €',
    desc: 'Funktionale Modernisierung mit neuer Sanitärkeramik und zeitgemäßer Ausstattung.',
  },
  {
    title: 'Komfort',
    price: 'ab 7.500 €',
    desc: 'Mit neuen Fliesen, Waschtisch, Beleuchtung und hochwertiger Ausstattung.',
  },
  {
    title: 'Premium',
    price: 'ab 11.500 €',
    desc: 'Individuelle Planung mit hochwertigen Materialien und exklusiver Ausstattung.',
  },
];

const faqsData = [
  {
    q: 'Wie lange dauert die Sanierung eines Gäste-WCs?',
    a: 'Je nach Umfang dauert die Modernisierung eines Gäste-WCs in der Regel wenige Tage bis etwa zwei Wochen.',
  },
  {
    q: 'Kann ein Gäste-WC komplett modernisiert werden?',
    a: 'Ja. Sanitärkeramik, Fliesen, Beleuchtung, Waschtisch und Oberflächen können vollständig erneuert werden.',
  },
  {
    q: 'Lohnt sich die Modernisierung eines kleinen Gäste-WCs?',
    a: 'Gerade kleine Gäste-WCs profitieren von einer modernen Planung und hochwertigen Ausstattung. Bereits auf wenigen Quadratmetern lässt sich der Komfort deutlich steigern.',
  },
  {
    q: 'Kann der Grundriss verändert werden?',
    a: 'Je nach baulichen Gegebenheiten können Sanitärgegenstände neu angeordnet und der vorhandene Platz besser genutzt werden.',
  },
  {
    q: 'Welche Kosten entstehen?',
    a: 'Die Kosten richten sich nach Ausstattung, Raumgröße und Leistungsumfang. Nach einer Besichtigung erhalten Sie ein individuelles Festpreisangebot.',
  },
  {
    q: 'In welchen Städten arbeitet Radex?',
    a: 'Von Rödermark aus modernisiert Radex Gäste-WCs im gesamten Rhein-Main-Gebiet.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter bei der Radex Objektmanagement GmbH.',
  'Auch ein Gäste-WC verdient eine durchdachte Planung. Auf wenigen Quadratmetern müssen Sanitärtechnik, Stauraum und Design perfekt zusammenspielen. Genau darin liegt unsere Erfahrung.',
  'Gemeinsam entwickeln wir eine Lösung, die optimal zu Ihrem Gäste-WC passt. Von der ersten Beratung über die Planung bis zur fertigen Umsetzung erhalten Sie alle Leistungen aus einer Hand.',
  'So entsteht ein modernes Gäste-WC, das funktional ist, hochwertig aussieht und einen bleibenden Eindruck bei Ihren Gästen hinterlässt.',
  'Senden Sie uns einfach Fotos Ihres Gäste-WCs per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Wir beraten Sie gerne.',
];

const videoTrustPoints = [
  'SHK-Meisterbetrieb',
  'Optimale Raumplanung',
  'Hochwertige Materialien',
  'Ein Ansprechpartner',
];

const modernisierenOptions = [
  'Komplettes Gäste-WC',
  'WC-Anlage',
  'Waschtisch',
  'Fliesen',
  'Ich bin noch unsicher',
];

const sizeOptions = ['Bis 2 m²', '2 bis 3 m²', 'Über 3 m²'];

const formatEuro = (value) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);

const CALC_START_PRICE = 4500;

const calcSizeOptions = [
  { label: 'Bis 2 m²', factor: 0 },
  { label: '2 bis 3 m²', factor: 0.1 },
  { label: 'Über 3 m²', factor: 0.2 },
];

const calcEquipmentOptions = [
  { label: 'Basis', add: 0 },
  { label: 'Komfort', add: 2000 },
  { label: 'Premium', add: 4000 },
];

const calcTileOptions = [
  { label: 'Ja', add: 1500 },
  { label: 'Nein', add: 0 },
];

const calcExtraOptions = [
  { label: 'Neuer Waschtisch', add: 800 },
  { label: 'Neue Beleuchtung', add: 500 },
  { label: 'Vorwandelement', add: 900 },
  { label: 'Keine Zusatzleistungen', add: 0, exclusive: true },
];

function GaesteWcKostenrechner() {
  const [size, setSize] = useState(0);
  const [equipment, setEquipment] = useState(0);
  const [tiles, setTiles] = useState(0);
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
    const tilesAdd = calcTileOptions[tiles].add;
    const extrasAdd = extras.reduce((sum, i) => sum + calcExtraOptions[i].add, 0);
    const base = CALC_START_PRICE * (1 + sizeFactor) + equipmentAdd + tilesAdd + extrasAdd;
    return { lower: Math.round(base), upper: Math.round(base * 1.2) };
  }, [size, equipment, tiles, extras]);

  return (
    <div className="br-gwc-calc">
      <div className="br-gwc-calc-question">
        <span className="br-gwc-calc-step">1</span>
        <h3>Wie groß ist Ihr Gäste-WC?</h3>
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
        <span className="br-gwc-calc-step">3</span>
        <h3>Sollen neue Fliesen verlegt werden?</h3>
        <div className="br-gwc-calc-options">
          {calcTileOptions.map((opt, i) => (
            <button
              key={opt.label}
              type="button"
              className={`br-gwc-calc-option${tiles === i ? ' is-active' : ''}`}
              onClick={() => setTiles(i)}
              aria-pressed={tiles === i}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-gwc-calc-question">
        <span className="br-gwc-calc-step">4</span>
        <h3>Welche Zusatzleistungen wünschen Sie?</h3>
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
          Ausstattung und baulichen Gegebenheiten niedriger oder höher ausfallen.
        </p>
      </div>
    </div>
  );
}

function GaesteWcContactSection() {
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

    const subject = `Gäste-WC Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Was modernisieren: ${modernisieren}`,
      `Größe des Gäste-WCs: ${groesse}`,
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
            <p>Senden Sie uns Fotos Ihres Gäste-WCs und erhalten Sie eine erste Einschätzung.</p>
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
            <h2 className="br-section-title">Gäste-WC anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns schnellstmöglich mit einer ersten Einschätzung.
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
                <span>Wie groß ist Ihr Gäste-WC?</span>
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
                placeholder="Beschreiben Sie kurz Ihr Gäste-WC und Ihre Wünsche."
              />
            </label>
            <label className="br-input-group">
              <span>Fotos hochladen</span>
              <input type="file" name="fotos" accept="image/*" multiple />
              <small>Laden Sie auf Wunsch Fotos Ihres Gäste-WCs hoch.</small>
            </label>
            <button type="submit" className="btn br-btn-orange br-ablauf-submit">
              Gäste-WC anfragen <Send size={18} />
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

export default function GaesteWcLanding() {
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
    path: '/gaeste-wc',
    image: 'https://www.radex-objektmanagement.de/img/gaeste-wc-sanieren-rhein-main-radex.webp',
    jsonLd: [
      buildServiceSchema({
        name: 'Gäste-WC sanieren',
        description: META_DESCRIPTION,
        path: '/gaeste-wc',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badsanierung-kosten-page gaeste-wc-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Gäste-WC sanieren</p>
            <h1 className="br-hero-title">
              Gäste-WC sanieren
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">Modern. Platzsparend. Hochwertig. Funktional. Premium.</p>
            <p className="br-hero-text">
              Ein modernes Gäste-WC überzeugt auf kleiner Fläche mit hochwertigem Design, funktionaler Planung und
              durchdachten Details. Radex modernisiert Gäste-WCs von der Planung bis zur fertigen Übergabe – sauber,
              zuverlässig und aus einer Hand.
            </p>
            <GaesteWcCTA isHero showThird primaryHref="#kontakt" />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modernes Gäste-WC mit Wand-WC, kompaktem Waschtisch und beleuchtetem Spiegel"
          title="Gäste-WC sanieren | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Warum lohnt sich die Modernisierung eines Gäste-WCs?">
        Auch ein kleines Gäste-WC prägt den ersten Eindruck einer Immobilie. Mit einer modernen Gestaltung,
        hochwertigen Materialien und einer optimalen Raumnutzung entsteht ein funktionaler und einladender Raum für
        Familie und Gäste.
      </SectionTransition>

      {/* 3 Vorteile */}
      <section id="vorteile" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Ihre Vorteile eines modernen Gäste-WCs</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Mit einer durchdachten Planung wird auch ein kleines Gäste-WC zu einem modernen und funktionalen Raum.
              Hochwertige Materialien, platzsparende Lösungen und zeitloses Design sorgen für einen bleibenden Eindruck
              bei Ihren Gästen.
            </p>
          </div>
          <ImageCardGrid cards={vorteileCards} />
        </div>
      </section>

      <SectionTransition title="Was gehört zur Sanierung eines Gäste-WCs?">
        Auch auf kleiner Fläche sind viele Gewerke perfekt aufeinander abzustimmen. Von der Sanitärinstallation bis zur
        letzten Fliese erhalten Sie alle Leistungen aus einer Hand.
      </SectionTransition>

      {/* 4 Leistungen */}
      <section id="leistungen" className="br-section br-bw-process-section">
        <div className="container">
          <PremiumIconCards cards={leistungenCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Vorher und Nachher">
        Schon wenige Quadratmeter bieten großes Potenzial. Mit einer modernen Gestaltung entsteht aus einem einfachen
        Gäste-WC ein hochwertiger Raum mit überzeugender Wirkung.
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
            <GaesteWcCTA centered primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Radex?">
        Ein hochwertiges Gäste-WC entsteht durch Erfahrung, saubere Planung und präzise Ausführung. Im nächsten
        Abschnitt erfahren Sie, warum sich Eigentümer im Rhein-Main-Gebiet für Radex entscheiden.
      </SectionTransition>

      {/* 6 Warum Radex */}
      <section id="warum-radex" className="br-section br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex für die Sanierung Ihres Gäste-WCs?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Auch ein Gäste-WC erfordert eine präzise Planung und eine saubere Ausführung. Gerade auf kleiner Fläche
              kommt es auf jedes Detail an. Als SHK-Meisterbetrieb modernisiert Radex Gäste-WCs mit hochwertigen
              Materialien, durchdachter Planung und einem festen Ansprechpartner.
            </p>
          </div>
          <div className="br-ablauf-why-grid br-gwc-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      {/* Radex Qualitätsversprechen */}
      <QualityPromiseBlock intro="Auch bei kleinen Räumen sichern klare Planung und präzise Ausführung ein dauerhaft hochwertiges Ergebnis." />

      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Bernd Knoop, SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH, erklärt im Video, worauf es bei
        der Modernisierung eines Gäste-WCs ankommt und wie auch kleine Räume funktional und hochwertig gestaltet werden
        können.
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
              title="Bernd Knoop – Gäste-WC sanieren"
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
            <GaesteWcCTA centered primaryHref="#kontakt" />
          </div>

          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition title="So sanieren wir Ihr Gäste-WC Schritt für Schritt">
        Von der ersten Idee bis zur fertigen Übergabe koordinieren wir alle Arbeiten und sorgen für einen reibungslosen
        Ablauf.
      </SectionTransition>

      {/* 8 Ablauf */}
      <section id="ablauf" className="br-section br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So entsteht Ihr neues Gäste-WC</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Auch die Modernisierung eines Gäste-WCs beginnt mit einer sorgfältigen Planung. Von der ersten Beratung
              bis zur fertigen Übergabe koordinieren wir alle Arbeiten und sorgen für einen reibungslosen Ablauf.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Einblicke in unsere Arbeit">
        Unsere Teams modernisieren Gäste-WCs im gesamten Rhein-Main-Gebiet. Hier sehen Sie eine Auswahl aktueller
        Projekte und Gestaltungsmöglichkeiten.
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

      <SectionTransition title="Was kostet die Sanierung eines Gäste-WCs?">
        Die Kosten richten sich nach Größe, Ausstattung und Umfang der Arbeiten. Mit den folgenden Preisbeispielen
        erhalten Sie eine erste Orientierung für Ihr Projekt.
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
        Mit wenigen Angaben erhalten Sie eine unverbindliche Kosteneinschätzung für die Modernisierung Ihres
        Gäste-WCs.
      </SectionTransition>

      {/* 11 Kostenrechner */}
      <section id="kostenrechner" className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '860px' }}>
          <GaesteWcKostenrechner />
        </div>
      </section>

      {/* CTA Box */}
      <section className="br-section br-gwc-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Sie möchten Ihr Gäste-WC modernisieren?</h2>
            <p>
              Senden Sie uns Fotos Ihres Gäste-WCs per WhatsApp oder vereinbaren Sie einen persönlichen
              Beratungstermin. Wir erstellen Ihnen eine erste unverbindliche Einschätzung.
            </p>
            <GaesteWcCTA centered showThird primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Häufige Fragen zur Gäste-WC-Sanierung">
        Hier beantworten wir die häufigsten Fragen rund um Planung, Ablauf, Kosten und Möglichkeiten der
        Gäste-WC-Modernisierung.
      </SectionTransition>

      {/* 12 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zur Gäste-WC-Sanierung"
        intro="Hier finden Sie Antworten auf häufige Fragen rund um die Modernisierung eines Gäste-WCs – von der Planung bis zu den Kosten."
      />

      <SectionTransition title="Lassen Sie uns Ihr Gäste-WC gemeinsam modernisieren">
        Ob kleine Auffrischung oder komplette Modernisierung – wir beraten Sie persönlich und entwickeln gemeinsam mit
        Ihnen eine passende Lösung für Ihr Gäste-WC.
      </SectionTransition>

      {/* 13 Kontakt */}
      <GaesteWcContactSection />

      <SectionTransition title="Weitere Informationen zur Sanierung eines Gäste-WCs">
        Im folgenden Bereich finden Sie ausführliche Informationen rund um Planung, Materialien, Kosten, Ablauf und
        Gestaltungsmöglichkeiten eines modernen Gäste-WCs.
      </SectionTransition>

      {/* 14 Weitere Informationen (SEO-Migration) */}
      <section id="seo-informationen" className="br-section br-kosten-seo-article">
        <div className="container br-kosten-seo-container">
          <div className="br-ablauf-seo-intro br-kosten-seo-intro">{gaesteWcSanierenSeoIntro}</div>

          {gaesteWcSanierenSeoSections.map((section) => (
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
