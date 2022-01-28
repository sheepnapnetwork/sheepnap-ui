import React from "react";
import BookenCard from "../Components/BookenCard";
import { Link } from "react-router-dom";

function MyBookingsPage()
{
    const bookens = [
        { 
            name : "Booken 1", 
            datefrom : 'This is the description 1', 
            dateto : 'https://via.placeholder.com/150',
            adults : 1,
            propierty : 'addressproperty',
        }
      ]

    return (
    <div>
        <h1>My Bookens</h1>
        <div className="booken-container">
        { bookens.map(bkn => <BookenCard booken={bkn}/>) }
        </div>
    </div>)
}

export default MyBookingsPage;