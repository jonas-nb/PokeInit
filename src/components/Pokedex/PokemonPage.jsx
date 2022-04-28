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
  const [bgColorState, setBgColorState] = useState([]);
  const [isLegendary, setIsLegendary] = useState(false);
  //effects
  useEffect(() => {
    bgColorFunction();
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
    console.log(response.data);
    // set image of pokemon
    setImgPokemon(await response.data.sprites.other.dream_world.front_default);

    //set types of pokemon
    const typePokemonFunction = async () => {
      let json = await response.data.types.map(({ type }) => type);
      setTypePokemon((json = await json.map(({ name }) => name)));
    };
    typePokemonFunction();

    //end of api
    setIsDefault(false);
  };

  //setColor of pokemon (normal and legendary)
  const bgColorFunction = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${params.name}/`
    );
    setBgColorState(await response.data.color.name);
    setIsLegendary(await response.data.is_legendary);
  };

  //object of setColor css for container bg pokemon
  let color = {
    backgroundColor: bgColorState,
    backgroundImage: `radial-gradient( #ffffff64 , ${bgColorState})`,
    transition: "1s all linear",
  };
  let colorBG = {
    backgroundColor: bgColorState,
  };
  let LegendaryColor = {
    backgroundColor: "black",
  };
  let textColor = {
    color: "white",
  };
  console.log(bgColorState);
  return (
    <div style={colorBG} className="h-screen">
      {/* Container image of pokemon */}
      <div
        style={isLegendary === false ? color : LegendaryColor}
        className=" rounded-b-2xl flex items-center justify-center w-full h-64 shadow-lg shadow-black "
      >
        <h1 className="text-white">
          {isLegendary === true ? "LEGENDARY" : " "}
        </h1>
        <img
          src={isDefault === true ? <div>Carregando...</div> : imgPokemon}
          alt=""
          className="w-40"
        />
      </div>
      {/* info of pokemon title */}
      <section
        style={bgColorState === "blue" ? textColor : ""}
        className="mt-5"
      >
        <h1 className="border border-red-500 text-2xl">{name}</h1>
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
      </section>
    </div>
  );
};

export default PokemonPage;
