import { useState } from 'react';
import { Shield, Wrench, ShieldAlert, MapPin, Phone, Mail, Plus, Minus } from 'lucide-react';
import { RADEX_LIVE_URL } from '../constants/brand';
import { Link } from '../router';
import Logo from './Logo';

// Every entry maps to a real, routable page on the new site. Legacy anchor
// texts from the old radex-objektmanagement.de footer are preserved so the
// internal link structure and its SEO value carry over.
const footerColumns = [
  {
    heading: 'Badsanierung',
    desc: 'Badplanung · Badrenovierung · Badmodernisierung · Komplettbadsanierung',
    links: [
      { label: 'Badsanierung Überblick', to: '/badsanierung-rhein-main' },
      { label: 'Komplettbadsanierung', to: '/badsanierung/badezimmer-sanieren' },
      { label: 'Badrenovierung', to: '/badrenovierung' },
      { label: 'Badmodernisierung', to: '/badmodernisierung' },
      { label: 'Badplanung', to: '/badplanung' },
      { label: 'Aktuelle Badprojekte', to: RADEX_LIVE_URL },
      { label: 'Badsanierung Kosten', to: '/badsanierung-kosten' },
      { label: 'Barrierefreies Bad', to: '/barrierefreies-bad' },
      { label: 'Barrierefreies Bad Kosten', to: '/barrierefreies-bad-kosten' },
    ],
  },
  {
    heading: 'Sanierung',
    desc: 'Wohnungssanierung · Haussanierung · Altbausanierung · Komplettsanierung',
    links: [
      { label: 'Sanierung Überblick', to: '/sanierung-rhein-main' },
      { label: 'Wohnungssanierung', to: '/sanierung/wohnungssanierung' },
      { label: 'Wohnung sanieren Kosten', to: '/wohnungssanierung-kosten' },
      { label: 'Haussanierung', to: '/sanierung/haussanierung' },
      { label: 'Haus sanieren Kosten', to: '/haussanierung-kosten' },
      { label: 'Altbausanierung', to: '/sanierung/altbausanierung' },
      { label: 'Altbau sanieren Kosten', to: '/altbausanierung-kosten' },
      { label: 'Generalunternehmer', to: '/generalunternehmer-rhein-main' },
      { label: 'Komplettsanierung', to: '/komplettsanierung-rhein-main' },
    ],
  },
  {
    heading: 'Leistungen',
    desc: 'Heizung · Sanitär · Elektrotechnik · Innenausbau · Gebäudetechnik',
    links: [
      { label: 'Generalunternehmer', to: '/generalunternehmer-rhein-main' },
      { label: 'Heizung & Sanitär', to: '/heizung-sanitaer-rhein-main' },
      { label: 'Elektrotechnik', to: '/elektroinstallation-rhein-main' },
      { label: 'Innenausbau & Umbau', to: '/innenausbau-umbau-rhein-main' },
      { label: 'Energetische Sanierung', to: '/energetische-sanierung-rhein-main' },
      { label: 'Energieeffizienz', to: '/energieeffizienz-rhein-main' },
      { label: 'Schimmel- & Schadstoffsanierung', to: '/schadstoffsanierung-rhein-main' },
      { label: 'Gewerbe & Objektsanierung', to: '/gewerbe-objektsanierung-rhein-main' },
      { label: 'Gewerbesanierung', to: '/gewerbesanierung-rhein-main' },
    ],
  },
  {
    heading: 'Kosten & Preise',
    desc: 'Kostenrechner, Preisbeispiele und Budgetfaktoren für Ihr Projekt.',
    links: [
      { label: 'Sanierungskosten Rechner', to: '/sanierungskosten-rechner' },
      { label: 'Badsanierung Kosten', to: '/badsanierung-kosten' },
      { label: 'Barrierefreies Bad Kosten', to: '/barrierefreies-bad-kosten' },
      { label: 'Wohnungssanierung Kosten', to: '/wohnungssanierung-kosten' },
      { label: 'Haussanierung Kosten', to: '/haussanierung-kosten' },
      { label: 'Altbausanierung Kosten', to: '/altbausanierung-kosten' },
      { label: 'Heizung erneuern Kosten', to: '/heizung-sanitaer-rhein-main' },
    ],
  },
  {
    heading: 'Projekte',
    desc: 'Laufende Baustellen, abgeschlossene Sanierungen und Referenzen.',
    links: [
      { label: 'Aktuelle Projekte', to: RADEX_LIVE_URL },
      { label: 'Abgeschlossene Projekte', to: RADEX_LIVE_URL },
      { label: 'Vorher & Nachher', to: RADEX_LIVE_URL },
      { label: 'Radex Live', to: RADEX_LIVE_URL },
    ],
  },
  {
    heading: 'Einsatzgebiete',
    desc: 'Sanierung & Modernisierung im gesamten Rhein-Main-Gebiet.',
    links: [
      { label: 'Frankfurt am Main', to: '/sanierung-frankfurt-am-main' },
      { label: 'Offenbach am Main', to: '/sanierung-offenbach-am-main' },
      { label: 'Rodgau', to: '/sanierung-rodgau' },
      { label: 'Rödermark', to: '/sanierung-roedermark' },
      { label: 'Darmstadt', to: '/haus-wohnung-bad-modernisieren-darmstadt' },
      { label: 'Alle Einsatzgebiete ansehen →', to: '/einsatzgebiete-rhein-main', strong: true },
    ],
  },
  {
    heading: 'Ratgeber',
    desc: 'Wissen zu Planung, Kosten und Ablauf Ihrer Sanierung.',
    links: [
      { label: 'Badsanierung Kosten', to: '/ratgeber/badsanierung-kosten-faktoren' },
      { label: 'Wohnung sanieren Kosten', to: '/ratgeber/wohnung-sanieren-nach-kauf' },
      { label: 'Haus sanieren Kosten', to: '/ratgeber/haus-modernisieren-nach-kauf-erbschaft' },
      { label: 'Heizung erneuern Kosten', to: '/ratgeber/heizung-modernisieren-bei-sanierung' },
      { label: 'Schimmel entfernen Kosten', to: '/ratgeber/schimmel-bei-sanierung-ursache-pruefen' },
      { label: 'Badsanierung Ratgeber', to: '/ratgeber/kategorie/badsanierung' },
      { label: 'Sanierung Ratgeber', to: '/ratgeber/kategorie/sanierung' },
      { label: 'Heizung & Sanitär Ratgeber', to: '/ratgeber/kategorie/heizung-sanitaer' },
      { label: 'Schimmel & Asbest Ratgeber', to: '/ratgeber/kategorie/schimmel-asbest' },
      { label: 'Alle Ratgeber ansehen →', to: '/ratgeber', strong: true },
    ],
  },
  {
    heading: 'Unternehmen',
    desc: 'Über Radex, Qualität, Karriere und rechtliche Informationen.',
    links: [
      { label: 'Über Radex', to: '/ueber-uns' },
      { label: 'Radex Qualitätsversprechen', to: '/radex-qualitaetsversprechen' },
      { label: 'Radex Live', to: RADEX_LIVE_URL },
      { label: 'Karriere', to: '/karriere' },
      { label: 'Kontakt', to: '/#kontakt' },
      { label: 'Impressum', to: '/impressum' },
      { label: 'Datenschutz', to: '/datenschutz' },
    ],
  },
];

