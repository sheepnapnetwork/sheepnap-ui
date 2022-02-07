import React from "react";
import AccommodationCard from "../Components/AccommodationCard";
import '../scss/search-page.scss'
import '../scss/filters.scss'
function SearchPage()
{
    const accommodations = [
        {
            id : 0, 
            name : "Lorem Ipsum is simply dummy text of the printing", 
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            images : ['https://via.placeholder.com/150' , 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],  
            location : "Manizales/Caldas",
            priceFrom : 3800,
            reviews : 300,
            rating : 10
        },
        {
            id : 1, 
            name : "Lorem Ipsum is simply dummy text of the printing", 
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            images : ['https://via.placeholder.com/150' , 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],  
            location : "Manizales/Caldas",
            priceFrom : 3800,
            reviews : 300,
            rating : 10
        },
        {
            id : 2, 
            name : "Lorem Ipsum is simply dummy text of the printing", 
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            images : [ 'https://via.placeholder.com/150' , 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],  
            location : "Manizales/Caldas",
            priceFrom : 3800,
            reviews : 300,
            rating : 10
        },{
            id : 0, 
            name : "Lorem Ipsum is simply dummy text of the printing", 
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            images : ['https://via.placeholder.com/150' , 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],  
            location : "Manizales/Caldas",
            priceFrom : 3800,
            reviews : 300,
            rating : 10
        },
        {
            id : 0, 
            name : "Lorem Ipsum is simply dummy text of the printing", 
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            images : ['https://via.placeholder.com/150' , 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],  
            location : "Manizales/Caldas",
            priceFrom : 3800,
            reviews : 300,
            rating : 10
        },
        {
            id : 0, 
            name : "Lorem Ipsum is simply dummy text of the printing", 
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            images : ['https://via.placeholder.com/150' , 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],  
            location : "Manizales/Caldas",
            priceFrom : 3800,
            reviews : 300,
            rating : 10
        },
        {
            id : 0, 
            name : "Lorem Ipsum is simply dummy text of the printing", 
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            images : ['https://via.placeholder.com/150' , 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],  
            location : "Manizales/Caldas",
            priceFrom : 3800,
            reviews : 300,
            rating : 10
        },
      ]

    return (
    <div>
        <div className="filters-container container">
            <input type="text" placeholder="Search by location or property name" />
        </div>
        <div className="accom-container container">
        { accommodations.map(rq => <AccommodationCard accommodation={rq}/>) }
        </div>
    </div>)
}

export default SearchPage;