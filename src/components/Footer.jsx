import { Shield, Wrench, ShieldAlert, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Google Maps Strip */}
      <div className="footer-map-wrapper">
        <iframe
          className="footer-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.6!2d8.8!3d49.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0b9a5a2e9999%3A0x0!2sOdenwaldstra%C3%9Fe%2038A%2C%2063322%20R%C3%B6dermark!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Radex Objektmanagement Standort"
        ></iframe>
        <div className="footer-map-overlay">
          <div className="footer-map-badge">
            <MapPin size={16} />
            <span>Odenwaldstraße 38A · 63322 Rödermark</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <Logo height={36} />
            </a>
            <p style={{ marginTop: '16px' }}>
              Radex Objektmanagement GmbH ist Ihr zugelassener SHK Meisterbetrieb für Sanierung, Badsanierung und Modernisierung im Rhein-Main-Gebiet.
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>
              Odenwaldstraße 38A · 63322 Rödermark
            </p>
          </div>

          <div className="footer-col">
            <h4>Badsanierung</h4>
            <ul className="footer-links">
              <li><a href="#kontakt" className="footer-link">Komplettbadsanierung</a></li>
              <li><a href="#kontakt" className="footer-link">Badmodernisierung</a></li>
              <li><a href="#kontakt" className="footer-link">Badrenovierung</a></li>
              <li><a href="#kontakt" className="footer-link">Gäste-WC sanieren</a></li>
              <li><a href="#kontakt" className="footer-link">Barrierefreies Bad</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Sanierung</h4>
            <ul className="footer-links">
              <li><a href="#kontakt" className="footer-link">Wohnungssanierung</a></li>
              <li><a href="#kontakt" className="footer-link">Haussanierung</a></li>
              <li><a href="#kontakt" className="footer-link">Altbausanierung</a></li>
              <li><a href="#kontakt" className="footer-link">Komplettsanierung</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Leistungen</h4>
            <ul className="footer-links">
              <li><a href="#kontakt" className="footer-link">Heizung &amp; Sanitär</a></li>
              <li><a href="#kontakt" className="footer-link">Wärmepumpe</a></li>
              <li><a href="#kontakt" className="footer-link">Elektroinstallation</a></li>
              <li><a href="#kontakt" className="footer-link">Trockenbau</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Unternehmen</h4>
            <ul className="footer-links">
              <li><a href="#leistungen-fokus" className="footer-link">Über Radex</a></li>
              <li><a href="#faq" className="footer-link">Einsatzgebiete</a></li>
              <li><a href="#projekt-hub" className="footer-link">Ratgeber</a></li>
              <li><a href="#kontakt" className="footer-link">Impressum</a></li>
              <li><a href="#kontakt" className="footer-link">Datenschutz</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <Wrench size={16} color="var(--gold)" />
              <span>Zugelassener SHK Meisterbetrieb</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <Shield size={16} color="var(--gold)" />
              <span>Geprüfter Generalunternehmer</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <ShieldAlert size={16} color="var(--gold)" />
              <span>TRGS 519 (Asbest-Sachkunde)</span>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>
              © {new Date().getFullYear()} RADEX Objektmanagement GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
