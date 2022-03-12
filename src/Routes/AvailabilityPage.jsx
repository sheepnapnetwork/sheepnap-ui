import React, { useState } from "react";
import { useEffect } from "react";
import config from "../config.json"
import {useParams} from 'react-router-dom';
import RoomTypeCard from "../Components/RoomtypesCard"


function AvailabilityPage({ wallet })
{
    const [roomTypes, setRoomTypes] = useState([]);
    const { propertyaddress } = useParams();

    useEffect(() => 
    {
        fetch(config.endpoint + 'roomType/roomType/'+ propertyaddress)
        .then(response => response.json())
        .then(data => { console.log(data); setRoomTypes(data); });
        console.log(propertyaddress)
    }, []);
    // useEffect(() => 
    // {
    //     //TODO: get room types from contract
        
    //     setRoomTypes();

    // }, [wallet]);

    useEffect(() => 
    {
        //TODO: get already emited NFT

    }, [wallet]);


    return (
    <div className="container">
        <h1>Availability Page</h1>


        <h3>Room Types</h3>
        <table>
            <tr>
                <td>
                    RoomTypes :
                </td>
                <td>
                {wallet !== "" ? roomTypes.map(roomtype => <RoomTypeCard roomtype={roomtype} />): (<h1>Don't have any roomtype</h1>)}
                    {/* { roomTypes.length > 0 ? roomTypes : "Loading" } */}
                </td>
            </tr>
        </table>


        <table>
            <tr>
                
            </tr>
        </table>
    </div>)
}

export default AvailabilityPage;