import { useState } from 'react';

function Form() {

    const [inputVal, setInputVal] = useState('');

    function handleChange(event) {
        // update the value of inputVal
        setInputVal(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault(); // Stops the page from reloading when form is submitted
        console.log(inputVal);
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
        </div>
    )
}

export default Form;