import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

export default props => {
    const { products, removeFromDom } = props;

    return (
        <div>
            <hr />
            <h1>All Products:</h1>
            {products.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                        <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                        <Link to={`/products/${product._id}/edit`}>Edit</Link>
                    </p>
                )
            })}
        </div >
    )
}

