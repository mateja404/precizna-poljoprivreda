export const data = [
  {
    id: "osnove-precizne-poljoprivrede",
    src: require("./KursImages/1. Precizna poljoprivreda.png"),
    alt: " Osnove precizna poljoprivrede",
    title: "OSNOVE PRECIZNE POLJOPRIVREDE",
    description:
      "Kurs Osnove precizna poljoprivrede pruža ključna znanja o savremenim metodama u poljoprivredi. Kroz ovaj kurs, polaznici stiču temeljno razumevanje i praktičnu primenu inovativnih alata, unapređujući efikasnost poljoprivredne proizvodnje.",
  },
  {
    id: "dronovi-u-poljoprivredi",
    src: require("./KursImages/2. Dronovi u poljoprivredi.png"),

    alt: "Dronovi u poljoprivredi",
    title: "DRONOVI U POLJOPRIVREDI",
    description:
      "Kurs Dronovi u poljoprivredi pruža sveobuhvatno znanje o primeni dronova u poljoprivredi. Naučićete kako koristiti dronove za efikasno praćenje stanja i zaštitu biljaka, optimizirajući proizvodnju i smanjujući upotrebu hemikalija i resursa. Pridružite nam se i postanite stručnjak u ovoj naprednoj tehnologiji za ...",
  },
  {
    id: "dronovi-za-zaštitu-biljaka",
    src: require("./KursImages/3. Dronovi za zastitu biljaka.png"),

    alt: "Dronovi za zaštitu biljaka",
    title: "DRONOVI ZA ZAŠTITU BILJAKA",
    description:
      "Kurs Dronovi u zaštiti biljaka omogućava duboko razumevanje kako dronovi revolucioniziraju poljoprivrednu zaštitu bilja. Naučite kako koristiti dronove za efikasnu i preciznu distribuciju pesticida, optimizirajući potrošnju resursa i smanjujući ekološki uticaj. Postanite ekspert u ovom inovativnom pristupu zaštiti biljaka.",
  },
  {
    id: "dronovi-za-monitoring-u-poljoprivredi",
    src: require("./KursImages/4. Dronovi za monitoring u poljoprivredi.png"),

    alt: "Dronovi za monitoring u poljoprivredi",
    title: "DRONOVI ZA MONITORING U POLJOPRIVREDI",
    description:
      "Kurs Dronovi za monitoring u poljoprivredi pruža praktično i teorijsko znanje o upotrebi dronova u optimizaciji poljoprivredne proizvodnje. Polaznici će naučiti kako efikasno koristiti dronove za praćenje stanja useva, detekciju bolesti i štetočina...",
  },
  // {
  //   id: "kurs-za-rukovaoce-sušara-u-poljoprivredi",
  //   src: require("./KursImages/5. Kurs za rukovaoce sušara u poljoprivredi.png"),

  //   alt: "Kurs za rukovaoce sušara u poljoprivredi",
  //   title: "KURS ZA RUKOVAOCE SUŠARA U POLJOPRIVREDI",
  //   description:
  //     "Departman za poljoprivrednu tehniku dvadeset godina radi na posebnoj obuci stručnjaka koji brinu o sušenju i skladištenju svega onoga što se u domaćoj poljoprivredi proizvede.",
  // },
];

export const dataSecond = [
  {
    id: "dronovi-u-poljoprivredi",
    src: require("./KursImages/2. Dronovi u poljoprivredi.png"),

    alt: "Dronovi u poljoprivredi",
    title: "DRONOVI U POLJOPRIVREDI",
  },

  {
    id: "dronovi-za-zaštitu-biljaka",
    src: require("./KursImages/3. Dronovi za zastitu biljaka.png"),

    alt: "Dronovi za zaštitu biljaka",
    title: "DRONOVI ZA ZAŠTITU BILJAKA",
  },

  {
    id: "dronovi-za-monitoring-u-poljoprivredi",
    src: require("./KursImages/4. Dronovi za monitoring u poljoprivredi.png"),

    alt: "Dronovi za monitoring u poljoprivredi",
    title: "DRONOVI ZA MONITORING U POLJOPRIVREDI",
  },

  // {
  //   id: "kurs-za-rukovaoce-sušara-u-poljoprivredi",
  //   src: require("./KursImages/5. Kurs za rukovaoce sušara u poljoprivredi.png"),

  //   alt: "Kurs za rukovaoce sušara u poljoprivredi",
  //   title: "KURS ZA RUKOVAOCE SUŠARA U POLJOPRIVREDI",
  // },

  {
    id: "osnove-precizne-poljoprivrede",
    src: require("./KursImages/1. Precizna poljoprivreda.png"),
    alt: " Osnove precizna poljoprivrede",
    title: "OSNOVE PRECIZNE POLJOPRIVREDE",
  },
];
export const sliderSettings = {
  arrows: false,
  adaptiveHeight: true,
  slidesToShow: 1,
  focusOnselect: false,
  accessability: false,
  draggable: false,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        draggable: false,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        draggable: true,
      },
    },
  ],
};

export const sliderSettingsTwo = {
  arrows: false,
  adaptiveHeight: true,
  slidesToShow: 2,
  focusOnselect: false,
  accessability: false,
  draggable: false,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        draggable: false,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 0,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 0,
      },
    },
  ],
};
