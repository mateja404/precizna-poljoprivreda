// App.js
import "./App.css";
import React from "react";
import Home from "./pages";
import UslugePage from "./pages/UslugePage";
import KurseviPage from "./pages/KurseviPage";
import IndUslugaPage from "./pages/IndUslugaPage";
import IndKursPage from "./pages/IndKursPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnamaPage from "./pages/OnamaPage";
import BlogPage from "./pages/BlogPage";
import ProdajaPage from "./pages/ProdajaPage";
import IndProdajaPage from "./pages/IndProdajaPage";
import Mapa from "./components/Mapa";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usluge" element={<UslugePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/prodaja" element={<ProdajaPage />} />
        <Route path="/prodaja/:id" element={<IndProdajaPage />} />
        <Route path="/usluga/:id" element={<IndUslugaPage />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/kursevi" element={<KurseviPage />} />
        <Route path="/kurs/:id" element={<IndKursPage />} />
        <Route path="/onama" element={<OnamaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
