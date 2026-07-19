import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock,
  GitBranch,
  HardHat,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  SearchCheck,
  Send,
  UserCheck,
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
  badsanierungDauerSeoIntro,
  badsanierungDauerSeoSections,
} from '../data/badsanierungDauerSeoContent';

const HERO_IMAGE = '/img/badsanierung-dauer-hero.webp';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Badsanierung Dauer Rhein-Main | Ablauf & Zeitplan';
const META_DESCRIPTION =
  'Wie lange dauert eine Badsanierung? Radex erklärt Ablauf, Bauzeit, Planung, Rückbau, Sanitär, Elektro, Trockenbau und Fertigstellung.';

function DauerCTA({ isHero = false, centered = false, showThird = false, primaryHref = '#kontakt' }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        Projektzeit einschätzen
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
    title: 'Klare Zeitplanung',
    desc: 'Realistische Bauzeiten statt unrealistischer Versprechen.',
    icon: Calendar,
  },
  {
    title: 'Koordinierte Abläufe',
    desc: 'Alle Gewerke arbeiten nach einem abgestimmten Zeitplan.',
    icon: Clock,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Professionelle Planung und fachgerechte Umsetzung.',
    icon: Award,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Zentrale Koordination während des gesamten Projekts.',
    icon: UserCheck,
  },
  {
    title: 'Transparente Bauphasen',
    desc: 'Jeder Arbeitsschritt ist nachvollziehbar geplant.',
    icon: ClipboardList,
  },
  {
    title: 'Rhein-Main-Gebiet',
    desc: 'Täglich im Einsatz für private Eigentümer.',
    icon: MapPin,
  },
];

const phaseCards = [
  {
    title: 'Planung & Vorbereitung',
    desc: 'Vor dem eigentlichen Baustart werden Aufmaß, Materialauswahl und Terminplanung abgeschlossen.',
    image: '/img/badsanierung-dauer-phase-planung.webp',
    imageAlt: 'Symbolbild: Planung und Vorbereitung einer Badsanierung',
  },
  {
    title: 'Demontage',
    desc: 'Alte Sanitäranlagen, Fliesen und Einrichtungsgegenstände werden fachgerecht entfernt.',
    image: '/img/badsanierung-dauer-phase-demontage.webp',
    imageAlt: 'Symbolbild: Demontage und Rückbau im Badezimmer',
  },
  {
    title: 'Sanitär & Elektro',
    desc: 'Leitungen, Anschlüsse und technische Installationen werden erneuert oder angepasst.',
    image: '/img/badsanierung-dauer-phase-sanitaer.webp',
    imageAlt: 'Symbolbild: Sanitär- und Elektroarbeiten auf der Baustelle',
  },
  {
    title: 'Fliesen & Oberflächen',
    desc: 'Nach den technischen Arbeiten folgen Abdichtung, Fliesenarbeiten und Oberflächengestaltung.',
    image: '/img/badsanierung-dauer-phase-fliesen.webp',
    imageAlt: 'Symbolbild: Fliesenarbeiten im Badezimmer',
  },
  {
    title: 'Montage',
    desc: 'Waschtisch, Dusche, WC, Armaturen und weitere Ausstattung werden montiert.',
    image: '/img/badsanierung-dauer-phase-montage.webp',
    imageAlt: 'Symbolbild: Montage von Sanitärobjekten',
  },
  {
    title: 'Abnahme',
    desc: 'Nach der gemeinsamen Endkontrolle wird das fertige Badezimmer an Sie übergeben.',
    image: '/img/badsanierung-dauer-phase-abnahme.webp',
    imageAlt: 'Symbolbild: Abnahme des fertigen Badezimmers',
  },
];

const timelineCards = [
  {
    title: 'Kleines Badezimmer',
    time: 'ca. 1–2 Wochen',
    desc: 'Überschaubare Arbeiten mit geringem Änderungsumfang und vorhandenen Anschlüssen.',
  },
  {
    title: 'Familienbad',
    time: 'ca. 2–3 Wochen',
    desc: 'Komplette Modernisierung mit neuen Leitungen, Fliesen und Sanitärobjekten.',
  },
  {
    title: 'Großes Badezimmer',
    time: 'ca. 3–4 Wochen',
    desc: 'Aufwendige Projekte mit individueller Planung, Sonderlösungen und umfangreicher Ausstattung.',
  },
];

