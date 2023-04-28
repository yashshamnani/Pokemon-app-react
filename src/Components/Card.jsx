 

import React from 'react'
// import charmander from '../images/charmander.png'
const Card = ({ pokemon,loading,infoPokemon}) => {

  return (
    <>
    {
        loading ? <h1>loading....</h1> : 
        pokemon.map((item)=>{
            return(
            <div className='card flex w-[300px] bg-[#9EDEF9] rounded-2xl items-center px-5 justify-between box-border shadow-xl ' onClick={()=>infoPokemon(item)} key={item.id}>
            <h2>{item.id}</h2>
            <img src= {item.sprites.front_default} alt="img"   />
            <h2>{item.name}</h2>
    
          </div>
            )
})
    }
       
    </>
  )
}

export default Card