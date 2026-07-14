import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Camera, ChevronDown, MessageSquare, Phone } from 'lucide-react';
import { Link } from '../../router';
import { RADEX_LIVE_URL } from '../../constants/brand';
import testVideo from '../../assets/test.mp4';
import personImage from '../../assets/Screenshot_5.png';

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
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a
        href="https://wa.me/496074960620"
        target="_blank"
        rel="noopener noreferrer"
        className="btn br-btn-whatsapp br-btn-whatsapp--primary"
      >
        <MessageSquare size={20} />
        Fotos per WhatsApp senden
      </a>
      <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
      <a href="tel:+496074960620" className="btn br-btn-phone">
        <Phone size={18} /> Jetzt anrufen
      </a>
    </div>
  );
}

export function PremiumIconCards({ cards, linked = false, compactIcons = false, largeIcons = false }) {
  const iconSize = compactIcons ? 20 : largeIcons ? 36 : 28;
  return (
    <div
      className={`br-nav-landing-grid${compactIcons ? ' br-nav-landing-grid--compact' : ''}${largeIcons ? ' br-nav-landing-grid--large-icons' : ''}`}
    >
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
              <div className={`br-decision-icon${largeIcons ? ' br-decision-icon--large' : ' br-decision-icon--small'}`}>
                <Icon size={iconSize} strokeWidth={1.5} />
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

export function SeoTocSection({ title = 'Weitere Informationen', intro, sections, showAllContent = false }) {
  const [activeId, setActiveId] = useState(() => sections[0]?.id ?? null);
  const contentRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sections.some((s) => s.id === hash)) {
      setActiveId(hash);
      if (showAllContent) {
        requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      } else {
        requestAnimationFrame(() => {
          contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }, [sections, showAllContent]);

  const scrollToContent = useCallback(() => {
    requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const handleTocClick = useCallback(
    (e, id) => {
      e.preventDefault();
      setActiveId(id);
      window.history.replaceState(null, '', `#${id}`);
      if (showAllContent) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        scrollToContent();
      }
    },
    [scrollToContent, showAllContent],
  );

  return (
    <section className="br-section br-bg-light br-seo-toc-section">
      <div className="container br-seo-toc-container">
        <div className="text-center mb-12">
          <h2 className="br-section-title">{title}</h2>
          {intro && <div className="br-section-subtitle br-seo-toc-intro">{intro}</div>}
        </div>

        <nav className="br-seo-toc" aria-label="Inhaltsverzeichnis">
          <h3 className="br-seo-toc-heading">Inhaltsverzeichnis</h3>
          <ol className="br-seo-toc-list">
            {sections.map((item) => {
              const destination = item.href || item.to;
              const isActive = activeId === item.id;
              const linkClassName = isActive ? 'is-active' : undefined;

              if (destination) {
                return (
                  <li key={item.id}>
                    <Link to={destination} className={linkClassName} aria-current={isActive ? 'true' : undefined}>
                      {item.title}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={linkClassName}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={(e) => handleTocClick(e, item.id)}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <div
          className={`br-seo-toc-content${showAllContent ? ' br-seo-toc-content--all' : ''}`}
          ref={contentRef}
        >
          {sections.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="br-seo-toc-article"
              hidden={!showAllContent && activeId !== item.id}
            >
              <h3 className="br-seo-toc-article-title">{item.title}</h3>
              <div className="br-seo-toc-article-body">{item.content}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BerndKnoopWelcome({
  introText = 'Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihr Sanierungsprojekt von der technischen Planung bis zur fertigen Übergabe – persönlich, transparent und zum Festpreis.',
}) {
  return (
    <div className="br-bernd-welcome">
      <div className="br-bernd-welcome-grid">
        <div className="br-bernd-welcome-video">
          <video
            src={testVideo}
            controls
            playsInline
            poster="/img/radex-unternehmenspraesentation-poster.webp"
            title="Bernd Knoop – SHK-Meister & Betriebsleiter"
          />
        </div>
        <div className="br-bernd-welcome-profile">
          <span className="br-bernd-welcome-kicker">Persönlich an Ihrer Seite</span>
          <h3 className="br-bernd-welcome-name">Bernd Knoop</h3>
          <p className="br-bernd-welcome-role">SHK-Meister & Betriebsleiter</p>
          <p className="br-bernd-welcome-text">{introText}</p>
          <blockquote className="br-bernd-welcome-quote">
            „Als SHK-Meisterbetrieb und Generalunternehmer stehen wir für handwerkliche Qualität,
            klare Kommunikation und verlässliche Umsetzung – im gesamten Rhein-Main-Gebiet.“
          </blockquote>
          <div className="br-bernd-welcome-row">
            <img
              src={personImage}
              alt="Bernd Knoop, SHK-Meister und Betriebsleiter"
              className="br-bernd-welcome-photo"
              loading="lazy"
            />
            <a href="#kontakt" className="br-btn-orange">
              Projekt besprechen <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ImageCardGrid({ cards, linked = false }) {
  return (
    <div className="br-nav-landing-grid br-image-card-grid">
      {cards.map((card) => {
        const content = (
          <>
            {card.image && (
              <div
                className="br-cost-img br-nav-card-img"
                style={{ backgroundImage: `url(${card.image})` }}
                role="img"
                aria-label={card.imageAlt || card.title}
              />
            )}
            <h3>{card.title}</h3>
            {card.desc && <p>{card.desc}</p>}
            {linked && card.to && (
              <span className="br-btn-orange">{card.cta || 'Mehr erfahren'} &rarr;</span>
            )}
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
          <div key={card.title} className="br-decision-card br-decision-card--static">
            {content}
          </div>
        );
      })}
    </div>
  );
}

export function SectionTransition({ title, children }) {
  return (
    <div className="br-section-transition">
      <div className="container">
        {title && <h2 className="br-section-transition-title">{title}</h2>}
        <p className="br-section-transition-text">{children}</p>
      </div>
    </div>
  );
}

export function TrustUspCards({ cards }) {
  return (
    <div className="br-trust-usp-grid">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.title} className="br-trust-usp-card">
            <div
              className="br-trust-usp-img"
              style={{ backgroundImage: `url(${card.image})` }}
              role="img"
              aria-label={card.imageAlt || card.title}
            />
            {Icon && (
              <div className="br-trust-usp-icon">
                <Icon size={22} strokeWidth={1.5} color="#f97316" />
              </div>
            )}
            <h3>{card.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export function RadexLiveSection({
  title = 'Schauen Sie uns bei der Arbeit über die Schulter.',
  intro,
  heroImage = '/img/leistungen-radex-live.webp',
  showWelcomeVideo = false,
  berndIntroText,
  projects = [
    { image: '/img/bad1.webp', badge: 'LIVE', title: 'Komplettbadsanierung', location: 'Frankfurt am Main', desc: 'Komplettbadsanierung inklusive neuer Sanitärinstallation, bodengleicher Dusche und großformatiger Fliesen.', cta: 'Projekt ansehen' },
    { image: '/img/renov1.webp', badge: 'LIVE', title: 'Wohnungssanierung', location: 'Darmstadt', desc: 'Modernisierung inklusive neuer Leitungen, Vorwandinstallation und hochwertiger Ausstattung.', cta: 'Projekt ansehen' },
    { image: '/img/wohnzimmer.webp', badge: 'Vorher & Nachher', title: 'Badmodernisierung', location: 'Offenbach am Main', desc: 'Aus einem Badezimmer der 90er-Jahre entstand ein modernes Wohlfühlbad mit deutlich mehr Komfort.', cta: 'Vorher & Nachher ansehen' },
  ],
}) {
  return (
    <section className="br-section br-bg-light br-radex-live-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="br-section-title">{title}</h2>
          {intro && <p className="br-section-subtitle br-radex-live-intro">{intro}</p>}
        </div>

        {showWelcomeVideo && <BerndKnoopWelcome introText={berndIntroText} />}

        {!showWelcomeVideo && heroImage && (
          <div
            className="br-project-img br-radex-live-hero mb-10"
            style={{ backgroundImage: `url(${heroImage})` }}
            role="img"
            aria-label="Laufendes Sanierungsprojekt von Radex im Rhein-Main-Gebiet"
          />
        )}

        <div className="br-projects-grid br-radex-live-projects">
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

export function PremiumTimeline({ title, intro, image, imageAlt, steps }) {
  return (
    <section className="br-section br-premium-timeline-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="br-section-title">{title}</h2>
          {intro && (
            <p className="br-section-subtitle br-section-subtitle--wide">{intro}</p>
          )}
        </div>
        {image && (
          <div
            className="br-project-img br-premium-timeline-hero mb-12"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={imageAlt || 'Projektplanung und Ablauf einer Sanierung'}
          />
        )}
        <ol className="br-premium-timeline">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="br-premium-timeline-item">
                <div className="br-premium-timeline-marker" aria-hidden="true">
                  <span className="br-premium-timeline-number">{idx + 1}</span>
                </div>
                <article className="br-premium-timeline-card">
                  {step.image && (
                    <div
                      className="br-premium-timeline-img"
                      style={{ backgroundImage: `url(${step.image})` }}
                      role="img"
                      aria-label={step.imageAlt || step.title}
                    />
                  )}
                  <div className="br-premium-timeline-body">
                    {Icon && (
                      <div className="br-premium-timeline-icon">
                        <Icon size={26} strokeWidth={1.5} />
                      </div>
                    )}
                    <p className="br-premium-timeline-step-label">Schritt {idx + 1}</p>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
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
