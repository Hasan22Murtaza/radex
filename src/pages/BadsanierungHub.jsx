import { useEffect } from 'react';
import { RADEX_LIVE_URL } from '../constants/brand';
import { Award, Users, ShieldCheck, MapPin, CheckCircle2, Camera } from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../home.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import NavLandingCards from '../components/NavLandingCards';
import SanierungskostenRechner from '../components/SanierungskostenRechner';
import ContactForm from '../components/ContactForm';
import { badsanierungCards } from '../data/navigation';
import {
  SharedCTABlock,
  PremiumIconCards,
  FaqAccordion,
  SeoTocSection,
  RadexLiveSection,
  ProcessSteps,
  TrustUspCards,
} from '../components/landing/SharedLandingParts';

const HERO_IMAGE = '/img/badsanierung-hero.png';

const trustCards = [
  {
    title: 'SHK-meistergeführter Fachbetrieb',
    image: '/img/badsanierung-usp-shk.png',
    icon: Award,
    imageAlt: 'Moderne Sanitärinstallation bei einer Badsanierung',
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
    imageAlt: 'Transparente Festpreisangebote für Badsanierungen',
  },
  {
    title: 'Über 500 Projekte',
    image: '/img/badsanierung-usp-projekte.png',
    icon: CheckCircle2,
    imageAlt: 'Abgeschlossenes modernes Badezimmer nach Radex Badsanierung',
  },
  {
    title: 'Zertifiziert für Schimmel & Asbest',
    image: '/img/badsanierung-usp-schimmel.png',
    icon: ShieldCheck,
    imageAlt: 'Feuchtemessung und Schimmelprüfung bei Sanierung',
  },
  {
    title: 'Im gesamten Rhein-Main-Gebiet',
    image: '/img/badsanierung-usp-rheinmain.png',
    icon: MapPin,
    imageAlt: 'Moderne Wohngebäude im Rhein-Main-Gebiet',
  },
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
  { image: '/img/badsanierung-ref-1.png', location: 'Frankfurt am Main', size: '8 m²', desc: 'Komplettbadsanierung mit bodengleicher Dusche und großformatigen Fliesen.' },
  { image: '/img/badsanierung-thema-komplett.png', location: 'Darmstadt', size: '10 m²', desc: 'Modernes Wohlfühlbad mit hochwertiger Ausstattung und indirekter Beleuchtung.' },
  { image: '/img/badsanierung-thema-dusche.png', location: 'Offenbach am Main', size: '6 m²', desc: 'Badmodernisierung mit Dusche statt Badewanne und neuen Sanitärobjekten.' },
  { image: '/img/badsanierung-thema-barrierefrei.png', location: 'Rodgau', size: '9 m²', desc: 'Barrierefreies Bad mit bodengleicher Dusche und durchdachten Bewegungsflächen.' },
  { image: '/img/badsanierung-thema-gaestewc.png', location: 'Dreieich', size: '4 m²', desc: 'Gäste-WC modernisiert – kompakt, funktional und hochwertig gestaltet.' },
  { image: '/img/badsanierung-ref-2.png', location: 'Rödermark', size: '12 m²', desc: 'Premium-Badsanierung mit Walk-in-Dusche und freistehendem Waschtisch.' },
];

const costTeaserCards = [
  { title: 'Basis', price: 'ab ca. 8.000 €', desc: 'Ideal für funktionale Modernisierungen mit solider Ausstattung.', to: '/badsanierung-kosten-rhein-main' },
  { title: 'Komfort', price: '15.000–25.000 €', desc: 'Die häufigste Wahl unserer Kunden – ausgewogene Qualität und Komfort.', to: '/badsanierung-kosten-rhein-main' },
  { title: 'Premium', price: '25.000–45.000 €+', desc: 'Hochwertige Ausstattung, großformatige Fliesen und individuelle Gestaltung.', to: '/badsanierung-kosten-rhein-main' },
];

const processSteps = [
  { title: 'Kostenlose Erstberatung' },
  { title: 'Besichtigung & Aufmaß' },
  { title: 'Planung Ihres Badezimmers' },
  { title: 'Festpreisangebot' },
  { title: 'Koordinierte Ausführung aller Gewerke' },
  { title: 'Schlüsselfertige Übergabe' },
];

