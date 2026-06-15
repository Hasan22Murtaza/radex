import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Redirect, useLocation } from './router';
import { resolveLegacyRedirect } from './legacyRedirects';

function LegacyRedirect() {
  const { pathname } = useLocation();
  return <Redirect to={resolveLegacyRedirect(pathname)} />;
}
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import SanierungHub from './pages/SanierungHub';
import LeistungenHub from './pages/LeistungenHub';
import EinsatzgebieteHub from './pages/EinsatzgebieteHub';
import CityPage from './pages/CityPage';
import BathroomRenovation from './pages/BathroomRenovation';
import ApartmentRenovation from './pages/ApartmentRenovation';
import HouseRenovation from './pages/HouseRenovation';
import HistoricBuildingRenovation from './pages/HistoricBuildingRenovation';
import CompleteRenovation from './pages/CompleteRenovation';
import GeneralContractor from './pages/GeneralContractor';
import EnergyEfficientRenovation from './pages/EnergyEfficientRenovation';
import CommercialRenovation from './pages/CommercialRenovation';
import MoldRemediation from './pages/MoldRemediation';
import AsbestosRemoval from './pages/AsbestosRemoval';
import HeatingPlumbing from './pages/HeatingPlumbing';
import ElectricalServices from './pages/ElectricalServices';
import InteriorConstruction from './pages/InteriorConstruction';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import UeberUns from './pages/UeberUns';
import Karriere from './pages/Karriere';

function ScrollAndAnimationManager() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo(0, 0);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.__revealed = true;
        }
      });
    }, observerOptions);

    // Track all elements marked for scroll animations
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // MutationObserver to prevent React from stripping 'revealed' on re-render
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          if (target.__revealed && !target.classList.contains('revealed')) {
            target.classList.add('revealed');
          }
        }
      });
    });

    mutationObserver.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class']
    });

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return null;
}

export default function App({ location }) {
  return (
    <BrowserRouter initialPath={location}>
      <ScrollAndAnimationManager />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Routes fallback={<LegacyRedirect />}>
          <Route path="/" element={<Home />} />
          <Route path="/sanierung-rhein-main" element={<SanierungHub />} />
          <Route path="/leistungen" element={<LeistungenHub />} />
          <Route path="/einsatzgebiete-rhein-main" element={<EinsatzgebieteHub />} />
          <Route path="/sanierung-frankfurt-am-main" element={<CityPage cityId="frankfurt" />} />
          <Route path="/haus-wohnung-bad-modernisieren-darmstadt" element={<CityPage cityId="darmstadt" />} />
          <Route path="/sanierung-offenbach-am-main" element={<CityPage cityId="offenbach" />} />
          <Route path="/sanierung-hanau" element={<CityPage cityId="hanau" />} />
          <Route path="/sanierung-wiesbaden" element={<CityPage cityId="wiesbaden" />} />
          <Route path="/sanierung-mainz" element={<CityPage cityId="mainz" />} />
          <Route path="/sanierung-aschaffenburg" element={<CityPage cityId="aschaffenburg" />} />
          <Route path="/sanierung-roedermark" element={<CityPage cityId="roedermark" />} />
          <Route path="/badsanierung-rhein-main" element={<BathroomRenovation />} />
          <Route path="/sanierung/wohnungssanierung" element={<ApartmentRenovation />} />
          <Route path="/sanierung/haussanierung" element={<HouseRenovation />} />
          <Route path="/sanierung/altbausanierung" element={<HistoricBuildingRenovation />} />
          <Route path="/komplettsanierung-rhein-main" element={<CompleteRenovation />} />
          <Route path="/generalunternehmer-rhein-main" element={<GeneralContractor />} />
          <Route path="/energetische-sanierung-rhein-main" element={<EnergyEfficientRenovation />} />
          <Route path="/gewerbe-objektsanierung-rhein-main" element={<CommercialRenovation />} />
          <Route path="/schimmelsanierung-rhein-main" element={<MoldRemediation />} />
          <Route path="/schadstoffsanierung-rhein-main" element={<MoldRemediation />} />
          <Route path="/asbestsanierung-rhein-main" element={<AsbestosRemoval />} />
          <Route path="/heizung-sanitaer-rhein-main" element={<HeatingPlumbing />} />
          <Route path="/elektroinstallation-rhein-main" element={<ElectricalServices />} />
          <Route path="/innenausbau-umbau-rhein-main" element={<InteriorConstruction />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        <Footer />
        <MobileStickyCTA />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
