export const cityDataMap = {
  frankfurt: {
    name: 'Frankfurt am Main',
    path: '/sanierung-frankfurt-am-main',
    heroImg: '/img/staedte/opt_2818784-frankfurt-1709969.webp',
    districts: ['Sachsenhausen', 'Nordend', 'Bornheim', 'Bockenheim', 'Westend', 'Ostend', 'Gallus', 'Niederrad', 'Höchst', 'Riedberg'],
    featured: true,
  },
  darmstadt: {
    name: 'Darmstadt',
    path: '/haus-wohnung-bad-modernisieren-darmstadt',
    heroImg: '/img/staedte/opt_lapping-darmstadt-2209368.webp',
    districts: ['Bessungen', 'Eberstadt', 'Kranichstein', 'Arheilgen', 'Wixhausen', 'Innenstadt'],
    featured: true,
  },
  offenbach: {
    name: 'Offenbach',
    path: '/sanierung-offenbach-am-main',
    heroImg: '/img/staedte/opt_frankbender-offenbach-by-the-sea-5396484.webp',
    districts: ['Innenstadt', 'Bürgel', 'Bieber', 'Rumpenheim', 'Lauterborn', 'Tempelsee'],
    featured: true,
  },
  hanau: {
    name: 'Hanau',
    path: '/sanierung-hanau',
    heroImg: '/img/staedte/opt_hanau.webp',
    districts: ['Innenstadt', 'Kesselstadt', 'Großauheim', 'Steinheim', 'Wolfgang', 'Lamboy'],
    featured: true,
  },
  wiesbaden: {
    name: 'Wiesbaden',
    path: '/sanierung-wiesbaden',
    heroImg: '/img/staedte/opt_wiesbaden.webp',
    districts: ['Innenstadt', 'Biebrich', 'Bierstadt', 'Sonnenberg', 'Schierstein', 'Dotzheim'],
    featured: true,
  },
  mainz: {
    name: 'Mainz',
    path: '/sanierung-mainz',
    heroImg: '/img/staedte/opt_map-mainz.webp',
    districts: ['Altstadt', 'Neustadt', 'Oberstadt', 'Gonsenheim', 'Bretzenheim', 'Mombach'],
    featured: true,
  },
  aschaffenburg: {
    name: 'Aschaffenburg',
    path: '/sanierung-aschaffenburg',
    heroImg: '/img/staedte/opt_aschaffenburg.webp',
    districts: ['Innenstadt', 'Damm', 'Leider', 'Nilkheim', 'Schweinheim', 'Strietwald'],
    featured: true,
  },
  roedermark: {
    name: 'Rödermark',
    path: '/sanierung-roedermark',
    heroImg: '/img/staedte/opt_wiki-roedermark.webp',
    districts: ['Ober-Roden', 'Urberach', 'Waldacker'],
    featured: true,
  },
  'bad-homburg': {
    name: 'Bad Homburg',
    path: '/sanierung-bad-homburg-v-d-hoehe',
    heroImg: '/img/staedte/opt_badhombrg.webp',
    districts: [],
    featured: false,
  },
  dieburg: {
    name: 'Dieburg',
    path: '/sanierung-dieburg',
    heroImg: '/img/staedte/opt_wiki-dieburg.webp',
    districts: [],
    featured: false,
  },
  dietzenbach: {
    name: 'Dietzenbach',
    path: '/sanierung-dietzenbach',
    heroImg: '/img/staedte/opt_wiki-dietzenbach.webp',
    districts: [],
    featured: false,
  },
  dreieich: {
    name: 'Dreieich',
    path: '/sanierung-dreieich',
    heroImg: '/img/staedte/opt_wiki-dreieich.webp',
    districts: [],
    featured: false,
  },
  heusenstamm: {
    name: 'Heusenstamm',
    path: '/sanierung-heusenstamm',
    heroImg: '/img/staedte/opt_wiki-heusenstamm.webp',
    districts: [],
    featured: false,
  },
  langen: {
    name: 'Langen',
    path: '/sanierung-langen',
    heroImg: '/img/staedte/opt_wiki-langen.webp',
    districts: [],
    featured: false,
  },
  maintal: {
    name: 'Maintal',
    path: '/sanierung-maintal',
    heroImg: '/img/staedte/opt_wiki-maintal.webp',
    districts: [],
    featured: false,
  },
  'moerfelden-walldorf': {
    name: 'Mörfelden-Walldorf',
    path: '/sanierung-moerfelden-walldorf',
    heroImg: '/img/staedte/opt_wiki-moerfelden.webp',
    districts: [],
    featured: false,
  },
  'neu-isenburg': {
    name: 'Neu-Isenburg',
    path: '/sanierung-neu-isenburg',
    heroImg: '/img/staedte/opt_Neu-Isenburg.webp',
    districts: [],
    featured: false,
  },
  obertshausen: {
    name: 'Obertshausen',
    path: '/sanierung-obertshausen',
    heroImg: '/img/staedte/opt_wiki-obertshausen.webp',
    districts: [],
    featured: false,
  },
  rodgau: {
    name: 'Rodgau',
    path: '/sanierung-rodgau',
    heroImg: '/img/staedte/opt_wiki-rodgau.webp',
    districts: [],
    featured: false,
  },
  seligenstadt: {
    name: 'Seligenstadt',
    path: '/sanierung-seligenstadt',
    heroImg: '/img/staedte/opt_wiki-seligenstadt.webp',
    districts: [],
    featured: false,
  },
  weiterstadt: {
    name: 'Weiterstadt',
    path: '/sanierung-weiterstadt',
    heroImg: '/img/staedte/opt_wiki-weiterstadt.webp',
    districts: [],
    featured: false,
  },
  'bad-nauheim': {
    name: 'Bad Nauheim',
    path: '/sanierung-bad-nauheim',
    heroImg: '/img/staedte/opt_wiki-bad-nauheim.webp',
    districts: [],
    featured: false,
  },
};

