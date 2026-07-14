import { useEffect } from 'react';
import {
  Camera,
  Award,
  ShieldCheck,
  Users,
  CalendarCheck,
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
  SeoTocSection,
  RadexLiveSection,
  ProcessSteps,
  SectionTransition,
  ImageCardGrid,
} from '../components/landing/SharedLandingParts';
import {
  gewerbeObjektsanierungSeoIntro,
  gewerbeObjektsanierungSeoSections,
} from '../data/gewerbeObjektsanierungSeoContent';

const HERO_IMAGE = '/img/gewerbesanierung-hero.webp';

const audienceCards = [
  {
    title: 'Bürobetreiber',
    desc: 'Wenn Raumaufteilung, Akustik, Licht, Netzwerk und Arbeitsplätze neu gedacht werden müssen.',
    image: '/img/gu-card-gewerbe.png',
    imageAlt: 'Modernes Büro während einer Gewerbesanierung',
  },
  {
    title: 'Praxisinhaber',
    desc: 'Wenn Sanitär, Hygiene, Zugänge, Wartebereiche und technische Anforderungen zusammenkommen.',
    image: '/img/heizung-service-sanitaer.png',
    imageAlt: 'Sanitärtechnik und Hygienebereiche in einer Praxis',
  },
  {
    title: 'Einzelhandel & Ladenflächen',
    desc: 'Wenn Kundenführung, Beleuchtung, Boden und Nutzung für den Betrieb stimmen müssen.',
    image: '/img/haus-service-innenausbau.png',
    imageAlt: 'Innenausbau einer Ladenfläche',
  },
  {
    title: 'Vermieter & Mieterausbau',
    desc: 'Wenn Leerstand, Neuvermietung oder die Vorbereitung auf einen neuen Mieter im Vordergrund stehen.',
    image: '/img/haus-service-elektro.png',
    imageAlt: 'Elektroinstallation beim Mieterausbau',
  },
];

const serviceCards = [
  {
    title: 'Büroumbau',
    desc: 'Trockenbau, Akustik, Licht, Arbeitsplätze und Raumaufteilung für neue Nutzungsanforderungen.',
    image: '/img/gu-card-gewerbe.png',
    imageAlt: 'Bürofläche während des Umbaus',
  },
  {
    title: 'Praxisumbau',
    desc: 'Raumstruktur, Sanitär, Hygiene, Wartebereiche und technische Anforderungen abgestimmt umsetzen.',
    image: '/img/heizung-service-sanitaer.png',
    imageAlt: 'Sanitär- und Technikbereich einer Praxis',
  },
  {
    title: 'Ladenfläche modernisieren',
    desc: 'Beleuchtung, Boden, Kassenbereich, Schaufensterwirkung und Aufenthaltsqualität verbessern.',
    image: '/img/haus-service-innenausbau.png',
    imageAlt: 'Innenausbau einer modernen Ladenfläche',
  },
  {
    title: 'Mieterausbau',
    desc: 'Fläche gezielt für den neuen Mieter vorbereiten und schlüsselfertig übergeben – terminsicher.',
    image: '/img/haus-service-elektro.png',
    imageAlt: 'Elektro- und Ausbauarbeiten beim Mieterausbau',
    to: '/mieterausbau-rhein-main',
  },
];

const whyRadexCards = [
  {
    title: 'Ein Ansprechpartner',
    desc: 'Planung, Koordination und Ausführung aus einer Hand – ohne Schnittstellenchaos.',
    icon: UserCheck,
  },
  {
    title: 'Termintreue Abwicklung',
    desc: 'Abgestimmte Bauabläufe reduzieren Leerstand und sichern den Betrieb.',
    icon: CalendarCheck,
  },
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Heizung, Sanitär und Gebäudetechnik unter Meisterverantwortung von Bernd Knoop.',
    icon: Award,
  },
  {
    title: 'Alle Gewerke koordiniert',
    desc: 'Elektro, Trockenbau, Innenausbau und weitere Fachbetriebe als Gesamtprojekt.',
    icon: Users,
  },
  {
    title: 'Transparente Festpreise',
    desc: 'Nach Besichtigung ein nachvollziehbares Angebot – ohne versteckte Kosten.',
    icon: ShieldCheck,
  },
  {
    title: 'Regional im Rhein-Main-Gebiet',
    desc: 'Über 60 Städte – kurze Wege und lokale Erfahrung mit Gewerbeflächen.',
    icon: MapPin,
  },
];

