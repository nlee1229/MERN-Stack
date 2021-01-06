import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
    }

    increaseAge() {
        let counter = 0;

    }











    render() {
        const { name, age, hairColor } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <h3>Age: {age}</h3>
                <h3>Hair Color: {hairColor}</h3>

                <button onClick={() => alert("This button has been clicked!")}>Click Me</button>

            </div>
        );
    }
}


export default PersonCard;