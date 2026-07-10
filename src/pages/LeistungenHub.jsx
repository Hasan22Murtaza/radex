import { useEffect } from 'react';
import { Camera, MessageSquare } from 'lucide-react';
import '../badsanierung.css';
import useSeo from '../useSeo';
import NavHubHero from '../components/NavHubHero';
import NavLandingCards from '../components/NavLandingCards';
import { leistungenCards } from '../data/navigation';

export default function LeistungenHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Unsere Leistungen | Sanierung & Modernisierung im Rhein-Main-Gebiet | Radex',
    description: 'Alle Leistungen von Radex im Rhein-Main-Gebiet: Generalunternehmer, Heizung & Sanitär, Elektrotechnik, Innenausbau, Energie & Förderung, Schimmel & Asbest, Express & Gewerbe.',
    path: '/leistungen',
  });

  return (
    <main className="badsanierung-page">
      <NavHubHero
        title="Unsere Leistungen für"
        titleSpan="Sanierung & Modernisierung"
        subtitle="Von der Komplettsanierung bis zur technischen Gebäudeausrüstung im Rhein-Main-Gebiet."
        text="Wählen Sie zuerst eine Kategorie – danach finden Sie die passenden Detailseiten zu Ihrem Projekt."
        image="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1600"
      />

      <NavLandingCards
        title="Was möchten Sie tun?"
        subtitle="Wählen Sie die passende Leistungskategorie für Ihr Projekt."
        cards={leistungenCards}
      />

      <section id="kontakt" className="br-section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 className="br-section-title">Unsicher, welche Leistung Sie benötigen?</h2>
          <p className="br-section-subtitle" style={{ marginBottom: '30px' }}>
            Jedes Projekt ist einzigartig. Senden Sie uns Fotos per WhatsApp oder beschreiben Sie Ihr Vorhaben.
            Unser Team empfiehlt Ihnen die passendste Lösung.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
            <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              WhatsApp uns <MessageSquare size={18} color="#25D366" style={{ marginLeft: '8px' }} />
            </a>
            <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
          </div>
          <p className="br-hero-micro" style={{ justifyContent: 'center' }}>
            <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
          </p>
        </div>
      </section>
    </main>
  );
}
