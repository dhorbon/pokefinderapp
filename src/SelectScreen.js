import { ContextPokemons } from "./Load.js";
import { useContext } from "react";

function SelectScreen({Select, Random}) {
    const Pokedex = useContext(ContextPokemons)


    return(
        <div className="float-left bg-red-600 h-11/12 w-1/4 flex flex-col overflow-y-scroll">
            <button onClick={Random}>Random</button>
            {Pokedex && Pokedex.map(pokemon => {
                return(
                    <button key={pokemon.name} className="self-center" onClick={Select}>
                        {pokemon.name}
                    </button>
                )
            })}
        </div>
    )
}

export default SelectScreen