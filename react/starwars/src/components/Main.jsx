import { useState } from 'react';
import { navigate } from '@reach/router';

function Main() {
    const [collection, setCollection] = useState("people");
    const [collectionID, setCollectionID] = useState(1);

    function submitHandler() {
        navigate(`/${collection}/${collectionID}`);
        // return redirect("/some-other-route");
        // typically, we redirect after form submission
    }

    return (
        <div>
            <form style={{ display: 'flex', justifyContent: 'center', margin: '20px' }} onSubmit={submitHandler}>
                <div>
                    <label>Search for: </label>
                    <select onChange={(e) => setCollection(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div>
                    <label>ID: </label>
                    <input type="number" onChange={(e) => setCollectionID(e.target.value)} />
                    <button>Search</button>
                </div>

            </form>
        </div>
    );
}

export default Main;

// ------------- EXTRA NOTES -----------//
// -setCollection(e.target.value)????
// E is the event and we’re targeting whatever is being inputted and we’re getting the value of that