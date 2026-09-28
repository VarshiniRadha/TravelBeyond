import React from "react";
import "../styles/Luxury.css";

import swiz from "../assets/swiz.jpg";
import dubai from "../assets/dubai.jpg";
import paris from "../assets/paris.jpg";
import artic from "../assets/artic.jpg";

const luxuryPackages = [
    {
        id: 1,
        image: swiz,
        title: "Swiss Wounders",
        location: "Switzerland",
        duration: "7 Days / 6 Nights",
        price: "₹1,29,999",
        rating: "4.9"
    },
    {
        id: 2,
        image: dubai,
        title: "Dubai Luxury Stay",
        location: "Dubai, UAE",
        duration: "6 Days / 6 Nights",
        price: "₹99,999",
        rating: "4.8"
    },
    {
        id: 3,
        image: paris,
        title: "Paris Luxury Experience",
        location: "Paris, France",
        duration: "7 Days / 6 Nights",
        price: "₹1,49,999",
        rating: "4.8"
    },
    {
        id: 4,
        image: artic,
        title: "Arctic Glaciers",
        location: "Iceland",
        duration: "5 Days / 4 Nights",
        price: "₹1,49,999",
        rating: "4.9"
    }
];

export default function Luxury() {
    return (
        <section className="luxury-section">
            <div className="luxury-heading">
                <p>LUXURY PACKAGES</p>
                <h2>Travel in Ultimate Comfort</h2>
                <span>Premium destinations and unforgettable experiences crafted for you.</span>
            </div>

            <div className="luxury-grid">
                {luxuryPackages.map(item => (
                    <div className="luxury-card" key={item.id}>
                        <div className="luxury-image">
                            <img src={item.image} alt={item.title} />
                            <span className="luxury-rating">⭐ {item.rating}</span>
                        </div>

                        <div className="luxury-content">
                            <h3>{item.title}</h3>
                            <p>📍 {item.location}</p>
                            <p>🗓️ {item.duration}</p>

                            <div className="luxury-bottom">
                                <div>
                                    <small>* Starts from</small>
                                    <strong>{item.price}</strong>
                                </div>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}