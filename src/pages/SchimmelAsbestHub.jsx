import { useEffect, useState } from 'react';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  AlertTriangle,
  Shield,
  ShieldCheck,
  Handshake,
  Users,
  UserCheck,
  Award,
  MapPin,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo from '../useSeo';

const HERO_IMAGE = '/img/schimmel-asbest-hero.webp';
const LIVE_IMAGE = '/img/schimmel-asbest-radex-live.webp';

const serviceCards = [
  {
    to: '/schimmelsanierung-rhein-main',
    title: 'Schimmelsanierung',
    desc: 'Feuchtigkeit erkennen, Ursachen beseitigen und Schimmel fachgerecht sanieren.',
    icon: AlertTriangle,
  },
  {
    to: '/asbestsanierung-rhein-main',
    title: 'Asbestsanierung',
    desc: 'Asbest fachgerecht erkennen, Sanierungsmaßnahmen koordinieren und sicher durchführen lassen.',
    icon: Shield,
  },
];

const whyRadexCards = [
  { title: 'Zertifiziert für Schimmel & Asbest', desc: 'Schimmelsanierung und Sachkunde nach TRGS 519 für Asbest im Sanierungsprojekt.', icon: ShieldCheck },
  { title: 'Alles aus einer Hand', desc: 'Planung, Koordination und Ausführung mit einem festen Ansprechpartner.', icon: Handshake },
  { title: 'Koordination aller Gewerke', desc: 'Prüfung, Rückbau, Trocknung, SHK und Wiederaufbau in der richtigen Reihenfolge.', icon: Users },
  { title: 'Fester Ansprechpartner', desc: 'Von der ersten Einschätzung bis zur dokumentierten Übergabe.', icon: UserCheck },
  { title: 'Festpreisgarantie', desc: 'Transparente Angebote ohne versteckte Kosten nach Besichtigung vor Ort.', icon: Award },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Über 60 Städte – Erfahrung mit Bestandsimmobilien und Altbauten.', icon: MapPin },
];

