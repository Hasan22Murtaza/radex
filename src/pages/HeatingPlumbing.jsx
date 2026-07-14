import { useEffect } from 'react';
import {
  Camera,
  Award,
  ShieldCheck,
  Users,
  Wrench,
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
  heizungSanitaerSeoIntro,
  heizungSanitaerSeoSections,
} from '../data/heizungSanitaerSeoContent';

const HERO_IMAGE = '/img/heizung-sanitaer-hero.webp';

const audienceCards = [
  {
    title: 'Bauherren',
    desc: 'Komplette Heizungs- und Sanitärtechnik für Neubauten – effizient geplant und sauber installiert vom SHK-Meisterbetrieb.',
    image: '/img/heizung-fuer-wen.png',
    imageAlt: 'Planung einer Heizungs- und Sanitärinstallation in einem hellen Wohnraum',
  },
  {
    title: 'Modernisierer',
    desc: 'Austausch der alten Öl- oder Gasheizung gegen eine förderfähige Wärmepumpe inkl. Wärmeverteilung und Heizkörpern.',
    image: '/img/heizung-service-heizung.png',
    imageAlt: 'Moderne Heizkörper in einem frisch renovierten deutschen Wohnzimmer',
  },
  {
    title: 'Eigentümer & Vermieter',
    desc: 'Erneuerung veralteter Leitungen, Sicherung der Trinkwasserhygiene und Wartung der Anlagen – zuverlässig und normgerecht.',
    image: '/img/heizung-service-waermepumpe.png',
    imageAlt: 'Installation einer modernen Wärmepumpe in einem Technikraum',
  },
  {
    title: 'Sanierungsprojekte',
    desc: 'Integration der Haustechnik in Bad-, Wohnungs- oder Komplettsanierung – früh abgestimmt mit Elektro und Trockenbau.',
    image: '/img/heizung-service-sanitaer.png',
    imageAlt: 'Sanitärleitungen während einer Badsanierung',
  },
];

const serviceCards = [
  {
    title: 'Sanitärinstallation im Bad',
    desc: 'Wasserleitungen, Abwasser, Abdichtung, Vorwandinstallation und Warmwasser – fachgerecht nach Norm und abgestimmt auf Ihre Badsanierung.',
    image: '/img/heizung-service-sanitaer.png',
    imageAlt: 'Sanitärinstallation mit freigelegten Leitungen in einem deutschen Bad',
  },
  {
    title: 'Heizungsmodernisierung',
    desc: 'Nicht nur ein neues Heizgerät, sondern Wärmeverteilung, Heizkörper und energetische Maßnahmen im Zusammenspiel – effizient und zukunftssicher.',
    image: '/img/heizung-service-heizung.png',
    imageAlt: 'Heizungsmodernisierung mit neuen Heizkörpern',
  },
  {
    title: 'Wärmepumpe',
    desc: 'Luft-Wasser- und Sole-Wasser-Wärmepumpen inkl. hydraulischem Abgleich, Auslegung und Förderabwicklung – objektbezogen geplant.',
    image: '/img/heizung-service-waermepumpe.png',
    imageAlt: 'Innenaufstellung einer modernen Wärmepumpe',
    to: '/waermepumpe-rhein-main',
  },
  {
    title: 'Fußbodenheizung',
    desc: 'Nachträgliches Einfräsen im Bestand oder klassische Verlegung im Neubau – ideal für niedrige Vorlauftemperaturen und Wärmepumpen.',
    image: '/img/heizung-service-fussboden.png',
    imageAlt: 'Verlegung einer Fußbodenheizung in einem deutschen Wohnraum',
  },
];

