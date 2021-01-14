import { useState } from 'react';
import { navigate } from '@reach/router';

function Form() {
    const [collection, setCollection] = useState("people");
    // id of the collection we want
    const [collectionID, setCollectionID] = useState(1);

    function submitHandler() {
        // send a get request to a url w/ the collection and ID
        // redirect/navigate to path "/type/id"
        navigate(`/${collection}/${collectionID}`);
    }

    return (
        <div>
            <form style={{ display: "flex", justifyContent: "center", margin: "20px" }} onSubmit={submitHandler}>
                <div style={{ margin: "20px" }}>
                    <label>Search for: </label>
                    <select onChange={(e) => setCollection(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div style={{ margin: "20px" }}>
                    <label>ID: </label>
                    <input type="number" onChange={(e) => setCollectionID(+e.target.value)} />
                    <button>Search</button>
                </div>
            </form>
        </div >
    );
}

export default Form;