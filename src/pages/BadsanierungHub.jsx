import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  DraftingCompass,
  FileCheck,
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
  ShieldCheck,
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
import { badsanierungSeoIntro, badsanierungSeoSections } from '../data/badsanierungSeoContent';

const HERO_IMAGE = '/img/badsanierung-rhein-main-hero.webp';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Badsanierung Rhein-Main | Bad sanieren mit Radex';
const META_DESCRIPTION =
  'Badsanierung im Rhein-Main-Gebiet: Radex plant und koordiniert Badmodernisierung, Sanitär, Dusche, Gäste-WC und barrierearme Bäder aus einer Hand.';

function BadsanierungCTA({
  isHero = false,
  centered = false,
  showThird = false,
  primaryHref = '#kontakt',
}) {
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
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Alle Gewerke aus einer Hand',
    desc: 'Sanitär, Elektro, Fliesen und Ausbau perfekt koordiniert.',
    icon: LayoutGrid,
  },
  {
    title: 'Festpreisangebote',
    desc: 'Transparente Angebote nach persönlicher Besichtigung.',
    icon: ClipboardList,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Erfahrung aus zahlreichen Sanierungen im Rhein-Main-Gebiet.',
    icon: FolderOpen,
  },
  {
    title: 'Zertifiziert für Schimmelsanierung',
    desc: 'Fachgerechte Sanierung bei Feuchtigkeit und Schimmelbefall.',
    icon: ShieldCheck,
  },
  {
    title: 'Im gesamten Rhein-Main-Gebiet',
    desc: 'Von Rödermark aus täglich für unsere Kunden unterwegs.',
    icon: MapPin,
  },
];

const solutionCards = [
  {
    title: 'Komplettbadsanierung',
    desc: 'Das Badezimmer wird vollständig erneuert – von der Planung über Sanitär, Elektro und Fliesen bis zur fertigen Übergabe.',
    image: '/img/badsanierung-loesung-komplett.webp',
    imageAlt: 'Symbolbild: Komplettbadsanierung mit moderner Dusche und Waschtisch',
    to: '/badsanierung/badezimmer-sanieren',
  },
  {
    title: 'Dusche statt Badewanne',
    desc: 'Mehr Komfort und Bewegungsfreiheit durch den Austausch der vorhandenen Badewanne gegen eine moderne Dusche.',
    image: '/img/badsanierung-loesung-dusche.webp',
    imageAlt: 'Symbolbild: Walk-in-Dusche statt Badewanne',
    to: '/dusche-statt-badewanne',
  },
  {
    title: 'Barrierearmes Bad',
    desc: 'Mehr Sicherheit und Komfort mit bodengleicher Dusche, großzügigen Bewegungsflächen und einer durchdachten Planung.',
    image: '/img/badsanierung-loesung-barrierearm.webp',
    imageAlt: 'Symbolbild: Barrierearmes Bad mit bodengleicher Dusche',
    to: '/barrierefreies-bad',
  },
  {
    title: 'Gäste-WC modernisieren',
    desc: 'Auch kleine Räume lassen sich funktional, modern und hochwertig gestalten.',
    image: '/img/badsanierung-loesung-gaestewc.webp',
    imageAlt: 'Symbolbild: Modernes Gäste-WC',
    to: '/gaeste-wc',
  },
];

const whyRadexCards = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitär- und Installationsarbeiten werden fachgerecht unter meisterlicher Leitung geplant und ausgeführt.',
    icon: Award,
  },
  {
    title: 'Alle Gewerke koordiniert',
    desc: 'Sanitär, Elektro, Abdichtung, Fliesen und Innenausbau werden optimal aufeinander abgestimmt.',
    icon: LayoutGrid,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Während der gesamten Badsanierung haben Sie einen festen Ansprechpartner für Ihr Projekt.',
    icon: UserCheck,
  },
  {
    title: 'Transparente Planung',
    desc: 'Nach der Besichtigung erhalten Sie ein nachvollziehbares Angebot für die vereinbarten Leistungen.',
    icon: FileCheck,
  },
];