const whyRadexCards = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Alle Heizungs- und Sanitärarbeiten unter Meisterverantwortung von Bernd Knoop.',
    icon: Award,
  },
  {
    title: 'Fachgerechte Installation',
    desc: 'Normgerechte Ausführung nach aktuellen technischen Richtlinien und Handwerksstandards.',
    icon: ShieldCheck,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Heizung, Sanitär und Gebäudetechnik abgestimmt mit Ihrer Sanierung – ein Ansprechpartner.',
    icon: Users,
  },
  {
    title: 'Moderne Heizungs- und Sanitärtechnik',
    desc: 'Wärmepumpen, Heizungsmodernisierung und Sanitärinstallation für zukunftssichere Immobilien.',
    icon: Wrench,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Über 60 Städte – kurze Wege und lokale Erfahrung mit Bestandsgebäuden.',
    icon: MapPin,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Von der Planung bis zur Übergabe begleitet Sie ein festes Team.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Kostenlose Erstberatung',
    desc: 'Wir besprechen Ihre Ziele – ob Heizungstausch, Wärmepumpe, Fußbodenheizung oder neue Sanitärleitungen.',
  },
  {
    title: 'Besichtigung & Bestandsaufnahme',
    desc: 'Vor Ort prüfen wir Heizanlage, Leitungen, Heizflächen, Warmwasser und Schnittstellen zur Sanierung.',
  },
  {
    title: 'Konzept & transparentes Angebot',
    desc: 'Sie erhalten ein abgestimmtes Technikkonzept mit klarer Kostenkalkulation – auf Wunsch inkl. Förderpunkten.',
  },
  {
    title: 'Planung & Material',
    desc: 'Auslegung, hydraulischer Abgleich und Materialabstimmung erfolgen vor dem ersten Eingriff.',
  },
  {
    title: 'Fachgerechte Installation',
    desc: 'Unsere SHK-Fachkräfte installieren Heizung und Sanitär unter Meisterverantwortung – sauber und termingerecht.',
  },
  {
    title: 'Inbetriebnahme & Übergabe',
    desc: 'Funktionstest, Einweisung und Dokumentation – danach stehen wir für Wartung und Störungen bereit.',
  },
];

const costCards = [
  {
    title: 'Wärmepumpe (inkl. Einbau)',
    price: 'ab €25.000',
    desc: 'Richtwert inkl. Installation – abhängig von Gebäude, Leistung und Heizflächen. Nach Besichtigung erhalten Sie ein konkretes Angebot.',
    image: '/img/heizung-service-waermepumpe.png',
  },
  {
    title: 'Fußbodenheizung',
    price: 'ab €50 / m²',
    desc: 'Ideal für niedrige Vorlauftemperaturen – im Neubau oder nachträglich im Bestand. Preis je nach Aufbau und Fläche.',
    image: '/img/heizung-service-fussboden.png',
  },
  {
    title: 'Heizkörper-Austausch',
    price: 'ab €600 / Stück',
    desc: 'Moderne Heizkörper für mehr Effizienz und Komfort – oft sinnvoll im Zuge einer Heizungsmodernisierung.',
    image: '/img/heizung-service-heizung.png',
  },
];

const radexLiveProjects = [
  {
    image: '/img/heizung-sanitaer-radex-live.webp',
    badge: 'LIVE',
    title: 'Heizungsmodernisierung im Bestand',
    location: 'Rodgau',
    desc: 'Austausch der Altanlage, neue Wärmeverteilung und laufende Baustelleneinblicke.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-waermepumpe.png',
    badge: 'LIVE',
    title: 'Wärmepumpe Einfamilienhaus',
    location: 'Dreieich',
    desc: 'Objektbezogene Auslegung, Installation und Inbetriebnahme einer Luft-Wasser-Wärmepumpe.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-sanitaer.png',
    badge: 'Abgeschlossen',
    title: 'Sanitärinstallation Bad',
    location: 'Offenbach am Main',
    desc: 'Neue Leitungen, Vorwand und Abdichtung – abgestimmt auf die Badsanierung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-fussboden.png',
    badge: 'Vorher & Nachher',
    title: 'Fußbodenheizung im Bestand',
    location: 'Darmstadt',
    desc: 'Nachträgliche Flächenheizung für niedrige Vorlauftemperaturen und höheren Wohnkomfort.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/heizung-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick SHK',
    location: 'Neu-Isenburg',
    desc: 'Authentische Einblicke in Planung und Installation von Heizung und Sanitär.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/heizung-service-heizung.png',
    badge: 'Abgeschlossen',
    title: 'Heizkörper & hydraulischer Abgleich',
    location: 'Frankfurt am Main',
    desc: 'Neue Heizflächen und fein abgestimmte Verteilung – effizient und komfortabel.',
    cta: 'Projekt ansehen',
  },
];

