import React, { useEffect, useState } from 'react'
import CardsContainer from './CardsContainer';
import TextField from '@mui/material/TextField';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';


export default function CompileCharacters() {

    const [allCharacters, setAllCharacters] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({})

    const makeFetch = async (URL) => {
        try {
            const response = await fetch(URL);
            const result = await response.json();
            setAllCharacters(result.results);
            setCharacters(result.results);
            setInfo(result.info)
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        makeFetch('https://rickandmortyapi.com/api/character/');
    }, []);

    function handleInput(e) {
      const charClone = [...allCharacters];
      const newCharacterArray = charClone.filter(char => char.name.includes(e.target.value))
      setCharacters(newCharacterArray);
    }

    const next = info.next;
    const prev = info.prev;

    const handlePageBack = () => {
        if (prev !== null) {
          return (
            <IconButton onClick={() => makeFetch(prev)}>
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
            <IconButton onClick={() => makeFetch(next)}>
              <ArrowForwardIosIcon sx={{ color: '#a8004e' }}/>
            </IconButton>
          )
        } else {
          return <ArrowForwardIosIcon color='disabled' padding='8px'/>
        }
      }

  return (
    <div>
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

        <CardsContainer characters={characters} />

        <div className='arrows-container'>
            {handlePageBack()}
            {handlePageForward()}
        </div>
    </div>
  )
}
