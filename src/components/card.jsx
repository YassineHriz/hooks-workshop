import React from 'react'
import {Card,Button} from 'react-bootstrap'
const card = ({title,poster,decription,id,rate}) => {
  return (
    <Card style={{width:'18rem',margin:'2vh'}}>
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {decription}
        </Card.Text>
        <Button variant="primary">Watch it Now !</Button>
      </Card.Body>
    </Card>

  )
}

export default card