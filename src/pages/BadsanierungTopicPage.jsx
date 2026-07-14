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
  SeoTocSection,
  RadexLiveSection,
  ProcessSteps,
  SectionTransition,
  ImageCardGrid,
} from '../components/landing/SharedLandingParts';
import {
  duscheStattBadewanneSeoIntro,
  duscheStattBadewanneSeoSections,
  barrierefreiesBadSeoIntro,
  barrierefreiesBadSeoSections,
  gaesteWcSeoIntro,
  gaesteWcSeoSections,
} from '../data/badsanierungTopicSeoContent';

const sharedWhyRadex = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitärarbeiten unter Meisterverantwortung von Bernd Knoop.',
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
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Über 60 Städte – kurze Wege und Erfahrung mit Bestandsbädern.',
    icon: MapPin,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Von der Planung bis zur Übergabe begleitet Sie ein festes Team.',
    icon: UserCheck,
  },
  {
    title: 'Saubere Abdichtung',
    desc: 'Feuchteschutz und Gefälle werden fachgerecht geplant und ausgeführt.',
    icon: Bath,
  },
];

const sharedProcess = [
  {
    title: 'Kostenlose Erstberatung',
    desc: 'Wir besprechen Ihre Ziele, den Bestand und die gewünschte Ausstattung.',
  },
  {
    title: 'Besichtigung & Aufmaß',
    desc: 'Vor Ort prüfen wir Leitungen, Entwässerung, Abdichtung und Raummaße.',
  },
  {
    title: 'Planung & Festpreisangebot',
    desc: 'Sie erhalten ein abgestimmtes Konzept mit klarer Kostenkalkulation.',
  },
  {
    title: 'Material & Terminplanung',
    desc: 'Sanitärobjekte, Fliesen und Gewerkereihenfolge werden vor dem Start festgelegt.',
  },
  {
    title: 'Fachgerechte Ausführung',
    desc: 'Rückbau, Rohinstallation, Abdichtung, Fliesen und Montage – koordiniert umgesetzt.',
  },
  {
    title: 'Übergabe',
    desc: 'Fertiggestelltes Bad, geprüft und einsatzbereit – mit Dokumentation und Einweisung.',
  },
];

const sharedBadFaqs = [
  {
    q: 'Ist Radex ein SHK-Meisterbetrieb?',
    a: 'Ja. Radex Objektmanagement GmbH ist ein eingetragener SHK-Meisterbetrieb. Sanitär- und Heizungsarbeiten führen wir als Meisterbetrieb selbst aus.',
  },
  {
    q: 'Was kostet eine Badsanierung im Rhein-Main-Gebiet?',
    a: 'Die Kosten hängen von Badgröße, Umfang und Ausstattung ab. Nach einem Ortstermin erhalten Sie ein verbindliches Festpreisangebot.',
  },
  {
    q: 'In welchen Städten bietet Radex Badsanierung an?',
    a: 'Radex ist in über 60 Städten im Rhein-Main-Gebiet tätig – unter anderem in Frankfurt, Offenbach, Darmstadt, Hanau und Rödermark.',
  },
];

const duscheLive = [
  {
    image: '/img/badsanierung-thema-dusche.png',
    badge: 'LIVE',
    title: 'Dusche statt Badewanne',
    location: 'Darmstadt',
    desc: 'Wanne raus, Walk-in-Dusche rein – laufende Einblicke in Abdichtung und Fliesen.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-thema-komplett.png',
    badge: 'Abgeschlossen',
    title: 'Modernes Komplettbad',
    location: 'Offenbach am Main',
    desc: 'Neue Dusche, Sanitärobjekte und Oberflächen – schlüsselfertig übergeben.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-thema-barrierefrei.png',
    badge: 'Vorher & Nachher',
    title: 'Barrierearme Dusche',
    location: 'Rodgau',
    desc: 'Bodengleicher Einstieg und sichere Nutzung – sichtbarer Vergleich.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/badsanierung-ref-1.png',
    badge: 'Abgeschlossen',
    title: 'Walk-in-Dusche im Bestand',
    location: 'Dreieich',
    desc: 'Entwässerung, Abdichtung und großformatige Fliesen fachgerecht kombiniert.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Bad',
    location: 'Neu-Isenburg',
    desc: 'Authentische Einblicke in Rückbau, Rohinstallation und Fertigstellung.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/badsanierung-ref-2.png',
    badge: 'Abgeschlossen',
    title: 'Premium-Dusche',
    location: 'Frankfurt am Main',
    desc: 'Hochwertige Ausstattung mit klarer Linienführung und indirekter Beleuchtung.',
    cta: 'Projekt ansehen',
  },
];

