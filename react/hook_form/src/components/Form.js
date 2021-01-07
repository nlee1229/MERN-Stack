import React, { useState } from 'react';


const Form = (props) => {
    const { inputs, setInputs } = props;
    const [firstNameError, setFirstNameError] = useState("");

    const onChange = e => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First name must be more than 2 characters!");
        }
        setInputs({
            ...inputs,
            // value is what gets caputred when the client changes things
            [e.target.name]: e.target.value
        });
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input onChange={onChange} type="text" name="firstName" />
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input onChange={onChange} type="text" name="lastName" />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" name="email" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input onChange={onChange} type="password" name="password" />
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input onChange={onChange} type="password" name="confirmPassword" />
            </div>
        </form >
    );
};

export default Form;


