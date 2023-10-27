
import React, { useState } from 'react';
import Card from './card';
import imagen1 from '../img/imagen1.jpeg';
import cards from '../css/cards.css'

function Cards() {
  const deleteCard = (id) => {
    const updatedPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(updatedPokemons);
  };

  return (
    <div className='cardGridStyle'>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.title}
          title={pokemon.title}
          description={pokemon.description}
          id={pokemon.id}
          imageUrl={pokemon.imageUrl}
          eliminarCarta={deleteCard}
        />
      ))}
    </div>
  );
}

export default Cards;
