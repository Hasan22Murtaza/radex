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
  Gem,
  Mail,
  MapPin,
  MessageSquare,
  Palette,
  Phone,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Thermometer,
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

function BadewanneCTA({ isHero = false, centered = false, showThird = false, primaryHref = '#kontakt' }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        Badewanne austauschen
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
    title: 'Neue Badewanne',
    desc: 'Moderne Modelle für mehr Komfort und zeitloses Design.',
    icon: Bath,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Saubere Ausführung',
    desc: 'Präzise Umsetzung mit hochwertigen Materialien.',
    icon: ShieldCheck,
  },
  {
    title: 'Festpreis nach Besichtigung',
    desc: 'Klare Planung und transparente Kosten.',
    icon: FileText,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Erfahrung aus zahlreichen Badmodernisierungen im Rhein-Main-Gebiet.',
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
    title: 'Mehr Komfort',
    desc: 'Neue Badewannen bieten ergonomische Formen, angenehme Einstiegshöhen und ein deutlich komfortableres Badeerlebnis.',
    image: '/img/badewanne-austauschen-vorteil-komfort.png',
    imageAlt: 'Moderne Einbauwanne in einem deutschen Badezimmer',
  },
  {
    title: 'Zeitgemäßes Design',
    desc: 'Klare Linien und hochwertige Materialien sorgen für eine moderne Badgestaltung und werten den gesamten Raum auf.',
    image: '/img/badewanne-austauschen-vorteil-design.png',
    imageAlt: 'Elegantes Badezimmer mit neuer Badewanne und beleuchtetem Spiegel',
  },
  {
    title: 'Technisch auf dem neuesten Stand',
    desc: 'Beim Austausch können Armaturen, Anschlüsse und Abdichtungen auf den aktuellen Stand gebracht werden.',
    image: '/img/badewanne-austauschen-vorteil-technik.png',
    imageAlt: 'Fachkraft beim fachgerechten Einbau einer Badewanne',
  },
  {
    title: 'Werterhalt Ihrer Immobilie',
    desc: 'Eine neue Badewanne trägt zur Aufwertung des Badezimmers und zum langfristigen Werterhalt der Immobilie bei.',
    image: '/img/badewanne-austauschen-vorteil-wert.png',
    imageAlt: 'Fertig modernisiertes Badezimmer mit neuer Badewanne',
  },
];

const optionCards = [
  {
    title: 'Badewanne ersetzen',
    desc: 'Austausch gegen ein modernes Modell in gleicher Größe.',
    icon: Bath,
  },
  {
    title: 'Neue Oberfläche',
    desc: 'Zeitgemäße Materialien und pflegeleichte Oberflächen.',
    icon: Sparkles,
  },
  {
    title: 'Neue Armaturen',
    desc: 'Moderne Mischbatterien und hochwertige Bedienung.',
    icon: Droplets,
  },
  {
    title: 'Bessere Abdichtung',
    desc: 'Erneuerung der Abdichtung nach aktuellen Standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Mehr Komfort',
    desc: 'Ergonomische Formen und angenehme Nutzung im Alltag.',
    icon: Thermometer,
  },
  {
    title: 'Individuelle Gestaltung',
    desc: 'Passend zu Ihrem Badezimmer und Ihrem Einrichtungsstil.',
    icon: Palette,
  },
];

const whyRadexCards = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Der Austausch Ihrer Badewanne erfolgt fachgerecht unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Sichere Abdichtung',
    desc: 'Alle Abdichtungsarbeiten werden nach aktuellen technischen Standards ausgeführt.',
    icon: ShieldCheck,
  },
  {
    title: 'Hochwertige Materialien',
    desc: 'Langlebige Badewannen, Armaturen und Materialien sorgen für dauerhafte Qualität.',
    icon: Gem,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Von der Planung bis zur fertigen Übergabe koordinieren wir sämtliche Arbeiten.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Beratung',
    desc: 'Gemeinsam besprechen wir Ihre Wünsche und die passende Badewannenlösung.',
    icon: Phone,
  },
  {
    title: 'Besichtigung',
    desc: 'Wir prüfen Badewanne, Anschlüsse und die baulichen Gegebenheiten vor Ort.',
    icon: SearchCheck,
  },
  {
    title: 'Planung',
    desc: 'Gemeinsam wählen wir Badewanne, Armaturen und Materialien aus.',
    icon: ClipboardList,
  },
  {
    title: 'Festpreisangebot',
    desc: 'Sie erhalten ein transparentes Angebot mit allen vereinbarten Leistungen.',
    icon: FileText,
  },
  {
    title: 'Austausch',
    desc: 'Die alte Badewanne wird fachgerecht entfernt und das neue Modell präzise eingebaut.',
    icon: Wrench,
  },
  {
    title: 'Übergabe',
    desc: 'Nach Abschluss kontrollieren wir gemeinsam alle Arbeiten und übergeben Ihr neues Badezimmer.',
    icon: CheckCircle2,
  },
];

