import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Erro404 from "./components/Erro404";
import Home from "./components/Main/Home";
import GridPokemon from "./components/Pokedex/GridPokemon";
import PokemonPage from "./components/Pokedex/PokemonPage";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<GridPokemon />} />
        <Route path="/pokemon/:slug/:name" element={<PokemonPage />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </div>
  );
}

export default App;
