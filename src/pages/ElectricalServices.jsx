import { useEffect } from 'react';
import {
  Camera,
  Zap,
  ShieldCheck,
  Users,
  Network,
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
  elektroinstallationSeoIntro,
  elektroinstallationSeoSections,
} from '../data/elektroinstallationSeoContent';

const HERO_IMAGE = '/img/haus-service-elektro.png';

const audienceCards = [
  {
    title: 'Bei der Badsanierung',
    desc: 'Elektro muss exakt mit Sanitär, Abdichtung, Fliesen, Lüftung und Badmöbeln abgestimmt werden – Licht, Spiegelanschluss, Steckdosen und sichere Nassbereiche.',
    image: '/img/badsanierung-thema-komplett.png',
    imageAlt: 'Bad während der Sanierung mit abgestimmter Elektro- und Sanitärplanung',
  },
  {
    title: 'Bei der Küche',
    desc: 'Stromkreise, Geräteanschlüsse, Arbeitsflächenbeleuchtung und Steckdosen müssen vor der Küchenmontage geplant sein.',
    image: '/img/wohnung-service-elektro.png',
    imageAlt: 'Elektroinstallation in einer modernen Küche',
  },
  {
    title: 'Bei der Wohnungssanierung',
    desc: 'Steckdosen, Licht, Netzwerk, Küche, Bad und Sicherungskasten werden bewertet, bevor Wände und Böden fertig sind.',
    image: '/img/wohnung-service-elektro.png',
    imageAlt: 'Elektroarbeiten in einer Wohnung während der Sanierung',
  },
  {
    title: 'Bei der Haussanierung',
    desc: 'Elektro wird mit Heizung, Sanitär, Innenausbau, Raumaufteilung, energetischen Maßnahmen und möglicher Wärmepumpe zusammengedacht.',
    image: '/img/haus-service-elektro.png',
    imageAlt: 'Elektrokoordination bei einer Haussanierung im Rhein-Main-Gebiet',
  },
];

const serviceCards = [
  {
    title: 'Sicherungskasten & Unterverteilung',
    desc: 'Prüfung, ob die vorhandene Unterverteilung noch zu Küche, Bad, Wärmepumpe, Wallbox und modernen Stromkreisen passt.',
    image: '/img/haus-service-elektro.png',
    imageAlt: 'Sicherungskasten und Unterverteilung in einem deutschen Wohnhaus',
    to: '/sicherungskasten-erneuern-rhein-main',
  },
  {
    title: 'Altbau-Elektrik erneuern',
    desc: 'Alte Leitungen, veraltete Sicherungen, fehlende Schutzschalter und zu wenige Stromkreise werden fachlich geprüft, wenn Wände ohnehin offen sind.',
    image: '/img/altbau-service-elektro.png',
    imageAlt: 'Erneuerung der Elektrik in einem Altbau',
  },
  {
    title: 'Netzwerk & Smart Home',
    desc: 'Netzwerk für Homeoffice und Medien, Lichtsteuerung, Rollläden und Komfortfunktionen – früh vorbereitet statt aufwendig nachgerüstet.',
    image: '/img/wohnung-service-elektro.png',
    imageAlt: 'Netzwerk- und Smart-Home-Vorbereitung in einer Wohnung',
  },
  {
    title: 'Wärmepumpe & Wallbox',
    desc: 'Stromversorgung, Regeltechnik und Aufstellort für Wärmepumpen sowie Ladevorbereitung für E-Mobilität – mit der Heizungsmodernisierung abgestimmt.',
    image: '/img/heizung-service-waermepumpe.png',
    imageAlt: 'Wärmepumpe mit abgestimmtem Elektroanschluss',
    to: '/waermepumpe-rhein-main',
  },
  {
    title: 'Gewerbe & Büro',
    desc: 'Arbeitsplätze, Datentechnik, Beleuchtung, Teeküche und Kundenbereiche – bei Büroumbau, Praxis, Ladenumbau und Mieterausbau.',
    image: '/img/gu-card-gewerbe.png',
    imageAlt: 'Elektrokoordination in einem Gewerbe- und Büroobjekt',
  },
];

