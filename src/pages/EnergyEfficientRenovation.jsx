import { useEffect } from 'react';
import {
  Camera,
  Award,
  ShieldCheck,
  Users,
  Leaf,
  MapPin,
  UserCheck,
} from 'lucide-react';
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
  SeoTocSection,
  RadexLiveSection,
  ProcessSteps,
  SectionTransition,
  ImageCardGrid,
} from '../components/landing/SharedLandingParts';
import {
  energetischeSanierungSeoIntro,
  energetischeSanierungSeoSections,
} from '../data/energetischeSanierungSeoContent';

const HERO_IMAGE = '/img/haus-service-energie.png';

const audienceCards = [
  {
    title: 'Eigentümer älterer Häuser',
    desc: 'Hohe Heizkosten, Zugluft oder alte Heiztechnik dauerhaft verbessern – mit klarer Maßnahmenreihenfolge.',
    image: '/img/haus-typ-bestand.png',
    imageAlt: 'Bestandshaus im Rhein-Main-Gebiet vor energetischer Modernisierung',
  },
  {
    title: 'Käufer vor dem Einzug',
    desc: 'Heizung, Dämmung, Fensteranschlüsse, Lüftung und Innenausbau noch sinnvoll bündeln – bevor Sie einziehen.',
    image: '/img/haus-typ-kauf.png',
    imageAlt: 'Einfamilienhaus nach dem Kauf bereit für energetische Sanierung',
  },
  {
    title: 'Vermieter & Bestandshalter',
    desc: 'Wirtschaftlich modernisieren mit einer Reihenfolge, die Kosten, Leerstand und Zukunftssicherheit zusammenbringt.',
    image: '/img/gu-card-haus.png',
    imageAlt: 'Modernisiertes vermietetes Wohnhaus im Rhein-Main-Gebiet',
  },
  {
    title: 'Sanierer mit Förderinteresse',
    desc: 'Förderprogramme früh prüfen und vor Auftragsvergabe einplanen – technisch und zeitlich abgestimmt.',
    image: '/img/altbau-typ-energie.png',
    imageAlt: 'Energetische Maßnahmen an einem Altbau',
  },
];

const serviceCards = [
  {
    title: 'Heizungsmodernisierung',
    desc: 'Alte Heizungen, ineffiziente Regelung und ungeeignete Heizflächen gemeinsam bewerten – für bessere Effizienz und Komfort.',
    image: '/img/heizung-service-heizung.png',
    imageAlt: 'Heizungsmodernisierung mit neuen Heizkörpern',
    to: '/heizung-sanitaer-rhein-main',
  },
  {
    title: 'Wärmepumpe im Bestand',
    desc: 'Aufstellort, Vorlauftemperatur, Heizkörper, Schallschutz und Elektroanschluss zusammen prüfen und fachgerecht umsetzen.',
    image: '/img/heizung-service-waermepumpe.png',
    imageAlt: 'Luft-Wasser-Wärmepumpe in einem Technikraum',
    to: '/waermepumpe-rhein-main',
  },
  {
    title: 'Dämmung & Gebäudehülle',
    desc: 'Dach, Fassade und Kellerdecke nach Nutzung, Feuchteverhalten und bauphysikalischer Logik einordnen und sanieren.',
    image: '/img/altbau-service-energie.png',
    imageAlt: 'Dämmmaßnahmen an einem Bestandsgebäude',
  },
  {
    title: 'Fenster, Lüftung & Feuchtigkeit',
    desc: 'Neue Fenster, dichte Anschlüsse und ein abgestimmtes Lüftungskonzept – damit Wärme bleibt und Schimmel ausbleibt.',
    image: '/img/haus-service-energie.png',
    imageAlt: 'Neue Fenster und energetische Gebäudehülle',
  },
];

