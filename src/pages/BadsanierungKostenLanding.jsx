import { useEffect, useState } from 'react';
import {
  Award,
  Calculator,
  CheckCircle2,
  FileText,
  FolderOpen,
  Handshake,
  Image as ImageIcon,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Ruler,
  Send,
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
  badsanierungKostenSeoIntro,
  badsanierungKostenSeoSections,
} from '../data/badsanierungKostenSeoContent';

const HERO_IMAGE = '/img/badsanierung-kosten-hero.webp';
const VIDEO_POSTER = '/img/ablauf-bad-consultation.png';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Badsanierung Kosten Rhein-Main | Preise & Faktoren';
const META_DESCRIPTION =
  'Badsanierung Kosten im Rhein-Main-Gebiet: Radex erklärt Preisfaktoren für Badgröße, Sanitär, Dusche, Fliesen, Elektro, Planung und Ausstattung.';

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
    title: 'Realistische Orientierung',
    desc: 'Preisbeispiele auf Basis typischer Sanierungsprojekte.',
    icon: Calculator,
  },
  {
    title: 'Festpreisangebot',
    desc: 'Nach der Besichtigung erhalten Sie ein transparentes Angebot.',
    icon: FileText,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter meisterlicher Leitung.',
    icon: Award,
  },
  {
    title: 'Über 500 Projekte',
    desc: 'Erfahrung aus zahlreichen Badsanierungen.',
    icon: FolderOpen,
  },
  {
    title: 'Rhein-Main-Gebiet',
    desc: 'Von Rödermark aus täglich im Einsatz.',
    icon: MapPin,
  },
  {
    title: 'Persönliche Beratung',
    desc: 'Individuelle Einschätzung statt Standardpreise.',
    icon: Phone,
  },
];

const factorCards = [
  {
    title: 'Größe des Badezimmers',
    desc: 'Je größer das Badezimmer, desto höher sind Material- und Arbeitsaufwand.',
    image: '/img/bad-kosten-planung-materialien-radex.webp',
    imageAlt: 'Symbolbild: Badgrundriss und Planungsmaterialien auf dem Arbeitstisch',
  },
  {
    title: 'Sanitärinstallation',
    desc: 'Müssen Wasser- oder Abwasserleitungen erneuert werden, erhöht sich der technische Aufwand.',
    image: '/img/badsanierung-festpreis-umsetzung.webp',
    imageAlt: 'Symbolbild: Sanitärinstallation bei einer Badsanierung',
  },
  {
    title: 'Fliesen & Oberflächen',
    desc: 'Materialqualität, Fliesenformat und Verlegeart beeinflussen den Gesamtpreis.',
    image: '/img/badplanung-materialauswahl.png',
    imageAlt: 'Symbolbild: Fliesen- und Materialauswahl für das Bad',
  },
  {
    title: 'Ausstattung',
    desc: 'Dusche, Badewanne, Waschtisch, WC und Armaturen bestimmen einen großen Teil der Gesamtkosten.',
    image: '/img/badausstattung-preisfaktoren-radex.webp',
    imageAlt: 'Symbolbild: Moderne Sanitärausstattung und Armaturen',
  },
  {
    title: 'Elektro & Beleuchtung',
    desc: 'Neue Beleuchtung, Steckdosen und elektrische Anschlüsse fließen ebenfalls in die Kalkulation ein.',
    image: '/img/badsanierung-dauer-phase-montage.webp',
    imageAlt: 'Symbolbild: Elektro- und Montagearbeiten im Badezimmer',
  },
  {
    title: 'Individuelle Wünsche',
    desc: 'Sonderlösungen, Designprodukte oder Maßanfertigungen wirken sich auf den Gesamtpreis aus.',
    image: '/img/badsanierung-festpreis-planung.webp',
    imageAlt: 'Symbolbild: Individuelle Badplanung mit Materialmustern',
  },
];

