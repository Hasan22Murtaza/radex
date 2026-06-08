import React from 'react';
import { Shield, Wrench, ShieldAlert } from 'lucide-react';
import logo from '../assets/logo_neu.webp';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <img src={logo} alt="Radex Objektmanagement GmbH" width="120" />
            <p>
              Radex Objektmanagement GmbH ist Ihr zugelassener SHK Meisterbetrieb für Sanierung, Badsanierung und Modernisierung im Rhein-Main-Gebiet.
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>
              Odenwaldstraße 38A · 63322 Rödermark
            </p>
          </div>

          <div className="footer-col">
            <h4>Badsanierung</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Komplettbadsanierung</a></li>
              <li><a href="#" className="footer-link">Badmodernisierung</a></li>
              <li><a href="#" className="footer-link">Badrenovierung</a></li>
              <li><a href="#" className="footer-link">Gäste-WC sanieren</a></li>
              <li><a href="#" className="footer-link">Barrierefreies Bad</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Sanierung</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Wohnungssanierung</a></li>
              <li><a href="#" className="footer-link">Haussanierung</a></li>
              <li><a href="#" className="footer-link">Altbausanierung</a></li>
              <li><a href="#" className="footer-link">Komplettsanierung</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Leistungen</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Heizung &amp; Sanitär</a></li>
              <li><a href="#" className="footer-link">Wärmepumpe</a></li>
              <li><a href="#" className="footer-link">Elektroinstallation</a></li>
              <li><a href="#" className="footer-link">Trockenbau</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Unternehmen</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Über Radex</a></li>
              <li><a href="#" className="footer-link">Einsatzgebiete</a></li>
              <li><a href="#" className="footer-link">Ratgeber</a></li>
              <li><a href="#" className="footer-link">Impressum</a></li>
              <li><a href="#" className="footer-link">Datenschutz</a></li>
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
