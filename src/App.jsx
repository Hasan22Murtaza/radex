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
import CityAreaRouter from './pages/CityAreaRouter';
import { cityDataMap, cityIds } from './data/cities';
import BadsanierungHub from './pages/BadsanierungHub';
import BadsanierungTopicPage from './pages/BadsanierungTopicPage';
import RatgeberRouter from './pages/RatgeberRouter';
import LeistungenCategoryPage from './pages/LeistungenCategoryPage';
import { leistungenCategories } from './data/navigation';
import ApartmentRenovation from './pages/ApartmentRenovation';
import HouseRenovation from './pages/HouseRenovation';
import HistoricBuildingRenovation from './pages/HistoricBuildingRenovation';
import CompleteRenovation from './pages/CompleteRenovation';
import GeneralContractor from './pages/GeneralContractor';
import EnergyEfficientRenovation from './pages/EnergyEfficientRenovation';
import CommercialRenovation from './pages/CommercialRenovation';
import GewerbesanierungLanding from './pages/GewerbesanierungLanding';
import HeizungSanitaerHub from './pages/HeizungSanitaerHub';
import InnenausbauUmbauHub from './pages/InnenausbauUmbauHub';
import RaeumeUmbauenLanding from './pages/RaeumeUmbauenLanding';
import SanierungsSoforthilfeLanding from './pages/SanierungsSoforthilfeLanding';
import SchadstoffsanierungLanding from './pages/SchadstoffsanierungLanding';
import SchimmelAsbestHub from './pages/SchimmelAsbestHub';
import SchnelleBadsanierungLanding from './pages/SchnelleBadsanierungLanding';
import SchnellsanierungLanding from './pages/SchnellsanierungLanding';
import WandEntfernenLanding from './pages/WandEntfernenLanding';
import SicherungskastenErneuernLanding from './pages/SicherungskastenErneuernLanding';
import WaermepumpeLanding from './pages/WaermepumpeLanding';
import MoldRemediation from './pages/MoldRemediation';
import AsbestosRemoval from './pages/AsbestosRemoval';
import HeatingPlumbing from './pages/HeatingPlumbing';
import ElectricalServices from './pages/ElectricalServices';
import InteriorConstruction from './pages/InteriorConstruction';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import UeberUns from './pages/UeberUns';
import Karriere from './pages/Karriere';
import BathroomRenovation from './pages/BathroomRenovation';
import SanierungskostenRechnerPage from './pages/SanierungskostenRechnerPage';
import SanierungAblaufLanding from './pages/SanierungAblaufLanding';
import AblaufBadsanierungLanding from './pages/AblaufBadsanierungLanding';
import BadewanneAustauschenLanding from './pages/BadewanneAustauschenLanding';
import BadmodernisierungLanding from './pages/BadmodernisierungLanding';
import BadplanungLanding from './pages/BadplanungLanding';
import SanierungskostenLanding from './pages/SanierungskostenLanding';
import RadexLiveRedirect from './pages/RadexLiveRedirect';

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
          <Route path="/sanierung-ablauf-rhein-main" element={<SanierungAblaufLanding />} />
          <Route path="/sanierungskosten-rhein-main" element={<SanierungskostenLanding />} />
          <Route path="/leistungen" element={<LeistungenHub />} />
          <Route path="/einsatzgebiete-rhein-main" element={<EinsatzgebieteHub />} />
          {cityIds.map((cityId) => (
            <Route
              key={cityId}
              path={cityDataMap[cityId].path}
              element={<CityPage cityId={cityId} />}
            />
          ))}
          {cityIds.map((cityId) => (
            <Route
              key={`clean-${cityId}`}
              pathPrefix={`/${cityId}`}
              element={<CityAreaRouter cityId={cityId} />}
            />
          ))}
          <Route pathPrefix="/ratgeber" element={<RatgeberRouter />} />
          <Route path="/badsanierung-rhein-main" element={<BadsanierungHub />} />
          <Route path="/badsanierung/badezimmer-sanieren" element={<BathroomRenovation />} />
          <Route path="/dusche-statt-badewanne" element={<BadsanierungTopicPage topicId="dusche-statt-badewanne" />} />
          <Route path="/badewanne-austauschen" element={<BadewanneAustauschenLanding />} />
          <Route path="/badmodernisierung" element={<BadmodernisierungLanding />} />
          <Route path="/barrierefreies-bad" element={<BadsanierungTopicPage topicId="barrierefreies-bad" />} />
          <Route path="/gaeste-wc" element={<BadsanierungTopicPage topicId="gaeste-wc" />} />
          <Route path="/badplanung" element={<BadplanungLanding />} />
          <Route path="/ablauf-badsanierung" element={<AblaufBadsanierungLanding />} />
          <Route path="/leistungen/heizung-sanitaer" element={<HeizungSanitaerHub />} />
          <Route path="/leistungen/innenausbau-umbau" element={<InnenausbauUmbauHub />} />
          <Route path="/leistungen/schimmel-asbest" element={<SchimmelAsbestHub />} />
          {Object.keys(leistungenCategories)
            .filter((categoryId) => categoryId !== 'heizung-sanitaer' && categoryId !== 'innenausbau-umbau' && categoryId !== 'schimmel-asbest')
            .map((categoryId) => (
            <Route
              key={categoryId}
              path={`/leistungen/${categoryId}`}
              element={<LeistungenCategoryPage categoryId={categoryId} />}
            />
          ))}
          <Route path="/sanierung/wohnungssanierung" element={<ApartmentRenovation />} />
          <Route path="/sanierung/haussanierung" element={<HouseRenovation />} />
          <Route path="/sanierung/altbausanierung" element={<HistoricBuildingRenovation />} />
          <Route path="/komplettsanierung-rhein-main" element={<CompleteRenovation />} />
          <Route path="/generalunternehmer-rhein-main" element={<GeneralContractor />} />
          <Route path="/energetische-sanierung-rhein-main" element={<EnergyEfficientRenovation />} />
          <Route path="/gewerbesanierung-rhein-main" element={<GewerbesanierungLanding />} />
          <Route path="/mieterausbau-rhein-main" element={<GewerbesanierungLanding />} />
          <Route path="/gewerbe-objektsanierung-rhein-main" element={<CommercialRenovation />} />
          <Route path="/schimmelsanierung-rhein-main" element={<MoldRemediation />} />
          <Route path="/schadstoffsanierung-rhein-main" element={<SchadstoffsanierungLanding />} />
          <Route path="/asbestsanierung-rhein-main" element={<AsbestosRemoval />} />
          <Route path="/heizung-sanitaer-rhein-main" element={<HeatingPlumbing />} />
          <Route path="/waermepumpe-rhein-main" element={<WaermepumpeLanding />} />
          <Route path="/elektroinstallation-rhein-main" element={<ElectricalServices />} />
          <Route path="/sicherungskasten-erneuern-rhein-main" element={<SicherungskastenErneuernLanding />} />
          <Route path="/wand-entfernen-rhein-main" element={<WandEntfernenLanding />} />
          <Route path="/schnellsanierung-rhein-main" element={<SchnellsanierungLanding />} />
          <Route path="/schnelle-badsanierung-rhein-main" element={<SchnelleBadsanierungLanding />} />
          <Route path="/sanierungs-soforthilfe-rhein-main" element={<SanierungsSoforthilfeLanding />} />
          <Route path="/raeume-umbauen-rhein-main" element={<RaeumeUmbauenLanding />} />
          <Route path="/innenausbau-umbau-rhein-main" element={<InteriorConstruction />} />
          <Route path="/radex-live" element={<RadexLiveRedirect />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/sanierungskosten-rechner" element={<SanierungskostenRechnerPage />} />
          <Route path="/badsanierung-kosten" element={<SanierungskostenRechnerPage defaultType="bad" metaType="bad" />} />
          <Route path="/wohnungssanierung-kosten" element={<SanierungskostenRechnerPage defaultType="wohnung" metaType="wohnung" />} />
          <Route path="/altbausanierung-kosten" element={<SanierungskostenRechnerPage defaultType="altbau" metaType="altbau" />} />
          <Route path="/haussanierung-kosten" element={<SanierungskostenRechnerPage defaultType="haus" metaType="haus" />} />
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
