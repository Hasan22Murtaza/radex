import { useEffect } from 'react';
import { Camera } from 'lucide-react';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';
import ContactForm from '../components/ContactForm';
import {
  SharedCTABlock,
  FaqAccordion,
  SeoKnowledgeDrawer,
  RadexLiveSection,
  ProcessSteps,
  SectionTransition,
  ImageCardGrid,
} from '../components/landing/SharedLandingParts';
import {
  altbausanierungSeoIntro,
  altbausanierungSeoSections,
} from '../data/altbausanierungSeoContent';

const HERO_IMAGE = '/img/altbau-hero.png';

const solutionCards = [
  {
    title: 'Altbau nach dem Kauf sanieren',
    desc: 'Viele Altbauten werden direkt nach dem Kauf modernisiert. Solange das Gebäude leer steht, lassen sich Badezimmer, Leitungen, Elektrik und Innenausbau besonders effizient erneuern.',
    image: '/img/altbau-typ-kauf.png',
    imageAlt: 'Leerer deutscher Altbau mit Holzdielen, hohen Decken und klassischen Fenstern',
  },
  {
    title: 'Altbau modernisieren',
    desc: 'Technik modernisieren, Wohnkomfort steigern und gleichzeitig den Charakter der bestehenden Immobilie erhalten.',
    image: '/img/altbau-typ-modernisieren.png',
    imageAlt: 'Renovierter deutscher Altbau mit historischer Fassade',
  },
  {
    title: 'Leitungen & Technik erneuern',
    desc: 'Veraltete Wasserleitungen, Heizungsrohre und Elektroinstallationen werden fachgerecht erneuert und auf den aktuellen Stand gebracht.',
    image: '/img/altbau-typ-leitungen.png',
    imageAlt: 'Geöffnete Altbauwand mit neuen Installationen und historischem Mauerwerk',
  },
  {
    title: 'Altbau energetisch sanieren',
    desc: 'Mit moderner Heiztechnik, neuen Fenstern und energetischen Maßnahmen lässt sich ein Altbau nachhaltig modernisieren.',
    image: '/img/altbau-typ-energie.png',
    imageAlt: 'Historisches Haus mit neuen Fenstern, Wärmepumpe und renovierter Fassade',
  },
  {
    title: 'Kernsanierung Altbau',
    desc: 'Wenn viele Gewerke gleichzeitig erneuert werden müssen, koordinieren wir die komplette Altbausanierung als Generalunternehmer.',
    image: '/img/altbau-typ-kern.png',
    imageAlt: 'Entkernter deutscher Altbau mit historischer Decke und sichtbarem Baufortschritt',
  },
];

const serviceCards = [
  {
    title: 'Leitungen erneuern',
    desc: 'Alte Wasser-, Heizungs- und Entwässerungsleitungen sind in Altbauten häufig die unsichtbare Schwachstelle. Wir erneuern sie fachgerecht – gebündelt mit den übrigen Gewerken –, damit Sie zuverlässige Technik und ruhige Sicherheit hinter der historischen Fassade haben.',
    image: '/img/altbau-service-leitungen.png',
  },
  {
    title: 'Elektroinstallation',
    desc: 'Veraltete Verkabelung und Sicherungskästen sind ein Sicherheitsrisiko – und oft zu schwach für heutige Ansprüche. Wenn Wände ohnehin geöffnet sind, erneuern wir die Elektroinstallation normgerecht und zukunftsfähig, ohne den Charakter Ihres Altbaus zu zerstören.',
    image: '/img/altbau-service-elektro.png',
  },
  {
    title: 'Badezimmer',
    desc: 'Ein modernes Bad steigert Wohnkomfort und Wert spürbar – auch in knappen Altbau-Grundrissen. Wir planen Walk-in-Dusche, großformatige Fliesen und Sanitärtechnik so, dass Technik und Altbaucharakter zusammenpassen.',
    image: '/img/altbau-service-bad.png',
  },
  {
    title: 'Innenausbau',
    desc: 'Trockenbau, Oberflächen und Raumkonzepte werden so geführt, dass historische Decken und Hölzer dort erhalten bleiben, wo sie den Charakter prägen. So entsteht zeitgemäßes Wohnen – mit Respekt vor der vorhandenen Bausubstanz.',
    image: '/img/altbau-service-innenausbau.png',
  },
  {
    title: 'Energetische Sanierung',
    desc: 'Neue Fenster, abgestimmte Dämmung und moderne Heiztechnik senken Verbrauch und erhöhen den Komfort. Wir entwickeln energetische Maßnahmen, die zum Bestand passen – wirtschaftlich sinnvoll und technisch sauber eingebunden.',
    image: '/img/altbau-service-energie.png',
  },
  {
    title: 'Schadstoffsanierung',
    desc: 'Vor dem Rückbau klären wir mögliche Schadstoffe sachlich und dokumentiert. So schützen Sie Gesundheit, Rechtssicherheit und den weiteren Bauablauf – und schaffen eine saubere Grundlage für die Modernisierung Ihres Altbaus.',
    image: '/img/altbau-service-schadstoff.png',
  },
];

