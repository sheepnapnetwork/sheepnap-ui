import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function ApprovaRequestCard({ approvalRequest }) {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/approvalrequestsdetail', { replace: true }), [navigate]);

    return (
            <div className='proposal-card' onClick={navigate('/approvalrequest/detail')}>
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
            </div>)
}

export default ApprovaRequestCard;