const whyRadexCards = [
  {
    title: 'SHK-Meisterkompetenz',
    desc: 'Heizung und Gebäudetechnik unter Meisterverantwortung von Bernd Knoop.',
    icon: Award,
  },
  {
    title: 'Gesamtsystem statt Einzelaktionen',
    desc: 'Dämmung, Heizung, Fenster und Lüftung werden aufeinander abgestimmt.',
    icon: Leaf,
  },
  {
    title: 'Förderung mitdenken',
    desc: 'Antragszeitpunkte und technische Anforderungen im Ablauf berücksichtigen.',
    icon: ShieldCheck,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Ein Ansprechpartner für Planung, Koordination und handwerkliche Umsetzung.',
    icon: Users,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Über 60 Städte – kurze Wege und Erfahrung mit Bestandsgebäuden.',
    icon: MapPin,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Von der Bestandsaufnahme bis zur Übergabe begleitet Sie ein festes Team.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Ziel und Objekt klären',
    desc: 'Wir besprechen Ihre Ziele – Heizkosten senken, Wärmepumpe, Dämmung oder Gesamtsanierung.',
  },
  {
    title: 'Bestandsaufnahme',
    desc: 'Vor Ort prüfen wir Gebäudehülle, Heizung, Heizflächen, Feuchte und sinnvolle Schnittstellen.',
  },
  {
    title: 'Maßnahmen einordnen',
    desc: 'Aus der Analyse entsteht eine klare Reihenfolge – was jetzt, was später, was entfällt.',
  },
  {
    title: 'Förder- und Fachfragen prüfen',
    desc: 'Wir klären Förderthemen und technische Voraussetzungen – ohne Garantieversprechen.',
  },
  {
    title: 'Umsetzung und Abstimmung',
    desc: 'Gewerke werden koordiniert umgesetzt – Heizung, Dämmung, Fenster, Bad und Innenausbau greifen ineinander.',
  },
  {
    title: 'Übergabe und Nachbetreuung',
    desc: 'Funktionstest, Dokumentation und Übergabe – danach stehen wir für Fragen und Wartung bereit.',
  },
];

const costCards = [
  {
    title: 'Einzelmaßnahme',
    price: 'ab €10.000',
    desc: 'z. B. einzelne Dämmung, Fenstertausch oder Optimierung – abhängig von Umfang und Gebäude.',
    image: '/img/haus-service-energie.png',
  },
  {
    title: 'Heizungstausch',
    price: 'ab €20.000',
    desc: 'Richtwert für Heizungsmodernisierung inkl. typischer Installation – Wärmepumpe oft höher.',
    image: '/img/heizung-service-heizung.png',
  },
  {
    title: 'Umfassende Sanierung',
    price: 'ab €80.000',
    desc: 'Mehrere Maßnahmen gebündelt – Hülle, Technik und Ausbau. Konkretes Angebot nach Begehung.',
    image: '/img/gu-card-haus.png',
  },
];

const radexLiveProjects = [
  {
    image: '/img/heizung-service-waermepumpe.png',
    badge: 'LIVE',
    title: 'Wärmepumpe Einfamilienhaus',
    location: 'Rodgau',
    desc: 'Auslegung, Installation und Inbetriebnahme – abgestimmt auf Heizflächen und Gebäude.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/haus-service-energie.png',
    badge: 'LIVE',
    title: 'Energetische Haussanierung',
    location: 'Dreieich',
    desc: 'Gebäudehülle, Technik und Innenausbau – laufende Einblicke in die Bauphase.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-heizung.png',
    badge: 'Abgeschlossen',
    title: 'Heizungsmodernisierung Bestand',
    location: 'Offenbach am Main',
    desc: 'Neue Wärmeverteilung, Heizkörper und effizientere Regelung im Bestand.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-service-energie.png',
    badge: 'Vorher & Nachher',
    title: 'Altbau energetisch modernisiert',
    location: 'Darmstadt',
    desc: 'Dämmung und Technik im Altbau – sichtbarer Vergleich vor und nach der Sanierung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/haus-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Energie',
    location: 'Neu-Isenburg',
    desc: 'Authentische Einblicke in Planung und Umsetzung energetischer Maßnahmen.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/haus-service-bad.png',
    badge: 'Abgeschlossen',
    title: 'Bad & Haustechnik kombiniert',
    location: 'Frankfurt am Main',
    desc: 'Warmwasser, Heizflächen und Badmodernisierung in einem abgestimmten Ablauf.',
    cta: 'Projekt ansehen',
  },
];

