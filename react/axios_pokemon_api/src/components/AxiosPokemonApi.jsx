import axios from 'axios';
import React, { useEffect, useState } from 'react';


const AxiosPokemonApi = props => {
    const [pokemonData, setPokemonData] = useState([]);

    const clickHandler = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=15")
            // .then(response => setPokemonData(response.data.results))
            .then(response => console.log(response))
    }

    // note that we have to reference .data to get that inner data out
    // the empty array is a list of variables that we are trying to keep track of

    return (
        <div>
            <h1>Welcome to the Pokemon Api!</h1>
            <button onClick={clickHandler}>Fetch Pokemon</button>
            <ul style={{ listStyle: "none" }}>
                {pokemonData.map((item, idx) =>
                    // react wants each item to have a unique id (which is called a key)
                    <li key={idx}>{item.name}</li>
                )}
            </ul>
        </div>
    )
}

export default AxiosPokemonApi;