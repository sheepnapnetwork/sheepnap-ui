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
                element
            </div>
            <div className="filter-item">
                element
            </div>
            <div className="filter-item">
                element
            </div>
            <div className="filter-item">
                element
            </div>
            <div className="filter-item">
                element
            </div>
            <div className="filter-item">
                element
            </div>

            <div className="sort-by ">
                <label htmlFor="">Sort-by</label>
                <select name="Select" id="">
                    <option value="">1</option>
                    <option value="">1</option>
                    <option value="">1</option>
                </select>
            </div>
        </div>
                <input type="text" placeholder="Search by location or property name" />
            </div>
            <div className="accom-container container">
                {properties.map(rq => <PropertyCard property={rq} />)}
            </div>
        </div>)
}

export default SearchPage;