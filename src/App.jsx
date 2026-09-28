import "./App.css";
import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import Destinations from "./Routes/Destinations.jsx";
import Destination_Details from "./Routes/Destination_Details.jsx";
import Packages from "./Routes/Packages.jsx";
import Booking from "./Routes/Bookings.jsx";
import Profile from "./Routes/Profile.jsx";
import Settings from "./Routes/Settings.jsx";
import Popular from "./Routes/Popular.jsx";
import Luxury from "./Routes/Luxury.jsx";
import Budget from "./Routes/Budget.jsx";
import Login from "./Routes/Login.jsx";
import Footer from "./Routes/Footer.jsx";


function App() {

  return (
        <BrowserRouter basename="/TravelBeyond">
            <AppContent />
        </BrowserRouter>
    );
  }

  function AppContent() {

    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState( localStorage.getItem("isLoggedIn") === "true" ); 
    
  
  useEffect(() => { 
    function checkLogin() { 
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true"); 
    } 
    window.addEventListener("loginStatusChanged", checkLogin); 
    return () => { 
      window.removeEventListener("loginStatusChanged", checkLogin); 
    }; 
  }, []);

  function handleLogout() { 
    localStorage.removeItem("travelUser"); 
    localStorage.removeItem("isLoggedIn"); 
    setIsLoggedIn(false); 
    window.dispatchEvent(new Event("loginStatusChanged")); 
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <div className={`Task ${location.pathname === "/" ? "home-nav" : "normal-nav"}`}>
          <h1>TravelBeyond</h1>
          <Link to="/">Home</Link>
          <Link to="/Destinations">Destinations</Link>
          <Link to="/Packages">Packages</Link>
          <Link to="/Booking">Booking</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Settings">Settings</Link>

          {isLoggedIn ? ( 
            <button onClick={handleLogout}>Logout</button> 
            ) : ( 
            <Link to="/Login">Login</Link> 
            )}

        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Destinations" element={<Destinations />} >
            <Route path=":id" element={<Destination_Details />} />
          </Route>
          <Route path="Packages" element={<Packages />} >
            <Route path="Popular" element={<Popular />} />
            <Route path="Budget" element={<Budget />} />
            <Route path="Luxury" element={<Luxury />} />
          </Route>
          <Route path="Booking" element={<Booking />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Login" element={<Login />} />
        </Routes>
        <Footer />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;