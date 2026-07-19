import { useEffect, useState } from 'react';
import {
  Camera,
  ChevronDown,
  MessageSquare,
  Phone,
  ArrowRight,
  Award,
  ShieldCheck,
  Handshake,
  UserCheck,
  Wrench,
  MapPin,
  ClipboardCheck,
  Ruler,
  Hammer,
  Layers,
  Gauge,
  Home,
} from 'lucide-react';
import useSeo, { buildFaqSchema } from '../useSeo';
import migrated from '../data/nativeMigratedServices.json';
import { RADEX_LIVE_URL } from '../constants/brand';
import '../badsanierung.css';
import '../data/migratedRich.css';

/**
 * Renders a migrated service page using the project's native landing-page
 * design (same layout as WaermepumpeLanding). The structured content is
 * produced by scripts/build-native-services.mjs from the 1:1 migrated HTML.
 */

const CARD_ICON = {
  ClipboardCheck,
  Ruler,
  Hammer,
  Wrench,
  Layers,
  Gauge,
  ShieldCheck,
  Home,
};

const WHY_RADEX = [
  { title: 'SHK-Meisterbetrieb', desc: 'Heizung, Sanitär und Gebäudetechnik unter Meisterverantwortung von Bernd Knoop.', icon: Award },
  { title: 'Alles aus einer Hand', desc: 'Planung, Koordination und Ausführung aller Gewerke – ein Ansprechpartner.', icon: Handshake },
  { title: 'Festpreisgarantie', desc: 'Transparentes Angebot nach Besichtigung – ohne versteckte Kosten.', icon: ShieldCheck },
  { title: 'Fester Ansprechpartner', desc: 'Von der ersten Beratung bis zur Übergabe begleitet Sie ein festes Team.', icon: UserCheck },
  { title: 'Koordination aller Gewerke', desc: 'SHK, Elektro, Trockenbau und Innenausbau als abgestimmtes Gesamtprojekt.', icon: Wrench },
  { title: 'Regional im Rhein-Main-Gebiet', desc: 'Über 60 Städte – kurze Wege, schnelle Reaktionszeiten und lokale Erfahrung.', icon: MapPin },
];

const PROCESS_STEPS = [
  'Kostenlose Beratung',
  'Vor-Ort-Termin',
  'Planung & Angebot',
  'Fachgerechte Ausführung',
  'Übergabe',
];

function SharedCTABlock({ isHero = false, centered = false }) {
  return (
    <div
      className={`br-hero-actions ${isHero ? '' : 'mt-8'}`}
      style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: centered ? 'center' : 'flex-start' }}
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

function PremiumIconCards({ cards }) {
  return (
    <div className="br-nav-landing-grid">
      {cards.map((card, i) => {
        const Icon = CARD_ICON[card.icon] || card.icon || ClipboardCheck;
        return (
          <div key={`${card.title}-${i}`} className="br-decision-card" style={{ cursor: 'default' }}>
            <div className="br-decision-icon">
              <Icon size={40} strokeWidth={1.5} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

function Accordion({ items, renderBody }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="br-faq-grid">
      {items.map((item, i) => (
        <div key={`${item.title || item.q}-${i}`} className="home-faq-item">
          <button
            type="button"
            className="home-faq-btn"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left' }}>
              {item.title || item.q}
            </span>
            <ChevronDown
              style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
              color="#9ca3af"
              size={18}
            />
          </button>
          <div style={{ display: 'grid', gridTemplateRows: open === i ? '1fr' : '0fr', transition: 'grid-template-rows 0.3s ease' }}>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ borderTop: '1px solid #f9fafb', padding: '16px' }}>
                {renderBody(item)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MigratedServicePage({ slug }) {
  const page = migrated.pages[slug];

  useSeo({
    title: page?.title,
    description: page?.description,
    path: `/${slug}`,
    image: page?.heroImage || undefined,
    jsonLd: page?.faqs?.length ? [buildFaqSchema(page.faqs.map((f) => ({ q: f.q, a: f.a.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() })))] : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) return null;

  const eyebrow = page.label || (page.title || slug).split('|')[0].trim();

  return (
    <main className="badsanierung-page">
      {/* HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            {eyebrow && (
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-light, #E09B2A)',
                  marginBottom: 16,
                }}
              >
                {eyebrow}
              </div>
            )}
            <h1 className="br-hero-title">{page.h1 || eyebrow}</h1>
            {page.description && <p className="br-hero-text">{page.description}</p>}
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={page.heroImage ? { backgroundImage: `url(${page.heroImage})` } : undefined} />
      </section>

      {/* LEAD */}
      {page.lead && (
        <section className="br-section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="migrated-lead" dangerouslySetInnerHTML={{ __html: page.lead }} />
          </div>
        </section>
      )}

      {/* TOPIC CARDS */}
      {page.cards?.length > 0 && (
        <section className="br-section br-bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="br-section-title">Leistungen im Überblick</h2>
              <p className="br-section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Wählen Sie den Bereich aus, der am besten zu Ihrem Projekt passt – alles aus einer Hand.
              </p>
            </div>
            <PremiumIconCards cards={page.cards} />
          </div>
        </section>
      )}

      {/* WHY RADEX */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
          </div>
          <PremiumIconCards cards={WHY_RADEX} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="br-section-title">So läuft Ihr Projekt ab</h2>
          </div>
          <div className="br-process-flow">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="br-process-step">
                  <div className="br-step-number">{idx + 1}</div>
                  <h4>{step}</h4>
                </div>
                {idx < PROCESS_STEPS.length - 1 && <ArrowRight className="br-step-arrow" size={24} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {page.faqs?.length > 0 && (
        <section className="br-section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="text-center mb-12">
              <h2 className="br-section-title">Häufig gestellte Fragen</h2>
            </div>
            <Accordion
              items={page.faqs}
              renderBody={(item) => <div className="migrated-rich" dangerouslySetInnerHTML={{ __html: item.a }} />}
            />
          </div>
        </section>
      )}

      {/* CTA */}
      <section id="kontakt" className="br-section br-bg-light">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="br-section-title">Lassen Sie sich kostenlos beraten</h2>
            <p className="br-section-subtitle mb-8">
              Senden Sie uns Fotos Ihres Projekts per WhatsApp oder vereinbaren Sie eine persönliche Beratung.
              Gemeinsam finden wir die passende Lösung für Ihr Vorhaben.
            </p>
            <SharedCTABlock centered />
            <p className="br-hero-micro mt-6" style={{ justifyContent: 'center' }}>
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
      </section>

      {/* WEITERE INFORMATIONEN */}
      {page.sections?.length > 0 && (
        <section className="br-section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="text-center mb-12">
              <h2 className="br-section-title">Weitere Informationen</h2>
            </div>
            <Accordion
              items={page.sections}
              renderBody={(item) => <div className="migrated-rich" dangerouslySetInnerHTML={{ __html: item.body }} />}
            />
          </div>
        </section>
      )}

      {/* RADEX LIVE */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Radex Live</h2>
            <p className="br-section-subtitle">Schauen Sie uns bei der Arbeit über die Schulter.</p>
          </div>
          <div className="text-center mt-8" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={RADEX_LIVE_URL} className="br-btn-outline-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Alle Projekte ansehen
            </a>
            <a href="#kontakt" className="br-btn-orange" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Projekt anfragen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
