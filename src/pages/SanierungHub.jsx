import { useEffect, useState } from 'react';
import { Camera, CheckCircle2, Users, ShieldCheck, ArrowRight, MessageSquare, ChevronDown, MapPin, Award, Phone } from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';
import NavLandingCards from '../components/NavLandingCards';
import { sanierungCards } from '../data/navigation';
import { SharedCTABlock, LandingContactSection } from '../components/landing/SharedLandingParts';
import { RADEX_LIVE_URL } from '../constants/brand';

const HERO_IMAGE = '/img/renov1.webp';

export default function SanierungHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState(null);

  const faqsData = [
    { q: "Was kostet eine Sanierung?", a: "Die Kosten hängen stark vom Sanierungsstau, der Fläche und Ihren Ausstattungswünschen ab. Eine einfache Renovierung startet oft bei 400€/m², eine Komplettsanierung liegt meist zwischen 1.200€ und 2.500€/m²." },
    { q: "Wie lange dauert eine Sanierung?", a: "Eine Wohnungssanierung dauert in der Regel 4-8 Wochen. Eine umfangreiche Haussanierung kann 3-6 Monate beanspruchen." },
    { q: "Wann lohnt sich eine Komplettsanierung?", a: "Wenn mehrere Gewerke (Heizung, Sanitär, Elektro) gleichzeitig veraltet sind, ist eine Komplettsanierung wirtschaftlicher und schneller als viele Einzelmaßnahmen." },
    { q: "Arbeitet Radex als Generalunternehmer?", a: "Ja, wir übernehmen die komplette Koordination aller Gewerke und bieten Ihnen einen zentralen Ansprechpartner sowie Festpreisgarantie." },
    { q: "In welchen Städten ist Radex tätig?", a: "Wir sanieren im gesamten Rhein-Main-Gebiet, unter anderem in Frankfurt, Wiesbaden, Mainz, Darmstadt, Offenbach und Hanau." }
  ];

  useSeo({
    title: 'Sanierung im Rhein-Main-Gebiet | Wohnung, Haus & Altbau sanieren | Radex',
    description: 'Sanierung im Rhein-Main-Gebiet vom SHK-meistergeführten Fachbetrieb. Wohnungssanierung, Haussanierung, Altbausanierung und Komplettsanierung aus einer Hand.',
    path: '/sanierung-rhein-main',
    image: HERO_IMAGE,
    jsonLd: [buildFaqSchema(faqsData)]
  });

  return (
    <main className="badsanierung-page">
      {/* 1. HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Sanierung im<br/>
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">
              Ihre Immobilie modernisieren. Professionell geplant. Aus einer Hand umgesetzt.
            </p>
            <p className="br-hero-text">
              Ob Wohnung, Einfamilienhaus, Altbau oder Mehrfamilienhaus – eine erfolgreiche Sanierung beginnt mit einer durchdachten Planung. Als SHK-meistergeführter Fachbetrieb koordiniert Radex alle notwendigen Gewerke und begleitet Sie von der ersten Beratung bis zur schlüsselfertigen Übergabe. Sie erhalten einen festen Ansprechpartner, transparente Abläufe und eine Sanierung, bei der alle Arbeiten optimal aufeinander abgestimmt sind.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="br-benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {[
              'SHK-meistergeführter Fachbetrieb',
              'Generalunternehmer für alle Gewerke',
              'Festpreisangebote',
              'Über 500 abgeschlossene Projekte',
              'Ein fester Ansprechpartner',
              'Im gesamten Rhein-Main-Gebiet im Einsatz',
            ].map((title) => (
              <div key={title} className="br-benefit-card" style={{ textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div className="br-benefit-icon"><Award size={32} color="#f97316" /></div>
                <h3 style={{ fontSize: '16px' }}>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NavLandingCards
        title="Welche Sanierung planen Sie?"
        subtitle="Jede Immobilie stellt andere Anforderungen. Wählen Sie den Bereich aus, der am besten zu Ihrem Projekt passt. Auf den jeweiligen Seiten finden Sie ausführliche Informationen zu Planung, Ablauf, Kosten und individuellen Lösungen."
        cards={sanierungCards}
      />

      <section className="br-section">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 className="br-section-title">Noch unsicher, welche Sanierung die richtige ist?</h2>
          <p className="br-section-subtitle mb-8">
            Nicht jedes Gebäude benötigt eine Komplettsanierung. Senden Sie uns Fotos Ihrer Immobilie per WhatsApp oder vereinbaren Sie eine persönliche Beratung. Gemeinsam entwickeln wir die passende Sanierungsstrategie für Ihr Projekt.
          </p>
          <SharedCTABlock centered />
        </div>
      </section>

      {/* 3. WHY RADEX */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer Radex wählen</h2>
          </div>
          <div className="br-benefits-grid">
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><Award size={40} color="#f97316" /></div>
              <h3>Eingetragener<br/>SHK-Meisterbetrieb</h3>
              <p>Zertifizierte Arbeit nach aktuellen technischen Richtlinien und Handwerksstandards.</p>
            </div>
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><Users size={40} color="#f97316" /></div>
              <h3>Alles aus<br/>einer Hand</h3>
              <p>Ein zentraler Ansprechpartner während des gesamten Projektverlaufs.</p>
            </div>
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><ShieldCheck size={40} color="#f97316" /></div>
              <h3>Festpreis-<br/>Garantie</h3>
              <p>Transparente Angebote ohne versteckte Überraschungen oder Nachforderungen.</p>
            </div>
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><CheckCircle2 size={40} color="#f97316" /></div>
              <h3>Staubarme<br/>Sanierung</h3>
              <p>Professionelle Schutzsysteme für saubere Baustellenumgebungen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURRENT PROJECTS */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Aktuelle Sanierungsprojekte</h2>
            <p className="br-section-subtitle">
              Verfolgen Sie laufende Sanierungen und erhalten Sie Einblicke, wie Immobilien im Rhein-Main-Gebiet modernisiert werden.
            </p>
          </div>
          
          <div className="br-projects-grid">
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Rohbauphase Komplettsanierung</h4>
                <p>Frankfurt am Main</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Wohnungssanierung Innenausbau</h4>
                <p>Wiesbaden</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Heizungsmodernisierung Altbau</h4>
                <p>Darmstadt</p>
              </div>
            </a>
          </div>
          
          <div className="text-center mt-10">
            <a href={RADEX_LIVE_URL} className="br-btn-outline-orange" style={{display: 'inline-block', textDecoration: 'none'}}>Alle Live-Projekte ansehen</a>
          </div>
        </div>
      </section>

      {/* 5. REFERENCES */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Abgeschlossene Sanierungen</h2>
            <p className="br-section-subtitle">
              Entdecken Sie fertiggestellte Wohnungssanierungen, Haussanierungen und Altbauaufwertungen aus der gesamten Region.
            </p>
            <div className="br-tabs">
              <div className="br-tab active">Wohnungssanierungen</div>
              <div className="br-tab">Haussanierungen</div>
              <div className="br-tab">Altbausanierungen</div>
            </div>
          </div>
          
          <div className="br-projects-grid">
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="br-project-info">
                <h4>Penthouse Modernisierung</h4>
                <p>Frankfurt Riedberg</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="br-project-info">
                <h4>Kernsanierung EFH</h4>
                <p>Bad Homburg</p>
              </div>
            </a>
            <a href={RADEX_LIVE_URL} className="br-project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="br-project-info">
                <h4>Denkmalschutz Villa</h4>
                <p>Kronberg</p>
              </div>
            </a>
          </div>
          <div className="text-center mt-10">
            <button className="br-btn-outline-orange">Alle Referenzen ansehen</button>
          </div>
        </div>
      </section>

      {/* 6. COSTS */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was kostet eine Sanierung?</h2>
            <p className="br-section-subtitle">
              Die Sanierungskosten hängen von der Größe, dem Zustand und dem Umfang Ihres Projekts ab. Detaillierte Kostenratgeber finden Sie unten.
            </p>
          </div>
          
          <div className="br-costs-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
            
            <Link to="/sanierung/wohnungssanierung" className="br-cost-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="br-cost-header">
                <h3>Wohnungssanierung Kosten</h3>
                <div className="br-cost-price" style={{fontSize: '15px', color: '#f97316', display: 'flex', alignItems: 'center', gap: '4px'}}>
                  Ratgeber lesen <ArrowRight size={14} />
                </div>
              </div>
              <div className="br-cost-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800)' }}></div>
            </Link>

            <Link to="/sanierung/haussanierung" className="br-cost-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="br-cost-header">
                <h3>Haussanierung Kosten</h3>
                <div className="br-cost-price" style={{fontSize: '15px', color: '#f97316', display: 'flex', alignItems: 'center', gap: '4px'}}>
                  Ratgeber lesen <ArrowRight size={14} />
                </div>
              </div>
              <div className="br-cost-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800)' }}></div>
            </Link>

            <Link to="/sanierung/altbausanierung" className="br-cost-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="br-cost-header">
                <h3>Altbausanierung Kosten</h3>
                <div className="br-cost-price" style={{fontSize: '15px', color: '#f97316', display: 'flex', alignItems: 'center', gap: '4px'}}>
                  Ratgeber lesen <ArrowRight size={14} />
                </div>
              </div>
              <div className="br-cost-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=800)' }}></div>
            </Link>
            
          </div>
        </div>
      </section>

      <SanierungskostenRechner defaultType="wohnung" compact />

      {/* 7. FAQ */}
      <section className="br-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-12">
            <h2 className="br-section-title">Häufig gestellte Fragen</h2>
          </div>
          <div className="br-faq-grid">
            {faqsData.map((faq, i) => (
              <div key={i} className="home-faq-item">
                <button 
                  className="home-faq-btn" 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span style={{fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left'}}>{faq.q}</span>
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
                  <div style={{overflow: 'hidden'}}>
                    <div style={{borderTop: '1px solid #f9fafb', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '16px', paddingRight: '16px', color: '#4b5563', fontSize: '15px', lineHeight: '1.6'}}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT */}
      <LandingContactSection
        title="Planen Sie Ihr Sanierungsprojekt"
        intro="Planen Sie eine Wohnungssanierung, Haussanierung oder Altbaumodernisierung? Senden Sie uns Fotos per WhatsApp oder vereinbaren Sie eine Vor-Ort-Beratung."
      />

      {/* 9. ADDITIONAL INFORMATION (SEO CONTENT) */}
      <section className="br-section">
        <div className="container">
          <details className="br-seo-dropdown">
            <summary>
              Weitere Informationen anzeigen
              <ChevronDown size={20} />
            </summary>
            <div className="br-seo-content">
              <div className="br-seo-text-block mb-8">
                <h3 className="mb-4 text-xl font-bold">Umfassende Sanierungsleistungen im Rhein-Main-Gebiet</h3>
                <p className="mb-4 text-gray-600">Als Generalunternehmer steuert Radex Ihr gesamtes Bauvorhaben. Von der Kernsanierung über energetische Maßnahmen bis hin zum schlüsselfertigen Innenausbau erhalten Sie alle Leistungen aus einer Hand.</p>
                <p className="text-gray-600">Wir unterstützen Sie bei der Beantragung von Fördermitteln (KfW/BAFA), koordinieren alle Gewerke und garantieren eine fachgerechte Umsetzung nach neuesten technischen Standards. Unser Einzugsgebiet umfasst Frankfurt, Wiesbaden, Mainz, Darmstadt und die gesamte umliegende Region.</p>
              </div>
              <p className="text-center mb-6 font-semibold">Hier finden Sie detaillierte Informationen zu folgenden Themen:</p>
              <div className="br-seo-tags">
                <span className="br-seo-tag">Kernsanierung</span>
                <span className="br-seo-tag">Sanierungsablauf</span>
                <span className="br-seo-tag">Fördermittel</span>
                <span className="br-seo-tag">Energieeffizienz</span>
                <span className="br-seo-tag">Modernisierungsratgeber</span>
                <span className="br-seo-tag">Technische Informationen</span>
              </div>
            </div>
          </details>

          <div className="br-trust-footer">
            <div className="br-trust-item">
              <Award size={32} color="#aaa" />
              <div>
                <strong>500+</strong>
                <span>Abgeschlossene Projekte</span>
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
