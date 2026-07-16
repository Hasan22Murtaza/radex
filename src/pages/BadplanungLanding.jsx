import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  FolderOpen,
  Home,
  Lightbulb,
  Mail,
  MessageSquare,
  Palette,
  Phone,
  Ruler,
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
  badplanungSeoIntro,
  badplanungSeoSections,
} from '../data/badplanungSeoContent';

const HERO_IMAGE = '/img/badplanung-hero.png';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Badplanung Rhein-Main | Neues Bad richtig planen';
const META_DESCRIPTION =
  'Badplanung im Rhein-Main-Gebiet: Radex plant Badezimmer mit Grundriss, Dusche, Sanitärtechnik, Licht, Materialien und klarer Umsetzung.';

function BadplanungCTA({ isHero = false, centered = false, showThird = false, primaryHref = '#kontakt' }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        Bad planen
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
    title: 'Individuelle Planung',
    desc: 'Jedes Badezimmer wird auf Ihre Wünsche und Ihre Immobilie abgestimmt.',
    icon: ClipboardList,
  },
  {
    title: 'Materialberatung',
    desc: 'Fliesen, Armaturen und Badmöbel werden gemeinsam ausgewählt.',
    icon: Palette,
  },
  {
    title: 'Optimale Raumnutzung',
    desc: 'Jeder Quadratmeter wird sinnvoll geplant und genutzt.',
    icon: Ruler,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Fachgerechte Planung und Umsetzung aus einer Hand.',
    icon: Award,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Langjährige Erfahrung in der Badplanung und Badsanierung.',
    icon: FolderOpen,
  },
  {
    title: 'Durchdachte Lösungen',
    desc: 'Technik, Komfort und Design werden optimal kombiniert.',
    icon: Lightbulb,
  },
];

const bestandteilCards = [
  {
    title: 'Raumaufteilung',
    desc: 'Dusche, Badewanne, Waschtisch und WC werden optimal im vorhandenen Grundriss angeordnet.',
    image: '/img/badplanung-raumaufteilung.png',
    imageAlt: 'Symbolbild: Badgrundriss und Raumaufteilung auf dem Planungstisch',
  },
  {
    title: 'Materialauswahl',
    desc: 'Gemeinsam wählen wir Fliesen, Armaturen, Badmöbel und Oberflächen passend zu Ihrem Stil aus.',
    image: '/img/badplanung-materialauswahl.png',
    imageAlt: 'Symbolbild: Materialberatung mit Fliesen- und Armaturenmustern',
  },
  {
    title: 'Lichtkonzept',
    desc: 'Die richtige Kombination aus Tageslicht, Spiegelbeleuchtung und indirektem Licht sorgt für eine angenehme Atmosphäre.',
    image: '/img/badplanung-lichtkonzept.png',
    imageAlt: 'Symbolbild: modernes Badezimmer mit beleuchtetem Spiegel und indirektem Licht',
  },
  {
    title: 'Sanitärtechnik',
    desc: 'Leitungen, Anschlüsse und technische Details werden bereits in der Planungsphase berücksichtigt.',
    image: '/img/badplanung-sanitaertechnik.png',
    imageAlt: 'Symbolbild: Sanitärfachkraft prüft Installationsplan',
  },
  {
    title: 'Stauraum',
    desc: 'Badmöbel und Schränke werden so geplant, dass ausreichend Stauraum entsteht, ohne den Raum zu überladen.',
    image: '/img/badplanung-stauraum.png',
    imageAlt: 'Symbolbild: moderne Badmöbel mit schwebendem Waschtisch und Hochschrank',
  },
  {
    title: 'Komfort & Ergonomie',
    desc: 'Bewegungsflächen, Bedienkomfort und Alltagstauglichkeit stehen bei jeder Planung im Mittelpunkt.',
    image: '/img/badplanung-komfort.png',
    imageAlt: 'Symbolbild: großzügiges Badkonzept mit bodengleicher Dusche',
  },
];