const projectExamples = [
  {
    title: 'Frankfurt am Main',
    subtitle: 'Badewanne erneuert',
    desc: 'Austausch einer in die Jahre gekommenen Badewanne gegen ein modernes Modell mit neuer Armatur und zeitgemäßer Verkleidung.',
    image: '/img/badewanne-austauschen-projekt-frankfurt.png',
    imageAlt: 'Symbolbild: moderne Einbauwanne in Frankfurt',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
  {
    title: 'Darmstadt',
    subtitle: 'Badmodernisierung mit neuer Badewanne',
    desc: 'Neue Badewanne, moderne Armaturen und hochwertige Wandverkleidung für mehr Komfort und eine zeitlose Optik.',
    image: '/img/badewanne-austauschen-projekt-darmstadt.png',
    imageAlt: 'Symbolbild: elegantes Bad mit neuer Badewanne in Darmstadt',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
  {
    title: 'Offenbach am Main',
    subtitle: 'Komfortbad modernisiert',
    desc: 'Bestehende Badewanne durch ein komfortables Modell ersetzt und das Badezimmer optisch aufgewertet.',
    image: '/img/badewanne-austauschen-projekt-offenbach.png',
    imageAlt: 'Symbolbild: renoviertes Bad mit Premium-Badewanne in Offenbach',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
];

const priceCards = [
  {
    title: 'Basis',
    price: 'ab 3.500 €',
    desc: 'Austausch einer vorhandenen Badewanne gegen ein neues Standardmodell inklusive Sanitäranschlüsse.',
  },
  {
    title: 'Komfort',
    price: 'ab 6.500 €',
    desc: 'Neue Badewanne, moderne Armaturen sowie kleinere Fliesen- und Anpassungsarbeiten.',
  },
  {
    title: 'Premium',
    price: 'ab 10.500 €',
    desc: 'Hochwertige Design-Badewanne inklusive umfangreicher Modernisierung des direkten Badbereichs.',
  },
];

const faqsData = [
  {
    q: 'Wann sollte eine Badewanne ausgetauscht werden?',
    a: 'Wenn Beschädigungen, Abnutzung oder technische Mängel auftreten oder Sie mehr Komfort und eine moderne Optik wünschen, ist der Austausch einer Badewanne sinnvoll.',
  },
  {
    q: 'Kann die neue Badewanne die gleiche Größe haben?',
    a: 'Ja. In vielen Fällen kann die bestehende Badewanne problemlos gegen ein neues Modell mit identischen Abmessungen ausgetauscht werden.',
  },
  {
    q: 'Müssen beim Austausch auch Fliesen erneuert werden?',
    a: 'Das hängt von der vorhandenen Situation ab. Häufig sind kleinere Fliesenarbeiten erforderlich, um ein sauberes und dauerhaftes Ergebnis zu erzielen.',
  },
  {
    q: 'Wie lange dauert der Austausch einer Badewanne?',
    a: 'Je nach Umfang der Arbeiten dauert der Austausch in der Regel zwischen ein und drei Arbeitstagen. Sind zusätzliche Fliesen- oder Sanitärarbeiten erforderlich, kann sich die Ausführungszeit entsprechend verlängern.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Ja. Nach einer Besichtigung erhalten Sie ein transparentes Festpreisangebot mit allen vereinbarten Leistungen.',
  },
  {
    q: 'In welchen Städten bietet Radex den Austausch von Badewannen an?',
    a: 'Von Rödermark aus ist Radex im gesamten Rhein-Main-Gebiet tätig und tauscht Badewannen für private Eigentümer sowie Bestandsimmobilien fachgerecht aus.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH.',
  'Der Austausch einer Badewanne bietet die Möglichkeit, Ihr Badezimmer technisch und optisch deutlich aufzuwerten. Moderne Badewannen überzeugen durch mehr Komfort, hochwertige Materialien und eine zeitgemäße Gestaltung.',
  'Wir übernehmen den kompletten Austausch – von der Demontage der alten Badewanne über die fachgerechte Installation bis hin zu den notwendigen Fliesen- und Abdichtungsarbeiten.',
  'Gemeinsam finden wir die passende Lösung für Ihr Badezimmer und sorgen dafür, dass alle Arbeiten sauber, präzise und termingerecht ausgeführt werden.',
  'Senden Sie uns einfach Fotos Ihrer bestehenden Badewanne per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Wir beraten Sie gerne.',
];

const videoTrustPoints = [
  'SHK-Meisterbetrieb',
  'Fachgerechte Abdichtung',
  'Hochwertige Materialien',
  'Ein Ansprechpartner',
];

const bathtubTypeOptions = [
  { id: 'standard', label: 'Standardbadewanne', price: 0 },
  { id: 'eck', label: 'Eckbadewanne', price: 1000 },
  { id: 'frei', label: 'Freistehende Badewanne', price: 3000 },
];

const newBathtubOptions = [
  { id: 'standard', label: 'Standard', price: 0 },
  { id: 'komfort', label: 'Komfort', price: 1500 },
  { id: 'design', label: 'Design', price: 3500 },
];

const tilesOptions = [
  { id: 'nein', label: 'Nein', price: 0 },
  { id: 'teilweise', label: 'Teilweise', price: 1000 },
  { id: 'ja', label: 'Ja', price: 2500 },
];

const extrasOptions = [
  { id: 'armaturen', label: 'Neue Armaturen', price: 700 },
  { id: 'ablauf', label: 'Neue Ablaufgarnitur', price: 500 },
  { id: 'verkleidung', label: 'Neue Verkleidung', price: 900 },
  { id: 'fliesen', label: 'Neue Fliesen', price: 2000 },
  { id: 'keine', label: 'Keine Zusatzleistungen', price: 0 },
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

function formatEuro(value) {
  return `${Math.round(value).toLocaleString('de-DE')} €`;
}

function BadewanneCalculator() {
  const [bathtubType, setBathtubType] = useState('standard');
  const [newBathtub, setNewBathtub] = useState('standard');
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
    const base = 3500;
    const typePrice = bathtubTypeOptions.find((o) => o.id === bathtubType)?.price || 0;
    const newPrice = newBathtubOptions.find((o) => o.id === newBathtub)?.price || 0;
    const tilesPrice = tilesOptions.find((o) => o.id === tiles)?.price || 0;
    const extrasPrice = extras
      .filter((id) => id !== 'keine')
      .reduce((sum, id) => sum + (extrasOptions.find((o) => o.id === id)?.price || 0), 0);
    const total = base + typePrice + newPrice + tilesPrice + extrasPrice;
    return { min: total, max: Math.round(total * 1.2) };
  }, [bathtubType, newBathtub, tiles, extras]);

  return (
    <div className="br-bw-calculator">
      <div className="br-bw-calc-question">
        <h3>Welche Badewanne soll ersetzt werden?</h3>
        <div className="br-bw-calc-options">
          {bathtubTypeOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`br-bw-calc-btn${bathtubType === opt.id ? ' is-active' : ''}`}
              onClick={() => setBathtubType(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-bw-calc-question">
        <h3>Welche neue Badewanne wünschen Sie?</h3>
        <div className="br-bw-calc-options">
          {newBathtubOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`br-bw-calc-btn${newBathtub === opt.id ? ' is-active' : ''}`}
              onClick={() => setNewBathtub(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-bw-calc-question">
        <h3>Sind Fliesenarbeiten erforderlich?</h3>
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
        <h3>Welche Zusatzleistungen wünschen Sie?</h3>
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
          baulichen Gegebenheiten, Ausstattung und Materialauswahl niedriger oder höher ausfallen.
        </p>
      </div>
    </div>
  );
}

function BadewanneContactSection() {
  const [sent, setSent] = useState(false);

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
            <h2 className="br-section-title">Badewanne austauschen anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns schnellstmöglich mit einer ersten Einschätzung und beraten
              Sie persönlich zum Austausch Ihrer Badewanne.
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
            <label className="br-input-group">
              <span>Fotos hochladen</span>
              <input type="file" name="fotos" accept="image/*" multiple />
              <small>
                Laden Sie Fotos Ihrer bestehenden Badewanne hoch. So können wir Ihr Projekt besser einschätzen.
              </small>
            </label>
            <button type="submit" className="btn br-btn-orange br-ablauf-submit">
              Badewanne austauschen anfragen <Send size={18} />
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
            <BadewanneCTA isHero showThird primaryHref="#kontakt" />
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

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Wann lohnt sich der Austausch einer Badewanne?">
        Mit der Zeit entstehen Gebrauchsspuren, technische Defekte oder veränderte Komfortansprüche. Der Austausch
        einer Badewanne schafft nicht nur eine neue Optik, sondern verbessert auch die tägliche Nutzung und erhöht
        langfristig den Wert Ihres Badezimmers.
      </SectionTransition>

      {/* 3 Vorteile */}
      <section id="vorteile" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum eine neue Badewanne den Unterschied macht</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine moderne Badewanne verbessert nicht nur die Optik Ihres Badezimmers. Neue Materialien, ergonomische
              Formen und hochwertige Armaturen erhöhen den Komfort und sorgen dafür, dass Ihr Badezimmer wieder
              zeitgemäß wirkt. Gleichzeitig lassen sich ältere oder beschädigte Badewannen fachgerecht ersetzen und
              technisch auf den neuesten Stand bringen.
            </p>
          </div>
          <ImageCardGrid cards={vorteilCards} />
        </div>
      </section>

      <SectionTransition title="Welche Möglichkeiten gibt es beim Austausch einer Badewanne?">
        Nicht jede Badewanne ist gleich. Je nach Platzangebot, Nutzung und Designwunsch stehen unterschiedliche Modelle
        und Ausstattungen zur Verfügung. Gemeinsam finden wir die passende Lösung für Ihr Badezimmer.
      </SectionTransition>

      {/* 4 Möglichkeiten */}
      <section id="moeglichkeiten" className="br-section br-bw-options-section">
        <div className="container">
          <PremiumIconCards cards={optionCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Vorher und Nachher">
        Der Austausch einer alten Badewanne verändert die Wirkung eines Badezimmers deutlich. Moderne Materialien und
        eine präzise Ausführung sorgen für mehr Komfort und ein hochwertiges Gesamtbild.
      </SectionTransition>

      {/* 5 Vorher / Nachher */}
      <section id="vorher-nachher" className="br-section br-bg-light br-bw-before-after-section">
        <div className="container">
          <div className="br-bw-before-after-grid">
            <figure className="br-bw-before-after-card">
              <span className="br-bw-before-after-label">Vorher</span>
              <img
                src="/img/badewanne-austauschen-vorher.png"
                alt="Altes Badezimmer mit abgenutzter Badewanne"
                loading="lazy"
                width={800}
                height={600}
              />
            </figure>
            <figure className="br-bw-before-after-card">
              <span className="br-bw-before-after-label">Nachher</span>
              <img
                src="/img/badewanne-austauschen-nachher.png"
                alt="Modernisiertes Badezimmer mit neuer Badewanne"
                loading="lazy"
                width={800}
                height={600}
              />
            </figure>
          </div>
          <div className="br-ablauf-cta-wrap">
            <BadewanneCTA centered primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Radex?">
        Der Austausch einer Badewanne erfordert präzises Arbeiten und Erfahrung im Sanitärbereich. Im nächsten Abschnitt
        erfahren Sie, warum Eigentümer im gesamten Rhein-Main-Gebiet auf Radex vertrauen.
      </SectionTransition>

      {/* 6 Warum Radex */}
      <section id="warum-radex" className="br-section br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex für den Austausch Ihrer Badewanne?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Der Austausch einer Badewanne ist mehr als nur der Einbau eines neuen Modells. Abdichtung, Anschlüsse,
              Fliesen und Sanitärtechnik müssen perfekt zusammenspielen. Als SHK-Meisterbetrieb sorgt Radex für eine
              fachgerechte Umsetzung und eine langlebige Lösung, die technisch und optisch überzeugt.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Bernd Knoop, SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH, erklärt im Video, worauf es beim
        Austausch einer Badewanne ankommt und welche Möglichkeiten moderne Badewannen heute bieten.
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
              title="Bernd Knoop – Badewanne austauschen"
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
            <BadewanneCTA centered primaryHref="#kontakt" />
          </div>

          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition title="So tauschen wir Ihre Badewanne aus">
        Von der ersten Beratung bis zur fertigen Montage begleiten wir Ihr Projekt Schritt für Schritt und sorgen für
        eine professionelle Umsetzung mit minimalen Einschränkungen während der Arbeiten.
      </SectionTransition>

      {/* 8 Ablauf */}
      <section id="ablauf" className="br-section br-bg-light br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So tauschen wir Ihre Badewanne aus</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Der Austausch einer Badewanne erfordert eine sorgfältige Planung und präzise Ausführung. Von der
              Demontage der alten Badewanne bis zur fachgerechten Installation des neuen Modells koordinieren wir
              sämtliche Arbeiten und sorgen für ein sauberes Ergebnis.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Einblicke in unsere Arbeit">
        Unsere Teams tauschen täglich Badewannen im gesamten Rhein-Main-Gebiet aus. Hier sehen Sie eine Auswahl
        aktueller Projekte und moderner Badlösungen.
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

      <SectionTransition title="Was kostet der Austausch einer Badewanne?">
        Die Kosten richten sich nach dem gewählten Modell, den vorhandenen Anschlüssen und dem Umfang der notwendigen
        Arbeiten. Mit den folgenden Preisbeispielen erhalten Sie eine erste Orientierung.
      </SectionTransition>

      {/* 10 Preise */}
      <section id="preise" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet der Austausch einer Badewanne?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten für den Austausch einer Badewanne hängen vom gewählten Modell, den vorhandenen Anschlüssen
              sowie dem Umfang der Fliesen- und Sanitärarbeiten ab. Mit den folgenden Preisbeispielen erhalten Sie eine
              erste Orientierung für Ihr Projekt.
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
        Beantworten Sie wenige Fragen und erhalten Sie eine unverbindliche Kosteneinschätzung für den Austausch Ihrer
        Badewanne.
      </SectionTransition>

      {/* 11 Kostenrechner */}
      <section id="kostenrechner" className="br-section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <BadewanneCalculator />

          <div className="br-ablauf-cta-box br-bw-cta-box">
            <h2 className="br-section-title">Sie möchten Ihre Badewanne austauschen?</h2>
            <p className="br-section-subtitle">
              Senden Sie uns Fotos Ihrer bestehenden Badewanne per WhatsApp oder vereinbaren Sie einen persönlichen
              Beratungstermin. Wir prüfen die Möglichkeiten und erstellen eine erste unverbindliche Einschätzung.
            </p>
            <BadewanneCTA centered showThird primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Häufige Fragen zum Austausch einer Badewanne">
        Hier beantworten wir häufige Fragen rund um Kosten, Ablauf, Materialien und den fachgerechten Austausch einer
        Badewanne.
      </SectionTransition>

      {/* 12 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zum Austausch einer Badewanne"
        intro="Der Austausch einer Badewanne wirft häufig Fragen zu Kosten, Ablauf und den verschiedenen Möglichkeiten auf. Hier finden Sie Antworten auf die wichtigsten Fragen rund um den fachgerechten Austausch Ihrer Badewanne."
      />

      <SectionTransition title="Ihre neue Badewanne beginnt mit einer persönlichen Beratung">
        Ob klassischer Austausch, moderne Komfortbadewanne oder hochwertige Designlösung – wir beraten Sie persönlich
        und finden gemeinsam die passende Badewanne für Ihr Badezimmer.
      </SectionTransition>

      {/* 13 Kontakt */}
      <BadewanneContactSection />

      {/* 14 Weitere Informationen – city-style side drawer */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-6">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '20px' }}>
              Im folgenden Bereich finden Sie ausführliche Informationen rund um den Austausch einer Badewanne,
              verschiedene Badewannenmodelle, Materialien, Planung, Kosten sowie den fachgerechten Ablauf der Arbeiten.
            </p>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
            >
              <h2 className="br-section-title">Weitere Informationen zum Thema Badewanne austauschen</h2>
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
            aria-labelledby="bw-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="bw-seo-panel-title">Weitere Informationen zum Thema Badewanne austauschen</h2>
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
                  Hier finden Sie ausführliche Informationen rund um den Austausch einer Badewanne. Erfahren Sie mehr
                  über verschiedene Badewannenmodelle, Materialien, Planung, Kosten, technische Voraussetzungen und den
                  fachgerechten Ablauf einer professionellen Umsetzung.
                </p>
                {badewanneAustauschenSeoIntro}
              </div>

              {badewanneAustauschenSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Badewanne austauschen – Beratung anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
