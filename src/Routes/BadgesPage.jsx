import React from "react";
import BadgeCard from "../Components/BadgeCard";
import { Link } from "react-router-dom";

function BadgesPage()
{
    const badges = [
        { name : "Badge 1", description : 'This is the description 1', src : 'https://via.placeholder.com/150' },
        { name : "Badge 2", description : 'This is the description 2', src : 'https://via.placeholder.com/150'  },
        { name : "Badge 3", description : 'This is the description 3', src : 'https://via.placeholder.com/150'  }
      ]

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