import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <h2>TravelBeyond</h2>
                    <p>Discover the world with unforgettable experiences.</p>
                </div>

                <div>
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/Destinations">Destinations</Link>
                    <Link to="/Packages">Packages</Link>
                    <Link to="/Booking">Booking</Link>
                </div>

                <div>
                    <h3>Support</h3>
                    <p>📧 travelbeyond@gmail.com</p>
                    <p>📞 +91 98765 43210</p>
                    <p>📍 Coimbatore, India</p>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 TravelBeyond. All rights reserved.
            </div>
        </footer>
    );
}