const faqsData = [
  {
    q: 'Was gehört zu einer energetischen Sanierung?',
    a: 'Zur energetischen Sanierung können Heizungsmodernisierung, Wärmepumpe, Dämmung von Dach, Fassade oder Kellerdecke, Fenster, Lüftung, Heizungsoptimierung, Warmwasser, Schimmelvermeidung, Badsanierung und Innenausbau gehören.',
  },
  {
    q: 'Wann lohnt sich eine energetische Sanierung?',
    a: 'Besonders sinnvoll ist sie bei hohen Heizkosten, alter Heizung, schlecht gedämmten Bauteilen, kalten Räumen, Zugluft, Schimmel, Feuchtigkeit oder wenn ohnehin eine größere Sanierung nach Kauf oder vor Einzug geplant ist.',
  },
  {
    q: 'Muss immer das ganze Haus energetisch saniert werden?',
    a: 'Nein. Manchmal reichen einzelne Maßnahmen, in anderen Fällen ist eine umfassendere Sanierung sinnvoll. Entscheidend sind Bestandsaufnahme und die richtige Reihenfolge.',
  },
  {
    q: 'Gibt es Förderung für energetische Sanierung?',
    a: 'Ja, aber Förderfähigkeit, technische Anforderungen und Antragszeitpunkt müssen immer aktuell geprüft werden. Förderung ist ein wichtiger Faktor, aber keine Garantie.',
  },
  {
    q: 'Kann Radex Förderanträge garantieren?',
    a: 'Nein. Radex kann Sanierungsmaßnahmen koordinieren und Förderthemen im Ablauf berücksichtigen. Die konkrete Förderzusage hängt vom jeweiligen Programm und den aktuellen Bedingungen ab.',
  },
  {
    q: 'Ist eine Wärmepumpe im Bestand sinnvoll?',
    a: 'Das hängt vom Gebäude ab. Dämmstandard, Heizkörper, Vorlauftemperatur, Warmwasserbedarf, Aufstellort und Elektroanschluss müssen zusammen bewertet werden.',
  },
  {
    q: 'Warum ist Lüftung bei energetischer Sanierung wichtig?',
    a: 'Wenn Gebäude dichter werden, verändert sich der Luftaustausch. Feuchtigkeit muss zuverlässig abgeführt werden, damit kein Schimmel entsteht.',
  },
  {
    q: 'Kann Radex energetische Sanierung aus einer Hand koordinieren?',
    a: 'Ja. Radex koordiniert Heizung, Sanitär, Innenausbau, Badsanierung, Schadstoffthemen und qualifizierte Elektrofachpartner.',
  },
];

