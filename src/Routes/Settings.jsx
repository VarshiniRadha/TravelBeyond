import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SettingItem from "../SettingItem.jsx";
import "../styles/Settings.css";

const ThemeContext = createContext();

const defaultSettings = {
    darkMode: false,
    emailNotifications: true,
    bookingUpdates: true
};

export default function Settings() {
    const [settings, setSettings] = useState(() => {
        const savedSettings = localStorage.getItem("travelSettings");
        return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
    });

    const [message, setMessage] = useState("");

    useEffect(() => {
        localStorage.setItem("travelSettings", JSON.stringify(settings));
    }, [settings]);

    useEffect(() => {
    document.body.classList.toggle("dark-mode", settings.darkMode);
}, [settings.darkMode]);


    function updateSetting(name) {
        setSettings({
            ...settings,
            [name]: !settings[name]
        });
        setMessage("");
    }

    function handleSave() {
        localStorage.setItem("travelSettings", JSON.stringify(settings));
        setMessage("Settings saved successfully!");

        setTimeout(() => {
            setMessage("");
        }, 2000);
    }

    function handleReset() {
        setSettings(defaultSettings);
        localStorage.setItem("travelSettings", JSON.stringify(defaultSettings));
        setMessage("Settings reset successfully!");

        setTimeout(() => {
            setMessage("");
        }, 2000);
    }

    return (
        <ThemeContext.Provider value={settings}>
            <SettingsContent
                settings={settings}
                updateSetting={updateSetting}
                handleSave={handleSave}
                handleReset={handleReset}
                message={message}
            />
        </ThemeContext.Provider>
    );
}

function SettingsContent({ settings, updateSetting, handleSave, handleReset, message }) {
    const theme = useContext(ThemeContext);

    return (
        <div className={theme.darkMode ? "settings-page dark" : "settings-page"}>
            <div className="settings-container">

                <div className="settings-header">
                    <h1>Settings</h1>
                    <p>Manage your TravelBeyond preferences.</p>
                </div>

                {message && <p className="settings-message">{message}</p>}

                <div className="settings-section">
                    <h2>Appearance</h2>

                    <SettingItem
                        title="Dark Mode"
                        description="Change the appearance of the website"
                        enabled={settings.darkMode}
                        onChange={() => updateSetting("darkMode")}
                    />
                </div>

                <div className="settings-section">
                    <h2>Notifications</h2>

                    <SettingItem
                        title="Email Notifications"
                        description="Receive travel updates through email"
                        enabled={settings.emailNotifications}
                        onChange={() => updateSetting("emailNotifications")}
                    />

                    <SettingItem
                        title="Booking Updates"
                        description="Get updates about your bookings"
                        enabled={settings.bookingUpdates}
                        onChange={() => updateSetting("bookingUpdates")}
                    />
                </div>

                <div className="settings-section">
                    <h2>Account</h2>

                    <Link to="/Profile" className="profile-link">
                        Edit Profile →
                    </Link>
                </div>

                <div className="settings-buttons">
                    <button onClick={handleSave}>💾 Save Settings</button>
                    <button onClick={handleReset}>↩ Reset</button>
                </div>

            </div>
        </div>
    );
}