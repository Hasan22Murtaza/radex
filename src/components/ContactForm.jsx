import { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, Camera, CheckCircle } from 'lucide-react';
import { Link } from '../router';

export default function ContactForm({
  kicker = 'Kontakt aufnehmen',
  title = 'Projekt anfragen',
  intro = 'Planen Sie eine Badsanierung oder Sanierung im Rhein-Main-Gebiet? Rufen Sie uns an, schreiben Sie per WhatsApp oder senden Sie uns Ihre Projektbeschreibung – wir melden uns zeitnah mit einer ersten Einschätzung.',
  photoTip = 'Senden Sie uns Bilder Ihres Bads oder Ihrer Räume bequem per WhatsApp.',
  placeholder = 'Bitte beschreiben Sie kurz Ihr Projekt (z.B. Badsanierung, 8 m², Komplettumbau)...',
}) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const nachricht = form.nachricht.value.trim();

    const subject = `Projektanfrage von ${vorname} ${nachname}`;
    const body =
      `Name: ${vorname} ${nachname}\n` +
      `Telefon: ${telefon}\n` +
      `E-Mail: ${email}\n\n` +
      `Projektbeschreibung:\n${nachricht}`;

    window.location.href =
      `mailto:info@radex-objektmanagement.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  const contactChannels = [
    {
      href: 'tel:+496074960620',
      icon: Phone,
      iconBg: '#fff7ed',
      iconColor: 'var(--navy)',
      label: 'Telefon',
      value: '+49 6074 9606 20',
      highlight: true,
      external: false,
    },
    {
      href: 'https://wa.me/496074960620',
      icon: MessageSquare,
      iconBg: 'rgba(37,211,102,0.12)',
      iconColor: '#25D366',
      label: 'WhatsApp',
      value: 'Chat starten – Fotos senden',
      highlight: true,
      external: true,
    },
    {
      href: 'mailto:info@radex-objektmanagement.de',
      icon: Mail,
      iconBg: '#f3f4f6',
      iconColor: 'var(--navy)',
      label: 'E-Mail',
      value: 'info@radex-objektmanagement.de',
      highlight: false,
      external: false,
    },
  ];

  return (
    <section id="kontakt" className="home-section home-contact-section">
      <div className="container">
        <div className="home-contact-header">
          <span className="home-section-kicker">{kicker}</span>
          <h2 className="text-3xl font-bold text-navy">{title}</h2>
          <p className="text-gray-600 text-lg home-section-intro-text">{intro}</p>
        </div>

        <div className="home-contact-layout">
          <div className="home-contact-sidebar">
            <div className="home-contact-photo-tip">
              <Camera size={22} color="#f97316" />
              <div>
                <strong>Fotos senden. Erste Einschätzung erhalten.</strong>
                <p>{photoTip}</p>
              </div>
            </div>

            <div className="home-contact-channels">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className={`home-contact-channel ${channel.highlight ? 'home-contact-channel--highlight' : ''}`}
                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <div className="home-contact-channel-icon" style={{ background: channel.iconBg }}>
                      <Icon color={channel.iconColor} size={22} />
                    </div>
                    <div>
                      <span className="home-contact-channel-label">{channel.label}</span>
                      <strong className="home-contact-channel-value">{channel.value}</strong>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="home-contact-form-panel">
            <h3 className="text-2xl font-bold text-navy">Nachricht senden</h3>
            <form onSubmit={handleSubmit} className="home-contact-form">
              <div className="contact-name-row">
                <label className="home-contact-field">
                  <span>Vorname *</span>
                  <input type="text" id="vorname" name="vorname" required placeholder="Max" autoComplete="given-name" />
                </label>
                <label className="home-contact-field">
                  <span>Nachname *</span>
                  <input type="text" id="nachname" name="nachname" required placeholder="Mustermann" autoComplete="family-name" />
                </label>
              </div>

              <label className="home-contact-field">
                <span>Telefonnummer *</span>
                <input type="tel" id="telefon" name="telefon" required placeholder="+49 123 4567890" autoComplete="tel" />
              </label>

              <label className="home-contact-field">
                <span>E-Mail Adresse *</span>
                <input type="email" id="email" name="email" required placeholder="max@beispiel.de" autoComplete="email" />
              </label>

              <label className="home-contact-field">
                <span>Projektbeschreibung *</span>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows="4"
                  required
                  placeholder={placeholder}
                />
              </label>

              <button type="submit" className="home-btn-orange home-contact-submit">
                Projekt anfragen <Send size={18} />
              </button>

              {sent && (
                <div className="home-contact-success" role="status">
                  <CheckCircle size={20} color="#059669" />
                  <p>
                    Vielen Dank! Ihr E-Mail-Programm wurde geöffnet. Alternativ erreichen Sie uns telefonisch unter{' '}
                    <strong>06074 960620</strong> oder per WhatsApp.
                  </p>
                </div>
              )}

              <p className="home-contact-privacy">
                Mit dem Absenden erklären Sie sich mit unserer{' '}
                <Link to="/datenschutz">Datenschutzerklärung</Link> einverstanden.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
