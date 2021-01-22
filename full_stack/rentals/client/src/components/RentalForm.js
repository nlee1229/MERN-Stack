// CREATING A FORM FOR EDITRENTAL FORM

import { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

// don't need props in par. b/c this is going to be a blank form
// NOTE TO SELF: NEED FORM DATA, METHOD, AND URL
function RentalForm(props) {
    // we have this to send data to the backend from the form
    const [address, setAddress] = useState(props.address);
    const [imageUrl, setImageUrl] = useState(props.imageUrl);
    const [newConstruction, setNewConstruction] = useState(props.newConstruction); // checkbox will be initially unchecked, false will
    const [propertyType, setPropertyType] = useState(props.propertyType); // usually for a dropdown, use an empty string unless we have a particular option we want users to select

    const [errors, setErrors] = useState([]);


    function handleSubmit(e) {
        e.preventDefault();



        setErrors([]); // just resetting for the users (NOT NECESSARY CODE)
        console.log(address, imageUrl, newConstruction, propertyType)

        // send info to the backend
        axios[props.method](props.url, {
            address,   // creating an object with brackets here is b/c we want to put all data into an object that we are sending w/ our request
            imageUrl,
            newConstruction,
            propertyType
        }) //returns a promise!
            .then(() => navigate("/rentals"))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }


    return (
        <div>
            {errors.map((err, idx) => <p key={idx} style={{ color: 'red' }}>{err}</p>)}
            {/* by default, submits a GET request to the same page (NOT WHAT WE WANT TO DO) */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Address</label>
                    <input
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>

                <div>
                    <label>Image URL</label>
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            // use checked for checkboxes and passing it in as true or false
                            checked={newConstruction}
                            onChange={e => setNewConstruction(e.target.checked)}
                        />
                    New Construction
                    </label>
                </div>

                <div>
                    <label>Property Type</label>
                    <select value={propertyType} onChange={e => setPropertyType(e.target.value)}>
                        <option>Please select</option>
                        <option value="Single Family">Single Family</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Condo">Condo</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default RentalForm;