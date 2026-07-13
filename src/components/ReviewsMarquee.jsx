import { Star } from 'lucide-react';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/Radex+Objektmanagement+GmbH+R%C3%B6dermark/reviews';

const GOOGLE_RATING = 4.6;
const GOOGLE_REVIEW_COUNT = 17;

const reviews = [
  { name: 'Sabine M.', city: 'Rödermark', initials: 'SM', bg: '#E8945A', text: 'Aus einem gruseligen Kachelalptraum wurde eine Wellnessoase. Absolut fachmännische Arbeit, zuverlässig und schnell.' },
  { name: 'Dieter H.', city: 'Dreieich', initials: 'DH', bg: '#4A90A4', text: 'Die neue Wärmepumpe läuft flüsterleise. Sehr kompetente Beratung und reibungslose Montage.' },
  { name: 'Karin B.', city: 'Frankfurt', initials: 'KB', bg: '#5B7EC9', text: 'Hervorragende Altbausanierung. Die Abstimmung als Generalunternehmer war perfekt.' },
  { name: 'Thomas S.', city: 'Offenbach', initials: 'TS', bg: '#C07FB5', text: 'Komplettbadsanierung im vereinbarten Zeitrahmen und zum Festpreis abgeschlossen. Sehr sauber gearbeitet!' },
  { name: 'Maria L.', city: 'Hanau', initials: 'ML', bg: '#7CB57C', text: 'Super Fliesenlegerarbeiten im Flur und Bad. Qualität ist top, Team sehr nett.' },
  { name: 'Nina W.', city: 'Frankfurt am Main', initials: 'NW', bg: '#4A90A4', text: 'Alle Arbeiten wurden zeitlich und fachgerecht eingehalten und zu unserer vollsten Zufriedenheit ausgeführt.' },
  { name: 'Andreas K.', city: 'Langen', initials: 'AK', bg: '#5B7EC9', text: 'Zuverlässiger SHK-Betrieb. Der Heizungsaustausch ging super schnell und sauber.' },
  { name: 'Corinna A.', city: 'Offenbach am Main', initials: 'CA', bg: '#5B7EC9', text: 'Vielen Dank für die schnelle und kompetente Hilfe. Großartige Arbeit – klare Empfehlung.' },
  { name: 'Stefan M.', city: 'Neu-Isenburg', initials: 'SM', bg: '#E8945A', text: 'Sehr gute Elektroinstallationen im ganzen Haus. Sicherungskasten komplett erneuert.' },
  { name: 'Julia F.', city: 'Darmstadt', initials: 'JF', bg: '#C07FB5', text: 'Wir haben unser Gäste-WC sanieren lassen. Tolle Beratung vorab, schickes Endergebnis!' },
  { name: 'Michael R.', city: 'Seligenstadt', initials: 'MR', bg: '#7CB57C', text: 'Kompetente Altbausanierung inklusive Schadstoffsanierung. Sehr professionell und sicher.' },
  { name: 'Gaby T.', city: 'Rödermark', initials: 'GT', bg: '#E8945A', text: 'Von der Badplanung bis zur Übergabe alles aus einer Hand. Kein Stress, tolles Ergebnis.' },
  { name: 'Uwe B.', city: 'Heusenstamm', initials: 'UB', bg: '#4A90A4', text: 'Trockenbau und Malerarbeiten im Wohnzimmer perfekt ausgeführt. Sehr zu empfehlen!' },
  { name: 'Sandra P.', city: 'Obertshausen', initials: 'SP', bg: '#5B7EC9', text: 'Unser barrierefreies Bad ist ein Traum geworden. Sehr rücksichtsvolles und sauberes Team.' },
  { name: 'Christian V.', city: 'Hanau', initials: 'CV', bg: '#7CB57C', text: 'Schnelle Soforthilfe bei unserem Rohrbruch. Super Service, fairer Preis.' },
];

function GoogleLogo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.28 10.08c0-.78-.07-1.53-.2-2.25H12v4.26h4.67c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 21c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 18.53 7.7 21 12 21z" fill="#34A853" />
      <path d="M5.84 12.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V5.07H2.18C1.43 6.55 1 8.22 1 10s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function StarRating({ rating, size = 18 }) {
  return (
    <span className="reviews-star-rating" aria-label={`${rating} von 5 Sternen`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        return (
          <span key={i} className="reviews-star" style={{ width: size, height: size }}>
            <Star size={size} color="#e5e7eb" fill="#e5e7eb" />
            {fill > 0 && (
              <span className="reviews-star-fill" style={{ width: `${fill * 100}%` }}>
                <Star size={size} fill="var(--gold)" color="var(--gold)" />
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}

function ReviewCard({ item }) {
  return (
    <div className="review-marquee-card">
      <div className="review-marquee-card-header">
        <div className="review-marquee-avatar" style={{ backgroundColor: item.bg }}>
          {item.initials}
        </div>
        <div className="review-marquee-meta">
          <div className="review-marquee-name-row">
            <span className="review-marquee-name">{item.name}</span>
            <span className="review-marquee-verified" title="Verifizierte Google-Bewertung">G</span>
          </div>
          <span className="review-marquee-city">{item.city}</span>
        </div>
      </div>
      <div className="review-marquee-stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
        ))}
      </div>
      <p className="review-marquee-text">&bdquo;{item.text}&ldquo;</p>
      <div className="review-marquee-footer">
        <GoogleLogo size={14} />
        <span>Google-Bewertung</span>
      </div>
    </div>
  );
}

export default function ReviewsMarquee() {
  return (
    <section id="bewertungen" className="reviews-marquee-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Kundenstimmen</span>
          <h2>Was unsere Kunden sagen</h2>
          <p className="section-subtitle">
            Echte Google-Bewertungen aus dem Rhein-Main-Gebiet – für Transparenz, die Vertrauen schafft.
          </p>
        </div>

        <div className="reviews-rating-summary">
          <div className="reviews-rating-google">
            <GoogleLogo size={28} />
            <div>
              <span className="reviews-rating-label">Google-Bewertungen</span>
              <span className="reviews-rating-sub">Radex Objektmanagement GmbH</span>
            </div>
          </div>

          <div className="reviews-rating-score">
            <span className="reviews-rating-value">{GOOGLE_RATING.toLocaleString('de-DE')}</span>
            <StarRating rating={GOOGLE_RATING} size={22} />
          </div>

          <div className="reviews-rating-stat">
            <strong>{GOOGLE_REVIEW_COUNT}</strong>
            <span>Bewertungen</span>
          </div>

          <div className="reviews-rating-stat reviews-rating-stat--highlight">
            <strong>100%</strong>
            <span>Weiterempfehlung</span>
          </div>
        </div>
      </div>

      <div className="reviews-marquee-container reviews-marquee-container--single">
        <div className="marquee-track-wrapper">
          <div className="marquee-track marquee-track--single">
            <div className="marquee-group">
              {reviews.map((item) => (
                <ReviewCard key={`${item.name}-${item.city}`} item={item} />
              ))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {reviews.map((item) => (
                <ReviewCard key={`dup-${item.name}-${item.city}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-12 text-center">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reviews-google-cta"
        >
          <GoogleLogo size={18} />
          Alle Google-Bewertungen ansehen
        </a>
      </div>
    </section>
  );
}
