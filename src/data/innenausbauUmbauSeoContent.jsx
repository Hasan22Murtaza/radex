import { Link } from '../router';

const p = 'mb-4 text-gray-600';

export const innenausbauUmbauSeoIntro = (
  <>
    <p className={p}>
      Professioneller Innenausbau verbindet Gestaltung, Funktionalität und präzise Handwerksarbeit. Je nach Immobilie
      reicht das Leistungsspektrum von einzelnen Trockenbauarbeiten über neue Raumaufteilungen bis zum vollständigen
      Umbau von Wohnungen, Häusern und Gewerbeflächen.
    </p>
    <p className={p}>
      Radex koordiniert Planung, Rückbau, Ausbau und Fertigstellung zentral. Dadurch greifen alle Gewerke strukturiert
      ineinander und das Projekt bleibt hinsichtlich Qualität, Terminen und Kosten transparent.
    </p>
  </>
);

export const innenausbauUmbauSeoSections = [
  {
    id: 'innenausbau-planen',
    title: 'Innenausbau professionell planen',
    content: (
      <>
        <p className={p}>
          Ein hochwertiges Ergebnis beginnt mit einer strukturierten Planung. Raumaufteilung, Nutzung, Materialien,
          technische Anforderungen und Bauablauf werden frühzeitig aufeinander abgestimmt.
        </p>
        <p className={p}>
          So lassen sich Schnittstellen zwischen den Gewerken reduzieren und spätere Änderungen vermeiden.
        </p>
      </>
    ),
  },
  {
    id: 'grundriss-veraendern',
    title: 'Grundriss verändern',
    content: (
      <>
        <p className={p}>
          Neue Lebens- und Arbeitskonzepte erfordern häufig angepasste Raumaufteilungen. Durch neue Trockenbauwände,
          veränderte Türpositionen oder den Rückbau bestehender Trennwände entstehen funktionale Grundrisse.
        </p>
        <p className={p}>
          Bei Eingriffen in tragende Bauteile sind eine fachgerechte statische Prüfung und gegebenenfalls behördliche
          Genehmigungen erforderlich.
        </p>
      </>
    ),
  },
  {
    id: 'innenausbau-wohnung',
    title: 'Innenausbau von Wohnungen',
    content: (
      <>
        <p className={p}>
          Beim Innenausbau einer Wohnung können einzelne Räume modernisiert oder komplette Wohneinheiten neu gestaltet
          werden. Typische Leistungen sind Trockenbau, Bodenarbeiten, Malerarbeiten, Türen und die Anpassung der
          Raumaufteilung.
        </p>
        <p className={p}>
          <Link to="/innenausbau-wohnung-rhein-main">Innenausbau Wohnung Rhein-Main</Link>
        </p>
      </>
    ),
  },
  {
    id: 'innenausbau-haus',
    title: 'Innenausbau von Häusern',
    content: (
      <>
        <p className={p}>
          Bestandsgebäude bieten häufig großes Potenzial für neue Raumkonzepte. Radex koordiniert den Umbau von
          Einfamilienhäusern, Doppelhäusern und weiteren Wohnimmobilien von der Planung bis zur fertigen Übergabe.
        </p>
        <p className={p}>
          <Link to="/innenausbau-haus-rhein-main">Innenausbau Haus Rhein-Main</Link>
        </p>
      </>
    ),
  },
  {
    id: 'trockenbau',
    title: 'Trockenbau für flexible Raumlösungen',
    content: (
      <>
        <p className={p}>
          Trockenbau ermöglicht neue Wände, abgehängte Decken, Installationsverkleidungen und individuell angepasste
          Raumstrukturen. Je nach Nutzung können Schall-, Wärme- und Brandschutzanforderungen berücksichtigt werden.
        </p>
        <p className={p}>
          <Link to="/trockenbau-rhein-main">Trockenbau Rhein-Main</Link>
        </p>
      </>
    ),
  },
  {
    id: 'wand-entfernen',
    title: 'Wand entfernen und Räume öffnen',
    content: (
      <>
        <p className={p}>
          Durch den Rückbau nichttragender Wände lassen sich Räume vergrößern und offene Grundrisse schaffen. Bei
          tragenden Wänden erfolgt die Planung ausschließlich auf Grundlage einer statischen Bewertung und der
          erforderlichen Freigaben.
        </p>
        <p className={p}>
          <Link to="/wand-entfernen-rhein-main">Wand entfernen Rhein-Main</Link>
        </p>
      </>
    ),
  },
  {
    id: 'deckenbau',
    title: 'Abgehängte Decken und Deckensysteme',
    content: (
      <p className={p}>
        Abgehängte Decken schaffen Platz für Beleuchtung, Lüftung, Leitungen und Akustikelemente. Gleichzeitig können
        Raumhöhe und Gestaltung gezielt angepasst werden.
      </p>
    ),
  },
  {
    id: 'schallschutz',
    title: 'Schallschutz im Innenausbau',
    content: (
      <p className={p}>
        Durch geeignete Wand-, Decken- und Bodensysteme kann die Schallübertragung zwischen Räumen reduziert werden.
        Die konkrete Ausführung richtet sich nach Nutzung, Gebäudestruktur und den jeweiligen Anforderungen.
      </p>
    ),
  },
  {
    id: 'brandschutz',
    title: 'Brandschutz im Trockenbau',
    content: (
      <p className={p}>
        Brandschutzanforderungen müssen bei bestimmten Gebäuden und Nutzungsarten bereits in der Planung berücksichtigt
        werden. Geeignete Systeme werden entsprechend den projektbezogenen Vorgaben ausgewählt und ausgeführt.
      </p>
    ),
  },
  {
    id: 'bodenaufbau',
    title: 'Bodenaufbau vorbereiten',
    content: (
      <p className={p}>
        Ein fachgerecht vorbereiteter Untergrund ist die Grundlage für langlebige Bodenbeläge. Je nach Bestand können
        Ausgleich, Estricharbeiten oder weitere vorbereitende Maßnahmen erforderlich sein.
      </p>
    ),
  },
  {
    id: 'tueren-zargen',
    title: 'Türen und Zargen',
    content: (
      <p className={p}>
        Neue Innentüren und Zargen werden auf Raumkonzept, Nutzung und Design abgestimmt. Auch veränderte Türöffnungen
        lassen sich im Rahmen eines Umbaus berücksichtigen.
      </p>
    ),
  },
  {
    id: 'malerarbeiten',
    title: 'Maler- und Oberflächenarbeiten',
    content: (
      <p className={p}>
        Spachtelarbeiten, Anstriche und hochwertige Oberflächen bilden den sichtbaren Abschluss des Innenausbaus.
        Materialien und Farbsysteme werden passend zur Nutzung und Gestaltung ausgewählt.
      </p>
    ),
  },
  {
    id: 'bodenbelaege',
    title: 'Bodenbeläge',
    content: (
      <p className={p}>
        Parkett, Vinyl, Laminat, Teppich oder Fliesen prägen Wirkung und Nutzung eines Raumes. Auswahl und Verlegung
        werden auf Untergrund, Beanspruchung und Gestaltungskonzept abgestimmt.
      </p>
    ),
  },
  {
    id: 'innenausbau-gewerbe',
    title: 'Innenausbau von Gewerbeimmobilien',
    content: (
      <p className={p}>
        Büros, Praxen, Verkaufsflächen und weitere Gewerbeobjekte stellen besondere Anforderungen an Funktion,
        Zeitplanung und technische Koordination. Radex stimmt Ausbau und Bauablauf auf den laufenden oder geplanten
        Betrieb ab.
      </p>
    ),
  },
  {
    id: 'umbau-bestand',
    title: 'Umbau im Bestand',
    content: (
      <p className={p}>
        Bei Bestandsimmobilien müssen vorhandene Konstruktionen, Leitungsführungen und technische Gegebenheiten
        berücksichtigt werden. Eine sorgfältige Bestandsaufnahme reduziert Planungsrisiken und schafft eine verlässliche
        Grundlage für die Umsetzung.
      </p>
    ),
  },
  {
    id: 'schluesselfertiger-innenausbau',
    title: 'Schlüsselfertiger Innenausbau',
    content: (
      <p className={p}>
        Radex koordiniert alle relevanten Gewerke von der ersten Planung bis zur abschließenden Übergabe. Dazu gehören
        Rückbau, Trockenbau, Oberflächen, Böden, Türen und weitere Ausbauleistungen.
      </p>
    ),
  },
];
