import React from "react";
import { MdCatchingPokemon } from "react-icons/md";
import { SiPokemon } from "react-icons/si";
const HeaderPokedex = () => {
  return (
    <div className="bg-cyan-500 flex items-center text-3xl font-semibold h-24 w-full shadow-md shadow-teal-900/50 fixed">
      {/* icon from logo */}
      <SiPokemon className="pl-2 text-8xl text-black/40" />
      {/* title of pokedex */}
      <div className="flex items-center justify-between text-4xl m-auto w-6/12 ">
        <h1>Pokedex</h1>
        <MdCatchingPokemon className="text-4xl " />
      </div>
    </div>
  );
};

export default HeaderPokedex;
