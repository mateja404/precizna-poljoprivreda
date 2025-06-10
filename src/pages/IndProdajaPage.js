import React, { useEffect } from "react";
import Footer from "../components/Footer";
import IndividualniProdaja from "../componentsIndividualniProdaja/IndividualnaProdaja/index";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import dataProdaja from "../componentsIndividualniProdaja/IndividualnaProdaja/IndProdajaData"; // Make sure this contains the necessary fields

const IndProdajaPage = () => {
  const { id } = useParams();

  // Find the product that matches the id from the URL
  const aktivniProdaja = dataProdaja.find((prodaja) => {
    return prodaja.id === id;
  });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the page is loaded
    console.log("aktivniProdaja:", aktivniProdaja);
  }, [aktivniProdaja]);

  return (
    <>
      <Layout />
      {aktivniProdaja ? (
        // Pass all the properties of aktivniProdaja as props to IndividualniProdaja
        <IndividualniProdaja {...aktivniProdaja} />
      ) : (
        <p>Product not found</p> // Show this if no product matches the ID
      )}
      <Footer />
    </>
  );
};

export default IndProdajaPage;
