import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

function ApprovaRequestCard({ approvalRequest }) {
    
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/approvalrequestsdetail', {replace: true}), [navigate]);

    return (
    <div className='proposal-card' onClick={handleOnClick}>
        <div className='propo-card_name'>
            { approvalRequest.property }
        </div>
        <div className="propo-card_comments">
            { approvalRequest.comments } comments
        </div>

        <div className="propo-card_total-votes">
            Total votes: { approvalRequest.totalvotes  }
        </div>
        <div className="propo-card_votes">
            <div>
                Yes: { approvalRequest.voteyes }
            </div>
            <div>
                No: { approvalRequest.voteyes }
            </div>
        </div>
            {approvalRequest.active}
    </div>)
}

export default ApprovaRequestCard;