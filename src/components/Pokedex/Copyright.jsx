import React, { useEffect, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const Copyright = () => {
  const [age, setAge] = useState("");
  useEffect(() => {
    anoSync();
  }, []);
  //function that return age
  const anoSync = () => {
    const data = new Date();
    setAge(data.getFullYear());
  };

  return (
    <div className=" text-black font-bold">
      <h1>Pokeinit &copy; 2021-{age}</h1>
    </div>
  );
};

export default Copyright;
