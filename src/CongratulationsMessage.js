import React, {useEffect} from 'react';

export const CongratulationsMessage = ({numberOfClicks, threshold, onHide})=>{
    useEffect(()=>{
        return ()=> console.log('CongratulationsMessage unmounting');
    }, [] );
    return numberOfClicks >= threshold
    ?<>
         <h1>Congrats youeve reached {threshold} number of clicks </h1>
         <button onClick={onHide} >Hide</button>
    </>
    : null;
}