import { useState, useEffect } from 'react'; // useState allows us to manage state... useEffect allows us to  make a request on load...
import axios from 'axios'; // in the node modules, for making API requests
import { Link, navigate } from '@reach/router';

function Dashboard() {
    const [rentals, setRentals] = useState(null);

    // allows us to create side effects
    // use useEffect when we need to load up some data when the page first renders
    useEffect(() => {
        axios.get('http://localhost:8000/api/rentals/') // returns a promise!
            .then(response => setRentals(response.data))
    }, []); // [] means run this only on the first render

    // if we were waiting for the user to do something
    // function handleClick() {
    //     axios.get('http://localhost:8000/api/rentals/') // returns a promise!
    //         .then(response => setRentals(response.data))
    // }

    // for the like button
    function handleLike(index) {
        // send a request to backend
        const rentalToUpdate = rentals[index];
        axios.post('http://localhost:8000/api/rentals/' + rentalToUpdate._id + '/likes')
            .then(response => {
                const updatedRental = response.data;

                // cloning rentals
                // const clonedRentals = rentals.slice(); // avoid mutating the current array
                // clonedRentals[index] = updatedRental;
                // setRentals(clonedRentals);
                rentals[index] = updatedRental;
                setRentals(rentals.slice());
            })
    }

    // delete rental
    function handleDelete(id) {
        console.log("Id was clicked", id);

        //send request to the backend
        axios.delete("http://localhost:8000/api/rentals/" + id)
            .then(() => {
                // our callback takes in a rental & it returns true if that rental's id is not the one we just took in (removing from the frontend list)
                const filtered = rentals.filter(rental => rental._id != id);
                setRentals(filtered); // tells React to re-render
                alert("Successfully delete!");
            })


    }

    if (rentals == null) return 'Loading...'; // show the user we're waiting
    // idx below is referencing the index in the array for the likes
    return (
        <div>
            <h1>Rentals</h1>
            {rentals.map((rental, idx) => (
                <div key={rental._id}>
                    <img src={rental.imageUrl} alt={rental.address} width="350" />
                    <p>{rental.address}</p>
                    <p><b>{rental.propertyType}</b></p>
                    {rental.newConstruction ? <p><b>New Construction</b></p> : null}
                    <p>{rental.likes} Likes</p>
                    <button onClick={() => navigate('/rentals/' + rental._id + '/edit')}>Edit</button>
                    <button onClick={() => handleLike(idx)}>Like</button>
                    <button onClick={() => handleDelete(rental._id)}>Delete</button>
                </div>
            ))}
            <Link to="/rentals/new">Add new</Link>
        </div >
    )
}

export default Dashboard;