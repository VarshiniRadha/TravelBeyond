import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Packages.css";

export default function Packages() {
    return (
        <div className="packages-page">
            <section className="packages-hero">
                <div className="packages-overlay">
                    <span>✈️ TRAVEL BEYOND</span>
                    <h1>Explore Our Travel Packages</h1>
                    <p>Discover unforgettable journeys designed for every kind of traveler.</p>
                </div>
            </section>

            <section className="packages-section">
                <div className="packages-heading">
                    <p>CHOOSE YOUR JOURNEY</p>
                    <h2>Find the Perfect Package</h2>
                    <span>From affordable adventures to luxurious escapes, choose a package that matches your travel style.</span>
                </div>

                <div className="package-menu">
                    <Link to="Popular" className="package-option popular-option">
                        <div className="package-icon">🔥</div>
                        <div>
                            <h3>Popular</h3>
                            <p>Most loved destinations</p>
                        </div>
                        <span>→</span>
                    </Link>

                    <Link to="Budget" className="package-option budget-option">
                        <div className="package-icon">💰</div>
                        <div>
                            <h3>Budget</h3>
                            <p>Travel more, spend less</p>
                        </div>
                        <span>→</span>
                    </Link>

                    <Link to="Luxury" className="package-option luxury-option">
                        <div className="package-icon">✨</div>
                        <div>
                            <h3>Luxury</h3>
                            <p>Premium travel experiences</p>
                        </div>
                        <span>→</span>
                    </Link>
                </div>
            </section>

            <Outlet />
        </div>
    );
}