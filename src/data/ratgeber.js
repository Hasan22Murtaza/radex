import {
  Bath, Building2, Home, Flame, Zap, Hammer, Leaf, AlertTriangle, Briefcase,
} from 'lucide-react';

/** Editorial categories – editable content model (CMS-ready JSON structure). */
export const ratgeberCategories = [
  {
    id: 'badsanierung',
    title: 'Badsanierung',
    desc: 'Planung, Kosten, Ablauf und moderne Badlösungen.',
    icon: Bath,
    serviceLink: '/badsanierung-rhein-main',
  },
  {
    id: 'sanierung',
    title: 'Sanierung',
    desc: 'Wohnung, Haus, Altbau und Komplettsanierung.',
    icon: Building2,
    serviceLink: '/sanierung-rhein-main',
  },
  {
    id: 'heizung-sanitaer',
    title: 'Heizung & Sanitär',
    desc: 'Heizung, Wärmepumpe und Sanitärtechnik.',
    icon: Flame,
    serviceLink: '/heizung-sanitaer-rhein-main',
  },
  {
    id: 'elektrotechnik',
    title: 'Elektrotechnik',
    desc: 'Elektroinstallation und Gebäudetechnik.',
    icon: Zap,
    serviceLink: '/elektroinstallation-rhein-main',
  },
  {
    id: 'innenausbau-umbau',
    title: 'Innenausbau & Umbau',
    desc: 'Trockenbau, Grundrisse und Wohnraumgestaltung.',
    icon: Hammer,
    serviceLink: '/innenausbau-umbau-rhein-main',
  },
  {
    id: 'energie-foerderung',
    title: 'Energie & Förderung',
    desc: 'Energie sparen und Fördermöglichkeiten nutzen.',
    icon: Leaf,
    serviceLink: '/energetische-sanierung-rhein-main',
  },
  {
    id: 'schimmel-asbest',
    title: 'Schimmel & Asbest',
    desc: 'Schadstoffe erkennen und professionell sanieren.',
    icon: AlertTriangle,
    serviceLink: '/schadstoffsanierung-rhein-main',
  },
  {
    id: 'gewerbe',
    title: 'Gewerbe & Objektsanierung',
    desc: 'Modernisierung von Büros, Praxen und Gewerbeflächen.',
    icon: Briefcase,
    serviceLink: '/gewerbesanierung-rhein-main',
  },
];

const IMG = {
  bad: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200',
  wohnung: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
  haus: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
  heizung: 'https://images.unsplash.com/photo-1585771724684-b3822b58b9d0?auto=format&fit=crop&q=80&w=1200',
  elektro: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
  energie: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200',
  innenausbau: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200',
  schimmel: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
  gewerbe: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
};

function articleBase({
  slug,
  categoryId,
  title,
  excerpt,
  image,
  publishedAt,
  updatedAt,
  tags = [],
  featured = false,
  popular = false,
  sections,
  faqs,
  serviceLinks = [],
}) {
  const wordCount = sections
    .flatMap((s) => (Array.isArray(s.paragraphs) ? s.paragraphs : []))
    .join(' ')
    .split(/\s+/).length;
  const readTime = Math.max(4, Math.round(wordCount / 200));

  return {
    slug,
    categoryId,
    title,
    excerpt,
    image: image || IMG.wohnung,
    publishedAt,
    updatedAt: updatedAt || publishedAt,
    author: 'Radex Redaktion',
    tags,
    featured,
    popular,
    readTime,
    seo: {
      title: `${title} | Ratgeber | Radex`,
      description: excerpt,
      path: `/ratgeber/${slug}`,
    },
    sections,
    faqs,
    serviceLinks,
    status: 'published',
  };
}

