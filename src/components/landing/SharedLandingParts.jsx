import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowRight,
  Award,
  Camera,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  FileCheck,
  Hammer,
  MessageSquare,
  MessagesSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  UserCheck,
  X,
} from 'lucide-react';
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

/** Ablaufs-page CTA set: Primary / Secondary / optional Third */
export function AblaufCTABlock({
  isHero = false,
  centered = false,
  showThird = false,
  primaryHref = '#projektphasen',
}) {
  return (
    <div
      className={`br-hero-actions ${isHero ? 'br-hero-actions--hero' : ''} ${centered ? 'br-hero-actions--centered' : ''}`}
    >
      <a href={primaryHref} className="btn br-btn-orange">
        Ablauf kennenlernen
      </a>
      <a
        href="https://wa.me/496074960620"
        target="_blank"
        rel="noopener noreferrer"
        className="btn br-btn-whatsapp br-btn-whatsapp--primary"
      >
        <MessageSquare size={20} />
        Fotos senden. Erste Einschätzung erhalten.
      </a>
      {showThird && (
        <a href="tel:+496074960620" className="btn br-btn-phone">
          <Phone size={18} /> Jetzt anrufen
        </a>
      )}
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
            {card.iconSrc ? (
              <div
                className={`br-decision-icon br-decision-icon--brand${largeIcons ? ' br-decision-icon--large' : ' br-decision-icon--small'}`}
              >
                <img src={card.iconSrc} alt="" width={iconSize + 12} height={iconSize + 12} />
              </div>
            ) : (
              Icon && (
                <div className={`br-decision-icon${largeIcons ? ' br-decision-icon--large' : ' br-decision-icon--small'}`}>
                  <Icon size={iconSize} strokeWidth={1.5} />
                </div>
              )
            )}
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            {card.actions?.length > 0 && (
              <div className="br-card-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                {card.actions.map((action) =>
                  action.href ? (
                    <a key={action.label} href={action.href} className="br-btn-orange" style={{ fontSize: '14px' }}>
                      {action.label} &rarr;
                    </a>
                  ) : (
                    <Link key={action.label} to={action.to} className="br-btn-orange" style={{ fontSize: '14px' }}>
                      {action.label} &rarr;
                    </Link>
                  )
                )}
              </div>
            )}
            {linked && !card.actions?.length && (
              <span className="br-btn-orange">{card.cta || 'Mehr erfahren'} &rarr;</span>
            )}
          </>
        );

        if (linked && card.href) {
          return (
            <a key={card.title} href={card.href} className="br-decision-card">
              {content}
            </a>
          );
        }

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

