import ServicePageTemplate from '../components/ServicePageTemplate';

export default function ElectricalServices() {
  const heroData = {
    title: "Elektrotechnik im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Sichere Stromverteilung, moderne Gebäudetechnik und Smart-Home-Lösungen.",
    text: "Von der klassischen Elektroinstallation über die Erneuerung veralteter Leitungen bis zur intelligenten Haussteuerung, Wallbox und PV-Vorbereitung – alles fachgerecht nach VDE.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Sicherheit und Komfort durch moderne Elektrotechnik.",
    list: [
      { title: "Sanierer", desc: "Austausch veralteter, zweiadriger Leitungen ohne Schutzleiter und nicht mehr zulässiger Sicherungen." },
      { title: "Zukunftsorientierte", desc: "Vorbereitung für Wallboxen, PV-Anlagen, Batteriespeicher und Smart-Home-Technik." },
      { title: "Bauherren", desc: "Komplette Elektroplanung und -installation für den Neubau nach aktueller TAB." },
      { title: "Eigentümer", desc: "Erneuerung des Zählerschranks und Umrüstung auf FI-Schutzschalter für mehr Sicherheit." }
    ]
  };

  const typicalProjectsData = {
    title: "Elektro-Projekte",
    subtitle: "Vom Sicherungskasten bis zur kompletten Hausautomation.",
    projects: [
      { title: "Zählerschrank", desc: "Erneuerung der Hauptverteilung nach aktueller TAB und Anmeldung beim Netzbetreiber.", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
      { title: "Smart Home", desc: "Automatisierung von Licht, Heizung, Rollläden und Sicherheit über KNX oder Funk.", img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800" },
      { title: "E-Mobilität & PV", desc: "Installation von Wallboxen und Vorbereitung für Photovoltaik und Speicher.", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten der Elektroinstallation",
    subtitle: "Richtwerte – die genauen Kosten ergeben sich aus dem Aufwand vor Ort.",
    items: [
      { title: "Zählerschrank erneuern", price: "ab €2.500", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
      { title: "Wallbox-Installation", price: "ab €1.200", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800" },
      { title: "Komplettverkabelung", price: "ab €10.000", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Muss der Zählerschrank neu?", a: "Bei wesentlichen Änderungen – etwa dem Einbau einer Wärmepumpe, einer PV-Anlage oder einer Wallbox – verlangt der Netzbetreiber in der Regel einen aktuellen, normgerechten Zählerschrank. Auch bei sehr alten Anlagen ohne FI-Schutzschalter empfehlen wir dringend eine Erneuerung." },
    { q: "Woran erkenne ich, dass meine Elektrik veraltet ist?", a: "Typische Anzeichen sind alte Drehsicherungen statt Automaten, fehlende FI-Schutzschalter, zu wenige Steckdosen, stoffummantelte Leitungen oder häufig auslösende Sicherungen. In Gebäuden vor 1973 fehlt oft ein durchgängiger Schutzleiter – das ist sicherheitskritisch." },
    { q: "Kann ich mein Haus auf eine Wallbox vorbereiten?", a: "Ja. Wir prüfen die Leistungsreserve Ihres Hausanschlusses, verlegen die nötigen Leitungen und installieren die Wallbox normgerecht. Wallboxen über 11 kW sind genehmigungspflichtig – um die Anmeldung beim Netzbetreiber kümmern wir uns." },
    { q: "Lässt sich ein Smart Home nachrüsten?", a: "Auf jeden Fall. Im Bestand setzen wir meist auf Funk-Systeme, die ohne aufwändiges Schlitzen auskommen. Bei einer Sanierung oder im Neubau empfehlen wir das kabelgebundene KNX-System für maximale Zuverlässigkeit." },
    { q: "Erstellen Sie auch einen E-Check?", a: "Ja, wir führen den normgerechten E-Check durch und dokumentieren den sicherheitstechnischen Zustand Ihrer Elektroanlage – wichtig für Vermieter, Versicherungen und beim Immobilienverkauf." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">VDE-geprüfte Sicherheit</h3>
        <p className="mb-4 text-gray-600">Wir installieren streng nach den aktuellen VDE-Richtlinien und den technischen Anschlussbedingungen (TAB) der Netzbetreiber. So sorgen wir dafür, dass Ihr Zuhause zuverlässig vor Kabelbränden, Überspannung und Stromschlägen geschützt ist. Jede Installation wird nach Fertigstellung gemessen, geprüft und protokolliert.</p>
        <p className="text-gray-600">Als Teil eines SHK-Meisterbetriebs und Generalunternehmers koordinieren wir die Elektrotechnik nahtlos mit allen anderen Gewerken – ideal bei Bad-, Wohnungs- und Komplettsanierungen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Elektrosanierung im Altbau</h3>
        <p className="mb-4 text-gray-600">In älteren Gebäuden ist die Elektroinstallation häufig nicht mehr auf dem Stand der Technik: zu wenige Stromkreise, fehlende Schutzleiter und veraltete Verteiler überfordern die heutige Vielzahl an Geräten. Wir erneuern die komplette Verkabelung, setzen ausreichend Steckdosen und Netzwerkanschlüsse und bringen die Anlage auf ein sicheres, zukunftsfähiges Niveau – auf Wunsch staubarm und in bewohntem Zustand.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Smart Home & Gebäudeautomation</h3>
        <p className="mb-4 text-gray-600">Moderne Gebäudetechnik bedeutet mehr als nur Licht und Steckdosen. Mit intelligenter Steuerung von Beleuchtung, Heizung, Beschattung und Sicherheitstechnik erhöhen Sie Komfort und Energieeffizienz. Ob über das bewährte KNX-System oder flexible Funklösungen – wir planen Ihr Smart Home so, dass es zu Ihrem Alltag passt und jederzeit erweiterbar bleibt.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">E-Mobilität & Photovoltaik</h3>
        <p className="text-gray-600">Die Energiewende beginnt zu Hause. Wir installieren Wallboxen für Ihr Elektrofahrzeug, bereiten Ihr Dach für eine Photovoltaikanlage vor und binden Batteriespeicher in Ihr Hausnetz ein. So nutzen Sie selbst erzeugten Strom optimal und machen sich unabhängiger von steigenden Energiepreisen.</p>
      </div>
    </>
  );

  const seo = {
    title: "Elektrotechnik Rhein-Main | Elektroinstallation & Smart Home | Radex",
    description: "Elektrotechnik im Rhein-Main-Gebiet: Elektroinstallation, Zählerschrank, Wallbox, PV-Vorbereitung & Smart Home nach VDE. Sicher & zukunftsfähig. Jetzt Beratung sichern!",
    path: "/elektroinstallation-rhein-main",
    serviceName: "Elektrotechnik"
  };

  return <ServicePageTemplate seo={seo} heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
