import React from "react";
import Layout from "./Layout";
import Footer from "../components/Footer";
import HeroProdaja from "../componentsProdaja/HeroProdaja/index";
import Prodaja from "../componentsProdaja/ProdajaCards";

const ProdajaPage = () => {
  return (
    <>
      <Layout />
      <HeroProdaja />
      <Prodaja />
      <Footer />
    </>
  );
};

export default ProdajaPage;
