import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const energieeffizienzSeoIntro = (
  <>
    <p className={p}>
      Energieeffizienz bedeutet, vorhandene Energie möglichst effektiv einzusetzen. Neben baulichen Maßnahmen spielen
      moderne Steuerungssysteme, digitale Gebäudetechnik und ein intelligentes Energiemanagement eine entscheidende
      Rolle. Durch gezielte Optimierungen lassen sich Betriebskosten senken, Ressourcen schonen und der Komfort in Wohn-
      und Gewerbeimmobilien verbessern.
    </p>
  </>
);

export const energieeffizienzSeoSections = [
  {
    id: 'energieausweis',
    title: 'Energieausweis verstehen',
    content: (
      <p className={p}>
        Der Energieausweis liefert wichtige Informationen über den energetischen Zustand eines Gebäudes und zeigt auf,
        wo Optimierungspotenziale bestehen. Er dient Eigentümern, Käufern und Mietern als Orientierung und unterstützt
        bei der Planung zukünftiger Modernisierungsmaßnahmen.
      </p>
    ),
  },
  {
    id: 'smart-home',
    title: 'Smart Home & Energiemanagement',
    content: (
      <p className={p}>
        Intelligente Smart-Home-Systeme steuern Heizung, Beleuchtung, Verschattung und weitere Verbraucher automatisch.
        Dadurch wird Energie nur dann eingesetzt, wenn sie tatsächlich benötigt wird.
      </p>
    ),
  },
  {
    id: 'hydraulischer-abgleich',
    title: 'Hydraulischer Abgleich',
    content: (
      <p className={p}>
        Ein hydraulischer Abgleich sorgt dafür, dass sich Heizungswasser gleichmäßig im Gebäude verteilt. Alle
        Heizkörper werden optimal versorgt, wodurch sich Energieverbrauch und Heizkosten häufig reduzieren lassen.
      </p>
    ),
  },
  {
    id: 'led-beleuchtung',
    title: 'LED-Beleuchtung',
    content: (
      <p className={p}>
        Der Austausch alter Beleuchtungssysteme gegen moderne LED-Technik senkt den Stromverbrauch erheblich und
        reduziert gleichzeitig Wartungs- und Betriebskosten.
      </p>
    ),
  },
  {
    id: 'heizungsregelung',
    title: 'Heizungsregelung optimieren',
    content: (
      <p className={p}>
        Moderne Regelungstechnik passt Heizleistung und Temperaturen automatisch an den tatsächlichen Bedarf an. Das
        verbessert die Energieeffizienz und erhöht gleichzeitig den Komfort.
      </p>
    ),
  },
  {
    id: 'waermerueckgewinnung',
    title: 'Wärmerückgewinnung',
    content: (
      <p className={p}>
        Systeme zur Wärmerückgewinnung nutzen bereits vorhandene Wärme erneut. Dadurch sinkt der Energiebedarf für
        Heizung und Warmwasser.
      </p>
    ),
  },
  {
    id: 'lastmanagement',
    title: 'Lastmanagement',
    content: (
      <p className={p}>
        Ein intelligentes Lastmanagement verteilt Stromverbraucher effizient über den Tagesverlauf und verhindert
        unnötige Lastspitzen – besonders relevant bei Wallboxen, Photovoltaik und größeren Gewerbeobjekten.
      </p>
    ),
  },
  {
    id: 'energiemonitoring',
    title: 'Energiemonitoring',
    content: (
      <p className={p}>
        Durch die kontinuierliche Überwachung des Energieverbrauchs lassen sich Auffälligkeiten frühzeitig erkennen und
        Optimierungspotenziale gezielt nutzen.
      </p>
    ),
  },
  {
    id: 'co2',
    title: 'CO₂-Emissionen reduzieren',
    content: (
      <p className={p}>
        Eine höhere Energieeffizienz senkt nicht nur die Betriebskosten, sondern reduziert gleichzeitig den CO₂-Ausstoß
        und verbessert die Nachhaltigkeit der Immobilie.
      </p>
    ),
  },
  {
    id: 'bestand',
    title: 'Energiesparpotenziale im Bestand',
    content: (
      <p className={p}>
        Auch Bestandsgebäude bieten häufig erhebliche Möglichkeiten zur Verbesserung der Energieeffizienz. Bereits
        kleinere Optimierungen können langfristig zu deutlichen Einsparungen führen.
      </p>
    ),
  },
];

export const energieeffizienzSeoLinkSections = [
  {
    id: 'energetische-sanierung-link',
    title: 'Energetische Sanierung',
    to: '/energetische-sanierung-rhein-main',
    content: (
      <p className={p}>
        Verbinden Sie technische Effizienzmaßnahmen mit einer ganzheitlichen Modernisierung der Gebäudehülle und
        Anlagentechnik.
      </p>
    ),
  },
  {
    id: 'sanierung-foerderung-link',
    title: 'Sanierung Förderung',
    to: '/sanierung-foerderung-rhein-main',
    content: (
      <p className={p}>
        Erfahren Sie, welche Förderwege für geplante Energie- und Sanierungsmaßnahmen relevant sein können.
      </p>
    ),
  },
  {
    id: 'elektrotechnik-link',
    title: 'Elektrotechnik & Gebäudetechnik',
    to: '/elektrotechnik-gebaeudetechnik',
    content: (
      <p className={p}>
        Schaffen Sie die technische Grundlage für Smart Home, Energiemanagement, Wallbox und moderne elektrische
        Verbraucher.
      </p>
    ),
  },
  {
    id: 'heizung-sanitaer-link',
    title: 'Heizung & Sanitär',
    to: '/heizung-sanitaer',
    content: (
      <p className={p}>
        Optimieren Sie Heizungsanlagen, Warmwasserbereitung und hydraulische Systeme für einen effizienteren Betrieb.
      </p>
    ),
  },
  {
    id: 'komplettsanierung-link',
    title: 'Komplettsanierung',
    to: '/komplettsanierung-rhein-main',
    content: (
      <p className={p}>
        Integrieren Sie Energieeffizienzmaßnahmen strukturiert in eine umfassende Modernisierung Ihrer Immobilie.
      </p>
    ),
  },
  {
    id: 'generalunternehmer-link',
    title: 'Generalunternehmer',
    to: '/generalunternehmer-rhein-main',
    content: (
      <p className={p}>
        Ein zentraler Ansprechpartner übernimmt die Koordination der beteiligten Gewerke während des gesamten Projekts.
      </p>
    ),
  },
];
