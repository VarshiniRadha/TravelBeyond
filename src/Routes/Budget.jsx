import React from "react";
import "../styles/Budget.css";

import goa from "../assets/goa.jpg";
import bali from "../assets/bali.jpg";
import spain from "../assets/spain.jpg";
import japan from "../assets/japan.jpg";

const budgetPackages = [
  {
        id: 1,
        image: japan,
        title: "Japan Discovery",
        location: "Tokyo, Japan",
        duration: "4 Days / 3 Nights",
        price: "₹39,999",
        rating: "4.8"
    },
    {
        id: 2,
        image: goa,
        title: "Goa Budget Trip",
        location: "Goa, India",
        duration: "3 Days / 2 Nights",
        price: "₹9,999",
        rating: "4.7"
    },
    {
        id: 3,
        image: bali,
        title: "Bali Budget Escape",
        location: "Bali, Indonesia",
        duration: "4 Days / 3 Nights",
        price: "₹17,999",
        rating: "4.7"
    },
    {
        id: 4,
        image: spain,
        title: "Spain Explorer",
        location: "Barcelona, Spain",
        duration: "5 Days / 4 Nights",
        price: "₹38,999",
        rating: "4.6"
    },
    
];

export default function Budget() {
    return (
        <section className="budget-section">
            <div className="budget-heading">
                <p>BUDGET PACKAGES</p>
                <h2>Travel More, Spend Less</h2>
                <span>Affordable packages for unforgettable travel experiences.</span>
            </div>

            <div className="budget-grid">
                {budgetPackages.map(item => (
                    <div className="budget-card" key={item.id}>
                        <div className="budget-image">
                            <img src={item.image} alt={item.title} />
                            <span className="budget-rating">⭐ {item.rating}</span>
                        </div>

                        <div className="budget-content">
                            <h3>{item.title}</h3>
                            <p>📍 {item.location}</p>
                            <p>🗓️ {item.duration}</p>

                            <div className="budget-bottom">
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