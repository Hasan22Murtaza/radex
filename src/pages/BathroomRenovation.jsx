import { useEffect } from 'react';
import {
  Camera,
  Award,
  ShieldCheck,
  Users,
  MapPin,
  UserCheck,
  Bath,
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
  SeoKnowledgeDrawer,
  RadexLiveSection,
  ProcessSteps,
  SectionTransition,
  ImageCardGrid,
} from '../components/landing/SharedLandingParts';
import {
  badezimmerSanierenSeoIntro,
  badezimmerSanierenSeoSections,
} from '../data/badezimmerSanierenSeoContent';

const HERO_IMAGE = '/img/badsanierung-hero.png';

const audienceCards = [
  {
    title: 'Komplettbadsanierung',
    desc: 'Das Bad wird vollständig entkernt und neu aufgebaut – von der Rohinstallation bis zur schlüsselfertigen Übergabe.',
    image: '/img/badsanierung-thema-komplett.png',
    imageAlt: 'Komplett saniertes modernes Badezimmer',
    to: '/badsanierung-rhein-main',
  },
  {
    title: 'Dusche statt Badewanne',
    desc: 'Umbau von Wanne zu Dusche aus Komfort-, Platz- oder Altersgründen – inkl. Entwässerung und Abdichtung.',
    image: '/img/badsanierung-thema-dusche.png',
    imageAlt: 'Walk-in-Dusche nach Umbau statt Badewanne',
    to: '/dusche-statt-badewanne',
  },
  {
    title: 'Barrierefreies Bad',
    desc: 'Bodengleiche Duschen, Haltegriffe und gut geplante Bewegungsflächen für sichere, langfristige Nutzung.',
    image: '/img/badsanierung-thema-barrierefrei.png',
    imageAlt: 'Barrierefreies Bad mit bodengleicher Dusche',
    to: '/barrierefreies-bad',
  },
  {
    title: 'Gäste-WC & kleines Bad',
    desc: 'Auf kleiner Fläche ein funktionales, helles Bad schaffen – typische Rhein-Main-Grundrisse inklusive.',
    image: '/img/badsanierung-thema-gaestewc.png',
    imageAlt: 'Modernisiertes Gäste-WC auf kleiner Fläche',
    to: '/gaeste-wc',
  },
];

const serviceCards = [
  {
    title: 'Badplanung',
    desc: 'Bedarf, Grundriss, Materialien und Budget vor dem ersten Handgriff – Grundlage für verlässliche Kosten.',
    image: '/img/badsanierung-thema-ablauf.png',
    imageAlt: 'Badplanung und Aufmaß vor der Sanierung',
    to: '/badplanung',
  },
  {
    title: 'Dusche statt Badewanne',
    desc: 'Walk-in oder barrierearm – Entwässerung, Gefälle und Abdichtung fachgerecht geplant und umgesetzt.',
    image: '/img/badsanierung-thema-dusche.png',
    imageAlt: 'Umbau zur modernen Dusche',
    to: '/dusche-statt-badewanne',
  },
  {
    title: 'Barrierefreies Bad',
    desc: 'Schwellenlose Einstiege, Bewegungsflächen und sichere Armaturen – zukunftssicher geplant.',
    image: '/img/badsanierung-thema-barrierefrei.png',
    imageAlt: 'Barrierefreies Wohlfühlbad',
    to: '/barrierefreies-bad',
  },
  {
    title: 'Gäste-WC modernisieren',
    desc: 'Kompakte Sanitärobjekte, helle Oberflächen und saubere Installation auf kleinem Grundriss.',
    image: '/img/badsanierung-thema-gaestewc.png',
    imageAlt: 'Frisch modernisiertes Gäste-WC',
    to: '/gaeste-wc',
  },
];

const whyRadexCards = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitär und Heizung unter Meisterverantwortung von Bernd Knoop.',
    icon: Award,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Sanitär, Elektro, Trockenbau und Fliesen koordiniert – ein Ansprechpartner.',
    icon: Users,
  },
  {
    title: 'Festpreis nach Begehung',
    desc: 'Transparente Angebote ohne versteckte Kosten oder unklare Nachforderungen.',
    icon: ShieldCheck,
  },
  {
    title: 'Fachgerechte Abdichtung',
    desc: 'Nassbereiche und Gefälle werden normgerecht geplant und ausgeführt.',
    icon: Bath,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Über 60 Städte – kurze Wege und Erfahrung mit Bestandsbädern.',
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
    desc: 'Wir besprechen Ihre Ziele – Komplettbad, Modernisierung oder gezielte Teilmaßnahme.',
  },
  {
    title: 'Besichtigung & Bestandsaufnahme',
    desc: 'Vor Ort prüfen wir Leitungen, Abdichtung, Entwässerung und den Zustand des Bads.',
  },
  {
    title: 'Planung & Materialauswahl',
    desc: 'Grundriss, Ausstattung und Materialien werden abgestimmt – Grundlage fürs Angebot.',
  },
  {
    title: 'Verbindliches Festpreisangebot',
    desc: 'Sie erhalten ein nachvollziehbares Angebot ohne versteckte Positionen.',
  },
  {
    title: 'Koordinierte Ausführung',
    desc: 'Rückbau, Rohinstallation, Abdichtung, Elektro, Fliesen und Montage – abgestimmt umgesetzt.',
  },
  {
    title: 'Schlüsselfertige Übergabe',
    desc: 'Fertiges Bad, geprüft und einsatzbereit – mit Dokumentation und Einweisung.',
  },
];