const priceCards = [
  {
    title: 'Basis',
    price: 'ca. 8.000 € – 15.000 €',
    desc: 'Funktionale Komplettsanierung mit langlebigen Standardmaterialien und moderner Sanitärkeramik.',
  },
  {
    title: 'Komfort',
    price: 'ca. 15.000 € – 25.000 €',
    desc: 'Hochwertige Ausstattung, bodengleiche Dusche, großformatige Fliesen und moderne Badmöbel.',
  },
  {
    title: 'Premium',
    price: 'ab 25.000 €',
    desc: 'Individuelle Planung, Designprodukte, exklusive Materialien und umfangreiche Sonderlösungen.',
  },
];

const whyRadexCards = [
  {
    title: 'Realistische Preisorientierung',
    desc: 'Keine Lockangebote – sondern nachvollziehbare Preisbereiche auf Basis echter Sanierungsprojekte.',
    icon: Calculator,
  },
  {
    title: 'Festpreis nach Besichtigung',
    desc: 'Nach der Vor-Ort-Besichtigung erhalten Sie ein transparentes Angebot ohne versteckte Kosten.',
    icon: FileText,
  },
  {
    title: 'Individuelle Planung',
    desc: 'Jedes Badezimmer wird separat bewertet und entsprechend kalkuliert.',
    icon: Ruler,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Fachgerechte Planung und Ausführung unter meisterlicher Leitung.',
    icon: Award,
  },
];

const processSteps = [
  {
    title: 'Kontaktaufnahme',
    desc: 'Sie schildern uns Ihr Projekt telefonisch, per Formular oder über WhatsApp.',
    icon: Phone,
  },
  {
    title: 'Fotos oder Besichtigung',
    desc: 'Erste Einschätzung anhand von Fotos oder persönlicher Vor-Ort-Termin.',
    icon: ImageIcon,
  },
  {
    title: 'Projektanalyse',
    desc: 'Wir bewerten Raumgröße, Technik, Leitungen und den gewünschten Ausstattungsstandard.',
    icon: Ruler,
  },
  {
    title: 'Kalkulation',
    desc: 'Alle Leistungen werden transparent und nachvollziehbar kalkuliert.',
    icon: Calculator,
  },
  {
    title: 'Festpreisangebot',
    desc: 'Sie erhalten ein detailliertes Angebot mit allen vereinbarten Leistungen.',
    icon: FileText,
  },
  {
    title: 'Projektstart',
    desc: 'Nach Ihrer Freigabe beginnt die Umsetzung Ihrer Badsanierung.',
    icon: Handshake,
  },
];

const projectExamples = [
  {
    title: '5 m² Badezimmer',
    subtitle: 'Basis · ca. 11.500 €',
    desc: 'Standardausstattung mit neuer Sanitärkeramik, Fliesen und moderner Dusche.',
    image: '/img/badsanierung-planen-rhein-main-radex.webp',
    imageAlt: 'Symbolbild: Basis-Preisbeispiel für ein kleines Badezimmer',
  },
  {
    title: '8 m² Familienbad',
    subtitle: 'Komfort · ca. 19.800 €',
    desc: 'Bodengleiche Dusche, großformatige Fliesen, neue Elektroinstallation und hochwertige Badmöbel.',
    image: '/img/ablauf-badsanierung-rhein-main-radex.webp',
    imageAlt: 'Symbolbild: Komfort-Preisbeispiel für ein Familienbad',
  },
  {
    title: '12 m² Designbad',
    subtitle: 'Premium · ab 32.000 €',
    desc: 'Individuelle Planung, Designausstattung, Maßmöbel und hochwertige Materialien.',
    image: '/img/fertiges-bad-nach-badsanierung-radex.webp',
    imageAlt: 'Symbolbild: Premium-Preisbeispiel für ein Designbad',
  },
];

