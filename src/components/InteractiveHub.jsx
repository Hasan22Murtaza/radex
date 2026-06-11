import { useState } from 'react';
import {
  ShieldCheck,
  Layers,
  Sparkles,
  ReceiptText,
  Calculator,
  Calendar,
  ClipboardCheck,
  ArrowRight
} from 'lucide-react';

export default function InteractiveHub() {
  const [activeTab, setActiveTab] = useState('vorteile');

  // Calculator State
  const [size, setSize] = useState(8);
  const [standard, setStandard] = useState('komfort');
  const [isCalculating, setIsCalculating] = useState(false);

  const triggerAnimation = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 400);
  };

  const handleSizeChange = (e) => {
    setSize(parseInt(e.target.value));
    triggerAnimation();
  };

  const handleStandardChange = (val) => {
    setStandard(val);
    triggerAnimation();
  };

  const calculatePrice = () => {
    let basePrice;
    let pricePerSqm;

    if (standard === 'standard') {
      basePrice = 6000;
      pricePerSqm = 1600;
    } else if (standard === 'komfort') {
      basePrice = 9000;
      pricePerSqm = 2400;
    } else {
      basePrice = 14000;
      pricePerSqm = 3600;
    }

    return basePrice + (size * pricePerSqm);
  };

  const formattedPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(calculatePrice());

  // Data
  const benefits = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'Zugelassener SHK Meisterbetrieb',
      description: 'Zugelassener Innungsbetrieb unter Meisterleitung (Bernd Knoop). Wir bürgen für die strikte Einhaltung aller deutschen Qualitäts- und Trinkwassernormen.'
    },
    {
      icon: <Layers size={28} />,
      title: 'Generalunternehmer (Alles aus einer Hand)',
      description: 'Wir übernehmen die vollständige Planung, Materialbeschaffung und gewerkeübergreifende Steuerung (Fliesen, Elektro, Sanitär) für maximale Stressfreiheit.'
    },
    {
      icon: <Sparkles size={28} />,
      title: 'Saubere, staubarme Sanierung',
      description: 'Durch professionelles Abkleben und leistungsstarke Staubfresser-Luftreiniger bleibt der Feinstaub dort, wo er hingehört: in der Bauzone, nicht im Rest des Hauses.'
    },
    {
      icon: <ReceiptText size={28} />,
      title: 'Verbindliche Festpreisgarantie',
      description: 'Nach unserer detaillierten Vor-Ort-Analyse erhalten Sie ein detailliertes Festpreisangebot. Keine versteckten Kosten, keine unerwarteten Nachträge.'
    }
  ];

  const steps = [
    {
      num: '1',
      title: 'Kostenlose Erstberatung vor Ort',
      desc: 'Unser SHK-Meister begutachtet die Rohinstallationen, den Wasserdruck sowie die Bausubstanz in Ihrem Objekt, um eine fundierte und sichere Kalkulation zu garantieren.'
    },
    {
      num: '2',
      title: 'Materialauswahl & Entwurf',
      desc: 'Gemeinsam bemustern wir hochwertige Armaturen, Fliesen und Wandverkleidungen. Von zeitlosem Design bis hin zu fugenlosen Walk-In Duschwänden gestalten wir Ihren Entwurf.'
    },
    {
      num: '3',
      title: 'Festpreisangebot erhalten',
      desc: 'Sie erhalten ein transparent aufgeschlüsseltes Komplettangebot mit ausgewiesenen Material- und Arbeitswerten. Damit haben Sie absolute Budget- und Planungssicherheit.'
    },
    {
      num: '4',
      title: 'Staubarme Bauausführung',
      desc: 'Unsere eingespielten Fachhandwerker demontieren das Altbad staubarm und bauen die Sanitär-, Elektro- und Trockenbaukomponenten zügig und gewerkeübergreifend auf.'
    },
    {
      num: '5',
      title: 'Übergabe durch den Meister',
      desc: 'Nach der gründlichen Endreinigung erfolgt die technische Abnahme durch unseren Meister und die persönliche Schlüsselübergabe inklusive aller Gewährleistungspapiere.'
    }
  ];

  const handleActionClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.substring(1));
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="projekt-hub" className="interactive-hub reveal">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">Alles auf einen Blick</span>
          <h2 className="section-title">Unser interaktiver <span>Projekt-Hub</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Erfahren Sie mehr über unsere Arbeitsweise, berechnen Sie die Baukosten und verschaffen Sie sich einen Überblick über Ihre Vorteile.
          </p>
        </div>

        <div className="hub-card">
          {/* Tab Navigation */}
          <div className="hub-tabs-nav">
            <button
              className={`hub-tab-btn ${activeTab === 'vorteile' ? 'active' : ''}`}
              onClick={() => setActiveTab('vorteile')}
            >
              <ShieldCheck size={18} />
              <span>Warum Radex?</span>
            </button>
            <button
              className={`hub-tab-btn ${activeTab === 'ablauf' ? 'active' : ''}`}
              onClick={() => setActiveTab('ablauf')}
            >
              <Calendar size={18} />
              <span>Ablauf & Planung</span>
            </button>
            <button
              className={`hub-tab-btn ${activeTab === 'kalkulator' ? 'active' : ''}`}
              onClick={() => setActiveTab('kalkulator')}
            >
              <Calculator size={18} />
              <span>Budget-Rechner</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="hub-tab-content-panel">
            {activeTab === 'vorteile' && (
              <div className="fade-in-content">
                <div className="benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                  {benefits.map((b, idx) => (
                    <div key={idx} className="benefit-card" style={{ padding: '28px 24px', border: 'none', boxShadow: 'none', backgroundColor: 'var(--bg-section)' }}>
                      <div className="benefit-icon" style={{ marginBottom: '16px', backgroundColor: 'var(--white)' }}>
                        {b.icon}
                      </div>
                      <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{b.title}</h3>
                      <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{b.description}</p>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '32px' }}>
                  <a href="#kontakt" className="btn btn--primary" onClick={(e) => handleActionClick(e, '#kontakt')}>
                    <span>Jetzt Beratung vereinbaren</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'ablauf' && (
              <div className="fade-in-content">
                <div className="process-timeline" style={{ maxWidth: '850px' }}>
                  {steps.map((step, idx) => (
                    <div key={step.num} className="process-step reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
                      <div className="process-number">{step.num}</div>
                      <div className="process-step-content">
                        <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{step.title}</h3>
                        <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ backgroundColor: 'var(--bg-section)', padding: '20px 24px', borderRadius: 'var(--radius-md)', display: 'flex', gap: '16px', alignItems: 'center', maxWidth: '850px', margin: '20px auto 0' }}>
                  <ClipboardCheck size={28} color="var(--gold-dark)" style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: '13.5px', margin: 0, color: 'var(--text)' }}>
                    <strong>Unser Qualitätsanspruch:</strong> Jedes Projekt wird von einem festangestellten SHK-Meister fachlich überwacht. So stellen wir sicher, dass alle Umbauten präzise und normgerecht durchgeführt werden.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'kalkulator' && (
              <div className="fade-in-content costs-grid" style={{ gap: '32px' }}>
                <div className="cost-info">
                  <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Richtwerte für die Region</h3>
                  <p style={{ fontSize: '14.5px', marginBottom: '20px' }}>
                    Die genauen Kosten hängen von den baulichen Gegebenheiten ab. Hier finden Sie typische Preisspannen als Orientierungshilfe:
                  </p>

                  <div className="cost-tier-card" style={{ padding: '16px 20px', marginBottom: '12px' }}>
                    <div>
                      <div className="cost-tier-name" style={{ fontSize: '15px' }}>Gäste-WC Sanierung</div>
                      <div className="cost-tier-desc" style={{ fontSize: '12px' }}>Kompakte Flächen bis 4m², WC &amp; Waschtisch.</div>
                    </div>
                    <div className="cost-tier-price" style={{ fontSize: '18px' }}>ab 7.500 €</div>
                  </div>

                  <div className="cost-tier-card" style={{ padding: '16px 20px', marginBottom: '12px' }}>
                    <div>
                      <div className="cost-tier-name" style={{ fontSize: '15px' }}>Komfort-Badezimmer</div>
                      <div className="cost-tier-desc" style={{ fontSize: '12px' }}>Mittelgroß (6-10m²), bodengleiche Dusche, neue Wanne.</div>
                    </div>
                    <div className="cost-tier-price" style={{ fontSize: '18px' }}>ab 17.500 €</div>
                  </div>

                  <div className="cost-tier-card" style={{ padding: '16px 20px', marginBottom: '12px' }}>
                    <div>
                      <div className="cost-tier-name" style={{ fontSize: '15px' }}>Premium- Wellnessbad</div>
                      <div className="cost-tier-desc" style={{ fontSize: '12px' }}>Großzügige Flächen, freistehende Wanne, Regendusche.</div>
                    </div>
                    <div className="cost-tier-price" style={{ fontSize: '18px' }}>ab 28.000 €</div>
                  </div>

                  <div style={{ backgroundColor: 'var(--gold-pale)', padding: '16px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(234, 179, 8, 0.2)', marginTop: '16px' }}>
                    <h4 style={{ fontSize: '13.5px', color: 'var(--navy)', marginBottom: '4px' }}>KfW-Förderung nutzen</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-light)', margin: 0, lineHeight: '1.4' }}>
                      Bei altersgerechtem, barrierefreiem Umbau können Sie Zuschüsse der KfW (Investitionszuschuss 455-B) oder der Pflegekasse erhalten. Wir beraten Sie gern dazu.
                    </p>
                  </div>
                </div>

                <div className="calculator-box" style={{ padding: '32px', border: 'none', backgroundColor: 'var(--bg-section)' }}>
                  <h3 style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Calculator color="var(--gold-dark)" size={22} />
                    Kalkulator
                  </h3>
                  <p className="subtitle" style={{ fontSize: '13px', marginBottom: '24px' }}>Erhalten Sie eine unverbindliche Kosteneinschätzung:</p>

                  <div className="calc-group" style={{ marginBottom: '20px' }}>
                    <label className="calc-label" style={{ fontSize: '12px', marginBottom: '8px' }}>1. Badezimmer-Größe: {size} m²</label>
                    <div className="range-container">
                      <input
                        type="range"
                        min="3"
                        max="25"
                        value={size}
                        onChange={handleSizeChange}
                        className="range-slider"
                      />
                      <span className="range-val" style={{ fontSize: '16px' }}>{size} m²</span>
                    </div>
                  </div>

                  <div className="calc-group" style={{ marginBottom: '24px' }}>
                    <label className="calc-label" style={{ fontSize: '12px', marginBottom: '8px' }}>2. Ausstattungs-Standard</label>
                    <div className="calc-options" style={{ gap: '8px' }}>
                      <button
                        className={`calc-btn ${standard === 'standard' ? 'active' : ''}`}
                        onClick={() => handleStandardChange('standard')}
                        style={{ padding: '8px', fontSize: '12.5px' }}
                      >
                        Standard
                      </button>
                      <button
                        className={`calc-btn ${standard === 'komfort' ? 'active' : ''}`}
                        onClick={() => handleStandardChange('komfort')}
                        style={{ padding: '8px', fontSize: '12.5px' }}
                      >
                        Komfort
                      </button>
                      <button
                        className={`calc-btn ${standard === 'premium' ? 'active' : ''}`}
                        onClick={() => handleStandardChange('premium')}
                        style={{ padding: '8px', fontSize: '12.5px' }}
                      >
                        Premium
                      </button>
                    </div>
                    <p style={{ fontSize: '11.5px', color: 'var(--text-light)', marginTop: '8px', lineHeight: '1.4' }}>
                      {standard === 'standard' && 'Solide Standard-Einbauten, klassische Fliesenformate und funktionale Armaturen.'}
                      {standard === 'komfort' && 'Gehobene Sanitärkeramik (Villeroy & Boch etc.), bodengleiche Duschzone, Fliesen bis 60x60cm.'}
                      {standard === 'premium' && 'Exklusive Designermarken, fugenlose Wände, bodengleiche Dusche, Regenkopfbrause.'}
                    </p>
                  </div>

                  <div className={`calc-result ${isCalculating ? 'calculating' : ''}`} style={{ padding: '16px 20px', marginBottom: '20px', backgroundColor: 'var(--navy)' }}>
                    <div>
                      <div className="calc-result-title" style={{ fontSize: '11px' }}>Schätzung (schlüsselfertig)</div>
                      <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.5)' }}>inkl. Arbeitszeit, Material &amp; MwSt.</div>
                    </div>
                    <div className="calc-result-value" style={{ fontSize: '22px', color: 'var(--gold-light)' }}>{formattedPrice}</div>
                  </div>

                  <a href="#kontakt" className="btn btn--primary" style={{ width: '100%', padding: '12px' }} onClick={(e) => handleActionClick(e, '#kontakt')}>
                    <span>Schätzung absenden & Beratung buchen</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
