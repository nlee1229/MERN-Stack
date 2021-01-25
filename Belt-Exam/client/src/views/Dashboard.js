import { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


function Dashboard() {
    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(response => setPirates(response.data))
    }, []);

    function handleDelete(id) {
        console.log("Id was clicked", id);
        axios.delete("http://localhost:8000/api/pirates/" + id)
            .then(() => {
                const filtered = pirates.filter(pirate => pirate._id !== id);
                setPirates(filtered);
            })
    }



    return (
        <div>
            <h1>Pirate Crew</h1>
            <button onClick={() => navigate("/pirate/new")} className="btn btn-outline-success btn-sm">Add Pirate</button>
            {pirates.map((pirate, idx) => (
                <div key={pirate._id}>
                    <h3><b>{pirate.name.toLowerCase()}</b></h3>
                    <img src={pirate.imageUrl} alt={pirate.name} width="200" />
                    <button onClick={() => navigate("/pirate/" + pirate._id)} className="btn btn-outline-primary btn-sm">View Pirate</button>
                    <button onClick={() => handleDelete(pirate._id)} className="btn btn-outline-danger btn-sm">Walk the Plank</button>
                </div>
            ))}
        </div>
    )
}

export default Dashboard;