import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  BadgeEuro,
  Bath,
  CheckCircle2,
  Droplets,
  FileText,
  FolderOpen,
  Grid3x3,
  Hammer,
  Layers,
  Mail,
  MapPin,
  MessageSquare,
  PencilRuler,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  UserCheck,
  Wrench,
  Zap,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildFaqSchema, buildServiceSchema } from '../useSeo';
import {
  FaqAccordion,
  PremiumIconCards,
  QualityPromiseBlock,
  SectionTransition,
} from '../components/landing/SharedLandingParts';
import testVideo from '../assets/test.mp4';
import {
  komplettbadsanierungSeoIntro,
  komplettbadsanierungSeoSections,
} from '../data/komplettbadsanierungSeoContent';

const HERO_IMAGE = '/img/komplettbadsanierung-hero.webp';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Komplettbadsanierung Rhein-Main | Bad komplett sanieren | Radex';
const META_DESCRIPTION =
  'Komplettbadsanierung im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Rückbau, Sanitär, Elektro, Abdichtung, Fliesen und Montage aus einer Hand – mit einem festen Ansprechpartner bis zur fertigen Übergabe.';

function KomplettCTA({
  isHero = false,
  centered = false,
  showThird = false,
  primaryHref = '#kontakt',
  primaryLabel = 'Komplettbadsanierung anfragen',
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
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Komplett aus einer Hand',
    desc: 'Sanitär, Elektro, Fliesen und Ausbau perfekt koordiniert.',
    icon: Layers,
  },
  {
    title: 'Festpreis nach Besichtigung',
    desc: 'Transparente Angebote nach persönlicher Planung.',
    icon: BadgeEuro,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Erfahrung aus zahlreichen Badsanierungen im Rhein-Main-Gebiet.',
    icon: FolderOpen,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Von der Planung bis zur fertigen Übergabe.',
    icon: UserCheck,
  },
  {
    title: 'Im gesamten Rhein-Main-Gebiet',
    desc: 'Von Rödermark aus täglich im Einsatz.',
    icon: MapPin,
  },
];

const leistungenCards = [
  {
    title: 'Rückbau & Entkernung',
    desc: 'Das bestehende Badezimmer wird vollständig zurückgebaut und für den Neuaufbau vorbereitet.',
    icon: Hammer,
  },
  {
    title: 'Sanitärinstallation',
    desc: 'Wasserleitungen, Abwasserleitungen und Anschlüsse werden bei Bedarf vollständig erneuert.',
    icon: Droplets,
  },
  {
    title: 'Elektroinstallation',
    desc: 'Neue Leitungen, Steckdosen, Schalter und moderne Beleuchtung für Ihr neues Badezimmer.',
    icon: Zap,
  },
  {
    title: 'Abdichtung & Vorbereitung',
    desc: 'Das Badezimmer wird nach den geltenden Anforderungen fachgerecht abgedichtet und für den weiteren Ausbau vorbereitet.',
    icon: ShieldCheck,
  },
  {
    title: 'Fliesen & Oberflächen',
    desc: 'Wand- und Bodenflächen werden hochwertig gestaltet und sauber verarbeitet.',
    icon: Grid3x3,
  },
  {
    title: 'Montage & Fertigstellung',
    desc: 'Dusche, WC, Waschtisch und Armaturen werden montiert und das neue Badezimmer schlüsselfertig übergeben.',
    icon: Bath,
  },
];

const whyRadexCards = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitär- und Installationsarbeiten werden fachgerecht unter meisterlicher Leitung ausgeführt.',
    icon: Award,
  },
  {
    title: 'Alle Gewerke koordiniert',
    desc: 'Sanitär, Elektro, Trockenbau, Abdichtung und Fliesenarbeiten greifen perfekt ineinander.',
    icon: Layers,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Während der gesamten Komplettbadsanierung haben Sie einen festen Ansprechpartner für alle Arbeiten.',
    icon: UserCheck,
  },
  {
    title: 'Transparente Planung',
    desc: 'Nach der Besichtigung erhalten Sie ein nachvollziehbares Angebot für Ihr Projekt.',
    icon: FileText,
  },
];

