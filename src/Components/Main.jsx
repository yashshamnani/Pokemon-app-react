 

import React, { useEffect } from 'react'
import axios from 'axios';
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import { useState } from 'react';
const Main = () => {
  const[pokeData,setPokeData] = useState([])
  const [loading,setLoading] = useState(true)
  const[url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const[nextUrl,setNextUrl] = useState()
  const[PrevUrl,setPrevUrl] = useState()
  const[pokeDex,setPokeDex] = useState()

  const pokeFun = async()=>{
    setLoading(true)
    const res = await axios.get(url)

    // console.log(res )
    // console.log(res.data.results)
 setNextUrl(res.data.next)
 
 setPrevUrl(res.data.previous)
getPokemon(res.data.results)
setLoading(false)
console.log(pokeData)

  }

  const getPokemon = async(res)=>{
    res.map(async(item)=>{
        // console.log(item.url)
        const result = await axios.get(item.url)
        setPokeData((state)=>{
            state = [...state,result.data]
            state.sort((a,b)=>a.id>b.id?1:-1)
            return state;
        })
    })
  }

  useEffect(()=>{
   pokeFun()
  },[url])
  
  
  return (
   <>
     <div className='container flex justify-between items-center'>
         <div className='left-content basis-1/2  flex flex-wrap m-10 gap-8'>
             <Card pokemon = {pokeData} loading={loading} infoPokemon = {poke=>setPokeDex(poke)} />
              
              
            <div className="btn-group flex">
                {PrevUrl && <button className='w-[150px] text-[17px] font-[bold] text-[white] bg-[#b74555] m-4 px-0 py-[0.3rem]  rounded-xl'  onClick={()=>{setUrl(PrevUrl)
                setPokeData([])}}>Prev</button>}
                {nextUrl && <button className='w-[150px] text-[17px] font-[bold] text-[white] bg-[#b74555] m-4 px-0 py-[0.3rem]  rounded-xl' onClick={()=>{setUrl(nextUrl)
                setPokeData([])}}>Next</button>}
            </div>

         </div>
         <div className='right-content basis-1/2   text-center fixed top-24 right-44   '>
            <Pokeinfo data={pokeDex}/>
         </div>
     </div>
   </>
  )
}

export default Main