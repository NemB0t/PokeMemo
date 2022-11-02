import React , { useState, useEffect } from "react";
import { capitalizeFirstLetter, shuffleArray } from "../Utils/support";
import Cards from "./Cards";
import Score from "./Score";


export default function Content(){
    const pokemonCount = 12;
    
    const [pokemons, setPokemons] = useState([])
    const [selectedPokemons, setSelectedPokemons] = useState([])
    const [highScore, setHighScore] = useState(0)
    const [currentScore, setCurrentScore] = useState(0)

    useEffect(()=>{
        const loadPokemons = async()=>{
            setPokemons(shuffleArray(await fetchPokemons(pokemonCount)))
        }
        loadPokemons();
        setSelectedPokemons([]);
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
    // console.log(pokemons);

    function isInArray(value, array) {
        return array.indexOf(value) > -1;
      }

    const handleOnClick=(pokeId)=>{
        // console.log(pokeId);
        setPokemons(shuffleArray(pokemons));
        if(isInArray(pokeId,selectedPokemons)){
            if(highScore<currentScore){
                setHighScore(currentScore);
            }
            setCurrentScore(0);
            setSelectedPokemons([]);
        }
        else{
            setCurrentScore(currentScore+1);
            if(highScore<currentScore){
                setHighScore(currentScore);
            }
            selectedPokemons.push(pokeId);
        }
        console.log(highScore)
        console.log(currentScore)
    };
    return(
        <div className="flex flex-col flex-1 justify-center items-center self-center py-10 space-y-4">
            <div>
                <Score highScore = {highScore} currentScore = {currentScore}/>
            </div>
            <div className="grid grid-cols-4 gap-4 justify-center items-center ">
                {pokemons.map((pokemon)=>{
                    return <Cards id={pokemon.id} name={pokemon.name} image={pokemon.image} handleClick = {handleOnClick}/>
                })}
            </div>
            {/* <Cards id={pokemons[1].id} name={pokemons[1].name} image={pokemons[1].image}/> */}
        </div>
    )
}