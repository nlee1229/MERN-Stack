// This component will be the form that we can add a person to and make a request to our API
import React, { useState } from 'react';
import axios from 'axios';

export default props => {
    // keep track of what is being types via useState hook
    const { initialTitle, initialPrice, initialDescription, onSubmitProp, buttonType, errors } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    //handler when form is submitted
    const onSubmitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({ title, price, description });
    }

    //     props.setProduct({ title, price, description });

    //     axios.post('http://localhost:8000/api/products', {
    //         title,
    //         price,
    //         description
    //     })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }

    // onChange to update title, price, and description
    return (
        <form onSubmit={onSubmitHandler}>
            {errors ? errors.map((err, index) => <p key={index}>{err}</p>) : ""}
            <p>
                <label>Title </label>
                <input type="text" name="title" value={title} onChange={e => { setTitle(e.target.value) }} />
            </p>
            <p>
                <label>Price </label>
                <input type="text" name="price" value={price} onChange={e => { setPrice(e.target.value) }} />
            </p>
            <p>
                <label>Description </label>
                <input type="text" name="description" value={description} onChange={e => { setDescription(e.target.value) }} />
            </p>
            <button>{buttonType}</button>
        </form>
    )
}