const planningPhaseCards = [
  {
    title: 'Beratung',
    desc: 'Gemeinsame Analyse Ihrer Wünsche und Anforderungen.',
    icon: Phone,
  },
  {
    title: 'Entwurf',
    desc: 'Erstellung eines individuellen Badkonzeptes.',
    icon: ClipboardList,
  },
  {
    title: 'Materialauswahl',
    desc: 'Auswahl aller Produkte, Farben und Oberflächen.',
    icon: Palette,
  },
  {
    title: 'Ausführungsplanung',
    desc: 'Vorbereitung aller technischen und handwerklichen Arbeiten.',
    icon: Ruler,
  },
];

const whyRadexCards = [
  {
    title: 'Individuelles Badkonzept',
    desc: 'Jedes Badezimmer wird exakt auf Ihre Wünsche und die vorhandene Raumsituation abgestimmt.',
    icon: ClipboardList,
  },
  {
    title: 'Material- und Designberatung',
    desc: 'Gemeinsam wählen wir Fliesen, Armaturen, Farben und Badmöbel passend zu Ihrem Stil aus.',
    icon: Palette,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Technische Planung und Ausführung erfolgen unter fachlicher Leitung eines SHK-Meisters.',
    icon: Award,
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Von der ersten Idee bis zur fertigen Umsetzung begleitet Sie ein fester Ansprechpartner.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Erstberatung',
    desc: 'Sie schildern uns Ihre Vorstellungen und Ziele für Ihr neues Badezimmer.',
    icon: Phone,
  },
  {
    title: 'Aufmaß vor Ort',
    desc: 'Wir erfassen alle Maße, Anschlüsse und technischen Gegebenheiten Ihres Badezimmers.',
    icon: Home,
  },
  {
    title: 'Badkonzept',
    desc: 'Wir entwickeln eine individuelle Raumaufteilung inklusive Sanitärtechnik und Ausstattung.',
    icon: ClipboardList,
  },
  {
    title: 'Materialauswahl',
    desc: 'Fliesen, Armaturen, Badmöbel und Farben werden gemeinsam abgestimmt.',
    icon: Palette,
  },
  {
    title: 'Ausführungsplanung',
    desc: 'Alle Details werden dokumentiert und dienen als Grundlage für die spätere Umsetzung.',
    icon: ClipboardCheck,
  },
  {
    title: 'Projektfreigabe',
    desc: 'Nach Ihrer Freigabe beginnen Terminplanung und Vorbereitung der Badsanierung.',
    icon: CheckCircle2,
  },
];

