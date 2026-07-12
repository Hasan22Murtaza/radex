import { useEffect } from 'react';
import { Clock, User } from 'lucide-react';
import { Link, Redirect } from '../router';
import '../ratgeber.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import {
  getArticleBySlug,
  getCategoryById,
  getRelatedArticles,
  formatRatgeberDate,
} from '../data/ratgeber';
import RatgeberSidebar, { RatgeberArticleCta } from '../components/ratgeber/RatgeberSidebar';

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => ({ ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' })[c] || c)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

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
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
      </div>
    </Link>
  );
}

export default function RatgeberArticlePage({ slug }) {
  const article = getArticleBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const jsonLd = article
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          image: article.image,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          author: { '@type': 'Organization', name: article.author },
          publisher: { '@id': 'https://www.radex-objektmanagement.de/#organization' },
          mainEntityOfPage: `https://www.radex-objektmanagement.de/ratgeber/${article.slug}`,
        },
        buildFaqSchema(article.faqs),
      ].filter(Boolean)
    : [];

  useSeo(
    article
      ? { ...article.seo, image: article.image, jsonLd }
      : { title: 'Artikel nicht gefunden | Ratgeber | Radex', description: '', path: `/ratgeber/${slug}` }
  );

  if (!article) {
    return <Redirect to="/ratgeber" />;
  }

  const category = getCategoryById(article.categoryId);
  const related = getRelatedArticles(article, 3);
  const toc = article.sections.map((s) => ({
    id: slugifyHeading(s.heading),
    title: s.heading,
  }));

  return (
    <main className="ratgeber-page">
      <div
        className="ratgeber-article-hero"
        style={{ backgroundImage: `url(${article.image})` }}
        role="img"
        aria-label={article.title}
      />

      <div className="container ratgeber-layout">
        <article className="ratgeber-main">
          <header className="ratgeber-article-header">
            <nav className="ratgeber-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Startseite</Link>
              <span>/</span>
              <Link to="/ratgeber">Ratgeber</Link>
              {category && (
                <>
                  <span>/</span>
                  <Link to={`/ratgeber/kategorie/${category.id}`}>{category.title}</Link>
                </>
              )}
            </nav>
            <div className="ratgeber-meta" style={{ marginBottom: 16 }}>
              {category && (
                <Link to={`/ratgeber/kategorie/${category.id}`} className="ratgeber-category-label">
                  {category.title}
                </Link>
              )}
              <time dateTime={article.publishedAt}>{formatRatgeberDate(article.publishedAt)}</time>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <Clock size={13} /> {article.readTime} Min. Lesezeit
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <User size={13} /> {article.author}
              </span>
            </div>
            <h1>{article.title}</h1>
          </header>

          {toc.length > 1 && (
            <nav className="ratgeber-toc" aria-label="Inhaltsverzeichnis">
              <h2>Inhaltsverzeichnis</h2>
              <ol>
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="ratgeber-article-content">
            {article.sections.map((section) => (
              <section key={section.heading} id={slugifyHeading(section.heading)}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>
            ))}
          </div>

          {article.faqs?.length > 0 && (
            <section className="ratgeber-article-faq">
              <h2>Häufig gestellte Fragen</h2>
              {article.faqs.map((faq) => (
                <div key={faq.q} style={{ marginBottom: 20 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: 'var(--navy)' }}>{faq.q}</h3>
                  <p style={{ color: 'var(--rg-muted)', lineHeight: 1.65 }}>{faq.a}</p>
                </div>
              ))}
            </section>
          )}

          {article.serviceLinks?.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontWeight: 600, marginBottom: 12 }}>Passende Leistungen:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {article.serviceLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="ratgeber-btn-primary" style={{ fontSize: 14 }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <RatgeberArticleCta />

          {related.length > 0 && (
            <section className="ratgeber-related">
              <h2>Ähnliche Artikel</h2>
              <div className="ratgeber-articles-grid">
                {related.map((rel) => (
                  <ArticleCard key={rel.slug} article={rel} />
                ))}
              </div>
            </section>
          )}

          <p className="ratgeber-updated">
            Letzte Aktualisierung: {formatRatgeberDate(article.updatedAt)}
          </p>
        </article>

        <RatgeberSidebar compact />
      </div>
    </main>
  );
}
