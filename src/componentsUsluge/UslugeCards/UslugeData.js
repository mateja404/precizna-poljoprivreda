const UslugeData = [
  {
    id: "prskanje-dronom",
    src: require("../UslugeImages/1. Prskanje dronom.png"),
    alt: "prskanje dronom",
    title: "PRSKANJE DRONOM",
    description:
      "Prskanje useva dronom je nezamenljivo kada konvencionalna traktorska prskalica ne može pristupiti polju. Naša firma ima više od 2000 ha iskustva u ovim tretmanima, bez reklamacija i sa odličnim rezultatima. Dronovi pružaju preciznost i efikasnost u poljoprivredi kao nikada ranije.",
  },
  {
    id: "procena-štete-i-stanja-useva",
    src: require("../UslugeImages/2. Procena stete i stanja useva.png"),
    alt: "Procena štete i stanja useva",
    title: "PROCENA STANJA USEVA ILI NASTALE ŠTETE",
    description:
      "Nastale štete na usevima usled vremenskih nepogoda poput grada, poplava i olujnih vetrova sada se precizno procenjuju. Pružamo visoko precizno mapiranje terena. Savremene tehnologije omogućavaju tačno određivanje obima štete i trenutnog stanja useva.",
  },
  {
    id: "izrada-mapa-za-varijabilne-tratmane",
    src: require("../UslugeImages/3. Izrada mapa za varijabilne tratmane.png"),
    alt: "Izrada mapa za varijabilne tratmane",
    title: "IZRADA MAPA ZA VARIJABILNE TRATMANE",
    description:
      "Izrada mapa za varijabilne tretmane je ključna za optimizaciju poljoprivrednih procesa. Korišćenjem  GPS-a sistema i varijabilne mape, poljoprivrednici mogu identifikovati različite potrebe useva. Varijabilni tretmani omogućavaju precizniju primenu đubriva, semena i pesticida.",
  },
  {
    id: "predviđanje-prinosa-pšenice",
    src: require("../UslugeImages/4. Predvidjanje prinosa psenice.png"),
    alt: "Predviđanje prinosa pšenice",
    title: "PREDVIĐANJE PRINOSA PŠENICE",
    description:
      "Predviđanje prinosa pšenice postalo je preciznije nego ikad uz upotrebu multispektralnih indeksa, dronova i mašinskog učenja. Ova kombinacija daje tačnost predviđanja prinosa do 97%, čime se omogućava bolje upravljanje usevima i resursima.",
  },
  {
    id: "procena-potreba-biljaka-za-azotom-bez-laboratorijskih-analiza",
    src: require("../UslugeImages/5. Procena potreba biljaka za azotom bez laboratorijskih analiza.png"),
    alt: "Procena potreba biljaka za azotom bez laboratorijskih analiza",
    title: "SENZORSKA DETEKCIJA AZOTA U BILJKAMA (BLISKA ILI/I DALJINSKA)",
    description:
      "Senzorska detekcija azota u biljkama je ključna za efikasno upravljanje đubrenjem. Ova tehnologija omogućava precizno praćenje potreba biljaka, smanjujući prekomerno đubrenje i štedeći resurse, čime se postižu bolji prinosi.",
  },
  {
    id: "procena-kvaliteta-setve",
    src: require("../UslugeImages/6. Procena kvaliteta setve.png"),
    alt: "Procena kvaliteta setve",
    title: "PROCENA KVALITETA SETVE",
    description:
      "Ocena kvaliteta setve je od ključne važnosti za postizanje uspešnog useva. Precizna procena i pravilna priprema setve osiguravaju optimalnu gustinu i ravnomernu distribuciju semena, što dovodi do veće produktivnosti i smanjenja gubitaka",
  },
  {
    id: "menadžment-podacima",
    src: require("../UslugeImages/7. Menadzment podacima.png"),
    alt: "Menadžment podacima",
    title: "MENADŽMENT PODACIMA",
    description:
      "Podaci dolaze sa različitih platformi te imaju najčešće specifične formate, tačnost, nivo šuma, strukturu, itd. Podaci zapravo ne znače ništa ukoliko se ne uradi adekvatna sistematizacija, filtriranje, modelovanje i ostale predradnje kojima se podacima dalje viši smisao.",
  },
  {
    id: "podešavanje-poljoprivrednih-mašina",
    src: require("../UslugeImages/8. Podesavanje poljoprivrednih masin.png"),
    alt: "Podešavanje poljoprivrednih mašina",
    title: "PODEŠAVANJE POLJOPRIVREDNIH MAŠINA - IZRADA KALIBRACIONIH KARTI",
    description:
      "Precizno podešavanje poljoprivrednih mašina je od suštinskog značaja jer osigurava optimalnu distribuciju đubriva i semena. To dovodi do većih prinosa i boljeg iskorišćenja resursa.",
  },
  {
    id: "uravnoteženje-rotora",
    src: require("../UslugeImages/9. Uravnotezenje rotora.png"),
    alt: "Uravnoteženje rotora",
    title: "URAVNOTEŽENJE ROTORA",
    description:
      "Problem neravnoteže rotora poljoprivrednih mašina može prouzrokovati vibracije i potencijalno oštetiti mašine ili sisteme na kojima se rotor koristi. Ovaj problem je posebno važan u aplikacijama gde se rotirajući delovi kreću velikim brzinama i kad su u pitanju velike mase rotora.",
  },
  {
    id: "izrada-tehničke-dokumentacije",
    src: require("../UslugeImages/10. Izrada tehnicke dokumentacije.png"),
    alt: "Izrada tehničke dokumentacije",
    title: "IZRADA TEHNIČKE DOKUMENTACIJE",
    description:
      "Naša usluga Izrada tehničke dokumentacije obuhvata kreiranje tehničkih crteža za postojeće elemente mašina, kao i projektovanje potpuno novih mašina i sklopova. Pružamo sveobuhvatnu podršku za precizno dokumentovanje i projektovanje u  industriji.",
  },
  {
    id: "izrada-3D-modela-mašinskih-sklopova-i-elemenata",
    src: require("../UslugeImages/11. Izrada 3D modela masinskih sklopova i elemenata.png"),
    alt: "Izrada 3D modela mašinskih sklopova i elemenata",
    title: "IZRADA 3D MODELA MAŠINSKIH SKLOPOVA I ELEMENATA",
    description:
      "Izrada 3D modela mašinskih sklopova i elemenata pruža prednosti u savremenoj inženjerskoj industriji. 3D modeli daju precizne vizualne reprezentacije mašinskih sklopova, olakšavajući dizajn, razvoj i analizu mašina.",
  },
  {
    id: "izrada-mape-preporuke-P-i-K-na-osnovu-mape-prinosa",
    src: require("../UslugeImages/12. Izrada mape preporuke P i K na osnovu mape prinosa.png"),
    alt: "Izrada mape preporuke P i K na osnovu mape prinosa",
    title: `IZRADA VARIJABILNE`,
    title2: ` MAPE P i K`,
    description:
      "Izrada mapa preporuka za varijabilno đubrenje kalijuma i fosfora je važan proces u poljoprivredi koji omogućava preciznije i efikasnije korišćenje đubriva, što može rezultirati povećanjem prinosa, smanjenjem troškova.",
  },
  {
    id: "savetovanje-u-preciznoj-poljoprivredi",
    src: require("../UslugeImages/13. Savetovanje u preciznoj poljoprivredi.png"),
    alt: "Savetovanje u preciznoj poljoprivredi",
    title: "KONSALTING U PRECIZNOJ POLJOPRIVREDI",
    description:
      "Konsalting u preciznoj poljoprivredi igra ključnu ulogu u pružanju stručnih saveta i podrške poljoprivrednicima u implementaciji naprednih tehnologija i praksi koje se koriste za optimizaciju poljoprivredne proizvodnje.",
  },
];

export default UslugeData;
