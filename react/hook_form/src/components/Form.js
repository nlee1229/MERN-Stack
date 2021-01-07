import React, { useState } from 'react';


const Form = (props) => {
    const { inputs, setInputs } = props;
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    // e is representative of a block of info every time a client hits a key
    const onChange = e => {
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


