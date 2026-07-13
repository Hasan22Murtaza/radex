import { useEffect } from 'react';
import { Camera, Award, Users, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';
import NavLandingCards from '../components/NavLandingCards';
import ContactForm from '../components/ContactForm';
import { sanierungCards } from '../data/navigation';
import {
  SharedCTABlock,
  PremiumIconCards,
  FaqAccordion,
  SeoTocSection,
  RadexLiveSection,
  TrustUspCards,
} from '../components/landing/SharedLandingParts';
import { sanierungSeoIntro, sanierungSeoSections } from '../data/sanierungSeoContent';
import { RADEX_LIVE_URL } from '../constants/brand';

const HERO_IMAGE = '/img/sanierung-hero.png';

const trustCards = [
  {
    title: 'SHK-meistergeführter Fachbetrieb',
    image: '/img/badsanierung-usp-shk.png',
    icon: Award,
    imageAlt: 'Moderne Haustechnik bei einer Sanierung',
  },
  {
    title: 'Generalunternehmer für alle Gewerke',
    image: '/img/badsanierung-usp-generalunternehmer.png',
    icon: Users,
    imageAlt: 'Bauplanung und Koordination aller Gewerke',
  },
  {
    title: 'Festpreisangebote',
    image: '/img/badsanierung-usp-festpreis.png',
    icon: ShieldCheck,
    imageAlt: 'Transparente Festpreisangebote für Sanierungen',
  },
  {
    title: 'Über 500 abgeschlossene Projekte',
    image: '/img/badsanierung-usp-projekte.png',
    icon: CheckCircle2,
    imageAlt: 'Abgeschlossenes Sanierungsprojekt nach Radex Umsetzung',
  },
  {
    title: 'Ein fester Ansprechpartner',
    image: '/img/sanierung-thema-generalunternehmer.png',
    icon: Users,
    imageAlt: 'Persönliche Beratung und Projektsteuerung',
  },
  {
    title: 'Im gesamten Rhein-Main-Gebiet',
    image: '/img/badsanierung-usp-rheinmain.png',
    icon: MapPin,
    imageAlt: 'Moderne Wohngebäude im Rhein-Main-Gebiet',
  },
];

const whyRadexCards = [
  { title: 'Eingetragener SHK-Meisterbetrieb', desc: 'Zertifizierte Arbeit nach aktuellen technischen Richtlinien und Handwerksstandards.', icon: Award },
  { title: 'Alles aus einer Hand', desc: 'Ein zentraler Ansprechpartner während des gesamten Projektverlaufs.', icon: Users },
  { title: 'Festpreis-Garantie', desc: 'Transparente Angebote ohne versteckte Überraschungen oder Nachforderungen.', icon: ShieldCheck },
  { title: 'Staubarme Sanierung', desc: 'Professionelle Schutzsysteme für saubere Baustellenumgebungen.', icon: CheckCircle2 },
];

const referenceCards = [
  { image: '/img/sanierung-thema-wohnung.png', location: 'Frankfurt Riedberg', desc: 'Penthouse-Modernisierung mit neuen Böden, Elektro und Bad.' },
  { image: '/img/sanierung-thema-haus.png', location: 'Bad Homburg', desc: 'Kernsanierung Einfamilienhaus mit Heizung, Sanitär und Innenausbau.' },
  { image: '/img/sanierung-thema-altbau.png', location: 'Kronberg', desc: 'Altbausanierung mit erhaltener Fassade und modernem Innenausbau.' },
  { image: '/img/sanierung-thema-wohnung.png', location: 'Wiesbaden', desc: 'Wohnungssanierung Innenausbau inklusive neuer Leitungen und Ausstattung.' },
  { image: '/img/sanierung-thema-haus.png', location: 'Darmstadt', desc: 'Heizungsmodernisierung und energetische Aufwertung im Bestand.' },
  { image: '/img/sanierung-thema-altbau.png', location: 'Offenbach am Main', desc: 'Altbauwohnung modernisiert – Charakter bewahrt, Technik erneuert.' },
];

const costCategoryCards = [
  {
    title: 'Wohnungssanierung',
    price: 'ab ca. 300 €/m²',
    desc: 'Typische Einstiegspreise für Eigentumswohnungen und Bestandswohnungen – abhängig von Umfang und Ausstattung.',
    image: '/img/sanierung-thema-wohnung.png',
    to: '/wohnungssanierung-rhein-main',
  },
  {
    title: 'Haussanierung',
    price: 'ab ca. 400 €/m²',
    desc: 'Orientierungswerte für Einfamilienhäuser und Reihenhäuser – von Teilsanierung bis Komplettmodernisierung.',
    image: '/img/sanierung-thema-haus.png',
    to: '/haussanierung-rhein-main',
  },
  {
    title: 'Altbausanierung',
    price: 'ab ca. 500 €/m²',
    desc: 'Einstiegspreise für ältere Bestandsimmobilien – mit Respekt vor Substanz und Charakter.',
    image: '/img/sanierung-thema-altbau.png',
    to: '/altbausanierung-rhein-main',
  },
];

const radexLiveProjects = [
  {
    image: '/img/sanierung-hero.png',
    badge: 'LIVE',
    title: 'Rohbauphase Komplettsanierung',
    location: 'Frankfurt am Main',
    desc: 'Komplettsanierung inklusive Entkernung, neuer Haustechnik und Innenausbau.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-thema-wohnung.png',
    badge: 'LIVE',
    title: 'Wohnungssanierung Innenausbau',
    location: 'Wiesbaden',
    desc: 'Modernisierung inklusive neuer Leitungen, Vorwandinstallation und hochwertiger Ausstattung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-thema-haus.png',
    badge: 'LIVE',
    title: 'Heizungsmodernisierung Altbau',
    location: 'Darmstadt',
    desc: 'Heizungstausch und energetische Aufwertung in einem älteren Bestandsgebäude.',
    cta: 'Projekt ansehen',
  },
];

const faqsData = [
  { q: 'Was kostet eine Sanierung?', a: 'Die Kosten hängen stark vom Sanierungsstau, der Fläche und Ihren Ausstattungswünschen ab. Eine einfache Renovierung startet oft bei 400 €/m², eine Komplettsanierung liegt meist zwischen 1.200 € und 2.500 €/m². Nutzen Sie unseren Sanierungskosten-Rechner für typische Einstiegspreise – das verbindliche Festpreisangebot folgt nach Besichtigung.' },
  { q: 'Wie lange dauert eine Sanierung?', a: 'Eine Wohnungssanierung dauert in der Regel 4–8 Wochen. Eine umfangreiche Haussanierung kann 3–6 Monate beanspruchen – abhängig von Umfang und baulichen Gegebenheiten.' },
  { q: 'Wann lohnt sich eine Komplettsanierung?', a: 'Wenn mehrere Gewerke (Heizung, Sanitär, Elektro) gleichzeitig veraltet sind, ist eine Komplettsanierung wirtschaftlicher und schneller als viele Einzelmaßnahmen.' },
  { q: 'Arbeitet Radex als Generalunternehmer?', a: 'Ja, wir übernehmen die komplette Koordination aller Gewerke und bieten Ihnen einen zentralen Ansprechpartner sowie Festpreisgarantie.' },
  { q: 'In welchen Städten ist Radex tätig?', a: 'Wir sanieren im gesamten Rhein-Main-Gebiet, unter anderem in Frankfurt, Wiesbaden, Mainz, Darmstadt, Offenbach und Hanau – in über 60 Städten und Gemeinden.' },
  { q: 'Kann ich Fotos meiner Immobilie per WhatsApp senden?', a: 'Ja. Senden Sie uns Fotos per WhatsApp und erhalten Sie eine erste fachliche Einschätzung zu Ihrem Sanierungsprojekt – oft noch am selben Tag.' },
];

export default function SanierungHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Sanierung im Rhein-Main-Gebiet | Wohnung, Haus & Altbau sanieren | Radex',
    description: 'Sanierung im Rhein-Main-Gebiet vom SHK-meistergeführten Fachbetrieb. Wohnungssanierung, Haussanierung, Altbausanierung und Komplettsanierung als Generalunternehmer – aus einer Hand.',
    path: '/sanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">
              SHK-Meisterbetrieb · Generalunternehmer · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Sanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Ihre Immobilie modernisieren. Professionell geplant. Aus einer Hand umgesetzt.
            </p>
            <p className="br-hero-text">
              Ob Wohnung, Einfamilienhaus, Altbau oder Mehrfamilienhaus – eine erfolgreiche Sanierung beginnt
              mit einer durchdachten Planung. Als SHK-meistergeführter Fachbetrieb koordiniert Radex alle
              notwendigen Gewerke und begleitet Sie von der ersten Beratung bis zur schlüsselfertigen Übergabe.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>SHK-Meisterbetrieb</li>
              <li>Generalunternehmer</li>
              <li>Festpreisangebote</li>
              <li>Rhein-Main-Gebiet</li>
            </ul>
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
          aria-label="Teilsaniertes deutsches Einfamilienhaus mit professioneller Baustelle im Rhein-Main-Gebiet"
          title="Sanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-trust-usp-section">
        <div className="container">
          <TrustUspCards cards={trustCards} />
        </div>
      </section>

      <NavLandingCards
        title="Welche Sanierung planen Sie?"
        subtitle="Radex saniert Wohnungen, Häuser und ältere Bestandsgebäude im gesamten Rhein-Main-Gebiet – als Generalunternehmer von der Planung bis zur schlüsselfertigen Übergabe. Ob Wohnungssanierung, Haussanierung, Altbausanierung oder Komplettsanierung: Wählen Sie den Bereich, der zu Ihrem Projekt passt. Auf den jeweiligen Seiten finden Sie ausführliche Informationen zu Planung, Ablauf, Kosten und individuellen Lösungen."
        cards={sanierungCards}
      />

      <section className="br-section br-whatsapp-cta-section">
        <div className="container br-whatsapp-cta-inner">
          <div className="br-whatsapp-cta-copy">
            <span className="br-whatsapp-cta-kicker">Schnellste Antwort</span>
            <h2 className="br-section-title">Noch unsicher, welche Sanierung die richtige ist?</h2>
            <p className="br-section-subtitle">
              Nicht jede Immobilie benötigt eine Komplettsanierung. Oft reicht eine gezielte Teilsanierung –
              von Bad und Elektro bis zu Böden und Heizung. Senden Sie uns einfach Fotos Ihrer Räume per
              WhatsApp und erhalten Sie eine erste fachliche Einschätzung, oft noch am selben Tag.
            </p>
          </div>
          <SharedCTABlock centered />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex wählen</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <RadexLiveSection
        title="Aktuelle Sanierungsprojekte"
        intro="Verfolgen Sie laufende Sanierungen und erhalten Sie Einblicke, wie Immobilien im Rhein-Main-Gebiet modernisiert werden."
        heroImage="/img/sanierung-hero.png"
        projects={radexLiveProjects}
      />

      <section className="br-section br-bg-light br-references-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Abgeschlossene Sanierungen</h2>
            <p className="br-section-subtitle">
              Entdecken Sie fertiggestellte Wohnungssanierungen, Haussanierungen und Altbauaufwertungen aus der gesamten Region.
            </p>
          </div>
          <div className="br-projects-grid br-references-grid">
            {referenceCards.map((ref) => (
              <a
                key={ref.location + ref.desc}
                href={RADEX_LIVE_URL}
                className="br-project-card br-reference-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="br-project-img" style={{ backgroundImage: `url(${ref.image})` }} />
                <div className="br-project-info">
                  <h4>{ref.location}</h4>
                  <p className="br-project-desc">{ref.desc}</p>
                  <span className="br-btn-orange br-project-cta">Projekt ansehen &rarr;</span>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={RADEX_LIVE_URL} className="br-btn-outline-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Alle Referenzen ansehen
            </a>
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet eine Sanierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jede Sanierung ist anders – Größe, Bausubstanz und Umfang bestimmen den Preis. Die folgenden
              Kategorien geben Ihnen typische Einstiegspreise als erste Orientierung. Für eine individuelle
              Schätzung nutzen Sie unseren Kostenrechner – das verbindliche Festpreisangebot folgt nach Besichtigung.
            </p>
          </div>
          <p className="br-cost-kicker text-center">Typische Einstiegspreise</p>
          <div className="br-costs-grid br-costs-grid--three">
            {costCategoryCards.map((card) => (
              <Link key={card.title} to={card.to} className="br-cost-card">
                <div className="br-cost-category-img" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="br-cost-header">
                  <h3>{card.title}</h3>
                  <p className="br-cost-price">
                    <span>{card.price}</span>
                  </p>
                </div>
                <p className="br-cost-desc">{card.desc}</p>
                <span className="br-btn-orange br-cost-cta">Kosten ansehen &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <SanierungskostenRechner defaultType="wohnung" compact sanierungOnly />
        <div className="container br-calculator-disclaimer">
          <p>
            <strong>Hinweis:</strong> Die berechneten Kosten sind typische Einstiegspreise und dienen ausschließlich
            als erste Orientierung für Ihre Sanierung. Der tatsächliche Festpreis hängt von Fläche, Bausubstanz,
            Sanierungsumfang und gewünschter Ausstattung ab. Nach einer Besichtigung erhalten Sie ein individuelles
            Festpreisangebot.
          </p>
        </div>
      </section>

      <FaqAccordion faqs={faqsData} />

      <ContactForm />

      <SeoTocSection
        title="Alles, was Sie über eine Sanierung wissen sollten"
        intro={sanierungSeoIntro}
        sections={sanierungSeoSections}
      />
    </main>
  );
}
