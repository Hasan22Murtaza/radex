import { useEffect } from 'react';
import {
  Camera,
  Award,
  ShieldCheck,
  Users,
  LayoutGrid,
  MapPin,
  UserCheck,
} from 'lucide-react';
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
  SeoKnowledgeDrawer,
  RadexLiveSection,
  ProcessSteps,
  SectionTransition,
  ImageCardGrid,
} from '../components/landing/SharedLandingParts';
import {
  innenausbauSeoIntro,
  innenausbauSeoSections,
} from '../data/innenausbauSeoContent';

const HERO_IMAGE = '/img/innenausbau-hero.webp';
const LIVE_IMAGE = '/img/innenausbau-radex-live.webp';

const audienceCards = [
  {
    title: 'Eigentümer von Wohnungen',
    desc: 'Wenn Böden, Türen, Wände, Licht oder Raumaufteilung erneuert werden sollen, braucht es einen sauber geplanten Innenausbau.',
    image: '/img/wohnung-service-innenausbau.png',
    imageAlt: 'Innenausbau in einer Eigentumswohnung im Rhein-Main-Gebiet',
  },
  {
    title: 'Eigentümer von Häusern',
    desc: 'Bei Häusern kommen oft mehrere Ebenen, Haustechnik, Dachgeschoss, Keller und spätere Erweiterungen zusammen.',
    image: '/img/haus-service-innenausbau.png',
    imageAlt: 'Innenausbau und Umbau in einem Einfamilienhaus',
  },
  {
    title: 'Käufer vor dem Einzug',
    desc: 'Wer eine Immobilie nach dem Kauf modernisiert, kann Innenausbau, Bad, Elektro und Technik in einer sinnvollen Reihenfolge bündeln.',
    image: '/img/altbau-service-innenausbau.png',
    imageAlt: 'Bestandsobjekt vor dem Einzug bereit für Innenausbau',
  },
  {
    title: 'Vermieter und Bestandshalter',
    desc: 'Für Neuvermietung, Leerstand oder Modernisierung im Bestand sind klare Bauabschnitte und kurze Stillstandszeiten entscheidend.',
    image: '/img/wohnung-service-boeden.png',
    imageAlt: 'Modernisierte Wohnung mit neuen Böden nach Innenausbau',
  },
  {
    title: 'Gewerbliche Nutzer',
    desc: 'Auch Büros, Praxen und Dienstleistungsflächen profitieren von besserer Raumstruktur, Trockenbau, Licht und technisch sauberer Planung.',
    image: '/img/gu-process.png',
    imageAlt: 'Gewerblicher Innenausbau mit Trockenbau und Raumstruktur',
  },
];

const serviceCards = [
  {
    title: 'Raumaufteilung und Grundriss',
    desc: 'Offenere Wohnbereiche, neue Zimmerzuschnitte, bessere Flure oder ein zusätzliches Homeoffice.',
    image: '/img/haus-service-innenausbau.png',
    imageAlt: 'Neue Raumaufteilung und Grundrissanpassung',
    to: '/raeume-umbauen-rhein-main',
  },
  {
    title: 'Trockenbau',
    desc: 'Neue Trennwände, abgehängte Decken, Vorwände und Installationsflächen für Leitungen und Technik.',
    image: '/img/wohnung-service-innenausbau.png',
    imageAlt: 'Trockenbauwände und abgehängte Decken im Innenausbau',
  },
  {
    title: 'Böden',
    desc: 'Parkett, Designbelag, Vinyl, Fliesen oder andere Bodenlösungen mit sauberer Untergrundvorbereitung.',
    image: '/img/wohnung-service-boeden.png',
    imageAlt: 'Bodenverlegung mit sauberer Untergrundvorbereitung',
  },
  {
    title: 'Wände und Decken',
    desc: 'Spachteln, Verputzen, Streichen, Verkleiden und fachgerechte Vorbereitung der Oberflächen.',
    image: '/img/altbau-service-innenausbau.png',
    imageAlt: 'Wand- und Deckenarbeiten im Innenausbau',
  },
  {
    title: 'Türen und Zargen',
    desc: 'Neue Innentüren, passende Zargen und saubere Anschlüsse für einen stimmigen Gesamteindruck.',
    image: '/img/haus-process.png',
    imageAlt: 'Neue Innentüren und Zargen nach dem Umbau',
  },
  {
    title: 'Technik im Innenausbau',
    desc: 'Elektro, Licht, Heizung und Sanitär werden früh mitgedacht und mit dem Ausbau abgestimmt.',
    image: '/img/gu-process.png',
    imageAlt: 'Elektro- und Haustechnik abgestimmt auf den Innenausbau',
    to: '/elektroinstallation-rhein-main',
  },
];

