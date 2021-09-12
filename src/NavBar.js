import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = () =>{
    return(
        <ul>

            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/counter">Counter-Button</Link>
            </li>
            <li>
                <Link to="/people-list">People</Link>
            </li>
            {/* <li>
                <Link to="/controlled">Controlled-Form</Link>
            </li>
            <li>
                <Link to="/uncontrolled">Uncontrolled-Form</Link>
            </li> */}

            <li>
            <Link to="/user">UserProfile</Link>
            </li>
        </ul>
    );

}
