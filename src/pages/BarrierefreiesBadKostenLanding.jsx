import { useEffect, useMemo, useState } from 'react';
import {
  Accessibility,
  Award,
  Calculator,
  CheckCircle2,
  ChevronDown,
  DraftingCompass,
  Euro,
  FileText,
  FolderOpen,
  Handshake,
  Headphones,
  House,
  Mail,
  MessageSquare,
  Phone,
  SearchCheck,
  Send,
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
  barrierefreiesBadKostenSeoIntro,
  barrierefreiesBadKostenSeoSections,
} from '../data/barrierefreiesBadKostenSeoContent';

const HERO_IMAGE = '/img/barrierefreies-bad-kosten-hero.png';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Barrierefreies Bad Kosten | Bad altersgerecht umbauen';
const META_DESCRIPTION =
  'Barrierefreies Bad Kosten: Radex erklärt Preisfaktoren für bodengleiche Dusche, Bewegungsflächen, Ausstattung, Sicherheit und Badumbau.';

function KostenCTA({
  isHero = false,
  centered = false,
  showThird = false,
  primaryHref = '#kostenrechner',
  primaryLabel = 'Kosten berechnen',
}) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        {primaryLabel}
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
    title: 'Realistische Preisübersicht',
    desc: 'Transparente Orientierung für unterschiedliche Ausstattungen.',
    icon: Calculator,
  },
  {
    title: 'Barrierefreie Planung',
    desc: 'Individuelle Lösungen für jede Wohnsituation.',
    icon: Accessibility,
  },
  {
    title: 'Fördermöglichkeiten',
    desc: 'Hinweise zu möglichen Zuschüssen und Förderprogrammen.',
    icon: Euro,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Fachgerechte Planung und Umsetzung.',
    icon: Award,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Langjährige Erfahrung im Rhein-Main-Gebiet.',
    icon: FolderOpen,
  },
  {
    title: 'Persönliche Beratung',
    desc: 'Individuelle Einschätzung statt pauschaler Preise.',
    icon: Phone,
  },
];

const factorCards = [
  {
    title: 'Bodengleiche Dusche',
    desc: 'Der Umbau auf eine bodengleiche Dusche zählt zu den häufigsten Maßnahmen bei einer barrierefreien Badsanierung.',
    image: '/img/barrierefreies-bad-kosten-faktor-dusche.png',
    imageAlt: 'Symbolbild: Bodengleiche Dusche in einem modernen barrierefreien Bad',
  },
  {
    title: 'Sanitärinstallation',
    desc: 'Werden Wasser- oder Abwasserleitungen angepasst, beeinflusst dies den technischen Aufwand und die Gesamtkosten.',
    image: '/img/barrierefreies-bad-kosten-faktor-sanitaer.png',
    imageAlt: 'Symbolbild: Sanitärinstallation bei einem barrierefreien Badumbau',
  },
  {
    title: 'Sicherheitsausstattung',
    desc: 'Haltegriffe, rutschhemmende Bodenbeläge und komfortable Bedienelemente erhöhen Sicherheit und Alltagstauglichkeit.',
    image: '/img/barrierefreies-bad-kosten-faktor-sicherheit.png',
    imageAlt: 'Symbolbild: Haltegriffe und rutschhemmende Fliesen im barrierefreien Bad',
  },
  {
    title: 'Badmöbel',
    desc: 'Unterfahrbare Waschtische und ergonomische Möbel verbessern Komfort und Bewegungsfreiheit.',
    image: '/img/barrierefreies-bad-kosten-faktor-moebel.png',
    imageAlt: 'Symbolbild: Unterfahrbarer Waschtisch im barrierefreien Bad',
  },
  {
    title: 'Fliesen & Oberflächen',
    desc: 'Großformatige Fliesen und pflegeleichte Oberflächen erleichtern die tägliche Nutzung und Reinigung.',
    image: '/img/barrierefreies-bad-kosten-faktor-fliesen.png',
    imageAlt: 'Symbolbild: Großformatige Fliesen in einem barrierefreien Bad',
  },
  {
    title: 'Individuelle Lösungen',
    desc: 'Jedes Badezimmer wird an die persönlichen Anforderungen und die vorhandene Wohnsituation angepasst.',
    image: '/img/barrierefreies-bad-kosten-faktor-planung.png',
    imageAlt: 'Symbolbild: Beratung und Planung für ein barrierefreies Bad',
  },
];

