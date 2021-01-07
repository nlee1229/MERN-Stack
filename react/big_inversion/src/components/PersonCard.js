import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// useState is a hook that will be imported from react. 
// we can access the current state via state and then change the state via setState
const PersonCard = props => {
    const [state, setState] = useState({
        clickCount: 0
    })
    const incClickHandler = e => {
        console.log(state);
        setState({
            clickCount: state.clickCount + 1
        })
    }
    const decClickHandler = e => {
        setState({
            clickCount: state.clickCount - 1
        })
    }

    return (
        < div >
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {state.clickCount}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button className="btn btn-outline-primary" onClick={incClickHandler}>Danger! You are getting older!</button>
            <button className="btn btn-outline-danger" onClick={decClickHandler}>Click to claim a year back!</button>
        </div >
    )
}

export default PersonCard;