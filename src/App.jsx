// reach for the toolbox
// toolbox for routing is 'react-router-dom'
// npm install react-router-dom
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider,
} from 'react-router-dom';

// LAYOUT
import DefaultLayout from './layout/DefaultLayout';

// PAGES
import PokemonList from './pages/PokemonList';
import PokemonDetailView from './pages/PokemonDetailView';


// STYLING
import './App.css'

// SCSS and BEM
// create a new app
// layouts (rows of boxes, grid, single box centered)
// review state (useState)
// toggle effect (with conditional classes or styling)
// select effect (one box is blue at a time)
// toggle effect across six boxes
// build simple component
// made component customizable with props
// fetching data 
// working with paginated data
// what is a dependency array and how does it work
// router - setting pages
// loader - using state to track if we are loading anything
 


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<PokemonList />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetailView />} />
      </Route>
  
    )
  )

  // reach out to some API
  // get some data
  // make sure the data is what we want
  // render that data to a component
  // customize the component based on some part of the data

  // HTTP: GET(read), POST (create), PUT (update), DELETE
  // reach out across the web, to get some pokemon data

  // let setBlackBackground = false;

  // iterate through each one and render

  return (
    <RouterProvider router={router} />
  )
}

export default App;
