import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api } from "./api";
const PokemonPage = () => {
  const [isDefault, setIsDefault] = useState(true);
  const [API, setAPI] = useState([]);
  const [name, setName] = useState("");
  const [end, setEnd] = useState("");
  const [imgPokemon, setImgPokemon] = useState("");
  const [typePokemon, setTypePokemon] = useState([]);
  //effects
  useEffect(() => {
    transformString();
    pokemonAPI();
  }, []);

  //use params for edit endpoint
  let params = useParams();

  // transform first character in upperCase
  const transformString = () => {
    setName(
      `${params.name.substring(0, 1).toUpperCase()}${params.name.substring(1)}`
    );
    let pad = (number, length) => {
      let str = "" + number;
      while (str.length < length) {
        str = "0" + str;
      }
      return str;
    };
    setEnd(`${pad(params.slug, 3)}`);
  };

  // function about infomations of pokemons
  const pokemonAPI = async () => {
    //set true or false for this component
    setIsDefault(true);

    // call of api (Main)
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.name}/`
    );

    // set image of pokemon
    setImgPokemon(await response.data.sprites.other.dream_world.front_default);

    //set types of pokemon
    const typePokemonFunction = async () => {
      let json = await response.data.types.map(({ type }) => type);
      console.log(json);
      setTypePokemon((json = await json.map(({ name }) => name)));
    };
    typePokemonFunction();

    console.log(typeof typePokemon);
    //end of api
    setIsDefault(false);
  };

  return (
    <div>
      {/* image of pokemon */}
      <div className="bg-yellow-400 rounded-b-2xl flex items-center justify-center">
        <img
          src={isDefault === true ? <div>Carregando...</div> : imgPokemon}
          alt=""
          className="w-64"
        />
      </div>
      <h1 className="border border-red-500 text-2xl">{name}</h1>
      {/* info of pokemon */}
      <div>
        {/* number of pokemon */}
        <div>#{end}</div>

        {/* type of pokemon*/}
        <div>
          <h1>Type</h1>
          <div className="border border-black flex">
            {typePokemon.map((value, index) => (
              <ul key={index}>
                <li className="">{value}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
