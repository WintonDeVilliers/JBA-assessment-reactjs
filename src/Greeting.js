import React from 'react'; // in any file where we use JSX we need to import React 

// function Greeting(){
//     let isMorning = (new Date()).getHours() < 12;
//     return isMorning
//         ?<h3>Good Morning</h3>
//         :<h3>Good Evening</h3>;
// }
// export default Greeting;


// function Greeting() {
//     let isMorning = (new Date()).getHours() < 12;
//     return isMorning
//         ? (
//             <> 
//                 <h3>Good Morning</h3>
//                 <p>You have 5 new messages</p>
//             </>
//           )
//         : (
//             <>
//                 <h3>Good Morning</h3>
//                 <p>You have 5 new messages</p>
//             </>
//           );
// }
// export default Greeting;
export const Greeting = () =>  {
    let isMorning = (new Date()).getHours() < 12;
    return isMorning
        ? (
            <>
                <h3>Good Morning</h3>
                <p>You have 5 new messages</p>
            </>
        )
        : (
            <>
                <h3>Good Morning</h3>
                <p>You have 5 new messages</p>
            </>
        );
}
export default Greeting;