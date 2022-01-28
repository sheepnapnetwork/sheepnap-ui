import React from "react";
import { Link } from "react-router-dom";
import BookenCard from "../Components/BookenCard";

function AccommodationDetailPage({ accommodation })
{
    const accomodationDetail = 
    { 
        name : "Accommodation name", 
        description : 'This is the description 1',
        images : [
            "https://via.placeholder.com/300",
            "https://via.placeholder.com/300",
        ],
        bookens : [
            {
                roomName : 'Room Name',
                roomType : 'Double',
                minAdults : 2,
                maxAdults : 2,
                checkIn : 'dateFrom',
                checkOut : 'dateTo',
                pricePerAdult : 100,
                additionalAdult : 10,
            },
            {
                roomName : 'Room Name Two',
                roomType : 'Double',
                minAdults : 2,
                maxAdults : 2,
                checkIn : 'dateFrom',
                checkOut : 'dateTo',
                pricePerAdult : 100,
                additionalAdult : 10,
            },
            {
                roomName : 'Room Name Three',
                roomType : 'Double',
                minAdults : 2,
                maxAdults : 2,
                checkIn : 'dateFrom',
                checkOut : 'dateTo',
                pricePerAdult : 100,
                additionalAdult : 10,
            }
        ]
    };

    return (
    <div>
        <h1>{accomodationDetail.name}</h1>
        <div>
            <p>
                {accomodationDetail.description}
            </p>
        </div>
        <div>
            { accomodationDetail.images.map(img => <img src ={ im } />) }
        </div>
        <h3>Bookens</h3>
        <div>
            { accomodationDetail.bookens.map(bkn => <BookenCard booken={bkn} /> ) }
        </div>
    </div>)
}

export default AccommodationDetailPage;