const radexLiveProjects = [
  {
    image: '/img/altbau-typ-kern.png',
    badge: 'LIVE',
    title: 'Kernsanierung Altbau',
    location: 'Frankfurt am Main',
    desc: 'Entkernung, neue Leitungen und Innenausbau – laufendes Projekt mit Einblicken in jede Bauphase.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-service-leitungen.png',
    badge: 'LIVE',
    title: 'Leitungen & Technik im Altbau',
    location: 'Offenbach am Main',
    desc: 'Wasser, Heizung und Elektro werden gebündelt erneuert – authentische Einblicke in den Bestand.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-typ-modernisieren.png',
    badge: 'Abgeschlossen',
    title: 'Altbau modernisiert',
    location: 'Darmstadt',
    desc: 'Charakter erhalten, Technik erneuert – fertiggestellte Altbausanierung mit historischer Fassade.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-service-bad.png',
    badge: 'Vorher & Nachher',
    title: 'Badezimmer im Altbau',
    location: 'Wiesbaden',
    desc: 'Aus einem veralteten Altbau-Bad entstand ein modernes Bad mit Walk-in-Dusche.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/altbau-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Altbausanierung',
    location: 'Bad Homburg',
    desc: 'Holzbalken, geöffnete Wände und neue Installationen – echte Arbeit im Bestand.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/altbau-service-energie.png',
    badge: 'Abgeschlossen',
    title: 'Energetische Altbausanierung',
    location: 'Mainz',
    desc: 'Neue Fenster, renovierte Fassade und Wärmepumpe – nachhaltig modernisiert.',
    cta: 'Projekt ansehen',
  },
];

const costTeaserCards = [
  {
    title: 'Leichte Modernisierung',
    price: 'ab ca. 300 €/m²',
    desc: 'Gezielte Maßnahmen mit Respekt vor der Substanz – ideal für ausgewählte Modernisierungsschritte.',
  },
  {
    title: 'Standard Altbausanierung',
    price: '800–1.500 €/m²',
    desc: 'Technik, Bad und Innenausbau in einem abgestimmten Konzept – die häufigste Variante unserer Kunden.',
  },
  {
    title: 'Umfassende Kernsanierung',
    price: '1.500–3.000 €/m²',
    desc: 'Viele Gewerke gleichzeitig – vom Entkernen bis zur schlüsselfertigen Übergabe als Generalunternehmer.',
  },
];

const processSteps = [
  {
    title: 'Kostenlose Erstberatung',
    desc: 'Wir besprechen Ihre Ziele, den Charakter Ihres Altbaus und den gewünschten Sanierungsumfang.',
  },
  {
    title: 'Besichtigung & Bestandsaufnahme',
    desc: 'Vor Ort prüfen wir Leitungen, Elektrik, Heizung, Bad, Feuchtigkeit und mögliche Schadstoffe – die Grundlage jeder Altbausanierung.',
  },
  {
    title: 'Maßnahmenplan & Festpreisangebot',
    desc: 'Auf Basis der Begehung entscheiden wir gemeinsam, was erhalten und was erneuert wird – mit transparenter Kostenaufstellung.',
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Radex steuert Sanitär, Elektro, Trockenbau, Fliesen und alle weiteren Fachbetriebe in der richtigen Reihenfolge.',
  },
  {
    title: 'Ausführung & Baubegleitung',
    desc: 'Während der gesamten Bauphase haben Sie einen festen Ansprechpartner und erhalten regelmäßige Fortschritts-Updates.',
  },
  {
    title: 'Abnahme & schlüsselfertige Übergabe',
    desc: 'Gemeinsame Endabnahme, vollständige Dokumentation und besenreine Übergabe Ihres modernisierten Altbaus.',
  },
];

