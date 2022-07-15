import React from 'react'
import './search.css'

const Search = ({search,setSearch}) => {
  
  const inputHandler = (e) =>
  {
    setSearch(e.target.value)
    console.log(search)
  }
  return (
    <div className="search">
        <input type="text" placeholder='Search for movie ..'
        onChange={inputHandler}
        />
    </div>
  )
}

export default Search