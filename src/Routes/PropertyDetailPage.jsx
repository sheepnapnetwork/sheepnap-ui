import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from "../config.json";
import '../scss/layout.scss';
import '../scss/property-detail-page.scss'

function PropertyDetailPage()
{
    let { propertyaddress } = useParams();

    const [property, setProperty] = useState({ Images : [] });

    useEffect(() => {
        fetch(config.endpoint + 'property/property/' + propertyaddress)
            .then(response => response.json())
            .then(data => { setProperty(data); });
    }, []);

    return (
    <div className='container'>
        <div>
            <h2>{property.name}</h2>
            <small>{property.address}</small>
        </div>
        
        <div className='property-images'>
            {property.Images.map(im => <img src={im.url}></img>)}
        </div>

        <tr>
            <td>description</td>
            <td>
                {property.description}
            </td>
        </tr>
        <tr>
            <td>reviews</td>
            <td>
                {property.reviews}
            </td>
        </tr>
        <tr>
            <td>trustlevel</td>
            <td>
                {property.trustlevel}
            </td>
        </tr>
        <tr>
            <td>rating</td>
            <td>
                {property.rating}
            </td>
        </tr>

    </div>)
}

export default PropertyDetailPage;