const processSteps = [
  {
    title: 'Anfrage',
    desc: 'Kontaktieren Sie uns telefonisch, per WhatsApp oder über das Anfrageformular.',
    icon: Phone,
  },
  {
    title: 'Besichtigung',
    desc: 'Wir prüfen Ihr bestehendes Badezimmer und besprechen Ihre Wünsche vor Ort.',
    icon: Ruler,
  },
  {
    title: 'Planung',
    desc: 'Gemeinsam planen wir Raumaufteilung, Ausstattung, Materialien und den Ablauf Ihrer Komplettbadsanierung.',
    icon: PencilRuler,
  },
  {
    title: 'Angebot',
    desc: 'Sie erhalten ein transparentes Angebot für die gemeinsam abgestimmten Leistungen.',
    icon: FileText,
  },
  {
    title: 'Ausführung',
    desc: 'Das Badezimmer wird vollständig erneuert und alle Gewerke werden fachgerecht koordiniert.',
    icon: Wrench,
  },
  {
    title: 'Übergabe',
    desc: 'Nach Abschluss aller Arbeiten wird Ihr neues Badezimmer gemeinsam geprüft und übergeben.',
    icon: CheckCircle2,
  },
];

const beforeAfter = [
  {
    label: 'Vorher',
    image: '/img/komplettbadsanierung-vorher.webp',
    imageAlt: 'Symbolbild: Veraltetes Badezimmer vor der Komplettbadsanierung mit alter Badewanne und Fliesen',
  },
  {
    label: 'Nachher',
    image: '/img/komplettbadsanierung-nachher.webp',
    imageAlt: 'Symbolbild: Modernes Badezimmer nach der Komplettbadsanierung mit bodengleicher Dusche und beleuchtetem Spiegel',
  },
];

const projectExamples = [
  {
    title: 'Frankfurt-Sachsenhausen',
    subtitle: 'Komplettbadsanierung · 12 m²',
    desc: 'Vollständige Erneuerung eines Badezimmers mit neuer Sanitärinstallation, neuer Elektroinstallation, bodengleicher Dusche und großformatigen Fliesen.',
    image: '/img/komplettbad-projekt-frankfurt.webp',
    imageAlt: 'Symbolbild: Komplettbadsanierung eines 12 m² Badezimmers in Frankfurt-Sachsenhausen',
  },
  {
    title: 'Mühlheim am Main',
    subtitle: 'Komplettbadsanierung · 7 m²',
    desc: 'Bestehendes Badezimmer vollständig entkernt und mit neuer Technik, neuen Fliesen und moderner Ausstattung neu aufgebaut.',
    image: '/img/komplettbad-projekt-muehlheim.webp',
    imageAlt: 'Symbolbild: Komplettbadsanierung eines 7 m² Badezimmers in Mühlheim am Main',
  },
  {
    title: 'Bad Homburg',
    subtitle: 'Komplettbadsanierung mit Gäste-WC',
    desc: 'Modernisierung eines Badezimmers und Gäste-WCs einschließlich Sanitär-, Elektro-, Fliesen- und Ausbauarbeiten.',
    image: '/img/komplettbad-projekt-bad-homburg.webp',
    imageAlt: 'Symbolbild: Komplettbadsanierung mit Gäste-WC in Bad Homburg',
  },
];

const priceCards = [
  {
    title: 'Basis',
    price: 'ab 8.000 €',
    desc: 'Für kleinere Badezimmer mit funktionaler Ausstattung und geringem technischen Aufwand.',
  },
  {
    title: 'Komfort',
    price: 'ab 15.000 €',
    desc: 'Für vollständige Komplettbadsanierungen mit neuer Technik und hochwertiger Ausstattung.',
  },
  {
    title: 'Premium',
    price: 'ab 25.000 €',
    desc: 'Für individuelle Badkonzepte mit hochwertigen Materialien und umfangreichen Umbauten.',
  },
];