const faqsData = [
  {
    q: 'Was kostet eine komplette Badsanierung?',
    a: 'Je nach Größe, Ausstattung und baulichen Gegebenheiten beginnen einfache Komplettsanierungen häufig ab etwa 8.000 Euro. Umfangreiche Premiumlösungen können deutlich darüber liegen. Eine persönliche Besichtigung ermöglicht eine realistische Kalkulation.',
  },
  {
    q: 'Warum unterscheiden sich die Preise so stark?',
    a: 'Jedes Badezimmer ist unterschiedlich. Raumgröße, Leitungen, Fliesen, Sanitärprodukte, Elektroarbeiten und individuelle Wünsche beeinflussen den Gesamtpreis.',
  },
  {
    q: 'Erhalte ich bei Radex einen Festpreis?',
    a: 'Ja. Nach einer Besichtigung erstellen wir ein transparentes Festpreisangebot mit allen vereinbarten Leistungen.',
  },
  {
    q: 'Kann ich die Kosten vorab einschätzen?',
    a: 'Ja. Nutzen Sie unseren Kostenrechner oder senden Sie uns Fotos Ihres Badezimmers. So erhalten Sie eine erste unverbindliche Orientierung.',
  },
  {
    q: 'Gibt es Fördermöglichkeiten?',
    a: 'Je nach geplanter Maßnahme können Förderprogramme oder Zuschüsse infrage kommen. Gerne beraten wir Sie zu den aktuellen Möglichkeiten.',
  },
  {
    q: 'In welchen Städten bietet Radex Badsanierungen an?',
    a: 'Von Rödermark aus betreut Radex Kunden im gesamten Rhein-Main-Gebiet und erstellt individuelle Angebote für private Eigentümer und Bestandsimmobilien.',
  },
];

const SEO_SECTION_CTAS = {
  'was-kostet-ein-neues-bad-und-warum-lasst-sich-das-so-schwer-pauschal-sagen': 'Badsanierung Kosten einschätzen lassen',
  'die-faktoren-hinter-den-badsanierung-kosten-was-den-preis-wirklich-bestimmt': 'Unverbindliches Angebot anfragen',
  'ausstattung-dusche-fliesen-und-elektro-die-weiteren-kostenpositionen': 'Unverbindlich anfragen',
  'barrierefreies-bad-und-ruckbau-zwei-positionen-mit-eigenem-gewicht': 'Kostenrahmen besprechen',
  'badbudget-planen-wie-eine-seriose-kostenschatzung-entsteht': 'Kostenlos beraten lassen',
  'badsanierung-kosten-transparent-einschatzen-was-radex-dabei-leitet': 'Beratung anfragen',
};

// Die ausführlichen Kosten-FAQ liegen bereits im sichtbaren FAQ-Accordion vor –
// hier ausschließen, um doppelten Inhalt zu vermeiden.
const seoArticleSections = badsanierungKostenSeoSections.filter(
  (section) => section.id !== 'haeufige-fragen-zu-den-badsanierung-kosten',
);

const videoTranscript = [
  'Mein Name ist Bernd Knoop. Ich bin SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH.',
  'Die häufigste Frage unserer Kunden lautet: Was kostet eine Badsanierung? Eine pauschale Antwort gibt es darauf nicht, denn jedes Badezimmer ist anders. Raumgröße, Leitungen, Materialauswahl und der gewünschte Ausstattungsstandard beeinflussen den späteren Gesamtpreis.',
  'Deshalb erhalten Sie bei Radex nach einer Besichtigung ein transparentes Festpreisangebot. Vorab helfen Ihnen unsere Preisbeispiele und der Kostenrechner dabei, Ihr Budget realistisch einzuschätzen.',
  'Senden Sie uns einfach Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Wir beraten Sie persönlich und ehrlich.',
];

const videoTrustPoints = [
  'Transparente Kalkulation',
  'Festpreisangebot',
  'SHK-Meisterbetrieb',
  'Persönliche Beratung',
];

const massnahmeOptions = [
  'Komplettbadsanierung',
  'Badmodernisierung',
  'Badrenovierung',
  'Gäste-WC',
  'Barrierefreies Bad',
  'Ich bin noch unsicher',
];

