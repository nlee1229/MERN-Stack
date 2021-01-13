import React from 'react';
import { Router, Link } from '@reach/router';

function Extra({ word, text, background }) {
    const wordy = word;
    const texty = text;
    const bgColor = background;

    return (

        <h1 style={{ 'color': texty, 'backgroundColor': bgColor }}>{wordy}</h1>
    )
}

export default Extra;

