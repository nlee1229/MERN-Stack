import React from 'react';

function Number(props) {
    const { num, color, bc } = props;
    if (isNaN(+num)) {
        if (num === "home") {
            return (
                <h1>Welcome home you guys!</h1>
            );
        } else {
            return (
                <h1 style={{ backgroundColor: color, color: bc }}>The word is: {num}</h1>
            );
        }
    } else {
        return (
            <h1>The number is: {num}</h1>
        );
    }
}
export default Number;