const faqsData = [
  {
    q: 'Warum sind Heizung und Sanitär bei einer Sanierung so wichtig?',
    a: 'Heizung und Sanitär gehören zu den wichtigsten technischen Grundlagen einer Sanierung. Sie liegen in Wänden, Böden und Schächten und müssen geplant sein, bevor Fliesen, Estrich und Oberflächen fertig sind. Wer diese Gewerke zu spät berücksichtigt, riskiert teure Nacharbeiten. Deshalb betrachtet Radex Heizung und Sanitär nicht isoliert, sondern als Teil des gesamten Sanierungsprojekts.',
  },
  {
    q: 'Ist Radex ein zertifizierter SHK-Betrieb?',
    a: 'Ja. Radex ist ein eingetragener SHK-Meisterbetrieb. Bernd Knoop ist als SHK-Meister & Betriebsleiter für Sanitär, Heizung, Klima und Gebäudetechnik fachlich verantwortlich. Alle Heizungs- und Sanitärarbeiten werden unter dieser Meisterverantwortung ausgeführt.',
  },
  {
    q: 'Ist eine Wärmepumpe im Altbau sinnvoll?',
    a: 'Oft ja. Entscheidend ist eine möglichst niedrige Vorlauftemperatur, die wir durch große Heizflächen (Fußboden- oder Niedertemperaturheizkörper) und verbesserte Dämmung erreichen. Im Rahmen einer Vor-Ort-Analyse prüfen wir die Heizlast Ihres Gebäudes und sagen Ihnen verbindlich, ob sich eine Wärmepumpe lohnt.',
  },
  {
    q: 'Welche Förderungen gibt es für den Heizungstausch?',
    a: 'Über die Bundesförderung für effiziente Gebäude (BEG) sind aktuell Zuschüsse von bis zu 70 % für den Einbau einer Wärmepumpe möglich (Grundförderung, Klimageschwindigkeits- und Einkommensbonus). Wir übernehmen auf Wunsch die komplette Förderabwicklung mit Energie-Effizienz-Experten.',
  },
  {
    q: 'Müssen die Wasserleitungen bei einer Sanierung erneuert werden?',
    a: 'Alte verzinkte Stahl- oder Bleileitungen sollten dringend ersetzt werden, da sie verkalken und die Trinkwasserqualität beeinträchtigen. Bei einer Bad- oder Komplettsanierung erneuern wir die Leitungen direkt mit, solange die Wände ohnehin geöffnet sind.',
  },
  {
    q: 'Bieten Sie auch Wartung an?',
    a: 'Ja. Als SHK-Meisterbetrieb warten wir Ihre Heizungs- und Sanitäranlagen und stehen bei Störungen wie Heizungsausfall oder Wasserschäden zur Verfügung.',
  },
];

