import { useEffect, useState } from 'react';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  Handshake,
  Flame,
  Zap,
  Hammer,
  Leaf,
  AlertTriangle,
  Clock,
  Briefcase,
  Award,
  Users,
  UserCheck,
  Wrench,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo from '../useSeo';
import { RadexLiveProjectCard } from '../components/landing/SharedLandingParts';
import { RADEX_LIVE_URL } from '../constants/brand';

const HERO_IMAGE = '/img/leistungen-hero.webp';
const LIVE_IMAGE = '/img/leistungen-radex-live.webp';

const serviceCards = [
  {
    to: '/leistungen/generalunternehmer-bauleitung',
    title: 'Alles aus einer Hand',
    desc: 'Ein Ansprechpartner für Planung, Bauleitung und die Koordination aller Gewerke.',
    icon: Handshake,
  },
  {
    to: '/leistungen/heizung-sanitaer',
    title: 'Heizung & Sanitär',
    desc: 'Heizung modernisieren, Wärmepumpe installieren oder Sanitäranlagen fachgerecht erneuern.',
    icon: Flame,
  },
  {
    to: '/leistungen/elektrotechnik',
    title: 'Elektrotechnik',
    desc: 'Elektroinstallation, Altbau-Elektrik modernisieren und Sicherungskästen erneuern.',
    icon: Zap,
  },
  {
    to: '/leistungen/innenausbau-umbau',
    title: 'Innenausbau & Umbau',
    desc: 'Wohnräume modernisieren, Trockenbauarbeiten und fachgerechte Umbauten.',
    icon: Hammer,
  },
  {
    to: '/leistungen/energie-foerderung',
    title: 'Energie & Förderung',
    desc: 'Energie sparen, energetisch sanieren und Fördermöglichkeiten optimal nutzen.',
    icon: Leaf,
  },
  {
    to: '/leistungen/schimmel-asbest',
    title: 'Schimmel & Asbest',
    desc: 'Schimmel, Asbest und Schadstoffe fachgerecht beseitigen.',
    icon: AlertTriangle,
  },
  {
    to: '/leistungen/express-soforthilfe',
    title: 'Express & Soforthilfe',
    desc: 'Schnelle Unterstützung für dringende Bad- und Sanierungsprojekte.',
    icon: Clock,
  },
  {
    to: '/leistungen/gewerbe-objektsanierung',
    title: 'Gewerbe & Objektsanierung',
    desc: 'Büros, Gewerbeflächen und Mietobjekte professionell modernisieren.',
    icon: Briefcase,
  },
];

const whyRadexCards = [
  { title: 'SHK-Meisterbetrieb', desc: 'Heizung, Sanitär und Gebäudetechnik unter Meisterverantwortung von Bernd Knoop.', icon: Award },
  { title: 'Alles aus einer Hand', desc: 'Planung, Koordination und Ausführung aus einer Hand – ohne Schnittstellenprobleme.', icon: Users },
  { title: 'Generalunternehmer', desc: 'Ein Vertragspartner für Ihr gesamtes Sanierungsprojekt mit Festpreisgarantie.', icon: Handshake },
  { title: 'Fester Ansprechpartner', desc: 'Von der ersten Beratung bis zur Übergabe begleitet Sie ein festes Team.', icon: UserCheck },
  { title: 'Koordination aller Gewerke', desc: 'SHK, Elektro, Trockenbau, Innenausbau und weitere Fachbetriebe als Gesamtprojekt.', icon: Wrench },
  { title: 'Regional im gesamten Rhein-Main-Gebiet', desc: 'Über 60 Städte – kurze Wege, schnelle Reaktionszeiten und lokale Erfahrung.', icon: MapPin },
];

function SeoP({ children }) {
  return <p className="text-gray-600">{children}</p>;
}

