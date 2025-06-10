import React from "react";
import HomePageSection from "../components/HomePage";
import Usluge from "../components/Usluge";
import Footer from "../components/Footer";
import Kursevi from "../components/Kursevi";
import Prodaja from "../components/Prodaja";
import SliderTwo from "../components/SliderTwo";
import Layout from "./Layout";
import "./../App.css";

const Home = () => {
  return (
    <>
      <Layout />
      <div className="home-section">
        <HomePageSection /> {/* This will be hidden on phones */}
      </div>
      <Prodaja />
      <Kursevi />
      <Usluge />
      <SliderTwo />
      <Footer />
    </>
  );
};

export default Home;