const whyRadexCards = [
  {
    title: 'Realistische Zeitplanung',
    desc: 'Jedes Projekt erhält einen individuellen Ablaufplan statt pauschaler Zeitangaben.',
    icon: Calendar,
  },
  {
    title: 'Perfekte Koordination',
    desc: 'Alle beteiligten Gewerke werden zeitlich optimal aufeinander abgestimmt.',
    icon: GitBranch,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Fachgerechte Planung und professionelle Umsetzung aus einer Hand.',
    icon: Award,
  },
  {
    title: 'Persönlicher Ansprechpartner',
    desc: 'Während der gesamten Bauphase steht Ihnen ein fester Ansprechpartner zur Seite.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Anfrage',
    desc: 'Sie kontaktieren uns telefonisch, per Formular oder über WhatsApp.',
    icon: Phone,
  },
  {
    title: 'Terminplanung',
    desc: 'Gemeinsam vereinbaren wir den Besichtigungstermin und besprechen den gewünschten Ablauf.',
    icon: Calendar,
  },
  {
    title: 'Projektvorbereitung',
    desc: 'Materialien werden bestellt und alle beteiligten Gewerke zeitlich koordiniert.',
    icon: ClipboardList,
  },
  {
    title: 'Ausführung',
    desc: 'Die Arbeiten erfolgen nach einem abgestimmten Bauablauf mit möglichst kurzen Unterbrechungen.',
    icon: HardHat,
  },
  {
    title: 'Qualitätskontrolle',
    desc: 'Nach Abschluss aller Arbeiten prüfen wir sämtliche Details sorgfältig.',
    icon: SearchCheck,
  },
  {
    title: 'Fertigstellung',
    desc: 'Ihr neues Badezimmer wird gemeinsam mit Ihnen abgenommen und übergeben.',
    icon: CheckCircle2,
  },
];

const projectExamples = [
  {
    title: '5 m² Badezimmer',
    subtitle: 'Bauzeit: ca. 8 Arbeitstage',
    desc: 'Modernisierung mit neuer Dusche, Fliesen und Sanitärkeramik.',
    image: '/img/badsanierung-planen-rhein-main-radex.webp',
    imageAlt: 'Symbolbild: Modernisierung eines kleinen Badezimmers',
  },
  {
    title: '8 m² Familienbad',
    subtitle: 'Bauzeit: ca. 14 Arbeitstage',
    desc: 'Komplettsanierung inklusive neuer Leitungen und bodengleicher Dusche.',
    image: '/img/ablauf-badsanierung-rhein-main-radex.webp',
    imageAlt: 'Symbolbild: Komplettsanierung eines Familienbads',
  },
  {
    title: '12 m² Designbad',
    subtitle: 'Bauzeit: ca. 18–22 Arbeitstage',
    desc: 'Individuelle Planung mit Maßmöbeln, Designausstattung und umfangreichen Fliesenarbeiten.',
    image: '/img/fertiges-bad-nach-badsanierung-radex.webp',
    imageAlt: 'Symbolbild: Fertiggestelltes Designbad nach Badsanierung',
  },
];

