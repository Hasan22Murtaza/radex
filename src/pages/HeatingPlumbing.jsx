import ServicePageTemplate from '../components/ServicePageTemplate';

export default function HeatingPlumbing() {
  const heroData = {
    title: "Heizung & Sanitär im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Zukunftssichere Haustechnik vom SHK-Meisterbetrieb.",
    text: "Planung, Installation und Wartung von modernen Heizsystemen (Wärmepumpen) und Trinkwasserinstallationen.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "",
    list: [
      { title: "Bauherren", desc: "Heizungstechnik für den Neubau." },
      { title: "Modernisierer", desc: "Austausch der alten Öl-/Gasheizung gegen eine Wärmepumpe." }
    ]
  };

  const typicalProjectsData = {
    title: "Unsere SHK-Leistungen",
    subtitle: "",
    projects: [
      { title: "Wärmepumpen", desc: "Luft-Wasser und Sole-Wasser Wärmepumpen.", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" },
      { title: "Fußbodenheizung", desc: "Einfräsen oder klassische Verlegung.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten für Heizung & Sanitär",
    subtitle: "",
    items: [
      { title: "Wärmepumpe", price: "ab €25.000", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" },
      { title: "Fußbodenheizung", price: "ab €50 / m²", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Ist eine Wärmepumpe im Altbau sinnvoll?", a: "Oft ja, wenn Vorlauftemperaturen durch Heizkörpertypen oder Dämmung gesenkt werden können." }
  ];

  const seoContent = (
    <div className="br-seo-text-block mb-8">
      <h3 className="mb-4 text-xl font-bold">SHK-Handwerk auf höchstem Niveau</h3>
      <p className="mb-4 text-gray-600">Als eingetragener SHK-Meisterbetrieb sind wir Ihr zertifizierter Partner für die Trinkwasserhygiene und die fachgerechte Heizungsinstallation.</p>
    </div>
  );

  return <ServicePageTemplate heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
