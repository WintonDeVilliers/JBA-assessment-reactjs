import React, {useState} from 'react';

export const CounterButton = ({onIncrement ,numberOfClicks}) => {
    // const [numberOfClicks,setNumberOfClicks] = useState(0);
    // const increment = () => setNumberOfClicks(numberOfClicks + 1);
    return (
        <>
        <p>You clicked the buttton {numberOfClicks} times</p>
            <button onClick={onIncrement}> Click me!</button>
        </>
    );
}