import { useEffect } from 'react';
import { Link, Redirect } from '../router';
import '../ratgeber.css';
import useSeo from '../useSeo';
import {
  getCategoryById,
  getArticlesByCategory,
  formatRatgeberDate,
} from '../data/ratgeber';
import RatgeberSidebar, { RatgeberInfoSection } from '../components/ratgeber/RatgeberSidebar';
import { Clock, ArrowRight } from 'lucide-react';

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

export default function RatgeberCategoryPage({ categoryId }) {
  const category = getCategoryById(categoryId);
  const articles = category ? getArticlesByCategory(categoryId) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  useSeo(
    category
      ? {
          title: `${category.title} | Ratgeber | Radex`,
          description: `${category.desc} – Fachartikel und Tipps im Radex Ratgeber für das Rhein-Main-Gebiet.`,
          path: `/ratgeber/kategorie/${categoryId}`,
        }
      : { title: 'Kategorie | Ratgeber | Radex', description: '', path: '/ratgeber' }
  );

  if (!category) {
    return <Redirect to="/ratgeber" />;
  }

  const Icon = category.icon;

  return (
    <main className="ratgeber-page">
      <section className="br-section br-bg-light" style={{ padding: '48px 0' }}>
        <div className="container">
          <nav className="ratgeber-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Startseite</Link>
            <span>/</span>
            <Link to="/ratgeber">Ratgeber</Link>
            <span>/</span>
            <span>{category.title}</span>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
            <div className="ratgeber-category-icon">
              <Icon size={28} strokeWidth={1.5} />
            </div>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
              {category.title}
            </h1>
          </div>
          <p style={{ color: 'var(--rg-muted)', maxWidth: 640, lineHeight: 1.6 }}>{category.desc}</p>
          {category.serviceLink && (
            <Link to={category.serviceLink} className="ratgeber-btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>
              Zur Leistungsseite <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </section>

      <div className="container ratgeber-layout">
        <div className="ratgeber-main">
          <h2 className="ratgeber-section-title">{articles.length} Artikel</h2>
          {articles.length === 0 ? (
            <div className="ratgeber-empty">
              <p>In dieser Kategorie sind noch keine Artikel veröffentlicht.</p>
              <Link to="/ratgeber" className="ratgeber-read-more">
                Zurück zum Ratgeber <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="ratgeber-articles-grid">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
        <RatgeberSidebar compact />
      </div>

      <RatgeberInfoSection />
    </main>
  );
}
