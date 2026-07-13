import { Link } from '../router';
import { Camera, MessageSquare, ArrowRight, Bath, Building2 } from 'lucide-react';

const HERO_IMAGE = '/img/home-hero.webp';

export default function Hero() {
  const quickLinks = [
    { icon: <Bath size={20} color="#f97316" />, label: 'Badsanierung', to: '/badsanierung-rhein-main' },
    { icon: <Building2 size={20} color="#f97316" />, label: 'Sanierung', to: '/sanierung-rhein-main' },
  ];

  return (
    <section className="home-hero">
      <div
        className="home-hero-bg"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        role="img"
        aria-label="Modernes deutsches Wohngebäude nach hochwertiger Sanierung"
      />

      <div className="home-hero-overlay" />

      <div className="container relative z-20">
        <div className="home-hero-content">
          <h1 className="home-hero-title">
            Wie können wir <br />
            Ihnen helfen?
          </h1>

          <p className="home-hero-desc">
            <strong>Radex Objektmanagement GmbH</strong> – SHK-Meisterbetrieb und Generalunternehmer für
            Badsanierungen, Sanierungen und Modernisierungen im gesamten Rhein-Main-Gebiet. Planung,
            Koordination und Ausführung aus einer Hand – mit festen Ansprechpartnern und Festpreisangebot.
          </p>

          <div className="home-hero-quicklinks">
            {quickLinks.map((item, idx) => (
              <Link key={idx} to={item.to} className="home-hero-quicklink">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="home-hero-actions">
            <a href="#kontakt" className="home-btn-orange" style={{ boxShadow: '0 10px 15px -3px rgba(249,115,22,0.3)' }}>
              Projekt anfragen <ArrowRight size={18} />
            </a>
            <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="home-btn-white">
              WhatsApp schreiben <MessageSquare size={18} color="#25D366" />
            </a>
          </div>

          <div className="home-hero-photo-hint">
            <Camera size={16} />
            <span>Fotos senden. Erste Einschätzung erhalten.</span>
          </div>

          <div className="home-hero-trust">
            <div className="home-hero-trust-item">
              <strong>500+</strong>
              <span>Projekte abgeschlossen</span>
            </div>
            <div className="home-hero-trust-item">
              <strong>60+</strong>
              <span>Betreute Städte</span>
            </div>
            <div className="home-hero-trust-item">
              <strong>100%</strong>
              <span>Festpreisgarantie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
