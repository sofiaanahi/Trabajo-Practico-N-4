import React from 'react';

const ListaPokemon = ({pokemons, eliminarPokemon}) => {
    return(
        <div>
            <h2>lista de Pokemon</h2>
            <ul>
                {pokemons.map((pokemon, index)=>(
                    <li key={index}>
                        {pokemon.name}
                        <button onClick={()=> eliminarPokemon(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaPokemon;