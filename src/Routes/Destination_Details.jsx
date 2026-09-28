import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Destination_Details.css";

import goa from "../assets/goa.jpg";
import dubai from "../assets/dubai.jpg";
import pari from "../assets/pari.png"
import bali from "../assets/bali.jpg";

const destinationData = {
    goa: {
        name: "Goa",
        country: "India",
        image: goa,
        type: "Beach Destination",
        rating: "4.7",
        reviews: "1.12k reviews",
        duration: "5 Days",
        bestTime: "Oct - Mar",
        group: "2-5",
        price: "₹13,999",
        description: "Goa is one of the most popular travel destinations in India, known for its stunning beaches, vibrant nightlife, Portuguese heritage and delicious food.",
        places: ["Baga Beach", "Calangute Beach", "Fort Aguada", "Dudhsagar Falls"]
    },
    dubai: {
        name: "Dubai",
        country: "UAE",
        image: dubai,
        type: "City Destination",
        rating: "4.8",
        reviews: "960 reviews",
        duration: "6 Days",
        bestTime: "Nov - Mar",
        group: "2-4",
        price: "₹47,999",
        description: "Dubai is a modern city famous for its iconic skyline, luxury shopping, world-class attractions and unforgettable experiences.",
        places: ["Burj Khalifa", "Palm Jumeirah", "Dubai Marina", "Desert Safari"]
    },
    paris: {
        name: "Paris",
        country: "France",
        image: pari,
        type: "Culture Destination",
        rating: "4.9",
        reviews: "2.5k reviews",
        duration: "7 Days",
        bestTime: "Apr - Jun",
        group: "2-4",
        price: "₹70,999",
        description: "Paris is a beautiful destination filled with iconic landmarks, art, culture, romantic streets and unforgettable experiences.",
        places: ["Eiffel Tower", "Louvre Museum", "Arc de Triomphe", "Seine River"]
    },
    bali: {
        name: "Bali",
        country: "Indonesia",
        image: bali,
        type: "Beach Destination",
        rating: "4.7",
        reviews: "1.04k reviews",
        duration: "9 Days",
        bestTime: "Apr - Oct",
        group: "2-4",
        price: "₹68,999",
        description: "Bali offers tropical beaches, beautiful temples, lush landscapes and unique cultural experiences for every traveler.",
        places: ["Kuta Beach", "Uluwatu Temple", "Nusa Dua", "Tegallalang"]
    }
};

export default function Destination_Details() {
    const { id } = useParams();
    const destination = destinationData[id];

    if (!destination) {
        return (
            <div className="destination-not-found">
                <h1>Destination Not Found</h1>
                <Link to="/Destinations">← Back to Destinations</Link>
            </div>
        );
    }

    return (
        <div className="destination-details-page">
            <div className="details-top">
                <Link to="/Destinations">← Back to Destinations</Link>
            </div>

            <section className="details-hero">
                <img src={destination.image} alt={destination.name} />

                <div className="details-hero-overlay">
                    <div className="details-hero-text">
                        <span>{destination.type}</span>
                        <h1>{destination.name}, {destination.country}</h1>
                        <p>⭐ {destination.rating} ({destination.reviews})</p>
                        <p>{destination.description}</p>
                    </div>
                </div>
            </section>

            <section className="details-content">
                <div className="details-main">
                    <div className="details-highlights">
                        <div>
                            <span>📅</span>
                            <strong>{destination.duration}</strong>
                            <small>Duration</small>
                        </div>

                        <div>
                            <span>☀️</span>
                            <strong>{destination.bestTime}</strong>
                            <small>Best Time</small>
                        </div>

                        <div>
                            <span>⭐</span>
                            <strong>{destination.rating}</strong>
                            <small>Rating</small>
                        </div>

                        <div>
                            <span>👥</span>
                            <strong>{destination.group}</strong>
                            <small>Group Size</small>
                        </div>
                    </div>

                    <section className="about-destination">
                        <span className="section-label">ABOUT DESTINATION</span>
                        <h2>About {destination.name}</h2>
                        <p>{destination.description} Whether you are looking for a relaxing vacation or an adventurous trip, {destination.name} has something for everyone.</p>
                    </section>

                    <section className="places-section">
                        <div className="section-title">
                            <div>
                                <span className="section-label">EXPLORE</span>
                                <h2>Top Places to Visit</h2>
                            </div>
                            <span>See All →</span>
                        </div>

                        <div className="places-grid">
                            {destination.places.map((place, index) => (
                                <div className="place-card" key={place}>
                                    <img src={destination.image} alt={place} />
                                    <h3>{place}</h3>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <aside className="booking-box">
                    <span>STARTING FROM</span>
                    <h2>{destination.price}</h2>
                    <p>per person</p>

                    <Link to="/Booking">Book This Trip →</Link>

                    <div className="booking-features">
                        <p>✓ Free Cancellation</p>
                        <p>✓ Instant Confirmation</p>
                        <p>✓ 24/7 Customer Support</p>
                    </div>
                </aside>
            </section>

            <section className="why-visit">
                <span>TRAVEL BEYOND</span>
                <h2>Why Visit {destination.name}?</h2>

                <div className="why-grid">
                    <div>
                        <strong>🏝️</strong>
                        <h3>Beautiful Places</h3>
                    </div>
                    <div>
                        <strong>🍹</strong>
                        <h3>Unique Experiences</h3>
                    </div>
                    <div>
                        <strong>🌊</strong>
                        <h3>Adventure</h3>
                    </div>
                    <div>
                        <strong>🍴</strong>
                        <h3>Delicious Food</h3>
                    </div>
                </div>
            </section>
        </div>
    );
}