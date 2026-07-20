import { useEffect, useRef, useState } from 'react';
import {
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  Home,
  Leaf,
  Bath,
  Layers,
  MessageSquare,
  ShieldCheck,
  Star,
  Users,
  ArrowUpRight,
  X,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import '../badsanierung-polish.css';
import '../sanierung-polish.css';
import '../home.css';
import '../data/legacyServiceStyles.css';
import useSeo, { buildFaqSchema, buildServiceSchema } from '../useSeo';
import ContactForm from '../components/ContactForm';
import {
  PremiumIconCards,
  RadexLiveProjectCard,
} from '../components/landing/SharedLandingParts';
import { RADEX_LIVE_URL } from '../constants/brand';
import sanierungOldContentHtml from '../data/sanierungRheinMainOldContent.html?raw';

const HERO_IMAGE = '/img/sanierung-rhein-main-hero.webp';
const HERO_IMAGE_MOBILE = '/img/sanierung-rhein-main-hero-mobile.webp';
const WHATSAPP_URL = 'https://wa.me/496074960620';

const META_TITLE =
  'Sanierung im Rhein-Main-Gebiet | Haus, Wohnung & Altbau sanieren | Radex';
const META_DESCRIPTION =
  'Wohnung, Haus oder Altbau sanieren? Radex begleitet Ihr Sanierungsprojekt im Rhein-Main-Gebiet – von der ersten Beratung bis zur fertigen Übergabe. Jetzt kostenlos beraten lassen.';

const WA_HINT = '⭐ Fotos per WhatsApp senden. Kostenlose Ersteinschätzung erhalten.';

function SanierungCTA({ isHero = false, centered = false }) {
  return (
    <div
      className={`br-hero-actions sanierung-mp-cta ${isHero ? 'br-hero-actions--hero' : ''} ${
        centered ? 'br-hero-actions--centered' : ''
      }`}
    >
      <a href="#kontakt" className="btn br-btn-orange">
        Kostenlose Beratung
      </a>
      <div className="sanierung-mp-wa-wrap">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn br-btn-whatsapp br-btn-whatsapp--primary"
        >
          <MessageSquare size={20} />
          Fotos per WhatsApp senden
        </a>
        <p className="sanierung-mp-wa-hint">{WA_HINT}</p>
      </div>
    </div>
  );
}

const whyRadexCards = [
  {
    title: 'Eingetragener SHK-Meisterbetrieb',
    desc: 'Zertifizierte Arbeit nach aktuellen technischen Richtlinien und Handwerksstandards.',
    icon: Award,
  },
  {
    title: 'Alles aus einer Hand',
    desc: 'Ein zentraler Ansprechpartner während des gesamten Projektverlaufs.',
    icon: Users,
  },
  {
    title: 'Festpreis-Garantie',
    desc: 'Transparente Angebote ohne versteckte Überraschungen oder Nachforderungen.',
    icon: ShieldCheck,
  },
  {
    title: 'Staubarme Sanierung',
    desc: 'Professionelle Schutzsysteme für saubere Baustellenumgebungen.',
    icon: CheckCircle2,
  },
];

const serviceCards = [
  {
    to: '/wohnungssanierung-rhein-main',
    title: 'Wohnungssanierung',
    desc: 'Modernisierung von Wohnungen – von einzelnen Räumen bis zur vollständigen Kernsanierung inklusive Bad, Küche, Bodenbelägen, Elektro und Malerarbeiten.',
    image: '/img/sanierung-service-wohnung.webp',
    imageAlt: 'Modernisierte Wohnung nach Wohnungssanierung im Rhein-Main-Gebiet',
    icon: Building2,
  },
  {
    to: '/haussanierung-rhein-main',
    title: 'Haussanierung',
    desc: 'Komplette Modernisierung von Einfamilienhäusern inklusive aller Gewerke – technisch, energetisch und optisch.',
    image: '/img/sanierung-service-haus.webp',
    imageAlt: 'Modernisiertes Einfamilienhaus nach Haussanierung',
    icon: Home,
  },
  {
    to: '/altbausanierung-rhein-main',
    title: 'Altbausanierung',
    desc: 'Erhalt historischer Bausubstanz kombiniert mit moderner Technik und hochwertiger Ausführung.',
    image: '/img/sanierung-service-altbau.webp',
    imageAlt: 'Renovierter Altbau mit Stuckdecke und moderner Technik',
    icon: Layers,
  },
  {
    to: '/komplettsanierung-rhein-main',
    title: 'Komplettsanierung',
    desc: 'Ein Ansprechpartner für Planung, Koordination und die komplette Umsetzung Ihres Projekts.',
    image: '/img/sanierung-service-komplett.webp',
    imageAlt: 'Komplettsanierung mit Trockenbau, Elektro und Sanitär',
    icon: CheckCircle2,
  },
  {
    to: '/badsanierung-rhein-main',
    title: 'Badsanierung',
    desc: 'Moderne Badezimmer mit hochwertiger Ausstattung, neuer Sanitärtechnik und zeitlosem Design.',
    image: '/img/sanierung-service-bad.webp',
    imageAlt: 'Modernes Badezimmer nach Badsanierung mit Walk-in-Dusche',
    icon: Bath,
  },
  {
    to: '/energetische-sanierung-rhein-main',
    title: 'Energetische Sanierung',
    desc: 'Verbesserung der Energieeffizienz durch moderne Dämmung, Fenster, Heiztechnik und weitere energetische Maßnahmen.',
    image: '/img/sanierung-service-energetisch.webp',
    imageAlt: 'Energetisch saniertes Haus mit Dämmung und modernen Fenstern',
    icon: Leaf,
  },
];

const processSteps = [
  'Kostenlose Beratung',
  'Planung',
  'Angebot',
  'Umsetzung',
  'Übergabe',
];

const radexLiveProjects = [
  {
    image: HERO_IMAGE,
    badge: 'LIVE',
    title: 'Rohbauphase Komplettsanierung',
    location: 'Frankfurt am Main',
    desc: 'Komplettsanierung inklusive Entkernung, neuer Haustechnik und Innenausbau.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    badge: 'LIVE',
    title: 'Wohnungssanierung Innenausbau',
    location: 'Wiesbaden',
    desc: 'Modernisierung inklusive neuer Leitungen, Vorwandinstallation und hochwertiger Ausstattung.',
    cta: 'Projekt ansehen',
  },
  {
    image: '/img/sanierung-service-haus.webp',
    badge: 'LIVE',
    title: 'Heizungsmodernisierung Altbau',
    location: 'Darmstadt',
    desc: 'Heizungstausch und energetische Aufwertung in einem älteren Bestandsgebäude.',
    cta: 'Projekt ansehen',
  },
];

const referenceCards = [
  {
    image: '/img/sanierung-service-wohnung.webp',
    location: 'Frankfurt Riedberg',
    desc: 'Penthouse-Modernisierung mit neuen Böden, Elektro und Bad.',
  },
  {
    image: '/img/sanierung-service-haus.webp',
    location: 'Bad Homburg',
    desc: 'Kernsanierung Einfamilienhaus mit Heizung, Sanitär und Innenausbau.',
  },
  {
    image: '/img/sanierung-service-altbau.webp',
    location: 'Kronberg',
    desc: 'Altbausanierung mit erhaltener Fassade und modernem Innenausbau.',
  },
  {
    image: '/img/sanierung-service-wohnung.webp',
    location: 'Wiesbaden',
    desc: 'Wohnungssanierung Innenausbau inklusive neuer Leitungen und Ausstattung.',
  },
  {
    image: '/img/sanierung-service-energetisch.webp',
    location: 'Darmstadt',
    desc: 'Heizungsmodernisierung und energetische Aufwertung im Bestand.',
  },
  {
    image: '/img/sanierung-service-altbau.webp',
    location: 'Offenbach am Main',
    desc: 'Altbauwohnung modernisiert – Charakter bewahrt, Technik erneuert.',
  },
];

const costCategoryCards = [
  {
    title: 'Wohnungssanierung',
    price: 'ab ca. 300 €/m²',
    desc: 'Typische Einstiegspreise für Eigentumswohnungen und Bestandswohnungen – abhängig von Umfang und Ausstattung.',
    image: '/img/sanierung-service-wohnung.webp',
    to: '/wohnungssanierung-rhein-main',
  },
  {
    title: 'Haussanierung',
    price: 'ab ca. 400 €/m²',
    desc: 'Orientierungswerte für Einfamilienhäuser und Reihenhäuser – von Teilsanierung bis Komplettmodernisierung.',
    image: '/img/sanierung-service-haus.webp',
    to: '/haussanierung-rhein-main',
  },
  {
    title: 'Altbausanierung',
    price: 'ab ca. 500 €/m²',
    desc: 'Einstiegspreise für ältere Bestandsimmobilien – mit Respekt vor Substanz und Charakter.',
    image: '/img/sanierung-service-altbau.webp',
    to: '/altbausanierung-rhein-main',
  },
];

const GOOGLE_RATING = 4.6;
const GOOGLE_REVIEW_COUNT = 17;

const trustReviews = [
  {
    name: 'Karin B.',
    city: 'Frankfurt',
    initials: 'KB',
    bg: '#5B7EC9',
    text: 'Hervorragende Altbausanierung. Die Abstimmung als Generalunternehmer war perfekt.',
  },
  {
    name: 'Thomas S.',
    city: 'Offenbach',
    initials: 'TS',
    bg: '#C07FB5',
    text: 'Komplettbadsanierung im vereinbarten Zeitrahmen und zum Festpreis abgeschlossen. Sehr sauber gearbeitet!',
  },
  {
    name: 'Nina W.',
    city: 'Frankfurt am Main',
    initials: 'NW',
    bg: '#4A90A4',
    text: 'Alle Arbeiten wurden zeitlich und fachgerecht eingehalten und zu unserer vollsten Zufriedenheit ausgeführt.',
  },
];

const faqsData = [
  {
    q: 'Was kostet eine Sanierung?',
    a: 'Die Kosten hängen stark vom Sanierungsstau, der Fläche und Ihren Ausstattungswünschen ab. Eine einfache Renovierung startet oft bei 400 €/m², eine Komplettsanierung liegt meist zwischen 1.200 € und 2.500 €/m². Nutzen Sie unseren Sanierungskosten-Rechner für typische Einstiegspreise – das verbindliche Festpreisangebot folgt nach Besichtigung.',
  },
  {
    q: 'Wie lange dauert eine Sanierung?',
    a: 'Eine Wohnungssanierung dauert in der Regel 4–8 Wochen. Eine umfangreiche Haussanierung kann 3–6 Monate beanspruchen – abhängig von Umfang und baulichen Gegebenheiten.',
  },
  {
    q: 'Arbeitet Radex als Generalunternehmer?',
    a: 'Ja, wir übernehmen die komplette Koordination aller Gewerke und bieten Ihnen einen zentralen Ansprechpartner sowie Festpreisgarantie.',
  },
];

function GoogleLogo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.28 10.08c0-.78-.07-1.53-.2-2.25H12v4.26h4.67c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 21c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 18.53 7.7 21 12 21z" fill="#34A853" />
      <path d="M5.84 12.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V5.07H2.18C1.43 6.55 1 8.22 1 10s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function SanierungHub() {
  const oldContentRef = useRef(null);
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const root = oldContentRef.current;
    if (!root) return undefined;

    const onClick = (e) => {
      const question = e.target.closest('.faq-question');
      if (question && root.contains(question)) {
        const item = question.closest('.faq-item');
        if (item) item.classList.toggle('open');
        return;
      }

      const link = e.target.closest('a[href^="#"]');
      if (!link || !root.contains(link)) return;

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      e.preventDefault();
      setSeoPanelOpen(false);

      window.setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (window.history?.replaceState) {
            window.history.replaceState(null, '', hash);
          }
        }
      }, 280);
    };

    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!seoPanelOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setSeoPanelOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [seoPanelOpen]);

  useSeo({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: '/sanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [
      buildServiceSchema({
        name: 'Sanierung Rhein-Main',
        description: META_DESCRIPTION,
        path: '/sanierung-rhein-main',
      }),
      buildFaqSchema(faqsData),
    ],
  });

  return (
    <main className="badsanierung-page sanierung-money-page">
      {/* Hero */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Sanierung im Rhein-Main-Gebiet – alles aus einer Hand
            </h1>
            <p className="br-hero-text">
              Ob Wohnung, Einfamilienhaus, Altbau oder Gewerbeobjekt – jede Sanierung stellt andere Anforderungen. Als
              Generalunternehmer begleitet Radex Ihr Projekt von der ersten Beratung über die Planung bis zur fertigen
              Übergabe. Mit einem festen Ansprechpartner und der Koordination aller Gewerke sorgen wir für einen
              strukturierten Ablauf und eine fachgerechte Umsetzung.
            </p>
            <SanierungCTA isHero />
          </div>
        </div>
        <div className="br-hero-right sanierung-mp-hero-media">
          <picture>
            <source media="(max-width: 900px)" srcSet={HERO_IMAGE_MOBILE} />
            <img
              src={HERO_IMAGE}
              alt="Sanierung eines Wohnhauses im Rhein-Main-Gebiet durch Radex"
              width={1600}
              height={900}
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        </div>
      </section>

      {/* Warum Radex */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Eine erfolgreiche Sanierung beginnt mit einer guten Planung und einer zuverlässigen Koordination. Als
              Generalunternehmer übernehmen wir die Abstimmung aller beteiligten Gewerke und begleiten Ihr Projekt mit
              einem festen Ansprechpartner – von der ersten Beratung bis zur fertigen Übergabe.
            </p>
          </div>
          <PremiumIconCards cards={whyRadexCards} largeIcons />
        </div>
      </section>

      {/* Unsere Sanierungsleistungen */}
      <section className="br-section br-bg-light" id="leistungen">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Sanierungsleistungen</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Jedes Sanierungsprojekt ist anders. Gemeinsam planen wir die passende Lösung für Ihre Immobilie und setzen
              alle Arbeiten fachgerecht und koordiniert um.
            </p>
          </div>
          <div className="sanierung-mp-svc-grid">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link key={card.to} to={card.to} className="sanierung-mp-svc-card">
                  <span className="sanierung-mp-svc-arrow" aria-hidden="true">
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </span>
                  <div className="sanierung-mp-svc-img">
                    <img src={card.image} alt={card.imageAlt} loading="lazy" width={640} height={360} />
                  </div>
                  <div className="sanierung-mp-svc-body">
                    <div className="sanierung-mp-svc-icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* So läuft Ihre Sanierung ab */}
      <section className="br-section" id="ablauf">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">So läuft Ihre Sanierung ab</h2>
          </div>
          <div className="br-process-flow sanierung-mp-process">
            {processSteps.map((title, idx) => (
              <div key={title} className="sanierung-mp-process-item">
                <div className="br-process-step">
                  <div className="br-step-number">{idx + 1}</div>
                  <h4>{title}</h4>
                </div>
                {idx < processSteps.length - 1 && (
                  <span className="br-step-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Radex Live */}
      <section className="br-section br-bg-light br-radex-live-section" id="radex-live">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Schauen Sie uns bei der Arbeit über die Schulter.</h2>
            <p className="br-section-subtitle br-section-subtitle--wide br-radex-live-intro">
              Bilder zeigen Ergebnisse – Videos zeigen den Weg dorthin.
              <br />
              Mit Radex Live erhalten Sie echte Einblicke in laufende Baustellen, abgeschlossene Sanierungen und aktuelle
              Projekte aus dem Rhein-Main-Gebiet.
              <br />
              So sehen Sie, wie wir Sanierungen planen, koordinieren und Schritt für Schritt umsetzen.
            </p>
          </div>

          <div className="br-projects-grid br-radex-live-projects">
            {radexLiveProjects.map((project) => (
              <RadexLiveProjectCard
                key={project.title}
                image={project.image}
                badge={project.badge}
                badgeClassName="live"
                title={project.title}
                subtitle={project.location}
                desc={project.desc}
                cta={project.cta}
              />
            ))}
          </div>

          <div className="text-center mb-8 mt-12">
            <h3 className="br-section-title" style={{ fontSize: '1.35rem' }}>
              Abgeschlossene Sanierungen
            </h3>
          </div>
          <div className="br-projects-grid br-references-grid">
            {referenceCards.map((ref) => (
              <a
                key={ref.location + ref.desc}
                href={RADEX_LIVE_URL}
                className="br-project-card br-reference-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="br-project-img" style={{ backgroundImage: `url(${ref.image})` }} />
                <div className="br-project-info">
                  <h4>{ref.location}</h4>
                  <p className="br-project-desc">{ref.desc}</p>
                  <span className="br-btn-orange br-project-cta">Projekt ansehen &rarr;</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={RADEX_LIVE_URL}
              className="br-btn-outline-orange"
              style={{ display: 'inline-block', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Alle Projekte ansehen
            </a>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section className="br-section" id="preise">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet eine Sanierung?</h2>
            <p className="br-section-subtitle br-section-subtitle--wide">
              Die Kosten einer Sanierung hängen von Größe, Zustand und Umfang der Arbeiten ab.
              <br />
              Die folgenden Preisbereiche dienen als erste Orientierung.
            </p>
          </div>
          <div className="br-costs-grid br-costs-grid--three">
            {costCategoryCards.map((card) => (
              <Link key={card.title} to={card.to} className="br-cost-card">
                <div className="br-cost-category-img" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="br-cost-header">
                  <h3>{card.title}</h3>
                  <p className="br-cost-price">
                    <span>{card.price}</span>
                  </p>
                </div>
                <p className="br-cost-desc">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sanierungsrechner CTA */}
      <section className="br-section br-bg-light" id="sanierungsrechner">
        <div className="container">
          <div className="sanierung-mp-rechner-box">
            <h2 className="br-section-title">Sie möchten eine erste Kosteneinschätzung?</h2>
            <p>
              Nutzen Sie unseren kostenlosen Sanierungsrechner und erhalten Sie in wenigen Minuten eine erste Orientierung
              zu den möglichen Kosten Ihres Sanierungsprojekts.
            </p>
            <Link to="/sanierungskosten-rechner" className="btn br-btn-orange">
              Sanierungsrechner starten
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="br-section sanierung-mp-reviews" id="bewertungen" aria-labelledby="sanierung-reviews-title">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="sanierung-reviews-title" className="br-section-title">
              Das sagen unsere Kunden
            </h2>
          </div>

          <div className="sanierung-mp-reviews-summary">
            <div className="sanierung-mp-reviews-brand">
              <GoogleLogo size={28} />
              <div>
                <span className="sanierung-mp-reviews-label">Google-Bewertungen</span>
                <span className="sanierung-mp-reviews-sub">Radex Objektmanagement GmbH</span>
              </div>
            </div>
            <div className="sanierung-mp-reviews-score">
              <span className="sanierung-mp-reviews-value">{GOOGLE_RATING.toLocaleString('de-DE')}</span>
              <span className="sanierung-mp-reviews-stars" aria-label={`${GOOGLE_RATING} von 5 Sternen`}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.round(GOOGLE_RATING) ? 'var(--gold, #C8861A)' : '#e5e7eb'}
                    color={i < Math.round(GOOGLE_RATING) ? 'var(--gold, #C8861A)' : '#e5e7eb'}
                  />
                ))}
              </span>
            </div>
            <div className="sanierung-mp-reviews-count">
              <strong>{GOOGLE_REVIEW_COUNT}</strong>
              <span>Google-Bewertungen</span>
            </div>
          </div>

          <div className="sanierung-mp-reviews-grid">
            {trustReviews.map((item) => (
              <article key={item.name + item.city} className="sanierung-mp-review-card">
                <div className="sanierung-mp-review-header">
                  <div className="sanierung-mp-review-avatar" style={{ backgroundColor: item.bg }}>
                    {item.initials}
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.city}</span>
                  </div>
                </div>
                <div className="sanierung-mp-review-stars" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--gold, #C8861A)" color="var(--gold, #C8861A)" />
                  ))}
                </div>
                <p>&bdquo;{item.text}&ldquo;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="br-section br-bg-light sanierung-mp-final-cta">
        <div className="container">
          <div className="sanierung-mp-final-box">
            <h2 className="br-section-title">Lassen Sie uns über Ihr Sanierungsprojekt sprechen.</h2>
            <p>
              Ganz gleich, ob Wohnung, Haus oder Altbau – wir beraten Sie persönlich und erstellen ein individuelles
              Angebot für Ihr Projekt.
            </p>
            <SanierungCTA centered />
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Weitere Informationen – opens large side drawer */}
      <section id="weitere-informationen" className="br-section br-bg-light sanierung-mp-old-content">
        <div className="container">
          <div className="text-center">
            <button
              type="button"
              className={`br-seo-toc-toggle${seoPanelOpen ? ' is-open' : ''}`}
              onClick={() => setSeoPanelOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={seoPanelOpen}
              aria-controls="sanierung-seo-panel"
            >
              <h2 className="br-section-title">Weitere Informationen</h2>
              <ChevronDown size={28} className="br-seo-toc-toggle-icon" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className={`br-city-seo-panel-root ${seoPanelOpen ? 'open' : ''}`}
          aria-hidden={!seoPanelOpen}
        >
          <button
            type="button"
            className="br-city-seo-panel-backdrop"
            aria-label="Hintergrund schließen"
            tabIndex={seoPanelOpen ? 0 : -1}
            onClick={() => setSeoPanelOpen(false)}
          />
          <aside
            id="sanierung-seo-panel"
            className="br-city-seo-panel br-ablauf-seo-panel sanierung-mp-seo-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sanierung-seo-panel-title"
          >
            <div className="br-city-seo-panel-header">
              <h2 id="sanierung-seo-panel-title">Weitere Informationen</h2>
              <button
                type="button"
                className="br-city-seo-panel-close"
                aria-label="Schließen"
                onClick={() => setSeoPanelOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <div className="br-city-seo-panel-body">
              <div
                ref={oldContentRef}
                className="radex-legacy sanierung-mp-legacy"
                dangerouslySetInnerHTML={{ __html: sanierungOldContentHtml }}
              />
              <a
                href="#kontakt"
                className="br-city-seo-panel-faq sanierung-mp-drawer-cta"
                onClick={(e) => {
                  e.preventDefault();
                  setSeoPanelOpen(false);
                  window.setTimeout(() => {
                    document.getElementById('kontakt')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }, 280);
                }}
              >
                Kostenlose Beratung
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
