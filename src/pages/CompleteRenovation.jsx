import { useEffect } from 'react';
import {
  Camera,
  Award,
  ShieldCheck,
  Users,
  Layers,
  MapPin,
  UserCheck,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildFaqSchema, buildServiceSchema } from '../useSeo';
import ContactForm from '../components/ContactForm';
import {
  SharedCTABlock,
  PremiumIconCards,
  FaqAccordion,
  SeoKnowledgeDrawer,
  RadexLiveSection,
  ProcessSteps,
  SectionTransition,
  ImageCardGrid,
} from '../components/landing/SharedLandingParts';
import {
  komplettsanierungSeoIntro,
  komplettsanierungSeoSections,
} from '../data/komplettsanierungSeoContent';

const HERO_IMAGE = '/img/haus-typ-komplett.png';

const audienceCards = [
  {
    title: 'Immobilienkäufer',
    desc: 'Aus einem sanierungsbedürftigen Objekt wird in einem Zug Ihr modernes Zuhause – vor dem Einzug abgestimmt.',
    image: '/img/haus-typ-komplett.png',
    imageAlt: 'Einfamilienhaus bereit für eine Komplettsanierung im Rhein-Main-Gebiet',
  },
  {
    title: 'Erbengemeinschaften',
    desc: 'Wertmaximierung vor dem Verkauf oder zur fairen Aufteilung – mit klarer Kosten- und Terminplanung.',
    image: '/img/gu-card-altbau.png',
    imageAlt: 'Altbauimmobilie vor einer umfassenden Sanierung',
  },
  {
    title: 'Bestandshalter',
    desc: 'Gebäudelebenszyklus verlängern: Technik erneuern, Ausbau modernisieren, Energieeffizienz anheben.',
    image: '/img/gu-card-haus.png',
    imageAlt: 'Bestandshaus während der Komplettsanierung',
  },
  {
    title: 'Kernsanierung geplant',
    desc: 'Wenn Rückbau bis zur tragenden Struktur nötig ist – wir planen den tiefgreifenden Eingriff sauber und realistisch.',
    image: '/img/altbau-typ-kern.png',
    imageAlt: 'Altbau in der Kernsanierung mit freigelegter Struktur',
  },
];

const serviceCards = [
  {
    title: 'Haussanierung',
    desc: 'Einfamilienhaus, Reihenhaus oder Bestand – Haustechnik, Bad, Elektro und Innenausbau in einem Projekt.',
    image: '/img/gu-card-haus.png',
    imageAlt: 'Deutsches Einfamilienhaus während der Haussanierung',
    to: '/sanierung/haussanierung',
  },
  {
    title: 'Wohnungssanierung',
    desc: 'Eigentums- und Bestandswohnungen inkl. Bad, Leitungen, Elektro und Ausbau – koordiniert aus einer Hand.',
    image: '/img/gu-card-wohnung.png',
    imageAlt: 'Wohnung während der Komplettsanierung',
    to: '/sanierung/wohnungssanierung',
  },
  {
    title: 'Kernsanierung',
    desc: 'Rückbau bis zur tragenden Struktur, neue Leitungen und Installationen – Ergebnis nah am Neubau-Standard.',
    image: '/img/altbau-typ-kern.png',
    imageAlt: 'Kernsanierung eines Altbaus mit freigelegten Installationen',
  },
  {
    title: 'Energetische Maßnahmen',
    desc: 'Wärmepumpe, Dämmung und Haustechnik im Gesamtkonzept – früh geplant, bevor Oberflächen fertig sind.',
    image: '/img/heizung-service-waermepumpe.png',
    imageAlt: 'Wärmepumpe als Teil einer Komplettsanierung',
    to: '/energetische-sanierung-rhein-main',
  },
];

