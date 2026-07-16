import { useEffect, useState } from 'react';
import {
  Award,
  Calendar,
  Camera,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock,
  FileText,
  Handshake,
  Home,
  KeyRound,
  Mail,
  MessageSquare,
  Phone,
  SearchCheck,
  Send,
  ShieldCheck,
  UserCheck,
  Workflow,
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
  AblaufCTABlock,
  FaqAccordion,
  HorizontalProcessTimeline,
  ImageCardGrid,
  PremiumIconCards,
  ProjectStatusTrack,
  SectionTransition,
  TrustUspCards,
} from '../components/landing/SharedLandingParts';
import testVideo from '../assets/test.mp4';
import {
  ablaufBadsanierungSeoIntro,
  ablaufBadsanierungSeoSections,
} from '../data/ablaufBadsanierungSeoContent';

const HERO_IMAGE = '/img/ablauf-badsanierung-hero.png';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';

const trustCards = [
  {
    title: 'Strukturierter Projektablauf',
    image: '/img/badsanierung-usp-generalunternehmer.png',
    icon: Workflow,
    imageAlt: 'Projektplanung und Koordination einer Badsanierung',
  },
  {
    title: 'Transparente Bauphasen',
    image: '/img/badsanierung-usp-festpreis.png',
    icon: ClipboardCheck,
    imageAlt: 'Transparente Planung und Bauphasen',
  },
  {
    title: 'SHK-Meisterbetrieb',
    image: '/img/badsanierung-usp-shk.png',
    icon: Award,
    imageAlt: 'SHK-Meisterbetrieb Radex',
  },
  {
    title: 'Persönlicher Ansprechpartner',
    image: '/img/badsanierung-usp-projekte.png',
    icon: UserCheck,
    imageAlt: 'Persönliche Betreuung während der Badsanierung',
  },
  {
    title: 'Festpreisangebote',
    image: '/img/ablauf-step-angebot.png',
    icon: ShieldCheck,
    imageAlt: 'Transparentes Festpreisangebot für die Badsanierung',
  },
  {
    title: 'Rhein-Main-Gebiet',
    image: '/img/badsanierung-usp-rheinmain.png',
    icon: Home,
    imageAlt: 'Badsanierungen im Rhein-Main-Gebiet',
  },
];

const phaseCards = [
  {
    title: 'Erstberatung',
    desc: 'Wir besprechen Ihre Wünsche, beantworten offene Fragen und verschaffen uns einen ersten Überblick über Ihr Projekt.',
    image: '/img/ablauf-bad-phase-erstberatung.png',
    imageAlt: 'Erstberatung zur Badsanierung mit Projektmanager und Badplänen',
  },
  {
    title: 'Besichtigung & Aufmaß',
    desc: 'Vor Ort erfassen wir alle Maße, technischen Voraussetzungen und Besonderheiten Ihres Badezimmers.',
    image: '/img/ablauf-bad-phase-besichtigung.png',
    imageAlt: 'Aufmaß im Badezimmer mit Laser-Messgerät',
  },
  {
    title: 'Planung & Angebot',
    desc: 'Auf Basis der Besichtigung erstellen wir ein individuelles Badkonzept und ein transparentes Festpreisangebot.',
    image: '/img/ablauf-bad-phase-planung.png',
    imageAlt: 'Badplanung mit Grundrissen, Angebot und Materialmustern',
  },
  {
    title: 'Vorbereitung',
    desc: 'Materialien werden bestellt und alle beteiligten Gewerke terminlich aufeinander abgestimmt.',
    image: '/img/ablauf-bad-phase-vorbereitung.png',
    imageAlt: 'Materialbestellung und Bauzeitplan für die Badsanierung',
  },
  {
    title: 'Ausführung',
    desc: 'Die Badsanierung erfolgt Schritt für Schritt nach dem abgestimmten Bauablauf durch koordinierte Fachbetriebe.',
    image: '/img/ablauf-bad-phase-ausfuehrung.png',
    imageAlt: 'Sanitär, Fliesen und Elektro bei der Badsanierung',
  },
  {
    title: 'Abnahme & Übergabe',
    desc: 'Nach Abschluss aller Arbeiten erfolgt die gemeinsame Qualitätskontrolle und die schlüsselfertige Übergabe Ihres neuen Badezimmers.',
    image: '/img/ablauf-bad-phase-abnahme.png',
    imageAlt: 'Schlüsselfertige Übergabe des fertigen Badezimmers',
  },
];

