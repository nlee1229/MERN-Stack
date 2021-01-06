import React from 'react';

const PersonCard = props => {
    // const increaseAge = () => {
    //     this.setState({ age: this.state.age + 1 })
    // };

    // const decreaseAge = () => {
    //     this.setState({ age: this.state.age - 1 })
    // };

    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    );
}


export default PersonCard;