const seoAccordions = [
  {
    title: 'Schimmel ist immer ein Ursache-Folge-Thema',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Schimmel ist nie nur ein optischer Mangel. Sichtbare Flecken, Geruch oder feuchte Stellen zeigen fast immer ein Feuchtigkeitsproblem an, das bauphysikalisch oder technisch eingeordnet werden muss.
        </p>
        <p className="text-gray-600">
          Radex betrachtet deshalb nicht nur die Oberfläche, sondern den gesamten Zusammenhang aus Feuchtigkeit, Nutzung, Bauweise und Technik. Mehr zur{' '}
          <a href="/schimmelsanierung-rhein-main">Schimmelsanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Schimmel im Bad, Keller und an Außenwänden',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Besonders häufig tritt Schimmel in Bädern, Kellern, Schlafzimmern und an Außenwänden auf. Dort treffen Feuchtigkeit, kalte Flächen und ungünstige Luftführung oft zusammen.
        </p>
        <p className="text-gray-600">
          Gerade nach einem Wasserschaden oder bei älteren Bädern muss deshalb geprüft werden, wie tief der Schaden reicht und welche Bauteile betroffen sind.{' '}
          <a href="/badsanierung-rhein-main">Badsanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Schadstoffe im Bestand sachlich prüfen',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Bei älteren Gebäuden können beim Rückbau zusätzlich Schadstoffe sichtbar werden. Dazu gehören unter anderem Asbest, alte Kleber, PAK-haltige Materialien, Mineralfasern oder belastete Anstriche.
        </p>
        <p className="text-gray-600">
          Radex verfügt über TRGS-519-Sachkunde und kann diese Themen in die Sanierungsplanung integrieren.{' '}
          <a href="/asbestsanierung-rhein-main">Asbestsanierung</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Schimmel- und Schadstoffsanierung zusammen denken',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Wenn ein Bereich geöffnet wird, sollte nicht blind weitergearbeitet werden. Erst prüfen, dann rückbauen, dann trocknen und erst danach wiederaufbauen. Diese Reihenfolge schützt vor Doppelarbeit und Folgeschäden.
        </p>
        <p className="text-gray-600">
          Radex koordiniert dabei Schimmelbeseitigung, Trocknung, Abdichtung, SHK-Leistungen, Wiederaufbau und die Schnittstellen zu weiteren Gewerken – ideal als{' '}
          <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link>.
        </p>
      </>
    ),
  },
  {
    title: 'Regionale Erreichbarkeit und Erfahrung',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Radex arbeitet im gesamten Rhein-Main-Gebiet und ist bei Schimmel- und Schadstoffthemen häufig bei Bestandsimmobilien, Altbauten, Wohnungen und Gewerbeflächen im Einsatz.
        </p>
        <p className="text-gray-600">
          Für eine erste Einschätzung genügt oft ein Anruf unter 06074 960620 oder eine Anfrage über den{' '}
          <a href="/kontakt">Kontaktbereich</a>. Verfolgen Sie Projekte bei{' '}
          <a href="/radex-live">Radex Live</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Für wen Schimmel- und Schadstoffsanierung relevant ist',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Eigentümer und Käufer:</strong> Vor oder nach dem Kauf einer älteren Immobilie können Feuchtigkeit, Schimmel und Verdachtsmaterialien rechtzeitig eingeordnet werden.</li>
        <li><strong>Vermieter und Hausverwaltungen:</strong> Bei Mietverhältnissen, Leerstand oder Schadensfällen braucht es eine saubere Dokumentation und klare Kommunikation.</li>
        <li><strong>Eigentümer mit Keller- oder Badproblemen:</strong> Feuchte Keller, undichte Bäder, Wärmebrücken und Lüftungsprobleme sind häufige Auslöser für Schimmel.</li>
        <li><strong>Sanierer im Altbau:</strong> Bei älteren Baustoffen können Schimmel und Schadstoffe gemeinsam auftreten und müssen zusammen betrachtet werden.</li>
        <li><strong>Gewerbliche Nutzer und Objektverantwortliche:</strong> Auch in Büro-, Praxis- oder Ladenflächen können Rückbau und Schadstoffprüfung eng mit der Sanierungsplanung verknüpft sein.</li>
      </ul>
    ),
  },
  {
    title: 'Typische Ursachen und Befunde bei Schimmel',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Wasserschaden:</strong> Rohrbruch, undichte Leitungen oder eindringende Feuchtigkeit können Schimmel auslösen.</li>
        <li><strong>Kältebrücken:</strong> Ungünstige Außenwandecken, Fensterbereiche oder Deckenanschlüsse begünstigen Kondensat.</li>
        <li><strong>Schimmel im Bad:</strong> Feuchte Zonen, undichte Fugen, schlechte Lüftung oder versteckte Schäden hinter Verkleidungen.</li>
        <li><strong>Schimmel im Keller:</strong> Feuchte Kellerwände, Kondensation, aufsteigende Feuchtigkeit oder fehlende Abdichtung.</li>
        <li><strong>Asbestverdacht:</strong> Alte Bodenbeläge, Kleber, Platten oder Isolierungen müssen fachlich geprüft werden.</li>
        <li><strong>Altbausanierung:</strong> Bei älteren Gebäuden können mehrere Themen zusammen auftreten und müssen gemeinsam bewertet werden.{' '}
          <a href="/altbausanierung-rhein-main">Altbausanierung</a>.
        </li>
      </ul>
    ),
  },
  {
    title: 'Kosten einer Schimmel- und Schadstoffsanierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Die Kosten hängen immer von Befund, Ursache, Zugänglichkeit und Wiederaufbau ab. Die Angaben dienen nur der Orientierung.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li><strong>Oberflächlicher Schimmel:</strong> ab 300 €</li>
          <li><strong>Tiefsitzender Befall:</strong> ab 1.500 €</li>
          <li><strong>Trocknung und Wiederaufbau:</strong> ab 3.500 €</li>
          <li><strong>Asbestprüfung und Rückbau:</strong> projektbezogen</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Zertifizierte Asbestsanierung nach TRGS 519',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Die Entfernung von Asbest darf ausschließlich von Firmen durchgeführt werden, die den Sachkundenachweis nach TRGS 519 (Technische Regeln für Gefahrstoffe) besitzen. Radex verfügt über alle notwendigen Zulassungen, geschultes Personal und modernste Schutzausrüstung. Wir führen jede Sanierung nach einem detaillierten Arbeitsplan durch und dokumentieren sämtliche Schritte lückenlos.
        </p>
        <p className="text-gray-600">
          So schützen wir Ihre Gesundheit, die Umwelt und sorgen für eine rechtssichere Abwicklung.
        </p>
      </>
    ),
  },
  {
    title: 'Sicheres Sanierungsverfahren bei Asbest',
    content: (
      <p className="text-gray-600">
        Vor Beginn der Arbeiten erstellen wir eine Gefährdungsbeurteilung und schotten den Arbeitsbereich ab. Im Innenbereich arbeiten wir mit Unterdruckhaltung, Personenschleusen und HEPA-gefilterter Abluft. Die asbesthaltigen Materialien werden staubarm demontiert, sofort verpackt und sicher abtransportiert. Nach Abschluss erfolgt eine Freimessung der Raumluft, bevor die Räume wieder genutzt werden dürfen.
      </p>
    ),
  },
  {
    title: 'Entsorgung & Dokumentation bei Asbest',
    content: (
      <p className="text-gray-600">
        Asbest gilt als gefährlicher Abfall und unterliegt strengen Entsorgungsvorschriften. Wir verpacken die Materialien in staubdichten, gekennzeichneten Behältern und entsorgen sie über zugelassene Deponien. Sie erhalten alle Entsorgungsnachweise – ein wichtiges Dokument für Behörden, Versicherungen und beim späteren Verkauf der Immobilie.
      </p>
    ),
  },
  {
    title: 'Weitere Gefahrstoffe',
    content: (
      <p className="text-gray-600">
        Neben Asbest sanieren wir auch andere Schadstoffe, die in älteren Gebäuden vorkommen: künstliche Mineralfasern (KMF / „alte Mineralwolle"), PAK- und teerhaltige Kleber sowie PCB-belastete Baustoffe. Bei einem geplanten Umbau oder Abriss prüfen wir Ihr Gebäude vorab auf solche Belastungen und beraten Sie zur sicheren Vorgehensweise.
      </p>
    ),
  },
  {
    title: 'Wann ist Asbest ein Thema?',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Dachsanierung:</strong> Asbestzementplatten (Eternit), Wellplatten und Dachschindeln auf älteren Dächern.</li>
        <li><strong>Innensanierung:</strong> Floor-Flex-Platten, asbesthaltige Fliesenkleber, Spachtelmassen oder Rohrisolierungen.</li>
        <li><strong>Fassade:</strong> Asbesthaltige Fassadenplatten und Verkleidungen aus den 60er- bis 80er-Jahren.</li>
        <li><strong>Vor dem Umbau:</strong> Pflicht zur Erkundung vor Abbruch- und Sanierungsarbeiten in Altbauten.</li>
      </ul>
    ),
  },
  {
    title: 'Unsere Schadstoffsanierungen',
    content: (
      <ul className="space-y-4 text-gray-600">
        <li><strong>Asbestdach:</strong> Demontage und Entsorgung von Wellplatten und Dacheindeckungen.</li>
        <li><strong>Asbestböden:</strong> Entfernung asbesthaltiger PVC-, Floor-Flex- und Klebstoffschichten.</li>
        <li><strong>KMF & Gefahrstoffe:</strong> Entsorgung künstlicher Mineralfasern und sonstiger belasteter Materialien.</li>
      </ul>
    ),
  },
  {
    title: 'Kosten der Asbestsanierung',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Preise beinhalten Spezialausrüstung, Schutzmaßnahmen und Sondermüll-Entsorgung.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li><strong>Dachsanierung:</strong> ab 35 € / m²</li>
          <li><strong>Bodenbeläge:</strong> ab 60 € / m²</li>
          <li><strong>Innenraum-Sanierung:</strong> auf Anfrage</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Wann sollte Schimmel fachlich geprüft werden?',
    content: (
      <p className="text-gray-600">
        Wenn Schimmel wiederholt auftritt, größer wird, nach einem Wasserschaden entstanden ist, im Bad oder Keller sichtbar wird oder einen muffigen Geruch verursacht, sollte er fachlich geprüft werden.
      </p>
    ),
  },
  {
    title: 'Warum reicht oberflächliches Entfernen nicht aus?',
    content: (
      <p className="text-gray-600">
        Weil es nur den sichtbaren Befall beseitigt. Wenn die Feuchtigkeit bleibt, entsteht der Schimmel erneut. Ursache, Tiefe des Befalls und betroffene Bauteile müssen mit betrachtet werden.
      </p>
    ),
  },
  {
    title: 'Was kostet eine Schimmelsanierung?',
    content: (
      <p className="text-gray-600">
        Die Kosten hängen vom Umfang ab. Eine kleine lokale Sanierung ist anders zu bewerten als ein Wasserschaden mit Trocknung, Rückbau und Wiederherstellung.
      </p>
    ),
  },
  {
    title: 'Kann Schimmel im Bad dauerhaft saniert werden?',
    content: (
      <p className="text-gray-600">
        Ja, wenn die Ursache behoben wird. Abdichtung, Fugen, Lüftung, Wandaufbau und mögliche Leitungsprobleme müssen dabei zusammen geprüft werden.
      </p>
    ),
  },
  {
    title: 'Was passiert bei Schimmel nach einem Wasserschaden?',
    content: (
      <p className="text-gray-600">
        Zuerst wird die Ursache gestoppt, dann werden betroffene Bauteile getrocknet und geprüft. Erst danach folgt der Wiederaufbau der betroffenen Bereiche.
      </p>
    ),
  },
  {
    title: 'Ist Radex zertifiziert für Schimmelsanierung?',
    content: (
      <p className="text-gray-600">
        Ja. Radex ist zertifiziert für Schimmelsanierung und verfügt zusätzlich über Sachkunde nach TRGS 519 für Asbest.
      </p>
    ),
  },
  {
    title: 'Kann Schimmel mit Asbest oder anderen Schadstoffen zusammenhängen?',
    content: (
      <p className="text-gray-600">
        Ja, im selben Sanierungsprojekt können mehrere Befunde auftreten. Deshalb ist im Bestand ein fachkundiger Blick auf Schimmel und Verdachtsmaterialien wichtig.
      </p>
    ),
  },
  {
    title: 'Muss der Bereich abgeschottet werden?',
    content: (
      <p className="text-gray-600">
        Ja, im Innenbereich arbeiten wir unter Unterdruck mit speziellen Schleusen und Folienabschottungen, damit keine Asbestfasern in andere Räume gelangen. Die Luft wird über Feinstaubfilter (HEPA) gereinigt. Diese Maßnahmen sind in der TRGS 519 vorgeschrieben.
      </p>
    ),
  },
  {
    title: 'Woran erkenne ich asbesthaltige Materialien?',
    content: (
      <p className="text-gray-600">
        Eine sichere Bestimmung ist nur durch eine Materialprobe und Laboranalyse möglich. Verdächtig sind Materialien aus der Bauzeit vor 1993 – etwa graue Wellplatten, Fensterbänke, Floor-Flex-Bodenplatten und alte Rohrisolierungen. Bei Verdacht sollten Sie die Materialien keinesfalls selbst bearbeiten.
      </p>
    ),
  },
  {
    title: 'Darf ich Asbest selbst entfernen?',
    content: (
      <p className="text-gray-600">
        Nein. Die Entfernung asbesthaltiger Materialien darf nur durch Betriebe mit Sachkundenachweis nach TRGS 519 erfolgen. Eigenmächtiges Entfernen ist nicht nur gesundheitsgefährlich, sondern auch rechtlich unzulässig und kann Bußgelder nach sich ziehen.
      </p>
    ),
  },
  {
    title: 'Wie wird Asbest entsorgt?',
    content: (
      <p className="text-gray-600">
        Asbest ist gefährlicher Abfall und muss in speziellen, staubdichten Big-Bags verpackt und bei einer zugelassenen Deponie entsorgt werden. Wir übernehmen die gesamte Logistik inklusive Entsorgungsnachweis, den Sie für Behörden und ggf. Käufer benötigen.
      </p>
    ),
  },
  {
    title: 'Muss eine Behörde informiert werden?',
    content: (
      <p className="text-gray-600">
        Bei asbesthaltigen Sanierungsarbeiten ist eine Anzeige bei der zuständigen Behörde (z. B. Regierungspräsidium) erforderlich. Wir kümmern uns um die vorgeschriebenen Anzeigen, Arbeitspläne und die komplette Dokumentation.
      </p>
    ),
  },
  {
    title: 'Wie läuft die Anfrage ab?',
    content: (
      <p className="text-gray-600">
        Sie rufen Radex unter 06074 960620 an oder nutzen den Kontaktbereich. Im ersten Gespräch werden Befund, Raum, Baujahr und mögliche Ursachen besprochen.
      </p>
    ),
  },
  {
    title: 'Welche Städte betreut Radex?',
    content: (
      <p className="text-gray-600">
        Radex ist in über 60 Städten im Rhein-Main-Gebiet aktiv, unter anderem in Rödermark, Rodgau, Dietzenbach, Dreieich, Langen, Neu-Isenburg, Offenbach, Frankfurt, Hanau, Darmstadt, Bad Vilbel, Bad Homburg und Oberursel.
      </p>
    ),
  },
];