const processSteps = [
  {
    title: 'Projektanfrage',
    desc: 'Wir besprechen Nutzung, Zeitfenster und Ziele – Büro, Praxis, Laden oder Mieterausbau.',
  },
  {
    title: 'Begehung vor Ort',
    desc: 'Bestandsaufnahme von Raumstruktur, Technik, Sanitär, Elektro und Oberflächen.',
  },
  {
    title: 'Nutzung & Ziel definieren',
    desc: 'Anforderungen von Betreiber, Mieter oder Verwaltung werden klar festgehalten.',
  },
  {
    title: 'Gewerke & Reihenfolge planen',
    desc: 'Rückbau, Technik und Ausbau werden so geplant, dass Betrieb und Termine passen.',
  },
  {
    title: 'Ausführung & Koordination',
    desc: 'SHK, Elektro, Trockenbau und Innenausbau greifen getaktet ineinander.',
  },
  {
    title: 'Übergabe',
    desc: 'Abnahme, Dokumentation und nutzungsgerechte Übergabe – auch bei Mietbeginn.',
  },
];

const costCards = [
  {
    title: 'Teilumbau',
    price: 'projektbezogen',
    desc: 'Abschnittsweise Modernisierung – Umfang und Kosten nach Begehung.',
    image: '/img/gu-card-gewerbe.png',
  },
  {
    title: 'Bürofläche',
    price: 'nach Begehung',
    desc: 'Abhängig von Fläche, Akustik, Licht, Elektro und Ausbauqualität.',
    image: '/img/haus-service-elektro.png',
  },
  {
    title: 'Praxis oder Laden',
    price: 'individuell kalkuliert',
    desc: 'Hygiene, Sanitär, Kundenführung und Technik fließen in die Kalkulation ein.',
    image: '/img/heizung-service-sanitaer.png',
  },
  {
    title: 'Mieterausbau',
    price: 'objektbezogen',
    desc: 'Übergabezustand, Mietbeginn und Mieteranforderungen bestimmen den Rahmen.',
    image: '/img/haus-service-innenausbau.png',
  },
];

const radexLiveProjects = [
  {
    image: '/img/gewerbesanierung-radex-live.webp',
    badge: 'LIVE',
    title: 'Gewerbesanierung Bürofläche',
    location: 'Eschborn',
    desc: 'Raumaufteilung, Licht und Technik – laufende Einblicke in die Bauphase.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/gu-card-gewerbe.png',
    badge: 'LIVE',
    title: 'Objektsanierung Bestandsfläche',
    location: 'Frankfurt am Main',
    desc: 'Mehrere Gewerke koordiniert – authentische Baustelleneinblicke.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/heizung-service-sanitaer.png',
    badge: 'Abgeschlossen',
    title: 'Praxisumbau Sanitär & Technik',
    location: 'Darmstadt',
    desc: 'Hygienebereiche, Leitungen und Innenausbau – fertig übergeben.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/haus-service-innenausbau.png',
    badge: 'Vorher & Nachher',
    title: 'Ladenfläche modernisiert',
    location: 'Neu-Isenburg',
    desc: 'Boden, Beleuchtung und Aufenthaltsqualität – sichtbarer Vergleich.',
    cta: 'Vorher & Nachher ansehen',
  },
  {
    image: '/img/haus-service-elektro.png',
    badge: 'Video',
    title: 'Baustelleneinblick Gewerbe',
    location: 'Dreieich',
    desc: 'Elektro, Innenausbau und Übergabevorbereitung ohne Hochglanzfilter.',
    cta: 'Video ansehen',
  },
  {
    image: '/img/gu-card-gewerbe.png',
    badge: 'Abgeschlossen',
    title: 'Mieterausbau schlüsselfertig',
    location: 'Offenbach am Main',
    desc: 'Fläche für neuen Mieter vorbereitet und termingerecht übergeben.',
    cta: 'Projekt ansehen',
  },
];

