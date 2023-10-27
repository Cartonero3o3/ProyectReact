
import React, { useState } from 'react';
import Card from './card';
import cards from "../css/card.css"
import { useContext } from 'react';
import { Contexto } from '../context/MiProvider';


function Cards() {
  const {pokemons, setPokemons} = useContext(Contexto)
  const deleteCard = (id) => {
    const updatedPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(updatedPokemons);
  };

  return (
    <div className='cardGridStyle'>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
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
