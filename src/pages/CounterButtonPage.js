import React, {useState} from 'react';
import { useLocation} from 'react-router';
import {parse} from 'query-string';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';

export const CounterButtonPage = () => {
    // const {name} = useParams(); // how we get our url parameter 'out of' useParams
    const location = useLocation();
    const startingValue = parse(location.search).startingValue;
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
    const [hideMessage, setHideMessage] = useState(false);
    const increment = () => setNumberOfClicks(numberOfClicks + 1);
    
    return (

        <>
        <h1>The Counter Button Page</h1>
                {hideMessage
                ? null
                : <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={10} onHide={() => setHideMessage(true)} />}
            <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
       </> 
    );      
}