import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Copyright from "./Copyright";
import HeaderPokedex from "./HeaderPokedex";
import PokemonPage from "./PokemonPage";
const GridPokemon = () => {
  // states
  const [name, setName] = useState([]);
  const [stateLoading, setStateLoading] = useState(false);

  // effects
  useEffect(() => {
    loadApi();
  }, []);

  // ApiFetch
  const loadApi = async () => {
    setStateLoading(true);
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0/"
    );
    setName(response.data.results.map((value) => value));
    setStateLoading(false);
  };

  // function that transform numbers in endress of pokemons imagens
  let pad = (number, length) => {
    let str = "" + number;
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  };

  return (
    <div>
      <HeaderPokedex />
      {stateLoading === true ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-wrap items-center justify-center pt-32 gap-2">
          {name.map(({ name }, index) => (
            <Link className="" key={index} to={`/pokemon/${index + 1}/${name}`}>
              <div className="border bg-slate-400/30 hover:bg-blue-400/90 w-24 h-24 flex flex-col items-center font-semibold rounded">
                {/* name of Pokemon */}
                <h1 className="text-center font-semibold">
                  {`${name.substring(0, 1).toUpperCase()}${name.substring(1)}`}
                </h1>
                {/* image of pokemon */}
                <img
                  className="w-10 m-auto"
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(
                    index + 1,
                    3
                  )}.png`}
                  alt=""
                />
                <h2 className="font-mono">#{index + 1}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
      <Copyright />
    </div>
  );
};

export default GridPokemon;
