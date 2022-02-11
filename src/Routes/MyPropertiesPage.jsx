import React, { useState, useEffect } from "react";
import config from "../config.json";

function MyPropertiesPage({ wallet }) {

    const [properties, setProperties] = useState([]);

    useEffect(() => 
    {
        fetch(config.endpoint + 'property/properties/' + wallet)
        .then(response => response.json())
        .then(data => { console.log(data); setProperties(data); });
    }, [wallet]);

    return (
        <div>
            <h1>My properties</h1>
            <div className="properties-container">
                {properties.map(prop => <h1>Propiedad</h1>)}
            </div>
        </div>)
}

export default MyPropertiesPage;