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
  SeoTocSection,
  RadexLiveSection,
  ProcessSteps,
  SectionTransition,
  ImageCardGrid,
} from '../components/landing/SharedLandingParts';
import {
  haussanierungSeoIntro,
  haussanierungSeoSections,
} from '../data/haussanierungSeoContent';

const HERO_IMAGE = '/img/haus-hero.png';

const houseTypeCards = [
  {
    title: 'Einfamilienhaus modernisieren',
    desc: 'Von einzelnen Modernisierungsmaßnahmen bis zur kompletten Haussanierung begleiten wir Eigentümer bei der technischen und optischen Modernisierung ihres Einfamilienhauses.',
    image: '/img/haus-typ-einfamilienhaus.png',
    imageAlt: 'Modernes deutsches Einfamilienhaus mit renovierter Fassade',
  },
  {
    title: 'Reihenhaus sanieren',
    desc: 'Wir modernisieren Reihenhäuser effizient und koordinieren sämtliche Gewerke – von der Heizungsmodernisierung bis zur Badsanierung.',
    image: '/img/haus-typ-reihenhaus.png',
    imageAlt: 'Modernes deutsches Reihenhaus mit renovierter Fassade',
  },
  {
    title: 'Bestandshaus modernisieren',
    desc: 'Ältere Wohnhäuser werden technisch, energetisch und optisch auf den aktuellen Stand gebracht – individuell geplant und professionell umgesetzt.',
    image: '/img/haus-typ-bestand.png',
    imageAlt: 'Typisches deutsches Bestandshaus mit modernisierter Fassade',
  },
  {
    title: 'Haus nach dem Kauf sanieren',
    desc: 'Vor dem Einzug lassen sich Badezimmer, Heizung, Elektrik und Innenausbau besonders wirtschaftlich modernisieren.',
    image: '/img/haus-typ-kauf.png',
    imageAlt: 'Leerstehendes renoviertes Haus mit Umzugskartons',
  },
  {
    title: 'Komplette Haussanierung',
    desc: 'Von der Entkernung bis zur schlüsselfertigen Übergabe koordinieren wir sämtliche Gewerke als Generalunternehmer.',
    image: '/img/haus-typ-komplett.png',
    imageAlt: 'Haus während der Sanierung mit sichtbarem Baufortschritt',
  },
];

const serviceCards = [
  {
    title: 'Heizung & Sanitär',
    desc: 'Eine veraltete Heizung treibt die Nebenkosten und mindert den Wohnkomfort. Als SHK-Meisterbetrieb planen und installieren wir moderne Heizsysteme, Wärmepumpen und Sanitärinstallationen – und binden sie nahtlos in den Gesamtablauf Ihrer Haussanierung ein.',
    image: '/img/haus-service-heizung.png',
  },
  {
    title: 'Elektroinstallation',
    desc: 'Veraltete Leitungen und Sicherungskästen sind ein Sicherheitsrisiko. Wenn Wände ohnehin geöffnet werden, ist der ideale Zeitpunkt für eine normgerechte Erneuerung – damit Ihr Haus sicher, zukunftsfähig und auf moderne Anforderungen vorbereitet ist.',
    image: '/img/haus-service-elektro.png',
  },
  {
    title: 'Badsanierung',
    desc: 'Ein neues Bad steigert Wohnkomfort und Immobilienwert spürbar. Wir planen Ihr Badezimmer normgerecht, koordinieren alle Gewerke und führen Sanitärarbeiten als SHK-Meisterbetrieb selbst aus – abgestimmt auf den Gesamtablauf Ihrer Haussanierung.',
    image: '/img/haus-service-bad.png',
  },
  {
    title: 'Innenausbau & Trockenbau',
    desc: 'Neue Raumkonzepte, abgehängte Decken und Trennwände schaffen moderne Wohnräume. Durch Trockenbau und Innenausbau passen wir Ihr Haus an veränderte Wohnbedürfnisse an – ohne unnötige Wartezeiten zwischen den Gewerken.',
    image: '/img/haus-service-innenausbau.png',
  },
  {
    title: 'Energetische Sanierung',
    desc: 'Dämmung, neue Fenster und moderne Heiztechnik senken Ihre Energiekosten nachhaltig und verbessern den Energieausweis. Wir kombinieren energetische Maßnahmen sinnvoll mit der übrigen Haussanierung – für ein effizientes Gesamtkonzept.',
    image: '/img/haus-service-energie.png',
  },
  {
    title: 'Rückbau & Schadstoffe',
    desc: 'Fachgerechter Rückbau und Schadstofferkennung sind die Grundlage jeder seriösen Bestandssanierung. Wir identifizieren belastete Materialien, entfernen sie dokumentiert und bereiten Ihr Haus sicher für die weitere Modernisierung vor.',
    image: '/img/haus-service-rueckbau.png',
  },
];