/** All Ratgeber articles – add/edit here or via future CMS integration. */
export const ratgeberArticles = [
  articleBase({
    slug: 'badsanierung-planen-reihenfolge-ablauf-fehler',
    categoryId: 'badsanierung',
    title: 'Badsanierung: Ablauf, Reihenfolge & typische Fehler vermeiden',
    excerpt: 'So planen Sie Ihre Badsanierung Schritt für Schritt – von der Beratung bis zur Übergabe, ohne teure Umwege.',
    image: IMG.bad,
    publishedAt: '2024-05-15',
    featured: true,
    popular: true,
    tags: ['Badsanierung', 'Planung', 'Ablauf', 'Kosten'],
    sections: [
      {
        heading: 'Warum die richtige Reihenfolge entscheidend ist',
        paragraphs: [
          'Eine Badsanierung umfasst viele Gewerke: Demontage, Rohinstallation, Abdichtung, Estrich, Fliesen, Elektro und Malerarbeiten. Wer die Reihenfolge nicht kennt, riskiert Nacharbeiten und Mehrkosten.',
          'Bei Radex koordinieren wir alle Schritte aus einer Hand – vom SHK-Meisterbetrieb bis zur fertigen Übergabe.',
        ],
      },
      {
        heading: 'Der typische Ablauf einer Komplettbadsanierung',
        paragraphs: [
          '1. Beratung und Bedarfsanalyse – Welche Wünsche, welches Budget, welche Nutzung?',
          '2. Besichtigung vor Ort – Bestand prüfen, Leitungen und Statik einbeziehen.',
          '3. Planung und Angebot – 3D-Planung, Materialauswahl, Festpreisangebot.',
          '4. Rückbau und Entsorgung – Alte Sanitärobjekte und Fliesen fachgerecht entfernen.',
          '5. Rohinstallation SHK & Elektro – Wasser, Abwasser, Heizung, Stromkreise.',
          '6. Abdichtung und Estrich – DIN-konforme Nassbereichsabdichtung.',
          '7. Fliesen, Trockenbau, Maler – Oberflächen und Feininstallation.',
          '8. Übergabe und Einweisung – Funktionsprüfung und Dokumentation.',
        ],
      },
      {
        heading: 'Typische Fehler vermeiden',
        paragraphs: [
          'Zu spät an Elektro und Beleuchtung denken, Abdichtung unter Zeitdruck überspringen oder Materialien ohne Abstimmung bestellen – das sind häufige Fehlerquellen.',
          'Ein fester Ansprechpartner und eine durchdachte Bauleitung verhindern solche Probleme von Anfang an.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie lange dauert eine Badsanierung?', a: 'Eine Komplettbadsanierung dauert in der Regel 2–4 Wochen, abhängig von Größe, Umfang und Materialverfügbarkeit.' },
      { q: 'Kann ich während der Sanierung zu Hause wohnen?', a: 'Bei einem Bad im Wohnbereich ist das oft eingeschränkt möglich. Wir besprechen Alternativen wie Gäste-WC oder temporäre Lösungen.' },
      { q: 'Brauche ich einen Generalunternehmer?', a: 'Bei Komplettbädern empfiehlt sich ein Ansprechpartner, der SHK, Fliesen, Elektro und Trockenbau koordiniert.' },
    ],
    serviceLinks: [
      { label: 'Badsanierung anfragen', to: '/badsanierung-rhein-main' },
      { label: 'Badsanierung Kosten', to: '/badsanierung-kosten' },
    ],
  }),
  articleBase({
    slug: 'badsanierung-kosten-faktoren',
    categoryId: 'badsanierung',
    title: 'Badsanierung Kosten: Die wichtigsten Preisfaktoren',
    excerpt: 'Was beeinflusst die Kosten einer Badsanierung? Größe, Ausstattung, Leitungen und Gewerke im Überblick.',
    image: IMG.bad,
    publishedAt: '2024-04-22',
    popular: true,
    tags: ['Badsanierung', 'Kosten', 'Budget'],
    sections: [
      {
        heading: 'Größe und Grundriss',
        paragraphs: ['Je größer das Bad, desto mehr Fliesen, Leitungen und Arbeitszeit. Ein kompakter Grundriss ist oft günstiger als viele Ecken und Nischen.'],
      },
      {
        heading: 'Sanitär und Ausstattung',
        paragraphs: ['Markenqualität bei Dusche, WC und Waschtisch, bodengleiche Duschen und Sonderwünsche wie Unterputzarmaturen erhöhen das Budget – bringen aber langfristig Komfort.'],
      },
      {
        heading: 'Leitungen und Bestand',
        paragraphs: ['Müssen Wasser- und Abwasserleitungen erneuert werden? Ist eine Heizungsanbindung nötig? Der Zustand hinter den Wänden ist oft der größte Kostenfaktor.'],
      },
    ],
    faqs: [
      { q: 'Was kostet ein Bad im Rhein-Main-Gebiet?', a: 'Als Orientierung: kleine Bäder ab ca. 8.000–12.000 €, mittlere Komplettbäder 15.000–25.000 €, hochwertige Lösungen darüber. Nutzen Sie unseren Kostenrechner.' },
    ],
    serviceLinks: [{ label: 'Kostenrechner', to: '/badsanierung-kosten' }],
  }),
  articleBase({
    slug: 'kleines-bad-sanieren',
    categoryId: 'badsanierung',
    title: 'Kleines Bad sanieren: Platz optimal nutzen',
    excerpt: 'Clevere Lösungen für Gäste-WC und kleine Badezimmer – mehr Komfort auf wenig Quadratmetern.',
    image: IMG.bad,
    publishedAt: '2024-03-10',
    tags: ['Kleines Bad', 'Gäste-WC', 'Planung'],
    sections: [
      {
        heading: 'Raumwunder durch clevere Planung',
        paragraphs: ['Wandhängendes WC, Eckwaschtisch, Nischen in der Dusche und großformatige Fliesen lassen kleine Räume größer wirken.'],
      },
      {
        heading: 'Dusche statt Badewanne',
        paragraphs: ['In vielen kleinen Bädern ist eine Dusche die bessere Lösung – barrierearm, platzsparend und alltagstauglich.'],
      },
    ],
    faqs: [{ q: 'Lohnt sich eine Komplettsanierung bei unter 4 m²?', a: 'Ja, gerade bei Gäste-WC lohnt sich eine durchdachte Modernisierung für Wert und Nutzung der Wohnung.' }],
    serviceLinks: [{ label: 'Gäste-WC sanieren', to: '/gaeste-wc' }],
  }),
  articleBase({
    slug: 'badsanierung',
    categoryId: 'badsanierung',
    title: 'Badsanierung im Überblick: Was Eigentümer wissen sollten',
    excerpt: 'Von der ersten Idee bis zum neuen Bad – alle wichtigen Themen für Ihr Sanierungsprojekt.',
    image: IMG.bad,
    publishedAt: '2024-02-18',
    tags: ['Badsanierung', 'Überblick'],
    sections: [
      {
        heading: 'Wann ist eine Badsanierung sinnvoll?',
        paragraphs: ['Veraltete Leitungen, Feuchtigkeitsschäden, unzureichende Abdichtung oder einfach veraltetes Design sind typische Gründe für eine Modernisierung.'],
      },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Badsanierung', to: '/badsanierung-rhein-main' }],
  }),
  articleBase({
    slug: 'wohnung-sanieren-nach-kauf',
    categoryId: 'sanierung',
    title: 'Wohnung sanieren nach Kauf: Checkliste für Eigentümer',
    excerpt: 'Nach dem Immobilienkauf richtig priorisieren – Technik, Bad, Böden und Energie in der richtigen Reihenfolge.',
    image: IMG.wohnung,
    publishedAt: '2024-05-08',
    popular: true,
    tags: ['Wohnung', 'Kauf', 'Sanierung'],
    sections: [
      {
        heading: 'Bestandsaufnahme vor dem ersten Hammer',
        paragraphs: ['Elektrik, Leitungen, Heizung und Feuchtigkeit zuerst prüfen. Oberflächen können warten, wenn die Technik nicht stimmt.'],
      },
      {
        heading: 'Prioritäten setzen',
        paragraphs: ['Bad und Küche sind oft die teuersten Gewerke. Teilsanierung in Etappen ist möglich – mit einem Gesamtplan von Anfang an.'],
      },
    ],
    faqs: [{ q: 'Sanierung vor Einzug oder danach?', a: 'Vor Einzug ist meist effizienter, da Staub und Lärm weniger stören. Bei vermieteten Wohnungen planen wir Etappen.' }],
    serviceLinks: [{ label: 'Wohnungssanierung', to: '/sanierung/wohnungssanierung' }],
  }),
  articleBase({
    slug: 'wohnung-renovieren-oder-sanieren-unterschied',
    categoryId: 'sanierung',
    title: 'Renovieren oder sanieren – was ist der Unterschied?',
    excerpt: 'Oberflächen erneuern oder technisch modernisieren? Die Begriffe und was sie für Ihr Projekt bedeuten.',
    image: IMG.wohnung,
    publishedAt: '2024-04-05',
    tags: ['Wohnung', 'Renovierung', 'Sanierung'],
    sections: [
      {
        heading: 'Renovierung',
        paragraphs: ['Renovierung betrifft vor allem sichtbare Oberflächen: Malerarbeiten, Böden, Türen, ggf. Küche und Bad ohne tiefe Eingriffe in die Bausubstanz.'],
      },
      {
        heading: 'Sanierung',
        paragraphs: ['Sanierung geht tiefer: Leitungen, Heizung, Elektrik, Statik, Dämmung. Oft sind mehrere Gewerke und Genehmigungen nötig.'],
      },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Sanierung Rhein-Main', to: '/sanierung-rhein-main' }],
  }),
  articleBase({
    slug: 'haus-modernisieren-nach-kauf-erbschaft',
    categoryId: 'sanierung',
    title: 'Haus modernisieren nach Kauf oder Erbschaft',
    excerpt: 'Ein geerbtes oder neu erworbenes Haus fit machen – von der Bestandsanalyse bis zur Komplettsanierung.',
    image: IMG.haus,
    publishedAt: '2024-03-28',
    popular: true,
    tags: ['Haus', 'Erbschaft', 'Modernisierung'],
    sections: [
      {
        heading: 'Energie und Gebäudehülle',
        paragraphs: ['Dach, Fassade, Fenster und Heizung bestimmen die laufenden Kosten. Eine energetische Bewertung hilft bei der Priorisierung.'],
      },
      {
        heading: 'Innenleben und Grundriss',
        paragraphs: ['Altbauten bieten oft Charme, aber veraltete Grundrisse. Ob Wanddurchbruch oder Anbau – Statik und Genehmigung früh klären.'],
      },
    ],
    faqs: [{ q: 'Komplett- oder Teilsanierung?', a: 'Das hängt von Budget, Nutzung und technischem Zustand ab. Wir beraten zu sinnvollen Etappen.' }],
    serviceLinks: [{ label: 'Haussanierung', to: '/sanierung/haussanierung' }],
  }),
  articleBase({
    slug: 'heizung-modernisieren-bei-sanierung',
    categoryId: 'heizung-sanitaer',
    title: 'Heizung modernisieren bei Sanierung: Was lohnt sich?',
    excerpt: 'Heizungstausch, Hydraulischer Abgleich und moderne Wärmeversorgung im Sanierungskontext.',
    image: IMG.heizung,
    publishedAt: '2024-05-02',
    popular: true,
    tags: ['Heizung', 'Modernisierung', 'Sanierung'],
    sections: [
      {
        heading: 'Warum Heizung und Sanierung zusammengehören',
        paragraphs: ['Wenn Wände offen sind, lassen sich Leitungen und Heizkörper günstiger erneuern als nachträglich.'],
      },
      {
        heading: 'Wärmepumpe im Bestand',
        paragraphs: ['Viele Bestandsgebäude sind für Wärmepumpen geeignet – vorausgesetzt, Heizflächen und Dämmstandard werden mitgedacht.'],
      },
    ],
    faqs: [{ q: 'Gibt es Förderung für Heizungstausch?', a: 'Ja, unter bestimmten Voraussetzungen. Förderfähigkeit sollte vor Vertragsabschluss geprüft werden.' }],
    serviceLinks: [{ label: 'Heizung & Sanitär', to: '/heizung-sanitaer-rhein-main' }],
  }),
  articleBase({
    slug: 'waermepumpe-im-bestand-pruefen',
    categoryId: 'heizung-sanitaer',
    title: 'Wärmepumpe im Bestand: Voraussetzungen prüfen',
    excerpt: 'Ist Ihr Haus für eine Wärmepumpe geeignet? Heizlast, Heizflächen und Platzbedarf im Überblick.',
    image: IMG.heizung,
    publishedAt: '2024-04-15',
    tags: ['Wärmepumpe', 'Bestand', 'Heizung'],
    sections: [
      {
        heading: 'Technische Voraussetzungen',
        paragraphs: ['Ausreichende Heizflächen, ggf. Fußbodenheizung oder moderne Heizkörper, Platz für Außeneinheit und hydraulische Anpassungen.'],
      },
    ],
    faqs: [{ q: 'Luft- oder Sole-Wasser-Wärmepumpe?', a: 'Das hängt von Grundstück, Gebäude und Budget ab. Wir beraten zu beiden Varianten.' }],
    serviceLinks: [{ label: 'Wärmepumpe', to: '/waermepumpe-rhein-main' }],
  }),
  articleBase({
    slug: 'sanitaerleitungen-erneuern-alte-wasserleitungen-pruefen',
    categoryId: 'heizung-sanitaer',
    title: 'Sanitärleitungen erneuern: Alte Wasserleitungen prüfen',
    excerpt: 'Wann müssen Trinkwasser- und Abwasserleitungen im Bestand erneuert werden?',
    image: IMG.heizung,
    publishedAt: '2024-03-20',
    tags: ['Sanitär', 'Leitungen', 'Altbau'],
    sections: [
      {
        heading: 'Anzeichen für erneuerungsbedürftige Leitungen',
        paragraphs: ['Verfärbtes Wasser, niedriger Druck, häufige Leckagen oder verzinkte/rohrige Altleitungen sprechen für eine Erneuerung.'],
      },
    ],
    faqs: [],
    serviceLinks: [{ label: 'SHK-Meisterbetrieb', to: '/heizung-sanitaer-rhein-main' }],
  }),
  articleBase({
    slug: 'heizung-sanitaer',
    categoryId: 'heizung-sanitaer',
    title: 'Heizung & Sanitär bei der Sanierung: Überblick',
    excerpt: 'SHK-Arbeiten als technische Basis jeder erfolgreichen Modernisierung.',
    image: IMG.heizung,
    publishedAt: '2024-02-01',
    tags: ['Heizung', 'Sanitär', 'SHK'],
    sections: [
      { heading: 'Alles aus einer Hand', paragraphs: ['Als SHK-Meisterbetrieb koordinieren wir Heizung, Sanitär und die Schnittstellen zu Elektro und Innenausbau.'] },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Leistungen', to: '/leistungen/heizung-sanitaer' }],
  }),
  articleBase({
    slug: 'elektroinstallation-erneuern-wohnung-haus',
    categoryId: 'elektrotechnik',
    title: 'Elektroinstallation erneuern in Wohnung und Haus',
    excerpt: 'Sicherheit, Steckdosen, FI-Schutz und moderne Stromkreise – wann eine Erneuerung nötig ist.',
    image: IMG.elektro,
    publishedAt: '2024-04-28',
    popular: true,
    tags: ['Elektro', 'Installation', 'Sicherheit'],
    sections: [
      {
        heading: 'Warnsignale alter Elektrik',
        paragraphs: ['Zu wenige Steckdosen, keine FI-Schutzschalter, Aluminiumleitungen oder ungeplante Ausfälle – dann sollte eine Fachfirma prüfen.'],
      },
    ],
    faqs: [{ q: 'Arbeiten Sie nach VDE?', a: 'Ja, alle Elektroarbeiten werden normgerecht nach aktuellen VDE-Vorschriften ausgeführt.' }],
    serviceLinks: [{ label: 'Elektroinstallation', to: '/elektroinstallation-rhein-main' }],
  }),
  articleBase({
    slug: 'elektrotechnik',
    categoryId: 'elektrotechnik',
    title: 'Elektrotechnik bei Sanierungen: Was gehört dazu?',
    excerpt: 'Von der Steckdose bis zur Gebäudetechnik – Elektroarbeiten im Sanierungsprojekt.',
    image: IMG.elektro,
    publishedAt: '2024-02-12',
    tags: ['Elektro', 'Gebäudetechnik'],
    sections: [
      { heading: 'Planung mitdenken', paragraphs: ['Elektro sollte vor Fliesen und Trockenbau geplant werden – sonst werden Wände später wieder geöffnet.'] },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Elektrotechnik', to: '/elektrotechnik-gebaeudetechnik' }],
  }),
  articleBase({
    slug: 'energetische-sanierung-im-bestand',
    categoryId: 'energie-foerderung',
    title: 'Energetische Sanierung im Bestand',
    excerpt: 'Dämmung, Fenster, Heizung – Maßnahmenpakete für ältere Gebäude im Rhein-Main-Gebiet.',
    image: IMG.energie,
    publishedAt: '2024-05-01',
    popular: true,
    tags: ['Energie', 'Dämmung', 'Sanierung'],
    sections: [
      {
        heading: 'Gebäudehülle und Heizung',
        paragraphs: ['Fassade, Dach, Fenster und Heiztechnik wirken zusammen. Einzelmaßnahmen helfen, Pakete bringen oft mehr Effizienz.'],
      },
    ],
    faqs: [{ q: 'Welche Förderungen gibt es?', a: 'KfW und BAFA bieten verschiedene Programme. Die konkrete Förderfähigkeit muss zum Zeitpunkt der Planung geprüft werden.' }],
    serviceLinks: [{ label: 'Energetische Sanierung', to: '/energetische-sanierung-rhein-main' }],
  }),
  articleBase({
    slug: 'energieeffizienz-verbessern-heizung-daemmung-lueftung',
    categoryId: 'energie-foerderung',
    title: 'Energieeffizienz verbessern: Heizung, Dämmung, Lüftung',
    excerpt: 'Drei Hebel, mit denen Sie Heizkosten dauerhaft senken können.',
    image: IMG.energie,
    publishedAt: '2024-03-15',
    tags: ['Energieeffizienz', 'Heizung', 'Dämmung'],
    sections: [
      { heading: 'Heizung modernisieren', paragraphs: ['Alte Heizkessel verbrauchen oft deutlich mehr als moderne Systeme oder Wärmepumpen.'] },
      { heading: 'Dämmung', paragraphs: ['Gedämmte Hülle reduziert Wärmeverluste – wichtig für jede Heiztechnik.'] },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Energie & Förderung', to: '/energie-foerderung' }],
  }),
  articleBase({
    slug: 'sanierung-foerderung-vor-baustart-pruefen',
    categoryId: 'energie-foerderung',
    title: 'Sanierungsförderung vor Baustart prüfen',
    excerpt: 'Warum Förderanträge vor Vertragsabschluss und Baubeginn geklärt werden sollten.',
    image: IMG.energie,
    publishedAt: '2024-04-08',
    tags: ['Förderung', 'KfW', 'BAFA'],
    sections: [
      {
        heading: 'Timing ist entscheidend',
        paragraphs: ['Viele Programme verlangen Antragstellung und technische Beratung vor Beginn der Maßnahmen. Spontane Baustarts können Förderung ausschließen.'],
      },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Förderberatung', to: '/energetische-sanierung-rhein-main' }],
  }),
  articleBase({
    slug: 'energie',
    categoryId: 'energie-foerderung',
    title: 'Energie & Sanierung: Themenüberblick',
    excerpt: 'Energetische Modernisierung, Effizienz und Fördermöglichkeiten auf einen Blick.',
    image: IMG.energie,
    publishedAt: '2024-01-20',
    tags: ['Energie', 'Überblick'],
    sections: [
      { heading: 'Ganzheitlich planen', paragraphs: ['Energiekosten senken funktioniert am besten, wenn Hülle, Heizung und Nutzerverhalten zusammen betrachtet werden.'] },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Energetische Sanierung', to: '/energetische-sanierung-rhein-main' }],
  }),
  articleBase({
    slug: 'generalunternehmer',
    categoryId: 'sanierung',
    title: 'Generalunternehmer bei Sanierung: Vorteile erklärt',
    excerpt: 'Ein Ansprechpartner, ein Zeitplan, ein Festpreis – so funktioniert Sanierung aus einer Hand.',
    image: IMG.wohnung,
    publishedAt: '2024-04-18',
    tags: ['Generalunternehmer', 'Bauleitung'],
    sections: [
      {
        heading: 'Koordination statt Chaos',
        paragraphs: ['Heizung, Elektro, Trockenbau und Fliesen müssen aufeinander abgestimmt sein. Der Generalunternehmer übernimmt Planung, Termine und Qualitätskontrolle.'],
      },
    ],
    faqs: [{ q: 'Was kostet ein Generalunternehmer?', a: 'Die Bauleitung ist oft im Gesamtangebot enthalten. Sie sparen Zeit, Schnittstellen und Nacharbeiten.' }],
    serviceLinks: [{ label: 'Generalunternehmer', to: '/generalunternehmer-rhein-main' }],
  }),
  articleBase({
    slug: 'komplettsanierung-oder-teilsanierung',
    categoryId: 'sanierung',
    title: 'Komplettsanierung oder Teilsanierung?',
    excerpt: 'Welcher Umfang passt zu Budget, Zustand und Nutzung Ihrer Immobilie?',
    image: IMG.wohnung,
    publishedAt: '2024-03-22',
    tags: ['Komplettsanierung', 'Teilsanierung'],
    sections: [
      { heading: 'Teilsanierung', paragraphs: ['Einzelne Räume oder Gewerke modernisieren – sinnvoll bei begrenztem Budget oder laufender Nutzung.'] },
      { heading: 'Komplettsanierung', paragraphs: ['Alle Gewerke in einem Zug – effizienter bei leerstehenden Objekten oder stark veralteter Technik.'] },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Komplettsanierung', to: '/komplettsanierung-rhein-main' }],
  }),
  articleBase({
    slug: 'sanierung-mit-generalunternehmer',
    categoryId: 'sanierung',
    title: 'Sanierung mit Generalunternehmer: Ablauf & Tipps',
    excerpt: 'So bereiten Sie Ihr Projekt vor und was Sie vom ersten Gespräch bis zur Übergabe erwarten können.',
    image: IMG.wohnung,
    publishedAt: '2024-02-25',
    tags: ['Generalunternehmer', 'Ablauf'],
    sections: [
      { heading: 'Vorbereitung', paragraphs: ['Wünsche sammeln, Budget definieren, Bestandsunterlagen bereithalten. Fotos per WhatsApp helfen bei der Ersteinschätzung.'] },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Beratung anfragen', to: '/generalunternehmer-rhein-main' }],
  }),
  articleBase({
    slug: 'bauleitung-bei-sanierung',
    categoryId: 'sanierung',
    title: 'Bauleitung bei Sanierung: Aufgaben und Nutzen',
    excerpt: 'Was eine professionelle Bauleitung leistet und warum sie Mehrkosten oft verhindert.',
    image: IMG.wohnung,
    publishedAt: '2024-01-30',
    tags: ['Bauleitung', 'Projektsteuerung'],
    sections: [
      { heading: 'Aufgaben der Bauleitung', paragraphs: ['Terminplanung, Gewerkekoordination, Qualitätsprüfung, Baustellenlogistik und Kommunikation mit dem Auftraggeber.'] },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Bauleitung', to: '/leistungen/generalunternehmer-bauleitung' }],
  }),
  articleBase({
    slug: 'innenausbau-umbau',
    categoryId: 'innenausbau-umbau',
    title: 'Innenausbau & Umbau: Möglichkeiten im Bestand',
    excerpt: 'Trockenbau, Raumaufteilung und moderne Wohnkonzepte ohne Großbaustelle.',
    image: IMG.innenausbau,
    publishedAt: '2024-04-02',
    tags: ['Innenausbau', 'Umbau'],
    sections: [
      { heading: 'Räume neu denken', paragraphs: ['Offene Wohnküchen, Homeoffice-Nischen oder zusätzliche Zimmer – oft mit Trockenbau und gezielten Eingriffen realisierbar.'] },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Innenausbau', to: '/innenausbau-umbau-rhein-main' }],
  }),
  articleBase({
    slug: 'raumaufteilung-aendern-trockenbau',
    categoryId: 'innenausbau-umbau',
    title: 'Raumaufteilung ändern mit Trockenbau',
    excerpt: 'Neue Wände, Schiebetüren und flexible Grundrisse im Bestand.',
    image: IMG.innenausbau,
    publishedAt: '2024-03-05',
    tags: ['Trockenbau', 'Grundriss'],
    sections: [
      { heading: 'Trockenbau-Vorteile', paragraphs: ['Schnelle Umsetzung, saubere Baustelle, Leitungen integrierbar – ideal für Wohnungsumbauten.'] },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Räume umbauen', to: '/raeume-umbauen-rhein-main' }],
  }),
  articleBase({
    slug: 'wand-entfernen-durchbruch-pruefen',
    categoryId: 'innenausbau-umbau',
    title: 'Wand entfernen: Statik und Durchbruch prüfen',
    excerpt: 'Nicht jede Wand kann einfach entfernt werden – was vor dem Durchbruch geklärt werden muss.',
    image: IMG.innenausbau,
    publishedAt: '2024-02-14',
    popular: true,
    tags: ['Wanddurchbruch', 'Statik'],
    sections: [
      {
        heading: 'Tragend oder nicht tragend?',
        paragraphs: ['Nur Fachleute können sicher beurteilen, ob eine Wand statisch relevant ist. Genehmigungen und Abstützungen können nötig sein.'],
      },
    ],
    faqs: [{ q: 'Brauche ich einen Statiker?', a: 'Bei tragenden Wänden ja. Wir koordinieren die nötigen Prüfungen und Genehmigungen.' }],
    serviceLinks: [{ label: 'Wand entfernen', to: '/wand-entfernen-rhein-main' }],
  }),
  articleBase({
    slug: 'gewerbe',
    categoryId: 'gewerbe',
    title: 'Gewerbesanierung: Was Unternehmen beachten sollten',
    excerpt: 'Büro, Praxis oder Laden – Modernisierung mit minimaler Betriebsunterbrechung.',
    image: IMG.gewerbe,
    publishedAt: '2024-03-18',
    tags: ['Gewerbe', 'Büroumbau'],
    sections: [
      { heading: 'Betrieb und Termine', paragraphs: ['Gewerbliche Projekte brauchen klare Phasenplanung, damit Mitarbeiter und Kunden möglichst wenig gestört werden.'] },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Gewerbesanierung', to: '/gewerbesanierung-rhein-main' }],
  }),
  articleBase({
    slug: 'schimmel-asbest',
    categoryId: 'schimmel-asbest',
    title: 'Schimmel & Asbest bei Sanierung: Überblick',
    excerpt: 'Schadstoffe erkennen, Risiken einschätzen und fachgerecht sanieren lassen.',
    image: IMG.schimmel,
    publishedAt: '2024-02-08',
    tags: ['Schimmel', 'Asbest', 'Schadstoffe'],
    sections: [
      { heading: 'Nicht unterschätzen', paragraphs: ['Schimmel und Asbest erfordern Fachbetriebe, Schutzmaßnahmen und Dokumentation – besonders in Altbauten.'] },
    ],
    faqs: [],
    serviceLinks: [{ label: 'Schadstoffsanierung', to: '/schadstoffsanierung-rhein-main' }],
  }),
  articleBase({
    slug: 'schimmel-bei-sanierung-ursache-pruefen',
    categoryId: 'schimmel-asbest',
    title: 'Schimmel bei Sanierung: Ursache prüfen statt nur streichen',
    excerpt: 'Warum Oberflächenbehandlung allein nicht reicht und wie dauerhafte Lösungen aussehen.',
    image: IMG.schimmel,
    publishedAt: '2024-04-25',
    popular: true,
    tags: ['Schimmel', 'Feuchtigkeit', 'Sanierung'],
    sections: [
      {
        heading: 'Ursachenanalyse',
        paragraphs: ['Undichte Leitungen, Kondensation, mangelnde Lüftung oder Wasserschäden – erst die Ursache beheben, dann sanieren.'],
      },
    ],
    faqs: [{ q: 'Ist Schimmel gesundheitsschädlich?', a: 'Ja, je nach Befall und Sensibilität. Fachgerechte Beseitigung und Bautrocknung sind wichtig.' }],
    serviceLinks: [{ label: 'Schimmelsanierung', to: '/schimmelsanierung-rhein-main' }],
  }),
];

export function getCategoryById(id) {
  return ratgeberCategories.find((c) => c.id === id);
}

export function getPublishedArticles() {
  return ratgeberArticles
    .filter((a) => a.status === 'published')
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

export function getArticleBySlug(slug) {
  return ratgeberArticles.find((a) => a.slug === slug && a.status === 'published');
}

export function getFeaturedArticle() {
  return getPublishedArticles().find((a) => a.featured) || getPublishedArticles()[0];
}

export function getArticlesByCategory(categoryId) {
  return getPublishedArticles().filter((a) => a.categoryId === categoryId);
}

export function getPopularArticles(limit = 3) {
  const popular = getPublishedArticles().filter((a) => a.popular);
  return (popular.length ? popular : getPublishedArticles()).slice(0, limit);
}

export function getRelatedArticles(article, limit = 3) {
  const scored = getPublishedArticles()
    .filter((a) => a.slug !== article.slug)
    .map((a) => {
      let score = 0;
      if (a.categoryId === article.categoryId) score += 3;
      const sharedTags = a.tags.filter((t) => article.tags.includes(t));
      score += sharedTags.length;
      return { article: a, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);
  const related = scored.map((x) => x.article);
  if (related.length >= limit) return related.slice(0, limit);
  const filler = getPublishedArticles().filter(
    (a) => a.slug !== article.slug && !related.includes(a)
  );
  return [...related, ...filler].slice(0, limit);
}

export function getAllTags() {
  const counts = {};
  getPublishedArticles().forEach((a) => {
    a.tags.forEach((t) => {
      counts[t] = (counts[t] || 0) + 1;
    });
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));
}

export function searchArticles(query) {
  const q = query.trim().toLowerCase();
  if (!q) return getPublishedArticles();
  return getPublishedArticles().filter((a) => {
    const cat = getCategoryById(a.categoryId);
    const haystack = [a.title, a.excerpt, ...a.tags, cat?.title].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

export function formatRatgeberDate(iso) {
  return new Date(iso).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export const ratgeberArticleSlugs = ratgeberArticles.map((a) => a.slug);
