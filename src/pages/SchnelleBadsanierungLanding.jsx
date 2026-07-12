import { useEffect, useState } from 'react';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  ArrowRight,
  Bath,
  Key,
  Building2,
  Accessibility,
  Clock,
  Award,
  Users,
  UserCheck,
  ShieldCheck,
  MapPin,
  FileText,
  Droplets,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';

const HERO_IMAGE = '/img/schnelle-badsanierung-hero.webp';
const LIVE_IMAGE = '/img/schnelle-badsanierung-radex-live.webp';

const whenCards = [
  { title: 'Badezimmer modernisieren', desc: 'Mehr Komfort und modernes Design.', icon: Bath },
  { title: 'Vor dem Einzug', desc: 'Neues Badezimmer rechtzeitig fertigstellen.', icon: Key },
  { title: 'Vermietung vorbereiten', desc: 'Bad modernisieren und Immobilie aufwerten.', icon: Building2 },
  { title: 'Altersgerechter Umbau', desc: 'Komfortabel und zukunftssicher modernisieren.', icon: Accessibility },
];

const whyRadexCards = [
  { title: 'Optimierte Bauabläufe', desc: 'Sorgfältige Planung und koordinierte Gewerke für eine möglichst kurze Bauzeit.', icon: Clock },
  { title: 'SHK-meistergeführter Fachbetrieb', desc: 'Sanitär und Heizungstechnik unter Meisterverantwortung von Bernd Knoop.', icon: Award },
  { title: 'Koordination aller Gewerke', desc: 'Elektro, Trockenbau, Fliesen und Ausbau in der richtigen Reihenfolge.', icon: Users },
  { title: 'Ein fester Ansprechpartner', desc: 'Von der Badplanung bis zur schlüsselfertigen Übergabe.', icon: UserCheck },
  { title: 'Festpreisgarantie', desc: 'Transparentes Angebot nach Besichtigung – ohne versteckte Kosten.', icon: ShieldCheck },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Über 60 Städte – kurze Wege und Erfahrung mit Bestandsbädern.', icon: MapPin },
];

const serviceCards = [
  { to: '/komplettbadsanierung-rhein-main', title: 'Komplettbadsanierung', desc: 'Das Bad vollständig entkernen und neu aufbauen – aus einer Hand.', icon: Bath },
  { to: '/badplanung-rhein-main', title: 'Badplanung', desc: 'Grundriss, Materialien und Ausstattung professionell planen.', icon: FileText },
  { to: '/sanitaerinstallation-rhein-main', title: 'Sanitärinstallation', desc: 'Wasser, Abwasser und Sanitärobjekte fachgerecht installieren.', icon: Droplets },
  { to: '/barrierefreies-bad-rhein-main', title: 'Barrierefreies Bad', desc: 'Bodengleiche Dusche und sichere Bewegungsflächen planen.', icon: Accessibility },
];

const processSteps = [
  'Kostenlose Beratung',
  'Besichtigung & Aufmaß',
  'Badplanung',
  'Festpreisangebot',
  'Koordinierte Badsanierung',
  'Fertigstellung & Übergabe',
];

const faqsData = [
  {
    q: 'Wie lange dauert eine Badsanierung?',
    a: 'Eine Komplettbadsanierung dauert in der Regel etwa 2–3 Wochen, abhängig von Umfang, Materialverfügbarkeit und Badgröße. Durch optimierte Planung und koordinierte Gewerke verkürzt Radex die Bauzeit soweit möglich.',
  },
  {
    q: 'Muss ich während der Bauzeit ausziehen?',
    a: 'Das hängt vom Umfang ab. Bei einer Komplettbadsanierung ist das Bad vorübergehend nicht nutzbar. Ob ein Auszug nötig ist, besprechen wir nach der Besichtigung individuell.',
  },
  {
    q: 'Koordinieren Sie alle Gewerke?',
    a: 'Ja. Radex koordiniert als Generalunternehmer und SHK-Meisterbetrieb alle Gewerke – von Rückbau und Rohinstallation über Fliesen und Elektro bis zur Fertigmontage.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Ja. Nach Besichtigung und Badplanung erstellen wir ein transparentes Festpreisangebot für Ihr Projekt.',
  },
  {
    q: 'Kann ich mein Bad individuell planen?',
    a: 'Ja. Grundriss, Materialien, Ausstattung und Lichtführung werden gemeinsam geplant – passend zu Ihren Wünschen und dem Bestand.',
  },
  {
    q: 'Arbeiten Sie im gesamten Rhein-Main-Gebiet?',
    a: 'Ja. Radex führt Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet durch – unter anderem Frankfurt, Offenbach, Darmstadt, Hanau und Rödermark.',
  },
];

