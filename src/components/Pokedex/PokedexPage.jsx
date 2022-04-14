import React from "react";
import GridPokemon from "./GridPokemon";
import HeaderPokedex from "./HeaderPokedex";

const PokedexPage = () => {
  return (
    <div>
      <HeaderPokedex />
      <GridPokemon />
    </div>
  );
};

export default PokedexPage;
