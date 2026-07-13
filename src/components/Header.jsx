import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from '../router';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { RADEX_LIVE_URL } from '../constants/brand';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const closeAndScrollTop = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { label: 'Startseite', to: '/', onClick: closeAndScrollTop },
    { label: 'Badsanierung', to: '/badsanierung-rhein-main', onClick: () => setIsOpen(false) },
    { label: 'Sanierung', to: '/sanierung-rhein-main', onClick: () => setIsOpen(false) },
    { label: 'Unsere Leistungen', to: '/leistungen', onClick: () => setIsOpen(false) },
    { label: 'Einsatzgebiete', to: '/einsatzgebiete-rhein-main', onClick: () => setIsOpen(false) },
    { label: 'Ratgeber', to: '/ratgeber', onClick: () => setIsOpen(false) },
    { label: 'Über Radex', to: '/ueber-uns', onClick: () => setIsOpen(false) },
    { label: 'Radex Live', href: RADEX_LIVE_URL, onClick: () => setIsOpen(false) },
    { label: 'Kontakt', href: '#kontakt', onClick: (e) => handleScrollToSection(e, 'kontakt') },
  ];

  return (
    <>
      <header
        className="header"
        style={{
          boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <div className="header-container">
          <Link to="/" className="logo-link" onClick={() => window.scrollTo(0, 0)}>
            <Logo />
          </Link>

          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className="nav-link" onClick={item.onClick}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.to} className="nav-link" onClick={item.onClick}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:+496074960620" className="phone-action">
              <Phone size={18} />
              <span>06074 960620</span>
            </a>
            <a href="#kontakt" className="btn btn--primary" onClick={(e) => handleScrollToSection(e, 'kontakt')}>
              Kostenlose Beratung
            </a>
          </div>

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menü öffnen">
            {isOpen ? <X size={26} color="var(--navy)" /> : <Menu size={26} color="var(--navy)" />}
          </button>
        </div>
      </header>

      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <Logo className="site-logo site-logo--drawer" height={48} />
          <button className="mobile-drawer-close" onClick={() => setIsOpen(false)} aria-label="Menü schließen">
            <X size={24} color="var(--navy)" />
          </button>
        </div>

        <ul className="mobile-drawer-links">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <a href={item.href} className="mobile-drawer-link" onClick={item.onClick}>
                  {item.label}
                </a>
              ) : (
                <Link to={item.to} className="mobile-drawer-link" onClick={item.onClick}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
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

      <div className={`nav-mobile-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
    </>
  );
}
