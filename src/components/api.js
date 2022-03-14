// Api com info dos pokemons
import React from 'react'
import axios from 'axios'

export const api = {
    pokemonsApi : async() =>{
        
            let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
            return response.data
        
    }
}