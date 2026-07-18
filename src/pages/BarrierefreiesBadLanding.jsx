import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileText,
  FolderOpen,
  GripHorizontal,
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
  QualityPromiseBlock,
  SectionTransition,
} from '../components/landing/SharedLandingParts';
import testVideo from '../assets/test.mp4';
import {
  barrierefreiesBadSeoIntro,
  barrierefreiesBadSeoSections,
} from '../data/barrierefreiesBadSeoContent';

const HERO_IMAGE = '/img/barrierefreies-bad-hero.webp';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Barrierefreies Bad | Sanierung im Rhein-Main-Gebiet | Radex';
const META_DESCRIPTION =
  'Barrierefreies Bad im Rhein-Main-Gebiet: bodengleiche Dusche, Haltegriffe und durchdachte Bewegungsflächen vom SHK-Meisterbetrieb Radex.';

function BarrierefreiCTA({
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
        Barrierefreies Bad anfragen
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
    desc: 'Mehr Komfort und sicherer Einstieg ohne hohe Schwellen.',
    icon: ShowerHead,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Mehr Sicherheit',
    desc: 'Durchdachte Lösungen für den täglichen Gebrauch.',
    icon: Shield,
  },
  {
    title: 'Individuelle Planung',
    desc: 'Jedes Badezimmer wird auf Ihre Bedürfnisse abgestimmt.',
    icon: LayoutGrid,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Langjährige Erfahrung im Rhein-Main-Gebiet.',
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
    title: 'Mehr Sicherheit',
    desc: 'Bodengleiche Duschen und rutschhemmende Oberflächen reduzieren Stolperstellen und sorgen für einen sicheren Alltag.',
    image: '/img/barrierefreies-bad-vorteil-sicherheit.webp',
    imageAlt: 'Symbolbild: Bodengleiche Dusche mit rutschhemmenden Fliesen',
  },
  {
    title: 'Mehr Bewegungsfreiheit',
    desc: 'Großzügige Bewegungsflächen schaffen mehr Komfort und erleichtern die Nutzung des Badezimmers in jeder Lebensphase.',
    image: '/img/barrierefreies-bad-vorteil-bewegungsfreiheit.webp',
    imageAlt: 'Symbolbild: Offenes barrierefreies Bad mit Bewegungsflächen',
  },
  {
    title: 'Modernes Badezimmer',
    desc: 'Ein barrierefreies Bad verbindet zeitloses Design mit hoher Funktionalität und wertet Ihre Immobilie nachhaltig auf.',
    image: '/img/barrierefreies-bad-vorteil-modern.webp',
    imageAlt: 'Symbolbild: Modernes barrierefreies Badezimmer',
  },
  {
    title: 'Zukunftssicher wohnen',
    desc: 'Ein gut geplantes Badezimmer passt sich Ihren Bedürfnissen an und sorgt langfristig für mehr Komfort im eigenen Zuhause.',
    image: '/img/barrierefreies-bad-vorteil-zukunft.webp',
    imageAlt: 'Symbolbild: Zukunftssicheres barrierearmes Bad',
  },
];

