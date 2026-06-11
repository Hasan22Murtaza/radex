import { useState } from 'react';
import { Phone, Mail, MapPin, Shield, Wrench, ShieldAlert } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
    services: [],
    dsgvo: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name !== 'dsgvo') {
      const updatedServices = [...formData.services];
      if (checked) {
        updatedServices.push(value);
      } else {
        const idx = updatedServices.indexOf(value);
        if (idx > -1) updatedServices.splice(idx, 1);
      }
      setFormData({ ...formData, services: updatedServices });
    } else {
      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.');
  };

  return (
    <section id="kontakt" className="section section--beige reveal">
      <div className="container contact-layout">
        <div className="contact-info-section reveal">
          <span className="section-label">Kontakt</span>
          <h2 className="section-title">Bad sanieren lassen – Beratung anfragen</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-light)', lineHeight: '1.7', marginBottom: '32px' }}>
            Vereinbaren Sie einen kostenlosen Beratungstermin bei Ihnen vor Ort im Rhein-Main-Gebiet. Wir begutachten den Ist-Zustand und erstellen Ihnen ein transparentes Angebot.
          </p>

          <div className="contact-channels">
            <div className="contact-channel reveal" style={{ transitionDelay: '50ms' }}>
              <div className="contact-channel-icon">
                <Phone size={20} />
              </div>
              <div className="contact-channel-details">
                <h4>Direkt anrufen</h4>
                <p><a href="tel:+496074960620" style={{ color: 'var(--navy)' }}>06074 960620</a></p>
              </div>
            </div>

            <div className="contact-channel reveal" style={{ transitionDelay: '100ms' }}>
              <div className="contact-channel-icon">
                <Mail size={20} />
              </div>
              <div className="contact-channel-details">
                <h4>E-Mail schreiben</h4>
                <p><a href="mailto:info@radex-objektmanagement.de" style={{ color: 'var(--navy)' }}>info@radex-objektmanagement.de</a></p>
              </div>
            </div>

            <div className="contact-channel reveal" style={{ transitionDelay: '150ms' }}>
              <div className="contact-channel-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-channel-details">
                <h4>Firmensitz</h4>
                <p>Odenwaldstraße 38A, 63322 Rödermark</p>
              </div>
            </div>
          </div>

          <div className="trust-badges reveal" style={{ transitionDelay: '200ms' }}>
            <h4>Zertifizierte Fachkompetenz</h4>
            <div className="badges-grid">
              <div className="badge-item">
                <Wrench size={24} />
                <p>SHK Fachbetrieb</p>
              </div>
              <div className="badge-item">
                <Shield size={24} />
                <p>Generalunternehmer</p>
              </div>
              <div className="badge-item">
                <ShieldAlert size={24} />
                <p>Schimmel &amp; Asbest (TRGS 519)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-box reveal" style={{ transitionDelay: '100ms' }}>
          <h3 style={{ fontSize: '20px', color: 'var(--navy)', marginBottom: '24px' }}>Kostenlose Beratung sichern</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-field form-field--full" style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '11px', fontWeight: '700', marginBottom: '8px', display: 'block' }}>Welche Leistungen interessieren Sie?</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
                <label style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'none', fontWeight: '500', color: 'var(--text)' }}>
                  <input type="checkbox" name="services" value="Badsanierung" onChange={handleInputChange} style={{ accentColor: 'var(--gold)' }} />
                  Badsanierung
                </label>
                <label style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'none', fontWeight: '500', color: 'var(--text)' }}>
                  <input type="checkbox" name="services" value="Haussanierung" onChange={handleInputChange} style={{ accentColor: 'var(--gold)' }} />
                  Haussanierung
                </label>
                <label style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'none', fontWeight: '500', color: 'var(--text)' }}>
                  <input type="checkbox" name="services" value="Altbausanierung" onChange={handleInputChange} style={{ accentColor: 'var(--gold)' }} />
                  Altbausanierung
                </label>
                <label style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'none', fontWeight: '500', color: 'var(--text)' }}>
                  <input type="checkbox" name="services" value="Komplettsanierung" onChange={handleInputChange} style={{ accentColor: 'var(--gold)' }} />
                  Komplettsanierung
                </label>
                <label style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'none', fontWeight: '500', color: 'var(--text)' }}>
                  <input type="checkbox" name="services" value="Heizung & Sanitär" onChange={handleInputChange} style={{ accentColor: 'var(--gold)' }} />
                  Heizung &amp; Sanitär
                </label>
                <label style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'none', fontWeight: '500', color: 'var(--text)' }}>
                  <input type="checkbox" name="services" value="Wärmepumpe" onChange={handleInputChange} style={{ accentColor: 'var(--gold)' }} />
                  Wärmepumpe
                </label>
                <label style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'none', fontWeight: '500', color: 'var(--text)' }}>
                  <input type="checkbox" name="services" value="Elektroinstallation" onChange={handleInputChange} style={{ accentColor: 'var(--gold)' }} />
                  Elektroinstallation
                </label>
                <label style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'none', fontWeight: '500', color: 'var(--text)' }}>
                  <input type="checkbox" name="services" value="Trockenbau" onChange={handleInputChange} style={{ accentColor: 'var(--gold)' }} />
                  Trockenbau
                </label>
                <label style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'none', fontWeight: '500', color: 'var(--text)' }}>
                  <input type="checkbox" name="services" value="Fliesenarbeiten" onChange={handleInputChange} style={{ accentColor: 'var(--gold)' }} />
                  Fliesenarbeiten
                </label>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="firstname">Vorname *</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Ihr Vorname"
                  required
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastname">Nachname *</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Ihr Nachname"
                  required
                  value={formData.lastname}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="phone">Telefon *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ihre Telefonnummer"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ihre E-Mail"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-field form-field--full">
              <label htmlFor="message">Projekt-Beschreibung *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Beschreiben Sie kurz Ihr Vorhaben (z.B. Badgröße, Altersbedingt barrierefrei, Wunsch-Termin)..."
                required
                value={formData.message}
                onChange={handleInputChange}
                style={{ minHeight: '90px' }}
              />
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                id="dsgvo"
                name="dsgvo"
                required
                checked={formData.dsgvo}
                onChange={handleInputChange}
              />
              <label htmlFor="dsgvo">
                Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. Weitere Infos in der <a href="/datenschutz" target="_blank" rel="noreferrer">Datenschutzerklärung</a>. *
              </label>
            </div>

            <button type="submit" className="btn btn--primary form-submit">
              Projekt jetzt unverbindlich anfragen
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
