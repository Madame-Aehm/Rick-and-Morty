import React from 'react'
import Styles from './Styles.css';
import TextField from '@mui/material/TextField';

export default function Banner() {
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
      />
    </div>
    
  )
}