const faqsData = [
  {
    q: 'Was gehört zu einer Komplettbadsanierung?',
    a: 'Bei einer Komplettbadsanierung wird das Badezimmer vollständig erneuert. Dazu gehören unter anderem Rückbau, Sanitärinstallation, Elektroinstallation, Abdichtung, Fliesenarbeiten sowie die Montage der neuen Sanitärobjekte.',
  },
  {
    q: 'Wann ist eine Komplettbadsanierung sinnvoll?',
    a: 'Eine Komplettbadsanierung empfiehlt sich, wenn Leitungen, Abdichtung oder Ausstattung veraltet sind oder das Badezimmer vollständig neu gestaltet werden soll.',
  },
  {
    q: 'Was kostet eine Komplettbadsanierung?',
    a: 'Die Kosten richten sich nach Größe, Ausstattung und Umfang der Arbeiten. Eine erste Orientierung bietet unser Kostenrechner. Nach einer Besichtigung erhalten Sie ein individuelles Angebot.',
  },
  {
    q: 'Wie lange dauert eine Komplettbadsanierung?',
    a: 'Je nach Umfang dauert eine Komplettbadsanierung in der Regel zwischen zwei und vier Wochen. Der genaue Ablauf wird gemeinsam geplant.',
  },
  {
    q: 'Werden Wasserleitungen erneuert?',
    a: 'Falls erforderlich werden Wasser- und Abwasserleitungen im Rahmen der Komplettbadsanierung vollständig erneuert.',
  },
  {
    q: 'Wird auch die Elektroinstallation erneuert?',
    a: 'Ja. Bei Bedarf werden Leitungen, Steckdosen, Schalter und Beleuchtung auf den aktuellen Stand gebracht.',
  },
  {
    q: 'Kann der Grundriss verändert werden?',
    a: 'Ja. Wenn es technisch möglich ist, können Dusche, WC oder Waschtisch neu angeordnet werden.',
  },
  {
    q: 'Kann ich während der Arbeiten in der Wohnung bleiben?',
    a: 'Das hängt vom Umfang der Arbeiten ab. Gemeinsam besprechen wir vor Beginn die für Sie passende Lösung.',
  },
  {
    q: 'In welchen Städten ist Radex tätig?',
    a: 'Radex betreut Kunden von Rödermark aus im gesamten Rhein-Main-Gebiet.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter bei der Radex Objektmanagement GmbH.',
  'Eine Komplettbadsanierung beginnt lange bevor neue Fliesen verlegt oder Sanitäranlagen montiert werden. Zunächst prüfen wir den Zustand des bestehenden Badezimmers, die Leitungen, die Anschlüsse und die technischen Voraussetzungen.',
  'Anschließend planen wir gemeinsam mit Ihnen die neue Raumaufteilung, die Ausstattung und den gesamten Ablauf. Während der Bauphase koordinieren wir alle erforderlichen Gewerke, damit alle Arbeiten sauber ineinandergreifen.',
  'Von der Entkernung über Sanitär, Elektro, Abdichtung und Fliesen bis zur fertigen Montage begleiten wir Ihr Projekt aus einer Hand.',
  'Wenn Sie Ihr Badezimmer vollständig erneuern möchten, beraten wir Sie gerne persönlich. Senden Sie uns einfach Fotos Ihres Badezimmers oder vereinbaren Sie einen Besichtigungstermin.',
];

const videoTrustPoints = [
  'SHK-Meisterbetrieb',
  'Alle Gewerke aus einer Hand',
  'Ein Ansprechpartner',
  'Planung bis zur fertigen Übergabe',
];

const leistungOptions = [
  'Komplettbadsanierung',
  'Komplettbadsanierung mit neuen Leitungen',
  'Komplettbadsanierung mit Grundrissänderung',
  'Ich bin noch unsicher',
];

const sizeOptions = ['Bis 4 m²', '5 bis 7 m²', '8 bis 10 m²', 'Über 10 m²', 'Noch nicht bekannt'];

const formatEuro = (value) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);

