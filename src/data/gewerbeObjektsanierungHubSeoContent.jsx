import { Link } from '../router';

const p = 'br-seo-service-text';

export const gewerbeObjektsanierungHubSeoIntro = (
  <>
    <p className={p}>
      Gewerbliche Immobilien stellen je nach Nutzung, Branche und Gebäudestruktur unterschiedliche Anforderungen. Deshalb
      umfasst die Gewerbe- &amp; Objektsanierung von Radex weit mehr als einzelne Renovierungsarbeiten. Wir verbinden
      Bestandsaufnahme, Planung, Innenausbau, technische Modernisierung und Projektsteuerung zu einer abgestimmten
      Gesamtlösung.
    </p>
    <p className={p}>
      Unsere Leistungen richten sich an Unternehmen, Gewerbetreibende, Investoren, Eigentümer, Vermieter,
      Hausverwaltungen, Filialisten und Projektentwickler im gesamten Rhein-Main-Gebiet. Dabei begleiten wir sowohl
      einzelne Gewerbeeinheiten als auch umfangreiche Bestandsobjekte – von der ersten Analyse bis zur fertigen
      Übergabe.
    </p>
  </>
);

export const gewerbeObjektsanierungHubSeoServices = [
  {
    id: 'gewerbeimmobilien-sanieren',
    title: 'Gewerbeimmobilien sanieren',
    icon: 'Building2',
    lead: 'Wir sanieren bestehende Gewerbeimmobilien und passen sie an neue technische, funktionale und gestalterische Anforderungen an. Dabei kann es sich um einzelne Nutzungseinheiten, komplette Bürogebäude oder größere gemischt genutzte Objekte handeln. Vor Beginn der Arbeiten analysieren wir den Bestand und stimmen den erforderlichen Leistungsumfang auf die geplante Nutzung ab.',
    more: (
      <p className={p}>
        Je nach Objekt koordinieren wir Trockenbau, Bodenarbeiten, Malerarbeiten, Elektroinstallationen,
        Sanitärleistungen und weitere Ausbaugewerke. Für Eigentümer und Unternehmen in Frankfurt am Main,
        Neu-Isenburg, Eschborn und Bad Homburg entstehen dadurch modernisierte Gewerbeflächen mit klar geplanten
        Abläufen und einer zentralen Projektsteuerung.
      </p>
    ),
    link: { to: '/gewerbesanierung-rhein-main', label: 'Mehr zur Gewerbesanierung' },
  },
  {
    id: 'gewerbeobjekte-modernisieren',
    title: 'Gewerbeobjekte modernisieren',
    icon: 'RefreshCw',
    lead: 'Nicht jedes Gewerbeobjekt benötigt eine vollständige Kernsanierung. Häufig lässt sich die Immobilie durch gezielte Modernisierungsmaßnahmen funktional und optisch deutlich aufwerten. Dazu gehören beispielsweise neue Bodenbeläge, moderne Deckensysteme, veränderte Raumaufteilungen, aktualisierte Elektroinstallationen oder eine neue Gestaltung der Wandflächen.',
    more: (
      <p className={p}>
        Radex entwickelt ein passendes Modernisierungskonzept für die bestehende Gebäudestruktur. So können
        Büroflächen in Hofheim am Taunus, Ladenlokale in Offenbach am Main oder Gewerbeeinheiten in Rüsselsheim am
        Main an heutige Anforderungen angepasst werden, ohne unnötige Maßnahmen einzuplanen.
      </p>
    ),
  },
  {
    id: 'gewerbeumbau',
    title: 'Gewerbeumbau',
    icon: 'PanelsTopLeft',
    lead: 'Verändert sich ein Unternehmen, müssen häufig auch die genutzten Räume angepasst werden. Bei einem Gewerbeumbau verändern wir Grundrisse, Raumaufteilungen, Funktionsbereiche und technische Installationen entsprechend der neuen Nutzung. Bestehende Flächen können dadurch effizienter genutzt und besser auf betriebliche Abläufe abgestimmt werden.',
    more: (
      <p className={p}>
        Wir übernehmen die Planung und Koordination der erforderlichen Gewerke und sorgen für einen klar
        strukturierten Bauablauf. Gewerbeumbauten realisieren wir unter anderem für Unternehmen in Hanau, Maintal,
        Bruchköbel, Mühlheim am Main und Aschaffenburg.
      </p>
    ),
  },
  {
    id: 'bueroflaechen-modernisieren',
    title: 'Büroflächen modernisieren',
    icon: 'BriefcaseBusiness',
    lead: 'Moderne Büroflächen müssen Kommunikation, Konzentration und flexible Arbeitsmodelle gleichermaßen unterstützen. Wir modernisieren bestehende Büros und entwickeln Raumlösungen, die zu den Arbeitsprozessen des jeweiligen Unternehmens passen. Dazu können Einzelbüros, Teamflächen, Besprechungsräume, Empfangsbereiche und Rückzugszonen gehören.',
    more: (
      <p className={p}>
        Neben der räumlichen Gestaltung koordinieren wir Leistungen wie Trockenbau, Akustikmaßnahmen, Bodenbeläge,
        Beleuchtung, Elektroinstallation und Malerarbeiten. Dadurch entstehen moderne Büroflächen beispielsweise in
        Frankfurt-Bockenheim, Frankfurt-Niederrad, Wiesbaden-Biebrich oder Mainz-Gonsenheim.
      </p>
    ),
    link: { to: '/bueroumbau-rhein-main', label: 'Mehr zum Büroumbau' },
  },
  {
    id: 'ladenlokale-sanieren',
    title: 'Ladenlokale sanieren und modernisieren',
    icon: 'Store',
    lead: 'Ein Ladenlokal muss funktionale Betriebsabläufe ermöglichen und gleichzeitig einen professionellen Eindruck bei Kundinnen und Kunden hinterlassen. Wir sanieren und modernisieren Verkaufsflächen, Showrooms, Filialen und Einzelhandelsflächen entsprechend dem Nutzungskonzept und dem gewünschten Erscheinungsbild.',
    more: (
      <p className={p}>
        Mögliche Leistungen umfassen neue Raumaufteilungen, Wand- und Deckenarbeiten, Bodenbeläge,
        Elektroinstallationen, Beleuchtung, Sanitärbereiche und die Vorbereitung individueller Einbauten. Projekte können
        dabei sowohl einzelne Ladenflächen in Darmstadt und Dieburg als auch Filialstandorte in Langen, Dreieich oder
        Rodgau betreffen.
      </p>
    ),
  },
  {
    id: 'praxis-kanzlei-sanieren',
    title: 'Praxis- und Kanzleiflächen sanieren',
    icon: 'Stethoscope',
    lead: 'Praxen, Therapiezentren und Kanzleien benötigen funktionale Raumstrukturen, klare Wege und eine hochwertige Gestaltung. Wir modernisieren bestehende Flächen und passen Behandlungsräume, Empfangsbereiche, Wartezonen, Besprechungsräume und Nebenflächen an die jeweiligen Arbeitsabläufe an.',
    more: (
      <p className={p}>
        Dabei berücksichtigen wir technische Anschlüsse, Sanitärbereiche, Bodenbeläge, Beleuchtung, Schallschutz und
        hygienisch geeignete Oberflächen. Unsere Projektteams betreuen entsprechende Sanierungen unter anderem in Bad
        Vilbel, Karben, Friedberg, Bad Nauheim und Friedrichsdorf.
      </p>
    ),
  },
  {
    id: 'gewerbeflaechen-ausbauen',
    title: 'Gewerbeflächen ausbauen',
    icon: 'LayoutTemplate',
    lead: 'Noch nicht vollständig ausgebaute Gewerbeflächen bieten die Möglichkeit, Räume von Beginn an auf die spätere Nutzung auszurichten. Radex übernimmt den Ausbau von Gewerbeeinheiten und koordiniert alle erforderlichen Ausbauleistungen bis zur bezugsfertigen Übergabe.',
    more: (
      <p className={p}>
        Je nach Projekt gehören Trockenbau, Deckensysteme, Bodenbeläge, Malerarbeiten, Elektroinstallation,
        Sanitärinstallation und technische Anpassungen zum Leistungsumfang. Gewerbeflächen bauen wir beispielsweise für
        Mieter, Eigentümer und Projektentwickler in Kelsterbach, Raunheim, Flörsheim am Main und Hattersheim am Main
        aus.
      </p>
    ),
    link: { to: '/mieterausbau-rhein-main', label: 'Mehr zum Mieterausbau' },
  },
  {
    id: 'bestandsgebaeude-modernisieren',
    title: 'Bestandsgebäude modernisieren',
    icon: 'Landmark',
    lead: 'Ältere Bestandsgebäude lassen sich häufig durch eine gezielte Modernisierung langfristig wirtschaftlicher und attraktiver nutzen. Wir analysieren den baulichen Zustand und entwickeln ein Maßnahmenpaket, das zur geplanten Nutzung sowie zum verfügbaren Budget passt.',
    more: (
      <p className={p}>
        Dabei können sowohl Oberflächen und Raumstrukturen als auch technische Installationen und funktionale Bereiche
        erneuert werden. Eigentümer und Investoren in Groß-Gerau, Büttelborn, Mörfelden-Walldorf, Ginsheim-Gustavsburg
        und Weiterstadt erhalten eine zentral koordinierte Umsetzung mit transparent definierten Leistungsbereichen.
      </p>
    ),
  },
  {
    id: 'gewerbesanierung-laufender-betrieb',
    title: 'Gewerbesanierung im laufenden Betrieb',
    icon: 'Workflow',
    lead: 'Bei vielen Unternehmen kann der Geschäftsbetrieb während der Sanierung nicht vollständig ausgesetzt werden. Deshalb planen wir Gewerbesanierungen auf Wunsch abschnittsweise und stimmen Arbeitszeiten, Bauphasen sowie Zugangswege auf den laufenden Betrieb ab.',
    more: (
      <p className={p}>
        Staubintensive, laute oder besonders umfangreiche Arbeiten können nach Möglichkeit in geeignete Zeitfenster gelegt
        werden. Dadurch lassen sich Beeinträchtigungen reduzieren, ohne die Qualität der Ausführung zu vernachlässigen.
        Diese Form der Projektplanung ist besonders für Büros, Praxen, Ladenflächen und betriebliche Standorte in stark
        frequentierten Gebieten geeignet.
      </p>
    ),
  },
  {
    id: 'schluesselfertige-gewerbesanierung',
    title: 'Schlüsselfertige Gewerbesanierung',
    icon: 'KeyRound',
    lead: 'Bei einer schlüsselfertigen Gewerbesanierung übernimmt Radex die zentrale Planung und Koordination der vereinbarten Leistungen. Auftraggeber müssen nicht jedes Fachgewerk einzeln beauftragen und abstimmen, sondern erhalten eine strukturierte Projektbetreuung mit klaren Zuständigkeiten.',
    more: (
      <p className={p}>
        Vom Rückbau über den Innenausbau bis zu Boden-, Wand-, Elektro- und Sanitärarbeiten werden alle Projektabschnitte
        aufeinander abgestimmt. Dieses Modell eignet sich besonders für Unternehmen, Investoren und Eigentümer, die ihre
        Gewerbeimmobilie mit möglichst geringem eigenem Koordinationsaufwand modernisieren möchten.
      </p>
    ),
  },
  {
    id: 'innenausbau-gewerbe',
    title: 'Innenausbau für Gewerbe',
    icon: 'Layers3',
    lead: 'Ein professioneller Innenausbau verbindet funktionale Anforderungen mit der gewünschten Gestaltung. Wir realisieren neue Raumaufteilungen, Trennwände, abgehängte Decken, Bodenflächen, Wandoberflächen und weitere Ausbauarbeiten für unterschiedlichste Gewerbenutzungen.',
    more: (
      <p className={p}>
        Ob Bürogebäude in Eschborn, Praxisfläche in Oberursel, Ladenlokal in Neu-Isenburg oder Gewerbeeinheit in
        Dietzenbach – der Innenausbau wird auf die Nutzung, die technischen Voraussetzungen und die betrieblichen
        Abläufe abgestimmt.
      </p>
    ),
  },
  {
    id: 'technische-modernisierung-gewerbe',
    title: 'Technische Modernisierung von Gewerbeobjekten',
    icon: 'Settings2',
    lead: 'Bei einer Gewerbe- & Objektsanierung müssen häufig auch technische Installationen an veränderte Anforderungen angepasst werden. Dazu zählen unter anderem Elektroanschlüsse, Beleuchtung, Sanitärbereiche, Heizungsanpassungen und vorbereitende Arbeiten für weitere technische Systeme.',
    more: (
      <p className={p}>
        Radex koordiniert diese Leistungen gemeinsam mit den übrigen Ausbaugewerken. Dadurch werden technische Arbeiten
        nicht isoliert betrachtet, sondern sinnvoll in den gesamten Bauablauf integriert. Dies reduziert Schnittstellen
        und erleichtert die planbare Umsetzung.
      </p>
    ),
  },
];
