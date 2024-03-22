import { useState } from "react";

function SearchBar({Search}){
  const [input, setInput] = useState("")

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    if(event.code === "Enter"){
      setInput("")
      try{
        Search(input)
      }catch(error){
        console.log(error)
      }
    }
  }

  return(
    <div className="w-screen h-1/12 bg-red-600">
      <input placeholder="Search for a pokemon..." type="text" className="rounded w-1/2 h-1/2 relative left-1/4 top-1/4" onChange={handleInput} onKeyDown={handleSubmit} value={input}></input>
    </div>
  )
}

export default SearchBar