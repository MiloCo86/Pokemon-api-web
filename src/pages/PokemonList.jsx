import {useState, useEffect} from 'react';

// COMPONENTS 
import PokemonCard from '../components/pokemonCard/PokemonCard';

//css
import "./PokemonList.css"
import { useSearchParams} from 'react-router-dom';

const PokemonList = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState((Number(page)-1)*12);
  




   // when offset is updated, run this function
   useEffect(() => {
    const urlForPokemon = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`;

    fetch(urlForPokemon)
      .then(response => response.json())
      .then(data => {
        setPokemon(data.results)
      }).catch(err => {
        console.error(err.message);
      })
  }, [offset]) // this runs when setOffset is called

 

  const nextPokemons = () => {
    setOffset(offset + 12); 
    setSearchParams({"page" : Number(page)+1})  
  }
  const previousPokemons = () =>{
    setOffset(offset - 12); 
    setSearchParams({"page" : Number(page)-1})
  }

  


  return (
    <div className="pokemon-list">
      <div className="pokemon-list_navbar">
        <div className="pokemon-list_buttons_area">
          {offset!=0 && <button 
            className="pokemon-list__previous_button"
            onClick={previousPokemons}
          > Previous Pokemons </button>}
          <button 
            className="pokemon-list__next_button"
            onClick={nextPokemons}
          > 
            Next Pokemons
          </button>
        </div>
        <div className="pokemon-list__page-num">pokemon {offset+1} to {offset+12} </div>
      </div>
      <div className="promo-card-container">
        {pokemon.map((singlePokemon, index) => { // index  = 0, 1, 2, 3, 4, 5
          const number = Math.floor(Math.random() * (100))
          const shiny = number < 3 ? true : false
          return(
            <PokemonCard 
              key={index+1} 
              singlePokemon={singlePokemon}
              shiny={shiny}
            /> 
          )
        })}
      </div>
    </div>
  )
}

export default PokemonList;