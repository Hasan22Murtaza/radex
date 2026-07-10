import { useEffect } from 'react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo from '../useSeo';
import NavHubHero from '../components/NavHubHero';
import NavLandingCards from '../components/NavLandingCards';
import { badsanierungCards } from '../data/navigation';

export default function BadsanierungHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Badsanierung Rhein-Main | Bad sanieren aus einer Hand | Radex',
    description: 'Badsanierung im Rhein-Main-Gebiet: Badezimmer sanieren, Dusche statt Badewanne, barrierefreies Bad, Gäste-WC, Kosten und Planung – vom SHK-Meisterbetrieb Radex.',
    path: '/badsanierung-rhein-main',
  });

  return (
    <main className="badsanierung-page">
      <NavHubHero
        title="Badsanierung im"
        titleSpan="Rhein-Main-Gebiet"
        subtitle="Bad sanieren mit Radex – SHK-Meisterbetrieb mit Erfahrung in Badplanung, Sanitärinstallation und Generalunternehmerschaft."
        text="Wählen Sie zuerst Ihr Thema – danach finden Sie alle Details zu Planung, Kosten und Ablauf auf der passenden Seite."
        image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1600"
      />

      <NavLandingCards
        title="Wählen Sie Ihr Badsanierungs-Thema"
        subtitle="Von der Komplettbadsanierung bis zum Gäste-WC – finden Sie die passende Lösung für Ihr Projekt."
        cards={badsanierungCards}
      />

      <section id="kontakt" className="br-section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 className="br-section-title">Unsicher, welche Lösung passt?</h2>
          <p className="br-section-subtitle" style={{ marginBottom: '24px' }}>
            Senden Sie uns Fotos per WhatsApp oder vereinbaren Sie eine kostenlose Beratung.
            Wir empfehlen Ihnen die passende Lösung für Ihr Bad.
          </p>
          <Link to="/badsanierung/badezimmer-sanieren" className="btn br-btn-orange">
            Alle Badsanierungs-Leistungen ansehen &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