// Additional SEO topics kept out of the main footer to avoid clutter. These
// point to the closest existing landing/guide pages today and are ready to be
// repointed to dedicated pages as they are published.
const expandableGroups = [
  {
    heading: 'Modernisierung',
    links: [
      { label: 'Modernisierung', to: '/sanierung-rhein-main' },
      { label: 'Haus modernisieren', to: '/sanierung/haussanierung' },
      { label: 'Wohnung modernisieren', to: '/sanierung/wohnungssanierung' },
      { label: 'Immobilienmodernisierung', to: '/komplettsanierung-rhein-main' },
    ],
  },
  {
    heading: 'Renovierung',
    links: [
      { label: 'Renovierung', to: '/ratgeber/wohnung-renovieren-oder-sanieren-unterschied' },
      { label: 'Haus renovieren', to: '/sanierung/haussanierung' },
      { label: 'Wohnung renovieren', to: '/sanierung/wohnungssanierung' },
    ],
  },
  {
    heading: 'Weitere Sanierung',
    links: [
      { label: 'Kernsanierung', to: '/kernsanierung-rhein-main' },
      { label: 'Teilsanierung', to: '/teilsanierung-rhein-main' },
      { label: 'Bestandssanierung', to: '/sanierung-rhein-main' },
      { label: 'Sanierung nach Hauskauf', to: '/ratgeber/wohnung-sanieren-nach-kauf' },
      { label: 'Kapitalanlagensanierung', to: '/gewerbe-objektsanierung-rhein-main' },
    ],
  },
  {
    heading: 'Innenausbau & Bauleistungen',
    links: [
      { label: 'Innenausbau', to: '/innenausbau-umbau-rhein-main' },
      { label: 'Umbau', to: '/raeume-umbauen-rhein-main' },
      { label: 'Trockenbau', to: '/trockenbau-rhein-main' },
      { label: 'Bodenarbeiten', to: '/innenausbau-umbau-rhein-main' },
      { label: 'Fliesenarbeiten', to: '/badrenovierung' },
      { label: 'Malerarbeiten', to: '/innenausbau-umbau-rhein-main' },
    ],
  },
];

