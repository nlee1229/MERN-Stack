import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    const [name, setName] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/new', {
            name
        })
            .then(res => { navigate('/') })
            .catch(err => console.log(err))
    }


    return (
        <>
            <h1>Favorite Authors</h1>
            <h4>Add a new author:</h4>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name:</label>
                    <input type="text" onChange={e => setName(e.target.value)} />
                </p>
                <button>Submit</button>
            </form>
        </>
    )
}
