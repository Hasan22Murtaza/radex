import { useEffect, useState, useRef } from 'react';
import { Link } from '../router';
import {
  Camera, MessageSquare, Phone, CheckCircle2, ArrowRight, Award, Users, ShieldCheck,
  ChevronDown, AlertTriangle, Wrench, Bath, Building2, Home, Landmark, Flame, Zap,
  Briefcase, Calculator, FileText, Hammer, MapPin, Mail, X, Info
} from 'lucide-react';
import '../badsanierung.css';
import '../home.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';
import { citySeoContent } from '../data/citySeoContent';
import { cityDataMap } from '../data/cities';
import {
  buildCityHubPath,
  buildCityServicePath,
  listCityServiceRoutes,
  resolveCardService,
} from '../data/cityServiceRoutes';
import { RADEX_LIVE_URL } from '../constants/brand';
import testVideo from '../assets/test.mp4';
import personImage from '../assets/Screenshot_5.png';
import Komplettbadsanierung from '../assets/Komplettbadsanierung.jpg';

const VIDEO_ID = '4A0f7A5mPLI';

const serviceNavCards = [
  { to: "/badsanierung-rhein-main", title: "Badsanierung", desc: "Komplette Bädermodernisierung, barrierefreie Umbauten und Wellnessoasen.", cta: "Badsanierung planen", icon: Bath },
  { to: "/sanierung/wohnungssanierung", title: "Wohnungssanierung", desc: "Modernisierung von Wohnungen inklusive Innenausbau und Bodengestaltung.", cta: "Wohnung sanieren", icon: Building2 },
  { to: "/sanierung/haussanierung", title: "Haussanierung", desc: "Ganzheitliche Sanierung von Einfamilienhäusern und Mehrfamilienhäusern.", cta: "Haussanierung entdecken", icon: Home },
  { to: "/sanierung/altbausanierung", title: "Altbausanierung", desc: "Fachgerechte Modernisierung von denkmalgeschützten Gebäuden und Altbauten.", cta: "Mehr zur Altbausanierung", icon: Landmark },
  { to: "/heizung-sanitaer-rhein-main", title: "Heizung & Sanitär", desc: "Heizungsmodernisierung, Wärmepumpen und Sanitärinstallationen.", cta: "Heizung & Sanitär modernisieren", icon: Flame },
  { to: "/elektroinstallation-rhein-main", title: "Elektrotechnik", desc: "Erneuerung von Stromleitungen und moderner Gebäudetechnik.", cta: "Elektrik aufrüsten", icon: Zap },
  { to: "/schadstoffsanierung-rhein-main", title: "Schimmel- & Schadstoffsanierung", desc: "Professionelle Beseitigung von Schimmel und Gefahrstoffen (Asbest).", cta: "Befundung anfragen", icon: AlertTriangle },
  { to: "/gewerbesanierung-rhein-main", title: "Gewerbesanierung", desc: "Büroumbau, Mieterausbau und Sanierung von Gewerbeflächen.", cta: "Gewerbeprojekt besprechen", icon: Briefcase }
];

