import React from 'react';
import { Award, ShieldCheck, CheckSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/bathroom_hero.png';

export default function Hero() {
  return (
    <section className="hero">
      {/* Decorative ambient background glows */}
      <div className="glow-blob glow-blob--1"></div>
      <div className="glow-blob glow-blob--2"></div>

      <div className="container hero-container">
        <div className="hero-content reveal">
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

          {/* Meisterversprechen Panel on the left side for optimal space utilization */}
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
            <a href="#kontakt" className="btn btn--primary">
              Kostenlose Beratung anfragen
            </a>
            <a href="#kosten" className="btn btn--secondary">
              Kosten-Rechner starten
            </a>
          </div>
        </div>

        <div className="hero-right reveal">
          <div className="hero-image-card">
            {/* The main featured image, 100% visible and uncropped */}
            <div className="hero-image-wrapper">
              <img src={heroBg} alt="Badsanierung im Rhein-Main-Gebiet durch Radex" />
              <div className="hero-image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
