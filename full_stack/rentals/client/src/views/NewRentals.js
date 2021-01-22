
import RentalForm from '../components/RentalForm';

// don't need props in par. b/c this is going to be a blank form
function NewRentals() {
    // we have this to send data to the backend from the form

    return (
        <div>
            <h1> Add a Rental</h1>
            <RentalForm
                address=""
                imageUrl=""
                newConstruction={false}
                propertyType=""
                method="post"
                url="http://localhost:8000/api/rentals/"
            />
        </div>
    );
}

export default NewRentals;