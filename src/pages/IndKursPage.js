import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import dataKurs from "../componentsIndividualneKurs/IndividualniKurs/IndKursData";
import IndividualniKurs from "../componentsIndividualneKurs/IndividualniKurs";

const IndKursPage = () => {
  const { id } = useParams();

  const aktivniKurs = dataKurs.find((kurs) => {
    return kurs.id === id;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout />
      <IndividualniKurs {...aktivniKurs} />
      <Footer />
    </>
  );
};

export default IndKursPage;
