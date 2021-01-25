import { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

function NewPirates(props) {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [treasure, setTreasure] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        console.log(name, imageUrl, treasure, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand);
        axios.post("http://localhost:8000/api/pirates", {
            name,
            imageUrl,
            treasure,
            catchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        })
            .then(() => navigate("/pirates"))
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
            <button onClick={() => navigate("/pirates")} className="btn btn-outline-success btn-sm">Crew Board</button>
            {crewPosition.length < 1 ? <p style={{ color: 'red' }}>Crew Position is required</p> : null}
            {treasure.length < 1 ? <p style={{ color: 'red' }}>Treasure  is required</p> : null}
            <h1>Add Pirate</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Pirate Name:</label>
                    <input
                        type="text" minlength="4" required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Image URL:</label>
                    <input
                        type="text" minlength="4" required
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label># of Treasure Chests:</label>
                    <select value={treasure} onChange={e => setTreasure(e.target.value)}>
                        <option>Select one</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label>Pirate Catch Phrase:</label>
                    <input
                        type="text" minlength="4" required
                        value={catchPhrase}
                        onChange={e => setCatchPhrase(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Crew Position:</label>
                    <select value={crewPosition} onChange={e => setCrewPosition(e.target.value)}>
                        <option value=""></option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boat Swain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    <span>{errors.crewPosition ? errors.crewPosition.message : ""}</span>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={pegLeg}
                            onChange={e => setPegLeg(e.target.checked)}
                        />
                    Peg Leg
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={eyePatch}
                            onChange={e => setEyePatch(e.target.checked)}
                        />
                    Eye Patch
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={hookHand}
                            onChange={e => setHookHand(e.target.checked)}
                        />
                    Hook Hand
                    </label>
                </div>
                <button className="btn btn-outline-success btn-sm">Add Pirate</button>
            </form>
        </div >
    )
}

export default NewPirates;