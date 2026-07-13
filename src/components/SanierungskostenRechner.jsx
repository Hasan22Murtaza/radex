import { useMemo, useState } from 'react';
import { Calculator, Mail, Ruler, AlertTriangle, Home, Bath, Building2, Landmark, ChevronDown, Info } from 'lucide-react';
import { Link } from '../router';
import './SanierungskostenRechner.css';

const calculators = {
  bad: {
    label: 'Badsanierung',
    icon: Bath,
    resultTitle: 'Geschätzte Kosten Ihrer Badsanierung',
    areaLabel: 'Badezimmergröße',
    areaUnit: 'm²',
    min: 3,
    max: 40,
    defaultArea: 8,
    mode: 'fixed',
    seoText: 'Badsanierung Kosten',
    prices: {
      basis: { label: 'Basis', min: 8000, avg: 11500, max: 15000 },
      komfort: { label: 'Komfort', min: 15000, avg: 20000, max: 25000 },
      premium: { label: 'Premium', min: 25000, avg: 35000, max: 45000, suffix: '+' },
    },
  },
  wohnung: {
    label: 'Wohnungssanierung',
    icon: Building2,
    resultTitle: 'Geschätzte Kosten Ihrer Wohnungssanierung',
    areaLabel: 'Wohnfläche',
    areaUnit: 'm²',
    min: 20,
    max: 500,
    defaultArea: 80,
    mode: 'sqm',
    seoText: 'Wohnungssanierung Kosten',
    prices: {
      basis: { label: 'Basis', min: 300, avg: 450, max: 600 },
      komfort: { label: 'Komfort', min: 600, avg: 800, max: 1000 },
      premium: { label: 'Premium', min: 1000, avg: 1400, max: 1800 },
    },
  },
  haus: {
    label: 'Haussanierung',
    icon: Home,
    resultTitle: 'Geschätzte Kosten Ihrer Haussanierung',
    areaLabel: 'Wohnfläche',
    areaUnit: 'm²',
    min: 50,
    max: 1000,
    defaultArea: 150,
    mode: 'sqm',
    seoText: 'Haussanierung Kosten',
    prices: {
      basis: { label: 'Basis', min: 400, avg: 550, max: 700 },
      komfort: { label: 'Komfort', min: 700, avg: 950, max: 1200 },
      premium: { label: 'Premium', min: 1200, avg: 1600, max: 2000 },
    },
  },
  altbau: {
    label: 'Altbausanierung',
    icon: Landmark,
    resultTitle: 'Geschätzte Kosten Ihrer Altbausanierung',
    areaLabel: 'Wohnfläche',
    areaUnit: 'm²',
    min: 20,
    max: 1000,
    defaultArea: 120,
    mode: 'sqm',
    seoText: 'Altbausanierung Kosten',
    prices: {
      basis: { label: 'Basis', min: 500, avg: 700, max: 900 },
      komfort: { label: 'Komfort', min: 900, avg: 1200, max: 1500 },
      premium: { label: 'Premium', min: 1500, avg: 2000, max: 2500 },
    },
  },
};

const qualityOptions = ['basis', 'komfort', 'premium'];

const formatEuro = (value) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(value);

function clamp(value, min, max) {
  const number = Number(value);
  if (Number.isNaN(number)) return min;
  return Math.min(Math.max(number, min), max);
}

