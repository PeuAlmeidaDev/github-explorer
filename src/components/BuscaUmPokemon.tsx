import React, { useState } from "react";
import "../styles/buscaUmPokemon.scss"


type Pokemon = {
    name: string;
    id: number;
    types: [
        {
        type: {
            name: string;
        }
        },
        {
        type?: {
            name: string;
        }
    }]
    sprites: {
        front_default: string;
    }
}

export function BuscaUmPokemon() {

    const [pokemonName, setPokemonName] = useState("")
    const [pokemon, setPokemon] = useState<Pokemon>() 
    
    const buscarPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`)
        .then(response => {
            if(!response.ok) throw new Error("Pokemon não encontrado")
            return response.json()
        })
        .then(data => setPokemon(data))
        .catch(error => console.error("Erro ao buscar pokemon:", error))
    }
    
    return (
        <div className="pokemon-container">
            <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
            <button onClick={buscarPokemon}>Buscar</button>
                <div>
                    <h1>{pokemon?.name.toUpperCase()}</h1>
                    <p>{pokemon?.types[0]?.type.name}</p>
                    <p>{pokemon?.types[1]?.type?.name}</p>
                    <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
                </div>
        </div>
    )
}
