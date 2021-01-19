import React from 'react';


export default props => {
    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, idx) => {
                return <p key={idx}><a href={`/products/${product._id}`}> {product.title}, {product.price}, {product.description}</a></p>
            })}
        </div >
    )
}

