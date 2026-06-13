import ServicePageTemplate from '../components/ServicePageTemplate';

export default function ApartmentRenovation() {
  const heroData = {
    title: "Wohnungssanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Professionelle Komplettsanierung für Wohnungen und Apartments.",
    text: "Als erfahrener Generalunternehmer modernisieren wir Ihre Wohnung termingerecht, staubarm und zum transparenten Festpreis.",
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Passgenaue Sanierungskonzepte für Ihre Immobilie.",
    list: [
      {
        title: "Eigennutzer",
        desc: "Schaffen Sie sich ein modernes Zuhause mit individueller Grundrissgestaltung."
      },
      {
        title: "Kapitalanleger",
        desc: "Steigern Sie den Mietwert und die Rendite Ihrer Eigentumswohnung."
      },
      {
        title: "Erbengemeinschaften",
        desc: "Effiziente Aufwertung vor dem Verkauf oder der Neuvermietung."
      }
    ]
  };

  const typicalProjectsData = {
    title: "Typische Wohnungssanierungen",
    subtitle: "Von der kleinen City-Wohnung bis zum luxuriösen Penthouse.",
    projects: [
      {
        title: "Teilsanierung",
        desc: "Erneuerung von Bad, Böden und Wänden zur schnellen Wertsteigerung.",
        img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Kernsanierung",
        desc: "Umfassende Modernisierung inkl. Elektrik, Heizung und Sanitär.",
        img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Grundrissänderung",
        desc: "Wände entfernen für offene Wohnkonzepte (z.B. offene Küche).",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
      }
    ]
  };

  const costsData = {
    title: "Wie viel kostet eine Wohnungssanierung?",
    subtitle: "Die Kosten variieren je nach Quadratmeterzahl und Leistungsumfang.",
    items: [
      { title: "Kleine Wohnung (bis 50m²)", price: "€25.000", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" },
      { title: "Mittlere Wohnung (bis 90m²)", price: "€45.000", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
      { title: "Große Wohnung (ab 100m²)", price: "€65.000", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Brauche ich eine Baugenehmigung für die Wohnungssanierung?", a: "Für reine Innenarbeiten wie Bodenlegen oder Malern benötigen Sie keine Genehmigung. Wenn jedoch tragende Wände entfernt werden, ist eine Baugenehmigung zwingend erforderlich. Wir kümmern uns gerne um die Abstimmung mit einem Statiker." },
    { q: "Muss die Hausverwaltung informiert werden?", a: "Ja, bei Eingriffen in die Substanz (wie Elektrik, Wasserleitungen oder tragende Wände) sowie bei zu erwartendem Baulärm muss die Hausverwaltung bzw. Eigentümergemeinschaft vorab informiert werden." },
    { q: "Wie lange dauert die Sanierung einer Wohnung?", a: "Eine Komplettsanierung einer 80m² Wohnung dauert in der Regel 6 bis 8 Wochen, vorausgesetzt alle Materialien sind verfügbar." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Wohnungssanierung aus einer Hand</h3>
        <p className="mb-4 text-gray-600">Die Sanierung einer Eigentumswohnung erfordert eine präzise Koordination aller Gewerke, besonders wenn der Platz begrenzt ist oder Rücksicht auf Nachbarn genommen werden muss. Radex übernimmt für Sie die gesamte Bauleitung, vom Abbruch über den Trockenbau bis zur Endreinigung.</p>
        <p className="text-gray-600">Wir beraten Sie auch zu Themen wie Trittschalldämmung, energieeffiziente Fenster und der Erneuerung von veralteten Steigleitungen innerhalb Ihrer Wohneinheit.</p>
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
