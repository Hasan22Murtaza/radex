import { useEffect } from 'react';
import {
  Award,
  ClipboardCheck,
  FileCheck,
  Handshake,
  Mail,
  MessageSquare,
  Phone,
  ScrollText,
  ShieldCheck,
  UserCheck,
  Workflow,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import useSeo, { buildServiceSchema } from '../useSeo';
import {
  HorizontalProcessTimeline,
  PremiumIconCards,
  SectionTransition,
} from '../components/landing/SharedLandingParts';

const HERO_IMAGE = '/img/radex-qualitaetsversprechen-hero.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';
const PHONE_TEL = 'tel:+496074960620';

const META_TITLE = 'Das Radex Qualitätsversprechen | Qualität & Gewährleistung | Radex';
const META_DESCRIPTION =
  'Das Radex Qualitätsversprechen: klare Angebote, fachgerechte Ausführung, ein persönlicher Ansprechpartner und nachvollziehbare Qualitätskontrollen – von der Beratung bis zur gemeinsamen Übergabe.';

const promiseCards = [
  {
    title: 'SHK-Meisterbetrieb',
    desc: 'Sanitär- und Heizungsarbeiten werden unter fachlicher Leitung unseres SHK-Meisters geplant und begleitet.',
    icon: Award,
  },
  {
    title: 'Transparente Angebote',
    desc: 'Leistungen, Materialien und vereinbarte Arbeiten werden nachvollziehbar im Angebot dargestellt.',
    icon: FileCheck,
  },
  {
    title: 'Persönlicher Ansprechpartner',
    desc: 'Ein fester Ansprechpartner begleitet Ihr Projekt von der Beratung bis zur Übergabe.',
    icon: UserCheck,
  },
  {
    title: 'Koordinierte Gewerke',
    desc: 'Die beteiligten Fachbetriebe werden zentral geplant und zeitlich aufeinander abgestimmt.',
    icon: Workflow,
  },
  {
    title: 'Saubere Baustelle',
    desc: 'Schutzmaßnahmen, geordnete Arbeitsbereiche und eine saubere Übergabe gehören zu unserem Arbeitsstandard.',
    icon: ShieldCheck,
  },
  {
    title: 'Qualitätskontrollen',
    desc: 'Wichtige Arbeitsschritte werden kontrolliert und vor der Übergabe gemeinsam geprüft.',
    icon: ClipboardCheck,
  },
  {
    title: 'Verlässliche Kommunikation',
    desc: 'Änderungen, Rückfragen und wichtige Projektinformationen werden frühzeitig und transparent kommuniziert.',
    icon: MessageSquare,
  },
  {
    title: 'Gemeinsame Übergabe',
    desc: 'Nach Fertigstellung erfolgt eine gemeinsame Kontrolle und Übergabe der vereinbarten Leistungen.',
    icon: Handshake,
  },
];

const qualityProcessSteps = [
  {
    title: 'Projektaufnahme',
    desc: 'Anforderungen und vorhandene Bausituation erfassen.',
    icon: ClipboardCheck,
  },
  {
    title: 'Leistungsdefinition',
    desc: 'Arbeiten und Materialien eindeutig festlegen.',
    icon: FileCheck,
  },
  {
    title: 'Koordinierte Ausführung',
    desc: 'Gewerke und Termine aufeinander abstimmen.',
    icon: Workflow,
  },
  {
    title: 'Qualitätskontrolle',
    desc: 'Ausführung und vereinbarte Leistungen prüfen.',
    icon: ShieldCheck,
  },
  {
    title: 'Gemeinsame Übergabe',
    desc: 'Abschlusskontrolle und persönliche Übergabe.',
    icon: Handshake,
  },
];

function QualitaetHeroCTA() {
  return (
    <div className="br-hero-actions br-hero-actions--hero">
      <a href="#kontakt" className="btn br-btn-orange">
        Projekt mit Radex starten
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn br-btn-whatsapp br-btn-whatsapp--primary"
      >
        <MessageSquare size={20} />
        Fotos senden. Erste Einschätzung erhalten.
      </a>
    </div>
  );
}

export default function RadexQualitaetsversprechen() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    const hash = window.location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
    return () => window.clearTimeout(timer);
  }, []);

  useSeo({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: '/radex-qualitaetsversprechen',
    image: 'https://www.radex-objektmanagement.de/img/radex-qualitaetsversprechen-hero.webp',
    jsonLd: [
      buildServiceSchema({
        name: 'Radex Qualitätsversprechen',
        description: META_DESCRIPTION,
        path: '/radex-qualitaetsversprechen',
      }),
    ],
  });

  return (
    <main className="badsanierung-page ablauf-badsanierung-page radex-qualitaet-page">
      {/* 1 Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <p className="br-hero-kicker">Qualität bei Radex</p>
            <h1 className="br-hero-title">Das Radex Qualitätsversprechen</h1>
            <p className="br-hero-text">
              Eine Sanierung ist Vertrauenssache. Deshalb setzt Radex auf klare Angebote, fachgerechte
              Ausführung, persönliche Ansprechpartner und nachvollziehbare Qualitätskontrollen. Unser
              Qualitätsversprechen begleitet Ihr Projekt von der ersten Beratung bis zur gemeinsamen
              Übergabe.
            </p>
            <QualitaetHeroCTA />
          </div>
        </div>
        <div
          className="br-hero-right"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Radex Projektleiter übergibt einem Eigentümer ein fertig saniertes modernes Badezimmer"
          title="Das Radex Qualitätsversprechen | Radex Objektmanagement"
        />
      </section>

      <SectionTransition title="Worauf Sie sich bei Radex verlassen können">
        Unser Qualitätsversprechen fasst die Standards zusammen, nach denen wir jedes Projekt planen,
        koordinieren und ausführen. Es sorgt für Verlässlichkeit – vom ersten Gespräch bis zur
        Schlüsselübergabe.
      </SectionTransition>

      {/* 2 Quality Promises */}
      <section id="qualitaetsversprechen" className="br-section br-bg-light br-bw-process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unser Qualitätsversprechen im Überblick</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Acht klare Standards, die jedes Sanierungs- und Badprojekt von Radex begleiten – von der
              fachlichen Leitung über transparente Angebote bis zur gemeinsamen Übergabe.
            </p>
          </div>
          <PremiumIconCards cards={promiseCards} largeIcons />
        </div>
      </section>

      {/* 3 Section transition to legal */}
      <SectionTransition title="Qualität bedeutet auch klare rechtliche Regelungen">
        Neben unseren eigenen Qualitätsstandards gelten für unsere Leistungen selbstverständlich die
        gesetzlichen und vertraglich vereinbarten Mängelrechte. Entscheidend ist dabei immer die konkrete
        Vertragsgrundlage des jeweiligen Projekts.
      </SectionTransition>

      {/* 4 Legal warranty section */}
      {/*
        HINWEIS (nicht anzeigen): Die finale rechtliche Formulierung dieses Abschnitts sollte vor der
        Veröffentlichung einmalig durch den Rechtsberater von Radex geprüft werden. Es wird bewusst keine
        pauschale Gewährleistungsdauer (z. B. vier oder fünf Jahre) auf der Website versprochen, da die
        maßgebliche Frist von der konkreten Vertragsgrundlage und der rechtlichen Einordnung der Arbeiten
        abhängt.
      */}
      <section id="gewaehrleistung" className="br-section br-qp-legal-section">
        <div className="container br-qp-legal-container">
          <div className="br-qp-legal-icon" aria-hidden="true">
            <ScrollText size={28} strokeWidth={1.5} />
          </div>
          <h2 className="br-section-title">Gesetzliche Gewährleistung und vertragliche Regelungen</h2>
          <div className="br-qp-legal-body">
            <p>
              Für die von Radex ausgeführten Leistungen gelten die gesetzlichen Mängelrechte sowie die im
              jeweiligen Vertrag vereinbarten Regelungen. Art und Dauer der geltenden Fristen richten sich
              nach dem konkreten Leistungsumfang und der vereinbarten Vertragsgrundlage. Die maßgeblichen
              Bedingungen werden im jeweiligen Angebot beziehungsweise Vertrag transparent festgehalten.
            </p>
            <p>
              Eine freiwillige Garantie ist von der gesetzlichen Gewährleistung zu unterscheiden. Soweit
              Hersteller für einzelne Produkte eigene Garantien anbieten, gelten deren jeweilige
              Garantiebedingungen.
            </p>
            <p>
              Bei Fragen zu den für Ihr Projekt geltenden Regelungen erläutern wir Ihnen die
              Vertragsgrundlage und den vereinbarten Leistungsumfang vor der Beauftragung.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Quality control process */}
      <HorizontalProcessTimeline
        title="So sichern wir die Qualität Ihres Projekts"
        intro="Von der ersten Projektaufnahme bis zur gemeinsamen Übergabe folgt jedes Projekt einem klar strukturierten Qualitätsprozess."
        steps={qualityProcessSteps}
      />

      {/* 6 Internal links */}
      <section className="br-section br-bg-light br-qp-links-section">
        <div className="container br-qp-links-container">
          <div className="text-center mb-6">
            <h2 className="br-section-title">Qualität in jedem Projekt</h2>
          </div>
          <p className="br-qp-links-text">
            Unser Qualitätsversprechen gilt für alle Leistungen von Radex – von der{' '}
            <Link to="/badsanierung-rhein-main">Badsanierung</Link> und der{' '}
            <Link to="/badsanierung/badezimmer-sanieren">Komplettbadsanierung</Link> über das{' '}
            <Link to="/barrierefreies-bad">barrierefreie Bad</Link> bis zur umfassenden{' '}
            <Link to="/sanierung-rhein-main">Sanierung</Link>. Auch bei der{' '}
            <Link to="/sanierung/wohnungssanierung">Wohnungssanierung</Link> und der{' '}
            <Link to="/sanierung/haussanierung">Haussanierung</Link> koordinieren wir alle Gewerke als{' '}
            <Link to="/generalunternehmer-rhein-main">Generalunternehmer</Link> zentral und
            nachvollziehbar.
          </p>
          <p className="br-qp-links-text">
            Wie ein Projekt Schritt für Schritt abläuft, zeigen wir Ihnen am Beispiel{' '}
            <Link to="/ablauf-badsanierung">Ablauf Badsanierung</Link>. Wie ein transparentes,
            nachvollziehbares Angebot entsteht, lesen Sie unter{' '}
            <Link to="/badsanierung-festpreis">Badsanierung Festpreis</Link>. Mehr über unser Team und
            unsere Qualifikationen erfahren Sie unter <Link to="/ueber-uns">Über Radex</Link> – oder Sie
            nehmen direkt <a href="#kontakt">Kontakt</a> zu uns auf.
          </p>
        </div>
      </section>

      {/* 7 Contact CTA */}
      <section id="kontakt" className="br-section br-qp-cta-section">
        <div className="container">
          <div className="br-gwc-cta-box">
            <h2>Planen Sie Ihr Projekt mit einem verlässlichen Partner</h2>
            <p>
              Sprechen Sie mit uns über Ihre Badsanierung oder Immobilienmodernisierung. Wir erläutern Ihnen
              transparent den Leistungsumfang, den Projektablauf und die vertraglichen Grundlagen.
            </p>
            <div className="br-hero-actions br-hero-actions--centered">
              <a href="mailto:info@radex-objektmanagement.de" className="btn br-btn-orange">
                <Mail size={18} /> Projekt anfragen
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn br-btn-whatsapp br-btn-whatsapp--primary"
              >
                <MessageSquare size={20} />
                Fotos senden. Erste Einschätzung erhalten.
              </a>
              <a href={PHONE_TEL} className="btn br-btn-phone">
                <Phone size={18} /> Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
