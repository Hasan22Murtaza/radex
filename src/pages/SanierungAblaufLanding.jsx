import { useEffect } from 'react';
import {
  Camera,
  Award,
  Users,
  ShieldCheck,
  UserCheck,
  CalendarCheck,
  ClipboardList,
  MessageCircle,
  Home,
  FileText,
  CalendarRange,
  Hammer,
  SearchCheck,
  KeyRound,
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
  SectionTransition,
  ImageCardGrid,
  PremiumTimeline,
} from '../components/landing/SharedLandingParts';
import {
  sanierungAblaufSeoIntro,
  sanierungAblaufSeoSections,
} from '../data/sanierungAblaufSeoContent';

const HERO_IMAGE = '/img/ablauf-hero.png';

const timelineSteps = [
  {
    title: 'Kostenlose Erstberatung',
    desc: 'In einem ersten Gespräch lernen wir Ihr Projekt kennen. Gemeinsam besprechen wir Ihre Wünsche, Ziele und den gewünschten Sanierungsumfang. Bereits hier beantworten wir erste Fragen und zeigen Ihnen mögliche Lösungswege auf.',
    icon: MessageCircle,
    image: '/img/ablauf-step-beratung.png',
    imageAlt: 'Beratungsgespräch mit Bauplänen und Konstruktionsskizzen',
  },
  {
    title: 'Besichtigung Ihrer Immobilie',
    desc: 'Unsere Experten verschaffen sich direkt vor Ort einen Überblick über den Zustand Ihrer Immobilie. Dabei prüfen wir Bausubstanz, technische Anlagen und alle wichtigen Voraussetzungen für eine realistische Planung.',
    icon: Home,
    image: '/img/ablauf-step-besichtigung.png',
    imageAlt: 'Besichtigung eines modernen deutschen Hauses mit Laser-Messgerät und Bauplänen',
  },
  {
    title: 'Planung & transparentes Festpreisangebot',
    desc: 'Auf Grundlage der Besichtigung entwickeln wir ein individuelles Sanierungskonzept. Anschließend erhalten Sie ein transparentes Festpreisangebot mit nachvollziehbaren Leistungen und einer strukturierten Projektplanung.',
    icon: FileText,
    image: '/img/ablauf-step-angebot.png',
    imageAlt: 'Architekturbüro mit Bauplänen, Materialmustern und Laptop',
  },
  {
    title: 'Projektplanung & Koordination',
    desc: 'Nach Ihrer Freigabe koordinieren wir sämtliche Gewerke. Materialien werden bestellt, Termine abgestimmt und alle Arbeiten optimal vorbereitet. Dadurch entsteht ein reibungsloser Bauablauf ohne unnötige Verzögerungen.',
    icon: CalendarRange,
    image: '/img/ablauf-step-koordination.png',
    imageAlt: 'Bauzeitplan, Kalender und Blueprints in einem Projektbüro',
  },
  {
    title: 'Professionelle Umsetzung',
    desc: 'Jetzt beginnt die eigentliche Sanierung. Unsere Fachbetriebe setzen sämtliche Arbeiten sauber, fachgerecht und termingerecht um. Während der gesamten Bauphase begleitet Sie ein fester Ansprechpartner der Radex Objektmanagement GmbH.',
    icon: Hammer,
    image: '/img/ablauf-step-umsetzung.png',
    imageAlt: 'Moderne deutsche Sanierungsbaustelle mit sauberem Baufortschritt',
  },
  {
    title: 'Qualitätskontrolle',
    desc: 'Während der gesamten Bauphase kontrollieren wir laufend die Qualität der ausgeführten Arbeiten. So stellen wir sicher, dass sämtliche Gewerke den vereinbarten Qualitätsstandards entsprechen.',
    icon: SearchCheck,
    image: '/img/ablauf-step-qualitaet.png',
    imageAlt: 'Qualitätskontrolle in einem fertig sanierten Bad und hellem Wohnraum',
  },
  {
    title: 'Schlüsselfertige Übergabe',
    desc: 'Nach Abschluss aller Arbeiten erfolgt die gemeinsame Endabnahme. Erst wenn sämtliche Leistungen vollständig umgesetzt wurden, übergeben wir Ihnen Ihr fertig modernisiertes Zuhause oder Ihre modernisierte Immobilie.',
    icon: KeyRound,
    image: '/img/ablauf-step-uebergabe.png',
    imageAlt: 'Fertig modernisiertes deutsches Zuhause – hell und schlüsselfertig',
  },
];

