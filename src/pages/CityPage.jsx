import { useEffect, useState, useRef } from 'react';
import { Link } from '../router';
import {
  Camera, MessageSquare, Phone, CheckCircle2, ArrowRight, Award, Users, ShieldCheck,
  ChevronDown, ChevronRight, AlertTriangle, Wrench, Bath, Building2, Home, Landmark, Flame, Zap,
  Briefcase, Calculator, FileText, Hammer, MapPin, Mail
} from 'lucide-react';
import '../badsanierung.css';
import '../home.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';
import { citySeoContent } from '../data/citySeoContent';
import { cityDataMap } from '../data/cities';
import testVideo from '../assets/test.mp4';
import personImage from '../assets/Screenshot_5.png';

const VIDEO_ID = '4A0f7A5mPLI';

const serviceNavCards = [
  { to: "/badsanierung-rhein-main", title: "Badsanierung", desc: "Komplette Bädermodernisierung, barrierefreie Umbauten und Wellnessoasen.", cta: "Badsanierung planen", icon: Bath },
  { to: "/sanierung/wohnungssanierung", title: "Wohnungssanierung", desc: "Modernisierung von Wohnungen inklusive Innenausbau und Bodengestaltung.", cta: "Wohnung sanieren", icon: Building2 },
  { to: "/sanierung/haussanierung", title: "Haussanierung", desc: "Ganzheitliche Sanierung von Einfamilienhäusern und Mehrfamilienhäusern.", cta: "Haussanierung entdecken", icon: Home },
  { to: "/sanierung/altbausanierung", title: "Altbausanierung", desc: "Fachgerechte Modernisierung von denkmalgeschützten Gebäuden und Altbauten.", cta: "Mehr zur Altbausanierung", icon: Landmark },
  { to: "/heizung-sanitaer-rhein-main", title: "Heizung & Sanitär", desc: "Heizungsmodernisierung, Wärmepumpen und Sanitärinstallationen.", cta: "Heizung & Sanitär modernisieren", icon: Flame },
  { to: "/elektroinstallation-rhein-main", title: "Elektrotechnik", desc: "Erneuerung von Stromleitungen und moderner Gebäudetechnik.", cta: "Elektrik aufrüsten", icon: Zap },
  { to: "/schadstoffsanierung-rhein-main", title: "Schimmel- & Schadstoffsanierung", desc: "Professionelle Beseitigung von Schimmel und Gefahrstoffen (Asbest).", cta: "Befundung anfragen", icon: AlertTriangle },
  { to: "/gewerbe-objektsanierung-rhein-main", title: "Gewerbesanierung", desc: "Büroumbau, Mieterausbau und Sanierung von Gewerbeflächen.", cta: "Gewerbeprojekt besprechen", icon: Briefcase }
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

function splitIntoColumns(items, columnCount = 3) {
  const columns = Array.from({ length: columnCount }, () => []);
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });
  return columns;
}

