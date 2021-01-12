import axios from 'axios';
import React, { useEffect, useState } from 'react';


const AxiosPokemonApi = props => {
    const [pokemonData, setPokemonData] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=15")
            .then(response => console.log(response))


        // (function (response) {
        //     console.log(response);
        // })
    }, []);


    return (
        <div>
            <h1>Welcome to the Pokemon Api!</h1>
            <button onClick={AxiosPokemonApi}>Fetch Pokemon</button>
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