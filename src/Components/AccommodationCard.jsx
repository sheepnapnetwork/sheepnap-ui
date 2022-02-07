import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

function AccommodationCard({ accommodation }) {
    

/*     id : 0, 
    name : "Lorem Ipsum is simply dummy text of the printing", 
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images : 'https://via.placeholder.com/150',  
    location : "Manizales/Caldas",
    priceFrom : 3800,
    reviews : 300,
    rating : 10 */

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/accommodationdetail', {replace: true}), [navigate]);

    return (
    <div className="acco-card" id={accommodation.id} onClick={handleOnClick}>
        <div className='acco-card_imgs'>
            {
                accommodation.images.map(im => <img src ={ im } />)
            }
        </div>
        <div className='acco-card_name'>{ accommodation.name }</div>
        <div className='acco-card_info'>{ accommodation.location }</div>
        <div className='acco-card_info'>{ accommodation.rating } ({ accommodation.reviews } reviews)</div>
        <div className='acco-card_price'>${ accommodation.priceFrom }</div>
    </div>)
}

export default AccommodationCard;