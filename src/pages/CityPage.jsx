import { useEffect, useState } from 'react';
import { Link } from '../router';
import { Camera, MapPin, MessageSquare, Phone, CheckCircle2, ArrowRight, Award, Users, ShieldCheck, ChevronDown, AlertTriangle, Wrench } from 'lucide-react';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';

const cityDataMap = {
  frankfurt: {
    name: "Frankfurt am Main",
    path: "/sanierung-frankfurt-am-main",
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Skyline_Frankfurt_am_Main_2015.jpg/1280px-Skyline_Frankfurt_am_Main_2015.jpg",
    districts: ["Sachsenhausen", "Nordend", "Bornheim", "Bockenheim", "Westend", "Ostend", "Gallus", "Niederrad", "Höchst", "Riedberg"]
  },
  darmstadt: {
    name: "Darmstadt",
    path: "/haus-wohnung-bad-modernisieren-darmstadt",
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Darmstadt_Mathildenh%C3%B6he.jpg/1280px-Darmstadt_Mathildenh%C3%B6he.jpg",
    districts: ["Bessungen", "Eberstadt", "Kranichstein", "Arheilgen", "Wixhausen", "Innenstadt"]
  },
  offenbach: {
    name: "Offenbach",
    path: "/sanierung-offenbach-am-main",
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Offenbach_B%C3%BCsingpalais.jpg/1280px-Offenbach_B%C3%BCsingpalais.jpg",
    districts: ["Innenstadt", "Bürgel", "Bieber", "Rumpenheim", "Lauterborn", "Tempelsee"]
  },
  hanau: {
    name: "Hanau",
    path: "/sanierung-hanau",
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Hanau_Marktplatz_S%C3%BCdseite.jpg/1280px-Hanau_Marktplatz_S%C3%BCdseite.jpg",
    districts: ["Innenstadt", "Kesselstadt", "Großauheim", "Steinheim", "Wolfgang", "Lamboy"]
  },
  wiesbaden: {
    name: "Wiesbaden",
    path: "/sanierung-wiesbaden",
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Wiesbaden_BW_2017-04-24_20-51-36.jpg/1280px-Wiesbaden_BW_2017-04-24_20-51-36.jpg",
    districts: ["Innenstadt", "Biebrich", "Bierstadt", "Sonnenberg", "Schierstein", "Dotzheim"]
  },
  mainz: {
    name: "Mainz",
    path: "/sanierung-mainz",
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mainz_Dom_BW_2012-08-18_16-18-12.JPG/1280px-Mainz_Dom_BW_2012-08-18_16-18-12.JPG",
    districts: ["Altstadt", "Neustadt", "Oberstadt", "Gonsenheim", "Bretzenheim", "Mombach"]
  },
  aschaffenburg: {
    name: "Aschaffenburg",
    path: "/sanierung-aschaffenburg",
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Schloss_Johannisberg_%28Aschaffenburg%29_II.jpg/1280px-Schloss_Johannisberg_%28Aschaffenburg%29_II.jpg",
    districts: ["Innenstadt", "Damm", "Leider", "Nilkheim", "Schweinheim", "Strietwald"]
  },
  roedermark: {
    name: "Rödermark",
    path: "/sanierung-roedermark",
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Seligenstadt_Frankfurter_Strasse_12.jpg/1280px-Seligenstadt_Frankfurter_Strasse_12.jpg",
    districts: ["Ober-Roden", "Urberach", "Waldacker"]
  }
};

