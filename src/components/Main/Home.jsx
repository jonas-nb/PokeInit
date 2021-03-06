import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../LOGO/logo.png";
import "./bg-image.css";
import image from "../LOGO/bg-small.jpg";
import Copyright from "../Pokedex/Copyright";
const Home = () => {
  return (
    <main className=" img-bg h-screen flex flex-col items-center justify-between">
      <div className=" flex justify-start">
        <img
          className="w-8/12 sm:w-2/12 mt-10 sm:mt-3 flex m-auto sm:ml-5 sm:self-start "
          src={logo}
          alt="pokemon official logo"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-start sm:justify-around">
        {/* container of img and apresentation text */}
        <div className="flex items-center justify-around sm:w-4/12 font-bold sm:order-2 ">
          <h1 className="text-4xl sm:text-2xl  ">Pokeinit</h1>
          <img
            className="w-6/12 sm:w-6/12"
            src={image}
            alt="picture of pikachu"
          />
        </div>
        {/* container text and buton */}
        <div className="flex flex-col items-center sm:order-1 sm:w-6/12">
          <h2 className="pt-7 text-2xl font-semibold">
            Hello, Welcome to pokeinit!
          </h2>
          <p className="text-center p-2 text-xl">
            In this version the app brings a pokedex with information about the
            150 pokemons of the first generation.
          </p>
          <Link
            to="/pokedex"
            className="bg-black text-white w-2/6 h-10 mt-0 rounded font-medium flex items-center justify-center"
          >
            INIT
          </Link>
        </div>
      </div>
      <div className="flex justify-around text-sm w-full ">
        Made with ❤ by Jonas Batista {<Copyright />}
      </div>
    </main>
  );
};

export default Home;
