import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Erro404 from '../Erro404'
import Home from './Home'
import PagePokemon from './PagePokemon'

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pokemon/' element={<PagePokemon/>} />
            <Route path='*' element={<Erro404/>}/>
        </Routes>
    </div>
  )
}

export default Main