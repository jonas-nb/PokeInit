import React from 'react'

export const NavBar = () => {
  return (
    <div>
        <nav className='border border-red-700'>
            {/* logo inicial */}
            <div className='border border-black flex flex-col items-center justify-center h-20 w-3/12 '>
                <img className='w-11 h-11 object-cover' src="https://cdn.icon-icons.com/icons2/2248/PNG/512/pokeball_icon_136305.png" alt="" />
                <h1 className=''>PokeInit</h1>
            </div>
        </nav>
    </div>
  )
}