const benefitCards = [
  {
    title: 'Klare Termine',
    desc: 'Alle Projektphasen werden frühzeitig geplant.',
    icon: Calendar,
  },
  {
    title: 'Koordinierte Gewerke',
    desc: 'Alle Arbeiten greifen optimal ineinander.',
    icon: Workflow,
  },
  {
    title: 'Mehr Sicherheit',
    desc: 'Klare Abläufe reduzieren Planungsrisiken.',
    icon: ShieldCheck,
  },
  {
    title: 'Weniger Wartezeiten',
    desc: 'Durch gute Vorbereitung entstehen effizientere Bauabläufe.',
    icon: Clock,
  },
  {
    title: 'Qualitätskontrolle',
    desc: 'Jede Bauphase wird sorgfältig überprüft.',
    icon: ClipboardCheck,
  },
  {
    title: 'Persönliche Betreuung',
    desc: 'Ein Ansprechpartner begleitet Ihr Projekt von Anfang bis Ende.',
    icon: Handshake,
  },
];

const whyRadexCards = [
  {
    title: 'Klare Projektstruktur',
    desc: 'Alle Bauphasen werden vor Beginn der Arbeiten detailliert geplant und zeitlich aufeinander abgestimmt.',
    icon: Workflow,
  },
  {
    title: 'Ein fester Ansprechpartner',
    desc: 'Während des gesamten Projekts steht Ihnen eine zentrale Ansprechperson für alle Fragen zur Verfügung.',
    icon: UserCheck,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Technische Planung und Baukoordination erfolgen unter fachlicher Leitung eines SHK-Meisters.',
    icon: Award,
  },
  {
    title: 'Kontinuierliche Qualitätskontrolle',
    desc: 'Jede Bauphase wird kontrolliert, dokumentiert und gemeinsam mit Ihnen abgestimmt.',
    icon: ClipboardCheck,
  },
];

const journeySteps = [
  {
    title: 'Anfrage',
    desc: 'Sie kontaktieren uns telefonisch, über das Kontaktformular oder per WhatsApp.',
    icon: Phone,
  },
  {
    title: 'Besichtigung',
    desc: 'Wir besichtigen Ihr Badezimmer, nehmen Aufmaß und besprechen Ihre Wünsche persönlich vor Ort.',
    icon: Home,
  },
  {
    title: 'Planung & Angebot',
    desc: 'Sie erhalten ein individuelles Badkonzept und ein transparentes Festpreisangebot.',
    icon: FileText,
  },
  {
    title: 'Ausführung',
    desc: 'Unsere Fachbetriebe setzen Ihr Projekt nach einem abgestimmten Zeitplan um.',
    icon: Wrench,
  },
  {
    title: 'Qualitätskontrolle',
    desc: 'Alle Arbeiten werden sorgfältig geprüft und gemeinsam mit Ihnen kontrolliert.',
    icon: SearchCheck,
  },
  {
    title: 'Übergabe',
    desc: 'Ihr neues Badezimmer wird schlüsselfertig übergeben und gemeinsam abgenommen.',
    icon: KeyRound,
  },
];

const projectStatuses = [
  'Anfrage',
  'Besichtigung',
  'Planung',
  'Angebot',
  'Materialbestellung',
  'Baustart',
  'Sanitär',
  'Elektro',
  'Fliesen',
  'Montage',
  'Qualitätskontrolle',
  'Übergabe',
];

