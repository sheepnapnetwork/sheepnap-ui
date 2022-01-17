import React from "react";

function ProposalCard({ request }) {
    
    const handleVote = () =>
    {

    }

    const leaveComment =() => {

    }

    return (<div>
        <div><b>{ request.name }</b></div>
        <div>{ request.description }</div>

        <button onClick={handleVote}>Yes</button>
        <button onClick={handleVote}>No</button>
        <br/>
        <input type="text" />
        <button onClick={leaveComment}>Leave comment</button>
        <hr/>
    </div>)
}

export default ProposalCard;