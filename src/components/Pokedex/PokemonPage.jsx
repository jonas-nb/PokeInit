import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const PokemonPage = () => {
  const [infoAPI, setInfoAPI] = useState([]);
  useEffect(() => {
    loadAPI();
  }, []);
  //use params for edit endpoint
  let params = useParams();
  console.log(params.name);
  //function APi
  const loadAPI = async () => {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`
    );
    setInfoAPI(response.data);
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
      <h1 className="border border-red-500 text-center">
        {infoAPI.name.toUpperCase()}
      </h1>
      <div>
        {/* image of pokemon */}
        <div>
          <img
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(
              params.slug,
              3
            )}.png`}
            alt=""
          />
        </div>
        {/* info of pokemon */}
        <div></div>
      </div>
    </div>
  );
};

export default PokemonPage;
