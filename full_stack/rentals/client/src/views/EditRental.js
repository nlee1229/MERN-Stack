import { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

// don't need props in par. b/c this is going to be a blank form
function EditRental(props) {
    // we have this to send data to the backend from the form
    const [address, setAddress] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [newConstruction, setNewConstruction] = useState(false); // checkbox will be initially unchecked, false will
    const [propertyType, setPropertyType] = useState(""); // usually for a dropdown, use an empty string unless we have a particular option we want users to select
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    // NEW! TO GET IT ON PAGE LOAD, USEEFFECT
    useEffect(() => {
        axios.get("http://localhost:8000/api/rentals/" + props.id)
            .then(response => {
                const {
                    address,
                    imageUrl,
                    newConstruction,
                    propertyType
                } = response.data; // destructuring so that you wont have to put in response.data."  "
                setAddress(address);
                setImageUrl(imageUrl);
                setNewConstruction(newConstruction);
                setPropertyType(propertyType);
                setLoaded(true);
            })
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        console.log('default prevented!');
        setErrors([]); // just resetting for the users (NOT NECESSARY CODE)
        console.log(address, imageUrl, newConstruction, propertyType)

        // send info to the backend
        axios.put("http://localhost:8000/api/rentals/" + props.id, {
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

    // // if we haven't yet loaded, return this line 
    // if (!loaded) return 'Loading...'


    return (
        <div>
            {errors.map((err, idx) => <p key={idx} style={{ color: 'red' }}>{err}</p>)}
            <h1>Add a Rental</h1>
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

export default EditRental;