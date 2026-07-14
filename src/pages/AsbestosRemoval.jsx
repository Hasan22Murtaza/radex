import { useEffect } from 'react';
import {
  Camera,
  Award,
  ShieldCheck,
  Users,
  FileText,
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
  asbestsanierungSeoIntro,
  asbestsanierungSeoSections,
} from '../data/asbestsanierungSeoContent';

const HERO_IMAGE = '/img/schimmel-asbest-hero.webp';
const LIVE_IMAGE = '/img/schimmel-asbest-radex-live.webp';

const audienceCards = [
  {
    title: 'Dachsanierung im Altbau',
    desc: 'Asbestzementplatten, Wellplatten und Dachschindeln auf Gebäuden vor 1993 fachgerecht demontieren und entsorgen.',
    image: '/img/gu-card-altbau.png',
    imageAlt: 'Älteres Dach mit möglicher Asbestzementdeckung',
  },
  {
    title: 'Innensanierung & Böden',
    desc: 'Floor-Flex-Platten, asbesthaltige Fliesenkleber, Spachtelmassen oder Rohrisolierungen sicher rückbauen.',
    image: '/img/haus-service-bad.png',
    imageAlt: 'Innenraum mit freigelegtem Bodenbelag vor Asbestprüfung',
  },
  {
    title: 'Fassade & Verkleidung',
    desc: 'Asbesthaltige Fassadenplatten und Verkleidungen aus den 60er- bis 80er-Jahren vorschriftsmäßig entfernen.',
    image: '/img/altbau-service-bad.png',
    imageAlt: 'Fassadenverkleidung an einem Altbau im Rhein-Main-Gebiet',
  },
  {
    title: 'Vor Umbau oder Kernsanierung',
    desc: 'Pflicht zur Erkundung vor Abbruch- und Sanierungsarbeiten – bevor Wände, Böden oder Decken geöffnet werden.',
    image: '/img/badsanierung-usp-schimmel.png',
    imageAlt: 'Bestandsaufnahme vor einer Kernsanierung',
  },
];

const serviceCards = [
  {
    title: 'Asbestdach',
    desc: 'Demontage und Entsorgung von Wellplatten und Dacheindeckungen – staubarm, dokumentiert und vorschriftsmäßig.',
    image: '/img/gu-card-altbau.png',
    imageAlt: 'Demontage einer asbestverdächtigen Dacheindeckung',
  },
  {
    title: 'Asbestböden & Kleber',
    desc: 'Entfernung asbesthaltiger PVC-, Floor-Flex- und Klebstoffschichten unter Abschottung und HEPA-Abluft.',
    image: '/img/haus-service-bad.png',
    imageAlt: 'Rückbau asbesthaltiger Bodenbeläge im Innenraum',
  },
  {
    title: 'Schimmelsanierung parallel',
    desc: 'Wenn Feuchtigkeit und Schimmel im selben Objekt auftreten: Ursache und Rückbau in der richtigen Reihenfolge planen.',
    image: '/img/badsanierung-usp-schimmel.png',
    imageAlt: 'Schimmel- und Feuchtesanierung im Bestand',
    to: '/schimmelsanierung-rhein-main',
  },
  {
    title: 'Weitere Schadstoffe',
    desc: 'KMF, PAK-haltige Materialien und belastete Anstriche fachlich einordnen – als Teil der Schadstoffsanierung.',
    image: '/img/altbau-service-bad.png',
    imageAlt: 'Schadstoffprüfung in einem Bestandsgebäude',
    to: '/schadstoffsanierung-rhein-main',
  },
];

