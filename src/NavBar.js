import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = () =>{
    return(
        <ul>

            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/assessment">Assessment</Link>
            </li>
        </ul>
    );

}
