import React from 'react'

  export default function Buscar(nom) {
    const filtrarPorNombre = (pokemons) => {
      return listaPokemon.filter(pokemon =>
        pokemon.pokemons.toLowerCase().includes(pokemons.toLowerCase())
      );
    };
  
  return (
    <div>Buscar</div>
  )
}
