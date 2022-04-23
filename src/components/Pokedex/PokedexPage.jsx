import React from "react";
import GridPokemon from "./GridPokemon";
import HeaderPokedex from "./HeaderPokedex";
import PokemonPage from "./PokemonPage";
import { Route, Routes } from "react-router-dom";

const PokedexPage = () => {
  return (
    <div>
      <HeaderPokedex />
      <Routes>
        <Route path="pokemon/:slug/:name" element={<PokedexPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
      </Routes>
      <GridPokemon />
    </div>
  );
};

export default PokedexPage;
