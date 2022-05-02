import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import StatsPokemon from "./StatsPokemon";
import Copyright from "./Copyright";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "./animationIMG.css";
const PokemonPage = () => {
  const [isDefault, setIsDefault] = useState(true);
  const [name, setName] = useState("");
  const [end, setEnd] = useState("");
  const [imgPokemon, setImgPokemon] = useState("");
  const [typePokemon, setTypePokemon] = useState([]);
  const [bgColorState, setBgColorState] = useState([]);
  const [isLegendary, setIsLegendary] = useState(false);
  const [aboutPokemon, setAboutPokemon] = useState("");

  //effects
  useEffect(() => {
    bgColorFunction();
    pokemonAPI();
    transformString();
  }, []);

  //use params for edit endpoint
  let params = useParams();
  const navigate = useNavigate();
  const backPokedex = () => {
    navigate(-1);
  };

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
      setTypePokemon((json = await json.map(({ name }) => name)));
    };
    typePokemonFunction();

    //end of api
    setIsDefault(false);
  };

  //setColor of pokemon (normal and legendary) and function 'main' of getApi 'pokemon-species'
  const bgColorFunction = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${params.name}/`
    );
    setBgColorState(await response.data.color.name);
    setIsLegendary(await response.data.is_legendary);
    setAboutPokemon(await response.data.flavor_text_entries[1].flavor_text);
  };

  //object of setColor css for container bg pokemon
  let color = {
    backgroundColor: bgColorState,
    backgroundImage: `radial-gradient( #ffffffc3 , ${bgColorState})`,
    transition: "1s all linear",
  };
  let colorBG = {
    backgroundColor: bgColorState,
    backgroundImage: `radial-gradient( #ffffff64 , ${bgColorState})`,
  };
  let LegendaryColor = {
    backgroundColor: "black",
  };
  let textColorWhite = {
    color: "white",
  };
  let textColorBlack = {
    color: "black",
  };

  return (
    <div style={colorBG} className="h-6/6">
      {isDefault === true ? (
        <div
          style={colorBG}
          className="w-full h-screen flex justify-center items-center"
        >
          <Player
            className="w-5/6"
            speed={0.3}
            autoplay
            loop
            src="https://assets8.lottiefiles.com/private_files/lf30_hbjx3he6.json"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      ) : (
        <div>
          <div
            style={isLegendary === false ? color : LegendaryColor}
            className=" rounded-b-2xl flex items-center justify-center w-full h-64 lg:w-3/6 lg:m-auto shadow-lg  shadow-black "
          >
            <h1 className="text-white">
              {isLegendary === true ? "LEGENDARY" : " "}
            </h1>
            <img
              src={isDefault === true ? <div>Carregando...</div> : imgPokemon}
              alt={`pics of pokemon ${params.name}`}
              className={name === "Kakuna" ? "w-28" : "w-40 animation"}
            />
          </div>
          {/* info of pokemon title */}
          <section
            style={
              bgColorState === "blue" ||
              bgColorState === "purple" ||
              bgColorState === "black"
                ? textColorWhite
                : textColorBlack
            }
            className="mt-5 flex flex-col items-center"
          >
            {/* title pokemon */}

            <h1 className="text-4xl flex items-center font-semibold">{name}</h1>

            {/* Container info */}
            <div className="flex flex-col">
              {/* number of pokemon */}
              <div className="font-bold font-mono m-auto">#{end}</div>

              {/* type of pokemon*/}
              <div className="flex flex-col items-center pt-2">
                <h1 className="text-xl pb-3">Type</h1>
                <div className=" flex justify-around w-4/6 md:w-2/6 lg:w-2/6 ">
                  {typePokemon.map((value, index) => (
                    <ul key={index}>
                      <li className="w-24 flex justify-around rounded border border-black/50 bg-black/10 shadow-sm shadow-black/50 font-mono">
                        {value}
                      </li>
                    </ul>
                  ))}
                </div>
                {/* pokemon information */}
                <div className="mb-5">
                  <h1 className="pt-5 text-xl pl-6 lg:pb-3 ">
                    Pokemon information:
                  </h1>
                  <p className="pl-6">{aboutPokemon}</p>
                  <br />
                  <hr className="w-5/6 m-auto " />
                </div>

                <StatsPokemon />
                <button
                  onClick={backPokedex}
                  className="focus:outline-none text-white bg-purple-400 hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Back Pokedex!
                </button>
                <Copyright />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default PokemonPage;
