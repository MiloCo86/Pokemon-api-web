
import {useState, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import "./PokemonDetailView.css"


const PokemonDetailView = () => {

  const {pokemonName} = useParams();

  const [pokemonData, setPokemonData] = useState({}); // empty obj

  // any time we fetch data, there must be an indicator that the data is coming
  // this is usually a loader (icon) or some text
  // or a progress bar

  const [loader, setLoader] = useState(true);
  const [pkmType,setPkmType] = useState('')
  const [currentPage, setCurrentPage] = useState('')


  // fetch data from the api for the specific pokemon in the url

  useEffect(() => {

    setLoader(true);
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    fetch(pokemonURL)
      .then(response => response.json())
      .then(data =>{
        setPokemonData(data);
        setPkmType(data.types[0].type.name)
        setCurrentPage(`/?page=${Math.ceil(Number(data.id)/12)}`)
        setLoader(false);
      })
      .catch(err => console.error(err.message));
  },[]); // when component mounts, run the function inside

  // once data is processed to JSON, update state

  return (
    <div className='container'>
      {loader && <h1>Loading....</h1>}
      {!loader && 
        <div className={`pokemon-detail-view__container ${pkmType}_shadow`}>
          <Link className='close-icon' to={currentPage}>❌</Link>
          <div className="pokemon-detail-view__header">
            <h4>{pokemonData.name}</h4>  
            <h5>No. {pokemonData.id}</h5>
          </div>
          <div className="pokemon-details__main">
            <div className={`pokemon-detail-view__image ${pkmType}`}>
              <img src={pokemonData.sprites.front_default} />
            </div>
            <div className="pokemon-detail-view__stats">
              <div className={`types ${pkmType}_shadow-line`}>
                <h3>Types</h3>
                <div className="types_content">
                {pokemonData?.types?.map((types, index) => {
                  //variable that will be the class
                  const pkType = `type__${types?.type?.name}`
                  return (
                    <p className={pkType} key={index}>{types?.type?.name}  </p>
                  )
                })}
                </div>
              </div>
              <div className="dimensions">
                <div className='dimensions_info'>
                  <h3>weight: </h3>
                  <p>{pokemonData.weight * 0.1} Kg</p>
                </div>
                <div className='dimensions_info'>
                  <h3>height: </h3>
                  <p>{pokemonData.height * 10} cm</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`stats ${pkmType}_shadow-line`}>
                <h3>Base Stats</h3>
                <div className="stats_container">
                  {pokemonData?.stats?.map((statObj, index) => {
                    return (
                      <div key={index} className="stats_content">
                        <p className="pokemon-stats" key={index}>{statObj?.stat?.name}: </p>
                        <div className="stats_bar_and_number">
                          <p className={`stat-bar ${pkmType}_bar`} >{"-".repeat(statObj?.base_stat/10)} </p>
                          <p className=''>{statObj?.base_stat}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
        </div>
      }
    </div>
  )
}

export default PokemonDetailView;