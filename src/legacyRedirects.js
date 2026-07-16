// Maps legacy/long-tail URLs from the old radex-objektmanagement.de site
// to the closest equivalent page on the new site, to preserve SEO rankings.

import { implementedCityPaths } from './data/cities.js';

// Exact-match redirects for pages with no obvious keyword match.
const exactRedirects = {
  '/kontakt': '/#kontakt',
  '/dienstleistungen': '/leistungen',
  '/ratgeber': '/ratgeber',
  '/radex-live': '/#beispiele',
  '/gewerbeumbau': '/gewerbe-objektsanierung-rhein-main',
  '/umbau': '/innenausbau-umbau-rhein-main',
  '/raumoptimierung': '/raeume-umbauen-rhein-main',
  '/wohnungssanierung-rhein-main': '/sanierung/wohnungssanierung',
  '/haussanierung-rhein-main': '/sanierung/haussanierung',
  '/altbausanierung-rhein-main': '/sanierung/altbausanierung',
  '/elektrotechnik-rhein-main': '/elektroinstallation-rhein-main',
  '/badsanierung': '/badsanierung-rhein-main',
  '/wohnungssanierung': '/sanierung/wohnungssanierung',
  '/energetische-sanierung': '/energetische-sanierung-rhein-main',
  '/badsanierung-roedermark': '/sanierung-roedermark',
  '/haus-sanieren-wohnungssanierung-darmstadt': '/haus-wohnung-bad-modernisieren-darmstadt',
  '/badsanierung-ablauf-rhein-main': '/ablauf-badsanierung',
  '/wohnung-sanieren-kosten-rhein-main': '/wohnungssanierung-kosten',
  '/haus-sanieren-kosten-rhein-main': '/sanierungskosten-rechner',
  '/altbau-sanieren-kosten-rhein-main': '/altbausanierung-kosten',
};

