import React, {useCallback} from 'react';
import { useNavigate } from 'react-router-dom';


function RoomCard ({roomtype}){
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=>navigate('/availability', {property: roomtype.property, replace : true }),[navigate]);

    return (
        <div className="acco-card" id={roomtype.property} onClick={handleOnClick}>
        {/* <div>{ roomtype.Images ?  roomtype.Images.map(im => <img src ={ im.url } />):(<h2>{roomtype.property}</h2>)}</div> */}
        <div className='acco-card_name'>Code: { roomtype.roomType_code }</div>
        <div className='acco-card_info'>Description: { roomtype.roomType_description }</div>
        <div className='acco-card_info'>Property Address: { roomtype.roomType_propertyAddress}</div>
        <br></br>
        </div>
    )

}
export default RoomCard; 