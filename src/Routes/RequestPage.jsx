import React from "react";
import ProposalCard from "../Components/Request";
import { Link } from "react-router-dom";

function RequestPage()
{
    const requests = [
        { name : "request 1", description : 'This is the description 1' },
        { name : "request 2", description : 'This is the description 2' },
        { name : "request 3", description : 'This is the description 3' }
      ]


    return (
    <div>
        <h1>Proposals</h1>
        <div className="statistics">
            <b>Information</b>
        </div>
        <div className="current">
            <b>Current results</b>
        </div>
        <Link to="/request" element={<RequestPage/>}>Create Request</Link> | {" "}
        <div className="proposal-container">
        { requests.map(rq => <ProposalCard request={rq}/>) }
        </div>
    </div>)
}

export default RequestPage;