import { useEffect } from 'react';
import { RADEX_LIVE_URL } from '../constants/brand';
import { Camera, Award, Users, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import NavLandingCards from '../components/NavLandingCards';
import SanierungskostenRechner from '../components/SanierungskostenRechner';
import { badsanierungCards } from '../data/navigation';
import {
  SharedCTABlock,
  PremiumIconCards,
  FaqAccordion,
  SeoAccordionSection,
  RadexLiveSection,
  ProcessSteps,
  LandingContactSection,
} from '../components/landing/SharedLandingParts';

const HERO_IMAGE = '/img/Komplettbadsanierung.webp';

const trustCards = [
  { title: 'SHK-meistergeführter Fachbetrieb', icon: <Award size={40} color="#f97316" /> },
  { title: 'Generalunternehmer für alle Gewerke', icon: <Users size={40} color="#f97316" /> },
  { title: 'Festpreisangebote', icon: <ShieldCheck size={40} color="#f97316" /> },
  { title: 'Über 500 Projekte', icon: <CheckCircle2 size={40} color="#f97316" /> },
  { title: 'Zertifiziert für Schimmel & Asbest', icon: <ShieldCheck size={40} color="#f97316" /> },
  { title: 'Im gesamten Rhein-Main-Gebiet', icon: <MapPin size={40} color="#f97316" /> },
];

const whyRadexCards = [
  { title: 'SHK-meistergeführter Fachbetrieb', desc: 'Beratung und technische Verantwortung durch einen eingetragenen SHK-Meisterbetrieb.', icon: Award },
  { title: 'Alles aus einer Hand', desc: 'Sanitär, Elektro, Fliesen, Trockenbau und alle weiteren Gewerke professionell koordiniert.', icon: Users },
  { title: 'Ein Ansprechpartner', desc: 'Während der gesamten Badsanierung haben Sie einen festen Ansprechpartner.', icon: CheckCircle2 },
  { title: 'Transparente Festpreisangebote', desc: 'Klare Leistungen ohne versteckte Kosten.', icon: ShieldCheck },
  { title: 'Über 500 abgeschlossene Projekte', desc: 'Langjährige Erfahrung bei privaten und gewerblichen Sanierungsprojekten.', icon: Award },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Unsere Teams sind täglich im gesamten Rhein-Main-Gebiet im Einsatz.', icon: MapPin },
];

const referenceCards = [
  { image: '/img/bad1.webp', location: 'Frankfurt am Main', size: '8 m²', desc: 'Komplettbadsanierung mit bodengleicher Dusche und großformatigen Fliesen.' },
  { image: '/img/Komplettbadsanierung.webp', location: 'Darmstadt', size: '10 m²', desc: 'Modernes Wohlfühlbad mit hochwertiger Ausstattung und indirekter Beleuchtung.' },
  { image: '/img/bad1.webp', location: 'Offenbach am Main', size: '6 m²', desc: 'Badmodernisierung mit Dusche statt Badewanne und neuen Sanitärobjekten.' },
  { image: '/img/wohnzimmer.webp', location: 'Rodgau', size: '9 m²', desc: 'Barrierefreies Bad mit bodengleicher Dusche und durchdachten Bewegungsflächen.' },
  { image: '/img/bad1.webp', location: 'Dreieich', size: '4 m²', desc: 'Gäste-WC modernisiert – kompakt, funktional und hochwertig gestaltet.' },
  { image: '/img/Komplettbadsanierung.webp', location: 'Rödermark', size: '12 m²', desc: 'Premium-Badsanierung mit Walk-in-Dusche und freistehendem Waschtisch.' },
];

const costTeaserCards = [
  { title: 'Basis', desc: 'Ideal für funktionale Modernisierungen.', to: '/badsanierung-kosten-rhein-main' },
  { title: 'Komfort', desc: 'Die häufigste Wahl unserer Kunden.', to: '/badsanierung-kosten-rhein-main' },
  { title: 'Premium', desc: 'Hochwertige Ausstattung und individuelle Gestaltung.', to: '/badsanierung-kosten-rhein-main' },
];

const processSteps = [
  { title: 'Kostenlose Erstberatung' },
  { title: 'Besichtigung & Aufmaß' },
  { title: 'Planung Ihres Badezimmers' },
  { title: 'Festpreisangebot' },
  { title: 'Koordinierte Ausführung aller Gewerke' },
  { title: 'Schlüsselfertige Übergabe' },
];

const faqsData = [
  { q: 'Wie lange dauert eine Badsanierung?', a: 'Eine typische Komplettbadsanierung dauert in der Regel 2–4 Wochen, abhängig von Umfang, Materialverfügbarkeit und baulichen Gegebenheiten. Nach der Besichtigung erhalten Sie einen realistischen Zeitplan.' },
  { q: 'Was kostet eine Badsanierung?', a: 'Die Kosten hängen von Badgröße, Zustand der Leitungen, gewünschter Ausstattung und Umfang der Arbeiten ab. Mit unserem Sanierungskosten-Rechner erhalten Sie eine erste Orientierung – das verbindliche Festpreisangebot folgt nach Besichtigung.' },
  { q: 'Muss ich während der Bauarbeiten ausziehen?', a: 'Bei einer Badsanierung in der eigenen Wohnung ist ein temporärer Auszug in der Regel nicht nötig. Wir planen die Arbeiten so, dass die Nutzung anderer Räume möglich bleibt und die Baustelle sauber abgetrennt wird.' },
  { q: 'Koordinieren Sie alle Gewerke?', a: 'Ja. Radex koordiniert als Generalunternehmer alle notwendigen Gewerke – Sanitär, Elektro, Trockenbau, Fliesen und weitere Fachbetriebe – aus einer Hand.' },
  { q: 'Erhalte ich ein Festpreisangebot?', a: 'Ja. Nach Besichtigung und Abstimmung des Umfangs erstellen wir ein transparentes Festpreisangebot ohne versteckte Kosten.' },
  { q: 'Kann ich mein Badezimmer individuell planen?', a: 'Ja. Gemeinsam entwickeln wir ein individuelles Badkonzept – von Grundriss und Materialauswahl bis zur Ausstattung.' },
  { q: 'Arbeiten Sie im gesamten Rhein-Main-Gebiet?', a: 'Ja. Radex ist in über 60 Städten und Gemeinden im Rhein-Main-Gebiet tätig, darunter Frankfurt, Offenbach, Darmstadt, Hanau, Rodgau, Dreieich und Rödermark.' },
  { q: 'Kann ich Fotos meines Badezimmers per WhatsApp senden?', a: 'Ja. Senden Sie uns Fotos per WhatsApp und erhalten Sie eine erste fachliche Einschätzung zu Ihrem Projekt.' },
];

const seoAccordions = [
  {
    title: 'Komplettbadsanierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">Bei einer Komplettbadsanierung wird das Bad vollständig entkernt und neu aufgebaut – von der Rohinstallation über Abdichtung und Fliesen bis zur schlüsselfertigen Übergabe. Richtig, wenn Leitungen, Abdichtung und Grundsubstanz erneuert werden müssen.</p>
        <p className="text-gray-600">Radex plant und koordiniert <Link to="/komplettbadsanierung-rhein-main">Komplettbadsanierungen</Link> im gesamten Rhein-Main-Gebiet als SHK-Meisterbetrieb und <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link>.</p>
      </>
    ),
  },
  {
    title: 'Badmodernisierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">Badmodernisierung bedeutet mehr Komfort, bessere Optik und neue Funktionen mit weniger Bauaufwand – neue Armaturen, moderne Beleuchtung oder eine zeitgemäße Dusche. Sinnvoll, wenn die Grundsubstanz noch in Ordnung ist.</p>
        <p className="text-gray-600">Erfahren Sie mehr über <Link to="/dusche-statt-badewanne-rhein-main">Dusche statt Badewanne</Link> und <Link to="/barrierefreies-bad-rhein-main">barrierefreie Bäder</Link>.</p>
      </>
    ),
  },
  {
    title: 'Badplanung',
    content: (
      <>
        <p className="mb-4 text-gray-600">Vor dem ersten Handgriff steht die Planung: Bedarf, Grundriss, Materialwünsche und Budget. Eine gute Planung ist die Grundlage für eine verlässliche Kostenaussage und einen reibungslosen Ablauf.</p>
        <p className="text-gray-600">Details zum Ablauf finden Sie auf der Seite <Link to="/badsanierung-ablauf-rhein-main">Badsanierung Planung & Ablauf</Link>.</p>
      </>
    ),
  },
  {
    title: 'Sanitärinstallation',
    content: (
      <>
        <p className="mb-4 text-gray-600">Neue Wasserleitungen, Anschluss von Dusche, Wanne, WC und Waschtisch, Erneuerung der Entwässerung und Integration von Heizkörpern – als SHK-Meisterbetrieb führen wir Sanitärarbeiten selbst aus.</p>
        <p className="text-gray-600">Mehr zu <Link to="/heizung-sanitaer-rhein-main">Heizung & Sanitär</Link> im Rhein-Main-Gebiet.</p>
      </>
    ),
  },
  {
    title: 'Fliesen & Oberflächen',
    content: (
      <p className="text-gray-600">Großformatige Bodenfliesen, Wandfliesen im Wunschformat oder Mosaik – durch routinierte Fliesenleger, die mit modernen Abdichtungssystemen vertraut sind. Radex koordiniert Fliesenarbeiten als Teil der Gesamtplanung.</p>
    ),
  },
  {
    title: 'Dusche statt Badewanne',
    content: (
      <>
        <p className="mb-4 text-gray-600">Der Umbau von Wanne zu Dusche – aus Komfort-, Platz- oder Altersgründen. Entwässerung, Abdichtung und Installationsführung werden sorgfältig geplant.</p>
        <p className="text-gray-600"><Link to="/dusche-statt-badewanne-rhein-main">Dusche statt Badewanne</Link> – individuell geplant und professionell umgesetzt.</p>
      </>
    ),
  },
  {
    title: 'Barrierefreies Bad',
    content: (
      <>
        <p className="mb-4 text-gray-600">Bodengleiche Duschen, Haltegriffe und gut geplante Bewegungsflächen – mehr Komfort für alle und die langfristig sichere Nutzung der eigenen Wohnung.</p>
        <p className="text-gray-600"><Link to="/barrierefreies-bad-rhein-main">Barrierefreies Bad planen</Link> mit Radex.</p>
      </>
    ),
  },
  {
    title: 'Gäste-WC',
    content: (
      <>
        <p className="mb-4 text-gray-600">Auf kleiner Fläche ein funktionales, helles Bad schaffen – Radex kennt die typischen Grundrisse im Rhein-Main-Gebiet und entwickelt passende Lösungen für Gäste-WCs.</p>
        <p className="text-gray-600"><Link to="/gaeste-wc-sanieren-rhein-main">Gäste-WC modernisieren</Link>.</p>
      </>
    ),
  },
  {
    title: 'Kosten einer Badsanierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">Die Kosten hängen von Badgröße, Umfang der Arbeiten, Zustand der Leitungen und gewählter Ausstattung ab. Nutzen Sie unseren <Link to="/badsanierung-kosten-rhein-main">Badsanierung Kosten-Rechner</Link> für eine erste Orientierung.</p>
        <p className="text-gray-600">Weitere Kostenratgeber: <Link to="/wohnung-sanieren-kosten-rhein-main">Wohnung sanieren Kosten</Link>, <Link to="/haus-sanieren-kosten-rhein-main">Haus sanieren Kosten</Link>.</p>
      </>
    ),
  },
  {
    title: 'Fördermöglichkeiten',
    content: (
      <>
        <p className="mb-4 text-gray-600">Bei energetischen Maßnahmen im Zusammenhang mit einer Sanierung können Fördermittel (KfW/BAFA) relevant sein – etwa bei Heizungstausch oder energetischer Modernisierung.</p>
        <p className="text-gray-600">Mehr zu <Link to="/energetische-sanierung-rhein-main">energetischer Sanierung & Förderung</Link>.</p>
      </>
    ),
  },
];

