import React from "react";

export default function SettingItem({ title, description, enabled, onChange }) {
    return (
        <div className="setting-item">
            <div className="setting-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <button className={enabled ? "toggle on" : "toggle"} onClick={onChange}>{enabled ? "ON" : "OFF"}</button>
        </div>
    );
}