const whyRadexCards = [
  {
    title: 'Koordinierte Elektrofachpartner',
    desc: 'Elektroarbeiten werden durch qualifizierte Fachbetriebe ausgeführt – Radex bindet sie strukturiert in die Sanierung ein.',
    icon: Zap,
  },
  {
    title: 'Schnittstellen klar geregelt',
    desc: 'Elektro wird früh mit Heizung, Sanitär, Bad, Küche und Innenausbau abgestimmt – bevor Oberflächen fertig sind.',
    icon: ShieldCheck,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Ein Ansprechpartner für Planung, Koordination und Bauablauf – ohne Schnittstellenchaos zwischen Gewerken.',
    icon: Users,
  },
  {
    title: 'Netzwerk & Smart Home mitgedacht',
    desc: 'Homeoffice, Daten, Lichtsteuerung und Komfortfunktionen werden früh vorbereitet statt später nachgerüstet.',
    icon: Network,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Über 60 Städte – kurze Wege und lokale Erfahrung mit Bestandsgebäuden.',
    icon: MapPin,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Von der Bestandsaufnahme bis zur Übergabe begleitet Sie ein festes Team. SHK-Meister: Bernd Knoop.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Kostenlose Erstberatung',
    desc: 'Wir besprechen Ihren Bedarf – Bad, Küche, Altbau-Elektrik, Sicherungskasten, Netzwerk oder Wärmepumpe.',
  },
  {
    title: 'Besichtigung & Bestandsaufnahme',
    desc: 'Vor Ort prüfen wir Leitungen, Unterverteilung, Stromkreise und Schnittstellen zu den übrigen Gewerken.',
  },
  {
    title: 'Konzept & transparentes Angebot',
    desc: 'Sie erhalten ein abgestimmtes Elektrokonzept mit klarer Kostenkalkulation – koordiniert mit der Gesamtsanierung.',
  },
  {
    title: 'Fachpartner & Schnittstellenplanung',
    desc: 'Qualifizierte Elektrofachbetriebe werden eingebunden und Termine mit SHK, Trockenbau und Innenausbau abgestimmt.',
  },
  {
    title: 'Koordinierte Ausführung',
    desc: 'Die Elektroarbeiten erfolgen in der richtigen Reihenfolge – bevor Wände geschlossen und Oberflächen fertig sind.',
  },
  {
    title: 'Übergabe & Dokumentation',
    desc: 'Funktionstest, Einweisung und geordnete Übergabe – danach stehen wir für Anschlussfragen bereit.',
  },
];

const costCards = [
  {
    title: 'Sicherungskasten erneuern',
    price: 'ab €2.500',
    desc: 'Richtwert für die Erneuerung der Unterverteilung – abhängig von Stromkreisen, FI-/LS-Schutz und Gebäudezustand.',
    image: '/img/haus-service-elektro.png',
  },
  {
    title: 'Wallbox-Installation',
    price: 'ab €1.200',
    desc: 'Ladevorbereitung für E-Mobilität – abhängig von Zuleitung, Absicherung und Abstand zum Stellplatz.',
    image: '/img/heizung-service-waermepumpe.png',
  },
  {
    title: 'Komplette Elektroerneuerung',
    price: 'ab €10.000',
    desc: 'Umfangreiche Erneuerung von Leitungen, Stromkreisen und Unterverteilung – nach Bestandsaufnahme konkret kalkuliert.',
    image: '/img/altbau-service-elektro.png',
  },
];

const radexLiveProjects = [
  {
    image: '/img/haus-service-elektro.png',
    badge: 'LIVE',
    title: 'Elektrokoordination Haussanierung',
    location: 'Rodgau',
    desc: 'Sicherungskasten, Stromkreise und Schnittstellen zu Heizung und Innenausbau – laufende Baustelleneinblicke.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-service-elektro.png',
    badge: 'LIVE',
    title: 'Wohnungssanierung mit Elektro',
    location: 'Frankfurt am Main',
    desc: 'Licht, Steckdosen, Küche und Badtechnik – abgestimmt bevor Wände und Böden fertig sind.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-service-elektro.png',
    badge: 'Abgeschlossen',
    title: 'Altbau-Elektrik erneuern',
    location: 'Offenbach am Main',
    desc: 'Alte Leitungen und Unterverteilung geprüft und modernisiert – fachlich koordiniert im Bestand.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-waermepumpe.png',
    badge: 'LIVE',
    title: 'Wärmepumpe & Elektroanschluss',
    location: 'Dreieich',
    desc: 'Stromversorgung und Regeltechnik für die Wärmepumpe – abgestimmt mit der Heizungsmodernisierung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/innenausbau-radex-live.webp',
    badge: 'Video',
    title: 'Baustelleneinblick Sanierung',
    location: 'Neu-Isenburg',
    desc: 'Authentische Einblicke in die gewerkeübergreifende Koordination inkl. Elektro.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/gu-card-gewerbe.png',
    badge: 'Abgeschlossen',
    title: 'Gewerbe & Büro Elektro',
    location: 'Darmstadt',
    desc: 'Arbeitsplätze, Beleuchtung und Datentechnik bei Büroumbau – termingerecht koordiniert.',
    cta: 'Projekt ansehen',
  },
];