const processSteps = [
  {
    title: 'Anfrage senden',
    desc: 'Kontaktieren Sie uns telefonisch, per WhatsApp oder über das Anfrageformular.',
    icon: MessageSquare,
  },
  {
    title: 'Besichtigung vor Ort',
    desc: 'Wir besichtigen Ihr Badezimmer, prüfen die Gegebenheiten und besprechen Ihre Wünsche.',
    icon: Ruler,
  },
  {
    title: 'Planung',
    desc: 'Gemeinsam planen wir die Ausstattung, Materialien und den Ablauf Ihrer Badsanierung.',
    icon: DraftingCompass,
  },
  {
    title: 'Angebot erhalten',
    desc: 'Sie erhalten ein transparentes Angebot für die gemeinsam abgestimmten Leistungen.',
    icon: FileText,
  },
  {
    title: 'Badsanierung',
    desc: 'Alle erforderlichen Arbeiten werden fachgerecht und koordiniert ausgeführt.',
    icon: Hammer,
  },
  {
    title: 'Übergabe',
    desc: 'Nach Abschluss wird Ihr neues Badezimmer gemeinsam geprüft und übergeben.',
    icon: CheckCircle2,
  },
];

const projectExamples = [
  {
    title: 'Frankfurt-Sachsenhausen',
    subtitle: 'Komplettbadsanierung · 12 m²',
    desc: 'Komplette Erneuerung eines Badezimmers mit neuer Sanitärinstallation, bodengleicher Dusche, großformatigen Fliesen und moderner Ausstattung.',
    image: '/img/badsanierung-projekt-sachsenhausen.webp',
    imageAlt: 'Symbolbild: Komplettbadsanierung in Frankfurt-Sachsenhausen',
  },
  {
    title: 'Mühlheim am Main',
    subtitle: 'Badsanierung · 7 m²',
    desc: 'Modernisierung eines bestehenden Badezimmers mit neuer Dusche, Waschtisch, WC und zeitgemäßer Wand- und Bodengestaltung.',
    image: '/img/badsanierung-projekt-muehlheim.webp',
    imageAlt: 'Symbolbild: Badsanierung in Mühlheim am Main',
  },
  {
    title: 'Bad Homburg',
    subtitle: 'Bad und Gäste-WC',
    desc: 'Komplette Modernisierung eines Badezimmers und Gäste-WCs einschließlich Sanitär-, Fliesen- und Elektroarbeiten.',
    image: '/img/badsanierung-projekt-badhomburg.webp',
    imageAlt: 'Symbolbild: Bad und Gäste-WC in Bad Homburg',
  },
];

const priceCards = [
  {
    title: 'Basis',
    price: 'ab 8.000 €',
    desc: 'Für kleinere Modernisierungen und funktionale Badezimmer mit solider Ausstattung.',
  },
  {
    title: 'Komfort',
    price: 'ab 15.000 €',
    desc: 'Für vollständige Badsanierungen mit neuer Technik, moderner Dusche und hochwertiger Ausstattung.',
  },
  {
    title: 'Premium',
    price: 'ab 25.000 €',
    desc: 'Für individuelle Badkonzepte, hochwertige Materialien und umfangreiche Umbauten.',
  },
];

