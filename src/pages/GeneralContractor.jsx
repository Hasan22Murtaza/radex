import { useEffect } from 'react';
import { Camera, Award, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from '../router';
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
  generalunternehmerSeoIntro,
  generalunternehmerSeoSections,
} from '../data/generalunternehmerSeoContent';

const HERO_IMAGE = '/img/gu-hero.png';

const solutionCards = [
  {
    title: 'Badsanierung aus einer Hand',
    desc: 'Von der Badplanung über Sanitär, Elektro und Fliesenarbeiten bis zur fertigen Übergabe koordinieren wir sämtliche Arbeiten für Ihr neues Badezimmer.',
    image: '/img/gu-card-bad.png',
    imageAlt: 'Modernes deutsches Bad mit Walk-in-Dusche und großformatigen Fliesen',
  },
  {
    title: 'Wohnungssanierung aus einer Hand',
    desc: 'Wir modernisieren Eigentumswohnungen und Bestandswohnungen inklusive Bad, Elektroinstallation, Innenausbau und Bodenbelägen – professionell koordiniert aus einer Hand.',
    image: '/img/gu-card-wohnung.png',
    imageAlt: 'Deutsche Wohnung während der Sanierung mit sichtbarem Baufortschritt',
  },
  {
    title: 'Haussanierung aus einer Hand',
    desc: 'Von der Heizungsmodernisierung bis zur kompletten Haussanierung koordinieren wir sämtliche Gewerke Ihres Projekts.',
    image: '/img/gu-card-haus.png',
    imageAlt: 'Deutsches Einfamilienhaus während der Fassadensanierung',
  },
  {
    title: 'Altbausanierung aus einer Hand',
    desc: 'Historische Gebäude und ältere Bestandsimmobilien modernisieren wir mit besonderem Fokus auf den Erhalt der vorhandenen Bausubstanz.',
    image: '/img/gu-card-altbau.png',
    imageAlt: 'Schön renovierter deutscher Altbau mit historischer Fassade',
  },
  {
    title: 'Gewerbe- & Objektsanierung',
    desc: 'Büros, Praxen, Gewerbeflächen und vermietete Objekte modernisieren wir termingerecht und mit professioneller Projektsteuerung.',
    image: '/img/gu-card-gewerbe.png',
    imageAlt: 'Modernes Büro während einer Gewerbesanierung',
  },
];

const whyRadexCards = [
  {
    title: 'Eingetragener SHK-Meisterbetrieb',
    desc: 'Zertifizierte Arbeit nach aktuellen technischen Richtlinien – mit Bernd Knoop als SHK-Meister und Betriebsleiter.',
    icon: Award,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Ein zentraler Ansprechpartner für Planung, Koordination und Ausführung sämtlicher Gewerke.',
    icon: Users,
  },
  {
    title: 'Saubere Sanierung',
    desc: 'Professionelle Schutzsysteme und strukturierte Abläufe für einen möglichst sauberen Bauablauf.',
    icon: CheckCircle2,
  },
  {
    title: 'Festpreis-Garantie',
    desc: 'Transparente Angebote nach Begehung – ohne versteckte Überraschungen oder unklare Nachforderungen.',
    icon: ShieldCheck,
  },
];

const costCards = [
  {
    title: 'Badsanierung Kosten',
    desc: 'Orientierungswerte und interaktiver Rechner für Ihre Badsanierung – von Basis bis Premium.',
    image: '/img/gu-card-bad.png',
    to: '/badsanierung-kosten',
  },
  {
    title: 'Wohnungssanierung Kosten',
    desc: 'Typische Einstiegspreise pro m² und individueller Kostenrechner für Wohnungen.',
    image: '/img/gu-card-wohnung.png',
    to: '/wohnungssanierung-kosten',
  },
  {
    title: 'Haussanierung Kosten',
    desc: 'Kostenorientierung für Einfamilienhäuser, Reihenhäuser und Bestandsgebäude.',
    image: '/img/gu-card-haus.png',
    to: '/haussanierung-kosten',
  },
  {
    title: 'Altbausanierung Kosten',
    desc: 'Einstiegswerte und Rechner für Altbauten – mit Fokus auf Substanz und Technik.',
    image: '/img/gu-card-altbau.png',
    to: '/altbausanierung-kosten',
  },
];

