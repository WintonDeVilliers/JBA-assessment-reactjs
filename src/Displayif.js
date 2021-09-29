import React from 'react';

export const Displayif = ({condition, children}) => {

    return condition 
    ? children
    : null;
}