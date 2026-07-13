import { Link } from '../router';
import { Bath, Building2, Check, Flame, Zap, Hammer, Leaf, ArrowRight } from 'lucide-react';

const BAD_IMAGE = '/img/home-badsanierung.webp';
const SANIERUNG_IMAGE = '/img/home-sanierung.webp';
const FALLBACK_IMG = '/img/renov1.webp';

export default function ServicesOverview() {
  const services = [
    {
      img: BAD_IMAGE,
      icon: <Bath size={22} color="#fff" />,
      title: 'Badsanierung',
      desc: 'Komplette Badsanierung im Rhein-Main-Gebiet – von Gäste-WC und barrierefreiem Bad bis zur hochwertigen Komplettmodernisierung. Als SHK-Meisterbetrieb übernehmen wir Sanitär, Fliesen, Elektro und Koordination aller Gewerke aus einer Hand.',
      bullets: ['Badezimmer sanieren & modernisieren', 'Barrierefreies Bad & Walk-in-Dusche', 'Festpreisangebot nach Besichtigung'],
      link: '/badsanierung-rhein-main',
    },
    {
      img: SANIERUNG_IMAGE,
      icon: <Building2 size={22} color="#fff" />,
      title: 'Sanierung',
      desc: 'Wohnungs-, Haus- und Altbausanierung sowie Komplettsanierung – planbar, koordiniert und zum Festpreis. Radex begleitet Sie als Generalunternehmer von der Bestandsaufnahme bis zur schlüsselfertigen Übergabe im gesamten Rhein-Main-Gebiet.',
      bullets: ['Wohnungssanierung & Haussanierung', 'Altbausanierung & Komplettsanierung', 'Generalunternehmer aus einer Hand'],
      link: '/sanierung-rhein-main',
    },
  ];

  const additionalServices = [
    { icon: <Flame size={20} color="#f97316" />, title: 'Heizung & Sanitär', desc: 'Heizungsmodernisierung & Sanitärtechnik', link: '/heizung-sanitaer-rhein-main' },
    { icon: <Zap size={20} color="#f97316" />, title: 'Elektrotechnik', desc: 'Elektroinstallation & Gebäudetechnik', link: '/elektroinstallation-rhein-main' },
    { icon: <Hammer size={20} color="#f97316" />, title: 'Innenausbau & Umbau', desc: 'Trockenbau, Grundrisse & Umbauten', link: '/innenausbau-umbau-rhein-main' },
    { icon: <Leaf size={20} color="#f97316" />, title: 'Energetische Sanierung', desc: 'Dämmung, Fenster & Energieeffizienz', link: '/energetische-sanierung-rhein-main' },
  ];

  return (
    <section className="home-section bg-white">
      <div className="container">
        <div className="home-section-intro">
          <span className="home-section-kicker">Unsere Kernleistungen</span>
          <h2 className="text-3xl font-bold text-navy">Wie können wir Ihnen helfen?</h2>
          <p className="text-gray-600 text-lg home-section-intro-text">
            Wählen Sie Ihren Schwerpunkt – wir begleiten Sie von der ersten Idee bis zur fertigen Übergabe.
          </p>
        </div>

        <div className="home-grid-2-main">
          {services.map((service, idx) => (
            <article key={idx} className="home-service-card home-service-card--main">
              <div className="home-service-img-wrapper home-service-img-wrapper--main">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  onError={(e) => {
                    if (e.currentTarget.src !== FALLBACK_IMG) {
                      e.currentTarget.src = FALLBACK_IMG;
                    }
                  }}
                />
                <div className="home-service-icon">
                  {service.icon}
                </div>
              </div>
              <div className="home-service-content">
                <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                <p className="text-sm text-gray-600 home-service-desc">
                  {service.desc}
                </p>
                <ul className="home-service-bullets">
                  {service.bullets.map((bullet, i) => (
                    <li key={i}>
                      <Check size={16} color="#1E3A8A" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="home-link-orange">
                  Mehr erfahren <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="home-additional-services">
          <div className="home-additional-services-header">
            <h3 className="text-xl font-bold text-navy">Weitere Leistungen</h3>
            <p className="text-gray-600 text-sm">
              Ergänzende Gewerke und Spezialleistungen – koordiniert und aus einer Hand.
            </p>
          </div>
          <div className="home-grid-4 home-additional-grid">
            {additionalServices.map((service, idx) => (
              <Link key={idx} to={service.link} className="home-additional-card">
                <div className="home-additional-card-icon">{service.icon}</div>
                <div>
                  <strong>{service.title}</strong>
                  <span>{service.desc}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/leistungen" className="home-btn-orange" style={{ display: 'inline-flex' }}>
              Alle Leistungen ansehen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
