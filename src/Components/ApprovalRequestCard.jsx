import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

function ApprovaRequestCard({ approvalRequest }) {
    
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/approvalrequestsdetail', {replace: true}), [navigate]);

    return (<div onClick={handleOnClick}>
        <div>
            { approvalRequest.property }
        </div>
        <div>
            <b>{ approvalRequest.description }</b>
        </div>
            {approvalRequest.active}
        <hr/>
    </div>)
}

export default ApprovaRequestCard;