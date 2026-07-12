import { useEffect } from 'react';
import { Camera, Award, Users, ShieldCheck, MapPin, UserCheck, CalendarCheck } from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import {
  SharedCTABlock,
  PremiumIconCards,
  FaqAccordion,
  SeoAccordionSection,
  RadexLiveSection,
  ProcessSteps,
  LandingContactSection,
} from '../components/landing/SharedLandingParts';

const HERO_IMAGE = '/img/leistungen-hero.webp';

const processSteps = [
  { title: 'Kostenlose Erstberatung', desc: 'Wir besprechen Ihre Wünsche, Ziele und den Umfang Ihres Projekts.' },
  { title: 'Besichtigung vor Ort', desc: 'Unsere Experten verschaffen sich einen Überblick über die Immobilie und prüfen die baulichen Gegebenheiten.' },
  { title: 'Planung & Angebot', desc: 'Auf Basis Ihrer Wünsche entwickeln wir ein individuelles Sanierungskonzept und erstellen ein transparentes Festpreisangebot.' },
  { title: 'Projektvorbereitung', desc: 'Materialien werden bestellt, Termine koordiniert und sämtliche Gewerke optimal aufeinander abgestimmt.' },
  { title: 'Ausführung', desc: 'Unsere Fachbetriebe setzen die Sanierung professionell und sauber um. Während der gesamten Bauzeit steht Ihnen ein fester Ansprechpartner zur Verfügung.' },
  { title: 'Fertigstellung & Übergabe', desc: 'Nach Abschluss aller Arbeiten erfolgt die gemeinsame Endabnahme und die schlüsselfertige Übergabe Ihrer modernisierten Immobilie.' },
];

const whyPlanningCards = [
  { title: 'Ein Ansprechpartner', desc: 'Von der Erstberatung bis zur Übergabe – ein fester Ansprechpartner für Ihr gesamtes Projekt.', icon: UserCheck },
  { title: 'Klare Bauabläufe', desc: 'Strukturierte Reihenfolge aller Gewerke ohne Terminkollisionen.', icon: CalendarCheck },
  { title: 'Koordination aller Gewerke', desc: 'Sanitär, Elektro, Trockenbau, Fliesen und weitere Fachbetriebe abgestimmt.', icon: Users },
  { title: 'Transparente Festpreisangebote', desc: 'Nach Besichtigung erhalten Sie ein nachvollziehbares Angebot ohne versteckte Kosten.', icon: ShieldCheck },
  { title: 'Termingerechte Umsetzung', desc: 'Realistische Zeitpläne und strukturierte Projektabwicklung.', icon: CalendarCheck },
  { title: 'Qualitätskontrolle während der Bauphase', desc: 'Laufende Kontrolle und Abstimmung aller Arbeitsschritte.', icon: Award },
];

const faqsData = [
  { q: 'Wie lange dauert eine Sanierung?', a: 'Eine Wohnungssanierung dauert in der Regel 4–8 Wochen. Eine umfangreiche Haussanierung kann 3–6 Monate beanspruchen – abhängig von Umfang und baulichen Gegebenheiten.' },
  { q: 'Wann beginnt die Planung?', a: 'Die Planung beginnt mit der kostenlosen Erstberatung und der Besichtigung vor Ort. Erst danach entsteht ein individuelles Sanierungskonzept und ein Festpreisangebot.' },
  { q: 'Wer koordiniert die Handwerker?', a: 'Radex übernimmt als Generalunternehmer die komplette Koordination aller Gewerke – Sie haben einen zentralen Ansprechpartner.' },
  { q: 'Erhalte ich einen festen Ansprechpartner?', a: 'Ja. Während des gesamten Projekts steht Ihnen ein fester Ansprechpartner bei Radex zur Verfügung.' },
  { q: 'Gibt es ein Festpreisangebot?', a: 'Ja. Nach Besichtigung und Abstimmung des Umfangs erstellen wir ein transparentes Festpreisangebot.' },
  { q: 'Kann ich während der Bauphase Fragen stellen?', a: 'Ja. Ihr Ansprechpartner ist während der gesamten Bauphase erreichbar – telefonisch, per E-Mail oder WhatsApp.' },
];