const faqsData = [
  {
    q: 'Was gehört zu einer Gewerbe- und Objektsanierung?',
    a: 'Dazu können Rückbau, Bestandsaufnahme, Innenausbau, Trockenbau, Elektro, Netzwerk, Heizung, Sanitär, Böden, Decken, Oberflächen, Brandschutzthemen, Mieterausbau und die Modernisierung gewerblicher Flächen gehören.',
  },
  {
    q: 'Für welche Gewerbeflächen arbeitet Radex?',
    a: 'Radex begleitet Büroflächen, Praxen, Ladenflächen, Dienstleistungsflächen, Verwaltungsbereiche, Mietflächen, gemischt genutzte Objekte und gewerbliche Bestandsflächen im Rhein-Main-Gebiet.',
  },
  {
    q: 'Was ist der Unterschied zwischen Gewerbesanierung und Objektsanierung?',
    a: 'Gewerbesanierung bezieht sich oft auf eine konkrete gewerbliche Fläche wie Büro, Praxis oder Laden. Objektsanierung kann größer gedacht sein und mehrere Einheiten oder gemeinschaftliche Bereiche betreffen.',
  },
  {
    q: 'Kann Radex mehrere Gewerke bei einer Objektsanierung koordinieren?',
    a: 'Ja. Radex koordiniert SHK, Elektro, Trockenbau, Innenausbau, Böden, Oberflächen, Rückbau und weitere Fachgewerke als Gesamtprojekt.',
  },
  {
    q: 'Kann eine Gewerbesanierung im laufenden Betrieb stattfinden?',
    a: 'Das hängt vom Umfang ab. Teilbereiche können häufig abschnittsweise saniert werden. Bei größeren Eingriffen kann eine temporäre Sperrung sinnvoller sein.',
  },
  {
    q: 'Was kostet eine Gewerbe- und Objektsanierung?',
    a: 'Die Kosten hängen von Fläche, Zustand, Nutzung, Gewerken, Technik, Materialqualität, Zeitfenster und möglicher Fachplanung ab. Ein realistisches Angebot entsteht nach Begehung.',
  },
  {
    q: 'Was ist beim Mieterausbau wichtig?',
    a: 'Beim Mieterausbau müssen Übergabezustand, Mietbeginn, Anforderungen des Mieters, technische Anschlüsse, Raumaufteilung, Sanitär, Elektro, Böden und Oberflächen früh geklärt werden.',
  },
  {
    q: 'Muss eine Objektsanierung genehmigt werden?',
    a: 'Das hängt vom Umfang ab. Wenn Nutzungsänderungen, Brandschutz, Fluchtwege, tragende Bauteile oder öffentlich zugängliche Bereiche betroffen sind, können Fachplanung oder Abstimmung nötig werden.',
  },
  {
    q: 'Arbeitet Radex auch für Hausverwaltungen?',
    a: 'Ja. Radex begleitet Hausverwaltungen bei der Sanierung einzelner Gewerbeeinheiten, gemeinschaftlicher Bereiche und gewerblicher Bestandsflächen.',
  },
  {
    q: 'In welchen Städten bietet Radex Gewerbe- und Objektsanierung an?',
    a: 'Radex ist in über 60 Städten und Gemeinden im Rhein-Main-Gebiet tätig, unter anderem in Rödermark, Eschborn, Bad Homburg, Oberursel, Neu-Isenburg, Dreieich, Langen, Darmstadt, Wiesbaden, Mainz, Hanau, Rodgau, Mörfelden-Walldorf und Groß-Gerau.',
  },
];

