import { useState } from 'react';
import { Camera, ChevronDown, MessageSquare, Phone } from 'lucide-react';
import { Link } from '../../router';
import { RADEX_LIVE_URL } from '../../constants/brand';

const projectCardLinkStyle = { textDecoration: 'none', color: 'inherit' };

export function RadexLiveProjectCard({
  image,
  badge,
  badgeClassName = '',
  title,
  subtitle,
  desc,
  cta,
}) {
  const isInternal = RADEX_LIVE_URL.startsWith('/');
  const CardWrapper = isInternal ? Link : 'a';
  const linkProps = isInternal ? { to: RADEX_LIVE_URL } : { href: RADEX_LIVE_URL };

  return (
    <CardWrapper {...linkProps} className="br-project-card" style={projectCardLinkStyle}>
      <div className="br-project-img" style={{ backgroundImage: `url(${image})` }}>
        {badge && (
          <span className={`br-project-badge ${badgeClassName || (badge === 'LIVE' || badge === 'Live' ? 'live' : '')}`}>
            {badge}
          </span>
        )}
      </div>
      <div className="br-project-info">
        <h4>{title}</h4>
        <p>{subtitle}</p>
        {desc && <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>{desc}</p>}
        {cta && (
          <span className="br-btn-orange" style={{ display: 'inline-block', marginTop: '12px', fontSize: '14px' }}>
            {cta} &rarr;
          </span>
        )}
      </div>
    </CardWrapper>
  );
}

