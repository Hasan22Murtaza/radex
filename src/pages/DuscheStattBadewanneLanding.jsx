import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  Bath,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Droplets,
  FileText,
  FolderOpen,
  Hammer,
  LayoutGrid,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Ruler,
  Send,
  Shield,
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
import {
  FaqAccordion,
  ImageCardGrid,
  PremiumIconCards,
  SectionTransition,
} from '../components/landing/SharedLandingParts';
import testVideo from '../assets/test.mp4';
import {
  duscheStattBadewanneSeoIntro,
  duscheStattBadewanneSeoSections,
} from '../data/duscheStattBadewanneSeoContent';

const HERO_IMAGE = '/img/dusche-statt-badewanne-hero.png';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Dusche statt Badewanne Rhein-Main | Badumbau Radex';
const META_DESCRIPTION =
  'Dusche statt Badewanne im Rhein-Main-Gebiet: Radex plant und koordiniert den Badumbau mit bodengleicher oder begehbarer Dusche.';

function DuscheCTA({
  isHero = false,
  centered = false,
  showThird = false,
  primaryHref = '#kontakt-form',
}) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        Dusche statt Badewanne anfragen
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
    title: 'Bodengleiche Duschen',
    desc: 'Mehr Komfort und ein sicherer Einstieg im Alltag.',
    icon: ShowerHead,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Fachgerechte Abdichtung',
    desc: 'Dauerhafter Feuchteschutz nach fachgerechter Ausführung.',
    icon: Shield,
  },
  {
    title: 'Festpreis nach Besichtigung',
    desc: 'Klare Kosten nach persönlicher Vor-Ort-Besichtigung.',
    icon: ClipboardList,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Erfahrung aus zahlreichen Badsanierungen im Rhein-Main-Gebiet.',
    icon: FolderOpen,
  },
  {
    title: 'Im gesamten Rhein-Main-Gebiet',
    desc: 'Von Rödermark aus täglich für unsere Kunden unterwegs.',
    icon: MapPin,
  },
];

const vorteilCards = [
  {
    title: 'Mehr Komfort im Alltag',
    desc: 'Eine moderne Dusche erleichtert den täglichen Einstieg und sorgt für mehr Komfort im Badezimmer.',
    image: '/img/dusche-statt-badewanne-vorteil-komfort.png',
    imageAlt: 'Symbolbild: Moderne Dusche für mehr Komfort im Alltag',
  },
  {
    title: 'Mehr Platz im Badezimmer',
    desc: 'Durch den Wegfall der Badewanne entsteht häufig mehr Bewegungsfläche und ein offeneres Raumgefühl.',
    image: '/img/dusche-statt-badewanne-vorteil-platz.png',
    imageAlt: 'Symbolbild: Mehr Platz im Badezimmer durch Walk-in-Dusche',
  },
  {
    title: 'Sicherer Einstieg',
    desc: 'Eine bodengleiche oder niedrig zugängliche Dusche reduziert Stolperstellen und erleichtert den täglichen Gebrauch.',
    image: '/img/dusche-statt-badewanne-vorteil-sicherheit.png',
    imageAlt: 'Symbolbild: Bodengleiche Dusche mit sicherem Einstieg',
  },
  {
    title: 'Wertsteigerung Ihrer Immobilie',
    desc: 'Ein modernes Badezimmer mit zeitgemäßer Dusche erhöht die Attraktivität und den Wert Ihrer Immobilie.',
    image: '/img/dusche-statt-badewanne-vorteil-wert.png',
    imageAlt: 'Symbolbild: Modernes Bad mit zeitgemäßer Dusche',
  },
];

