import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';

// getting the list of people under the form
export default () => {
    // this has people we're going to have to send down
    const [people, setPeople] = useState([]);
    // const [loaded, setLoaded] = useState(false); //????????????????????
    // use useEffect to make an API call 
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeople(res.data))
            .catch(err => console.log("Error: err"))
    }, [])


    return (
        <>
            <PersonForm />
            <PersonList people={people} />
        </>
    )
}