const barriereLive = [
  {
    image: '/img/badsanierung-thema-barrierefrei.png',
    badge: 'LIVE',
    title: 'Barrierefreies Bad',
    location: 'Rodgau',
    desc: 'Bodengleiche Dusche und Bewegungsflächen – laufende Baustelleneinblicke.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-thema-dusche.png',
    badge: 'Abgeschlossen',
    title: 'Bodengleiche Dusche',
    location: 'Offenbach am Main',
    desc: 'Schwellenloser Einstieg mit sicherer Abdichtung und Haltegriffen.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-thema-komplett.png',
    badge: 'Vorher & Nachher',
    title: 'Altersgerechtes Wohlfühlbad',
    location: 'Darmstadt',
    desc: 'Aus einem veralteten Bad wurde ein zukunftssicheres, barrierearmes Bad.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/badsanierung-ref-1.png',
    badge: 'Abgeschlossen',
    title: 'Komfortbad mit Sicherheit',
    location: 'Dreieich',
    desc: 'Rutschhemmende Beläge, erreichbare Armaturen und klare Wege.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Bad',
    location: 'Neu-Isenburg',
    desc: 'Von der Planung bis zur Übergabe – echte Bauabschnitte ohne Filter.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/badsanierung-ref-2.png',
    badge: 'Abgeschlossen',
    title: 'Premium barrierearm',
    location: 'Frankfurt am Main',
    desc: 'Design und Alltagstauglichkeit in einem abgestimmten Gesamtkonzept.',
    cta: 'Projekt ansehen',
  },
];

const gaesteLive = [
  {
    image: '/img/badsanierung-thema-gaestewc.png',
    badge: 'LIVE',
    title: 'Gäste-WC modernisieren',
    location: 'Dreieich',
    desc: 'Kompaktes WC mit neuen Sanitärobjekten – laufende Einblicke.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-thema-kosten.png',
    badge: 'Abgeschlossen',
    title: 'Kompaktes Gäste-WC',
    location: 'Rodgau',
    desc: 'Kleine Fläche optimal genutzt – hell, funktional und hochwertig.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-ref-1.png',
    badge: 'Vorher & Nachher',
    title: 'Gäste-WC Aufwertung',
    location: 'Offenbach am Main',
    desc: 'Veraltetes WC modernisiert – sichtbarer Vergleich vor und nach der Sanierung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/badsanierung-thema-ablauf.png',
    badge: 'Abgeschlossen',
    title: 'Technik erneuert',
    location: 'Darmstadt',
    desc: 'Neue Leitungen, Abdichtung und Oberflächen auf kompakter Fläche.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Bad',
    location: 'Neu-Isenburg',
    desc: 'Authentische Einblicke in Planung und Umsetzung kleiner Bäder.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/badsanierung-ref-2.png',
    badge: 'Abgeschlossen',
    title: 'Premium Gäste-WC',
    location: 'Frankfurt am Main',
    desc: 'Hochwertige Armaturen und Oberflächen – werthaltig für Vermietung und Verkauf.',
    cta: 'Projekt ansehen',
  },
];

