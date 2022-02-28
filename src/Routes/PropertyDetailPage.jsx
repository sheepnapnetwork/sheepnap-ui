import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from "../config.json";

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
    <div>
        <table style={{"border" : "1px solid", "width":"100%"}}>
            <tr>
                <td>Address</td>
                <td>
                    {property.address}
                </td>
            </tr>
            <tr>
                <td>Name</td>
                <td>
                    {property.name}
                </td>
            </tr>
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
            <tr>
                <td>Images</td>
                <td>
                    {property.Images.map(im => <img style={{"width" : "150px"}} src={im.url}></img>)}
                </td>
            </tr>

        </table>
    </div>)
}

export default PropertyDetailPage;