const whyRadexCards = [
  {
    title: 'Alles aus einer Hand',
    desc: 'Raumaufteilung, Trockenbau, Böden, Türen, Elektro, Heizung und Sanitär – koordiniert als Generalunternehmer.',
    icon: Users,
  },
  {
    title: 'SHK-Meisterkompetenz',
    desc: 'Heizung, Sanitär und Gebäudetechnik unter Meisterverantwortung von Bernd Knoop.',
    icon: Award,
  },
  {
    title: 'Richtige Gewerkereihenfolge',
    desc: 'Technik vor Oberfläche – Elektro, SHK und Leitungen vor Trockenbau, Böden und Malerarbeiten.',
    icon: LayoutGrid,
  },
  {
    title: 'Saubere Bestandsaufnahme',
    desc: 'Leitungen, Wandaufbauten, Böden und mögliche Risiken werden vor dem ersten Eingriff geprüft.',
    icon: ShieldCheck,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Über 60 Städte – kurze Wege und lokale Erfahrung mit Wohnungen, Häusern und Altbau.',
    icon: MapPin,
  },
  {
    title: 'Fester Ansprechpartner',
    desc: 'Von der Erstberatung bis zur Übergabe begleitet Sie ein festes Team.',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: 'Projektanfrage',
    desc: 'Wir besprechen Ihre Ziele – Raumaufteilung, Trockenbau, Böden, Türen oder technischer Umbau.',
  },
  {
    title: 'Begehung und Bestandsaufnahme',
    desc: 'Vor Ort prüfen wir Substanz, Leitungen, Wandaufbauten, Böden und Schnittstellen zur Technik.',
  },
  {
    title: 'Ziele und Umfang klären',
    desc: 'Gemeinsam legen wir fest, was nötig, sinnvoll und zeitlich machbar ist – auch im bewohnten Bestand.',
  },
  {
    title: 'Gewerke und Reihenfolge planen',
    desc: 'Elektro, SHK, Trockenbau, Böden und Oberflächen werden in der richtigen Reihenfolge abgestimmt.',
  },
  {
    title: 'Umsetzung und Übergabe',
    desc: 'Koordinierte Ausführung mit festem Ansprechpartner – bis zur sauberen Übergabe Ihres Projekts.',
  },
];

const costCards = [
  {
    title: 'Trockenbauwand',
    price: 'ab 60 € / m²',
    desc: 'Richtwert für neue Trennwände – abhängig von Aufbau, Schallschutz und Anschlüssen.',
    image: '/img/wohnung-service-innenausbau.png',
  },
  {
    title: 'Malerarbeiten',
    price: 'ab 15 € / m²',
    desc: 'Spachteln, Streichen und Oberflächenvorbereitung – Preis je nach Zustand und Qualität.',
    image: '/img/altbau-service-innenausbau.png',
  },
  {
    title: 'Bodenverlegung',
    price: 'ab 40 € / m²',
    desc: 'Parkett, Designbelag, Vinyl oder Fliesen inkl. Untergrund – konkret nach Besichtigung.',
    image: '/img/wohnung-service-boeden.png',
  },
  {
    title: 'Wanddurchbruch',
    price: 'projektbezogen',
    desc: 'Statik, Leitungen und Anschlüsse müssen geprüft werden – Angebot nach Bestandsaufnahme.',
    image: '/img/haus-service-innenausbau.png',
    to: '/wand-entfernen-rhein-main',
  },
];

const radexLiveProjects = [
  {
    image: LIVE_IMAGE,
    badge: 'LIVE',
    title: 'Innenausbau Eigentumswohnung',
    location: 'Rodgau',
    desc: 'Trockenbau, Böden und Oberflächen – laufende Baustelleneinblicke aus dem Bestand.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/haus-service-innenausbau.png',
    badge: 'LIVE',
    title: 'Umbau Einfamilienhaus',
    location: 'Dreieich',
    desc: 'Raumaufteilung, Technik und Ausbau – authentische Einblicke in die Bauphase.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/wohnung-service-boeden.png',
    badge: 'Abgeschlossen',
    title: 'Böden & Oberflächen',
    location: 'Offenbach am Main',
    desc: 'Neue Bodenbeläge und saubere Anschlüsse – fertig übergeben.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/altbau-service-innenausbau.png',
    badge: 'Vorher & Nachher',
    title: 'Altbau innen modernisiert',
    location: 'Darmstadt',
    desc: 'Grundriss und Oberflächen im Altbau – sichtbarer Vergleich vor und nach dem Umbau.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/gu-process.png',
    badge: 'Video',
    title: 'Baustelleneinblick Innenausbau',
    location: 'Neu-Isenburg',
    desc: 'Echte Bauabschnitte von Trockenbau bis Übergabe – ohne Hochglanzfilter.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/wohnung-service-innenausbau.png',
    badge: 'Abgeschlossen',
    title: 'Trockenbau & Raumstruktur',
    location: 'Frankfurt am Main',
    desc: 'Neue Trennwände, Decken und Installationsflächen – abgestimmt auf Elektro und SHK.',
    cta: 'Projekt ansehen',
  },
];

