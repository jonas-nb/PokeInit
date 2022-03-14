import { Button } from '@mui/material';
import { list } from 'postcss';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { api } from '../api';

const Home = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() =>{
        loadPoke();
    }, [])
    
    const loadPoke = async() =>{
        const json = await api.pokemonsApi();
        setPokemon(await json.results)
        console.log(pokemon)
    }
  
    

    return (
    <div className='mt-40'>
       
        <ul>
            {
                pokemon.map((value,index) => {
                    return <li key={index}>
                            <Link to='/pokemon:slug' className='m-auto mt-9 flex flex-col justify-around items-center border w-60 h-60'>
                            <h1 className='text-2xl'>{`${value.name.substring(0,1).toUpperCase()}${value.name.substring(1)}`}</h1>
                            <img className=' w-32 ' src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index +1}.svg`} alt="" />
                            </Link>
                            
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Home