import React, {useState} from 'react';
import {Button} from './Button';


export const CounterButton = ({onIncrement ,numberOfClicks}) => {
    // const [numberOfClicks,setNumberOfClicks] = useState(0);
    // const increment = () => setNumberOfClicks(numberOfClicks + 1);
    return (
        <>
        <p>You clicked the buttton {numberOfClicks} times</p>
            <Button onClick={onIncrement}> Click me!</Button>
        </>
    );
}