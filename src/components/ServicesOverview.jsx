import {
  ArrowRight,
  Bath,
  Home,
  Building2,
  Droplet,
  Zap,
  Hammer,
  ShieldAlert,
  Briefcase
} from 'lucide-react';
import imgBadsanierung from '../assets/walk_in_shower.png';
import imgSanierung from '../assets/bathroom_renovation_work.png';
import imgGeneral from '../assets/bathroom_hero.png';
import imgHeizung from '../assets/modern_sink.png';
import imgElektro from '../assets/walk_in_shower.png';
import imgInnenausbau from '../assets/bathroom_renovation_work.png';
import imgEnergetisch from '../assets/bathroom_hero.png';
import imgGewerbe from '../assets/modern_sink.png';

export default function ServicesOverview() {
  const services = [
    {
      icon: <Bath size={20} />,
      image: imgBadsanierung,
      title: 'Badsanierung',
      description: 'Komplettbäder, Badmodernisierung und harmonische Lösungen für Ihr Wohlfühlbad.',
    },
    {
      icon: <Home size={20} />,
      image: imgSanierung,
      title: 'Sanierung',
      description: 'Wohnungs-, Haus- und Altbausanierung mit Festpreisgarantie.',
    },
    {
      icon: <Building2 size={20} />,
      image: imgGeneral,
      title: 'Generalunternehmer',
      description: 'Ein Ansprechpartner für Ihr gesamtes Bauprojekt.',
    },
    {
      icon: <Droplet size={20} />,
      image: imgHeizung,
      title: 'Heizung & Sanitär',
      description: 'Moderne Heizungstechnik, Sanitär- und Badinstallation.',
    },
    {
      icon: <Zap size={20} />,
      image: imgElektro,
      title: 'Elektrotechnik',
      description: 'Installation, Smart Home und moderne Gebäudetechnik.',
    },
    {
      icon: <Hammer size={20} />,
      image: imgInnenausbau,
      title: 'Innenausbau & Umbau',
      description: 'Trockenbau, Böden, Wände & Decken – für ein neues Wohngefühl.',
    },
    {
      icon: <ShieldAlert size={20} />,
      image: imgEnergetisch,
      title: 'Energetische Sanierung',
      description: 'Dämmung, Fenster, Heizung – für mehr Effizienz und Werterhalt.',
    },
    {
      icon: <Briefcase size={20} />,
      image: imgGewerbe,
      title: 'Gewerbe & Objekt',
      description: 'Maßgeschneiderte Lösungen für Gewerbe und Immobilien.',
    }
  ];

  const handleActionClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('kontakt');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="weitere-leistungen" className="srv-section reveal">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">Leistungen</span>
          <h2 className="section-title">Unsere Leistungen im <span>Überblick</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Als zugelassener Meisterbetrieb decken wir alle Gewerke ab — von Sanitär über Elektro bis zum kompletten Innenausbau.
          </p>
        </div>

        <div className="srv-grid">
          {services.map((srv, idx) => (
            <a
              href="#kontakt"
              key={idx}
              className="srv-card"
              onClick={handleActionClick}
            >
              <div className="srv-card-image">
                <div className="srv-card-icon-wrap">
                  {srv.icon}
                </div>
                <img src={srv.image} alt={srv.title} loading="lazy" />
              </div>
              <div className="srv-card-body">
                <h3 className="srv-card-title">{srv.title}</h3>
                <p className="srv-card-desc">{srv.description}</p>
                <span className="srv-card-arrow">
                  <ArrowRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
