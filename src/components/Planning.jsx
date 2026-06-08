import React from 'react';
import { ClipboardCheck, Sparkles, Sliders, Calendar } from 'lucide-react';
import planningImg from '../assets/bathroom_renovation_work.png';

export default function Planning() {
  return (
    <section id="planung" className="section reveal">
      <div className="container planning-grid">
        <div className="reveal" style={{ transitionDelay: '50ms' }}>
          <span className="section-label">Schritt für Schritt</span>
          <h2 className="section-title">Individuelle <span>Badplanung</span> &amp; Beratung</h2>
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            Aus Ihren Wünschen und Vorstellungen stricken wir ein stimmiges Gesamtkonzept. Dabei achten wir nicht nur auf ansprechendes Design, sondern auch auf optimale Raumnutzung und zukunftssichere Technik.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>
                <ClipboardCheck size={20} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '16px', color: 'var(--navy)' }}>1. Detaillierte Bedarfsanalyse</strong>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '4px' }}>
                  Wir klären grundlegende Fragen: Wie viele Personen nutzen das Bad? Wünschen Sie eine bodengleiche Walk-In-Dusche oder eine klassische Wanne? Wie viel Stauraum wird benötigt?
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>
                <Sliders size={20} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '16px', color: 'var(--navy)' }}>2. Raum- &amp; Grundrissoptimierung</strong>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '4px' }}>
                  Gerade in kleinen Bädern oder Altbauten zählt jeder Zentimeter. Wir prüfen, welche Sanitärobjekte sich wo platzieren lassen und optimieren die Installationswege.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>
                <Sparkles size={20} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '16px', color: 'var(--navy)' }}>3. Bemusterung vor Ort</strong>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '4px' }}>
                  Fühlen Sie die Oberflächen. Wir beraten Sie bei der Auswahl von hochwertigen Fliesen, Waschtischen, Armaturen (z. B. von Hansgrohe, Grohe, Geberit) und intelligenten Lichtkonzepten.
                </p>
              </div>
            </div>
          </div>

          <a href="#kontakt" className="btn btn--primary">
            Jetzt Planungsgespräch vereinbaren
          </a>
        </div>

        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '20px', transitionDelay: '150ms' }}>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '4px solid var(--white)' }}>
            <img src={planningImg} alt="Moderne Badplanung und Materialien" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
          </div>
          <div style={{ backgroundColor: 'var(--bg-section)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <h4 style={{ fontSize: '15px', color: 'var(--navy)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} color="var(--gold)" />
              Planungssicherheit für Ihr Projekt
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-light)', lineHeight: '1.5' }}>
              Dank unserer engen Abstimmung und der Meisterkompetenz im eigenen Haus stellen wir sicher, dass alle geplanten Details technisch einwandfrei machbar sind – bevor die erste Fliese abgeschlagen wird.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
