import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const { form, initialName } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        form({ name });
    }

    return (
        <>
            <h1>Favorite Authors</h1>
            <Link to={"/"}>Home</Link>
            <h4 style={{ color: "purple" }}>Add a new author:</h4>
            <form onSubmit={onSubmitHandler} >
                <p>
                    <label>Name:</label>
                    <input type="text" onChange={e => setName(e.target.value)} value={name} />
                </p>
                <Link to={"/"} className="btn btn-outline-danger btn-sm">Cancel</Link>
                <button className="btn btn-outline-danger btn-sm"> Submit</button>
            </form>
        </>
    )
}