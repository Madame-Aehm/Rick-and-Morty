import React, { useEffect, useState } from 'react'
import CreateCards from './CreateCards';

export default function FetchCharacters() {
    const [characters, setCharacters] = useState([]);
    const makeFetch = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/');
            const result = await response.json();
            setCharacters(result.results);
        } catch (error) {
            console.log("error", error);
        }
    };
    useEffect(() => {
        makeFetch();
    }, []);

  return (
    <div className='cards-container'>
        {characters && characters.map((character, i) => {
            return CreateCards(character, i);
        })}

    </div>

  )
}