const priceCards = [
  {
    title: 'Basis',
    price: 'ca. 12.000 € – 18.000 €',
    desc: 'Barrierefreie Grundausstattung mit bodengleicher Dusche und funktionaler Sanitärtechnik.',
  },
  {
    title: 'Komfort',
    price: 'ca. 18.000 € – 28.000 €',
    desc: 'Hochwertige Ausstattung mit zusätzlichen Komfort- und Sicherheitslösungen.',
  },
  {
    title: 'Premium',
    price: 'ab 28.000 €',
    desc: 'Individuelle Planung, Designausstattung und umfassende barrierefreie Komplettlösung.',
  },
];

const fundingCards = [
  {
    title: 'Mögliche Zuschüsse',
    desc: 'Je nach Förderprogramm können finanzielle Zuschüsse beantragt werden.',
    icon: Euro,
  },
  {
    title: 'Beratung',
    desc: 'Wir informieren Sie über mögliche Förderwege und unterstützen Sie bei der Planung.',
    icon: FileText,
  },
  {
    title: 'Langfristige Investition',
    desc: 'Ein barrierefreies Badezimmer steigert Komfort, Sicherheit und den Wert Ihrer Immobilie.',
    icon: House,
  },
];

const whyRadexCards = [
  {
    title: 'Individuelle Planung',
    desc: 'Jedes Badezimmer wird an Ihre persönlichen Bedürfnisse und die vorhandene Wohnsituation angepasst.',
    icon: Accessibility,
  },
  {
    title: 'Transparente Kosten',
    desc: 'Sie erhalten eine nachvollziehbare Kalkulation und ein individuelles Festpreisangebot nach der Besichtigung.',
    icon: Euro,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Fachgerechte Planung und Ausführung unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Persönliche Beratung',
    desc: 'Wir begleiten Sie von der ersten Idee bis zur fertigen Übergabe Ihres neuen Badezimmers.',
    icon: Headphones,
  },
];

const processSteps = [
  {
    title: 'Beratung',
    desc: 'Gemeinsam besprechen wir Ihre Wünsche und die Anforderungen an Ihr zukünftiges Badezimmer.',
    icon: Phone,
  },
  {
    title: 'Vor-Ort-Termin',
    desc: 'Wir prüfen die räumlichen Gegebenheiten und erfassen alle technischen Voraussetzungen.',
    icon: SearchCheck,
  },
  {
    title: 'Planung',
    desc: 'Wir entwickeln eine individuelle Lösung mit passenden Produkten und ausreichenden Bewegungsflächen.',
    icon: DraftingCompass,
  },
  {
    title: 'Kalkulation',
    desc: 'Alle Leistungen werden transparent berechnet und übersichtlich zusammengestellt.',
    icon: Calculator,
  },
  {
    title: 'Festpreisangebot',
    desc: 'Sie erhalten ein nachvollziehbares Angebot mit allen vereinbarten Leistungen.',
    icon: FileText,
  },
  {
    title: 'Projektstart',
    desc: 'Nach Ihrer Freigabe beginnen wir mit der Terminplanung und der Umsetzung Ihres Projekts.',
    icon: Handshake,
  },
];