const faqsData = [
  {
    q: 'Was ist bei einer Altbausanierung besonders wichtig?',
    a: 'Entscheidend ist die Bestandsaufnahme vor dem Bau. Leitungen, Elektrik und Heizung entsprechen oft nicht mehr heutigen Standards und müssen behutsam erneuert werden – ohne den Charakter des Gebäudes zu beschädigen. Bei bestimmten Baujahren ist eine Prüfung auf Schadstoffe sinnvoll. Ein erfahrener Generalunternehmer bündelt Eingriffe, damit Wände und Böden nicht mehrfach geöffnet werden.',
  },
  {
    q: 'Wie lassen sich Altbaucharakter und moderne Technik verbinden?',
    a: 'Viele Altbauten verfügen über Stuck, Holzdielen, Kassettentüren oder historische Fensterproportionen. Moderne Technik lässt sich verdeckt integrieren: Leitungen in Schächten oder Schlitzen, Verteiler in Nischen, Elektro hinter Unterkonstruktionen. Das Ergebnis ist zeitgemäßer Komfort bei unverändert persönlichem Charakter.',
  },
  {
    q: 'Wann sollte auf Schadstoffe geprüft werden?',
    a: 'Besonders bei Gebäuden aus den 1950er–1990er Jahren ist eine orientierende Prüfung sinnvoll – etwa bei Asbest in Bodenklebern, Dachplatten oder Rohrisolierungen, bei Blei in sehr alten Leitungen oder PCB in Fugenmassen. Vor Rückbau empfiehlt sich eine sachliche Ersteinschätzung. Radex koordiniert solche Maßnahmen dokumentiert und fachgerecht.',
  },
  {
    q: 'Welche Leitungen sollten im Altbau geprüft werden?',
    a: 'Zu prüfen sind Trinkwasser (Blei, alte Stahlrohre), Entwässerung (häufig Guss mit Ablagerungen), Heizungsverteilung und die elektrische Installation. Viele Altbauten haben noch Leitungen aus den 1960er oder 1970er Jahren, die für heutige Lasten nicht ausgelegt sind. Ein strukturierter Blick vor Baubeginn vermeidet spätere Überraschungen.',
  },
  {
    q: 'Wie wird ein Altbau respektvoll modernisiert?',
    a: 'Respektvoll modernisieren heißt: Eingriffe auf das technisch Notwendige beschränken und die Eigenart des Bestands bewahren. Dabei helfen Bestandsaufnahme, abgestimmter Gewerkeplan und Materialien, die zum Stil passen. Ziel ist ein Ergebnis, das sich nach dem Einzug selbstverständlich anfühlt – nicht wie ein Neubau in alten Mauern.',
  },
  {
    q: 'Kann ich vorab Fotos meines Altbaus senden?',
    a: 'Ja. Über WhatsApp können Sie Fotos Ihrer Immobilie senden. Dadurch erhalten Sie eine erste fachliche Einschätzung und können anschließend einen persönlichen Vor-Ort-Termin vereinbaren.',
  },
];

