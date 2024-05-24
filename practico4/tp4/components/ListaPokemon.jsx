import React, { useState} from "react";
import axios from "axios"


export const ListarPokemon = ()=>{
    const[ListPokemon, setList]= useState([]);

    //Funcion para obtener los pokemones desde la api

    const ConsumirAPI = async()=>{
       try {
        const response= await axios.get("https://pokeapi.co/api/v2/pokemon")
        setList(response.data.data)
       } catch (error) {
        console.error("Error al consumir la API de pokemon")
       }
    }

    // Función para eliminar un Pokemon de la lista
  const eliminarPokemon = (pokemonId) => {
    const nuevaListaPokemon = ListPokemon.filter(
      (pokemon) => pokemon._id !== pokemonId
    );
    setList(nuevaListaPokemon);
  };
   
 
    return(
        <>
        <div>
            <h1> POKEMONES </h1>
            <button onClick={ConsumirAPI} className="btn btn-outline-danger"> Mostrar Pokemon </button>

            {/* LISTA DE POKEMONES */}
            <ul>
                {ListPokemon.map((pokemon) => (
                <li key={pokemon.name}>
                    {/* para mostra el nombre del pokemon*/}
                    <p>{pokemon.name}</p>
                    {/* para mostra las imagenes de los pokemones */}
                    {pokemon.imageUrl && (
                        <img
                            src={pokemon.imageUrl}
                            alt={pokemon.name || "Imagen del pokemon"}
                            style={{ maxWidth: "200px", maxHeight: "200px" }} // Ajusta el tamaño máximo de la imagen
                        />
                    )}
                    {/* boton para eliminar */}
                     <button onClick={() => eliminarPokemon(pokemon._id)}className="btn btn-danger  botonEliminar"> Eliminar </button>
                </li>
                ))}
            </ul>
        </div>
        
        </>
    )
    
}