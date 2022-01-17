import React from "react";

function AccommodationCard({ accommodation }) {
    
    const handleVote = () =>
    {

    }

    const leaveComment =() => {

    }

    return (<div>
        <div><b>{ accommodation.name }</b></div>
        <div>{ accommodation.description }</div>

        <button onClick={handleVote}>Yes</button>
        <button onClick={handleVote}>No</button>
        <br/>
        <input type="text" />
        <button onClick={leaveComment}>Leave comment</button>
        <hr/>
    </div>)
}

export default AccommodationCard;