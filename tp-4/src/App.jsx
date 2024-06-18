import React, {useState} from 'react';
import axios from 'axios';
import ListaPokemon from './components/ListaPokemon';
import './App.css';
import './index.css';

const App = ()=> {
  const [pokemons, setPokemons] = useState([]);

  const obtenerPokemons = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        setPokemons(response.data.results);
    } catch (error) {
        console.error('Error al obtener los Pokémon:', error);
    }
  };

  const eliminarPokemon = (index) => {
    setPokemons(pokemons.filter((_, i)=> i !== index));
  };

  return(
    <div className='container'>
      <h1>Aplicación de Pokemon</h1>
      <button onClick={obtenerPokemons}>Cargar Pokemons</button>
      <ListaPokemon pokemons={pokemons} eliminarPokemon={eliminarPokemon}/>
    </div>
  );
};
export default App;
