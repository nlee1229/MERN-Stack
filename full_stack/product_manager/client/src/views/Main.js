import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// getting the list of products under the form
export default () => {
    // this has products we're going to have to send down
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log("Error: err"))
    }, [])


    return (
        <>
            <ProductForm />
            <ProductList products={products} />
        </>
    )
}

//make an api call and display our message using useEffect