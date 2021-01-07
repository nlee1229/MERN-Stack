import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonCard extends Component {
    constructor(props) {
        // Use super whenever there is an  extends
        super(props);
        this.state = {
            age: props.age
        }
    }

    increaseAge = () => {
        // this.state.age is coming from the age on line 8
        this.setState({ age: this.state.age + 1 })
    };

    decreaseAge = () => {
        this.setState({ age: this.state.age - 1 })
    };

    render() {
        const { name, age, hairColor } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair Color: {hairColor}</h3>

                <button className="btn btn-outline-danger" onClick={this.increaseAge}>Happy Birthday!</button>
                <button className="btn btn-outline-danger" onClick={this.decreaseAge}>Click to gain a year!</button>
            </div>
        );
    }
}


export default PersonCard;