export default function SanierungskostenRechner({
  defaultType = 'bad',
  compact = false,
  showIntro = true,
  id = 'sanierungskosten-rechner'
}) {
  const safeDefault = calculators[defaultType] ? defaultType : 'bad';
  const [activeType, setActiveType] = useState(safeDefault);
  const [quality, setQuality] = useState('komfort');
  const [areaValues, setAreaValues] = useState(() =>
    Object.fromEntries(Object.entries(calculators).map(([key, item]) => [key, item.defaultArea]))
  );
  const [sent, setSent] = useState(false);

  const active = calculators[activeType];
  const price = active.prices[quality];
  const area = clamp(areaValues[activeType], active.min, active.max);

  const result = useMemo(() => {
    if (active.mode === 'fixed') {
      return { min: price.min, avg: price.avg, max: price.max };
    }
    return {
      min: area * price.min,
      avg: area * price.avg,
      max: area * price.max
    };
  }, [active, area, price]);

  const rangeText = `${formatEuro(result.min)} - ${formatEuro(result.max)}${price.suffix || ''}`;

  const handleAreaChange = (event) => {
    setAreaValues((current) => ({
      ...current,
      [activeType]: clamp(event.target.value, active.min, active.max)
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const telefon = data.get('telefon')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const plz = data.get('plz')?.toString().trim();

    const subject = `Kostenlose Ersteinschätzung: ${active.label}`;
    const body = [
      `Name: ${name}`,
      `Telefonnummer: ${telefon}`,
      `E-Mail-Adresse: ${email}`,
      `Postleitzahl: ${plz}`,
      '',
      `Rechnertyp: ${active.label}`,
      `${active.areaLabel}: ${area} ${active.areaUnit}`,
      `Qualitätsstufe: ${price.label}`,
      `Ab ca.: ${formatEuro(result.min)}`,
      `Typischer Kostenbereich: ${formatEuro(result.avg)}`,
      `Bis ca.: ${formatEuro(result.max)}${price.suffix || ''}`,
      '',
      'Bitte kontaktieren Sie mich für eine kostenlose Beratung.'
    ].join('\n');

    window.location.href =
      `mailto:info@radex-objektmanagement.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id={id} className={`sk-rechner-section ${compact ? 'sk-rechner-section--compact' : ''}`}>
      <div className="container">
        {showIntro && (
          <div className="sk-rechner-heading">
            <span className="sk-rechner-kicker">Sanierungskosten Rechner</span>
            <h2>Was kostet Ihr Sanierungsprojekt?</h2>
            <p>
              Sie haben den Ablauf kennengelernt – jetzt die Kosten einschätzen. Wählen Sie Projekttyp,
              Qualitätsstufe und Größe, um einen realistischen Orientierungswert zu erhalten. Anschließend
              können Sie Ihre Eckdaten direkt an Radex senden – für eine kostenlose Ersteinschätzung
              im Rhein-Main-Gebiet.
            </p>
          </div>
        )}

        <div className="sk-rechner-card">
          <div className="sk-rechner-tabs" role="tablist" aria-label="Rechnertyp auswählen">
            {Object.entries(calculators).map(([key, item]) => {
              const Icon = item.icon;
              const isActive = activeType === key;
              return (
                <button
                  key={key}
                  type="button"
                  className={`sk-rechner-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveType(key)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${id}-panel`}
                  id={`${id}-tab-${key}`}
                >
                  <span className="sk-rechner-tab-icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <span className="sk-rechner-tab-label">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div
            className="sk-rechner-body"
            id={`${id}-panel`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${activeType}`}
          >
            <div className="sk-rechner-grid">
              <div className="sk-rechner-inputs">
                <div className="sk-rechner-inputs-header">
                  <h3>Ihre Angaben</h3>
                  <p>
                    Passen Sie Qualitätsstufe und Fläche an – der Rechner zeigt Ihnen sofort einen
                    typischen Kostenbereich als Orientierung.
                  </p>
                </div>

                <div className="sk-rechner-field">
                  <label htmlFor={`${id}-quality`}>Qualitätsstufe</label>
                  <div className="sk-rechner-select">
                    <select
                      id={`${id}-quality`}
                      value={quality}
                      onChange={(event) => setQuality(event.target.value)}
                    >
                      {qualityOptions.map((key) => (
                        <option key={key} value={key}>{active.prices[key].label}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="sk-rechner-select-icon" aria-hidden="true" />
                  </div>
                </div>

                <div className="sk-rechner-field">
                  <label htmlFor={`${id}-area`}>{active.areaLabel}</label>
                  <div className="sk-rechner-number">
                    <Ruler size={18} aria-hidden="true" />
                    <input
                      id={`${id}-area`}
                      type="number"
                      min={active.min}
                      max={active.max}
                      value={area}
                      onChange={handleAreaChange}
                      aria-describedby={`${id}-area-help`}
                    />
                    <span className="sk-rechner-number-unit" aria-hidden="true">{active.areaUnit}</span>
                  </div>
                  <p className="sk-rechner-help" id={`${id}-area-help`}>
                    Mindestwert: {active.min} {active.areaUnit} · Maximalwert: {active.max} {active.areaUnit}
                  </p>
                </div>

                <div className="sk-rechner-params">
                  <div className="sk-rechner-params-header">
                    <Info size={18} aria-hidden="true" />
                    <strong>Preisparameter {price.label}</strong>
                  </div>
                  <dl className="sk-rechner-params-list">
                    <div className="sk-rechner-params-item">
                      <dt>Bereich</dt>
                      <dd>
                        {active.mode === 'fixed'
                          ? `${formatEuro(price.min)} bis ${formatEuro(price.max)}${price.suffix || ''}`
                          : `${price.min.toLocaleString('de-DE')} - ${price.max.toLocaleString('de-DE')} €/m²`}
                      </dd>
                    </div>
                    <div className="sk-rechner-params-item">
                      <dt>Durchschnitt</dt>
                      <dd>
                        {active.mode === 'fixed'
                          ? formatEuro(price.avg)
                          : `${price.avg.toLocaleString('de-DE')} €/m²`}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="sk-rechner-result" aria-live="polite">
                <div className="sk-rechner-result-header">
                  <div className="sk-rechner-result-icon" aria-hidden="true">
                    <Calculator size={22} />
                  </div>
                  <h3>{active.resultTitle}</h3>
                </div>

                <div className="sk-rechner-result-highlight">
                  <span className="sk-rechner-result-highlight-label">Typischer Kostenbereich</span>
                  <strong className="sk-rechner-result-highlight-value">{formatEuro(result.avg)}</strong>
                </div>

                <div className="sk-rechner-result-details">
                  <div className="sk-rechner-price-row">
                    <span>Ab ca.</span>
                    <strong>{formatEuro(result.min)}</strong>
                  </div>
                  <div className="sk-rechner-price-row">
                    <span>Bis ca.</span>
                    <strong>{formatEuro(result.max)}{price.suffix || ''}</strong>
                  </div>
                </div>

                <p className="sk-rechner-range">Kostenbereich: {rangeText}</p>
              </div>
            </div>

            <div className="sk-rechner-note">
              <AlertTriangle size={20} aria-hidden="true" />
              <div>
                <strong>Orientierungswerte – kein Festpreis</strong>
                <p>
                  Alle angezeigten Beträge sind typische Einstiegspreise zur ersten Planung – kein
                  verbindliches Angebot. Der tatsächliche Festpreis hängt vom Bausubstanz-Zustand,
                  Materialwahl, Gewerkeumfang und baulichen Besonderheiten ab. Nach einer Vor-Ort-Besichtigung
                  erhalten Sie ein transparentes Festpreisangebot von Radex.
                </p>
              </div>
            </div>
          </div>

          <div className="sk-rechner-lead">
            <div className="sk-rechner-lead-copy">
              <h3>Kostenlose Ersteinschätzung anfordern</h3>
              <p>
                Überzeugt von Ihrem Ergebnis? Senden Sie Ihre Rechnerdaten direkt an uns – wir melden uns
                persönlich mit einer fachlichen Einschätzung und vereinbaren auf Wunsch einen Vor-Ort-Termin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="sk-rechner-form" aria-label="Kostenlose Beratung anfragen">
              <label>
                Name
                <input type="text" name="name" required placeholder="Ihr Name" autoComplete="name" />
              </label>
              <label>
                Telefonnummer
                <input type="tel" name="telefon" required placeholder="+49 ..." autoComplete="tel" />
              </label>
              <label>
                E-Mail-Adresse
                <input type="email" name="email" required placeholder="name@beispiel.de" autoComplete="email" />
              </label>
              <label>
                Postleitzahl
                <input type="text" name="plz" required inputMode="numeric" placeholder="60311" autoComplete="postal-code" />
              </label>
              <button type="submit" className="sk-rechner-submit">
                Kostenlose Beratung anfragen <Mail size={18} aria-hidden="true" />
              </button>
              {sent && (
                <p className="sk-rechner-sent" role="status">
                  Ihr E-Mail-Programm wurde mit der Anfrage geöffnet. Alternativ erreichen Sie uns telefonisch unter
                  <a href="tel:+496074960620"> 06074 960620</a>.
                </p>
              )}
            </form>
          </div>

          <div className="sk-rechner-seo">
            <Link to="/sanierungskosten-rechner">Sanierungskosten Rechner</Link>
            <Link to="/badsanierung-kosten">Badsanierung Kosten</Link>
            <Link to="/wohnungssanierung-kosten">Wohnungssanierung Kosten</Link>
            <Link to="/haussanierung-kosten">Haussanierung Kosten</Link>
            <Link to="/altbausanierung-kosten">Altbausanierung Kosten</Link>
            <span>Kernsanierung Kosten</span>
            <span>Sanierung Frankfurt</span>
            <span>Sanierung Rhein-Main</span>
            <span>{active.seoText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
