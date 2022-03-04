import React, {useCallback} from 'react';
import { useNavigate } from "react-router-dom";



function MyPropertyCard({ property }) 
{    
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/property/dashboard/'+ property.address, {replace: true}), [navigate]);

    // async function goToDashBoard(propertyaddress)
    // {
    //     navigate(`/property/${propertyaddress}`);
    // }

    return (
        <div className='proposal-card' onClick={handleOnClick}>
        <div className='propo-card_name'>
            { property.name}
        </div>
        <div className="propo-card_comments">
            { property.address } 
        </div>
    </div>
    )
}

export default MyPropertyCard;