import React from 'react';
import { ShieldCheck, Layers, Sparkles, ReceiptText } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'SHK Meisterbetrieb',
      description: 'Zugelassener Fachbetrieb unter Meisterleitung (Bernd Knoop). Wir garantieren eine fachgerechte Installation sämtlicher Wasser- und Heizungsleitungen nach aktuellen DIN-Normen.'
    },
    {
      icon: <Layers size={28} />,
      title: 'Generalunternehmer (Aus einer Hand)',
      description: 'Vergessen Sie die mühsame Koordinierung von Fliesenlegern, Elektrikern und Trockenbauern. Wir übernehmen die gesamte Steuerung, Planung und Gewährleistung für Ihr Projekt.'
    },
    {
      icon: <Sparkles size={28} />,
      title: 'Staubarme Badsanierung',
      description: 'Dank moderner Staubfresser-Maschinen und sorgfältiger Abklebung bleibt die Belastung für Ihre restlichen Wohnräume minimal. Wir sanieren materialschonend und sauber.'
    },
    {
      icon: <ReceiptText size={28} />,
      title: 'Echte Festpreis-Garantie',
      description: 'Nach einer detaillierten Vor-Ort-Analyse erhalten Sie ein verbindliches Komplettangebot. Jedes Gewerk ist aufgeführt – keine versteckten Kosten oder böse Überraschungen.'
    }
  ];

  return (
    <section id="vorteile" className="section section--beige reveal">
      <div className="container">
        <span className="section-label">Ihre Vorteile</span>
        <h2 className="section-title">Warum eine Badsanierung mit <span>Radex</span>?</h2>
        <p className="section-subtitle">
          Als inhabergeführter Meisterbetrieb im Rhein-Main-Gebiet stehen wir für erstklassiges Handwerk, Termintreue und persönliche Betreuung auf Augenhöhe.
        </p>

        <div className="benefits-grid">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="benefit-card reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="benefit-icon">
                {b.icon}
              </div>
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
