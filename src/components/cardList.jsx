import React from 'react'
import data from '../data'
import Card from './card'
const CardList = ({search,setSearch}) => {
  const cardListStyle = {
    
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap'
  }
  return (
    <div className="cardList" style={cardListStyle}>
        {
            data.filter(elt => elt.title.includes(search)).map((elt,index) =>
              
                <Card 
                title={elt.title}
                poster={elt.poster}
                decription={elt.decription}
                rate={elt.rate}
                key={index}
                />
              )
        }
    </div>
  )
}

export default CardList