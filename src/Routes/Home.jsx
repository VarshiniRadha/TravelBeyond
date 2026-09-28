import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

import background from "../assets/background.png";
import goa from "../assets/goa.jpg";
import dubai from "../assets/dubai.jpg";
import paris from "../assets/paris.jpg";
import bali from "../assets/bali.jpg";
import japan from "../assets/japan.jpg";
import spain from "../assets/spain.jpg";
import swiz from "../assets/swiz.jpg";
import artic from "../assets/artic.jpg";

export default function Home() {
    const destinations = [
        { id: 1, name: "Goa", text: "Beach Adventures", image: goa },
        { id: 2, name: "Dubai", text: "Luxury Experiences", image: dubai },
        { id: 3, name: "Paris", text: "Romantic Escapes", image: paris },
        { id: 4, name: "Bali", text: "Island Adventures", image: bali },
        { id: 5, name: "Japan", text: "Ancient Traditions", image: japan },
        { id: 6, name: "Spain", text: "Cultural Discoveries", image: spain },
        { id: 7, name: "Switzerland", text: "Alpine Wonders", image: swiz },
        { id: 8, name: "Arctic Circle", text: "Glacial Marvels", image: artic }
    ];

    return (
        <div className="home">
            <section className="hero" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <div className="hero-text">
                        <h2>Your travel journey,</h2><br /><h1>starts here.</h1>
                    </div>

                    <div className="hero-info">
                        <p>Discover extraordinary journeys and explore beautiful destinations around the world.</p>
                        <div className="hero-buttons">
                            <Link to="/Destinations" className="plan-btn">Plan a Trip</Link>
                            <Link to="/Packages" className="contact-btn">Explore Packages</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="discover">
                <div className="discover-heading">
                    <div><h2>Discover our destinations</h2></div>
                    <p>From beaches to mountains, discover your perfect destination.</p>
                </div>

                <div className="destination-grid">
                    {destinations.map((item) => (
                        <Link to={`/Destinations/${item.id}`} className="destination-card" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className="card-overlay"></div>
                            <div className="card-content">
                                <h3>{item.name}</h3>
                                <p>{item.text}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="why-section">
                <div className="section-title">
                    <p>WHY TRAVELBEYOND</p>
                    <h2>Travel With Confidence</h2>
                </div>

                <div className="why-grid">
                    <div className="why-card">
                        <div>🛡️</div>
                        <h3>Safe Travel</h3>
                        <p>Your safety and comfort are our priority throughout your journey.</p>
                    </div>

                    <div className="why-card">
                        <div>💰</div>
                        <h3>Best Prices</h3>
                        <p>Enjoy carefully selected travel packages at competitive prices.</p>
                    </div>

                    <div className="why-card">
                        <div>🎧</div>
                        <h3>24/7 Support</h3>
                        <p>Our support team is always ready to help whenever you need us.</p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
            <div>
                <p>YOUR NEXT ADVENTURE IS WAITING</p>
                <h2>Ready to explore the world?</h2>
                <span>Pack your bags and let TravelBeyond take you somewhere amazing.</span>
            </div>

            <Link to="/Destinations" className="cta-btn">Start Exploring →</Link>
            </section>

        </div>
    );
}