const costCards = [
  {
    title: 'Gäste-WC',
    price: 'ab €7.500',
    desc: 'Kompakte Modernisierung mit neuen Sanitärobjekten und Oberflächen – Ideal für kleinere Räume.',
    image: '/img/badsanierung-thema-gaestewc.png',
    to: '/badsanierung-kosten',
  },
  {
    title: 'Komfortbad',
    price: 'ab €17.500',
    desc: 'Die häufigste Wahl – ausgewogene Qualität, moderne Dusche und solide Ausstattung.',
    image: '/img/badsanierung-thema-komplett.png',
    to: '/badsanierung-kosten',
  },
  {
    title: 'Premium-Wellnessbad',
    price: 'ab €28.000',
    desc: 'Hochwertige Materialien, großformatige Fliesen und individuelle Gestaltung.',
    image: '/img/badsanierung-ref-2.png',
    to: '/badsanierung-kosten',
  },
];

const radexLiveProjects = [
  {
    image: '/img/badsanierung-ref-1.png',
    badge: 'LIVE',
    title: 'Komplettbadsanierung',
    location: 'Frankfurt am Main',
    desc: 'Entkernung, neue Sanitärinstallation und bodengleiche Dusche – laufende Baustelleneinblicke.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-thema-dusche.png',
    badge: 'LIVE',
    title: 'Dusche statt Badewanne',
    location: 'Darmstadt',
    desc: 'Wanne raus, Walk-in-Dusche rein – Abdichtung und Fliesen im Blick.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-thema-barrierefrei.png',
    badge: 'Vorher & Nachher',
    title: 'Barrierefreies Bad',
    location: 'Rodgau',
    desc: 'Aus einem veralteten Bad wurde ein schwellenarmes Wohlfühlbad.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/badsanierung-thema-gaestewc.png',
    badge: 'Abgeschlossen',
    title: 'Gäste-WC modernisiert',
    location: 'Dreieich',
    desc: 'Kompakt, hell und funktional – neue Sanitärobjekte auf kleiner Fläche.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Bad',
    location: 'Neu-Isenburg',
    desc: 'Authentische Einblicke von Rückbau und Rohinstallation bis zur Übergabe.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/badsanierung-ref-2.png',
    badge: 'Abgeschlossen',
    title: 'Premium-Badsanierung',
    location: 'Rödermark',
    desc: 'Walk-in-Dusche, großformatige Fliesen und hochwertige Ausstattung.',
    cta: 'Projekt ansehen',
  },
];

