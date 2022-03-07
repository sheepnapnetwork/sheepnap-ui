import React, { useState, useEffect } from "react";
import BadgeCard from "../Components/BadgeCard";
import { Link } from "react-router-dom";
import config from "../config.json";
import "../scss/badge.scss"
import "../scss/layout.scss"

function BadgesPage() {
    const [badges, setBadges] = useState([]);

    useEffect(() => {
        fetch(config.endpoint + 'badge/badge/')
            .then(response => response.json())
            .then(data => { setBadges(data); });
    }, []);

    

    return (
        <div>
            <div className="badge-header">
                <div className="container ">
                    <h2>Bagdes</h2>
                </div>
            </div>
            <div>
            </div>
            <div className="container proposal-container">
                {badges.map(bg => <BadgeCard badge={bg} />)}
            </div>
            
        </div>)
}

export default BadgesPage;