export const badsanierungTopics = {
  'dusche-statt-badewanne': {
    seo: {
      title: 'Dusche statt Badewanne | Umbau im Rhein-Main-Gebiet | Radex',
      description:
        'Badewanne durch Dusche ersetzen im Rhein-Main-Gebiet: bodengleich, barrierearm und fachgerecht abgedichtet vom SHK-Meisterbetrieb Radex.',
      path: '/dusche-statt-badewanne',
      serviceName: 'Dusche statt Badewanne',
    },
    kicker: 'SHK-Meisterbetrieb · Badsanierung · Rhein-Main-Gebiet',
    title: (
      <>
        Dusche statt Badewanne im<br />
        <span>Rhein-Main-Gebiet</span>
      </>
    ),
    lead: 'Mehr Komfort, bessere Nutzung und barrierearme Lösungen – fachgerecht geplant und umgesetzt.',
    text: 'Der Umbau von Wanne zu Dusche ist eine der häufigsten Badsanierungen. Radex plant Entwässerung, Abdichtung und Installationsführung sorgfältig – für ein dauerhaft dichtes und komfortables Ergebnis.',
    highlights: ['Bodengleiche Dusche', 'Fachgerechte Abdichtung', 'Festpreis nach Begehung', 'Rhein-Main-Gebiet'],
    heroImage: '/img/badsanierung-thema-dusche.png',
    heroAlt: 'Moderne Walk-in-Dusche nach Umbau von Badewanne zu Dusche',
    audienceTitle: 'Für wen lohnt sich der Umbau?',
    audienceSubtitle:
      'Der Wannen-zu-Dusche-Umbau passt zu vielen Alltagssituationen – von Komfort und Platzgewinn bis zur barrierearmen Nutzung.',
    audienceCards: [
      {
        title: 'Komfort & Alltag',
        desc: 'Eine bodengleiche oder niedrige Dusche ist im täglichen Gebrauch oft praktischer als eine Badewanne.',
        image: '/img/badsanierung-thema-dusche.png',
        imageAlt: 'Moderne Dusche im Alltag',
      },
      {
        title: 'Platzgewinn',
        desc: 'Auf kleiner Fläche lässt sich mit einer Dusche oft mehr Nutzfläche schaffen als mit einer Wanne.',
        image: '/img/badsanierung-thema-komplett.png',
        imageAlt: 'Bad mit optimal genutzter Fläche',
      },
      {
        title: 'Barrierearm',
        desc: 'Weniger Stolpergefahr und einfacherer Zugang – wichtig für alle Generationen.',
        image: '/img/badsanierung-thema-barrierefrei.png',
        imageAlt: 'Bodengleiche Dusche mit niedrigem Einstieg',
      },
      {
        title: 'Wertsteigerung',
        desc: 'Ein modernes Bad mit zeitgemäßer Dusche steigert die Attraktivität der Immobilie.',
        image: '/img/badsanierung-ref-2.png',
        imageAlt: 'Modernisiertes Bad als Wertsteigerung',
      },
    ],
    serviceTitle: 'Was wir beim Umbau umsetzen',
    serviceSubtitle:
      'Von der Entwässerung bis zur fertigen Oberfläche – alles abgestimmt auf Ihren Bestand und Ihre Wünsche.',
    serviceCards: [
      {
        title: 'Wanne ausbauen & Dusche planen',
        desc: 'Bestand prüfen, Layout festlegen und die passende Duschlösung für Ihren Grundriss wählen.',
        image: '/img/badsanierung-thema-dusche.png',
        imageAlt: 'Planung einer Dusche statt Badewanne',
      },
      {
        title: 'Entwässerung & Abdichtung',
        desc: 'Gefälle, Abläufe und Feuchteschutz fachgerecht – die Grundlage für ein dauerhaft dichtes Bad.',
        image: '/img/heizung-service-sanitaer.png',
        imageAlt: 'Sanitärinstallation und Abdichtung',
      },
      {
        title: 'Walk-in oder Kabine',
        desc: 'Bodengleich, niedrige Schwelle oder Kabine – wir setzen die Variante um, die zu Ihnen passt.',
        image: '/img/badsanierung-thema-barrierefrei.png',
        imageAlt: 'Bodengleiche Walk-in-Dusche',
        to: '/barrierefreies-bad',
      },
      {
        title: 'Fliesen & Fertigmontage',
        desc: 'Oberflächen, Armaturen und Sanitärobjekte – sauber montiert und einsatzbereit übergeben.',
        image: '/img/badsanierung-ref-1.png',
        imageAlt: 'Fertiggestellte Dusche mit Fliesen',
      },
    ],
    whyTitle: 'Warum Eigentümer Radex für den Umbau wählen',
    whySubtitle: 'Meisterqualität bei Sanitär und Abdichtung – plus koordinierte Gewerke für ein fertiges Bad.',
    costTitle: 'Kosten: Dusche statt Badewanne',
    costSubtitle:
      'Preise sind Richtwerte und abhängig von Umfang, Abdichtung und Ausstattung – nach Begehung erhalten Sie ein Festpreisangebot.',
    costCards: [
      {
        title: 'Gäste-WC / Kompakt',
        price: 'ab €7.500',
        desc: 'Orientierung für kleinere Bäder – genauer Umfang entscheidet nach Vor-Ort-Termin.',
        image: '/img/badsanierung-thema-gaestewc.png',
      },
      {
        title: 'Komfortbad',
        price: 'ab €17.500',
        desc: 'Typischer Rahmen für Dusche statt Wanne inkl. Fliesen und neuer Sanitärobjekte.',
        image: '/img/badsanierung-thema-dusche.png',
      },
      {
        title: 'Premium-Wellnessbad',
        price: 'ab €28.000',
        desc: 'Hochwertige Ausstattung, Walk-in und Design – individuell geplant.',
        image: '/img/badsanierung-thema-komplett.png',
      },
    ],
    processTitle: 'So läuft Ihr Umbau mit Radex ab',
    processIntro:
      'Ein strukturierter Ablauf schützt Abdichtung und Termine. Von der Erstberatung bis zur Übergabe haben Sie einen festen Ansprechpartner.',
    processImage: '/img/badsanierung-process.png',
    liveProjects: duscheLive,
    faqs: [
      ...sharedBadFaqs,
      {
        q: 'Kann jede Badewanne durch eine Dusche ersetzt werden?',
        a: 'In den meisten Fällen ja – entscheidend sind Entwässerung, Gefälle und Abdichtung. Wir prüfen das bei der Vor-Ort-Beratung.',
      },
      {
        q: 'Wie lange dauert der Umbau?',
        a: 'Je nach Umfang meist zwischen wenigen Tagen und etwa zwei Wochen. Den genauen Zeitplan erhalten Sie mit dem Angebot.',
      },
    ],
    faqTitle: 'Häufig gestellte Fragen zu Dusche statt Badewanne',
    contactKicker: 'Dusche statt Badewanne anfragen',
    contactTitle: 'Jetzt unverbindlich beraten lassen',
    contactIntro:
      'Sie möchten Ihre Badewanne durch eine Dusche ersetzen? Senden Sie uns Fotos Ihres Bads bequem per WhatsApp oder vereinbaren Sie einen Beratungstermin.',
    contactPlaceholder: 'Bitte beschreiben Sie kurz Ihr Projekt (z.B. Wanne raus, Walk-in-Dusche, Fliesen)...',
    seoIntro: duscheStattBadewanneSeoIntro,
    seoSections: duscheStattBadewanneSeoSections,
    seoTitle: 'Alles, was Sie über Dusche statt Badewanne wissen sollten',
  },
  'barrierefreies-bad': {
    seo: {
      title: 'Barrierefreies Bad | Sanierung im Rhein-Main-Gebiet | Radex',
      description:
        'Barrierefreies Bad im Rhein-Main-Gebiet: bodengleiche Dusche, Haltegriffe und durchdachte Bewegungsflächen vom SHK-Meisterbetrieb Radex.',
      path: '/barrierefreies-bad',
      serviceName: 'Barrierefreies Bad',
    },
    kicker: 'SHK-Meisterbetrieb · Barrierefreies Bad · Rhein-Main-Gebiet',
    title: (
      <>
        Barrierefreies Bad im<br />
        <span>Rhein-Main-Gebiet</span>
      </>
    ),
    lead: 'Sicher, komfortabel und zukunftsfähig – für alle Lebensphasen.',
    text: 'Bodengleiche Duschen, Haltegriffe und gut geplante Bewegungsflächen schaffen mehr Komfort und langfristige Nutzbarkeit. Radex plant barrierefreie Bäder fachgerecht und koordiniert alle Gewerke.',
    highlights: ['Bodengleiche Dusche', 'Bewegungsflächen', 'Festpreis nach Begehung', 'Rhein-Main-Gebiet'],
    heroImage: '/img/badsanierung-thema-barrierefrei.png',
    heroAlt: 'Barrierefreies Bad mit bodengleicher Dusche',
    audienceTitle: 'Für wen ist ein barrierefreies Bad sinnvoll?',
    audienceSubtitle:
      'Barrierefreiheit bedeutet mehr Komfort für alle – nicht nur im Alter. Früh geplant spart spätere teure Umbauten.',
    audienceCards: [
      {
        title: 'Sicherheit im Alltag',
        desc: 'Weniger Stolpergefahr durch bodengleiche Duschen und rutschhemmende Beläge.',
        image: '/img/badsanierung-thema-barrierefrei.png',
        imageAlt: 'Bodengleiche Dusche für mehr Sicherheit',
      },
      {
        title: 'Komfort für alle',
        desc: 'Großzügige Bewegungsflächen und gut erreichbare Armaturen im Alltag.',
        image: '/img/badsanierung-thema-komplett.png',
        imageAlt: 'Bad mit großzügigen Bewegungsflächen',
      },
      {
        title: 'Zukunftssicher wohnen',
        desc: 'Früh geplant erhält die Wohnqualität und vermeidet spätere Umbauten.',
        image: '/img/badsanierung-ref-1.png',
        imageAlt: 'Zukunftssicheres barrierearmes Bad',
      },
      {
        title: 'Förderfähig prüfen',
        desc: 'Barrierefreie Maßnahmen können förderfähig sein – wir beraten Sie gerne.',
        image: '/img/badsanierung-thema-kosten.png',
        imageAlt: 'Beratung zu Förderungen für barrierefreie Bäder',
      },
    ],
    serviceTitle: 'Elemente Ihres barrierefreien Bads',
    serviceSubtitle:
      'Von der bodengleichen Dusche bis zu Haltegriffen und Bewegungsflächen – alles fachgerecht geplant.',
    serviceCards: [
      {
        title: 'Bodengleiche Dusche',
        desc: 'Schwellenloser Einstieg mit sicherem Gefälle und fachgerechter Entwässerung.',
        image: '/img/badsanierung-thema-dusche.png',
        imageAlt: 'Bodengleiche Dusche',
        to: '/dusche-statt-badewanne',
      },
      {
        title: 'Haltegriffe & Sicherheit',
        desc: 'Stabile Montagepunkte und sinnvolle Griffpositionen für den Alltag.',
        image: '/img/badsanierung-thema-barrierefrei.png',
        imageAlt: 'Barrierefreies Bad mit Haltegriffen',
      },
      {
        title: 'Bewegungsflächen',
        desc: 'Grundriss so geplant, dass Wege und Hilfsmittel Platz haben.',
        image: '/img/badsanierung-thema-komplett.png',
        imageAlt: 'Badgrundriss mit Bewegungsflächen',
      },
      {
        title: 'Rutschhemmende Beläge',
        desc: 'Fliesen und Oberflächen, die Sicherheit und Pflegeleichtigkeit verbinden.',
        image: '/img/badsanierung-ref-2.png',
        imageAlt: 'Rutschhemmende Badfliesen',
      },
    ],
    whyTitle: 'Warum Eigentümer Radex für barrierefreie Bäder wählen',
    whySubtitle: 'Sicherheit und Komfort brauchen gute Planung – und handwerkliche Präzision bei Sanitär und Abdichtung.',
    costTitle: 'Kosten eines barrierefreien Bads',
    costSubtitle:
      'Preise sind Richtwerte – nach Begehung und Planung erhalten Sie ein verbindliches Festpreisangebot.',
    costCards: [
      {
        title: 'Gäste-WC / Kompakt',
        price: 'ab €7.500',
        desc: 'Kleine Räume barrierearm aufwerten – Umfang nach Vor-Ort-Termin.',
        image: '/img/badsanierung-thema-gaestewc.png',
      },
      {
        title: 'Komfortbad',
        price: 'ab €17.500',
        desc: 'Typischer Rahmen für bodengleiche Dusche und durchdachte Bewegungsflächen.',
        image: '/img/badsanierung-thema-barrierefrei.png',
      },
      {
        title: 'Premium-Wellnessbad',
        price: 'ab €28.000',
        desc: 'Hochwertige Ausstattung mit maximalem Komfort und Design.',
        image: '/img/badsanierung-thema-komplett.png',
      },
    ],
    processTitle: 'So läuft Ihre barrierefreie Badsanierung ab',
    processIntro:
      'Von der Bedarfsklärung bis zur Übergabe – strukturiert, festpreisbasiert und mit festem Ansprechpartner.',
    processImage: '/img/badsanierung-process.png',
    liveProjects: barriereLive,
    faqs: [
      ...sharedBadFaqs,
      {
        q: 'Gibt es Förderungen für barrierefreie Bäder?',
        a: 'Je nach Maßnahme und Voraussetzungen können Förderprogramme greifen. Wir klären das im persönlichen Gespräch – ohne Garantieversprechen.',
      },
      {
        q: 'Muss ein barrierefreies Bad immer rollstuhlgerecht sein?',
        a: 'Nein. Viele Projekte sind barrierearm und alltagstauglich geplant. Den genauen Standard legen wir gemeinsam anhand Ihres Bedarfs fest.',
      },
    ],
    faqTitle: 'Häufig gestellte Fragen zum barrierefreien Bad',
    contactKicker: 'Barrierefreies Bad anfragen',
    contactTitle: 'Jetzt unverbindlich beraten lassen',
    contactIntro:
      'Sie planen ein barrierefreies oder barrierearmes Bad im Rhein-Main-Gebiet? Senden Sie uns Fotos bequem per WhatsApp oder vereinbaren Sie einen Beratungstermin.',
    contactPlaceholder: 'Bitte beschreiben Sie kurz Ihr Projekt (z.B. bodengleiche Dusche, Haltegriffe, Bewegungsflächen)...',
    seoIntro: barrierefreiesBadSeoIntro,
    seoSections: barrierefreiesBadSeoSections,
    seoTitle: 'Alles, was Sie über barrierefreie Bäder wissen sollten',
  },
  'gaeste-wc': {
    seo: {
      title: 'Gäste-WC sanieren | Rhein-Main-Gebiet | Radex',
      description:
        'Gäste-WC sanieren im Rhein-Main-Gebiet: kleine Räume optimal nutzen mit modernen Sanitärobjekten und fachgerechter Installation.',
      path: '/gaeste-wc',
      serviceName: 'Gäste-WC',
    },
    kicker: 'SHK-Meisterbetrieb · Gäste-WC · Rhein-Main-Gebiet',
    title: (
      <>
        Gäste-WC sanieren im<br />
        <span>Rhein-Main-Gebiet</span>
      </>
    ),
    lead: 'Funktional, modern und auf kleiner Fläche perfekt gelöst.',
    text: 'Auf kleiner Fläche ein helles, funktionales Gäste-WC schaffen – Radex kennt die typischen Grundrisse im Rhein-Main-Gebiet und entwickelt passende Lösungen mit klarer Kostenplanung.',
    highlights: ['Platzoptimierung', 'Moderne Sanitärobjekte', 'Festpreis nach Begehung', 'Rhein-Main-Gebiet'],
    heroImage: '/img/badsanierung-thema-gaestewc.png',
    heroAlt: 'Modernisiertes Gäste-WC auf kleiner Fläche',
    audienceTitle: 'Typische Gäste-WC-Projekte',
    audienceSubtitle: 'Kompakte Räume mit hohem Nutzen – von der Modernisierung bis zur Vermietungsvorbereitung.',
    audienceCards: [
      {
        title: 'Modernisierung',
        desc: 'Neue Sanitärobjekte, Armaturen und Oberflächen für ein zeitgemäßes Erscheinungsbild.',
        image: '/img/badsanierung-thema-gaestewc.png',
        imageAlt: 'Modernisiertes Gäste-WC',
      },
      {
        title: 'Platzoptimierung',
        desc: 'Clevere Grundrisslösungen für enge oder ungünstig geschnittene Räume.',
        image: '/img/badsanierung-thema-ablauf.png',
        imageAlt: 'Kompaktes WC mit cleverer Raumaufteilung',
      },
      {
        title: 'Technik erneuern',
        desc: 'Leitungen, Abdichtung und Entwässerung auf einen zuverlässigen Stand bringen.',
        image: '/img/heizung-service-sanitaer.png',
        imageAlt: 'Sanitärtechnik im Gäste-WC',
      },
      {
        title: 'Vor Vermietung',
        desc: 'Schnelle, wertsteigernde Aufwertung vor Neuvermietung oder Verkauf.',
        image: '/img/badsanierung-thema-kosten.png',
        imageAlt: 'Aufgewertetes Gäste-WC vor Vermietung',
      },
    ],
    serviceTitle: 'Was wir im Gäste-WC umsetzen',
    serviceSubtitle: 'Technik, Oberflächen und Raumgefühl – abgestimmt auf kompakte Grundrisse.',
    serviceCards: [
      {
        title: 'Sanitärobjekte & Armaturen',
        desc: 'WC, Waschtisch und Armaturen passend zur Raumgröße und Ihrem Stil.',
        image: '/img/badsanierung-thema-gaestewc.png',
        imageAlt: 'Neue Sanitärobjekte im Gäste-WC',
      },
      {
        title: 'Leitungen & Abdichtung',
        desc: 'Wasser, Abwasser und Feuchteschutz fachgerecht – auch auf kleiner Fläche.',
        image: '/img/heizung-service-sanitaer.png',
        imageAlt: 'Sanitärleitungen und Abdichtung',
      },
      {
        title: 'Fliesen & Oberflächen',
        desc: 'Helle, pflegeleichte Oberflächen, die den Raum größer wirken lassen.',
        image: '/img/badsanierung-ref-1.png',
        imageAlt: 'Fliesen und Oberflächen im Gäste-WC',
      },
      {
        title: 'Anbindung ans Gesamtbad',
        desc: 'Falls parallel ein Komplettbad saniert wird – Gewerke und Termine abgestimmt.',
        image: '/img/badsanierung-thema-komplett.png',
        imageAlt: 'Gäste-WC als Teil der Badsanierung',
        to: '/badsanierung-rhein-main',
      },
    ],
    whyTitle: 'Warum Eigentümer Radex fürs Gäste-WC wählen',
    whySubtitle: 'Kompakte Räume brauchen präzise Planung – und Meisterqualität bei Sanitär und Abdichtung.',
    costTitle: 'Was kostet ein Gäste-WC?',
    costSubtitle:
      'Gäste-WCs sind oft günstiger als Komplettbäder – der genaue Umfang entscheidet. Nach Begehung erhalten Sie ein Festpreisangebot.',
    costCards: [
      {
        title: 'Gäste-WC Basis',
        price: 'ab €5.000',
        desc: 'Grundmodernisierung mit neuen Objekten und Oberflächen – abhängig vom Bestand.',
        image: '/img/badsanierung-thema-gaestewc.png',
      },
      {
        title: 'Gäste-WC Komfort',
        price: 'ab €7.500',
        desc: 'Mehr Ausstattung, bessere Oberflächen und vollständige Technikerneuerung.',
        image: '/img/badsanierung-thema-kosten.png',
      },
      {
        title: 'Gäste-WC Premium',
        price: 'ab €10.000',
        desc: 'Hochwertige Armaturen und Design – individuell auf den Raum zugeschnitten.',
        image: '/img/badsanierung-ref-2.png',
      },
    ],
    processTitle: 'So läuft Ihre Gäste-WC-Sanierung ab',
    processIntro:
      'Kurz und klar strukturiert – von der Erstberatung bis zur Übergabe mit festem Ansprechpartner.',
    processImage: '/img/badsanierung-process.png',
    liveProjects: gaesteLive,
    faqs: [
      ...sharedBadFaqs,
      {
        q: 'Wie lange dauert die Sanierung eines Gäste-WCs?',
        a: 'Oft nur wenige Tage bis etwa eine Woche – abhängig von Technik, Fliesen und Materialverfügbarkeit. Den genauen Zeitplan erhalten Sie mit dem Angebot.',
      },
      {
        q: 'Kann ein Gäste-WC ohne kompletten Rohbau modernisiert werden?',
        a: 'Manchmal ja – wenn Leitungen und Abdichtung in Ordnung sind. Ob eine Oberflächensanierung reicht, klären wir bei der Besichtigung.',
      },
    ],
    faqTitle: 'Häufig gestellte Fragen zum Gäste-WC',
    contactKicker: 'Gäste-WC anfragen',
    contactTitle: 'Jetzt unverbindlich beraten lassen',
    contactIntro:
      'Sie möchten Ihr Gäste-WC modernisieren? Senden Sie uns Fotos bequem per WhatsApp oder vereinbaren Sie einen Beratungstermin im Rhein-Main-Gebiet.',
    contactPlaceholder: 'Bitte beschreiben Sie kurz Ihr Projekt (z.B. Gäste-WC modernisieren, neue Fliesen, Leitungen)...',
    seoIntro: gaesteWcSeoIntro,
    seoSections: gaesteWcSeoSections,
    seoTitle: 'Alles, was Sie über Gäste-WC-Sanierung wissen sollten',
  },
  badplanung: {
    seo: {
      title: 'Badplanung & Ablauf | Badsanierung Rhein-Main | Radex',
      description:
        'Badsanierung planen: Ablauf, Reihenfolge der Gewerke und typische Fehler vermeiden. Radex begleitet Sie vom Ortstermin bis zur Übergabe.',
      path: '/badplanung',
      serviceName: 'Badplanung',
    },
    kicker: 'SHK-Meisterbetrieb · Badplanung · Rhein-Main-Gebiet',
    title: (
      <>
        Planung & Ablauf der<br />
        <span>Badsanierung</span>
      </>
    ),
    lead: 'Von der Beratung bis zur schlüsselfertigen Übergabe – strukturiert und transparent.',
    text: 'Eine gute Badsanierung beginnt mit der Planung. Radex koordiniert alle Gewerke in der richtigen Reihenfolge – Sie haben einen festen Ansprechpartner und ein verbindliches Festpreisangebot.',
    highlights: ['Klare Gewerkereihenfolge', 'Festpreis nach Begehung', 'Ein Ansprechpartner', 'Rhein-Main-Gebiet'],
    heroImage: '/img/badsanierung-thema-ablauf.png',
    heroAlt: 'Badplanung und Ablauf einer Badsanierung',
    audienceTitle: 'So läuft Ihre Badsanierung ab',
    audienceSubtitle: 'Fünf Schritte von der Idee zum fertigen Bad – ohne Koordinationschaos.',
    audienceCards: [
      {
        title: '1. Kostenlose Beratung',
        desc: 'Vor-Ort-Termin, Bestandsaufnahme und Klärung Ihrer Wünsche.',
        image: '/img/badsanierung-thema-ablauf.png',
        imageAlt: 'Beratung zur Badsanierung',
      },
      {
        title: '2. Planung & Material',
        desc: 'Grundriss, Ausstattung, Materialien und Lichtführung gemeinsam festlegen.',
        image: '/img/badsanierung-thema-komplett.png',
        imageAlt: 'Material- und Badplanung',
      },
      {
        title: '3. Festpreisangebot',
        desc: 'Verbindliches Angebot ohne versteckte Positionen.',
        image: '/img/badsanierung-thema-kosten.png',
        imageAlt: 'Festpreisangebot für Badsanierung',
      },
      {
        title: '4. Ausführung & Übergabe',
        desc: 'Rückbau bis Fertigmontage – koordiniert und schlüsselfertig.',
        image: '/img/badsanierung-ref-1.png',
        imageAlt: 'Fertiggestelltes Bad nach Planung',
      },
    ],
    serviceTitle: 'Was zur Badplanung gehört',
    serviceSubtitle: 'Grundriss, Technik und Gewerke in der richtigen Reihenfolge – bevor die Oberflächen entstehen.',
    serviceCards: [
      {
        title: 'Grundriss & Nutzung',
        desc: 'Dusche, Wanne, WC und Waschtisch sinnvoll auf Ihre Fläche und Ihren Alltag abstimmen.',
        image: '/img/badsanierung-thema-ablauf.png',
        imageAlt: 'Grundrissplanung Bad',
      },
      {
        title: 'Sanitär & Abdichtung',
        desc: 'Leitungen, Entwässerung und Feuchteschutz früh mitplanen – unter Meisterverantwortung.',
        image: '/img/heizung-service-sanitaer.png',
        imageAlt: 'Sanitärplanung im Bad',
        to: '/heizung-sanitaer-rhein-main',
      },
      {
        title: 'Material & Ausstattung',
        desc: 'Fliesen, Armaturen und Sanitärobjekte passend zu Budget und Stil auswählen.',
        image: '/img/badsanierung-thema-komplett.png',
        imageAlt: 'Materialauswahl fürs Bad',
      },
      {
        title: 'Gewerkekoordination',
        desc: 'Elektro, Trockenbau, Fliesen und Montage greifen termingerecht ineinander.',
        image: '/img/badsanierung-process.png',
        imageAlt: 'Koordinierte Gewerke bei der Badsanierung',
        to: '/badsanierung-rhein-main',
      },
    ],
    whyTitle: 'Warum Eigentümer Radex für Badplanung wählen',
    whySubtitle: 'Gute Planung verhindert teure Nacharbeiten – und sorgt für einen ruhigen Bauablauf.',
    costTitle: 'Kostenorientierung nach Badtyp',
    costSubtitle: 'Richtwerte für typische Badsanierungen – das konkrete Angebot folgt nach Planung und Begehung.',
    costCards: [
      {
        title: 'Gäste-WC',
        price: 'ab €7.500',
        desc: 'Kompakte Räume mit klarer Kostenstruktur.',
        image: '/img/badsanierung-thema-gaestewc.png',
      },
      {
        title: 'Komfortbad',
        price: 'ab €17.500',
        desc: 'Typischer Rahmen für moderne Badsanierungen im Bestand.',
        image: '/img/badsanierung-thema-dusche.png',
      },
      {
        title: 'Premium-Wellnessbad',
        price: 'ab €28.000',
        desc: 'Hochwertige Ausstattung und Design – individuell geplant.',
        image: '/img/badsanierung-thema-komplett.png',
      },
    ],
    processTitle: 'So läuft Ihre Badsanierung mit Radex ab',
    processIntro:
      'Ein strukturierter Ablauf ist der wichtigste Faktor für ein reibungsloses Badprojekt – von der Erstberatung bis zur Übergabe.',
    processImage: '/img/badsanierung-process.png',
    liveProjects: duscheLive,
    faqs: [
      ...sharedBadFaqs,
      {
        q: 'Wie lange dauert eine Badsanierung?',
        a: 'Je nach Umfang meist zwischen 2 und 4 Wochen. Den genauen Zeitplan erhalten Sie mit dem Angebot.',
      },
      {
        q: 'Muss die Badplanung vor der Materialbestellung fertig sein?',
        a: 'Idealerweise ja. So vermeiden Sie Wartezeiten und teure Änderungen während der Bauphase.',
      },
    ],
    faqTitle: 'Häufig gestellte Fragen zur Badplanung',
    contactKicker: 'Badplanung anfragen',
    contactTitle: 'Jetzt unverbindlich beraten lassen',
    contactIntro:
      'Sie möchten Ihre Badsanierung planen? Senden Sie uns Fotos bequem per WhatsApp oder vereinbaren Sie einen Beratungstermin.',
    contactPlaceholder: 'Bitte beschreiben Sie kurz Ihr Projekt (z.B. Komplettbad, Dusche statt Wanne, Terminwunsch)...',
    seoIntro: (
      <>
        <p className="mb-4 text-gray-600">
          Eine gute Badsanierung beginnt mit der Planung: Bestandsaufnahme, Grundriss, Materialwunsch und die richtige
          Reihenfolge der Gewerke. Radex begleitet Sie vom Ortstermin bis zur schlüsselfertigen Übergabe.
        </p>
        <p className="mb-4 text-gray-600">
          Als SHK-Meisterbetrieb plant und führt Radex Sanitärarbeiten unter Meisterverantwortung aus und koordiniert
          Elektro, Trockenbau und Fliesen für einen ruhigen Bauablauf.
        </p>
      </>
    ),
    seoSections: [
      {
        id: 'warum-planung',
        title: 'Warum Badplanung entscheidend ist',
        content: (
          <>
            <p className="mb-4 text-gray-600">
              Wer ohne klare Planung startet, riskiert Lieferverzögerungen, Nacharbeiten an der Abdichtung und unnötige
              Kosten. Die richtige Reihenfolge – Rückbau, Rohinstallation, Abdichtung, Trockenbau, Elektro, Fliesen,
              Montage – schützt Termine und Ergebnis.
            </p>
          </>
        ),
      },
      {
        id: 'ablauf',
        title: 'Ablauf der Badsanierung',
        content: (
          <>
            <ul className="br-seo-list mb-4">
              <li>Kostenlose Beratung und Vor-Ort-Termin</li>
              <li>Planung & Material</li>
              <li>Festpreisangebot</li>
              <li>Koordinierte Ausführung</li>
              <li>Übergabe</li>
            </ul>
          </>
        ),
      },
      {
        id: 'verwandte-themen',
        title: 'Verwandte Badthemen',
        content: (
          <>
            <p className="mb-4 text-gray-600">
              Je nach Projekt können auch{' '}
              <a href="/dusche-statt-badewanne">Dusche statt Badewanne</a>,{' '}
              <a href="/barrierefreies-bad">barrierefreies Bad</a> oder{' '}
              <a href="/gaeste-wc">Gäste-WC</a> relevant sein. Den Überblick finden Sie auf der{' '}
              <a href="/badsanierung-rhein-main">Badsanierung</a>-Seite.
            </p>
          </>
        ),
      },
    ],
    seoTitle: 'Alles, was Sie über Badplanung und Ablauf wissen sollten',
  },
};