const faqsData = [
  {
    q: 'Wie lange dauert eine komplette Badsanierung?',
    a: 'Je nach Umfang der Arbeiten dauert eine komplette Badsanierung häufig zwischen zwei und drei Wochen. Kleinere Projekte können schneller abgeschlossen werden, während umfangreiche Umbauten entsprechend mehr Zeit benötigen.',
  },
  {
    q: 'Welche Arbeiten nehmen die meiste Zeit in Anspruch?',
    a: 'Besonders Leitungsarbeiten, Abdichtungen, Fliesenarbeiten und notwendige Trocknungszeiten beeinflussen den gesamten Bauablauf. Eine gute Koordination hilft dabei, unnötige Verzögerungen zu vermeiden.',
  },
  {
    q: 'Kann ich mein Badezimmer während der Sanierung nutzen?',
    a: 'Während einer Komplettbadsanierung ist das Badezimmer in der Regel nur eingeschränkt oder gar nicht nutzbar. Gerne beraten wir Sie zu möglichen Übergangslösungen für die Bauzeit.',
  },
  {
    q: 'Was kann die Bauzeit verlängern?',
    a: 'Unerwartete Schäden, zusätzliche Arbeiten nach der Öffnung von Wänden oder Böden, Lieferzeiten bestimmter Produkte sowie individuelle Sonderwünsche können den Zeitplan beeinflussen.',
  },
  {
    q: 'Erhalte ich vor Beginn einen Terminplan?',
    a: 'Ja. Nach der Planung erhalten Sie einen abgestimmten Ablauf, damit Sie die einzelnen Bauphasen und den voraussichtlichen Fertigstellungstermin nachvollziehen können.',
  },
  {
    q: 'In welchen Städten führt Radex Badsanierungen durch?',
    a: 'Von Rödermark aus betreut Radex private Eigentümer und Modernisierungsprojekte im gesamten Rhein-Main-Gebiet.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH.',
  'Viele Kunden fragen uns, wie lange eine Badsanierung dauert. Eine pauschale Antwort gibt es nicht, denn jedes Badezimmer bringt andere Voraussetzungen mit. Raumgröße, technische Installationen, Materialverfügbarkeit und individuelle Wünsche beeinflussen den Zeitplan.',
  'Durch eine sorgfältige Vorbereitung und die abgestimmte Zusammenarbeit aller Gewerke schaffen wir die Grundlage für einen reibungslosen Ablauf. Unser Ziel ist es, Arbeiten effizient zu koordinieren und unnötige Wartezeiten so weit wie möglich zu vermeiden.',
  'Gerne erstellen wir für Ihr Projekt einen realistischen Zeitplan und beraten Sie persönlich. Senden Sie uns einfach Fotos Ihres Badezimmers oder vereinbaren Sie einen Termin mit unserem Team.',
];

const videoTrustPoints = [
  'Realistische Terminplanung',
  'Koordinierte Gewerke',
  'SHK-Meisterbetrieb',
  'Persönlicher Ansprechpartner',
];

const roomSizeOptions = [
  { id: 'bis5', label: 'Bis 5 m²', daysAdj: 0 },
  { id: '6bis8', label: '6 bis 8 m²', daysAdj: 1 },
  { id: '9bis12', label: '9 bis 12 m²', daysAdj: 2 },
  { id: 'ueber12', label: 'Über 12 m²', daysAdj: 4 },
];

const scopeOptions = [
  { id: 'teil', label: 'Teilmodernisierung', minDays: 5, maxDays: 10 },
  { id: 'komplett', label: 'Komplettbadsanierung', minDays: 10, maxDays: 15 },
  { id: 'grundriss', label: 'Bad mit Grundrissänderung', minDays: 15, maxDays: 25 },
];

const linesOptions = [
  { id: 'nein', label: 'Nein', daysAdj: 0 },
  { id: 'teilweise', label: 'Teilweise', daysAdj: 2 },
  { id: 'ja', label: 'Ja', daysAdj: 4 },
];

const extrasOptions = [
  { id: 'dusche', label: 'Bodengleiche Dusche', daysAdj: 1 },
  { id: 'fliesen', label: 'Großformatige Fliesen', daysAdj: 2 },
  { id: 'moebel', label: 'Maßmöbel', daysAdj: 0, note: true },
  { id: 'keine', label: 'Keine Zusatzleistungen', daysAdj: 0 },
];

const startOptions = [
  'Sofort',
  'Innerhalb der nächsten 3 Monate',
  'Innerhalb der nächsten 6 Monate',
  'Termin noch offen',
];

const groesseOptions = ['Bis 5 m²', '6 bis 8 m²', '9 bis 12 m²', 'Über 12 m²'];

function daysToWeeksLabel(minDays, maxDays) {
  const minW = Math.max(1, Math.round((minDays / 5) * 10) / 10);
  const maxW = Math.max(minW, Math.round((maxDays / 5) * 10) / 10);
  const fmt = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(1).replace('.', ','));
  if (Math.abs(minW - maxW) < 0.05) return `ca. ${fmt(minW)} Wochen`;
  return `ca. ${fmt(minW)} bis ${fmt(maxW)} Wochen`;
}

