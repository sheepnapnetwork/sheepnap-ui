import React, { useState} from "react";

function AccommodationCreate()
{
    const [name, setName] = useState("");

    const createAccommodation = () => {
        //web3
        alert('Emitted Booken');

        //if transaction confirmed.
        //Api call
    }

    return (
    <div>
        <h1>Create property  </h1>
        <p>
            Wanna be a host? 
            after you create the stay contract your information will go through
            a revision process where the community will vote if your stay
            has the necessary information to be part of Sheepnap.

            This process has a fee to be paid.
            yo will find the token here.
            <link rel="stylesheet" href="www.google.com" />

            <p>
            Information nedded :
            
            - Photos
            - WebPage
            - Room pictures
            - Location Pictures
            - Contact number
            </p>
        </p>
        Accommodation name : <input type="text" /><br/>

        <textarea 
        name="" 
        id="" 
        cols="100" 
        rows="10" 
        placeholder="Provide information about your accommodation">

        </textarea><br/>
        <button onClick={createAccommodation}>
            Initialize voting process
        </button>
    </div>)
}

export default AccommodationCreate;