const benefitCards = [
  {
    title: 'Ein Ansprechpartner',
    desc: 'Von der Erstberatung bis zur Übergabe begleitet Sie ein fester Ansprechpartner – ohne wechselnde Zuständigkeiten.',
    icon: UserCheck,
  },
  {
    title: 'Klare Bauabläufe',
    desc: 'Strukturierte Reihenfolge aller Gewerke, realistische Termine und transparente Entscheidungspunkte.',
    icon: CalendarCheck,
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Sanitär, Elektro, Trockenbau, Fliesen und weitere Fachbetriebe werden professionell aufeinander abgestimmt.',
    icon: Users,
  },
  {
    title: 'Transparente Festpreisangebote',
    desc: 'Nach der Besichtigung erhalten Sie ein nachvollziehbares Angebot ohne versteckte Kosten.',
    icon: ShieldCheck,
  },
  {
    title: 'Termingerechte Umsetzung',
    desc: 'Materialien, Termine und Gewerke werden so vorbereitet, dass der Bauablauf möglichst reibungslos verläuft.',
    icon: ClipboardList,
  },
  {
    title: 'Qualitätskontrolle',
    desc: 'Während der gesamten Bauphase prüfen wir laufend Ausführung und Schnittstellen – bis zur Endabnahme.',
    icon: Award,
  },
];

const projectTypeCards = [
  {
    title: 'Badsanierung',
    desc: 'Von der Badplanung über Sanitär und Fliesen bis zur fertigen Übergabe – mit klarem Ablauf und festem Ansprechpartner.',
    image: '/img/gu-card-bad.png',
    imageAlt: 'Modernes deutsches Bad mit Walk-in-Dusche',
    to: '/komplettbadsanierung-rhein-main',
    cta: 'Mehr zur Badsanierung',
  },
  {
    title: 'Wohnungssanierung',
    desc: 'Eigentums- und Bestandswohnungen modernisieren wir strukturiert – inklusive Bad, Elektro und Innenausbau.',
    image: '/img/gu-card-wohnung.png',
    imageAlt: 'Helle moderne deutsche Wohnung nach der Sanierung',
    to: '/wohnungssanierung-rhein-main',
    cta: 'Mehr zur Wohnungssanierung',
  },
  {
    title: 'Haussanierung',
    desc: 'Einfamilienhäuser und Bestandsgebäude sanieren wir als Gesamtprojekt – von Technik bis Oberflächen.',
    image: '/img/gu-card-haus.png',
    imageAlt: 'Deutsches Einfamilienhaus während der Sanierung',
    to: '/haussanierung-rhein-main',
    cta: 'Mehr zur Haussanierung',
  },
  {
    title: 'Altbausanierung',
    desc: 'Historischen Charakter erhalten und Technik modernisieren – mit besonderer Sorgfalt bei Bestand und Schnittstellen.',
    image: '/img/gu-card-altbau.png',
    imageAlt: 'Historischer deutscher Altbau nach der Modernisierung',
    to: '/altbausanierung-rhein-main',
    cta: 'Mehr zur Altbausanierung',
  },
  {
    title: 'Gewerbe- & Objektsanierung',
    desc: 'Büros, Praxen und vermietete Objekte modernisieren wir termingerecht mit professioneller Projektsteuerung.',
    image: '/img/gu-card-gewerbe.png',
    imageAlt: 'Modernes Büro während einer Gewerbesanierung',
    to: '/generalunternehmer-rhein-main',
    cta: 'Mehr zum Generalunternehmer',
  },
];

const radexLiveProjects = [
  {
    image: '/img/gu-card-haus.png',
    badge: 'LIVE',
    title: 'Haussanierung Einfamilienhaus',
    location: 'Rodgau',
    desc: 'Fassade, Technik und Innenausbau – laufendes Projekt mit Einblicken in jede Bauphase.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gu-card-wohnung.png',
    badge: 'LIVE',
    title: 'Wohnungssanierung Eigentumswohnung',
    location: 'Frankfurt am Main',
    desc: 'Entkernung, neue Leitungen und Innenausbau – authentische Einblicke in die laufende Baustelle.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gu-card-bad.png',
    badge: 'Abgeschlossen',
    title: 'Komplettbadsanierung',
    location: 'Darmstadt',
    desc: 'Walk-in-Dusche, großformatige Fliesen und neue Sanitärtechnik – schlüsselfertig übergeben.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gu-card-altbau.png',
    badge: 'Vorher & Nachher',
    title: 'Altbau modernisiert',
    location: 'Offenbach am Main',
    desc: 'Charakter erhalten, Technik erneuert – sichtbarer Vergleich vor und nach der Sanierung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/ablauf-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Planung & Ablauf',
    location: 'Neu-Isenburg',
    desc: 'Von der Abstimmung am Plan bis zum Baufortschritt – echte Arbeit statt Hochglanzfilter.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/gu-card-gewerbe.png',
    badge: 'Abgeschlossen',
    title: 'Gewerbesanierung Bürofläche',
    location: 'Dreieich',
    desc: 'Termingerechte Objektsanierung mit professioneller Projektsteuerung.',
    cta: 'Projekt ansehen',
  },
];

