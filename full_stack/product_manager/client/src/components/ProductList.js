import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
    // sending a request to api tp delete product
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                // remove from dom removes it from view
                removeFromDom(productId)
            })
    }

    return (
        <div>
            <br /><hr />
            <h1>All Products:</h1>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={`/products/${product._id}`}>
                        {product.title}
                    </Link>
                    <button onClick={e => { deleteProduct(product._id) }}>Delete</button>
                </p>

            })}
        </div >
    )
}

