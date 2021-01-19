import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" + id, {
            title,
            price,
            description
        })
            .then(res => {
                navigate('/products/')
            })
        // .then(res => console.log(res));
    }

    return (
        <div>
            <Link to={`/products/`}>Go Back</Link><hr />
            <h1>Update a product!</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={e => { setTitle((e.target.value)) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text"
                        name="price"
                        value={price}
                        onChange={e => { setPrice((e.target.value)) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                        name="description"
                        value={description}
                        onChange={e => { setDescription((e.target.value)) }} />
                </p>
                <button>Update!</button>
            </form>
        </div>
    )



}