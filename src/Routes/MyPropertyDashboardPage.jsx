import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import config from "../config.json";
import { useParams, useNavigate } from 'react-router-dom';

function MyPropertyDashboardPage({wallet}) 
{
    const [property, setProperty] = useState({});
    let { propertyaddress } = useParams();

    useEffect(() => 
    {
        fetch(config.endpoint + 'property/property/' + propertyaddress)
            .then(response => response.json())
            .then(data => { setProperty(data); });
    }, [wallet]);


    const navigate = useNavigate();
    const handleGotoAvailabilityButton = useCallback(() => navigate('../availability/' + propertyaddress, { replace: true }), [navigate]);

    return (<div>
        <h1>My Property dashboard</h1>
        <table style={{border: "1px solid"}}>
        <tr>
            <td>
                Address :
            </td>
            <td>
                {property.address}
            </td>
        </tr>
        <tr>
            <td>
                Name :
            </td>
            <td>
                {property.name}
            </td>
        </tr>
        <tr>
            <td>Description :</td>
            <td>
                {property.description}
            </td>
        </tr>
        <tr>
            <td>
                Metadata reference :
            </td>
            <td>
                {property.metadatareference}
            </td>
        </tr>
        <tr>
            <td>
                Trust level :
            </td>
            <td>
                {property.trustlevel}
            </td>
        </tr>
        <tr>
            <td>
                Images :
            </td>
            <td>
                {property.Images?.map(i => <img src={i} />)}
            </td>
        </tr>
        <tr>
            <td>
                <button onClick={handleGotoAvailabilityButton}>
                    Go to Availability Dashboard
                </button>
            </td>
        </tr>
    </table>
    </div>)
}

export default MyPropertyDashboardPage;