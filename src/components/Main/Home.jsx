import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../LOGO/logo.png";
import "./bg-image.css";
import image from "../LOGO/bg-small.jpg";
const Home = () => {
  return (
    <main className="img-bg h-screen flex flex-col items-center justify-between">
      <img className="w-8/12 mt-10" src={logo} alt="" />
      <div className="flex flex-col items-center justify-start">
        {/* container of img and apresentation text */}
        <div className="flex items-center justify-around font-bold">
          <h1 className="text-4xl">Pokeinit</h1>
          <img className="w-6/12" src={image} alt="" />
        </div>
        <h2 className="mt-7 text-2xl font-semibold">
          Hello, Welcome to pokeinit!
        </h2>
        <p className="text-center p-2 text-xl">
          In this version the app brings a pokedex with information about the
          150 pokemons of the first generation.
        </p>
        <Link
          to="/pokedex"
          className="bg-black text-white w-2/6 h-10 mt-10 rounded font-medium flex items-center justify-center"
        >
          INIT
        </Link>
      </div>
      <p>Made with ❤ by Jonas Batista</p>
    </main>
  );
};

export default Home;
