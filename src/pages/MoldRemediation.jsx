import { useEffect } from 'react';
import {
  Camera,
  Award,
  ShieldCheck,
  Users,
  Droplets,
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
  SeoKnowledgeDrawer,
  RadexLiveSection,
  ProcessSteps,
  SectionTransition,
  ImageCardGrid,
} from '../components/landing/SharedLandingParts';
import {
  schimmelsanierungSeoIntro,
  schimmelsanierungSeoSections,
} from '../data/schimmelsanierungSeoContent';

const HERO_IMAGE = '/img/schimmel-asbest-hero.webp';
const LIVE_IMAGE = '/img/schimmel-asbest-radex-live.webp';

const audienceCards = [
  {
    title: 'Eigentümer und Käufer',
    desc: 'Vor oder nach dem Kauf einer älteren Immobilie Feuchtigkeit, Schimmel und Verdachtsmaterialien rechtzeitig einordnen.',
    image: '/img/gu-card-altbau.png',
    imageAlt: 'Ältere Bestandsimmobilie im Rhein-Main-Gebiet vor Schimmelprüfung',
  },
  {
    title: 'Vermieter und Hausverwaltungen',
    desc: 'Bei Mietverhältnissen, Leerstand oder Schadensfällen: saubere Dokumentation und klare Kommunikation.',
    image: '/img/haus-service-bad.png',
    imageAlt: 'Sanierter Wohnraum nach Schimmel- und Feuchtesanierung',
  },
  {
    title: 'Keller- und Badprobleme',
    desc: 'Feuchte Keller, undichte Bäder, Wärmebrücken und Lüftungsprobleme – häufige Auslöser für wiederkehrenden Schimmel.',
    image: '/img/badsanierung-usp-schimmel.png',
    imageAlt: 'Feuchtes Bad mit Schimmelrisiko vor fachgerechter Sanierung',
  },
  {
    title: 'Sanierer im Altbau',
    desc: 'Bei älteren Baustoffen können Schimmel und Schadstoffe gemeinsam auftreten und müssen zusammen betrachtet werden.',
    image: '/img/altbau-service-bad.png',
    imageAlt: 'Altbau während der Sanierung mit Freilegung von Bauteilen',
  },
];

const serviceCards = [
  {
    title: 'Ursachenanalyse & Befund',
    desc: 'Nicht nur die sichtbare Stelle: Feuchtigkeit, Bauweise, Nutzung und Technik werden gemeinsam eingeordnet.',
    image: '/img/badsanierung-usp-schimmel.png',
    imageAlt: 'Fachliche Prüfung eines Schimmelbefalls',
  },
  {
    title: 'Schimmel im Bad',
    desc: 'Abdichtung, Fugen, Lüftung und mögliche Leitungsschäden prüfen – für eine dauerhafte Lösung statt Oberflächenkosmetik.',
    image: '/img/haus-service-bad.png',
    imageAlt: 'Bad nach fachgerechter Schimmelsanierung',
    to: '/komplettbadsanierung-rhein-main',
  },
  {
    title: 'Asbest & TRGS 519',
    desc: 'Im selben Projekt Asbestverdacht fachlich einordnen – mit Sachkunde nach TRGS 519 und dokumentiertem Rückbau.',
    image: '/img/gu-card-altbau.png',
    imageAlt: 'Altbau mit möglichem Asbestverdacht bei der Sanierung',
    to: '/asbestsanierung-rhein-main',
  },
  {
    title: 'Schadstoffe im Bestand',
    desc: 'Schimmel, Asbest und weitere Verdachtsmaterialien gemeinsam planen – prüfen, rückbauen, trocknen, wiederaufbauen.',
    image: '/img/altbau-service-bad.png',
    imageAlt: 'Schadstoffrelevante Freilegung in einem Bestandsgebäude',
    to: '/schadstoffsanierung-rhein-main',
  },
];

