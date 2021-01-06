import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const { name, age, hairColor } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <h3>Age: {age}</h3>
                <h3>Hair Color: {hairColor}</h3>
            </div>
        );
    }
}


export default PersonCard;