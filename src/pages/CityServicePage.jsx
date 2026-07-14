import { useEffect } from 'react';
import { Link, Redirect } from '../router';
import { ArrowLeft, ArrowRight, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import '../badsanierung.css';
import useSeo, { buildServiceSchema } from '../useSeo';
import { cityDataMap } from '../data/cities';
import { citySeoContent } from '../data/citySeoContent';
import {
  buildCityHubPath,
  buildCityServicePath,
  findCityServiceSection,
  getCityServiceBySlug,
  listCityServiceRoutes,
} from '../data/cityServiceRoutes';

function SeoSectionBody({ section }) {
  return (
    <div className="br-city-seo-body">
      {section.description && <p>{section.description}</p>}
      {section.items?.length > 0 && (
        <ul className="br-city-seo-list">
          {section.items.map((item, itemIdx) => (
            <li key={itemIdx}>{item}</li>
          ))}
        </ul>
      )}
      {section.closingNote && <p>{section.closingNote}</p>}
      {section.content && <p>{section.content}</p>}
    </div>
  );
}

export default function CityServicePage({ cityId, serviceSlug }) {
  const city = cityDataMap[cityId];
  const seoContent = citySeoContent[cityId];
  const service = getCityServiceBySlug(serviceSlug);
  const section = findCityServiceSection(seoContent, serviceSlug);
  const hubPath = buildCityHubPath(cityId);
  const pagePath = buildCityServicePath(cityId, serviceSlug);
  const isValid = Boolean(city && service && section);

  const related = isValid
    ? listCityServiceRoutes(cityId, seoContent).filter((s) => s.slug !== serviceSlug).slice(0, 4)
    : [];

  const title = isValid
    ? `${service.titleSuffix} ${city.name} | Radex`
    : 'Sanierung | Radex';
  const description = isValid
    ? (() => {
        const raw = section.description || `${service.titleSuffix} in ${city.name} mit Radex: Planung, Umsetzung und Beratung aus einer Hand.`;
        if (raw.length <= 155) return raw;
        return `${raw.slice(0, 155).replace(/\s+\S*$/, '')}…`;
      })()
    : 'Sanierung im Rhein-Main-Gebiet mit Radex.';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityId, serviceSlug]);

  useSeo({
    title,
    description,
    path: pagePath,
    image: city?.heroImg,
    jsonLd: isValid
      ? [
          buildServiceSchema({
            name: `${service.titleSuffix} in ${city.name}`,
            description,
            path: pagePath,
          }),
        ]
      : undefined,
  });

  if (!isValid) {
    return <Redirect to={city ? hubPath : '/einsatzgebiete-rhein-main'} />;
  }

  return (
    <main className="badsanierung-page">
      <section className="br-city-service-hero" style={{ backgroundImage: `url(${city.heroImg})` }}>
        <div className="container br-city-service-hero-inner">
          <nav className="br-city-service-breadcrumb" aria-label="Brotkrumen">
            <Link to="/einsatzgebiete-rhein-main">Einsatzgebiete</Link>
            <ChevronRight size={14} />
            <Link to={hubPath}>{city.name}</Link>
            <ChevronRight size={14} />
            <span>{service.label}</span>
          </nav>
          <h1 className="br-hero-title">
            {service.titleSuffix} <br />
            <span>in {city.name}</span>
          </h1>
          <p className="br-hero-subtitle">
            Planung, Kosten und Umsetzung – klare Informationen für Ihr Projekt in {city.name}.
          </p>
          <div className="br-hero-actions br-city-hero-actions" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung</a>
            <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              Fotos per WhatsApp <MessageSquare size={18} color="#25D366" style={{ marginLeft: '8px' }} />
            </a>
            <a href="tel:+496074960620" className="br-btn-call">
              <Phone size={18} /> Anrufen
            </a>
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container br-city-service-layout">
          <Link to={hubPath} className="br-city-service-back">
            <ArrowLeft size={18} /> Zurück zur Übersicht {city.name}
          </Link>

          <article className="br-city-seo-article br-city-seo-article--standalone">
            <h2 className="br-city-seo-article-title">{section.title}</h2>
            <SeoSectionBody section={section} />
            <a href="#kontakt" className="br-city-seo-article-cta">
              Kostenlose Beratung anfragen <ArrowRight size={16} />
            </a>
          </article>

          {related.length > 0 && (
            <aside className="br-city-service-related">
              <h3>Weitere Sanierungsbereiche in {city.name}</h3>
              <div className="br-city-service-related-grid">
                {related.map((item) => (
                  <Link key={item.slug} to={item.path} className="br-city-service-related-card">
                    <span>{item.label}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </section>

      <section id="kontakt" className="br-section">
        <div className="container text-center">
          <h2 className="br-section-title">Projekt in {city.name} besprechen</h2>
          <p className="br-section-subtitle br-section-subtitle--wide">
            Senden Sie Fotos oder vereinbaren Sie einen Beratungstermin – wir melden uns zeitnah.
          </p>
          <div className="br-hero-actions" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              WhatsApp schreiben
            </a>
            <a href="tel:+496074960620" className="btn br-btn-orange">
              +49 6074 960620
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