const faqsData = [
  {
    q: 'Was gehört zum Innenausbau bei einer Sanierung?',
    a: 'Zum Innenausbau gehören Böden, Wände, Decken, Türen, Zargen, Trockenbau, Raumaufteilung, Oberflächen, Beleuchtung, Elektro, Heizung, Sanitär und alle Arbeiten, die das Innere einer Wohnung oder eines Hauses nutzbar und fertig machen.',
  },
  {
    q: 'Wann lohnt sich ein Umbau im Bestand?',
    a: 'Ein Umbau lohnt sich, wenn die Substanz grundsätzlich gut ist, aber Grundriss, Technik, Böden, Wände oder Ausstattung nicht mehr zur heutigen Nutzung passen. Besonders nach Kauf, vor Einzug oder bei veränderten Wohnbedürfnissen ist das oft sinnvoll.',
  },
  {
    q: 'Was ist der Unterschied zwischen Innenausbau und Sanierung?',
    a: 'Innenausbau betrifft vor allem den inneren Ausbau mit Wänden, Böden, Decken, Türen und technischer Integration. Sanierung ist breiter und kann zusätzlich Bad, Heizung, Leitungen, Fenster, Energie oder Schadstoffe betreffen.',
  },
  {
    q: 'Kann Radex Raumaufteilung und Trockenbau mitplanen?',
    a: 'Ja. Radex koordiniert neue Raumaufteilungen, Trockenbauwände, abgehängte Decken, Vorsatzschalen, Schallschutz und Wandöffnungen. Vor Eingriffen in vorhandene Wände wird geprüft, ob Tragwerk, Leitungen oder Fachplanung betroffen sind.',
  },
  {
    q: 'Kann eine Wand einfach entfernt werden?',
    a: 'Nein. Vor einem Wanddurchbruch müssen Statik, Leitungsführung, Deckenanschluss, Bodenanschluss und mögliche Genehmigungsfragen geprüft werden. Erst danach lässt sich eine sichere und sinnvolle Lösung planen.',
  },
  {
    q: 'Wie koordiniert Radex Innenausbau, Elektro und Sanitär?',
    a: 'Radex plant die Gewerke in der richtigen Reihenfolge. Elektro, SHK und Leitungen werden vor Trockenbau, Böden und Oberflächen berücksichtigt. Im SHK-Bereich bringt Radex die Meisterkompetenz von Bernd Knoop ein.',
  },
  {
    q: 'Kann Innenausbau im bewohnten Objekt stattfinden?',
    a: 'Das hängt vom Umfang ab. Einzelne Räume oder Etappen sind oft möglich. Wenn Bad, Küche, Elektro, Heizung oder größere Rückbauarbeiten betroffen sind, kann eine temporäre Ausweichlösung sinnvoller sein.',
  },
  {
    q: 'Was kostet Innenausbau im Rhein-Main-Gebiet?',
    a: 'Die Kosten hängen von Umfang, Zustand, Technik, Materialien und beteiligten Gewerken ab. Ein realistisches Angebot entsteht erst nach Begehung und klarer Leistungsabstimmung.',
  },
  {
    q: 'Bietet Radex Innenausbau für Wohnungen und Häuser an?',
    a: 'Ja. Radex koordiniert Innenausbau für Eigentumswohnungen, Altbauwohnungen, Einfamilienhäuser, Doppelhaushälften, Reihenhäuser und Bestandshäuser im Rhein-Main-Gebiet.',
  },
];

