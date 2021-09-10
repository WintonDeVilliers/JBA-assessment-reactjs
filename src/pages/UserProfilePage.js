import React, {useEffect, useState} from 'react';

export const UserProfilePage = () => {

    const [user, setUser] = useState({name : {}});


    return (

        <div>
             <h3>Name:{user.name.first} {user.name.last} </h3>
             <p>Email:{user.email}</p>
        </div>
    );
}