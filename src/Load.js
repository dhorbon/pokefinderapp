import { createContext, useEffect, useState } from "react";
import Main from "./Main";
import './index.css';
import LoadingScreen from "./LoadingScreen.js";
import * as Pokemon from 'pokeapi-js-wrapper'

const API = new Pokemon.Pokedex()

export const ContextPokemons = createContext()

function Load() {
  const [Pokedex, setPokedex] = useState(null)
  
  useEffect(() => {
    (async () => {
      const data = await API.getPokemonsList()
      setPokedex(data.results)
    })()
    
  }, [])
  
  return Pokedex ? (
    <ContextPokemons.Provider value={Pokedex}>
      <Main />
    </ContextPokemons.Provider>
  ) : (
    <div className="w-screen h-screen">
      <LoadingScreen />
    </div>
  );
}

export default Load;
