import ServicePageTemplate from '../components/ServicePageTemplate';

export default function InteriorConstruction() {
  const heroData = {
    title: "Innenausbau & Umbau im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Trockenbau, Böden, Malerarbeiten und individuelle Raumgestaltung.",
    text: "Wir geben Ihren Räumen ein neues Gesicht. Hochwertiger Innenausbau und Umbau für Wohn- und Gewerbeimmobilien – sauber geplant und fachgerecht ausgeführt.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Mehr Wohnqualität durch durchdachten Innenausbau.",
    list: [
      { title: "Immobilieneigentümer", desc: "Neue Bodenbeläge, frischer Anstrich oder hochwertige Wandgestaltung für mehr Wohnkomfort." },
      { title: "Gewerbemieter", desc: "Akustikdecken, Trennwände und neue Raumaufteilungen durch Trockenbau." },
      { title: "Umbau-Interessenten", desc: "Offene Wohnkonzepte durch das Entfernen oder Versetzen von Wänden." },
      { title: "Vermieter", desc: "Schnelle, werterhaltende Aufwertung zwischen zwei Mietverhältnissen." }
    ]
  };

  const typicalProjectsData = {
    title: "Unsere Ausbauleistungen",
    subtitle: "Vom einzelnen Gewerk bis zum kompletten Innenausbau.",
    projects: [
      { title: "Trockenbau", desc: "Decken abhängen, Vorwände erstellen und Räume mit Trennwänden neu aufteilen.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
      { title: "Böden", desc: "Parkett, Vinyl, Designbelag oder großformatige Fliesen – fachgerecht verlegt.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
      { title: "Maler & Spachtel", desc: "Glatt gespachtelte Wände der Qualitätsstufe Q3/Q4, Anstriche und Dekorputze.", img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten für Innenausbau",
    subtitle: "Richtwerte – abhängig von Material, Fläche und Aufwand.",
    items: [
      { title: "Trockenbauwand", price: "ab €60 / m²", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
      { title: "Malerarbeiten", price: "ab €15 / m²", img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800" },
      { title: "Bodenverlegung", price: "ab €40 / m²", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Welcher Bodenbelag eignet sich für Fußbodenheizung?", a: "Keramische Fliesen und verklebtes Parkett haben den besten Wärmedurchlasswiderstand und geben die Wärme effizient ab. Auch hochwertiges Vinyl ist gut geeignet. Wichtig ist, dass der Belag ausdrücklich für Fußbodenheizung freigegeben ist – wir beraten Sie gerne zu den passenden Materialien." },
    { q: "Kann ich eine tragende Wand entfernen?", a: "Tragende Wände dürfen nur nach statischer Prüfung und mit entsprechender Abfangung (z. B. Stahlträger) entfernt werden. Wir arbeiten mit Statikern zusammen, klären die Genehmigung und führen den Durchbruch sicher aus, ohne die Standsicherheit des Gebäudes zu gefährden." },
    { q: "Wie lange dauern Trockenbauarbeiten?", a: "Eine einzelne Trennwand ist oft an einem Tag gestellt. Größere Projekte mit abgehängten Decken, Vorwänden und mehreren Räumen dauern entsprechend länger. Da Spachtel- und Trocknungszeiten eingeplant werden müssen, erstellen wir Ihnen vorab einen realistischen Zeitplan." },
    { q: "Was bedeuten die Qualitätsstufen Q1 bis Q4?", a: "Die Qualitätsstufen beschreiben, wie fein eine Trockenbau- oder Putzoberfläche verspachtelt wird. Q2 ist Standard für gestrichene Wände, Q3 für höhere Ansprüche und Q4 für glatte Oberflächen unter Streiflicht oder bei Glanzanstrichen. Wir setzen die für Ihren Anspruch passende Stufe um." },
    { q: "Arbeiten Sie auch in bewohnten Räumen?", a: "Ja. Mit Staubschutzwänden, Abdeckungen und sauberer Arbeitsweise halten wir die Belastung gering. So können viele Innenausbau-Maßnahmen auch durchgeführt werden, während Sie weiter in der Immobilie wohnen oder arbeiten." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Innenausbau in Perfektion</h3>
        <p className="mb-4 text-gray-600">Glatt gespachtelte Wände der Qualitätsstufe Q4, fugenlose Böden oder edles Echtholzparkett – beim Innenausbau entscheiden die Details über das Ergebnis. Radex garantiert höchste handwerkliche Ausführungsqualität und koordiniert alle beteiligten Gewerke so, dass Maler, Bodenleger und Trockenbauer perfekt ineinandergreifen.</p>
        <p className="text-gray-600">Ob einzelne Maßnahme oder kompletter Innenausbau im Rahmen einer Sanierung – Sie haben einen festen Ansprechpartner, der Termine, Qualität und Budget im Blick behält.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Trockenbau & Raumgestaltung</h3>
        <p className="mb-4 text-gray-600">Mit Trockenbau lassen sich Räume flexibel und schnell neu gestalten: abgehängte Decken mit indirekter Beleuchtung, schallschützende Trennwände, Vorwandinstallationen oder einbruchhemmende Konstruktionen. Wir setzen auf hochwertige Gipskarton- und Gipsfaserplatten und berücksichtigen dabei Brand-, Schall- und Feuchteschutz nach den geltenden Normen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Böden & Wandgestaltung</h3>
        <p className="mb-4 text-gray-600">Der Bodenbelag prägt den Charakter eines Raumes. Wir verlegen Parkett, Designvinyl, Laminat und großformatige Fliesen fachgerecht inklusive Untergrundvorbereitung und Trittschalldämmung. Bei den Wänden reicht unser Spektrum vom klassischen Anstrich über Tapezierarbeiten bis hin zu hochwertigen Spachtel- und Dekortechniken.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Wanddurchbrüche & Umbau</h3>
        <p className="text-gray-600">Ein offener Wohnbereich oder eine offene Küche schafft Großzügigkeit. Wir prüfen gemeinsam mit Statikern, welche Wände entfernt werden können, sorgen für die fachgerechte Abfangung der Lasten und stellen die Räume sauber wieder her. So entsteht aus einer verwinkelten Wohnung ein modernes, lichtdurchflutetes Zuhause.</p>
      </div>
    </>
  );

  const seo = {
    title: "Innenausbau & Umbau Rhein-Main | Trockenbau & Böden | Radex",
    description: "Innenausbau & Umbau im Rhein-Main-Gebiet: Trockenbau, Böden, Malerarbeiten, Wanddurchbrüche & Raumgestaltung aus einer Hand. Sauber & fachgerecht. Jetzt anfragen!",
    path: "/innenausbau-umbau-rhein-main",
    serviceName: "Innenausbau & Umbau"
  };

  return <ServicePageTemplate seo={seo} heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