const whyRadexCards = [
  {
    title: 'Generalunternehmer',
    desc: 'Ein Ansprechpartner für Planung, Gewerke und schlüsselfertige Übergabe.',
    icon: Users,
  },
  {
    title: 'SHK-Meisterkompetenz',
    desc: 'Heizung, Sanitär und Gebäudetechnik unter Meisterverantwortung von Bernd Knoop.',
    icon: Award,
  },
  {
    title: 'Komplett vs. Kern klar',
    desc: 'Wir planen den realistisch nötigen Eingriff – nicht zu wenig und nicht unnötig tief.',
    icon: Layers,
  },
  {
    title: 'Festpreis nach Begehung',
    desc: 'Transparentes Angebot ohne versteckte Überraschungen – Änderungen dokumentiert.',
    icon: ShieldCheck,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Über 60 Städte – kurze Wege und Erfahrung mit Bestandsgebäuden.',
    icon: MapPin,
  },
  {
    title: 'Fester Bauleiter',
    desc: 'Von der Erstberatung bis zur Übergabe begleitet Sie ein festes Team.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Kostenlose Erstberatung',
    desc: 'Wir besprechen Ziele, Umfang und ob Komplett- oder Kernsanierung die passende Tiefe ist.',
  },
  {
    title: 'Besichtigung & Bestandsaufnahme',
    desc: 'Vor Ort prüfen wir Substanz, Leitungen, Statik-Schnittstellen und Sanierungsstau.',
  },
  {
    title: 'Maßnahmenplan & Festpreisangebot',
    desc: 'Aus der Begehung entsteht ein abgestimmtes Konzept mit klarer Kosten- und Terminplanung.',
  },
  {
    title: 'Entkernung & Haustechnik',
    desc: 'Rückbau, neue Leitungen, Heizung, Sanitär und Elektro in der richtigen Reihenfolge.',
  },
  {
    title: 'Innenausbau & Oberflächen',
    desc: 'Trockenbau, Estrich, Fliesen, Maler und Böden – getaktet und sauber ausgeführt.',
  },
  {
    title: 'Abnahme & schlüsselfertige Übergabe',
    desc: 'Gemeinsame Endabnahme, Dokumentation und besenreine Übergabe Ihres fertigen Projekts.',
  },
];

const costCards = [
  {
    title: 'Standard',
    price: 'ab €1.000 / m²',
    desc: 'Solide Ausstattung und koordinierte Gewerke – Richtwert, abhängig von Objekt und Umfang.',
    image: '/img/gu-card-haus.png',
  },
  {
    title: 'Gehoben',
    price: 'ab €1.500 / m²',
    desc: 'Höhere Materialqualität, mehr Technik und feinere Oberflächen – Angebot nach Begehung.',
    image: '/img/gu-card-wohnung.png',
  },
  {
    title: 'Luxus / Denkmalschutz',
    price: 'ab €2.500 / m²',
    desc: 'Anspruchsvolle Ausstattung oder besondere Substanz – individuell kalkuliert.',
    image: '/img/gu-card-altbau.png',
  },
];

const radexLiveProjects = [
  {
    image: '/img/haus-typ-komplett.png',
    badge: 'LIVE',
    title: 'Komplettsanierung Einfamilienhaus',
    location: 'Rodgau',
    desc: 'Technik, Bad und Innenausbau – laufende Einblicke in jede Bauphase.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-typ-komplett.png',
    badge: 'LIVE',
    title: 'Wohnung Komplettsanierung',
    location: 'Frankfurt am Main',
    desc: 'Entkernung, neue Leitungen und Ausbau – authentische Baustelleneinblicke.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-typ-kern.png',
    badge: 'Abgeschlossen',
    title: 'Kernsanierung Altbau',
    location: 'Offenbach am Main',
    desc: 'Rückbau bis zur Struktur, neue Installationen – fertig übergeben.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-waermepumpe.png',
    badge: 'Vorher & Nachher',
    title: 'Technik & Wärmepumpe',
    location: 'Darmstadt',
    desc: 'Haustechnik im Rahmen der Komplettsanierung – sichtbarer Vergleich.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/gu-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Komplettsanierung',
    location: 'Neu-Isenburg',
    desc: 'Echte Bauabschnitte und koordinierte Gewerke – ohne Hochglanzfilter.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/gu-card-haus.png',
    badge: 'Abgeschlossen',
    title: 'Haussanierung Bestand',
    location: 'Dreieich',
    desc: 'Fassade, Technik und Innenausbau in einem abgestimmten Gesamtprojekt.',
    cta: 'Projekt ansehen',
  },
];

