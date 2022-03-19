import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <nav className=' bg-indigo-900 border  border-transparent rounded-b-lg w-full  '>
            {/* logo inicial */}
            <Link to='/' className='rounded flex flex-col items-center justify-center h-16 lg:h-28 w-16 lg:w-32 m-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
                <img className='w-9 lg:w-14 h-9 lg:h-14  object-cover ' src="https://cdn.icon-icons.com/icons2/2248/PNG/512/pokeball_icon_136305.png" alt="" />
                <h1 className='font-semibold text-xs lg:text-lg '>PokeInit</h1>
            </Link>
        </nav>
    </div>
  )
}
