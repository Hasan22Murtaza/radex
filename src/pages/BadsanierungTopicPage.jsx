import ServicePageTemplate from '../components/ServicePageTemplate';

const sharedCosts = {
  title: 'Wie viel kostet eine Badsanierung?',
  subtitle: 'Die tatsächlichen Kosten hängen von Größe, Zustand und gewünschter Ausstattung ab.',
  items: [
    { title: 'Gäste-WC', price: '€7.500', img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800' },
    { title: 'Komfortbad', price: '€17.500', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
    { title: 'Premium-Wellnessbad', price: '€28.000', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800' },
  ],
};

const sharedFaqs = [
  { q: 'Ist Radex ein SHK-Meisterbetrieb?', a: 'Ja. Radex Objektmanagement GmbH ist ein eingetragener SHK-Meisterbetrieb. Sanitär- und Heizungsarbeiten führen wir als Meisterbetrieb selbst aus.' },
  { q: 'Was kostet eine Badsanierung im Rhein-Main-Gebiet?', a: 'Die Kosten hängen von Badgröße, Umfang und Ausstattung ab. Nach einem Ortstermin erhalten Sie ein verbindliches Festpreisangebot.' },
  { q: 'In welchen Städten bietet Radex Badsanierung an?', a: 'Radex ist in über 60 Städten im Rhein-Main-Gebiet tätig – unter anderem in Frankfurt, Offenbach, Darmstadt, Hanau und Rödermark.' },
];

export const badsanierungTopics = {
  'dusche-statt-badewanne': {
    seo: {
      title: 'Dusche statt Badewanne | Umbau im Rhein-Main-Gebiet | Radex',
      description: 'Badewanne durch Dusche ersetzen im Rhein-Main-Gebiet: bodengleich, barrierearm und fachgerecht abgedichtet vom SHK-Meisterbetrieb Radex.',
      path: '/dusche-statt-badewanne',
      serviceName: 'Dusche statt Badewanne',
    },
    heroData: {
      title: 'Dusche statt Badewanne im',
      titleSpan: 'Rhein-Main-Gebiet',
      subtitle: 'Mehr Komfort, bessere Nutzung und barrierearme Lösungen – fachgerecht geplant und umgesetzt.',
      text: 'Der Umbau von Wanne zu Dusche ist eine der häufigsten Badsanierungen. Radex plant Entwässerung, Abdichtung und Installationsführung sorgfältig – für ein dauerhaft dichtes und komfortables Ergebnis.',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1600',
    },
    whoIsForData: {
      title: 'Für wen lohnt sich der Umbau?',
      subtitle: 'Der Wannen-zu-Dusche-Umbau passt zu vielen Alltagssituationen.',
      list: [
        { title: 'Komfort & Alltag', desc: 'Eine bodengleiche oder niedrige Dusche ist im täglichen Gebrauch oft praktischer als eine Badewanne.' },
        { title: 'Platzgewinn', desc: 'Auf kleiner Fläche lässt sich mit einer Dusche oft mehr Nutzfläche schaffen als mit einer Wanne.' },
        { title: 'Barrierearm', desc: 'Weniger Stolpergefahr und einfacherer Zugang – wichtig für alle Generationen.' },
        { title: 'Wertsteigerung', desc: 'Ein modernes Bad mit zeitgemäßer Dusche steigert die Attraktivität der Immobilie.' },
      ],
    },
    costsData: sharedCosts,
    faqsData: [
      ...sharedFaqs,
      { q: 'Kann jede Badewanne durch eine Dusche ersetzt werden?', a: 'In den meisten Fällen ja – entscheidend sind Entwässerung, Gefälle und Abdichtung. Wir prüfen das bei der Vor-Ort-Beratung.' },
    ],
    calculatorType: 'bad',
  },
  'barrierefreies-bad': {
    seo: {
      title: 'Barrierefreies Bad | Sanierung im Rhein-Main-Gebiet | Radex',
      description: 'Barrierefreies Bad im Rhein-Main-Gebiet: bodengleiche Dusche, Haltegriffe und durchdachte Bewegungsflächen vom SHK-Meisterbetrieb Radex.',
      path: '/barrierefreies-bad',
      serviceName: 'Barrierefreies Bad',
    },
    heroData: {
      title: 'Barrierefreies Bad im',
      titleSpan: 'Rhein-Main-Gebiet',
      subtitle: 'Sicher, komfortabel und zukunftsfähig – für alle Lebensphasen.',
      text: 'Bodengleiche Duschen, Haltegriffe und gut geplante Bewegungsflächen schaffen mehr Komfort und langfristige Nutzbarkeit. Radex plant barrierefreie Bäder fachgerecht und koordiniert alle Gewerke.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600',
    },
    whoIsForData: {
      title: 'Für wen ist ein barrierefreies Bad sinnvoll?',
      subtitle: 'Barrierefreiheit bedeutet mehr Komfort für alle – nicht nur im Alter.',
      list: [
        { title: 'Sicherheit im Alltag', desc: 'Weniger Stolpergefahr durch bodengleiche Duschen und rutschhemmende Beläge.' },
        { title: 'Komfort für alle', desc: 'Großzügige Bewegungsflächen und gut erreichbare Armaturen.' },
        { title: 'Zukunftssicher wohnen', desc: 'Früh geplant spart spätere teure Umbauten und erhält die Wohnqualität.' },
        { title: 'Förderfähig', desc: 'Barrierefreie Maßnahmen können förderfähig sein – wir beraten Sie gerne.' },
      ],
    },
    costsData: sharedCosts,
    faqsData: [
      ...sharedFaqs,
      { q: 'Gibt es Förderungen für barrierefreie Bäder?', a: 'Je nach Maßnahme und Voraussetzungen können Förderprogramme greifen. Wir klären das im persönlichen Gespräch.' },
    ],
    calculatorType: 'bad',
  },
  'gaeste-wc': {
    seo: {
      title: 'Gäste-WC sanieren | Rhein-Main-Gebiet | Radex',
      description: 'Gäste-WC sanieren im Rhein-Main-Gebiet: kleine Räume optimal nutzen mit modernen Sanitärobjekten und fachgerechter Installation.',
      path: '/gaeste-wc',
      serviceName: 'Gäste-WC',
    },
    heroData: {
      title: 'Gäste-WC sanieren im',
      titleSpan: 'Rhein-Main-Gebiet',
      subtitle: 'Funktional, modern und auf kleiner Fläche perfekt gelöst.',
      text: 'Auf kleiner Fläche ein helles, funktionales Gäste-WC schaffen – Radex kennt die typischen Grundrisse im Rhein-Main-Gebiet und entwickelt passende Lösungen mit klarer Kostenplanung.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1600',
    },
    whoIsForData: {
      title: 'Typische Gäste-WC-Projekte',
      subtitle: 'Kompakte Räume mit hohem Nutzen.',
      list: [
        { title: 'Modernisierung', desc: 'Neue Sanitärobjekte, Armaturen und Oberflächen für ein zeitgemäßes Erscheinungsbild.' },
        { title: 'Platzoptimierung', desc: 'Clevere Grundrisslösungen für enge oder ungünstig geschnittene Räume.' },
        { title: 'Technik erneuern', desc: 'Leitungen, Abdichtung und Entwässerung auf einen zuverlässigen Stand bringen.' },
        { title: 'Vor Vermietung', desc: 'Schnelle, wertsteigernde Aufwertung vor Neuvermietung oder Verkauf.' },
      ],
    },
    costsData: {
      title: 'Was kostet ein Gäste-WC?',
      subtitle: 'Gäste-WCs sind oft günstiger als Komplettbäder – der genaue Umfang entscheidet.',
      items: [
        { title: 'Gäste-WC Basis', price: 'ab €5.000', img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800' },
        { title: 'Gäste-WC Komfort', price: 'ab €7.500', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800' },
        { title: 'Gäste-WC Premium', price: 'ab €10.000', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
      ],
    },
    faqsData: sharedFaqs,
    calculatorType: 'bad',
  },
  badplanung: {
    seo: {
      title: 'Badplanung & Ablauf | Badsanierung Rhein-Main | Radex',
      description: 'Badsanierung planen: Ablauf, Reihenfolge der Gewerke und typische Fehler vermeiden. Radex begleitet Sie vom Ortstermin bis zur Übergabe.',
      path: '/badplanung',
      serviceName: 'Badplanung',
    },
    heroData: {
      title: 'Planung & Ablauf der',
      titleSpan: 'Badsanierung',
      subtitle: 'Von der Beratung bis zur schlüsselfertigen Übergabe – strukturiert und transparent.',
      text: 'Eine gute Badsanierung beginnt mit der Planung. Radex koordiniert alle Gewerke in der richtigen Reihenfolge – Sie haben einen festen Ansprechpartner und ein verbindliches Festpreisangebot.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1600',
    },
    whoIsForData: {
      title: 'So läuft Ihre Badsanierung ab',
      subtitle: 'Fünf Schritte von der Idee zum fertigen Bad.',
      list: [
        { title: '1. Kostenlose Beratung', desc: 'Vor-Ort-Termin, Bestandsaufnahme und Klärung Ihrer Wünsche.' },
        { title: '2. Planung & Material', desc: 'Grundriss, Ausstattung, Materialien und Lichtführung gemeinsam festlegen.' },
        { title: '3. Festpreisangebot', desc: 'Verbindliches Angebot ohne versteckte Positionen.' },
        { title: '4. Ausführung', desc: 'Rückbau, Rohinstallation, Abdichtung, Trockenbau, Elektro, Fliesen, Ausbau – koordiniert.' },
        { title: '5. Übergabe', desc: 'Vollständig fertiggestelltes Bad, geprüft und einsatzbereit.' },
      ],
    },
    costsData: sharedCosts,
    faqsData: [
      ...sharedFaqs,
      { q: 'Wie lange dauert eine Badsanierung?', a: 'Je nach Umfang meist zwischen 2 und 4 Wochen. Den genauen Zeitplan erhalten Sie mit dem Angebot.' },
    ],
    calculatorType: 'bad',
  },
};

export default function BadsanierungTopicPage({ topicId }) {
  const topic = badsanierungTopics[topicId];
  if (!topic) return null;

  return (
    <ServicePageTemplate
      seo={topic.seo}
      heroData={topic.heroData}
      whoIsForData={topic.whoIsForData}
      costsData={topic.costsData}
      faqsData={topic.faqsData}
      calculatorType={topic.calculatorType}
    />
  );
}
