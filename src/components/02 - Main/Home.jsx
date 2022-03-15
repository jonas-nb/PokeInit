
import { Button } from '@mui/material';
import { list } from 'postcss';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';




    
    const Home = () => {
      return (
        <main>
            <div className=' m-10 mt-32 bg-white/20 rounded-lg flex flex-col items-center justify-around h-80'>
                <article>
                    <p className='flex items-center text-center h-56 p-4 text-lg font-medium '>
                        Hello, Welcome to pokeinit.
                        In this version the app brings a pokedex with information about the 150 pokemons of the first generation.
                    </p>
                </article>
                <Link to='/pokemon/' className='bg-indigo-300 w-24 h-8 rounded font-medium flex items-center justify-center'>INIT</Link>
            </div>
        </main>
      )
    }
    
    export default Home
    