import { useLocation, Redirect } from '../router';
import CityPage from './CityPage';
import CityServicePage from './CityServicePage';
import { CITY_SERVICE_SLUGS, buildCityHubPath } from '../data/cityServiceRoutes';

/**
 * Handles clean city URLs:
 *   /frankfurt
 *   /frankfurt/bathroom-renovation
 *   /frankfurt/electrical-services
 */
export default function CityAreaRouter({ cityId }) {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] !== cityId) {
    return <Redirect to={buildCityHubPath(cityId)} />;
  }

  if (segments.length === 1) {
    return <CityPage cityId={cityId} canonicalPath={buildCityHubPath(cityId)} />;
  }

  if (segments.length === 2 && CITY_SERVICE_SLUGS.has(segments[1])) {
    return <CityServicePage cityId={cityId} serviceSlug={segments[1]} />;
  }

  return <Redirect to={buildCityHubPath(cityId)} />;
}
