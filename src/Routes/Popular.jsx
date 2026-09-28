import React from "react";
import "../styles/Popular.css";

import goa from "../assets/goa.jpg";
import dubai from "../assets/dubai.jpg";
import paris from "../assets/paris.jpg";
import bali from "../assets/bali.jpg";

const packages = [
    {
        id: 1,
        image: paris,
        title: "Paris Getaway",
        location: "Paris, France",
        duration: "7 Days / 6 Nights",
        price: "₹69,999",
        rating: "4.8"
    },
    {
        id: 2,
        image: dubai,
        title: "Dubai Adventure",
        location: "Dubai, UAE",
        duration: "4 Days / 3 Nights",
        price: "₹29,999",
        rating: "4.9"
    },
    
    {
        id: 2,
        image: goa,
        title: "Goa Escape",
        location: "Goa, India",
        duration: "5 Days / 4 Nights",
        price: "₹15,999",
        rating: "4.8"
    },
    {
        id: 4,
        image: bali,
        title: "Bali Paradise",
        location: "Bali, Indonesia",
        duration: "5 Days / 4 Nights",
        price: "₹35,999",
        rating: "4.8"
    }
];

export default function Popular() {
    return (
        <section className="popular-section">
            <div className="popular-heading">
                <p>POPULAR PACKAGES</p>
                <h2>Most Loved Travel Experiences</h2>
                <span>Explore our most popular destinations chosen by travelers.</span>
            </div>

            <div className="popular-grid">
                {packages.map(item => (
                    <div className="package-card" key={item.id}>
                        <div className="package-image">
                            <img src={item.image} alt={item.title} />
                            <span className="rating">⭐ {item.rating}</span>
                        </div>

                        <div className="package-content">
                            <h3>{item.title}</h3>
                            <p>📍 {item.location}</p>
                            <p>🗓️ {item.duration}</p>

                            <div className="package-bottom">
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