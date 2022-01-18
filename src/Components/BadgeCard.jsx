import React from "react";

function BadgeCard({ badge }) {
    
    const handleVote = () =>
    {

    }

    const leaveComment =() => {

    }

    return (<div>
        <div>
            <b>{ badge.name }</b>
        </div>
        <img src={badge.src} />
        <div>
            { badge.description }
        </div>

        <button onClick={handleVote}>Buy</button>
        <hr/>
    </div>)
}

export default BadgeCard;