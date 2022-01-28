import React from "react";

function ProposalCard({ request }) {

    return (<div>
        <div><b>{ request.name }</b></div>
        <div>{ request.description }</div>
        <div>
            Comments : { request.comments }
        </div>

        <div>
            <h3>Information</h3>
            yes : { request.voteyes }
            no : { request.voteyes }
            Total Votes : { request.totalvotes  }
            End Date : { request.endDate }
        </div>
        <br/>
        <hr/>
    </div>)
}

export default ProposalCard;