export default function CommercialRenovation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Gewerbe- & Objektsanierung Rhein-Main | Büro, Praxis & Laden | Radex',
    description:
      'Gewerbe- und Objektsanierung im Rhein-Main-Gebiet: Büro, Praxis, Laden, Mieterausbau und Objektsanierung mit minimaler Betriebsunterbrechung. Jetzt beraten lassen!',
    path: '/gewerbe-objektsanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Gewerbe- und Objektsanierung',
        description:
          'Gewerbe- und Objektsanierung im Rhein-Main-Gebiet für Büro, Praxis, Ladenfläche und Mieterausbau.',
        path: '/gewerbe-objektsanierung-rhein-main',
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
              SHK-Meisterbetrieb · Gewerbe &amp; Objekt · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Gewerbe- und Objektsanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Bestandsflächen modernisieren, ohne den Betrieb unnötig zu stören.
            </p>
            <p className="br-hero-text">
              Radex koordiniert Gewerbe- und Objektsanierungen für Büro, Praxis, Ladenfläche und Mieterausbau. Heizung,
              Sanitär und Gebäudetechnik werden als SHK-Meisterbetrieb durch Bernd Knoop geführt; weitere Gewerke werden
              abgestimmt koordiniert. Ergänzend:{' '}
              <Link to="/gewerbesanierung-rhein-main">Gewerbesanierung</Link>.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>Büro · Praxis · Laden</li>
              <li>Mieterausbau</li>
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
          aria-label="Gewerbefläche während einer Objektsanierung im Rhein-Main-Gebiet"
          title="Gewerbe- und Objektsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Für wen Gewerbe- und Objektsanierung wichtig ist</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Wenn Flächen funktionieren müssen, zählen Planung, Zeit und saubere Schnittstellen – für Betreiber,
              Vermieter und Hausverwaltungen.
            </p>
          </div>
          <ImageCardGrid cards={audienceCards} />
        </div>
      </section>

      <SectionTransition>
        Ganz gleich, ob Büro, Praxis, Laden oder Mieterausbau: Jede Fläche wird nach Nutzung, Zustand und Ziel beurteilt.
        Im nächsten Abschnitt zeigen wir typische Projekte.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Typische Gewerbe- und Objektprojekte</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Von der Raumstruktur bis zu Sanitär und Elektro – wir planen die Gewerke so, dass Übergabe und Betrieb
              zusammenpassen.
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
        Optik allein reicht nicht – entscheidend ist, wer Termine, Technik und Innenausbau verantwortet. Deshalb setzen
        Betreiber und Vermieter im Rhein-Main-Gebiet auf Radex.
      </SectionTransition>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex für Gewerbe &amp; Objekt wählen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Termintreue, Meisterkompetenz und klare Kommunikation – damit Leerstand und Betriebsstörungen gering
              bleiben.
            </p>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <SectionTransition>
        Von der Anfrage bis zur Übergabe begleiten wir Ihr Objektprojekt Schritt für Schritt.
      </SectionTransition>

      <ProcessSteps
        title="So läuft Ihre Gewerbe- und Objektsanierung mit Radex ab"
        intro="Ein strukturierter Ablauf ist entscheidend für Termine und Nutzung. Von der Erstberatung bis zur Übergabe haben Sie einen festen Ansprechpartner."
        steps={processSteps}
        image="/img/gu-card-gewerbe.png"
      />

      <SectionTransition>
        Nach dem Ablauf stellt sich oft die Kostenfrage. Die folgenden Kategorien geben Orientierung – das konkrete
        Angebot folgt nach der Begehung.
      </SectionTransition>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Kosten einer Gewerbe- und Objektsanierung</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten hängen von Fläche, Zustand, Nutzung, Zeitfenster und Fachgewerken ab – nach Bestandsaufnahme
              erstellen wir ein konkretes Angebot.
            </p>
          </div>
          <div className="br-costs-grid">
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
        Richtwerte helfen bei der Orientierung – echte Baustellen zeigen, wie wir arbeiten.
      </SectionTransition>

      <RadexLiveSection
        title="Schauen Sie uns bei der Arbeit über die Schulter."
        intro="Hochglanzbilder zeigen fertige Flächen. Wir zeigen Ihnen den Weg dorthin. Mit Radex Live erhalten Sie authentische Einblicke in Gewerbe- und Objektsanierungen aus dem Rhein-Main-Gebiet – vom Rückbau bis zur Übergabe."
        showWelcomeVideo
        berndIntroText="Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihre Gewerbe- und Objektsanierung als SHK-Meister & Betriebsleiter – persönlich, transparent und terminsicher."
        projects={radexLiveProjects}
      />

      <SectionTransition>
        Offen beantwortet: Gewerbe vs. Objekt, laufender Betrieb, Mieterausbau und Kosten.
      </SectionTransition>

      <FaqAccordion faqs={faqsData} title="Häufig gestellte Fragen zur Gewerbe- und Objektsanierung" />

      <ContactForm
        kicker="Gewerbe- & Objektsanierung anfragen"
        title="Jetzt unverbindlich beraten lassen"
        intro="Sie planen einen Büroumbau, Praxisumbau, Ladenmodernisierung oder Mieterausbau im Rhein-Main-Gebiet? Senden Sie uns Fotos Ihrer Fläche bequem per WhatsApp oder vereinbaren Sie einen persönlichen Beratungstermin."
        photoTip="Senden Sie uns Bilder Ihrer Gewerbefläche bequem per WhatsApp – für eine erste fachliche Einschätzung."
        placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Büroumbau, Praxis, Laden, Mieterausbau, Termin vor Mietbeginn)..."
      />

      <SeoTocSection
        title="Alles, was Sie über Gewerbe- und Objektsanierung wissen sollten"
        intro={gewerbeObjektsanierungSeoIntro}
        sections={gewerbeObjektsanierungSeoSections}
        showAllContent
      />
    </main>
  );
}