const faqsData = [
  {
    q: 'Führt Radex Elektroarbeiten selbst aus?',
    a: 'Elektroarbeiten werden durch qualifizierte Elektrofachbetriebe ausgeführt. Radex koordiniert diese Fachpartner im Rahmen der Sanierung und stimmt Elektro mit Heizung, Sanitär, Innenausbau, Bad, Küche und weiteren Gewerken ab. Im Bereich Heizung, Sanitär und Gebäudetechnik ist Radex durch Bernd Knoop SHK-meistergeführt.',
  },
  {
    q: 'Wann sollte Elektro bei einer Sanierung geplant werden?',
    a: 'Elektro sollte sehr früh geplant werden, bevor Wände geschlossen, Fliesen gesetzt, Böden verlegt oder Küchen eingebaut werden. Spätere Änderungen sind deutlich aufwendiger, weil fertige Oberflächen wieder geöffnet werden müssen.',
  },
  {
    q: 'Was ist bei Elektro im Bad wichtig?',
    a: 'Im Bad müssen Sicherheitsbereiche (Schutzzonen), Licht, Steckdosen, Spiegelanschlüsse, Lüfter und Badtechnik fachgerecht geplant und mit Sanitär, Abdichtung und Fliesen abgestimmt werden. Gerade in kleinen Bädern ist die frühe Planung entscheidend.',
  },
  {
    q: 'Sollte der Sicherungskasten bei einer Sanierung geprüft werden?',
    a: 'Ja. Besonders bei älteren Immobilien, einer neuen Küche, Wärmepumpe, Wallbox-Vorbereitung, Badsanierung oder umfassender Sanierung sollte geprüft werden, ob die vorhandene Unterverteilung noch zu den heutigen Anforderungen passt. Moderne Geräte und zusätzliche Stromkreise bringen eine ältere Struktur schnell an Grenzen.',
  },
  {
    q: 'Kann die Elektrik bei einer Altbausanierung erneuert werden?',
    a: 'Ja. Bei Altbau- oder Kernsanierung sollte die Elektrostruktur fachlich geprüft werden – alte Leitungen, Unterverteilungen, Stromkreise und Steckdosen passen oft nicht mehr zur heutigen Nutzung. Wenn Wände und Böden ohnehin geöffnet werden, ist der richtige Zeitpunkt dafür. Bei Verdacht auf Schadstoffe ist Radex nach TRGS 519 zertifiziert.',
  },
  {
    q: 'Was kostet Elektroinstallation bei einer Sanierung?',
    a: 'Die Kosten hängen vom Umfang ab: einzelne Steckdosen, Küche, Bad, Sicherungskasten, Netzwerk, Altbau-Elektrik oder eine komplette Elektroerneuerung unterscheiden sich stark. Nach einer Bestandsaufnahme kann ein nachvollziehbares Angebot erstellt werden.',
  },
];