function SeoSectionBody({ section }) {
  return (
    <div className="br-seo-grid-body">
      {section.description && <p>{section.description}</p>}
      {section.items?.length > 0 && (
        <ul>
          {section.items.map((item, itemIdx) => (
            <li key={itemIdx}>{item}</li>
          ))}
        </ul>
      )}
      {section.closingNote && <p>{section.closingNote}</p>}
      {section.content && <p>{section.content}</p>}
      {section.districts?.map((district, idx) => (
        <div key={idx} style={{ marginTop: idx > 0 ? '16px' : 0 }}>
          <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '6px' }}>
            Sanierung in {district.name}
          </strong>
          <p style={{ margin: 0 }}>{district.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function CityPage({ cityId }) {
  const city = cityDataMap[cityId] || { name: "Rhein-Main-Gebiet", heroImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600", districts: [] };
  const seoContent = citySeoContent[cityId];

  const [openFaq, setOpenFaq] = useState(null);
  const [seoOpen, setSeoOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityId]);

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
    title: `Sanierung ${city.name} | Bad, Wohnung & Haus modernisieren | Radex`,
    description: `Sanierung & Badsanierung in ${city.name} aus einer Hand: Wohnungs-, Haus- & Altbausanierung, Heizung, Elektro & mehr vom SHK-Meisterbetrieb. Festpreis. Jetzt Beratung sichern!`,
    path: city.path,
    image: city.heroImg,
    jsonLd: [buildFaqSchema(faqsData)]
  });

  const mainDecisionCards = serviceNavCards.slice(0, 2);
  const additionalServiceCards = serviceNavCards.slice(2);

  const seoGridItems = [];
  if (seoContent?.serviceSections) {
    seoContent.serviceSections.forEach((section) => {
      seoGridItems.push({ type: 'section', ...section });
    });
  } else if (seoContent?.serviceTags) {
    seoContent.serviceTags.forEach((tag) => {
      seoGridItems.push({ type: 'tag', title: tag, content: tag });
    });
  }
  if (seoContent?.intro) {
    seoGridItems.push({ type: 'intro', title: 'Weitere Informationen', content: seoContent.intro });
  }
  if (seoContent?.districtDetails?.length) {
    seoGridItems.push({
      type: 'districts',
      title: `Stadtteile in ${city.name}`,
      districts: seoContent.districtDetails
    });
  }
  seoGridItems.push({ type: 'faq-link', title: 'FAQ' });

  const seoColumns = splitIntoColumns(seoGridItems, 3);

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
              Sanierung & Badsanierung <br />
              <span>in {city.name}</span>
            </h1>
            <p className="br-hero-subtitle">
              Ihr lokaler Experte für hochwertige Umbauten, Badsanierungen und Haustechnik in {city.name} und Umgebung.
            </p>
            <p className="br-hero-text">
              Von der ersten Planung bis zur schlüsselfertigen Übergabe unterstützen wir Sie bei Ihrem Projekt in {city.name} – zum Festpreis und aus einer Hand.
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
                style={{ width: '100%', height: '100%', borderRadius: '8px' }}
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
              <div key={idx} className="br-project-card">
                <div className="br-project-img" style={{ backgroundImage: `url(${project.img})` }}>
                  {project.badge === 'live' && <span className="br-project-badge live">Live</span>}
                  {project.badge === 'before-after' && <span className="br-project-badge before-after">Vorher & Nachher</span>}
                </div>
                <div className="br-project-info">
                  <h4>{project.title}</h4>
                  <p>{project.type} · {city.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/sanierung-rhein-main" className="br-btn-navy">
              Alle Projekte ansehen <ArrowRight size={18} />
            </Link>
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

      {/* 8. SEO CONTENT */}
      {seoContent && (
        <section className="br-section br-bg-light">
          <div className="container">
            <h2 className="br-section-title text-center mb-12">
              <button
                type="button"
                className="br-seo-heading-toggle"
                onClick={() => setSeoOpen((prev) => !prev)}
                aria-expanded={seoOpen}
              >
                <span>Planung, Kosten & wichtige Informationen</span>
                <ChevronDown className={seoOpen ? 'open' : ''} size={20} />
              </button>
            </h2>

            <div className={`br-seo-grid ${seoOpen ? 'open' : 'collapsed'}`}>
              {seoColumns.map((column, colIdx) => (
                <div key={colIdx} className="br-seo-grid-col">
                  {column.map((item, idx) => {
                    if (item.type === 'faq-link') {
                      return (
                        <a key={idx} href="#faq" className="br-seo-grid-link">
                          <span>{item.title}</span>
                          <ChevronRight size={16} />
                        </a>
                      );
                    }

                    return (
                      <details key={idx} className="br-seo-grid-item">
                        <summary>
                          <span>{item.title}</span>
                          <ChevronRight size={16} />
                        </summary>
                        <SeoSectionBody section={item} />
                      </details>
                    );
                  })}
                </div>
              ))}
            </div>
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
                src="/img/Komplettbadsanierung.webp"
                alt={`Modernes Badezimmer nach Radex Sanierung in ${city.name}`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
