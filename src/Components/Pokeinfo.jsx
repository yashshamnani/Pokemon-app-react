 

import React from "react";

const Pokeinfo = ({data}) => {
    console.log(data)
    return (
        <> 
        {
            
            (!data)?"":(
                 <>
                   <div className="">
              <h1 className="uppercase font-semibold tracking-wide text-2xl font-semibold">{data.name}</h1>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="img"  className="h-[160px] m-12"/>
              <div className="abilities w-[80%]   flex m-auto justify-around items-center mt-4">
                {
                    data.abilities.map((poke)=>{
                    return(
                        <>
                            <div className="group bg-[#b74555]
                 text-[#fff] p-2 text-base rounded-xl ml-4">{poke.ability.name}</div>
                        </>
                    )
                })
            }
                 
              </div>
               
              <div className="base-stat mt-10 font-semibold  text-lg">
                {
                    data.stats.map((poke)=>{
                    return (
                        <>
                           <h3>{poke.stat.name}:{poke.base_stat}</h3>
                        </>
                    )
})
                }
                 
              </div>
          </div>
                 </>
            )
        }        
 

           
        </>
    )
}

export default Pokeinfo