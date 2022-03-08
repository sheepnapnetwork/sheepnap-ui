import React, { useState } from "react";
import { useEffect } from "react";

function AvailabilityPage({ wallet })
{
    const [roomTypes, setRoomTypes] = useState([]);
    
    useEffect(() => 
    {
        //TODO: get room types from contract
        
        setRoomTypes();

    }, [wallet]);

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
                    { roomTypes.length > 0 ? roomTypes : "Loading" }
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