const serviceCards = [
  {
    title: 'Badewanne ausbauen',
    desc: 'Die bestehende Badewanne wird fachgerecht zurückgebaut und entsorgt.',
    icon: Bath,
  },
  {
    title: 'Entwässerung anpassen',
    desc: 'Abläufe und Leitungen werden an die neue Dusche angepasst.',
    icon: Droplets,
  },
  {
    title: 'Abdichtung',
    desc: 'Feuchteschutz wird fachgerecht vorbereitet und ausgeführt.',
    icon: Shield,
  },
  {
    title: 'Fliesenarbeiten',
    desc: 'Neue Wand- und Bodenfliesen werden sauber verlegt.',
    icon: LayoutGrid,
  },
  {
    title: 'Dusche montieren',
    desc: 'Dusche, Armaturen und Duschabtrennung werden fachgerecht montiert.',
    icon: ShowerHead,
  },
  {
    title: 'Fertigstellung',
    desc: 'Das neue Badezimmer wird geprüft und schlüsselfertig übergeben.',
    icon: CheckCircle2,
  },
];

const whyRadexCards = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten werden fachgerecht unter meisterlicher Leitung ausgeführt.',
    icon: Award,
  },
  {
    title: 'Fachgerechte Abdichtung',
    desc: 'Abdichtung und Feuchteschutz werden sorgfältig geplant und fachgerecht umgesetzt.',
    icon: Shield,
  },
  {
    title: 'Entwässerung richtig geplant',
    desc: 'Abläufe, Gefälle und Anschlüsse werden auf die neue Dusche abgestimmt.',
    icon: Droplets,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Von der ersten Beratung bis zur fertigen Übergabe begleitet Sie ein fester Ansprechpartner.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Beratung',
    desc: 'Gemeinsam besprechen wir Ihr Badezimmer, Ihre Wünsche und die Möglichkeiten des Umbaus.',
    icon: Phone,
  },
  {
    title: 'Besichtigung',
    desc: 'Vor Ort prüfen wir Badewanne, Leitungen, Entwässerung und die baulichen Voraussetzungen.',
    icon: Ruler,
  },
  {
    title: 'Planung',
    desc: 'Wir planen die neue Dusche, den Ablauf, die Abdichtung und alle notwendigen Arbeiten.',
    icon: FileText,
  },
  {
    title: 'Festpreisangebot',
    desc: 'Sie erhalten ein transparentes Angebot mit allen abgestimmten Leistungen.',
    icon: ClipboardList,
  },
  {
    title: 'Umbau',
    desc: 'Badewanne ausbauen, Dusche einbauen, Abdichtung, Fliesen und Montage werden fachgerecht umgesetzt.',
    icon: Hammer,
  },
  {
    title: 'Übergabe',
    desc: 'Nach Abschluss aller Arbeiten wird Ihre neue Dusche gemeinsam geprüft und übergeben.',
    icon: CheckCircle2,
  },
];

const projectExamples = [
  {
    title: 'Darmstadt',
    subtitle: 'Badewanne gegen Walk-in-Dusche',
    desc: 'Bestehende Badewanne entfernt und durch eine bodengleiche Walk-in-Dusche mit neuer Abdichtung und modernen Fliesen ersetzt.',
    image: '/img/dusche-statt-badewanne-projekt-darmstadt.png',
    imageAlt: 'Symbolbild: Walk-in-Dusche statt Badewanne in Darmstadt',
  },
  {
    title: 'Rodgau',
    subtitle: 'Barrierearme Dusche',
    desc: 'Umbau einer Badewanne zu einer komfortablen Dusche mit niedrigem Einstieg und neuer Duschabtrennung.',
    image: '/img/dusche-statt-badewanne-projekt-rodgau.png',
    imageAlt: 'Symbolbild: Barrierearme Dusche in Rodgau',
  },
  {
    title: 'Frankfurt am Main',
    subtitle: 'Dusche statt Badewanne',
    desc: 'Kompletter Umbau eines Badezimmers mit neuer Dusche, großformatigen Fliesen und moderner Ausstattung.',
    image: '/img/dusche-statt-badewanne-projekt-frankfurt.png',
    imageAlt: 'Symbolbild: Dusche statt Badewanne in Frankfurt am Main',
  },
];