function DauerCalculator() {
  const [roomSize, setRoomSize] = useState('bis5');
  const [scope, setScope] = useState('teil');
  const [lines, setLines] = useState('nein');
  const [extras, setExtras] = useState([]);
  const [resultKey, setResultKey] = useState(0);

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

  const { label, hasMoebel } = useMemo(() => {
    const base = scopeOptions.find((o) => o.id === scope) || scopeOptions[0];
    const sizeAdj = roomSizeOptions.find((o) => o.id === roomSize)?.daysAdj || 0;
    const linesAdj = linesOptions.find((o) => o.id === lines)?.daysAdj || 0;
    const selectedExtras = extras.filter((id) => id !== 'keine');
    const extrasAdj = selectedExtras.reduce(
      (sum, id) => sum + (extrasOptions.find((o) => o.id === id)?.daysAdj || 0),
      0,
    );
    const moebel = selectedExtras.includes('moebel');
    const minDays = base.minDays + sizeAdj + linesAdj + extrasAdj;
    const maxDays = base.maxDays + sizeAdj + linesAdj + extrasAdj + (moebel ? 3 : 0);
    return { label: daysToWeeksLabel(minDays, maxDays), hasMoebel: moebel };
  }, [roomSize, scope, lines, extras]);

  useEffect(() => {
    setResultKey((k) => k + 1);
  }, [label]);

  return (
    <div className="br-bw-calculator br-dauer-calculator">
      <div className="br-dauer-calc-header">
        <h3>Bauzeiten-Rechner</h3>
        <p>Erste Orientierung zur voraussichtlichen Dauer Ihrer Badsanierung</p>
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
          <h3>Welche Sanierung planen Sie?</h3>
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
          <h3>Müssen Leitungen erneuert werden?</h3>
          <div className="br-bw-calc-options">
            {linesOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`br-bw-calc-btn${lines === opt.id ? ' is-active' : ''}`}
                onClick={() => setLines(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="br-bw-calc-question">
          <h3>Sind besondere Ausstattungen geplant?</h3>
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

        <div className="br-bw-calc-result" key={resultKey}>
          <h3>Ihre voraussichtliche Bauzeit</h3>
          <p className="br-bw-calc-range br-dauer-calc-range">{label}</p>
          {hasMoebel && (
            <p className="br-dauer-calc-extra-note">Maßmöbel: abhängig von Lieferzeit</p>
          )}
          <p className="br-bw-calc-note">
            Die Berechnung dient als erste Orientierung. Materialverfügbarkeit, Trocknungszeiten und individuelle
            Sonderwünsche können die tatsächliche Bauzeit beeinflussen. Nach einer Besichtigung erhalten Sie einen
            verbindlichen Projektzeitplan.
          </p>
          <a href="#kontakt" className="btn br-btn-orange br-dauer-calc-cta">
            Projektzeit einschätzen
          </a>
        </div>
      </div>
    </div>
  );
}

function DauerContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const plzOrt = form.plzOrt.value.trim();
    const start = form.start.value;
    const groesse = form.groesse.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Badsanierung Dauer Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Gewünschter Start: ${start}`,
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
            <h3>Telefonische Beratung</h3>
            <p>Sie möchten den Zeitplan Ihrer Badsanierung persönlich besprechen?</p>
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
            <h3>Fotos per WhatsApp</h3>
            <p>
              Senden Sie uns Fotos Ihres Badezimmers und erhalten Sie eine erste Einschätzung zur möglichen Bauzeit.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              Fotos senden. Erste Einschätzung erhalten.
            </a>
          </div>

          <div className="br-ablauf-contact-card">
            <div className="br-ablauf-contact-icon">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <h3>E-Mail-Anfrage</h3>
            <p>Schildern Sie uns Ihr Projekt bequem per E-Mail.</p>
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
            <h2 className="br-section-title">Badsanierung jetzt planen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt und teilen Sie uns mit, wann Sie Ihre Badsanierung durchführen möchten. Wir
              erstellen eine realistische Zeitplanung und beraten Sie persönlich.
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
                <span>Wann soll Ihre Badsanierung beginnen?</span>
                <select name="start" required defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {startOptions.map((opt) => (
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
                placeholder="Beschreiben Sie Ihr Badezimmer, den gewünschten Umfang der Arbeiten und Ihren bevorzugten Starttermin."
              />
            </label>
            <label className="br-input-group">
              <span>Fotos hochladen</span>
              <input type="file" name="fotos" accept="image/*" multiple />
              <small>
                Laden Sie Fotos Ihres Badezimmers hoch. Das erleichtert eine erste Einschätzung von Bauzeit und
                Arbeitsumfang.
              </small>
            </label>
            <button type="submit" className="btn br-btn-orange br-ablauf-submit">
              Projektzeit einschätzen <Send size={18} />
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

export default function BadsanierungDauerLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (badsanierungDauerSeoSections.some((s) => s.id === hash)) {
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
    path: '/badsanierung-dauer',
    image: '/img/badsanierung-dauer-zeitplan-radex.webp',
    jsonLd: [
      buildServiceSchema({
        name: 'Badsanierung Dauer',
        description: META_DESCRIPTION,
        path: '/badsanierung-dauer',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badsanierung-dauer-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Badsanierung Dauer</p>
            <h1 className="br-hero-title">
              Wie lange dauert eine Badsanierung
              <br />
              <span>im Rhein-Main-Gebiet?</span>
            </h1>
            <p className="br-hero-lead">Planungssicherheit. Transparenz. Termintreue. Effiziente Umsetzung.</p>
            <p className="br-hero-text">
              Die Dauer einer Badsanierung hängt vom Umfang der Arbeiten, dem Zustand des Badezimmers und den
              gewünschten Ausstattungsmerkmalen ab. Mit einer strukturierten Planung und einer abgestimmten Koordination
              aller Gewerke sorgt Radex für einen reibungslosen Ablauf und realistische Zeitpläne.
            </p>
            <DauerCTA isHero showThird primaryHref="#zeitrechner" />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Projektmanager bespricht den Zeitplan einer Badsanierung mit dem Eigentümer"
          title="Badsanierung Dauer | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Welche Faktoren beeinflussen die Dauer einer Badsanierung?">
        Nicht jedes Badezimmer lässt sich in der gleichen Zeit modernisieren. Raumgröße, Leitungen, Trocknungszeiten,
        Materialverfügbarkeit und individuelle Wünsche wirken sich direkt auf den Zeitplan aus. Deshalb erstellen wir für
        jedes Projekt eine realistische Terminplanung.
      </SectionTransition>

      {/* 3 Bauphasen */}
      <section id="bauphasen" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Wie setzt sich die Dauer einer Badsanierung zusammen?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine Badsanierung besteht aus mehreren aufeinander abgestimmten Arbeitsschritten. Erst wenn alle Gewerke
              sauber koordiniert werden, lassen sich unnötige Wartezeiten vermeiden und Termine zuverlässig einhalten. Je
              nach Umfang des Projekts unterscheiden sich die einzelnen Bauphasen in ihrer Dauer.
            </p>
          </div>
          <ImageCardGrid cards={phaseCards} />
        </div>
      </section>

      <SectionTransition title="Typische Zeiträume einer Badsanierung">
        Jede Sanierung verläuft individuell. Die folgenden Zeiträume dienen als Orientierung und zeigen typische
        Projektlaufzeiten unterschiedlicher Badezimmergrößen.
      </SectionTransition>

      {/* 4 Zeitbeispiele */}
      <section id="zeitbeispiele" className="br-section">
        <div className="container">
          <div className="br-costs-grid br-costs-grid--three br-dauer-timeline-grid">
            {timelineCards.map((card) => (
              <div key={card.title} className="br-cost-card br-dauer-timeline-card" style={{ cursor: 'default' }}>
                <div className="br-cost-header">
                  <h3>{card.title}</h3>
                  <p className="br-cost-price">
                    <span>{card.time}</span>
                  </p>
                </div>
                <p className="br-cost-desc">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="br-bw-price-note">
            Die genannten Zeiträume dienen als Orientierung. Materialverfügbarkeit, Trocknungszeiten und individuelle
            Sonderwünsche können die tatsächliche Bauzeit beeinflussen.
          </p>
        </div>
      </section>

      <SectionTransition title="Gut geplant bedeutet weniger Wartezeit">
        Durch eine frühzeitige Planung und die koordinierte Zusammenarbeit aller Gewerke lassen sich viele Verzögerungen
        vermeiden. Im nächsten Abschnitt erfahren Sie, warum Eigentümer im Rhein-Main-Gebiet bei der Terminplanung auf
        Radex vertrauen.
      </SectionTransition>
      <div className="container br-ablauf-cta-wrap" style={{ marginBottom: '48px' }}>
        <DauerCTA centered primaryHref="#zeitrechner" />
      </div>

      {/* 5 Warum Radex */}
      <section id="warum-radex" className="br-section br-bg-light br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex bei der Terminplanung überzeugt</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine erfolgreiche Badsanierung beginnt lange vor dem ersten Arbeitstag. Entscheidend sind eine realistische
              Terminplanung, die Abstimmung aller Gewerke und eine zuverlässige Baukoordination. Als SHK-Meisterbetrieb
              plant Radex jeden Arbeitsschritt sorgfältig, damit Ihr Projekt möglichst reibungslos umgesetzt werden kann.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Bernd Knoop, SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH, erklärt im Video, welche Faktoren
        den Zeitplan einer Badsanierung beeinflussen und wie eine strukturierte Projektplanung Verzögerungen vermeiden
        kann.
      </SectionTransition>

      {/* 6 Video */}
      <section id="video" className="br-section br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="br-ablauf-video-frame">
            <video
              src={testVideo}
              controls
              playsInline
              preload="none"
              poster={VIDEO_POSTER}
              title="Bernd Knoop – Badsanierung Dauer"
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
            <DauerCTA centered primaryHref="#zeitrechner" />
          </div>

          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Zeitplanung / Ablauf */}
      <section id="zeitplanung" className="br-section br-bg-light br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So entsteht Ihr persönlicher Zeitplan</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jede Badsanierung beginnt mit einer individuellen Terminplanung. Bereits vor dem Baustart werden
              Materialverfügbarkeit, beteiligte Gewerke und die einzelnen Arbeitsschritte aufeinander abgestimmt. Dadurch
              entsteht ein realistischer Zeitplan, der Ihnen eine verlässliche Orientierung für Ihr Projekt bietet.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Schätzen Sie die voraussichtliche Bauzeit">
        Mit wenigen Angaben erhalten Sie eine erste Orientierung, wie lange Ihr Sanierungsprojekt voraussichtlich dauern
        kann. Die Berechnung ersetzt keine Detailplanung, vermittelt jedoch eine realistische Einschätzung.
      </SectionTransition>

      {/* 8 Bauzeiten-Rechner */}
      <section id="zeitrechner" className="br-section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <DauerCalculator />

          <div className="br-ablauf-cta-box br-bw-cta-box">
            <h2 className="br-section-title">Sie möchten wissen, wie lange Ihre Badsanierung dauern wird?</h2>
            <p className="br-section-subtitle">
              Senden Sie uns Fotos Ihres Badezimmers oder vereinbaren Sie einen persönlichen Beratungstermin. Wir
              erstellen eine realistische Zeitplanung für Ihr individuelles Projekt.
            </p>
            <DauerCTA centered showThird primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Praxisbeispiele aus dem Rhein-Main-Gebiet">
        Die folgenden Beispiele zeigen typische Bauzeiten vergleichbarer Projekte. Sie vermitteln einen Eindruck davon,
        wie unterschiedlich sich Umfang und Dauer einer Badsanierung entwickeln können.
      </SectionTransition>

      {/* 9 Praxisbeispiele */}
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
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#kontakt" className="btn br-btn-orange">
              Jetzt persönliche Zeitplanung erhalten
            </a>
          </div>
        </div>
      </section>

      {/* 10 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zur Dauer einer Badsanierung"
        intro="Viele Eigentümer möchten bereits vor Beginn der Arbeiten wissen, wie lange sie auf ihr neues Badezimmer warten müssen. Hier beantworten wir die häufigsten Fragen rund um Bauzeiten, Terminplanung und den Ablauf einer professionellen Badsanierung."
      />

      <SectionTransition title="Planen Sie Ihre Badsanierung mit einem realistischen Zeitrahmen">
        Jedes Badezimmer ist einzigartig. Deshalb erstellen wir für Ihr Projekt eine individuelle Zeitplanung und
        begleiten Sie von der ersten Beratung bis zur fertigen Übergabe.
      </SectionTransition>

      {/* 11 Kontakt */}
      <DauerContactSection />

      {/* 12 Weitere Informationen */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-6">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '20px' }}>
              Im folgenden Bereich finden Sie ausführliche Informationen rund um Bauzeiten, einzelne Bauphasen,
              Terminplanung, Trocknungszeiten und weitere Faktoren, die den zeitlichen Ablauf einer Badsanierung
              beeinflussen.
            </p>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
            >
              <h2 className="br-section-title">Weitere Informationen zur Dauer einer Badsanierung</h2>
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
            aria-labelledby="br-dauer-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="br-dauer-seo-panel-title">Weitere Informationen zur Dauer einer Badsanierung</h2>
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
                  Hier finden Sie ausführliche Informationen rund um die Dauer einer Badsanierung. Erfahren Sie mehr über
                  einzelne Bauphasen, typische Bauzeiten, Trocknungszeiten, Terminplanung, Einflussfaktoren und
                  praktische Hinweise für eine realistische Projektplanung im Rhein-Main-Gebiet.
                </p>
                {badsanierungDauerSeoIntro}
              </div>

              {badsanierungDauerSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Projektzeit einschätzen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