const seoAccordions = [
  {
    title: 'Ein neues Bad – mehr als nur neue Fliesen',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Wenn Menschen über eine Badsanierung nachdenken, stellen sie sich meist zuerst das fertige Ergebnis vor: eine bodengleiche Dusche, helle Fliesen, vielleicht einen frei stehenden Waschtischunterschrank. Was dazwischen liegt – Planung, Koordination, Technik, Logistik – ist weniger sichtbar, aber entscheidend dafür, ob eine Badsanierung reibungslos verläuft oder zur Belastungsprobe wird.
        </p>
        <p className="mb-4 text-gray-600">
          Radex Objektmanagement GmbH übernimmt genau diesen Teil. Als Generalunternehmer und SHK-Meisterbetrieb mit Sitz in Rödermark koordinieren wir Badsanierungen im gesamten Rhein-Main-Gebiet – von der ersten Beratung über die Badplanung bis zur schlüsselfertigen Übergabe. Sanitär und Heizungstechnik führen wir als Meisterbetrieb selbst aus. Weitere Gewerke wie Elektro, Trockenbau, Fliesen und Innenausbau werden durch eingespielte Fachbetriebe realisiert, die wir koordinieren und verantworten.
        </p>
        <p className="text-gray-600">
          Ob Sie ein komplettes Bestandsbad entkernen und neu aufbauen möchten, Ihre Badmodernisierung gezielt auf mehr Komfort ausrichten wollen oder ein barrierefreies Bad für die nächste Lebensphase planen – Radex begleitet Ihr Projekt von Anfang bis Ende. Mehr zur{' '}
          <Link to="/badsanierung-rhein-main">Badsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    title: 'Badsanierung aus einer Hand – was das wirklich bedeutet',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Wer für eine Badsanierung selbst Handwerker koordiniert – Klempner, Elektriker, Fliesenleger, Trockenbauer – übernimmt de facto die Aufgabe eines Bauleiters. Terminkollisionen, Schnittstellen zwischen Gewerken und fehlende Zuarbeit sind die häufigsten Gründe, warum Badsanierungen länger dauern oder teurer werden als geplant.
        </p>
        <p className="mb-4 text-gray-600">
          Radex übernimmt diese Koordination vollständig. Als Generalunternehmer schließen Sie mit uns einen Vertrag – und wir stellen sicher, dass alle Beteiligten zum richtigen Zeitpunkt am richtigen Ort sind. Das gilt für unsere eigenen Sanitär- und Heizungsarbeiten als SHK-Meisterbetrieb ebenso wie für die koordinierten Fachbetriebe für Elektro, Trockenbau, Fliesen und Oberflächen.
        </p>
        <p className="text-gray-600">
          Was Sie davon haben: einen einzigen Ansprechpartner für alle Fragen, eine abgestimmte Planung und die Gewissheit, dass kein Gewerk auf das andere warten muss, weil die Koordination fehlt.
        </p>
      </>
    ),
  },
  {
    title: 'Von der Idee zum fertigen Bad – so arbeitet Radex',
    content: (
      <>
        <p className="mb-4 text-gray-600"><strong>1. Kostenlose Beratung & Bestandsaufnahme:</strong> Wir kommen zu Ihnen und schauen uns das Bad gemeinsam an. Dabei klären wir: Welche Leitungen liegen wo? Wie ist der Zustand von Abdichtung, Fliesen und Sanitärobjekten? Was möchten Sie verändern? Dieser Termin ist kostenlos und unverbindlich.</p>
        <p className="mb-4 text-gray-600"><strong>2. Planung & Materialauswahl:</strong> Auf Basis der Bestandsaufnahme entwickeln wir gemeinsam ein Konzept: Grundriss, Ausstattung, Materialien, Lichtführung. Eine gute Planung ist die Grundlage für eine verlässliche Kostenaussage.</p>
        <p className="mb-4 text-gray-600"><strong>3. Verbindliches Angebot:</strong> Sie erhalten ein konkretes, nachvollziehbares Angebot – aufgeschlüsselt nach Leistungsbereichen, ohne versteckte Positionen.</p>
        <p className="mb-4 text-gray-600"><strong>4. Ausführung & Koordination:</strong> Nach Auftragserteilung übernimmt Radex die komplette Steuerung. Rückbau, Rohinstallation, Abdichtung, Trockenbau, Elektro, Fliesen, Ausbau – alle Schritte werden in abgestimmter Reihenfolge ausgeführt.</p>
        <p className="text-gray-600"><strong>5. Übergabe:</strong> Das Bad wird vollständig fertiggestellt übergeben – sauber, geprüft, mit allen Anschlüssen in Betrieb. Wir stehen auch danach als Ansprechpartner zur Verfügung.</p>
      </>
    ),
  },
  {
    title: 'Badsanierung im Rhein-Main-Gebiet – wo Radex tätig ist',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Der Ausgangspunkt ist Rödermark im südlichen Hessen – von dort aus sind wir regelmäßig in der gesamten Rhein-Main-Region aktiv, ohne lange Anfahrtszeiten und ohne Aufschläge für die Entfernung.
        </p>
        <p className="text-gray-600">
          Zu unseren typischen Einsatzgebieten gehören Frankfurt am Main, Offenbach am Main, Darmstadt und Hanau, aber auch die mittelgroßen Städte und Gemeinden im direkten Umland: Dreieich, Rodgau, Neu-Isenburg, Dietzenbach und Heusenstamm. Viele unserer Kunden kommen aus dem Landkreis Offenbach und den angrenzenden Landkreisen Darmstadt-Dieburg und Main-Kinzig. Wir sind aber auch regelmäßig im Wetteraukreis, im Rheingau-Taunus-Kreis und im Aschaffenburger Raum tätig.
        </p>
      </>
    ),
  },
  {
    title: 'Was möchten Sie sanieren?',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Komplettbadsanierung:</strong> Das Bad wird vollständig entkernt und neu aufgebaut – von der Rohinstallation bis zur schlüsselfertigen Übergabe. <a href="/komplettbadsanierung-rhein-main">Komplettbadsanierung</a>.</li>
        <li><strong>Badmodernisierung:</strong> Mehr Komfort, bessere Optik und neue Funktionen mit weniger Bauaufwand – neue Armaturen, moderne Beleuchtung oder eine zeitgemäße Dusche.</li>
        <li><strong>Badrenovierung:</strong> Oberflächen erneuern, Sanitärobjekte ersetzen, Licht verbessern – ohne das Bad vollständig aufzureißen.</li>
        <li><strong>Barrierefreies Bad:</strong> Bodengleiche Duschen, Haltegriffe und gut geplante Bewegungsflächen. <a href="/barrierefreies-bad-rhein-main">Barrierefreies Bad</a>.</li>
        <li><strong>Kleines Bad & Gäste-WC:</strong> Auf kleiner Fläche ein funktionales, helles Bad schaffen – Radex kennt die typischen Grundrisse im Rhein-Main-Gebiet.</li>
        <li><strong>Dusche statt Badewanne:</strong> Der Umbau von Wanne zu Dusche – Entwässerung, Abdichtung und Installationsführung werden sorgfältig geplant.</li>
      </ul>
    ),
  },
  {
    title: 'Leistungsumfang: Was gehört zu einer Badsanierung?',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Sanitär & Heizungstechnik:</strong> Neue Wasserleitungen, Anschluss von Dusche, Wanne, WC und Waschtisch, Erneuerung der Entwässerung – als SHK-Meisterbetrieb selbst ausgeführt. <a href="/sanitaerinstallation-rhein-main">Sanitärinstallation</a>.</li>
        <li><strong>Rückbau & Abdichtung:</strong> Kontrollierter Rückbau von Fliesen und Sanitärobjekten, anschließend die Abdichtung aller Nass- und Spritzwasserbereiche.</li>
        <li><strong>Elektro & Trockenbau:</strong> Beleuchtung, Schalter, Steckdosen, Lüftung und Vorwandinstallationen – koordiniert, damit keine Schnittstelle offen bleibt.</li>
        <li><strong>Fliesen & Oberflächen:</strong> Großformatige Bodenfliesen, Wandfliesen im Wunschformat oder Mosaik – durch routinierte Fliesenleger.</li>
        <li><strong>Ausbau & Einrichtung:</strong> Montage von Badmöbeln, Armaturen, Spiegel, Accessoires und Beleuchtung.</li>
        <li><strong>Badplanung & Beratung:</strong> Vor dem ersten Handgriff steht die Planung: Bedarf, Grundriss, Materialwünsche und Budget. <a href="/badplanung-rhein-main">Badplanung</a>.</li>
      </ul>
    ),
  },
  {
    title: 'Wie viel kostet eine Badsanierung?',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Die tatsächlichen Kosten hängen von Größe, Zustand und gewünschter Ausstattung ab. Die folgenden Beispiele geben eine erste Preisorientierung.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li><strong>Gäste-WC:</strong> ab ca. 7.500 €</li>
          <li><strong>Komfortbad:</strong> ab ca. 17.500 €</li>
          <li><strong>Premium-Wellnessbad:</strong> ab ca. 28.000 €</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Was gehört zu einer Badsanierung?',
    content: (
      <p className="text-gray-600">
        Der Umfang hängt vom Ausgangszustand und Ihren Wünschen ab. Bei einer Komplettbadsanierung umfasst das typischerweise: Rückbau des Bestandsbades, Erneuerung oder Verlegung von Wasser- und Abwasserleitungen, Abdichtung aller Nass- und Spritzwasserbereiche, Trockenbau- und Vorwandinstallation, Elektroarbeiten (Licht, Steckdosen, Lüftung), Fliesenarbeiten sowie die abschließende Montage von Sanitärobjekten, Armaturen und Badmöbeln. Bei einer Badmodernisierung oder gezielten Badrenovierung kann der Umfang deutlich kleiner sein.
      </p>
    ),
  },
  {
    title: 'Wie läuft eine Badsanierung mit Radex ab?',
    content: (
      <p className="text-gray-600">
        Am Anfang steht ein kostenloser Beratungstermin bei Ihnen vor Ort. Wir schauen uns das Bad an, klären Ihre Wünsche und die technische Ausgangslage. Danach erstellen wir ein konkretes Angebot. Nach Auftragserteilung koordiniert Radex alle Gewerke – von Rückbau und Rohinstallation bis zu Fliesen, Elektro und Ausbau – in einer abgestimmten Reihenfolge. Sie haben während der gesamten Badsanierung einen festen Ansprechpartner bei Radex.
      </p>
    ),
  },
  {
    title: 'Ist Radex ein SHK-Meisterbetrieb?',
    content: (
      <p className="text-gray-600">
        Ja. Radex Objektmanagement GmbH ist ein eingetragener SHK-Meisterbetrieb. Betriebsleiter und eingetragener Meister ist Bernd Knoop – zugelassen für die Gewerke Sanitär, Heizung, Klimatechnik und Gebäudetechnik. Alle Sanitär- und Heizungsarbeiten führen wir als Meisterbetrieb selbst aus. Für weitere Gewerke – Elektro, Trockenbau, Fliesen, Innenausbau – koordinieren wir eingespielte Fachbetriebe, für deren Arbeit wir die Verantwortung tragen.
      </p>
    ),
  },
  {
    title: 'Was kostet eine Badsanierung im Rhein-Main-Gebiet?',
    content: (
      <p className="text-gray-600">
        Die Kosten hängen von mehreren Faktoren ab: Badgröße, Umfang der Arbeiten (Komplettbadsanierung oder Teilmaßnahme), Zustand der vorhandenen Leitungen und Abdichtung, gewählte Materialien und Ausstattung sowie Aufwand für Rückbau und ggf. Grundrissänderungen. Pauschale Preisangaben ohne Bestandsaufnahme sind wenig verlässlich – Radex erstellt nach einem Ortstermin ein verbindliches Angebot auf Basis Ihrer konkreten Situation.
      </p>
    ),
  },
  {
    title: 'Kann Radex auch nur einzelne Teile des Bades sanieren?',
    content: (
      <p className="text-gray-600">
        Ja. Nicht jede Badsanierung muss ein kompletter Neustart sein. Wenn der Grundzustand des Bades noch in Ordnung ist, können gezielte Teilmaßnahmen sinnvoller sein: eine neue bodengleiche Dusche anstelle der Badewanne, ein modernes Waschtischunterschrank, neue Armaturen oder eine zeitgemäße Beleuchtung. Radex berät Sie ehrlich, welche Maßnahmen in Ihrer Situation tatsächlich sinnvoll sind.
      </p>
    ),
  },
  {
    title: 'In welchen Städten bietet Radex Badsanierung an?',
    content: (
      <p className="text-gray-600">
        Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Regelmäßig sind wir unter anderem in Rödermark, Frankfurt am Main, Offenbach am Main, Darmstadt, Hanau, Dreieich, Rodgau, Neu-Isenburg, Dietzenbach und Heusenstamm tätig – sowie in vielen weiteren Städten im Landkreis Offenbach, im Main-Kinzig-Kreis, im Wetteraukreis und im Raum Aschaffenburg. Bei dringenden Themen: <a href="/bad-soforthilfe-rhein-main">Bad-Soforthilfe</a> · <a href="/sanierungs-soforthilfe-rhein-main">Sanierungs-Soforthilfe</a>.
      </p>
    ),
  },
];