const priceCards = [
  {
    title: 'Standard-Umbau',
    price: 'ab 7.500 €',
    desc: 'Für den Austausch einer Badewanne gegen eine moderne Dusche mit geringem Anpassungsaufwand.',
  },
  {
    title: 'Komfort-Umbau',
    price: 'ab 12.500 €',
    desc: 'Mit neuer Walk-in-Dusche, neuen Fliesen sowie Anpassungen an Sanitärinstallation und Ausstattung.',
  },
  {
    title: 'Premium-Umbau',
    price: 'ab 18.500 €',
    desc: 'Mit hochwertiger Ausstattung, großformatigen Fliesen und umfangreichen Umbauarbeiten.',
  },
];

const faqsData = [
  {
    q: 'Kann jede Badewanne durch eine Dusche ersetzt werden?',
    a: 'In den meisten Fällen ist ein Umbau problemlos möglich. Vor Beginn prüfen wir die vorhandenen Leitungen, die Entwässerung und die baulichen Gegebenheiten Ihres Badezimmers.',
  },
  {
    q: 'Ist eine bodengleiche Dusche möglich?',
    a: 'Ob eine bodengleiche Dusche realisiert werden kann, hängt von den baulichen Voraussetzungen und der vorhandenen Entwässerung ab. Nach einer Besichtigung beraten wir Sie über die passende Lösung.',
  },
  {
    q: 'Wie lange dauert der Umbau?',
    a: 'Je nach Umfang dauert der Austausch einer Badewanne gegen eine Dusche in der Regel wenige Arbeitstage bis etwa zwei Wochen.',
  },
  {
    q: 'Müssen die Fliesen erneuert werden?',
    a: 'Das hängt vom Umfang des Umbaus ab. Häufig werden im Zuge des Austauschs auch Wand- und Bodenfliesen erneuert, um ein einheitliches Ergebnis zu erzielen.',
  },
  {
    q: 'Bleiben die vorhandenen Leitungen bestehen?',
    a: 'Bestehende Leitungen können häufig weiter genutzt werden. Falls Anpassungen erforderlich sind, werden diese fachgerecht ausgeführt.',
  },
  {
    q: 'Was kostet der Umbau von Badewanne zur Dusche?',
    a: 'Die Kosten richten sich nach Größe, Ausstattung und Umfang der Arbeiten. Nach einer Besichtigung erhalten Sie ein individuelles Festpreisangebot.',
  },
  {
    q: 'Kann gleichzeitig ein barrierearmes Bad entstehen?',
    a: 'Ja. Viele Kunden kombinieren den Umbau mit einer bodengleichen Dusche und einer komfortableren Badgestaltung.',
  },
  {
    q: 'In welchen Städten arbeitet Radex?',
    a: 'Von Rödermark aus betreut Radex Kunden im gesamten Rhein-Main-Gebiet.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter bei der Radex Objektmanagement GmbH.',
  'Der Austausch einer Badewanne gegen eine moderne Dusche gehört zu den häufigsten Umbauten im Badezimmer. Entscheidend ist dabei nicht nur die neue Dusche, sondern auch die fachgerechte Planung der Entwässerung, der Abdichtung und der Anschlüsse.',
  'Vor Beginn prüfen wir die vorhandene Bausubstanz und entwickeln gemeinsam mit Ihnen die passende Lösung für Ihr Badezimmer. Anschließend koordinieren wir alle notwendigen Arbeiten – vom Rückbau der Badewanne bis zur fertigen Montage der neuen Dusche.',
  'So entsteht eine moderne Duschlösung, die nicht nur gut aussieht, sondern auch dauerhaft sicher und funktional ist.',
  'Wenn Sie wissen möchten, welche Möglichkeiten Ihr Badezimmer bietet, senden Sie uns einfach Fotos per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin.',
];

const videoTrustPoints = [
  'SHK-Meisterbetrieb',
  'Fachgerechte Abdichtung',
  'Moderne Walk-in-Duschen',
  'Ein Ansprechpartner',
];

const roomSizeOptions = [
  { id: 'bis4', label: 'Bis 4 m²', factor: 1 },
  { id: '5bis7', label: '5 bis 7 m²', factor: 1.1 },
  { id: '8bis10', label: '8 bis 10 m²', factor: 1.2 },
  { id: 'ueber10', label: 'Über 10 m²', factor: 1.3 },
];

const showerOptions = [
  { id: 'duschwanne', label: 'Duschwanne', price: 0 },
  { id: 'bodengleich', label: 'Bodengleiche Dusche', price: 2000 },
  { id: 'walkin', label: 'Walk-in-Dusche', price: 3500 },
];

const tilesOptions = [
  { id: 'ja', label: 'Ja', price: 2500 },
  { id: 'nein', label: 'Nein', price: 0 },
];

const extrasOptions = [
  { id: 'sanitaer', label: 'Neue Sanitärleitungen', price: 2000 },
  { id: 'elektro', label: 'Neue Elektroinstallation', price: 1500 },
  { id: 'abtrennung', label: 'Neue Duschabtrennung', price: 1000 },
  { id: 'keine', label: 'Keine Zusatzleistungen', price: 0 },
];

const duscheFormOptions = [
  'Bodengleiche Dusche',
  'Walk-in-Dusche',
  'Dusche mit Duschwanne',
  'Ich bin noch unsicher',
];

const sizeFormOptions = ['Bis 4 m²', '5 bis 7 m²', '8 bis 10 m²', 'Über 10 m²', 'Noch nicht bekannt'];

function formatEuro(value) {
  return `${Math.round(value).toLocaleString('de-DE')} €`;
}

function DuscheConversionCalculator() {
  const [roomSize, setRoomSize] = useState('bis4');
  const [shower, setShower] = useState('duschwanne');
  const [tiles, setTiles] = useState('nein');
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
    const base = 7500;
    const sizeFactor = roomSizeOptions.find((o) => o.id === roomSize)?.factor || 1;
    const showerPrice = showerOptions.find((o) => o.id === shower)?.price || 0;
    const tilesPrice = tilesOptions.find((o) => o.id === tiles)?.price || 0;
    const extrasPrice = extras
      .filter((id) => id !== 'keine')
      .reduce((sum, id) => sum + (extrasOptions.find((o) => o.id === id)?.price || 0), 0);
    const total = base * sizeFactor + showerPrice + tilesPrice + extrasPrice;
    return { min: total, max: Math.round(total * 1.2) };
  }, [roomSize, shower, tiles, extras]);

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
        <h3>Welche Dusche wünschen Sie?</h3>
        <div className="br-bw-calc-options">
          {showerOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`br-bw-calc-btn${shower === opt.id ? ' is-active' : ''}`}
              onClick={() => setShower(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-bw-calc-question">
        <h3>Sollen neue Fliesen verlegt werden?</h3>
        <div className="br-bw-calc-options">
          {tilesOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`br-bw-calc-btn${tiles === opt.id ? ' is-active' : ''}`}
              onClick={() => setTiles(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-bw-calc-question">
        <h3>Sind zusätzliche Arbeiten erforderlich?</h3>
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
          baulichen Gegebenheiten und gewünschter Ausstattung niedriger oder höher ausfallen.
        </p>
        <div className="br-ablauf-cta-wrap" style={{ marginTop: '24px' }}>
          <DuscheCTA centered />
        </div>
      </div>
    </div>
  );
}

function DuscheContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const plzOrt = form.plzOrt.value.trim();
    const dusche = form.dusche.value;
    const groesse = form.groesse.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Dusche statt Badewanne Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Gewünschte Dusche: ${dusche}`,
      `Badgröße: ${groesse}`,
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
            <p>Sie möchten direkt mit uns sprechen?</p>
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
            <p>Senden Sie uns Fotos Ihrer Badewanne und erhalten Sie eine erste Einschätzung.</p>
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
            <h2 className="br-section-title">Dusche statt Badewanne anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie kurz Ihr Badezimmer. Wir melden uns schnellstmöglich bei Ihnen.
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
                <span>Welche Dusche wünschen Sie?</span>
                <select name="dusche" required defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {duscheFormOptions.map((opt) => (
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
                  {sizeFormOptions.map((opt) => (
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
                placeholder="Beschreiben Sie kurz Ihr Badezimmer und den gewünschten Umbau."
              />
            </label>
            <label className="br-input-group">
              <span>Fotos hochladen</span>
              <input type="file" name="fotos" accept="image/*" multiple />
              <small>Laden Sie auf Wunsch Fotos Ihres Badezimmers oder Ihrer Badewanne hoch.</small>
            </label>
            <button type="submit" className="btn br-btn-orange br-ablauf-submit">
              Dusche statt Badewanne anfragen <Send size={18} />
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

export default function DuscheStattBadewanneLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (duscheStattBadewanneSeoSections.some((s) => s.id === hash)) {
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
    path: '/dusche-statt-badewanne',
    image: 'https://radex-objektmanagement.de/img/dusche-statt-badewanne-hero.png',
    jsonLd: [
      buildServiceSchema({
        name: 'Dusche statt Badewanne',
        description: META_DESCRIPTION,
        path: '/dusche-statt-badewanne',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page dusche-statt-badewanne-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Dusche statt Badewanne</p>
            <h1 className="br-hero-title">
              Dusche statt Badewanne im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-text">
              Mehr Komfort, mehr Bewegungsfreiheit und ein sicherer Einstieg. Radex ersetzt Ihre Badewanne durch eine
              moderne Dusche und übernimmt Planung, Sanitärarbeiten, Abdichtung und Fliesenarbeiten aus einer Hand. Als
              SHK-Meisterbetrieb begleiten wir Ihr Projekt von der ersten Beratung bis zur fertigen Übergabe.
            </p>
            <DuscheCTA isHero showThird />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modernes Bad mit Walk-in-Dusche statt Badewanne"
          title="Dusche statt Badewanne | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Warum entscheiden sich viele Eigentümer für eine Dusche statt einer Badewanne?">
        Der Austausch einer Badewanne gegen eine moderne Dusche schafft mehr Bewegungsfreiheit, erleichtert den Einstieg
        und sorgt für ein zeitgemäßes Badezimmer mit höherem Komfort.
      </SectionTransition>

      {/* 3 Vorteile */}
      <section id="vorteile" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Ihre Vorteile beim Umbau von Badewanne zur Dusche</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Der Austausch einer Badewanne gegen eine moderne Dusche bietet viele Vorteile. Mehr Komfort, eine bessere
              Raumnutzung und ein sicherer Einstieg machen diese Lösung für viele Eigentümer besonders attraktiv.
            </p>
          </div>
          <ImageCardGrid cards={vorteilCards} />
        </div>
      </section>

      <SectionTransition title="Was gehört zum Umbau von Badewanne zur Dusche?">
        Ein fachgerechter Umbau umfasst deutlich mehr als den Austausch der Sanitärobjekte. Entscheidend sind Planung,
        Abdichtung und eine saubere technische Umsetzung.
      </SectionTransition>

      {/* 4 Leistungen */}
      <section id="leistungen" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Leistungen beim Umbau von Badewanne zur Dusche</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Von Rückbau und Entwässerung bis Abdichtung, Fliesen und Montage – alles abgestimmt auf Ihren Umbau.
            </p>
          </div>
          <PremiumIconCards cards={serviceCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Vorher und Nachher">
        Der Unterschied ist oft sofort sichtbar. Aus einer wenig genutzten Badewanne entsteht eine moderne Dusche mit mehr
        Komfort und besserer Raumnutzung.
      </SectionTransition>

      {/* 5 Vorher / Nachher */}
      <section id="vorher-nachher" className="br-section br-bg-light br-bf-compare-section">
        <div className="container">
          <div className="br-bf-compare-grid">
            <article className="br-bf-compare-card">
              <div
                className="br-bf-compare-img"
                style={{ backgroundImage: 'url(/img/dusche-statt-badewanne-vorher.png)' }}
                role="img"
                aria-label="Symbolbild: Badezimmer mit Badewanne vor dem Umbau"
              >
                <span className="br-bf-compare-label">Vorher</span>
                <span className="br-ablauf-symbolbild">Symbolbild</span>
              </div>
            </article>
            <article className="br-bf-compare-card">
              <div
                className="br-bf-compare-img"
                style={{ backgroundImage: 'url(/img/dusche-statt-badewanne-nachher.png)' }}
                role="img"
                aria-label="Symbolbild: Badezimmer mit moderner Dusche nach dem Umbau"
              >
                <span className="br-bf-compare-label">Nachher</span>
                <span className="br-ablauf-symbolbild">Symbolbild</span>
              </div>
            </article>
          </div>
          <div className="br-ablauf-cta-wrap" style={{ marginTop: '36px' }}>
            <DuscheCTA centered />
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Radex?">
        Ein erfolgreicher Umbau beginnt mit einer sauberen Planung und einer fachgerechten Ausführung. Genau darauf ist
        Radex spezialisiert.
      </SectionTransition>

      {/* 6 Warum Radex */}
      <section id="warum-radex" className="br-section br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex für den Umbau von Badewanne zur Dusche?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Der Austausch einer Badewanne gegen eine moderne Dusche erfordert mehr als den Einbau neuer Sanitärobjekte.
              Entscheidend sind eine fachgerechte Abdichtung, die richtige Entwässerung und eine saubere Koordination
              aller Arbeiten. Genau darauf ist Radex spezialisiert.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      {/* 7 Video */}
      <section id="video" className="br-section br-bg-light br-ablauf-video-section br-bf-video-section">
        <div className="container">
          <div className="text-center mb-12">
            <p className="br-hero-kicker">Persönlich erklärt</p>
            <h2 className="br-section-title">Bernd Knoop erklärt den Umbau von Badewanne zur Dusche</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Bernd Knoop, SHK-Meister und Betriebsleiter, erklärt im Video, worauf es beim Austausch einer Badewanne
              gegen eine moderne Dusche ankommt und warum eine fachgerechte Abdichtung entscheidend für ein dauerhaft
              sicheres Badezimmer ist.
            </p>
          </div>
          <div className="br-bf-video-split">
            <div className="br-ablauf-video-frame">
              <video
                src={testVideo}
                controls
                playsInline
                preload="none"
                poster={VIDEO_POSTER}
                title="Bernd Knoop – Dusche statt Badewanne"
              />
            </div>
            <div className="br-bf-video-content">
              <ul className="br-ablauf-video-trust">
                {videoTrustPoints.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={18} color="#f97316" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="br-ablauf-cta-wrap">
                <DuscheCTA />
              </div>
            </div>
          </div>
          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition title="So läuft der Umbau von Badewanne zur Dusche ab">
        Von der ersten Beratung bis zur fertigen Dusche begleiten wir Ihr Projekt Schritt für Schritt.
      </SectionTransition>

      {/* 8 Ablauf */}
      <section id="ablauf" className="br-section br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So läuft Ihr Umbau von Badewanne zur Dusche ab</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Von der ersten Beratung bis zur fertigen Dusche begleiten wir Ihr Projekt Schritt für Schritt. Alle Arbeiten
              werden sorgfältig geplant und fachgerecht ausgeführt.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Einblicke in unsere Arbeit">
        Unsere Teams sind täglich im gesamten Rhein-Main-Gebiet im Einsatz. Hier sehen Sie eine Auswahl aktueller Projekte
        rund um den Umbau von Badewanne zur Dusche.
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
                  <a href={RADEX_LIVE_URL} className="br-btn-orange" style={{ display: 'inline-block', marginTop: '12px' }}>
                    Projekt ansehen →
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={RADEX_LIVE_URL} className="btn br-btn-orange">
              Alle Badprojekte ansehen
            </a>
          </div>
        </div>
      </section>

      <SectionTransition title="Was kostet der Umbau von Badewanne zur Dusche?">
        Die Kosten hängen unter anderem von der Größe des Badezimmers, der gewünschten Dusche und dem Umfang der Arbeiten
        ab. Die folgenden Werte dienen als erste Orientierung.
      </SectionTransition>

      {/* 10 Preise */}
      <section id="preise" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet der Umbau von Badewanne zur Dusche?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten hängen unter anderem von der Größe Ihres Badezimmers, der gewünschten Dusche sowie dem Umfang der
              Umbauarbeiten ab. Die folgenden Werte dienen als erste Orientierung.
            </p>
          </div>
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

      <SectionTransition title="Berechnen Sie Ihre erste Kosteneinschätzung">
        Beantworten Sie vier kurze Fragen und erhalten Sie eine erste unverbindliche Kosteneinschätzung für den Umbau
        Ihrer Badewanne zur Dusche.
      </SectionTransition>

      {/* 11 Kostenrechner */}
      <section id="kostenrechner" className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '980px' }}>
          <DuscheConversionCalculator />
          <div className="br-bf-cta-box">
            <h3>Sie möchten wissen, ob der Umbau bei Ihnen möglich ist?</h3>
            <p>
              Senden Sie uns Fotos Ihres Badezimmers per WhatsApp. Wir prüfen Ihre Situation und geben Ihnen eine erste
              fachliche Einschätzung zum möglichen Umbau.
            </p>
            <div className="br-hero-actions br-hero-actions--centered">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp br-btn-whatsapp--primary">
                <MessageSquare size={20} />
                Fotos senden. Erste Einschätzung erhalten.
              </a>
              <a href={PHONE_TEL} className="btn br-btn-phone">
                <Phone size={18} /> Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionTransition title="Häufige Fragen zum Umbau von Badewanne zur Dusche">
        Antworten auf häufig gestellte Fragen rund um Planung, Ablauf, Technik und Kosten.
      </SectionTransition>

      {/* 12 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zum Umbau von Badewanne zur Dusche"
        intro="Hier finden Sie Antworten auf häufig gestellte Fragen rund um den Austausch einer Badewanne gegen eine moderne Dusche."
      />

      <SectionTransition title="Lassen Sie uns über Ihr Badezimmer sprechen">
        Sie möchten Ihre Badewanne gegen eine moderne Dusche austauschen? Rufen Sie uns an, senden Sie Fotos per WhatsApp
        oder nutzen Sie unser Anfrageformular.
      </SectionTransition>

      {/* 13 Kontakt */}
      <DuscheContactSection />

      {/* 14 Weitere Informationen */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-6">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '20px' }}>
              Ausführliche Informationen rund um Technik, Planung, Kosten und Ablauf finden Sie im folgenden Bereich.
            </p>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
            >
              <h2 className="br-section-title">Weitere Informationen zum Umbau von Badewanne zur Dusche</h2>
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
            aria-labelledby="br-dsb-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="br-dsb-seo-panel-title">Weitere Informationen zum Umbau von Badewanne zur Dusche</h2>
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
                  Hier finden Sie ausführliche Informationen rund um den Umbau von Badewanne zur Dusche, die technische
                  Umsetzung, die Planung, die Kosten und den Ablauf.
                </p>
                {duscheStattBadewanneSeoIntro}
              </div>

              {duscheStattBadewanneSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt-form" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Dusche statt Badewanne anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