const projectExamples = [
  {
    title: '5 m² Badezimmer',
    subtitle: 'Basis · ca. 13.500 €',
    desc: 'Umbau auf bodengleiche Dusche mit rutschhemmenden Fliesen und modernen Sanitäranlagen.',
    image: '/img/barrierefreies-bad-kosten-projekt-basis.png',
    imageAlt: 'Symbolbild: Basis-Preisbeispiel für ein kleines barrierefreies Bad',
  },
  {
    title: '8 m² Familienbad',
    subtitle: 'Komfort · ca. 21.500 €',
    desc: 'Barrierefreier Komplettumbau inklusive Haltegriffen, neuer Sanitärtechnik und hochwertiger Ausstattung.',
    image: '/img/barrierefreies-bad-kosten-projekt-komfort.png',
    imageAlt: 'Symbolbild: Komfort-Preisbeispiel für ein barrierefreies Familienbad',
  },
  {
    title: '10 m² Komfortbad',
    subtitle: 'Premium · ab 31.000 €',
    desc: 'Individuell geplantes barrierefreies Badezimmer mit Designausstattung und maximalem Komfort.',
    image: '/img/barrierefreies-bad-kosten-projekt-premium.png',
    imageAlt: 'Symbolbild: Premium-Preisbeispiel für ein barrierefreies Komfortbad',
  },
];

