import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const initialState = {
        firstname: "", 
        lastname: "", 
        email: "", 
        mobile: "", 
        password: "", 
        c_password: "",
        birth: "", 
        gender: "", 
        address: "", 
        city: "", 
        destination: "", 
        date: "", 
        insurance: "", 
        term: false
    };

    function formData(state, action) {
        if (action.type === "RESET") return initialState;
        return { ...state, [action.field]: action.value };
    }

    const [state, dispatch] = useReducer(formData, initialState);

    function handleChange(e) {
        dispatch({
            field: e.target.name,
            value: e.target.type === "checkbox" ? e.target.checked : e.target.value
        });
        setError("");
        setSuccess("");
    }

    function handleReset() {
        dispatch({ type: "RESET" });
        setError("");
        setSuccess("Form reset successfully");
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!state.firstname || !state.lastname || !state.email || !state.mobile || !state.password || !state.c_password || !state.city) {
            setError("Please fill all required fields");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(state.email)) {
            setError("Please enter a valid email");
            return;
        }

        if (!/^\d{10}$/.test(state.mobile)) {
            setError("Mobile number must contain exactly 10 digits");
            return;
        }

        if (state.password.length < 6) {
            setError("Password must contain at least 6 characters");
            return;
        }

        if (state.password !== state.c_password) {
            setError("Passwords do not match");
            return;
        }

        if (!state.term) {
            setError("Please confirm that the information is correct");
            return;
        }

        const userData = {
            firstname: state.firstname,
            lastname: state.lastname,
            email: state.email,
            mobile: state.mobile,
            birth: state.birth,
            gender: state.gender,
            address: state.address,
            city: state.city,
            destination: state.destination,
            date: state.date,
            insurance: state.insurance
        };

        localStorage.setItem("travelUser", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", "true");
        window.dispatchEvent(new Event("loginStatusChanged"));

        setError("");
        setSuccess("Welcome to TravelBeyond!");

        setTimeout(() => {
            navigate("/Profile");
        }, 800);
    }

    return (
        <div className="form-container">
            <h1>Create Your TravelBeyond Profile</h1>
            <p>Enter your details to continue your travel journey.</p>

            <form onSubmit={handleSubmit}>
                {error && <h3 className="error">{error}</h3>}

                <h3>First Name : <span><input type="text" name="firstname" value={state.firstname} onChange={handleChange} placeholder="Enter your First Name" /></span><small className="required-star">*</small></h3>
                <h3>Last Name : <span><input type="text" name="lastname" value={state.lastname} onChange={handleChange} placeholder="Enter your Last Name" /></span><small className="required-star">*</small></h3>
                <h3>Email : <span><input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Enter your Email" /></span><small className="required-star">*</small></h3>
                <h3>Mobile Number : <span><input type="tel" name="mobile" value={state.mobile} onChange={handleChange} placeholder="Enter your Mobile Number" maxLength="10" /></span><small className="required-star">*</small></h3>
                <h3>Password : <span><input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Enter your Password" /></span><small className="required-star">*</small></h3>
                <h3>Confirm Password : <span><input type="password" name="c_password" value={state.c_password} onChange={handleChange} placeholder="Confirm your Password" /></span><small className="required-star">*</small></h3>
                <h3>City : <span><input type="text" name="city" value={state.city} onChange={handleChange} placeholder="Enter your City" /></span><small className="required-star">*</small></h3>
                <h2>Optional Details</h2>
                <h3>Date of Birth : <span><input type="date" name="birth" value={state.birth} onChange={handleChange} /></span></h3>
                <h3>Gender : <span><select name="gender" value={state.gender} onChange={handleChange}><option value="">Select Gender</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option></select></span></h3>
                <h3>Address : <span><input type="text" name="address" value={state.address} onChange={handleChange} placeholder="Enter your Address" /></span></h3>
                <h3>Planning Destination : <span><input type="text" name="destination" value={state.destination} onChange={handleChange} placeholder="Enter your planned destination" /></span></h3>
                <h3>Available Travel Date : <span><input type="text" name="date" value={state.date} onChange={handleChange} placeholder="Enter your convenient dates" /></span></h3>
                <h3>Health Insurance Type : <span><input type="text" name="insurance" value={state.insurance} onChange={handleChange} placeholder="Enter your insurance type" /></span></h3>
                <h4><input type="checkbox" name="term" checked={state.term} onChange={handleChange} id="box" /> I confirm that the information provided is correct.</h4>

                <div className="form-buttons">
                    <button type="submit" id="submit">Create Account</button>
                    <button type="button" id="reset" onClick={handleReset}>Reset</button>
                </div>
                {success && <h3 className="success">{success}</h3>}
            </form>
        </div>
    );
}