const whyRadexCards = [
  {
    title: 'TRGS-519-Sachkunde',
    desc: 'Asbestarbeiten nur mit dem erforderlichen Sachkundenachweis und geschultem Personal.',
    icon: Award,
  },
  {
    title: 'Nie DIY – immer fachgerecht',
    desc: 'Keine Eigenentfernung: Abschottung, Unterdruck und staubarmer Rückbau schützen Gesundheit und Rechtssicherheit.',
    icon: ShieldCheck,
  },
  {
    title: 'Entsorgungsnachweise',
    desc: 'Vollständige Dokumentation und Entsorgungsnachweise für Behörden, Versicherungen und Immobilienverkauf.',
    icon: FileText,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Prüfung, Rückbau, Entsorgung und Schnittstellen zu Schimmel, Bad und Wiederaufbau koordiniert.',
    icon: Users,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Über 60 Städte – Erfahrung mit Altbauten und Verdachtsmaterialien im Bestand.',
    icon: MapPin,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Von der ersten Einschätzung bis zur dokumentierten Übergabe begleitet Sie ein festes Team.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Verdacht melden',
    desc: 'Sie beschreiben Material, Baujahr und geplante Arbeiten – bei Verdacht nichts selbst bearbeiten.',
  },
  {
    title: 'Objekt und Umfang klären',
    desc: 'Wir ordnen Dach, Boden, Fassade oder Innenraum ein und klären, ob Laborproben sinnvoll sind.',
  },
  {
    title: 'Bestandsaufnahme vor Ort',
    desc: 'Vor Ort prüfen wir Verdachtsmaterialien, Zugänglichkeit und erforderliche Schutzmaßnahmen.',
  },
  {
    title: 'Arbeitsplan & Anzeige',
    desc: 'Gefährdungsbeurteilung, Arbeitsplan und behördliche Anzeigen werden vorschriftsmäßig vorbereitet.',
  },
  {
    title: 'Fachgerechter Rückbau',
    desc: 'Abschottung, staubarmer Rückbau, Verpackung und Abtransport – vollständig nach TRGS 519.',
  },
  {
    title: 'Entsorgung & Abschluss',
    desc: 'Entsorgung über zugelassene Deponien, Entsorgungsnachweise und dokumentierter Projektabschluss.',
  },
];

const costCards = [
  {
    title: 'Dachsanierung',
    price: 'ab 35 € / m²',
    desc: 'Richtwert inkl. Schutzmaßnahmen und Entsorgung – abhängig von Zugang und Material.',
    image: '/img/gu-card-altbau.png',
  },
  {
    title: 'Bodenbeläge',
    price: 'ab 60 € / m²',
    desc: 'Floor-Flex, PVC und Kleber – Innenarbeiten mit Abschottung und Dokumentation.',
    image: '/img/haus-service-bad.png',
  },
  {
    title: 'Innenraum-Sanierung',
    price: 'auf Anfrage',
    desc: 'Isolierungen, Spachtelmassen und Verkleidungen – Angebot nach Bestandsaufnahme.',
    image: '/img/altbau-service-bad.png',
  },
];

const radexLiveProjects = [
  {
    image: LIVE_IMAGE,
    badge: 'LIVE',
    title: 'Asbestrückbau Bestand',
    location: 'Rodgau',
    desc: 'Abschottung, Rückbau und Dokumentation – transparente Einblicke in die Bauphase.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gu-card-altbau.png',
    badge: 'LIVE',
    title: 'Asbestdach Demontage',
    location: 'Dreieich',
    desc: 'Wellplatten und Asbestzement fachgerecht demontiert und entsorgt.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/haus-service-bad.png',
    badge: 'Abgeschlossen',
    title: 'Floor-Flex & Kleber entfernt',
    location: 'Offenbach am Main',
    desc: 'Bodenrückbau unter Unterdruck mit vollständiger Entsorgungsdokumentation.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-usp-schimmel.png',
    badge: 'Vorher & Nachher',
    title: 'Innenraum freigemessen',
    location: 'Darmstadt',
    desc: 'Sichtbarer Vergleich nach fachgerechtem Asbestrückbau und Freigabe.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/gu-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick TRGS 519',
    location: 'Neu-Isenburg',
    desc: 'Authentische Einblicke in Abschottung, Schutz und dokumentierten Ablauf.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/altbau-service-bad.png',
    badge: 'Abgeschlossen',
    title: 'Schadstoff & Schimmel kombiniert',
    location: 'Frankfurt am Main',
    desc: 'Asbestverdacht und Feuchteschaden in einem abgestimmten Sanierungsablauf.',
    cta: 'Projekt ansehen',
  },
];

