import { useState } from "react";
import Main from "./Main";
import './index.css'

function LoadingScreen() {
  return(
    <div className="bg-red-600 h-screen w-screen pl-1/2">
      <div className="pokeballWrapper">
        <div className="pokeball" />
      </div>
    </div>
  )
}

function Load() {
  const API = new (require("pokeapi-js-wrapper").Pokedex)()
  const [Pokedex, setPokedex] = useState(null)
  if(Pokedex === null){
    API.getPokemonsList().then((response)=>{setPokedex(response)})
    return(
      <LoadingScreen />
    );
  }
  
  return (
    <Main Pokedex={Pokedex} />
  );
}

export default Load;