const seoAccordions = [
  {
    title: 'Sanierungsablauf im Überblick',
    content: (
      <>
        <p className="mb-4 text-gray-600">Eine erfolgreiche Sanierung beginnt mit einer strukturierten Planung. Radex begleitet Sie von der ersten Beratung über die Besichtigung, Planung und Koordination aller Gewerke bis zur schlüsselfertigen Übergabe.</p>
        <p className="text-gray-600">Zurück zur <Link to="/sanierung-rhein-main">Sanierung Rhein-Main</Link> Übersicht.</p>
      </>
    ),
  },
  {
    title: 'Generalunternehmer & Bauleitung',
    content: (
      <>
        <p className="mb-4 text-gray-600">Als <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link> übernimmt Radex die komplette Steuerung Ihres Sanierungsprojekts – ein Vertrag, ein Ansprechpartner, ein Festpreis.</p>
        <p className="text-gray-600">Mehr zu <Link to="/komplettsanierung-rhein-main">Komplettsanierung</Link> im Rhein-Main-Gebiet.</p>
      </>
    ),
  },
  {
    title: 'Wohnungs-, Haus- und Altbausanierung',
    content: (
      <ul className="space-y-2 text-gray-600">
        <li><Link to="/wohnungssanierung-rhein-main">Wohnungssanierung</Link> – Modernisierung von Eigentumswohnungen</li>
        <li><Link to="/haussanierung-rhein-main">Haussanierung</Link> – ganzheitliche Modernisierung</li>
        <li><Link to="/altbausanierung-rhein-main">Altbausanierung</Link> – historischen Charme bewahren</li>
      </ul>
    ),
  },
  {
    title: 'Kosten & Festpreisangebot',
    content: (
      <p className="text-gray-600">Nutzen Sie den <Link to="/sanierungskosten-rhein-main">Sanierungskosten-Rechner</Link> für eine erste Orientierung. Das verbindliche Festpreisangebot folgt nach Besichtigung.</p>
    ),
  },
];

export default function SanierungAblaufLanding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Sanierung Ablauf im Rhein-Main-Gebiet | Planung bis Fertigstellung | Radex',
    description: 'Erfahren Sie Schritt für Schritt, wie eine Sanierung mit Radex abläuft – von der ersten Beratung über die Planung bis zur schlüsselfertigen Übergabe.',
    path: '/sanierung-ablauf-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">Planung & Ablauf Ihrer Sanierung</h1>
            <p className="br-hero-subtitle">Von der ersten Idee bis zur schlüsselfertigen Übergabe.</p>
            <p className="br-hero-text">
              Eine erfolgreiche Sanierung beginnt mit einer strukturierten Planung. Damit alle Arbeiten perfekt aufeinander abgestimmt sind, übernimmt Radex die Koordination sämtlicher Gewerke und begleitet Sie während des gesamten Projekts mit einem festen Ansprechpartner. So entstehen klare Abläufe, transparente Entscheidungen und eine termingerechte Umsetzung.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      <ProcessSteps
        title="So läuft Ihre Sanierung mit Radex ab"
        steps={processSteps}
        image="/img/renov1.webp"
      />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum eine professionelle Planung so wichtig ist</h2>
          </div>
          <PremiumIconCards cards={whyPlanningCards} />
        </div>
      </section>

      <RadexLiveSection heroImage="/img/leistungen-radex-live.webp" />

      <FaqAccordion faqs={faqsData} />

      <LandingContactSection
        title="Jetzt kostenlos beraten lassen"
        intro="Sie möchten wissen, wie Ihre Sanierung ablaufen würde? Vereinbaren Sie eine kostenlose Beratung oder senden Sie uns Fotos per WhatsApp."
      />

      <SeoAccordionSection title="Weitere Informationen" accordions={seoAccordions} />
    </main>
  );
}
