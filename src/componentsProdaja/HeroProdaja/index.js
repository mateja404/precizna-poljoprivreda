import React from "react";
import {
  HeroProdajaContent,
  HeaderProdaja,
  TextP,
} from "./HeroProdajaElements";

const HeroProdaja = () => {
  return (
    <HeroProdajaContent>
      <HeaderProdaja>Prodaja Dronova</HeaderProdaja>
      <TextP>
        Kupovinom drona kod nas, dobijate sveobuhvatnu podršku koja uključuje
        obuku za rad sa svim modelima dronova, omogućavajući vam da efikasno
        upravljate ovom tehnologijom u poljoprivredi. Naš tim stručnjaka sa
        Poljoprivrednog fakulteta Univerziteta u Novom Sadu pruža obuku u
        realnim uslovima, garantujući da ćete biti spremni za sve izazove.
        Nudimo vam kontinuiranu podršku dok ne steknete potpuno poverenje u rad
        sa dronovima. Za one koji kupuju DJI AGRAS modele, pomažemo vam u izradi
        biznis plana i prikupljanju dokumentacije za IPARD subvencije,
        olakšavajući vam proces investicije.
      </TextP>
    </HeroProdajaContent>
  );
};

export default HeroProdaja;
