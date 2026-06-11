import { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, CheckSquare, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBg from '../assets/bathroom_hero.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInitialPreview, setIsInitialPreview] = useState(true);
  const totalSlides = 2;

  const t1Ref = useRef(null);
  const t2Ref = useRef(null);

  // Quick onboarding preview sequence on first mount
  useEffect(() => {
    // Show Slide 2 after 1.8 seconds
    t1Ref.current = setTimeout(() => {
      setCurrentSlide(1);
    }, 1800);

    // Show Slide 1 again after 3.6 seconds, then hand control to standard loop
    t2Ref.current = setTimeout(() => {
      setCurrentSlide(0);
      setIsInitialPreview(false);
    }, 3600);

    return () => {
      if (t1Ref.current) clearTimeout(t1Ref.current);
      if (t2Ref.current) clearTimeout(t2Ref.current);
    };
  }, []);

  // Standard auto-play loop (only active when initial preview completes)
  useEffect(() => {
    if (isInitialPreview || isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [isInitialPreview, isHovered]);

  const cancelPreview = () => {
    if (t1Ref.current) clearTimeout(t1Ref.current);
    if (t2Ref.current) clearTimeout(t2Ref.current);
    setIsInitialPreview(false);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    cancelPreview();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    cancelPreview();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleDotClick = (idx) => {
    cancelPreview();
    setCurrentSlide(idx);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    cancelPreview();
  };

  return (
    <section 
      className="hero"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide 1 - Premium Badsanierung (Split Layout) */}
      <div className={`hero-slide hero-slide--split ${currentSlide === 0 ? 'active' : ''}`}>
        {/* Decorative ambient background glows */}
        <div className="glow-blob glow-blob--1"></div>
        <div className="glow-blob glow-blob--2"></div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge-container">
              <span className="hero-badge" style={{ backgroundColor: 'var(--gold-pale)', color: 'var(--gold-dark)', borderColor: 'rgba(200, 134, 26, 0.2)' }}>
                <Award size={14} />
                SHK Meisterbetrieb
              </span>
              <span className="hero-badge" style={{ backgroundColor: 'var(--gold-pale)', color: 'var(--gold-dark)', borderColor: 'rgba(200, 134, 26, 0.2)' }}>
                <ShieldCheck size={14} />
                TÜV-Geprüfte Qualität
              </span>
            </div>
            
            <h1 className="hero-title">
              Premium-Badsanierung im <span>Rhein-Main-Gebiet</span>
            </h1>

            {/* Quick trust checklist */}
            <div className="hero-check-row">
              <span className="hero-check-item">
                <CheckSquare size={16} className="text-gold" />
                Festpreisgarantie
              </span>
              <span className="hero-check-item">
                <CheckSquare size={16} className="text-gold" />
                Alles aus einer Hand
              </span>
              <span className="hero-check-item">
                <CheckSquare size={16} className="text-gold" />
                Staubarm
              </span>
            </div>

            <p className="hero-description">
              Wir verwandeln Ihr altes Bad in eine moderne Wohlfühloase – sauber, stressfrei und zum garantierten Festpreis. Als zugelassener Fachbetrieb planen, koordinieren und realisieren wir alle Gewerke schlüsselfertig aus einer Hand.
            </p>

            {/* Meisterversprechen Panel */}
            <div className="hero-left-trust-panel">
              <div className="hero-left-trust-title">
                <Sparkles size={16} color="var(--gold)" />
                <span>Das Radex-Meisterversprechen</span>
              </div>
              <ul className="hero-left-trust-list">
                <li>
                  <CheckCircle2 size={16} color="var(--gold)" />
                  <span>Eigener SHK Meister im Betrieb (Bernd Knoop)</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="var(--gold)" />
                  <span>Verbindliche Terminabsprachen &amp; zügige Abwicklung</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="var(--gold)" />
                  <span>Handwerk nach deutschen Qualitätsnormen &amp; Gewährleistung</span>
                </li>
              </ul>
            </div>
            
            <div className="hero-actions">
              <a href="#kontakt" className="btn btn--rainbow">
                Kostenlose Beratung anfragen
              </a>
              <a href="#weitere-leistungen" className="btn btn--secondary">
                Unsere Leistungen
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-card">
              <div className="hero-image-wrapper">
                <img src={heroBg} alt="Badsanierung im Rhein-Main-Gebiet durch Radex" />
                <div className="hero-image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 - Custom Woodwork & Interior (Full Bleed Centered Layout) */}
      <div className={`hero-slide hero-slide--full ${currentSlide === 1 ? 'active' : ''}`}>
        <div className="hero-slide-overlay"></div>
        <div className="hero-slide-centered-content">
          <div className="hero-badge-container">
            <span className="hero-badge hero-badge--wood">
              <Sparkles size={14} className="text-gold" />
              Möbelbau &amp; Innenausbau
            </span>
          </div>
          <h2 className="hero-slide-title-centered">
            Möbel nach Maß &amp;<br /><span>exklusiver Innenausbau</span>
          </h2>
          <p className="hero-slide-description-centered">
            Erleben Sie die Kunst meisterhaften Tischlerhandwerks für Küchen, Bäder und Wohnbereiche. Individuelle Holzarbeiten und maßgeschneiderte Raumkonzepte, die Ihren Wohntraum Wirklichkeit werden lassen.
          </p>
          <div className="hero-slide-actions-centered">
            <a href="#kontakt" className="btn btn--rainbow">
              Jetzt Beratung anfragen
            </a>
            <a href="#weitere-leistungen" className="btn btn--outline-white">
              Unsere Leistungen ansehen
            </a>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="hero-slider-dots">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            className={`hero-slider-dot ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Gehe zu Folie ${idx + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button className="hero-slider-arrow hero-slider-arrow--left" onClick={handlePrev} aria-label="Vorherige Folie">
        <ChevronLeft size={24} />
      </button>
      <button className="hero-slider-arrow hero-slider-arrow--right" onClick={handleNext} aria-label="Nächste Folie">
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
