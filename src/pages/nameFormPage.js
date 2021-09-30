import React, { useState } from "react";

export function NameFormPage(props) {
    const [name, setName] = useState(""); // state variable

    const handleSubmit = (evt) => {  // this will be out handle submit ,"tied" with onSubmit below..so it will execute  after submit button is clicked.

        evt.preventDefault(); // prevent refresh

        const requiredFields = {  //compare to these required fields, such that, if json object does not have a value for one of these=>we must update
            A: ["dob", "idNumber", "gender"],
            B: ["address"],
            C: ["provinces", "schools", "grades"],
            D: ["serialNumber", "imei"]
        }

        let text = [];  // we push out required fields into an array called text
        for (let x in requiredFields) {
            text.push(requiredFields[x]);
        }
        console.log(text)

        
        // extract requiredFields
        let tex3t = [];
        for (var i =0; i < text.length; i++) {
            let s = text[i];
            for(var c =0 ; c< s.length;c++)
            {
                tex3t.push(s[c]);
            }
            console.log(s)
        }

        try{
            var inputObject = JSON.parse(name); // to convert text into a JavaScript object:
            const myObject = inputObject.profile;

            // determine requireFields
            const extractedFields = tex3t;
            // iterate through feilds and conduct comparison 
            for (var index = 0; index < extractedFields.length; index++) {
            // MDN docs The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property...
                if (myObject.hasOwnProperty(extractedFields[index])) { 
                    if (myObject[extractedFields[ index]] == null || myObject[extractedFields[index]] === undefined) {
                        myObject[extractedFields[ index]] = "Updated"
                    }
                }
            }

            alert(`myObject Updated :  ${JSON.stringify(myObject)}`)  // updated output reflected by this alert window
        }
        catch{
            alert(`Not a valid JSON Object :  ${inputObject}`);  // if the textbox input is not a Json object, this output will show via alert window

        }  
    }
    /* 
    The code below is responsible for displaying a for with a textbox window "inside" of it(textarea is used so we can drag the window to resize)
    tooltip will display tooltiptext(line67) when the mouse hovers over the words input object (line 66)
    */
    return (
        <form onSubmit={handleSubmit}>
        <div>   
            <div> 
                <div class="tooltip">Input Object
                    <span class="tooltiptext">Insert a valid JSON Object</span>
                </div>
            </div>
                <div>
                    <textarea cols="50" rows="20" id="textboxid"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
        </div>
            <input type="submit" value="Submit" />
        </form>
    );
}