export default function BadsanierungHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Badsanierung im Rhein-Main-Gebiet | Bad sanieren vom SHK-Meisterbetrieb | Radex',
    description: 'Professionelle Badsanierung im Rhein-Main-Gebiet. Komplettbad, Badmodernisierung, Dusche statt Badewanne, barrierefreie Bäder und Sanitärinstallation – alles aus einer Hand.',
    path: '/badsanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Badsanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">Ihr neues Badezimmer beginnt mit der richtigen Planung.</p>
            <p className="br-hero-text">
              Ein neues Badezimmer ist eine Investition in Wohnkomfort, Lebensqualität und den Wert Ihrer Immobilie. Als SHK-meistergeführter Fachbetrieb übernimmt Radex die komplette Badsanierung im gesamten Rhein-Main-Gebiet – von der ersten Beratung über Sanitär-, Elektro- und Fliesenarbeiten bis zur schlüsselfertigen Übergabe. Sie erhalten alle Leistungen aus einer Hand und haben während des gesamten Projekts einen festen Ansprechpartner.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
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

      <section className="br-section">
        <div className="container">
          <div className="br-benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {trustCards.map((card) => (
              <div key={card.title} className="br-benefit-card" style={{ textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div className="br-benefit-icon">{card.icon}</div>
                <h3 style={{ fontSize: '16px' }}>{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NavLandingCards
        title="Wählen Sie Ihr Badsanierungs-Thema"
        subtitle="Nicht jede Badsanierung ist gleich. Wählen Sie den Bereich aus, der am besten zu Ihrem Projekt passt. Auf den jeweiligen Detailseiten finden Sie ausführliche Informationen zu Planung, Ablauf, Kosten und individuellen Lösungen."
        cards={badsanierungCards}
      />

      <section className="br-section">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 className="br-section-title">Noch unsicher, welche Lösung die richtige ist?</h2>
          <p className="br-section-subtitle mb-8">
            Nicht jedes Badezimmer passt in eine Standardlösung. Senden Sie uns einfach Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie eine kostenlose Beratung. Gemeinsam finden wir die passende Lösung für Ihr Projekt.
          </p>
          <SharedCTABlock centered />
        </div>
      </section>

      <RadexLiveSection
        intro="Eine Badsanierung ist Vertrauenssache. Deshalb zeigen wir Ihnen nicht nur fertige Badezimmer, sondern auch echte Einblicke in unsere tägliche Arbeit – von der Entkernung über die Sanitärinstallation bis zur fertigen Übergabe."
        heroImage="/img/schnelle-badsanierung-radex-live.webp"
      />

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex wählen</h2>
            <p className="br-section-subtitle">Eine Badsanierung besteht aus vielen einzelnen Arbeitsschritten. Genau dafür steht Radex.</p>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Das Ergebnis spricht für sich.</h2>
            <p className="br-section-subtitle">Entdecken Sie eine Auswahl abgeschlossener Badsanierungsprojekte im Rhein-Main-Gebiet.</p>
          </div>
          <div className="br-projects-grid">
            {referenceCards.map((ref) => (
              <div key={ref.location + ref.size} className="br-project-card">
                <div className="br-project-img" style={{ backgroundImage: `url(${ref.image})` }} />
                <div className="br-project-info">
                  <h4>{ref.location}</h4>
                  <p>{ref.size}</p>
                  <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>{ref.desc}</p>
                  <span className="br-btn-orange" style={{ display: 'inline-block', marginTop: '12px', fontSize: '14px' }}>Projekt ansehen &rarr;</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={RADEX_LIVE_URL} className="br-btn-outline-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>Alle Referenzen ansehen</a>
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Kosten einer Badsanierung</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Was eine Badsanierung kostet, hängt von vielen Faktoren ab. Mit unserem Kostenrechner erhalten Sie schnell eine erste Orientierung.
            </p>
          </div>
          <div className="br-costs-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {costTeaserCards.map((card) => (
              <Link key={card.title} to={card.to} className="br-cost-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="br-cost-header">
                  <h3>{card.title}</h3>
                </div>
                <p style={{ padding: '0 20px 20px', color: '#6b7280' }}>{card.desc}</p>
                <span className="br-btn-orange" style={{ display: 'block', margin: '0 20px 20px' }}>Badsanierung Kosten ansehen &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Was kostet Ihre Badsanierung?</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Jede Badsanierung ist individuell. Mit unserem Sanierungskosten-Rechner erhalten Sie innerhalb weniger Sekunden eine erste Orientierung.
            </p>
          </div>
        </div>
        <SanierungskostenRechner defaultType="bad" compact />
        <div className="container" style={{ maxWidth: '720px', marginTop: '24px' }}>
          <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, textAlign: 'center' }}>
            <strong>Hinweis:</strong> Die berechneten Kosten dienen ausschließlich als erste Orientierung. Der tatsächliche Preis hängt unter anderem von der Größe des Badezimmers, dem Zustand der vorhandenen Leitungen, der gewünschten Ausstattung und dem Umfang der Arbeiten ab. Nach einer Besichtigung erhalten Sie ein individuelles Festpreisangebot.
          </p>
        </div>
      </section>

      <ProcessSteps
        title="So entsteht Ihr neues Badezimmer"
        intro="Eine erfolgreiche Badsanierung beginnt lange vor dem ersten Handgriff. Durch eine strukturierte Planung und die Koordination aller Gewerke sorgen wir für einen reibungslosen Ablauf."
        steps={processSteps}
        image="/img/leistungen-hero.webp"
      />

      <FaqAccordion faqs={faqsData} />

      <LandingContactSection
        title="Jetzt Ihr Projekt starten"
        intro="Sie möchten Ihr Badezimmer modernisieren oder planen bereits eine komplette Badsanierung? Senden Sie uns Fotos per WhatsApp oder vereinbaren Sie eine persönliche Beratung."
      />

      <SeoAccordionSection
        title="Weitere Informationen zur Badsanierung"
        intro="Wer sich intensiver mit einer Badsanierung beschäftigen möchte, findet hier weiterführende Informationen rund um Planung, Kosten, Materialien, Sanitärinstallation, Badmodernisierung und den Ablauf."
        accordions={seoAccordions}
      />
    </main>
  );
}
