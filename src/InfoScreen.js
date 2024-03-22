import { useState, useEffect } from "react";
import { API } from "./PokemonApi";
import LoadingScreen from "./LoadingScreen";

function InfoScreen({pokeInfo}) {
    const [pokemon, setPokemon] = useState()

    useEffect(async () => {
            const pokeData = await API.getPokemonByName(pokeInfo).then((data) => {return data})
            setPokemon(pokeData)
    }, [pokeInfo])

    return pokemon ? (
        <div className="float-left bg-red-800 h-11/12 w-3/4">
            id: {pokemon.id}<br/>
            name: {pokemon.name}<br/>
        </div>
    ) : (
        <div className="float-left h-11/12 w-3/4">
            <LoadingScreen />
        </div>
    )
}

export default InfoScreen
