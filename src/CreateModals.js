import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import Modal from 'react-modal';



export default function CreateModals (character) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
      console.log(character.character)
      setModalIsOpen(true);
      document.body.style.overflow = "hidden";
    }
    const closeModal = () => {
      setModalIsOpen(false);
      document.body.style.overflow = "initial";
    }
    
    
  return (
    <>
       <Button onClick={openModal} variant="text" fullWidth>
          <Typography gutterBottom color='white'>Learn More</Typography>
       </Button>

       <Modal ariaHideApp={false} className={'character-modal'} isOpen={modalIsOpen} onRequestClose={ () => setModalIsOpen(false) }>
          <h2>{character.character.name}</h2>
          <img src={character.character.image} alt={character.character.name}/>
          <p>Species: {character.character.species}</p>
          <p>Status: {character.character.status}</p>
          <Button onClick={closeModal} variant='text'>Close</Button>
       </Modal>
    </>
  );
}
