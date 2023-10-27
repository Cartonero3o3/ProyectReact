import { createContext, useState} from "react";

export const Contexto = createContext();

export default function MiProvider({children}) {
    const [pokemons, setPokemons] = useState([
        {
                title: 'Pikachu',
                description:
                    'Pikachu es un Pokémon de tipo eléctrico introducido en la primera generación. Es el Pokémon más conocido de la historia, debido a ser el acompañante del protagonista del anime, Ash Ketchum, y la mascota representante de la franquicia Pokémon.',
                imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
                id: 1
            },
            {
                title: 'Charmander',
                description:
                    'Charmander es un Pokémon de tipo fuego introducido en la primera generación. Es uno de los Pokémon iniciales que puede elegir el jugador al comenzar la aventura en las regiones Kanto y Johto.',
                imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                id: 2
            },
            {
                title: 'Squirtle',
                description:
                    'Squirtle es un Pokémon de tipo agua introducido en la primera generación. Es uno de los Pokémon iniciales que puede elegir el jugador al comenzar la aventura en las regiones Kanto y Johto.',
                imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                id: 3
            },
            {
                title: 'Bulbasaur',
                description:
                    'Bulbasaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es uno de los Pokémon iniciales que puede elegir el jugador al comenzar la aventura en las regiones Kanto y Johto.',
                imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                id: 4
            },
        {
          title: 'Mewtwo',
          description: 'Mewtwo es un Pokémon legendario de tipo psíquico introducido en la primera generación. Es uno de los Pokémon más conocidos y famosos, siendo el protagonista de la primera película.',
          imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
          id: 5
        },
        {
          title: 'Mew',
          description: 'Mew es un Pokémon singular de tipo psíquico introducido en la primera generación. Es uno de los Pokémon más conocidos y famosos de la historia, siendo el protagonista de la primera película.',
          imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
          id: 6
        },
        {
          title: 'Gengar',
          description: 'Gengar es un Pokémon de tipo fantasma/veneno introducido en la primera generación. Es la evolución final de Gastly. Es uno de los Pokémon más famosos de la historia, siendo el protagonista de la primera película.',
          imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
          id: 7
        },
        {
          title: 'Dragonite',
          description: 'Dragonite es un Pokémon de tipo dragón/volador introducido en la primera generación. Es la evolución final de Dratini y Dragonair. Es uno de los Pokémon más famosos de la historia, siendo el protagonista de la primera película.',
          imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
          id: 8
        },
        {
          title: 'Gyarados',
          description: 'Gyarados es un Pokémon de tipo agua/volador introducido en la primera generación. Es la evolución de Magikarp. Es uno de los Pokémon más famosos de la historia, siendo el protagonista de la primera película.',
          imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
          id: 9
        },
        {
          title: 'Arcanine',
          description: 'Arcanine es un Pokémon de tipo fuego introducido en la primera generación. Es la evolución de Growlithe. Es uno de los Pokémon más famosos de la historia, siendo el protagonista de la primera película.',
          imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
          id: 10    },
        {
          title: 'Alakazam',
          description: 'Alakazam es un Pokémon de tipo psíquico introducido en la primera generación. Es la evolución de Kadabra. Es uno de los Pokémon más famosos de la historia, siendo el protagonista de la primera película.',
          imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
          id: 11
        },
        {
          title: 'PeruanoChulo',
          description: 'Primer protagonista de la llamada serie pokemon, aun que su historia es tragica es para contar, cuando era chico vivio una vida miy dificil, lo hecharon de la casa, fue hacia el campo donde comia todo tipo de vichos, ahora de grande se le ocurrio que cada pokemon fuera cada uno de los vichos que tuvo que comer animatisados.',
          imageUrl: imagen1,
          id: 12
        },
    
      ]);
    return (<>
        <Contexto.Provider value={{pokemons, setPokemons}}>
            {children}
        </Contexto.Provider>
    </>)
}