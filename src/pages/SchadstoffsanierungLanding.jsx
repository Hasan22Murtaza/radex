import { useEffect, useState } from 'react';
import { RADEX_LIVE_URL } from '../constants/brand';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  ArrowRight,
  Landmark,
  Droplets,
  Key,
  Hammer,
  ShieldCheck,
  Users,
  Handshake,
  UserCheck,
  FileText,
  MapPin,
  Award,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';

const HERO_IMAGE = '/img/schadstoffsanierung-hero.webp';
const LIVE_IMAGE = '/img/schadstoffsanierung-radex-live.webp';

const whenCards = [
  { title: 'Altbausanierung', desc: 'Prüfung vor umfangreichen Umbau- und Sanierungsarbeiten.', icon: Landmark },
  { title: 'Wasserschäden', desc: 'Schadstoffe und Folgeschäden frühzeitig erkennen.', icon: Droplets },
  { title: 'Gebäudekauf', desc: 'Sicherheit vor einer Investition schaffen.', icon: Key },
  { title: 'Kernsanierung', desc: 'Gefahrstoffe vor Beginn aller Ausbauarbeiten fachgerecht berücksichtigen.', icon: Hammer },
];

const whyRadexCards = [
  { title: 'Zertifiziert für Schimmel & Asbest', desc: 'Schimmelsanierung und Sachkunde nach TRGS 519 für Asbest im Sanierungsprojekt.', icon: ShieldCheck },
  { title: 'Koordination aller Fachbetriebe', desc: 'Prüfung, Rückbau, Trocknung, SHK und Wiederaufbau in der richtigen Reihenfolge.', icon: Users },
  { title: 'Alles aus einer Hand', desc: 'Planung, Koordination und Ausführung mit einem festen Ansprechpartner.', icon: Handshake },
  { title: 'Fester Ansprechpartner', desc: 'Von der ersten Einschätzung bis zur dokumentierten Übergabe.', icon: UserCheck },
  { title: 'Dokumentierte Projektabläufe', desc: 'Saubere Dokumentation für Eigentümer, Vermieter und Versicherungen.', icon: FileText },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Über 60 Städte – Erfahrung mit Bestandsimmobilien und Altbauten.', icon: MapPin },
];

const processSteps = [
  'Kostenlose Erstberatung',
  'Besichtigung der Immobilie',
  'Bewertung möglicher Schadstoffe',
  'Planung der Sanierungsmaßnahmen',
  'Fachgerechte Ausführung',
  'Abschluss & Dokumentation',
];

