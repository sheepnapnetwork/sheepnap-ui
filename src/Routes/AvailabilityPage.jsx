import React, { useState } from "react";
import { useEffect } from "react";

function AvailabilityPage({ wallet })
{
    const [approvalRequests, setApprovalRequests] = useState([]);
    let { propertyAddress,  } = useParams();

    useEffect(() => 
    {
        fetch(config.endpoint + 'approvalrequest/approvalrequests')
        .then(response => response.json())
        .then(data => { setApprovalRequests(data); });
    }, []);

    useEffect(() => 
    {
        fetch(config.endpoint + '/nft/')
        .then(response => response.json())
        .then(data => { setApprovalRequests(data); });

    }, []);

    return (
    <div className="container">
        <h1>Approval requests</h1>

        <div className="proposal-container">
            { approvalRequests.map(rq => <ApprovaRequestCard approvalRequest={rq}/>) }
        </div>
    </div>)
}

export default ApprovalRequestPage;