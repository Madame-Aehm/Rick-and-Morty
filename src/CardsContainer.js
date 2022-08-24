import React from 'react'
import CreateCards from './CreateCards';

function CardsContainer(characters) {
  return (
    <div className='cards-container'>
        {characters.characters.map((character, i) => {
            return CreateCards(character, i);
        })}
    </div>
  )
}

export default CardsContainer