const seoAccordions = [
  {
    title: 'Generalunternehmer',
    content: (
      <SeoP>
        Ein Generalunternehmer bündelt mehrere Gewerke in einem geordneten Ablauf. Radex übernimmt Bestandsaufnahme, Planung, Angebotsphase, Koordination der Fachbetriebe, Terminsteuerung und Übergabe – ein Ansprechpartner statt vieler einzelner Handwerkertermine.{' '}
        <Link to="/generalunternehmer-rhein-main">Mehr zum Generalunternehmer</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Komplettsanierung',
    content: (
      <SeoP>
        Eine Komplettsanierung umfasst mehrere zentrale Bereiche einer Immobilie gleichzeitig – Bad, Heizung, Sanitär, Elektro, Innenausbau und Böden in einem abgestimmten Projekt. Als Generalunternehmer bündelt Radex alle Gewerke unter einem Dach – ein Vertrag, ein Festpreis, ein Ansprechpartner.{' '}
        <Link to="/komplettsanierung-rhein-main">Komplettsanierung anfragen</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Kernsanierung',
    content: (
      <SeoP>
        Bei einer Kernsanierung wird das Gebäude bis auf die tragende Struktur zurückgebaut. Alle nicht tragenden Wände, Leitungen für Strom, Wasser und Heizung sowie Böden und Oberflächen werden vollständig erneuert. Das Ergebnis kommt einem Neubau gleich – mit dem Vorteil, dass Standort und Charakter erhalten bleiben.{' '}
        <Link to="/kernsanierung-rhein-main">Mehr zur Kernsanierung</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Teilsanierung',
    content: (
      <SeoP>
        Wenn mehrere Gewerke oder technische Schnittstellen beteiligt sind, kann Radex auch eine Teilsanierung oder einen einzelnen Projektabschnitt koordinieren. Entscheidend ist immer, was zum Objekt und zum Ziel passt – etwa Bad, Innenausbau oder Heizungsmodernisierung als abgegrenztes Projekt.{' '}
        <Link to="/teilsanierung-rhein-main">Teilsanierung besprechen</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Bauleitung & Projektsteuerung',
    content: (
      <SeoP>
        Professionelle Koordination, Terminplanung und Qualitätskontrolle sind entscheidend, sobald mehrere Gewerke zusammenkommen. Radex stellt einen festen Bauleiter, der die Fachbetriebe steuert und Ihr zentraler Ansprechpartner während des gesamten Projekts ist.{' '}
        <Link to="/bauleitung-projektsteuerung-rhein-main">Bauleitung & Projektsteuerung</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Heizung & Sanitär',
    content: (
      <SeoP>
        Heizung und Sanitär gehören zu den wichtigsten technischen Grundlagen einer Sanierung. Sie müssen geplant sein, bevor Fliesen, Estrich und Oberflächen fertig sind. Radex ist als SHK-Meisterbetrieb für Sanitär, Heizung und Gebäudetechnik fachlich verantwortlich.{' '}
        <Link to="/leistungen/heizung-sanitaer">Heizung & Sanitär im Überblick</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Heizungsmodernisierung',
    content: (
      <SeoP>
        Eine Heizungsmodernisierung ist mehr als ein neues Heizgerät. Entscheidend ist das Zusammenspiel aus Wärmeerzeuger, Wärmeverteilung, Heizkörpern bzw. Flächenheizung und dem energetischen Zustand des Gebäudes. Radex analysiert die Heizlast, führt einen hydraulischen Abgleich durch und stimmt Vorlauftemperaturen und Heizflächen optimal ab.{' '}
        <Link to="/heizungsmodernisierung-rhein-main">Heizung modernisieren</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Wärmepumpe',
    content: (
      <SeoP>
        Der Umstieg von fossilen Brennstoffen auf eine Wärmepumpe ist einer der wichtigsten Schritte zu einem zukunftssicheren Heizsystem. Radex installiert Luft-Wasser- und Sole-Wasser-Wärmepumpen inkl. hydraulischem Abgleich, Auslegung und Förderabwicklung. Über die BEG sind Zuschüsse von bis zu 70 % möglich.{' '}
        <Link to="/waermepumpe-rhein-main">Wärmepumpe planen</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Sanitärinstallation',
    content: (
      <SeoP>
        Zur Sanitärinstallation gehören Wasserleitungen, Abwasser, Abdichtung, Vorwandinstallation und Warmwasser – fachgerecht nach Norm. Auch in Küche und Gäste-WC erneuern wir Leitungen. Veraltete Stahl- oder Bleileitungen sollten dringend ersetzt werden. Installation normgerecht nach DIN 1988 und Trinkwasserverordnung.{' '}
        <Link to="/sanitaerinstallation-rhein-main">Sanitärinstallation</Link> ·{' '}
        <Link to="/badsanierung-rhein-main">Badsanierung</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Elektrotechnik',
    content: (
      <SeoP>
        Eine moderne Elektroinstallation ist ein zentraler Bestandteil jeder Sanierung. Licht, Steckdosen, Sicherungskasten, Netzwerk und Gebäudetechnik müssen früh geplant werden. Radex koordiniert qualifizierte Elektrofachbetriebe im Rahmen der Sanierung.{' '}
        <Link to="/leistungen/elektrotechnik">Elektrotechnik im Überblick</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Elektroinstallation',
    content: (
      <SeoP>
        Steckdosen, Leitungen, Licht und Gebäudetechnik nach VDE – früh abgestimmt mit Bad, Küche, Heizung und Innenausbau. Elektroarbeiten werden durch qualifizierte Elektrofachbetriebe ausgeführt und von Radex in den Sanierungsablauf eingebunden.{' '}
        <Link to="/elektroinstallation-rhein-main">Elektroinstallation</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Altbau Elektrik erneuern',
    content: (
      <SeoP>
        In älteren Immobilien sind alte Leitungen, veraltete Sicherungen, fehlende Schutzschalter und zu wenige Stromkreise häufig. Wenn Wände und Böden ohnehin geöffnet werden, ist der richtige Zeitpunkt für eine fachliche Prüfung und Erneuerung der Elektrostruktur.{' '}
        <Link to="/altbau-elektrik-erneuern-rhein-main">Altbau-Elektrik erneuern</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Sicherungskasten erneuern',
    content: (
      <SeoP>
        Besonders bei neuer Küche, Wärmepumpe, Wallbox-Vorbereitung oder Badsanierung sollte geprüft werden, ob die vorhandene Unterverteilung noch zu den heutigen Anforderungen passt. FI-Schutz, Stromkreise und Zählerschrank werden auf aktuellen Stand gebracht. Ab ca. €2.500.{' '}
        <Link to="/sicherungskasten-erneuern-rhein-main">Sicherungskasten erneuern</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Innenausbau',
    content: (
      <SeoP>
        Radex koordiniert Innenausbau- und Umbauprojekte: Raumaufteilung, Trockenbau, Böden, Wände, Decken, Türen, Elektro, Heizung und Sanitär aus einer Hand. Immer dann sinnvoll, wenn Grundriss, Nutzung oder Technik nicht mehr zu den heutigen Anforderungen passen.{' '}
        <Link to="/leistungen/innenausbau-umbau">Innenausbau & Umbau</Link> ·{' '}
        <Link to="/innenausbau-umbau-rhein-main">Detailseite</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Trockenbau',
    content: (
      <SeoP>
        Neue Trennwände, abgehängte Decken, Vorwände und Installationsflächen für Leitungen und Technik – fachgerecht erstellt und abgestimmt mit SHK und Elektro, bevor Oberflächen fertiggestellt werden.{' '}
        <Link to="/trockenbau-rhein-main">Trockenbau</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Wand entfernen',
    content: (
      <SeoP>
        Nichttragende Wände entfernen und Räume öffnen – statisch geprüft und fachgerecht umgesetzt. Oft kombiniert mit Grundrissänderung, Elektroanpassung und Bodenarbeiten im Rahmen einer Wohnungs- oder Haussanierung.{' '}
        <Link to="/wand-entfernen-rhein-main">Wand entfernen</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Energetische Sanierung',
    content: (
      <SeoP>
        Energetische Sanierung ist mehr als ein Gerätetausch. Gebäudehülle, Heizung, Warmwasser, Lüftung, Feuchtigkeitsschutz und Innenausbau müssen zusammenpassen. Radex koordiniert Heizungsmodernisierung, Dämmung, Fenster, Lüftung und energetische Maßnahmen als Gesamtsystem.{' '}
        <Link to="/energetische-sanierung-rhein-main">Energetische Sanierung</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Energieeffizienz',
    content: (
      <SeoP>
        Heizkosten senken und den energetischen Standard verbessern – durch Heizungsoptimierung, Dämmung, Fenstertausch, Leitungsdämmung oder Fußbodenheizung in einzelnen Bereichen. Maßnahmen werden immer zum Gebäudezustand und zur Nutzung passend geplant.{' '}
        <Link to="/energieeffizienz-rhein-main">Energieeffizienz verbessern</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Förderungen',
    content: (
      <SeoP>
        Förderprogramme von KfW und BAFA können je nach Maßnahme relevant sein – Förderanträge müssen in der Regel vor Beginn gestellt werden. Radex arbeitet mit zertifizierten Energie-Effizienz-Experten zusammen und berücksichtigt Förderthemen früh im Ablauf. Über die BEG sind Zuschüsse von bis zu 70 % für Wärmepumpen möglich.{' '}
        <Link to="/sanierung-foerderung-rhein-main">Förderung prüfen</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Schimmel',
    content: (
      <SeoP>
        Radex koordiniert Schimmel-, Feuchte- und Schadstoffthemen als Teil professioneller Sanierungsprojekte. Ursachenanalyse, Bautrocknung und dauerhafte Beseitigung – nicht nur die sichtbare Stelle, sondern die Ursache und der gesamte Ablauf werden fachlich eingeordnet.{' '}
        <Link to="/schimmelsanierung-rhein-main">Schimmel entfernen</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Asbest',
    content: (
      <SeoP>
        Fachgerechte Entfernung und Entsorgung von Asbest und Gefahrstoffen nach TRGS 519 – vollständig dokumentiert. Radex verfügt über Sachkunde nach TRGS 519 für Asbestsanierung im Rahmen von Sanierungsprojekten.{' '}
        <Link to="/asbestsanierung-rhein-main">Asbest entfernen</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Schadstoffsanierung',
    content: (
      <SeoP>
        Gefahrstoffe sicher beseitigen und dokumentieren – Schimmel, Asbest und weitere Schadstoffe werden fachlich geprüft, bevor weitergearbeitet wird. Radex ist zertifiziert für Schimmel- und Asbestsanierung mit Sachkunde nach TRGS 519.{' '}
        <Link to="/schadstoffsanierung-rhein-main">Schadstoffsanierung</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Schnellsanierung Rhein-Main',
    content: (
      <SeoP>
        Wohnung oder Haus schnell sanieren – mit klarer Planung, abgestimmten Gewerken und kurzer Bauzeit. Radex koordiniert Schnellsanierungen für Eigentümer im gesamten Rhein-Main-Gebiet.{' '}
        <Link to="/schnellsanierung-rhein-main">Schnellsanierung Rhein-Main</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Bad-Soforthilfe',
    content: (
      <SeoP>
        Schnelle Hilfe bei dringenden Bad- und Sanitärproblemen – Wasserschäden, undichte Leitungen oder akuter Modernisierungsbedarf. Radex reagiert zeitnah und koordiniert die notwendigen Gewerke strukturiert.{' '}
        <Link to="/bad-soforthilfe-rhein-main">Bad-Soforthilfe</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Schnelle Badsanierung',
    content: (
      <SeoP>
        Zeitnahe Badsanierung mit strukturiertem Ablauf – vom SHK-Meisterbetrieb koordiniert, mit fachgerechter Sanitärinstallation, Abdichtung und Oberflächenarbeiten aus einer Hand.{' '}
        <Link to="/schnelle-badsanierung-rhein-main">Schnelle Badsanierung</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Gewerbesanierung',
    content: (
      <SeoP>
        Praxen, Läden und Gewerbeflächen modernisieren – mit minimaler Betriebsunterbrechung. Radex koordiniert Gewerbe- und Objektsanierungen für Büro, Praxis, Ladenfläche und Mieterausbau im Rhein-Main-Gebiet.{' '}
        <Link to="/gewerbesanierung-rhein-main">Gewerbesanierung</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Büroumbau',
    content: (
      <SeoP>
        Büroflächen umbauen und an neue Nutzung anpassen – Trockenbau, Akustik, Licht, Arbeitsplätze, Sanitärbereiche und technische Anschlüsse werden abgestimmt koordiniert. Klare Abläufe für Eigentümer, Vermieter und Nutzer.{' '}
        <a href="/bueroumbau-rhein-main">Büroumbau</a>.
      </SeoP>
    ),
  },
  {
    title: 'Mieterausbau',
    content: (
      <SeoP>
        Ausbau nach Mieterwunsch – termingerecht und sauber. Fläche wird gezielt für den neuen Mieter vorbereitet: Raumaufteilung, Sanitär, Elektro, Böden und Oberflächen mit klarer Übergabe.{' '}
        <a href="/mieterausbau-rhein-main">Mieterausbau</a>.
      </SeoP>
    ),
  },
  {
    title: 'Badsanierung',
    content: (
      <SeoP>
        Komplettbadsanierung und Badmodernisierung vom SHK-Meisterbetrieb – Sanitärinstallation, Abdichtung, Fliesen und Fertigmontage aus einer Planung. Bad, Heizung und Sanitär werden früh abgestimmt.{' '}
        <Link to="/badsanierung-rhein-main">Badsanierung</Link> ·{' '}
        <Link to="/badsanierung/badezimmer-sanieren">Badezimmer sanieren</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Wohnungssanierung',
    content: (
      <SeoP>
        Modernisierung von Eigentumswohnungen und Kapitalanlagen aus einer Hand – Böden, Wände, Bad, Elektro, Heizkörper und Innenausbau aufeinander abgestimmt.{' '}
        <Link to="/sanierung/wohnungssanierung">Wohnungssanierung</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Haussanierung',
    content: (
      <SeoP>
        Ganzheitliche Sanierung von Einfamilienhäusern und Mehrfamilienhäusern – Bad, Heizung, Sanitär, Elektro, Innenausbau und energetische Themen als Gesamtprojekt.{' '}
        <Link to="/sanierung/haussanierung">Haussanierung</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Altbausanierung',
    content: (
      <SeoP>
        Historischen Charme bewahren und moderne Wohnstandards integrieren – denkmalgerecht, fachgerecht und aus einer Hand. Besonders relevant bei Leitungen, Schadstoffen und technischer Modernisierung.{' '}
        <Link to="/sanierung/altbausanierung">Altbausanierung</Link>.
      </SeoP>
    ),
  },
  {
    title: 'Radex Objektmanagement – Leistungsübersicht',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Die Radex Objektmanagement GmbH begleitet private Eigentümer, Unternehmen und Wohnungsbaugesellschaften im gesamten Rhein-Main-Gebiet von der ersten Beratung bis zur fertigen Übergabe. Als zugelassener SHK-Meisterbetrieb und Generalunternehmer koordiniert Radex Sanierungs-, Badsanierungs- und Modernisierungsleistungen aus einer Hand.
        </p>
        <p className="text-gray-600">
          Ob komplette Sanierung, technische Modernisierung oder einzelne Fachleistungen – wählen Sie den passenden Bereich:{' '}
          <Link to="/leistungen/generalunternehmer-bauleitung">Generalunternehmer</Link>,{' '}
          <Link to="/leistungen/heizung-sanitaer">Heizung & Sanitär</Link>,{' '}
          <Link to="/leistungen/elektrotechnik">Elektrotechnik</Link>,{' '}
          <Link to="/leistungen/innenausbau-umbau">Innenausbau</Link>,{' '}
          <Link to="/leistungen/energie-foerderung">Energie & Förderung</Link>,{' '}
          <Link to="/leistungen/schimmel-asbest">Schimmel & Asbest</Link>,{' '}
          <Link to="/leistungen/express-soforthilfe">Express & Soforthilfe</Link> oder{' '}
          <Link to="/leistungen/gewerbe-objektsanierung">Gewerbe & Objektsanierung</Link>.
          {' '}<a href="/kontakt">Kontakt</a> · <a href={RADEX_LIVE_URL}>Radex Live</a>.
        </p>
      </>
    ),
  },
];

function SharedCTABlock({ isHero = false, centered = false, whatsappLabel = 'WhatsApp' }) {
  return (
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
        {whatsappLabel} <MessageSquare size={18} color="#25D366" style={{ marginLeft: '8px' }} />
      </a>
      {!isHero && (
        <a
          href="tel:+496074960620"
          className="btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#fff',
            border: '1px solid #d1d5db',
            color: '#111827',
            padding: '12px 24px',
            borderRadius: '4px',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          <Phone size={18} /> Jetzt anrufen
        </a>
      )}
    </div>
  );
}

function PremiumIconCards({ cards, linked = false }) {
  return (
    <div className="br-nav-landing-grid">
      {cards.map((card) => {
        const Icon = card.icon;
        const content = (
          <>
            <div className="br-decision-icon">
              <Icon size={40} strokeWidth={1.5} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            {linked && <span className="br-btn-orange">Mehr erfahren</span>}
          </>
        );

        if (linked && card.to) {
          return (
            <Link key={card.title} to={card.to} className="br-decision-card">
              {content}
            </Link>
          );
        }

        return (
          <div key={card.title} className="br-decision-card" style={{ cursor: 'default' }}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default function LeistungenHub() {
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Leistungen für Sanierung, Badsanierung & Modernisierung | Radex Objektmanagement',
    description:
      'Entdecken Sie alle Leistungen von Radex Objektmanagement im Rhein-Main-Gebiet. Generalunternehmer, Badsanierung, Heizung & Sanitär, Elektrotechnik, Innenausbau, energetische Sanierung, Schimmel- und Asbestsanierung – alles aus einer Hand.',
    path: '/leistungen',
    image: HERO_IMAGE,
  });

  return (
    <main className="badsanierung-page">
      {/* 1. HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Unsere<br />
              <span>Leistungen</span>
            </h1>
            <p className="br-hero-subtitle">
              Sanierung, Badsanierung und Modernisierung aus einer Hand
            </p>
            <p className="br-hero-text">
              Ob komplette Sanierung, technische Modernisierung oder einzelne Fachleistungen – Radex begleitet private Eigentümer, Unternehmen und Wohnungsbaugesellschaften im gesamten Rhein-Main-Gebiet von der ersten Beratung bis zur fertigen Übergabe. Wählen Sie einfach den Leistungsbereich aus, der zu Ihrem Projekt passt.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      {/* 2. LEISTUNGEN */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Leistungen auf einen Blick</h2>
            <p className="br-section-subtitle">
              Von der ersten Planung bis zur fertigen Übergabe – wählen Sie einfach den Leistungsbereich aus, der zu Ihrem Projekt passt.
            </p>
          </div>
          <PremiumIconCards cards={serviceCards} linked />
        </div>
      </section>

      {/* 3. WARUM RADEX */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
          </div>
          <PremiumIconCards cards={whyRadexCards} />
        </div>
      </section>

      {/* 4. RADEX LIVE */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Radex Live</h2>
            <p className="br-section-subtitle">Aktuelle Baustellen, Projekte und echte Einblicke</p>
          </div>

          <div
            className="br-project-img mb-10"
            style={{
              backgroundImage: `url(${LIVE_IMAGE})`,
              height: '420px',
              borderRadius: '8px',
            }}
          />

          <p className="br-section-subtitle text-center mb-10" style={{ maxWidth: '820px', margin: '0 auto 40px' }}>
            Schauen Sie uns bei der Arbeit über die Schulter. Nicht jedes Projekt darf nach der Fertigstellung veröffentlicht werden. Deshalb zeigen wir Ihnen bei Radex Live echte Einblicke in aktuelle Baustellen, laufende Sanierungen und ausgewählte abgeschlossene Projekte aus dem Rhein-Main-Gebiet. So erhalten Sie einen authentischen Eindruck davon, wie unsere Teams arbeiten, Projekte koordinieren und Sanierungen Schritt für Schritt umsetzen.
          </p>

          <div className="br-projects-grid">
            <RadexLiveProjectCard
              image="/img/renov1.webp"
              badge="Live"
              badgeClassName="live"
              title="Komplettsanierung Wohnung"
              subtitle="Frankfurt am Main"
            />
            <RadexLiveProjectCard
              image="/img/Komplettbadsanierung.webp"
              badge="Abgeschlossen"
              title="Badsanierung Komplettbad"
              subtitle="Bad Homburg"
            />
            <RadexLiveProjectCard
              image={LIVE_IMAGE}
              badge="Live"
              badgeClassName="live"
              title="Haussanierung Innenausbau"
              subtitle="Oberursel"
            />
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

      {/* 5. CTA */}
      <section id="kontakt" className="br-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Nicht sicher, welche Leistung zu Ihrem Projekt passt?</h2>
            <p className="br-section-subtitle mb-8">
              Jedes Sanierungsprojekt ist anders. Senden Sie uns einfach Fotos Ihres Projekts per WhatsApp oder vereinbaren Sie eine kostenlose Beratung. Gemeinsam finden wir die passende Lösung für Ihr Vorhaben.
            </p>
            <SharedCTABlock centered whatsappLabel="Fotos per WhatsApp senden" />
            <p className="br-hero-micro mt-6">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
      </section>

      {/* 6. SEO ACCORDIONS */}
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

          <div className="br-trust-footer mt-12">
            <div className="br-trust-item">
              <Award size={32} color="#aaa" />
              <div>
                <strong>SHK-Meister</strong>
                <span>Zugelassener Fachbetrieb</span>
              </div>
            </div>
            <div className="br-trust-item">
              <MapPin size={32} color="#aaa" />
              <div>
                <strong>60+</strong>
                <span>Betreute Städte</span>
              </div>
            </div>
            <div className="br-trust-item">
              <ShieldCheck size={32} color="#aaa" />
              <div>
                <strong>100%</strong>
                <span>Festpreisgarantie</span>
              </div>
            </div>
            <div className="br-trust-item">
              <Users size={32} color="#aaa" />
              <div>
                <strong>500+</strong>
                <span>Abgeschlossene Projekte</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
