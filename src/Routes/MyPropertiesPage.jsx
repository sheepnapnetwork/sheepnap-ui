import React, { useState, useEffect } from "react";
import config from "../config.json";

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
                {properties.map(p => <table>
                    <tr>
                        <td>Name : </td>
                        <td>{p.name}</td>
                    </tr>
                    <tr>
                        <td>Description : </td>
                        <td>{p.description}</td>
                    </tr>
                </table>)}
            </div>
        </div>)
}

export default MyPropertiesPage;