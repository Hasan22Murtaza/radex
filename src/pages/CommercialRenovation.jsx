import ServicePageTemplate from '../components/ServicePageTemplate';

export default function CommercialRenovation() {
  const heroData = {
    title: "Gewerbesanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Schnell, präzise und außerhalb der Öffnungszeiten.",
    text: "Sanierung von Büros, Praxen und Gastronomieflächen mit minimaler Betriebsunterbrechung.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "",
    list: [
      { title: "Bürobetreiber", desc: "Moderne Arbeitswelten (New Work) schaffen." },
      { title: "Arztpraxen", desc: "Sanierung unter strengen hygienischen Auflagen." },
      { title: "Einzelhandel", desc: "Ladenbau und Modernisierung für bessere Kundenfrequenz." }
    ]
  };

  const typicalProjectsData = {
    title: "Typische Gewerbeprojekte",
    subtitle: "",
    projects: [
      { title: "Büroausbau", desc: "Trockenbau, Akustikdecken und IT-Verkabelung.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
      { title: "Praxisumbau", desc: "Spezifische Installationen und barrierefreier Zugang.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
      { title: "Gastro-Sanierung", desc: "Brandschutz, Fettabscheider und Gastronomie-Elektrik.", img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten einer Gewerbesanierung",
    subtitle: "Preise richten sich stark nach der Nutzungsart.",
    items: [
      { title: "Büro (Standard)", price: "ab €400 / m²", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
      { title: "Einzelhandel", price: "ab €800 / m²", img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" },
      { title: "Arztpraxis", price: "ab €1.200 / m²", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Können Sie auch nachts oder am Wochenende arbeiten?", a: "Ja. Um Ausfallzeiten für Ihren Betrieb zu minimieren, bieten wir flexible Arbeitszeiten an – auch außerhalb Ihrer Öffnungs- und Geschäftszeiten, an Wochenenden oder in den Betriebsferien. So bleibt Ihr Geschäftsbetrieb möglichst ungestört." },
    { q: "Berücksichtigen Sie Brandschutz und Arbeitssicherheit?", a: "Selbstverständlich. Gewerbliche Räume unterliegen strengen Vorgaben zu Brandschutz, Fluchtwegen, Arbeitsstätten- und Versammlungsstättenverordnung. Wir kennen die geltenden Richtlinien, stimmen uns bei Bedarf mit Brandschutzsachverständigen ab und setzen Ihr Projekt rechtssicher um." },
    { q: "Können Sie während des laufenden Betriebs sanieren?", a: "In vielen Fällen ja. Mit Staubschutzwänden, abschnittsweiser Ausführung und sauberer Baustellenorganisation lassen sich Teilbereiche sanieren, während andere weiter genutzt werden. Wir erstellen dazu einen abgestimmten Bauzeitenplan." },
    { q: "Übernehmen Sie auch die Mieterausbau-Koordination?", a: "Ja. Beim Tenant Fit-Out koordinieren wir den kompletten Ausbau nach den Anforderungen des Mieters und den Vorgaben des Vermieters – von der Grundrissplanung über Technik bis zur schlüsselfertigen Übergabe." },
    { q: "Wie schnell können Sie starten?", a: "Nach der Vor-Ort-Begehung und dem Festpreisangebot können wir je nach Projektgröße und Materialverfügbarkeit kurzfristig beginnen. Bei dringenden gewerblichen Projekten bieten wir auf Wunsch eine beschleunigte Abwicklung an." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Gewerblicher Innenausbau</h3>
        <p className="mb-4 text-gray-600">Brandschutz, Fluchtwege, Arbeitssicherheit: Die Vorgaben für gewerbliche Sanierungen sind streng. Wir kennen die einschlägigen Richtlinien – von der Arbeitsstättenverordnung über die Versammlungsstättenverordnung bis zu den Brandschutzauflagen – und setzen Ihr Gewerbeprojekt rechtssicher und fristgerecht um. Als Generalunternehmer koordinieren wir alle Gewerke aus einer Hand und sorgen für einen verbindlichen Festpreis.</p>
        <p className="text-gray-600">Vom Büro über die Arztpraxis bis zur Gastronomie- und Einzelhandelsfläche realisieren wir Projekte jeder Größenordnung im gesamten Rhein-Main-Gebiet.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Büro- & Objektsanierung</h3>
        <p className="mb-4 text-gray-600">Moderne Arbeitswelten brauchen flexible Raumkonzepte. Wir schaffen offene Bürolandschaften, ruhige Rückzugsräume und Besprechungszonen durch Trockenbau, Akustikdecken und durchdachte Beleuchtung. Dabei integrieren wir die nötige IT- und Elektroinfrastruktur sauber in die Gestaltung – für ein repräsentatives und produktives Arbeitsumfeld.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Praxen, Gastronomie & Einzelhandel</h3>
        <p className="mb-4 text-gray-600">Für Arztpraxen setzen wir hygienische Oberflächen, barrierefreie Zugänge und spezielle Installationen um. In der Gastronomie berücksichtigen wir Brandschutz, Fettabscheider, Lüftung und die besondere Elektrik von Küchen. Im Einzelhandel sorgen wir mit ansprechendem Ladenbau für eine Umgebung, die Kunden anzieht und zum Verweilen einlädt.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Mieterausbau & Tenant Fit-Out</h3>
        <p className="text-gray-600">Beim Mieterausbau übernehmen wir die komplette Umsetzung der Mieterwünsche im Rahmen der vereinbarten Ausbaustandards. Wir koordinieren zwischen Eigentümer, Mieter und allen Fachfirmen, achten auf Termintreue und übergeben die Fläche schlüsselfertig – damit Ihr neuer Mieter pünktlich einziehen kann.</p>
      </div>
    </>
  );

  const seo = {
    title: "Gewerbesanierung Rhein-Main | Büro, Praxis & Ladenbau | Radex",
    description: "Gewerbe- & Objektsanierung im Rhein-Main-Gebiet: Büroumbau, Praxis, Gastronomie, Einzelhandel & Mieterausbau mit minimaler Betriebsunterbrechung. Jetzt Projekt besprechen!",
    path: "/gewerbe-objektsanierung-rhein-main",
    serviceName: "Gewerbesanierung"
  };

  return <ServicePageTemplate seo={seo} heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