export default function HistoricBuildingRenovation() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useSeo({
    title: 'Altbausanierung Rhein-Main | Wir verstehen alte Gebäude | Radex',
    description:
      'Altbausanierung im Rhein-Main-Gebiet: Bestand erhalten, Technik modernisieren – Leitungen, Elektro, Bad & energetische Sanierung vom Generalunternehmer mit SHK-Meisterkompetenz. Jetzt anfragen!',
    path: '/sanierung/altbausanierung',
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
              Altbausanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Professionelle Altbausanierung im Rhein-Main-Gebiet – wir verstehen alte Gebäude.
            </p>
            <p className="br-hero-text">
              Bestand erhalten und modernisieren, mit Respekt vor der vorhandenen Bausubstanz. Radex koordiniert als
              Generalunternehmer alle Gewerke; Bernd Knoop bringt als SHK-Meister & Betriebsleiter Fachkompetenz in
              Heizung, Sanitär und Gebäudetechnik direkt ein.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>Wir verstehen Altbauten</li>
              <li>Bestandsaufnahme zuerst</li>
              <li>SHK-Meisterkompetenz</li>
              <li>Festpreis nach Begehung</li>
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
          aria-label="Schöner deutscher Altbau mit historischer Fassade und klassischem Eingang"
          title="Altbausanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">
              So modernisieren wir Ihren Altbau – fachgerecht und mit Respekt vor der vorhandenen Bausubstanz.
            </h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jeder Altbau erzählt seine eigene Geschichte. Ob einzelne Modernisierungsmaßnahmen oder eine komplette
              Kernsanierung – jede Altbausanierung erfordert Erfahrung, eine sorgfältige Bestandsaufnahme und eine
              durchdachte Planung. Nachfolgend finden Sie die häufigsten Sanierungsprojekte, die wir im gesamten
              Rhein-Main-Gebiet begleiten.
            </p>
          </div>
          <ImageCardGrid cards={solutionCards} />
        </div>
      </section>

      <SectionTransition>
        Jeder Altbau besitzt seine eigenen Besonderheiten. Deshalb beginnt jede erfolgreiche Altbausanierung mit einer
        sorgfältigen Bestandsaufnahme. Erst danach lässt sich entscheiden, welche Maßnahmen technisch sinnvoll und
        wirtschaftlich sind.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Gewerke & Leistungen der Altbausanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine Altbausanierung umfasst weit mehr als neue Oberflächen. Häufig werden technische Anlagen erneuert,
              historische Bausubstanz erhalten und verschiedene Gewerke perfekt aufeinander abgestimmt. Genau dabei
              begleiten wir Sie als Generalunternehmer.
            </p>
          </div>
          <div className="br-projects-grid">
            {serviceCards.map((service) => (
              <div key={service.title} className="br-service-card">
                <div
                  className="br-project-img"
                  style={{ backgroundImage: `url(${service.image})` }}
                  role="img"
                  aria-label={service.title}
                />
                <div className="br-project-info">
                  <h4>{service.title}</h4>
                  <p className="br-project-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition>
        Eine professionelle Altbausanierung lebt von einer guten Planung. Im nächsten Abschnitt zeigen wir Ihnen Schritt
        für Schritt, wie Ihr Projekt von der ersten Besichtigung bis zur fertigen Übergabe umgesetzt wird.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihre Altbausanierung mit Radex ab"
        intro="Ein strukturierter Ablauf schützt die Bausubstanz und Ihren Terminplan. Von der Bestandsaufnahme bis zur schlüsselfertigen Übergabe begleiten wir Sie mit einem festen Ansprechpartner."
        steps={processSteps}
        image="/img/altbau-process.png"
      />

      <SectionTransition>
        Viele Eigentümer möchten bereits in der Planungsphase wissen, mit welchen Investitionen sie ungefähr rechnen
        müssen. Nachfolgend erhalten Sie eine erste Orientierung für Ihre Altbausanierung.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet eine Altbausanierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Aufgrund der individuellen Substanz lassen sich Altbauten schwer pauschalisieren. Die folgenden Kategorien
              geben Ihnen typische Orientierungswerte – für eine individuelle Schätzung nutzen Sie unseren
              Altbausanierung-Rechner weiter unten.
            </p>
          </div>
          <p className="br-cost-kicker text-center">Typische Orientierungswerte pro m²</p>
          <div className="br-costs-grid br-costs-grid--three">
            {costTeaserCards.map((card) => (
              <div key={card.title} className="br-cost-card" style={{ cursor: 'default' }}>
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

      <section className="br-section br-bg-light">
        <SanierungskostenRechner defaultType="altbau" compact altbauOnly />
        <div className="container br-calculator-disclaimer">
          <p>
            <strong>Hinweis:</strong> Die berechneten Kosten sind typische Orientierungswerte und dienen ausschließlich
            als erste Einschätzung für Ihre Altbausanierung. Der tatsächliche Festpreis hängt von Baujahr, Bausubstanz,
            Sanierungsstau, Schadstoffsituation, Materialwahl und baulichen Besonderheiten ab. Nach einer sorgfältigen
            Bestandsaufnahme erhalten Sie ein individuelles Festpreisangebot ohne versteckte Kosten.
          </p>
        </div>
      </section>

      <FaqAccordion faqs={faqsData} />

      <SectionTransition>
        Eine Altbausanierung erfordert Erfahrung. Deshalb möchten wir Ihnen nicht nur fertige Ergebnisse zeigen, sondern
        echte Einblicke in unsere tägliche Arbeit geben. Mit Radex Live begleiten Sie unsere Projekte vom ersten Rückbau
        bis zur fertigen Modernisierung.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Jeder Altbau hält Überraschungen bereit. Deshalb zeigen wir Ihnen nicht nur fertige Ergebnisse, sondern auch die einzelnen Bauphasen. Begleiten Sie unsere Teams bei laufenden Altbausanierungen im gesamten Rhein-Main-Gebiet und gewinnen Sie einen authentischen Eindruck von unserer Arbeitsweise."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Altbausanierung von der technischen Bestandsaufnahme bis zur fertigen Übergabe – persönlich, transparent und zum Festpreis."
        projects={radexLiveProjects}
      />

      <ContactForm
        kicker="Ihr Altbau verdient Erfahrung"
        title="Jetzt Altbausanierung anfragen"
        intro="Jeder Altbau ist einzigartig. Deshalb beginnt jede erfolgreiche Sanierung mit einer persönlichen Beratung. Senden Sie uns Fotos Ihrer Immobilie per WhatsApp oder vereinbaren Sie einen Vor-Ort-Termin. Gemeinsam entwickeln wir die passende Lösung für Ihren Altbau."
        photoTip="Senden Sie uns Bilder Ihres Altbaus bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Altbausanierung, 110 m², Leitungen & Bad)..."
      />

      <SeoKnowledgeDrawer
        title="Alles, was Sie über eine Altbausanierung wissen sollten"
        intro={altbausanierungSeoIntro}
        sections={altbausanierungSeoSections}
        ctaLabel="Altbausanierung anfragen"
        panelId="altbau-seo-panel"
      />
    </main>
  );
}
