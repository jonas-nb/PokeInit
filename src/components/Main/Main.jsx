import React from "react";
import { Route, Routes } from "react-router-dom";
import Erro404 from "../Erro404";
import PokedexPage from "../Pokedex/PokedexPage";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokedex" element={<PokedexPage />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </div>
  );
};

export default Main;
