import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (props) => {
    const { inputs, setInputs } = props;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    // const [firstNameError, setFirstNameError] = useState("");

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onChange = e => {
        // Set inputs function is updating input state, but in order to do that you have to copy in the previous values otherwise it would get lost. The new things the current thing being updated with it’s value
        setInputs({
            // copying whatever was there before
            //Inputs starts off as an object
            ...inputs,
            // value is what gets captured when the client changes things...Target is whatever triggered the event
            // The square brackets around e.target.the name is crucial.Allows us to dynamically say that our key is the variable.  
            [e.target.name]: e.target.value
        });
        // validations
        if (e.target.name === "firstName") {
            if (e.target.value.length < 2) {
                setErrors({
                    ...errors,
                    [e.target.name]: "First name must be at least 2 characters."
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            };
        };

        if (e.target.name === "lastName") {
            if (e.target.value.length < 2) {
                setErrors({
                    ...errors,
                    [e.target.name]: "Last name must be at least 2 characters."
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            };
        };

        if (e.target.name === "email") {
            if (e.target.value.length < 2) {
                setErrors({
                    ...errors,
                    [e.target.name]: "Email name must be at least 5 characters."
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            };
        };

        if (e.target.name === "password") {
            if (e.target.value.length < 5) {
                setErrors({
                    ...errors,
                    [e.target.name]: "Email name must be at least 5 characters."
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            };
        };

        if (e.target.name === "password") {
            if (e.target.value.length < 8) {
                setErrors({
                    ...errors,
                    [e.target.name]: "Password must be at least 8 characters."
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            };
        };

        if (e.target.name === "confirmPassword") {
            if (e.target.value.length !== inputs.password) {
                setErrors({
                    ...errors,
                    [e.target.name]: "Passwords must match."
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            };
        };
    };


    const formSubmitMessage = e => {
        setHasBeenSubmitted(true);
    }

    return (
        <form onSubmit={formSubmitMessage}>
            {
                hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
            }
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input onChange={onChange} type="text" name="firstName" />
                {
                    errors.firstName ?
                        <p style={{ color: 'red' }}>{errors.firstName}</p> :
                        ''
                }
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input onChange={onChange} type="text" name="lastName" />
                {
                    errors.lastName ?
                        <p style={{ color: 'red' }}>{errors.lastName}</p> :
                        ''
                }
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" name="email" />
                {
                    errors.email ?
                        <p style={{ color: 'red' }}>{errors.email}</p> :
                        ''
                }
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input onChange={onChange} type="password" name="password" />
                {
                    errors.password ?
                        <p style={{ color: 'red' }}>{errors.password}</p> :
                        ''
                }
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input onChange={onChange} type="password" name="confirmPassword" />
                {
                    errors.confirmPassword ?
                        <p style={{ color: 'red' }}>{errors.confirmPassword}</p> :
                        ''
                }
            </div>
            <button className="btn btn-outline-primary" type="submit">Submit</button>
        </form >
    );
};

export default Form;


