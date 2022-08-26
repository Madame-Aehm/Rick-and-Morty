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
            setInfo(result.info)
            setAllCharacters(result.results);
            const fetchFilterArray = result.results;
            const input = document.getElementById("outlined-basic");
            if (input.value) {
              fetchFilter(input, fetchFilterArray) // allcharacters and characters don't update here
            } else {
              setCharacters(result.results);
            }
        } catch (error) {
            console.log("error: ", error);
        }
    };

    function fetchFilter(input, array) {
      const inputValue = input.value.toLowerCase();
      const newCharacterArray = array.filter(char => char.name.toLowerCase().includes(inputValue));
      setCharacters(newCharacterArray);
    }

    useEffect(() => {
        makeFetch('https://rickandmortyapi.com/api/character/');
    }, []);

    function inputFilter(input) {
      const charClone = [...allCharacters];
      const inputValue = input.value.toLowerCase();
      const newCharacterArray = charClone.filter(char => char.name.toLowerCase().includes(inputValue));
      setCharacters(newCharacterArray);
    }

    const handlePageBack = () => {
      const prev = info.prev;
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
        const next = info.next;
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
                onChange={(e) => inputFilter(e.target)}
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
