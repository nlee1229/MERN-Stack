import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

export default props => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
            .then(res => setProducts(res.data));
    }, [])


    // sending a request to api tp delete product
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div>
            <br /><hr />
            <h1>All Products:</h1>
            {products.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                        <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                    </p>
                )
            })}
        </div >
    )
}

