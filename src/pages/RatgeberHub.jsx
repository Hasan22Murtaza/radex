import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Clock, Phone } from 'lucide-react';
import { Link } from '../router';
import '../ratgeber.css';
import useSeo from '../useSeo';
import {
  ratgeberCategories,
  getPublishedArticles,
  getFeaturedArticle,
  getCategoryById,
  formatRatgeberDate,
  searchArticles,
} from '../data/ratgeber';
import RatgeberSidebar, { RatgeberSearchBar, RatgeberInfoSection } from '../components/ratgeber/RatgeberSidebar';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600';
const ARTICLES_PER_PAGE = 6;

function ArticleCard({ article }) {
  const category = getCategoryById(article.categoryId);
  return (
    <Link to={`/ratgeber/${article.slug}`} className="ratgeber-article-card">
      <div
        className="ratgeber-article-card-image"
        style={{ backgroundImage: `url(${article.image})` }}
        role="img"
        aria-label={article.title}
      />
      <div className="ratgeber-article-card-body">
        <div className="ratgeber-meta">
          {category && <span className="ratgeber-category-label">{category.title}</span>}
          <time dateTime={article.publishedAt}>{formatRatgeberDate(article.publishedAt)}</time>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Clock size={13} /> {article.readTime} Min.
          </span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <span className="ratgeber-read-more">
          Weiterlesen <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

export default function RatgeberHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  useSeo({
    title: 'Ratgeber für Sanierung, Badsanierung & Modernisierung | Radex',
    description:
      'Hilfreiche Informationen rund um Badsanierung, Sanierung, Heizung, Schimmel, Asbest, Energie und Modernisierung im Rhein-Main-Gebiet.',
    path: '/ratgeber',
    image: HERO_IMAGE,
  });

  const featured = getFeaturedArticle();
  const filtered = useMemo(() => searchArticles(searchQuery), [searchQuery]);
  const latest = filtered.filter((a) => a.slug !== featured?.slug);
  const totalPages = Math.max(1, Math.ceil(latest.length / ARTICLES_PER_PAGE));
  const paginated = latest.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);
  const featuredCategory = featured ? getCategoryById(featured.categoryId) : null;

  return (
    <main className="ratgeber-page">
      <section
        className="ratgeber-hero"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="ratgeber-hero-overlay" />
        <div className="container ratgeber-hero-inner">
          <nav className="ratgeber-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Startseite</Link>
            <span>/</span>
            <span>Ratgeber</span>
          </nav>
          <h1>Ratgeber für Sanierung & Modernisierung</h1>
          <p className="ratgeber-hero-lead">
            Gut informiert. Besser entscheiden. Wer eine Wohnung, ein Haus oder ein Badezimmer modernisieren möchte,
            steht oft vor vielen Fragen. Unser Ratgeber beantwortet diese verständlich, praxisnah und unabhängig –
            für eine erfolgreiche Sanierung im Rhein-Main-Gebiet.
          </p>
          <div className="ratgeber-hero-actions">
            <a href="#kontakt" className="ratgeber-btn-primary">
              Sanierung anfragen <ArrowRight size={16} />
            </a>
            <a href="tel:+496074960620" className="ratgeber-btn-outline">
              <Phone size={16} /> Jetzt anrufen: 06074 960620
            </a>
          </div>
        </div>
      </section>

      <RatgeberSearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        hint={searchQuery ? `${filtered.length} Artikel gefunden` : 'Live-Suche – finden Sie sofort den passenden Artikel.'}
      />

      <div className="container ratgeber-layout">
        <div className="ratgeber-main">
          <section>
            <h2 className="ratgeber-section-title">Themen entdecken</h2>
            <p className="ratgeber-section-sub">
              Wählen Sie ein Themengebiet und entdecken Sie hilfreiche Fachartikel, praktische Tipps und aktuelle
              Informationen rund um Ihr Sanierungsprojekt.
            </p>
            <div className="ratgeber-categories-grid">
              {ratgeberCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link key={cat.id} to={`/ratgeber/kategorie/${cat.id}`} className="ratgeber-category-card">
                    <div className="ratgeber-category-icon">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3>{cat.title}</h3>
                    <p>{cat.desc}</p>
                  </Link>
                );
              })}
            </div>
          </section>

          {featured && !searchQuery && (
            <section className="ratgeber-featured" aria-label="Empfohlener Artikel">
              <div
                className="ratgeber-featured-image"
                style={{ backgroundImage: `url(${featured.image})` }}
                role="img"
                aria-label={featured.title}
              />
              <div className="ratgeber-featured-body">
                <div className="ratgeber-meta">
                  {featuredCategory && (
                    <span className="ratgeber-category-label">{featuredCategory.title}</span>
                  )}
                  <time dateTime={featured.publishedAt}>{formatRatgeberDate(featured.publishedAt)}</time>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={13} /> {featured.readTime} Min. Lesezeit
                  </span>
                </div>
                <h2>
                  <Link to={`/ratgeber/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p>{featured.excerpt}</p>
                <Link to={`/ratgeber/${featured.slug}`} className="ratgeber-btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Artikel lesen <ArrowRight size={16} />
                </Link>
              </div>
            </section>
          )}

          <section>
            <h2 className="ratgeber-section-title">Aktuelle Ratgeber</h2>
            {paginated.length === 0 ? (
              <div className="ratgeber-empty">
                <p>Keine Artikel gefunden. Versuchen Sie einen anderen Suchbegriff.</p>
              </div>
            ) : (
              <>
                <div className="ratgeber-articles-grid">
                  {paginated.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
                {totalPages > 1 && (
                  <div className="ratgeber-pagination">
                    <button type="button" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
                      Zurück
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                      <button
                        key={n}
                        type="button"
                        className={n === page ? 'active' : ''}
                        onClick={() => setPage(n)}
                      >
                        {n}
                      </button>
                    ))}
                    <button type="button" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
                      Weiter
                    </button>
                  </div>
                )}
                {!searchQuery && (
                  <div className="ratgeber-view-all">
                    <Link to="/ratgeber">
                      Alle Artikel ansehen <ArrowRight size={16} />
                    </Link>
                  </div>
                )}
              </>
            )}
          </section>
        </div>

        <RatgeberSidebar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </div>

      <RatgeberInfoSection />
    </main>
  );
}