const faqsData = [
  {
    q: 'Muss der Bereich abgeschottet werden?',
    a: 'Ja, im Innenbereich arbeiten wir unter Unterdruck mit speziellen Schleusen und Folienabschottungen, damit keine Asbestfasern in andere Räume gelangen. Die Luft wird über Feinstaubfilter (HEPA) gereinigt. Diese Maßnahmen sind in der TRGS 519 vorgeschrieben.',
  },
  {
    q: 'Woran erkenne ich asbesthaltige Materialien?',
    a: 'Eine sichere Bestimmung ist nur durch eine Materialprobe und Laboranalyse möglich. Verdächtig sind Materialien aus der Bauzeit vor 1993 – etwa graue Wellplatten, Fensterbänke, Floor-Flex-Bodenplatten und alte Rohrisolierungen. Bei Verdacht sollten Sie die Materialien keinesfalls selbst bearbeiten.',
  },
  {
    q: 'Darf ich Asbest selbst entfernen?',
    a: 'Nein. Die Entfernung asbesthaltiger Materialien darf nur durch Betriebe mit Sachkundenachweis nach TRGS 519 erfolgen. Eigenmächtiges Entfernen ist nicht nur gesundheitsgefährlich, sondern auch rechtlich unzulässig und kann Bußgelder nach sich ziehen.',
  },
  {
    q: 'Wie wird Asbest entsorgt?',
    a: 'Asbest ist gefährlicher Abfall und muss in speziellen, staubdichten Big-Bags verpackt und bei einer zugelassenen Deponie entsorgt werden. Wir übernehmen die gesamte Logistik inklusive Entsorgungsnachweis, den Sie für Behörden und ggf. Käufer benötigen.',
  },
  {
    q: 'Muss eine Behörde informiert werden?',
    a: 'Bei asbesthaltigen Sanierungsarbeiten ist eine Anzeige bei der zuständigen Behörde (z. B. Regierungspräsidium) erforderlich. Wir kümmern uns um die vorgeschriebenen Anzeigen, Arbeitspläne und die komplette Dokumentation.',
  },
  {
    q: 'Was kostet eine Asbestsanierung?',
    a: 'Richtwerte liegen je nach Einsatzort bei ab 35 €/m² für Dächer und ab 60 €/m² für Bodenbeläge. Innenraummaßnahmen werden nach Bestandsaufnahme kalkuliert. Schutzmaßnahmen und Entsorgung sind Bestandteil des Angebots.',
  },
  {
    q: 'Kann Asbest zusammen mit Schimmel auftreten?',
    a: 'Ja. Gerade im Altbau können Feuchtigkeit, Schimmel und Verdachtsmaterialien im selben Projekt vorkommen. Dann müssen Prüfung, Rückbau und Wiederaufbau gemeinsam geplant werden.',
  },
];

