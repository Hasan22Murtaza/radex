import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo_neu.webp';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="header" style={{
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.95)'
      }}>
        <div className="container header-container">
          <a href="#" className="logo-link">
            <img src={logo} alt="Radex Objektmanagement GmbH Logo" width="140" height="42" />
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#" className="nav-link">Startseite</a></li>
              <li><a href="#vorteile" className="nav-link">Vorteile</a></li>
              <li><a href="#planung" className="nav-link">Planung</a></li>
              <li><a href="#ablauf" className="nav-link">Ablauf</a></li>
              <li><a href="#kosten" className="nav-link">Kosten</a></li>
              <li><a href="#beispiele" className="nav-link">Projekte</a></li>
              <li><a href="#faq" className="nav-link">FAQ</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:+496074960620" className="phone-action">
              <Phone size={18} />
              <span>06074 960620</span>
            </a>
            <a href="#kontakt" className="btn btn--primary">
              Kostenlose Beratung
            </a>
          </div>

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menü öffnen">
            {isOpen ? <X size={26} color="var(--navy)" /> : <Menu size={26} color="var(--navy)" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-drawer-links">
          <li><a href="#" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Startseite</a></li>
          <li><a href="#vorteile" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Vorteile</a></li>
          <li><a href="#planung" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Planung</a></li>
          <li><a href="#ablauf" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Ablauf</a></li>
          <li><a href="#kosten" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Kosten</a></li>
          <li><a href="#beispiele" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Projekte</a></li>
          <li><a href="#faq" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>FAQ</a></li>
        </ul>
        <div className="mobile-drawer-actions">
          <a href="tel:+496074960620" className="btn btn--secondary" onClick={() => setIsOpen(false)} style={{ width: '100%' }}>
            <Phone size={16} />
            <span>06074 960620 Anrufen</span>
          </a>
          <a href="#kontakt" className="btn btn--primary" onClick={() => setIsOpen(false)} style={{ width: '100%' }}>
            Kostenlose Beratung
          </a>
        </div>
      </div>
    </>
  );
}
