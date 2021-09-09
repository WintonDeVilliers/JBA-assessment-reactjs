import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

export const ProtecntedPage = () => {
    const history = useHistory();

    const isAuth = true;
    
    useEffect( ()=>{
        if(!isAuth){
            history.push('/')
        }
    } );

    return(
        <h1>only authed users can see this</h1>
    );
   
      
    
}