import React, { useState } from "react";
import ApprovaRequestCard from "../Components/ApprovalRequestCard";
import { useEffect } from "react";
import config from "../config.json";
import { Link } from "react-router-dom";
import ApprovalRequestCreatePage from "./ApprovalRequestCreatePage";
import '../scss/approval-rq.scss';
function ApprovalRequestPage({ wallet })
{
    const [approvalRequests, setApprovalRequests] = useState([]);

    useEffect(() => 
    {
        fetch(config.endpoint + 'approvalrequest/approvalrequests')
        .then(response => response.json())
        .then(data => { setApprovalRequests(data); });
    }, []);

    return (
    <div className="container">
        <h1>Approval requests</h1>

        <Link to="/request" element={<ApprovalRequestCreatePage/>}>Create Request</Link>

        <div className="proposal-container">
            { approvalRequests.map(rq => <ApprovaRequestCard approvalRequest={rq}/>) }
        </div>
    </div>)
}

export default ApprovalRequestPage;