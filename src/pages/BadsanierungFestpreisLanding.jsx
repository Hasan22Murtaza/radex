import { useEffect, useState } from 'react';
import {
  Award,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Clock,
  FileCheck,
  FileText,
  FolderOpen,
  Handshake,
  Mail,
  MessageSquare,
  Phone,
  SearchCheck,
  Send,
  Shield,
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
import SanierungskostenRechner from '../components/SanierungskostenRechner';
import testVideo from '../assets/test.mp4';
import {
  badsanierungFestpreisSeoIntro,
  badsanierungFestpreisSeoSections,
} from '../data/badsanierungFestpreisSeoContent';

const HERO_IMAGE = '/img/badsanierung-festpreis-hero.webp';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Badsanierung Festpreis Rhein-Main | Klar planen';
const META_DESCRIPTION =
  'Badsanierung Festpreis im Rhein-Main-Gebiet: Radex erklärt, wann ein Festpreis sinnvoll ist und welche Planung dafür nötig ist.';

function FestpreisCTA({ isHero = false, centered = false, showThird = false, primaryHref = '#kontakt' }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        Festpreis anfragen
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
    title: 'Transparente Festpreise',
    desc: 'Klare Leistungen ohne unübersichtliche Einzelpositionen.',
    icon: FileText,
  },
  {
    title: 'Detaillierte Planung',
    desc: 'Alle vereinbarten Leistungen werden nachvollziehbar dokumentiert.',
    icon: ClipboardList,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Fachgerechte Planung und Ausführung unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Planungssicherheit',
    desc: 'Eine klare Grundlage für Ihr Renovierungsprojekt.',
    icon: Shield,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Erfahrung aus zahlreichen Badsanierungen im Rhein-Main-Gebiet.',
    icon: FolderOpen,
  },
  {
    title: 'Persönliche Beratung',
    desc: 'Individuelle Lösungen statt Standardangebote.',
    icon: Handshake,
  },
];

const leistungCards = [
  {
    title: 'Persönliche Besichtigung',
    desc: 'Vor der Angebotserstellung prüfen wir Ihr Badezimmer vor Ort und erfassen alle relevanten Gegebenheiten.',
    image: '/img/badsanierung-festpreis-besichtigung.webp',
    imageAlt: 'Symbolbild: Projektmanager prüft Badezimmer vor Ort',
  },
  {
    title: 'Detaillierte Planung',
    desc: 'Alle gewünschten Leistungen und Materialien werden gemeinsam abgestimmt und dokumentiert.',
    image: '/img/badsanierung-festpreis-planung.webp',
    imageAlt: 'Symbolbild: Badplanung mit Plänen und Materialmustern',
  },
  {
    title: 'Transparente Kalkulation',
    desc: 'Die Angebotserstellung erfolgt nachvollziehbar auf Basis der vereinbarten Leistungen und technischen Voraussetzungen.',
    image: '/img/badsanierung-festpreis-kalkulation.webp',
    imageAlt: 'Symbolbild: Transparente Kalkulation eines Festpreisangebots',
  },
  {
    title: 'Koordinierte Umsetzung',
    desc: 'Alle Arbeiten werden nach dem abgestimmten Leistungsumfang geplant und ausgeführt.',
    image: '/img/badsanierung-festpreis-umsetzung.webp',
    imageAlt: 'Symbolbild: Koordinierte Handwerker bei der Badsanierung',
  },
  {
    title: 'Ein Ansprechpartner',
    desc: 'Während des gesamten Projekts begleitet Sie ein fester Ansprechpartner und koordiniert alle Gewerke.',
    image: '/img/badsanierung-festpreis-ansprechpartner.webp',
    imageAlt: 'Symbolbild: Persönlicher Ansprechpartner im fertigen Bad',
  },
  {
    title: 'Planungssicherheit',
    desc: 'Eine klare Leistungsbeschreibung schafft Sicherheit für die gesamte Projektlaufzeit.',
    image: '/img/badsanierung-festpreis-sicherheit.webp',
    imageAlt: 'Symbolbild: Eigentümer mit fertig modernisiertem Badezimmer',
  },
];