export default function EnergyEfficientRenovation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Energetische Sanierung Rhein-Main | Förderung & Wärmepumpe | Radex',
    description:
      'Energetische Sanierung im Rhein-Main-Gebiet: Dämmung, Fenster, Wärmepumpe, Lüftung und Förderung – vom SHK-Meisterbetrieb koordiniert. Jetzt Beratung sichern!',
    path: '/energetische-sanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Energetische Sanierung',
        description:
          'Energetische Sanierung im Rhein-Main-Gebiet: Heizung, Dämmung, Fenster, Lüftung und Förderberatung aus einer Hand.',
        path: '/energetische-sanierung-rhein-main',
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
              SHK-Meisterbetrieb · Energie & Förderung · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Energetische Sanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Heizkosten senken, Wohnkomfort verbessern und Gebäude sinnvoll modernisieren.
            </p>
            <p className="br-hero-text">
              Radex koordiniert energetische Sanierungen mit Blick auf Heizung, Dämmung, Fenster, Lüftung, Feuchtigkeit
              und Innenausbau. Im Bereich Heizung, Sanitär und Gebäudetechnik arbeitet der Betrieb als SHK-Meisterbetrieb
              mit Bernd Knoop als Meister und Betriebsleiter.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>Gesamtsystem gedacht</li>
              <li>Wärmepumpe & Förderung</li>
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
          aria-label="Energetische Sanierung eines Wohnhauses im Rhein-Main-Gebiet"
          title="Energetische Sanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Für wen ist energetische Sanierung sinnvoll?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Energieeffizienz ist immer dann ein Thema, wenn Gebäudehülle und Haustechnik nicht mehr zusammenpassen –
              beim Altbau, vor dem Einzug oder wenn Förderung und Zukunftssicherheit zählen.
            </p>
          </div>
          <ImageCardGrid cards={audienceCards} />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, ob Sie einzelne Maßnahmen planen oder umfassend modernisieren: Entscheidend ist die richtige
        Leistungswahl. Im nächsten Abschnitt zeigen wir typische energetische Maßnahmen im Überblick.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Maßnahmen der energetischen Sanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Radex betrachtet das Gebäude immer als Gesamtsystem – Heizung, Hülle, Fenster und Lüftung gehören
              zusammen.
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
        Gute Einzelmaßnahmen reichen nicht – entscheidend ist, wer das Gesamtsystem plant und verantwortet. Deshalb setzen
        Eigentümer im Rhein-Main-Gebiet auf Radex.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex für energetische Sanierung wählen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Meisterkompetenz, abgestimmte Maßnahmen und klare Kommunikation – damit Technik, Hülle und Förderung
              zusammenpassen.
            </p>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <SectionTransition>
        Von der ersten Einschätzung bis zur Übergabe begleiten wir Ihr Energieprojekt Schritt für Schritt. So wissen Sie
        jederzeit, welche Phase als Nächstes folgt.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihre energetische Sanierung mit Radex ab"
        intro="Ein strukturierter Ablauf ist entscheidend für sinnvolle Maßnahmen und Förderfähigkeit. Von der Erstberatung bis zur Übergabe haben Sie einen festen Ansprechpartner."
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
            <h2 className="br-section-title">Kosten einer energetischen Sanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Preise sind Richtwerte und abhängig von Gebäudezustand, Maßnahmen und Aufwand – nach Bestandsaufnahme
              erstellen wir ein konkretes Angebot ohne versteckte Kosten.
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
        </div>
      </section>

      <SectionTransition>
        Richtwerte helfen bei der Orientierung – echte Baustellen zeigen, wie wir arbeiten. Deshalb geben wir Ihnen
        authentische Einblicke in energetische Projekte.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Häuser. Wir zeigen Ihnen den Weg dorthin. Mit Radex Live erhalten Sie authentische Einblicke in Heizungsmodernisierungen, Wärmepumpen und energetische Sanierungen aus dem Rhein-Main-Gebiet."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre energetische Sanierung als SHK-Meister & Betriebsleiter – persönlich, transparent und fachlich verantwortlich."
        projects={radexLiveProjects}
      />

      <SectionTransition>
        Offen beantwortet: Maßnahmen, Förderung, Wärmepumpe und Lüftung – damit Sie den nächsten Schritt mit ruhigem
        Gefühl gehen können.
      </SectionTransition>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen zur energetischen Sanierung" />

      <ContactForm
        kicker="Energetische Sanierung anfragen"
        title="Jetzt unverbindlich beraten lassen"
        intro="Sie planen eine energetische Sanierung, Wärmepumpe oder Dämmmaßnahmen im Rhein-Main-Gebiet? Senden Sie uns Fotos Ihres Gebäudes bequem per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin."
        photoTip="Senden Sie uns Bilder Ihrer Immobilie oder Heizanlage bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Wärmepumpe, Dämmung, Fenster, Förderung)..."
      />

      <SeoTocSection
        title="Alles, was Sie über energetische Sanierung wissen sollten"
        intro={energetischeSanierungSeoIntro}
        sections={energetischeSanierungSeoSections}
        showAllContent
      />
    </main>
  );
}
