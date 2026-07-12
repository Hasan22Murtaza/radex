import { useEffect } from 'react';
import {
  Award, Users, ShieldCheck, GraduationCap, Building2, Wrench, CheckCircle2,
  Camera, MapPin,
} from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo from '../useSeo';
import {
  SharedCTABlock,
  PremiumIconCards,
  RadexLiveSection,
  LandingContactSection,
  SeoAccordionSection,
} from '../components/landing/SharedLandingParts';

const HERO_IMAGE = '/img/leistungen-hero.webp';

const trustStats = [
  { title: 'Über 40 Jahre Erfahrung', icon: <Wrench size={36} color="#f97316" /> },
  { title: 'Über 500 abgeschlossene Projekte', icon: <Award size={36} color="#f97316" /> },
  { title: 'Über 60 betreute Städte', icon: <MapPin size={36} color="#f97316" /> },
  { title: 'SHK-meistergeführter Fachbetrieb', icon: <ShieldCheck size={36} color="#f97316" /> },
  { title: 'Generalunternehmer', icon: <Building2 size={36} color="#f97316" /> },
  { title: 'Ein fester Ansprechpartner', icon: <Users size={36} color="#f97316" /> },
];

const valuesCards = [
  { title: 'Deutsche Handwerksqualität', desc: 'Wir setzen auf hochwertige Materialien, fachgerechte Ausführung und Arbeiten nach den geltenden deutschen Normen und Vorschriften.', icon: Award },
  { title: 'SHK-meistergeführter Fachbetrieb', desc: 'Technische Verantwortung und fachliche Kompetenz durch einen zugelassenen SHK-Meisterbetrieb.', icon: ShieldCheck },
  { title: 'Alles aus einer Hand', desc: 'Von der Planung über die Koordination bis zur schlüsselfertigen Übergabe erhalten Sie alle Leistungen aus einer Hand.', icon: Users },
  { title: 'Ein fester Ansprechpartner', desc: 'Während Ihres gesamten Projekts wissen Sie jederzeit, wer Ihr persönlicher Ansprechpartner ist.', icon: CheckCircle2 },
  { title: 'Innungsmitglied', desc: 'Als Mitglied der Handwerksinnung stehen wir für Qualität, Verantwortung und die kontinuierliche Weiterentwicklung unseres Handwerks.', icon: GraduationCap },
  { title: 'Ausbildungsbetrieb', desc: 'Wir investieren in die Zukunft des Handwerks und bilden den Fachkräftenachwuchs von morgen aus.', icon: GraduationCap },
  { title: 'Transparente Festpreisangebote', desc: 'Klare Leistungen, nachvollziehbare Angebote und keine versteckten Kosten.', icon: ShieldCheck },
  { title: 'Gesetzliche Gewährleistung', desc: 'Selbstverständlich erhalten Sie auf unsere Arbeiten die gesetzlich vorgeschriebene Gewährleistung. Qualität zeigt sich nicht nur bei der Übergabe, sondern auch darin, dass wir langfristig für unsere Arbeit einstehen.', icon: Award },
];

const team = [
  {
    name: 'Hakim Rafoud',
    role: 'Geschäftsführer',
    desc: 'Verantwortlich für die strategische Unternehmensentwicklung, Kundenberatung und die kaufmännische Steuerung des Unternehmens.',
  },
  {
    name: 'Abdellah Rafoud',
    role: 'Prokurist',
    desc: 'Verantwortlich für Organisation, Einkauf sowie die Koordination der täglichen Projektabläufe.',
  },
  {
    name: 'Bernd Knoop',
    role: 'SHK-Meister & Betriebsleiter',
    desc: 'Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop unsere Kunden von der technischen Planung bis zur fertigen Übergabe und stellt sicher, dass sämtliche Arbeiten den aktuellen technischen Standards entsprechen.',
  },
];

const credentials = [
  { title: 'SHK-Meisterbetrieb', icon: Award },
  { title: 'Generalunternehmer', icon: Building2 },
  { title: 'Innungsmitglied', icon: Users },
  { title: 'Ausbildungsbetrieb', icon: GraduationCap },
  { title: 'Zertifizierte Schimmel- & Asbestsachkunde', icon: ShieldCheck },
  { title: 'Über 40 Jahre Erfahrung', icon: Wrench },
];

const seoAccordions = [
  {
    title: 'Unternehmensgeschichte',
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Die Radex Objektmanagement GmbH ist ein zugelassener SHK-Meisterbetrieb mit Sitz in Rödermark. Als
          Generalunternehmer koordinieren wir Sanierungs- und Modernisierungsprojekte jeder Größenordnung –
          von einzelnen Maßnahmen über die Badsanierung bis hin zur kompletten Kernsanierung.
        </p>
        <p className="text-gray-600">
          Mit über 40 Jahren Erfahrung in den Bereichen Sanierung, Heizung, Sanitär und Gebäudetechnik kennen
          wir die Herausforderungen jedes Projekts. Ob Privathaushalt, Kapitalanleger oder Gewerbekunde: Wir begleiten
          Ihr Vorhaben von der ersten Planung bis zur schlüsselfertigen Übergabe.
        </p>
      </>
    ),
  },
  {
    title: 'Leistungsspektrum',
    content: (
      <ul className="space-y-2 text-gray-600">
        <li><Link to="/badsanierung-rhein-main">Badsanierung</Link></li>
        <li><Link to="/sanierung-rhein-main">Sanierung Rhein-Main</Link></li>
        <li><Link to="/heizung-sanitaer-rhein-main">Heizung & Sanitär</Link></li>
        <li><Link to="/innenausbau-umbau-rhein-main">Innenausbau & Umbau</Link></li>
        <li><Link to="/gewerbesanierung-rhein-main">Gewerbesanierung</Link></li>
      </ul>
    ),
  },
  {
    title: 'Einsatzgebiet',
    content: (
      <p className="text-gray-600">
        Von Rödermark aus betreuen wir Projekte im gesamten Rhein-Main-Gebiet – in über 60 Städten und Gemeinden.
        Mehr zu unseren <Link to="/einsatzgebiete-rhein-main">Einsatzgebieten</Link>.
      </p>
    ),
  },
];

