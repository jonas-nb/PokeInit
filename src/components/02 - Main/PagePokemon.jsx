import axios from 'axios';
import React, {useEffect, useState} from 'react'
const PagePokemon = () => {
// states e effects 
const [loading, setLoading] = useState(false);
const [info, setInfo] = useState();
const [counter, setCounter] = useState(0 + 1);
const [name, setName] = useState('')


useEffect(() =>{
loadApi();
}, [counter])
// Functions 
const loadApi = async() =>{
setLoading(true);
const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${counter}/`)
setInfo(response.data)
setName(response.data.name)
console.log(response.data)
}
const previousPokemon = () =>{
    if(counter === 1){
        alert("There is no pokemon with that number, please go to the next one.")
        setCounter(1)
    } else{
        setCounter(counter -1)
    }
}
const nextPokemon = () =>{
    if(counter > 149){
        alert("There is no pokemon with that number, please go to the previous one.")
        setCounter(150)
    } else{
        setCounter(counter +1)
    }
}

    return (
    <div className='mt-24 w-full h-full'>
        {loading === false ? <div className='bg-indigo-500/50 m-auto mt-64 w-48 h-14 rounded flex items-center justify-center text-2xl '>Loading...</div> : <>
            <div className='border border-red-700 h-screen flex flex-col justify-around	items-center '>
                <h1 className='bg-white/30 w-28 h-10 flex justify-center items-center rounded'>{`${name.substring(0,1).toUpperCase()}${name.substring(1)}`}</h1>
                <img src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/1.png" alt="" />
                <div className='flex justify-between w-9/12 '>
                    <button className='w-24 h-10 bg-white/80 hover:bg-white rounded' onClick={previousPokemon}>Previous</button>
                    <button className='w-24 h-10 bg-white/80 hover:bg-white rounded' onClick={nextPokemon}>Next</button>
                </div>
                
                
            </div>
        </>
        }

    </div>
  )
}

export default PagePokemon