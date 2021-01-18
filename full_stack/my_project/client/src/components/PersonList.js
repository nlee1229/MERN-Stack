import React from 'react';

export default props => {
    return (
        <div>
            {/* map through props.people */}
            {props.people.map((person, index) => {
                return <p key={index}>{person.lastName}, {person.firstName}</p>
            })}
        </div>
    )
}