const faqsData = [
  {
    q: 'Was ist eine Komplettsanierung?',
    a: 'Eine Komplettsanierung umfasst mehrere zentrale Bereiche einer Immobilie gleichzeitig – nicht nur oberflächliche Renovierungen, sondern eine technische, funktionale und gestalterische Neuaufstellung durch koordinierte Fachgewerke. Typischerweise werden Bad, Heizung, Sanitär, Elektro, Innenausbau und Böden in einem abgestimmten Projekt erneuert.',
  },
  {
    q: 'Was ist der Unterschied zwischen Komplett- und Kernsanierung?',
    a: 'Eine Komplettsanierung muss nicht bis zur Rohstruktur gehen, während eine Kernsanierung tiefgreifendere Rückbauarbeiten und eine umfassendere technische Erneuerung umfasst. Bei der Kernsanierung wird das Gebäude oft bis auf die tragende Struktur zurückgebaut; das Ergebnis kommt einem Neubau gleich, erhält aber Standort und Charakter.',
  },
  {
    q: 'Wann ist eine Komplettsanierung sinnvoll?',
    a: 'Sinnvoll ist sie bei einem Hauskauf vor dem Einzug, bei einer Erbschaft, bei aufgelaufenem Sanierungsstau, wenn Bad, Küche, Böden und Leitungen ohnehin gleichzeitig erneuert werden müssen, oder zur deutlichen Wertverbesserung der Immobilie.',
  },
  {
    q: 'Wer übernimmt die Bauleitung?',
    a: 'Als Generalunternehmer stellt Radex einen festen Bauleiter, der die Gewerke koordiniert und Ihr zentraler Ansprechpartner ist. Sie müssen nicht selbst Handwerker terminieren, mahnen oder kontrollieren.',
  },
  {
    q: 'Wie lange dauert eine Kernsanierung?',
    a: 'Je nach Objektgröße und Umfang sollten Sie für ein Einfamilienhaus etwa 3 bis 6 Monate einplanen. Den genauen Zeitrahmen legen wir nach der Bestandsaufnahme im Bauzeitenplan fest.',
  },
  {
    q: 'Können energetische Maßnahmen mitlaufen?',
    a: 'Ja. Wärmepumpe, Dämmung und Haustechnik lassen sich in einer Komplettsanierung besonders effizient mitplanen – bevor Oberflächen fertig sind. Details besprechen wir in der Bestandsaufnahme.',
  },
];

