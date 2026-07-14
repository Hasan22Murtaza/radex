import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const komplettsanierungSeoIntro = (
  <>
    <p className={p}>
      Eine Komplettsanierung fasst mehrere zentrale Bereiche einer Immobilie in einem abgestimmten Gesamtprojekt
      zusammen – Bad, Leitungen, Elektro, Heizung, Innenausbau und Oberflächen. Statt vieler Einzelaufträge entsteht ein
      klarer Ablauf mit einem Ansprechpartner und einem Festpreis nach Begehung.
    </p>
    <p className={p}>
      Die Radex Objektmanagement GmbH koordiniert Komplett- und Kernsanierungen im Rhein-Main-Gebiet als
      Generalunternehmer. Im Bereich Heizung, Sanitär und Gebäudetechnik ist Bernd Knoop als SHK-Meister und
      Betriebsleiter fachlich verantwortlich – weitere Gewerke werden durch eingespielte Fachpartner gesteuert.
    </p>
  </>
);

export const komplettsanierungSeoSections = [
  {
    id: 'was-ist-komplettsanierung',
    title: 'Was ist eine Komplettsanierung?',
    content: (
      <>
        <p className={p}>
          Eine Komplettsanierung umfasst mehrere zentrale Bereiche einer Immobilie gleichzeitig – nicht nur
          oberflächliche Renovierungen, sondern eine technische, funktionale und gestalterische Neuaufstellung durch
          koordinierte Fachgewerke. Typischerweise werden Bad, Heizung, Sanitär, Elektro, Innenausbau und Böden in einem
          abgestimmten Projekt erneuert.
        </p>
        <p className={p}>
          So entsteht Planungssicherheit: ein Bauleiter, ein Zeitplan und ein Festpreis. Die Gewerke greifen ineinander,
          ohne Pausen durch fehlende Abstimmung. Mehr zum{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'komplett-vs-kern',
    title: 'Komplettsanierung vs. Kernsanierung',
    content: (
      <>
        <p className={p}>
          Eine Komplettsanierung muss nicht bis zur Rohstruktur gehen. Sie erneuert zentrale Bereiche und Technik, kann
          aber bestehende Raumstrukturen und tragende Bauteile weitgehend belassen.
        </p>
        <p className={p}>
          Eine Kernsanierung geht tiefer: Das Gebäude wird oft bis auf die tragende Struktur zurückgebaut. Alle nicht
          tragenden Wände, sämtliche Leitungen für Strom, Wasser und Heizung sowie Böden und Oberflächen werden
          vollständig erneuert. Das Ergebnis kommt einem Neubau gleich – Standort, Grundstück und oft der Charakter des
          Hauses bleiben erhalten.
        </p>
        <p className={p}>
          Welche Variante passt, hängt vom Zustand, vom Sanierungsstau und von Ihren Zielen ab. Radex klärt das in der
          Bestandsaufnahme – bevor Rückbau und Technik geplant werden.
        </p>
      </>
    ),
  },
  {
    id: 'wann-sinnvoll',
    title: 'Wann ist eine Komplettsanierung sinnvoll?',
    content: (
      <>
        <p className={p}>Sinnvoll ist sie insbesondere:</p>
        <ul className={ul}>
          <li>beim Hauskauf vor dem Einzug</li>
          <li>bei einer Erbschaft oder vor dem Verkauf</li>
          <li>bei aufgelaufenem Sanierungsstau</li>
          <li>wenn Bad, Küche, Böden und Leitungen ohnehin gleichzeitig erneuert werden müssen</li>
          <li>zur deutlichen Wertverbesserung der Immobilie</li>
        </ul>
        <p className={p}>
          Für Einfamilienhäuser und Wohnungen gibt es eigene Themenseiten:{' '}
          <Link to="/sanierung/haussanierung">Haussanierung</Link> und{' '}
          <Link to="/sanierung/wohnungssanierung">Wohnungssanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'ablauf',
    title: 'Ablauf einer Komplettsanierung',
    content: (
      <>
        <p className={p}>
          Wir beginnen mit einer gründlichen Bestandsaufnahme und Planung. Nach dem Festpreisangebot folgen Entkernung,
          Rohbauarbeiten und ggf. statische Eingriffe, anschließend die komplette Haustechnik (Elektro, Heizung, Sanitär),
          danach Trockenbau, Estrich, Fliesen, Maler und Bodenbeläge. Den Abschluss bilden Feinmontage und Endreinigung.
        </p>
        <p className={p}>
          Ein fester Bauleiter sorgt dafür, dass die Gewerke getaktet ineinandergreifen. Auch energetische Maßnahmen –
          etwa Wärmepumpe oder Dämmung – lassen sich in diesem Ablauf mitdenken. Mehr zur{' '}
          <Link to="/energetische-sanierung-rhein-main">energetischen Sanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'festpreis',
    title: 'Festpreis und Planungssicherheit',
    content: (
      <>
        <p className={p}>
          Gerade bei einem Großprojekt wie der Komplettsanierung ist Kostensicherheit entscheidend. Sie erhalten ein
          verbindliches Festpreisangebot nach Begehung, das alle vereinbarten Leistungen abdeckt. Änderungen während der
          Bauphase werden transparent dokumentiert und freigegeben – so behalten Sie die Kontrolle über Budget und
          Zeitplan.
        </p>
        <p className={p}>
          Orientierungswerte und Rechner finden Sie auch unter{' '}
          <Link to="/haussanierung-kosten">Haussanierung Kosten</Link> und{' '}
          <Link to="/wohnungssanierung-kosten">Wohnungssanierung Kosten</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'fuer-wen',
    title: 'Für wen ist die Komplettsanierung geeignet?',
    content: (
      <>
        <p className={p}>
          <strong>Immobilienkäufer:</strong> Aus einem sanierungsbedürftigen Objekt wird in einem Zug Ihr modernes Zuhause
          – Technik und Oberflächen abgestimmt vor dem Einzug.
        </p>
        <p className={p}>
          <strong>Erbengemeinschaften:</strong> Wertmaximierung vor dem Verkauf oder zur fairen Aufteilung – mit klarer
          Kosten- und Terminplanung.
        </p>
        <p className={p}>
          <strong>Bestandshalter:</strong> Verlängerung des Gebäudelebenszyklus durch technische Erneuerung und
          zeitgemäßen Ausbau.
        </p>
      </>
    ),
  },
  {
    id: 'warum-radex',
    title: 'Warum Radex für Komplettsanierung',
    content: (
      <>
        <p className={p}>
          <strong>Generalunternehmer:</strong> ein Ansprechpartner für Planung, Koordination und schlüsselfertige
          Übergabe.
        </p>
        <p className={p}>
          <strong>SHK-Meisterkompetenz:</strong> Heizung, Sanitär und Gebäudetechnik unter Meisterverantwortung von Bernd
          Knoop.
        </p>
        <p className={p}>
          <strong>Komplett und Kern klar unterschieden:</strong> Wir planen den realistisch nötigen Eingriff – nicht zu
          wenig und nicht unnötig tief.
        </p>
        <p className={p}>
          <strong>Regional im Rhein-Main-Gebiet:</strong> über 60 Städte, kurze Wege und Erfahrung mit Bestandsgebäuden.
        </p>
      </>
    ),
  },
];