const faqsData = [
  {
    q: 'Was gehört zu einer Badsanierung?',
    a: 'Der Umfang hängt vom Ausgangszustand und Ihren Wünschen ab. Bei einer Komplettbadsanierung umfasst das typischerweise: Rückbau des Bestandsbades, Erneuerung oder Verlegung von Wasser- und Abwasserleitungen, Abdichtung aller Nass- und Spritzwasserbereiche, Trockenbau- und Vorwandinstallation, Elektroarbeiten (Licht, Steckdosen, Lüftung), Fliesenarbeiten sowie die abschließende Montage von Sanitärobjekten, Armaturen und Badmöbeln. Bei einer Badmodernisierung oder gezielten Badrenovierung kann der Umfang deutlich kleiner sein.',
  },
  {
    q: 'Wie läuft eine Badsanierung mit Radex ab?',
    a: 'Am Anfang steht ein kostenloser Beratungstermin bei Ihnen vor Ort. Wir schauen uns das Bad an, klären Ihre Wünsche und die technische Ausgangslage. Danach erstellen wir ein konkretes Angebot. Nach Auftragserteilung koordiniert Radex alle Gewerke – von Rückbau und Rohinstallation bis zu Fliesen, Elektro und Ausbau – in einer abgestimmten Reihenfolge. Sie haben während der gesamten Badsanierung einen festen Ansprechpartner bei Radex.',
  },
  {
    q: 'Ist Radex ein SHK-Meisterbetrieb?',
    a: 'Ja. Radex Objektmanagement GmbH ist ein eingetragener SHK-Meisterbetrieb. Betriebsleiter und eingetragener Meister ist Bernd Knoop – zugelassen für die Gewerke Sanitär, Heizung, Klimatechnik und Gebäudetechnik. Alle Sanitär- und Heizungsarbeiten führen wir als Meisterbetrieb selbst aus. Für weitere Gewerke – Elektro, Trockenbau, Fliesen, Innenausbau – koordinieren wir eingespielte Fachbetriebe, für deren Arbeit wir die Verantwortung tragen.',
  },
  {
    q: 'Was kostet eine Badsanierung im Rhein-Main-Gebiet?',
    a: 'Die Kosten hängen von mehreren Faktoren ab: Badgröße, Umfang der Arbeiten (Komplettbadsanierung oder Teilmaßnahme), Zustand der vorhandenen Leitungen und Abdichtung, gewählte Materialien und Ausstattung sowie Aufwand für Rückbau und ggf. Grundrissänderungen. Pauschale Preisangaben ohne Bestandsaufnahme sind wenig verlässlich – Radex erstellt nach einem Ortstermin ein verbindliches Angebot auf Basis Ihrer konkreten Situation.',
  },
  {
    q: 'Kann Radex auch nur einzelne Teile des Bades sanieren?',
    a: 'Ja. Nicht jede Badsanierung muss ein kompletter Neustart sein. Wenn der Grundzustand des Bades noch in Ordnung ist, können gezielte Teilmaßnahmen sinnvoller sein: eine neue bodengleiche Dusche anstelle der Badewanne, ein modernes Waschtischunterschrank, neue Armaturen oder eine zeitgemäße Beleuchtung. Radex berät Sie ehrlich, welche Maßnahmen in Ihrer Situation tatsächlich sinnvoll sind.',
  },
  {
    q: 'In welchen Städten bietet Radex Badsanierung an?',
    a: 'Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Regelmäßig sind wir unter anderem in Rödermark, Frankfurt am Main, Offenbach am Main, Darmstadt, Hanau, Dreieich, Rodgau, Neu-Isenburg, Dietzenbach und Heusenstamm tätig – sowie in vielen weiteren Städten im Landkreis Offenbach, im Main-Kinzig-Kreis, im Wetteraukreis und im Raum Aschaffenburg.',
  },
];