const projectCards = [
  { img: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800', badge: 'live', title: 'Badsanierung – Komplettumbau', type: 'Badsanierung' },
  { img: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800', title: 'Wohnungssanierung – Küche & Boden', type: 'Wohnungssanierung' },
  { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800', title: 'Haussanierung – Wohnbereich', type: 'Haussanierung' },
  { img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800', badge: 'before-after', title: 'Altbausanierung – Modernisierung', type: 'Altbausanierung' }
];

const processSteps = [
  { icon: <MessageSquare size={28} strokeWidth={1.5} />, title: 'Anfrage' },
  { icon: <MapPin size={28} strokeWidth={1.5} />, title: 'Vor-Ort-Termin' },
  { icon: <FileText size={28} strokeWidth={1.5} />, title: 'Festpreisangebot' },
  { icon: <Hammer size={28} strokeWidth={1.5} />, title: 'Fachgerechte Umsetzung' }
];



export default function CityPage({ cityId, canonicalPath }) {
  const city = cityDataMap[cityId] || { name: "Rhein-Main-Gebiet", heroImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600", districts: [] };
  const seoContent = citySeoContent[cityId];
  const hubPath = canonicalPath || city.path || buildCityHubPath(cityId);

  const [openFaq, setOpenFaq] = useState(null);
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSeoPanelOpen(false);
  }, [cityId]);

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

  useEffect(() => {
    // Attempt autoplay on mount. If blocked, mute and retry.
    if (videoRef.current) {
      const p = videoRef.current.play();
      if (p && p.catch) {
        p.catch(() => {
          try {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          } catch (e) {}
        });
      }
    }
  }, []);

  const faqsData = seoContent?.faqs ?? [
    { q: `Sind Sie auch in ${city.name} und Umgebung tätig?`, a: `Ja, Radex betreut Sanierungs- und Modernisierungsprojekte in ganz ${city.name} sowie den umliegenden Stadtteilen und Gemeinden.` },
    { q: "Wie schnell erhalte ich ein Angebot?", a: "Nach einer Vor-Ort-Besichtigung oder der Auswertung Ihrer Fotos erhalten Sie in der Regel innerhalb von wenigen Tagen ein verbindliches Festpreisangebot." },
    { q: "Bieten Sie eine Festpreisgarantie an?", a: "Ja, alle unsere Angebote sind Festpreise ohne versteckte Zusatzkosten." },
    { q: "Kann ich Fotos meines Projekts vorab senden?", a: "Ja, senden Sie uns gerne Fotos per WhatsApp – wir geben Ihnen eine erste Einschätzung, bevor wir einen Vor-Ort-Termin vereinbaren." },
    { q: "Sind Sie ein lizenzierter Fachbetrieb?", a: "Radex ist ein eingetragener SHK-Meisterbetrieb und zertifizierter Generalunternehmer." }
  ];

  useSeo({
    title: seoContent?.title || `Sanierung ${city.name} | Bad, Wohnung & Haus modernisieren | Radex`,
    description: seoContent?.description || `Sanierung & Badsanierung in ${city.name} aus einer Hand: Wohnungs-, Haus- & Altbausanierung, Heizung, Elektro & mehr vom SHK-Meisterbetrieb. Festpreis. Jetzt Beratung sichern!`,
    path: hubPath,
    image: city.heroImg,
    jsonLd: [buildFaqSchema(faqsData)]
  });

  const mainDecisionCards = serviceNavCards.slice(0, 2);
  const additionalServiceCards = serviceNavCards.slice(2);
  const cityServiceLinks = listCityServiceRoutes(cityId, seoContent);

  const summaryCards =
    seoContent?.summaryCards ??
    (seoContent?.serviceSections || []).slice(0, 8).map((section) => {
      const titleLower = section.title.toLowerCase();
      const imageMap = [
        ['bad', '/img/city-cards/badsanierung.webp'],
        ['wohnung', '/img/city-cards/wohnungssanierung.webp'],
        ['haus', '/img/city-cards/haussanierung.webp'],
        ['altbau', '/img/city-cards/altbausanierung.webp'],
        ['innenausbau', '/img/city-cards/innenausbau.webp'],
        ['heizung', '/img/city-cards/heizung-sanitaer.webp'],
        ['elektro', '/img/city-cards/elektrotechnik.webp'],
        ['energet', '/img/city-cards/energetische-sanierung.webp'],
        ['schimmel', '/img/city-cards/schimmel-asbest.webp'],
        ['asbest', '/img/city-cards/schimmel-asbest.webp'],
        ['gewerbe', '/img/city-cards/gewerbeumbau.webp'],
      ];
      const image = imageMap.find(([key]) => titleLower.includes(key))?.[1];
      return {
        title: section.title,
        target: section.title,
        image,
        imageAlt: section.title,
        bullets: (section.items || []).slice(0, 4),
      };
    });

  const resolveCardHref = (card) => {
    const service = resolveCardService(card);
    if (service) return buildCityServicePath(cityId, service.slug);
    return hubPath;
  };

  const SharedCTABlock = ({ isHero = false, centered = false }) => (
    <div
      className={`br-hero-actions br-city-hero-actions ${isHero ? '' : 'mt-8'}`}
      style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: centered ? 'center' : isHero ? 'flex-start' : 'center' }}
    >
      <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung</a>
      <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
        Projektfotos per WhatsApp senden <MessageSquare size={18} color="#25D366" style={{ marginLeft: '8px' }} />
      </a>
      {isHero ? (
        <a href="tel:+496074960620" className="br-btn-call">
          <Phone size={18} /> Jetzt anrufen
        </a>
      ) : (
        <a href="tel:+496074960620" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #d1d5db', color: '#111827', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none' }}>
          <Phone size={18} /> Jetzt anrufen
        </a>
      )}
    </div>
  );

  return (
    <main className="badsanierung-page">
      {/* 1. HERO + TRUST BAR */}
      <section className="br-city-hero" style={{ backgroundImage: `url(${city.heroImg})` }}>
        <div className="container br-city-hero-inner">
          <div className="br-city-hero-box">
            <h1 className="br-hero-title">
              {seoContent?.heroTitle || 'Sanierung & Badsanierung'} <br />
              <span>{seoContent?.heroTitleAccent || `in ${city.name}`}</span>
            </h1>
            <p className="br-hero-subtitle">
              {seoContent?.heroSubtitle || `Ihr lokaler Experte für hochwertige Umbauten, Badsanierungen und Haustechnik in ${city.name} und Umgebung.`}
            </p>
            <p className="br-hero-text">
              {seoContent?.heroText || `Von der ersten Planung bis zur schlüsselfertigen Übergabe unterstützen wir Sie bei Ihrem Projekt in ${city.name} – zum Festpreis und aus einer Hand.`}
            </p>
            <SharedCTABlock isHero={true} />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
      </section>

      <section className="br-city-trust-bar">
        <div className="container">
          <div className="br-trust-footer">
            <div className="br-trust-item">
              <ShieldCheck size={28} />
              <div>
                <strong>SHK-Meisterbetrieb</strong>
                <span>Zugelassener Fachbetrieb</span>
              </div>
            </div>
            <div className="br-trust-item">
              <Users size={28} />
              <div>
                <strong>Generalunternehmer</strong>
                <span>Alles aus einer Hand</span>
              </div>
            </div>
            <div className="br-trust-item">
              <Award size={28} />
              <div>
                <strong>500+</strong>
                <span>Abgeschlossene Projekte</span>
              </div>
            </div>
            <div className="br-trust-item">
              <MapPin size={28} />
              <div>
                <strong>60+</strong>
                <span>Betreute Städte</span>
              </div>
            </div>
            <div className="br-trust-item">
              <CheckCircle2 size={28} />
              <div>
                <strong>Festpreisangebot</strong>
                <span>100% Transparenz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN DECISION + ADDITIONAL SERVICES */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Wobei dürfen wir Sie unterstützen?</h2>
            <p className="br-section-subtitle">
              Wir bieten das gesamte Spektrum der Immobilienmodernisierung in {city.name} und Umgebung.
            </p>
          </div>

          <div className="br-decision-grid mb-12">
            {mainDecisionCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link key={idx} to={card.to} className="br-decision-card">
                  <div className="br-decision-icon">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3>{card.title} in {city.name}</h3>
                  <p>{card.desc}</p>
                  <span className="br-btn-orange">{card.cta}</span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mb-8">
            <h3 className="br-section-title" style={{ fontSize: '22px' }}>Weitere Leistungen rund um Ihr Projekt</h3>
          </div>

          <div className="br-service-icons-grid">
            {additionalServiceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link key={idx} to={card.to} className="br-service-icon-card">
                  <div className="br-service-icon-wrap">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span>{card.title}</span>
                </Link>
              );
            })}
          </div>

          <div className="br-cta-banner br-cta-banner--light">
            <h3>Planen Sie ein Projekt in {city.name}?</h3>
            <p>Senden Sie uns Fotos und erhalten Sie eine professionelle Ersteinschätzung.</p>
            <SharedCTABlock centered />
          </div>
        </div>
      </section>

      {/* 3. MEET RADEX */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">RADEX kennenlernen</h2>
            <p className="br-section-subtitle">
              Lernen Sie unser Team kennen und erfahren Sie, wie wir Sanierungsprojekte in {city.name} umsetzen.
            </p>
          </div>

          <div className="br-meet-grid">
            <div className="br-meet-video">
              {/* <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&controls=0&iv_load_policy=3&playsinline=1&fs=0`}
                title="Radex Unternehmenspräsentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}

              <video
                ref={videoRef}
                src={testVideo}
                controls
                autoPlay
                muted
                playsInline
                poster="/img/radex-unternehmenspraesentation-poster.webp"
              />

            </div>

            <div className="br-meet-profile">
              <img
                // src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                src={personImage}
                alt="Bernd Knoop, SHK-Meister und Betriebsleiter"
                className="br-meet-photo"
                loading="lazy"
              />
              <div className="br-meet-quote">
                Als SHK-Meisterbetrieb und Generalunternehmer begleiten wir Ihr Sanierungsprojekt in {city.name} von der ersten Idee bis zur schlüsselfertigen Übergabe – persönlich, transparent und zum Festpreis.
                <div className="br-meet-name">Bernd Knoop · SHK-Meister & Betriebsleiter</div>
              </div>
              <a href="#kontakt" className="br-btn-orange" style={{ alignSelf: 'flex-start' }}>
                Projekt besprechen <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY RADEX */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer in {city.name} Radex wählen</h2>
          </div>
          <div className="br-benefits-grid">
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><Award size={40} color="#f97316" /></div>
              <h3>Eingetragener<br />SHK-Meisterbetrieb</h3>
              <p>Zertifizierter Handwerksbetrieb, der fachgerechte Arbeit nach aktuellen deutschen Normen und Vorschriften liefert.</p>
            </div>
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><Users size={40} color="#f97316" /></div>
              <h3>Alles aus<br />einer Hand</h3>
              <p>Ein zentraler Ansprechpartner für Planung, Koordination und Ausführung Ihres Projekts in {city.name}.</p>
            </div>
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><CheckCircle2 size={40} color="#f97316" /></div>
              <h3>Saubere<br />Sanierung</h3>
              <p>Professionelle Staubschutzsysteme sorgen für einen sauberen Ablauf direkt vor Ort.</p>
            </div>
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><ShieldCheck size={40} color="#f97316" /></div>
              <h3>Festpreis-<br />Garantie</h3>
              <p>Transparente Angebote ohne versteckte Kosten oder unerwartete Extras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Aktuelle Baustellen & abgeschlossene Projekte</h2>
            <p className="br-section-subtitle">
              Ein Auszug aus unseren abgeschlossenen und laufenden Sanierungsprojekten im Rhein-Main-Gebiet.
            </p>
          </div>

          <div className="br-city-projects-grid">
            {projectCards.map((project, idx) => (
              <a
                key={idx}
                href={RADEX_LIVE_URL}
                className="br-project-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="br-project-img" style={{ backgroundImage: `url(${project.img})` }}>
                  {project.badge === 'live' && <span className="br-project-badge live">Live</span>}
                  {project.badge === 'before-after' && <span className="br-project-badge before-after">Vorher & Nachher</span>}
                </div>
                <div className="br-project-info">
                  <h4>{project.title}</h4>
                  <p>{project.type} · {city.name}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={RADEX_LIVE_URL} className="br-btn-navy" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              Alle Projekte ansehen <ArrowRight size={18} />
            </a>
          </div>

          <div className="br-cta-banner br-cta-banner--warm">
            <h3>Noch Fragen zu Ihrem Projekt in {city.name}?</h3>
            <p>Senden Sie uns Fotos und erhalten Sie eine professionelle Ersteinschätzung.</p>
            <SharedCTABlock centered />
          </div>
        </div>
      </section>

      {/* 6. CALCULATOR + QUICK HELP */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="br-split-tools">
            <div className="br-calc-promo">
              <h3>Was kostet Ihre Sanierung?</h3>
              <p>Nutzen Sie unseren Sanierungskosten-Rechner für eine erste Orientierung zu Ihrem Projekt in {city.name}.</p>
              <div className="br-calc-promo-icon">

                <Calculator size={70} color="#170cea" />
              </div>
              
              <a href="#sanierungskosten-rechner" className="br-btn-orange">
                Kosten berechnen <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </a>
            </div>

            <div className="br-quick-help-panel">
              <h3>Benötigen Sie schnelle Hilfe in {city.name}?</h3>
              <p style={{ color: 'var(--br-text-light)', fontSize: '14px', marginBottom: '8px' }}>
                Für dringende Fälle bieten wir priorisierte Termine und schnelle Reaktionszeiten.
              </p>

              <div className="br-quick-help-item">
                <div className="br-quick-help-icon">
                  <AlertTriangle size={22} color="#ea580c" />
                </div>
                <div>
                  <h4>Notfall-Badservice</h4>
                  <p>Schnelle Hilfe bei Wasserschäden, defekten Leitungen oder akuten Sanitärproblemen.</p>
                  <a href="tel:+496074960620" className="br-quick-help-link">Jetzt anrufen &rarr;</a>
                </div>
              </div>

              <div className="br-quick-help-item">
                <div className="br-quick-help-icon">
                  <Wrench size={22} color="#ea580c" />
                </div>
                <div>
                  <h4>Express-Sanierung</h4>
                  <p>Schnelle Projektabwicklung für dringende Modernisierungen mit kurzer Vorlaufzeit.</p>
                  <a href="#kontakt" className="br-quick-help-link">Termin anfragen &rarr;</a>
                </div>
              </div>

              <div className="br-quick-help-item">
                <div className="br-quick-help-icon">
                  <CheckCircle2 size={22} color="#ea580c" />
                </div>
                <div>
                  <h4>Schadstoff-Sofortbefundung</h4>
                  <p>Schnelle Einschätzung bei Schimmelbefall oder Verdacht auf Asbest in Bestandsgebäuden.</p>
                  <Link to="/schadstoffsanierung-rhein-main" className="br-quick-help-link">Befundung anfragen &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SanierungskostenRechner defaultType="bad" compact showIntro={false} />

      {/* 7. PROCESS */}
      <section className="br-section br-city-process">
        <div className="container">
          <h2 className="br-section-title text-center mb-12">So läuft Ihr Projekt ab</h2>

          <div className="br-city-process-row">
            {processSteps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="br-city-process-step">
                  <div className="br-city-process-icon">{step.icon}</div>
                  <h4>{step.title}</h4>
                </div>
                {idx < processSteps.length - 1 && (
                  <ArrowRight className="br-city-process-arrow" size={20} />
                )}
              </div>
            ))}
            <a href="#kontakt" className="btn br-btn-orange br-city-process-cta">
              Beratung vereinbaren
            </a>
          </div>
        </div>
      </section>

      {/* 8. SEO CONTENT – light overview + slide-over details; service pages hold full text */}
      {seoContent && (
        <section id="seo-informationen" className="br-section br-bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <button
                type="button"
                className="br-seo-heading-toggle"
                onClick={() => setSeoPanelOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={seoPanelOpen}
              >
                <span>Planung, Kosten & wichtige Informationen</span>
                <Info size={26} />
              </button>
              <h2 className="br-section-title" style={{ marginTop: '20px' }}>
                {seoContent.summaryIntroTitle || 'Finden Sie den passenden Sanierungsbereich für Ihr Projekt.'}
              </h2>
              <p className="br-section-subtitle br-section-subtitle--wide">
                {seoContent.summaryIntroText ||
                  `Ob Badsanierung, Wohnungssanierung, Haussanierung oder weitere Leistungen – die folgenden Bereiche führen direkt zu den passenden Informationen für Ihr Projekt in ${city.name}.`}
              </p>
              <button
                type="button"
                className="br-city-seo-panel-trigger"
                onClick={() => setSeoPanelOpen(true)}
              >
                Zusätzliche Informationen öffnen
              </button>
            </div>

            {summaryCards.length > 0 && (
              <div className="br-city-seo-summary-block">
                <div className="br-city-summary-grid">
                  {summaryCards.map((card) => {
                    const href = resolveCardHref(card);
                    return (
                      <Link key={card.title} to={href} className="br-city-summary-card">
                        {card.image && (
                          <div className="br-city-summary-img-wrap">
                            <img
                              src={card.image}
                              alt={card.imageAlt || card.title}
                              className="br-city-summary-img"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="br-city-summary-body">
                          <h3>{card.title}</h3>
                          {card.bullets?.length > 0 && (
                            <ul>
                              {card.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                          <span className="br-city-summary-cta">Mehr erfahren</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* SEO-indexable copy stays in the DOM; shown in the slide-over for visitors */}
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
              className="br-city-seo-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="city-seo-panel-title"
            >
              <div className="br-city-seo-panel-header">
                <h2 id="city-seo-panel-title">Planung, Kosten & wichtige Informationen</h2>
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
                {seoContent.intro && (
                  <div className="br-city-seo-panel-block">
                    <h3>Sanierung in {city.name} mit Radex</h3>
                    <p>{seoContent.intro}</p>
                    <p className="br-city-seo-panel-note">
                      Ausführliche Leistungsbeschreibungen öffnen Sie über die Karten oder die Links unten – jeweils auf einer eigenen, SEO-freundlichen Seite.
                    </p>
                  </div>
                )}

                {cityServiceLinks.length > 0 && (
                  <div className="br-city-seo-panel-block">
                    <h3>Leistungsseiten für {city.name}</h3>
                    <ul className="br-city-seo-panel-links">
                      {cityServiceLinks.map((item) => (
                        <li key={item.slug}>
                          <Link to={item.path} onClick={() => setSeoPanelOpen(false)}>
                            {item.label}
                            <ArrowRight size={16} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {seoContent.districtDetails?.length > 0 && (
                  <div className="br-city-seo-panel-block">
                    <h3>Stadtteile in {city.name}</h3>
                    {seoContent.districtDetails.map((district) => (
                      <div key={district.name} className="br-city-seo-district" style={{ marginBottom: '14px' }}>
                        <strong>Sanierung in {district.name}</strong>
                        <p>{district.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                <a href="#faq" className="br-city-seo-panel-faq" onClick={() => setSeoPanelOpen(false)}>
                  Häufige Fragen ansehen <ChevronDown size={18} />
                </a>
                <a href="#kontakt" className="br-city-seo-article-cta" onClick={() => setSeoPanelOpen(false)}>
                  Kostenlose Beratung anfragen <ArrowRight size={16} />
                </a>
              </div>
            </aside>
          </div>
        </section>
      )}

      {/* 9. FAQ */}
      <section id="faq" className="br-section br-city-faq">
        <div className="container">
          <h2 className="br-section-title">Häufige Fragen</h2>
          <div className="br-faq-grid">
            {faqsData.map((faq, i) => (
              <div key={i} className="home-faq-item">
                <button
                  className="home-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '15px', textAlign: 'left' }}>{faq.q}</span>
                  <ChevronDown
                    style={{
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                    color="#9ca3af"
                    size={18}
                  />
                </button>
                <div
                  className="home-faq-answer"
                  style={{
                    display: 'grid',
                    gridTemplateRows: openFaq === i ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease',
                    padding: 0
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ paddingBottom: '18px', color: '#4b5563', fontSize: '14px', lineHeight: '1.65' }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT */}
      <section id="kontakt" className="br-section">
        <div className="container">
          <h2 className="br-section-title" style={{ textAlign: 'left' }}>Ihr persönlicher Ansprechpartner</h2>
          <p className="br-city-contact-intro">
            Sie möchten Ihr Projekt besprechen? Unser Team berät Sie telefonisch, per WhatsApp oder persönlich vor Ort in {city.name}.
          </p>

          <div className="br-city-contact-split">
            <div className="br-city-contact-cards">
              <div className="br-city-contact-card">
                <div className="br-city-contact-card-icon">
                  <Phone size={28} strokeWidth={1.5} />
                </div>
                <h4>Telefon</h4>
                <p>06074 960620</p>
                <a href="tel:+496074960620" className="link-navy">Jetzt anrufen</a>
              </div>

              <div className="br-city-contact-card">
                <div className="br-city-contact-card-icon">
                  <MessageSquare size={28} color="#25D366" strokeWidth={1.5} />
                </div>
                <h4>WhatsApp</h4>
                <p>Fotos & Projektinfos senden</p>
                <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="link-green">Jetzt senden</a>
              </div>

              <div className="br-city-contact-card">
                <div className="br-city-contact-card-icon">
                  <Mail size={28} strokeWidth={1.5} />
                </div>
                <h4>Anfrageformular</h4>
                <p>Kostenlose Beratung anfragen</p>
                <a href="mailto:info@radex-objektmanagement.de" className="link-orange">Zur Anfrage</a>
              </div>
            </div>

            <div className="br-city-contact-hero-img">
              <img
                src={Komplettbadsanierung}
                alt={`Modernes Badezimmer nach Radex Sanierung in ${city.name}`}
                loading="lazy"
                height="210"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