const whyRadexCards = [
  {
    title: 'Zertifiziert für Schimmel',
    desc: 'Radex ist zertifiziert für Schimmelsanierung – fachlich und nachvollziehbar dokumentiert.',
    icon: Award,
  },
  {
    title: 'Ursache statt Oberflächenbehandlung',
    desc: 'Feuchtigkeit, Kältebrücken und Technik werden mit betrachtet – nicht nur der sichtbare Befall.',
    icon: Droplets,
  },
  {
    title: 'TRGS-519-Sachkunde',
    desc: 'Bei Asbestverdacht oder Schadstoffen greift Sachkunde nach TRGS 519 im selben Sanierungsablauf.',
    icon: ShieldCheck,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Prüfung, Trocknung, SHK, Wiederaufbau und Fachpartner mit einem festen Ansprechpartner.',
    icon: Users,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Über 60 Städte – Erfahrung mit Bestandsimmobilien, Altbauten und Mietobjekten.',
    icon: MapPin,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Von der ersten Einschätzung bis zur Übergabe begleitet Sie ein festes Team.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Verdacht einordnen',
    desc: 'Sie schildern Befund, Raum, Baujahr und bisherige Maßnahmen – oft reichen Fotos für eine erste Einschätzung.',
  },
  {
    title: 'Objekt und Ziel verstehen',
    desc: 'Wir klären Nutzung, Zeitdruck, Vermietung, Versicherung und ob parallel Asbest oder Altbau-Themen relevant sind.',
  },
  {
    title: 'Bestandsaufnahme vor Ort',
    desc: 'Vor Ort prüfen wir Feuchtigkeit, betroffene Bauteile, mögliche Ursachen und erforderliche Schutzmaßnahmen.',
  },
  {
    title: 'Maßnahmen planen',
    desc: 'Aus der Analyse entsteht ein klarer Ablauf: stoppen, entfernen, trocknen, absichern und wiederaufbauen.',
  },
  {
    title: 'Fachgerecht umsetzen',
    desc: 'Sanierung und Schnittstellen zu SHK, Abdichtung und Innenausbau werden koordiniert umgesetzt.',
  },
  {
    title: 'Wiederaufbau und Abschluss',
    desc: 'Wiederherstellung der betroffenen Bereiche und dokumentierter Abschluss – damit der Schaden nicht zurückkehrt.',
  },
];

const costCards = [
  {
    title: 'Oberflächlicher Schimmel',
    price: 'ab 300 €',
    desc: 'Lokaler Befall mit klarer Ursache – abhängig von Fläche und Zugänglichkeit.',
    image: '/img/badsanierung-usp-schimmel.png',
  },
  {
    title: 'Tiefsitzender Befall',
    price: 'ab 1.500 €',
    desc: 'Rückbau betroffener Bauteile und fachgerechte Sanierung – nach Bestandsaufnahme konkretisiert.',
    image: '/img/haus-service-bad.png',
  },
  {
    title: 'Trocknung & Wiederaufbau',
    price: 'ab 3.500 €',
    desc: 'Technische Trocknung und Wiederherstellung – typisch nach Wasserschaden oder größerem Befall.',
    image: '/img/altbau-service-bad.png',
  },
];

const radexLiveProjects = [
  {
    image: LIVE_IMAGE,
    badge: 'LIVE',
    title: 'Schimmelsanierung nach Feuchteschaden',
    location: 'Rodgau',
    desc: 'Ursachenanalyse, Trocknung und Wiederaufbau – transparente Einblicke in die Bauphase.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-usp-schimmel.png',
    badge: 'LIVE',
    title: 'Bad mit Schimmelbefall',
    location: 'Dreieich',
    desc: 'Abdichtung, Lüftung und Sanierung – statt nur Oberflächenbehandlung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gu-card-altbau.png',
    badge: 'Abgeschlossen',
    title: 'Altbau Feuchte & Schimmel',
    location: 'Offenbach am Main',
    desc: 'Bestandsaufnahme im Altbau mit klarer Maßnahmenreihenfolge bis zum Wiederaufbau.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/haus-service-bad.png',
    badge: 'Vorher & Nachher',
    title: 'Schimmelbad saniert',
    location: 'Darmstadt',
    desc: 'Sichtbarer Vergleich vor und nach der fachgerechten Schimmelsanierung.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/gu-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Sanierung',
    location: 'Neu-Isenburg',
    desc: 'Authentische Einblicke in Prüfung, Rückbau und Wiederherstellung.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/altbau-service-bad.png',
    badge: 'Abgeschlossen',
    title: 'Keller & Feuchte saniert',
    location: 'Frankfurt am Main',
    desc: 'Aufsteigende Feuchtigkeit und Schimmel im Keller – dauerhaft eingeordnet und saniert.',
    cta: 'Projekt ansehen',
  },
];