const projectExamples = [
  {
    title: '5 m² Badezimmer',
    desc: 'Projektlaufzeit: ca. 8 Arbeitstage. Komplette Modernisierung mit neuer Dusche, Fliesen und Sanitärkeramik.',
    image: '/img/badsanierung-ref-1.png',
    imageAlt: 'Symbolbild: modernisiertes kleines Badezimmer',
    cta: 'Projekt ansehen →',
    to: '/badsanierung-rhein-main',
  },
  {
    title: '8 m² Familienbad',
    desc: 'Projektlaufzeit: ca. 14 Arbeitstage. Komplettsanierung inklusive neuer Leitungen, Elektroinstallation und bodengleicher Dusche.',
    image: '/img/badsanierung-thema-komplett.png',
    imageAlt: 'Symbolbild: Komplettsanierung Familienbad',
    cta: 'Projekt ansehen →',
    to: '/badsanierung/badezimmer-sanieren',
  },
  {
    title: '12 m² Designbad',
    desc: 'Projektlaufzeit: ca. 20 Arbeitstage. Individuelle Planung mit Designmöbeln, Maßanfertigungen und hochwertiger Ausstattung.',
    image: '/img/badsanierung-ref-2.png',
    imageAlt: 'Symbolbild: hochwertiges Designbad',
    cta: 'Projekt ansehen →',
    to: '/badplanung',
  },
];

const faqsData = [
  {
    q: 'Wie beginnt eine Badsanierung?',
    a: 'Jede Badsanierung beginnt mit einer persönlichen Beratung und einer Besichtigung vor Ort. Dabei erfassen wir die räumlichen Gegebenheiten, besprechen Ihre Wünsche und entwickeln gemeinsam ein individuelles Konzept für Ihr neues Badezimmer.',
  },
  {
    q: 'Wann erhalte ich mein Angebot?',
    a: 'Nach der Besichtigung und der Projektplanung erstellen wir ein transparentes Festpreisangebot mit allen vereinbarten Leistungen.',
  },
  {
    q: 'Wer koordiniert die einzelnen Gewerke?',
    a: 'Die gesamte Projektkoordination übernimmt Radex. Alle beteiligten Fachbetriebe werden zeitlich aufeinander abgestimmt, damit die Arbeiten möglichst reibungslos ablaufen.',
  },
  {
    q: 'Habe ich während der Bauphase einen festen Ansprechpartner?',
    a: 'Ja. Während des gesamten Projekts steht Ihnen ein persönlicher Ansprechpartner zur Verfügung, der alle Abläufe koordiniert und Ihre Fragen beantwortet.',
  },
  {
    q: 'Wann erfolgt die Abnahme?',
    a: 'Nach Abschluss aller Arbeiten erfolgt eine gemeinsame Endkontrolle. Erst wenn alle vereinbarten Leistungen umgesetzt wurden, wird Ihr neues Badezimmer offiziell übergeben.',
  },
  {
    q: 'In welchen Regionen führt Radex Badsanierungen durch?',
    a: 'Von Rödermark aus begleitet Radex private Eigentümer und Modernisierungsprojekte im gesamten Rhein-Main-Gebiet – von der Planung bis zur schlüsselfertigen Übergabe.',
  },
];

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH.',
  'Viele Eigentümer möchten vor Beginn einer Badsanierung genau wissen, was sie erwartet. Deshalb legen wir großen Wert auf einen klar strukturierten Ablauf. Bereits vor dem ersten Arbeitstag werden alle Termine, Materialien und beteiligten Gewerke sorgfältig geplant und aufeinander abgestimmt.',
  'Während der gesamten Bauphase begleiten wir Ihr Projekt persönlich, koordinieren die einzelnen Arbeitsschritte und stehen Ihnen als Ansprechpartner jederzeit zur Verfügung. Dadurch entsteht ein transparenter Ablauf mit kurzen Entscheidungswegen und hoher Planungssicherheit.',
  'Wenn Sie Ihr Badezimmer modernisieren möchten, beraten wir Sie gerne persönlich. Senden Sie uns einfach Fotos Ihres Badezimmers oder vereinbaren Sie einen Termin mit unserem Team. Gemeinsam besprechen wir den optimalen Ablauf für Ihr Projekt.',
];

const videoTrustPoints = [
  'Klare Projektstruktur',
  'Transparente Bauphasen',
  'SHK-Meisterbetrieb',
  'Persönlicher Ansprechpartner',
];

const massnahmeOptions = [
  'Komplettbadsanierung',
  'Badmodernisierung',
  'Badrenovierung',
  'Gäste-WC',
  'Barrierefreies Bad',
  'Ich bin noch unsicher',
];