function SharedCTABlock({ isHero = false, centered = false }) {
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
            <a key={card.title} href={card.to} className="br-decision-card">
              {content}
            </a>
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

export default function SchimmelAsbestHub() {
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Schimmel & Asbest im Rhein-Main-Gebiet | Fachgerechte Sanierung | Radex',
    description:
      'Schimmel fachgerecht beseitigen und Asbest sicher sanieren. Professionelle Schadstoffsanierung und koordinierte Sanierungslösungen im gesamten Rhein-Main-Gebiet.',
    path: '/leistungen/schimmel-asbest',
    image: HERO_IMAGE,
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Schimmel &<br />
              <span>Asbest</span>
            </h1>
            <p className="br-hero-subtitle">
              Schadstoffe erkennen. Risiken minimieren. Fachgerecht sanieren.
            </p>
            <p className="br-hero-text">
              Schimmel und Asbest sollten niemals unterschätzt werden. Eine fachgerechte Bewertung und die richtige Vorgehensweise sind entscheidend, um Menschen, Gebäude und die weitere Sanierung zu schützen. Radex begleitet Sie bei der Planung und Koordination der notwendigen Maßnahmen im gesamten Rhein-Main-Gebiet. Bei Arbeiten an asbesthaltigen Materialien gelten besondere gesetzliche Anforderungen; die Vorgehensweise richtet sich nach den jeweiligen Materialien und Schutzmaßnahmen.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Wobei können wir Sie unterstützen?</h2>
            <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Wählen Sie den Bereich aus, der zu Ihrem Projekt passt. Auf den jeweiligen Detailseiten finden Sie weitere Informationen zu Leistungen, Ablauf und Kosten.
            </p>
          </div>
          <PremiumIconCards cards={serviceCards} linked />
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
            Nicht jedes Projekt darf nach der Fertigstellung veröffentlicht werden. Deshalb zeigen wir Ihnen bei Radex Live echte Einblicke in laufende Schimmel- und Schadstoffsanierungen sowie ausgewählte abgeschlossene Projekte aus dem gesamten Rhein-Main-Gebiet. So erhalten Sie einen authentischen Eindruck davon, wie professionelle Sanierungen sorgfältig geplant und sicher umgesetzt werden.
          </p>

          <div className="br-projects-grid">
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: `url(${LIVE_IMAGE})` }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Schadstoffsanierung Altbau</h4>
                <p>Frankfurt am Main</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/boden.webp)' }}>
                <span className="br-project-badge">Abgeschlossen</span>
              </div>
              <div className="br-project-info">
                <h4>Schimmelsanierung Wohnung</h4>
                <p>Offenbach</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/wohnzimmer.webp)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Asbestsanierung Innenraum</h4>
                <p>Darmstadt</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/radex-live" className="br-btn-outline-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Alle Projekte ansehen
            </a>
            <a href="#kontakt" className="br-btn-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Projekt anfragen
            </a>
          </div>
        </div>
      </section>

      <section id="kontakt" className="br-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Lassen Sie sich kostenlos beraten</h2>
            <p className="br-section-subtitle mb-8">
              Sie vermuten Schimmel oder möchten eine Immobilie mit möglichem Asbest sanieren?
              Senden Sie uns Fotos Ihres Projekts per WhatsApp oder vereinbaren Sie eine persönliche Beratung. Gemeinsam besprechen wir die nächsten sinnvollen Schritte.
            </p>
            <SharedCTABlock centered />
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