const faqsData = [
  {
    q: 'Wann ist eine Schadstoffsanierung notwendig?',
    a: 'Sobald Feuchtigkeit, Schimmel, Verdachtsmaterialien oder Rückbau im Bestand zusammenkommen, sollte fachlich geprüft werden – besonders vor Kernsanierung, Altbausanierung oder nach Wasserschäden.',
  },
  {
    q: 'Welche Gefahrstoffe kommen in Altbauten häufig vor?',
    a: 'Häufig sind Asbest in alten Bodenbelägen, Klebern, Platten oder Isolierungen, außerdem Schimmel durch Feuchtigkeit, PAK-haltige Materialien, Mineralfasern oder belastete Anstriche.',
  },
  {
    q: 'Muss vor einer Kernsanierung geprüft werden?',
    a: 'Ja. Bevor Wände, Böden oder Decken geöffnet werden, sollte geklärt werden, ob Schadstoffe vorhanden sein könnten. So lassen sich Gesundheitsrisiken und Folgeschäden vermeiden.',
  },
  {
    q: 'Arbeiten Sie mit zertifizierten Fachpartnern zusammen?',
    a: 'Ja. Radex ist zertifiziert für Schimmelsanierung und verfügt über Sachkunde nach TRGS 519 für Asbest. Zusätzlich koordiniert Radex qualifizierte Fachpartner für weitere Schadstoffthemen.',
  },
  {
    q: 'Wie lange dauert eine Schadstoffsanierung?',
    a: 'Das hängt von Befund, Ursache, Zugänglichkeit und Wiederaufbau ab. Nach der Bestandsaufnahme erstellen wir einen realistischen Zeitplan für Ihr Projekt.',
  },
  {
    q: 'Erhalte ich ein Festpreisangebot?',
    a: 'Ja. Nach Besichtigung und klarer Abstimmung des Umfangs erstellen wir ein transparentes Angebot für die geplanten Maßnahmen.',
  },
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
          <Link to="/leistungen/schimmel-asbest">Schimmel & Asbest</Link>.
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
          <a href="/schimmelsanierung-rhein-main">Schimmelsanierung</a>.
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
          <a href={RADEX_LIVE_URL}>Radex Live</a>.
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
    title: 'Typische Ursachen und Befunde',
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

export default function SchadstoffsanierungLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openSeo, setOpenSeo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Schadstoffsanierung im Rhein-Main-Gebiet | Fachgerechte Gebäudesanierung | Radex',
    description:
      'Schadstoffsanierung im Rhein-Main-Gebiet. Gefahrstoffe erkennen, Sanierungen professionell planen und Gebäude sicher modernisieren – alles aus einer Hand.',
    path: '/schadstoffsanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)],
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Schadstoffsanierung im<br />
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">
              Gefahrstoffe erkennen. Risiken minimieren. Immobilien sicher sanieren.
            </p>
            <p className="br-hero-text">
              Vor Beginn einer Sanierung sollten mögliche Schadstoffe frühzeitig erkannt und fachgerecht bewertet werden. Eine professionelle Schadstoffsanierung schützt Bewohner, Handwerker und die Bausubstanz und sorgt für einen sicheren Ablauf der gesamten Modernisierung. Radex koordiniert sämtliche notwendigen Maßnahmen im gesamten Rhein-Main-Gebiet und arbeitet mit qualifizierten Fachpartnern zusammen.
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
            <h2 className="br-section-title">Wann ist eine Schadstoffsanierung sinnvoll?</h2>
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
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Professionelle Schadstoffsanierung</h2>
            <p className="br-section-subtitle">
              Jedes Gebäude ist unterschiedlich. Deshalb wird jedes Projekt individuell bewertet und die notwendigen Sanierungsmaßnahmen sorgfältig geplant. Ziel ist ein sicherer und reibungsloser Ablauf der anschließenden Modernisierung.
            </p>
          </div>
        </div>
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
            Nicht jedes Projekt darf veröffentlicht werden. Deshalb zeigen wir Ihnen bei Radex Live ausgewählte Schadstoffsanierungen und laufende Sanierungsprojekte aus dem gesamten Rhein-Main-Gebiet. Erhalten Sie authentische Einblicke in unsere tägliche Arbeit und erleben Sie, wie anspruchsvolle Sanierungsprojekte professionell vorbereitet und umgesetzt werden.
          </p>

          <div className="br-projects-grid">
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/boden.webp)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Schadstoffprüfung Altbau</h4>
                <p>Frankfurt am Main</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(/img/wohnzimmer.webp)' }}>
                <span className="br-project-badge">Abgeschlossen</span>
              </div>
              <div className="br-project-info">
                <h4>Schimmelsanierung Wohnung</h4>
                <p>Offenbach</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: `url(${LIVE_IMAGE})` }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Fachgerechte Sanierung</h4>
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
              Sie planen eine Sanierung und möchten mögliche Schadstoffe frühzeitig ausschließen oder fachgerecht beseitigen lassen?
              Senden Sie uns Fotos Ihrer Immobilie per WhatsApp oder vereinbaren Sie eine persönliche Beratung. Gemeinsam besprechen wir die nächsten sinnvollen Schritte für Ihr Projekt.
            </p>
            <SharedCTABlock centered />
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

          <div className="br-trust-footer mt-12">
            <div className="br-trust-item">
              <Award size={32} color="#aaa" />
              <div>
                <strong>TRGS 519</strong>
                <span>Asbest-Sachkunde</span>
              </div>
            </div>
            <div className="br-trust-item">
              <ShieldCheck size={32} color="#aaa" />
              <div>
                <strong>Zertifiziert</strong>
                <span>Schimmelsanierung</span>
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
              <Users size={32} color="#aaa" />
              <div>
                <strong>SHK-Meister</strong>
                <span>Zugelassener Fachbetrieb</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