const startOptions = ['Sofort', 'Innerhalb von 3 Monaten', 'Innerhalb von 6 Monaten', 'Termin noch offen'];

function AblaufContactSection() {
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

    const subject = `Badsanierung Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Maßnahme: ${massnahme}`,
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
            <p>Besprechen Sie den Ablauf Ihrer Badsanierung direkt mit unserem Team.</p>
            <a href="tel:+496074960620" className="br-ablauf-contact-number">
              06074 960620
            </a>
            <a href="tel:+496074960620" className="btn br-btn-orange">
              Jetzt anrufen
            </a>
          </div>

          <div className="br-ablauf-contact-card">
            <div className="br-ablauf-contact-icon br-ablauf-contact-icon--wa">
              <MessageSquare size={24} strokeWidth={1.5} />
            </div>
            <h3>Fotos per WhatsApp</h3>
            <p>Senden Sie uns Fotos Ihres Badezimmers und erhalten Sie eine erste Einschätzung zum Projektablauf.</p>
            <a
              href="https://wa.me/496074960620"
              target="_blank"
              rel="noopener noreferrer"
              className="btn br-btn-whatsapp"
            >
              Fotos senden. Erste Einschätzung erhalten.
            </a>
          </div>

          <div className="br-ablauf-contact-card">
            <div className="br-ablauf-contact-icon">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <h3>E-Mail-Anfrage</h3>
            <p>Schicken Sie uns Ihre Projektinformationen bequem per E-Mail.</p>
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
              Beschreiben Sie Ihr Projekt möglichst genau. Gemeinsam planen wir den optimalen Ablauf Ihrer Badsanierung
              und begleiten Sie bis zur fertigen Übergabe.
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
                <span>Wann möchten Sie starten?</span>
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
                placeholder="Beschreiben Sie Ihr Badezimmer und Ihre Wünsche möglichst genau."
              />
            </label>
            <label className="br-input-group">
              <span>Fotos hochladen</span>
              <input type="file" name="fotos" accept="image/*" multiple />
              <small>
                Laden Sie Fotos Ihres Badezimmers hoch. Dadurch können wir den Projektumfang und den Ablauf besser
                einschätzen.
              </small>
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

export default function AblaufBadsanierungLanding() {
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash.slice(1);
    if (ablaufBadsanierungSeoSections.some((s) => s.id === hash)) {
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
    title: 'Ablauf Badsanierung | Schritt für Schritt zum neuen Bad',
    description:
      'Wer eine Badsanierung plant, stellt sich früh eine ganz konkrete Frage: Was passiert eigentlich wann – und in welcher Reihenfolge? Radex erklärt alle Schritte – von Beratung und Planung bis Abnahme und Übergabe.',
    path: '/ablauf-badsanierung',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Ablauf einer Badsanierung',
        description:
          'Strukturierter Ablauf einer Badsanierung mit Radex Objektmanagement GmbH – von der Erstberatung bis zur schlüsselfertigen Übergabe im Rhein-Main-Gebiet.',
        path: '/ablauf-badsanierung',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">SHK-Meisterbetrieb · Projektablauf · Rhein-Main-Gebiet</p>
            <h1 className="br-hero-title">
              Ablauf einer Badsanierung
              <br />
              <span>Schritt für Schritt zum neuen Bad</span>
            </h1>
            <p className="br-hero-lead">
              Struktur. Transparenz. Sicherheit – von der ersten Beratung bis zur schlüsselfertigen Übergabe.
            </p>
            <p className="br-hero-text">
              Wer eine Badsanierung plant, möchte wissen, was wann passiert. Radex erklärt den kompletten Projektablauf
              Ihrer Badsanierung im Rhein-Main-Gebiet – klar strukturiert, transparent begleitet und unter fachlicher
              Leitung eines SHK-Meisterbetriebs.
            </p>
            <AblaufCTABlock isHero primaryHref="#projektphasen" />
            <p className="br-hero-micro">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modernes Badezimmer nach einer strukturierten Badsanierung"
          title="Ablauf Badsanierung | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <TrustUspCards cards={trustCards} />
        </div>
      </section>

      {/* 3 Projektphasen */}
      <section id="projektphasen" className="br-section br-bg-light br-ablauf-phases-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Die einzelnen Projektphasen Ihrer Badsanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jede Badsanierung folgt einem strukturierten Ablauf. Bereits vor Beginn der Arbeiten werden alle Gewerke,
              Materialien und Termine sorgfältig geplant. Dadurch entsteht ein koordinierter Bauablauf, der unnötige
              Wartezeiten reduziert und für Transparenz während des gesamten Projekts sorgt.
            </p>
          </div>
          <ImageCardGrid cards={phaseCards} />
        </div>
      </section>

      {/* 4 Vorteile strukturierter Ablauf */}
      <SectionTransition title="Warum ein strukturierter Ablauf so wichtig ist">
        Eine professionelle Organisation reduziert Verzögerungen, erleichtert die Zusammenarbeit aller Gewerke und
        schafft für Sie maximale Planungssicherheit. Jeder Arbeitsschritt baut auf dem vorherigen auf und wird
        sorgfältig koordiniert.
      </SectionTransition>

      <section className="br-section br-ablauf-benefits">
        <div className="container">
          <PremiumIconCards cards={benefitCards} largeIcons />
          <div className="br-ablauf-cta-wrap">
            <AblaufCTABlock centered primaryHref="#projektablauf" />
          </div>
        </div>
      </section>

      <SectionTransition title="Warum Eigentümer ihre Badsanierung Radex anvertrauen">
        Im nächsten Abschnitt erfahren Sie, warum eine strukturierte Projektorganisation und die langjährige Erfahrung
        von Radex entscheidend für eine erfolgreiche Badsanierung im Rhein-Main-Gebiet sind.
      </SectionTransition>

      {/* 5 Warum Radex */}
      <section className="br-section br-bg-light br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex auf einen strukturierten Projektablauf setzt</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine erfolgreiche Badsanierung beginnt nicht mit dem ersten Handwerkertermin, sondern mit einer
              professionellen Organisation. Jeder Arbeitsschritt wird vorbereitet, alle beteiligten Gewerke werden
              aufeinander abgestimmt und der gesamte Ablauf wird zentral koordiniert. Dadurch entstehen transparente
              Prozesse, kurze Entscheidungswege und ein reibungsloser Projektverlauf.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      {/* 6 Bernd Knoop Video */}
      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Bernd Knoop, SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH, erklärt im Video, wie eine
        professionelle Projektorganisation den Ablauf einer Badsanierung vereinfacht und warum eine gute Vorbereitung
        für ein erfolgreiches Ergebnis entscheidend ist.
      </SectionTransition>

      <section id="video" className="br-section br-ablauf-video-section">
        <div className="container br-ablauf-video-container">
          <div className="br-ablauf-video-frame">
            <video
              src={testVideo}
              controls
              playsInline
              preload="none"
              poster={VIDEO_POSTER}
              title="Bernd Knoop – Ablauf einer Badsanierung"
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
            <AblaufCTABlock centered primaryHref="#projektablauf" />
          </div>

          <div className="br-ablauf-video-transcript">
            <h3>Video-Transkript</h3>
            {videoTranscript.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition title="So läuft Ihr Projekt Schritt für Schritt ab">
        Von der ersten Anfrage bis zur fertigen Übergabe begleiten wir Sie durch jede einzelne Projektphase. So
        behalten Sie jederzeit den Überblick und wissen genau, welche Schritte als Nächstes folgen.
      </SectionTransition>

      {/* 7 Projektablauf Timeline */}
      <HorizontalProcessTimeline
        title="Ihr Weg zum neuen Badezimmer"
        intro="Jede Badsanierung folgt einem klaren Ablauf. Bereits vor dem ersten Arbeitstag werden alle Termine, Materialien und beteiligten Gewerke sorgfältig vorbereitet. So wissen Sie jederzeit, welche Projektphase gerade ansteht und was als Nächstes passiert."
        steps={journeySteps}
      />

      {/* 8 Project Status */}
      <SectionTransition title="Projektstatus jederzeit nachvollziehbar">
        Während der gesamten Bauphase behalten Sie den Überblick. Durch die strukturierte Projektorganisation wissen
        Sie jederzeit, welche Arbeiten bereits abgeschlossen wurden und welche Schritte als Nächstes folgen.
      </SectionTransition>

      <ProjectStatusTrack statuses={projectStatuses} />

      <section className="br-section br-ablauf-cta-box-section">
        <div className="container">
          <div className="br-ablauf-cta-box">
            <h2 className="br-section-title">Sie möchten wissen, wie Ihr Projekt abläuft?</h2>
            <p className="br-section-subtitle">
              Wir erklären Ihnen jeden Schritt persönlich und begleiten Sie von der ersten Beratung bis zur fertigen
              Übergabe Ihres Badezimmers.
            </p>
            <AblaufCTABlock centered showThird primaryHref="#kontakt" />
          </div>
        </div>
      </section>

      {/* 9 Praxisbeispiele */}
      <SectionTransition title="Projektbeispiele aus dem Rhein-Main-Gebiet">
        Die folgenden Beispiele zeigen typische Badsanierungen mit unterschiedlichem Umfang. Sie vermitteln einen
        realistischen Eindruck davon, wie strukturierte Projektabläufe in der Praxis umgesetzt werden.
      </SectionTransition>

      <section className="br-section br-bg-light br-ablauf-examples-section">
        <div className="container">
          <div className="br-ablauf-examples-grid">
            {projectExamples.map((example) => (
              <article key={example.title} className="br-ablauf-example-card">
                <div
                  className="br-ablauf-example-img"
                  style={{ backgroundImage: `url(${example.image})` }}
                  role="img"
                  aria-label={example.imageAlt}
                >
                  <span className="br-ablauf-symbolbild">Symbolbild</span>
                </div>
                <div className="br-ablauf-example-body">
                  <h3>{example.title}</h3>
                  <p>{example.desc}</p>
                  <Link to={example.to} className="br-btn-orange">
                    {example.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#kontakt" className="btn br-btn-orange">
              Jetzt Projekt besprechen
            </a>
          </div>
        </div>
      </section>

      <SectionTransition title="Häufige Fragen zum Ablauf einer Badsanierung">
        Im nächsten Abschnitt beantworten wir häufig gestellte Fragen rund um Projektablauf, Organisation, Bauphasen und
        die Zusammenarbeit während einer Badsanierung.
      </SectionTransition>

      {/* 10 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zum Ablauf einer Badsanierung"
        intro="Vor Beginn einer Badsanierung möchten viele Eigentümer wissen, welche Schritte auf sie zukommen und wie das Projekt organisiert wird. Hier beantworten wir die häufigsten Fragen rund um den Ablauf einer professionellen Badsanierung."
      />

      <SectionTransition title="Starten Sie Ihre Badsanierung mit einem klaren Plan">
        Ein strukturierter Ablauf schafft Sicherheit und sorgt für einen reibungslosen Projektverlauf. Gerne begleiten
        wir Sie Schritt für Schritt – von der ersten Beratung bis zu Ihrem fertigen Badezimmer.
      </SectionTransition>

      {/* 11 Kontakt */}
      <AblaufContactSection />

      {/* 12 Weitere Informationen – city-style side drawer */}
      <section id="seo-informationen" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center">
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
            >
              <h2 className="br-section-title">
                Weitere Informationen zum Ablauf einer Badsanierung
              </h2>
              <ChevronDown size={28} className="br-seo-toc-toggle-icon" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className={`br-city-seo-panel-root ${seoPanelOpen ? 'open' : ''}`}
          aria-hidden={!seoPanelOpen}
        >
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
            aria-labelledby="ablauf-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="ablauf-seo-panel-title">Weitere Informationen zum Ablauf einer Badsanierung</h2>
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
                {ablaufBadsanierungSeoIntro}
              </div>

              {ablaufBadsanierungSeoSections.map((section) => (
                <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                  <h3>{section.title}</h3>
                  <div className="br-ablauf-seo-article-body">{section.content}</div>
                </article>
              ))}

              <a
                href="#kontakt"
                className="br-city-seo-article-cta"
                onClick={() => setSeoPanelOpen(false)}
              >
                Ablauf besprechen – Beratung anfragen
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
