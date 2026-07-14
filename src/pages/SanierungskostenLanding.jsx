import { useEffect } from 'react';
import { Camera, Building2, Ruler, Calendar, Layers, Wrench, Zap } from 'lucide-react';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';
import ContactForm from '../components/ContactForm';
import {
  SharedCTABlock,
  PremiumIconCards,
  FaqAccordion,
  SeoTocSection,
  RadexLiveSection,
  SectionTransition,
  ImageCardGrid,
} from '../components/landing/SharedLandingParts';
import {
  sanierungskostenSeoIntro,
  sanierungskostenSeoSections,
} from '../data/sanierungskostenSeoContent';

const HERO_IMAGE = '/img/kosten-hero.png';

const typeCards = [
  {
    to: '/wohnungssanierung-kosten',
    title: 'Wohnungssanierung',
    desc: 'Kosten einer Eigentumswohnung oder Bestandswohnung berechnen – mit typischen Preisfaktoren und Beispielwerten.',
    image: '/img/kosten-card-wohnung.png',
    imageAlt: 'Modernes helles Wohnzimmer einer deutschen Wohnung nach der Sanierung',
    cta: 'Kosten berechnen',
  },
  {
    to: '/haussanierung-kosten',
    title: 'Haussanierung',
    desc: 'Erste Orientierung für die Kosten einer kompletten oder teilweisen Haussanierung im Rhein-Main-Gebiet.',
    image: '/img/kosten-card-haus.png',
    imageAlt: 'Modernisiertes deutsches Einfamilienhaus mit gepflegter Fassade',
    cta: 'Kosten berechnen',
  },
  {
    to: '/altbausanierung-kosten',
    title: 'Altbausanierung',
    desc: 'Kosten einer Altbausanierung realistisch einschätzen – unter Berücksichtigung von Bestand und Technik.',
    image: '/img/kosten-card-altbau.png',
    imageAlt: 'Schön modernisierter deutscher Altbau mit historischer Fassade',
    cta: 'Kosten berechnen',
  },
  {
    to: '/sanierungskosten-rechner',
    title: 'Sanierungskosten Rechner',
    desc: 'Bad, Wohnung, Haus und Altbau in einem Rechner vergleichen und eine erste Kostenorientierung erhalten.',
    image: '/img/kosten-card-rechner.png',
    imageAlt: 'Architektenschreibtisch mit Bauplänen, Blueprints und Taschenrechner',
    cta: 'Zum Rechner',
  },
];

const factorCards = [
  {
    title: 'Größe der Immobilie',
    desc: 'Je größer die Fläche, desto höher der Gesamtaufwand für Material und Arbeitszeit.',
    icon: Ruler,
  },
  {
    title: 'Baujahr & Zustand',
    desc: 'Ältere Gebäude erfordern oft mehr Vorarbeiten bei Leitungen, Abdichtung und Bausubstanz.',
    icon: Calendar,
  },
  {
    title: 'Sanitärinstallation',
    desc: 'Neue Leitungen, Bäder und Heizung beeinflussen den Preis erheblich.',
    icon: Wrench,
  },
  {
    title: 'Elektroinstallation',
    desc: 'Erneuerung der Elektrik, Zählerschrank und Smart-Home-Vorbereitung.',
    icon: Zap,
  },
  {
    title: 'Materialauswahl',
    desc: 'Basis-, Komfort- oder Premium-Ausstattung bestimmen die Investitionshöhe.',
    icon: Layers,
  },
  {
    title: 'Umfang der Arbeiten',
    desc: 'Teilsanierung oder Komplettsanierung – der Umfang ist der wichtigste Kostenfaktor.',
    icon: Building2,
  },
];

