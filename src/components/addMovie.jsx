import React , {useState} from 'react'
import {Form , Button} from 'react-bootstrap'
const AddMovie = ({showAddMovie,setShowAddMovie,addNewFilm}) => {
  const [newMovie,setNewMovie] = useState({name:'',imgUrl:''});
  addNewFilm(newMovie)
    const btnHandler = () =>
    {
        setShowAddMovie(!showAddMovie)
    }
    const submitHandler = (e) =>
    {
      e.preventDefault()
      console.log(newMovie)
      setNewMovie({name:'',imgUrl:''})
    }
    const inputHandler = (e) =>
    {
      setNewMovie({...newMovie,[e.target.id]:e.target.value})
    }
  return (
    <div style={{display:'flex' , width:'500px',border:'sol'}}>
      <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={inputHandler}
        value={newMovie.name}
        id='name'
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="img url" onChange={inputHandler}
        value={newMovie.imgUrl}
        id='imgUrl'
        />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={submitHandler}>
        Submit
      </Button>
    </Form>
    </div>
    <div>
        <button onClick={btnHandler} style={{border:'none',backgroundColor:'white'}}>Close</button>
    </div>
    </div>
  )
}

export default AddMovie