const faqsData = [
  {
    q: 'Wann sollte Schimmel fachlich geprüft werden?',
    a: 'Wenn Schimmel wiederholt auftritt, größer wird, nach einem Wasserschaden entstanden ist, im Bad oder Keller sichtbar wird oder einen muffigen Geruch verursacht, sollte er fachlich geprüft werden.',
  },
  {
    q: 'Warum reicht oberflächliches Entfernen nicht aus?',
    a: 'Weil es nur den sichtbaren Befall beseitigt. Wenn die Feuchtigkeit bleibt, entsteht der Schimmel erneut. Ursache, Tiefe des Befalls und betroffene Bauteile müssen mit betrachtet werden.',
  },
  {
    q: 'Was kostet eine Schimmelsanierung?',
    a: 'Die Kosten hängen vom Umfang ab. Eine kleine lokale Sanierung ist anders zu bewerten als ein Wasserschaden mit Trocknung, Rückbau und Wiederherstellung.',
  },
  {
    q: 'Kann Schimmel im Bad dauerhaft saniert werden?',
    a: 'Ja, wenn die Ursache behoben wird. Abdichtung, Fugen, Lüftung, Wandaufbau und mögliche Leitungsprobleme müssen dabei zusammen geprüft werden.',
  },
  {
    q: 'Was passiert bei Schimmel nach einem Wasserschaden?',
    a: 'Zuerst wird die Ursache gestoppt, dann werden betroffene Bauteile getrocknet und geprüft. Erst danach folgt der Wiederaufbau der betroffenen Bereiche.',
  },
  {
    q: 'Ist Radex zertifiziert für Schimmelsanierung?',
    a: 'Ja. Radex ist zertifiziert für Schimmelsanierung und verfügt zusätzlich über Sachkunde nach TRGS 519 für Asbest.',
  },
  {
    q: 'Kann Schimmel mit Asbest oder anderen Schadstoffen zusammenhängen?',
    a: 'Ja, im selben Sanierungsprojekt können mehrere Befunde auftreten. Deshalb ist im Bestand ein fachkundiger Blick auf Schimmel und Verdachtsmaterialien wichtig.',
  },
  {
    q: 'Wie läuft die Anfrage ab?',
    a: 'Sie rufen Radex unter 06074 960620 an oder nutzen den Kontaktbereich. Im ersten Gespräch werden Befund, Raum, Baujahr und mögliche Ursachen besprochen.',
  },
  {
    q: 'Welche Städte betreut Radex?',
    a: 'Radex ist in über 60 Städten im Rhein-Main-Gebiet aktiv, unter anderem in Rödermark, Rodgau, Dietzenbach, Dreieich, Langen, Neu-Isenburg, Offenbach, Frankfurt, Hanau, Darmstadt, Bad Vilbel, Bad Homburg und Oberursel.',
  },
];

