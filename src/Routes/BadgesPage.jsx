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
                <div className="badge-card">
                    <div className="badge-card-image"><img src="https://okdiario.com/img/2020/01/22/ovejas.jpg" alt="" /></div>
                    <div className="badge-card-info">
                        <div>
                            <div className="badge-card-name">Isignia por servicio</div>
                            <div className="badge-card-code">#3332</div>
                        </div>
                        <div>
                            <div className="badge-card-price">$96.00</div>
                            <div className="badge-card-desc">Califico</div>
                        </div>
                    </div>


                </div>

                <div className="badge-card">
                    <div className="badge-card-image"><img src="https://okdiario.com/img/2020/01/22/ovejas.jpg" alt="" /></div>
                    <div className="badge-card-info">
                        <div>
                            <div className="badge-card-name">Isignia por servicio</div>
                            <div className="badge-card-code">#3332</div>
                        </div>
                        <div>
                            <div className="badge-card-price">$96.00</div>
                            <div className="badge-card-desc">Califico</div>
                        </div>
                    </div>
                </div>

                <div className="badge-card">
                    <div className="badge-card-image"><img src="https://okdiario.com/img/2020/01/22/ovejas.jpg" alt="" /></div>
                    <div className="badge-card-info">
                        <div>
                            <div className="badge-card-name">Isignia por servicio</div>
                            <div className="badge-card-code">#3332</div>
                        </div>
                        <div>
                            <div className="badge-card-price">$96.00</div>
                            <div className="badge-card-desc">Califico</div>
                        </div>
                    </div>

                </div>
                <div className="badge-card">
                    <div className="badge-card-image"><img src="https://sheepnap.network/img/header.png" alt="" /></div>
                    <div className="badge-card-info">
                        <div>
                            <div className="badge-card-name">Isignia por servicio</div>
                            <div className="badge-card-code">#3332</div>
                        </div>
                        <div>
                            <div className="badge-card-price">$96.00</div>
                            <div className="badge-card-desc">Califico</div>
                        </div>
                    </div>
                </div>

                {badges.map(bg => <BadgeCard badge={bg} />)}
            </div>
        </div>)
}

export default BadgesPage;