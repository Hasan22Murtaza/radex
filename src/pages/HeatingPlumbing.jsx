import ServicePageTemplate from '../components/ServicePageTemplate';

export default function HeatingPlumbing() {
  const heroData = {
    title: "Heizung & Sanitär im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Zukunftssichere Haustechnik vom zugelassenen SHK-Meisterbetrieb.",
    text: "Planung, Installation und Wartung moderner Heizsysteme, Wärmepumpen und Trinkwasserinstallationen – fachgerecht ausgeführt nach aktuellen Normen und aus einer Hand.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Vom Heizungstausch bis zur kompletten Sanitärinstallation.",
    list: [
      { title: "Bauherren", desc: "Komplette Heizungs- und Sanitärtechnik für Neubauten – effizient geplant und sauber installiert." },
      { title: "Modernisierer", desc: "Austausch der alten Öl- oder Gasheizung gegen eine förderfähige Wärmepumpe." },
      { title: "Eigentümer & Vermieter", desc: "Erneuerung veralteter Bleitungen, Sicherung der Trinkwasserhygiene und Wartung der Anlagen." },
      { title: "Sanierungsprojekte", desc: "Integration der Haustechnik in eine Komplett- oder Badsanierung aus einer Hand." }
    ]
  };

  const typicalProjectsData = {
    title: "Unsere SHK-Leistungen",
    subtitle: "Heizung, Sanitär und Klimatechnik aus einer Hand.",
    projects: [
      { title: "Wärmepumpen", desc: "Luft-Wasser- und Sole-Wasser-Wärmepumpen inkl. hydraulischem Abgleich und Förderabwicklung.", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" },
      { title: "Fußbodenheizung", desc: "Nachträgliches Einfräsen im Bestand oder klassische Verlegung im Neubau.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
      { title: "Sanitärinstallation", desc: "Erneuerung von Trinkwasser- und Abwasserleitungen, Bäder und barrierefreie Lösungen.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten für Heizung & Sanitär",
    subtitle: "Preise sind Richtwerte und abhängig von Gebäude, Technik und Aufwand.",
    items: [
      { title: "Wärmepumpe (inkl. Einbau)", price: "ab €25.000", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" },
      { title: "Fußbodenheizung", price: "ab €50 / m²", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
      { title: "Heizkörper-Austausch", price: "ab €600 / Stück", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Ist eine Wärmepumpe im Altbau sinnvoll?", a: "Oft ja. Entscheidend ist eine möglichst niedrige Vorlauftemperatur. Diese erreichen wir durch große Heizflächen (Fußboden- oder Niedertemperaturheizkörper) und eine verbesserte Dämmung. Im Rahmen einer Vor-Ort-Analyse prüfen wir die Heizlast Ihres Gebäudes und sagen Ihnen verbindlich, ob sich eine Wärmepumpe lohnt." },
    { q: "Welche Förderungen gibt es für den Heizungstausch?", a: "Über die Bundesförderung für effiziente Gebäude (BEG) sind aktuell Zuschüsse von bis zu 70 % für den Einbau einer Wärmepumpe möglich (Grundförderung, Klimageschwindigkeits- und Einkommensbonus). Wir übernehmen auf Wunsch die komplette Förderabwicklung mit Energie-Effizienz-Experten." },
    { q: "Wie lange dauert ein Heizungsaustausch?", a: "Ein reiner Kesseltausch ist meist in 2 bis 3 Tagen erledigt. Der Umstieg auf eine Wärmepumpe inklusive hydraulischem Abgleich und ggf. neuen Heizflächen dauert je nach Umfang etwa 1 bis 2 Wochen." },
    { q: "Müssen die Wasserleitungen bei einer Sanierung erneuert werden?", a: "Alte verzinkte Stahl- oder Bleileitungen sollten dringend ersetzt werden, da sie verkalken und die Trinkwasserqualität beeinträchtigen. Bei einer Bad- oder Komplettsanierung erneuern wir die Leitungen direkt mit, solange die Wände ohnehin geöffnet sind." },
    { q: "Bieten Sie auch Wartung und Notdienst an?", a: "Ja. Als SHK-Meisterbetrieb warten wir Ihre Heizungs- und Sanitäranlagen regelmäßig und stehen bei akuten Störungen wie Heizungsausfall oder Wasserschäden schnell zur Verfügung." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">SHK-Handwerk auf höchstem Niveau</h3>
        <p className="mb-4 text-gray-600">Als eingetragener SHK-Meisterbetrieb (Sanitär, Heizung, Klima) sind wir Ihr zertifizierter Partner für die fachgerechte Heizungsinstallation und die Sicherung der Trinkwasserhygiene im gesamten Rhein-Main-Gebiet. Vom ersten Planungsgespräch über die Wärmebedarfsberechnung bis zur Inbetriebnahme und Wartung erhalten Sie alle Leistungen aus einer Hand – ohne Schnittstellenprobleme zwischen verschiedenen Firmen.</p>
        <p className="text-gray-600">Wir arbeiten mit Markenherstellern wie Viessmann, Vaillant, Bosch und Grohe zusammen und installieren ausschließlich Komponenten, die zu Ihrem Gebäude und Ihrem Budget passen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Heizungsmodernisierung & Wärmepumpe</h3>
        <p className="mb-4 text-gray-600">Der Umstieg von fossilen Brennstoffen auf eine Wärmepumpe ist einer der wichtigsten Schritte zu einem zukunftssicheren und kostengünstigen Heizsystem. Wir analysieren die Heizlast Ihres Gebäudes, führen einen hydraulischen Abgleich durch und sorgen dafür, dass Vorlauftemperaturen und Heizflächen optimal aufeinander abgestimmt sind. So holen Sie die maximale Effizienz aus Ihrer Anlage – und die volle Förderung vom Staat.</p>
        <p className="text-gray-600">Auch hybride Lösungen (z. B. Wärmepumpe in Kombination mit einer bestehenden Gasheizung) oder die Anbindung an eine Photovoltaikanlage realisieren wir zuverlässig.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Sanitärinstallation & Trinkwasserhygiene</h3>
        <p className="mb-4 text-gray-600">Veraltete Leitungen sind ein Hygiene- und Gesundheitsrisiko. Wir erneuern Trinkwasser- und Abwasserleitungen vollständig, installieren moderne Vorwandsysteme und sorgen für eine normgerechte Verrohrung nach DIN 1988 und der Trinkwasserverordnung. Auf Wunsch realisieren wir barrierefreie und altersgerechte Sanitärlösungen wie bodengleiche Duschen, Stützgriffe und unterfahrbare Waschtische.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Fördermittel & Beratung</h3>
        <p className="text-gray-600">Die Beantragung von Fördermitteln über BAFA und KfW ist komplex und an Fristen gebunden. Wir arbeiten eng mit zertifizierten Energie-Effizienz-Experten zusammen, die Sie durch den Förderdschungel begleiten – damit Sie keine Zuschüsse verschenken. Sprechen Sie uns frühzeitig an, denn die Förderung muss in der Regel vor Auftragsvergabe beantragt werden.</p>
      </div>
    </>
  );

  const seo = {
    title: "Heizung & Sanitär Rhein-Main | Wärmepumpe vom SHK-Meister | Radex",
    description: "Heizung & Sanitär im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Wärmepumpe, Heizungstausch, Fußbodenheizung & Sanitärinstallation inkl. Förderung. Jetzt Beratung sichern!",
    path: "/heizung-sanitaer-rhein-main",
    serviceName: "Heizung & Sanitär"
  };

  return <ServicePageTemplate seo={seo} heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
