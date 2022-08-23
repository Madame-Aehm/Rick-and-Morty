import React, { useState } from 'react'
import Styles from './Styles.css';
import TextField from '@mui/material/TextField';
import CreateCards from './CreateCards';

export default function Banner(characters) {
  function handleInput(e) {
    const newCharacterArray = [];
    characters.characters.map((character) => {
      if (character.name.includes(e.target.value)) {
        newCharacterArray.push(character);
      }
    })
    console.log(newCharacterArray);
    //now what?

  }


  return (
    <div className='banner'>
      <TextField 
        id="outlined-basic" 
        variant="outlined" 
        size="small" 
        placeholder='Search' 
        sx={{
          '& .MuiInputBase-colorPrimary': {
            color: 'white',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          }
        }}
        onChange={handleInput}
      />
    </div>
  )


}
