import React from "react";
import { Header, TextP, HeroContent } from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroContent>
        <Header>Kursevi</Header>
        <TextP>
          {" "}
          U okviru naše platforme, pružamo intezivne specijalizovane kurseve
          koji se održavaju na Poljoprivrednom fakultetu u Novom Sadu iz oblasti
          savremene poljoprivrede. Predavači na kursevima su stručnjaci
          zaposleni na Poljoprivrednom fakultetu i drugim naučno- istraživačkim
          institucijama, kao i eksperti iz privrede sa velikim radnim iskustvom.
          Kursevi nude duboko razumevanje najnovijih tehnologija i inovacija.
          Kombinujući savremenu teoriju s praktičnim vežbama, osposobljavamo
          polaznike da odgovore na izazove moderne poljoprivredne prakse.
        </TextP>
      </HeroContent>
    </>
  );
};

export default Hero;
