import {useState, useEffect} from 'react';

// COMPONENTS 
import PokemonCard from '../components/pokemonCard/PokemonCard';

//css
import "./PokemonList.css"

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);


   // when offset is updated, run this function
   useEffect(() => {
    // do something here
    const urlForPokemon = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`;

    fetch(urlForPokemon)
      .then(response => response.json())
      .then(data => {
        setPokemon(data.results)
      }).catch(err => {
        console.error(err.message);
      })
  }, [offset]) // this runs when setOffset is called


  const loadMorePokemon = () => {
    // asynchronous  
    setOffset(offset + 12);
  }

  return (
    <div className="pokemon-list">
      <div className="row">
        <button 
          className="pokemon-list__load-more"
          onClick={loadMorePokemon}
        > 
          Load more Pokemon
        </button>
        <div className="pokemon-list__page-num">page: {(offset+12)/12}</div>
      </div>
      <div className="promo-card-container">
        {pokemon.map((singlePokemon, index) => { // index  = 0, 1, 2, 3, 4, 5
          return(
            <PokemonCard 
              key={index+1} 
              singlePokemon={singlePokemon}
            /> 
          )
        })}
      </div>
    </div>
  )
}

export default PokemonList;