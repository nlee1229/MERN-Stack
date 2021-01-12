import { useState } from 'react';

function Form() {

    const [inputVal, setInputVal] = useState('');
    const [result, setResult] = useState(null);


    function handleChange(event) {
        // update the value of inputVal
        // event.target is a DOM node
        setInputVal(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault(); // Stops the page from reloading when form is submitted... also allows u to process the form with JS
        console.log(inputVal);

        // we want to make a request to this URL
        // the line below is creating a promise
        // this is an AJAX (Asynchronous JavaScript and XML) request
        fetch(`https://api.agify.io?name=${inputVal}`)
            // our callback function returns another promise!
            // doesn't run until the data comes back
            .then(response => response.json())
            .then(json => setResult(json))
        // this returns a promise
        // a promise is a special kind of object
        // resolved - got back the value
        // rejected - didn't get back the value
        // pending - still waiting for the value

    }

    return (
        <div>
            <h2>Guess your age</h2>
            <p>{inputVal}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputVal}
                    onChange={handleChange}
                    name="name"
                />
                <button>Tell Me!</button>
            </form>
            {/* //ternary operator */}
            {result !== null ? (
                <div>
                    <p>Name: {result.name}</p>
                    <p>Age: {result.age}</p>
                    <p>Count: {result.count}</p>
                </div>
            ) : null}
        </div>
    );
}

export default Form;