const faqsData = [
  {
    q: 'Was kostet eine Badsanierung?',
    a: 'Die Kosten hängen unter anderem von der Größe des Badezimmers, dem Zustand der vorhandenen Leitungen, der gewünschten Ausstattung und dem Umfang der Arbeiten ab. Kleinere Modernisierungen beginnen häufig ab etwa 8.000 €. Nach einer Besichtigung erhalten Sie ein individuelles Angebot.',
  },
  {
    q: 'Wie lange dauert eine Badsanierung?',
    a: 'Je nach Umfang dauert eine Badsanierung in der Regel zwischen zwei und vier Wochen. Der genaue Zeitplan wird vor Beginn der Arbeiten gemeinsam abgestimmt.',
  },
  {
    q: 'Kann meine Badewanne durch eine Dusche ersetzt werden?',
    a: 'Ja. In vielen Badezimmern kann die vorhandene Badewanne durch eine moderne bodengleiche oder flache Dusche ersetzt werden. Vorab prüfen wir die technischen Voraussetzungen.',
  },
  {
    q: 'Kann ich während der Badsanierung in der Wohnung bleiben?',
    a: 'Das hängt vom Umfang der Arbeiten und den vorhandenen sanitären Einrichtungen ab. Gemeinsam besprechen wir vor Beginn die für Sie beste Lösung.',
  },
  {
    q: 'Werden auch Wasserleitungen erneuert?',
    a: 'Ja. Falls erforderlich erneuern wir im Rahmen der Badsanierung auch Wasser- und Abwasserleitungen.',
  },
  {
    q: 'Bietet Radex barrierearme Badezimmer an?',
    a: 'Ja. Wir planen und realisieren barrierearme Badezimmer mit bodengleichen Duschen, großzügigen Bewegungsflächen und komfortablen Ausstattungen.',
  },
  {
    q: 'Modernisieren Sie auch kleine Badezimmer oder Gäste-WCs?',
    a: 'Ja. Auch kleine Badezimmer und Gäste-WCs lassen sich funktional und hochwertig modernisieren.',
  },
  {
    q: 'In welchen Städten arbeitet Radex?',
    a: 'Von Rödermark aus betreut Radex Kunden im gesamten Rhein-Main-Gebiet.',
  },
  {
    q: 'Wie bekomme ich eine erste Kosteneinschätzung?',
    a: 'Nutzen Sie unseren Badrechner, senden Sie uns Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie einen persönlichen Termin.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter bei der Radex Objektmanagement GmbH.',
  'Bei einer Badsanierung geht es nicht nur um neue Fliesen oder eine neue Dusche. Entscheidend ist, dass Sanitär, Elektro, Abdichtung und alle weiteren Arbeiten sauber geplant und aufeinander abgestimmt werden.',
  'Genau darum kümmern wir uns. Wir begleiten unsere Kunden von der ersten Besichtigung über die Planung bis zur fertigen Übergabe des Badezimmers und koordinieren alle erforderlichen Gewerke.',
  'Ob komplette Badsanierung, Dusche statt Badewanne, barrierearmes Bad oder Gäste-WC – wir entwickeln gemeinsam mit Ihnen eine Lösung, die zu Ihrem Badezimmer und Ihren Vorstellungen passt.',
  'Wenn Sie Fragen haben oder eine erste Einschätzung wünschen, senden Sie uns gerne Fotos Ihres Badezimmers oder vereinbaren Sie einen persönlichen Termin.',
];

const videoTrustPoints = [
  'SHK-Meisterbetrieb',
  'Ein Ansprechpartner',
  'Alle Gewerke koordiniert',
];

const roomSizeOptions = [
  { id: 'bis4', label: 'Bis 4 m²', factor: 1 },
  { id: '5bis7', label: '5 bis 7 m²', factor: 1.1 },
  { id: '8bis10', label: '8 bis 10 m²', factor: 1.2 },
  { id: 'ueber10', label: 'Über 10 m²', factor: 1.35 },
];

const typeOptions = [
  { id: 'komplett', label: 'Komplettbadsanierung' },
  { id: 'dusche', label: 'Dusche statt Badewanne' },
  { id: 'gaeste', label: 'Gäste-WC' },
  { id: 'barrierearm', label: 'Barrierearmes Bad' },
  { id: 'teil', label: 'Teilmodernisierung' },
];

const ausstattungOptions = [
  { id: 'basis', label: 'Basis', base: 8000 },
  { id: 'komfort', label: 'Komfort', base: 15000 },
  { id: 'premium', label: 'Premium', base: 25000 },
];

const extrasOptions = [
  { id: 'leitungen', label: 'Neue Sanitärleitungen', price: 2000 },
  { id: 'elektro', label: 'Neue Elektroinstallation', price: 1500 },
  { id: 'fbh', label: 'Fußbodenheizung', price: 1500 },
  { id: 'grundriss', label: 'Grundriss ändern', price: 4000 },
  { id: 'keine', label: 'Keine Zusatzleistungen', price: 0 },
];

const leistungFormOptions = [
  'Komplettbadsanierung',
  'Dusche statt Badewanne',
  'Barrierearmes Bad',
  'Gäste-WC modernisieren',
  'Teilmodernisierung',
  'Ich bin noch unsicher',
];

const sizeFormOptions = ['Bis 4 m²', '5 bis 7 m²', '8 bis 10 m²', 'Über 10 m²', 'Noch nicht bekannt'];

function formatEuro(value) {
  return `${Math.round(value).toLocaleString('de-DE')} €`;
}

function BadKostenCalculator() {
  const [roomSize, setRoomSize] = useState('bis4');
  const [type, setType] = useState('komplett');
  const [ausstattung, setAusstattung] = useState('basis');
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
    let total = ausstattungOptions.find((o) => o.id === ausstattung)?.base || 8000;

    if (type === 'dusche') {
      total = 8000;
    }

    const sizeFactor = roomSizeOptions.find((o) => o.id === roomSize)?.factor || 1;
    total *= sizeFactor;

    if (type === 'barrierearm') {
      total += 2000;
    }

    if (type === 'gaeste') {
      total = Math.max(total * 0.7, 5500);
    }

    if (type === 'teil') {
      total = Math.max(total * 0.8, 6500);
    }

    const extrasPrice = extras
      .filter((id) => id !== 'keine')
      .reduce((sum, id) => sum + (extrasOptions.find((o) => o.id === id)?.price || 0), 0);

    total += extrasPrice;

    return { min: total, max: Math.round(total * 1.2) };
  }, [roomSize, type, ausstattung, extras]);

  return (
    <div className="br-bw-calculator br-dauer-calculator">
      <div className="br-dauer-calc-header">
        <h3>Badsanierung Kostenrechner</h3>
        <p>Erste unverbindliche Orientierung für Ihr Projekt im Rhein-Main-Gebiet</p>
      </div>

      <div className="br-dauer-calc-body">
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
            {typeOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`br-bw-calc-btn${type === opt.id ? ' is-active' : ''}`}
                onClick={() => setType(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="br-bw-calc-question">
          <h3>Welche Ausstattung wünschen Sie?</h3>
          <div className="br-bw-calc-options">
            {ausstattungOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`br-bw-calc-btn${ausstattung === opt.id ? ' is-active' : ''}`}
                onClick={() => setAusstattung(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="br-bw-calc-question">
          <h3>Welche Zusatzleistungen werden benötigt?</h3>
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
            Zustand, Größe und Leistungsumfang niedriger oder höher ausfallen.
          </p>
          <div className="br-ablauf-cta-wrap" style={{ marginTop: '24px' }}>
            <BadsanierungCTA centered primaryHref="#kontakt-form" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const plzOrt = form.plzOrt.value.trim();
    const leistung = form.leistung.value;
    const groesse = form.groesse.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Badsanierung Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Gewünschte Leistung: ${leistung}`,
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
            <h2 className="br-section-title">Badsanierung anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns schnellstmöglich bei Ihnen.
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
                <span>Welche Leistung wünschen Sie?</span>
                <select name="leistung" required defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {leistungFormOptions.map((opt) => (
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
                placeholder="Beschreiben Sie kurz Ihr Badezimmer und Ihre Wünsche."
              />
            </label>
            <label className="br-input-group">
              <span>Fotos hochladen</span>
              <input type="file" name="fotos" accept="image/*" multiple />
              <small>Laden Sie auf Wunsch Fotos Ihres Badezimmers hoch.</small>
            </label>
            <button type="submit" className="btn br-btn-orange br-ablauf-submit">
              Badsanierung anfragen <Send size={18} />
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

export default function BadsanierungHub() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (badsanierungSeoSections.some((s) => s.id === hash)) {
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
    path: '/badsanierung-rhein-main',
    image: 'https://radex-objektmanagement.de/img/badsanierung-rhein-main-hero.webp',
    jsonLd: [
      buildServiceSchema({
        name: 'Badsanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: '/badsanierung-rhein-main',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badsanierung-hub-page dusche-statt-badewanne-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Badsanierung im Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Badsanierung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-text">
              Von der ersten Planung bis zur fertigen Übergabe begleitet Radex Ihre komplette Badsanierung aus einer
              Hand. Als SHK-Meisterbetrieb koordinieren wir Sanitär, Elektro, Abdichtung, Fliesen und alle weiteren
              Arbeiten – mit einem festen Ansprechpartner während des gesamten Projekts.
            </p>
            <BadsanierungCTA isHero showThird />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modernes Badezimmer nach Badsanierung im Rhein-Main-Gebiet"
          title="Badsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Welche Badsanierung passt zu Ihrem Projekt?">
        Ob komplette Badsanierung, neue Dusche, barrierearmes Bad oder modernes Gäste-WC – wählen Sie die Lösung, die
        zu Ihrem Badezimmer passt.
      </SectionTransition>

      {/* 4 Bathroom Solutions */}
      <section id="leistungen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen rund um Ihre Badsanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jedes Badezimmer ist anders. Deshalb bieten wir verschiedene Lösungen – von der kompletten Badsanierung
              bis zur Modernisierung einzelner Bereiche.
            </p>
          </div>
          <div className="br-hub-solutions-grid">
            <ImageCardGrid cards={solutionCards} linked />
          </div>
        </div>
      </section>

      {/* 5 Contact Strip */}
      <section id="erste-einschaetzung" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Sie möchten wissen, was in Ihrem Bad möglich ist?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Senden Sie uns Fotos Ihres Badezimmers oder sprechen Sie direkt mit unserem Team. Wir geben Ihnen eine
              erste Einschätzung zu Möglichkeiten, Aufwand und den nächsten Schritten.
            </p>
          </div>
          <div className="br-contact-duo">
            <article className="br-contact-duo-card br-contact-duo-card--wa">
              <div className="br-ablauf-contact-icon br-ablauf-contact-icon--wa">
                <MessageSquare size={28} strokeWidth={1.5} />
              </div>
              <h3>Fotos per WhatsApp senden</h3>
              <p>Fotografieren Sie Ihr Badezimmer und senden Sie uns die Bilder bequem per WhatsApp.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
                Fotos senden. Erste Einschätzung erhalten.
              </a>
            </article>
            <article className="br-contact-duo-card br-contact-duo-card--phone">
              <div className="br-ablauf-contact-icon">
                <Phone size={28} strokeWidth={1.5} />
              </div>
              <h3>Direkt mit Radex sprechen</h3>
              <p>Sie haben Fragen zu Ihrer Badsanierung? Wir beraten Sie gerne persönlich.</p>
              <a href={PHONE_TEL} className="br-ablauf-contact-number">
                06074 960620
              </a>
              <a href={PHONE_TEL} className="btn br-btn-orange">
                Jetzt anrufen
              </a>
            </article>
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Radex für Ihre Badsanierung?">
        Eine erfolgreiche Badsanierung beginnt mit einer guten Planung und einer sauberen Koordination aller Arbeiten.
        Genau darauf ist Radex spezialisiert.
      </SectionTransition>

      {/* 7 Why Radex */}
      <section id="warum-radex" className="br-section br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Bei einer Badsanierung müssen viele Arbeiten perfekt aufeinander abgestimmt werden. Radex begleitet Ihr
              Projekt von der ersten Planung bis zur fertigen Übergabe – mit einem festen Ansprechpartner während der
              gesamten Bauphase.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition title="Persönlich erklärt">
        Lernen Sie Bernd Knoop kennen und erfahren Sie, worauf es bei einer professionellen Badsanierung wirklich
        ankommt.
      </SectionTransition>

      {/* 9 Video */}
      <section id="video" className="br-section br-bg-light br-ablauf-video-section br-bf-video-section">
        <div className="container">
          <div className="br-bf-video-split">
            <div className="br-ablauf-video-frame">
              <video
                src={testVideo}
                controls
                playsInline
                preload="none"
                poster={VIDEO_POSTER}
                title="Bernd Knoop – Badsanierung"
              />
            </div>
            <div className="br-bf-video-content">
              <h2 className="br-section-title">Bernd Knoop über Ihre Badsanierung</h2>
              <p className="br-section-subtitle br-section-subtitle--wide">
                Als SHK-Meister und Betriebsleiter begleitet Bernd Knoop Badsanierungen von der ersten Planung bis zur
                fertigen Übergabe. Im Video erklärt er, worauf es bei einer professionellen Umsetzung ankommt und warum
                eine saubere Koordination aller Gewerke entscheidend für ein gelungenes Ergebnis ist.
              </p>
              <ul className="br-ablauf-video-trust">
                {videoTrustPoints.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={18} color="#f97316" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="br-ablauf-cta-wrap">
                <BadsanierungCTA primaryHref="#kontakt-form" />
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

      {/* 11 Process */}
      <section id="ablauf" className="br-section br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So läuft Ihre Badsanierung ab</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Von der ersten Anfrage bis zur fertigen Übergabe begleiten wir Ihr Projekt Schritt für Schritt.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Einblicke in unsere Arbeit">
        Unsere Teams sind täglich im gesamten Rhein-Main-Gebiet im Einsatz. Hier zeigen wir eine Auswahl aktueller und
        abgeschlossener Badsanierungen.
      </SectionTransition>

      {/* 13 Projects */}
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

      {/* 15 Prices */}
      <section id="preise" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet eine Badsanierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jedes Badezimmer ist unterschiedlich. Größe, Zustand, Ausstattung und gewünschte Leistungen beeinflussen
              die Gesamtkosten. Die folgenden Werte dienen als erste Orientierung.
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
            Die genannten Preise dienen als erste Orientierung. Nach einer persönlichen Besichtigung erhalten Sie ein
            individuelles Angebot für Ihr Badezimmer.
          </p>
        </div>
      </section>

      <SectionTransition title="Ermitteln Sie jetzt Ihre erste Kosteneinschätzung">
        Beantworten Sie vier kurze Fragen und erhalten Sie eine unverbindliche Orientierung zu den möglichen Kosten
        Ihrer Badsanierung.
      </SectionTransition>

      {/* 17 Calculator */}
      <section id="kostenrechner" className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '980px' }}>
          <BadKostenCalculator />
          <div className="br-bf-cta-box">
            <h3>Sie möchten eine genaue Kosteneinschätzung?</h3>
            <p>
              Senden Sie uns Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie einen Besichtigungstermin. So
              können wir Ihr Projekt besser einschätzen und ein individuelles Angebot erstellen.
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

      {/* 19 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zur Badsanierung"
        intro="Hier finden Sie Antworten auf häufig gestellte Fragen rund um Planung, Ablauf und Kosten einer Badsanierung."
      />

      <SectionTransition title="Lassen Sie uns über Ihr neues Badezimmer sprechen">
        Rufen Sie uns an, senden Sie Fotos Ihres Badezimmers per WhatsApp oder schicken Sie uns Ihre Anfrage bequem über
        das Formular.
      </SectionTransition>

      {/* 21 Contact */}
      <ContactSection />

      {/* 22 Weitere Informationen SEO panel */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-6">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '20px' }}>
              Ausführliche Informationen rund um Planung, Kosten, Ablauf und einzelne Leistungen finden Sie im folgenden
              Bereich.
            </p>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
            >
              <h2 className="br-section-title">Weitere Informationen zur Badsanierung</h2>
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
            aria-labelledby="br-badsanierung-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="br-badsanierung-seo-panel-title">Weitere Informationen zur Badsanierung</h2>
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
                  Hier finden Sie ausführliche Informationen rund um Planung, Ablauf, Kosten und verschiedene
                  Möglichkeiten einer Badsanierung im Rhein-Main-Gebiet.
                </p>
                {badsanierungSeoIntro}
              </div>

              {badsanierungSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt-form" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Badsanierung anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
