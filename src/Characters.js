import React, { useEffect, useState } from 'react'
import Arrows from './Arrows';
import Banner from './Banner';
import CreateCards from './CreateCards';

export default function FetchCharacters() {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({})
    const makeFetch = async (URL) => {
        try {
            const response = await fetch(URL);
            const result = await response.json();
            setCharacters(result.results);
            setInfo(result.info)
        } catch (error) {
            console.log("error", error);
        }
    };
    useEffect(() => {
        makeFetch('https://rickandmortyapi.com/api/character/');
    }, []);

  return (
    <div>
        <Banner characters={characters}/>
        <div className='cards-container'>
            {characters && characters.map((character, i) => {
                return CreateCards(character, i);
            })}
        </div>
        <Arrows info={info}/>
    </div>

  )
}
