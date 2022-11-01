import React , { useState, useEffect } from "react";
import { capitalizeFirstLetter, shuffleArray } from "../Utils/support";
import Cards from "./Cards";


export default function Content(){
    const pokemonCount = 12;
    const [pokemons, setPokemons] = useState([])
    useEffect(()=>{
        const loadPokemons = async()=>{
            setPokemons(shuffleArray(await fetchPokemons(pokemonCount)))
        }
        loadPokemons();
        // console.log(pokemons)
    },[]);
    const fetchPokemons = async (amount) => {
        const pokemons = []
    
        for (let i = 1; i <= amount; i++) {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
        const response = await fetch(pokemonUrl)
        const pokemon = await response.json()
        const id = pokemon.id
        const name = capitalizeFirstLetter(pokemon.name)
        const image = pokemon.sprites.front_default
        pokemons.push({ id, name, image })
        }
    
        return pokemons
    }
    console.log(pokemons);
    return(
        <div className="flex flex-1 justify-center items-center self-center py-10">
            <div className="grid grid-cols-4 gap-2 justify-center items-center ">
                {pokemons.map((pokemon)=>{
                    return <Cards id={pokemon.id} name={pokemon.name} image={pokemon.image}/>
                })}
            </div>
            {/* <Cards id={pokemons[1].id} name={pokemons[1].name} image={pokemons[1].image}/> */}
        </div>
    )
}