const benefitCards = [
  {
    title: 'Planungssicherheit',
    desc: 'Klare Grundlage für Ihr Renovierungsprojekt.',
    icon: Shield,
  },
  {
    title: 'Transparente Leistungen',
    desc: 'Alle vereinbarten Arbeiten werden eindeutig beschrieben.',
    icon: FileText,
  },
  {
    title: 'Nachvollziehbare Kalkulation',
    desc: 'Die Preisermittlung basiert auf den tatsächlichen Projektanforderungen.',
    icon: Calculator,
  },
  {
    title: 'Bessere Projektplanung',
    desc: 'Leistungen und Bauablauf können frühzeitig abgestimmt werden.',
    icon: Clock,
  },
  {
    title: 'Persönliche Beratung',
    desc: 'Fragen werden bereits vor Projektbeginn gemeinsam geklärt.',
    icon: Handshake,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Professionelle Planung und fachgerechte Umsetzung.',
    icon: Award,
  },
];

const whyRadexCards = [
  {
    title: 'Klare Leistungsbeschreibung',
    desc: 'Alle vereinbarten Arbeiten werden vor Projektbeginn detailliert dokumentiert.',
    icon: ClipboardCheck,
  },
  {
    title: 'Nachvollziehbare Kalkulation',
    desc: 'Das Angebot basiert auf den tatsächlichen Gegebenheiten Ihres Badezimmers.',
    icon: Calculator,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärtechnik und Planung erfolgen unter fachlicher Leitung eines SHK-Meisters.',
    icon: Award,
  },
  {
    title: 'Persönliche Beratung',
    desc: 'Ein fester Ansprechpartner begleitet Sie von der ersten Besichtigung bis zur Fertigstellung.',
    icon: Handshake,
  },
];

const processSteps = [
  {
    title: 'Erstkontakt',
    desc: 'Sie schildern Ihr Projekt telefonisch, per Kontaktformular oder über WhatsApp.',
    icon: Phone,
  },
  {
    title: 'Vor-Ort-Besichtigung',
    desc: 'Wir prüfen Ihr Badezimmer, nehmen Maße und erfassen alle technischen Voraussetzungen.',
    icon: SearchCheck,
  },
  {
    title: 'Leistungsdefinition',
    desc: 'Gemeinsam legen wir Materialien, Ausstattung und den gewünschten Leistungsumfang fest.',
    icon: ClipboardList,
  },
  {
    title: 'Kalkulation',
    desc: 'Alle vereinbarten Leistungen werden transparent und nachvollziehbar berechnet.',
    icon: Calculator,
  },
  {
    title: 'Festpreisangebot',
    desc: 'Sie erhalten ein detailliertes Angebot mit klar definierten Leistungen.',
    icon: FileCheck,
  },
  {
    title: 'Projektfreigabe',
    desc: 'Nach Ihrer Zustimmung beginnt die Terminplanung und die Vorbereitung der Ausführung.',
    icon: Handshake,
  },
];

const projectExamples = [
  {
    title: '5 m² Badezimmer',
    subtitle: 'Basis · ca. 11.900 €',
    desc: 'Komplettsanierung mit neuer Sanitärkeramik, Fliesen und moderner Dusche.',
    image: '/img/badsanierung-planen-rhein-main-radex.webp',
    imageAlt: 'Symbolbild: Basis-Festpreisbeispiel für ein kleines Badezimmer',
  },
  {
    title: '8 m² Familienbad',
    subtitle: 'Komfort · ca. 19.500 €',
    desc: 'Bodengleiche Dusche, neue Leitungen, hochwertige Badmöbel und großformatige Fliesen.',
    image: '/img/ablauf-badsanierung-rhein-main-radex.webp',
    imageAlt: 'Symbolbild: Komfort-Festpreisbeispiel für ein Familienbad',
  },
  {
    title: '12 m² Designbad',
    subtitle: 'Premium · ab 31.500 €',
    desc: 'Individuelle Planung, Designausstattung, Maßmöbel und exklusive Materialien.',
    image: '/img/fertiges-bad-nach-badsanierung-radex.webp',
    imageAlt: 'Symbolbild: Premium-Festpreisbeispiel für ein Designbad',
  },
];

