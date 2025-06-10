import { DescriptionOfTeamMember } from "./HeroElements";

export const data = [
  {
    title: "INTERNET PLATFORMA preciznapoljoprivreda.rs",
    secondTitle: "SVE ZA POLJOPRIVREDU NA JEDNOM MESTU",
    desxription1:
      "Dobrodošli u budućnost poljoprivrede na jednom mestu! Pozivamo vas da istražite našu inovativnu platformu posvećenu preciznoj poljoprivredi gde se znanje, tehnologija i praktično iskustvo sjedinjuju kako bi vam omogućili najviši nivo uspeha u vašem agrarnom poduhvatu.",
    desxription2:
      "Naša internet platforma je vaša kapija ka svetu savremene poljoprivrede u kojem se dešavaju fascinantni preokreti. Osim toga, pružamo vam uvid u najnovija dostignuća poljoprivredne nauke kroz naše kurseve. Stručno osmišljeni i vođeni od strane iskusnih predavača, naši kursevi vam omogućavaju da koristite najsavremenije tehnike i strategije koje su ključne za uspeh u današnjoj dinamičnoj poljoprivredi.",
    desxription3:
      "Ono što nas čini posebnim je naša posvećenost edukaciji i naučnom razvoju. Osnivači i saradnici naše firme Precizna Poljoprivreda d.o.o. čine stručnjaci iz naučno-obrazovnih institucija, većinom zaposlenih na Poljoprivrednom fakultetu u Novom Sadu. Naš cilj je ne samo usmeren ka napredovanju u polju poljoprivredne nauke, već i ka prenošenju tog znanja i donošenja najnovijih tehnologija poljoprivrednim proizvođačima. Sa tom misijom, rodila se ideja da objedinimo sve iz agrarnog sveta na internet platformi preciznapoljoprivreda.rs.",
    desxription4:
      "Pored kurseva, koje organizujemo na Poljoprivrednom fakultetu u Novom Sadu, pružamo stručne usluge i nudimo širok asortiman revolucionarnih dronova.",
    desxription5:
      "Dobrodošli ste na našu platformu koja je dizajnirana kako bi vas inspirisala i podržala na putu ka uspehu u preciznoj poljoprivredi!",
    restOfTeamTitle: "Predavači i Stručni Saradnici",
  },
  {
    id: 1,
    src: require("./images/Stamenkovic.jpg"),
    alt: "Dr Zoran Stamenković",
    predavac: "Dr Zoran Stamenković, docent",
    univerzited: "Univerzitet u Novom Sadu",
    fakultet: "Poljoprivredni fakultet",
    departmant: "Departman za poljoprivrednu tehniku",
  },
  {
    id: 2,
    src: require("./images/Keselj.jpg"),
    alt: "MSc Krstan Kešelj",
    predavac: "MSc Krstan Kešelj, asistent",
    univerzited: "Univerzitet u Novom Sadu",
    fakultet: "Poljoprivredni fakultet",
    departmant: "Departman za poljoprivrednu tehniku",
  },
];

export const dataCard = [
  // {
  //   id: 1,
  //   src: require("./images/Kostic.jpg"),
  //   alt: "Dr Marko Kostić",
  //   predavac: (
  //     <DescriptionOfTeamMember>
  //       <p className="p__onama">
  //         <b>Dr Marko Kostić, vanredni profesor</b>
  //       </p>
  //       <p className="p__onama">Univerzitet u Novom Sadu</p>
  //       <p className="p__onama">Poljoprivredni fakultet</p>
  //     </DescriptionOfTeamMember>
  //   ),
  // },
  {
    id: 2,
    src: require("./images/Tekic.jpg"),
    alt: "Dr Dragana Novaković",
    predavac: (
      <DescriptionOfTeamMember>
        <p className="p__onama">
          <b>Dr Dragana Novaković, docent</b>
        </p>
        <p className="p__onama">Univerzitet u Novom Sadu</p>
        <p className="p__onama">Poljoprivredni fakultet</p>
      </DescriptionOfTeamMember>
    ),
  },
  {
    id: 3,
    src: require("./images/Novakovic.jpg"),
    alt: "Dr Tihomir Novaković",
    predavac: (
      <DescriptionOfTeamMember>
        <p className="p__onama">
          <b>Dr Tihomir Novaković, docent</b>
        </p>
        <p className="p__onama">Univerzitet u Novom Sadu</p>
        <p className="p__onama">Poljoprivredni fakultet</p>
      </DescriptionOfTeamMember>
    ),
  },
];
