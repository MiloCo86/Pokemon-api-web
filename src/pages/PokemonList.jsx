import {useState, useEffect} from 'react';
import { useSearchParams} from 'react-router-dom';

// COMPONENTS 
import PokemonCard from '../components/pokemonCard/PokemonCard';
import SideBar from '../components/SideBar/SideBar';

//css
import "./PokemonList.css"


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
    console.log(offset)
    setSearchParams({"page" : Number(page)+1})  
  }
  const previousPokemons = () =>{
    if(offset<12){
      setOffset(0)
      setSearchParams({"page" : 1})
    }else{
      setOffset(offset - 12);
      setSearchParams({"page" : Number(page)-1})
    }
    
  }

  const goToGen = (generation) =>{
    switch (generation) {
      case 1:
        setOffset(0);
        setSearchParams({"page" : 1})
        break;
      case 2:
        setOffset(151);
        setSearchParams({"page" : 13})
        break;
      case 3:
        setOffset(251);
        setSearchParams({"page" : 22})
        break;
      case 4:
        setOffset(386);
        setSearchParams({"page" : 33})
        break;
      case 5:
        setOffset(494);
        setSearchParams({"page" : 42})
        break;
      case 6:
        setOffset(649);
        setSearchParams({"page" : 55})
        break;
      case 7:
      setOffset(721);
      setSearchParams({"page" : 61})
      break;
      case 8:
      setOffset(809);
      setSearchParams({"page" : 68})
      break;
      case 9:
      setOffset(905);
      setSearchParams({"page" : 76})
      break;

    }
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
      <div className="cards-and-sidebar">
        <SideBar setGeneration={goToGen} />
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
    </div>
  )
}

export default PokemonList;