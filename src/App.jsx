import { useState } from "react";
import Console from "./Console";
import { Route, Routes } from "react-router-dom";
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
      </Routes>
    </div>
  );
}

export default App;