export default function InteriorConstruction() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useSeo({
    title: 'Innenausbau & Umbau Rhein-Main | Trockenbau & Böden | Radex',
    description:
      'Innenausbau und Umbau im Rhein-Main-Gebiet: Raumaufteilung, Trockenbau, Böden, Türen, Elektro, Heizung und Sanitär aus einer Hand.',
    path: '/innenausbau-umbau-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Innenausbau & Umbau',
        description:
          'Innenausbau und Umbau im Rhein-Main-Gebiet: Raumaufteilung, Trockenbau, Böden, Türen, Elektro, Heizung und Sanitär aus einer Hand.',
        path: '/innenausbau-umbau-rhein-main',
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
              SHK-Meisterbetrieb · Innenausbau & Umbau · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Innenausbau & Umbau im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Räume neu ordnen, Technik sauber integrieren und Bestandsflächen sinnvoll modernisieren.
            </p>
            <p className="br-hero-text">
              Radex koordiniert Innenausbau- und Umbauprojekte als Generalunternehmer im Rhein-Main-Gebiet: Raumaufteilung,
              Trockenbau, Böden, Wände, Decken, Türen, Elektro, Heizung und Sanitär aus einer Hand.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>Alles aus einer Hand</li>
              <li>Technik vor Oberfläche</li>
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
          aria-label="Innenausbau und Umbau in einem Wohnobjekt im Rhein-Main-Gebiet"
          title="Innenausbau & Umbau Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Für wen Innenausbau und Umbau sinnvoll ist</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Immer dann, wenn Grundriss, Nutzung oder Technik nicht mehr zu den heutigen Anforderungen passen.
            </p>
          </div>
          <ImageCardGrid cards={audienceCards} />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, ob Sie Wohnungen, Häuser oder Gewerbeflächen modernisieren: Erfolgreicher Innenausbau beginnt mit
        einer klaren Leistungswahl. Im nächsten Abschnitt zeigen wir typische Umbaumaßnahmen im Überblick.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Leistungen beim Innenausbau und Umbau</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Maßnahmen werden immer objektbezogen und in der richtigen Reihenfolge geplant.
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
                <Link key={service.title} to={service.to} className="br-service-card">
                  {Inner}
                </Link>
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
        Gute Oberflächen allein reichen nicht – entscheidend ist, wer Planung, Technik und Ausbau zusammenführt. Deshalb
        setzen Eigentümer im Rhein-Main-Gebiet auf Radex.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex für Innenausbau wählen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Koordination aus einer Hand, SHK-Meisterkompetenz und die richtige Gewerkereihenfolge – damit Umbau und
              Technik sauber ineinandergreifen.
            </p>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <SectionTransition>
        Von der ersten Anfrage bis zur Übergabe begleiten wir Ihr Innenausbauprojekt Schritt für Schritt. So wissen Sie
        jederzeit, welche Phase als Nächstes folgt.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihr Innenausbau- und Umbauprojekt mit Radex ab"
        intro="Ein strukturierter Ablauf ist entscheidend für reibungslosen Umbau. Von der Projektanfrage bis zur Übergabe haben Sie einen festen Ansprechpartner."
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
            <h2 className="br-section-title">Kosten für Innenausbau und Umbau</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten hängen stark von Fläche, Zustand, Technik und Umfang ab. Die Angaben dienen nur der Orientierung.
            </p>
          </div>
          <div className="br-costs-grid">
            {costCards.map((card) => {
              const body = (
                <>
                  <div className="br-cost-category-img" style={{ backgroundImage: `url(${card.image})` }} />
                  <div className="br-cost-header">
                    <h3>{card.title}</h3>
                    <p className="br-cost-price">
                      <span>{card.price}</span>
                    </p>
                  </div>
                  <p className="br-cost-desc">{card.desc}</p>
                </>
              );
              return card.to ? (
                <Link key={card.title} to={card.to} className="br-cost-card">
                  {body}
                </Link>
              ) : (
                <div key={card.title} className="br-cost-card" style={{ cursor: 'default' }}>
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionTransition>
        Richtwerte helfen bei der Orientierung – echte Baustellen zeigen, wie wir arbeiten. Deshalb geben wir Ihnen
        authentische Einblicke in Innenausbau- und Umbauprojekte.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Räume. Wir zeigen Ihnen den Weg dorthin. Mit Radex Live erhalten Sie authentische Einblicke in Trockenbau, Umbau und Innenausbau aus dem Rhein-Main-Gebiet – von der Bestandsaufnahme bis zur Übergabe."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Umbauprojekte als SHK-Meister & Betriebsleiter – persönlich, transparent und fachlich verantwortlich für Heizung, Sanitär und Gebäudetechnik."
        projects={radexLiveProjects}
      />

      <SectionTransition>
        Offen beantwortet: Umbau, Trockenbau, Wanddurchbruch und bewohnter Bestand – damit Sie den nächsten Schritt mit
        ruhigem Gefühl gehen können.
      </SectionTransition>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen zu Innenausbau & Umbau" />

      <ContactForm
        kicker="Innenausbau & Umbau anfragen"
        title="Jetzt unverbindlich beraten lassen"
        intro="Sie planen Innenausbau, Umbau oder Raumaufteilung im Rhein-Main-Gebiet? Senden Sie uns Fotos Ihres Objekts bequem per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin. Gemeinsam prüfen wir, welche Maßnahmen sinnvoll sind."
        photoTip="Senden Sie uns Bilder Ihrer Räume bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Raumaufteilung, Trockenbau, Böden, Wanddurchbruch)..."
      />

      <SeoKnowledgeDrawer
        title="Alles, was Sie über Innenausbau und Umbau wissen sollten"
        intro={innenausbauSeoIntro}
        sections={innenausbauSeoSections}
        ctaLabel="Innenausbau anfragen"
        panelId="innenausbau-seo-panel"
      />
    </main>
  );
}
