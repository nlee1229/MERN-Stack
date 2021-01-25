import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default props => {
    const [pirate, setPirate] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + props.id)
            .then(response => setPirate(response.data))
    }, [props.id]);


    return (
        <div>
            <div>
                <h1>{pirate.name}</h1>
                <img src={pirate.imageUrl} alt={pirate.name} width="350" />
                <h1>"{pirate.catchPhrase}"</h1>
                <h2>About</h2>
                <p>Position: {pirate.crewPosition}</p>
                <p>Treasures: {pirate.treasure}</p>
                {pirate.pegLeg ? <p>Peg Leg: Yes</p> : <p>Peg Leg: No</p>}
                {pirate.eyePatch ? <p>Eye Patch: Yes</p> : <p>Eye Patch: No</p>}
                {pirate.hookHand ? <p>Hook Hand: Yes</p> : <p>Hook Hand: No</p>}
            </div>

        </div>
    )
}