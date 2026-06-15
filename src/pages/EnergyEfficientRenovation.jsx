import ServicePageTemplate from '../components/ServicePageTemplate';

export default function EnergyEfficientRenovation() {
  const heroData = {
    title: "Energetische Sanierung",
    titleSpan: "Rhein-Main",
    subtitle: "Energieverbrauch senken, Wohnkomfort steigern.",
    text: "Von der Fassadendämmung bis zur Installation moderner Wärmepumpen. Wir machen Ihre Immobilie fit für die Zukunft und helfen bei der Förderung.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Investieren Sie in die Zukunft Ihres Gebäudes.",
    list: [
      { title: "Eigentümer älterer Häuser", desc: "Senken Sie Ihre Heizkosten dauerhaft durch bessere Dämmung und moderne Heiztechnik." },
      { title: "Umweltbewusste", desc: "Reduzieren Sie den CO₂-Ausstoß Ihrer Immobilie und werden Sie unabhängiger von fossilen Energien." },
      { title: "Verkäufer", desc: "Steigern Sie den Verkaufswert durch eine bessere Energieeffizienzklasse im Energieausweis." },
      { title: "Förder-Interessenten", desc: "Nutzen Sie attraktive Zuschüsse von BAFA und KfW für Ihre Sanierungsmaßnahmen." }
    ]
  };

  const typicalProjectsData = {
    title: "Maßnahmen der energetischen Sanierung",
    subtitle: "Diese Bereiche haben den größten Einfluss auf Ihre Energiekosten.",
    projects: [
      { title: "Wärmepumpe & Heizung", desc: "Austausch alter Öl- oder Gasheizungen.", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" },
      { title: "Dämmung", desc: "Dach-, Fassaden- und Kellerdeckendämmung.", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
      { title: "Fenster & Türen", desc: "Einbau von dreifachverglasten Fenstern.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten einer energetischen Sanierung",
    subtitle: "Dank hoher staatlicher Förderungen (BAFA / KfW) amortisieren sich die Kosten oft schnell.",
    items: [
      { title: "Einzelmaßnahme (z.B. Fenster)", price: "ab €10.000", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
      { title: "Heizungsaustausch", price: "ab €20.000", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
      { title: "Effizienzhaus-Standard", price: "ab €80.000", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Gibt es Förderungen?", a: "Ja. Über die Bundesförderung für effiziente Gebäude (BEG) sind aktuell bis zu 70 % Zuschuss für den Heizungstausch (z. B. Wärmepumpe) und bis zu 20 % für Einzelmaßnahmen wie Dämmung und Fenster möglich. Hinzu kommen zinsgünstige KfW-Kredite. Wir arbeiten mit Energie-Effizienz-Experten zusammen, die die Förderung für Sie beantragen." },
    { q: "Muss ich erst dämmen oder erst die Heizung tauschen?", a: "Optimal ist es, zuerst den Wärmebedarf durch Dämmung und neue Fenster zu senken und dann die neue Heizung – etwa eine Wärmepumpe – passend zur neuen, geringeren Heizlast zu dimensionieren. So vermeiden Sie eine überdimensionierte und teure Anlage. In der Praxis lässt sich beides gut in einem Sanierungsfahrplan kombinieren." },
    { q: "Was ist ein individueller Sanierungsfahrplan (iSFP)?", a: "Der iSFP ist eine geförderte Energieberatung, die Ihr Gebäude analysiert und eine sinnvolle Reihenfolge der Maßnahmen vorschlägt. Wer nach iSFP saniert, erhält zusätzlich 5 % Bonusförderung. Wir empfehlen den iSFP als Startpunkt jeder größeren energetischen Sanierung." },
    { q: "Welche Maßnahme bringt am meisten?", a: "Das hängt vom Gebäude ab. Häufig bringt der Heizungstausch in Kombination mit der Dämmung von Dach und oberster Geschossdecke das beste Verhältnis aus Aufwand und Einsparung. Eine Vor-Ort-Analyse zeigt, wo bei Ihrem Gebäude die größten Energieverluste entstehen." },
    { q: "Brauche ich nach der Dämmung eine Lüftungsanlage?", a: "Eine sehr luftdichte Gebäudehülle kann ohne ausreichenden Luftwechsel zu Feuchtigkeit und Schimmel führen. Oft genügt diszipliniertes Stoßlüften, bei stark gedämmten Gebäuden empfehlen wir jedoch eine kontrollierte Wohnraumlüftung mit Wärmerückgewinnung. Wir beraten Sie individuell." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Energetisch Sanieren mit Experten</h3>
        <p className="mb-4 text-gray-600">Bei der energetischen Sanierung müssen Bauphysik und Haustechnik Hand in Hand gehen. Eine sehr dichte Gebäudehülle erfordert oft ein Lüftungskonzept, um Schimmel zu vermeiden. Radex berät Sie ganzheitlich und betrachtet Ihr Gebäude immer als Gesamtsystem aus Wärmedämmung, Heiztechnik, Lüftung und erneuerbaren Energien.</p>
        <p className="text-gray-600">So stellen wir sicher, dass sich die Maßnahmen ergänzen und Sie das volle Einspar- und Förderpotenzial ausschöpfen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Dämmung & Gebäudehülle</h3>
        <p className="mb-4 text-gray-600">Über ungedämmte Dächer, Fassaden und Kellerdecken geht ein erheblicher Teil der Heizwärme verloren. Mit fachgerechter Dämmung – ob als Wärmedämmverbundsystem, Einblasdämmung oder Innendämmung im Denkmalschutz – senken wir die Wärmeverluste deutlich. Der Austausch alter Fenster gegen dreifachverglaste Modelle verbessert zusätzlich Komfort und Schallschutz.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Heiztechnik & erneuerbare Energien</h3>
        <p className="mb-4 text-gray-600">Das Herzstück der energetischen Sanierung ist eine effiziente, zukunftssichere Heizung. Wir installieren Wärmepumpen, binden Photovoltaik und Solarthermie ein und sorgen mit hydraulischem Abgleich dafür, dass die Wärme dort ankommt, wo sie gebraucht wird. So heizen Sie günstiger und klimafreundlicher.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Förderung & Fördermittel</h3>
        <p className="text-gray-600">Die staatliche Förderung macht energetische Sanierungen besonders attraktiv – sie ist jedoch an Bedingungen, technische Mindestanforderungen und Fristen gebunden. Wichtig: Die Förderung muss in der Regel vor Auftragsvergabe beantragt werden. Wir koordinieren die Zusammenarbeit mit zertifizierten Energie-Effizienz-Experten, damit Sie alle verfügbaren Zuschüsse von BAFA und KfW erhalten.</p>
      </div>
    </>
  );

  const seo = {
    title: "Energetische Sanierung Rhein-Main | Förderung & Wärmepumpe | Radex",
    description: "Energetische Sanierung im Rhein-Main-Gebiet: Dämmung, Fenster, Wärmepumpe & Förderung (BAFA/KfW) aus einer Hand. Heizkosten senken, Wert steigern. Jetzt Beratung sichern!",
    path: "/energetische-sanierung-rhein-main",
    serviceName: "Energetische Sanierung"
  };

  return <ServicePageTemplate seo={seo} heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
