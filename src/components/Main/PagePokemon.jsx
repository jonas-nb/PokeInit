import axios from 'axios';

import React, {useEffect, useState} from 'react'
const PagePokemon = () => {
// states e effects 
const [loading, setLoading] = useState(false);
const [loadImage, setLoadImage] = useState(false);
const [counter, setCounter] = useState(0 + 1);
const [name, setName] = useState('');
const [type, setType] = useState('');
const [weight, setWeight] = useState('');
const [height, setHeight] = useState('');
const [move, setMove] = useState('');
const [move2, setMove2] = useState('');


useEffect(() =>{
loadApi();
}, [counter])
// Functions 
 
// API
const loadApi = async() =>{
setLoading(false);
const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${counter}/`)

setName(response.data.name)

setWeight(response.data.weight)
let abilitiesAPi = response.data.abilities.map((value) =>{
    return value.ability.name
})
let typeApi = response.data.types.map((value) =>{
    return value.type.name
})
setType(typeApi)
setHeight(response.data.height)
setMove(abilitiesAPi[0])
setMove2(abilitiesAPi[1])
setLoading(true)
setLoadImage(true)
console.log(response.data)
}
// buttons previus and next
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

// function that transform numbers in endress of pokemons imagens 
let pad = (number, length) => {
    let str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }  

    return (
    <div className='w-full h-full border border-transparent '>
        {loading === false ? <div className='bg-indigo-500/50 m-auto w-48 h-14 rounded flex items-center justify-center text-2xl '>Loading...</div> : <>
            <div className='border w-full flex flex-col lg:flex-row justify-around items-center '>
                
                <div className=' w-72 md:w-full flex flex-col justify-center items-center border border-red-800'>
                    
                    {/* name of pokemons */}
                    <h1 className='bg-white/80 w-28 md:w-36 lg:w-52 h-10 md:h-14 lg:h-24 mt-2 md:m-2 lg:m-4 md:text-2xl lg:text-4xl flex justify-center items-center rounded '>{`${name.substring(0,1).toUpperCase()}${name.substring(1)}`}</h1>
            {/* Container image, type and skills */}
    <div className='border border-green-600 w-full h-full flex flex-col md:flex-row md:justify-around justify-center items-center'>
        <div className='border border-blue-500'>
            {/* image of pokemons */}
        {loadImage === true ? <img className='w-28 md:w-44 lg:w-64 m-1 ' src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(counter,3)}.png`} alt="" /> : <img src="https://i.pinimg.com/564x/d6/ea/d6/d6ead6a9c1bea347d349b46508928ce7.jpg" alt="" /> }
                    
                    
                    {/* Type */}
                    <div className='flex flex-col items-center'>
                        <h2 className='bg-white rounded-lg text-xs md:text-base lg:text-3xl lg:w-24 lg:flex lg:items-center lg:justify-center p-1 mb-1'>Type</h2>
                        <div className='bg-white/70 w-32 lg:w-60 h-10 lg:h-20 md:text-base lg:text-3xl flex justify-center items-center rounded' >{type[0] && type[1] ? `${type[0]} and ${type[1]}` : type}</div>
                        </div>  
        </div>
         
                   {/* container to info  */}
                   <div className='border w-96 lg:w-2/4  flex flex-row justify-around'>
                   
                      
                       {/* Weight and Height of pokemons */}
                       <div className='flex flex-col justify-around items-center h-32 md:h-48 text-sm lg:items-around lg:h-72 '>
                           <h2 className='bg-white border rounded p-1 md:w-24 md:text-center lg:w-32 lg:h-14 lg:text-2xl lg:flex lg:justify-center lg:items-center lg:font-semibold '>Body Info</h2>
                           <div className='bg-white/70 w-28 md:w-36 rounded h-10 md:h-14 md:text-xl flex justify-center flex-col items-center  font-semibold lg:w-52 lg:h-24 lg:text-4xl'>Height <br /><strong>{`${height} in`}</strong></div>
                           <div className='bg-white/70 w-28 md:w-36 rounded h-10 md:h-14 md:text-xl flex justify-center flex-col items-center  font-semibold lg:w-52 lg:h-24 lg:text-4xl'>Weight <br /><strong>{`${weight} lbs`}</strong></div>
                       </div>
                       
                         
   
                       {/* skills */}
                       <div className='flex flex-col justify-around items-center h-32 md:h-48 text-sm lg:items-around lg:h-72 '>
                           <h2 className='bg-white border rounded p-1 md:w-24 md:text-center lg:w-32 lg:h-14 lg:text-2xl lg:flex lg:justify-center lg:items-center lg:font-semibold ' >Skills</h2>
                           <div className='bg-white/70 w-28 md:w-36 rounded h-10 md:h-14 md:text-xl flex justify-center flex-col items-center  font-semibold lg:w-52 lg:h-24 lg:text-4xl'>{move}</div>
                           <div className='bg-white/70 w-28 md:w-36 rounded h-10 md:h-14 md:text-xl flex justify-center flex-col items-center  font-semibold lg:w-52 lg:h-24 lg:text-4xl'>{move2 ? move2 : "N/D"}</div>
                       </div>
   
                      
                      
                   </div>
    </div>
                    


                {/* buttons of navigate */}
                <div className='flex justify-between  p-1 w-9/12 md:w-72 lg:w-80  '>
                    <button className='w-24 md:w-32 lg:w-36 h-6 md:h-10 lg:h-14 mt-1 lg:mt-0 bg-white/80 hover:bg-white rounded text-md' onClick={previousPokemon}>Previous</button>
                    <button className='w-24 md:w-32 lg:w-36 h-6 md:h-10 lg:h-14 mt-1 lg:mt-0 bg-white/80 hover:bg-white rounded text-md' onClick={nextPokemon}>Next</button>
                </div>
                
                

                </div>
                    
                
            </div>
        </>
        }

    </div>
  )
}

export default PagePokemon