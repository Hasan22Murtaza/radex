import { useEffect } from 'react';
import { Camera, Award, Users, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
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
  TrustUspCards,
  ProcessSteps,
  SectionTransition,
  ImageCardGrid,
  QualityPromiseBlock,
} from '../components/landing/SharedLandingParts';
import {
  wohnungssanierungSeoIntro,
  wohnungssanierungSeoSections,
} from '../data/wohnungssanierungSeoContent';

const HERO_IMAGE = '/img/wohnung-hero.png';

const trustCards = [
  {
    title: 'SHK-meistergeführter Fachbetrieb',
    image: '/img/badsanierung-usp-shk.png',
    icon: Award,
    imageAlt: 'Moderne Haustechnik bei einer Wohnungssanierung',
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
    imageAlt: 'Transparente Festpreisangebote für Wohnungssanierungen',
  },
  {
    title: 'Über 500 abgeschlossene Projekte',
    image: '/img/badsanierung-usp-projekte.png',
    icon: CheckCircle2,
    imageAlt: 'Abgeschlossene Wohnungssanierung nach Radex Umsetzung',
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

const apartmentTypeCards = [
  {
    title: 'Eigentumswohnung',
    desc: 'Wir modernisieren Eigentumswohnungen vom einzelnen Badezimmer bis zur kompletten Wohnungssanierung – individuell geplant und professionell umgesetzt.',
    image: '/img/wohnung-typ-eigentum.png',
    imageAlt: 'Moderne leere Eigentumswohnung mit Holzboden und offener Küche',
  },
  {
    title: 'Mietwohnung',
    desc: 'Vor einer Neuvermietung oder zur langfristigen Werterhaltung modernisieren wir Mietwohnungen wirtschaftlich, hochwertig und terminsicher.',
    image: '/img/wohnung-typ-mietwohnung.png',
    imageAlt: 'Frisch renovierte Mietwohnung, bereit für neue Mieter',
  },
  {
    title: 'Altbauwohnung',
    desc: 'Historische Bausubstanz erhalten und modernen Wohnkomfort schaffen – mit einer professionellen Altbausanierung und zeitgemäßer Gebäudetechnik.',
    image: '/img/wohnung-typ-altbau.png',
    imageAlt: 'Deutsche Altbauwohnung mit historischen Fenstern und modernem Interieur',
  },
  {
    title: 'Wohnung mit neuem Grundriss',
    desc: 'Durch Innenausbau und Trockenbau schaffen wir moderne Raumkonzepte, die sich optimal an Ihre Wohnbedürfnisse anpassen.',
    image: '/img/wohnung-typ-grundriss.png',
    imageAlt: 'Wohnung im Umbau mit Trockenbau und Grundrissplanung',
  },
  {
    title: 'Komplette Wohnungssanierung',
    desc: 'Von der Entkernung bis zur schlüsselfertigen Übergabe koordinieren wir sämtliche Gewerke als Generalunternehmer.',
    image: '/img/wohnung-typ-komplett.png',
    imageAlt: 'Wohnung während einer Komplettsanierung mit sichtbarer Haustechnik',
  },
];

const serviceCards = [
  {
    title: 'Badsanierung',
    desc: 'Das Bad ist oft das aufwendigste Einzelgewerk – und gleichzeitig der Bereich mit der größten Wirkung auf Wohnkomfort und Wert. Wir planen Ihr neues Bad normgerecht, barrierefrei auf Wunsch und führen alle Sanitärarbeiten als SHK-Meisterbetrieb selbst aus – vom Kompaktbad bis zur hochwertigen Komplettbadsanierung.',
    image: '/img/wohnung-service-bad.png',
  },
  {
    title: 'Elektroinstallation',
    desc: 'Veraltete Sicherungskästen, zu wenige Steckdosen oder fehlende Absicherungen sind in älteren Wohnungen häufig. Wenn Wände und Böden ohnehin geöffnet sind, ist der ideale Zeitpunkt für eine normgerechte Erneuerung – damit Ihre Wohnung sicher und zukunftsfähig wird.',
    image: '/img/wohnung-service-elektro.png',
  },
  {
    title: 'Böden • Wände • Decken',
    desc: 'Neue Böden, frischer Putz und ein zeitgemäßer Anstrich verändern das Wohngefühl sofort. Wir stimmen Parkett, Vinyl, Fliesen und Oberflächenarbeiten aufeinander ab – ohne unnötige Wartezeiten zwischen den Gewerken.',
    image: '/img/wohnung-service-boeden.png',
  },
  {
    title: 'Innenausbau',
    desc: 'Abgetrennte Küche, neuer Schnitt oder zwei Zimmer zu einem – Grundrissänderungen lassen sich ideal mit der übrigen Sanierung verbinden. Durch Trockenbau und Innenausbau schaffen wir Räume, die zu Ihrem Alltag passen.',
    image: '/img/wohnung-service-innenausbau.png',
  },
  {
    title: 'Heizung & Haustechnik',
    desc: 'Moderne Thermostate, neue Heizkörper und fachgerecht verlegte Leitungen senken den Energieverbrauch und erhöhen den Wohnkomfort. Als SHK-Meisterbetrieb übernehmen wir Heizungs- und Sanitärarbeiten mit der nötigen Fachkompetenz.',
    image: '/img/wohnung-service-heizung.png',
  },
];

const radexLiveProjects = [
  {
    image: '/img/wohnung-typ-komplett.png',
    badge: 'LIVE',
    title: 'Komplettsanierung Eigentumswohnung',
    location: 'Frankfurt am Main',
    desc: 'Entkernung, neue Haustechnik und Innenausbau – laufendes Projekt mit täglichen Updates.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-typ-mietwohnung.png',
    badge: 'LIVE',
    title: 'Wohnungssanierung vor Neuvermietung',
    location: 'Offenbach am Main',
    desc: 'Modernisierung von Bad, Böden und Elektro – terminsicher vor dem Mieterwechsel.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-typ-altbau.png',
    badge: 'Abgeschlossen',
    title: 'Altbauwohnung modernisiert',
    location: 'Darmstadt',
    desc: 'Charakter erhalten, Technik erneuert – fertiggestellte Wohnungssanierung im Bestand.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-service-bad.png',
    badge: 'Vorher & Nachher',
    title: 'Badsanierung in der Wohnung',
    location: 'Rodgau',
    desc: 'Aus einem veralteten Bad entstand ein modernes Wohlfühlbad mit Walk-in-Dusche.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/wohnung-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Wohnungssanierung',
    location: 'Neu-Isenburg',
    desc: 'Authentischer Einblick in die tägliche Arbeit unserer Teams auf einer echten Baustelle.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/wohnung-typ-eigentum.png',
    badge: 'Abgeschlossen',
    title: 'Innenausbau & Grundrissänderung',
    location: 'Dreieich',
    desc: 'Neuer Grundriss, Trockenbau und komplette Oberflächenerneuerung – schlüsselfertig übergeben.',
    cta: 'Projekt ansehen',
  },
];

const costTeaserCards = [
  {
    title: 'Basis',
    price: 'ab ca. 300 €/m²',
    desc: 'Funktionale Modernisierung mit solider Ausstattung – ideal für gezielte Teilsanierungen.',
  },
  {
    title: 'Komfort',
    price: '600–1.000 €/m²',
    desc: 'Die häufigste Wahl unserer Kunden – ausgewogene Qualität, Komfort und Wertsteigerung.',
  },
  {
    title: 'Premium',
    price: '1.000–1.800 €/m²',
    desc: 'Hochwertige Ausstattung und umfassende Modernisierung – vom Entkernen bis zur schlüsselfertigen Übergabe.',
  },
];

const processSteps = [
  { title: 'Kostenlose Erstberatung', desc: 'Wir besprechen Ihre Wünsche, den Ist-Zustand und den gewünschten Umfang der Wohnungssanierung.' },
  { title: 'Besichtigung & Bestandsaufnahme', desc: 'Vor Ort prüfen wir Bad, Elektro, Böden, Wände und Technik – und klären Rahmenbedingungen mit der Hausverwaltung.' },
  { title: 'Maßnahmenplan & Festpreisangebot', desc: 'Auf Basis der Begehung entwickeln wir ein individuelles Sanierungskonzept mit transparenter Kostenaufstellung.' },
  { title: 'Koordination aller Gewerke', desc: 'Radex steuert Sanitär, Elektro, Trockenbau, Fliesen und alle weiteren Fachbetriebe in der richtigen Reihenfolge.' },
  { title: 'Ausführung & Baubegleitung', desc: 'Während der gesamten Bauphase haben Sie einen festen Ansprechpartner und erhalten regelmäßige Fortschritts-Updates.' },
  { title: 'Abnahme & schlüsselfertige Übergabe', desc: 'Gemeinsame Endabnahme, vollständige Dokumentation und besenreine Übergabe Ihrer modernisierten Wohnung.' },
];

const faqsData = [
  {
    q: 'Was kostet eine Wohnungssanierung?',
    a: 'Die Kosten richten sich nach Wohnfläche, Zustand der Wohnung, Materialwahl und Umfang der geplanten Arbeiten. Nach einer Besichtigung lässt sich ein realistischer Kostenrahmen erstellen.',
  },
  {
    q: 'Wie lange dauert eine Wohnungssanierung?',
    a: 'Die Bauzeit hängt von der Größe der Wohnung und dem Umfang der Modernisierung ab. Eine sorgfältige Planung sorgt für einen strukturierten und möglichst terminsicheren Ablauf.',
  },
  {
    q: 'Kann ich während der Wohnungssanierung in der Wohnung wohnen?',
    a: 'Das hängt vom Umfang der Arbeiten ab. Kleinere Modernisierungen lassen sich häufig abschnittsweise durchführen. Bei einer kompletten Wohnungssanierung ist ein vorübergehender Auszug in vielen Fällen sinnvoll.',
  },
  {
    q: 'Übernimmt Radex alle Gewerke?',
    a: 'Ja. Als Generalunternehmer koordiniert Radex sämtliche Gewerke – von der Planung über Sanitär-, Elektro- und Innenausbauarbeiten bis zur schlüsselfertigen Übergabe.',
  },
  {
    q: 'Erhalte ich einen festen Ansprechpartner?',
    a: 'Während der gesamten Wohnungssanierung steht Ihnen ein persönlicher Ansprechpartner zur Verfügung, der den Projektablauf koordiniert und alle Fragen beantwortet.',
  },
  {
    q: 'Kann ich vorab Fotos meiner Wohnung senden?',
    a: 'Ja. Über WhatsApp können Sie Fotos Ihrer Wohnung senden. Dadurch erhalten Sie eine erste fachliche Einschätzung und können anschließend einen persönlichen Beratungstermin vereinbaren.',
  },
];

export default function ApartmentRenovation() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useSeo({
    title: 'Wohnungssanierung Rhein-Main | Festpreis & aus einer Hand | Radex',
    description:
      'Wohnungssanierung im Rhein-Main-Gebiet: Eigentumswohnung, Mietwohnung & Altbauwohnung modernisieren – Bad, Elektro, Böden & Innenausbau vom Generalunternehmer. Jetzt anfragen!',
    path: '/sanierung/wohnungssanierung',
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
              Wohnungssanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Professionelle Wohnungssanierung – individuell geplant, aus einer Hand umgesetzt.
            </p>
            <p className="br-hero-text">
              Eigentumswohnungen, Mietwohnungen und Altbauwohnungen – koordiniert aus einer Hand. Radex arbeitet seit
              Jahrzehnten als Generalunternehmer unter den besonderen Bedingungen des Mehrfamilienhausumbaus im
              Rhein-Main-Gebiet: begrenzte Fläche, unmittelbare Nachbarschaft und Vorgaben der Hausverwaltung.
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
          aria-label="Moderne deutsche Wohnung mit hellem Wohnzimmer, offener Küche und Holzboden"
          title="Wohnungssanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-trust-usp-section">
        <div className="container">
          <TrustUspCards cards={trustCards} />
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Wohnung möchten Sie modernisieren?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jede Wohnung stellt unterschiedliche Anforderungen. Ob Eigentumswohnung, Mietwohnung oder Altbau – jede
              Wohnungssanierung wird individuell geplant. Nachfolgend finden Sie die häufigsten Wohnungsarten und
              Modernisierungsprojekte, die wir im gesamten Rhein-Main-Gebiet begleiten.
            </p>
          </div>
          <ImageCardGrid cards={apartmentTypeCards} />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, welche Wohnung Sie modernisieren möchten – jede erfolgreiche Wohnungssanierung beginnt mit einer
        durchdachten Planung. Im nächsten Abschnitt zeigen wir Ihnen, welche Leistungen typischerweise zu einer
        professionellen Wohnungssanierung gehören.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was eine Wohnungssanierung aus einer Hand umfasst</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jede Wohnung ist einzigartig. Deshalb entwickeln wir für jedes Projekt ein individuelles Sanierungskonzept.
              Als Generalunternehmer koordinieren wir sämtliche Gewerke und sorgen dafür, dass alle Arbeiten optimal
              aufeinander abgestimmt sind – von der Planung bis zur schlüsselfertigen Übergabe.
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
        Eine professionelle Planung bildet die Grundlage jeder erfolgreichen Wohnungssanierung. Entscheidend ist jedoch
        die fachgerechte Umsetzung auf der Baustelle. Deshalb geben wir Ihnen im nächsten Abschnitt echte Einblicke in
        unsere tägliche Arbeit.
      </SectionTransition>

      {/* Radex Qualitätsversprechen */}
      <QualityPromiseBlock intro="Bei einer Wohnungssanierung sorgen zentrale Koordination, transparente Kommunikation und kontrollierte Bauphasen für Planungssicherheit." />

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Wohnungen. Wir zeigen Ihnen den gesamten Weg dorthin. Mit Radex Live erhalten Sie authentische Einblicke in laufende und abgeschlossene Wohnungssanierungen aus dem Rhein-Main-Gebiet – von der ersten Entkernung bis zur fertigen Übergabe. So können Sie unsere Arbeitsweise, unsere Qualität und unsere Sorgfalt direkt auf echten Baustellen erleben."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Wohnungssanierung von der technischen Planung bis zur fertigen Übergabe – persönlich, transparent und zum Festpreis."
        projects={radexLiveProjects}
      />

      <SectionTransition>
        Jede Wohnung ist einzigartig. Dennoch folgt jede professionelle Wohnungssanierung einem klar strukturierten
        Ablauf. So wissen Sie während der gesamten Bauphase jederzeit, welcher Schritt als Nächstes erfolgt.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihre Wohnungssanierung mit Radex ab"
        intro="Ein strukturierter Ablauf ist der wichtigste Faktor für eine reibungslose Wohnungssanierung. Von der Erstberatung bis zur schlüsselfertigen Übergabe begleiten wir Sie mit einem festen Ansprechpartner."
        steps={processSteps}
        image="/img/wohnung-process.png"
      />

      <SectionTransition>
        Nachdem Sie den Ablauf kennengelernt haben, stellt sich meist die wichtigste Frage: Mit welchen Kosten müssen
        Sie bei einer Wohnungssanierung rechnen? Nachfolgend erhalten Sie eine erste Orientierung.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Wie viel kostet eine Wohnungssanierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten einer Wohnungssanierung hängen von Wohnfläche, Ist-Zustand und gewünschtem Ausstattungsniveau
              ab. Die folgenden Kategorien geben Ihnen typische Einstiegspreise als erste Orientierung – für eine
              individuelle Schätzung nutzen Sie unseren Kostenrechner weiter unten.
            </p>
          </div>
          <p className="br-cost-kicker text-center">Typische Einstiegspreise pro m²</p>
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
        <SanierungskostenRechner defaultType="wohnung" compact wohnungOnly />
        <div className="container br-calculator-disclaimer">
          <p>
            <strong>Hinweis:</strong> Die berechneten Kosten sind typische Einstiegspreise und dienen ausschließlich als
            erste Orientierung für Ihre Wohnungssanierung. Der tatsächliche Festpreis hängt von Wohnfläche, Bausubstanz,
            Sanierungsumfang, Materialwahl und baulichen Besonderheiten ab – etwa Hausordnung, Ruhezeiten oder
            Eingriffe ins Gemeinschaftseigentum. Nach einer Besichtigung erhalten Sie ein individuelles Festpreisangebot
            ohne versteckte Kosten.
          </p>
        </div>
      </section>

      <FaqAccordion faqs={faqsData} />

      <ContactForm
        intro="Sie planen eine Wohnungssanierung im Rhein-Main-Gebiet? Ob einzelne Modernisierungsmaßnahmen oder eine komplette Wohnungssanierung – wir beraten Sie persönlich und entwickeln gemeinsam die passende Lösung für Ihre Immobilie. Senden Sie uns einfach Fotos Ihrer Wohnung per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin."
        photoTip="Senden Sie uns Bilder Ihrer Wohnung bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Wohnungssanierung, 80 m², Komplettmodernisierung)..."
      />

      <SeoTocSection
        title="Alles, was Sie über eine Wohnungssanierung wissen sollten"
        intro={wohnungssanierungSeoIntro}
        sections={wohnungssanierungSeoSections}
      />
    </main>
  );
}
