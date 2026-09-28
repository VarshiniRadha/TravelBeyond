import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking, updateBooking, deleteBooking } from "../Store/BookingSlice";
import "../styles/Bookings.css";

export default function Bookings() {
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.bookings.bookings);

    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        destination: "",
        date: "",
        persons: ""
    });

    const [editId, setEditId] = useState(null);
    const [agreed, setAgreed] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.name || !form.email || !form.mobile || !form.destination || !form.date || !form.persons) {
            alert("Please fill all details");
            return;
        }

        if (!agreed) {
            alert("Please accept the terms and conditions");
            return;
        }

        if (editId) {
            dispatch(updateBooking({ id: editId, ...form }));
            setEditId(null);
        } else {
            dispatch(addBooking({ id: Date.now(), ...form }));
        }

        setForm({
            name: "",
            email: "",
            mobile: "",
            destination: "",
            date: "",
            persons: ""
        });

        setAgreed(false);
    }

    function handleEdit(booking) {
        setEditId(booking.id);
        setForm({
            name: booking.name,
            email: booking.email,
            mobile: booking.mobile,
            destination: booking.destination,
            date: booking.date,
            persons: booking.persons
        });
        setAgreed(true);
    }

    function handleDelete(id) {
        dispatch(deleteBooking(id));
    }

    return (
        <div className="booking-page">
            <div className="booking-layout">

                <div className="booking-form-card">
                    <h1>Personal Details</h1>
                    <p className="booking-subtitle">Complete your details to confirm your trip</p>
                    <h3>Contact Information</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="mobile" placeholder="Your phone number" value={form.mobile} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Destination</label>
                                <input type="text" name="destination" placeholder="Place you wish to go?" value={form.destination} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Travel Date</label>
                                <input type="date" name="date" value={form.date} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Number of Persons</label>
                                <input type="number" name="persons" min="1" placeholder="Number of persons" value={form.persons} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="terms">
                            <input type="checkbox" id="terms" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
                            <label htmlFor="terms">I agree to the terms and conditions and booking policy.</label>
                        </div>

                        <button className="book-now-btn" type="submit">
                            {editId ? "Update Booking" : "Book Now"} →
                        </button>
                    </form>
                </div>

                <div className="booking-summary">
                    <h2>Booking Summary</h2>

                    <div className="summary-destination">
                        <span>🌍</span>
                        <div>
                            <h3>{form.destination || "Your Destination"}</h3>
                            <p>Your selected travel destination</p>
                        </div>
                    </div>

                    <div className="summary-item">
                        <span>👤</span>
                        <div>
                            <small>Name</small>
                            <strong>{form.name || "Not added"}</strong>
                        </div>
                    </div>

                    <div className="summary-item">
                        <span>📅</span>
                        <div>
                            <small>Travel Date</small>
                            <strong>{form.date || "Not selected"}</strong>
                        </div>
                    </div>

                    <div className="summary-item">
                        <span>👥</span>
                        <div>
                            <small>Guests</small>
                            <strong>{form.persons || "0"} Persons</strong>
                        </div>
                    </div>

                    <div className="summary-total">
                        <span>Booking Status</span>
                        <strong>{agreed ? "Ready to Book" : "Pending"}</strong>
                    </div>
                </div>
            </div>

            <div className="your-bookings">
                <h2>Your Bookings</h2>

                {bookings.length === 0 ? (
                    <p className="no-bookings">No bookings available</p>
                ) : (
                    <div className="booking-list">
                        {bookings.map(booking => (
                            <div className="booking-card" key={booking.id}>
                                <h3>🌍 {booking.destination}</h3>
                                <p><strong>Name:</strong> {booking.name}</p>
                                <p><strong>Email:</strong> {booking.email}</p>
                                <p><strong>Date:</strong> {booking.date}</p>
                                <p><strong>Persons:</strong> {booking.persons}</p>

                                <div className="booking-actions">
                                    <button onClick={() => handleEdit(booking)}>Edit</button>
                                    <button onClick={() => handleDelete(booking.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}