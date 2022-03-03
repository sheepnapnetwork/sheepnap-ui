import React, { useEffect, useState } from "react";
import PropertyCard from "../Components/PropertyCard";
import '../scss/search-page.scss'
import '../scss/filters.scss'
import config from "../config.json";


function SearchPage() {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch(config.endpoint + 'property/propertieshomepage')
            .then(response => response.json())
            .then(data => { setProperties(data); });

    }, []);

    return (
        <div>
            <div className="filters-container container">
                <div className="filters-list">
                    <div className="filter-item">
                        Cabins
                    </div>
                    <div className="filter-item">
                        Apartments
                    </div>
                    <div className="filter-item">
                        Farms
                    </div>
                    <div className="filter-item">
                        Beachfront
                    </div>

                    <div className="sort-by ">
                        <label htmlFor="">Sort-by</label>
                        <select name="Select" id="">
                            <option value="">Price</option>
                            <option value="">Rating</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="accom-container container">
                {properties.map(rq => <PropertyCard property={rq} />)}
            </div>
        </div>)
}

export default SearchPage;