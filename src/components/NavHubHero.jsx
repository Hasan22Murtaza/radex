import { Camera, MessageSquare } from 'lucide-react';

export default function NavHubHero({ title, titleSpan, subtitle, text, image, actions }) {
  return (
    <section className="br-hero-split">
      <div className="br-hero-left">
        <div className="br-hero-content">
          <h1 className="br-hero-title">
            {title}
            {titleSpan && (
              <>
                <br />
                <span>{titleSpan}</span>
              </>
            )}
          </h1>
          {subtitle && <p className="br-hero-subtitle">{subtitle}</p>}
          {text && <p className="br-hero-text">{text}</p>}
          {actions ?? (
            <div className="br-hero-actions">
              <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
              <a
                href="https://wa.me/496074960620"
                target="_blank"
                rel="noopener noreferrer"
                className="btn br-btn-whatsapp"
              >
                WhatsApp uns <MessageSquare size={18} color="#25D366" style={{ marginLeft: '8px' }} />
              </a>
            </div>
          )}
          <p className="br-hero-micro">
            <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
          </p>
        </div>
      </div>
      {image && (
        <div className="br-hero-right" style={{ backgroundImage: `url(${image})` }} />
      )}
    </section>
  );
}
