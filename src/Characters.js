import React, { useEffect, useState } from 'react'
import Arrows from './Arrows';
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

    // const fetchResult = MakeFetch('https://rickandmortyapi.com/api/character/');
    // console.log(fetchResult.info);

    function handleInput(e) {
        const newCharacterArray = [];
        characters.map((character) => {
          if (character.name.includes(e.target.value)) {
            newCharacterArray.push(character);
          }
        }); 
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
          return <ArrowForwardIosIcon color='disabled'/>
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
        {console.log(characters)}

        <div className='arrows-container'>
            {handlePageBack()}
            {handlePageForward()}
        </div>
        {/* <Arrows info={info}/> */}
    </div>
  )
}
