import { useEffect } from 'react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo from '../useSeo';
import NavHubHero from '../components/NavHubHero';
import { leistungenCategories } from '../data/navigation';

export default function LeistungenCategoryPage({ categoryId }) {
  const category = leistungenCategories[categoryId];

  useSeo(
    category?.seo ?? {
      title: 'Leistungen | Radex',
      description: 'Leistungen von Radex im Rhein-Main-Gebiet.',
      path: `/leistungen/${categoryId}`,
    }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) return null;

  return (
    <main className="badsanierung-page">
      <NavHubHero
        title={category.title}
        subtitle={category.subtitle}
        text="Wählen Sie die passende Detailseite für Ihr Projekt."
        image="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-8">
            <Link to="/leistungen" className="link-orange" style={{ fontSize: '14px', fontWeight: 600 }}>
              &larr; Zurück zu Unsere Leistungen
            </Link>
          </div>
          <div className="br-nav-landing-grid">
            {category.subpages.map((page) => {
              const Icon = page.icon;
              return (
                <Link key={page.title} to={page.to} className="br-decision-card">
                  <div className="br-decision-icon">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3>{page.title}</h3>
                  <p>{page.desc}</p>
                  <span className="br-btn-orange">Mehr erfahren</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