export default function ElectricalServices() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useSeo({
    title: 'Elektrotechnik Rhein-Main | Elektroinstallation & Smart Home | Radex',
    description:
      'Elektroinstallation im Rhein-Main-Gebiet: Sicherungskasten, Altbau-Elektrik, Bad, Küche, Wärmepumpe, Wallbox & Smart Home – koordiniert von Radex. Jetzt Beratung sichern!',
    path: '/elektroinstallation-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Elektrotechnik',
        description:
          'Elektroinstallation, Sicherungskasten, Altbau-Elektrik, Netzwerk, Smart Home und Wallbox – koordiniert von Radex mit qualifizierten Elektrofachpartnern im Rhein-Main-Gebiet.',
        path: '/elektroinstallation-rhein-main',
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
              Elektrofachpartner koordiniert · Sanierung · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Elektroinstallation im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Elektrofachpartner koordiniert einbinden – bei Sanierung, Bad, Küche, Altbau, Wärmepumpe und Gewerbe.
            </p>
            <p className="br-hero-text">
              Eine moderne Elektroinstallation ist ein zentraler Bestandteil jeder Sanierung. Radex stimmt die
              Elektroarbeiten früh mit allen Gewerken ab; die Ausführung erfolgt durch qualifizierte Elektrofachbetriebe,
              koordiniert von Radex im gesamten Rhein-Main-Gebiet. Im Bereich Heizung, Sanitär und Gebäudetechnik ist
              Radex durch Bernd Knoop SHK-meistergeführt.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>Koordinierte Fachpartner</li>
              <li>Früh in der Sanierung geplant</li>
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
          aria-label="Elektroinstallation und Sicherungstechnik in einem sanierten deutschen Wohnhaus"
          title="Elektrotechnik Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Für wen ist diese Leistung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Elektroinstallation bei verschiedenen Sanierungstypen – früh geplant, damit Elektro nicht nachträglich in
              fertige Räume gedrückt werden muss.
            </p>
          </div>
          <ImageCardGrid cards={audienceCards} />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, ob Bad, Küche, Wohnung oder Haus: Erfolgreiche Elektrokoordination beginnt mit einer klaren
        Leistungswahl. Im nächsten Abschnitt zeigen wir Ihnen, welche Elektro-Themen wir mit Fachpartnern abstimmen.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Elektro-Themen, die wir koordinieren</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Von der einzelnen Steckdose bis zur kompletten Elektroerneuerung im Bestand – die Ausführung erfolgt durch
              qualifizierte Elektrofachbetriebe, koordiniert von Radex.
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
        Gute Planung allein reicht nicht – entscheidend ist, wer Elektro fachlich koordiniert und mit allen Gewerken
        abstimmt. Deshalb setzen Eigentümer im Rhein-Main-Gebiet auf Radex.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex für Elektro wählen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Qualifizierte Fachpartner, frühe Schnittstellenplanung und enge Abstimmung mit Ihrer Sanierung – damit
              Elektro und Oberflächen sauber ineinandergreifen.
            </p>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <SectionTransition>
        Von der ersten Einschätzung bis zur Übergabe begleiten wir Ihr Elektroprojekt Schritt für Schritt – mit klarer
        Koordination der Fachpartner.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihre Elektrokoordination mit Radex ab"
        intro="Ein strukturierter Ablauf ist entscheidend für eine reibungslose Elektroerneuerung. Von der Erstberatung bis zur Übergabe haben Sie einen festen Ansprechpartner – die Ausführung liegt bei qualifizierten Elektrofachbetrieben."
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
            <h2 className="br-section-title">Kosten der Elektroinstallation</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten hängen stark vom Umfang ab – nach der Bestandsaufnahme erstellen wir ein nachvollziehbares
              Angebot ohne versteckte Kosten.
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
        authentische Einblicke in laufende und abgeschlossene Projekte mit Elektrokoordination.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Installationen. Wir zeigen Ihnen den Weg dorthin. Mit Radex Live erhalten Sie authentische Einblicke in Sanierungen mit Elektrokoordination aus dem Rhein-Main-Gebiet – von der Bestandsaufnahme bis zur Übergabe."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Sanierung als SHK-Meister & Betriebsleiter – Elektro fachlich koordiniert über qualifizierte Fachpartner, persönlich und transparent."
        projects={radexLiveProjects}
      />

      <SectionTransition>
        Offen beantwortet: Fachpartner, Planung, Bad, Sicherungskasten und Kosten – damit Sie den nächsten Schritt mit
        ruhigem Gefühl gehen können.
      </SectionTransition>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen zur Elektroinstallation" />

      <ContactForm
        kicker="Elektroinstallation anfragen"
        title="Jetzt unverbindlich beraten lassen"
        intro="Sie planen Elektroarbeiten bei einer Sanierung – Sicherungskasten, Altbau-Elektrik, Bad, Küche, Wärmepumpe oder Smart Home im Rhein-Main-Gebiet? Senden Sie uns Fotos bequem per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Gemeinsam prüfen wir, welche Lösung zu Ihrem Objekt passt."
        photoTip="Senden Sie uns Bilder Ihrer Unterverteilung oder Ihrer Elektrosituation bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Sicherungskasten, Altbau-Elektrik, Bad, Küche, Wallbox)..."
      />

      <SeoTocSection
        title="Alles, was Sie über Elektroinstallation wissen sollten"
        intro={elektroinstallationSeoIntro}
        sections={elektroinstallationSeoSections}
        showAllContent
      />
    </main>
  );
}
