import Reach, { useState, useEffect } from 'react';
import Main from './Main';
import axios from 'axios';

function People(props) {
    // destructuring 
    const { collection, collectionID } = props;
    const [person, setPerson] = useState({}); //??????
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${collectionID}`)
            // grabbing the data from the API into setPerson so that we have access and we can use it
            // .then allows us to instruct JS what to do on data receipt
            .then(unicorn => { setPerson(unicorn.data) })
            .catch((e) => { setError("These aren't the droids you're looking for") });
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
                <h2>Name: {person.name}</h2>
                <h2>Height: {person.height}</h2>
                <h2>Mass: {person.mass}</h2>
                <h2>Birth Year: {person.birth_year}</h2>
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

export default People;

// ----------- EXTRA NOTES -----------//

// -What does the {} do inside of useState? ——— {} is when you’re destructuring. Use this when anything is an object. In this case, since we’re grabbing props from an api & we’re passing in props(which is an object) it’ll be curly
// -The curly inside useState means-> the output when you’re using state is an object. B/c you’re bringing an object from the API, you want to keep it as an object so you can access it in the <h2>, etc…
// -How do we know what to put into the .then and .catch?—— When you trigger ‘response’ you’re getting the key value pairs like “name: Luke Skywalker”...
// 	Getting information from API, and THEN takes the response from the .get and then grabs the data so that we can set it to setPerson and access/use it in here
// .catch means if anything goes wrong, you’re  catching the error and show this instead