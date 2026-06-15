import ServicePageTemplate from '../components/ServicePageTemplate';

export default function BathroomRenovation() {
  const heroData = {
    title: "Badsanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Komplettbäder, Badmodernisierung und individuelle Badlösungen aus einer Hand.",
    text: "Als eingetragener SHK-Meisterbetrieb und Generalunternehmer steuert Radex Ihr Badsanierungsprojekt von der ersten Planung bis zur schlüsselfertigen Übergabe.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Maßgeschneiderte Badlösungen für unterschiedliche Bedürfnisse und Lebenssituationen.",
    list: [
      {
        title: "Privathaushalte",
        desc: "Aufwertung des Eigenheims durch ein modernes, komfortables Wohlfühlbad."
      },
      {
        title: "Kapitalanleger",
        desc: "Wertsteigerung der Immobilie und bessere Vermietbarkeit durch sanierte Bäder."
      },
      {
        title: "Senioren & Pflegebedürftige",
        desc: "Altersgerechter, barrierefreier Umbau für mehr Sicherheit und Unabhängigkeit."
      }
    ]
  };

  const typicalProjectsData = {
    title: "Typische Badsanierungsprojekte",
    subtitle: "Egal wie groß Ihr Badezimmer ist, wir haben die passende Lösung.",
    projects: [
      {
        title: "Gäste-WC",
        desc: "Kompakte, clevere Raumnutzung und modernes Design für kleine Flächen.",
        img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Familienbad",
        desc: "Robuste Materialien, viel Stauraum und eine Aufteilung, die allen gerecht wird.",
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Barrierefreies Bad",
        desc: "Bodengleiche Duschen und Haltegriffe für maximalen Komfort in jedem Alter.",
        img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800"
      }
    ]
  };

  const costsData = {
    title: "Wie viel kostet eine Badsanierung?",
    subtitle: "Die tatsächlichen Kosten hängen von der Größe, dem Zustand und der gewünschten Ausstattung Ihres Badezimmers ab. Die folgenden Beispiele geben eine erste Preisorientierung.",
    items: [
      { title: "Gäste-WC", price: "€7.500", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" },
      { title: "Komfortbad", price: "€17.500", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
      { title: "Premium-Wellnessbad", price: "€28.000", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Was ist in einer Badsanierung enthalten?", a: "Eine Komplettbadsanierung umfasst Demontage, Entsorgung, Sanitär- und Elektroinstallationen, Trockenbau, Fliesenarbeiten sowie die Endmontage aller Objekte." },
    { q: "Wie lange dauert eine Badsanierung?", a: "In der Regel dauert eine komplette Badsanierung zwischen 2 und 3 Wochen, abhängig vom Umfang und den räumlichen Gegebenheiten." },
    { q: "Muss ich während der Sanierung ausziehen?", a: "Nein, dank unserer Staubschutzsysteme und sauberen Arbeitsweise können Sie in der Regel in der Wohnung bleiben." },
    { q: "Ist Radex ein eingetragener SHK-Meisterbetrieb?", a: "Ja, wir sind ein lizenzierter SHK-Meisterbetrieb und arbeiten nach höchsten deutschen Handwerksstandards." },
    { q: "In welchen Städten sind Sie tätig?", a: "Wir arbeiten im gesamten Rhein-Main-Gebiet, unter anderem in Frankfurt, Offenbach, Rödermark, Darmstadt und Hanau." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Umfassende Badsanierung im Rhein-Main-Gebiet</h3>
        <p className="mb-4 text-gray-600">Als Fachbetrieb für Komplettbadsanierungen bieten wir Ihnen maßgeschneiderte Lösungen für Ihr neues Badezimmer. Von der ersten Planung über die Badmodernisierung bis hin zur Endmontage übernehmen wir alle Schritte. Wir verarbeiten hochwertige Materialien und garantieren eine fachgerechte Installation nach den neuesten technischen Standards.</p>
        <p className="text-gray-600">Ob Wannenaustausch, bodengleiche Duschen oder barrierefreie Badgestaltung – unsere Experten beraten Sie umfassend zu allen technischen Informationen und Gestaltungsmöglichkeiten für Ihre Badsanierung.</p>
      </div>
      <p className="text-center mb-6 font-semibold">Hier finden Sie detaillierte Informationen zu folgenden Themen:</p>
      <div className="br-seo-tags">
        <span className="br-seo-tag">Komplettbadsanierung</span>
        <span className="br-seo-tag">Badmodernisierung</span>
        <span className="br-seo-tag">Badsanierung</span>
        <span className="br-seo-tag">Wannenaustausch</span>
        <span className="br-seo-tag">Materialien</span>
        <span className="br-seo-tag">Planung</span>
        <span className="br-seo-tag">Technische Infos</span>
      </div>
    </>
  );

  const seo = {
    title: "Badsanierung Rhein-Main | Komplettbad zum Festpreis | Radex",
    description: "Badsanierung im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Komplettbäder, Badmodernisierung & barrierefreie Bäder aus einer Hand. Jetzt Festpreis-Beratung sichern!",
    path: "/badsanierung-rhein-main",
    serviceName: "Badsanierung"
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