export default function BathroomRenovation() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useSeo({
    title: 'Badsanierung Rhein-Main | Komplettbad zum Festpreis | Radex',
    description:
      'Badsanierung im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Komplettbäder, Badmodernisierung & barrierefreie Bäder aus einer Hand. Jetzt Festpreis-Beratung sichern!',
    path: '/badsanierung/badezimmer-sanieren',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Badsanierung',
        description:
          'Badsanierung im Rhein-Main-Gebiet: Komplettbad, Badmodernisierung, Dusche statt Badewanne und barrierefreie Bäder vom SHK-Meisterbetrieb.',
        path: '/badsanierung/badezimmer-sanieren',
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
              SHK-Meisterbetrieb · Badsanierung · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Badsanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Bad sanieren mit Radex – Planung, Sanitär und Koordination aus einer Hand.
            </p>
            <p className="br-hero-text">
              Radex plant und koordiniert Ihre Badsanierung im gesamten Rhein-Main-Gebiet – von der ersten Beratung über
              die Badplanung bis zur schlüsselfertigen Übergabe. Sanitär und Heizungstechnik führen wir als Meisterbetrieb
              mit Bernd Knoop selbst aus, weitere Gewerke werden durch eingespielte Fachbetriebe realisiert, die wir
              koordinieren und verantworten.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>SHK-Meisterbetrieb</li>
              <li>Alles aus einer Hand</li>
              <li>Festpreis nach Begehung</li>
              <li>Rhein-Main-Gebiet</li>
            </ul>
            <SharedCTABlock isHero />
            <p className="br-hero-micro">
              <Camera size={14} /> Fotos vom Bad senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modernes Badezimmer nach einer Badsanierung im Rhein-Main-Gebiet durch Radex Objektmanagement"
          title="Badsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was möchten Sie sanieren?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Badsanierung ist kein einheitliches Projekt. Wählen Sie das Vorhaben, das zu Ihnen passt – oder starten Sie
              mit dem Überblick auf der{' '}
              <a href="/badsanierung-rhein-main">Badsanierung-Hubseite</a>.
            </p>
          </div>
          <ImageCardGrid cards={audienceCards} linked />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, ob Komplettbad, Dusche statt Wanne oder Gäste-WC: Erfolgreiche Badsanierung beginnt mit der richtigen
        Leistungswahl. Im nächsten Abschnitt finden Sie die wichtigsten Themen mit direkten Links.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Badsanierungs-Themen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Planung, Umbau und Speziallösungen – von der{' '}
              <a href="/badplanung">Badplanung</a> über{' '}
              <a href="/dusche-statt-badewanne">Dusche statt Badewanne</a> bis zum{' '}
              <a href="/barrierefreies-bad">barrierefreien Bad</a> und{' '}
              <a href="/gaeste-wc">Gäste-WC</a>.
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
        Gute Idee allein reicht nicht – entscheidend ist, wer plant, ausführt und alle Gewerke verantwortet. Deshalb setzen
        Eigentümer im Rhein-Main-Gebiet auf Radex als SHK-Meisterbetrieb.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex für die Badsanierung wählen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Meisterverantwortung, klare Festpreise und Koordination aller Gewerke – damit Technik und Oberflächen sauber
              ineinandergreifen.
            </p>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <SectionTransition>
        Von der ersten Einschätzung bis zur Übergabe begleiten wir Ihre Badsanierung Schritt für Schritt. So wissen Sie
        jederzeit, welche Phase als Nächstes folgt.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihre Badsanierung mit Radex ab"
        intro="Ein strukturierter Ablauf ist entscheidend für ein reibungsloses Badprojekt. Von der Erstberatung bis zur schlüsselfertigen Übergabe haben Sie einen festen Ansprechpartner."
        steps={processSteps}
        image="/img/badsanierung-process.png"
      />

      <SectionTransition>
        Nach dem Ablauf stellt sich oft die wichtigste Frage: Mit welchen Kosten müssen Sie rechnen? Die folgenden
        Richtwerte geben eine erste Orientierung – das konkrete Angebot folgt nach der Bestandsaufnahme.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Kosten einer Badsanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Preise sind Richtwerte und abhängig von Größe, Zustand und Ausstattung – nach Bestandsaufnahme erstellen wir
              ein konkretes Angebot. Mehr im{' '}
              <a href="/badsanierung-kosten">Badsanierung Kostenrechner</a>.
            </p>
          </div>
          <div className="br-costs-grid br-costs-grid--three">
            {costCards.map((card) => (
              <a key={card.title} href={card.to} className="br-cost-card">
                <div className="br-cost-category-img" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="br-cost-header">
                  <h3>{card.title}</h3>
                  <p className="br-cost-price">
                    <span>{card.price}</span>
                  </p>
                </div>
                <p className="br-cost-desc">{card.desc}</p>
                <span className="br-btn-orange br-cost-cta">Kostenrechner öffnen &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition>
        Richtwerte helfen bei der Orientierung – echte Baustellen zeigen, wie wir arbeiten. Deshalb geben wir Ihnen
        authentische Einblicke in laufende und abgeschlossene Badsanierungen.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Bäder. Wir zeigen Ihnen den Weg dorthin. Mit Radex Live erhalten Sie authentische Einblicke in Komplettbadsanierungen, Dusche-statt-Wanne-Umbauten und barrierefreie Bäder aus dem Rhein-Main-Gebiet – vom Rückbau bis zur Übergabe."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Badsanierung als SHK-Meister & Betriebsleiter – persönlich, transparent und fachlich verantwortlich."
        projects={radexLiveProjects}
      />

      <SectionTransition>
        Offen beantwortet: Umfang, Ablauf, Kosten und Einsatzgebiet – damit Sie den nächsten Schritt mit ruhigem Gefühl
        gehen können.
      </SectionTransition>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen zur Badsanierung" />

      <ContactForm
        kicker="Badsanierung anfragen"
        title="Jetzt unverbindlich beraten lassen"
        intro="Sie planen eine Badsanierung, Badmodernisierung oder ein barrierefreies Bad im Rhein-Main-Gebiet? Senden Sie uns Fotos Ihres Badezimmers bequem per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin."
        photoTip="Senden Sie uns Bilder Ihres Badezimmers bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Komplettbad, Dusche statt Wanne, barrierefrei, Gäste-WC)..."
      />

      <SeoKnowledgeDrawer
        title="Alles, was Sie über Badsanierung wissen sollten"
        intro={badezimmerSanierenSeoIntro}
        sections={badezimmerSanierenSeoSections}
        ctaLabel="Badsanierung anfragen"
        panelId="bad-seo-panel"
      />
    </main>
  );
}
