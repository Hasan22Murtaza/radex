import { Link } from '../router';

export default function NavLandingCards({ title, subtitle, cards }) {
  return (
    <section className="br-section br-bg-light">
      <div className="container">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="br-section-title">{title}</h2>}
            {subtitle && <p className="br-section-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="br-nav-landing-grid">
          {cards.map((card) => {
            const Icon = card.icon;
            const content = (
              <>
                <div className="br-decision-icon">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3>{card.title}</h3>
                {card.desc && <p>{card.desc}</p>}
                <span className="br-btn-orange">{card.cta || 'Mehr erfahren'}</span>
              </>
            );

            if (card.to.startsWith('http')) {
              return (
                <a
                  key={card.title}
                  href={card.to}
                  className="br-decision-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            }

            if (card.to.includes('#')) {
              return (
                <a key={card.title} href={card.to} className="br-decision-card">
                  {content}
                </a>
              );
            }

            return (
              <Link key={card.title} to={card.to} className="br-decision-card">
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