const faqsData = [
  {
    q: 'Was kostet eine Sanierung?',
    a: 'Die Kosten hängen von Größe, Zustand, Baujahr und gewünschter Ausstattung ab. Nutzen Sie unseren Rechner für eine erste Orientierung – das verbindliche Festpreisangebot folgt nach Besichtigung.',
  },
  {
    q: 'Wie genau ist der Kostenrechner?',
    a: 'Der Rechner liefert eine realistische erste Orientierung auf Basis typischer Projekte. Der tatsächliche Festpreis wird nach Besichtigung individuell kalkuliert und berücksichtigt Substanz, Technik und Ihre Ausstattungswünsche.',
  },
  {
    q: 'Welche Kosten sind nicht enthalten?',
    a: 'Projektspezifische Sonderleistungen wie umfangreiche Schadstoffsanierung, statische Eingriffe, außergewöhnlich hochwertige Sonderausstattung oder nicht vorhersehbare Schäden hinter Wänden können hinzukommen. Diese Punkte klären wir nach der Besichtigung transparent.',
  },
  {
    q: 'Kann ich Förderungen nutzen?',
    a: 'Ja – insbesondere bei energetischen Maßnahmen oder Heizungsmodernisierung können Förderprogramme relevant sein. Voraussetzungen ändern sich regelmäßig; idealerweise klären wir Förderfragen vor Baubeginn.',
  },
  {
    q: 'Wie schnell erhalte ich ein Festpreisangebot?',
    a: 'Nach Ihrer Anfrage vereinbaren wir zeitnah einen Besichtigungstermin. Auf Basis der Bestandsaufnahme erhalten Sie anschließend ein individuelles Festpreisangebot ohne versteckte Kosten.',
  },
  {
    q: 'Was beeinflusst den Preis?',
    a: 'Größe der Immobilie, Baujahr, Zustand der Bausubstanz, Sanitär- und Elektroinstallation, Materialauswahl und Umfang der Arbeiten.',
  },
  {
    q: 'Kann ich Fotos per WhatsApp senden?',
    a: 'Ja. Senden Sie uns Fotos Ihrer Immobilie per WhatsApp für eine erste fachliche Einschätzung – oft lässt sich der Beratungstermin dadurch effizienter vorbereiten.',
  },
  {
    q: 'Arbeiten Sie im gesamten Rhein-Main-Gebiet?',
    a: 'Ja. Radex ist in über 60 Städten im Rhein-Main-Gebiet tätig.',
  },
];

