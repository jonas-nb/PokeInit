import React, { useEffect, useState } from "react";

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
      <div>Pokeinit &copy; 2021-{age}</div>
    </div>
  );
};

export default Copyright;