// Ordered keyword -> destination rules, checked in order for any URL
// not covered by exactRedirects or the main route table.
const keywordRedirects = [
  // Bathroom renovation long-tail variants
  // Bathroom renovation topic pages
  { test: (p) => p.startsWith('/dusche-statt-badewanne'), to: '/dusche-statt-badewanne' },
  { test: (p) => p.startsWith('/badewanne-austauschen') || p.startsWith('/badsanierung/badewanne-austauschen'), to: '/badewanne-austauschen' },
  { test: (p) => p.startsWith('/badmodernisierung') || p.startsWith('/badsanierung/badmodernisierung'), to: '/badmodernisierung' },
  { test: (p) => p.startsWith('/badrenovierung') || p.startsWith('/badsanierung/badrenovierung'), to: '/badrenovierung' },
  { test: (p) => p.startsWith('/barrierefreies-bad'), to: '/barrierefreies-bad' },
  { test: (p) => p.startsWith('/gaeste-wc') || p.startsWith('/kleines-bad'), to: '/gaeste-wc' },
  { test: (p) => p.startsWith('/badplanung'), to: '/badplanung' },
  { test: (p) => p === '/badsanierung/ablauf-badsanierung', to: '/ablauf-badsanierung' },
  { test: (p) => p === '/badsanierung/badsanierung-dauer' || p.startsWith('/badsanierung-dauer'), to: '/badsanierung-dauer' },
  { test: (p) => p === '/badsanierung/badsanierung-festpreis' || p.startsWith('/badsanierung-festpreis'), to: '/badsanierung-festpreis' },
  { test: (p) => p.startsWith('/badsanierung/badezimmer-sanieren') || p.startsWith('/komplettbadsanierung'), to: '/badsanierung/badezimmer-sanieren' },
  { test: (p) => p.startsWith('/schnelle-badsanierung') && !p.startsWith('/schnelle-badsanierung-rhein-main'), to: '/schnelle-badsanierung-rhein-main' },
  { test: (p) => p.startsWith('/bad-soforthilfe'), to: '/badsanierung/badezimmer-sanieren' },
  { test: (p) => p.startsWith('/badsanierung') || p.startsWith('/badsanierung-kosten-rhein-main'), to: '/badsanierung-rhein-main' },

  // Apartment / house / historic building renovation guides
  { test: (p) => p.startsWith('/sanierung/wohnung') || p === '/sanierung/wohnung-sanieren-kosten', to: '/sanierung/wohnungssanierung' },
  { test: (p) => p.startsWith('/sanierung/haus'), to: '/sanierung/haussanierung' },
  { test: (p) => p.startsWith('/sanierung/altbau'), to: '/sanierung/altbausanierung' },

  // General contractor / complete renovation
  { test: (p) => p.startsWith('/generalunternehmer') || p.startsWith('/bauleitung-projektsteuerung'), to: '/generalunternehmer-rhein-main' },
  { test: (p) => p.startsWith('/komplettsanierung') || p.startsWith('/kernsanierung') || p.startsWith('/teilsanierung'), to: '/komplettsanierung-rhein-main' },

  // Electrical
  { test: (p) => p.startsWith('/sicherungskasten') && !p.startsWith('/sicherungskasten-erneuern-rhein-main'), to: '/sicherungskasten-erneuern-rhein-main' },
  { test: (p) => p.startsWith('/elektro') || p.startsWith('/altbau-elektrik'), to: '/elektroinstallation-rhein-main' },

  // Heating & plumbing
  { test: (p) => p.startsWith('/waermepumpe') && !p.startsWith('/waermepumpe-rhein-main'), to: '/waermepumpe-rhein-main' },
  { test: (p) => p.startsWith('/heizung') || p.startsWith('/sanitaerinstallation'), to: '/heizung-sanitaer-rhein-main' },

  // Interior construction
  { test: (p) => p.startsWith('/wand-entfernen') && !p.startsWith('/wand-entfernen-rhein-main'), to: '/wand-entfernen-rhein-main' },
  { test: (p) => p.startsWith('/innenausbau') || p.startsWith('/trockenbau'), to: '/innenausbau-umbau-rhein-main' },

  // Energy efficiency
  { test: (p) => p.startsWith('/energetische-sanierung') || p.startsWith('/energieeffizienz') || p.startsWith('/sanierung-foerderung'), to: '/energetische-sanierung-rhein-main' },

  // Mold / asbestos / hazardous materials
  { test: (p) => p.startsWith('/schimmelsanierung'), to: '/schimmelsanierung-rhein-main' },
  { test: (p) => p.startsWith('/asbestsanierung'), to: '/asbestsanierung-rhein-main' },
  { test: (p) => p.startsWith('/schadstoffsanierung'), to: '/schadstoffsanierung-rhein-main' },

  // Fast/emergency renovation
  { test: (p) => p.startsWith('/schnellsanierung') && !p.startsWith('/schnellsanierung-rhein-main'), to: '/schnellsanierung-rhein-main' },

  // Commercial / office renovation
  { test: (p) => p.startsWith('/mieterausbau'), to: '/gewerbesanierung-rhein-main' },
  { test: (p) => p.startsWith('/bueroumbau'), to: '/gewerbesanierung-rhein-main' },
  { test: (p) => p.startsWith('/gewerbe'), to: '/gewerbe-objektsanierung-rhein-main' },

  // City pages we don't host individually go to the service area hub
  {
    test: (p) =>
      !implementedCityPaths.has(p)
      && (p.startsWith('/sanierung-') || p.startsWith('/badsanierung-') || /^\/(haus|wohneigentum|immobilie|eigentumswohnung|villa|reihenhaus|einfamilienhaus|haus-wohnung)[-_a-z]*(darmstadt|kelkheim|bad-soden|friedrichsdorf|bad-vilbel|hattersheim|karben|kelsterbach|moerfelden-walldorf|obertshausen)/.test(p)),
    to: '/einsatzgebiete-rhein-main',
  },

  // Ratgeber articles live at /ratgeber/<slug> – handled by RatgeberRouter
];

export function resolveLegacyRedirect(pathname) {
  if (exactRedirects[pathname]) return exactRedirects[pathname];
  const rule = keywordRedirects.find((r) => r.test(pathname));
  return rule ? rule.to : '/';
}
