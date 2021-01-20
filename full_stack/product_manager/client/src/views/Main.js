import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// ---- getting the list of products under the form ---- //
export default () => {
    // ---- this has products we're going to have to send down ---- //
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    // const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => {
                setProducts(res.data)
                setLoaded(true);
                console.log(res.data);
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
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" buttonType="Create" errors={errors} />
            <br />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}

// Main.js is making calls to the API, and any other logic required