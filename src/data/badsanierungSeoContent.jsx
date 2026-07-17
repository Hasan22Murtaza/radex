import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

/**
 * SEO migration from https://www.radex-objektmanagement.de/badsanierung-rhein-main
 * Content preserved without rewrite. Internal links updated to current routes.
 */
export const badsanierungSeoIntro = (
  <>
        <p className={p}>
          Radex plant und koordiniert Ihre Badsanierung im Rhein-Main-Gebiet – als SHK Meisterbetrieb mit Erfahrung in Badplanung, Sanitärinstallation und Generalunternehmerschaft für alle Gewerke.
        </p>
  </>
);

export const badsanierungSeoSections = [
  {
    id: 'ein-neues-bad-mehr-als-nur-neue-fliesen',
    title: 'Ein neues Bad – mehr als nur neue Fliesen',
    content: (
      <>
        <p className={p}>
          Wenn Menschen über eine Badsanierung nachdenken, stellen sie sich meist zuerst das fertige Ergebnis vor: eine bodengleiche Dusche, helle Fliesen, vielleicht ein frei stehendes Waschtischunterschrank. Was dazwischen liegt – Planung, Koordination, Technik, Logistik – ist weniger sichtbar, aber entscheidend dafür, ob eine Badsanierung reibungslos verläuft oder zur Belastungsprobe wird.
        </p>
        <p className={p}>
          Radex Objektmanagement GmbH übernimmt genau diesen Teil. Als Generalunternehmer und SHK Meisterbetrieb mit Sitz in Rödermark koordinieren wir Badsanierungen im gesamten Rhein-Main-Gebiet – von der ersten Beratung über die Badplanung bis zur schlüsselfertigen Übergabe. Sanitär und Heizungstechnik führen wir als Meisterbetrieb selbst aus. Weitere Gewerke wie Elektro, Trockenbau, Fliesen und Innenausbau werden durch eingespielte Fachbetriebe realisiert, die wir koordinieren und verantworten.
        </p>
        <p className={p}>
          Ob Sie ein komplettes Bestandsbad entkernen und neu aufbauen möchten, Ihre Badmodernisierung gezielt auf mehr Komfort ausrichten wollen oder ein barrierefreies Bad für die nächste Lebensphase planen – auf dieser Seite finden Sie einen Überblick über unsere Leistungen, unsere Arbeitsweise und alles, was Sie vorab wissen sollten.
        </p>
      </>
    ),
  },
  {
    id: 'was-gehoert-zu-einer-badsanierung',
    title: 'Was gehört zu einer Badsanierung?',
    content: (
      <>
        <p className={p}>
          Der Begriff Badsanierung wird oft unterschiedlich verwendet – manchmal meint er eine vollständige Entkernung, manchmal nur das Erneuern einzelner Elemente. Damit Sie wissen, was Sie erwarten können, beschreiben wir hier, welche Leistungsbereiche eine Badsanierung mit Radex umfassen kann.
        </p>
      </>
    ),
  },
  {
    id: 'sanitaerinstallation-heizungstechnik',
    title: 'Sanitärinstallation & Heizungstechnik',
    content: (
      <>
        <p className={p}>
          Als SHK Meisterbetrieb führt Radex sämtliche Sanitär- und Heizungsarbeiten selbst aus. Das umfasst die Verlegung neuer Wasserleitungen, den Anschluss von Dusche, Wanne, WC und Waschtisch, die Überprüfung und Erneuerung von Entwässerungsleitungen sowie die Integration von Heizkörpern oder Handtuchheizkörpern. Bernd Knoop als eingetragener Meister steht für fachgerechte Ausführung nach geltenden Normen.
        </p>
      </>
    ),
  },
  {
    id: 'rueckbau-abdichtung',
    title: 'Rückbau & Abdichtung',
    content: (
      <>
        <p className={p}>
          Vor dem Neuaufbau steht der kontrollierte Rückbau: Fliesen, Sanitärobjekte, ggf. vorhandene Vorwandinstallationen und Bodenbeläge werden fachgerecht entfernt. Anschließend erfolgt die Abdichtung aller Nass- und Spritzwasserbereiche – eine technische Grundvoraussetzung für jede dauerhaft dichte Badsanierung.
        </p>
      </>
    ),
  },
  {
    id: 'elektroarbeiten-im-bad',
    title: 'Elektroarbeiten im Bad',
    content: (
      <>
        <p className={p}>
          Beleuchtung, Schalter, Steckdosen, Spiegelheizung, Lüftung – Elektroarbeiten im Nassbereich werden durch koordinierte Elektrofachbetriebe ausgeführt. Radex stimmt die Reihenfolge mit allen Gewerken ab, damit keine Schnittstelle offen bleibt.
        </p>
      </>
    ),
  },
  {
    id: 'trockenbau-vorwandinstallation',
    title: 'Trockenbau & Vorwandinstallation',
    content: (
      <>
        <p className={p}>
          Vorwandinstallationen ermöglichen es, Leitungen und Spülkästen hinter einer Verkleidung zu verbergen – das schafft ein sauberes Wandbild und erleichtert spätere Zugänglichkeit. Trockenbauarbeiten für abgehängte Decken, Nischen oder Vormauerungen werden fachgerecht eingebracht.
        </p>
      </>
    ),
  },
  {
    id: 'fliesen-oberflaechen',
    title: 'Fliesen & Oberflächen',
    content: (
      <>
        <p className={p}>
          Ob großformatige Bodenfliesen, Wandfliesen im Wunschformat oder Mosaik – Fliesenarbeiten erfordern handwerkliche Präzision und Erfahrung mit Nassbereichsanforderungen. Radex koordiniert Fliesenleger, die routiniert mit den Abdichtungssystemen und Verlegeformaten umgehen, die im modernen Badbau Standard sind.
        </p>
      </>
    ),
  },
  {
    id: 'ausbau-einrichtung',
    title: 'Ausbau & Einrichtung',
    content: (
      <>
        <p className={p}>
          Zum Abschluss einer Badsanierung gehören die Montage von Badmöbeln, Armaturen, Spiegel, Accessoires und Beleuchtungskörpern. Radex koordiniert auch diese abschließenden Schritte und übergibt das Bad vollständig fertiggestellt.
        </p>
      </>
    ),
  },
  {
    id: 'badplanung-beratung',
    title: 'Badplanung & Beratung',
    content: (
      <>
        <p className={p}>
          Vor dem ersten Handgriff steht die Planung. Radex bespricht mit Ihnen Bedarf, Grundriss, Materialwünsche und Budget – und erstellt ein Angebot, das auf Ihrer konkreten Situation basiert. Mehr zur <Link to="/badplanung">Badplanung</Link> finden Sie auf der dazugehörigen Seite.
        </p>
      </>
    ),
  },
  {
    id: 'was-moechten-sie-sanieren-oder-wissen',
    title: 'Was möchten Sie sanieren oder wissen?',
    content: (
      <>
        <p className={p}>
          Badsanierung ist kein einheitliches Projekt. Hinter dem Begriff stecken sehr unterschiedliche Vorhaben – von der Komplettentkernung bis zum gezielten Umbau einer einzelnen Badzone. Hier finden Sie eine Übersicht über alle Themen, die Radex im Bereich Badsanierung begleitet.
        </p>
      </>
    ),
  },
  {
    id: 'komplettbadsanierung',
    title: 'Komplettbadsanierung',
    href: '/badsanierung/badezimmer-sanieren',
    content: (
      <>
        <p className={p}>
          Das Bad wird vollständig entkernt und neu aufgebaut – von der Rohinstallation bis zur schlüsselfertigen Übergabe. Die richtige Wahl, wenn das Bestandsbad grundlegend veraltet ist oder wenn Leitungen, Abdichtung und Grundsubstanz erneuert werden müssen.
        </p>
      </>
    ),
  },
  {
    id: 'badmodernisierung',
    title: 'Badmodernisierung',
    href: '/badmodernisierung',
    content: (
      <>
        <p className={p}>
          Nicht immer ist eine Komplettsanierung notwendig. Eine Badmodernisierung zielt auf mehr Komfort, bessere Optik und neue Funktionen – mit weniger Bauaufwand. Neue Armaturen, eine moderne Beleuchtung oder eine zeitgemäße Dusche können das Bad spürbar aufwerten.
        </p>
      </>
    ),
  },
  {
    id: 'badrenovierung',
    title: 'Badrenovierung',
    href: '/badrenovierung',
    content: (
      <>
        <p className={p}>
          Zwischen Modernisierung und Komplettsanierung liegt die Badrenovierung: Oberflächen erneuern, Sanitärobjekte ersetzen, Licht verbessern – ohne das Bad vollständig aufzureißen. Sinnvoll, wenn die Grundsubstanz noch in Ordnung ist.
        </p>
      </>
    ),
  },
  {
    id: 'gaeste-wc-sanieren',
    title: 'Gäste-WC sanieren',
    href: '/gaeste-wc',
    content: (
      <>
        <p className={p}>
          Das Gäste-WC ist oft klein, aber repräsentativ. Wer es modernisiert, kann mit überschaubarem Aufwand einen deutlichen Qualitätssprung erzielen – platzsparende Lösungen, hochwertiges Licht, stilvolle Ausstattung.
        </p>
      </>
    ),
  },
  {
    id: 'barrierefreies-bad',
    title: 'Barrierefreies Bad',
    href: '/barrierefreies-bad',
    content: (
      <>
        <p className={p}>
          Ein Bad ohne Barrieren erhöht den Komfort für alle – und ermöglicht es, die eigene Wohnung langfristig sicher zu nutzen. Bodengleiche Duschen, Haltegriffe und gut geplante Bewegungsflächen stehen im Mittelpunkt.
        </p>
      </>
    ),
  },
  {
    id: 'kleines-bad-sanieren',
    title: 'Kleines Bad sanieren',
    href: '/gaeste-wc',
    content: (
      <>
        <p className={p}>
          Auf kleiner Fläche ein funktionales, helles und gut nutzbares Bad zu schaffen, ist eine Planungsaufgabe, die Erfahrung erfordert. Radex kennt die typischen Grundrisse im Rhein-Main-Gebiet und entwickelt passende Lösungen.
        </p>
      </>
    ),
  },
  {
    id: 'dusche-statt-badewanne',
    title: 'Dusche statt Badewanne',
    href: '/dusche-statt-badewanne',
    content: (
      <>
        <p className={p}>
          Der Umbau von Wanne zu Dusche gehört zu den häufigsten Einzelmaßnahmen – aus Komfort-, Platz- oder Altersgründen. Technisch müssen dabei Entwässerung, Abdichtung und Installationsführung sorgfältig geplant werden.
        </p>
      </>
    ),
  },
  {
    id: 'badewanne-austauschen',
    title: 'Badewanne austauschen',
    href: '/badewanne-austauschen',
    content: (
      <>
        <p className={p}>
          Wer das Wannenkonzept beibehalten möchte, kann die bestehende Badewanne gezielt ersetzen. Radex prüft dabei auch Anschlüsse und umliegende Flächen – damit der Tausch dauerhaft hält.
        </p>
      </>
    ),
  },
  {
    id: 'badsanierung-kosten',
    title: 'Badsanierung Kosten',
    href: '/badsanierung-kosten',
    content: (
      <>
        <p className={p}>
          Was kostet eine Badsanierung? Die Antwort hängt von vielen Faktoren ab. Auf der Kostenseite erklären wir, was den Preis beeinflusst – und wie Sie ein realistisches Budget aufstellen.
        </p>
      </>
    ),
  },
  {
    id: 'badsanierung-dauer',
    title: 'Badsanierung Dauer',
    href: '/badsanierung-dauer',
    content: (
      <>
        <p className={p}>
          Wie lange ist das Bad nicht nutzbar? Was beeinflusst die Bauzeit? Wann beginnt und endet eine realistische Zeitplanung? Diese Fragen beantwortet die Seite zur Badsanierung Dauer.
        </p>
      </>
    ),
  },
  {
    id: 'badsanierung-festpreis',
    title: 'Badsanierung Festpreis',
    href: '/badsanierung-festpreis',
    content: (
      <>
        <p className={p}>
          Ein Festpreis schafft Planungssicherheit – aber er setzt eine sorgfältige Vorbereitung voraus. Radex erklärt, unter welchen Voraussetzungen ein verbindliches Angebot möglich ist.
        </p>
      </>
    ),
  },
  {
    id: 'badplanung',
    title: 'Badplanung',
    href: '/badplanung',
    content: (
      <>
        <p className={p}>
          Aus Ideen wird ein konkretes Konzept: Grundriss, Materialauswahl, Lichtplanung, Sanitärtechnik. Wer gut plant, spart Zeit und Ärger bei der Ausführung.
        </p>
      </>
    ),
  },
  {
    id: 'ablauf-einer-badsanierung',
    title: 'Ablauf einer Badsanierung',
    href: '/ablauf-badsanierung',
    content: (
      <>
        <p className={p}>
          Welche Schritte gibt es? Was passiert in welcher Reihenfolge? Wie läuft die Koordination der Gewerke ab? Der Ablauf erklärt, was Kunden bei Radex von der Anfrage bis zur Übergabe erwartet.
        </p>
      </>
    ),
  },
  {
    id: 'barrierefreies-bad-kosten',
    title: 'Barrierefreies Bad Kosten',
    href: '/barrierefreies-bad-kosten',
    content: (
      <>
        <p className={p}>
          Was kostet der Umbau zu einem barrierefreien Bad? Welche Faktoren beeinflussen den Preis? Und welche Förderungen können in Frage kommen? Alle Informationen auf der Kostenseite.
        </p>
      </>
    ),
  },
  {
    id: 'badsanierung-aus-einer-hand-was-das-wirklich-bedeutet',
    title: 'Badsanierung aus einer Hand – was das wirklich bedeutet',
    content: (
      <>
        <p className={p}>
          Wer für eine Badsanierung selbst Handwerker koordiniert – Klempner, Elektriker, Fliesenleger, Trockenbauer – übernimmt de facto die Aufgabe eines Bauleiters. Terminkollisionen, Schnittstellen zwischen Gewerken, fehlende Zuarbeit: Das sind die häufigsten Gründe, warum Badsanierungen länger dauern oder teurer werden als geplant.
        </p>
        <p className={p}>
          Radex übernimmt diese Koordination vollständig. Als Generalunternehmer schließen Sie mit uns einen Vertrag – und wir stellen sicher, dass alle Beteiligten zum richtigen Zeitpunkt am richtigen Ort sind. Das gilt für unsere eigenen Sanitär- und Heizungsarbeiten als SHK Meisterbetrieb ebenso wie für die koordinierten Fachbetriebe für Elektro, Trockenbau, Fliesen und Oberflächen.
        </p>
        <p className={p}>
          Was Sie davon haben: einen einzigen Ansprechpartner für alle Fragen, eine abgestimmte Planung, und die Gewissheit, dass kein Gewerk auf das andere warten muss, weil die Koordination fehlt.
        </p>
        <p className={p}>
          Sanitär, Heizung und Gebäudetechnik unter Meisterverantwortung – eingetragen und zugelassen.
        </p>
        <p className={p}>
          Alle Gewerke aus einer Hand koordiniert – ein Ansprechpartner, ein Vertrag, ein Zeitplan.
        </p>
        <p className={p}>
          Über 60 Städte und Gemeinden – von Rödermark bis Frankfurt, von Hanau bis Darmstadt.
        </p>
        <p className={p}>
          Verbindliche Angebote auf Basis realer Bestandsaufnahme – transparent und nachvollziehbar.
        </p>
      </>
    ),
  },
  {
    id: 'von-der-idee-zum-fertigen-bad-so-arbeitet-radex',
    title: 'Von der Idee zum fertigen Bad – so arbeitet Radex',
    content: (
      <>
        <p className={p}>
          Jede Badsanierung beginnt mit einer konkreten Situation: einem Bestandsbad, das erneuert werden soll, und einem Eigentümer oder Mieter, der weiß, was er sich wünscht – aber noch nicht genau weiß, was technisch möglich ist und was es kosten wird. Genau hier setzt Radex an.
        </p>
      </>
    ),
  },
  {
    id: 'kostenlose-beratung-bestandsaufnahme',
    title: 'Kostenlose Beratung & Bestandsaufnahme',
    content: (
      <>
        <p className={p}>
          Wir kommen zu Ihnen – und schauen uns das Bad gemeinsam an. Dabei klären wir: Welche Leitungen liegen wo? Was ist der Zustand von Abdichtung, Fliesen und Sanitärobjekten? Was möchten Sie verändern? Was ist im vorhandenen Grundriss technisch umsetzbar? Dieser Termin ist kostenlos und unverbindlich.
        </p>
      </>
    ),
  },
  {
    id: 'planung-materialauswahl',
    title: 'Planung & Materialauswahl',
    content: (
      <>
        <p className={p}>
          Auf Basis der Bestandsaufnahme entwickeln wir gemeinsam ein Konzept: Grundriss, Ausstattung, Materialien, Lichtführung. Wir besprechen mit Ihnen, was sinnvoll ist – und was nicht. Mehr zum Thema <Link to="/badplanung">Badplanung</Link> finden Sie auf der dazugehörigen Seite. Eine gute Planung ist die Grundlage für eine verlässliche Kostenaussage.
        </p>
      </>
    ),
  },
  {
    id: 'verbindliches-angebot',
    title: 'Verbindliches Angebot',
    content: (
      <>
        <p className={p}>
          Sie erhalten ein konkretes, nachvollziehbares Angebot – aufgeschlüsselt nach Leistungsbereichen, ohne versteckte Positionen. Wenn Sie es möchten, erklären wir Ihnen jeden Punkt. Wer ein verbindliches Festpreisangebot wünscht, findet auf der Seite <Link to="/badsanierung-festpreis">Badsanierung Festpreis</Link> weitere Informationen dazu.
        </p>
      </>
    ),
  },
  {
    id: 'ausfuehrung-koordination',
    title: 'Ausführung & Koordination',
    content: (
      <>
        <p className={p}>
          Nach Auftragserteilung übernimmt Radex die komplette Steuerung der Badsanierung. Rückbau, Rohinstallation, Abdichtung, Trockenbau, Elektro, Fliesen, Ausbau – alle Schritte werden in abgestimmter Reihenfolge ausgeführt. Den genauen <Link to="/ablauf-badsanierung">Ablauf einer Badsanierung</Link> beschreiben wir im Detail auf der Unterseite.
        </p>
      </>
    ),
  },
  {
    id: 'uebergabe',
    title: 'Übergabe',
    content: (
      <>
        <p className={p}>
          Das Bad wird vollständig fertiggestellt übergeben – sauber, geprüft, mit allen Anschlüssen in Betrieb. Bei der Übergabe gehen wir gemeinsam durch das Bad und klären alle offenen Fragen. Wir stehen auch danach als Ansprechpartner zur Verfügung.
        </p>
      </>
    ),
  },
  {
    id: 'badsanierung-im-rhein-main-gebiet-wo-radex-taetig-ist',
    title: 'Badsanierung im Rhein-Main-Gebiet – wo Radex tätig ist',
    content: (
      <>
        <p className={p}>
          Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Der Ausgangspunkt ist Rödermark im südlichen Hessen – von dort aus sind wir regelmäßig in der gesamten Rhein-Main-Region aktiv, ohne lange Anfahrtszeiten und ohne Aufschläge für die Entfernung.
        </p>
        <p className={p}>
          Zu unseren typischen Einsatzgebieten gehören Städte wie <strong>Frankfurt am Main</strong>, <strong>Offenbach am Main</strong>, <strong>Darmstadt</strong> und <strong>Hanau</strong>, aber auch die mittelgroßen Städte und Gemeinden im direkten Umland: <strong>Dreieich</strong>, <strong>Rodgau</strong>, <strong>Neu-Isenburg</strong>, <strong>Dietzenbach</strong> und <strong>Heusenstamm</strong>.
        </p>
        <p className={p}>
          Viele unserer Kunden kommen aus dem Landkreis Offenbach und den angrenzenden Landkreisen Darmstadt-Dieburg und Main-Kinzig. Wir sind aber auch regelmäßig im Wetteraukreis, im Rheingau-Taunus-Kreis und im Aschaffenburger Raum tätig – also überall dort, wo das Rhein-Main-Gebiet seine charakteristische Verdichtung von Städten und Gemeinden zeigt.
        </p>
        <p className={p}>
          Die vollständige Liste aller Orte, in denen Radex Badsanierungen durchführt, finden Sie auf der Seite <Link to="/einsatzgebiete-rhein-main">Einsatzgebiete</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'unsere-einsatzgebiete-auf-einen-blick',
    title: 'Unsere Einsatzgebiete auf einen Blick',
    content: (
      <>
        <ul className={ul}>
          <li>Rödermark</li>
          <li>Frankfurt am Main</li>
          <li>Offenbach am Main</li>
          <li>Darmstadt</li>
          <li>Hanau</li>
          <li>Dreieich</li>
          <li>Rodgau</li>
          <li>Neu-Isenburg</li>
          <li>Dietzenbach</li>
          <li>Heusenstamm</li>
        </ul>
        <p className={p}>
          <Link to="/einsatzgebiete-rhein-main">Alle Orte im Überblick →</Link>
        </p>
      </>
    ),
  },
  {
    id: 'haeufige-fragen-zur-badsanierung',
    title: 'Häufige Fragen zur Badsanierung',
    content: (
      <>
        <h4 className="br-seo-subheading">Was gehört zu einer Badsanierung?</h4>
        <p className={p}>
          Der Umfang hängt vom Ausgangszustand und Ihren Wünschen ab. Bei einer Komplettbadsanierung umfasst das typischerweise: Rückbau des Bestandsbades, Erneuerung oder Verlegung von Wasser- und Abwasserleitungen, Abdichtung aller Nass- und Spritzwasserbereiche, Trockenbau- und Vorwandinstallation, Elektroarbeiten (Licht, Steckdosen, Lüftung), Fliesenarbeiten sowie die abschließende Montage von Sanitärobjekten, Armaturen und Badmöbeln.
        </p>
        <p className={p}>
          Wenn nur Teile des Bades erneuert werden – etwa eine Badmodernisierung oder eine gezielte Badrenovierung – kann der Umfang deutlich kleiner sein. Radex klärt mit Ihnen in der Beratung, was in Ihrer Situation sinnvoll ist.
        </p>
        <h4 className="br-seo-subheading">Wie läuft eine Badsanierung mit Radex ab?</h4>
        <p className={p}>
          Am Anfang steht ein kostenloser Beratungstermin bei Ihnen vor Ort. Wir schauen uns das Bad an, klären Ihre Wünsche und die technische Ausgangslage. Danach erstellen wir ein konkretes Angebot. Nach Auftragserteilung koordiniert Radex alle Gewerke – von Rückbau und Rohinstallation bis zu Fliesen, Elektro und Ausbau – in einer abgestimmten Reihenfolge. Sie haben während der gesamten Badsanierung einen festen Ansprechpartner bei Radex.
        </p>
        <p className={p}>
          Den detaillierten <Link to="/ablauf-badsanierung">Ablauf einer Badsanierung</Link> beschreiben wir Schritt für Schritt auf der Unterseite.
        </p>
        <h4 className="br-seo-subheading">Ist Radex ein SHK Meisterbetrieb?</h4>
        <p className={p}>
          Ja. Radex Objektmanagement GmbH ist ein eingetragener SHK Meisterbetrieb. Betriebsleiter und eingetragener Meister ist Bernd Knoop – zugelassen für die Gewerke Sanitär, Heizung, Klimatechnik und Gebäudetechnik.
        </p>
        <p className={p}>
          Das bedeutet: Alle Sanitär- und Heizungsarbeiten bei einer Badsanierung führen wir als Meisterbetrieb selbst aus. Für weitere Gewerke – Elektro, Trockenbau, Fliesen, Innenausbau – koordinieren wir eingespielte Fachbetriebe, die wir kennen und für deren Arbeit wir die Verantwortung tragen. Mehr zu unseren Leistungen in Heizung und Sanitär finden Sie unter <Link to="/heizung-sanitaer-rhein-main">Heizung &amp; Sanitär</Link>.
        </p>
        <h4 className="br-seo-subheading">Was kostet eine Badsanierung im Rhein-Main-Gebiet?</h4>
        <p className={p}>
          Die Kosten einer Badsanierung hängen von einer Reihe von Faktoren ab: Badgröße, Umfang der Arbeiten (Komplettbadsanierung oder Teilmaßnahme), Zustand der vorhandenen Leitungen und Abdichtung, gewählte Materialien und Ausstattung sowie Aufwand für Rückbau und ggf. Grundrissänderungen.
        </p>
        <p className={p}>
          Pauschale Preisangaben ohne Bestandsaufnahme sind wenig verlässlich – und helfen Ihnen bei der Planung nicht wirklich weiter. Radex erstellt Ihnen nach einem Ortstermin ein verbindliches Angebot auf Basis Ihrer konkreten Situation. Mehr zu den Preisfaktoren erfahren Sie auf der Seite <Link to="/badsanierung-kosten">Badsanierung Kosten</Link>.
        </p>
        <h4 className="br-seo-subheading">In welchen Städten bietet Radex Badsanierung an?</h4>
        <p className={p}>
          Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Regelmäßig sind wir unter anderem in Rödermark, Frankfurt am Main, Offenbach am Main, Darmstadt, Hanau, Dreieich, Rodgau, Neu-Isenburg, Dietzenbach und Heusenstamm tätig – sowie in vielen weiteren Städten im Landkreis Offenbach, im Main-Kinzig-Kreis, im Wetteraukreis und im Raum Aschaffenburg.
        </p>
        <p className={p}>
          Die vollständige Liste finden Sie auf der Seite <Link to="/einsatzgebiete-rhein-main">Einsatzgebiete</Link>.
        </p>
        <h4 className="br-seo-subheading">Wie kann ich eine Badsanierung bei Radex anfragen?</h4>
        <p className={p}>
          Sie können eine Anfrage über das Kontaktformular auf dieser Seite stellen oder uns direkt telefonisch erreichen. Wir melden uns zeitnah zurück und vereinbaren einen kostenlosen Beratungstermin bei Ihnen vor Ort. Eine kurze Beschreibung Ihres Vorhabens – Badgröße, gewünschte Maßnahmen, grober Zeitraum – hilft uns bei der Vorbereitung des Gesprächs.
        </p>
        <p className={p}>
          Alternativ gelangen Sie über die Seite <Link to="/badsanierung-rhein-main#kontakt">Kontakt</Link> zu allen weiteren Möglichkeiten der Kontaktaufnahme.
        </p>
        <h4 className="br-seo-subheading">Kann Radex auch nur einzelne Teile des Bades sanieren?</h4>
        <p className={p}>
          Ja. Nicht jede Badsanierung muss ein kompletter Neustart sein. Wenn der Grundzustand des Bades noch in Ordnung ist, können gezielte Teilmaßnahmen sinnvoller sein: eine neue bodengleiche Dusche anstelle der Badewanne, ein modernes Waschtischunterschrank, neue Armaturen oder eine zeitgemäße Beleuchtung.
        </p>
        <p className={p}>
          Radex berät Sie ehrlich dazu, welche Maßnahmen in Ihrer Situation tatsächlich sinnvoll sind – und welche nicht. Mehr dazu finden Sie unter <Link to="/badmodernisierung">Badmodernisierung</Link> und <Link to="/badrenovierung">Badrenovierung</Link>.
        </p>
      </>
    ),
  },
];
