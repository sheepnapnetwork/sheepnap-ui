import React, { useState, useEffect } from "react";
import BadgeCard from "../Components/BadgeCard";
import { Link } from "react-router-dom";
import config from "../config.json";

function BadgesPage()
{
    const [badges, setBadges]= useState([]);

    useEffect(() => 
    {
        fetch(config.endpoint + 'badge/badge/')
        .then(response => response.json())
        .then(data => { setBadges(data); });
    }, []);

    return (
    <div>
        <h1>Bagdes</h1>
        <Link to="/request" >Create Badge</Link> | {" "}
        <div className="proposal-container">
        { badges.map(bg => <BadgeCard badge={bg}/>) }
        </div>
    </div>)
}

export default BadgesPage;