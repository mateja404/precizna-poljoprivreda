import React from "react";
import { Header, TextP, HeroUslugeContent } from "./HeroUslugeElements";

const HeroUsluge = () => {
  return (
    <>
      <HeroUslugeContent>
        <Header>Usluge</Header>
        <TextP>
          {" "}
          U saradnji sa specijalizovanim stručnim firmama iz oblasti
          poljoprivrede, pružamo vam usluge za unapređenje vašeg poslovanja.
          Naša ponuda bazira se na implementaciji najnovijih tehnologija u
          poljoprivrednoj proizvodnji, ciljajući na optimizaciju i maksimalnu
          efikasnost vaših resursa. Naša posvećenost, uz kombinaciju stručnosti
          i inovacija, garantuje postizanje vrhunskih rezultata u svim
          segmentima vašeg poljoprivrednog poduhvata.
        </TextP>
      </HeroUslugeContent>
    </>
  );
};

export default HeroUsluge;