const radexLiveProjects = [
  {
    image: '/img/haus-typ-komplett.png',
    badge: 'LIVE',
    title: 'Komplettsanierung Einfamilienhaus',
    location: 'Rodgau',
    desc: 'Entkernung, neue Haustechnik und Innenausbau – laufendes Projekt mit täglichen Updates.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/haus-service-heizung.png',
    badge: 'LIVE',
    title: 'Heizungsmodernisierung & Badsanierung',
    location: 'Seligenstadt',
    desc: 'Wärmepumpe, neue Sanitärinstallation und Badumbau – koordiniert aus einer Hand.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/haus-typ-bestand.png',
    badge: 'Abgeschlossen',
    title: 'Bestandshaus modernisiert',
    location: 'Dreieich',
    desc: 'Technik erneuert, Energieeffizienz verbessert – fertiggestellte Haussanierung im Bestand.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/haus-service-bad.png',
    badge: 'Vorher & Nachher',
    title: 'Badsanierung im Einfamilienhaus',
    location: 'Langen',
    desc: 'Aus einem veralteten Bad entstand ein modernes Wohlfühlbad mit Walk-in-Dusche.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/haus-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Haussanierung',
    location: 'Neu-Isenburg',
    desc: 'Authentischer Einblick in die tägliche Arbeit unserer Teams auf einer echten Baustelle.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/haus-service-energie.png',
    badge: 'Abgeschlossen',
    title: 'Energetische Haussanierung',
    location: 'Egelsbach',
    desc: 'Fassadendämmung, neue Fenster und Wärmepumpe – schlüsselfertig übergeben.',
    cta: 'Projekt ansehen',
  },
];

const costTeaserCards = [
  {
    title: 'Leichte Modernisierung',
    price: 'ab ca. 400 €/m²',
    desc: 'Gezielte Teilsanierung mit solider Ausstattung – ideal für einzelne Modernisierungsmaßnahmen.',
  },
  {
    title: 'Standard-Haussanierung',
    price: '800–1.200 €/m²',
    desc: 'Die häufigste Wahl unserer Kunden – ausgewogene Qualität, Komfort und Wertsteigerung.',
  },
  {
    title: 'Kernsanierung',
    price: '1.500–2.500 €/m²',
    desc: 'Umfassende Haussanierung vom Entkernen bis zur schlüsselfertigen Übergabe.',
  },
];

const processSteps = [
  {
    title: 'Kostenlose Erstberatung',
    desc: 'Wir besprechen Ihre Wünsche, den Ist-Zustand Ihres Hauses und den gewünschten Sanierungsumfang.',
  },
  {
    title: 'Besichtigung & Bestandsaufnahme',
    desc: 'Vor Ort prüfen wir Heizung, Elektro, Bad, Keller, Dachgeschoss und Bausubstanz – für eine realistische Planungsgrundlage.',
  },
  {
    title: 'Maßnahmenplan & Festpreisangebot',
    desc: 'Auf Basis der Begehung entwickeln wir ein individuelles Sanierungskonzept mit transparenter Kostenaufstellung.',
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
    desc: 'Gemeinsame Endabnahme, vollständige Dokumentation und besenreine Übergabe Ihres modernisierten Hauses.',
  },
];

