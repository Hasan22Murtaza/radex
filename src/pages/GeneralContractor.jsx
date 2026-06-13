import ServicePageTemplate from '../components/ServicePageTemplate';

export default function GeneralContractor() {
  const heroData = {
    title: "Generalunternehmer im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Ein Ansprechpartner für Ihr gesamtes Bauvorhaben.",
    text: "Bauen und Sanieren ohne Stress. Als Ihr Generalunternehmer koordinieren wir alle Gewerke, garantieren Festpreise und halten Termine sicher ein.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Warum ein Generalunternehmer?",
    subtitle: "Vermeiden Sie das Risiko, Handwerker selbst koordinieren zu müssen.",
    list: [
      {
        title: "Ein Vertragspartner",
        desc: "Nur ein Vertrag, eine Rechnung, ein Gewährleistungsgeber."
      },
      {
        title: "Zeitersparnis",
        desc: "Wir übernehmen die gesamte Abstimmung der Gewerke."
      },
      {
        title: "Risikominimierung",
        desc: "Sie sind vor Ausfällen einzelner Handwerker geschützt."
      }
    ]
  };

  const typicalProjectsData = {
    title: "Gewerke, die wir koordinieren",
    subtitle: "Wir haben Zugriff auf ein festes Netzwerk an Handwerkspartnern.",
    projects: [
      {
        title: "Rohbau & Abbruch",
        desc: "Sichere Demontage und statische Eingriffe.",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Haustechnik (TGA)",
        desc: "Elektrik, Heizung, Sanitär und Lüftung perfekt integriert.",
        img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Innenausbau",
        desc: "Trockenbau, Fliesenleger, Maler und Bodenleger Hand in Hand.",
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      }
    ]
  };

  const costsData = {
    title: "Lohnt sich ein Generalunternehmer?",
    subtitle: "Ein GU-Zuschlag zahlt sich durch Fehlervermeidung und Bauzeitverkürzung schnell aus.",
    items: [
      { title: "Planungsphase", price: "Transparente Kostenaufstellung", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
      { title: "Festpreisangebot", price: "Garantierte Bausumme", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" },
      { title: "Gewährleistung", price: "5 Jahre nach BGB", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Wie setzen sich die Kosten zusammen?", a: "In unserem Festpreisangebot sind alle Leistungen der Einzelgewerke plus unsere Koordinationsleistung (GU-Zuschlag) enthalten. Es gibt keine versteckten Kosten." },
    { q: "Was passiert, wenn ein Handwerker ausfällt?", a: "Das ist unser Risiko. Wir haben für jedes Gewerk mehrere Partner und sorgen dafür, dass der Zeitplan durch Ausfälle nicht gefährdet wird." },
    { q: "Arbeiten Sie mit eigenen Mitarbeitern?", a: "Die Kernkompetenzen (wie SHK) decken wir mit eigenen Mitarbeitern ab. Für andere Gewerke (wie Dachdecker) greifen wir auf langjährige, geprüfte Partnerunternehmen zurück." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Der Bauleiter ist Ihr wichtigster Mann</h3>
        <p className="mb-4 text-gray-600">Als Generalunternehmer im Rhein-Main-Gebiet übernehmen wir die Haftung für den gesamten Sanierungsablauf. Der Bauleiter kontrolliert täglich die Ausführungsqualität auf der Baustelle. Wenn der Trockenbauer die Wand nicht im Lot baut, muss sich nicht der Fliesenleger darüber ärgern (und Ihnen einen Aufschlag berechnen) – wir klären das intern, bevor es zum Problem wird.</p>
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
