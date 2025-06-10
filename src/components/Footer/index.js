import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Swal from "sweetalert2";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLogoAndAddress,
  FooterLogo,
  FooterText,
  FooterPhone,
  FooterEmail,
  FooterOnamaKurseviUslugeProdaja,
  FooterPreciznaPoljoprivreda,
  FooterOnama,
  FooterUsluge,
  FooterKursevi,
  FooterProdaja,
  FooterSolicalMedia,
  FooterSolicalMediatNaslov,
  FooterPitajteNas,
  FooterBox,
  FooterPitajteNasNaslov,
  FooterTuSmoDaVamPomognemo,
  FooterInputEmail,
  FooterInputFirstName,
  FooterInputLastName,
  FooterInputPitanje,
  FooterSubmeitButton,
  FooterFormContainer,
  FooterBlog,
  LinkForYouTube,
  LinkForFacebook,
  LinkForInstagram,
  LinkForLinkedin,
  FooterCopyright,
  FooterRadnoVreme,
} from "./FooterElements";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  const iconStyle = {
    fontSize: "24px",
    cursor: "pointer",
  };

  const poslato = () => {
    Swal.fire({
      title: "Uspesno",
      text: "Uspesno ste poslali mail",
      icon: "success",
    });
  };

  const error = () => {
    Swal.fire({
      title: "Niste popunili sva polja",
      icon: "error",
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5d439610-697a-4bc1-94c7-41c4e4cbe95d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      poslato();
      console.log("Success", res);
    } else {
      error();
      console.log("Error", res);
    }
  };

  const validateForm = (event) => {
    const form = event.target.closest("form");
    const email = form.querySelector('[name="email"]').value;
    const firstName = form.querySelector('[name="firstName"]').value;
    const lastName = form.querySelector('[name="lastName"]').value;
    const napomena = form.querySelector('[name="napomena"]').value;

    if (email && firstName && lastName && napomena) {
      poslato();
    } else {
      error();
    }
  };

  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLogoAndAddress>
          <FooterLogo />
          <FooterText>
            U svetu gde preciznost seje temelje uspeha, Precizna Poljoprivreda
            doo vas vodi kroz svet napredne poljoprivrede. Naša vizija je da
            spojimo duboko ukorenjena znanja sa prednjom linijom tehnološkog
            razvoja, nudeći vam opremu, alate i znanje za rast i prosperitet.
            Budite deo promene koja oblikuje zeleniju i efikasniju budućnost
            poljoprivredne proizvodnje
          </FooterText>
          <FooterPhone>Telefon:+381 69 720 739</FooterPhone>
          <FooterRadnoVreme>Radnim danima od 08-15h</FooterRadnoVreme>
          <FooterEmail>Email: info@preciznapoljoprivreda.rs</FooterEmail>
        </FooterLogoAndAddress>
        <FooterOnamaKurseviUslugeProdaja>
          <FooterPreciznaPoljoprivreda>
            Precizna Poljoprivreda
          </FooterPreciznaPoljoprivreda>
          <FooterProdaja to="/prodaja" onClick={toggleHome}>
            Prodaja
          </FooterProdaja>
          <FooterKursevi to="/kursevi" onClick={toggleHome}>
            Kursevi
          </FooterKursevi>
          <FooterUsluge to="/usluge" onClick={toggleHome}>
            Usluge
          </FooterUsluge>
          <FooterBlog to="/blog" onClick={toggleHome}>
            Blog
          </FooterBlog>
          <FooterOnama to="/onama" onClick={toggleHome}>
            O Nama
          </FooterOnama>
        </FooterOnamaKurseviUslugeProdaja>

        <FooterSolicalMedia>
          <FooterSolicalMediatNaslov>Social Media</FooterSolicalMediatNaslov>
          <LinkForFacebook to="https://www.facebook.com/profile.php?id=61563444249235">
            <FaFacebook style={iconStyle} />
          </LinkForFacebook>
          <LinkForInstagram to="https://www.instagram.com/precizna_poljoprivreda_doo">
            <FaInstagram style={iconStyle} />
          </LinkForInstagram>
          <LinkForLinkedin>
            <FaLinkedin style={iconStyle} />
          </LinkForLinkedin>
          <LinkForYouTube to="https://www.youtube.com/@preciznapoljoprivreda">
            <FaYoutube style={iconStyle} />
          </LinkForYouTube>
        </FooterSolicalMedia>
        <FooterPitajteNas>
          <FooterBox>
            <FooterPitajteNasNaslov>Pitajte Nas</FooterPitajteNasNaslov>
            <FooterTuSmoDaVamPomognemo>
              Tu smo da vam pomognemo.
            </FooterTuSmoDaVamPomognemo>
            <FooterFormContainer onSubmit={onSubmit}>
              <FooterInputEmail
                type="email"
                name="email"
                placeholder="Email"
                maxLength="50"
                required
              />
              <FooterInputFirstName
                type="text"
                name="firstName"
                maxLength="50"
                placeholder="Ime"
                required
              />
              <FooterInputLastName
                type="text"
                name="lastName"
                maxLength="50"
                placeholder="Prezime"
                required
              />
              <FooterInputPitanje
                type="text"
                id="napomena"
                name="napomena"
                maxLength="450"
                placeholder="Pitanje"
                rows="7"
                required
              />
              <FooterSubmeitButton type="submit" onClick={validateForm}>
                Pošalji Pitanje
              </FooterSubmeitButton>
            </FooterFormContainer>
          </FooterBox>
        </FooterPitajteNas>
      </FooterWrap>
      <FooterCopyright>
        Copyright © 2024 Precizna Poljoprivreda Sadržaj sajta je u vlasništvu
        kompanije Precizna Poljoprivreda. Zabranjeno je njegovo preuzimanje bez
        dozvole.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
