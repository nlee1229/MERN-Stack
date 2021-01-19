import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                navigate('/products/')
            })
    }


    return (
        <div>
            <Link to={`/products/`}>Go Back</Link><hr />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/${product._id}/edit`}>Edit</Link>
            <button onClick={e => { deleteProduct(product._id) }}>Delete</button>
        </div>
    )
}