const sizeOptions = ['Bis 5 m²', '6 bis 8 m²', '9 bis 12 m²', 'Über 12 m²'];

function KostenContactSection() {
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
    const groesse = form.groesse.value;
    const nachricht = form.nachricht.value.trim();
    const files = form.fotos?.files;

    const subject = `Kosteneinschätzung Anfrage von ${vorname} ${nachname}`;
    const body = [
      `Name: ${vorname} ${nachname}`,
      `Telefon: ${telefon}`,
      `E-Mail: ${email}`,
      `PLZ / Ort: ${plzOrt}`,
      `Geplante Badsanierung: ${massnahme}`,
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
            <h3>Telefonische Beratung</h3>
            <p>Sprechen Sie direkt mit unserem Team und lassen Sie sich persönlich beraten.</p>
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
            <p>Senden Sie uns Fotos Ihres Badezimmers und erhalten Sie eine erste Kosteneinschätzung.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              Fotos senden. Erste Einschätzung erhalten.
            </a>
          </div>

          <div className="br-ablauf-contact-card">
            <div className="br-ablauf-contact-icon">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <h3>E-Mail-Anfrage</h3>
            <p>Senden Sie uns Ihr Projekt bequem per E-Mail.</p>
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
            <h2 className="br-section-title">Kostenlose Kosteneinschätzung anfragen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Beschreiben Sie Ihr Projekt möglichst genau. Je mehr Informationen wir erhalten, desto genauer können wir
              Ihre erste Kosteneinschätzung vorbereiten.
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
                <span>Welche Badsanierung planen Sie?</span>
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
                Laden Sie Bilder Ihres Badezimmers hoch. Dadurch können wir Ihre Anfrage besser einschätzen.
              </small>
            </label>
            <button type="submit" className="btn br-btn-orange br-ablauf-submit">
              Kostenlose Kosteneinschätzung anfragen <Send size={18} />
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

export default function BadsanierungKostenLanding() {
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
    path: '/badsanierung-kosten',
    image: 'https://radex-objektmanagement.de/img/badsanierung-kosten-rhein-main-radex.webp',
    jsonLd: [
      buildServiceSchema({
        name: 'Badsanierung Kosten',
        description: META_DESCRIPTION,
        path: '/badsanierung-kosten',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page badsanierung-kosten-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Badsanierung Kosten</p>
            <h1 className="br-hero-title">
              Was kostet eine Badsanierung
              <br />
              <span>im Rhein-Main-Gebiet?</span>
            </h1>
            <p className="br-hero-lead">Transparenz. Orientierung. Festpreise. Realistische Kosten.</p>
            <p className="br-hero-text">
              Die Kosten einer Badsanierung hängen von der Größe des Badezimmers, dem Zustand der vorhandenen Technik und
              der gewünschten Ausstattung ab. Mit unseren Preisbeispielen und dem Kostenrechner erhalten Sie eine erste
              realistische Orientierung für Ihr Projekt – transparent und unverbindlich.
            </p>
            <KostenCTA isHero showThird primaryHref="#kostenrechner" />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Eigentümer besprechen Badpläne mit Handwerker – Badsanierung Kosten"
          title="Badsanierung Kosten | Radex Objektmanagement"
        />
      </section>

      {/* 2 Trust Bar */}
      <section className="br-section br-trust-usp-section">
        <div className="container">
          <PremiumIconCards cards={trustCards} largeIcons />
        </div>
      </section>

      <SectionTransition title="Welche Faktoren beeinflussen die Kosten einer Badsanierung?">
        Kein Badezimmer gleicht dem anderen. Deshalb hängen die Gesamtkosten von mehreren Faktoren ab. Größe, Grundriss,
        Leitungen, Materialauswahl und gewünschte Ausstattung beeinflussen den späteren Gesamtpreis. Unsere
        Preisübersichten helfen Ihnen dabei, Ihr Budget realistisch einzuschätzen.
      </SectionTransition>

      {/* 3 Kostenfaktoren */}
      <section id="kostenfaktoren" className="br-section br-bg-light br-bw-vorteile-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Wodurch entstehen die Kosten einer Badsanierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Der Preis einer Badsanierung setzt sich aus vielen einzelnen Faktoren zusammen. Neben der Raumgröße spielen
              der Zustand der vorhandenen Leitungen, die gewünschte Ausstattung und der Umfang der Arbeiten eine
              entscheidende Rolle. Eine transparente Planung hilft dabei, das Budget realistisch einzuschätzen.
            </p>
          </div>
          <ImageCardGrid cards={factorCards} />
        </div>
      </section>

      <SectionTransition title="Preisbeispiele für typische Badsanierungen">
        Die folgenden Beispiele zeigen typische Preisbereiche für unterschiedliche Ausstattungsvarianten. Sie dienen als
        Orientierung und ersetzen kein individuelles Angebot nach einer Besichtigung.
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
            Die genannten Preisbereiche dienen ausschließlich der Orientierung. Nach einer Vor-Ort-Besichtigung erhalten
            Sie ein individuelles Festpreisangebot.
          </p>
        </div>
      </section>

      <SectionTransition title="Vorher kalkulieren – später sicher entscheiden">
        Mit einer realistischen Kosteneinschätzung können Sie Ihr Budget frühzeitig planen und verschiedene
        Ausstattungsvarianten besser vergleichen. Im nächsten Abschnitt können Sie Ihre persönliche Kostenschätzung
        berechnen.
      </SectionTransition>
      <div className="container br-ablauf-cta-wrap" style={{ marginBottom: '48px' }}>
        <KostenCTA centered primaryHref="#kostenrechner" />
      </div>

      {/* 5 Warum individuelle Kalkulation */}
      <section id="warum-radex" className="br-section br-bg-light br-ablauf-why-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum jede Badsanierung individuell kalkuliert wird</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Viele Eigentümer möchten bereits vor einer Anfrage wissen, mit welchen Kosten sie rechnen müssen. Da sich
              jedes Badezimmer hinsichtlich Größe, Grundriss, Leitungen und Ausstattung unterscheidet, lässt sich ein
              seriöser Festpreis erst nach einer Besichtigung erstellen. Mit unserer Erfahrung aus über 500 Projekten
              erhalten Sie jedoch bereits vorab eine realistische Orientierung.
            </p>
          </div>
          <div className="br-ablauf-why-grid">
            <PremiumIconCards cards={whyRadexCards} largeIcons />
          </div>
        </div>
      </section>

      <SectionTransition title="Persönlich erklärt von Bernd Knoop">
        Bernd Knoop, SHK-Meister und Betriebsleiter der Radex Objektmanagement GmbH, erklärt im Video, welche Faktoren
        den Preis einer Badsanierung beeinflussen und warum eine individuelle Planung langfristig Kosten spart.
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
              title="Bernd Knoop – Badsanierung Kosten"
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

      <SectionTransition title="So entsteht Ihr individuelles Festpreisangebot">
        Von der ersten Kontaktaufnahme bis zum fertigen Angebot analysieren wir Ihr Badezimmer Schritt für Schritt und
        erstellen eine transparente Kalkulation auf Grundlage Ihrer Wünsche und der tatsächlichen Gegebenheiten vor Ort.
      </SectionTransition>

      {/* 7 Angebotserstellung */}
      <section id="angebotserstellung" className="br-section br-bg-light br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So entsteht Ihr individuelles Festpreisangebot</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jede Badsanierung beginnt mit einer individuellen Analyse. Statt pauschaler Preise betrachten wir den
              tatsächlichen Zustand Ihres Badezimmers, Ihre Wünsche und den Umfang der geplanten Arbeiten. So erhalten
              Sie ein transparentes Angebot, das zu Ihrem Projekt passt.
            </p>
          </div>
          <PremiumIconCards cards={processSteps} largeIcons />
        </div>
      </section>

      <SectionTransition title="Nutzen Sie unseren Badsanierung-Kostenrechner">
        Mit wenigen Angaben erhalten Sie eine erste realistische Kosteneinschätzung. Der Rechner ersetzt kein Angebot,
        bietet jedoch eine gute Orientierung für die Budgetplanung.
      </SectionTransition>

      {/* 8 Kostenrechner */}
      <section id="kostenrechner" className="br-section">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="br-kosten-calc-intro">
            <p>
              Berechnen Sie jetzt Ihre unverbindliche Kosteneinschätzung für Ihre geplante Badsanierung.
            </p>
          </div>
          <SanierungskostenRechner defaultType="bad" compact badOnly id="badsanierung-kosten-rechner" showIntro={false} />
          <p className="br-festpreis-calc-note">
            Diese Berechnung dient ausschließlich als Orientierung. Nach einer Besichtigung kann der tatsächliche Preis
            je nach Zustand des Badezimmers, technischer Ausstattung und Materialauswahl höher oder niedriger ausfallen.
          </p>
          <div className="br-ablauf-cta-wrap" style={{ marginTop: '28px' }}>
            <KostenCTA
              centered
              primaryHref="#kontakt"
              primaryLabel="Kostenlose Beratung vereinbaren"
            />
          </div>
        </div>
      </section>

      <SectionTransition title="Typische Preisbeispiele aus der Praxis">
        Jedes Badezimmer ist unterschiedlich. Die folgenden Beispiele zeigen typische Preisbereiche vergleichbarer
        Projekte und helfen Ihnen dabei, die Größenordnung Ihrer geplanten Badsanierung besser einzuschätzen.
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
              Jetzt persönliche Kosteneinschätzung erhalten
            </a>
          </div>
        </div>
      </section>

      <SectionTransition title="Weitere Informationen zu den Kosten einer Badsanierung">
        Im folgenden Bereich finden Sie ausführliche Informationen rund um Preisfaktoren, Materialkosten,
        Arbeitsleistungen, Ausstattung, Budgetplanung sowie das Einsatzgebiet – transparent und ohne
        Pauschalversprechen, auf Basis realer Projekterfahrung im Rhein-Main-Gebiet.
      </SectionTransition>

      {/* 10 Ausführliche Kosten-Informationen (Langform) */}
      <section id="seo-informationen" className="br-section br-kosten-seo-article">
        <div className="container br-kosten-seo-container">
          <div className="br-ablauf-seo-intro br-kosten-seo-intro">{badsanierungKostenSeoIntro}</div>

          {seoArticleSections.map((section) => (
            <article key={section.id} id={section.id} className="br-kosten-seo-block">
              <h2 className="br-kosten-seo-title">{section.title}</h2>
              <div className="br-ablauf-seo-article-body">{section.content}</div>
              {SEO_SECTION_CTAS[section.id] && (
                <div className="br-ablauf-cta-wrap br-kosten-seo-cta">
                  <a href="#kontakt" className="btn br-btn-orange">
                    {SEO_SECTION_CTAS[section.id]}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 11 FAQ */}
      <FaqAccordion
        faqs={faqsData}
        title="Häufige Fragen zu den Kosten einer Badsanierung"
        intro="Viele Eigentümer möchten bereits vor der Planung wissen, welche Kosten auf sie zukommen können. Hier beantworten wir häufig gestellte Fragen rund um Preisgestaltung, Festpreisangebote und die wichtigsten Kostenfaktoren einer Badsanierung."
      />

      <SectionTransition title="Lassen Sie uns Ihr Budget gemeinsam planen">
        Ob erste Preisorientierung oder konkretes Angebot – wir beraten Sie persönlich und erstellen auf Wunsch eine
        transparente Kosteneinschätzung für Ihr Badezimmer.
      </SectionTransition>

      {/* 12 Kontakt */}
      <KostenContactSection />
    </main>
  );
}
