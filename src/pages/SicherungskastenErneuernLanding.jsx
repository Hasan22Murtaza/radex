import { useEffect, useState } from 'react';
import { RADEX_LIVE_URL } from '../constants/brand';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  Hammer,
  Zap,
  FileText,
  Handshake,
  Users,
  Award,
  MapPin,
  Shield,
  Plug,
  Flame,
} from 'lucide-react';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';

const HERO_IMAGE = '/img/sicherungskasten-hero.webp';
const LIVE_IMAGE = '/img/sicherungskasten-radex-live.webp';

const whenCards = [
  { title: 'Alte Unterverteilung', desc: 'Veraltete Sicherungen und fehlende Schutztechnik.', icon: AlertTriangle },
  { title: 'Mehr Sicherheit', desc: 'FI-Schutzschalter und moderne Leitungsschutzschalter.', icon: ShieldCheck },
  { title: 'Sanierung', desc: 'Ideal im Rahmen einer Haus-, Wohnungs- oder Badsanierung.', icon: Hammer },
  { title: 'Neue Verbraucher', desc: 'Vorbereitung für Wärmepumpe, Wallbox oder moderne Küchen.', icon: Zap },
];

const whyRadexCards = [
  { title: 'Moderne Elektroplanung', desc: 'Sicherungskasten und Elektroinstallation früh in die Sanierungsplanung einbinden.', icon: FileText },
  { title: 'Alles aus einer Hand', desc: 'Ein fester Ansprechpartner für Planung, Koordination und Übergabe.', icon: Handshake },
  { title: 'Koordination aller Gewerke', desc: 'Elektro, SHK, Trockenbau, Bad, Küche und Innenausbau abgestimmt.', icon: Users },
  { title: 'Fachgerechte Ausführung', desc: 'Elektroarbeiten durch qualifizierte Fachpartner nach VDE-Norm.', icon: Award },
  { title: 'Festpreisgarantie', desc: 'Transparentes Angebot nach Besichtigung – ohne versteckte Kosten.', icon: ShieldCheck },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Über 60 Städte – Erfahrung mit Bestandsimmobilien und Altbauten.', icon: MapPin },
];

const benefitCards = [
  { title: 'Mehr Sicherheit', desc: 'Moderne FI-Schutzschalter und zeitgemäße Absicherung für Ihre Immobilie.', icon: Shield },
  { title: 'Erweiterbar für zukünftige Technik', desc: 'Reserve und Struktur für Netzwerk, Smart Home und neue Verbraucher.', icon: Plug },
  { title: 'Schutz von Personen und Geräten', desc: 'Zuverlässige Stromkreise und Schutzvorrichtungen im Alltag.', icon: ShieldCheck },
  { title: 'Vorbereitung für Wärmepumpe und Wallbox', desc: 'Elektrische Infrastruktur für moderne Heiz- und Ladetechnik planen.', icon: Flame },
];

const processSteps = [
  'Kostenlose Beratung',
  'Besichtigung',
  'Planung',
  'Festpreisangebot',
  'Fachgerechte Ausführung',
  'Fertigstellung',
];

const faqsData = [
  {
    q: 'Wann sollte ein Sicherungskasten erneuert werden?',
    a: 'Ein Sicherungskasten sollte geprüft werden, wenn er veraltet wirkt, nicht mehr zur Nutzung passt, häufig Sicherungen auslösen, neue Verbraucher geplant sind oder eine größere Sanierung ansteht. Ob eine Erneuerung notwendig ist, entscheidet ein qualifizierter Elektrofachbetrieb nach Prüfung des Bestands.',
  },
  {
    q: 'Was kostet eine neue Unterverteilung?',
    a: 'Die Kosten hängen vom Umfang, Zustand, Anzahl der Stromkreise, Leitungsarbeiten, Objektart und geplanten Verbrauchern ab. Nach fachlicher Prüfung und Besichtigung kann ein nachvollziehbares Angebot erstellt werden.',
  },
  {
    q: 'Ist ein FI-Schutzschalter Pflicht?',
    a: 'In vielen Bereichen und bei Neuanlagen sind FI-Schutzschalter vorgeschrieben bzw. dringend empfohlen. Ein Elektrofachbetrieb prüft, welche Schutzmaßnahmen für Ihre Immobilie erforderlich oder sinnvoll sind.',
  },
  {
    q: 'Kann der Sicherungskasten im Rahmen einer Sanierung erneuert werden?',
    a: 'Ja. Gerade bei Wohnungs-, Haus- oder Komplettsanierungen ist der richtige Zeitpunkt, die elektrische Verteilung zu prüfen und zu modernisieren – bevor Wände geschlossen und Oberflächen fertiggestellt werden.',
  },
  {
    q: 'Wie lange dauert der Austausch?',
    a: 'Eine einfache Anpassung kann schneller umgesetzt werden als eine umfassende Erneuerung mit Leitungsarbeiten. Der genaue Zeitrahmen ergibt sich nach Prüfung des Bestands und Abstimmung mit den weiteren Gewerken.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Ja. Nach Besichtigung und Abstimmung des Umfangs erstellen wir ein transparentes Festpreisangebot für Ihr Projekt.',
  },
];

