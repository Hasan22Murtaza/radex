import { useEffect, useState } from 'react';
import { RADEX_LIVE_URL } from '../constants/brand';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  ArrowRight,
  Landmark,
  Home,
  Thermometer,
  FileText,
  Award,
  ShieldCheck,
  Handshake,
  UserCheck,
  Leaf,
  PiggyBank,
  TrendingDown,
  Wind,
  Droplets,
} from 'lucide-react';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';

const HERO_IMAGE = '/img/waermepumpe-hero.webp';
const LIVE_IMAGE = '/img/waermepumpe-radex-live.webp';

const suitableCards = [
  { title: 'Altbau', desc: 'Prüfung bestehender Heizsysteme und möglicher Modernisierung.', icon: Landmark },
  { title: 'Neubau', desc: 'Effiziente Heiztechnik für moderne Wohnhäuser.', icon: Home },
  { title: 'Heizungsmodernisierung', desc: 'Austausch alter Öl- oder Gasheizungen.', icon: Thermometer },
  { title: 'Fördermöglichkeiten', desc: 'Beratung zu aktuellen Förderprogrammen.', icon: FileText },
];

const whyRadexCards = [
  { title: 'SHK-meistergeführter Fachbetrieb', desc: 'Heizung, Sanitär und Gebäudetechnik unter Meisterverantwortung von Bernd Knoop.', icon: Award },
  { title: 'Fachgerechte Planung', desc: 'Objektbezogene Prüfung – keine pauschalen Empfehlungen.', icon: ShieldCheck },
  { title: 'Förderberatung', desc: 'Förderthemen früh in die Planung einbinden.', icon: FileText },
  { title: 'Alles aus einer Hand', desc: 'Ein Ansprechpartner von der Beratung bis zur Übergabe.', icon: Handshake },
  { title: 'Festpreisgarantie', desc: 'Transparentes Angebot nach Besichtigung – ohne versteckte Kosten.', icon: ShieldCheck },
  { title: 'Fester Ansprechpartner', desc: 'Von der ersten Idee bis zur Inbetriebnahme begleitet Sie ein festes Team.', icon: UserCheck },
];

const benefitCards = [
  { title: 'Energiekosten senken', desc: 'Moderne Wärmepumpen arbeiten besonders effizient und reduzieren langfristig die Heizkosten.', icon: TrendingDown },
  { title: 'Staatliche Förderung', desc: 'Je nach Projekt stehen attraktive Förderprogramme zur Verfügung.', icon: PiggyBank },
  { title: 'Umweltfreundlich', desc: 'Heizen mit erneuerbarer Energie und weniger CO₂-Ausstoß.', icon: Leaf },
  { title: 'Zukunftssicher', desc: 'Eine moderne Heiztechnik steigert den Wert Ihrer Immobilie.', icon: Home },
];

const processSteps = [
  'Kostenlose Beratung',
  'Vor-Ort-Termin',
  'Planung & Angebot',
  'Fördermöglichkeiten prüfen',
  'Fachgerechte Installation',
  'Inbetriebnahme & Übergabe',
];

const faqsData = [
  {
    q: 'Ist eine Wärmepumpe für mein Haus geeignet?',
    a: 'Das hängt von Heizflächen, Vorlauftemperatur, Dämmstandard, Warmwasserbedarf und Gebäudezustand ab. Radex prüft objektbezogen, ob eine Wärmepumpe sinnvoll ist oder ob vorbereitende Maßnahmen notwendig sind.',
  },
  {
    q: 'Funktioniert eine Wärmepumpe auch im Altbau?',
    a: 'Häufig ja, aber nicht pauschal. Entscheidend sind ausreichend große Heizflächen, passende Vorlauftemperaturen und ein realistischer Wärmebedarf. Viele Bestandsgebäude können vorbereitet oder direkt umgestellt werden.',
  },
  {
    q: 'Welche Förderungen gibt es?',
    a: 'Über die Bundesförderung für effiziente Gebäude (BEG) sind Zuschüsse von bis zu 70 % möglich. Radex berücksichtigt Förderthemen in der Planung; für verbindliche Förderberatung sollte ein zugelassener Energieberater eingebunden werden.',
  },
  {
    q: 'Wie lange dauert die Installation?',
    a: 'Das hängt von Gebäude, Technik und Umfang ab. Eine reine Heizungsmodernisierung kann oft in wenigen Tagen umgesetzt werden; bei umfassenderen Sanierungen wird der Zeitplan im Gesamtprojekt abgestimmt.',
  },
  {
    q: 'Wie hoch sind die Betriebskosten?',
    a: 'Moderne Wärmepumpen arbeiten besonders effizient bei niedrigen Vorlauftemperaturen. Die tatsächlichen Betriebskosten hängen von Gebäude, Nutzung, Auslegung und Strompreis ab – eine seriöse Einschätzung erfolgt nach der Bestandsprüfung.',
  },
  {
    q: 'Welche Wärmepumpe ist die richtige?',
    a: 'Die häufigste Lösung im Bestand ist eine Luft-Wasser-Wärmepumpe. Bei geeigneten Grundstücken kann eine Sole-Wasser-Wärmepumpe hohe Effizienz bieten. Welche Variante passt, ergibt sich aus Gebäude, Platz und Nutzung.',
  },
];

