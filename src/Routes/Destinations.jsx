import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import useFetchData from "../Hooks/useFetchData";
import "../styles/Destinations.css";

import goa from "../assets/goa.jpg";
import dubai from "../assets/dubai.jpg";
import paris from "../assets/pari.png";
import bali from "../assets/bali.jpg";
import japan from "../assets/japan.jpg";
import spain from "../assets/spain.jpg";
import swiz from "../assets/swiz.jpg";
import artic from "../assets/artic.jpg";

const destinations = [
    {
        id: "goa",
        name: "Goa",
        country: "India",
        type: "Beach",
        image: goa,
        description: "Beautiful beaches, nightlife and relaxing coastal experiences."
    },
    {
        id: "dubai",
        name: "Dubai",
        country: "UAE",
        type: "City",
        image: dubai,
        description: "Modern skyline, luxury shopping and unforgettable experiences."
    },
    {
        id: "paris",
        name: "Paris",
        country: "France",
        type: "Culture",
        image: paris,
        description: "Art, culture, iconic landmarks and romantic streets."
    },
    {
        id: "bali",
        name: "Bali",
        country: "Indonesia",
        type: "Beach",
        image: bali,
        description: "Tropical beaches, temples and beautiful landscapes."
    },
    {
        id: "japan",
        name: "Japan",
        country: "Japan",
        type: "Culture",
        image: japan,
        description: "Traditional culture, modern cities and amazing food."
    },
    {
        id: "spain",
        name: "Spain",
        country: "Spain",
        type: "Culture",
        image: spain,
        description: "Beautiful architecture, beaches and vibrant culture."
    },
    {
        id: "switzerland",
        name: "Switzerland",
        country: "Switzerland",
        type: "Mountains",
        image: swiz,
        description: "Snowy mountains, scenic lakes and breathtaking views."
    },
    {
        id: "iceland",
        name: "Iceland",
        country: "Iceland",
        type: "Mountains",
        image: artic,
        description: "Glaciers, waterfalls and incredible natural landscapes."
    }
];

export default function Destinations() {
    const location = useLocation();

    const [selectedType, setSelectedType] = useState("All");
    const [search, setSearch] = useState("");
    const [liked, setLiked] = useState([]);

    const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/users");

    function toggleLike(id) {
        if (liked.includes(id)) {
            setLiked(liked.filter(item => item !== id));
        } else {
            setLiked([...liked, id]);
        }
    }

    if (location.pathname !== "/Destinations") {
        return <Outlet />;
    }

    const filteredDestinations = destinations.filter(item => {
        const typeMatch = selectedType === "All" || item.type === selectedType;

        const searchMatch =
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.country.toLowerCase().includes(search.toLowerCase());

        return typeMatch && searchMatch;
    });

    return (
        <div className="destinations-page">
            <section className="destinations-header">
                <p>TRAVEL BEYOND</p>
                <h1>Explore Destinations</h1>
                <span>Discover beautiful places and plan your next unforgettable journey.</span>
            </section>

            <section className="destination-controls">
                <div className="destination-filters">
                    {["All", "Beach", "City", "Mountains", "Culture"].map(type => (
                        <button key={type} className={selectedType === type ? "active" : ""} onClick={() => setSelectedType(type)}>
                            {type}
                        </button>
                    ))}
                </div>

                <input type="text" placeholder="Search destination..." value={search} onChange={e => setSearch(e.target.value)} />
            </section>

            <section className="destination-section">
                <div className="destination-heading">
                    <div>
                        <p>DISCOVER THE WORLD</p>
                        <h2>Popular Destinations</h2>
                    </div>

                    <span>{filteredDestinations.length} Destinations</span>
                </div>

                {filteredDestinations.length === 0 ? (
                    <div className="no-destination">
                        <h3>No destinations found</h3>
                        <p>Try another destination or category.</p>
                    </div>
                ) : (
                    <div className="destination-grid">
                        {filteredDestinations.map(item => (
                            <Link to={`/Destinations/${item.id}`} className="destination-card" key={item.id}>
                                <img src={item.image} alt={item.name} />

                                <div className="destination-overlay"></div>

                                <div className="destination-info">
                                    <p>{item.type}</p>
                                    <h3>{item.name}</h3>
                                    <span>📍 {item.country}</span>
                                </div>

                                <button className="like-button" onClick={e => { e.preventDefault(); e.stopPropagation(); toggleLike(item.id); }}>
                                    {liked.includes(item.id) ? "♥" : "♡"}
                                </button>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            <section className="api-guides-section">
                <div className="api-heading">
                    <h2>Travel Guides</h2>
                    <span>Explore the guides from our organization</span>
                </div>

                {loading && (
                    <div className="api-status">
                        <p>Loading travel guides...</p>
                    </div>
                )}

                {error && (
                    <div className="api-status error">
                        <p>Error: {error}</p>
                    </div>
                )}

                {!loading && !error && (
                    <div className="api-guide-grid">
                        {data.slice(0, 6).map(user => (
                            <div className="api-guide-card" key={user.id}>
                                <div className="api-guide-icon">🧑‍💼</div>

                                <div className="api-guide-info">
                                    <h3>{user.name}</h3>
                                    <p><span>Email</span><strong>{user.email}</strong></p>
                                    <p><span>Phone</span><strong>{user.phone}</strong></p>
                                    <p><span>Website</span><strong>{user.website}</strong></p>
                                    <p><span>City</span><strong>{user.address.city}</strong></p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}