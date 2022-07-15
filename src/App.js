import './App.css'
import CardList from './components/cardList'
import Search from './components/search'
import {useState} from 'react'
import AddMovie from './components/addMovie'
import data from './data'
function App() {
  const[search,setSearch] = useState("")
  const[showAddMovie,setShowAddMovie] = useState(false)
  const[movie,setMovie] = useState(data)
  const addNewFilm = (film) =>
  {
    setMovie([...movie,film])
  }
  const addMovieHandler = () =>
  {
    setShowAddMovie(!showAddMovie)
  }
  return (
    <div className="App">
      <div className="appCore">
        <Search 
        search={search}
        setSearch={setSearch}
        />
        <CardList
        search={search}
        setSearch={setSearch}
        />
      </div>
      {
      showAddMovie ? <AddMovie
      showAddMovie = {showAddMovie}
      setShowAddMovie = {setShowAddMovie}
      addNewFilm = {addNewFilm}
      /> :
      <i className="fa-solid fa-plus addBtn"
      onClick={addMovieHandler}
      ></i> 
      }
    </div>
  );
}

export default App;
