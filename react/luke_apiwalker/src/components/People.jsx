import React, { useState, useEffect } from 'react';
import Form from './Form';
import axios from 'axios';

function People(props) {
    // deconstructing
    const { collection, collectionID } = props;
    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.anges(`https://swapi.dev/api/people/${collectionID}`)
            .then(response => { setPerson(response.data) })
            .catch((e) => { setError("These aren't the droids you're looking for") });
    }, [props]);

    function errorNotFound() {
        return (
            <div>
                <h1>{error}</h1>
                <img src="https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg" />
            </div >
        )
    }

    function display() {
        return (
            <div>
                <h2>Name: {person.name}</h2>
                <h2>Height: {person.height}</h2>
                <h2>Mass: {person.mass}</h2>
                <h2>Birth Year: {person.birth_year}</h2>
            </div>
        )
    }

    let inner = 'Loading';

    if (error) {
        inner = errorNotFound();
    } else if (person !== null) {
        inner = display();
    }

    return (
        <div>
            <Form />
            {inner}
        </div>
    )

}

export default People;