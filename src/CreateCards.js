import { Typography } from '@mui/material';
import CreateModals from './CreateModals';
import Styles from './Styles.css';
import React, { useEffect, useState } from 'react'

export default function CreateCards(character, i) {
    
  return (
    <div className='flip-card' key={i}>
        <div className='card-inner'>
            <div className='card-front'>
                <img src={character.image} alt={character.name}/>
            </div>
            <div className='card-back'>
                <Typography variant="h5" gutterBottom>{character.name}</Typography>
                <CreateModals character={character}/>
            </div>
        </div>
    </div>
  )
}
