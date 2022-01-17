import React from "react";
import ProposalCard from "../Components/Request";

function SearchPage()
{
    const accommodations = [
        { name : "request 1", description : 'This is the description 1' },
        { name : "request 2", description : 'This is the description 2' },
        { name : "request 3", description : 'This is the description 3' }
      ]

    return (
    <div>
        <h1>Search page</h1>
        <div className="accom-container">
        { accommodations.map(rq => <ProposalCard request={rq}/>) }
        </div>
    </div>)
}

export default RequestPage;