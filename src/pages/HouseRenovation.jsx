import ServicePageTemplate from '../components/ServicePageTemplate';

export default function HouseRenovation() {
  const heroData = {
    title: "Haussanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Ganzheitliche Modernisierung für Einfamilienhäuser und Reihenhäuser.",
    text: "Radex bringt Ihr Haus technisch und optisch auf den neuesten Stand – von der Dacherneuerung bis zur Kellerabdichtung, alles koordiniert aus einer Hand.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Wir sanieren Häuser für unterschiedlichste Anforderungen.",
    list: [
      {
        title: "Hauskäufer",
        desc: "Machen Sie Ihre neu erworbene Bestandsimmobilie einzugsbereit."
      },
      {
        title: "Langzeiteigentümer",
        desc: "Modernisieren Sie Ihr Eigenheim für die nächsten Jahrzehnte."
      },
      {
        title: "Erben",
        desc: "Bringen Sie ein geerbtes Haus auf den aktuellen Stand der Technik."
      }
    ]
  };

  const typicalProjectsData = {
    title: "Typische Sanierungsmaßnahmen",
    subtitle: "Wir decken alle Bereiche der Haussanierung ab.",
    projects: [
      {
        title: "Energetische Sanierung",
        desc: "Dämmung, neue Fenster und moderne Heiztechnik zur Senkung der Energiekosten.",
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Grundrissoptimierung",
        desc: "Schaffung von offeneren Wohnbereichen durch gezielte Wanddurchbrüche.",
        img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Dach & Fassade",
        desc: "Erneuerung der Außenhülle für besseren Schutz und eine moderne Optik.",
        img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800"
      }
    ]
  };

  const costsData = {
    title: "Was kostet eine Haussanierung?",
    subtitle: "Die Kosten hängen stark vom Sanierungsstau und Ihren Wünschen ab.",
    items: [
      { title: "Kosmetische Sanierung", price: "€400 - €600 / m²", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
      { title: "Standard Sanierung", price: "€800 - €1.200 / m²", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
      { title: "Kernsanierung", price: "€1.500 - €2.500 / m²", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Soll ich in Phasen oder komplett sanieren?", a: "Eine Komplettsanierung ist in der Summe meist günstiger und stressfreier, da die Handwerker effizienter arbeiten können. Wenn das Budget knapp ist, sollten jedoch zumindest alle Gewerke, die ineinandergreifen (wie Heizung, Rohre und Böden), zusammen saniert werden." },
    { q: "Gibt es staatliche Förderungen?", a: "Ja, insbesondere für energetische Maßnahmen wie Dämmung, Fensteraustausch oder den Einbau einer Wärmepumpe gibt es attraktive Zuschüsse von BAFA und KfW." },
    { q: "Muss das Dach zwingend saniert werden?", a: "Nicht immer. Wir prüfen den Zustand des Dachstuhls und der Eindeckung. Oft reicht auch eine nachträgliche Dämmung der obersten Geschossdecke aus, um die Energieeffizienz stark zu verbessern." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Ganzheitliche Haussanierung mit Radex</h3>
        <p className="mb-4 text-gray-600">Ein Haus zu sanieren ist ein komplexes Projekt, das viel Erfahrung erfordert. Radex koordiniert alle beteiligten Gewerke – von den Rohbauarbeiten über die Haustechnik bis zum finalen Anstrich. Dadurch vermeiden Sie Leerlaufzeiten und Kommunikationsprobleme zwischen verschiedenen Firmen.</p>
        <p className="text-gray-600">Egal ob Reihenhausbaujahr 1970 oder freistehendes Einfamilienhaus – wir entwickeln ein Sanierungskonzept, das den Charme des Hauses erhält und es gleichzeitig fit für die Zukunft macht.</p>
      </div>
    </>
  );

  return (
    <ServicePageTemplate 
      heroData={heroData}
      whoIsForData={whoIsForData}
      typicalProjectsData={typicalProjectsData}
      costsData={costsData}
      faqsData={faqsData}
      seoContent={seoContent}
    />
  );
}