export const cityIds = Object.keys(cityDataMap);

export const implementedCityPaths = new Set(
  Object.values(cityDataMap).map((city) => city.path)
);

export const featuredCities = cityIds
  .filter((id) => cityDataMap[id].featured)
  .map((id) => ({
    id,
    name: cityDataMap[id].name,
    img: cityDataMap[id].heroImg,
    link: cityDataMap[id].path,
  }));

export const additionalCities = cityIds
  .filter((id) => !cityDataMap[id].featured)
  .map((id) => ({
    id,
    name: cityDataMap[id].name,
    img: cityDataMap[id].heroImg,
    link: cityDataMap[id].path,
  }));

export const cityScrapeUrls = {
  darmstadt: 'https://www.radex-objektmanagement.de/haus-wohnung-bad-modernisieren-darmstadt',
  offenbach: 'https://www.radex-objektmanagement.de/sanierung-offenbach-am-main',
  hanau: 'https://www.radex-objektmanagement.de/sanierung-hanau',
  wiesbaden: 'https://www.radex-objektmanagement.de/sanierung-wiesbaden',
  mainz: 'https://www.radex-objektmanagement.de/sanierung-mainz',
  aschaffenburg: 'https://www.radex-objektmanagement.de/sanierung-aschaffenburg',
  roedermark: 'https://www.radex-objektmanagement.de/sanierung-roedermark',
  'bad-homburg': 'https://www.radex-objektmanagement.de/sanierung-bad-homburg-v-d-hoehe',
  dieburg: 'https://www.radex-objektmanagement.de/sanierung-dieburg',
  dietzenbach: 'https://www.radex-objektmanagement.de/sanierung-dietzenbach',
  dreieich: 'https://www.radex-objektmanagement.de/sanierung-dreieich',
  heusenstamm: 'https://www.radex-objektmanagement.de/sanierung-heusenstamm',
  langen: 'https://www.radex-objektmanagement.de/sanierung-langen',
  maintal: 'https://www.radex-objektmanagement.de/sanierung-maintal',
  'moerfelden-walldorf': 'https://www.radex-objektmanagement.de/sanierung-moerfelden-walldorf',
  'neu-isenburg': 'https://www.radex-objektmanagement.de/sanierung-neu-isenburg',
  obertshausen: 'https://www.radex-objektmanagement.de/sanierung-obertshausen',
  rodgau: 'https://www.radex-objektmanagement.de/sanierung-rodgau',
  seligenstadt: 'https://www.radex-objektmanagement.de/sanierung-seligenstadt',
  weiterstadt: 'https://www.radex-objektmanagement.de/sanierung-weiterstadt',
  'bad-nauheim': 'https://www.radex-objektmanagement.de/sanierung-bad-nauheim',
};