const calcSizeOptions = [
  { label: 'Bis 4 m²', factor: 0 },
  { label: '5 bis 7 m²', factor: 0.1 },
  { label: '8 bis 10 m²', factor: 0.2 },
  { label: 'Über 10 m²', factor: 0.35 },
];

const calcScopeOptions = [
  { label: 'Standard', add: 0 },
  { label: 'Neue Leitungen', add: 3000 },
  { label: 'Grundriss ändern', add: 5000 },
];

const calcEquipmentOptions = [
  { label: 'Basis', base: 8000 },
  { label: 'Komfort', base: 15000 },
  { label: 'Premium', base: 25000 },
];

const calcExtraOptions = [
  { label: 'Fußbodenheizung', add: 1500 },
  { label: 'Neue Elektroinstallation', add: 1500 },
  { label: 'Neue Sanitärleitungen', add: 2000 },
  { label: 'Keine Zusatzleistungen', add: 0, exclusive: true },
];

function KomplettKostenrechner() {
  const [size, setSize] = useState(0);
  const [scope, setScope] = useState(0);
  const [equipment, setEquipment] = useState(0);
  const [extras, setExtras] = useState([]);

  const toggleExtra = (index) => {
    const option = calcExtraOptions[index];
    setExtras((current) => {
      if (option.exclusive) {
        return current.includes(index) ? [] : [index];
      }
      const withoutExclusive = current.filter((i) => !calcExtraOptions[i].exclusive);
      return withoutExclusive.includes(index)
        ? withoutExclusive.filter((i) => i !== index)
        : [...withoutExclusive, index];
    });
  };

  const { lower, upper } = useMemo(() => {
    const sizeFactor = calcSizeOptions[size].factor;
    const scopeAdd = calcScopeOptions[scope].add;
    const equipmentBase = calcEquipmentOptions[equipment].base;
    const extrasAdd = extras.reduce((sum, i) => sum + calcExtraOptions[i].add, 0);
    const base = equipmentBase * (1 + sizeFactor) + scopeAdd + extrasAdd;
    return { lower: Math.round(base), upper: Math.round(base * 1.2) };
  }, [size, scope, equipment, extras]);

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
        <h3>Wie umfangreich ist die Sanierung?</h3>
        <div className="br-gwc-calc-options">
          {calcScopeOptions.map((opt, i) => (
            <button
              key={opt.label}
              type="button"
              className={`br-gwc-calc-option${scope === i ? ' is-active' : ''}`}
              onClick={() => setScope(i)}
              aria-pressed={scope === i}
            >
              {opt.label}
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
          Zustand, Größe und Leistungsumfang niedriger oder höher ausfallen.
        </p>
      </div>
    </div>
  );
}

function KomplettContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const plzOrt = form.plzOrt.value.trim();
    const groesse = form.groesse.value;
    const leistung = form.leistung.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Komplettbadsanierung Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Größe des Badezimmers: ${groesse}`,
      `Gewünschte Leistung: ${leistung}`,
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
            <h2 className="br-section-title">Komplettbadsanierung anfragen</h2>
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
              <label className="br-input-group">
                <span>Welche Leistung wünschen Sie?</span>
                <select name="leistung" required defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {leistungOptions.map((opt) => (
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
              Komplettbadsanierung anfragen <Send size={18} />
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

export default function KomplettbadsanierungLanding() {
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
    path: '/badsanierung/badezimmer-sanieren',
    image: 'https://www.radex-objektmanagement.de/img/komplettbadsanierung-rhein-main-radex.webp',
    jsonLd: [
      buildServiceSchema({
        name: 'Komplettbadsanierung',
        description: META_DESCRIPTION,
        path: '/badsanierung/badezimmer-sanieren',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badsanierung-kosten-page gaeste-wc-page kleines-bad-page komplettbad-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Komplettbadsanierung</p>
            <h1 className="br-hero-title">
              Komplettbadsanierung
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-text">
              Ein Badezimmer komplett zu sanieren bedeutet mehr als neue Fliesen oder moderne Armaturen. Bei einer
              Komplettbadsanierung werden Technik, Leitungen, Abdichtung und Ausstattung vollständig erneuert. Radex
              begleitet Ihr Projekt von der Planung bis zur fertigen Übergabe – mit einem festen Ansprechpartner während
              der gesamten Bauphase.
            </p>
            <KomplettCTA isHero showThird primaryHref="#kontakt" />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Komplett saniertes modernes Badezimmer mit bodengleicher Dusche, wandhängendem WC und beleuchtetem Spiegelschrank"
          title="Komplettbadsanierung im Rhein-Main-Gebiet | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Was gehört zu einer Komplettbadsanierung?">
        Bei einer Komplettbadsanierung wird das bestehende Badezimmer vollständig erneuert. Von der Entkernung über neue
        Leitungen bis zur modernen Ausstattung erhalten Sie alle Leistungen aus einer Hand.
      </SectionTransition>

      {/* 3 Leistungen einer Komplettbadsanierung */}
      <section id="leistungen" className="br-section br-bg-light br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Leistungen einer Komplettbadsanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Bei einer Komplettbadsanierung wird Ihr Badezimmer vollständig zurückgebaut und technisch auf den neuesten
              Stand gebracht. Alle Arbeiten werden geplant, koordiniert und fachgerecht ausgeführt.
            </p>
          </div>
          <PremiumIconCards cards={leistungenCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Aus Alt wird Neu">
        Viele Badezimmer sind technisch veraltet oder entsprechen nicht mehr den heutigen Anforderungen. Eine
        Komplettbadsanierung schafft die Grundlage für mehr Komfort, Sicherheit und eine langfristige Nutzung.
      </SectionTransition>

      {/* 4 Vorher / Nachher */}
      <section id="vorher-nachher" className="br-section br-gwc-ba-section">
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

          <div className="br-gwc-ba-textblock">
            <h3>Wann lohnt sich eine Komplettbadsanierung?</h3>
            <p>
              Eine Komplettbadsanierung empfiehlt sich, wenn Technik, Leitungen, Abdichtung und Ausstattung in die Jahre
              gekommen sind oder das Badezimmer vollständig neu gestaltet werden soll. Durch die vollständige Erneuerung
              lassen sich Funktion, Komfort und Wert der Immobilie nachhaltig verbessern.
            </p>
          </div>

          <div className="br-ablauf-cta-wrap" style={{ marginTop: '32px' }}>
            <KomplettCTA centered primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Radex?">
        Eine Komplettbadsanierung erfordert Erfahrung, eine saubere Planung und die Koordination aller Gewerke. Genau
        darauf ist Radex spezialisiert.
      </SectionTransition>

      {/* 5 Warum Radex */}
      <section id="warum-radex" className="br-section br-bg-light br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex für Ihre Komplettbadsanierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine Komplettbadsanierung bedeutet deutlich mehr als den Austausch einzelner Sanitärobjekte. Technik,
              Leitungen, Abdichtung, Elektroinstallation und Ausbau müssen exakt aufeinander abgestimmt werden. Radex
              begleitet Ihr Projekt von der ersten Planung bis zur fertigen Übergabe.
            </p>
          </div>
          <div className="br-ablauf-why-grid br-gwc-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      {/* Radex Qualitätsversprechen */}
      <QualityPromiseBlock intro="Ihre Badsanierung wird klar geplant, fachgerecht koordiniert und gemeinsam mit Ihnen abgenommen." />

      <SectionTransition title="Bernd Knoop über die Komplettbadsanierung">
        <span className="br-gwc-eyebrow">Persönlich erklärt</span>
        Was gehört zu einer vollständigen Badsanierung? Bernd Knoop, SHK-Meister und Betriebsleiter bei Radex, erklärt
        im Video, worauf es bei der Planung, der technischen Umsetzung und der Koordination aller Gewerke ankommt.
      </SectionTransition>

      {/* 6 Bernd Knoop Video */}
      <section id="video" className="br-section br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="br-ablauf-video-frame">
            <video
              src={testVideo}
              controls
              playsInline
              preload="none"
              poster={VIDEO_POSTER}
              title="Bernd Knoop – Komplettbadsanierung"
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
            <KomplettCTA centered primaryHref="#kontakt" />
          </div>

          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition title="So läuft eine Komplettbadsanierung ab">
        Von der ersten Besichtigung bis zur fertigen Übergabe begleiten wir Ihr Projekt Schritt für Schritt.
      </SectionTransition>

      {/* 7 Ablauf */}
      <section id="ablauf" className="br-section br-bg-light br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So läuft Ihre Komplettbadsanierung ab</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Von der ersten Besichtigung bis zur fertigen Übergabe koordinieren wir alle Arbeiten und begleiten Ihr
              Projekt Schritt für Schritt.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Einblicke in unsere Komplettbadsanierungen">
        Unsere Teams sind täglich im gesamten Rhein-Main-Gebiet im Einsatz. Hier sehen Sie eine Auswahl abgeschlossener
        Komplettbadsanierungen.
      </SectionTransition>

      {/* 8 Projekte */}
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

      <SectionTransition title="Was kostet eine Komplettbadsanierung?">
        Die Kosten einer Komplettbadsanierung hängen unter anderem von der Raumgröße, der technischen Ausstattung und dem
        Umfang der Arbeiten ab. Die folgenden Werte dienen als erste Orientierung.
      </SectionTransition>

      {/* 9 Preise */}
      <section id="preise" className="br-section br-bg-light">
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
            Angebot für Ihre Komplettbadsanierung.
          </p>
        </div>
      </section>

      <SectionTransition title="Ermitteln Sie Ihre erste Kosteneinschätzung">
        Beantworten Sie vier kurze Fragen und erhalten Sie eine erste unverbindliche Kosteneinschätzung für Ihre
        Komplettbadsanierung.
      </SectionTransition>

      {/* 10 Kostenrechner */}
      <section id="kostenrechner" className="br-section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <KomplettKostenrechner />

          <div className="br-ablauf-cta-wrap" style={{ marginTop: '28px' }}>
            <KomplettCTA centered primaryHref="#kontakt" />
          </div>

          <div className="br-gwc-cta-box" style={{ marginTop: '40px' }}>
            <h2>Sie wünschen ein individuelles Angebot?</h2>
            <p>
              Senden Sie uns Fotos Ihres Badezimmers oder vereinbaren Sie einen Besichtigungstermin. So können wir Ihr
              Projekt besser einschätzen und ein individuelles Angebot erstellen.
            </p>
            <div className="br-hero-actions br-hero-actions--centered">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn br-btn-whatsapp br-btn-whatsapp--primary"
              >
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

      <SectionTransition title="Häufige Fragen zur Komplettbadsanierung">
        Antworten auf häufig gestellte Fragen rund um Planung, Ablauf und Kosten einer Komplettbadsanierung.
      </SectionTransition>

      {/* 11 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zur Komplettbadsanierung"
        intro="Hier finden Sie Antworten auf häufig gestellte Fragen rund um Planung, Ablauf und Kosten einer Komplettbadsanierung."
      />

      <SectionTransition title="Lassen Sie uns über Ihre Komplettbadsanierung sprechen">
        Rufen Sie uns an, senden Sie Fotos Ihres Badezimmers per WhatsApp oder schicken Sie uns Ihre Anfrage bequem über
        das Formular.
      </SectionTransition>

      {/* 12 Kontakt */}
      <KomplettContactSection />

      <SectionTransition title="Weitere Informationen zur Komplettbadsanierung">
        Ausführliche Informationen rund um Planung, Ablauf und technische Details finden Sie im folgenden Bereich.
      </SectionTransition>

      {/* 13 Weitere Informationen (SEO-Migration) */}
      <section id="seo-informationen" className="br-section br-kosten-seo-article">
        <div className="container br-kosten-seo-container">
          <div className="br-ablauf-seo-intro br-kosten-seo-intro">{komplettbadsanierungSeoIntro}</div>

          {komplettbadsanierungSeoSections.map((section) => (
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
