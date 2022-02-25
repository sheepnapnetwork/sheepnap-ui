import React, { useEffect, useState } from "react";
import PropertyCard from "../Components/PropertyCard";
import '../scss/search-page.scss'
import '../scss/filters.scss'
import config from "../config.json";


function SearchPage() {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch(config.endpoint + 'property/GetPropertiesForHomePage')
            .then(response => response.json())
            .then(data => { setProperties(data); });

    }, []);

    return (
        <div>
            <div className="filters-container container">
                <input type="text" placeholder="Search by location or property name" />
            </div>
            <div className="accom-container container">
                {properties.map(rq => <PropertyCard property={rq} />)}
            </div>
        </div>)
}

export default SearchPage;