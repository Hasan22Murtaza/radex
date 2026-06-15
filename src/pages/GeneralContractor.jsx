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
    { q: "Wie setzen sich die Kosten zusammen?", a: "In unserem Festpreisangebot sind alle Leistungen der Einzelgewerke plus unsere Koordinationsleistung (GU-Zuschlag) enthalten. Sie erhalten eine transparente Aufstellung – es gibt keine versteckten Kosten und keine bösen Überraschungen am Bauende." },
    { q: "Was passiert, wenn ein Handwerker ausfällt?", a: "Das ist unser Risiko, nicht Ihres. Wir haben für jedes Gewerk mehrere geprüfte Partner und sorgen dafür, dass der Zeitplan durch krankheits- oder kapazitätsbedingte Ausfälle nicht gefährdet wird." },
    { q: "Arbeiten Sie mit eigenen Mitarbeitern?", a: "Die Kernkompetenzen wie SHK (Sanitär, Heizung, Klima) decken wir mit eigenen Meistern und Monteuren ab. Für weitere Gewerke wie Dachdecker, Fenster- oder Gerüstbau greifen wir auf ein festes Netzwerk langjähriger, geprüfter Partnerunternehmen zurück." },
    { q: "Wer haftet bei Mängeln?", a: "Als Generalunternehmer sind wir Ihr alleiniger Vertragspartner und übernehmen die Gewährleistung für das gesamte Projekt – fünf Jahre nach BGB. Sie müssen sich nicht mit einzelnen Handwerksbetrieben auseinandersetzen, falls etwas nachgebessert werden muss." },
    { q: "Übernehmen Sie auch die Planung und Genehmigungen?", a: "Ja. Auf Wunsch übernehmen unsere Partnerarchitekten und Statiker die komplette Planung, Bauantragsstellung und Abstimmung mit Behörden – etwa bei tragenden Eingriffen, Anbauten oder Nutzungsänderungen." },
    { q: "Wie behalte ich den Überblick über den Baufortschritt?", a: "Sie haben einen festen Bauleiter als zentralen Ansprechpartner. Er informiert Sie regelmäßig über den Fortschritt, koordiniert Entscheidungen und ist bei Fragen jederzeit erreichbar – persönlich, telefonisch oder per WhatsApp." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Der Bauleiter ist Ihr wichtigster Mann</h3>
        <p className="mb-4 text-gray-600">Als Generalunternehmer im Rhein-Main-Gebiet übernehmen wir die Haftung für den gesamten Sanierungsablauf. Der Bauleiter kontrolliert täglich die Ausführungsqualität auf der Baustelle. Wenn der Trockenbauer die Wand nicht im Lot baut, muss sich nicht der Fliesenleger darüber ärgern (und Ihnen einen Aufschlag berechnen) – wir klären das intern, bevor es zum Problem wird.</p>
        <p className="text-gray-600">Diese durchgehende Verantwortung von der ersten Planung bis zur Schlüsselübergabe ist der entscheidende Vorteil gegenüber der Einzelvergabe an verschiedene Firmen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Generalunternehmer vs. Einzelvergabe</h3>
        <p className="mb-4 text-gray-600">Bei der Einzelvergabe beauftragen Sie jeden Handwerker selbst, holen einzelne Angebote ein, koordinieren Termine und tragen das volle Risiko bei Verzögerungen und Schnittstellenproblemen. Als Generalunternehmer bündeln wir all das: ein Vertrag, ein Ansprechpartner, ein Festpreis, ein Gewährleistungsgeber. Der scheinbar höhere Preis durch den GU-Zuschlag wird in der Praxis fast immer durch eine kürzere Bauzeit, bessere Konditionen im Einkauf und die Vermeidung von Planungsfehlern ausgeglichen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Bauleitung & Projektsteuerung</h3>
        <p className="mb-4 text-gray-600">Unsere Bauleitung umfasst die Ablaufplanung, die Terminierung der Gewerke, die Qualitätskontrolle, das Mängelmanagement und die kaufmännische Abwicklung. Wir erstellen einen verbindlichen Bauzeitenplan, dokumentieren den Fortschritt und sorgen dafür, dass jedes Gewerk zur richtigen Zeit am richtigen Ort ist. So entstehen keine Leerlaufzeiten – und Ihr Projekt bleibt im Zeit- und Kostenrahmen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Festpreisgarantie & Gewährleistung</h3>
        <p className="text-gray-600">Vor Baubeginn erhalten Sie ein detailliertes Festpreisangebot, das alle vereinbarten Leistungen verbindlich abdeckt. So haben Sie volle Kostensicherheit. Nach Abschluss übernehmen wir die gesetzliche Gewährleistung von fünf Jahren auf das Gesamtwerk – Sie haben einen einzigen Ansprechpartner, falls einmal etwas nachzubessern ist.</p>
      </div>
    </>
  );

  const seo = {
    title: "Generalunternehmer Rhein-Main | Sanierung aus einer Hand | Radex",
    description: "Generalunternehmer im Rhein-Main-Gebiet: ein Vertragspartner, ein Festpreis, ein Bauleiter für Ihr gesamtes Sanierungsprojekt. 5 Jahre Gewährleistung. Jetzt anfragen!",
    path: "/generalunternehmer-rhein-main",
    serviceName: "Generalunternehmer"
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
