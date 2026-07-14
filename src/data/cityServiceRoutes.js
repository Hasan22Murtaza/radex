/**
 * Clean city + service URL helpers.
 * Pattern: /{cityId}/{service-slug}
 * e.g. /frankfurt/bathroom-renovation, /frankfurt/electrical-services
 */

export const CITY_SERVICES = [
  {
    slug: 'bathroom-renovation',
    label: 'Badsanierung',
    match: /badsanierung/i,
    titleSuffix: 'Badsanierung',
  },
  {
    slug: 'apartment-renovation',
    label: 'Wohnungssanierung',
    match: /wohnungssanierung/i,
    titleSuffix: 'Wohnungssanierung',
  },
  {
    slug: 'house-renovation',
    label: 'Haussanierung',
    match: /haussanierung|mehrfamilienhaus/i,
    titleSuffix: 'Haussanierung',
  },
  {
    slug: 'historic-renovation',
    label: 'Altbausanierung',
    match: /altbausanierung/i,
    titleSuffix: 'Altbausanierung',
  },
  {
    slug: 'interior-renovation',
    label: 'Innenausbau & Umbau',
    match: /innenausbau/i,
    titleSuffix: 'Innenausbau & Umbau',
  },
  {
    slug: 'heating-plumbing',
    label: 'Heizung & Sanitär',
    match: /heizung|sanit[aä]r/i,
    titleSuffix: 'Heizung & Sanitär',
  },
  {
    slug: 'electrical-services',
    label: 'Elektrotechnik',
    match: /elektro/i,
    titleSuffix: 'Elektrotechnik',
  },
  {
    slug: 'energy-renovation',
    label: 'Energetische Sanierung',
    match: /energetisch/i,
    titleSuffix: 'Energetische Sanierung',
  },
  {
    slug: 'mold-asbestos',
    label: 'Schimmel & Asbest',
    match: /schimmel|asbest|schadstoff/i,
    titleSuffix: 'Schimmel & Asbest',
  },
  {
    slug: 'commercial-renovation',
    label: 'Gewerbeumbau',
    match: /gewerbe/i,
    titleSuffix: 'Gewerbeumbau & Objektsanierung',
  },
];

export const CITY_SERVICE_SLUGS = new Set(CITY_SERVICES.map((s) => s.slug));

export function getCityServiceBySlug(slug) {
  return CITY_SERVICES.find((s) => s.slug === slug) || null;
}

export function buildCityHubPath(cityId) {
  return `/${cityId}`;
}

export function buildCityServicePath(cityId, serviceSlug) {
  return `/${cityId}/${serviceSlug}`;
}

export function resolveServiceFromText(text) {
  const haystack = String(text || '');
  return CITY_SERVICES.find((s) => s.match.test(haystack)) || null;
}

export function resolveCardService(card) {
  return resolveServiceFromText(`${card?.title || ''} ${card?.target || ''}`);
}

export function findCityServiceSection(seoContent, serviceSlug) {
  const def = getCityServiceBySlug(serviceSlug);
  if (!def || !seoContent?.serviceSections?.length) return null;
  return seoContent.serviceSections.find((section) => def.match.test(section.title)) || null;
}

export function listCityServiceRoutes(cityId, seoContent) {
  if (!seoContent?.serviceSections?.length) return [];
  return CITY_SERVICES.filter((service) =>
    seoContent.serviceSections.some((section) => service.match.test(section.title))
  ).map((service) => ({
    ...service,
    path: buildCityServicePath(cityId, service.slug),
    section: findCityServiceSection(seoContent, service.slug),
  }));
}