function FooterLink({ to, label, strong }) {
  const className = strong ? 'footer-link font-semibold' : 'footer-link';
  return (
    <li>
      <Link to={to} className={className}>{label}</Link>
    </li>
  );
}

export default function Footer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <footer className="footer">
      {/* Google Maps Strip */}
      <div className="footer-map-wrapper">
        <iframe
          className="footer-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.6!2d8.8!3d49.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0b9a5a2e9999%3A0x0!2sOdenwaldstra%C3%9Fe%2061%2C%2063322%20R%C3%B6dermark!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
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
            <span>Odenwaldstraße 61 · 63322 Rödermark</span>
          </div>
        </div>
      </div>

      <div className="container" style={{maxWidth: '1440px'}}>
        <div className="footer-grid">

          {/* COMPANY */}
          <div className="footer-col">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{display: 'inline-block', marginBottom: '24px', background: '#fff', padding: '10px 14px', borderRadius: '12px'}}>
              <Logo height={88} />
            </a>
            <p className="footer-col-desc">
              Sanierungs-, Badsanierungs- und Modernisierungsleistungen im gesamten Rhein-Main-Gebiet. Als zugelassener SHK-Meisterbetrieb und Generalunternehmer begleitet Radex Wohn- und Gewerbesanierungen von der Planung bis zur Schlüsselübergabe.
            </p>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <MapPin size={18} />
                <span>Odenwaldstraße 61<br/>63322 Rödermark</span>
              </li>
              <li className="footer-contact-item" style={{marginTop: '8px'}}>
                <Phone size={18} />
                <a href="tel:+496074960620" className="footer-link">06074 960620</a>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} />
                <a href="mailto:info@radex-objektmanagement.de" className="footer-link">info@radex-objektmanagement.de</a>
              </li>
            </ul>
          </div>

          {/* CATEGORY COLUMNS */}
          {footerColumns.map((col) => (
            <div className="footer-col" key={col.heading}>
              <h4>{col.heading}</h4>
              <p className="footer-col-desc">{col.desc}</p>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <FooterLink key={link.label} to={link.to} label={link.label} strong={link.strong} />
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* EXPANDABLE: WEITERE LEISTUNGEN & INFORMATIONEN */}
        <div className="footer-more">
          <button
            type="button"
            className="footer-more-toggle"
            aria-expanded={expanded}
            aria-controls="footer-more-panel"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? <Minus size={18} /> : <Plus size={18} />}
            <span>Weitere Leistungen & Informationen</span>
          </button>
          {expanded && (
            <div className="footer-more-panel" id="footer-more-panel">
              <div className="footer-more-grid">
                {expandableGroups.map((group) => (
                  <div className="footer-col" key={group.heading}>
                    <h4>{group.heading}</h4>
                    <ul className="footer-links">
                      {group.links.map((link) => (
                        <FooterLink key={link.label} to={link.to} label={link.label} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
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
