import { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section reveal">
      <div className="container">
        <div className="faq-layout">
          {/* Left Column - Sticky Info */}
          <div className="faq-info-col">
            <span className="section-label">Häufige Fragen</span>
            <h2 className="section-title">FAQ zur <span>Badsanierung</span></h2>
            <p className="faq-info-text">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um Planung, Dauer und Ablauf Ihrer Badsanierung im Rhein-Main-Gebiet.
            </p>

            <div className="faq-cta-card">
              <div className="faq-cta-icon">
                <MessageCircle size={28} />
              </div>
              <h4>Noch Fragen?</h4>
              <p>Unser Team berät Sie gerne persönlich und unverbindlich.</p>
              <a href="#kontakt" className="btn btn--rainbow" style={{ width: '100%', justifyContent: 'center' }}>
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="faq-accordion-col">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                >
                  <button
                    className="faq-item-header"
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-item-number">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="faq-item-question">{faq.question}</span>
                    <span className="faq-item-toggle">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div
                    className="faq-item-body"
                    style={{ maxHeight: isOpen ? '300px' : '0' }}
                  >
                    <div className="faq-item-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