export function SharedCTABlock({ isHero = false, centered = false }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? '' : 'mt-8'}`}
      style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: centered ? 'center' : 'flex-start',
      }}
    >
      <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
      <a
        href="https://wa.me/496074960620"
        target="_blank"
        rel="noopener noreferrer"
        className="btn br-btn-whatsapp"
      >
        Fotos über WhatsApp senden <MessageSquare size={18} color="#25D366" style={{ marginLeft: '8px' }} />
      </a>
      <a
        href="tel:+496074960620"
        className="btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: isHero ? 'transparent' : '#fff',
          border: isHero ? '1px solid #111827' : '1px solid #d1d5db',
          color: '#111827',
          padding: '12px 24px',
          borderRadius: '4px',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        <Phone size={18} /> Jetzt anrufen
      </a>
    </div>
  );
}

export function PremiumIconCards({ cards, linked = false }) {
  return (
    <div className="br-nav-landing-grid">
      {cards.map((card) => {
        const Icon = card.icon;
        const content = (
          <>
            {card.image && (
              <div
                className="br-cost-img"
                style={{
                  backgroundImage: `url(${card.image})`,
                  height: '140px',
                  borderRadius: '8px 8px 0 0',
                  margin: '-24px -24px 16px',
                }}
              />
            )}
            {Icon && (
              <div className="br-decision-icon">
                <Icon size={40} strokeWidth={1.5} />
              </div>
            )}
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            {linked && <span className="br-btn-orange">{card.cta || 'Mehr erfahren'} &rarr;</span>}
          </>
        );

        if (linked && card.to) {
          return (
            <Link key={card.title} to={card.to} className="br-decision-card">
              {content}
            </Link>
          );
        }

        return (
          <div key={card.title} className="br-decision-card" style={{ cursor: 'default' }}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export function TrustStatCards({ cards }) {
  return (
    <div className="br-benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
      {cards.map((card) => (
        <div key={card.title} className="br-benefit-card" style={{ textAlign: 'center', border: '1px solid #e5e7eb' }}>
          {card.icon && <div className="br-benefit-icon">{card.icon}</div>}
          <h3 style={{ fontSize: '18px' }}>{card.title}</h3>
          {card.desc && <p style={{ fontSize: '14px' }}>{card.desc}</p>}
        </div>
      ))}
    </div>
  );
}

export function FaqAccordion({ faqs, title = 'Häufig gestellte Fragen' }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="br-section br-bg-light">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="text-center mb-12">
          <h2 className="br-section-title">{title}</h2>
        </div>
        <div className="br-faq-grid">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="home-faq-item">
              <button
                type="button"
                className="home-faq-btn"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left' }}>{faq.q}</span>
                <ChevronDown
                  style={{
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                  color="#9ca3af"
                  size={18}
                />
              </button>
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: openFaq === i ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.3s ease',
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ borderTop: '1px solid #f9fafb', padding: '16px', color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SeoAccordionSection({ title = 'Weitere Informationen', intro, accordions }) {
  const [openSeo, setOpenSeo] = useState(null);

  return (
    <section className="br-section br-bg-light">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="text-center mb-12">
          <h2 className="br-section-title">{title}</h2>
          {intro && <p className="br-section-subtitle">{intro}</p>}
        </div>
        <div className="br-faq-grid">
          {accordions.map((item, i) => (
            <div key={item.title} className="home-faq-item">
              <button
                type="button"
                className="home-faq-btn"
                onClick={() => setOpenSeo(openSeo === i ? null : i)}
                aria-expanded={openSeo === i}
              >
                <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left' }}>{item.title}</span>
                <ChevronDown
                  style={{
                    transform: openSeo === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                  color="#9ca3af"
                  size={18}
                />
              </button>
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: openSeo === i ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.3s ease',
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ borderTop: '1px solid #f9fafb', padding: '16px', fontSize: '15px', lineHeight: '1.6' }}>
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RadexLiveSection({
  title = 'Schauen Sie uns bei der Arbeit über die Schulter.',
  intro,
  heroImage = '/img/leistungen-radex-live.webp',
  projects = [
    { image: '/img/bad1.webp', badge: 'LIVE', title: 'Komplettbadsanierung', location: 'Frankfurt am Main', desc: 'Komplettbadsanierung inklusive neuer Sanitärinstallation, bodengleicher Dusche und großformatiger Fliesen.', cta: 'Projekt ansehen' },
    { image: '/img/renov1.webp', badge: 'LIVE', title: 'Wohnungssanierung', location: 'Darmstadt', desc: 'Modernisierung inklusive neuer Leitungen, Vorwandinstallation und hochwertiger Ausstattung.', cta: 'Projekt ansehen' },
    { image: '/img/wohnzimmer.webp', badge: 'Vorher & Nachher', title: 'Badmodernisierung', location: 'Offenbach am Main', desc: 'Aus einem Badezimmer der 90er-Jahre entstand ein modernes Wohlfühlbad mit deutlich mehr Komfort.', cta: 'Vorher & Nachher ansehen' },
  ],
}) {
  return (
    <section className="br-section br-bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="br-section-title">{title}</h2>
          {intro && <p className="br-section-subtitle" style={{ maxWidth: '760px', margin: '0 auto' }}>{intro}</p>}
        </div>

        <div
          className="br-project-img mb-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            height: '420px',
            borderRadius: '8px',
          }}
          role="img"
          aria-label="Laufendes Sanierungsprojekt von Radex im Rhein-Main-Gebiet"
        />

        <div className="br-projects-grid">
          {projects.map((project) => (
            <RadexLiveProjectCard
              key={project.title}
              image={project.image}
              badge={project.badge}
              badgeClassName={project.badge === 'LIVE' ? 'live' : ''}
              title={project.title}
              subtitle={project.location}
              desc={project.desc}
              cta={project.cta}
            />
          ))}
        </div>

        <div className="text-center mt-10" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {RADEX_LIVE_URL.startsWith('/') ? (
            <Link to={RADEX_LIVE_URL} className="br-btn-outline-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Alle Projekte ansehen
            </Link>
          ) : (
            <a href={RADEX_LIVE_URL} className="br-btn-outline-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Alle Projekte ansehen
            </a>
          )}
          <a href="#kontakt" className="br-btn-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Projekt anfragen
          </a>
        </div>
      </div>
    </section>
  );
}

export function ProcessSteps({ title, intro, steps, image }) {
  return (
    <section className="br-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="br-section-title">{title}</h2>
          {intro && <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>{intro}</p>}
        </div>
        {image && (
          <div
            className="br-project-img mb-12"
            style={{ backgroundImage: `url(${image})`, height: '320px', borderRadius: '8px' }}
            role="img"
            aria-label="Planung und Ablauf einer Sanierung mit Radex"
          />
        )}
        <div className="br-process-flow">
          {steps.map((step, idx) => (
            <div key={step.title || step} style={{ display: 'flex', alignItems: 'center' }}>
              <div className="br-process-step">
                <div className="br-step-number">{idx + 1}</div>
                <h4>{step.title || step}</h4>
                {step.desc && <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>{step.desc}</p>}
              </div>
              {idx < steps.length - 1 && (
                <span className="br-step-arrow" style={{ margin: '0 8px', color: '#f97316' }}>&rarr;</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LandingContactSection({ title, intro }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const plz = form.plz?.value?.trim() || '';
    const nachricht = form.nachricht.value.trim();

    const subject = `Projektanfrage von ${vorname} ${nachname}`;
    const body =
      `Name: ${vorname} ${nachname}\n` +
      `Telefon: ${telefon}\n` +
      `E-Mail: ${email}\n` +
      (plz ? `Postleitzahl: ${plz}\n` : '') +
      `\nNachricht:\n${nachricht}`;

    window.location.href =
      `mailto:info@radex-objektmanagement.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="kontakt" className="br-section">
      <div className="container">
        <div className="text-center mb-12" style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 className="br-section-title">{title}</h2>
          {intro && <p className="br-section-subtitle">{intro}</p>}
        </div>

        <div className="br-contact-grid mb-10">
          <div className="br-contact-option" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
            <div className="br-contact-icon-wrapper"><Phone size={24} color="#f97316" /></div>
            <div>
              <strong>Telefon</strong>
              <p>06074 960620</p>
              <a href="tel:+496074960620" className="br-btn-orange" style={{ display: 'inline-block', marginTop: '12px', textDecoration: 'none' }}>
                Jetzt anrufen
              </a>
            </div>
          </div>
          <div className="br-contact-option" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
            <div className="br-contact-icon-wrapper"><MessageSquare size={24} color="#25D366" /></div>
            <div>
              <strong>WhatsApp</strong>
              <p>Fotos direkt senden</p>
              <a
                href="https://wa.me/496074960620"
                target="_blank"
                rel="noopener noreferrer"
                className="br-btn-whatsapp"
                style={{ display: 'inline-block', marginTop: '12px', textDecoration: 'none' }}
              >
                WhatsApp öffnen
              </a>
            </div>
          </div>
          <div className="br-contact-option" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
            <div className="br-contact-icon-wrapper"><MessageSquare size={24} color="#f97316" /></div>
            <div>
              <strong>Kontaktformular</strong>
              <p>Persönliche Beratung</p>
              <a href="#kontakt-form" className="br-btn-outline-orange" style={{ display: 'inline-block', marginTop: '12px', textDecoration: 'none' }}>
                Anfrage senden
              </a>
            </div>
          </div>
        </div>

        <div id="kontakt-form" className="br-contact-form-wrapper" style={{ maxWidth: '720px', margin: '0 auto', background: '#fff', padding: '32px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <form className="br-form" onSubmit={handleSubmit}>
            <div className="br-form-row">
              <div className="br-input-group">
                <label htmlFor="vorname">Vorname *</label>
                <input type="text" id="vorname" name="vorname" required />
              </div>
              <div className="br-input-group">
                <label htmlFor="nachname">Nachname *</label>
                <input type="text" id="nachname" name="nachname" required />
              </div>
            </div>
            <div className="br-form-row">
              <div className="br-input-group">
                <label htmlFor="telefon">Telefon *</label>
                <input type="tel" id="telefon" name="telefon" required />
              </div>
              <div className="br-input-group">
                <label htmlFor="email">E-Mail *</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="br-input-group">
              <label htmlFor="plz">Postleitzahl</label>
              <input type="text" id="plz" name="plz" />
            </div>
            <div className="br-input-group">
              <label htmlFor="nachricht">Nachricht *</label>
              <textarea id="nachricht" name="nachricht" rows="4" required placeholder="Bitte beschreiben Sie Ihr Projekt..." />
            </div>
            <button type="submit" className="br-btn-orange w-full" style={{ marginTop: '10px' }}>
              Kostenlose Beratung anfordern &rarr;
            </button>
            {sent && (
              <p style={{ marginTop: '16px', color: '#059669', fontSize: '14px' }}>
                Vielen Dank! Ihr E-Mail-Programm wurde geöffnet. Alternativ erreichen Sie uns unter 06074 960620.
              </p>
            )}
          </form>
          <p className="br-hero-micro mt-4" style={{ textAlign: 'center' }}>
            <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
          </p>
        </div>
      </div>
    </section>
  );
}
