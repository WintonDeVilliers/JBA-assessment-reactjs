import React, { useState } from "react";

export function NameFormPage(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const requiredFields = {
            A: ["dob", "idNumber", "gender"],
            B: ["address"],
            C: ["provinces", "schools", "grades"],
            D: ["serialNumber", "imei"]
        }

        let text = [];
        for (let x in requiredFields) {
            text.push(requiredFields[x]);
        }

        
        // extract requiredFields
        let tex3t = [];
        for (var i =0; i < text.length; i++) {
            let s = text[i];
            for(var c =0 ; c< s.length;c++)
            {
                tex3t.push(s[c]);
            }
        }

        try{
            var inputObject = JSON.parse(name);
            const myObject = inputObject.profile;

            // determine requireFields
            const extractedFields = tex3t;

            for (var i = 0; i < extractedFields.length; i++) {
                if (myObject.hasOwnProperty(extractedFields[i])) {
                    if (myObject[extractedFields[i]] == null || myObject[extractedFields[i]] === undefined) {
                        myObject[extractedFields[i]] = "Updated"
                    }
                }
            }

            alert(`myObject Updated :  ${JSON.stringify(myObject)}`)
        }
        catch{
            alert(`Not a valid JSON Object :  ${inputObject}`);

        }
        
    }
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