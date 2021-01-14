import Reach, { useState, useEffect } from 'react';
import Main from './Main';
import axios from 'axios';

function Planet(props) {
    const { collection, collectionID } = props;
    const [planet, setPlanet] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${collectionID}`)
            // grabbing the data from the API into setPerson so that we have access and we can use it
            .then(unicorn => { setPlanet(unicorn.data) })
            .catch((e) => { setError("These aren't the planets you're looking for") });
    }, [props]);

    function errorNotFound() {
        return (
            <div>
                <h1>{error}</h1>
                <img src="https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg" />
            </div>
        )
    }

    function display() {
        return (
            <div>
                <h2>Name: {planet.name}</h2>
                <h2>Climate: {planet.climate}</h2>
                <h2>Population: {planet.population}</h2>
                <h2>Diameter: {planet.diameter}</h2>
            </div>
        )
    }

    return (
        <div>
            <Main />
            {error != null ? errorNotFound() : display()}
        </div>
    )
}

export default Planet;