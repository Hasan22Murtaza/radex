import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState('');

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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileSubMenu = (menuName) => {
    if (mobileSubMenu === menuName) {
      setMobileSubMenu('');
    } else {
      setMobileSubMenu(menuName);
    }
  };

  return (
    <>
      <header className="header" style={{
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)'
      }}>
        <div className="header-container">
          <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Logo height={42} className="header-logo-svg" />
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Startseite</a></li>
              
              {/* Badsanierung Dropdown */}
              <li className="nav-item-dropdown">
                <a href="#leistungen-fokus" className="nav-link nav-link-with-icon" onClick={(e) => handleScrollToSection(e, 'leistungen-fokus')}>
                  Badsanierung <ChevronDown size={12} />
                </a>
                <div className="dropdown-menu">
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Komplettbadsanierung</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Badmodernisierung</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Barrierefreies Bad</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Gäste-WC sanieren</a>
                </div>
              </li>

              {/* Sanierung Dropdown (Shortened from Haussanierung) */}
              <li className="nav-item-dropdown">
                <a href="#leistungen-fokus" className="nav-link nav-link-with-icon" onClick={(e) => handleScrollToSection(e, 'leistungen-fokus')}>
                  Sanierung <ChevronDown size={12} />
                </a>
                <div className="dropdown-menu">
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Wohnungssanierung</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Altbausanierung</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Komplettsanierung</a>
                </div>
              </li>

              {/* Leistungen Dropdown (Shortened from Weitere Leistungen) */}
              <li className="nav-item-dropdown">
                <a href="#weitere-leistungen" className="nav-link nav-link-with-icon" onClick={(e) => handleScrollToSection(e, 'weitere-leistungen')}>
                  Leistungen <ChevronDown size={12} />
                </a>
                <div className="dropdown-menu">
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Heizung &amp; Sanitär</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Wärmepumpe</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Elektroinstallation</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Trockenbau</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Fliesenarbeiten</a>
                </div>
              </li>

              <li><a href="#beispiele" className="nav-link" onClick={(e) => handleScrollToSection(e, 'beispiele')}>Projekte</a></li>
              <li><a href="#faq" className="nav-link" onClick={(e) => handleScrollToSection(e, 'faq')}>FAQ</a></li>
              
              {/* Ratgeber */}
              <li><a href="#beispiele" className="nav-link" onClick={(e) => handleScrollToSection(e, 'beispiele')}>Ratgeber</a></li>
              
              {/* Live Radex */}
              <li>
                <a href="#projekt-hub" className="nav-link" onClick={(e) => handleScrollToSection(e, 'projekt-hub')} style={{ fontWeight: '700', color: 'var(--navy-light)' }}>
                  Live Radex
                </a>
              </li>

              {/* Einsatzgebiete Dropdown */}
              <li className="nav-item-dropdown">
                <a href="#faq" className="nav-link nav-link-with-icon" onClick={(e) => handleScrollToSection(e, 'faq')}>
                  Einsatzgebiete <ChevronDown size={12} />
                </a>
                <div className="dropdown-menu">
                  <span className="dropdown-item" style={{ fontWeight: '700', color: 'var(--text-light)', borderBottom: '1px solid var(--border)', paddingBottom: '6px', marginBottom: '6px' }}>Unsere Einsatzgebiete:</span>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Rödermark</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Frankfurt am Main</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Offenbach</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Darmstadt</a>
                  <a href="#kontakt" className="dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Hanau</a>
                </div>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:+496074960620" className="phone-action">
              <Phone size={18} />
              <span>06074 960620</span>
            </a>
            <a href="#kontakt" className="btn btn--rainbow" onClick={(e) => handleScrollToSection(e, 'kontakt')}>
              Kostenlose Beratung
            </a>
          </div>

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menü öffnen">
            {isOpen ? <X size={26} color="var(--navy)" /> : <Menu size={26} color="var(--navy)" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer (Premium slide-out sidebar) */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <Logo height={32} />
          <button className="mobile-drawer-close" onClick={() => setIsOpen(false)} aria-label="Menü schließen">
            <X size={24} color="var(--navy)" />
          </button>
        </div>

        <ul className="mobile-drawer-links">
          <li><a href="#" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Startseite</a></li>
          
          {/* Badsanierung Mobile Dropdown */}
          <li>
            <button className="mobile-drawer-link" onClick={() => toggleMobileSubMenu('bad')} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: 0, textAlign: 'left', fontWeight: 'inherit', fontFamily: 'inherit', cursor: 'pointer' }}>
              <span>Badsanierung</span>
              <ChevronDown size={18} style={{ transform: mobileSubMenu === 'bad' ? 'rotate(180deg)' : 'none', transition: 'var(--transition)' }} />
            </button>
            {mobileSubMenu === 'bad' && (
              <div className="mobile-drawer-dropdown">
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Komplettbadsanierung</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Badmodernisierung</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Barrierefreies Bad</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Gäste-WC sanieren</a>
              </div>
            )}
          </li>

          {/* Sanierung Mobile Dropdown */}
          <li>
            <button className="mobile-drawer-link" onClick={() => toggleMobileSubMenu('haus')} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: 0, textAlign: 'left', fontWeight: 'inherit', fontFamily: 'inherit', cursor: 'pointer' }}>
              <span>Sanierung</span>
              <ChevronDown size={18} style={{ transform: mobileSubMenu === 'haus' ? 'rotate(180deg)' : 'none', transition: 'var(--transition)' }} />
            </button>
            {mobileSubMenu === 'haus' && (
              <div className="mobile-drawer-dropdown">
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Wohnungssanierung</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Altbausanierung</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Komplettsanierung</a>
              </div>
            )}
          </li>

          {/* Leistungen Mobile Dropdown */}
          <li>
            <button className="mobile-drawer-link" onClick={() => toggleMobileSubMenu('weitere')} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: 0, textAlign: 'left', fontWeight: 'inherit', fontFamily: 'inherit', cursor: 'pointer' }}>
              <span>Leistungen</span>
              <ChevronDown size={18} style={{ transform: mobileSubMenu === 'weitere' ? 'rotate(180deg)' : 'none', transition: 'var(--transition)' }} />
            </button>
            {mobileSubMenu === 'weitere' && (
              <div className="mobile-drawer-dropdown">
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Heizung &amp; Sanitär</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Wärmepumpe</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Elektroinstallation</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Trockenbau</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Fliesenarbeiten</a>
              </div>
            )}
          </li>

          <li><a href="#beispiele" className="mobile-drawer-link" onClick={(e) => handleScrollToSection(e, 'beispiele')}>Projekte</a></li>
          <li><a href="#faq" className="mobile-drawer-link" onClick={(e) => handleScrollToSection(e, 'faq')}>FAQ</a></li>
          <li><a href="#beispiele" className="mobile-drawer-link" onClick={(e) => handleScrollToSection(e, 'beispiele')}>Ratgeber</a></li>
          
          <li>
            <a href="#projekt-hub" className="mobile-drawer-link" onClick={(e) => handleScrollToSection(e, 'projekt-hub')} style={{ fontWeight: '700', color: 'var(--navy-light)' }}>
              Live Radex
            </a>
          </li>

          {/* Einsatzgebiete Mobile Dropdown */}
          <li>
            <button className="mobile-drawer-link" onClick={() => toggleMobileSubMenu('staedte')} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: 0, textAlign: 'left', fontWeight: 'inherit', fontFamily: 'inherit', cursor: 'pointer' }}>
              <span>Einsatzgebiete</span>
              <ChevronDown size={18} style={{ transform: mobileSubMenu === 'staedte' ? 'rotate(180deg)' : 'none', transition: 'var(--transition)' }} />
            </button>
            {mobileSubMenu === 'staedte' && (
              <div className="mobile-drawer-dropdown">
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Rödermark</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Frankfurt am Main</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Offenbach</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Darmstadt</a>
                <a href="#kontakt" className="mobile-drawer-dropdown-item" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Hanau</a>
              </div>
            )}
          </li>
        </ul>
        <div className="mobile-drawer-actions">
          <a href="tel:+496074960620" className="btn btn--secondary" onClick={() => setIsOpen(false)} style={{ width: '100%' }}>
            <Phone size={16} />
            <span>06074 960620 Anrufen</span>
          </a>
          <a href="#kontakt" className="btn btn--primary" onClick={(e) => handleScrollToSection(e, 'kontakt')} style={{ width: '100%' }}>
            Kostenlose Beratung
          </a>
        </div>
      </div>

      {/* Backdrop overlay */}
      <div className={`nav-mobile-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
    </>
  );
}