export default function AsbestosRemoval() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Asbestsanierung Rhein-Main | TRGS 519 zertifiziert | Radex',
    description:
      'Asbestsanierung im Rhein-Main-Gebiet: sichere Entfernung & Entsorgung von Asbest nach TRGS 519, vollständig dokumentiert. Nie DIY – jetzt Beratung anfragen!',
    path: '/asbestsanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Asbestsanierung',
        description:
          'Asbestsanierung im Rhein-Main-Gebiet: TRGS-519-Sachkunde, Abschottung, vorschriftsmäßige Entsorgung und lückenlose Dokumentation.',
        path: '/asbestsanierung-rhein-main',
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
              TRGS 519 · Dokumentierte Entsorgung · Nie DIY · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Asbestsanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Sichere Entfernung und vorschriftsmäßige Entsorgung – mit Sachkunde nach TRGS&nbsp;519.
            </p>
            <p className="br-hero-text">
              Als Fachbetrieb mit TRGS-519-Sachkunde sanieren wir asbestbelastete Dächer, Fassaden, Böden und Innenräume
              sicher, dokumentiert und vollständig nach den geltenden Vorschriften. Asbest niemals selbst entfernen:
              Radex übernimmt Abschottung, Rückbau, Entsorgung und alle erforderlichen Nachweise.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>TRGS-519-Sachkunde</li>
              <li>Nie DIY</li>
              <li>Entsorgungsnachweise</li>
              <li>Rhein-Main-Gebiet</li>
            </ul>
            <SharedCTABlock isHero />
            <p className="br-hero-micro">
              <Camera size={14} /> Fotos vom Verdachtsmaterial senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Asbestsanierung und Schadstoffrückbau in einem Bestandsgebäude im Rhein-Main-Gebiet"
          title="Asbestsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Wann ist Asbest ein Thema?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Gebäude mit Baujahr vor 1993 sind häufig belastet – besonders vor Dach-, Boden-, Fassaden- oder
              Kernsanierungsarbeiten.
            </p>
          </div>
          <ImageCardGrid cards={audienceCards} />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, ob Dach, Boden oder Innenraum: Entscheidend ist die fachgerechte Leistung. Im nächsten Abschnitt
        zeigen wir typische Asbest- und Schadstoffmaßnahmen.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Maßnahmen der Asbestsanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Sicher, zertifiziert und vollständig dokumentiert – inklusive Schnittstellen zu Schimmel und weiteren
              Schadstoffen.
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
        Gute Absichten reichen bei Asbest nicht – entscheidend ist zertifizierte Ausführung. Deshalb setzen Eigentümer
        im Rhein-Main-Gebiet auf Radex.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex für Asbestsanierung wählen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              TRGS-519-Sachkunde, dokumentierte Entsorgung und klare Kommunikation – damit aus einem Verdacht kein Risiko
              wird.
            </p>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <SectionTransition>
        Von der ersten Einschätzung bis zum Entsorgungsnachweis begleiten wir Ihr Projekt Schritt für Schritt. So wissen
        Sie jederzeit, welche Phase als Nächstes folgt.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihre Asbestsanierung mit Radex ab"
        intro="Ein strukturierter Ablauf nach TRGS 519 ist entscheidend für Sicherheit und Rechtssicherheit. Von der Erstberatung bis zur dokumentierten Übergabe haben Sie einen festen Ansprechpartner."
        steps={processSteps}
        image="/img/gu-process.png"
      />

      <SectionTransition>
        Nach dem Ablauf stellt sich oft die wichtigste Frage: Mit welchen Kosten müssen Sie rechnen? Die folgenden
        Richtwerte geben eine erste Orientierung – das konkrete Angebot folgt nach der Bestandsaufnahme.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Kosten einer Asbestsanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Preise beinhalten Spezialausrüstung, Schutzmaßnahmen und Sondermüll-Entsorgung – nach Bestandsaufnahme
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
        authentische Einblicke in Asbest- und Schadstoffprojekte.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Flächen. Wir zeigen Ihnen den Weg dorthin. Mit Radex Live erhalten Sie authentische Einblicke in Asbestrückbau, Dokumentation und vorschriftsmäßige Entsorgung aus dem Rhein-Main-Gebiet."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Asbestsanierung als SHK-Meister & Betriebsleiter – persönlich, transparent und fachlich verantwortlich. Radex verfügt über Sachkunde nach TRGS 519."
        projects={radexLiveProjects}
      />

      <SectionTransition>
        Offen beantwortet: Abschottung, Entsorgung, Behördenanzeige und warum DIY verboten ist – damit Sie den nächsten
        Schritt sicher gehen können.
      </SectionTransition>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen zur Asbestsanierung" />

      <ContactForm
        kicker="Asbestsanierung anfragen"
        title="Jetzt unverbindlich beraten lassen"
        intro="Sie vermuten Asbest in Dach, Boden, Fassade oder Innenraum im Rhein-Main-Gebiet? Senden Sie uns Fotos bequem per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin – bitte nichts selbst bearbeiten."
        photoTip="Senden Sie uns Bilder vom Verdachtsmaterial oder Einbauort bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Anliegen (z.B. Asbestdach, Floor-Flex, Kleber, Baujahr vor 1993)..."
      />

      <SeoTocSection
        title="Alles, was Sie über Asbestsanierung wissen sollten"
        intro={asbestsanierungSeoIntro}
        sections={asbestsanierungSeoSections}
        showAllContent
      />
    </main>
  );
}
