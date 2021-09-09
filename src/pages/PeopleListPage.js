import React from 'react';
import {PeopleList} from '../PeopleList';

const people =[{
    name: 'Bobby',
    age: 23,
    color: "brown",
},{
    name: 'Carl',
    age: 54,
    color: "blue",
},{
    name: 'Roni',
    age: 11,
    color: "red",
}];


export const PeopleListPage = () => (

    <>
    <h1>The People List Page</h1>
    <PeopleList people={people}/>
    </>
)