const processSteps = [
  {
    title: 'Kostenlose Erstberatung',
    desc: 'Wir besprechen Ihre Ziele, den gewünschten Umfang und die Rahmenbedingungen Ihres Projekts.',
  },
  {
    title: 'Besichtigung & Bestandsaufnahme',
    desc: 'Vor Ort prüfen wir Bausubstanz, Technik und Schnittstellen – die Grundlage jeder sauberen Planung.',
  },
  {
    title: 'Maßnahmenplan & Festpreisangebot',
    desc: 'Aus der Begehung entsteht ein abgestimmtes Konzept mit transparenter Kosten- und Terminplanung.',
  },
  {
    title: 'Koordination aller Gewerke',
    desc: 'Radex steuert Sanitär, Elektro, Trockenbau, Fliesen und weitere Fachbetriebe in der richtigen Reihenfolge.',
  },
  {
    title: 'Ausführung & Baubegleitung',
    desc: 'Während der gesamten Bauphase haben Sie einen festen Ansprechpartner und klare Fortschrittsupdates.',
  },
  {
    title: 'Abnahme & schlüsselfertige Übergabe',
    desc: 'Gemeinsame Endabnahme, Dokumentation und besenreine Übergabe Ihres fertigen Projekts.',
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
    image: '/img/gu-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Generalunternehmer',
    location: 'Neu-Isenburg',
    desc: 'Echte Bauabschnitte, sichtbarer Fortschritt und koordinierte Gewerke – ohne Hochglanzfilter.',
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
    q: 'Was macht ein Generalunternehmer bei einer Sanierung?',
    a: 'Ein Generalunternehmer bündelt mehrere Gewerke in einem geordneten Ablauf. Radex übernimmt Bestandsaufnahme, Planung, Angebotsphase, Koordination der Fachbetriebe, Terminsteuerung und Übergabe. Für Kunden bedeutet das: ein Ansprechpartner statt vieler einzelner Handwerkertermine.',
  },
  {
    q: 'Wann lohnt sich ein Generalunternehmer?',
    a: 'Sobald mehrere Gewerke zusammenkommen, ist ein Generalunternehmer meist sinnvoll. Das gilt etwa für Badsanierung, Wohnungssanierung, Haussanierung, Komplett- oder Kernsanierung, Altbauprojekte, Heizungsmodernisierung, Innenausbau oder Gewerbeumbau.',
  },
  {
    q: 'Ist Radex selbst ein SHK-Meisterbetrieb?',
    a: 'Ja. Im Bereich Heizung, Sanitär und Gebäudetechnik ist Radex meistergeführt durch Bernd Knoop als SHK-Meister und Betriebsleiter. Sanitärinstallation, Wasser, Abwasser, Heizung und technische Gebäudekomponenten werden fachlich verantwortet.',
  },
  {
    q: 'Führt Radex Elektroarbeiten selbst aus?',
    a: 'Elektroarbeiten werden durch qualifizierte Elektrofachpartner ausgeführt. Radex koordiniert diese Leistungen so, dass Steckdosen, Licht, Badtechnik, Küchenanschlüsse, Sicherungskasten und Netzwerktechnik rechtzeitig in die Sanierung eingeplant werden.',
  },
  {
    q: 'Kann Radex auch nur einen Teil eines Projekts koordinieren?',
    a: 'Ja. Wenn mehrere Gewerke oder technische Schnittstellen beteiligt sind, kann Radex auch eine Teilsanierung oder einen einzelnen Projektabschnitt koordinieren. Entscheidend ist immer, was zum Objekt und zum Ziel passt.',
  },
  {
    q: 'Was ist der Unterschied zwischen Komplettsanierung und Kernsanierung?',
    a: 'Eine Komplettsanierung umfasst mehrere zentrale Bereiche einer Immobilie, etwa Bad, Böden, Wände, Türen, Elektrokoordination und Innenausbau. Eine Kernsanierung geht tiefer und kann Rückbau, Leitungen, Installationen, Innenwände, Decken und energetische Bauteile betreffen.',
  },
  {
    q: 'Was passiert, wenn während der Sanierung Schadstoffe entdeckt werden?',
    a: 'Dann muss der Befund fachlich eingeordnet werden, bevor weitergearbeitet wird. Radex ist zertifiziert für Schimmel- und Asbestsanierung und verfügt über Sachkunde nach TRGS 519, sodass solche Themen in den Ablauf integriert werden können.',
  },
  {
    q: 'Wie früh sollte ich Radex kontaktieren?',
    a: 'Am besten vor der Beauftragung einzelner Gewerke. Je früher Radex das Objekt kennt, desto sauberer lassen sich Reihenfolge, Kostenrahmen, Fachpartner und technische Schnittstellen planen.',
  },
];

