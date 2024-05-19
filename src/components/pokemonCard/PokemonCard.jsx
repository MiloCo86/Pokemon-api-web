import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

import "./PokemonCard.css"


function PokemonCard ({singlePokemon}) {

  const pokemonName = singlePokemon.name;

  const [pokemonData, setPokemonData] = useState({}); // empty obj

  const [pokemonType,setPokemonType] = useState('');

  const [pokemonSprite, setPokemonSprite] = useState('');

  // fetch data from the api for the specific pokemon in the url
  useEffect(() => {

    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    fetch(pokemonURL)
      .then(response => response.json())
      .then(data =>{
        setPokemonData(data);
        setPokemonType(data.types[0].type.name)
        setPokemonSprite(data.sprites.front_default)
      })
      .catch(err => console.error(err.message));
  },[singlePokemon]); // when component mounts, run the function inside



  return (
    <Link to={`/pokemon/${singlePokemon.name}`}>
      <div className={`single-pokemon ${pokemonType}`}>
        <img src={pokemonSprite} />
        <h3 className="single-pokemon__name">{singlePokemon.name} </h3>
      </div>
    </Link>
  )
}

export default PokemonCard;