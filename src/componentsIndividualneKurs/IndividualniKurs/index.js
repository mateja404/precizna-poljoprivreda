import React from "react";
import TestDropDown from "../TestDropDown";
import Swal from "sweetalert2";

import {
  IndividualniKursContainer,
  FormLeftContainer,
  LeftContainer,
  TitileMain,
  Description,
  DurationLong,
  Price,
  FormContainer,
  Input,
  DurationTitle,
  InputNapomena,
  DropDownContainer,
} from "./IndKursElements";

import { FooterSubmeitButton } from "../../components/Footer/FooterElements";

const IndividualniKurs = (props) => {
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

  const validateForm = (event) => {
    const form = event.target.closest("form");
    const email = form.querySelector('[name="email"]').value;
    const firstName = form.querySelector('[name="firstName"]').value;
    const lastName = form.querySelector('[name="lastName"]').value;

    if (email && firstName && lastName) {
      poslato();
    } else {
      error();
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append the course title to the form data
    formData.append("courseTitle", props.title);

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
      console.log("Success", res);
    } else {
      console.log("Error", res);
    }
  };

  return (
    <IndividualniKursContainer>
      <TitileMain>{props.title}</TitileMain>
      <FormLeftContainer>
        <LeftContainer>
          <DurationTitle>OPIS</DurationTitle>
          <Description>{props.description}</Description>
          <DurationTitle>{props.durationTitle}</DurationTitle>

          <DurationLong>{props.durationLong}</DurationLong>
          <hr id="borderline"></hr>
          <Price>CENA KURSA</Price>
          <Price>{props.cenaKursa}</Price>
          <Description>
            * Minimum prijavljenih polaznika je neophodan za održavanje kursa u
            planiranim terminima.
          </Description>
          <Description>* Cena uključuje PDV.</Description>
        </LeftContainer>
        <FormContainer onSubmit={onSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            maxLength="50"
            required
          />
          <Input
            type="text"
            name="firstName"
            maxLength="50"
            placeholder="Ime"
            required
          />
          <Input
            type="text"
            name="lastName"
            maxLength="50"
            placeholder="Prezime"
            required
          />
          <InputNapomena
            type="text"
            id="napomena"
            name="napomena"
            maxLength="450"
            placeholder="Pitanje"
            rows="7"
          />
          <FooterSubmeitButton type="submit" onClick={validateForm}>
            Pošalji Pitanje
          </FooterSubmeitButton>
        </FormContainer>
      </FormLeftContainer>
      <DropDownContainer>
        <TestDropDown kursId={props.id}></TestDropDown>
      </DropDownContainer>
    </IndividualniKursContainer>
  );
};

export default IndividualniKurs;