const serviceCards = [
  {
    title: 'Bodengleiche Dusche',
    desc: 'Komfortabler Einstieg ohne hohe Schwellen und mehr Bewegungsfreiheit.',
    icon: ShowerHead,
  },
  {
    title: 'Unterfahrbarer Waschtisch',
    desc: 'Mehr Komfort und flexible Nutzung im Alltag.',
    icon: LayoutGrid,
  },
  {
    title: 'Halte- und Stützsysteme',
    desc: 'Dezent integrierte Lösungen für mehr Sicherheit im Badezimmer.',
    icon: GripHorizontal,
  },
  {
    title: 'Rutschhemmende Bodenbeläge',
    desc: 'Mehr Sicherheit durch geeignete Materialien und Oberflächen.',
    icon: ClipboardList,
  },
  {
    title: 'Komfort-WC',
    desc: 'Ergonomische Lösungen für eine angenehme und sichere Nutzung.',
    icon: CheckCircle2,
  },
  {
    title: 'Optimierte Bewegungsflächen',
    desc: 'Mehr Platz für eine komfortable Nutzung des Badezimmers.',
    icon: Ruler,
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
    desc: 'Jedes Badezimmer wird auf Ihre persönlichen Anforderungen und Platzverhältnisse abgestimmt.',
    icon: LayoutGrid,
  },
  {
    title: 'Komfort & Sicherheit',
    desc: 'Bodengleiche Duschen, rutschhemmende Oberflächen und durchdachte Lösungen sorgen für mehr Sicherheit im Alltag.',
    icon: ShowerHead,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Von der ersten Planung bis zur fertigen Übergabe begleitet Sie ein fester Ansprechpartner.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Beratung',
    desc: 'Wir besprechen Ihre Wünsche und die Möglichkeiten für Ihr barrierefreies Badezimmer.',
    icon: Phone,
  },
  {
    title: 'Besichtigung',
    desc: 'Vor Ort prüfen wir Raumgröße, Bewegungsflächen und die technischen Voraussetzungen.',
    icon: Ruler,
  },
  {
    title: 'Planung',
    desc: 'Gemeinsam planen wir Dusche, Sanitärtechnik, Ausstattung und die optimale Raumaufteilung.',
    icon: FileText,
  },
  {
    title: 'Angebot',
    desc: 'Sie erhalten ein transparentes Angebot mit allen abgestimmten Leistungen.',
    icon: ClipboardList,
  },
  {
    title: 'Umbau',
    desc: 'Alle Arbeiten werden fachgerecht koordiniert und sauber umgesetzt.',
    icon: Hammer,
  },
  {
    title: 'Übergabe',
    desc: 'Nach Abschluss aller Arbeiten wird Ihr neues Badezimmer gemeinsam geprüft und übergeben.',
    icon: CheckCircle2,
  },
];

const projectExamples = [
  {
    title: 'Frankfurt am Main',
    subtitle: 'Barrierefreies Badezimmer · 8 m²',
    desc: 'Umbau eines bestehenden Badezimmers mit bodengleicher Dusche, rutschhemmenden Fliesen und großzügigen Bewegungsflächen.',
    image: '/img/barrierefreies-bad-projekt-frankfurt.webp',
    imageAlt: 'Symbolbild: Barrierefreies Bad in Frankfurt am Main',
  },
  {
    title: 'Dreieich',
    subtitle: 'Barrierearmes Bad',
    desc: 'Modernisierung eines Badezimmers mit niedrigem Einstieg, neuer Dusche und komfortabler Raumgestaltung.',
    image: '/img/barrierefreies-bad-projekt-dreieich.webp',
    imageAlt: 'Symbolbild: Barrierearmes Bad in Dreieich',
  },
  {
    title: 'Offenbach am Main',
    subtitle: 'Modernes Komfortbad',
    desc: 'Neues Badezimmer mit bodengleicher Dusche, komfortabler Ausstattung und durchdachter Bewegungsfläche.',
    image: '/img/barrierefreies-bad-projekt-offenbach.webp',
    imageAlt: 'Symbolbild: Modernes Komfortbad in Offenbach am Main',
  },
];

const priceCards = [
  {
    title: 'Basis',
    price: 'ab 10.000 €',
    desc: 'Für kleinere Badezimmer mit bodengleicher Dusche und funktionaler barrierefreier Ausstattung.',
  },
  {
    title: 'Komfort',
    price: 'ab 18.000 €',
    desc: 'Mit hochwertiger Ausstattung, rutschhemmenden Oberflächen und individueller Raumgestaltung.',
  },
  {
    title: 'Premium',
    price: 'ab 28.000 €',
    desc: 'Für umfangreiche Umbauten mit maximalem Komfort, hochwertigen Materialien und individuellen Lösungen.',
  },
];

