import React from "react";
import Hero from "../componentsONama/Hero";
import Layout from "./Layout";
import Footer from "../components/Footer";
import SliderTwo from "../components/SliderTwo";

const OnamaPage = () => {
  return (
    <>
      <Layout />
      <Hero />
      <SliderTwo backgroundColor="#f1eeee" />
      <Footer />
    </>
  );
};

export default OnamaPage;
