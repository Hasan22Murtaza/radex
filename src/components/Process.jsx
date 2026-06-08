import React from 'react';
import { Calendar, Compass, ShieldAlert, Zap, ClipboardCheck } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '1',
      title: 'Kostenlose Erstberatung vor Ort',
      desc: 'Wir besuchen Sie kostenfrei in Ihrem Objekt. Unser SHK-Meister prüft die Rohre, den Wasserdruck und die Bausubstanz, um ein sicheres technisches Fundament für die Sanierung zu ermitteln.'
    },
    {
      num: '2',
      title: 'Entwurf & Bemusterung',
      desc: 'Im Anschluss planen wir das Bad und unterstützen Sie bei der Auswahl der Materialien. Von rutschfesten Feinsteinzeugfliesen bis zum fugenlosen Duschbereich – Sie bestimmen das Design.'
    },
    {
      num: '3',
      title: 'Verbindliches Festpreisangebot',
      desc: 'Wir erstellen ein transparentes, detailliertes Angebot. Jedes Gewerk, jedes Sanitärobjekt und alle Arbeitszeiten sind einzeln ausgewiesen – ohne versteckte Klauseln.'
    },
    {
      num: '4',
      title: 'Ausführung & Koordination',
      desc: 'Wir demontieren das Altbad staubarm und übernehmen die Rohinstallation. Fliesenleger, Elektriker und Trockenbauer arbeiten Hand in Hand nach einem straffen Zeitplan unter unserer Regie.'
    },
    {
      num: '5',
      title: 'Schlüsselfertige Übergabe',
      desc: 'Nach der Endmontage der Armaturen und Möbel reinigen wir das Bad gründlich. Es folgt die persönliche Endabnahme und Übergabe aller Gewährleistungsunterlagen durch unseren Meister.'
    }
  ];

  return (
    <section id="ablauf" className="section section--beige reveal">
      <div className="container">
        <span className="section-label">Ablauf</span>
        <h2 className="section-title">Der Weg zu Ihrem <span>neuen Badezimmer</span></h2>
        <p className="section-subtitle">
          Dank strukturierter Koordination und festangestelltem Meisterpersonal führen wir Ihr Projekt schnell, sauber und termingerecht aus.
        </p>

        <div className="process-timeline">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="process-step reveal"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="process-number">{step.num}</div>
              <div className="process-step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