const seoAccordions = [
  {
    title: 'Wärmepumpe im Bestand',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Eine Wärmepumpe kann ein wichtiger Baustein für moderne, effiziente und zukunftsorientierte Wärmeversorgung sein. Sie eignet sich besonders dann, wenn Gebäude, Heizflächen, Warmwasserbedarf, Dämmstandard und Nutzung zusammenpassen. Gerade bei Sanierungen im Bestand sollte eine Wärmepumpe jedoch nicht pauschal geplant werden. Entscheidend ist eine fachliche Prüfung: Passt das Gebäude zur Wärmepumpe? Sind die vorhandenen Heizkörper geeignet? Welche Vorlauftemperaturen werden benötigt? Wie wird Warmwasser bereitgestellt? Gibt es bauliche oder energetische Maßnahmen, die vorher sinnvoll sind?
        </p>
        <p className="mb-4 text-gray-600">
          Die Radex Objektmanagement GmbH aus Rödermark begleitet Eigentümer im Rhein-Main-Gebiet bei der Prüfung, Planung und Einbindung von Wärmepumpen im Rahmen von Sanierungen. Im Bereich Heizung, Sanitär und Gebäudetechnik ist Radex meistergeführt durch Bernd Knoop, SHK-Meister und Betriebsleiter. Dadurch werden Heizungsmodernisierung, Wärmepumpenprüfung, Wärmeverteilung, Heizkörper, Warmwasser, Sanitärschnittstellen und Gebäudetechnik fachlich verantwortet.
        </p>
        <p className="mb-4 text-gray-600">
          Eine Wärmepumpe ist nicht einfach nur ein neues Heizgerät. Sie ist Teil eines Heizsystems, das zum Gebäude passen muss. In einem gut vorbereiteten Haus kann eine Wärmepumpe sehr sinnvoll sein. In einem Gebäude mit hohen Vorlauftemperaturen, kleinen Heizkörpern, schlechter Dämmung oder unklarem Warmwasserbedarf sollte zunächst geprüft werden, welche Anpassungen notwendig sind.
        </p>
        <p className="mb-4 text-gray-600">
          Radex betrachtet die Wärmepumpe deshalb immer im Zusammenhang mit der Immobilie. Wenn eine Haussanierung, Komplettsanierung, Kernsanierung, Badsanierung, Heizungsmodernisierung oder energetische Sanierung geplant ist, können viele Voraussetzungen früh geprüft und sinnvoll verbunden werden. Weitere Gewerke wie Elektrotechnik, Innenausbau, Trockenbau, Dämmung, Bodenarbeiten oder Malerarbeiten werden bei Bedarf durch qualifizierte Fachpartner umgesetzt und von Radex koordiniert.
        </p>
        <p className="text-gray-600">
          <a href="/leistungen/heizung-sanitaer">Heizung & Sanitär</a> ·{' '}
          <a href="/heizung-sanitaer-rhein-main">Heizungsmodernisierung</a> ·{' '}
          <a href="/sanitaerinstallation-rhein-main">Sanitärinstallation</a> ·{' '}
          <a href="/energetische-sanierung-rhein-main">Energetische Sanierung</a> ·{' '}
          <a href="/leistungen/energie-foerderung">Energie & Förderung</a> ·{' '}
          <a href="/haussanierung-rhein-main">Haussanierung</a> ·{' '}
          <a href="/komplettsanierung-rhein-main">Komplettsanierung</a> ·{' '}
          <a href="/generalunternehmer-rhein-main">Generalunternehmer</a> ·{' '}
          <a href="/badsanierung-rhein-main">Badsanierung</a> ·{' '}
          <a href="/elektroinstallation-rhein-main">Elektroinstallation</a> ·{' '}
          <a href="/innenausbau-umbau-rhein-main">Innenausbau & Umbau</a> ·{' '}
          <a href="/schadstoffsanierung-rhein-main">Schadstoffsanierung</a> ·{' '}
          <a href="/schimmelsanierung-rhein-main">Schimmelsanierung</a> ·{' '}
          <a href="/kontakt">Kontakt</a>
        </p>
      </>
    ),
  },
  {
    title: 'Wann ist eine Wärmepumpe sinnvoll?',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Eine Wärmepumpe ist sinnvoll, wenn sie effizient arbeiten kann und zum Gebäude passt. Besonders wichtig sind niedrige Vorlauftemperaturen, ausreichend große Heizflächen, ein passender Warmwasserbedarf und ein Gebäudestandard, der nicht unnötig hohe Heizleistung erfordert. Dabei muss eine Immobilie nicht perfekt sein. Viele Bestandsgebäude können für eine Wärmepumpe geeignet sein oder durch gezielte Maßnahmen vorbereitet werden.
        </p>
        <p className="mb-2 text-gray-600">Typische Situationen, in denen eine Wärmepumpe geprüft werden sollte:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>alte Heizung soll modernisiert werden</li>
          <li>Haus wird energetisch saniert</li>
          <li>Haussanierung oder Komplettsanierung ist geplant</li>
          <li>Heizkörper sollen geprüft oder ausgetauscht werden</li>
          <li>Warmwasser soll neu geplant werden</li>
          <li>Eigentümer möchten unabhängiger von fossilen Energieträgern werden</li>
          <li>Gebäude soll langfristig effizienter betrieben werden</li>
          <li>Dach, Kellerdecke oder Fenster werden modernisiert</li>
          <li>Sanierung nach Hauskauf steht an</li>
          <li>vorhandene Heizung ist störanfällig oder veraltet</li>
          <li>Eigentümer möchten Fördermöglichkeiten prüfen lassen</li>
          <li>langfristiger Werterhalt der Immobilie steht im Vordergrund</li>
        </ul>
        <p className="mb-4 text-gray-600">
          Eine Wärmepumpe sollte jedoch nicht nur nach Wunsch entschieden werden. Sie muss technisch zum Gebäude passen. Radex hilft, diese Fragen früh einzuordnen. Dabei geht es nicht darum, jede Immobilie in dasselbe Schema zu pressen. Entscheidend ist eine ehrliche, technische Betrachtung.
        </p>
        <p className="text-gray-600">
          Gerade bei Eigentümern, die ein Haus im Rhein-Main-Gebiet gekauft haben, lohnt sich eine frühe Prüfung. Vor dem Einzug können Heizkörper, Leitungen, Warmwasser, Bad, Innenausbau und energetische Maßnahmen besser abgestimmt werden.
        </p>
      </>
    ),
  },
  {
    title: 'Wärmepumpe im Bestand – was vor der Planung geprüft werden sollte',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Viele Eigentümer fragen sich, ob eine Wärmepumpe auch in einem bestehenden Haus funktioniert. Die Antwort lautet: häufig ja, aber nicht pauschal. Bestandsimmobilien unterscheiden sich stark. Baujahr, Dämmstandard, Heizkörper, Fenster, Dach, Kellerdecke, Raumaufteilung, Warmwasserbedarf und bisherige Heizungsanlage beeinflussen die Entscheidung.
        </p>
        <p className="mb-2 text-gray-600">Wichtige Prüfpunkte sind:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>Wie hoch ist der Wärmebedarf des Gebäudes?</li>
          <li>Welche Heizkörper sind vorhanden?</li>
          <li>Welche Vorlauftemperaturen werden aktuell benötigt?</li>
          <li>Werden alle Räume ausreichend warm?</li>
          <li>Gibt es Räume mit zu kleinen Heizkörpern?</li>
          <li>Wie wird Warmwasser derzeit erzeugt?</li>
          <li>Wie viele Personen nutzen das Gebäude?</li>
          <li>Gibt es ein oder mehrere Bäder?</li>
          <li>Sind energetische Maßnahmen geplant?</li>
          <li>Gibt es Platz für Innen- und Außeneinheit?</li>
          <li>Muss Schallschutz berücksichtigt werden?</li>
          <li>Sind Elektroanschluss und Aufstellort technisch passend?</li>
          <li>Können Leitungen oder Heizflächen im Rahmen der Sanierung angepasst werden?</li>
        </ul>
        <p className="text-gray-600">
          Gerade die Heizflächen sind entscheidend. Eine Wärmepumpe arbeitet besonders effizient, wenn sie mit niedrigen Vorlauftemperaturen auskommt. Das gelingt leichter mit großen Heizflächen, passenden Heizkörpern oder{' '}
          <a href="/heizung-sanitaer-rhein-main">Fußbodenheizung</a>. Radex prüft solche Punkte objektbezogen.
        </p>
      </>
    ),
  },
  {
    title: 'Wärmepumpe bei Haussanierung und Komplettsanierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Eine Haussanierung oder Komplettsanierung ist ein besonders guter Zeitpunkt, um eine Wärmepumpe zu prüfen. Wenn ohnehin an Bad, Heizung, Sanitär, Innenausbau, Böden, Wänden, Keller, Dach oder energetischen Bauteilen gearbeitet wird, können die Voraussetzungen für eine Wärmepumpe besser geschaffen werden als bei einem isolierten Heizungstausch.
        </p>
        <p className="mb-2 text-gray-600">Bei einer Haussanierung können viele Fragen gemeinsam betrachtet werden:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>Wird die Heizungsanlage ohnehin erneuert?</li>
          <li>Müssen Heizkörper getauscht oder versetzt werden?</li>
          <li>Werden Böden geöffnet oder erneuert?</li>
          <li>Gibt es Bereiche, in denen Fußbodenheizung sinnvoll wäre?</li>
          <li>Wird das Bad saniert und Warmwasser neu geplant?</li>
          <li>Werden Dachboden, Kellerdecke oder Fenster energetisch verbessert?</li>
          <li>Soll die Immobilie langfristig auf niedrige Betriebskosten ausgelegt werden?</li>
        </ul>
        <p className="text-gray-600">
          Radex koordiniert solche Zusammenhänge als Sanierungspartner. SHK-Leistungen werden unter Meisterverantwortung geführt.{' '}
          <a href="/haussanierung-rhein-main">Haussanierung</a> ·{' '}
          <a href="/komplettsanierung-rhein-main">Komplettsanierung</a> ·{' '}
          <a href="/generalunternehmer-rhein-main">Generalunternehmer</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Wärmepumpe bei Altbausanierung und Kernsanierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Bei Altbausanierungen und Kernsanierungen ist die Prüfung einer Wärmepumpe besonders anspruchsvoll. Ältere Gebäude können sehr gute Substanz, wertvolle Lage und viel Potenzial haben. Gleichzeitig sind Heizsystem, Leitungen, Heizkörper, Dämmstandard, Wandaufbauten und energetische Eigenschaften oft anders als bei modernen Gebäuden.
        </p>
        <p className="mb-2 text-gray-600">Bei Altbau und Kernsanierung sollten unter anderem geprüft werden:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>vorhandene Heizkörpergrößen</li>
          <li>benötigte Vorlauftemperaturen</li>
          <li>Zustand der Leitungen</li>
          <li>Möglichkeit größerer Heizflächen</li>
          <li>Fußbodenheizung in Teilbereichen</li>
          <li>energetische Schwachstellen</li>
          <li>Dachboden- oder Kellerdeckendämmung</li>
          <li>Fenster und Lüftungsverhalten</li>
          <li>Feuchtigkeit oder Schimmel</li>
          <li>Schadstoffverdacht bei Rückbauarbeiten</li>
          <li>Platz für Technik und Außeneinheit</li>
          <li>Elektroanschluss und Fachpartnerkoordination</li>
        </ul>
        <p className="text-gray-600">
          Radex ist zertifiziert für Schimmel- und Asbestsanierung und verfügt über Sachkunde nach TRGS 519. Bei einer Kernsanierung können Heizkörper, Leitungen und Flächenheizungen besser geplant werden.{' '}
          <a href="/altbausanierung-rhein-main">Altbausanierung</a> ·{' '}
          <a href="/schadstoffsanierung-rhein-main">Schadstoffsanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Heizkörper, Fußbodenheizung und Vorlauftemperatur',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Die Vorlauftemperatur ist einer der wichtigsten Punkte bei der Wärmepumpenplanung. Je niedriger die Temperatur ist, mit der das Heizsystem arbeiten kann, desto effizienter kann eine Wärmepumpe in der Regel betrieben werden. Deshalb prüft Radex bei der Wärmepumpenplanung nicht nur die Wärmepumpe selbst, sondern auch Heizkörper, Wärmeverteilung und mögliche Flächenheizungen.
        </p>
        <p className="mb-2 text-gray-600">Typische Fragen:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>Sind die vorhandenen Heizkörper ausreichend groß?</li>
          <li>Werden alle Räume bei niedrigerer Vorlauftemperatur warm?</li>
          <li>Können Heizkörper vergrößert oder getauscht werden?</li>
          <li>Ist Fußbodenheizung in einzelnen Bereichen möglich?</li>
          <li>Wie wirken sich Dämmmaßnahmen auf die Heizlast aus?</li>
        </ul>
        <p className="text-gray-600">
          Eine Fußbodenheizung ist für Wärmepumpen oft günstig, aber nicht immer zwingend erforderlich. Auch passende Heizkörper können funktionieren, wenn sie ausreichend dimensioniert sind. Besonders bei einer{' '}
          <a href="/badsanierung-rhein-main">Badsanierung</a> kann die Wärmeverteilung früh mitgedacht werden.
        </p>
      </>
    ),
  },
  {
    title: 'Warmwasser mit Wärmepumpe planen',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Warmwasser ist bei einer Wärmepumpe ein besonders wichtiger Punkt. Viele Eigentümer denken zuerst an Raumwärme. Im Alltag ist Warmwasser aber genauso entscheidend: Dusche, Badewanne, Waschtisch, Küche, Gäste-WC, mehrere Personen im Haushalt und Komfortansprüche beeinflussen die Planung.
        </p>
        <p className="mb-2 text-gray-600">Bei der Warmwasserplanung geht es um folgende Fragen:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>Wie viele Personen nutzen das Gebäude?</li>
          <li>Gibt es ein oder mehrere Bäder?</li>
          <li>Wird eine große Dusche oder Badewanne geplant?</li>
          <li>Wie hoch ist der tägliche Warmwasserbedarf?</li>
          <li>Wie passt der Speicher zur Wärmepumpe?</li>
          <li>Soll Warmwasser mit einer Badsanierung kombiniert werden?</li>
        </ul>
        <p className="text-gray-600">
          Radex verbindet Warmwasserplanung mit{' '}
          <a href="/sanitaerinstallation-rhein-main">Sanitärinstallation</a>,{' '}
          <a href="/heizung-sanitaer-rhein-main">Heizungsmodernisierung</a> und{' '}
          <a href="/badsanierung-rhein-main">Badplanung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Wärmepumpe und energetische Sanierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Eine Wärmepumpe arbeitet besonders sinnvoll, wenn das Gebäude energetisch gut vorbereitet ist. Dämmstandard, Heizflächen, Fenster, Dach, Kellerdecke und Luftdichtheit beeinflussen, wie effizient das System läuft. Energetische Maßnahmen können die Voraussetzungen für eine Wärmepumpe verbessern.
        </p>
        <p className="mb-2 text-gray-600">Typische Kombinationen sind:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>Wärmepumpe und Heizkörpertausch</li>
          <li>Wärmepumpe und Kellerdeckendämmung</li>
          <li>Wärmepumpe und Dachbodendämmung</li>
          <li>Wärmepumpe und Badsanierung</li>
          <li>Wärmepumpe und Komplettsanierung</li>
          <li>Wärmepumpe und energetische Teilsanierung</li>
          <li>Wärmepumpe und Warmwasseroptimierung</li>
        </ul>
        <p className="text-gray-600">
          Förderprogramme können je nach Maßnahme eine Rolle spielen. Für verbindliche Förderberatung sollte ein zugelassener Energieberater eingebunden werden. Mehr zu{' '}
          <a href="/leistungen/energie-foerderung">Energie & Förderung</a> und{' '}
          <a href="/energetische-sanierung-rhein-main">Energetische Sanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Wärmepumpe bei Badsanierung und Sanitärinstallation',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Eine Wärmepumpe betrifft nicht nur die Heizung, sondern auch Sanitär und Warmwasser. Wenn ein Bad saniert wird, sollte geprüft werden, ob Warmwasser, Heizkörper, Leitungen und Heizsystem zur neuen Nutzung passen.
        </p>
        <p className="mb-2 text-gray-600">Typische Schnittstellen zwischen Wärmepumpe, Bad und Sanitär:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>Warmwasserbedarf der Dusche</li>
          <li>Badewanne oder große Dusche</li>
          <li>Gäste-WC oder zweites Bad</li>
          <li>Badheizkörper</li>
          <li>Fußbodenheizung oder Bodenerwärmung</li>
          <li>Leitungsführung und Speichertechnik</li>
          <li>Sanitärinstallation und Elektrokoordination</li>
        </ul>
        <p className="text-gray-600">
          Radex plant Bad, Sanitär und Heizung zusammen unter SHK-Meisterverantwortung.{' '}
          <a href="/badsanierung-rhein-main">Badsanierung</a> ·{' '}
          <a href="/sanitaerinstallation-rhein-main">Sanitärinstallation</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Wärmepumpe im Einfamilienhaus',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Im Einfamilienhaus lässt sich eine Wärmepumpe oft gut prüfen, weil das gesamte Heizsystem einem Eigentümer zugeordnet ist. Dadurch können Heizungsanlage, Heizkörper, Warmwasser, Dämmung, Räume, Bad, Keller, Dach und mögliche Sanierungsmaßnahmen zusammen betrachtet werden.
        </p>
        <p className="mb-2 text-gray-600">Typische Fragen im Einfamilienhaus:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>Wo kann die Außeneinheit stehen?</li>
          <li>Gibt es genug Platz für Technik und Speicher?</li>
          <li>Müssen Heizkörper angepasst werden?</li>
          <li>Wie hoch ist der Warmwasserbedarf der Familie?</li>
          <li>Sind energetische Maßnahmen geplant?</li>
          <li>Wird das Haus vor dem Einzug saniert?</li>
          <li>Muss Elektrokoordination eingebunden werden?</li>
        </ul>
        <p className="text-gray-600">
          Gerade bei einem Haus nach Kauf ist eine frühe Wärmepumpenprüfung besonders sinnvoll. Wenn noch keine Möbel stehen und ohnehin saniert wird, lassen sich Anpassungen leichter umsetzen.
        </p>
      </>
    ),
  },
  {
    title: 'Wärmepumpe in Mehrfamilienhaus, Wohnung und Objektbestand',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Bei Mehrfamilienhäusern, Eigentumswohnungen und Objektbestand ist die Wärmepumpenplanung komplexer. Es geht nicht nur um Technik, sondern auch um Eigentümergemeinschaft, Hausverwaltung, Mietparteien, zentrale oder dezentrale Systeme, Verteilleitungen, Warmwasser, Platzverhältnisse und Schallschutz.
        </p>
        <p className="mb-2 text-gray-600">Typische Themen:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>zentrale Heizungsmodernisierung</li>
          <li>Warmwasser für mehrere Einheiten</li>
          <li>Heizkörper in Wohnungen</li>
          <li>technische Räume und Aufstellflächen</li>
          <li>Schallschutz der Außeneinheit</li>
          <li>Eigentümerbeschlüsse und Hausverwaltung</li>
          <li>Kombination mit Wohnungssanierungen</li>
        </ul>
        <p className="text-gray-600">
          Radex kann Wärmepumpen- und SHK-Themen in eine größere Sanierungsplanung einordnen.{' '}
          <a href="/wohnungssanierung-rhein-main">Wohnungssanierung</a> ·{' '}
          <a href="/gewerbesanierung-rhein-main">Gewerbesanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Ablauf der Wärmepumpenprüfung mit Radex',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Erstes Gespräch:</strong> Am Anfang wird geklärt, warum eine Wärmepumpe geprüft werden soll – Heizungstausch, Sanierung, Hauskauf, energetische Modernisierung oder Förderinteresse.</li>
        <li><strong>Bestandsaufnahme:</strong> Radex betrachtet Heizungsanlage, Heizkörper, Wärmeverteilung, Warmwasser, Gebäudezustand, Nutzung und technische Schnittstellen.</li>
        <li><strong>Eignung prüfen:</strong> Bewertung, ob eine Wärmepumpe direkt sinnvoll ist oder ob vorbereitende Maßnahmen notwendig sind.</li>
        <li><strong>Maßnahmen abstimmen:</strong> Heizkörper, Warmwasser, energetische Maßnahmen, Elektrokoordination und Sanitärarbeiten werden in den Ablauf eingebunden.</li>
        <li><strong>Angebot und Vorbereitung:</strong> Nachvollziehbares Angebot mit Fachpartnern, Zeitfenster, Material, Technik und Aufstellort.</li>
        <li><strong>Umsetzung:</strong> SHK-Arbeiten unter Meisterverantwortung, weitere Gewerke bei Bedarf koordiniert.</li>
        <li><strong>Übergabe:</strong> Inbetriebnahme und Übergabe – Ziel ist eine Lösung, die im Alltag zuverlässig funktioniert.</li>
      </ul>
    ),
  },
  {
    title: 'Wärmepumpe im Rhein-Main-Gebiet',
    content: (
      <p className="text-gray-600">
        Radex sitzt in Rödermark und begleitet Wärmepumpenprüfungen, Heizungsmodernisierungen und Sanierungen im Rhein-Main-Gebiet. Die Region ist vielfältig: Einfamilienhäuser in Rödermark, Rodgau, Langen, Dreieich oder Neu-Isenburg, Eigentumswohnungen in Frankfurt und Offenbach, Bestandsimmobilien in Darmstadt und Hanau, hochwertige Wohnlagen in Bad Homburg, Kronberg, Königstein oder Bad Soden sowie Gewerbeflächen in Eschborn, Hofheim, Groß-Gerau, Rüsselsheim oder Maintal. Radex plant nicht nach starren Paketen – entscheidend ist, welche Lösung zum Gebäude, zur Nutzung und zum Sanierungsziel passt.
      </p>
    ),
  },
  {
    title: 'Warum Radex für Wärmepumpe und Heizungsmodernisierung?',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Eine Wärmepumpe braucht eine fachliche Prüfung, realistische Planung und saubere Einbindung in das Gebäude. Radex verbindet SHK-Meisterkompetenz, Sanierungserfahrung, regionale Nähe und koordinierte Fachpartner.
        </p>
        <ul className="space-y-4 text-gray-600">
          <li><strong>SHK-Meisterkompetenz:</strong> Heizung, Sanitär und Gebäudetechnik werden unter Meisterverantwortung geführt.</li>
          <li><strong>Objektbezogene Prüfung:</strong> Eine Wärmepumpe wird nicht pauschal empfohlen, sondern nach Gebäude, Heizflächen, Warmwasser und Nutzung bewertet.</li>
          <li><strong>Sanierungserfahrung:</strong> Radex kennt die Schnittstellen zwischen Heizung, Bad, Sanitär, Innenausbau, Energie und Bestand.</li>
          <li><strong>Koordinierte Fachpartner:</strong> Elektro, Innenausbau, Dämmung, Trockenbau oder weitere Gewerke werden bei Bedarf eingebunden.</li>
          <li><strong>Bestandskompetenz:</strong> Alte Leitungen, Heizkörper, Feuchtigkeit, Schimmel, Schadstoffverdacht und gewachsene Gebäudestrukturen werden berücksichtigt.</li>
          <li><strong>Regionale Nähe:</strong> Radex sitzt in Rödermark und arbeitet im Rhein-Main-Gebiet.</li>
          <li><strong>Praxisnahe Beratung:</strong> Ziel ist eine Heizlösung, die zum Gebäude passt und im Alltag zuverlässig funktioniert.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Verwandte Leistungen',
    content: (
      <ul className="space-y-2 text-gray-600">
        <li><a href="/leistungen/heizung-sanitaer">Heizung & Sanitär</a></li>
        <li><a href="/heizung-sanitaer-rhein-main">Heizungsmodernisierung</a></li>
        <li><a href="/sanitaerinstallation-rhein-main">Sanitärinstallation</a></li>
        <li><a href="/heizung-sanitaer-rhein-main">Fußbodenheizung</a></li>
        <li><a href="/leistungen/energie-foerderung">Energie & Förderung</a></li>
        <li><a href="/badsanierung-rhein-main">Badsanierung</a></li>
        <li><a href="/generalunternehmer-rhein-main">Generalunternehmer</a></li>
        <li><a href={RADEX_LIVE_URL}>Radex Live</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
    ),
  },
  {
    title: 'Ist eine Wärmepumpe im Altbau möglich?',
    content: (
      <p className="text-gray-600">
        Ja, eine Wärmepumpe kann auch im Altbau möglich sein. Entscheidend sind Heizflächen, Vorlauftemperatur, Dämmstandard, Warmwasserbedarf und Gebäudezustand. Radex prüft objektbezogen, ob eine Wärmepumpe sinnvoll ist oder ob vorbereitende Maßnahmen notwendig sind.
      </p>
    ),
  },
  {
    title: 'Ist Fußbodenheizung für eine Wärmepumpe notwendig?',
    content: (
      <p className="text-gray-600">
        Fußbodenheizung ist oft vorteilhaft, aber nicht immer zwingend. Auch passende Heizkörper können funktionieren, wenn sie ausreichend dimensioniert sind und niedrige Vorlauftemperaturen ermöglichen.
      </p>
    ),
  },
  {
    title: 'Was passiert mit Warmwasser bei einer Wärmepumpe?',
    content: (
      <p className="text-gray-600">
        Warmwasser wird bei der Wärmepumpenplanung mitberücksichtigt. Speichergröße, Nutzerzahl, Bäder, Duschen, Leitungswege und Komfortanspruch müssen passend geplant werden.
      </p>
    ),
  },
  {
    title: 'Kann eine Wärmepumpe mit einer Badsanierung kombiniert werden?',
    content: (
      <p className="text-gray-600">
        Ja. Das ist häufig sinnvoll, weil Badheizkörper, Warmwasser, Leitungen, Sanitärinstallation und Heizsystem zusammenhängen. Radex koordiniert diese Schnittstellen.
      </p>
    ),
  },
  {
    title: 'Prüft Radex auch Fördermöglichkeiten?',
    content: (
      <p className="text-gray-600">
        Radex kann Förderthemen in der Planung berücksichtigen. Da sich Bedingungen ändern können, sollte für verbindliche Förderberatung ein zugelassener Energieberater eingebunden werden.
      </p>
    ),
  },
  {
    title: 'Ist Radex ein SHK-Fachbetrieb?',
    content: (
      <p className="text-gray-600">
        Ja. Im Bereich Heizung, Sanitär und Gebäudetechnik ist Radex meistergeführt durch Bernd Knoop, SHK-Meister und Betriebsleiter.
      </p>
    ),
  },
  {
    title: 'In welchen Regionen bietet Radex Wärmepumpenplanung an?',
    content: (
      <p className="text-gray-600">
        Radex sitzt in Rödermark und begleitet Wärmepumpenprüfung und Heizungsmodernisierung im Rhein-Main-Gebiet, unter anderem in Frankfurt, Offenbach, Darmstadt, Hanau, Aschaffenburg, Wiesbaden, Mainz, Bad Homburg, Neu-Isenburg, Dreieich, Langen, Rodgau, Heusenstamm, Obertshausen, Dietzenbach, Mühlheim, Seligenstadt, Groß-Gerau, Maintal, Rüsselsheim, Eschborn, Hofheim, Bad Soden, Kronberg, Königstein und Rödermark.
      </p>
    ),
  },
  {
    title: 'Muss ein Haus komplett gedämmt sein?',
    content: (
      <p className="text-gray-600">
        Nicht immer. Eine gute Dämmung kann die Effizienz verbessern, ist aber nicht in jedem Fall Voraussetzung. Wichtig ist, wie viel Wärme das Gebäude benötigt und ob die Heizflächen mit niedrigen Vorlauftemperaturen arbeiten können.
      </p>
    ),
  },
  {
    title: 'Müssen Heizkörper ausgetauscht werden?',
    content: (
      <p className="text-gray-600">
        Nicht automatisch. Manche Heizkörper können weiter genutzt werden, andere sollten vergrößert oder ersetzt werden. Radex prüft die vorhandenen Heizflächen und bewertet, ob Anpassungen sinnvoll sind.
      </p>
    ),
  },
  {
    title: 'Was kostet eine Wärmepumpe?',
    content: (
      <p className="text-gray-600">
        Die Kosten hängen von Gebäude, Heizleistung, Warmwasserbedarf, Heizkörpern, Aufstellort, Technik und möglichen Zusatzmaßnahmen ab. Nach Bestandsaufnahme erstellt Radex ein nachvollziehbares Angebot. Richtwert: ab ca. €25.000 inkl. Einbau.
      </p>
    ),
  },
  {
    title: 'Wer übernimmt Elektroarbeiten?',
    content: (
      <p className="text-gray-600">
        Elektroarbeiten werden durch qualifizierte Elektrofachpartner ausgeführt. Radex koordiniert diese Fachpartner im Sanierungsablauf.
      </p>
    ),
  },
];

