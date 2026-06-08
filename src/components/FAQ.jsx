import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Was gehört zu einer Badsanierung?',
      answer: 'Eine Badsanierung umfasst je nach Umfang den Rückbau des Bestandsbades, neue Sanitärinstallationen (Dusche, Wanne, WC, Waschtisch), Abdichtung, Fliesenarbeiten, Trockenbau, Elektroarbeiten sowie die abschließende Ausstattung mit Armaturen und Möbeln. Radex koordiniert als Generalunternehmer alle beteiligten Gewerke aus einer Hand.'
    },
    {
      question: 'Wie läuft eine Badsanierung mit Radex ab?',
      answer: 'Am Anfang steht ein kostenloses Beratungsgespräch mit Bestandsaufnahme vor Ort. Danach folgen Planung, Materialauswahl und ein verbindliches Angebot. Nach Auftragserteilung koordiniert Radex alle Gewerke in einer abgestimmten Reihenfolge – von Rückbau und Rohinstallation bis zu Fliesen, Ausbau und Übergabe.'
    },
    {
      question: 'Ist Radex ein SHK Meisterbetrieb?',
      answer: 'Ja. Radex ist ein SHK Meisterbetrieb unter der Leitung von Bernd Knoop – zugelassen für die Bereiche Sanitär, Heizung und Klimatechnik sowie Gebäudetechnik. Weitere Gewerke wie Elektro, Trockenbau, Fliesen und Innenausbau werden durch koordinierte Fachbetriebe realisiert, für deren fachgerechte Ausführung wir einstehen.'
    },
    {
      question: 'In welchen Städten bietet Radex Badsanierung an?',
      answer: 'Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an – darunter Rödermark, Frankfurt am Main, Offenbach am Main, Darmstadt, Hanau, Dreieich, Rodgau, Neu-Isenburg, Dietzenbach und Heusenstamm. Ohne Anfahrtszuschläge.'
    },
    {
      question: 'Wie kann ich eine Badsanierung anfragen?',
      answer: 'Sie können über das Kontaktformular auf dieser Seite eine Anfrage stellen oder uns direkt telefonisch unter 06074 960620 erreichen. Wir vereinbaren einen Termin zur kostenlosen Bestandsaufnahme vor Ort.'
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="section reveal">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">Häufige Fragen</span>
          <h2 className="section-title">FAQ zur <span>Badsanierung</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um Planung, Dauer und Ablauf Ihrer Badsanierung im Rhein-Main-Gebiet.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-card reveal ${openIndex === idx ? 'open' : ''}`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <button
                className="faq-header"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.question}</span>
                <ChevronDown className="faq-icon" size={18} />
              </button>
              <div
                className="faq-body"
                style={{
                  maxHeight: openIndex === idx ? '200px' : '0',
                }}
              >
                <div className="faq-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
