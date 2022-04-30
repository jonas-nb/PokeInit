import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";
import HeaderPokedex from "./HeaderPokedex";

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
  //function show legendary pokemons

  return (
    <div>
      <HeaderPokedex />
      {stateLoading === true ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-wrap items-center justify-center pt-32 gap-2">
          {name.map(({ name }, index) => (
            <Link className="" key={index} to={`/pokemon/${index + 1}/${name}`}>
              <div
                className="border bg-slate-400/30 hover:bg-blue-400/90 p-3 w-28 h-22 sm:w-32 sm:h-32
              8 flex flex-col items-center font-semibold rounded"
              >
                {/* name of Pokemon */}
                <h1 className="font-semibold text-sm">
                  {`${name.substring(0, 1).toUpperCase()}${name.substring(1)}`}
                </h1>
                {/* image of pokemon */}
                <img
                  className="w-11 sm:w-14 m-auto"
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(
                    index + 1,
                    3
                  )}.png`}
                  alt="grid pokemon"
                />
                <h2 className="font-mono">#{index + 1}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="text-center mt-5">
        <Copyright />
      </div>
    </div>
  );
};

export default GridPokemon;
