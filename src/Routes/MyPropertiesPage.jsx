import React, { useState, useEffect } from "react";
import config from "../config.json";
import MyPropertyCard from "../Components/MyPropertyCard";


function MyPropertiesPage({ wallet }) {

    const [properties, setProperties] = useState([]);

    useEffect(() => 
    {
        if(wallet == ""){
            return;
        }

        fetch(config.endpoint + 'property/properties/owner/' + wallet)
        .then(response => response.json())
        .then(data => { setProperties(data); });

    }, [wallet]);

    return (
        <div>
            <h1>My properties</h1>
            <div>
            {properties.map(properties => <MyPropertyCard property={properties} />)}
            </div>
        </div>)
}

export default MyPropertiesPage;