const faqsData = [
  {
    q: 'Was ist der Unterschied zwischen einem barrierefreien und einem barrierearmen Bad?',
    a: 'Ein barrierefreies Bad erfüllt definierte Anforderungen an Bewegungsflächen und Nutzung. Ein barrierearmes Bad verbessert den Komfort und die Sicherheit, ohne alle Anforderungen vollständig umzusetzen.',
  },
  {
    q: 'Kann jedes Badezimmer barrierefrei umgebaut werden?',
    a: 'Viele Badezimmer können entsprechend der baulichen Möglichkeiten angepasst werden. Nach einer Besichtigung entwickeln wir gemeinsam eine passende Lösung für Ihre Immobilie.',
  },
  {
    q: 'Ist eine bodengleiche Dusche immer möglich?',
    a: 'Ob eine bodengleiche Dusche realisiert werden kann, hängt von den baulichen Gegebenheiten und der vorhandenen Entwässerung ab. Nach einer Vor-Ort-Prüfung beraten wir Sie individuell.',
  },
  {
    q: 'Wie lange dauert der Umbau?',
    a: 'Je nach Umfang dauert der Umbau eines barrierefreien Badezimmers in der Regel zwischen zwei und vier Wochen.',
  },
  {
    q: 'Kann ich während der Bauarbeiten in der Wohnung bleiben?',
    a: 'Das hängt vom Umfang der Arbeiten ab. Gemeinsam besprechen wir vor Beginn die für Sie passende Lösung.',
  },
  {
    q: 'Welche Kosten entstehen für ein barrierefreies Bad?',
    a: 'Die Kosten hängen von Raumgröße, Ausstattung und Leistungsumfang ab. Nach einer Besichtigung erhalten Sie ein individuelles Festpreisangebot.',
  },
  {
    q: 'Gibt es Fördermöglichkeiten?',
    a: 'Je nach persönlicher Situation und aktuellen Förderprogrammen können Fördermöglichkeiten bestehen. Gerne beraten wir Sie hierzu im persönlichen Gespräch.',
  },
  {
    q: 'In welchen Städten arbeitet Radex?',
    a: 'Von Rödermark aus betreut Radex Kunden im gesamten Rhein-Main-Gebiet.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter bei der Radex Objektmanagement GmbH.',
  'Ein barrierefreies Badezimmer bedeutet heute weit mehr als reine Funktionalität. Moderne Lösungen verbinden Komfort, Sicherheit und zeitloses Design miteinander. Bereits bei der Planung achten wir darauf, dass Bewegungsflächen, Dusche, Sanitärtechnik und Ausstattung optimal aufeinander abgestimmt sind.',
  'Gemeinsam mit Ihnen entwickeln wir eine Lösung, die zu Ihrem Badezimmer und Ihren persönlichen Anforderungen passt. Von der ersten Beratung über die Planung bis zur fertigen Umsetzung begleiten wir Ihr Projekt mit einem festen Ansprechpartner.',
  'So entsteht ein Badezimmer, das nicht nur heute überzeugt, sondern auch in Zukunft komfortabel und sicher genutzt werden kann.',
  'Wenn Sie Ihr Badezimmer barrierefrei umbauen möchten, senden Sie uns einfach Fotos per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin.',
];

const videoTrustPoints = [
  'SHK-Meisterbetrieb',
  'Individuelle Planung',
  'Bodengleiche Duschen',
  'Ein Ansprechpartner',
];

const roomSizeOptions = [
  { id: 'bis4', label: 'Bis 4 m²', factor: 1 },
  { id: '5bis7', label: '5 bis 7 m²', factor: 1.1 },
  { id: '8bis10', label: '8 bis 10 m²', factor: 1.2 },
  { id: 'ueber10', label: 'Über 10 m²', factor: 1.35 },
];

const showerOptions = [
  { id: 'bodengleich', label: 'Bodengleiche Dusche', price: 2000 },
  { id: 'walkin', label: 'Walk-in-Dusche', price: 3000 },
  { id: 'unsicher', label: 'Ich bin noch unsicher', price: 0 },
];

const finishOptions = [
  { id: 'basis', label: 'Basis', price: 0 },
  { id: 'komfort', label: 'Komfort', price: 8000 },
  { id: 'premium', label: 'Premium', price: 18000 },
];

const extrasOptions = [
  { id: 'haltegriffe', label: 'Haltegriffe', price: 600 },
  { id: 'waschtisch', label: 'Unterfahrbarer Waschtisch', price: 1000 },
  { id: 'komfortwc', label: 'Komfort-WC', price: 1200 },
  { id: 'rutschhemmend', label: 'Rutschhemmender Boden', price: 1500 },
  { id: 'keine', label: 'Keine Zusatzleistungen', price: 0 },
];

const loesungOptions = [
  'Barrierefreies Bad',
  'Barrierearmes Bad',
  'Bodengleiche Dusche',
  'Ich bin noch unsicher',
];

const sizeFormOptions = ['Bis 4 m²', '5 bis 7 m²', '8 bis 10 m²', 'Über 10 m²', 'Noch nicht bekannt'];

function formatEuro(value) {
  return `${Math.round(value).toLocaleString('de-DE')} €`;
}

function BarrierefreiCalculator() {
  const [roomSize, setRoomSize] = useState('bis4');
  const [shower, setShower] = useState('bodengleich');
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
    const base = 10000;
    const sizeFactor = roomSizeOptions.find((o) => o.id === roomSize)?.factor || 1;
    const finishPrice = finishOptions.find((o) => o.id === finish)?.price || 0;
    const showerPrice = showerOptions.find((o) => o.id === shower)?.price || 0;
    const extrasPrice = extras
      .filter((id) => id !== 'keine')
      .reduce((sum, id) => sum + (extrasOptions.find((o) => o.id === id)?.price || 0), 0);
    const total = (base + finishPrice) * sizeFactor + showerPrice + extrasPrice;
    return { min: total, max: Math.round(total * 1.2) };
  }, [roomSize, shower, finish, extras]);

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
        <h3>Welche zusätzlichen Ausstattungen wünschen Sie?</h3>
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
      </div>
    </div>
  );
}

function BarrierefreiContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const plzOrt = form.plzOrt.value.trim();
    const loesung = form.loesung.value;
    const groesse = form.groesse.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Barrierefreies Bad Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Gewünschte Lösung: ${loesung}`,
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
            <h2 className="br-section-title">Barrierefreies Bad anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt. Wir melden uns schnellstmöglich bei Ihnen und beraten Sie persönlich zu Ihrem
              barrierefreien Badezimmer.
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
                <span>Welche Lösung wünschen Sie?</span>
                <select name="loesung" required defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {loesungOptions.map((opt) => (
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
              Barrierefreies Bad anfragen <Send size={18} />
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

export default function BarrierefreiesBadLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (barrierefreiesBadSeoSections.some((s) => s.id === hash)) {
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
    path: '/barrierefreies-bad',
    image: 'https://radex-objektmanagement.de/img/barrierefreies-bad-hero.webp',
    jsonLd: [
      buildServiceSchema({
        name: 'Barrierefreies Bad',
        description: META_DESCRIPTION,
        path: '/barrierefreies-bad',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page barrierefreies-bad-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Barrierefreies Bad</p>
            <h1 className="br-hero-title">
              Barrierefreies Bad im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-text">
              Ein barrierefreies Bad verbindet Sicherheit, Komfort und modernes Design. Bodengleiche Duschen, großzügige
              Bewegungsflächen und durchdachte Lösungen erleichtern den Alltag und schaffen mehr Lebensqualität – heute
              und in Zukunft. Radex begleitet Ihr Projekt von der Planung bis zur fertigen Umsetzung.
            </p>
            <BarrierefreiCTA isHero showThird />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modernes barrierefreies Bad mit bodengleicher Dusche"
          title="Barrierefreies Bad | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Warum entscheiden sich immer mehr Menschen für ein barrierefreies Bad?">
        Ein barrierefreies Badezimmer bedeutet weit mehr als den Wegfall von Schwellen. Es schafft mehr
        Bewegungsfreiheit, erhöht den Komfort im Alltag und sorgt dafür, dass Ihr Badezimmer langfristig sicher und
        modern genutzt werden kann. Dabei profitieren nicht nur Senioren, sondern Menschen jeden Alters von einer
        durchdachten Planung. Ob <Link to="/badmodernisierung">Badmodernisierung</Link>,{' '}
        <Link to="/dusche-statt-badewanne">Dusche statt Badewanne</Link> oder kompletter{' '}
        <Link to="/badsanierung/badezimmer-sanieren">Badumbau</Link> – barrierefreie Lösungen lassen sich gezielt
        integrieren.
      </SectionTransition>

      {/* 3 Vorteile */}
      <section id="vorteile" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Ihre Vorteile mit einem barrierefreien Bad</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Ein barrierefreies Bad schafft mehr Komfort und Sicherheit im Alltag. Bodengleiche Duschen, großzügige
              Bewegungsflächen und intelligente Lösungen erleichtern die tägliche Nutzung und steigern gleichzeitig den
              Wohnkomfort und den Wert Ihrer Immobilie.
            </p>
          </div>
          <ImageCardGrid cards={vorteilCards} />
        </div>
      </section>

      <SectionTransition title="Was gehört zu einem barrierefreien Bad?">
        Ein barrierefreies Bad besteht aus vielen aufeinander abgestimmten Lösungen. Ziel ist ein Badezimmer, das sicher,
        komfortabel und langfristig nutzbar ist, ohne dabei auf modernes Design zu verzichten. Auch bei einer{' '}
        <Link to="/badrenovierung">Badrenovierung</Link> oder in einem{' '}
        <Link to="/ratgeber/kleines-bad-sanieren">kleinen Bad</Link> lassen sich viele dieser Elemente sinnvoll umsetzen.
      </SectionTransition>

      {/* 4 Leistungen */}
      <section id="leistungen" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Leistungen für Ihr barrierefreies Bad</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Von der bodengleichen Dusche bis zu optimierten Bewegungsflächen – alle Elemente für mehr Komfort und
              Sicherheit.
            </p>
          </div>
          <PremiumIconCards cards={serviceCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Vorher und Nachher">
        Schon kleine Veränderungen können den Komfort deutlich verbessern. Mit einer durchdachten Planung entsteht aus
        einem klassischen Badezimmer ein modernes barrierefreies Bad mit mehr Sicherheit und Bewegungsfreiheit.
      </SectionTransition>

      {/* 5 Vorher / Nachher */}
      <section id="vorher-nachher" className="br-section br-bg-light br-bf-compare-section">
        <div className="container">
          <div className="br-bf-compare-grid">
            <article className="br-bf-compare-card">
              <div
                className="br-bf-compare-img"
                style={{ backgroundImage: 'url(/img/barrierefreies-bad-vorher.webp)' }}
                role="img"
                aria-label="Symbolbild: Badezimmer vor dem barrierefreien Umbau"
              >
                <span className="br-bf-compare-label">Vorher</span>
                <span className="br-ablauf-symbolbild">Symbolbild</span>
              </div>
            </article>
            <article className="br-bf-compare-card">
              <div
                className="br-bf-compare-img"
                style={{ backgroundImage: 'url(/img/barrierefreies-bad-nachher.webp)' }}
                role="img"
                aria-label="Symbolbild: Barrierefreies Bad nach dem Umbau"
              >
                <span className="br-bf-compare-label">Nachher</span>
                <span className="br-ablauf-symbolbild">Symbolbild</span>
              </div>
            </article>
          </div>
          <div className="br-ablauf-cta-wrap" style={{ marginTop: '36px' }}>
            <BarrierefreiCTA centered />
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Radex?">
        Ein barrierefreies Badezimmer muss technisch durchdacht und fachgerecht umgesetzt werden. Erfahren Sie, warum
        sich Eigentümer im gesamten Rhein-Main-Gebiet für Radex entscheiden.
      </SectionTransition>

      {/* 6 Warum Radex */}
      <section id="warum-radex" className="br-section br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex für Ihr barrierefreies Bad?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Ein barrierefreies Bad erfordert Erfahrung, eine präzise Planung und eine fachgerechte Umsetzung.
              Bodengleiche Duschen, Bewegungsflächen, Abdichtung und Sanitärtechnik müssen perfekt zusammenarbeiten. Als
              SHK-Meisterbetrieb begleitet Radex Ihr Projekt von der ersten Beratung bis zur fertigen Übergabe.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      {/* Radex Qualitätsversprechen */}
      <QualityPromiseBlock intro="Bei barrierefreien Badezimmern achten wir besonders auf sichere Nutzung, technische Ausführung und eine sorgfältige Übergabe." />

      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Ein barrierefreies Badezimmer muss nicht nach Pflege oder Klinik aussehen. Bernd Knoop, SHK-Meister und
        Betriebsleiter bei Radex, erklärt im Video, wie moderne barrierefreie Badezimmer geplant werden und warum
        Komfort, Design und Sicherheit heute perfekt miteinander kombiniert werden können.
      </SectionTransition>

      {/* 7 Video */}
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
                title="Bernd Knoop – Barrierefreies Bad"
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
                <BarrierefreiCTA />
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

      <SectionTransition title="So entsteht Ihr barrierefreies Bad">
        Eine gute Planung schafft die Grundlage für ein komfortables und sicheres Badezimmer. Im nächsten Abschnitt
        zeigen wir Ihnen Schritt für Schritt, wie Ihr barrierefreier Badumbau abläuft.
      </SectionTransition>

      {/* 8 Ablauf */}
      <section id="ablauf" className="br-section br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So entsteht Ihr barrierefreies Bad</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Von der ersten Beratung bis zur fertigen Übergabe begleiten wir Ihr Projekt Schritt für Schritt. Gemeinsam
              entwickeln wir eine Lösung, die Sicherheit, Komfort und modernes Design miteinander verbindet.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Einblicke in unsere Arbeit">
        Unsere Teams modernisieren Badezimmer im gesamten Rhein-Main-Gebiet. Hier sehen Sie eine Auswahl barrierefreier
        Badezimmer und Badumbauten aus der Region. Weitere Referenzen finden Sie unter{' '}
        <Link to="/radex-live">Projekte</Link> und in unseren{' '}
        <Link to="/einsatzgebiete">Einsatzgebieten</Link>.
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

      <SectionTransition title="Was kostet ein barrierefreies Bad?">
        Die Kosten hängen von der Raumgröße, den gewünschten Ausstattungsmerkmalen und dem Umfang der Umbauarbeiten ab.
        Mit den folgenden Preisbeispielen erhalten Sie eine erste Orientierung. Ausführliche Informationen finden Sie auf
        der Seite <Link to="/barrierefreies-bad-kosten">Barrierefreies Bad Kosten</Link>. Für eine allgemeine{' '}
        <Link to="/badsanierung-kosten">Badsanierung Kosten</Link>-Übersicht steht auch unser{' '}
        <Link to="/sanierungskosten-rechner">Budgetrechner</Link> bereit.
      </SectionTransition>

      {/* 10 Preise */}
      <section id="preise" className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet ein barrierefreies Bad?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten für ein barrierefreies Bad hängen von der Raumgröße, der gewünschten Ausstattung und dem Umfang
              der Umbauarbeiten ab. Die folgenden Preisbeispiele dienen als erste Orientierung und ersetzen kein
              persönliches Angebot.
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

      <SectionTransition title="Ermitteln Sie Ihre erste Kosteneinschätzung">
        Mit unserem Rechner erhalten Sie in wenigen Schritten eine unverbindliche Kosteneinschätzung für Ihr
        barrierefreies Badezimmer.
      </SectionTransition>

      {/* 11 Kostenrechner */}
      <section id="kostenrechner" className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '980px' }}>
          <BarrierefreiCalculator />
          <div className="br-bf-cta-box">
            <h3>Sie wünschen eine persönliche Beratung?</h3>
            <p>
              Senden Sie uns Fotos Ihres Badezimmers oder vereinbaren Sie einen Besichtigungstermin. Gemeinsam finden wir
              die passende Lösung für Ihr barrierefreies Bad.
            </p>
            <BarrierefreiCTA centered showThird />
          </div>
        </div>
      </section>

      <SectionTransition title="Häufige Fragen zum barrierefreien Bad">
        Hier beantworten wir häufig gestellte Fragen rund um Planung, Kosten, Technik und Möglichkeiten eines
        barrierefreien Badezimmers. Weitere Tipps finden Sie im <Link to="/ratgeber">Ratgeber</Link>.
      </SectionTransition>

      {/* 12 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zum barrierefreien Bad"
        intro="Ein barrierefreies Bad wirft viele Fragen auf – von der Planung über die technische Umsetzung bis zu den Kosten. Hier finden Sie Antworten auf die häufigsten Fragen rund um Ihr Projekt."
      />

      <SectionTransition title="Lassen Sie uns gemeinsam Ihr barrierefreies Bad planen">
        Ob Neubau oder Modernisierung – wir beraten Sie persönlich und entwickeln gemeinsam mit Ihnen eine Lösung, die
        Komfort, Sicherheit und modernes Design verbindet. Kontaktieren Sie uns telefonisch, per WhatsApp oder über das
        Anfrageformular. Auch Themen wie <Link to="/gaeste-wc">Gäste-WC</Link> oder{' '}
        <Link to="/badsanierung-rhein-main">Badsanierung</Link> besprechen wir gerne mit.
      </SectionTransition>

      {/* 13 Kontakt */}
      <BarrierefreiContactSection />

      {/* 14 Weitere Informationen */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-6">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '20px' }}>
              Im folgenden Bereich finden Sie ausführliche Informationen rund um Planung, Technik, Komfort, Sicherheit
              und den Ablauf eines barrierefreien Badezimmers.
            </p>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
            >
              <h2 className="br-section-title">Weitere Informationen zum barrierefreien Bad</h2>
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
            aria-labelledby="br-bf-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="br-bf-seo-panel-title">Weitere Informationen zum barrierefreien Bad</h2>
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
                  Hier finden Sie ausführliche Informationen rund um das barrierefreie Bad, die Planung, den Umbau, die
                  technische Umsetzung sowie die Vorteile einer komfortablen und zukunftssicheren Badgestaltung.
                </p>
                {barrierefreiesBadSeoIntro}
              </div>

              {barrierefreiesBadSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt-form" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Barrierefreies Bad anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
