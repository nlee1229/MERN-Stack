import React from 'react';
import { Router, Link } from '@reach/router';

function General(props) {

    let param = props.stuff;
    function paramCheck(props) {
        if (isNaN(+props.stuff) === true) {
            param = props.stuff;
        } else {
            param = Number(props.stuff);
        }
        return param;
    }

    return (
        <div>
            <h1>{typeof (paramCheck(props))}: {param}</h1>
            <Link to='/home'>Home</Link>
        </div>
    )

}

export default General;