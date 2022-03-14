import { list } from 'postcss';
import React, {useEffect, useState} from 'react'
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
    <div>
        
        <ul>
            {
                pokemon.map((value,index) => {
                    return <li key={index}>
                            <div className='flex flex-col border w-60 h-60'>
                            <h1 className='text-2xl'>{value.name}</h1>
                            <img className='border w-40' src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index +1}.svg`} alt="" />
                            </div>
                            
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Home