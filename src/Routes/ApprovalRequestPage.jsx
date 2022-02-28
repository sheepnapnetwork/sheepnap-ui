import React, { useState } from "react";
import ApprovaRequestCard from "../Components/ApprovalRequestCard";
import { useEffect } from "react";
import config from "../config.json";
import { Link } from "react-router-dom";
import ApprovalRequestCreatePage from "./ApprovalRequestCreatePage";
import '../scss/approval-rq.scss';
import {useNavigate} from 'react-router-dom';
import ApprovalRqDetail from "./ApprovalRqDetail"

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

        <Link to="/request" element={<ApprovalRequestCreatePage/>}>Create Request</Link>

        <div className="proposals-container">
            { approvalRequests.map(rq => <ApprovaRequestCard approvalRequest={rq}/>) }

            <div className='proposal-card' onClick={navigate('/approvalRqDetail')}>
                <div className='propo-card_name'>
                    Lorem ipsum
                </div>
                <div className="propo-card_comments">
                    105 comments
                </div>

                <div className="propo-card_total-votes">
                    Total votes: 61
                </div>
                <div className="propo-card_votes">
                    <div>
                        Yes: 51
                    </div>
                    <div>
                        No: 10
                    </div>
                </div>
                <Link to="/approvalRqDetail" element={<ApprovalRqDetail/>}>Create Request</Link>
            </div>
        </div>
    </div>)
}

export default ApprovalRequestPage;