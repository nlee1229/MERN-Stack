import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// ---- getting the list of products under the form ---- //
export default () => {
    // ---- this has products we're going to have to send down ---- //
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => {
                setProducts(res.data)
                setLoaded(true);
            });
    }, [])

    // ---- remove the person from the DOM (delete) ---- //
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products/', product)
            .then(res => {
                setProducts([...products, res.data]);
            })
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" buttonType="Create" />
            <hr />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}

// Main.js is making calls to the API, and any other logic required