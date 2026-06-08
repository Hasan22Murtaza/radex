import React from 'react';
import { Calendar, Expand, ArrowUpRight } from 'lucide-react';
import imgProject1 from '../assets/walk_in_shower.png';
import imgProject2 from '../assets/modern_sink.png';

export default function Examples() {
  const projects = [
    {
      title: 'Modernes Loft-Bad in Frankfurt am Main',
      description: 'Vollständige Entkernung und Neugestaltung eines Badezimmers im Dachgeschoss. Einbau einer bodengleichen Walk-In-Regendusche, anthrazitfarbener Schieferoptik-Fliesen und indirekter LED-Lichtbänder.',
      image: imgProject1,
      tag: 'Komplettbadsanierung',
      duration: '10 Werktage',
      sqm: '9,5 m²'
    },
    {
      title: 'Barrierefreie Wellness-Oase in Darmstadt',
      description: 'Zukunftssicherer Umbau mit Fokus auf Barrierearmut. Montage eines schwebenden Waschtisch-Unterschranks aus geölter Eiche, bodengleicher Duschzone mit klappbarem Duschsitz und rutschhemmenden Fliesen.',
      image: imgProject2,
      tag: 'Badmodernisierung',
      duration: '8 Werktage',
      sqm: '7,2 m²'
    }
  ];

  return (
    <section id="beispiele" className="section section--beige reveal">
      <div className="container">
        <span className="section-label">Referenzen</span>
        <h2 className="section-title">Erfolgreich sanierte <span>Badezimmer</span></h2>
        <p className="section-subtitle">
          Werfen Sie einen Blick auf einige unserer abgeschlossenen Projekte im Rhein-Main-Gebiet. Echtes Meisterhandwerk für höchste Ansprüche.
        </p>

        <div className="portfolio-grid">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="portfolio-card reveal"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="portfolio-slider">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="portfolio-content">
                <span className="portfolio-tag">{p.tag}</span>
                <h3 style={{ fontSize: '18px', color: 'var(--navy)', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '20px' }}>
                  {p.description}
                </p>
                <div className="portfolio-meta">
                  <div className="portfolio-meta-item">
                    <Calendar size={16} color="var(--gold)" />
                    <span>Dauer: {p.duration}</span>
                  </div>
                  <div className="portfolio-meta-item">
                    <Expand size={16} color="var(--gold)" />
                    <span>Größe: {p.sqm}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
          <a href="#kontakt" className="btn btn--outline-gold">
            <span>Eigenes Projekt anfragen</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