const faqsData = [
  {
    q: 'Was kostet ein barrierefreies Badezimmer?',
    a: 'Die Kosten hängen von der Größe des Badezimmers, den gewünschten Ausstattungsmerkmalen und dem Umfang der Umbauarbeiten ab. Eine persönliche Besichtigung ermöglicht eine realistische Kalkulation und ein individuelles Festpreisangebot.',
  },
  {
    q: 'Gibt es Zuschüsse für ein barrierefreies Bad?',
    a: 'Je nach persönlicher Situation und geplanter Maßnahme können Förderprogramme oder Zuschüsse infrage kommen. Gerne informieren wir Sie im Rahmen einer persönlichen Beratung über aktuelle Möglichkeiten.',
  },
  {
    q: 'Kann auch ein kleines Badezimmer barrierefrei umgebaut werden?',
    a: 'Ja. Auch kleinere Badezimmer lassen sich häufig mit durchdachten Lösungen funktional und barrierearm gestalten. Die konkrete Umsetzung hängt von den räumlichen Gegebenheiten ab.',
  },
  {
    q: 'Welche Ausstattung gehört zu einem barrierefreien Badezimmer?',
    a: 'Typische Elemente sind bodengleiche Duschen, rutschhemmende Bodenbeläge, Haltegriffe, unterfahrbare Waschtische und ausreichend große Bewegungsflächen. Welche Maßnahmen sinnvoll sind, richtet sich nach Ihren individuellen Anforderungen.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Ja. Nach einer persönlichen Besichtigung erstellen wir ein transparentes Festpreisangebot mit allen vereinbarten Leistungen.',
  },
  {
    q: 'In welchen Regionen baut Radex barrierefreie Badezimmer?',
    a: 'Von Rödermark aus realisiert Radex barrierefreie Badezimmer und altersgerechte Badumbauten im gesamten Rhein-Main-Gebiet.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH.',
  'Ein barrierefreies Badezimmer soll nicht nur heute überzeugen, sondern Ihnen auch in Zukunft mehr Komfort, Sicherheit und Selbstständigkeit bieten. Deshalb betrachten wir jedes Projekt individuell und entwickeln gemeinsam mit Ihnen eine Lösung, die zu Ihren Anforderungen und Ihrem Budget passt.',
  'Nach einer persönlichen Besichtigung erstellen wir ein transparentes Festpreisangebot und beraten Sie auf Wunsch auch zu möglichen Fördermöglichkeiten. So erhalten Sie eine fundierte Entscheidungsgrundlage für Ihr Projekt.',
  'Senden Sie uns gerne Fotos Ihres Badezimmers oder vereinbaren Sie einen persönlichen Beratungstermin. Gemeinsam finden wir die passende Lösung für Ihr Zuhause.',
];

const videoTrustPoints = [
  'Individuelle Planung',
  'Transparente Kosten',
  'SHK-Meisterbetrieb',
  'Persönliche Beratung',
];

const roomSizeOptions = [
  { id: 'bis5', label: 'Bis 5 m²', factor: 1 },
  { id: '6bis8', label: '6 bis 8 m²', factor: 1.15 },
  { id: '9bis12', label: '9 bis 12 m²', factor: 1.3 },
  { id: 'ueber12', label: 'Über 12 m²', factor: 1.45 },
];

const massnahmeCalcOptions = [
  { id: 'dusche', label: 'Bodengleiche Dusche', base: 14000 },
  { id: 'komplett', label: 'Komplett barrierefreies Bad', base: 20000 },
  { id: 'teil', label: 'Teilmodernisierung', base: 16000 },
];

const safetyOptions = [
  { id: 'griffe', label: 'Haltegriffe', price: 800 },
  { id: 'sitz', label: 'Duschsitz', price: 600 },
  { id: 'waschtisch', label: 'Unterfahrbarer Waschtisch', price: 1200 },
  { id: 'fliesen', label: 'Rutschhemmende Fliesen', price: 1500 },
  { id: 'keine', label: 'Keine Zusatzleistungen', price: 0 },
];

const linesOptions = [
  { id: 'nein', label: 'Nein', price: 0 },
  { id: 'teilweise', label: 'Teilweise', price: 2000 },
  { id: 'ja', label: 'Ja', price: 4000 },
];

const formMassnahmeOptions = [
  'Bodengleiche Dusche',
  'Komplett barrierefreies Bad',
  'Teilmodernisierung',
  'Ich bin noch unsicher',
];

const formTimingOptions = ['Sofort', 'Innerhalb von 3 Monaten', 'Innerhalb von 6 Monaten', 'Termin noch offen'];

function formatEuro(value) {
  return `${Math.round(value).toLocaleString('de-DE')} €`;
}

function BarrierefreiKostenCalculator() {
  const [roomSize, setRoomSize] = useState('bis5');
  const [massnahme, setMassnahme] = useState('dusche');
  const [safety, setSafety] = useState([]);
  const [lines, setLines] = useState('nein');

  const toggleSafety = (id) => {
    if (id === 'keine') {
      setSafety(['keine']);
      return;
    }
    setSafety((prev) => {
      const withoutKeine = prev.filter((item) => item !== 'keine');
      if (withoutKeine.includes(id)) {
        return withoutKeine.filter((item) => item !== id);
      }
      return [...withoutKeine, id];
    });
  };

  const { min, max } = useMemo(() => {
    const base = massnahmeCalcOptions.find((o) => o.id === massnahme)?.base || 14000;
    const sizeFactor = roomSizeOptions.find((o) => o.id === roomSize)?.factor || 1;
    const safetyPrice = safety
      .filter((id) => id !== 'keine')
      .reduce((sum, id) => sum + (safetyOptions.find((o) => o.id === id)?.price || 0), 0);
    const linesPrice = linesOptions.find((o) => o.id === lines)?.price || 0;
    const total = base * sizeFactor + safetyPrice + linesPrice;
    return { min: total, max: Math.round(total * 1.2) };
  }, [roomSize, massnahme, safety, lines]);

  return (
    <div className="br-bw-calculator br-dauer-calculator">
      <div className="br-dauer-calc-header">
        <h3>Kostenrechner für barrierefreie Bäder</h3>
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
          <h3>Welche Maßnahme planen Sie?</h3>
          <div className="br-bw-calc-options">
            {massnahmeCalcOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`br-bw-calc-btn${massnahme === opt.id ? ' is-active' : ''}`}
                onClick={() => setMassnahme(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="br-bw-calc-question">
          <h3>Welche Sicherheitsausstattung wünschen Sie?</h3>
          <div className="br-bw-calc-options">
            {safetyOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`br-bw-calc-btn${safety.includes(opt.id) ? ' is-active' : ''}`}
                onClick={() => toggleSafety(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="br-bw-calc-question">
          <h3>Müssen Leitungen angepasst werden?</h3>
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

        <div className="br-bw-calc-result">
          <h3>Ihre erste Kosteneinschätzung</h3>
          <p className="br-bw-calc-range">
            ca. {formatEuro(min)} bis {formatEuro(max)}
          </p>
          <p className="br-bw-calc-note">
            Diese Berechnung dient ausschließlich der Orientierung. Nach einer Besichtigung erstellen wir ein individuelles
            Festpreisangebot. Fördermöglichkeiten oder Zuschüsse können die tatsächlichen Eigenkosten reduzieren.
          </p>
          <div className="br-ablauf-cta-wrap" style={{ marginTop: '24px' }}>
            <KostenCTA centered primaryHref="#kontakt" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BarrierefreiKostenContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const plzOrt = form.plzOrt.value.trim();
    const massnahme = form.massnahme.value;
    const timing = form.timing.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Barrierefreies Bad Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Gewünschte Lösung: ${massnahme}`,
      `Projektbeginn: ${timing}`,
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
            <p>Sprechen Sie direkt mit unserem Team über Ihr barrierefreies Badezimmer.</p>
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
            <p>Senden Sie uns Fotos Ihres Badezimmers und erhalten Sie eine erste unverbindliche Kosteneinschätzung.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              Fotos senden. Erste Einschätzung erhalten.
            </a>
          </div>

          <div className="br-ablauf-contact-card">
            <div className="br-ablauf-contact-icon">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <h3>E-Mail-Anfrage</h3>
            <p>Senden Sie uns Ihre Projektinformationen bequem per E-Mail.</p>
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
              Beschreiben Sie Ihr Projekt möglichst genau. Nach einer persönlichen Beratung erstellen wir eine
              individuelle Planung und ein transparentes Festpreisangebot.
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
                <select name="massnahme" required defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {formMassnahmeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              <label className="br-input-group">
                <span>Wann soll Ihr Projekt beginnen?</span>
                <select name="timing" required defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {formTimingOptions.map((opt) => (
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
                placeholder="Beschreiben Sie Ihr Badezimmer und Ihre Wünsche möglichst genau."
              />
            </label>
            <label className="br-input-group">
              <span>Fotos hochladen</span>
              <input type="file" name="fotos" accept="image/*" multiple />
              <small>
                Laden Sie Fotos Ihres Badezimmers hoch. Dadurch können wir Ihr Projekt bereits im Vorfeld besser
                einschätzen.
              </small>
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

export default function BarrierefreiesBadKostenLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (barrierefreiesBadKostenSeoSections.some((s) => s.id === hash)) {
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
    path: '/barrierefreies-bad-kosten',
    image: 'https://radex-objektmanagement.de/img/barrierefreies-bad-kosten-hero-radex.webp',
    jsonLd: [
      buildServiceSchema({
        name: 'Barrierefreies Bad Kosten',
        description: META_DESCRIPTION,
        path: '/barrierefreies-bad-kosten',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page barrierefreies-bad-kosten-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Barrierefreies Bad Kosten</p>
            <h1 className="br-hero-title">
              Was kostet ein barrierefreies Bad
              <br />
              <span>im Rhein-Main-Gebiet?</span>
            </h1>
            <p className="br-hero-lead">Barrierefreiheit. Sicherheit. Fördermöglichkeiten. Planbare Kosten.</p>
            <p className="br-hero-text">
              Die Kosten für ein barrierefreies Badezimmer hängen von der Größe des Raumes, den gewünschten
              Ausstattungsmerkmalen und dem Umfang der Umbauarbeiten ab. Mit unseren Preisbeispielen und einer
              persönlichen Beratung erhalten Sie eine realistische Orientierung für Ihr Projekt. Gleichzeitig informieren
              wir Sie über mögliche Förderungen und Zuschüsse.
            </p>
            <KostenCTA isHero showThird primaryHref="#kostenrechner" />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modernes barrierefreies Bad mit bodengleicher Dusche und Haltegriffen"
          title="Barrierefreies Bad Kosten | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Welche Faktoren beeinflussen die Kosten eines barrierefreien Badezimmers?">
        Die Kosten richten sich nach den baulichen Gegebenheiten, den gewünschten Komfortfunktionen und dem Umfang der
        notwendigen Umbauarbeiten. Bodengleiche Duschen, Haltegriffe, rutschhemmende Bodenbeläge oder verbreiterte
        Bewegungsflächen wirken sich ebenso auf den Gesamtpreis aus wie die vorhandene Bausubstanz und technische
        Anpassungen.
      </SectionTransition>

      {/* 3 Kostenfaktoren */}
      <section id="kostenfaktoren" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Wodurch entstehen die Kosten eines barrierefreien Badezimmers?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Gesamtkosten hängen von den baulichen Voraussetzungen, den gewünschten Komfortfunktionen und den
              eingesetzten Materialien ab. Je nach Ausgangssituation unterscheiden sich Aufwand und Umfang der
              notwendigen Arbeiten deutlich. Eine individuelle Planung sorgt für eine realistische Budgetübersicht.
            </p>
          </div>
          <ImageCardGrid cards={factorCards} />
        </div>
      </section>

      <SectionTransition title="Preisbeispiele für barrierefreie Badezimmer">
        Die folgenden Preisbereiche dienen als Orientierung und zeigen typische Ausstattungsvarianten eines
        barrierefreien Badezimmers.
      </SectionTransition>

      {/* 4 Preisbeispiele */}
      <section id="preisbeispiele" className="br-section">
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
            Die genannten Preise dienen ausschließlich der Orientierung. Nach einer persönlichen Besichtigung erstellen
            wir ein individuelles Festpreisangebot.
          </p>
        </div>
      </section>

      <SectionTransition title="Förderungen und Zuschüsse">
        Je nach persönlicher Situation können verschiedene Förderprogramme oder Zuschüsse für den barrierefreien Badumbau
        infrage kommen. Welche Möglichkeiten bestehen, hängt von der geplanten Maßnahme und den jeweiligen
        Förderbedingungen ab. Gerne informieren wir Sie im Rahmen einer persönlichen Beratung über die aktuellen Optionen.
      </SectionTransition>

      {/* 5 Fördermöglichkeiten */}
      <section id="foerdermoeglichkeiten" className="br-section br-bg-light">
        <div className="container">
          <PremiumIconCards cards={fundingCards} largeIcons />
          <div className="br-ablauf-cta-wrap" style={{ marginTop: '40px' }}>
            <KostenCTA centered primaryHref="#kostenrechner" />
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Eigentümer auf Radex vertrauen">
        Im nächsten Abschnitt erfahren Sie, warum Eigentümer im gesamten Rhein-Main-Gebiet ihren barrierefreien Badumbau
        gemeinsam mit Radex planen und umsetzen.
      </SectionTransition>

      {/* 6 Warum Radex */}
      <section id="warum-radex" className="br-section br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex für Ihr barrierefreies Badezimmer?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Ein barrierefreies Badezimmer erfordert eine sorgfältige Planung und die Berücksichtigung vieler Details.
              Bewegungsflächen, Sicherheit, Komfort und technische Voraussetzungen müssen optimal aufeinander abgestimmt
              werden. Als SHK-Meisterbetrieb begleitet Radex Ihr Projekt von der ersten Beratung bis zur fertigen
              Umsetzung und informiert Sie auf Wunsch auch über mögliche Förderprogramme.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Bernd Knoop, SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH, erklärt im Video, welche Faktoren
        die Kosten eines barrierefreien Badezimmers beeinflussen und warum eine sorgfältige Planung langfristig die beste
        Investition ist.
      </SectionTransition>

      {/* 7 Video */}
      <section id="video" className="br-section br-bg-light br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="br-ablauf-video-frame">
            <video
              src={testVideo}
              controls
              playsInline
              preload="none"
              poster={VIDEO_POSTER}
              title="Bernd Knoop – Barrierefreies Bad Kosten"
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
            <KostenCTA centered primaryHref="#kostenrechner" />
          </div>

          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition title="So entsteht Ihre persönliche Kostenplanung">
        Von der ersten Beratung bis zum fertigen Angebot erfassen wir alle relevanten Faktoren und erstellen auf dieser
        Grundlage eine transparente Kostenübersicht für Ihr barrierefreies Badezimmer.
      </SectionTransition>

      {/* 8 Kostenplanung / Ablauf */}
      <section id="kostenplanung" className="br-section br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So entsteht Ihre persönliche Kostenplanung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jedes barrierefreie Badezimmer stellt andere Anforderungen. Deshalb beginnt jede Kostenplanung mit einer
              individuellen Beratung und einer sorgfältigen Analyse der vorhandenen Raumsituation. Auf dieser Grundlage
              erstellen wir eine transparente und nachvollziehbare Kalkulation für Ihr Projekt.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Berechnen Sie Ihre erste Kostenorientierung">
        Mit wenigen Angaben erhalten Sie eine unverbindliche Einschätzung der möglichen Kosten für Ihr barrierefreies
        Badezimmer. Der Rechner ersetzt kein persönliches Angebot, bietet aber eine realistische Orientierung.
      </SectionTransition>

      {/* 9 Kostenrechner */}
      <section id="kostenrechner" className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '980px' }}>
          <BarrierefreiKostenCalculator />

          <div className="br-bf-cta-box">
            <h3>Sie planen ein barrierefreies Badezimmer?</h3>
            <p>
              Senden Sie uns Fotos Ihres Badezimmers oder vereinbaren Sie einen persönlichen Beratungstermin. Gemeinsam
              entwickeln wir eine passende Lösung und erstellen eine transparente Kostenübersicht.
            </p>
            <KostenCTA centered showThird primaryHref="#kostenrechner" />
          </div>
        </div>
      </section>

      <SectionTransition title="Praxisbeispiele aus dem Rhein-Main-Gebiet">
        Die folgenden Beispiele zeigen typische Projekte mit unterschiedlichen Anforderungen und dienen als Orientierung
        für vergleichbare barrierefreie Badumbauten.
      </SectionTransition>

      {/* 10 Praxisbeispiele */}
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
                </div>
              </article>
            ))}
          </div>
          <p className="br-bw-price-note">
            Jedes Badezimmer ist individuell. Die genannten Preisbeispiele dienen ausschließlich der Orientierung und
            ersetzen kein persönliches Festpreisangebot.
          </p>
          <div className="text-center mt-10">
            <a href="#kontakt" className="btn br-btn-orange">
              Jetzt persönliche Kostenplanung erhalten
            </a>
          </div>
        </div>
      </section>

      <SectionTransition title="Häufige Fragen zu den Kosten eines barrierefreien Badezimmers">
        Im nächsten Abschnitt beantworten wir häufig gestellte Fragen rund um Preise, Zuschüsse, Planung und den
        Leistungsumfang eines barrierefreien Badumbaus.
      </SectionTransition>

      {/* 11 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zu den Kosten eines barrierefreien Badezimmers"
        intro="Vor der Planung eines barrierefreien Badezimmers entstehen häufig Fragen zu Kosten, Fördermöglichkeiten und dem Umfang der notwendigen Umbaumaßnahmen. Hier finden Sie Antworten auf die wichtigsten Fragen für Ihre erste Orientierung."
      />

      <SectionTransition title="Gemeinsam planen wir Ihr barrierefreies Badezimmer">
        Jede Wohnsituation ist anders. Deshalb beraten wir Sie persönlich, entwickeln eine individuelle Lösung und
        erstellen auf Wunsch eine transparente Kostenübersicht für Ihren geplanten Badumbau.
      </SectionTransition>

      {/* 12 Kontakt */}
      <BarrierefreiKostenContactSection />

      {/* 13 Weitere Informationen */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-6">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '20px' }}>
              Im folgenden Bereich finden Sie ausführliche Informationen rund um Kosten, Planung, Fördermöglichkeiten,
              technische Anforderungen und die einzelnen Maßnahmen eines barrierefreien Badumbaus.
            </p>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
            >
              <h2 className="br-section-title">
                Weitere Informationen zu den Kosten eines barrierefreien Badezimmers
              </h2>
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
            aria-labelledby="br-bbk-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="br-bbk-seo-panel-title">
                Weitere Informationen zu den Kosten eines barrierefreien Badezimmers
              </h2>
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
                  Hier finden Sie ausführliche Informationen rund um die Kosten eines barrierefreien Badezimmers.
                  Erfahren Sie mehr über Preisfaktoren, Fördermöglichkeiten, Zuschüsse, technische Anforderungen,
                  Komfortlösungen, Planung sowie die einzelnen Schritte einer professionellen Umsetzung im
                  Rhein-Main-Gebiet.
                </p>
                {barrierefreiesBadKostenSeoIntro}
              </div>

              {barrierefreiesBadKostenSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Barrierefreies Bad anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
