import ServicePageTemplate from '../components/ServicePageTemplate';

export default function ElectricalServices() {
  const heroData = {
    title: "Elektrotechnik im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Sichere Stromverteilung und Smart-Home-Lösungen.",
    text: "Von der klassischen Gebäudeinstallation bis zur intelligenten Haussteuerung und E-Ladestation.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "",
    list: [
      { title: "Sanierer", desc: "Austausch veralteter zweiadriger Leitungen." },
      { title: "Zukunftsorientierte", desc: "Vorbereitung für Wallboxen und PV-Anlagen." }
    ]
  };

  const typicalProjectsData = {
    title: "Elektro-Projekte",
    subtitle: "",
    projects: [
      { title: "Zählerschrank", desc: "Erneuerung der Hauptverteilung nach aktueller TAB.", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
      { title: "Smart Home", desc: "Automatisierung von Licht und Rollläden.", img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten der Elektroinstallation",
    subtitle: "",
    items: [
      { title: "Zählerschrank", price: "ab €2.500", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
      { title: "Komplettverkabelung", price: "ab €10.000", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Muss der Zählerschrank neu?", a: "Bei wesentlichen Änderungen (z.B. Einbau einer Wärmepumpe oder PV-Anlage) fordert der Netzbetreiber oft einen aktuellen Zählerschrank." }
  ];

  const seoContent = (
    <div className="br-seo-text-block mb-8">
      <h3 className="mb-4 text-xl font-bold">VDE-geprüfte Sicherheit</h3>
      <p className="mb-4 text-gray-600">Wir installieren streng nach VDE-Richtlinien und sorgen dafür, dass Ihr Zuhause sicher vor Kabelbränden und Überspannung ist.</p>
    </div>
  );

  return <ServicePageTemplate heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
