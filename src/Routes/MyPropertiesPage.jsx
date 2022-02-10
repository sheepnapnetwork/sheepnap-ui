import React, { useState, useEffect } from "react";
import config from "../config.json";

function MyPropertiesPage() {

    const [properties, setProperties] = useState([]);

    useEffect(() => 
    {
        fetch(config.endpoint + '/property/propertybyaddress/address')
        .then(response => response.json())
        .then(data => { console.log(data); setProperties(data); });
    }, []);

    return (
        <div>
            <h1>My properties</h1>
            <div className="properties-container">
                {properties.map(prop => <h1>Propiedad</h1>)}
            </div>
        </div>)
}

export default MyPropertiesPage;