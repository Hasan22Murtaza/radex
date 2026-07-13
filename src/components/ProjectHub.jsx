import { useState } from 'react';
import { Link } from '../router';
import { ShieldCheck, Users, Sparkles, BadgeCheck, ArrowRight, MessageSquare, Search, FileText, Hammer, KeyRound, Bath, Home as HomeIcon, Gem } from 'lucide-react';

export default function ProjectHub() {
  const [tab, setTab] = useState('why');

  const whyItems = [
    { icon: <ShieldCheck size={28} color="#f97316" strokeWidth={1.5} />, title: 'SHK-Meisterbetrieb', desc: 'Zugelassener Innungsbetrieb mit fachgerechter Ausführung nach aktuellen Normen.' },
    { icon: <Users size={28} color="#f97316" strokeWidth={1.5} />, title: 'Alles aus einer Hand', desc: 'Generalunternehmer für Planung, Koordination und Ausführung aller Gewerke.' },
    { icon: <Sparkles size={28} color="#f97316" strokeWidth={1.5} />, title: 'Staubarme Sanierung', desc: 'Professionelle Schutzmaßnahmen für eine saubere und sichere Bauphase.' },
    { icon: <BadgeCheck size={28} color="#f97316" strokeWidth={1.5} />, title: 'Festpreisgarantie', desc: 'Klare Angebote ohne versteckte Kosten – für maximale Planungssicherheit.' },
  ];

  const processSteps = [
    { number: '01', icon: <MessageSquare size={24} color="#f97316" />, title: 'Anfrage' },
    { number: '02', icon: <Search size={24} color="#f97316" />, title: 'Vor-Ort-Besichtigung' },
    { number: '03', icon: <FileText size={24} color="#f97316" />, title: 'Festpreisangebot' },
    { number: '04', icon: <Hammer size={24} color="#f97316" />, title: 'Umsetzung' },
    { number: '05', icon: <KeyRound size={24} color="#f97316" />, title: 'Projektübergabe' },
  ];

  const costItems = [
    { icon: <Bath size={24} color="#f97316" strokeWidth={1.5} />, title: 'Basis-Bad', price: 'ab ca. 8.000 €', note: 'Gäste-WC & kompakte Badsanierung' },
    { icon: <HomeIcon size={24} color="#f97316" strokeWidth={1.5} />, title: 'Komfortbad', price: '15.000 – 25.000 €', note: 'Typischer Einstieg für Vollbäder' },
    { icon: <Gem size={24} color="#f97316" strokeWidth={1.5} />, title: 'Premium-Bad', price: 'ab ca. 25.000 €+', note: 'Hochwertige Ausstattung & Sonderwünsche' },
  ];

  return (
    <section className="home-section bg-gray-50 border-t border-b border-gray-100">
      <div className="container">
        <div className="home-section-intro">
          <h2 className="text-3xl font-bold text-navy">Ihr Sanierungsprojekt im Überblick</h2>
          <p className="text-gray-600 text-lg home-section-intro-text">
            Bevor Sie Kosten berechnen, sollten Sie den Weg verstehen: Wie planen wir Ihr Projekt?
            Welche Schritte kommen auf Sie zu? Und welche Budgetgrößen sind realistisch? Hier finden Sie
            Antworten – und im nächsten Abschnitt können Sie Ihre Sanierungskosten direkt einschätzen.
          </p>
        </div>

        <div className="home-hub-tabs">
          <button type="button" className={`home-hub-tab ${tab === 'why' ? 'active' : ''}`} onClick={() => setTab('why')}>Warum Radex?</button>
          <button type="button" className={`home-hub-tab ${tab === 'process' ? 'active' : ''}`} onClick={() => setTab('process')}>Ablauf & Planung</button>
          <button type="button" className={`home-hub-tab ${tab === 'cost' ? 'active' : ''}`} onClick={() => setTab('cost')}>Typische Einstiegspreise</button>
        </div>

        <div className="home-hub-panel">
          {tab === 'why' && (
            <div>
              <div className="home-grid-4">
                {whyItems.map((item, idx) => (
                  <div key={idx} className="home-trust-item">
                    <div className="home-trust-icon">
                      {item.icon}
                    </div>
                    <div style={{ paddingTop: '6px' }}>
                      <h3 className="text-lg font-bold text-navy" style={{ marginBottom: '8px' }}>{item.title}</h3>
                      <p className="text-sm text-gray-600" style={{ lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center" style={{ marginTop: '40px' }}>
                <a href="#kontakt" className="home-btn-orange" style={{ display: 'inline-flex' }}>
                  Beratung anfordern <ArrowRight size={16} />
                </a>
              </div>
            </div>
          )}

          {tab === 'process' && (
            <div>
              <p className="text-gray-600 text-center" style={{ maxWidth: '640px', margin: '0 auto 32px', lineHeight: 1.7 }}>
                Von der ersten Anfrage bis zur schlüsselfertigen Übergabe – so strukturieren wir Ihr
                Sanierungsprojekt für maximale Planungssicherheit.
              </p>
              <div className="br-process-flow">
                {processSteps.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="br-process-step">
                      <div className="br-step-number">{step.number}</div>
                      <div className="br-step-icon">{step.icon}</div>
                      <h4>{step.title}</h4>
                    </div>
                    {idx < processSteps.length - 1 && <ArrowRight className="br-step-arrow" size={24} />}
                  </div>
                ))}
              </div>
              <div className="text-center" style={{ marginTop: '40px' }}>
                <Link to="/sanierung-rhein-main" className="home-btn-orange" style={{ display: 'inline-flex' }}>
                  Mehr über den Ablauf erfahren <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}

          {tab === 'cost' && (
            <div>
              <p className="text-gray-600 text-center" style={{ maxWidth: '640px', margin: '0 auto 32px', lineHeight: 1.7 }}>
                <strong>Typische Einstiegspreise</strong> – Orientierungswerte für Ihre Planung.
                Der tatsächliche Festpreis hängt vom Zustand, Umfang und Ihren Materialwünschen ab.
              </p>
              <div className="home-grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                {costItems.map((item, idx) => (
                  <div key={idx} className="home-cost-card">
                    <div style={{ marginBottom: '16px' }}>{item.icon}</div>
                    <h4 className="font-bold text-navy text-sm" style={{ marginBottom: '8px' }}>{item.title}</h4>
                    <p className="home-cost-price">{item.price}</p>
                    <p className="text-gray-500 text-xs" style={{ margin: '8px 0 0', lineHeight: 1.5 }}>{item.note}</p>
                  </div>
                ))}
              </div>
              <div className="text-center" style={{ marginTop: '40px' }}>
                <a href="#sanierungskosten-rechner" className="home-btn-orange" style={{ display: 'inline-flex' }}>
                  Jetzt Kosten berechnen <ArrowRight size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
