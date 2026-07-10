import { useEffect } from 'react';
import '../badsanierung.css';
import useSeo from '../useSeo';
import NavHubHero from '../components/NavHubHero';
import NavLandingCards from '../components/NavLandingCards';
import { ratgeberCards } from '../data/navigation';

export default function RatgeberHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Ratgeber | Sanierung & Badsanierung im Rhein-Main-Gebiet | Radex',
    description: 'Ratgeber zu Badsanierung, Wohnungssanierung, Heizung, Elektro, Energie, Kosten und Förderung – praxisnah vom SHK-Meisterbetrieb Radex.',
    path: '/ratgeber',
  });

  return (
    <main className="badsanierung-page">
      <NavHubHero
        title="Ratgeber für"
        titleSpan="Sanierung & Modernisierung"
        subtitle="Praxiswissen zu den wichtigsten Themen rund um Ihr Sanierungsprojekt."
        text="Wählen Sie ein Thema – auf den Detailseiten finden Sie ausführliche Informationen, Kostenorientierung und Antworten auf häufige Fragen."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600"
      />

      <NavLandingCards
        title="Die wichtigsten Ratgeber-Themen"
        subtitle="Von der Badsanierung bis zur Förderung – alles auf einen Blick."
        cards={ratgeberCards}
      />
    </main>
  );
}
