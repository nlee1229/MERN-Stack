import React from 'react';
import { Router, Link } from '@reach/router';

// function Number(props) {
//     const { num, color, bc } = props;
//     if (isNaN(+num)) {
//         if (num === "home") {
//             return (
//                 <h1>Welcome home you guys!</h1>
//             );
//         } else {
//             return (
//                 <h1 style={{ backgroundColor: color, color: bc }}>The word is: {num}</h1>
//             );
//         }
//     } else {
//         let temp = Number(num);
//         return (
//             < h1 > The number is: {typeof (temp)}</h1 >
//         );
//     }
// }
// export default Number;

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