export default function UeberUns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: 'Über Radex | SHK-Meisterbetrieb & Generalunternehmer im Rhein-Main-Gebiet',
    description: 'Lernen Sie Radex kennen. Über 40 Jahre Erfahrung als SHK-meistergeführter Fachbetrieb und Generalunternehmer für Badsanierung, Sanierung und Modernisierung im Rhein-Main-Gebiet.',
    path: '/ueber-uns',
    image: HERO_IMAGE,
  });

  return (
    <main className="badsanierung-page">
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">Lernen Sie Radex kennen.</h1>
            <p className="br-hero-subtitle">Das Vertrauen unserer Kunden muss man sich jeden Tag neu verdienen.</p>
            <p className="br-hero-text">
              Jede Sanierung ist ein Vertrauensprojekt. Deshalb setzen wir auf klare Kommunikation, eine durchdachte Planung und eine professionelle Ausführung – vom ersten Gespräch bis zur schlüsselfertigen Übergabe. Als SHK-meistergeführter Fachbetrieb begleitet Radex Eigentümer im gesamten Rhein-Main-Gebiet bei Badsanierungen, Wohnungs- und Haussanierungen sowie kompletten Modernisierungen.
            </p>
            <p className="br-hero-text">
              Seit über 40 Jahren stehen wir für deutsche Handwerksqualität, zuverlässige Projektkoordination und langfristige Kundenzufriedenheit. Unser Anspruch ist nicht nur eine hochwertige Sanierung, sondern eine Zusammenarbeit, auf die Sie sich heute, morgen und auch in vielen Jahren noch verlassen können.
            </p>
            <SharedCTABlock isHero />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      </section>

      <section className="br-section">
        <div className="container">
          <div className="br-benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {trustStats.map((stat) => (
              <div key={stat.title} className="br-benefit-card" style={{ textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div className="br-benefit-icon">{stat.icon}</div>
                <h3 style={{ fontSize: '16px' }}>{stat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Dafür steht Radex</h2>
          </div>
          <PremiumIconCards cards={valuesCards} />
        </div>
      </section>

      <RadexLiveSection
        intro="Vertrauen entsteht nicht durch Werbeversprechen, sondern durch echte Arbeit. Deshalb zeigen wir Ihnen nicht nur fertige Projekte, sondern auch laufende Baustellen, Vorher-Nachher-Vergleiche und authentische Einblicke in unseren Arbeitsalltag."
        heroImage="/img/innenausbau-radex-live.webp"
      />

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Das Team hinter Radex</h2>
          </div>
          <div className="br-benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {team.map((member) => (
              <div key={member.name} className="br-benefit-card" style={{ border: '1px solid #e5e7eb', textAlign: 'center', padding: '32px' }}>
                <div style={{ width: '88px', height: '88px', borderRadius: '50%', background: '#fff3ea', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <span style={{ fontSize: '28px', fontWeight: 700, color: '#f97316' }}>
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 style={{ marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ color: '#f97316', fontWeight: 600, marginBottom: '12px' }}>{member.role}</p>
                <p style={{ color: '#4b5563' }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Qualifikationen & Zertifizierungen</h2>
          </div>
          <div className="br-benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="br-benefit-card" style={{ background: '#fff', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                  <div className="br-benefit-icon"><Icon size={28} color="#f97316" /></div>
                  <h3 style={{ fontSize: '17px' }}>{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="br-section-title">Warum Eigentümer Radex vertrauen</h2>
          </div>
          <div className="br-trust-footer" style={{ border: 'none' }}>
            <div className="br-trust-item">
              <Award size={32} color="#f97316" />
              <div><strong>500+</strong><span>Projekte</span></div>
            </div>
            <div className="br-trust-item">
              <MapPin size={32} color="#f97316" />
              <div><strong>60+</strong><span>Städte</span></div>
            </div>
            <div className="br-trust-item">
              <Wrench size={32} color="#f97316" />
              <div><strong>40+ Jahre</strong><span>Erfahrung</span></div>
            </div>
            <div className="br-trust-item">
              <Users size={32} color="#f97316" />
              <div><strong>SHK-Meisterbetrieb</strong><span>Zugelassener Fachbetrieb</span></div>
            </div>
          </div>
        </div>
      </section>

      <LandingContactSection
        title="Jetzt lernen wir uns persönlich kennen."
        intro="Ganz gleich, ob Sie eine Badsanierung, Wohnungssanierung, Haussanierung oder eine komplette Modernisierung planen – wir beraten Sie persönlich, transparent und unverbindlich."
      />

      <SeoAccordionSection title="Weitere Informationen" accordions={seoAccordions} />
    </main>
  );
}
