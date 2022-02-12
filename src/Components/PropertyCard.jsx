import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

function PropertyCard({ property }) {
    
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/accommodationdetail', {replace: true}), [navigate]);

    return (
        <div className="acco-card" id={property.address} onClick={handleOnClick}>
        <div className='acco-card_imgs'>
            {
                property.Images.map(im => <img src ={ im.url } />)
            }
        </div>
        <div className='acco-card_name'>{ property.name }</div>
        <div className='acco-card_info'>{ property.location }</div>
        <div className='acco-card_info'>{ property.rating } ({ property.reviews } reviews)</div>
        <div className='acco-card_price'>${ property.priceFrom }</div>
    </div>)
}

export default PropertyCard;