const faqsData = [
  {
    q: 'Was bedeutet Festpreis bei einer Badsanierung?',
    a: 'Ein Festpreisangebot umfasst alle zuvor gemeinsam abgestimmten Leistungen. Grundlage dafür sind die Besichtigung Ihres Badezimmers sowie eine detaillierte Projektplanung.',
  },
  {
    q: 'Kann sich der Festpreis später ändern?',
    a: 'Werden nachträglich zusätzliche Leistungen oder Änderungen am Projekt gewünscht, werden diese selbstverständlich vor der Ausführung gemeinsam besprochen. Für die vereinbarten Leistungen bleibt das Angebot transparent nachvollziehbar.',
  },
  {
    q: 'Ist die Besichtigung kostenlos?',
    a: 'Ja. Die Besichtigung dient dazu, alle technischen Voraussetzungen zu erfassen und ein realistisches Festpreisangebot zu erstellen.',
  },
  {
    q: 'Wie lange ist ein Festpreisangebot gültig?',
    a: 'Die Gültigkeitsdauer wird im jeweiligen Angebot angegeben. So haben Sie ausreichend Zeit, Ihre Entscheidung in Ruhe zu treffen.',
  },
  {
    q: 'Welche Leistungen sind im Angebot enthalten?',
    a: 'Alle vereinbarten Arbeiten sowie die abgestimmten Materialien und Ausstattungen werden transparent im Angebot aufgeführt.',
  },
  {
    q: 'In welchen Regionen erstellt Radex Festpreisangebote?',
    a: 'Von Rödermark aus betreut Radex private Eigentümer und Modernisierungsprojekte im gesamten Rhein-Main-Gebiet.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH.',
  'Viele Kunden wünschen sich vor allem Planungssicherheit. Deshalb erstellen wir jedes Festpreisangebot erst nach einer sorgfältigen Besichtigung und einer gemeinsamen Projektplanung. Nur so können alle Leistungen realistisch bewertet und nachvollziehbar kalkuliert werden.',
  'Wir besprechen gemeinsam Ihre Wünsche, prüfen die technischen Voraussetzungen und entwickeln eine Lösung, die zu Ihrem Badezimmer und Ihrem Budget passt. Anschließend erhalten Sie ein transparentes Angebot mit allen vereinbarten Leistungen.',
  'Senden Sie uns einfach Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Wir nehmen uns Zeit für Ihr Projekt und beraten Sie individuell.',
];

const videoTrustPoints = [
  'Transparente Planung',
  'Individuelle Angebotserstellung',
  'SHK-Meisterbetrieb',
  'Persönlicher Ansprechpartner',
];

const massnahmeOptions = [
  'Komplettbadsanierung',
  'Badmodernisierung',
  'Badrenovierung',
  'Barrierefreies Bad',
  'Gäste-WC',
  'Ich bin noch unsicher',
];

const startOptions = ['Sofort', 'Innerhalb von 3 Monaten', 'Innerhalb von 6 Monaten', 'Noch offen'];

function FestpreisContactSection() {
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
    const start = form.start.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Festpreisangebot Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Geplante Maßnahme: ${massnahme}`,
      `Gewünschter Start: ${start}`,
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
            <p>Sprechen Sie direkt mit unserem Team und lassen Sie sich persönlich zum Festpreisangebot beraten.</p>
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
            <p>Senden Sie uns Fotos Ihres Badezimmers und erhalten Sie eine erste unverbindliche Einschätzung.</p>
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
            <h2 className="br-section-title">Festpreisangebot anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt möglichst genau. Auf Grundlage Ihrer Angaben und einer späteren Besichtigung
              erstellen wir ein transparentes Festpreisangebot für Ihre Badsanierung.
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
                <span>Welche Maßnahme planen Sie?</span>
                <select name="massnahme" required defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {massnahmeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              <label className="br-input-group">
                <span>Wann soll Ihr Projekt starten?</span>
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
                placeholder="Beschreiben Sie Ihr Badezimmer und teilen Sie uns Ihre Wünsche möglichst detailliert mit."
              />
            </label>
            <label className="br-input-group">
              <span>Fotos hochladen</span>
              <input type="file" name="fotos" accept="image/*" multiple />
              <small>
                Laden Sie Bilder Ihres Badezimmers hoch. Dadurch können wir Ihr Projekt bereits im Vorfeld besser
                einschätzen.
              </small>
            </label>
            <button type="submit" className="btn br-btn-orange br-ablauf-submit">
              Festpreis anfragen <Send size={18} />
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

export default function BadsanierungFestpreisLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (badsanierungFestpreisSeoSections.some((s) => s.id === hash)) {
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
    path: '/badsanierung-festpreis',
    image: '/img/badsanierung-festpreis-hero.webp',
    jsonLd: [
      buildServiceSchema({
        name: 'Badsanierung Festpreis',
        description: META_DESCRIPTION,
        path: '/badsanierung-festpreis',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badsanierung-festpreis-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Badsanierung Festpreis</p>
            <h1 className="br-hero-title">
              Badsanierung zum Festpreis
              <br />
              <span>im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">Sicherheit. Transparenz. Verlässlichkeit. Planbare Kosten.</p>
            <p className="br-hero-text">
              Wer ein Badezimmer modernisieren möchte, wünscht sich vor allem Planungssicherheit. Mit einem transparent
              kalkulierten Festpreisangebot wissen Sie bereits vor Beginn der Arbeiten, welche Leistungen enthalten sind
              und mit welchen Kosten Sie rechnen können. Radex erstellt individuelle Festpreisangebote auf Basis einer
              persönlichen Besichtigung und einer detaillierten Projektplanung.
            </p>
            <FestpreisCTA isHero showThird primaryHref="#kontakt" />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Projektmanager erklärt Festpreisangebot einer Badsanierung"
          title="Badsanierung Festpreis | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Wie entsteht ein Festpreisangebot?">
        Ein seriöses Festpreisangebot basiert nicht auf Schätzungen, sondern auf einer sorgfältigen Analyse Ihres
        Badezimmers. Raumgröße, technische Voraussetzungen, Materialauswahl und gewünschte Ausstattung werden gemeinsam
        erfasst und bilden die Grundlage für eine transparente Kalkulation.
      </SectionTransition>

      {/* 3 Festpreis erklärt / Leistungen */}
      <section id="leistungen" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was ist bei einem Festpreisangebot enthalten?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Ein transparentes Festpreisangebot schafft Klarheit. Bereits vor Beginn der Arbeiten werden alle
              vereinbarten Leistungen detailliert festgelegt. Dadurch erhalten Sie eine verlässliche Grundlage für Ihre
              Budgetplanung und wissen genau, welche Arbeiten ausgeführt werden.
            </p>
          </div>
          <ImageCardGrid cards={leistungCards} />
        </div>
      </section>

      <SectionTransition title="Warum entscheiden sich viele Eigentümer für einen Festpreis?">
        Ein transparentes Angebot erleichtert die Budgetplanung und schafft Vertrauen. Alle vereinbarten Leistungen
        werden vor Beginn der Arbeiten gemeinsam abgestimmt und nachvollziehbar dokumentiert.
      </SectionTransition>

      {/* 4 Vorteile Festpreis */}
      <section id="vorteile" className="br-section">
        <div className="container">
          <PremiumIconCards cards={benefitCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Vorher planen – sicher modernisieren">
        Eine sorgfältige Projektvorbereitung schafft die Grundlage für eine erfolgreiche Badsanierung. Im nächsten
        Abschnitt erfahren Sie, warum Eigentümer im Rhein-Main-Gebiet bei transparenten Festpreisangeboten auf Radex
        vertrauen.
      </SectionTransition>
      <div className="container br-ablauf-cta-wrap" style={{ marginBottom: '48px' }}>
        <FestpreisCTA centered primaryHref="#kontakt" />
      </div>

      {/* 5 Warum Radex */}
      <section id="warum-radex" className="br-section br-bg-light br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex beim Festpreis auf Transparenz setzt</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Ein Festpreis schafft Vertrauen, wenn alle Leistungen klar definiert sind. Deshalb analysieren wir Ihr
              Badezimmer vor der Angebotserstellung sorgfältig und besprechen gemeinsam alle gewünschten Arbeiten. So
              entsteht eine transparente Grundlage für Ihr Projekt – nachvollziehbar, realistisch und individuell auf
              Ihre Anforderungen abgestimmt.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Bernd Knoop, SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH, erklärt im Video, warum eine
        gründliche Planung die wichtigste Grundlage für ein transparentes Festpreisangebot ist und wie Ihr persönliches
        Angebot entsteht.
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
              title="Bernd Knoop – Badsanierung Festpreis"
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
            <FestpreisCTA centered primaryHref="#kontakt" />
          </div>

          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Angebotserstellung */}
      <section id="angebotserstellung" className="br-section br-bg-light br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So entsteht Ihr persönliches Festpreisangebot</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Ein transparentes Festpreisangebot beginnt mit einer sorgfältigen Projektaufnahme. Wir analysieren Ihr
              Badezimmer, besprechen Ihre Wünsche und definieren gemeinsam alle Leistungen. Erst auf dieser Grundlage
              erstellen wir ein nachvollziehbares Angebot, das auf Ihr Projekt zugeschnitten ist.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Ermitteln Sie Ihre erste Preisorientierung">
        Mit wenigen Angaben erhalten Sie eine unverbindliche Einschätzung für Ihre geplante Badsanierung. Der Rechner
        ersetzt kein individuelles Festpreisangebot, vermittelt jedoch eine realistische Preisorientierung.
      </SectionTransition>

      {/* 8 Preisrechner */}
      <section id="preisrechner" className="br-section">
        <div className="container" style={{ maxWidth: '980px' }}>
          <SanierungskostenRechner defaultType="bad" compact badOnly id="festpreis-rechner" showIntro={false} />
          <p className="br-festpreis-calc-note">
            Diese Berechnung dient ausschließlich als Orientierung. Ein verbindliches Festpreisangebot erhalten Sie nach
            einer persönlichen Besichtigung und der gemeinsamen Projektplanung.
          </p>
          <div className="br-ablauf-cta-wrap" style={{ marginTop: '28px' }}>
            <FestpreisCTA centered primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      <SectionTransition title="Praxisbeispiele transparenter Festpreisangebote">
        Die folgenden Beispiele zeigen typische Projekte mit unterschiedlichem Leistungsumfang. Sie verdeutlichen, wie
        sich ein individuelles Festpreisangebot je nach Ausstattung und Projektgröße zusammensetzt.
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
          <p className="br-bw-price-note">
            Jedes Badezimmer ist einzigartig. Die genannten Beispiele dienen ausschließlich der Orientierung und
            ersetzen kein individuelles Festpreisangebot.
          </p>
          <div className="text-center mt-10">
            <a href="#kontakt" className="btn br-btn-orange">
              Jetzt persönliches Festpreisangebot erhalten
            </a>
          </div>
        </div>
      </section>

      <SectionTransition title="Häufige Fragen zum Festpreis">
        Im nächsten Abschnitt beantworten wir häufig gestellte Fragen rund um Festpreisangebote, Leistungsumfang,
        Transparenz und die individuelle Kalkulation einer Badsanierung.
      </SectionTransition>

      {/* 10 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zum Festpreis einer Badsanierung"
        intro="Ein Festpreisangebot schafft Sicherheit und Transparenz. Dennoch entstehen vor einer Beauftragung häufig Fragen zum Leistungsumfang, zur Kalkulation und zum Ablauf. Hier finden Sie Antworten auf die wichtigsten Fragen rund um die Badsanierung zum Festpreis."
      />

      <SectionTransition title="Lassen Sie sich jetzt Ihr persönliches Festpreisangebot erstellen">
        Jedes Badezimmer ist anders. Deshalb erstellen wir Ihr Festpreisangebot individuell auf Grundlage Ihrer Wünsche
        und der tatsächlichen Gegebenheiten vor Ort. So erhalten Sie eine transparente Entscheidungsgrundlage für Ihr
        Projekt.
      </SectionTransition>

      {/* 11 Kontakt */}
      <FestpreisContactSection />

      {/* 12 Weitere Informationen */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-6">
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: '20px' }}>
              Im folgenden Bereich finden Sie ausführliche Informationen rund um Festpreisangebote, Leistungsumfang,
              Projektplanung, Kalkulation und weitere Aspekte einer transparenten Badsanierung.
            </p>
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
            >
              <h2 className="br-section-title">Weitere Informationen zum Festpreis einer Badsanierung</h2>
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
            aria-labelledby="br-festpreis-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="br-festpreis-seo-panel-title">Weitere Informationen zum Festpreis einer Badsanierung</h2>
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
                  Hier finden Sie ausführliche Informationen rund um Festpreisangebote bei einer Badsanierung. Erfahren
                  Sie mehr über die Angebotserstellung, den Leistungsumfang, die Kalkulation, Planung, Preisbestandteile
                  sowie wichtige Hinweise für eine transparente und sichere Modernisierung Ihres Badezimmers im
                  Rhein-Main-Gebiet.
                </p>
                {badsanierungFestpreisSeoIntro}
              </div>

              {badsanierungFestpreisSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a href="#kontakt" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                Festpreis anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