export function FaqAccordion({ faqs, title = 'Häufig gestellte Fragen', intro }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="br-section br-bg-light">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="text-center mb-12">
          <h2 className="br-section-title">{title}</h2>
          {intro && <p className="br-section-subtitle br-section-subtitle--wide">{intro}</p>}
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

export function SeoTocSection({
  title = 'Weitere Informationen',
  intro,
  sections,
  showAllContent = false,
  hideToc = false,
  panelId = 'seo-toc-knowledge-panel',
  ctaLabel = 'Kostenlose Beratung anfragen',
  ctaHref = '#kontakt',
}) {
  if (showAllContent) {
    return (
      <SeoKnowledgeDrawer
        title={title}
        intro={intro}
        sections={sections}
        showToc={!hideToc}
        panelId={panelId}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
      />
    );
  }

  const localSections = sections.filter((item) => !(item.href || item.to));
  const [activeId, setActiveId] = useState(() => localSections[0]?.id ?? null);
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1);
      if (hash && sections.some((s) => s.id === hash || s.hash === hash)) return true;
    }
    return false;
  });
  const contentRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const match = sections.find((s) => s.id === hash || s.hash === hash);
    if (!match) return;

    // Linked TOC entries live on another page — nothing to activate locally
    if (match.href || match.to) return;

    setIsOpen(true);
    setActiveId(match.id);

    const scrollToTarget = () => {
      const el = document.getElementById(hash) || contentRef.current;
      if (!el) return;
      const headerOffset = 160;
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    // Retry so this runs after page layout (destination "bottom content")
    let attempts = 0;
    const tryScroll = () => {
      if (document.getElementById(hash) || contentRef.current) {
        scrollToTarget();
        return;
      }
      if (attempts++ < 40) setTimeout(tryScroll, 50);
    };
    setTimeout(tryScroll, 80);
  }, [sections]);

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
      scrollToContent();
    },
    [scrollToContent],
  );

  const buildDestination = (item) => {
    const base = item.href || item.to;
    if (!base) return null;
    if (base.includes('#')) return base;
    const hash = item.hash || item.id;
    return `${base}#${hash}`;
  };

  // Linked TOC items open another page — their content lives there, not under this TOC
  const contentItems = localSections;

  return (
    <section className="br-section br-bg-light br-seo-toc-section">
      <div className="container br-seo-toc-container">
        <div className="text-center mb-12">
          <button
            type="button"
            className={`br-seo-toc-toggle${isOpen ? ' is-open' : ''}`}
            aria-expanded={isOpen}
            aria-controls="br-seo-toc-panel"
            onClick={() => setIsOpen((open) => !open)}
          >
            <h2 className="br-section-title">{title}</h2>
            <ChevronDown size={28} className="br-seo-toc-toggle-icon" aria-hidden="true" />
          </button>
          {intro && isOpen && <div className="br-section-subtitle br-seo-toc-intro">{intro}</div>}
        </div>

        <div
          id="br-seo-toc-panel"
          className={`br-seo-toc-panel${isOpen ? ' is-open' : ''}`}
          hidden={!isOpen}
        >
          {!hideToc && (
            <nav className="br-seo-toc" aria-label="Inhaltsverzeichnis">
              <div className="br-seo-toc-nav-body">
                <h3 className="br-seo-toc-heading">Inhaltsverzeichnis</h3>
                <ol className="br-seo-toc-list">
                  {sections.map((item) => {
                    const destination = buildDestination(item);
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
              </div>
            </nav>
          )}

          {contentItems.length > 0 && (
            <div className="br-seo-toc-content" ref={contentRef}>
              {contentItems.map((item) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="br-seo-toc-article"
                  hidden={!hideToc && activeId !== item.id}
                >
                  <h3 className="br-seo-toc-article-title">{item.title}</h3>
                  <div className="br-seo-toc-article-body">{item.content}</div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Collapsed "Alles, was Sie ... wissen sollten" heading that opens the full SEO
 * knowledge copy in a slide-over side drawer (same UX as the city pages).
 * SEO copy stays in the DOM so it remains crawlable.
 */
export function SeoKnowledgeDrawer({
  title = 'Weitere Informationen',
  intro,
  sections = [],
  ctaLabel = 'Kostenlose Beratung anfragen',
  ctaHref = '#kontakt',
  panelId = 'seo-knowledge-panel',
  showToc = false,
}) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [tocNavOpen, setTocNavOpen] = useState(false);
  const headingId = `${panelId}-heading`;
  const panelBodyRef = useRef(null);

  const linkSections = sections.filter((s) => s.href || s.to);
  const contentSections = sections.filter((s) => !(s.href || s.to));

  useEffect(() => {
    const openForHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash && sections.some((s) => s.id === hash && !(s.href || s.to))) {
        setOpen(true);
        setActiveId(hash);
      }
    };

    openForHash();
    window.addEventListener('hashchange', openForHash);
    return () => window.removeEventListener('hashchange', openForHash);
  }, [sections]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const hash = window.location.hash.slice(1);
    if (!hash) return undefined;
    const timer = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 320);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open || !showToc || contentSections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          setActiveId(id);
          if (window.location.hash.slice(1) !== id) {
            window.history.replaceState(null, '', `#${id}`);
          }
        }
      },
      { root: panelBodyRef.current, rootMargin: '-10% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    contentSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [open, showToc, contentSections]);

  const handleTocClick = useCallback((event, id) => {
    event.preventDefault();
    setActiveId(id);
    window.history.replaceState(null, '', `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTocNavOpen(false);
  }, []);

  return (
    <section className="br-section br-bg-light">
      <div className="container">
        <div className="text-center">
          <button
            type="button"
            className={`br-seo-toc-toggle${open ? ' is-open' : ''}`}
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={panelId}
          >
            <h2 id={headingId} className="br-section-title">
              {title}
            </h2>
            <ChevronDown size={28} className="br-seo-toc-toggle-icon" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={`br-city-seo-panel-root ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button
          type="button"
          className="br-city-seo-panel-backdrop"
          aria-label="Hintergrund schließen"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <aside
          id={panelId}
          className="br-city-seo-panel br-ablauf-seo-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={headingId}
        >
          <div className="br-city-seo-panel-header">
            <p className="br-bw-seo-panel-label">{title}</p>
            <button
              type="button"
              className="br-city-seo-panel-close"
              aria-label="Schließen"
              onClick={() => setOpen(false)}
            >
              <X size={22} />
            </button>
          </div>
          <div className="br-city-seo-panel-body" ref={panelBodyRef}>
            {intro && <div className="br-city-seo-panel-block br-ablauf-seo-intro">{intro}</div>}

            {showToc && contentSections.length > 0 && (
              <nav className="br-seo-drawer-toc" aria-label="Inhaltsverzeichnis">
                <button
                  type="button"
                  className={`br-seo-toc-mobile-toggle${tocNavOpen ? ' is-open' : ''}`}
                  aria-expanded={tocNavOpen}
                  aria-controls={`${panelId}-toc-list`}
                  onClick={() => setTocNavOpen((value) => !value)}
                >
                  <span>Inhaltsverzeichnis</span>
                  <ChevronDown size={20} aria-hidden="true" />
                </button>
                <div
                  id={`${panelId}-toc-list`}
                  className={`br-seo-drawer-toc-body${tocNavOpen ? ' is-open' : ''}`}
                >
                  <h3 className="br-seo-toc-heading">Inhaltsverzeichnis</h3>
                  <ol className="br-seo-toc-list">
                    {contentSections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className={activeId === section.id ? 'is-active' : undefined}
                          aria-current={activeId === section.id ? 'true' : undefined}
                          onClick={(event) => handleTocClick(event, section.id)}
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </nav>
            )}

            {contentSections.map((section) => (
              <article key={section.id} id={section.id} className="br-city-seo-panel-block">
                <h3>{section.title}</h3>
                <div className="br-ablauf-seo-article-body">{section.content}</div>
              </article>
            ))}

            {linkSections.length > 0 && (
              <ul className="br-city-seo-panel-links">
                {linkSections.map((section) => (
                  <li key={section.id}>
                    <Link to={section.href || section.to} onClick={() => setOpen(false)}>
                      {section.title}
                      <ArrowRight size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <a href={ctaHref} className="br-city-seo-panel-faq" onClick={() => setOpen(false)}>
              {ctaLabel}
            </a>
          </div>
        </aside>
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

const qualityPromisePoints = [
  { title: 'SHK-Meisterbetrieb', icon: Award },
  { title: 'Transparente Angebote', icon: FileCheck },
  { title: 'Persönlicher Ansprechpartner', icon: UserCheck },
  { title: 'Kontrollierte Übergabe', icon: ClipboardCheck },
];

/**
 * Compact, topic-specific quality block for Money Pages.
 * Shows four fixed quality points, a service-specific intro and links to the
 * central quality promise page. Placed once per page (after "Warum Radex").
 */
export function QualityPromiseBlock({ intro }) {
  return (
    <section className="br-section br-qp-block-section" aria-labelledby="br-qp-block-title">
      <div className="container">
        <div className="br-qp-block">
          <div className="br-qp-block-head">
            <span className="br-qp-block-kicker">Qualität bei Radex</span>
            <h2 id="br-qp-block-title" className="br-section-title">
              Das Radex Qualitätsversprechen
            </h2>
            {intro && <p className="br-qp-block-intro">{intro}</p>}
          </div>

          <ul className="br-qp-block-points">
            {qualityPromisePoints.map((point) => {
              const Icon = point.icon;
              return (
                <li key={point.title} className="br-qp-block-point">
                  <span className="br-qp-block-point-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <span className="br-qp-block-point-label">{point.title}</span>
                </li>
              );
            })}
          </ul>

          <div className="br-qp-block-actions">
            <Link to="/radex-qualitaetsversprechen" className="btn br-btn-orange">
              Qualitätsversprechen ansehen →
            </Link>
          </div>

          <p className="br-qp-block-legal">
            Für unsere Leistungen gelten die gesetzlichen Mängelrechte und die im jeweiligen Vertrag
            vereinbarten Regelungen.{' '}
            <Link to="/radex-qualitaetsversprechen#gewaehrleistung" className="br-qp-block-legal-link">
              Mehr zu Qualität und Gewährleistung →
            </Link>
          </p>
        </div>
      </div>
    </section>
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

/** Horizontal (desktop) / vertical (mobile) process timeline */
export function HorizontalProcessTimeline({ title, intro, steps }) {
  return (
    <section id="projektablauf" className="br-section br-horizontal-timeline-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="br-section-title">{title}</h2>
          {intro && <p className="br-section-subtitle br-section-subtitle--wide">{intro}</p>}
        </div>
        <ol className="br-horizontal-timeline">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="br-horizontal-timeline-item">
                <div className="br-horizontal-timeline-node">
                  <div className="br-horizontal-timeline-icon" aria-hidden="true">
                    {Icon ? <Icon size={22} strokeWidth={1.5} /> : <span>{idx + 1}</span>}
                  </div>
                  {idx < steps.length - 1 && <span className="br-horizontal-timeline-line" aria-hidden="true" />}
                </div>
                <div className="br-horizontal-timeline-card">
                  <span className="br-horizontal-timeline-step">Schritt {idx + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/** Two- or three-option comparison for Sanierung money pages. */
export function SanierungOptionComparison({ title, options, threeColumn = false }) {
  return (
    <section className="br-section br-bg-light br-sanierung-compare-section">
      <div className="container">
        {title && (
          <div className="text-center mb-12">
            <h2 className="br-section-title">{title}</h2>
          </div>
        )}
        <div
          className={`br-sanierung-compare-grid${threeColumn ? ' br-sanierung-compare-grid--three' : ''}`}
        >
          {options.map((option) => {
            const Icon = option.icon;
            const body = (
              <>
                {Icon && (
                  <div className="br-decision-icon br-decision-icon--large">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                )}
                <h3>{option.title}</h3>
                <p>{option.desc}</p>
                {option.cta && option.to && (
                  <span className="br-btn-orange">{option.cta} &rarr;</span>
                )}
              </>
            );

            if (option.to) {
              return (
                <Link key={option.title} to={option.to} className="br-decision-card br-sanierung-compare-card">
                  {body}
                </Link>
              );
            }

            return (
              <div key={option.title} className="br-decision-card br-sanierung-compare-card" style={{ cursor: 'default' }}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Responsive checklist for project suitability sections. */
export function ResponsiveChecklistSection({ title, intro, items, withCircleCheck = false }) {
  return (
    <section className="br-section br-checklist-section">
      <div className="container" style={{ maxWidth: '820px' }}>
        <div className="text-center mb-10">
          {title && <h2 className="br-section-title">{title}</h2>}
          {intro && <p className="br-section-subtitle br-section-subtitle--wide">{intro}</p>}
        </div>
        <ul
          className={`br-seo-checklist br-seo-checklist--grid${withCircleCheck ? ' br-seo-checklist--circle' : ''}`}
        >
          {items.map((item) => (
            <li key={item}>
              {withCircleCheck && (
                <CircleCheck size={20} strokeWidth={1.5} className="br-seo-checklist-icon" aria-hidden="true" />
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const moneyPageQualityCards = [
  {
    title: 'Fachgerechte Ausführung',
    desc: 'Alle vereinbarten Arbeiten werden nach anerkannten Regeln der Technik und den geltenden Normen ausgeführt.',
    icon: Hammer,
  },
  {
    title: 'Geprüfte Materialien',
    desc: 'Wir setzen auf qualitätsgeprüfte Produkte und Materialien, die zum geplanten Nutzungsumfang passen.',
    icon: ShieldCheck,
  },
  {
    title: 'Klare Kommunikation',
    desc: 'Sie erhalten verständliche Informationen über Projektstand, erforderliche Entscheidungen und den weiteren Ablauf.',
    icon: MessagesSquare,
  },
  {
    title: 'Saubere Baustellen',
    desc: 'Ordnung, Staubschutz und eine strukturierte Baustellenführung sind fester Bestandteil unserer Projektarbeit.',
    icon: Sparkles,
  },
  {
    title: 'Nachvollziehbare Dokumentation',
    desc: 'Wichtige Projektstände, Befunde und Abschlusspunkte werden für Sie dokumentiert.',
    icon: FileCheck,
  },
  {
    title: 'Verlässliche Projektbegleitung',
    desc: 'Ein fester Ansprechpartner begleitet Ihr Projekt von der ersten Einschätzung bis zur Übergabe.',
    icon: UserCheck,
  },
];

/** Standard six-card quality grid for SEO money pages. */
export function MoneyPageQualityGrid() {
  return (
    <section className="br-section br-bg-light" aria-labelledby="money-page-quality-title">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="money-page-quality-title" className="br-section-title">
            Qualitätsversprechen
          </h2>
        </div>
        <PremiumIconCards cards={moneyPageQualityCards} largeIcons />
      </div>
    </section>
  );
}

/** Video placeholder block for Bernd erklärt sections on money pages. */
export function BerndExplainsVideo({
  kicker = 'Bernd erklärt',
  title,
  description,
  duration = 'ca. 2 Minuten',
  poster,
  posterFallback,
  posterAlt,
  transcript,
}) {
  const posterBg = posterFallback ? `url(${poster}), url(${posterFallback})` : `url(${poster})`;

  return (
    <section id="video" className="br-section br-bg-light br-ablauf-video-section">
      <div className="container br-ablauf-video-container">
        <div className="text-center mb-10">
          <p className="br-hero-kicker">{kicker}</p>
          <h2 className="br-section-title">{title}</h2>
          {description && <p className="br-section-subtitle br-section-subtitle--wide">{description}</p>}
          <p className="br-hero-micro">Dauer: {duration}</p>
        </div>
        <div
          className="br-ablauf-video-frame br-bw-video-placeholder"
          style={{ backgroundImage: posterBg }}
          role="img"
          aria-label={posterAlt || title}
        >
          <div className="br-bw-video-placeholder-overlay">
            <span className="br-bw-video-placeholder-play" aria-hidden="true" />
            <p>Video folgt in Kürze</p>
          </div>
        </div>
        {transcript && (
          <div className="br-ablauf-video-transcript">
            <h3>Platzhalter-Skript</h3>
            <p>{transcript}</p>
          </div>
        )}
      </div>
    </section>
  );
}

/** Sticky in-page anchor navigation for hub and money pages */
export function PageAnchorNav({ items, ariaLabel = 'Seitennavigation' }) {
  if (!items?.length) return null;

  return (
    <nav className="br-page-anchor-nav" aria-label={ariaLabel}>
      <div className="container br-page-anchor-nav-inner">
        <ul className="br-page-anchor-nav-list">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="br-page-anchor-nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/** Two-column expandable SEO service grid – full copy stays in the DOM */
export function ExpandableSeoServiceGrid({
  id = 'weitere-leistungen',
  title,
  intro,
  services = [],
}) {
  const [openId, setOpenId] = useState(null);
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const toggle = (serviceId) => {
    setOpenId((current) => (current === serviceId ? null : serviceId));
  };

  return (
    <section id={id} className="br-section br-expandable-seo-services-section">
      <div className="container">
        <div className="text-center mb-12" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 className="br-section-title">{title}</h2>
          {intro && <div className="br-section-subtitle br-section-subtitle--wide">{intro}</div>}
        </div>

        <div className="br-expandable-seo-services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            const isOpen = openId === service.id;
            const panelId = `${service.id}-panel`;

            return (
              <article
                key={service.id}
                id={service.id}
                className={`br-expandable-seo-service-card${isOpen ? ' is-open' : ''}`}
              >
                {Icon && (
                  <div className="br-expandable-seo-service-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                )}
                <h3 className="br-expandable-seo-service-title">{service.title}</h3>
                <p className="br-seo-service-text">{service.lead}</p>

                <div
                  id={panelId}
                  className="br-expandable-seo-service-more"
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: prefersReducedMotion ? 'none' : 'grid-template-rows 0.35s ease',
                  }}
                  aria-hidden={!isOpen}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div className="br-expandable-seo-service-more-inner">
                      {service.more}
                      {service.link && (
                        <p className="br-expandable-seo-service-link-wrap">
                          <Link to={service.link.to} className="br-expandable-seo-service-link">
                            {service.link.label} →
                          </Link>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {service.more && (
                  <button
                    type="button"
                    className="br-expandable-seo-service-toggle"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(service.id)}
                  >
                    {isOpen ? 'Weniger anzeigen' : 'Mehr erfahren'}
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const regionalLinkPatterns = [
  (city) => ({ label: `Gewerbe- & Objektsanierung in ${city}` }),
  (city) => ({ label: `Gewerbesanierung in ${city}` }),
  (city) => ({ label: `Büroumbau in ${city}` }),
  (city) => ({ label: `Mieterausbau in ${city}` }),
];

/** Searchable regional city grid for service hub pages */
export function RegionalServiceCities({
  id = 'einsatzgebiete',
  title = 'Unsere Einsatzgebiete',
  intro,
  regionalText,
  cities = [],
}) {
  const [query, setQuery] = useState('');

  const uniqueCities = cities.filter(
    (city, index, list) => list.findIndex((entry) => entry.name === city.name) === index,
  );

  const filtered = uniqueCities.filter((city) =>
    city.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <section id={id} className="br-section br-bg-light br-regional-cities-section">
      <div className="container">
        <div className="text-center mb-10" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <p className="br-hero-kicker">Städte &amp; Gemeinden</p>
          <h2 className="br-section-title">{title}</h2>
          {intro && <p className="br-section-subtitle br-section-subtitle--wide">{intro}</p>}
        </div>

        <div className="br-regional-cities-search-wrap">
          <label htmlFor={`${id}-search`} className="sr-only">
            Stadt oder Gemeinde suchen
          </label>
          <input
            id={`${id}-search`}
            type="search"
            className="br-regional-cities-search"
            placeholder="Stadt oder Gemeinde suchen …"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
          />
        </div>

        <ul className="br-regional-cities-grid" role="list">
          {filtered.map((city, index) => {
            const pattern = regionalLinkPatterns[index % regionalLinkPatterns.length](city.name);

            return (
              <li key={`${city.id}-${city.name}`}>
                <Link
                  to={city.path}
                  className="br-regional-cities-link"
                  aria-label={`${pattern.label} – regionale Informationen ansehen`}
                >
                  {pattern.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {filtered.length === 0 && (
          <p className="br-regional-cities-empty">Keine passende Stadt gefunden. Kontaktieren Sie uns gerne direkt.</p>
        )}

        {regionalText && (
          <div className="br-regional-cities-footnote">
            <h3 className="br-regional-cities-footnote-title">Regional vor Ort im Rhein-Main-Gebiet</h3>
            <p className="br-section-subtitle br-section-subtitle--wide" style={{ marginBottom: 0 }}>
              {regionalText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/** Visual project status progress checklist */
export function ProjectStatusTrack({ title, intro, statuses }) {
  return (
    <section className="br-section br-bg-light br-project-status-section">
      <div className="container">
        {(title || intro) && (
          <div className="text-center mb-12">
            {title && <h2 className="br-section-title">{title}</h2>}
            {intro && <p className="br-section-subtitle br-section-subtitle--wide">{intro}</p>}
          </div>
        )}
        <ol className="br-project-status-track" aria-label="Projektstatus">
          {statuses.map((status, idx) => (
            <li key={status} className="br-project-status-item">
              <span className="br-project-status-check" aria-hidden="true">✓</span>
              <span className="br-project-status-label">{status}</span>
              {idx < statuses.length - 1 && <span className="br-project-status-connector" aria-hidden="true" />}
            </li>
          ))}
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