export default function GeneralContractor() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useSeo({
    title: 'Generalunternehmer Rhein-Main | Sanierung aus einer Hand | Radex',
    description:
      'Generalunternehmer für Sanierungen im Rhein-Main-Gebiet: Bad, Wohnung, Haus & Altbau aus einer Hand – SHK-Meisterbetrieb, Festpreis und ein fester Ansprechpartner. Jetzt anfragen!',
    path: '/generalunternehmer-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Generalunternehmer für Sanierungen',
        description:
          'Radex koordiniert Sanierungsprojekte im Rhein-Main-Gebiet als Generalunternehmer – von der Planung bis zur schlüsselfertigen Übergabe.',
        path: '/generalunternehmer-rhein-main',
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
              Generalunternehmer im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Generalunternehmer für Sanierungen im Rhein-Main-Gebiet – ein Ansprechpartner von der Planung bis zur
              schlüsselfertigen Übergabe.
            </p>
            <p className="br-hero-text">
              Radex koordiniert Ihr komplettes Sanierungsprojekt aus einer Hand: Bad, Wohnung, Haus, Altbau oder Gewerbe.
              Bernd Knoop bringt als SHK-Meister & Betriebsleiter Fachkompetenz in Heizung, Sanitär und Gebäudetechnik
              direkt ein – alle weiteren Gewerke steuern wir professionell und terminsicher.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>Ein Ansprechpartner</li>
              <li>Alle Gewerke koordiniert</li>
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
          aria-label="Modernes deutsches Einfamilienhaus während der Sanierung mit sichtbarem Baufortschritt"
          title="Generalunternehmer Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Sanierung möchten Sie aus einer Hand umsetzen?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Als Generalunternehmer koordinieren wir sämtliche Gewerke Ihres Sanierungsprojekts – von der Planung bis
              zur schlüsselfertigen Übergabe. Ganz gleich, ob Sie Ihr Badezimmer modernisieren, Ihre Wohnung renovieren,
              Ihr Haus sanieren oder einen Altbau umfassend modernisieren möchten – Sie erhalten einen festen
              Ansprechpartner und alle Leistungen aus einer Hand.
            </p>
          </div>
          <ImageCardGrid cards={solutionCards} />
        </div>
      </section>

      <SectionTransition>
        Eine erfolgreiche Sanierung besteht nicht nur aus guter Handwerksarbeit. Entscheidend ist die professionelle
        Koordination aller Gewerke. Genau diese Aufgabe übernimmt Radex als Generalunternehmer – damit Ihr Projekt
        strukturiert, termingerecht und mit einem festen Ansprechpartner umgesetzt wird.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex als Generalunternehmer wählen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Weniger Koordinationsaufwand, mehr Planungssicherheit: Wir steuern Ihr Projekt so, dass Sie jederzeit wissen,
              wer was wann umsetzt – und wo Sie stehen.
            </p>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <SectionTransition>
        Von der ersten Beratung bis zur schlüsselfertigen Übergabe begleiten wir Ihr Projekt Schritt für Schritt. So
        wissen Sie jederzeit, in welcher Phase sich Ihre Sanierung befindet.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihre Sanierung mit Radex als Generalunternehmer ab"
        intro="Ein strukturierter Ablauf ist der wichtigste Faktor für ein reibungsloses Gesamtprojekt. Von der Erstberatung bis zur Übergabe haben Sie einen festen Ansprechpartner."
        steps={processSteps}
        image="/img/gu-process.png"
      />

      <SectionTransition>
        Nachdem Sie den Ablauf kennen, möchten viele Eigentümer wissen, mit welchen Investitionen sie ungefähr rechnen
        müssen. Auf den jeweiligen Themenseiten finden Sie detaillierte Kosteninformationen und interaktive Rechner.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet Ihre Sanierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jedes Sanierungsprojekt ist individuell. Deshalb finden Sie auf unseren jeweiligen Themenseiten detaillierte
              Kosteninformationen und interaktive Kostenrechner für die entsprechende Sanierungsart.
            </p>
          </div>
          <div className="br-costs-grid">
            {costCards.map((card) => (
              <Link key={card.title} to={card.to} className="br-cost-card">
                <div className="br-cost-category-img" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="br-cost-header">
                  <h3>{card.title}</h3>
                </div>
                <p className="br-cost-desc">{card.desc}</p>
                <span className="br-btn-orange br-cost-cta">Kosten ansehen &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition>
        Ein Generalunternehmer übernimmt Verantwortung für das gesamte Projekt. Deshalb zeigen wir Ihnen nicht nur fertige
        Ergebnisse, sondern geben Ihnen echte Einblicke in laufende Baustellen und abgeschlossene Sanierungen.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Verfolgen Sie unsere Projekte von der ersten Entkernung bis zur fertigen Übergabe. Erleben Sie echte Baustellen, laufende Sanierungen und abgeschlossene Projekte aus dem gesamten Rhein-Main-Gebiet."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Sanierung als SHK-Meister & Betriebsleiter von der technischen Planung bis zur fertigen Übergabe – persönlich, transparent und zum Festpreis."
        projects={radexLiveProjects}
      />

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen zum Generalunternehmer" />

      <ContactForm
        kicker="Sanierung aus einer Hand anfragen"
        title="Jetzt Projekt anfragen"
        intro="Sie planen eine Sanierung mit mehreren Gewerken? Senden Sie uns Fotos Ihres Projekts bequem per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Gemeinsam planen wir den optimalen Ablauf und koordinieren sämtliche Arbeiten professionell aus einer Hand."
        photoTip="Senden Sie uns Bilder Ihrer Immobilie bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Haussanierung, Bad & Elektro, Termin vor Einzug)..."
      />

      <SeoTocSection
        title="Alles, was Sie über einen Generalunternehmer bei einer Sanierung wissen sollten"
        intro={generalunternehmerSeoIntro}
        sections={generalunternehmerSeoSections}
        showAllContent
      />
    </main>
  );
}