const serviceNavCards = [
  { to: "/badsanierung-rhein-main", title: "Badsanierung", desc: "Komplette Bädermodernisierung, barrierefreie Umbauten und Wellnessoasen.", cta: "Badsanierung planen", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" },
  { to: "/sanierung/wohnungssanierung", title: "Wohnungssanierung", desc: "Modernisierung von Wohnungen inklusive Innenausbau und Bodengestaltung.", cta: "Wohnung sanieren", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
  { to: "/sanierung/haussanierung", title: "Haussanierung", desc: "Ganzheitliche Sanierung von Einfamilienhäusern und Mehrfamilienhäusern.", cta: "Haussanierung entdecken", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
  { to: "/sanierung/altbausanierung", title: "Altbausanierung", desc: "Fachgerechte Modernisierung von denkmalgeschützten Gebäuden und Altbauten.", cta: "Mehr zur Altbausanierung", img: "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=800" },
  { to: "/heizung-sanitaer-rhein-main", title: "Heizung & Sanitär", desc: "Heizungsmodernisierung, Wärmepumpen und Sanitärinstallationen.", cta: "Heizung & Sanitär modernisieren", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" },
  { to: "/elektroinstallation-rhein-main", title: "Elektrotechnik", desc: "Erneuerung von Stromleitungen und moderner Gebäudetechnik.", cta: "Elektrik aufrüsten", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
  { to: "/schadstoffsanierung-rhein-main", title: "Schimmel- & Schadstoffsanierung", desc: "Professionelle Beseitigung von Schimmel und Gefahrstoffen (Asbest).", cta: "Befundung anfragen", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
  { to: "/gewerbe-objektsanierung-rhein-main", title: "Gewerbesanierung", desc: "Büroumbau, Mieterausbau und Sanierung von Gewerbeflächen.", cta: "Gewerbeprojekt besprechen", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" }
];

export default function CityPage({ cityId }) {
  const city = cityDataMap[cityId] || { name: "Rhein-Main-Gebiet", heroImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600", districts: [] };

  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityId]);

  const faqsData = [
    { q: `Sind Sie auch in ${city.name} und Umgebung tätig?`, a: `Ja, Radex betreut Sanierungs- und Modernisierungsprojekte in ganz ${city.name} sowie den umliegenden Stadtteilen und Gemeinden.` },
    { q: "Wie schnell erhalte ich ein Angebot?", a: "Nach einer Vor-Ort-Besichtigung oder der Auswertung Ihrer Fotos erhalten Sie in der Regel innerhalb von wenigen Tagen ein verbindliches Festpreisangebot." },
    { q: "Bieten Sie eine Festpreisgarantie an?", a: "Ja, alle unsere Angebote sind Festpreise ohne versteckte Zusatzkosten." },
    { q: "Kann ich Fotos meines Projekts vorab senden?", a: "Ja, senden Sie uns gerne Fotos per WhatsApp – wir geben Ihnen eine erste Einschätzung, bevor wir einen Vor-Ort-Termin vereinbaren." },
    { q: "Sind Sie ein lizenzierter Fachbetrieb?", a: "Radex ist ein eingetragener SHK-Meisterbetrieb und zertifizierter Generalunternehmer." }
  ];

  useSeo({
    title: `Sanierung ${city.name} | Bad, Wohnung & Haus modernisieren | Radex`,
    description: `Sanierung & Badsanierung in ${city.name} aus einer Hand: Wohnungs-, Haus- & Altbausanierung, Heizung, Elektro & mehr vom SHK-Meisterbetrieb. Festpreis. Jetzt Beratung sichern!`,
    path: city.path,
    image: city.heroImg,
    jsonLd: [buildFaqSchema(faqsData)]
  });

  const SharedCTABlock = ({ isHero = false }) => (
    <div className={`br-hero-actions ${isHero ? '' : 'mt-8'}`} style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: isHero ? 'flex-start' : 'center'}}>
      <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
      <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
        Fotos senden <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
      </a>
      <a href="tel:+496074960620" className="btn" style={{display: 'flex', alignItems: 'center', gap: '8px', background: isHero ? 'transparent' : '#fff', border: isHero ? '1px solid #111827' : '1px solid #d1d5db', color: '#111827', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none'}}>
        <Phone size={18} /> Jetzt anrufen
      </a>
    </div>
  );

  return (
    <main className="badsanierung-page">
      {/* 1. HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Sanierung & Renovierung <br/>
              <span>in {city.name}</span>
            </h1>
            <p className="br-hero-subtitle">
              Ihr lokaler Experte für hochwertige Umbauten, Badsanierungen und Haustechnik in {city.name} und Umgebung.
            </p>
            <p className="br-hero-text">
              Von der ersten Planung bis zur schlüsselfertigen Übergabe unterstützen wir Sie bei Ihrem Projekt in {city.name} – zum Festpreis und aus einer Hand.
            </p>
            <SharedCTABlock isHero={true} />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${city.heroImg})` }}>
          <div style={{position: 'absolute', bottom: '24px', left: '24px', background: 'rgba(255,255,255,0.95)', padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <MapPin size={24} color="#ea580c" />
            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#111827'}}>Radex in {city.name}</span>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="br-section" style={{paddingTop: '32px', paddingBottom: '32px', borderBottom: '1px solid #e5e7eb'}}>
        <div className="container">
          <div className="br-trust-footer" style={{borderTop: 'none', paddingTop: 0}}>
            <div className="br-trust-item">
              <Award size={32} color="#aaa" />
              <div>
                <strong>500+</strong>
                <span>Abgeschlossene Projekte</span>
              </div>
            </div>
            <div className="br-trust-item">
              <MapPin size={32} color="#aaa" />
              <div>
                <strong>60+</strong>
                <span>Betreute Städte</span>
              </div>
            </div>
            <div className="br-trust-item">
              <ShieldCheck size={32} color="#aaa" />
              <div>
                <strong>SHK-Meister</strong>
                <span>Zugelassener Fachbetrieb</span>
              </div>
            </div>
            <div className="br-trust-item">
              <Users size={32} color="#aaa" />
              <div>
                <strong>100%</strong>
                <span>Festpreisgarantie</span>
              </div>
            </div>
            <div className="br-trust-item">
              <CheckCircle2 size={32} color="#aaa" />
              <div>
                <strong>50km</strong>
                <span>Einsatzradius um {city.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WOULD YOU LIKE TO RENOVATE? (8 SERVICE NAV CARDS) */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was möchten Sie in {city.name} sanieren?</h2>
            <p className="br-section-subtitle">
              Wir bieten das gesamte Spektrum der Immobilienmodernisierung in {city.name} und Umgebung.
            </p>
          </div>

          <div className="br-projects-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            {serviceNavCards.map((card, idx) => (
              <Link key={idx} to={card.to} className="br-project-card" style={{textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb'}}>
                <div className="br-project-img" style={{ backgroundImage: `url(${card.img})`, height: '180px' }}></div>
                <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                  <h4 style={{fontSize: '18px', marginBottom: '8px', color: '#111827'}}>{card.title} in {city.name}</h4>
                  <p style={{color: '#4b5563', fontSize: '14px', marginBottom: '16px'}}>{card.desc}</p>
                  <span style={{color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px'}}>{card.cta} <ArrowRight size={16} /></span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 p-8" style={{background: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
            <h3 style={{fontSize: '24px', marginBottom: '16px', color: '#111827'}}>Planen Sie ein Projekt in {city.name}?</h3>
            <p style={{color: '#4b5563', marginBottom: '24px'}}>Senden Sie uns Fotos und erhalten Sie eine professionelle Ersteinschätzung.</p>
            <SharedCTABlock />
          </div>
        </div>
      </section>

      {/* 4. PROJECTS IN CITY */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Referenzprojekte in {city.name} und Umgebung</h2>
            <p className="br-section-subtitle">
              Ein Auszug aus unseren abgeschlossenen und laufenden Sanierungsprojekten im Rhein-Main-Gebiet.
            </p>
          </div>

          <div className="br-projects-grid">
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Badsanierung – Komplettumbau</h4>
                <p>{city.name}</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="br-project-info">
                <h4>Wohnungssanierung – Küche & Boden</h4>
                <p>{city.name}</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="br-project-info">
                <h4>Haussanierung – Wohnbereich</h4>
                <p>{city.name} Umgebung</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800)' }}>
                <span className="br-project-badge before-after">Vorher & Nachher</span>
              </div>
              <div className="br-project-info">
                <h4>Altbausanierung – Modernisierung</h4>
                <p>{city.name} Umgebung</p>
              </div>
            </div>
          </div>

          {/* Mid-page CTA */}
          <div className="text-center mt-12 p-8" style={{background: '#fff3ea', borderRadius: '8px', border: '1px solid #fdba74'}}>
            <h3 style={{fontSize: '24px', marginBottom: '16px', color: '#ea580c'}}>Noch Fragen zu Ihrem Projekt in {city.name}?</h3>
            <p style={{color: '#4b5563', marginBottom: '24px'}}>Senden Sie uns Fotos und erhalten Sie eine professionelle Ersteinschätzung.</p>
            <SharedCTABlock />
          </div>
        </div>
      </section>

      {/* 5. WHY RADEX */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer in {city.name} Radex wählen</h2>
          </div>
          <div className="br-benefits-grid">
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon"><Award size={40} color="#f97316" /></div>
              <h3>Eingetragener<br/>SHK-Meisterbetrieb</h3>
              <p>Zertifizierter Handwerksbetrieb, der fachgerechte Arbeit nach aktuellen deutschen Normen und Vorschriften liefert.</p>
            </div>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon"><Users size={40} color="#f97316" /></div>
              <h3>Alles aus<br/>einer Hand</h3>
              <p>Ein zentraler Ansprechpartner für Planung, Koordination und Ausführung Ihres Projekts in {city.name}.</p>
            </div>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon"><CheckCircle2 size={40} color="#f97316" /></div>
              <h3>Saubere<br/>Sanierung</h3>
              <p>Professionelle Staubschutzsysteme sorgen für einen sauberen Ablauf direkt vor Ort.</p>
            </div>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon"><ShieldCheck size={40} color="#f97316" /></div>
              <h3>Festpreis-<br/>Garantie</h3>
              <p>Transparente Angebote ohne versteckte Kosten oder unerwartete Extras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEED IMMEDIATE HELP? (EMERGENCY & FAST SERVICES) */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Benötigen Sie schnelle Hilfe in {city.name}?</h2>
            <p className="br-section-subtitle">
              Für dringende Fälle bieten wir priorisierte Termine und schnelle Reaktionszeiten in {city.name} und Umgebung.
            </p>
          </div>
          <div className="br-benefits-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon" style={{background: '#fff3ea'}}><AlertTriangle size={32} color="#ea580c" /></div>
              <h3>Notfall-Badservice</h3>
              <p>Schnelle Hilfe bei Wasserschäden, defekten Leitungen oder akuten Sanitärproblemen.</p>
              <a href="tel:+496074960620" className="br-seo-tag" style={{display: 'inline-block', marginTop: '12px', fontWeight: 600, color: '#ea580c'}}>Jetzt anrufen &rarr;</a>
            </div>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon" style={{background: '#fff3ea'}}><Wrench size={32} color="#ea580c" /></div>
              <h3>Express-Sanierung</h3>
              <p>Schnelle Projektabwicklung für dringende Modernisierungen mit kurzer Vorlaufzeit.</p>
              <a href="#kontakt" className="br-seo-tag" style={{display: 'inline-block', marginTop: '12px', fontWeight: 600, color: '#ea580c'}}>Termin anfragen &rarr;</a>
            </div>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon" style={{background: '#fff3ea'}}><CheckCircle2 size={32} color="#ea580c" /></div>
              <h3>Schadstoff-Sofortbefundung</h3>
              <p>Schnelle Einschätzung bei Schimmelbefall oder Verdacht auf Asbest in Bestandsgebäuden.</p>
              <Link to="/schadstoffsanierung-rhein-main" className="br-seo-tag" style={{display: 'inline-block', marginTop: '12px', fontWeight: 600, color: '#ea580c'}}>Befundung anfragen &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <SanierungskostenRechner defaultType="bad" compact />

      {/* 7. DETAILED SERVICE INFORMATION + LOCAL DISTRICTS (ACCORDIONS) */}
      <section className="br-section br-bg-light">
        <div className="container">
          <details className="br-seo-dropdown mb-6">
            <summary>
              Detaillierte Informationen zu Radex in {city.name} anzeigen
              <ChevronDown size={20} />
            </summary>
            <div className="br-seo-content">
              <div className="br-seo-text-block mb-8">
                <h3 className="mb-4 text-xl font-bold">Sanierung und Modernisierung in {city.name}</h3>
                <p className="mb-4 text-gray-600">
                  Als erfahrener SHK-Meisterbetrieb und Generalunternehmer realisiert Radex Sanierungsprojekte für Privathaushalte,
                  Kapitalanleger und Gewerbekunden in {city.name}. Von der Badsanierung über die Wohnungs- und Haussanierung bis
                  hin zur Heizungs- und Elektromodernisierung koordinieren wir alle Gewerke aus einer Hand.
                </p>
                <p className="text-gray-600">
                  Unsere lokalen Teams kennen die baulichen Besonderheiten der Gebäude in {city.name} – von Altbauten in zentralen
                  Lagen bis zu modernen Neubauten in den Stadtrandgebieten – und planen jedes Projekt entsprechend.
                </p>
              </div>
              <p className="text-center mb-6 font-semibold">Hier finden Sie detaillierte Informationen zu folgenden Themen:</p>
              <div className="br-seo-tags">
                <span className="br-seo-tag">Badsanierung {city.name}</span>
                <span className="br-seo-tag">Wohnungssanierung {city.name}</span>
                <span className="br-seo-tag">Haussanierung {city.name}</span>
                <span className="br-seo-tag">Altbausanierung {city.name}</span>
                <span className="br-seo-tag">Heizung & Sanitär {city.name}</span>
                <span className="br-seo-tag">Elektrotechnik {city.name}</span>
                <span className="br-seo-tag">Schimmelsanierung {city.name}</span>
                <span className="br-seo-tag">Gewerbesanierung {city.name}</span>
                <span className="br-seo-tag">Kostenübersicht & Förderung</span>
                <span className="br-seo-tag">Projektablauf & Planung</span>
              </div>
            </div>
          </details>

          {city.districts && city.districts.length > 0 && (
            <details className="br-seo-dropdown">
              <summary>
                Stadtteile & Umgebung in {city.name} anzeigen
                <ChevronDown size={20} />
              </summary>
              <div className="br-seo-content">
                <p className="text-center mb-6 font-semibold">Wir betreuen Sanierungsprojekte in folgenden Stadtteilen und Umgebungsgemeinden von {city.name}:</p>
                <div className="br-seo-tags">
                  {city.districts.map((district, idx) => (
                    <span key={idx} className="br-seo-tag">{district}</span>
                  ))}
                </div>
              </div>
            </details>
          )}
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-12">
            <h2 className="br-section-title">Häufig gestellte Fragen zu {city.name}</h2>
          </div>
          <div className="br-faq-grid">
            {faqsData.map((faq, i) => (
              <div key={i} className="home-faq-item">
                <button
                  className="home-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span style={{fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left'}}>{faq.q}</span>
                  <ChevronDown
                    style={{
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                    color="#9ca3af"
                    size={18}
                  />
                </button>
                <div
                  className="home-faq-answer"
                  style={{
                    display: 'grid',
                    gridTemplateRows: openFaq === i ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease',
                    padding: 0
                  }}
                >
                  <div style={{overflow: 'hidden'}}>
                    <div style={{borderTop: '1px solid #f9fafb', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '16px', paddingRight: '16px', color: '#4b5563', fontSize: '15px', lineHeight: '1.6'}}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT / FINAL CTA */}
      <section id="kontakt" className="br-section">
        <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2 className="br-section-title">Ihre lokale Handwerksfirma in {city.name}</h2>
          <p className="br-section-subtitle" style={{marginBottom: '30px'}}>
            Als zertifizierter Generalunternehmer betreuen wir Ihr Vorhaben in {city.name} von der Planung bis zur finalen Abnahme. Kontaktieren Sie uns für eine kostenlose Beratung vor Ort.
          </p>
          <SharedCTABlock />
        </div>
      </section>
    </main>
  );
}