export default function CompleteRenovation() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useSeo({
    title: 'Komplettsanierung Rhein-Main | Kernsanierung zum Festpreis | Radex',
    description:
      'Komplettsanierung & Kernsanierung im Rhein-Main-Gebiet vom Generalunternehmer: ein Ansprechpartner, ein Festpreis, ein Zeitplan. Jetzt kostenlose Beratung sichern!',
    path: '/komplettsanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Komplettsanierung',
        description:
          'Komplettsanierung und Kernsanierung im Rhein-Main-Gebiet – Gewerke aus einer Hand mit Festpreis nach Begehung.',
        path: '/komplettsanierung-rhein-main',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">
              SHK-Meisterbetrieb · Komplettsanierung · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Komplettsanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Alles aus einer Hand: Ihr Sanierungsprojekt effizient umgesetzt.
            </p>
            <p className="br-hero-text">
              Eine Komplettsanierung ist ein Großprojekt. Übergeben Sie die Verantwortung an Radex – Ihren zuverlässigen{' '}
              <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link> für ganzheitliche Umbauten. Bernd Knoop
              bringt als SHK-Meister &amp; Betriebsleiter Fachkompetenz in Heizung, Sanitär und Gebäudetechnik ein;
              weitere Gewerke steuern wir professionell und terminsicher.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>Ein Ansprechpartner</li>
              <li>Komplett &amp; Kern klar</li>
              <li>Festpreis nach Begehung</li>
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
          aria-label="Einfamilienhaus während einer Komplettsanierung im Rhein-Main-Gebiet"
          title="Komplettsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Für wen ist diese Leistung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Wir realisieren Großprojekte für anspruchsvolle Kunden – vom Kauf vor dem Einzug bis zur Kernsanierung
              eines Altbaus.
            </p>
          </div>
          <ImageCardGrid cards={audienceCards} />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, ob Sie komplett modernisieren oder tiefgreifend kernsanieren: Entscheidend ist die richtige
        Leistungswahl. Im nächsten Abschnitt zeigen wir typische Projektarten im Überblick.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Komplettsanierungs-Projekte</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Haus, Wohnung, Kernsanierung oder energetische Maßnahmen – wir planen den Umfang, der zu Objekt und Ziel
              passt.
            </p>
          </div>
          <div className="br-projects-grid">
            {serviceCards.map((service) => {
              const Inner = (
                <>
                  <div
                    className="br-project-img"
                    style={{ backgroundImage: `url(${service.image})` }}
                    role="img"
                    aria-label={service.imageAlt || service.title}
                  />
                  <div className="br-project-info">
                    <h4>{service.title}</h4>
                    <p className="br-project-desc">{service.desc}</p>
                  </div>
                </>
              );
              return service.to ? (
                <a key={service.title} href={service.to} className="br-service-card">
                  {Inner}
                </a>
              ) : (
                <div key={service.title} className="br-service-card">
                  {Inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionTransition>
        Ein Schnitt ist oft besser als viele kleine: Planungssicherheit, technischer Neustart und kürzere Bauzeit durch
        getaktete Gewerke. Deshalb setzen Eigentümer im Rhein-Main-Gebiet auf Radex.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex für Komplettsanierung wählen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Weniger Koordinationsaufwand, mehr Planungssicherheit – und ein klarer Unterschied zwischen Komplett- und
              Kernsanierung.
            </p>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <SectionTransition>
        Von der ersten Einschätzung bis zur schlüsselfertigen Übergabe begleiten wir Ihr Projekt Schritt für Schritt.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihre Komplettsanierung mit Radex ab"
        intro="Ein strukturierter Ablauf ist entscheidend für Zeit und Kosten. Von der Erstberatung bis zur Übergabe haben Sie einen festen Ansprechpartner."
        steps={processSteps}
        image="/img/haus-process.png"
      />

      <SectionTransition>
        Nach dem Ablauf stellt sich oft die wichtigste Frage: Mit welchen Kosten müssen Sie rechnen? Die folgenden
        Richtwerte geben eine erste Orientierung – das konkrete Angebot folgt nach der Bestandsaufnahme.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Kosten einer Komplettsanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine Komplettsanierung ist eine Investition in die Zukunft Ihrer Immobilie. Preise sind Richtwerte –
              abhängig von Objekt, Ausstattung und Umfang.
            </p>
          </div>
          <div className="br-costs-grid br-costs-grid--three">
            {costCards.map((card) => (
              <div key={card.title} className="br-cost-card" style={{ cursor: 'default' }}>
                <div className="br-cost-category-img" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="br-cost-header">
                  <h3>{card.title}</h3>
                  <p className="br-cost-price">
                    <span>{card.price}</span>
                  </p>
                </div>
                <p className="br-cost-desc">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginTop: '2rem', textAlign: 'center' }}>
            Detaillierte Rechner:{' '}
            <Link to="/haussanierung-kosten">Haussanierung Kosten</Link>
            {' · '}
            <Link to="/wohnungssanierung-kosten">Wohnungssanierung Kosten</Link>
          </p>
        </div>
      </section>

      <SectionTransition>
        Richtwerte helfen bei der Orientierung – echte Baustellen zeigen, wie wir arbeiten.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Häuser. Wir zeigen Ihnen den Weg dorthin. Mit Radex Live erhalten Sie authentische Einblicke in Komplett- und Kernsanierungen aus dem Rhein-Main-Gebiet – von der Entkernung bis zur Übergabe."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Komplettsanierung als SHK-Meister & Betriebsleiter von der technischen Planung bis zur fertigen Übergabe – persönlich, transparent und zum Festpreis."
        projects={radexLiveProjects}
      />

      <SectionTransition>
        Offen beantwortet: Komplett vs. Kern, Dauer, Bauleitung und energetische Maßnahmen.
      </SectionTransition>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen zur Komplettsanierung" />

      <ContactForm
        kicker="Komplettsanierung anfragen"
        title="Jetzt unverbindlich beraten lassen"
        intro="Sie planen eine Komplett- oder Kernsanierung im Rhein-Main-Gebiet? Senden Sie uns Fotos Ihrer Immobilie bequem per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Gemeinsam klären wir Umfang, Ablauf und Festpreis."
        photoTip="Senden Sie uns Bilder Ihrer Immobilie bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Komplettsanierung EFH, Kernsanierung Altbau, vor Einzug)..."
      />

      <SeoKnowledgeDrawer
        title="Alles, was Sie über Komplett- und Kernsanierung wissen sollten"
        intro={komplettsanierungSeoIntro}
        sections={komplettsanierungSeoSections}
        ctaLabel="Komplettsanierung anfragen"
        panelId="komplett-seo-panel"
      />
    </main>
  );
}
