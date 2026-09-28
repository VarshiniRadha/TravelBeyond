import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Profile.css";

export default function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [message, setMessage] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const fileInputRef = useRef(null);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const savedUser = localStorage.getItem("travelUser");
        const savedImage = localStorage.getItem("profileImage");

        if (isLoggedIn === "true" && savedUser) {
            setUser(JSON.parse(savedUser));
        }

        if (savedImage) {
            setProfileImage(savedImage);
        }
    }, []);

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function handleSave() {
        localStorage.setItem("travelUser", JSON.stringify(user));
        setEditMode(false);
        setMessage("Profile updated successfully!");

        setTimeout(() => {
            setMessage("");
        }, 2000);
    }

    function handleImageChange(e) {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            setProfileImage(reader.result);
            localStorage.setItem("profileImage", reader.result);
        };

        reader.readAsDataURL(file);
    }

    function handleLogout() {
        localStorage.removeItem("travelUser");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("profileImage");

        setUser(null);
        setProfileImage("");
        setEditMode(false);

        window.dispatchEvent(new Event("loginStatusChanged"));
        navigate("/Profile");
    }

    if (!user) {
        return (
            <div className="profile-container">
                <div className="not-logged">
                    <div className="profile-icon">👤</div>
                    <h1>You are not logged in</h1>
                    <p>Please login to view your profile.</p>
                    <Link to="/Login" className="login-btn">🔐 Login</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-image" onClick={editMode ? () => fileInputRef.current.click() : null}>
                        {profileImage ? <img src={profileImage} alt="Profile" /> : <span>👤</span>}
                    </div>

                    {editMode && (
                    <>
                        <input type="file" ref={fileInputRef} accept="image/*" onChange={handleImageChange} hidden />
                        <p className="change-photo" onClick={() => fileInputRef.current.click()}>Click image to change</p>
                    </>
                    )}

                    <h1>{user.firstname} {user.lastname}</h1>
                    <p>{user.email}</p>
                </div>

                {message && <p className="success-message">{message}</p>}

                {!editMode ? (
                    <div className="profile-details">
                        <div className="detail"><span>📱 Phone</span><strong>{user.mobile}</strong></div>
                        <div className="detail"><span>🎂 Date of Birth</span><strong>{user.birth || "Not added"}</strong></div>
                        <div className="detail"><span>⚧ Gender</span><strong>{user.gender || "Not added"}</strong></div>
                        <div className="detail"><span>🏠 Address</span><strong>{user.address || "Not added"}</strong></div>
                        <div className="detail"><span>📍 City</span><strong>{user.city}</strong></div>
                        <div className="detail"><span>🌍 Planned Destination</span><strong>{user.destination || "Not added"}</strong></div>
                        <div className="detail"><span>📅 Available Date</span><strong>{user.date || "Not added"}</strong></div>
                        <div className="detail"><span>🛡️ Insurance</span><strong>{user.insurance || "Not added"}</strong></div>

                        <div className="profile-buttons">
                            <button onClick={() => setEditMode(true)}>✏️ Edit Profile</button>
                            <button className="logout-btn" onClick={handleLogout}>👤⏻ Logout</button>
                        </div>
                    </div>
                ) : (
                    <div className="edit-profile">
                        <h2>Edit Profile</h2>

                        <label>First Name</label>
                        <input type="text" name="firstname" value={user.firstname} onChange={handleChange} />

                        <label>Last Name</label>
                        <input type="text" name="lastname" value={user.lastname} onChange={handleChange} />

                        <label>Email</label>
                        <input type="email" name="email" value={user.email} onChange={handleChange} />

                        <label>Mobile</label>
                        <input type="tel" name="mobile" value={user.mobile} onChange={handleChange} />

                        <label>Date of Birth</label>
                        <input type="date" name="birth" value={user.birth} onChange={handleChange} />

                        <label>Gender</label>
                        <select name="gender" value={user.gender} onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <label>Address</label>
                        <input type="text" name="address" value={user.address} onChange={handleChange} />

                        <label>City</label>
                        <input type="text" name="city" value={user.city} onChange={handleChange} />

                        <label>Planning Destination</label>
                        <input type="text" name="destination" value={user.destination} onChange={handleChange} />

                        <label>Available Travel Date</label>
                        <input type="text" name="date" value={user.date} onChange={handleChange} />

                        <label>Health Insurance</label>
                        <input type="text" name="insurance" value={user.insurance} onChange={handleChange} />

                        <div className="edit-buttons">
                            <button onClick={handleSave}>💾 Save Changes</button>
                            <button onClick={() => setEditMode(false)}>Cancel</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}