import { Button, InputLabel, Typography } from '@mui/material';
import React from 'react';
import CreateModals from './CreateModals';
import Styles from './Styles.css';

export default function CreateCards(character, i) {



  return (
    <div className='flip-card' key={i}>
        <div className='card-inner'>
            <div className='card-front'>
                <img src={character.image} alt={character.name}/>
            </div>
            <div className='card-back'>
                <Typography variant="h5" gutterBottom>{character.name}</Typography>
                <Button variant="text" onClick={CreateModals(character)}>
                    <Typography gutterBottom color='white'>Learn More</Typography>
                </Button>
            </div>
        </div>




    </div>
  )
}