const faqsData = [
  {
    q: 'Wie lange dauert eine Sanierung?',
    a: 'Eine Wohnungssanierung dauert in der Regel 4–8 Wochen. Eine umfangreiche Haussanierung kann 3–6 Monate beanspruchen – abhängig von Umfang, Bausubstanz und Anzahl der Gewerke. Nach der Besichtigung erhalten Sie eine realistische Terminplanung.',
  },
  {
    q: 'Wann erhalte ich mein Festpreisangebot?',
    a: 'Das transparente Festpreisangebot erhalten Sie nach der Besichtigung und Abstimmung des gewünschten Leistungsumfangs. Vorab können Fotos per WhatsApp die Vorbereitung beschleunigen – verbindlich kalkulieren wir jedoch auf Basis der Vor-Ort-Aufnahme.',
  },
  {
    q: 'Muss ich während der Sanierung ausziehen?',
    a: 'Das hängt vom Umfang ab. Bei begrenzten Teilsanierungen ist ein Verbleib oft möglich. Bei Entkernung, Leitungsarbeiten oder umfassendem Innenausbau kann ein vorübergehender Auszug sinnvoll sein. Wir klären das frühzeitig in der Planung.',
  },
  {
    q: 'Wer koordiniert alle Handwerker?',
    a: 'Radex übernimmt als Generalunternehmer die komplette Koordination aller Gewerke. Sie haben einen zentralen Ansprechpartner für Termine, Qualität und Fortschritt.',
  },
  {
    q: 'Kann ich während der Bauphase Änderungen vornehmen?',
    a: 'Ja, Änderungswünsche sind möglich – sollten aber früh kommuniziert werden. Ihr Ansprechpartner prüft Auswirkungen auf Termin, Kosten und Schnittstellen und dokumentiert Freigaben transparent.',
  },
  {
    q: 'Wann beginnt die Planung?',
    a: 'Die Planung beginnt mit der kostenlosen Erstberatung und der Besichtigung vor Ort. Erst danach entsteht ein individuelles Sanierungskonzept und ein Festpreisangebot.',
  },
  {
    q: 'Erhalte ich einen festen Ansprechpartner?',
    a: 'Ja. Während des gesamten Projekts steht Ihnen ein fester Ansprechpartner der Radex Objektmanagement GmbH zur Verfügung – telefonisch, per E-Mail oder WhatsApp.',
  },
];

