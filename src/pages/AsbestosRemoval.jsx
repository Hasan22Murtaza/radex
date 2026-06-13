import ServicePageTemplate from '../components/ServicePageTemplate';

export default function AsbestosRemoval() {
  const heroData = {
    title: "Asbest- & Schadstoffsanierung",
    titleSpan: "TRGS 519 zertifiziert",
    subtitle: "Sichere Entfernung und Entsorgung von Gefahrstoffen.",
    text: "Als zertifizierter Fachbetrieb nach TRGS 519 sanieren wir asbestbelastete Dächer, Fassaden und Innenräume sicher und vorschriftsmäßig.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Wann ist Asbest ein Thema?",
    subtitle: "Gebäude vor Baujahr 1993 sind häufig belastet.",
    list: [
      { title: "Dachsanierung", desc: "Asbestzementplatten (Eternit) auf Dächern." },
      { title: "Innensanierung", desc: "Floor-Flex-Platten, asbesthaltige Kleber oder Rohrisolierungen." }
    ]
  };

  const typicalProjectsData = {
    title: "Unsere Schadstoffsanierungen",
    subtitle: "",
    projects: [
      { title: "Asbestdach", desc: "Abbau und Entsorgung von Wellplatten.", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
      { title: "Asbestböden", desc: "Entfernung von asbesthaltigen PVC-Böden.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten der Asbestsanierung",
    subtitle: "Preise beinhalten Spezialausrüstung und Sondermüll-Entsorgung.",
    items: [
      { title: "Dachsanierung", price: "ab €35 / m²", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
      { title: "Bodenbeläge", price: "ab €60 / m²", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Muss der Bereich abgeschottet werden?", a: "Ja, im Innenbereich arbeiten wir unter Unterdruck mit speziellen Schleusen, damit keine Asbestfasern in andere Räume gelangen." }
  ];

  const seoContent = (
    <div className="br-seo-text-block mb-8">
      <h3 className="mb-4 text-xl font-bold">Zertifizierte Sanierung nach TRGS 519</h3>
      <p className="mb-4 text-gray-600">Die Entfernung von Asbest darf nur von Firmen durchgeführt werden, die den Sachkundenachweis nach TRGS 519 besitzen. Radex verfügt über alle notwendigen Zulassungen und modernstes Equipment.</p>
    </div>
  );

  return <ServicePageTemplate heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
