import { useState } from 'react'
import Main from './Components/Main'
import NavBar from './Components/NavBarLeft'
import NavBarTop from './Components/NavBarTop'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    
    <div className='flex flex-col'>
      <div className='flex order-last md:order-first md:grid-cols-1 '>
        <NavBar/>
      </div>
      <div className='flex flex-col md:grid-cols-2'>
        <NavBarTop/>
        <Main/>
      </div>
    </div>
    
  )
}

export default App
