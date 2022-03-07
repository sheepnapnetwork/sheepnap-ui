import React, { useState } from "react";
import ApprovaRequestCard from "../Components/ApprovalRequestCard";
import { useEffect } from "react";
import config from "../config.json";
import { Link } from "react-router-dom";
import ApprovalRequestCreatePage from "./ApprovalRequestCreatePage";
import {useNavigate} from 'react-router-dom';

function ApprovalRequestPage({ wallet })
{

    const navigate = useNavigate();
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

        <Link to="../create" element={<ApprovalRequestCreatePage/>}>Create Request</Link>

        <div className="proposals-container">
            { approvalRequests.map(rq => <ApprovaRequestCard approvalRequest={rq}/>) }
        </div>
    </div>)
}

export default ApprovalRequestPage;