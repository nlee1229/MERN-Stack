import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// ---- getting the list of products under the form ---- //
export default () => {
    // ---- this has products we're going to have to send down ---- //
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => setProducts(res.data))
            .catch(err => console.log("Error: err"))
    }, [])

    // ---- remove the person from the DOM (delete) ---- //
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <>
            <ProductForm />
            <hr />
            <ProductList products={products} removeFromDom={removeFromDom} />
        </>
    )
}

//make an api call and display our message using useEffect