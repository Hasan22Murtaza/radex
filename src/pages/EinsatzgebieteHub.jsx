import { useEffect } from 'react';
import { MapPin, ArrowRight, Camera, MessageSquare, Phone, Award, Users, ShieldCheck } from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo from '../useSeo';
import { featuredCities, additionalCities } from '../data/cities';

export default function EinsatzgebieteHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: "Einsatzgebiete | Sanierung im Rhein-Main-Gebiet | Radex",
    description: "Radex saniert in über 60 Städten im Rhein-Main-Gebiet: Frankfurt, Offenbach, Darmstadt, Wiesbaden, Mainz, Hanau, Aschaffenburg, Rödermark u. v. m. Jetzt vor Ort beraten lassen!",
    path: "/einsatzgebiete-rhein-main"
  });

  const cities = featuredCities;

  return (
    <main className="badsanierung-page">
      {/* 1. HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Sanierung & Renovierung im<br/>
              <span>Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">
              Wir sind Ihr lokaler Ansprechpartner für professionelle Umbauten, Modernisierungen und Sanierungen in der gesamten Region.
            </p>
            <p className="br-hero-text">
              Als zertifizierter SHK-Meisterbetrieb mit über 500 abgeschlossenen Projekten in mehr als 60 Städten stehen wir für Premium-Qualität und Festpreisgarantie direkt in Ihrer Nähe.
            </p>
            <div className="br-hero-actions" style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
              <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
              <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
                Fotos senden <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
              </a>
              <a href="tel:+496074960620" className="btn" style={{display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1px solid #111827', color: '#111827', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold'}}>
                <Phone size={18} /> Jetzt anrufen
              </a>
            </div>
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: 'url(/img/opt_fra.webp)' }}>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="br-section" style={{padding: '40px 0', borderBottom: '1px solid #e5e7eb'}}>
        <div className="container">
          <div className="br-trust-footer">
            <div className="br-trust-item">
              <Award size={28} color="#f97316" />
              <strong>500+</strong>
              <span>Abgeschlossene Projekte</span>
            </div>
            <div className="br-trust-item">
              <MapPin size={28} color="#f97316" />
              <strong>60+</strong>
              <span>Betreute Städte</span>
            </div>
            <div className="br-trust-item">
              <ShieldCheck size={28} color="#f97316" />
              <strong>SHK-Meister</strong>
              <span>Zugelassener Fachbetrieb</span>
            </div>
            <div className="br-trust-item">
              <Users size={28} color="#f97316" />
              <strong>50km</strong>
              <span>Einsatzradius in der Region</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CITIES GRID */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Unsere Haupt-Einsatzgebiete</h2>
            <p className="br-section-subtitle">
              Finden Sie lokale Referenzen und Leistungen für Ihre Stadt.
            </p>
          </div>
          
          <div className="br-projects-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            {cities.map((city, idx) => (
              <Link key={idx} to={city.link} className="br-project-card" style={{textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb'}}>
                <div className="br-project-img" style={{ backgroundImage: `url(${city.img})`, height: '220px' }}>
                  <div style={{position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(255,255,255,0.9)', padding: '6px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <MapPin size={16} color="#f97316" /> {city.name}
                  </div>
                </div>
                <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                  <h4 style={{fontSize: '18px', marginBottom: '8px', color: '#111827'}}>Sanierung in {city.name}</h4>
                  <p style={{color: '#4b5563', fontSize: '14px', marginBottom: '16px'}}>
                    Badsanierung, Komplettsanierung und Haustechnik für Immobilien in {city.name} und Umgebung.
                  </p>
                  <span style={{color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px'}}>
                    Regionale Projekte ansehen <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL CITIES */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Weitere Einsatzgebiete</h2>
            <p className="br-section-subtitle">
              Auch in diesen Städten und Gemeinden sind wir regelmäßig für unsere Kunden im Einsatz.
            </p>
          </div>

          <div className="br-projects-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'}}>
            {additionalCities.map((city, idx) => (
              <Link
                key={idx}
                to={city.link}
                className="br-project-card"
                style={{textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb'}}
              >
                <div className="br-project-img" style={{ backgroundImage: `url(${city.img})`, height: '160px' }}>
                  <div style={{position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(255,255,255,0.9)', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <MapPin size={14} color="#f97316" /> {city.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT / CTA */}
      <section id="kontakt" className="br-section">
        <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2 className="br-section-title">Ist Ihre Stadt nicht dabei?</h2>
          <p className="br-section-subtitle" style={{marginBottom: '30px'}}>
            Wir sind im gesamten Rhein-Main-Gebiet und darüber hinaus tätig. Kontaktieren Sie uns für Ihr Projekt – wir prüfen gerne die Realisierbarkeit.
          </p>
          
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px'}}>
            <button className="btn br-btn-orange">Kostenlose Beratung anfordern &rarr;</button>
            <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              Fotos senden <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
            </a>
            <a href="tel:+496074960620" className="btn" style={{display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #d1d5db', color: '#111827', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none'}}>
              <Phone size={18} /> Jetzt anrufen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
