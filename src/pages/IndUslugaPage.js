import React, { useEffect } from "react";
import Footer from "../components/Footer";
import IndividualnaUsluga from "../componentsIndividualniUslaga/IndividualnaUsluga/index";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import dataUsluge from "../componentsIndividualniUslaga/IndividualnaUsluga/IndUslugaData";

const IndUslugaPage = () => {
  const { id } = useParams();

  const aktivnaUsluga = dataUsluge.find((usluga) => {
    return usluga.id === id;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout />
      <IndividualnaUsluga {...aktivnaUsluga} />
      <Footer />
    </>
  );
};

export default IndUslugaPage;
