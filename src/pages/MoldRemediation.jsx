import ServicePageTemplate from '../components/ServicePageTemplate';

export default function MoldRemediation() {
  const heroData = {
    title: "Schimmel- & Schadstoffsanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Ursachen beheben, Schimmel und Schadstoffe dauerhaft entfernen.",
    text: "Professionelle Beseitigung von Feuchtigkeitsschäden, Schimmelpilz und Schadstoffen durch zertifizierte Experten – mit Ursachenanalyse, sicherer Sanierung und nachhaltigem Schutz.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Schnelle Hilfe bei Feuchtigkeit, Schimmel und Gefahrstoffen.",
    list: [
      { title: "Mieter & Vermieter", desc: "Klärung der Ursache, schnelle Beseitigung der Gesundheitsgefahr und rechtssichere Dokumentation." },
      { title: "Hausbesitzer", desc: "Schutz der Bausubstanz vor langfristigen Feuchteschäden und Wertverlust." },
      { title: "Nach Wasserschäden", desc: "Trocknung und Sanierung nach Rohrbruch, Hochwasser oder undichtem Dach." },
      { title: "Allergiker & Familien", desc: "Wiederherstellung einer gesunden, schadstofffreien Raumluft." }
    ]
  };

  const typicalProjectsData = {
    title: "Häufige Ursachen & Schadensbilder",
    subtitle: "Wir bekämpfen nicht nur das Symptom, sondern die Ursache.",
    projects: [
      { title: "Wasserschaden", desc: "Rohrbruch, undichtes Dach oder aufsteigende Feuchte als Auslöser.", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
      { title: "Kältebrücken", desc: "Kondensationsfeuchte an ungedämmten Außenwänden und Fensterlaibungen.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
      { title: "Falsches Lüften", desc: "Zu hohe Luftfeuchtigkeit nach Sanierung dichter Fenster ohne angepasstes Lüftungsverhalten.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten einer Schimmelsanierung",
    subtitle: "Die Kosten hängen vom Ausmaß des Befalls und der Ursache ab.",
    items: [
      { title: "Oberflächlicher Befall", price: "ab €300", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
      { title: "Tiefsitzender Befall", price: "ab €1.500", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
      { title: "Sanierung mit Trocknung", price: "ab €3.500", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Muss der Putz abgeschlagen werden?", a: "Wenn der Schimmel bereits tief in den Putz oder die Wand eingedrungen ist, reicht oberflächliches Abwaschen nicht aus. Der befallene Putz muss dann fachmännisch entfernt und durch einen feuchtigkeitsregulierenden Sanierputz ersetzt werden. Bei nur oberflächlichem Befall genügt häufig eine gezielte Behandlung." },
    { q: "Wie finden Sie die Ursache des Schimmels?", a: "Mit Feuchtemessgeräten, Thermografie-Kameras und Datenloggern orten wir Kältebrücken, undichte Stellen und versteckte Feuchtigkeitsnester. Erst wenn die Ursache klar ist, beginnen wir mit der Sanierung – sonst kommt der Schimmel zurück." },
    { q: "Ist Schimmel gesundheitsgefährlich?", a: "Ja. Schimmelsporen können Allergien, Atemwegserkrankungen und Reizungen auslösen, besonders bei Kindern, älteren Menschen und Allergikern. Eine schnelle, fachgerechte Beseitigung ist daher wichtig. Während der Arbeiten schotten wir den Bereich ab, um eine Verteilung der Sporen zu verhindern." },
    { q: "Was ist eine Schadstoffsanierung?", a: "Neben Schimmel sanieren wir auch andere Schadstoffe in Gebäuden – etwa alte teerhaltige Kleber, künstliche Mineralfasern (KMF) oder PAK-belastete Materialien. Für asbesthaltige Stoffe verfügen wir über die Sachkunde nach TRGS 519." },
    { q: "Übernimmt die Versicherung die Kosten?", a: "Bei einem plötzlichen Leitungswasserschaden übernimmt häufig die Gebäude- oder Hausratversicherung die Kosten für Trocknung und Sanierung. Wir unterstützen Sie mit einer detaillierten Schadensdokumentation für Ihre Versicherung." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Zertifizierte Schimmelbeseitigung</h3>
        <p className="mb-4 text-gray-600">Wir entfernen den Schimmel nicht nur, wir finden und beheben die Ursache. Mit speziellen Messgeräten orten wir Kältebrücken und Feuchtigkeitsnester, die für das menschliche Auge unsichtbar sind. Erst wenn die Ursache dauerhaft beseitigt ist, sanieren wir die betroffenen Flächen fachgerecht – nach den Vorgaben des Umweltbundesamtes (UBA-Schimmelleitfaden).</p>
        <p className="text-gray-600">So stellen wir sicher, dass der Schimmel nicht erneut auftritt und Ihre Raumluft wieder gesund ist.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Ursachenanalyse & Bauphysik</h3>
        <p className="mb-4 text-gray-600">Schimmel ist immer ein Symptom für ein bauphysikalisches Problem. Ob eindringende Feuchtigkeit von außen, ein Wasserschaden, fehlende Dämmung oder unzureichendes Lüften – wir analysieren das Zusammenspiel von Wärme, Feuchtigkeit und Luftbewegung in Ihren Räumen. Auf Basis dieser Analyse entwickeln wir ein nachhaltiges Sanierungskonzept, das auch bauliche Maßnahmen wie Innendämmung oder den Einbau einer kontrollierten Lüftung umfassen kann.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Bautrocknung nach Wasserschäden</h3>
        <p className="mb-4 text-gray-600">Nach einem Rohrbruch oder Hochwasser zählt jede Stunde. Wir setzen Bautrockner, Kondensations- und Adsorptionstrockner sowie Dämmschichttrocknung ein, um durchfeuchtete Wände, Böden und Estriche wieder auszutrocknen, bevor sich Schimmel bilden kann. Die gesamte Trocknung wird dokumentiert – wichtig für die Abwicklung mit Ihrer Versicherung.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Schadstoffsanierung & Gefahrstoffe</h3>
        <p className="text-gray-600">Ältere Gebäude enthalten oft Schadstoffe wie künstliche Mineralfasern, teer- oder PAK-haltige Kleber und – in Gebäuden vor 1993 – Asbest. Wir identifizieren belastete Materialien, beraten zur sicheren Vorgehensweise und führen die Entfernung und fachgerechte Entsorgung durch. Für asbesthaltige Stoffe sind wir nach TRGS 519 sachkundig und zugelassen.</p>
      </div>
    </>
  );

  const seo = {
    title: "Schimmel- & Schadstoffsanierung Rhein-Main | Zertifiziert | Radex",
    description: "Schimmel- & Schadstoffsanierung im Rhein-Main-Gebiet: Ursachenanalyse, Bautrocknung & sichere Beseitigung durch zertifizierte Experten (TRGS 519). Jetzt Befundung anfragen!",
    path: "/schadstoffsanierung-rhein-main",
    serviceName: "Schimmel- & Schadstoffsanierung"
  };

  return <ServicePageTemplate seo={seo} heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
