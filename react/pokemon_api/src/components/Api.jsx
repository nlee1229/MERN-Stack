import React, { useState } from 'react';


function Api() {
    const [pokemon, setPokemon] = useState([]);

    // function fetchPokemon () {} or...
    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=9999")
            .then(response => response.json())
            // setting the pokemon to response.js
            .then(whatever => { setPokemon(whatever.results) })
        console.log(pokemon);
    }

    return (
        <div>
            <h1>Welcome to the Pokemon Api!</h1>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul style={{ listStyle: "none" }}>
                {pokemon.map((item, idx) =>
                    // react wants each item to have a unique id (which is called a key)
                    <li key={idx}>{item.name}</li>
                )}
            </ul>
        </div>
    )
}


export default Api;