import ServicePageTemplate from '../components/ServicePageTemplate';

export default function HistoricBuildingRenovation() {
  const heroData = {
    title: "Altbausanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Historischen Charme erhalten, moderne Technik integrieren.",
    text: "Wir modernisieren Ihren Altbau behutsam und fachgerecht. Von der Erneuerung der Haustechnik bis zum Erhalt von Stuck und Dielenböden.",
    image: "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Altbausanierung erfordert besonderes Fingerspitzengefühl.",
    list: [
      {
        title: "Liebhaber historischer Immobilien",
        desc: "Erhalt von Charakter bei gleichzeitiger energetischer Aufwertung."
      },
      {
        title: "Investoren",
        desc: "Aufwertung von klassischen Gründerzeithäusern zur Neuvermietung."
      },
      {
        title: "Käufer von Bestandsbauten",
        desc: "Sanierungsstau sicher und planbar beheben lassen."
      }
    ]
  };

  const typicalProjectsData = {
    title: "Typische Herausforderungen im Altbau",
    subtitle: "Erfahrung ist bei historischen Bausubstanzen entscheidend.",
    projects: [
      {
        title: "Stuck & Böden",
        desc: "Behutsame Aufarbeitung historischer Details und Dielen.",
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Leitungserneuerung",
        desc: "Kompletter Austausch veralteter Strom- und Bleiwasserleitungen.",
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Dämmung",
        desc: "Innendämmung bei denkmalgeschützten Fassaden.",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
      }
    ]
  };

  const costsData = {
    title: "Was kostet eine Altbausanierung?",
    subtitle: "Aufgrund der individuellen Substanz sind Altbauten schwerer zu pauschalisieren.",
    items: [
      { title: "Kosmetisch (Böden/Wände)", price: "ab €500 / m²", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
      { title: "Technik & Bäder", price: "ab €1.200 / m²", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
      { title: "Denkmalschutz-Kernsanierung", price: "ab €2.500 / m²", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Was bedeutet Denkmalschutz für die Sanierung?", a: "Bei denkmalgeschützten Gebäuden müssen alle Änderungen außen (oft auch innen) mit der Denkmalschutzbehörde abgestimmt werden. Dies betrifft meist Fenster, Fassade und Dach." },
    { q: "Können alte Dielenböden gerettet werden?", a: "In vielen Fällen ja. Durch fachmännisches Abschleifen und Neuversiegeln können alte Holzdielen in neuem Glanz erstrahlen." },
    { q: "Gibt es spezielle Förderungen für Altbauten?", a: "Ja, die KfW bietet spezielle Programme ('Effizienzhaus Denkmal') mit erleichterten Bedingungen für historische Gebäude an." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Experten für Altbausanierung</h3>
        <p className="mb-4 text-gray-600">Ein Altbau erfordert Handwerker, die alte Bautechniken verstehen. Radex vereint das Wissen um historische Baumaterialien mit modernen Techniken. Egal ob Holzbalkendecke, Fachwerkwände oder alte Bleirohre – wir wissen genau, was zu tun ist, um die Statik nicht zu gefährden und Schimmelbildung durch falsche Dämmung zu vermeiden.</p>
        <p className="text-gray-600">Bei jedem Schritt wägen wir ab zwischen dem Erhalt des historischen Charakters und den Anforderungen an modernes, energieeffizientes Wohnen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Denkmalschutz & Behördenabstimmung</h3>
        <p className="mb-4 text-gray-600">Bei denkmalgeschützten Gebäuden ist jede Veränderung mit der Denkmalschutzbehörde abzustimmen. Wir kennen den Ablauf, bereiten die nötigen Unterlagen vor und finden Lösungen, die sowohl den Auflagen als auch Ihren Wünschen gerecht werden – etwa denkmalgerechte Fenster, die innen modernen Komfort bieten und außen das historische Erscheinungsbild wahren.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Bauphysik im Altbau</h3>
        <p className="mb-4 text-gray-600">Altbauten „atmen" anders als moderne Gebäude. Eine falsch ausgeführte Dämmung kann zu Tauwasser und Schimmel führen. Deshalb setzen wir auf bauphysikalisch geprüfte Konzepte wie kapillaraktive Innendämmung und feuchteregulierende Materialien, die zur historischen Bausubstanz passen. So verbessern wir die Energieeffizienz, ohne die Substanz zu schädigen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Erhalt historischer Details</h3>
        <p className="text-gray-600">Stuckdecken, Kassettentüren, originale Dielenböden und schmiedeeiserne Geländer machen den Charme eines Altbaus aus. Wir arbeiten diese Elemente behutsam auf, statt sie zu ersetzen, und integrieren moderne Technik so unauffällig wie möglich. Das Ergebnis ist ein Zuhause, das Geschichte atmet und gleichzeitig allen Komfort der Gegenwart bietet.</p>
      </div>
    </>
  );

  const seo = {
    title: "Altbausanierung Rhein-Main | Denkmalgerecht modernisieren | Radex",
    description: "Altbausanierung im Rhein-Main-Gebiet: historischen Charme erhalten, moderne Technik integrieren. Denkmalgerecht, fachgerecht, aus einer Hand. Jetzt Beratung sichern!",
    path: "/sanierung/altbausanierung",
    serviceName: "Altbausanierung"
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