const faqsData = [
  {
    q: 'Wann sollte ein Haus saniert werden?',
    a: 'Ein Haus sollte saniert werden, wenn technische Anlagen das Ende ihrer wirtschaftlichen Nutzungsdauer erreichen. Heizungen halten typischerweise 15 bis 25 Jahre, Elektroinstallationen sollten nach 30 bis 40 Jahren überprüft werden. Typische Anlässe sind ein Eigentümerwechsel, sichtbare Mängel oder der Wunsch, die Energieeffizienz zu verbessern.',
  },
  {
    q: 'Welche Gewerke sind bei einer Haussanierung wichtig?',
    a: 'Eine umfassende Haussanierung umfasst Heizung und Sanitär, Elektroinstallation, Badsanierung, Innenausbau und Trockenbau, Bodenbeläge und Fliesen, Malerarbeiten sowie bei Bedarf energetische Maßnahmen und Rückbau. Als Generalunternehmer koordiniert Radex alle Gewerke aus einer Hand.',
  },
  {
    q: 'Kann ein Haus in Etappen saniert werden?',
    a: 'Ja. Eine Haussanierung muss nicht zwingend als Komplettsanierung in einem Zug erfolgen. Viele Eigentümer priorisieren bestimmte Bereiche. Radex plant auch schrittweise Sanierungskonzepte, wobei die Reihenfolge der Gewerke sinnvoll aufeinander abgestimmt wird.',
  },
  {
    q: 'Wann sollten Heizung und Elektrik bei einer Haussanierung mitgeplant werden?',
    a: 'Heizung und Elektrik sollten immer dann mitgeplant werden, wenn ohnehin größere Öffnungs- oder Innenausbauarbeiten stattfinden. Das spart Zeit und Kosten, da Wände, die für Trockenbau oder Fliesen geöffnet werden, die günstigste Gelegenheit bieten, Leitungen zu erneuern oder neu zu verlegen.',
  },
  {
    q: 'Wie unterstützt Radex bei einer Haussanierung konkret?',
    a: 'Radex begleitet Haussanierungen im Rhein-Main-Gebiet von der Bestandsaufnahme bis zur Abnahme. Als Generalunternehmer übernimmt Radex die Gesamtkoordination: Planung, Terminierung, Steuerung der Gewerke und Kommunikation. Für Eigentümer bedeutet das: ein Ansprechpartner statt ein Dutzend Einzelhandwerker.',
  },
  {
    q: 'Kann ich vorab Fotos meines Hauses senden?',
    a: 'Ja. Über WhatsApp können Sie Fotos Ihres Hauses senden. Dadurch erhalten Sie eine erste fachliche Einschätzung und können anschließend einen persönlichen Beratungstermin vereinbaren.',
  },
];

