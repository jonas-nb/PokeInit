import React, {useState} from 'react';
import {Link} from 'react-router-dom'

//indica o menu de navegação
const NavBar = () => {
  let [icon, setIcon] = useState(false)

 
  return <div className='flex items-center md:flex-col justify-around md:justify-center md:fixed md:w-20 w-full h-20 md:h-full md:border-r md:border-brown-300 md:bg-white'>
      <Link className='opacity-40 focus:opacity-100' to={'/Bulbasaur'}>
      <img className={`w-16 `} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt=""/>
      </Link>
      <Link className='opacity-40 focus:opacity-100' to="/Charmander">
      <img  className="w-16 " src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="" />
      </Link>
      <Link className='opacity-40 focus:opacity-100' to='/Squirtle'>
      <img  className="w-16 " src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="" />
      </Link>
  </div>;
};

export default NavBar;
