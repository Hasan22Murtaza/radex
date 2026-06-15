import ServicePageTemplate from '../components/ServicePageTemplate';

export default function CompleteRenovation() {
  const heroData = {
    title: "Komplettsanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Alles aus einer Hand: Ihr Sanierungsprojekt effizient umgesetzt.",
    text: "Eine Komplettsanierung ist ein Großprojekt. Übergeben Sie die Verantwortung an Radex, Ihren zuverlässigen Generalunternehmer für ganzheitliche Umbauten.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Wir realisieren Großprojekte für anspruchsvolle Kunden.",
    list: [
      {
        title: "Immobilienkäufer",
        desc: "Machen Sie aus einem stark sanierungsbedürftigen Objekt Ihr Traumhaus."
      },
      {
        title: "Erbengemeinschaften",
        desc: "Wertmaximierung vor dem Verkauf der Immobilie."
      },
      {
        title: "Bestandshalter",
        desc: "Verlängerung des Gebäudelebenszyklus durch komplette Erneuerung."
      }
    ]
  };

  const typicalProjectsData = {
    title: "Vorteile der Komplettsanierung",
    subtitle: "Warum ein Schnitt oft besser ist als viele kleine.",
    projects: [
      {
        title: "Planungssicherheit",
        desc: "Ein Bauleiter, ein Zeitplan, ein Festpreis.",
        img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Technischer Neustart",
        desc: "Alle Leitungen und Rohre sind neu und aufeinander abgestimmt.",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Kürzere Bauzeit",
        desc: "Keine Pausen zwischen Gewerken durch perfekte Taktung.",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
      }
    ]
  };

  const costsData = {
    title: "Kosten einer Komplettsanierung",
    subtitle: "Eine Komplettsanierung ist eine Investition in die Zukunft Ihrer Immobilie.",
    items: [
      { title: "Standard", price: "ab €1.000 / m²", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
      { title: "Gehoben", price: "ab €1.500 / m²", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
      { title: "Luxus / Denkmalschutz", price: "ab €2.500 / m²", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Wer übernimmt die Bauleitung?", a: "Als Generalunternehmer stellt Radex einen festen Bauleiter, der täglich vor Ort ist und alle Gewerke koordiniert." },
    { q: "Muss ich mich um Baugenehmigungen kümmern?", a: "Nein, auf Wunsch übernehmen unsere Partnerarchitekten die komplette Bauantragsplanung für statische Eingriffe oder Anbauten." },
    { q: "Wie lange dauert eine Kernsanierung?", a: "Je nach Objektgröße und Umfang sollten Sie für ein Einfamilienhaus etwa 3 bis 6 Monate einplanen." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Ihr Generalunternehmer für Komplettsanierungen</h3>
        <p className="mb-4 text-gray-600">Bei einer Komplettsanierung wird die Immobilie oft bis auf die Grundmauern entkernt. Das gibt Ihnen die Möglichkeit, Heizsysteme grundlegend zu ändern (z. B. Umstieg auf eine Wärmepumpe mit Fußbodenheizung), Grundrisse komplett neu zu denken und die Energieeffizienz auf Neubau-Niveau zu heben.</p>
        <p className="text-gray-600">Als Generalunternehmer bündeln wir alle Gewerke unter einem Dach – Sie haben einen Vertrag, einen Festpreis und einen Ansprechpartner für das gesamte Projekt.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Was ist eine Kernsanierung?</h3>
        <p className="mb-4 text-gray-600">Bei einer Kernsanierung wird das Gebäude bis auf die tragende Struktur zurückgebaut. Alle nicht tragenden Wände, sämtliche Leitungen für Strom, Wasser und Heizung sowie Böden und Oberflächen werden vollständig erneuert. Das Ergebnis kommt einem Neubau gleich – mit dem Vorteil, dass Standort, Grundstück und oft auch der besondere Charakter des Hauses erhalten bleiben.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Ablauf einer Komplettsanierung</h3>
        <p className="mb-4 text-gray-600">Wir beginnen mit einer gründlichen Bestandsaufnahme und Planung. Nach dem Festpreisangebot folgen Entkernung, Rohbauarbeiten und statische Eingriffe, anschließend die komplette Haustechnik (Elektro, Heizung, Sanitär), danach Trockenbau, Estrich, Fliesen, Maler und Bodenbeläge. Den Abschluss bilden Feinmontage und Endreinigung. Ein fester Bauleiter sorgt dafür, dass die Gewerke perfekt getaktet ineinandergreifen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Festpreis & Planungssicherheit</h3>
        <p className="text-gray-600">Gerade bei einem Großprojekt wie der Komplettsanierung ist Kostensicherheit entscheidend. Sie erhalten von uns ein verbindliches Festpreisangebot, das alle vereinbarten Leistungen abdeckt. Änderungen während der Bauphase werden transparent dokumentiert und freigegeben – so behalten Sie jederzeit die volle Kontrolle über Ihr Budget.</p>
      </div>
    </>
  );

  const seo = {
    title: "Komplettsanierung Rhein-Main | Kernsanierung zum Festpreis | Radex",
    description: "Komplettsanierung & Kernsanierung im Rhein-Main-Gebiet vom Generalunternehmer: ein Ansprechpartner, ein Festpreis, ein Zeitplan. Jetzt kostenlose Beratung sichern!",
    path: "/komplettsanierung-rhein-main",
    serviceName: "Komplettsanierung"
  };

  return (
    <ServicePageTemplate
      seo={seo}
      heroData={heroData}
      whoIsForData={whoIsForData}
      typicalProjectsData={typicalProjectsData}
      costsData={costsData}
      faqsData={faqsData}
      seoContent={seoContent}
    />
  );
}