export default function SanierungAblaufLanding() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useSeo({
    title: 'Sanierung Ablauf im Rhein-Main-Gebiet | Planung bis Fertigstellung | Radex',
    description:
      'So läuft Ihre Sanierung mit Radex ab: von der kostenlosen Erstberatung über Festpreisangebot und Gewerkekoordination bis zur schlüsselfertigen Übergabe im Rhein-Main-Gebiet.',
    path: '/sanierung-ablauf-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Planung & Ablauf einer Sanierung',
        description:
          'Strukturierter Sanierungsablauf mit Radex Objektmanagement GmbH – von der Erstberatung bis zur schlüsselfertigen Übergabe im Rhein-Main-Gebiet.',
        path: '/sanierung-ablauf-rhein-main',
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
              SHK-Meisterbetrieb · Generalunternehmer · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Planung & Ablauf<br />
              <span>Ihrer Sanierung</span>
            </h1>
            <p className="br-hero-lead">
              Von der ersten Idee bis zur schlüsselfertigen Übergabe – professionell geplant, transparent begleitet und
              zuverlässig umgesetzt.
            </p>
            <p className="br-hero-text">
              Eine erfolgreiche Sanierung beginnt lange vor dem ersten Handgriff. Die Radex Objektmanagement GmbH
              begleitet Sie von der ersten Beratung bis zur Fertigstellung Ihres Projekts und koordiniert sämtliche
              Gewerke professionell aus einer Hand. Mit einer strukturierten Planung, festen Ansprechpartnern und
              transparenten Abläufen schaffen wir die Grundlage für eine termingerechte und hochwertige Sanierung im
              gesamten Rhein-Main-Gebiet.
            </p>
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
          aria-label="Beratung zur Sanierung mit Bauplänen vor einem modernen deutschen Haus unter Renovierung"
          title="Planung & Ablauf Ihrer Sanierung | Radex Objektmanagement"
        />
      </section>

      <PremiumTimeline
        title="So läuft Ihre Sanierung Schritt für Schritt ab"
        intro="Viele Eigentümer fragen sich, was nach der ersten Anfrage passiert. Genau deshalb zeigen wir Ihnen den gesamten Ablauf Ihres Sanierungsprojekts. Von der ersten Beratung bis zur schlüsselfertigen Übergabe begleiten wir Sie Schritt für Schritt. So wissen Sie jederzeit, welche Phase als Nächstes folgt und wer Ihr Ansprechpartner ist."
        image="/img/ablauf-process.png"
        imageAlt="Projektbesprechung mit Sanierungsplänen und Bauplänen im Büro"
        steps={timelineSteps}
      />

      <SectionTransition title="Warum ein strukturierter Ablauf so wichtig ist">
        Eine hochwertige Sanierung besteht nicht nur aus guter Handwerksarbeit. Erst die professionelle Planung und
        Koordination aller Gewerke sorgt dafür, dass Termine eingehalten, Arbeiten sinnvoll aufeinander abgestimmt und
        unnötige Verzögerungen vermieden werden. Genau diese Projektsteuerung übernimmt die Radex Objektmanagement GmbH
        für Ihr gesamtes Sanierungsvorhaben.
      </SectionTransition>

      <section className="br-section br-bg-light br-ablauf-benefits">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Ihre Vorteile bei einem klaren Sanierungsablauf</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Weniger Unsicherheit, mehr Planungssicherheit: Mit festen Ansprechpartnern, transparenten Angeboten und
              laufender Qualitätskontrolle behalten Sie in jeder Phase den Überblick.
            </p>
          </div>
          <PremiumIconCards cards={benefitCards} largeIcons />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Für welche Sanierungsprojekte gilt dieser Ablauf?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Ob einzelne Modernisierung oder komplette Sanierung – unser strukturierter Projektablauf bildet die
              Grundlage für jedes Vorhaben. Je nach Umfang passen wir einzelne Schritte individuell an Ihre Immobilie an.
              Der professionelle Ablauf bleibt dabei immer gleich.
            </p>
          </div>
          <ImageCardGrid cards={projectTypeCards} linked />
        </div>
      </section>

      <SectionTransition>
        Ein gut geplanter Ablauf schafft Vertrauen – echte Projekte noch mehr. Deshalb zeigen wir Ihnen ausgewählte
        laufende Baustellen und abgeschlossene Sanierungen aus dem gesamten Rhein-Main-Gebiet. So erhalten Sie einen
        authentischen Einblick in unsere tägliche Arbeit.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Vom ersten Rückbau bis zur fertigen Übergabe begleiten wir unsere Projekte mit größter Sorgfalt. Entdecken Sie aktuelle Baustellen, abgeschlossene Sanierungen und Vorher-Nachher-Projekte aus dem gesamten Rhein-Main-Gebiet und gewinnen Sie einen realistischen Eindruck unserer Arbeitsweise."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Sanierung als SHK-Meister & Betriebsleiter von der technischen Planung bis zur fertigen Übergabe – persönlich, transparent und zum Festpreis."
        projects={radexLiveProjects}
      />

      <SectionTransition>
        Offen beantwortet: Dauer, Festpreis, Auszug und Änderungswünsche – damit Sie den nächsten Schritt mit ruhigem
        Gefühl gehen können.
      </SectionTransition>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen zum Sanierungsablauf" />

      <ContactForm
        kicker="Jetzt Sanierungsprojekt starten"
        title="Starten Sie jetzt Ihr Sanierungsprojekt"
        intro="Sie kennen jetzt den gesamten Ablauf Ihrer Sanierung. Wenn Sie Ihr Projekt gemeinsam mit einem erfahrenen Generalunternehmer planen möchten, beraten wir Sie gerne persönlich. Senden Sie uns Fotos Ihrer Immobilie bequem per WhatsApp oder vereinbaren Sie einen Vor-Ort-Termin. Gemeinsam entwickeln wir den optimalen Ablauf für Ihre Sanierung und begleiten Sie zuverlässig bis zur schlüsselfertigen Übergabe."
        photoTip="Senden Sie uns Bilder Ihrer Immobilie bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Wohnungssanierung, Bad & Elektro, gewünschter Zeitraum)..."
      />

      <SeoTocSection
        title="Alles, was Sie über den Ablauf einer Sanierung wissen sollten"
        intro={sanierungAblaufSeoIntro}
        sections={sanierungAblaufSeoSections}
        showAllContent
      />
    </main>
  );
}