export default function SanierungskostenLanding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Sanierungskosten im Rhein-Main-Gebiet | Kosten einer Sanierung berechnen | Radex',
    description:
      'Sanierungskosten für Wohnung, Haus und Altbau einfach einschätzen. Nutzen Sie den Radex Sanierungskosten-Rechner und erhalten Sie eine erste Orientierung für Ihr Projekt – Festpreis nach Besichtigung.',
    path: '/sanierungskosten-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">
              Sanierungskosten · Immobilienmodernisierung · Kostenplanung
            </p>
            <h1 className="br-hero-title">
              Sanierungskosten im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">Was kostet eine Sanierung?</p>
            <p className="br-hero-text">
              Die Kosten einer Sanierung hängen von vielen Faktoren ab – unter anderem von der Größe der Immobilie, dem
              Baujahr, dem Zustand der Bausubstanz und Ihren persönlichen Ausstattungswünschen. Mit dem Radex
              Sanierungskosten-Rechner erhalten Sie innerhalb weniger Sekunden eine realistische erste Orientierung.
              Anschließend beraten wir Sie persönlich und erstellen nach einer Besichtigung ein transparentes
              Festpreisangebot für Ihr individuelles Sanierungsprojekt im Rhein-Main-Gebiet.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Deutsches Einfamilienhaus während der Sanierung – eine Hälfte modernisiert, eine Hälfte mit sichtbarem Baufortschritt"
          title="Sanierungskosten Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Sanierung möchten Sie berechnen?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Nicht jede Sanierung verursacht die gleichen Kosten. Wählen Sie die Sanierungsart, die am besten zu Ihrem
              Projekt passt. Auf den jeweiligen Detailseiten finden Sie ausführliche Informationen zu typischen Kosten,
              Preisfaktoren, Beispielrechnungen und dem jeweiligen Kostenrechner.
            </p>
          </div>
          <ImageCardGrid cards={typeCards} linked />
        </div>
      </section>

      <SectionTransition>
        Nach der Auswahl der passenden Sanierungsart erhalten Sie mit dem zentralen Kostenrechner eine schnelle erste
        Einschätzung für Bad, Wohnung, Haus oder Altbau – als Grundlage für Ihre weitere Planung.
      </SectionTransition>

      <section className="br-section" id="rechner">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Sanierungskosten-Rechner</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Mit wenigen Angaben erhalten Sie eine erste Orientierung zu den möglichen Sanierungskosten – für
              Badsanierung, Wohnungssanierung, Haussanierung und Altbausanierung.
            </p>
          </div>
        </div>
        <SanierungskostenRechner defaultType="wohnung" compact />
        <div className="container br-calculator-disclaimer">
          <p>
            <strong>Hinweis:</strong> Die angezeigten Werte dienen ausschließlich als Orientierung. Der tatsächliche Preis
            hängt vom Zustand der Immobilie, den gewünschten Materialien und dem Umfang der Arbeiten ab. Nach einer
            Besichtigung erhalten Sie ein individuelles Festpreisangebot.
          </p>
        </div>
      </section>

      <SectionTransition>
        Der Rechner gibt Ihnen eine erste Bandbreite. Welche Faktoren den konkreten Preis Ihrer Immobilie besonders stark
        beeinflussen, zeigen wir im nächsten Abschnitt.
      </SectionTransition>

      <section className="br-section br-bg-light br-kosten-factors">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Faktoren beeinflussen die Sanierungskosten?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Keine Immobilie gleicht der anderen. Deshalb unterscheiden sich auch die Sanierungskosten. Bereits kleine
              Unterschiede bei Baujahr, Technik oder Materialwahl können den Gesamtpreis beeinflussen. Die folgenden
              Faktoren haben den größten Einfluss auf die Investitionskosten.
            </p>
          </div>
          <PremiumIconCards cards={factorCards} compactIcons />
        </div>
      </section>

      <SectionTransition>
        Hinter jeder Kostenberechnung steht ein echtes Sanierungsprojekt. Deshalb zeigen wir Ihnen ausgewählte Referenzen
        aus dem Rhein-Main-Gebiet. So erhalten Sie einen realistischen Eindruck davon, welche Arbeiten den Umfang und
        damit auch die Kosten einer Sanierung beeinflussen können.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Jede Immobilie ist anders. Deshalb zeigen wir Ihnen echte Projekte statt theoretischer Beispiele. Verfolgen Sie laufende Baustellen, abgeschlossene Sanierungen und Vorher-Nachher-Projekte aus dem gesamten Rhein-Main-Gebiet."
      />

      <SectionTransition>
        Viele Fragen zu Genauigkeit, Förderungen und Festpreisangeboten beantworten wir klar und kompakt – damit Sie Ihr
        Budget mit ruhigem Gefühl planen können.
      </SectionTransition>

      <FaqAccordion faqs={faqsData} />

      <ContactForm
        kicker="Persönliche Kostenberatung"
        title="Jetzt Ihre Sanierungskosten persönlich einschätzen lassen"
        intro="Sie haben bereits eine erste Orientierung mit unserem Sanierungskosten-Rechner erhalten? Senden Sie uns Fotos Ihrer Immobilie bequem per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Nach einer Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot – individuell auf Ihr Projekt abgestimmt."
        photoTip="Senden Sie uns Bilder Ihrer Immobilie bequem per WhatsApp – für eine erste fachliche Kosteneinschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Wohnungssanierung, 85 m², Leitungen & Bad)..."
      />

      <SeoTocSection
        title="Alles, was Sie über Sanierungskosten wissen sollten"
        intro={sanierungskostenSeoIntro}
        sections={sanierungskostenSeoSections}
      />
    </main>
  );
}
