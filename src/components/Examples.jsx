import { ArrowRight } from 'lucide-react';
import { Link } from '../router';
import { RADEX_LIVE_URL } from '../constants/brand';

export default function Examples() {
  const projects = [
    {
      img: '/img/home-sanierung.webp',
      title: 'Wohnungssanierung',
      location: 'Offenbach am Main',
      badge: 'live',
    },
    {
      img: '/img/home-hero.webp',
      title: 'Haussanierung',
      location: 'Darmstadt',
      badge: null,
    },
    {
      img: '/img/Komplettbadsanierung.jpg',
      title: 'Altbausanierung',
      location: 'Frankfurt am Main',
      badge: 'before-after',
    },
    {
      img: '/img/leistungen-radex-live.webp',
      title: 'Komplettsanierung',
      location: 'Rödermark',
      badge: null,
    },
  ];

  const FALLBACK_IMG = '/img/leistungen-radex-live.webp';

  return (
    <section id="beispiele" className="home-section bg-white">
      <div className="container">
        <div className="home-split home-split--projects">
          <div className="home-split-left">
            <span className="home-section-kicker">Referenzen</span>
            <h2 className="text-3xl font-bold text-navy">Aktuelle Projekte & Referenzen</h2>
            <p className="text-gray-600 home-section-intro-text">
              Verfolgen Sie laufende Baustellen, entdecken Sie abgeschlossene Sanierungen und
              Vorher/Nachher-Vergleiche aus dem Rhein-Main-Gebiet – transparent auf Radex Live.
            </p>
            <Link to={RADEX_LIVE_URL} className="home-btn-orange">
              Alle Projekte ansehen <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-split-right">
            <div className="home-projects-grid">
              {projects.map((project, idx) => (
                <Link key={idx} to={RADEX_LIVE_URL} className="home-project-card home-project-card--premium">
                  <div className="home-project-img-wrapper">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="home-project-img"
                      loading="lazy"
                      onError={(e) => {
                        if (e.currentTarget.src !== FALLBACK_IMG) {
                          e.currentTarget.src = FALLBACK_IMG;
                        }
                      }}
                    />
                    {project.badge === 'live' && <span className="br-project-badge live">Radex Live</span>}
                    {project.badge === 'before-after' && <span className="br-project-badge before-after">Vorher/Nachher</span>}
                  </div>
                  <div className="home-project-body">
                    <h3>{project.title}</h3>
                    <p className="home-project-location">{project.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
