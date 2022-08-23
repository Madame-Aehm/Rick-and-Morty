import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import makeFetch from './Characters';

export default function (info) {
  const next = info.info.next;
  const prev = info.info.prev;

 const testing = () => {
  console.log("would make new fetch now") //ugh does nothing i don't understand
} 

  const handlePageBack = () => {
    if (prev !== null) {
      return (
        <IconButton onClick={testing}>
          <ArrowBackIosIcon sx={{ color: '#a8004e' }}/>
        </IconButton>
      )
    } else {
      return <ArrowBackIosIcon color='disabled'/>
    }
  }

  const handlePageForward = () => {
    if (next !== null) {
      return (
        <IconButton>
          <ArrowForwardIosIcon sx={{ color: '#a8004e' }}/>
        </IconButton>
      )
    } else {
      return <ArrowForwardIosIcon color='disabled'/>
    }
  }

  

  return (
    <div className='arrows-container'>

      {handlePageBack()}
      {handlePageForward()}
     
    </div>
  )
}
