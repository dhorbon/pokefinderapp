import { useState, useEffect, Suspense, useContext } from "react";
import SearchBar from "./SearchBar";
import InfoScreen from "./InfoScreen";
import LoadingScreen from "./LoadingScreen.js";
import { ContextPokemons } from "./Load.js";
import SelectScreen from "./SelectScreen.js";

function Main() {
  const Pokedex = useContext(ContextPokemons)
  const [currPokemon, setCurPokemon] = useState(Math.ceil(Math.random()*(Pokedex.length-1)))

  function Search(query) {
    if(query != ""){
      let tempId = -1;
      for(let i = 0; i < Pokedex.length; i++){
        if(Pokedex[i].name === query){
          tempId = Pokedex[i].id
          break
        }
      }
      if(tempId !== -1){
        setCurPokemon(tempId)
      }else{
        throw new Error('Pokemon not in database, check if name is spelled right.')
      }
    }
  }

  const Select = (query) => {
    let tempId;
    for(let i = 0; i < Pokedex.length; i++){
      if(Pokedex[i].name === query){
        tempId = Pokedex[i].id
        break
      }
    }
    setCurPokemon(tempId);
  }

  const Random = () => {
    setCurPokemon(Math.ceil(Math.random()*(Pokedex.length-1)))
  }

  return(
    <div className="h-screen">
      <SearchBar Search={Search} />
      <InfoScreen pokeInfo={currPokemon} />
      <SelectScreen Select={Select} Random={Random} />
    </div>
  );
}

export default Main;
