import ServicePageTemplate from '../components/ServicePageTemplate';

export default function EnergyEfficientRenovation() {
  const heroData = {
    title: "Energetische Sanierung",
    titleSpan: "Rhein-Main",
    subtitle: "Energieverbrauch senken, Wohnkomfort steigern.",
    text: "Von der Fassadendämmung bis zur Installation moderner Wärmepumpen. Wir machen Ihre Immobilie fit für die Zukunft und helfen bei der Förderung.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Investieren Sie in die Zukunft Ihres Gebäudes.",
    list: [
      { title: "Eigentümer älterer Häuser", desc: "Senken Sie Heizkosten durch bessere Dämmung." },
      { title: "Umweltbewusste", desc: "Reduzieren Sie den CO2-Ausstoß Ihrer Immobilie." },
      { title: "Verkäufer", desc: "Steigern Sie den Wert durch eine bessere Energieeffizienzklasse." }
    ]
  };

  const typicalProjectsData = {
    title: "Maßnahmen der energetischen Sanierung",
    subtitle: "Diese Bereiche haben den größten Einfluss auf Ihre Energiekosten.",
    projects: [
      { title: "Wärmepumpe & Heizung", desc: "Austausch alter Öl- oder Gasheizungen.", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" },
      { title: "Dämmung", desc: "Dach-, Fassaden- und Kellerdeckendämmung.", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
      { title: "Fenster & Türen", desc: "Einbau von dreifachverglasten Fenstern.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten einer energetischen Sanierung",
    subtitle: "Dank hoher staatlicher Förderungen (BAFA / KfW) amortisieren sich die Kosten oft schnell.",
    items: [
      { title: "Einzelmaßnahme (z.B. Fenster)", price: "ab €10.000", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
      { title: "Heizungsaustausch", price: "ab €20.000", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
      { title: "Effizienzhaus-Standard", price: "ab €80.000", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Gibt es Förderungen?", a: "Ja, bis zu 70% für bestimmte Heizsysteme und bis zu 20% für Dämmmaßnahmen." },
    { q: "Muss ich erst dämmen oder erst die Heizung tauschen?", a: "Optimal ist es, zuerst den Wärmebedarf durch Dämmung zu senken und dann die neue Heizung (z.B. Wärmepumpe) passend zur neuen, geringeren Heizlast zu dimensionieren." }
  ];

  const seoContent = (
    <div className="br-seo-text-block mb-8">
      <h3 className="mb-4 text-xl font-bold">Energetisch Sanieren mit Experten</h3>
      <p className="mb-4 text-gray-600">Bei der energetischen Sanierung müssen Bauphysik und Haustechnik Hand in Hand gehen. Eine sehr dichte Gebäudehülle erfordert oft ein Lüftungskonzept, um Schimmel zu vermeiden. Radex berät Sie ganzheitlich.</p>
    </div>
  );

  return <ServicePageTemplate heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
