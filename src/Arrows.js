import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

export default function (info) {
  const next = info.info.next;
  const prev = info.info.prev;

 const testing = () => {
  console.log("would make new fetch now")
} 

  const handlePageBack = () => {
    if (prev !== null) {
      return (
        <IconButton>
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
        <IconButton onClick={testing}>
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