const seoAccordions = [
  {
    title: 'Der Sicherungskasten als zentrales Element der Elektroinstallation',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Der Sicherungskasten ist das zentrale Element der Elektroinstallation. Hier laufen Stromkreise zusammen, hier werden elektrische Bereiche abgesichert, hier entscheidet sich, ob eine Immobilie für heutige und künftige Anforderungen gut vorbereitet ist. Bei vielen älteren Häusern, Wohnungen, Altbauten, Mehrfamilienhäusern oder Gewerbeflächen passt der vorhandene Sicherungskasten nicht mehr zur modernen Nutzung. Neue Küche, Badsanierung, Homeoffice, Netzwerk, Wärmepumpe, Wallbox-Vorbereitung, zusätzliche Steckdosen, moderne Beleuchtung und technische Erweiterungen stellen deutlich höhere Anforderungen als früher.
        </p>
        <p className="mb-4 text-gray-600">
          Wer eine Immobilie saniert, sollte den Sicherungskasten deshalb früh prüfen lassen. Eine veraltete Unterverteilung kann die gesamte Sanierung beeinflussen. Wenn neue Stromkreise, moderne Geräteanschlüsse, Badtechnik, Küchenanschlüsse, Heiztechnik, Wärmepumpe oder Netzwerk geplant werden, muss die elektrische Verteilung dazu passen.
        </p>
        <p className="text-gray-600">
          Die Radex Objektmanagement GmbH aus Rödermark begleitet Sanierungen im Rhein-Main-Gebiet mit gewerkeübergreifender Koordination. Elektroarbeiten werden durch qualifizierte Elektrofachbetriebe ausgeführt und von Radex in den Sanierungsablauf eingebunden. Mehr zur{' '}
          <a href="/leistungen/elektrotechnik">Elektrotechnik</a> und{' '}
          <a href="/elektroinstallation-rhein-main">Elektroinstallation</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Wann sollte ein Sicherungskasten erneuert werden?',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Ein Sicherungskasten sollte geprüft werden, wenn er veraltet wirkt, nicht mehr zur Nutzung passt, häufig Sicherungen auslösen, neue Verbraucher geplant sind oder eine größere Sanierung ansteht. Ob eine Erneuerung notwendig ist, entscheidet ein qualifizierter Elektrofachbetrieb nach Prüfung des Bestands. Radex koordiniert diese Prüfung im Rahmen der Sanierung und bindet sie in den Ablauf ein.
        </p>
        <p className="mb-4 text-gray-600">Typische Situationen, in denen eine Prüfung sinnvoll ist:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
          <li>ältere Wohnung oder älteres Haus wird saniert</li>
          <li><a href="/altbau-elektrik-erneuern-rhein-main">Altbau-Elektrik</a> soll erneuert werden</li>
          <li>neue Küche mit leistungsstarken Geräten wird geplant</li>
          <li>Bad wird modernisiert</li>
          <li>zusätzliche Steckdosen oder Stromkreise werden benötigt</li>
          <li>Homeoffice und Netzwerk sollen vorbereitet werden</li>
          <li><a href="/heizung-sanitaer-rhein-main">Wärmepumpe</a> oder Heizungsmodernisierung ist geplant</li>
          <li>Wallbox-Vorbereitung wird gewünscht</li>
          <li>Sicherungen lösen häufig aus</li>
          <li>Unterverteilung wirkt unübersichtlich oder sehr alt</li>
          <li>Komplettsanierung oder Kernsanierung steht an</li>
        </ul>
        <p className="text-gray-600">
          Bei älteren Immobilien ist außerdem wichtig, die vorhandene Elektrostruktur als Ganzes zu betrachten. Ein Sicherungskasten kann nicht sinnvoll bewertet werden, ohne Stromkreise, Leitungen, Nutzung und geplante Erweiterungen zu berücksichtigen.
        </p>
      </>
    ),
  },
  {
    title: 'Sicherungskasten bei Altbausanierung prüfen',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Bei Altbausanierungen ist der Sicherungskasten besonders wichtig. Viele ältere Häuser und Wohnungen haben über Jahrzehnte gewachsene Elektroinstallationen. Einzelne Räume wurden modernisiert, Steckdosen ergänzt, Küchenanschlüsse verändert oder Bäder umgebaut, ohne dass die gesamte Elektrostruktur neu geplant wurde.
        </p>
        <p className="mb-4 text-gray-600">
          Besonders bei Komplettsanierung, Kernsanierung, Wohnungssanierung oder Haussanierung ist der richtige Zeitpunkt, Sicherungskasten, Stromkreise und Leitungen zu bewerten. Radex bindet Elektrofachpartner früh ein, damit diese Fragen vor der Ausführung geklärt werden.
        </p>
        <p className="text-gray-600">
          <a href="/altbausanierung-rhein-main">Altbausanierung</a> ·{' '}
          <a href="/altbau-elektrik-erneuern-rhein-main">Altbau Elektrik erneuern</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Sicherungskasten bei Hauskauf oder Wohnungskauf prüfen',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Nach dem Kauf einer Immobilie stellen viele Eigentümer fest, dass die Elektroinstallation nicht vollständig zum geplanten Alltag passt. Bei Besichtigungen stehen oft Lage, Grundriss, Zustand, Bad, Küche, Fenster, Heizung und Gesamteindruck im Vordergrund. Der Sicherungskasten wird zwar gesehen, aber selten fachlich bewertet. Spätestens bei der Sanierungsplanung wird jedoch deutlich, ob die Unterverteilung ausreichend ist.
        </p>
        <p className="text-gray-600">
          Gerade vor dem Einzug ist der richtige Zeitpunkt, den Sicherungskasten prüfen zu lassen. Räume sind leer, Wände können leichter bearbeitet werden, Küchenplanung und Badmodernisierung stehen noch bevor, und Fachpartner können besser koordiniert werden. Radex koordiniert die Prüfung des Sicherungskastens als Teil der Sanierung.
        </p>
      </>
    ),
  },
  {
    title: 'Sicherungskasten bei Wohnungssanierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Bei Wohnungssanierungen ist der Sicherungskasten ein wichtiger Prüfpunkt. Viele ältere Wohnungen haben Unterverteilungen, die für heutige Anforderungen knapp bemessen sind. Moderne Küchen, Bäder, Waschmaschine, Trockner, Homeoffice, Netzwerk, Beleuchtung und zusätzliche Steckdosen können neue Stromkreise oder Anpassungen erforderlich machen.
        </p>
        <p className="text-gray-600">
          In Mehrfamilienhäusern müssen bei Elektroarbeiten zusätzliche Rahmenbedingungen berücksichtigt werden. Radex koordiniert den Elektrofachpartner im Rahmen der Wohnungssanierung.{' '}
          <a href="/wohnungssanierung-rhein-main">Wohnungssanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Sicherungskasten bei Haussanierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Bei einer Haussanierung ist die Prüfung des Sicherungskastens besonders wichtig. Ein Haus hat viele Nutzungsbereiche: Küche, Bad, Gäste-WC, Wohnräume, Schlafzimmer, Kinderzimmer, Homeoffice, Keller, Technikraum, Dachgeschoss, Außenbereich, Garage, Garten und manchmal eine Einliegerwohnung oder Gewerbenutzung. Die elektrische Verteilung muss diese Nutzung sicher und sinnvoll abbilden.
        </p>
        <p className="text-gray-600">
          Radex koordiniert die Elektrofachbetriebe im Rahmen der Haussanierung. Dadurch kann die Prüfung des Sicherungskastens mit Innenausbau, Trockenbau, Böden, Wänden, Bad, Küche, Heizung, Sanitär und energetischen Maßnahmen verbunden werden.{' '}
          <a href="/haussanierung-rhein-main">Haussanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Sicherungskasten bei Badsanierung',
    content: (
      <p className="text-gray-600">
        Eine Badsanierung kann eine Prüfung des Sicherungskastens erforderlich machen. Moderne Bäder brauchen mehr Elektroplanung als frühere Bäder. Beleuchtung, Spiegelanschluss, Steckdosen, Lüfter, eventuell Dusch-WC oder Handtuchwärmer müssen sicher und fachgerecht eingebunden werden. Radex koordiniert Elektrofachpartner mit SHK, Abdichtung, Trockenbau, Fliesen und Innenausbau.
      </p>
    ),
  },
  {
    title: 'Sicherungskasten bei Küchenmodernisierung',
    content: (
      <p className="text-gray-600">
        Die Küche ist einer der wichtigsten Gründe, einen Sicherungskasten prüfen zu lassen. Moderne Küchen haben deutlich höhere und differenziertere Anforderungen als frühere Küchen. Kochfeld, Backofen, Spülmaschine, Kühlschrank, Dunstabzug und weitere Geräte brauchen passende Anschlüsse und Stromkreise. Deshalb sollte vor der Küchenmodernisierung geprüft werden, ob Sicherungskasten und Elektroinstallation zur geplanten Küche passen.
      </p>
    ),
  },
  {
    title: 'Sicherungskasten bei Wärmepumpe und Heizungsmodernisierung',
    content: (
      <p className="text-gray-600">
        Eine Wärmepumpe oder moderne Heiztechnik kann zusätzliche Anforderungen an die Elektroinstallation stellen. Stromversorgung, Steuerung, Regeltechnik, Außeneinheit, Inneneinheit und Technikraum müssen fachgerecht geprüft werden. Radex ist im Bereich Heizung, Sanitär und Gebäudetechnik SHK-meistergeführt und bindet qualifizierte Elektrofachpartner ein.{' '}
        <a href="/heizung-sanitaer-rhein-main">Wärmepumpe & Heizung</a>.
      </p>
    ),
  },
  {
    title: 'Sicherungskasten und Wallbox-Vorbereitung',
    content: (
      <p className="text-gray-600">
        Viele Eigentümer möchten ihre Immobilie langfristig auf Elektromobilität vorbereiten. Eine Wallbox-Vorbereitung kann deshalb bei Haussanierung, Altbausanierung oder Elektroerneuerung sinnvoll sein. Ob und wie eine Wallbox möglich ist, muss ein Elektrofachbetrieb fachgerecht prüfen. Dabei spielen Anschlussleistung, Sicherungskasten, Leitungswege, Garage, Stellplatz und mögliche Laststeuerung eine Rolle.
      </p>
    ),
  },
  {
    title: 'Sicherungskasten bei Gewerbe, Büro, Praxis und Mieterausbau',
    content: (
      <p className="text-gray-600">
        In Gewerbeflächen, Büros, Praxen, Ladenflächen und Mieterausbauten ist der Sicherungskasten oft besonders wichtig. Arbeitsplätze, Beleuchtung, Datentechnik, Geräte, Teeküche, Sanitärbereiche und Betriebsabläufe stellen andere Anforderungen als private Wohnräume. Wenn eine Gewerbefläche saniert oder für einen neuen Nutzer vorbereitet wird, sollte die elektrische Verteilung früh geprüft werden.
      </p>
    ),
  },
  {
    title: 'Sicherungskasten bei Komplettsanierung und Kernsanierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Bei Komplettsanierung und Kernsanierung ist der Sicherungskasten ein zentraler Bestandteil der technischen Planung. Wenn eine Immobilie umfassend modernisiert oder tiefgreifend zurückgebaut wird, sollte die Elektrostruktur grundsätzlich geprüft werden. Leitungen, Stromkreise, Steckdosen, Licht, Küche, Bad, Netzwerk, Heiztechnik, Außenbereiche und Sicherungskasten müssen zusammenpassen.
        </p>
        <p className="text-gray-600">
          Radex koordiniert Sicherungskasten, Elektrofachpartner und weitere Gewerke als{' '}
          <a href="/generalunternehmer-rhein-main">Generalunternehmer</a>, damit die technische Grundlage nicht erst nach dem Ausbau geklärt wird.
        </p>
      </>
    ),
  },
  {
    title: 'Ablauf: Sicherungskasten erneuern mit Radex',
    content: (
      <>
        <p className="mb-4 text-gray-600">Radex koordiniert die Prüfung und Erneuerung des Sicherungskastens im Rahmen einer Sanierung in klaren Schritten. Die Elektroarbeiten selbst werden durch qualifizierte Elektrofachbetriebe ausgeführt.</p>
        <ul className="space-y-3 text-gray-600">
          <li><strong>Erstes Gespräch:</strong> Klärung, warum der Sicherungskasten geprüft werden soll.</li>
          <li><strong>Bestandsaufnahme:</strong> Fachliche Prüfung durch Elektrofachpartner – Unterverteilung, Stromkreise, Leitungen und geplante Erweiterungen.</li>
          <li><strong>Umfang festlegen:</strong> Bewertung, ob Anpassung, Erweiterung oder Erneuerung sinnvoll ist.</li>
          <li><strong>Schnittstellen planen:</strong> Abstimmung mit SHK, Trockenbau, Fliesen, Innenausbau, Küche und Böden.</li>
          <li><strong>Ausführung koordinieren:</strong> Arbeiten in der passenden Reihenfolge, bevor Wände geschlossen werden.</li>
          <li><strong>Übergabe:</strong> Fachgerechte, praktisch nutzbare elektrische Infrastruktur.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Sicherungskasten erneuern im Rhein-Main-Gebiet',
    content: (
      <p className="text-gray-600">
        Radex sitzt in Rödermark und begleitet Sanierungen mit Elektrokoordination im Rhein-Main-Gebiet. Viele Immobilien in der Region haben gute Substanz, attraktive Lagen und hohes Modernisierungspotenzial. Gleichzeitig entsprechen ältere Sicherungskästen und Elektroinstallationen nicht immer dem heutigen Bedarf. Radex koordiniert die passenden Elektrofachpartner objektbezogen und bindet die Arbeiten in die Sanierung ein.
      </p>
    ),
  },
  {
    title: 'Warum Radex für Sicherungskasten und Elektrokoordination?',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Frühe Elektrokoordination:</strong> Der Sicherungskasten wird früh in den Sanierungsablauf eingebunden.</li>
        <li><strong>Qualifizierte Fachpartner:</strong> Elektroarbeiten werden durch Elektrofachbetriebe umgesetzt.</li>
        <li><strong>Ein Ansprechpartner:</strong> Kunden müssen nicht jedes Gewerk einzeln abstimmen.</li>
        <li><strong>SHK-Meisterkompetenz:</strong> Heizung, Sanitär und Gebäudetechnik unter Meisterverantwortung.</li>
        <li><strong>Schnittstellenkompetenz:</strong> Bad, Küche, Wärmepumpe, Innenausbau, Netzwerk und Sicherungskasten im Gesamtprojekt.</li>
        <li><strong>Regionale Nähe:</strong> Radex sitzt in Rödermark und arbeitet im Rhein-Main-Gebiet.</li>
      </ul>
    ),
  },
  {
    title: 'Verwandte Leistungen',
    content: (
      <ul className="space-y-2 text-gray-600">
        <li><a href="/leistungen/elektrotechnik">Elektrotechnik</a></li>
        <li><a href="/elektroinstallation-rhein-main">Elektroinstallation</a></li>
        <li><a href="/altbau-elektrik-erneuern-rhein-main">Altbau Elektrik erneuern</a></li>
        <li><a href="/heizung-sanitaer-rhein-main">Wärmepumpe & Heizung</a></li>
        <li><a href="/generalunternehmer-rhein-main">Generalunternehmer</a></li>
        <li><a href="/wohnungssanierung-rhein-main">Wohnungssanierung</a></li>
        <li><a href="/haussanierung-rhein-main">Haussanierung</a></li>
        <li><a href="/altbausanierung-rhein-main">Altbausanierung</a></li>
        <li><a href={RADEX_LIVE_URL}>Radex Live</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
    ),
  },
  {
    title: 'Führt Radex Arbeiten am Sicherungskasten selbst aus?',
    content: (
      <p className="text-gray-600">
        Arbeiten am Sicherungskasten werden durch qualifizierte Elektrofachbetriebe ausgeführt. Radex koordiniert diese Fachpartner im Sanierungsablauf und stimmt Elektro mit Heizung, Sanitär, Innenausbau, Bad, Küche und weiteren Gewerken ab.
      </p>
    ),
  },
  {
    title: 'Muss der Sicherungskasten bei einer neuen Küche erneuert werden?',
    content: (
      <p className="text-gray-600">
        Nicht immer. Ein Elektrofachbetrieb muss prüfen, ob die vorhandene Unterverteilung und die Stromkreise zur geplanten Küche passen. Moderne Küchen benötigen häufig mehrere leistungsfähige Anschlüsse.
      </p>
    ),
  },
  {
    title: 'Ist der Sicherungskasten bei einer Wärmepumpe wichtig?',
    content: (
      <p className="text-gray-600">
        Ja. Eine Wärmepumpe stellt zusätzliche elektrische Anforderungen. Stromversorgung, Absicherung, Leitungsführung und technische Voraussetzungen müssen durch Elektrofachbetriebe geprüft werden.
      </p>
    ),
  },
  {
    title: 'Wann sollte der Sicherungskasten in der Sanierung geprüft werden?',
    content: (
      <p className="text-gray-600">
        So früh wie möglich, bevor Wände geschlossen, Fliesen gesetzt, Böden verlegt oder Küchen eingebaut werden. Nachträgliche Anpassungen sind deutlich aufwendiger.
      </p>
    ),
  },
  {
    title: 'Ist Radex ein Elektro-Meisterbetrieb?',
    content: (
      <p className="text-gray-600">
        Radex koordiniert Elektroarbeiten mit qualifizierten Elektrofachbetrieben. Radex selbst ist SHK-meistergeführt für Heizung, Sanitär und Gebäudetechnik.
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

export default function SicherungskastenErneuernLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Sicherungskasten erneuern im Rhein-Main-Gebiet | Radex',
    description:
      'Sicherungskasten erneuern vom Fachbetrieb. Moderne Unterverteilungen, FI-Schutzschalter und Zählerschränke für mehr Sicherheit im gesamten Rhein-Main-Gebiet.',
    path: '/sicherungskasten-erneuern-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Sicherungskasten erneuern im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">
              Mehr Sicherheit für Ihre Immobilie – mit einer modernen Elektroverteilung.
            </p>
            <p className="br-hero-text">
              Ein moderner Sicherungskasten schützt Ihre Immobilie und bildet die Grundlage einer sicheren Elektroinstallation. Gerade in älteren Häusern und Wohnungen entsprechen viele Unterverteilungen nicht mehr den heutigen Anforderungen. Radex koordiniert die Erneuerung Ihres Sicherungskastens im Rahmen einer Modernisierung oder kompletten Sanierung – professionell, sicher und abgestimmt mit allen weiteren Gewerken.
            </p>
            <SharedCTABlock isHero showMicro />
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Wann sollte ein Sicherungskasten erneuert werden?</h2>
          </div>
          <PremiumIconCards cards={whenCards} />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex wählen</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Vorteile eines modernen Sicherungskastens</h2>
          </div>
          <PremiumIconCards cards={benefitCards} />
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Kosten einer Erneuerung</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Die Kosten hängen von der vorhandenen Elektroinstallation, der Anzahl der Stromkreise und dem Umfang der Modernisierung ab. Nach einer Besichtigung erhalten Sie ein transparentes Festpreisangebot.
            </p>
          </div>
        </div>
        <SanierungskostenRechner defaultType="wohnung" compact />
      </section>

      <section className="br-section br-bg-light">
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
            Nicht jedes Projekt darf nach der Fertigstellung veröffentlicht werden. Deshalb zeigen wir Ihnen bei Radex Live echte Einblicke in laufende Elektroprojekte und abgeschlossene Sanierungen aus dem gesamten Rhein-Main-Gebiet. Erleben Sie, wie moderne Elektroinstallationen professionell geplant und umgesetzt werden.
          </p>

          <div className="br-projects-grid">
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: `url(${LIVE_IMAGE})` }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Unterverteilung erneuern</h4>
                <p>Frankfurt am Main</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/wohnzimmer.webp)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Elektro bei Haussanierung</h4>
                <p>Offenbach</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/boden.webp)' }}>
                <span className="br-project-badge">Abgeschlossen</span>
              </div>
              <div className="br-project-info">
                <h4>Altbau-Elektrik modernisiert</h4>
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

      <section className="br-section">
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

      <section className="br-section br-bg-light">
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

      <section id="kontakt" className="br-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Lassen Sie sich kostenlos beraten</h2>
            <p className="br-section-subtitle mb-8">
              Sie möchten Ihren Sicherungskasten modernisieren oder Ihre Elektroinstallation auf den aktuellen Stand bringen?
              Senden Sie uns Fotos Ihrer bestehenden Unterverteilung per WhatsApp oder vereinbaren Sie eine persönliche Beratung. Gemeinsam finden wir die passende Lösung für Ihre Immobilie.
            </p>
            <SharedCTABlock centered showMicro />
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
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