const projectExamples = [
  {
    title: 'Kleines Stadbad',
    subtitle: '5 m²',
    desc: 'Optimierte Raumaufteilung mit bodengleicher Dusche, wandhängendem WC und maßgefertigtem Waschtisch.',
    image: '/img/badplanung-projekt-stadbad.png',
    imageAlt: 'Symbolbild: kleines Stadbad mit optimierter Raumaufteilung',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
  {
    title: 'Familienbad',
    subtitle: '8 m²',
    desc: 'Großzügiges Badkonzept mit Doppelwaschtisch, Walk-in-Dusche und zusätzlichem Stauraum.',
    image: '/img/badplanung-projekt-familienbad.png',
    imageAlt: 'Symbolbild: Familienbad mit Doppelwaschtisch und Walk-in-Dusche',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
  {
    title: 'Komfortbad',
    subtitle: '12 m²',
    desc: 'Individuelle Planung mit Designmöbeln, freistehender Badewanne und hochwertigem Lichtkonzept.',
    image: '/img/badplanung-projekt-komfortbad.png',
    imageAlt: 'Symbolbild: Komfortbad mit freistehender Badewanne und Lichtkonzept',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
];

const faqsData = [
  {
    q: 'Warum ist eine professionelle Badplanung sinnvoll?',
    a: 'Eine gute Planung verhindert spätere Änderungen während der Bauphase und sorgt dafür, dass Raumaufteilung, Technik, Materialien und Budget optimal aufeinander abgestimmt werden.',
  },
  {
    q: 'Kann ich meine eigenen Ideen einbringen?',
    a: 'Selbstverständlich. Ihre Wünsche und Vorstellungen bilden die Grundlage der gesamten Planung. Gemeinsam entwickeln wir daraus ein individuelles Badkonzept.',
  },
  {
    q: 'Wann beginnt die eigentliche Badplanung?',
    a: 'Bereits nach dem ersten Beratungsgespräch und einer Besichtigung beginnen wir mit der Analyse Ihres Badezimmers und der Entwicklung eines individuellen Planungskonzeptes.',
  },
  {
    q: 'Werden auch Materialien gemeinsam ausgewählt?',
    a: 'Ja. Fliesen, Armaturen, Badmöbel, Farben und weitere Ausstattungsdetails werden gemeinsam abgestimmt, damit ein harmonisches Gesamtkonzept entsteht.',
  },
  {
    q: 'Kann auch ein kleines Badezimmer optimal geplant werden?',
    a: 'Ja. Gerade kleine Badezimmer profitieren besonders von einer durchdachten Raumplanung und intelligenten Stauraumlösungen.',
  },
  {
    q: 'In welchen Regionen bietet Radex Badplanungen an?',
    a: 'Von Rödermark aus begleitet Radex private Eigentümer im gesamten Rhein-Main-Gebiet – von der ersten Planung bis zur fertigen Badsanierung.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH.',
  'Eine professionelle Badplanung ist die Grundlage jeder erfolgreichen Badsanierung. Bereits vor Beginn der Arbeiten legen wir gemeinsam fest, wie Ihr neues Badezimmer aussehen und funktionieren soll.',
  'Dabei berücksichtigen wir die vorhandene Raumgröße, die technischen Voraussetzungen, Ihre persönlichen Wünsche sowie eine sinnvolle Auswahl an Materialien und Ausstattung. So entsteht ein Badezimmer, das langfristig Freude bereitet und optimal zu Ihrem Alltag passt.',
  'Senden Sie uns gerne Fotos Ihres Badezimmers oder vereinbaren Sie einen persönlichen Beratungstermin. Gemeinsam entwickeln wir ein individuelles Badkonzept für Ihr Zuhause.',
];

const videoTrustPoints = [
  'Individuelle Badplanung',
  'Optimale Raumnutzung',
  'SHK-Meisterbetrieb',
  'Persönliche Beratung',
];

const roomSizeOptions = [
  { id: 'bis5', label: 'Bis 5 m²' },
  { id: '6bis8', label: '6 bis 8 m²' },
  { id: '9bis12', label: '9 bis 12 m²' },
  { id: 'ueber12', label: 'Über 12 m²' },
];

const ausstattungOptions = [
  { id: 'dusche', label: 'Dusche' },
  { id: 'wanne', label: 'Badewanne' },
  { id: 'dusche-wanne', label: 'Dusche & Badewanne' },
  { id: 'doppel', label: 'Doppelwaschtisch' },
  { id: 'gaeste', label: 'Gäste-WC' },
  { id: 'bodengleich', label: 'Bodengleiche Dusche' },
];

const stilOptions = [
  { id: 'modern', label: 'Modern' },
  { id: 'zeitlos', label: 'Zeitlos' },
  { id: 'minimal', label: 'Minimalistisch' },
  { id: 'natuerlich', label: 'Natürlich' },
  { id: 'klassisch', label: 'Klassisch' },
  { id: 'design', label: 'Design' },
];

const prioritaetOptions = [
  { id: 'design', label: 'Design' },
  { id: 'komfort', label: 'Komfort' },
  { id: 'barrierefrei', label: 'Barrierefreiheit' },
  { id: 'familie', label: 'Familienbad' },
  { id: 'budget', label: 'Budget' },
];

const planungOptions = [
  'Komplettbadsanierung',
  'Badmodernisierung',
  'Gäste-WC',
  'Barrierefreies Bad',
  'Kleines Badezimmer',
  'Ich bin noch unsicher',
];

const startOptions = ['Sofort', 'Innerhalb von 3 Monaten', 'Innerhalb von 6 Monaten', 'Termin noch offen'];

function Badplaner() {
  const [roomSize, setRoomSize] = useState('6bis8');
  const [ausstattung, setAusstattung] = useState(['dusche']);
  const [stil, setStil] = useState('modern');
  const [prioritaet, setPrioritaet] = useState('komfort');

  const toggleAusstattung = (id) => {
    setAusstattung((prev) => {
      if (prev.includes(id)) {
        return prev.length === 1 ? prev : prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const recommendation = useMemo(() => {
    const sizeLabel = roomSizeOptions.find((o) => o.id === roomSize)?.label || '';
    const stilLabel = stilOptions.find((o) => o.id === stil)?.label || '';
    const prioLabel = prioritaetOptions.find((o) => o.id === prioritaet)?.label || '';
    const selectedFit = ausstattung
      .map((id) => ausstattungOptions.find((o) => o.id === id)?.label)
      .filter(Boolean);

    let raumaufteilung = 'Kompakte, klar zonierte Anordnung mit Fokus auf Bewegungsflächen.';
    if (roomSize === 'bis5') {
      raumaufteilung = 'Optimierte Kleinstbad-Planung: bodengleiche Dusche, wandhängendes WC und platzsparender Waschtisch.';
    } else if (roomSize === '6bis8') {
      raumaufteilung = 'Effiziente Raumaufteilung mit klar getrennten Funktionszonen für Dusche, Waschtisch und WC.';
    } else if (roomSize === '9bis12') {
      raumaufteilung = 'Großzügige Zonierung mit ausreichend Bewegungsfläche und optionalem Doppelwaschtisch.';
    } else if (roomSize === 'ueber12') {
      raumaufteilung = 'Komfortorientierte Raumaufteilung mit großzügigen Bewegungsflächen und Designspielraum.';
    }

    if (prioritaet === 'barrierefrei') {
      raumaufteilung =
        'Barrierearme Planung mit bodengleichem Zugang, ausreichend Bewegungsfläche und klarer Bedienhöhe.';
    } else if (prioritaet === 'familie') {
      raumaufteilung = 'Familiengeeignete Raumaufteilung mit paralleler Nutzung und zusätzlichem Stauraum.';
    }

    return {
      raumaufteilung,
      ausstattung: selectedFit.length ? selectedFit.join(', ') : 'Noch keine Ausstattung gewählt',
      stil: `${stilLabel} mit Fokus auf ${prioLabel.toLowerCase()}`,
      sizeLabel,
    };
  }, [roomSize, ausstattung, stil, prioritaet]);

  return (
    <div className="br-bw-calculator br-badplaner">
      <div className="br-badplaner-header">
        <h3>Online-Badplaner</h3>
        <p>Erste Orientierung für Raumaufteilung, Ausstattung und Stil – live und unverbindlich.</p>
      </div>

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
        <h3>Welche Ausstattung wünschen Sie?</h3>
        <div className="br-bw-calc-options">
          {ausstattungOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`br-bw-calc-btn${ausstattung.includes(opt.id) ? ' is-active' : ''}`}
              onClick={() => toggleAusstattung(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-bw-calc-question">
        <h3>Welcher Stil gefällt Ihnen?</h3>
        <div className="br-bw-calc-options">
          {stilOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`br-bw-calc-btn${stil === opt.id ? ' is-active' : ''}`}
              onClick={() => setStil(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-bw-calc-question">
        <h3>Welche Priorität hat Ihr Projekt?</h3>
        <div className="br-bw-calc-options">
          {prioritaetOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`br-bw-calc-btn${prioritaet === opt.id ? ' is-active' : ''}`}
              onClick={() => setPrioritaet(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="br-bw-calc-result br-badplaner-result">
        <h3>Ihre persönliche Planungsempfehlung</h3>
        <ul className="br-badplaner-result-list">
          <li>
            <strong>Empfohlene Raumaufteilung:</strong> {recommendation.raumaufteilung}
          </li>
          <li>
            <strong>Empfohlene Ausstattung:</strong> {recommendation.ausstattung}
          </li>
          <li>
            <strong>Passende Stilrichtung:</strong> {recommendation.stil}
          </li>
          <li>
            <strong>Hinweis:</strong> Für {recommendation.sizeLabel} empfehlen wir eine persönliche Beratung vor Ort.
          </li>
        </ul>
        <p className="br-bw-calc-note">
          Diese Planung dient als erste Orientierung. Im persönlichen Beratungsgespräch entwickeln wir gemeinsam ein
          individuelles Badkonzept, das exakt zu Ihrer Immobilie und Ihren Anforderungen passt.
        </p>
        <div className="br-ablauf-cta-wrap" style={{ marginTop: '20px' }}>
          <a href="#kontakt" className="btn br-btn-orange">
            Bad planen
          </a>
        </div>
      </div>
    </div>
  );
}

function BadplanungContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const plzOrt = form.plzOrt.value.trim();
    const planung = form.planung.value;
    const start = form.start.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Badplanung Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Welche Planung wünschen Sie?: ${planung}`,
      `Wann soll Ihr Projekt beginnen?: ${start}`,
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
            <p>Sprechen Sie direkt mit unserem Team über Ihre zukünftige Badplanung.</p>
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
            <p>Senden Sie uns Fotos oder Grundrisse Ihres Badezimmers und erhalten Sie eine erste Planungseinschätzung.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              Fotos senden. Erste Einschätzung erhalten.
            </a>
          </div>

          <div className="br-ablauf-contact-card">
            <div className="br-ablauf-contact-icon">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <h3>E-Mail-Anfrage</h3>
            <p>Übermitteln Sie uns Ihre Ideen und Wünsche bequem per E-Mail.</p>
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
            <h2 className="br-section-title">Badplanung anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt möglichst genau. Gemeinsam entwickeln wir ein individuelles Badkonzept und
              begleiten Sie bis zur fertigen Umsetzung.
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
                <span>Welche Planung wünschen Sie?</span>
                <select name="planung" required defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {planungOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              <label className="br-input-group">
                <span>Wann soll Ihr Projekt beginnen?</span>
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
            </div>
            <label className="br-input-group">
              <span>Projektbeschreibung *</span>
              <textarea
                name="nachricht"
                rows={5}
                required
                placeholder="Beschreiben Sie Ihr Badezimmer, Ihre Wünsche und Ihre Vorstellungen möglichst genau."
              />
            </label>
            <label className="br-input-group">
              <span>Fotos oder Grundrisse hochladen</span>
              <input type="file" name="fotos" accept="image/*,.pdf" multiple />
              <small>
                Laden Sie Fotos oder Grundrisse Ihres Badezimmers hoch. Dadurch können wir Ihre Planung bereits im
                Vorfeld besser vorbereiten.
              </small>
            </label>
            <button type="submit" className="btn br-btn-orange br-ablauf-submit">
              Badplanung starten <Send size={18} />
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

export default function BadplanungLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (badplanungSeoSections.some((s) => s.id === hash)) {
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
    path: '/badplanung',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Badplanung',
        description: META_DESCRIPTION,
        path: '/badplanung',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badplanung-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Badplanung</p>
            <h1 className="br-hero-title">
              Professionelle Badplanung im
              <br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">Planung. Sicherheit. Individuelle Lösungen. Perfekte Vorbereitung.</p>
            <p className="br-hero-text">
              Eine gute Badplanung bildet die Grundlage für eine erfolgreiche Badsanierung. Raumaufteilung, Technik,
              Materialien und Design werden bereits vor Beginn der Arbeiten sorgfältig aufeinander abgestimmt. So
              entstehen Badezimmer, die funktional, langlebig und perfekt auf Ihre Wünsche abgestimmt sind.
            </p>
            <BadplanungCTA isHero showThird primaryHref="#kontakt" />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Professionelle Badplanung mit Grundriss und Materialberatung"
          title="Badplanung | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Warum ist eine professionelle Badplanung so wichtig?">
        Eine sorgfältige Planung verhindert spätere Änderungen auf der Baustelle, verbessert den Bauablauf und sorgt
        dafür, dass Design, Funktion und Budget optimal zusammenpassen. Bereits vor dem ersten Handgriff werden alle
        wichtigen Entscheidungen getroffen, damit die spätere Umsetzung reibungslos erfolgen kann.
      </SectionTransition>

      {/* 3 Planungsbestandteile */}
      <section id="bestandteile" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Die wichtigsten Bestandteile einer professionellen Badplanung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine durchdachte Badplanung berücksichtigt nicht nur die Optik, sondern auch Funktionalität,
              Bewegungsfreiheit, technische Voraussetzungen und die spätere Nutzung. Je besser die Planung, desto
              reibungsloser verläuft die spätere Umsetzung.
            </p>
          </div>
          <ImageCardGrid cards={bestandteilCards} />
        </div>
      </section>

      <SectionTransition title="Von der Idee zum fertigen Badezimmer">
        Eine gute Badplanung verbindet Ihre Wünsche mit den technischen Möglichkeiten Ihrer Immobilie. Bereits vor
        Baubeginn entsteht ein klares Konzept, das später als Grundlage für die gesamte Umsetzung dient.
      </SectionTransition>

      {/* 4 Planungsphasen */}
      <section id="planungsphasen" className="br-section br-bw-options-section br-badplanung-phases">
        <div className="container">
          <PremiumIconCards cards={planningPhaseCards} largeIcons />
          <div className="br-ablauf-cta-wrap">
            <BadplanungCTA centered primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Eigentümer ihre Badplanung Radex anvertrauen">
        Im nächsten Abschnitt erfahren Sie, warum eine professionelle Badplanung durch einen erfahrenen SHK-Meisterbetrieb
        den Grundstein für eine erfolgreiche und langlebige Badsanierung legt.
      </SectionTransition>

      {/* 5 Warum Radex */}
      <section id="warum-radex" className="br-section br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex bei der Badplanung überzeugt</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine gute Badplanung berücksichtigt weit mehr als die spätere Optik. Raumaufteilung, Sanitärtechnik,
              Materialien, Licht und Alltagstauglichkeit müssen perfekt aufeinander abgestimmt werden. Als
              SHK-Meisterbetrieb entwickelt Radex individuelle Badkonzepte, die Funktion, Design und Budget sinnvoll
              miteinander verbinden.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Bernd Knoop, SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH, erklärt im Video, warum eine
        professionelle Badplanung Zeit, Kosten und spätere Änderungen auf der Baustelle vermeiden kann.
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
              title="Bernd Knoop – Badplanung"
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
            <BadplanungCTA centered primaryHref="#kontakt" />
          </div>

          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition title="So entsteht Ihre individuelle Badplanung">
        Von der ersten Idee bis zur fertigen Ausführungsplanung begleiten wir Sie Schritt für Schritt. Dadurch entsteht
        ein durchdachtes Gesamtkonzept, das als Grundlage für eine reibungslose Umsetzung dient.
      </SectionTransition>

      {/* 7 Planungsablauf */}
      <section id="ablauf" className="br-section br-bg-light br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So entsteht Ihre individuelle Badplanung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine erfolgreiche Badplanung beginnt mit einer gründlichen Analyse Ihrer Wünsche und der vorhandenen
              Raumsituation. Anschließend entwickeln wir ein individuelles Konzept, das Funktionalität, Design und
              Technik optimal miteinander verbindet.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Planen Sie Ihr Badezimmer online">
        Mit unserem Badplaner erhalten Sie eine erste Orientierung für Raumaufteilung, Ausstattung und mögliche
        Gestaltungsvarianten. Die digitale Planung ersetzt keine persönliche Beratung, erleichtert jedoch die
        Vorbereitung Ihres Projekts.
      </SectionTransition>

      {/* 8 Badplaner */}
      <section id="badplaner" className="br-section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <Badplaner />

          <div className="br-ablauf-cta-box br-bw-cta-box">
            <h2 className="br-section-title">Lassen Sie Ihr Badezimmer professionell planen</h2>
            <p className="br-section-subtitle">
              Senden Sie uns Fotos oder Grundrisse Ihres Badezimmers. Gemeinsam entwickeln wir ein individuelles Konzept
              für Ihre zukünftige Badsanierung.
            </p>
            <BadplanungCTA centered showThird primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Planungsbeispiele aus dem Rhein-Main-Gebiet">
        Die folgenden Beispiele zeigen unterschiedliche Badkonzepte, die gemeinsam mit Eigentümern geplant und
        anschließend umgesetzt wurden. Sie dienen als Inspiration für Ihre eigene Badplanung.
      </SectionTransition>

      {/* 9 Planungsbeispiele */}
      <section id="beispiele" className="br-section br-ablauf-examples-section">
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
            <a href="#kontakt" className="btn br-btn-orange">
              Jetzt persönliche Badplanung starten
            </a>
          </div>
        </div>
      </section>

      <SectionTransition title="Häufige Fragen zur Badplanung">
        Im nächsten Abschnitt beantworten wir häufig gestellte Fragen rund um Planung, Raumaufteilung, Materialien,
        Ablauf und Vorbereitung einer professionellen Badplanung.
      </SectionTransition>

      {/* 10 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zur Badplanung"
        intro="Eine professionelle Badplanung wirft häufig Fragen auf. Hier beantworten wir die wichtigsten Themen rund um Raumaufteilung, Materialien, Planungsschritte und die Vorbereitung Ihrer zukünftigen Badsanierung."
      />

      <SectionTransition title="Lassen Sie uns Ihr neues Badezimmer gemeinsam planen">
        Jede erfolgreiche Badsanierung beginnt mit einer guten Planung. Gemeinsam entwickeln wir ein individuelles
        Konzept, das perfekt zu Ihrer Immobilie, Ihren Wünschen und Ihrem Budget passt.
      </SectionTransition>

      {/* 11 Kontakt */}
      <BadplanungContactSection />

      {/* 12 Weitere Informationen */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-6">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '20px' }}>
              Im folgenden Bereich finden Sie ausführliche Informationen rund um Grundrissplanung, Raumaufteilung,
              Materialien, Technik, Lichtkonzepte, Stauraum, Design und weitere Themen einer professionellen Badplanung.
            </p>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
            >
              <h2 className="br-section-title">Weitere Informationen zur Badplanung</h2>
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
            aria-labelledby="bp-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="bp-seo-panel-title">Weitere Informationen zur Badplanung</h2>
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
                  Hier finden Sie ausführliche Informationen rund um die professionelle Badplanung. Erfahren Sie mehr
                  über Grundrissplanung, Raumaufteilung, Materialauswahl, Lichtkonzepte, Sanitärtechnik, Stauraumlösungen,
                  Design, Komfort sowie alle wichtigen Schritte einer erfolgreichen Badplanung im Rhein-Main-Gebiet.
                </p>
                {badplanungSeoIntro}
              </div>

              {badplanungSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Badplanung starten
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