export default function HeatingPlumbing() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useSeo({
    title: 'Heizung & Sanitär Rhein-Main | Wärmepumpe vom SHK-Meister | Radex',
    description:
      'Heizung & Sanitär im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Wärmepumpe, Heizungstausch, Fußbodenheizung & Sanitärinstallation inkl. Förderung. Jetzt Beratung sichern!',
    path: '/heizung-sanitaer-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Heizung & Sanitär',
        description:
          'Heizungsmodernisierung, Wärmepumpe, Fußbodenheizung und Sanitärinstallation vom SHK-Meisterbetrieb im Rhein-Main-Gebiet.',
        path: '/heizung-sanitaer-rhein-main',
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
              SHK-Meisterbetrieb · Heizung & Sanitär · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Heizung & Sanitär im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Zukunftssichere Haustechnik vom zugelassenen SHK-Meisterbetrieb.
            </p>
            <p className="br-hero-text">
              Heizung und Sanitär gehören zu den wichtigsten technischen Grundlagen einer Sanierung und sollten –
              besonders bei Bestandsimmobilien – früh geplant werden, bevor sichtbare Oberflächen entstehen. Radex ist
              im Bereich Heizung, Sanitär und Gebäudetechnik durch Bernd Knoop SHK-meistergeführt.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>SHK-Meisterbetrieb</li>
              <li>Wärmepumpe & Förderung</li>
              <li>Festpreis nach Begehung</li>
              <li>Rhein-Main-Gebiet</li>
            </ul>
            <SharedCTABlock isHero />
            <p className="br-hero-micro">
              <Camera size={14} /> Fotos der Anlage senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Moderne Heizungs- und Sanitärtechnik in einem renovierten deutschen Wohnhaus"
          title="Heizung & Sanitär Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Für wen ist diese Leistung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Heizung und Sanitär als Teil des gesamten Sanierungsprojekts gedacht. Ob Neubau, Modernisierung oder
              Komplettsanierung – wir planen die Haustechnik so, dass sie zu Gebäude, Nutzung und übrigen Gewerken passt.
            </p>
          </div>
          <ImageCardGrid cards={audienceCards} />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, ob Sie modernisieren, vermieten oder komplett sanieren: Erfolgreiche Haustechnik beginnt mit einer
        klaren Leistungswahl. Im nächsten Abschnitt zeigen wir Ihnen, welche SHK-Leistungen wir unter Meisterverantwortung
        umsetzen.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere SHK-Leistungen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Heizung, Sanitär und Warmwasser aus einer Hand – unter Meisterverantwortung. Von der Sanitärinstallation
              im Bad bis zur Wärmepumpe planen und installieren wir zukunftssichere Technik für Ihr Objekt.
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
        Gute Technik allein reicht nicht – entscheidend ist, wer sie plant und verantwortet. Deshalb setzen Eigentümer
        im Rhein-Main-Gebiet auf Radex als eingetragenen SHK-Meisterbetrieb.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex für Heizung & Sanitär wählen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Meisterverantwortung, normgerechte Installation und enge Abstimmung mit Ihrer Sanierung – damit Technik und
              Oberflächen sauber ineinandergreifen.
            </p>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <SectionTransition>
        Von der ersten Einschätzung bis zur Inbetriebnahme begleiten wir Ihr SHK-Projekt Schritt für Schritt. So wissen
        Sie jederzeit, welche Phase als Nächstes folgt.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihr Heizungs- & Sanitärprojekt mit Radex ab"
        intro="Ein strukturierter Ablauf ist entscheidend für eine reibungslose Haustechnik-Modernisierung. Von der Erstberatung bis zur Übergabe haben Sie einen festen Ansprechpartner."
        steps={processSteps}
        image="/img/heizung-process.png"
      />

      <SectionTransition>
        Nach dem Ablauf stellt sich oft die wichtigste Frage: Mit welchen Kosten müssen Sie rechnen? Die folgenden
        Richtwerte geben eine erste Orientierung – das konkrete Angebot folgt nach der Bestandsaufnahme.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Kosten für Heizung & Sanitär</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Preise sind Richtwerte und abhängig von Gebäude, Technik und Aufwand – nach Bestandsaufnahme erstellen wir
              ein konkretes Angebot ohne versteckte Kosten.
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
        authentische Einblicke in laufende und abgeschlossene SHK-Projekte.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Anlagen. Wir zeigen Ihnen den Weg dorthin. Mit Radex Live erhalten Sie authentische Einblicke in Heizungsmodernisierungen, Wärmepumpen und Sanitärinstallationen aus dem Rhein-Main-Gebiet – von der Bestandsaufnahme bis zur Inbetriebnahme."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Heizungs- und Sanitärarbeiten als SHK-Meister & Betriebsleiter – persönlich, transparent und fachlich verantwortlich."
        projects={radexLiveProjects}
      />

      <SectionTransition>
        Offen beantwortet: Förderung, Altbau, Leitungen und Wartung – damit Sie den nächsten Schritt mit ruhigem Gefühl
        gehen können.
      </SectionTransition>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen zu Heizung & Sanitär" />

      <ContactForm
        kicker="Heizung & Sanitär anfragen"
        title="Jetzt unverbindlich beraten lassen"
        intro="Sie planen eine Heizungsmodernisierung, Wärmepumpe oder neue Sanitärleitungen im Rhein-Main-Gebiet? Senden Sie uns Fotos Ihrer Anlage bequem per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Gemeinsam prüfen wir, welche Lösung zu Ihrem Gebäude passt."
        photoTip="Senden Sie uns Bilder Ihrer Heizung oder Ihrer Sanitärsituation bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Wärmepumpe, Heizungstausch, Fußbodenheizung, Leitungen erneuern)..."
      />

      <SeoTocSection
        title="Alles, was Sie über Heizung & Sanitär wissen sollten"
        intro={heizungSanitaerSeoIntro}
        sections={heizungSanitaerSeoSections}
        showAllContent
      />
    </main>
  );
}