export default function MoldRemediation() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useSeo({
    title: 'Schimmelsanierung Rhein-Main | Zertifiziert & Ursachenanalyse | Radex',
    description:
      'Schimmelsanierung im Rhein-Main-Gebiet: Ursachenanalyse statt Oberflächenbehandlung, Bautrocknung, Zertifizierung und TRGS-519-Sachkunde. Jetzt Beratung sichern!',
    path: '/schimmelsanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Schimmelsanierung',
        description:
          'Schimmelsanierung im Rhein-Main-Gebiet: Ursachenanalyse, fachgerechte Sanierung, Trocknung und Wiederaufbau – zertifiziert und mit TRGS-519-Sachkunde.',
        path: '/schimmelsanierung-rhein-main',
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
              Zertifiziert · Ursachenanalyse · TRGS 519 · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Schimmelsanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Ursachen finden, Feuchtigkeit stoppen und den Bestand dauerhaft wiederherstellen.
            </p>
            <p className="br-hero-text">
              Radex saniert nicht nur die sichtbare Stelle: Wir ordnen Ursache, Befallstiefe und Bauteile fachlich ein.
              Der Betrieb ist zertifiziert für Schimmelsanierung und verfügt über Sachkunde nach TRGS&nbsp;519 für Asbest.
              Im Bereich Heizung, Sanitär und Gebäudetechnik arbeitet Radex als SHK-Meisterbetrieb mit Bernd Knoop als
              Meister und Betriebsleiter.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>Ursachenanalyse</li>
              <li>Zertifiziert für Schimmel</li>
              <li>TRGS-519-Sachkunde</li>
              <li>Rhein-Main-Gebiet</li>
            </ul>
            <SharedCTABlock isHero />
            <p className="br-hero-micro">
              <Camera size={14} /> Fotos vom Befund senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Schimmelsanierung und Feuchteprüfung in einem Bestandsgebäude im Rhein-Main-Gebiet"
          title="Schimmelsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Für wen ist Schimmelsanierung relevant?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Sobald Feuchtigkeit, Geruch oder sichtbarer Befall im Bestand auftaucht, sollte fachlich geprüft werden –
              besonders vor dem Kauf, in Mietobjekten und im Altbau.
            </p>
          </div>
          <ImageCardGrid cards={audienceCards} />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, ob Bad, Keller oder Außenwand: Entscheidend ist die richtige Leistungswahl. Im nächsten Abschnitt
        zeigen wir typische Maßnahmen im Überblick.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Maßnahmen der Schimmelsanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Radex betrachtet Feuchtigkeit, Schimmel und mögliche Schadstoffe zusammen – damit Sanierung und
              Wiederaufbau in der richtigen Reihenfolge laufen.
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
        Gute Einzelmaßnahmen reichen nicht – entscheidend ist, wer Ursache und Schnittstellen verantwortet. Deshalb
        setzen Eigentümer im Rhein-Main-Gebiet auf Radex.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex für Schimmelsanierung wählen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Zertifizierung, Ursachenanalyse und TRGS-519-Sachkunde – damit aus einem Befund kein Dauerproblem wird.
            </p>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <SectionTransition>
        Von der ersten Einschätzung bis zum Wiederaufbau begleiten wir Ihr Projekt Schritt für Schritt. So wissen Sie
        jederzeit, welche Phase als Nächstes folgt.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihre Schimmelsanierung mit Radex ab"
        intro="Ein strukturierter Ablauf ist entscheidend für dauerhafte Ergebnisse. Von der Erstberatung bis zur Übergabe haben Sie einen festen Ansprechpartner."
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
            <h2 className="br-section-title">Kosten einer Schimmelsanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Preise sind Richtwerte und abhängig von Befund, Ursache und Wiederaufbau – nach Bestandsaufnahme erstellen
              wir ein konkretes Angebot ohne versteckte Kosten.
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
        authentische Einblicke in Schimmel- und Feuchteprojekte.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Räume. Wir zeigen Ihnen den Weg dorthin. Mit Radex Live erhalten Sie authentische Einblicke in Schimmelsanierungen, Trocknung und Wiederaufbau aus dem Rhein-Main-Gebiet."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Schimmelsanierung als SHK-Meister & Betriebsleiter – persönlich, transparent und fachlich verantwortlich. Radex ist zertifiziert für Schimmel und verfügt über TRGS-519-Sachkunde."
        projects={radexLiveProjects}
      />

      <SectionTransition>
        Offen beantwortet: Ursachen, Zertifizierung, Kosten und Ablauf – damit Sie den nächsten Schritt mit ruhigem
        Gefühl gehen können.
      </SectionTransition>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen zur Schimmelsanierung" />

      <ContactForm
        kicker="Schimmelsanierung anfragen"
        title="Jetzt unverbindlich beraten lassen"
        intro="Sie haben Schimmel, Feuchtigkeit oder muffigen Geruch im Rhein-Main-Gebiet? Senden Sie uns Fotos vom Befund bequem per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin."
        photoTip="Senden Sie uns Bilder von Bad, Keller oder betroffenen Wänden bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Anliegen (z.B. Schimmel im Bad, Wasserschaden, Kellerfeuchtigkeit)..."
      />

      <SeoKnowledgeDrawer
        title="Alles, was Sie über Schimmelsanierung wissen sollten"
        intro={schimmelsanierungSeoIntro}
        sections={schimmelsanierungSeoSections}
        ctaLabel="Schimmelsanierung anfragen"
        panelId="schimmel-seo-panel"
      />
    </main>
  );
}
