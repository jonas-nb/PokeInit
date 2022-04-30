import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const StatsPokemon = () => {
  const [statsPokemon, setStatsPokemon] = useState([]);

  useEffect(() => {
    PokemonAPI();
  }, []);
  //catch information of url
  const params = useParams();
  const navigate = useNavigate();
  const next = () => {
    navigate(-1);
  };
  //catch information
  const PokemonAPI = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.name}/`
    );
    setStatsPokemon(await response.data.stats.map((value) => value));
  };

  return (
    <div className="w-5/6 mt-5 mb-5">
      <h1 className="text-2xl">Stats Pokemon</h1>
      <ul className="flex flex-col justify-center bg-black/50 border border-white/10 p-3">
        {statsPokemon.map((value, index) => (
          <li className="pt-1" key={index}>
            {value.stat.name}{" "}
            <div
              className="h-4 border text-sm flex items-center text-white rounded-r-lg"
              style={{
                width: `${value.base_stat / 1.8}% `,
                backgroundColor: "black",
              }}
            >
              {value.base_stat}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsPokemon;
