import React from 'react'

export const NavBar = () => {
  return (
    <div>
        <nav className='border border-red-700'>
            {/* logo inicial */}
            <div className='border border-black flex h-14 w-3/12'>
                <img className='w-11 h-11 object-cover' src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png" alt="" />
                <h1>PokeInit</h1>
            </div>
        </nav>
    </div>
  )
}
