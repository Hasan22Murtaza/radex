import ServicePageTemplate from '../components/ServicePageTemplate';

export default function MoldRemediation() {
  const heroData = {
    title: "Schimmelsanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Ursachen beheben, Schimmel dauerhaft entfernen.",
    text: "Professionelle Beseitigung von Feuchtigkeitsschäden und Schimmelpilz durch zertifizierte Experten.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "",
    list: [
      { title: "Mieter & Vermieter", desc: "Klärung der Ursache und schnelle Beseitigung der Gesundheitsgefahr." },
      { title: "Hausbesitzer", desc: "Schutz der Bausubstanz vor langfristigen Schäden." }
    ]
  };

  const typicalProjectsData = {
    title: "Häufige Ursachen",
    subtitle: "",
    projects: [
      { title: "Wasserschaden", desc: "Rohrbruch oder undichtes Dach als Auslöser.", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
      { title: "Kältebrücken", desc: "Kondensationsfeuchte an ungedämmten Außenwänden.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten einer Schimmelsanierung",
    subtitle: "Abhängig vom Befall.",
    items: [
      { title: "Oberflächlich", price: "ab €300", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
      { title: "Tiefsitzend", price: "ab €1.500", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Muss der Putz abgeschlagen werden?", a: "Wenn der Schimmel bereits tief in den Putz eingedrungen ist, reicht oberflächliches Abwaschen nicht aus. Der Putz muss dann fachmännisch erneuert werden." }
  ];

  const seoContent = (
    <div className="br-seo-text-block mb-8">
      <h3 className="mb-4 text-xl font-bold">Zertifizierte Schimmelbeseitigung</h3>
      <p className="mb-4 text-gray-600">Wir entfernen den Schimmel nicht nur, wir finden die Ursache. Mit speziellen Messgeräten orten wir Kältebrücken und Feuchtigkeitsnester.</p>
    </div>
  );

  return <ServicePageTemplate heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