export default function HouseRenovation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Haussanierung Rhein-Main | Modernisierung aus einer Hand | Radex',
    description:
      'Haussanierung im Rhein-Main-Gebiet: Heizung, Sanitär, Elektro, Bad, Innenausbau & energetische Modernisierung vom Generalunternehmer mit SHK-Meisterkompetenz. Jetzt anfragen!',
    path: '/sanierung/haussanierung',
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
              Haussanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Professionelle Haussanierung im Rhein-Main-Gebiet – individuell geplant, aus einer Hand umgesetzt.
            </p>
            <p className="br-hero-text">
              Einfamilienhäuser, Reihenhäuser und Bestandsimmobilien – koordiniert als Generalunternehmer. Radex
              begleitet Haussanierungen von Rödermark und Rodgau bis Dreieich, Langen und Frankfurt am Main. Bernd Knoop
              bringt als SHK-Meister & Betriebsleiter Fachkompetenz in Heizung, Sanitär und Gebäudetechnik direkt ein.
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
          aria-label="Modernes deutsches Einfamilienhaus mit renovierter Fassade und gepflegtem Garten"
          title="Haussanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Haussanierung planen Sie?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jedes Haus stellt andere Anforderungen. Ob Einfamilienhaus, Reihenhaus oder Bestandsimmobilie – jede
              Haussanierung wird individuell geplant und auf den Zustand des Gebäudes abgestimmt. Nachfolgend finden
              Sie die häufigsten Sanierungsprojekte, die wir im gesamten Rhein-Main-Gebiet begleiten.
            </p>
          </div>
          <ImageCardGrid cards={houseTypeCards} />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, welches Haus Sie modernisieren möchten – jede erfolgreiche Haussanierung beginnt mit einer
        sorgfältigen Planung. Im nächsten Abschnitt zeigen wir Ihnen, welche Arbeiten typischerweise zu einer
        professionellen Haussanierung gehören und wie wir sämtliche Gewerke für Sie koordinieren.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Gewerke & Leistungen der Haussanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine Haussanierung besteht aus vielen einzelnen Arbeitsschritten. Als Generalunternehmer koordinieren wir
              sämtliche Gewerke und sorgen dafür, dass alle Arbeiten optimal ineinandergreifen – von der ersten Planung
              bis zur schlüsselfertigen Übergabe.
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
        Eine sorgfältige Planung ist die Grundlage jeder erfolgreichen Haussanierung. Ebenso wichtig ist ein klar
        strukturierter Ablauf. Im nächsten Abschnitt zeigen wir Ihnen Schritt für Schritt, wie Ihr Projekt umgesetzt
        wird.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihre Haussanierung mit Radex ab"
        intro="Ein strukturierter Ablauf ist der wichtigste Faktor für eine reibungslose Haussanierung. Von der Erstberatung bis zur schlüsselfertigen Übergabe begleiten wir Sie mit einem festen Ansprechpartner."
        steps={processSteps}
        image="/img/haus-process.png"
      />

      <SectionTransition>
        Nachdem Sie den Ablauf kennengelernt haben, möchten viele Eigentümer wissen, mit welchen Investitionen sie
        ungefähr rechnen müssen. Nachfolgend erhalten Sie eine erste Orientierung.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet eine Haussanierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten einer Haussanierung hängen von Wohnfläche, Sanierungsstau und gewünschtem Ausstattungsniveau
              ab. Die folgenden Kategorien geben Ihnen typische Orientierungswerte – für eine individuelle Schätzung
              nutzen Sie unseren Haussanierung-Rechner weiter unten.
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
        <SanierungskostenRechner defaultType="haus" compact hausOnly />
        <div className="container br-calculator-disclaimer">
          <p>
            <strong>Hinweis:</strong> Die berechneten Kosten sind typische Orientierungswerte und dienen ausschließlich
            als erste Einschätzung für Ihre Haussanierung. Der tatsächliche Festpreis hängt von Wohnfläche,
            Sanierungsstau, Bausubstanz, Materialwahl und baulichen Besonderheiten ab. Nach einer Besichtigung erhalten
            Sie ein individuelles Festpreisangebot ohne versteckte Kosten.
          </p>
        </div>
      </section>

      <FaqAccordion faqs={faqsData} />

      <SectionTransition>
        Eine Haussanierung ist Vertrauenssache. Deshalb möchten wir Ihnen nicht nur fertige Ergebnisse zeigen, sondern
        echte Einblicke in unsere tägliche Arbeit geben. Mit Radex Live begleiten Sie unsere Projekte vom ersten
        Arbeitstag bis zur schlüsselfertigen Übergabe.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Häuser. Wir zeigen Ihnen den gesamten Weg dorthin. Verfolgen Sie laufende und abgeschlossene Haussanierungen aus dem Rhein-Main-Gebiet und gewinnen Sie einen authentischen Eindruck von unserer Arbeitsweise, unserer Qualität und unserer täglichen Arbeit auf der Baustelle."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Haussanierung von der technischen Planung bis zur fertigen Übergabe – persönlich, transparent und zum Festpreis."
        projects={radexLiveProjects}
      />

      <ContactForm
        kicker="Ihr Projekt beginnt hier"
        title="Jetzt Haussanierung anfragen"
        intro="Sie haben gesehen, wie wir arbeiten, welche Leistungen wir übernehmen und wie eine professionelle Haussanierung abläuft. Jetzt freuen wir uns darauf, auch Ihr Projekt kennenzulernen. Senden Sie uns Fotos Ihres Hauses per WhatsApp oder vereinbaren Sie eine persönliche Beratung."
        photoTip="Senden Sie uns Bilder Ihres Hauses bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Haussanierung, 150 m², Komplettsanierung)..."
      />

      <SeoTocSection
        title="Alles, was Sie über eine Haussanierung wissen sollten"
        intro={haussanierungSeoIntro}
        sections={haussanierungSeoSections}
        showAllContent
      />
    </main>
  );
}
