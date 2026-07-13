import { useEffect, useRef, useState } from 'react';
import { Link } from '../router';
import { Play, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { RADEX_LIVE_URL } from '../constants/brand';
import testVideo from '../assets/test.mp4';
import personImage from '../assets/Screenshot_5.png';
import '../home.css';

const RADEX_LIVE_VIDEO_ID = '4A0f7A5mPLI';

function YouTubeEmbed({ videoId, title }) {
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const userMutedRef = useRef(false);
  const playerReadyRef = useRef(false);
  const inViewRef = useRef(false);

  const sendCommand = (func, args = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      '*'
    );
  };

  const syncPlayback = () => {
    if (!playerReadyRef.current) return;
    sendCommand(inViewRef.current ? 'playVideo' : 'pauseVideo');
  };

  const handleIframeLoad = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'listening', id: videoId }),
      '*'
    );
    playerReadyRef.current = true;
    syncPlayback();
  };

  const unmute = () => {
    sendCommand('unMute');
    sendCommand('setVolume', [100]);
    setMuted(false);
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!userMutedRef.current) {
        unmute();
      }
      removeListeners();
    };
    const events = ['pointerdown', 'touchstart', 'keydown', 'scroll', 'wheel'];
    const removeListeners = () => {
      events.forEach((e) => window.removeEventListener(e, handleFirstInteraction));
    };
    events.forEach((e) =>
      window.addEventListener(e, handleFirstInteraction, { once: false, passive: true })
    );
    return removeListeners;
  }, []);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.4 }
    );

    observer.observe(target);

    const handleVisibility = () => {
      if (document.hidden) {
        sendCommand('pauseVideo');
      } else {
        syncPlayback();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const toggleSound = () => {
    if (muted) {
      userMutedRef.current = false;
      unmute();
      sendCommand('playVideo');
    } else {
      userMutedRef.current = true;
      sendCommand('mute');
      setMuted(true);
    }
  };

  return (
    <div ref={containerRef} className="home-radex-live-video">
      <iframe
        ref={iframeRef}
        onLoad={handleIframeLoad}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1&enablejsapi=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

      <button
        type="button"
        onClick={toggleSound}
        className="home-radex-live-sound"
        aria-label={muted ? 'Ton einschalten' : 'Ton ausschalten'}
      >
        {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
      </button>

      {muted && (
        <button type="button" onClick={toggleSound} className="home-radex-live-sound-hint">
          <Volume2 size={16} /> Ton einschalten
        </button>
      )}
    </div>
  );
}

export default function VideoSection() {
  return (
    <>
      {/* Bernd Knoop – Intro Video */}
      <section className="home-section home-meet-section bg-white">
        <div className="container">
          <div className="home-meet-grid">
            <div className="home-meet-video">
              <video
                src={testVideo}
                controls
                playsInline
                poster="/img/radex-unternehmenspraesentation-poster.webp"
                title="Bernd Knoop – SHK-Meister & Betriebsleiter"
              />
            </div>

            <div className="home-meet-profile">
              <span className="home-section-kicker">Persönlich an Ihrer Seite</span>
              <h2 className="text-3xl font-bold text-navy">Bernd Knoop</h2>
              <p className="home-meet-role">SHK-Meister & Betriebsleiter</p>
              <p className="text-gray-600" style={{ lineHeight: 1.7, marginBottom: '24px' }}>
                Mit über 30 Jahren Berufserfahrung begleitet Bernd Knoop Ihr Sanierungsprojekt von der
                technischen Planung bis zur fertigen Übergabe – persönlich, transparent und zum Festpreis.
              </p>
              <blockquote className="home-meet-quote">
                „Als SHK-Meisterbetrieb und Generalunternehmer stehen wir für handwerkliche Qualität,
                klare Kommunikation und verlässliche Umsetzung – im gesamten Rhein-Main-Gebiet.“
              </blockquote>
              <div className="home-meet-profile-row">
                <img
                  src={personImage}
                  alt="Bernd Knoop, SHK-Meister und Betriebsleiter"
                  className="home-meet-photo"
                  loading="lazy"
                />
                <a href="#kontakt" className="home-btn-orange">
                  Projekt besprechen <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radex Live */}
      <section className="home-section home-radex-live-section">
        <div className="container">
          <div className="home-radex-live-grid">
            <div className="home-radex-live-copy">
              <div className="home-radex-live-badge">
                <Play size={16} fill="#f97316" /> Radex Live
              </div>
              <h2 className="text-3xl font-bold">Schauen Sie uns über die Schulter.</h2>
              <p>
                Fotos zeigen Ergebnisse – Videos zeigen echte Arbeit. Mit Radex Live können Sie laufende
                Baustellen, Renovierungsfortschritte und abgeschlossene Projekte im gesamten Rhein-Main-Gebiet
                verfolgen. Transparenz und Handwerksqualität, die Sie sehen können.
              </p>
              <ul className="home-radex-live-list">
                <li>Echte Baustellen-Einblicke aus Frankfurt, Offenbach, Darmstadt & Umgebung</li>
                <li>Fortschritts-Updates, Vorher/Nachher und Projektberichte</li>
                <li>Professionelle Ausführung – dokumentiert und nachvollziehbar</li>
              </ul>
              <div className="home-radex-live-actions">
                <Link to={RADEX_LIVE_URL} className="home-btn-orange">
                  Alle Projekte ansehen <ArrowRight size={16} />
                </Link>
                <a href="#kontakt" className="home-btn-white home-btn-white--dark">
                  Beratung anfordern
                </a>
              </div>
            </div>

            <YouTubeEmbed
              videoId={RADEX_LIVE_VIDEO_ID}
              title="Radex Live – Sanierungsprojekt im Rhein-Main-Gebiet"
            />
          </div>
        </div>
      </section>
    </>
  );
}
