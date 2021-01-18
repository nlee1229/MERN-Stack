// This component will be the form that we can add a person to and make a request to our API
import React, { useState } from 'react';
import axios from 'axios';
export default () => {
    // keep track of what is being types via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //handler when form is submitted
    const onSubmitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();
        // make a post request to create a new product
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    // onChange to update title, price, and description
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title </label>
                <input type="text" onChange={e => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price </label>
                <input type="text" onChange={e => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description </label>
                <input type="text" onChange={e => setDescription(e.target.value)} />
            </p>
            <button>Create</button>
        </form>
    )
}

