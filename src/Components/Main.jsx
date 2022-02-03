import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import {axios} from 'axios'
import Sobre from './Conteudos/Sobre';
import Poke1 from './Conteudos/Pokemons/Poke1';
import Poke2 from './Conteudos/Pokemons/Poke2';
import Poke3 from './Conteudos/Pokemons/Poke3';

const Main = (props) => {




return <div className='flex justify-center align-center'>
      <div className='md:ml-28 md:mt-28  w-full h-96 flex iten-center'>
        <Routes>
          <Route path='/' element={<Sobre/>}/>
          <Route path='/Bulbasaur' element={<Poke1/>}/>
          <Route path='/Charmander' element={<Poke2/>}/>
          <Route path='/Squirtle' element={<Poke3/>}/>
        </Routes>
      </div>
  </div>;
};

export default Main;
