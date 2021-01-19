import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

export default props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = product => {
        axios.put("http://localhost:8000/api/products/" + id, product)
            .then(res => console.log(res));
    }
    // .then(res => console.log(res));


    return (
        <div>
            <h1>Update a Product</h1>
            { loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                        buttonType="Update"
                    />
                    <DeleteButton productId={product._id} successCallback={() => navigate("/products")} />
                </>
            )}
        </div>
    )
}

// {/* <div>
//     <Link to={`/products/`}>Go Back</Link><hr />
//     <h1>Update a product!</h1>
//     <form onSubmit={updateProduct}>
//         <p>
//             <label>Title</label><br />
//             <input type="text"
//                 name="title"
//                 value={title}
//                 onChange={e => { setTitle((e.target.value)) }} />
//         </p>
//         <p>
//             <label>Price</label><br />
//             <input type="text"
//                 name="price"
//                 value={price}
//                 onChange={e => { setPrice((e.target.value)) }} />
//         </p>
//         <p>
//             <label>Description</label><br />
//             <input type="text"
//                 name="description"
//                 value={description}
//                 onChange={e => { setDescription((e.target.value)) }} />
//         </p>
//         <button>Update!</button>
//     </form>
// </div>
// ) */}


