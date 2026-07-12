import { useEffect } from 'react';
import { Camera, Building2, Home, Landmark, Ruler, Calendar, Layers, Wrench } from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';
import {
  SharedCTABlock,
  PremiumIconCards,
  FaqAccordion,
  SeoAccordionSection,
  RadexLiveSection,
  LandingContactSection,
} from '../components/landing/SharedLandingParts';

const HERO_IMAGE = '/img/boden.webp';

const typeCards = [
  { to: '/wohnung-sanieren-kosten-rhein-main', title: 'Wohnungssanierung', desc: 'Kosten einer Eigentumswohnung oder Bestandswohnung berechnen.', icon: Building2, image: '/img/wohnzimmer.webp' },
  { to: '/haus-sanieren-kosten-rhein-main', title: 'Haussanierung', desc: 'Erste Orientierung für die Kosten einer kompletten Haussanierung.', icon: Home, image: '/img/renov1.webp' },
  { to: '/altbau-sanieren-kosten-rhein-main', title: 'Altbausanierung', desc: 'Kosten einer Altbausanierung realistisch einschätzen.', icon: Landmark, image: '/img/wohnzimmer.webp' },
];

const factorCards = [
  { title: 'Größe der Immobilie', desc: 'Je größer die Fläche, desto höher der Gesamtaufwand für Material und Arbeitszeit.', icon: Ruler },
  { title: 'Baujahr & Zustand', desc: 'Ältere Gebäude erfordern oft mehr Vorarbeiten bei Leitungen, Abdichtung und Bausubstanz.', icon: Calendar },
  { title: 'Sanitärinstallation', desc: 'Neue Leitungen, Bäder und Heizung beeinflussen den Preis erheblich.', icon: Wrench },
  { title: 'Elektroinstallation', desc: 'Erneuerung der Elektrik, Zählerschrank und Smart-Home-Vorbereitung.', icon: Layers },
  { title: 'Materialauswahl', desc: 'Basis-, Komfort- oder Premium-Ausstattung bestimmen die Investitionshöhe.', icon: Layers },
  { title: 'Umfang der Arbeiten', desc: 'Teilsanierung oder Komplettsanierung – der Umfang ist der wichtigste Kostenfaktor.', icon: Building2 },
];

const faqsData = [
  { q: 'Was kostet eine Sanierung?', a: 'Die Kosten hängen von Größe, Zustand, Baujahr und gewünschter Ausstattung ab. Nutzen Sie unseren Rechner für eine erste Orientierung – das verbindliche Festpreisangebot folgt nach Besichtigung.' },
  { q: 'Was beeinflusst den Preis?', a: 'Größe der Immobilie, Baujahr, Zustand der Bausubstanz, Sanitär- und Elektroinstallation, Materialauswahl und Umfang der Arbeiten.' },
  { q: 'Erhalte ich ein Festpreisangebot?', a: 'Ja. Nach Besichtigung erstellen wir ein transparentes Festpreisangebot ohne versteckte Kosten.' },
  { q: 'Wie genau ist der Rechner?', a: 'Der Rechner liefert eine erste Orientierung auf Basis typischer Projekte. Der tatsächliche Preis wird nach Besichtigung individuell kalkuliert.' },
  { q: 'Kann ich Fotos per WhatsApp senden?', a: 'Ja. Senden Sie uns Fotos Ihrer Immobilie per WhatsApp für eine erste fachliche Einschätzung.' },
  { q: 'Arbeiten Sie im gesamten Rhein-Main-Gebiet?', a: 'Ja. Radex ist in über 60 Städten im Rhein-Main-Gebiet tätig.' },
];

const seoAccordions = [
  {
    title: 'Sanierungskosten verstehen',
    content: (
      <p className="text-gray-600">Sanierungskosten hängen von vielen Faktoren ab. Nutzen Sie den <Link to="/sanierungskosten-rechner">Sanierungskosten-Rechner</Link> oder die spezifischen Seiten für <Link to="/wohnungssanierung-kosten">Wohnungssanierung Kosten</Link> und <Link to="/altbausanierung-kosten">Altbausanierung Kosten</Link>.</p>
    ),
  },
  {
    title: 'Sanierungsarten im Überblick',
    content: (
      <ul className="space-y-2 text-gray-600">
        <li><Link to="/wohnungssanierung-rhein-main">Wohnungssanierung</Link></li>
        <li><Link to="/haussanierung-rhein-main">Haussanierung</Link></li>
        <li><Link to="/altbausanierung-rhein-main">Altbausanierung</Link></li>
        <li><Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link></li>
      </ul>
    ),
  },
  {
    title: 'Festpreis & Beratung',
    content: (
      <p className="text-gray-600">Nach Besichtigung erhalten Sie ein individuelles Festpreisangebot. Zurück zur <Link to="/sanierung-rhein-main">Sanierung Rhein-Main</Link> oder <a href="/#kontakt">Kontakt aufnehmen</a>.</p>
    ),
  },
];

export default function SanierungskostenLanding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Sanierungskosten im Rhein-Main-Gebiet | Kosten einer Sanierung berechnen | Radex',
    description: 'Sanierungskosten für Wohnung, Haus und Altbau einfach einschätzen. Nutzen Sie den Radex Sanierungskosten-Rechner und erhalten Sie eine erste Orientierung für Ihr Projekt.',
    path: '/sanierungskosten-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">Sanierungskosten im Rhein-Main-Gebiet</h1>
            <p className="br-hero-subtitle">Was kostet eine Sanierung?</p>
            <p className="br-hero-text">
              Die Kosten einer Sanierung hängen von vielen Faktoren ab. Größe der Immobilie, Baujahr, Zustand der Bausubstanz, technische Anlagen sowie Ihre individuellen Ausstattungswünsche beeinflussen den Gesamtpreis. Mit dem Radex Sanierungskosten-Rechner erhalten Sie innerhalb weniger Sekunden eine erste Orientierung für Ihr Projekt. Anschließend beraten wir Sie persönlich und erstellen ein transparentes Festpreisangebot.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Sanierung möchten Sie berechnen?</h2>
            <p className="br-section-subtitle">Jede Immobilie ist unterschiedlich. Wählen Sie die passende Sanierungsart.</p>
          </div>
          <PremiumIconCards cards={typeCards} linked />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Sanierungskosten-Rechner</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Mit wenigen Angaben erhalten Sie eine erste Orientierung zu den möglichen Sanierungskosten.
            </p>
          </div>
        </div>
        <SanierungskostenRechner defaultType="wohnung" compact />
        <div className="container" style={{ maxWidth: '720px', marginTop: '24px' }}>
          <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, textAlign: 'center' }}>
            <strong>Hinweis:</strong> Die angezeigten Werte dienen ausschließlich als Orientierung. Der tatsächliche Preis hängt vom Zustand der Immobilie, den gewünschten Materialien und dem Umfang der Arbeiten ab. Nach einer Besichtigung erhalten Sie ein individuelles Festpreisangebot.
          </p>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Faktoren beeinflussen die Sanierungskosten?</h2>
          </div>
          <PremiumIconCards cards={factorCards} />
        </div>
      </section>

      <RadexLiveSection heroImage="/img/leistungen-radex-live.webp" />

      <FaqAccordion faqs={faqsData} />

      <LandingContactSection
        title="Jetzt kostenlos beraten lassen"
        intro="Sie möchten wissen, was Ihre Sanierung kostet? Nutzen Sie den Rechner und vereinbaren Sie anschließend eine persönliche Beratung."
      />

      <SeoAccordionSection title="Weitere Informationen" accordions={seoAccordions} />
    </main>
  );
}