export default function BadsanierungTopicPage({ topicId }) {
  const topic = badsanierungTopics[topicId];

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [topicId]);

  useSeo(
    topic
      ? {
          title: topic.seo.title,
          description: topic.seo.description,
          path: topic.seo.path,
          image: topic.heroImage,
          jsonLd: [
            buildServiceSchema({
              name: topic.seo.serviceName,
              description: topic.seo.description,
              path: topic.seo.path,
            }),
            buildFaqSchema(topic.faqs),
          ],
        }
      : { title: 'Badsanierung | Radex', description: '', path: '/' },
  );

  if (!topic) return null;

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">{topic.kicker}</p>
            <h1 className="br-hero-title">{topic.title}</h1>
            <p className="br-hero-lead">{topic.lead}</p>
            <p className="br-hero-text">{topic.text}</p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              {topic.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <SharedCTABlock isHero />
            <p className="br-hero-micro">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${topic.heroImage})` }}
          role="img"
          aria-label={topic.heroAlt}
          title={`${topic.seo.serviceName} | Radex Objektmanagement`}
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">{topic.audienceTitle}</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">{topic.audienceSubtitle}</p>
          </div>
          <ImageCardGrid cards={topic.audienceCards} />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, welche Situation auf Sie zutrifft: Erfolgreiche Badsanierung beginnt mit einer klaren
        Leistungswahl. Im nächsten Abschnitt zeigen wir, was wir konkret umsetzen.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">{topic.serviceTitle}</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">{topic.serviceSubtitle}</p>
          </div>
          <div className="br-projects-grid">
            {topic.serviceCards.map((service) => {
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
        Gute Planung allein reicht nicht – entscheidend ist, wer Abdichtung und Sanitär verantwortet. Deshalb setzen
        Eigentümer im Rhein-Main-Gebiet auf Radex.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">{topic.whyTitle}</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">{topic.whySubtitle}</p>
          </div>
          <PremiumIconCards cards={sharedWhyRadex} />
        </div>
      </section>

      <SectionTransition>
        Von der ersten Einschätzung bis zur Übergabe begleiten wir Ihr Badprojekt Schritt für Schritt.
      </SectionTransition>

      <ProcessSteps
        title={topic.processTitle}
        intro={topic.processIntro}
        steps={sharedProcess}
        image={topic.processImage}
      />

      <SectionTransition>
        Nach dem Ablauf stellt sich oft die wichtigste Frage: Mit welchen Kosten müssen Sie rechnen? Die folgenden
        Richtwerte geben eine erste Orientierung.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">{topic.costTitle}</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">{topic.costSubtitle}</p>
          </div>
          <div className="br-costs-grid br-costs-grid--three">
            {topic.costCards.map((card) => (
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
        Richtwerte helfen bei der Orientierung – echte Baustellen zeigen, wie wir arbeiten.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Bäder. Wir zeigen Ihnen den Weg dorthin – mit authentischen Einblicken aus dem Rhein-Main-Gebiet."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Badsanierung als SHK-Meister & Betriebsleiter – persönlich, transparent und fachlich verantwortlich."
        projects={topic.liveProjects}
      />

      <SectionTransition>
        Offen beantwortet: Technik, Kosten und Ablauf – damit Sie den nächsten Schritt mit ruhigem Gefühl gehen können.
      </SectionTransition>

      <FaqAccordion faqs={topic.faqs} title={topic.faqTitle} />

      <ContactForm
        kicker={topic.contactKicker}
        title={topic.contactTitle}
        intro={topic.contactIntro}
        photoTip="Senden Sie uns Bilder Ihres Badezimmers bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder={topic.contactPlaceholder}
      />

      <SeoTocSection
        title={topic.seoTitle}
        intro={topic.seoIntro}
        sections={topic.seoSections}
        showAllContent
      />
    </main>
  );
}
