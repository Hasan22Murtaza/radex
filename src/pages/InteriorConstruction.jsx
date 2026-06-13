import ServicePageTemplate from '../components/ServicePageTemplate';

export default function InteriorConstruction() {
  const heroData = {
    title: "Innenausbau & Umbau im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Trockenbau, Böden, Malerarbeiten und Raumgestaltung.",
    text: "Wir geben Ihren Räumen ein neues Gesicht. Hochwertiger Innenausbau für Wohn- und Gewerbeimmobilien.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "",
    list: [
      { title: "Immobilieneigentümer", desc: "Neue Bodenbeläge oder frischer Anstrich." },
      { title: "Gewerbemieter", desc: "Akustikdecken und neue Raumaufteilungen durch Trockenbau." }
    ]
  };

  const typicalProjectsData = {
    title: "Unsere Ausbauleistungen",
    subtitle: "",
    projects: [
      { title: "Trockenbau", desc: "Decken abhängen und Raumteiler stellen.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
      { title: "Böden", desc: "Parkett, Vinyl oder großformatige Fliesen.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten für Innenausbau",
    subtitle: "",
    items: [
      { title: "Trockenbauwand", price: "ab €60 / m²", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
      { title: "Malerarbeiten", price: "ab €15 / m²", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Welcher Bodenbelag eignet sich für Fußbodenheizung?", a: "Keramische Fliesen und verklebtes Parkett haben den besten Wärmedurchlasswiderstand." }
  ];

  const seoContent = (
    <div className="br-seo-text-block mb-8">
      <h3 className="mb-4 text-xl font-bold">Innenausbau in Perfektion</h3>
      <p className="mb-4 text-gray-600">Glatt gespachtelte Wände der Qualitätsstufe Q4, fugenlose Böden oder edles Echtholzparkett – wir garantieren höchste handwerkliche Ausführungsqualität im Innenausbau.</p>
    </div>
  );

  return <ServicePageTemplate heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
