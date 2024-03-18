
function InfoScreen(pokeInfo) {
    pokeInfo = pokeInfo.pokeInfo
    const API = new (require("pokeapi-js-wrapper").Pokedex)()
    const pokeData = (async () => {return await API.getPokemonByName(pokeInfo.name)})()
    return (
        <div className="float-left bg-red-800 h-11/12 w-3/4">
            {console.log(pokeData)}
            {pokeData.value.name}
        </div>
    )
}

export default InfoScreen
