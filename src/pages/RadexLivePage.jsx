import { useMemo, useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from '../router';
import useSeo from '../useSeo';
import '../badsanierung.css';
import '../home.css';
import {
  radexLivePageMeta,
  radexLiveIntro,
  radexLiveFilters,
  radexLiveProjects,
  radexLiveVideos,
  radexLiveHeroImage,
} from '../data/radexLive';
import { LandingContactSection } from '../components/landing/SharedLandingParts';

function ProjectCard({ project }) {
  const badgeClass =
    project.badge === 'Live' ? 'live' : project.type === 'before-after' ? 'before-after' : '';
  const fallback = '/img/leistungen-radex-live.webp';

  return (
    <article className="home-project-card home-project-card--premium">
      <div className="home-project-img-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="home-project-img"
          loading="lazy"
          onError={(e) => {
            if (e.currentTarget.src !== fallback) {
              e.currentTarget.src = fallback;
            }
          }}
        />
        {project.badge && (
          <span className={`br-project-badge ${badgeClass}`}>{project.badge}</span>
        )}
      </div>
      <div className="home-project-body">
        <h3>{project.title}</h3>
        <p className="home-project-location">{project.location}</p>
        <p className="home-project-desc">{project.desc}</p>
        <span className="home-link-orange">{project.cta} <span aria-hidden="true">&rarr;</span></span>
      </div>
    </article>
  );
}

export default function RadexLivePage() {
  const [activeFilter, setActiveFilter] = useState('all');

  useSeo({
    title: radexLivePageMeta.title,
    description: radexLivePageMeta.description,
    path: radexLivePageMeta.path,
  });

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return radexLiveProjects;
    if (activeFilter === 'video') return [];
    if (activeFilter === 'before-after') {
      return radexLiveProjects.filter((p) => p.type === 'before-after');
    }
    if (activeFilter === 'ongoing') {
      return radexLiveProjects.filter((p) => p.status === 'ongoing');
    }
    if (activeFilter === 'completed') {
      return radexLiveProjects.filter((p) => p.status === 'completed');
    }
    return radexLiveProjects;
  }, [activeFilter]);

  const showVideos = activeFilter === 'all' || activeFilter === 'video';

  return (
    <>
      <section className="br-hero br-hero--compact" style={{ backgroundImage: `url(${radexLiveHeroImage})` }}>
        <div className="container br-hero-content">
          <span className="home-section-kicker" style={{ color: '#f97316' }}>{radexLiveIntro.kicker}</span>
          <h1 className="br-hero-title">{radexLiveIntro.title}</h1>
          <p className="br-hero-subtitle" style={{ maxWidth: '720px' }}>{radexLiveIntro.subtitle}</p>
          <a href="#projekte" className="btn br-btn-orange">
            Projekte entdecken <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>

      <section id="projekte" className="home-section bg-white">
        <div className="container">
          <div className="home-radex-live-filters" role="tablist" aria-label="Projektfilter">
            {radexLiveFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                className={`home-hub-tab ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 && (
            <div className="home-radex-live-projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {showVideos && radexLiveVideos.length > 0 && (
            <div className="home-radex-live-videos">
              <h2 className="text-2xl font-bold text-navy" style={{ marginBottom: '24px' }}>
                {activeFilter === 'video' ? 'Projekt-Videos' : 'Aktuelle Videos'}
              </h2>
              <div className="home-radex-live-videos-grid">
                {radexLiveVideos.map((video) => (
                  <div key={video.id} className="home-radex-live-video-card">
                    <div className="home-radex-live-video-card-embed">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="home-radex-live-video-card-body">
                      <div className="home-radex-live-badge" style={{ display: 'inline-flex', marginBottom: '12px' }}>
                        <Play size={14} fill="#f97316" /> Video
                      </div>
                      <h3>{video.title}</h3>
                      <p className="home-project-location">{video.location}</p>
                      <p className="home-project-desc">{video.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredProjects.length === 0 && activeFilter !== 'video' && (
            <p className="text-center text-gray-600" style={{ padding: '48px 0' }}>
              In dieser Kategorie werden bald weitere Projekte veröffentlicht.
            </p>
          )}

          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/" className="home-btn-orange" style={{ display: 'inline-flex' }}>
              Zurück zur Startseite <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <LandingContactSection
        title="Ihr Projekt auf Radex Live?"
        intro="Planen Sie eine Sanierung im Rhein-Main-Gebiet? Kontaktieren Sie uns – und verfolgen Sie Ihr Projekt transparent von Anfang an."
      />
    </>
  );
}