const radexLiveProjects = [
  {
    image: '/img/badsanierung-ref-1.png',
    badge: 'LIVE',
    title: 'Komplettbadsanierung',
    location: 'Frankfurt am Main',
    desc: 'Komplettbadsanierung inklusive neuer Sanitärinstallation, bodengleicher Dusche und großformatiger Fliesen.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-thema-dusche.png',
    badge: 'LIVE',
    title: 'Dusche statt Badewanne',
    location: 'Darmstadt',
    desc: 'Umbau von Badewanne zu bodengleicher Walk-in-Dusche mit neuer Abdichtung und Fliesenarbeiten.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/badsanierung-thema-barrierefrei.png',
    badge: 'Vorher & Nachher',
    title: 'Barrierefreies Bad',
    location: 'Offenbach am Main',
    desc: 'Aus einem veralteten Badezimmer entstand ein barrierefreies Wohlfühlbad mit bodengleicher Dusche.',
    cta: 'Vorher & Nachher ansehen',
  },
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

const seoSections = [
  {
    id: 'komplettbadsanierung',
    title: 'Komplettbadsanierung',
    href: '/badsanierung/badezimmer-sanieren#komplettbadsanierung',
  },
  {
    id: 'badmodernisierung',
    title: 'Badmodernisierung',
    href: '/badsanierung/badezimmer-sanieren#badmodernisierung',
  },
  {
    id: 'badplanung',
    title: 'Badplanung',
    href: '/badplanung#warum-planung',
  },
  {
    id: 'sanitaerinstallation',
    title: 'Sanitärinstallation',
    href: '/heizung-sanitaer-rhein-main#sanitaerinstallation',
  },
  {
    id: 'fliesen-oberflaechen',
    title: 'Fliesen & Oberflächen',
    href: '/badsanierung/badezimmer-sanieren#fliesen-oberflaechen',
  },
  {
    id: 'dusche-statt-badewanne',
    title: 'Dusche statt Badewanne',
    href: '/dusche-statt-badewanne#warum-dusche',
  },
  {
    id: 'badewanne-austauschen',
    title: 'Badewanne austauschen',
    href: '/badewanne-austauschen',
  },
  {
    id: 'barrierefreies-bad',
    title: 'Barrierefreies Bad',
    href: '/barrierefreies-bad#was-bedeutet',
  },
  {
    id: 'gaeste-wc',
    title: 'Gäste-WC',
    href: '/gaeste-wc#kleine-raeume',
  },
  {
    id: 'kosten-badsanierung',
    title: 'Kosten einer Badsanierung',
    href: '/sanierungskosten-rhein-main#kosten-badsanierung',
  },
  {
    id: 'foerdermoeglichkeiten',
    title: 'Fördermöglichkeiten',
    href: '/energetische-sanierung-rhein-main#foerderung',
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
            <p className="br-hero-kicker">
              SHK-Meisterbetrieb · Generalunternehmer · Rhein-Main-Gebiet
            </p>
            <h1 className="br-hero-title">
              Badsanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-lead">
              Alles aus einer Hand – mit transparenten Festpreisangeboten.
            </p>
            <p className="br-hero-text">
              Als SHK-meistergeführter Fachbetrieb und Generalunternehmer übernimmt Radex Ihre komplette
              Badsanierung – von der ersten Beratung über Sanitär-, Elektro- und Fliesenarbeiten bis zur
              schlüsselfertigen Übergabe. Ein fester Ansprechpartner, klare Festpreisangebote und täglicher
              Einsatz im gesamten Rhein-Main-Gebiet.
            </p>
            <ul className="br-hero-highlights" aria-label="Ihre Vorteile auf einen Blick">
              <li>SHK-Meisterbetrieb</li>
              <li>Generalunternehmer</li>
              <li>Alles aus einer Hand</li>
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
          aria-label="Modernes Badezimmer nach einer Badsanierung im Rhein-Main-Gebiet durch Radex Objektmanagement"
          title="Badsanierung Rhein-Main | Radex Objektmanagement"
        />
      </section>

      <section className="br-section br-trust-usp-section">
        <div className="container">
          <TrustUspCards cards={trustCards} />
        </div>
      </section>

      <NavLandingCards
        title="Wählen Sie Ihr Badsanierungs-Thema"
        subtitle="Nicht jede Badsanierung ist gleich. Wählen Sie den Bereich aus, der am besten zu Ihrem Projekt passt. Auf den jeweiligen Detailseiten finden Sie ausführliche Informationen zu Planung, Ablauf, Kosten und individuellen Lösungen."
        cards={badsanierungCards}
      />

      <section className="br-section br-whatsapp-cta-section">
        <div className="container br-whatsapp-cta-inner">
          <div className="br-whatsapp-cta-copy">
            <span className="br-whatsapp-cta-kicker">Schnellste Antwort</span>
            <h2 className="br-section-title">Noch unsicher, welche Lösung die richtige ist?</h2>
            <p className="br-section-subtitle">
              Senden Sie uns Fotos Ihres Badezimmers per WhatsApp – Sie erhalten eine erste fachliche
              Einschätzung, oft noch am selben Tag. Oder vereinbaren Sie eine kostenlose Beratung.
            </p>
          </div>
          <SharedCTABlock centered />
        </div>
      </section>

      <RadexLiveSection
        intro="Eine Badsanierung ist Vertrauenssache. Deshalb zeigen wir Ihnen nicht nur fertige Badezimmer, sondern auch echte Einblicke in unsere tägliche Arbeit – von der Entkernung über die Sanitärinstallation bis zur fertigen Übergabe."
        showWelcomeVideo
        projects={radexLiveProjects}
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

      <section className="br-section br-bg-light br-references-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Das Ergebnis spricht für sich.</h2>
            <p className="br-section-subtitle">Entdecken Sie eine Auswahl abgeschlossener Badsanierungsprojekte im Rhein-Main-Gebiet.</p>
          </div>
          <div className="br-projects-grid br-references-grid">
            {referenceCards.map((ref) => (
              <a
                key={ref.location + ref.size}
                href={RADEX_LIVE_URL}
                className="br-project-card br-reference-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="br-project-img" style={{ backgroundImage: `url(${ref.image})` }} />
                <div className="br-project-info">
                  <h4>{ref.location}</h4>
                  <p className="br-project-meta">{ref.size}</p>
                  <p className="br-project-desc">{ref.desc}</p>
                  <span className="br-btn-orange br-project-cta">Projekt ansehen &rarr;</span>
                </div>
              </a>
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
            <p className="br-section-subtitle br-section-subtitle--wide">
              Was eine Badsanierung kostet, hängt von vielen Faktoren ab. Hier finden Sie typische Einstiegspreise –
              für eine individuelle Schätzung nutzen Sie unseren Kostenrechner weiter unten.
            </p>
          </div>
          <p className="br-cost-kicker text-center">Typische Einstiegspreise</p>
          <div className="br-costs-grid br-costs-grid--three">
            {costTeaserCards.map((card) => (
              <Link key={card.title} to={card.to} className="br-cost-card">
                <div className="br-cost-header">
                  <h3>{card.title}</h3>
                  <p className="br-cost-price">
                    <span>{card.price}</span>
                  </p>
                </div>
                <p className="br-cost-desc">{card.desc}</p>
                <span className="br-btn-orange br-cost-cta">Badsanierung Kosten ansehen &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <SanierungskostenRechner defaultType="bad" compact badOnly />
        <div className="container br-calculator-disclaimer">
          <p>
            <strong>Hinweis:</strong> Die berechneten Kosten sind typische Einstiegspreise und dienen ausschließlich
            als erste Orientierung für Ihre Badsanierung. Der tatsächliche Festpreis hängt von Badgröße,
            Zustand der Leitungen, gewünschter Ausstattung und Umfang der Arbeiten ab. Nach einer Besichtigung
            erhalten Sie ein individuelles Festpreisangebot.
          </p>
        </div>
      </section>

      <ProcessSteps
        title="So entsteht Ihr neues Badezimmer"
        intro="Eine erfolgreiche Badsanierung beginnt lange vor dem ersten Handgriff. Durch eine strukturierte Planung und die Koordination aller Gewerke sorgen wir für einen reibungslosen Ablauf."
        steps={processSteps}
        image="/img/badsanierung-process.png"
      />

      <FaqAccordion faqs={faqsData} />

      <ContactForm />

      <SeoTocSection
        title="Weitere Informationen zur Badsanierung"
        intro="Wer sich intensiver mit einer Badsanierung beschäftigen möchte, findet hier weiterführende Informationen rund um Planung, Kosten, Materialien, Sanitärinstallation, Badmodernisierung und den Ablauf."
        sections={seoSections}
      />
    </main>
  );
}