function SharedCTABlock({ isHero = false, centered = false }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? '' : 'mt-8'}`}
      style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: centered ? 'center' : 'flex-start',
      }}
    >
      <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
      <a
        href="https://wa.me/496074960620"
        target="_blank"
        rel="noopener noreferrer"
        className="btn br-btn-whatsapp"
      >
        Fotos über WhatsApp senden <MessageSquare size={18} color="#25D366" style={{ marginLeft: '8px' }} />
      </a>
      <a
        href="tel:+496074960620"
        className="btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: isHero ? 'transparent' : '#fff',
          border: isHero ? '1px solid #111827' : '1px solid #d1d5db',
          color: '#111827',
          padding: '12px 24px',
          borderRadius: '4px',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        <Phone size={18} /> Jetzt anrufen
      </a>
    </div>
  );
}

function PremiumIconCards({ cards, linked = false }) {
  return (
    <div className="br-nav-landing-grid">
      {cards.map((card) => {
        const Icon = card.icon;
        const content = (
          <>
            <div className="br-decision-icon">
              <Icon size={40} strokeWidth={1.5} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            {linked && card.to && <span className="br-btn-orange">Mehr erfahren</span>}
          </>
        );

        if (linked && card.to) {
          return (
            <a key={card.title} href={card.to} className="br-decision-card">
              {content}
            </a>
          );
        }

        return (
          <div key={card.title} className="br-decision-card" style={{ cursor: 'default' }}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default function SchnelleBadsanierungLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Schnelle Badsanierung im Rhein-Main-Gebiet | Modernes Bad | Radex',
    description:
      'Komplettbadsanierung mit kurzer Bauzeit. Professionelle Planung, koordinierte Ausführung und moderne Badezimmer im gesamten Rhein-Main-Gebiet.',
    path: '/schnelle-badsanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Schnelle Badsanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">
              Ihr neues Badezimmer – schneller als Sie denken.
            </p>
            <p className="br-hero-text">
              Viele Eigentümer wünschen sich ein neues Badezimmer, befürchten jedoch lange Bauzeiten und hohen Organisationsaufwand. Durch eine sorgfältige Planung und die Koordination aller Gewerke sorgt Radex für einen reibungslosen Ablauf und eine möglichst kurze Bauzeit – ohne Kompromisse bei Qualität und Ausführung.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Für wen eignet sich eine schnelle Badsanierung?</h2>
          </div>
          <PremiumIconCards cards={whenCards} />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex wählen</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen rund um die Badsanierung</h2>
          </div>
          <PremiumIconCards cards={serviceCards} linked />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Kosten einer schnellen Badsanierung</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Mit unserem Badsanierungskosten-Rechner erhalten Sie eine erste Orientierung. Nach einer Besichtigung erstellen wir ein individuelles Festpreisangebot.
            </p>
          </div>
        </div>
        <SanierungskostenRechner defaultType="bad" compact />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Radex Live</h2>
            <p className="br-section-subtitle">Schauen Sie uns bei der Arbeit über die Schulter.</p>
          </div>

          <div
            className="br-project-img mb-10"
            style={{
              backgroundImage: `url(${LIVE_IMAGE})`,
              height: '420px',
              borderRadius: '8px',
            }}
          />

          <p className="br-section-subtitle text-center mb-10" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
            Nicht jedes Projekt darf veröffentlicht werden. Deshalb zeigen wir Ihnen bei Radex Live aktuelle Badsanierungen und laufende Baustellen aus dem gesamten Rhein-Main-Gebiet. Erleben Sie Schritt für Schritt, wie moderne Badezimmer entstehen und wie unsere Teams professionell zusammenarbeiten.
          </p>

          <div className="br-projects-grid">
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: `url(${LIVE_IMAGE})` }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Komplettbadsanierung</h4>
                <p>Frankfurt am Main</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/boden.webp)' }}>
                <span className="br-project-badge">Abgeschlossen</span>
              </div>
              <div className="br-project-info">
                <h4>Modernes Duschbad</h4>
                <p>Offenbach</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/wohnzimmer.webp)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Barrierefreies Bad</h4>
                <p>Darmstadt</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/radex-live" className="br-btn-outline-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Alle Projekte ansehen
            </a>
            <a href="#kontakt" className="br-btn-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Projekt anfragen
            </a>
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="br-section-title">So entsteht Ihr neues Badezimmer</h2>
          </div>
          <div className="br-process-flow">
            {processSteps.map((step, idx) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="br-process-step">
                  <div className="br-step-number">{idx + 1}</div>
                  <h4>{step}</h4>
                </div>
                {idx < processSteps.length - 1 && <ArrowRight className="br-step-arrow" size={24} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-12">
            <h2 className="br-section-title">Häufig gestellte Fragen</h2>
          </div>
          <div className="br-faq-grid">
            {faqsData.map((faq, i) => (
              <div key={faq.q} className="home-faq-item">
                <button
                  type="button"
                  className="home-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left' }}>{faq.q}</span>
                  <ChevronDown
                    style={{
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                    color="#9ca3af"
                    size={18}
                  />
                </button>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: openFaq === i ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease',
                    padding: 0,
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ borderTop: '1px solid #f9fafb', padding: '16px', color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="br-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Jetzt kostenlos beraten lassen</h2>
            <p className="br-section-subtitle mb-8">
              Sie wünschen sich ein modernes Badezimmer mit einer möglichst kurzen Bauzeit?
              Senden Sie uns Fotos Ihres Badezimmers per WhatsApp oder vereinbaren Sie eine persönliche Beratung. Gemeinsam planen wir Ihre neue Badsanierung schnell, professionell und zuverlässig.
            </p>
            <SharedCTABlock centered />
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-12">
            <h2 className="br-section-title">Weitere Informationen</h2>
          </div>
          <div className="br-faq-grid">
            {seoAccordions.map((item, i) => (
              <div key={item.title} className="home-faq-item">
                <button
                  type="button"
                  className="home-faq-btn"
                  onClick={() => setOpenSeo(openSeo === i ? null : i)}
                  aria-expanded={openSeo === i}
                >
                  <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left' }}>{item.title}</span>
                  <ChevronDown
                    style={{
                      transform: openSeo === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                    color="#9ca3af"
                    size={18}
                  />
                </button>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: openSeo === i ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ borderTop: '1px solid #f9fafb', padding: '16px', fontSize: '15px', lineHeight: '1.6' }}>
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
