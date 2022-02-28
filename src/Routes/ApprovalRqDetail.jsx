import React, { useState } from "react";
import "../scss/layout.scss"
import "../scss/approval-rq-detail.scss"


function ApprovalRqDetail (){
    return (
        <div className="container">
            <div className="approval_rq-container">
                <div>
                    <h1>Lorem</h1>
                    <p>This vote is to elect three stewards for the Public Goods working group for the Q1/Q2 2022 term, which begins immediately after this vote concludes, and is conducted in accordance with EP4.

                        Elections are conducted by ranked choice instant-runoff voting. To vote, rank candidates in your preferred order, with the candidate you most want to see elected as a steward ranked first. If you would prefer a seat be left empty rather than filled by a particular candidate, rank the candidate below the "[No Further Entries]" entry.

                        At the conclusion of voting, the three candidates ranked highest will be elected as stewards of this working group for the Q1/Q2 2022 term. If "[No Further Entries]" is ranked in the top 3, that seat and any below it will remain empty.

                        A list of candidates, with links to their position statements and social profiles is included below. The list has been randomly shuffled.
                    </p>
                </div>
                <div className="approval_rq-aside">
                    <div className="approval_rq-aside-information">
                        <h4>Information:</h4>
                        <div></div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default ApprovalRqDetail;