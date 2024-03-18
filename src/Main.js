import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import InfoScreen from "./InfoScreen";

function Main(Pokedex) {
  Pokedex = Pokedex.Pokedex.results
  const [currPokemon, setCurPokemon] = useState(Math.ceil(Math.random()*(Pokedex.length-1)))
  const [input, setInput] = useState("")

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

  const Select = (id) => {
    setCurPokemon(id);
  }

  const Random = () => {
    setCurPokemon(Math.random()*(Pokedex.count-1))
  }

  return(
    <div className="h-screen">
      <SearchBar Search={Search} input={input} setInput={setInput} />
      <InfoScreen pokeInfo={Pokedex[currPokemon]} />
      {/*<SelectScreen Select={Select} Random={Random} currPokemon={currPokemon} Pokedex={Pokedex} />*/}
    </div>
  );
}

export default Main;
