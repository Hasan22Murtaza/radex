import { Search, ArrowRight } from 'lucide-react';
import { Link } from '../../router';
import {
  getCategoryById,
  getPublishedArticles,
  getPopularArticles,
  getAllTags,
  formatRatgeberDate,
} from '../../data/ratgeber';

export default function RatgeberSidebar({ searchQuery = '', onSearchChange, compact = false }) {
  const categories = getPublishedArticles().reduce((acc, article) => {
    acc[article.categoryId] = (acc[article.categoryId] || 0) + 1;
    return acc;
  }, {});

  const latest = getPublishedArticles().slice(0, 3);
  const popular = getPopularArticles(3);
  const tags = getAllTags().slice(0, 12);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector('input');
    onSearchChange?.(input.value);
  };

  return (
    <aside className="ratgeber-sidebar">
      {!compact && (
        <div className="ratgeber-widget">
          <h4>Suche</h4>
          <form className="ratgeber-widget-search" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Artikel suchen…"
              defaultValue={searchQuery}
              aria-label="Ratgeber durchsuchen"
            />
            <button type="submit" aria-label="Suchen">
              <Search size={18} />
            </button>
          </form>
        </div>
      )}

      <div className="ratgeber-widget">
        <h4>Kategorien</h4>
        <ul className="ratgeber-widget-list">
          {Object.entries(categories).map(([id, count]) => {
            const cat = getCategoryById(id);
            if (!cat) return null;
            return (
              <li key={id}>
                <Link to={`/ratgeber/kategorie/${id}`}>
                  <span>{cat.title}</span>
                  <span className="ratgeber-widget-count">{count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="/ratgeber" className="ratgeber-read-more" style={{ marginTop: 12 }}>
          Alle Kategorien <ArrowRight size={14} />
        </Link>
      </div>

      <div className="ratgeber-widget">
        <h4>Neueste Artikel</h4>
        {latest.map((article) => {
          const cat = getCategoryById(article.categoryId);
          return (
            <Link key={article.slug} to={`/ratgeber/${article.slug}`} className="ratgeber-widget-mini">
              <div
                className="ratgeber-widget-mini-thumb"
                style={{ backgroundImage: `url(${article.image})` }}
                role="img"
                aria-label={article.title}
              />
              <div>
                <h5>{article.title}</h5>
                <time dateTime={article.publishedAt}>{formatRatgeberDate(article.publishedAt)}</time>
                {cat && (
                  <span className="ratgeber-category-label" style={{ display: 'inline-block', marginTop: 4 }}>
                    {cat.title}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="ratgeber-widget">
        <h4>Beliebte Artikel</h4>
        {popular.map((article) => (
          <Link key={article.slug} to={`/ratgeber/${article.slug}`} className="ratgeber-widget-mini">
            <div
              className="ratgeber-widget-mini-thumb"
              style={{ backgroundImage: `url(${article.image})` }}
              role="img"
              aria-label={article.title}
            />
            <div>
              <h5>{article.title}</h5>
              <time dateTime={article.publishedAt}>{formatRatgeberDate(article.publishedAt)}</time>
            </div>
          </Link>
        ))}
      </div>

      <div className="ratgeber-widget">
        <h4>Tags</h4>
        <div className="ratgeber-tags">
          {tags.map(({ name }) => (
            <Link
              key={name}
              to={`/ratgeber?tag=${encodeURIComponent(name)}`}
              className="ratgeber-tag"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function RatgeberSearchBar({ value, onChange, hint }) {
  return (
    <div className="ratgeber-search-wrap">
      <div className="container">
        <div className="ratgeber-search-box">
          <Search className="ratgeber-search-icon" size={20} />
          <input
            type="search"
            placeholder="Wonach suchen Sie?"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Ratgeber Live-Suche"
          />
        </div>
        {hint && <p className="ratgeber-search-hint">{hint}</p>}
      </div>
    </div>
  );
}

export function RatgeberInfoSection() {
  const items = [
    {
      title: 'Was ist diese Seite?',
      text: 'Unser Ratgeber ist die zentrale Wissensplattform rund um Sanierung, Badsanierung und Modernisierung im Rhein-Main-Gebiet.',
    },
    {
      title: 'Wie funktioniert es?',
      text: 'Nutzen Sie die Live-Suche oder wählen Sie ein Themengebiet. So finden Sie schnell den passenden Fachartikel.',
    },
    {
      title: 'Was kann ich hier tun?',
      text: 'Lesen Sie praxisnahe Artikel zu Kosten, Ablauf und Planung – und bereiten Sie Ihr Sanierungsprojekt optimal vor.',
    },
    {
      title: 'Wie geht es weiter?',
      text: 'Jeder Artikel verlinkt zu passenden Leistungen, Kontaktmöglichkeiten und weiterführenden Informationen.',
    },
  ];

  return (
    <section className="ratgeber-info-section">
      <div className="container">
        <div className="ratgeber-info-grid">
          {items.map((item) => (
            <div key={item.title} className="ratgeber-info-item">
              <div className="ratgeber-info-icon">
                <Search size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RatgeberArticleCta() {
  return (
    <section className="ratgeber-article-cta" id="kontakt">
      <h2>Haben Sie Fragen zu Ihrem Projekt?</h2>
      <p>
        Unsere Experten beraten Sie persönlich. Senden Sie uns Fotos per WhatsApp oder vereinbaren Sie eine kostenlose Erstberatung.
      </p>
      <div className="ratgeber-hero-actions">
        <a href="#kontakt" className="ratgeber-btn-primary">
          Kostenlose Beratung <ArrowRight size={16} />
        </a>
        <a
          href="https://wa.me/496074960620"
          target="_blank"
          rel="noopener noreferrer"
          className="ratgeber-btn-outline"
        >
          Fotos über WhatsApp senden
        </a>
        <a href="tel:+496074960620" className="ratgeber-btn-outline">
          Jetzt anrufen: 06074 960620
        </a>
      </div>
    </section>
  );
}
