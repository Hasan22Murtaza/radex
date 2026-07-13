import { useEffect } from 'react';
import { RADEX_LIVE_URL } from '../constants/brand';

export default function RadexLiveRedirect() {
  useEffect(() => {
    window.location.replace(RADEX_LIVE_URL);
  }, []);

  return (
    <main style={{ flexGrow: 1, padding: '80px 24px', textAlign: 'center' }}>
      <p>Weiterleitung zu Radex Live …</p>
      <p>
        <a href={RADEX_LIVE_URL}>Falls nichts passiert, hier klicken.</a>
      </p>
    </main>
  );
}
