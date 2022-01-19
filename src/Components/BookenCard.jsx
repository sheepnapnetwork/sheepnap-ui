import React from "react";
import Web3 from "web3";

function BookenCard({ booken }) {
    
/* 
    roomName : 'Room Name Two',
    roomType : 'Double',
    minAdults : 2,
    maxAdults : 2,
    checkIn : 'dateFrom',
    checkOut : 'dateTo',
    pricePerAdult : 100,
    additionalAdult : 10, */

    const handleBuy = async () => 
    {
        var chainId = await window.web3.eth.getChainId();
        alert(chainId);
    }

    return (<div>
        <div>
            <b>Room Name</b> : { booken.roomName }
        </div>
        <div>
            <b>Room type</b> : { booken.roomType }
        </div>
        <button onClick={handleBuy}>
            Buy Booken
        </button>
        <hr/>
    </div>)
}

export default BookenCard;