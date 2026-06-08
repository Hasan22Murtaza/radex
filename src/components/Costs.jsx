import React, { useState, useEffect } from 'react';
import { HelpCircle, Calculator, Check, ArrowRight } from 'lucide-react';

export default function Costs() {
  const [size, setSize] = useState(8);
  const [standard, setStandard] = useState('komfort');
  const [isCalculating, setIsCalculating] = useState(false);

  // Trigger calculating animation sweep on change
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => setIsCalculating(false), 500);
    return () => clearTimeout(timer);
  }, [size, standard]);

  // Calculation formula
  const calculatePrice = () => {
    let basePrice = 0;
    let pricePerSqm = 0;

    if (standard === 'standard') {
      basePrice = 6000;
      pricePerSqm = 1600;
    } else if (standard === 'komfort') {
      basePrice = 9000;
      pricePerSqm = 2400;
    } else {
      // Premium
      basePrice = 14000;
      pricePerSqm = 3600;
    }

    return basePrice + (size * pricePerSqm);
  };

  const formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(calculatePrice());

  return (
    <section id="kosten" className="section reveal">
      <div className="container">
        <span className="section-label">Investition & Budget</span>
        <h2 className="section-title">Was kostet eine <span>Badsanierung</span>?</h2>
        <p className="section-subtitle">
          Die Kosten hängen stark von der Badezimmergröße, der Bausubstanz und Ihren Designwünschen ab. Hier finden Sie eine erste Orientierung und unseren interaktiven Rechner.
        </p>

        <div className="costs-grid">
          <div className="cost-info reveal">
            <h3>Richtwerte für das Rhein-Main-Gebiet</h3>
            <p>
              Als SHK Meisterbetrieb kalkulieren wir fair, transparent und nachvollziehbar. Hier sind typische Kostenbereiche für verschiedene Bad-Typen inklusive aller Materialien und Montage:
            </p>

            <div className="cost-tier-card">
              <div>
                <div className="cost-tier-name">Gäste-WC (Sanierung)</div>
                <div className="cost-tier-desc">Kompakte Flächen bis 4 m², Standard-WC & Waschtisch, neues Fliesenspiegel.</div>
              </div>
              <div className="cost-tier-price">ab 7.500 €</div>
            </div>

            <div className="cost-tier-card">
              <div>
                <div className="cost-tier-name">Komfort-Badezimmer</div>
                <div className="cost-tier-desc">Durchschnittlich 6–10 m², bodengleiche Dusche, Wanne, Waschtisch, Feinsteinzeugfliesen.</div>
              </div>
              <div className="cost-tier-price">ab 17.500 €</div>
            </div>

            <div className="cost-tier-card">
              <div>
                <div className="cost-tier-name">Premium- & Wellnessbad</div>
                <div className="cost-tier-desc">Flächen ab 10 m², freistehende Badewanne, Regendusche, großformatige Platten, Smart-Licht.</div>
              </div>
              <div className="cost-tier-price">ab 28.000 €</div>
            </div>

            <div style={{ backgroundColor: 'var(--gold-pale)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(200, 134, 26, 0.2)', marginTop: '24px' }}>
              <h4 style={{ fontSize: '15px', color: 'var(--navy)', marginBottom: '6px' }}>Staatliche Förderung sichern</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-light)', margin: 0, lineHeight: '1.5' }}>
                Bauen Sie barrierefrei um (z. B. bodengleiche Dusche), können Sie Zuschüsse über die KfW-Bank (Zuschuss 455-B) oder Ihre Pflegekasse (bis zu 4.000 €) erhalten. Wir beraten Sie dazu gern vorab!
              </p>
            </div>
          </div>

          <div className="calculator-box reveal">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Calculator color="var(--gold)" />
              Budget-Kalkulator
            </h3>
            <p className="subtitle">Errechnen Sie eine erste unverbindliche Aufwandsschätzung.</p>

            <div className="calc-group">
              <label className="calc-label">1. Raumgröße: {size} m²</label>
              <div className="range-container">
                <input
                  type="range"
                  min="3"
                  max="25"
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="range-slider"
                />
                <span className="range-val">{size} m²</span>
              </div>
            </div>

            <div className="calc-group">
              <label className="calc-label">2. Ausstattungs-Standard</label>
              <div className="calc-options">
                <button
                  className={`calc-btn ${standard === 'standard' ? 'active' : ''}`}
                  onClick={() => setStandard('standard')}
                >
                  Standard
                </button>
                <button
                  className={`calc-btn ${standard === 'komfort' ? 'active' : ''}`}
                  onClick={() => setStandard('komfort')}
                >
                  Komfort
                </button>
                <button
                  className={`calc-btn ${standard === 'premium' ? 'active' : ''}`}
                  onClick={() => setStandard('premium')}
                >
                  Premium
                </button>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px' }}>
                {standard === 'standard' && 'Solide Basisausstattung, klassische Sanitär-Keramik, klassische Fliesenformate.'}
                {standard === 'komfort' && 'Gehobene Sanitärobjekte (z. B. Villeroy & Boch), bodengleiche Dusche, großformatige Fliesen.'}
                {standard === 'premium' && 'Premium-Objekte, freistehende Wanne, fugenlose Wände im Duschbereich, High-End Armaturen.'}
              </p>
            </div>

            <div className={`calc-result ${isCalculating ? 'calculating' : ''}`} style={{ marginBottom: '24px' }}>
              <div>
                <div className="calc-result-title">Geschätzter Komplettpreis</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>inkl. MwSt. & Montage</div>
              </div>
              <div className="calc-result-value">{formattedPrice}</div>
            </div>

            <a href="#kontakt" className="btn btn--primary" style={{ width: '100%' }}>
              <span>Schätzung bestätigen & Beratung anfordern</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
