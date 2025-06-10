import Footer from "../components/Footer";
import UslugeCards from "../componentsUsluge/UslugeCards";
import HeroUsluge from "../componentsUsluge/HeroUsluge";
import Layout from "./Layout";

const UslugePage = () => {
  return (
    <>
      <Layout />
      <HeroUsluge />
      <UslugeCards />
      <Footer />
    </>
  );
};

export default UslugePage;
