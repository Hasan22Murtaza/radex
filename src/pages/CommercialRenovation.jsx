import ServicePageTemplate from '../components/ServicePageTemplate';

export default function CommercialRenovation() {
  const heroData = {
    title: "Gewerbesanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Schnell, präzise und außerhalb der Öffnungszeiten.",
    text: "Sanierung von Büros, Praxen und Gastronomieflächen mit minimaler Betriebsunterbrechung.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "",
    list: [
      { title: "Bürobetreiber", desc: "Moderne Arbeitswelten (New Work) schaffen." },
      { title: "Arztpraxen", desc: "Sanierung unter strengen hygienischen Auflagen." },
      { title: "Einzelhandel", desc: "Ladenbau und Modernisierung für bessere Kundenfrequenz." }
    ]
  };

  const typicalProjectsData = {
    title: "Typische Gewerbeprojekte",
    subtitle: "",
    projects: [
      { title: "Büroausbau", desc: "Trockenbau, Akustikdecken und IT-Verkabelung.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
      { title: "Praxisumbau", desc: "Spezifische Installationen und barrierefreier Zugang.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
      { title: "Gastro-Sanierung", desc: "Brandschutz, Fettabscheider und Gastronomie-Elektrik.", img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten einer Gewerbesanierung",
    subtitle: "Preise richten sich stark nach der Nutzungsart.",
    items: [
      { title: "Büro (Standard)", price: "ab €400 / m²", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
      { title: "Einzelhandel", price: "ab €800 / m²", img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" },
      { title: "Arztpraxis", price: "ab €1.200 / m²", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Können Sie auch nachts oder am Wochenende arbeiten?", a: "Ja, um Ausfallzeiten für Ihr Geschäft zu minimieren, bieten wir flexible Arbeitszeiten an." }
  ];

  const seoContent = (
    <div className="br-seo-text-block mb-8">
      <h3 className="mb-4 text-xl font-bold">Gewerblicher Innenausbau</h3>
      <p className="mb-4 text-gray-600">Brandschutz, Fluchtwege, Arbeitssicherheit: Die Vorgaben für gewerbliche Sanierungen sind streng. Wir kennen die Richtlinien und setzen Gewerbeprojekte rechtssicher um.</p>
    </div>
  );

  return <ServicePageTemplate heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