function SharedCTABlock({ isHero = false, centered = false, showMicro = false }) {
  return (
    <>
      <div
        className={`br-hero-actions ${isHero ? '' : 'mt-8'}`}
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: centered ? 'center' : 'flex-start',
        }}
      >
        <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
        <a
          href="https://wa.me/496074960620"
          target="_blank"
          rel="noopener noreferrer"
          className="btn br-btn-whatsapp"
        >
          Fotos über WhatsApp senden <MessageSquare size={18} color="#25D366" style={{ marginLeft: '8px' }} />
        </a>
        <a
          href="tel:+496074960620"
          className="btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: isHero ? 'transparent' : '#fff',
            border: isHero ? '1px solid #111827' : '1px solid #d1d5db',
            color: '#111827',
            padding: '12px 24px',
            borderRadius: '4px',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          <Phone size={18} /> Jetzt anrufen
        </a>
      </div>
      {showMicro && (
        <p className="br-hero-micro mt-4" style={{ textAlign: centered ? 'center' : 'left' }}>
          <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
        </p>
      )}
    </>
  );
}

function PremiumIconCards({ cards }) {
  return (
    <div className="br-nav-landing-grid">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.title} className="br-decision-card" style={{ cursor: 'default' }}>
            <div className="br-decision-icon">
              <Icon size={40} strokeWidth={1.5} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function WaermepumpeLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Wärmepumpe im Rhein-Main-Gebiet | Beratung, Planung & Einbau | Radex',
    description:
      'Wärmepumpe vom SHK-Meisterbetrieb. Beratung, Planung, Einbau und Fördermöglichkeiten für private Eigentümer im gesamten Rhein-Main-Gebiet. Jetzt kostenlos beraten lassen.',
    path: '/waermepumpe-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Wärmepumpe im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">
              Zukunftssicher heizen. Energiekosten senken.
            </p>
            <p className="br-hero-text">
              Eine Wärmepumpe zählt heute zu den effizientesten und nachhaltigsten Heizsystemen für Wohngebäude. Sie reduziert Energiekosten, nutzt erneuerbare Energiequellen und kann staatlich gefördert werden. Als SHK-meistergeführter Fachbetrieb begleitet Radex private Eigentümer und Unternehmen im gesamten Rhein-Main-Gebiet von der ersten Beratung über die Planung bis zur fachgerechten Installation Ihrer neuen Wärmepumpe.
            </p>
            <SharedCTABlock isHero showMicro />
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Ist eine Wärmepumpe für Ihr Gebäude geeignet?</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Nicht jede Immobilie ist gleich. Deshalb prüfen wir gemeinsam mit Ihnen, welche Lösung wirtschaftlich und technisch sinnvoll ist.
            </p>
          </div>
          <PremiumIconCards cards={suitableCards} />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer auf Radex setzen</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum eine Wärmepumpe?</h2>
          </div>
          <PremiumIconCards cards={benefitCards} />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Welche Wärmepumpe passt zu Ihrem Haus?</h2>
          </div>
          <div className="br-nav-landing-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <div className="br-decision-card">
              <div className="br-decision-icon">
                <Wind size={40} strokeWidth={1.5} />
              </div>
              <h3>Luft-Wasser-Wärmepumpe</h3>
              <p>Die häufigste Lösung für Bestandsgebäude und Einfamilienhäuser.</p>
              <a href="#kontakt" className="br-btn-orange" style={{ display: 'inline-block', marginTop: '16px', textDecoration: 'none' }}>
                Mehr erfahren
              </a>
            </div>
            <div className="br-decision-card">
              <div className="br-decision-icon">
                <Droplets size={40} strokeWidth={1.5} />
              </div>
              <h3>Sole-Wasser-Wärmepumpe</h3>
              <p>Hohe Effizienz durch Nutzung der Erdwärme.</p>
              <a href="#kontakt" className="br-btn-orange" style={{ display: 'inline-block', marginTop: '16px', textDecoration: 'none' }}>
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Kosten einer Wärmepumpe</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Die Kosten einer Wärmepumpe hängen von der Gebäudegröße, dem energetischen Zustand, dem gewünschten System und den baulichen Gegebenheiten ab. Mit unserem Kostenrechner erhalten Sie eine erste Orientierung. Nach einer Besichtigung erstellen wir ein individuelles Festpreisangebot.
            </p>
          </div>
        </div>
        <SanierungskostenRechner defaultType="wohnung" compact />
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Radex Live</h2>
            <p className="br-section-subtitle">Schauen Sie uns bei der Arbeit über die Schulter.</p>
          </div>

          <div
            className="br-project-img mb-10"
            style={{
              backgroundImage: `url(${LIVE_IMAGE})`,
              height: '420px',
              borderRadius: '8px',
            }}
          />

          <p className="br-section-subtitle text-center mb-10" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
            Nicht jedes Projekt darf nach der Fertigstellung veröffentlicht werden. Deshalb zeigen wir Ihnen bei Radex Live aktuelle Wärmepumpen-Projekte sowie laufende Sanierungen aus dem gesamten Rhein-Main-Gebiet. Erleben Sie echte Einblicke in unsere tägliche Arbeit und überzeugen Sie sich selbst von unserer Arbeitsweise und der Qualität unserer Projekte.
          </p>

          <div className="br-projects-grid">
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: `url(${LIVE_IMAGE})` }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Wärmepumpe im Bestand</h4>
                <p>Rödermark</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/heizung-sanitaer-radex-live.webp)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Heizungsmodernisierung</h4>
                <p>Offenbach</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/wohnzimmer.webp)' }}>
                <span className="br-project-badge">Abgeschlossen</span>
              </div>
              <div className="br-project-info">
                <h4>Luft-Wasser-Wärmepumpe</h4>
                <p>Darmstadt</p>
              </div>
            </a>
          </div>

          <div className="text-center mt-10" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={RADEX_LIVE_URL} className="br-btn-outline-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Alle Projekte ansehen
            </a>
            <a href="#kontakt" className="br-btn-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Projekt anfragen
            </a>
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="br-section-title">So läuft Ihr Projekt ab</h2>
          </div>
          <div className="br-process-flow">
            {processSteps.map((step, idx) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="br-process-step">
                  <div className="br-step-number">{idx + 1}</div>
                  <h4>{step}</h4>
                </div>
                {idx < processSteps.length - 1 && <ArrowRight className="br-step-arrow" size={24} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-12">
            <h2 className="br-section-title">Häufig gestellte Fragen</h2>
          </div>
          <div className="br-faq-grid">
            {faqsData.map((faq, i) => (
              <div key={faq.q} className="home-faq-item">
                <button
                  type="button"
                  className="home-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left' }}>{faq.q}</span>
                  <ChevronDown
                    style={{
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                    color="#9ca3af"
                    size={18}
                  />
                </button>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: openFaq === i ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease',
                    padding: 0,
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ borderTop: '1px solid #f9fafb', padding: '16px', color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Lassen Sie sich kostenlos beraten</h2>
            <p className="br-section-subtitle mb-8">
              Sie möchten Ihre alte Heizung ersetzen oder prüfen, ob sich eine Wärmepumpe für Ihre Immobilie eignet?
              Senden Sie uns Fotos Ihres Hauses oder Ihrer Heizungsanlage per WhatsApp oder vereinbaren Sie eine persönliche Beratung. Gemeinsam finden wir die passende Lösung für Ihr Projekt.
            </p>
            <SharedCTABlock centered showMicro />
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-12">
            <h2 className="br-section-title">Weitere Informationen</h2>
          </div>
          <div className="br-faq-grid">
            {seoAccordions.map((item, i) => (
              <div key={item.title} className="home-faq-item">
                <button
                  type="button"
                  className="home-faq-btn"
                  onClick={() => setOpenSeo(openSeo === i ? null : i)}
                  aria-expanded={openSeo === i}
                >
                  <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left' }}>{item.title}</span>
                  <ChevronDown
                    style={{
                      transform: openSeo === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                    color="#9ca3af"
                    size={18}
                  />
                </button>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: openSeo === i ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ borderTop: '1px solid #f9fafb', padding: '16px', fontSize: '15px', lineHeight: '1.6' }}>
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
