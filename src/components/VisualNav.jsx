import React from 'react';
import { ArrowRight } from 'lucide-react';

// Import images
import imgCosts from '../assets/modern_sink.png';
import imgProcess from '../assets/walk_in_shower.png';
import imgPlanning from '../assets/bathroom_renovation_work.png';
import imgBenefits from '../assets/bathroom_hero.png';

export default function VisualNav() {
  const cards = [
    {
      id: 'vorteile',
      title: 'Vorteile',
      description: 'Warum Radex Ihr idealer Partner für Badsanierungen ist.',
      image: imgBenefits,
      btnText: 'Vorteile ansehen',
    },
    {
      id: 'planung',
      title: 'Badplanung',
      description: 'Wie wir Ihr Traumbad Schritt für Schritt digital planen.',
      image: imgPlanning,
      btnText: 'Zur Planung',
    },
    {
      id: 'ablauf',
      title: 'Ablauf',
      description: 'Von der Entkernung bis zur Schlüsselübergabe.',
      image: imgProcess,
      btnText: 'Ablauf entdecken',
    },
    {
      id: 'kosten',
      title: 'Kosten & Preise',
      description: 'Transparente Preisklassen und Online-Kostenrechner.',
      image: imgCosts,
      btnText: 'Kosten kalkulieren',
    },
    {
      id: 'beispiele',
      title: 'Referenzen',
      description: 'Vorher/Nachher-Beispiele und fertige Bäder im Umland.',
      image: imgProcess,
      btnText: 'Projekte ansehen',
    },
    {
      id: 'kontakt',
      title: 'Kontakt',
      description: 'Jetzt unverbindliches Beratungsgespräch vor Ort anfragen.',
      image: imgPlanning,
      btnText: 'Termin anfragen',
    }
  ];

  const handleCardClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="visual-nav">
      <div className="container">
        <div className="visual-nav-grid">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className="visual-nav-card reveal"
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              <div className="visual-nav-img">
                <img src={card.image} alt={card.title} />
                <div className="visual-nav-img-overlay"></div>
              </div>
              <div className="visual-nav-content">
                <h3 className="visual-nav-title">{card.title}</h3>
                <p className="visual-nav-text">{card.description}</p>
                <a
                  href={`#${card.id}`}
                  onClick={(e) => handleCardClick(e, card.id)}
                  className="visual-nav-btn"
                >
                  <span>{card.btnText}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
