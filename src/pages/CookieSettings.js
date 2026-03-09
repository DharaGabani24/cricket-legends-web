import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CookieSettings.css';

const CookieSettings = () => {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const handleSave = () => {
    // Save preferences logic here
    alert('Cookie preferences saved!');
  };

  return (
    <div className="cookie-settings-page">

      <header className="cookie-settings-header">
        <Link to="/" className="cookie-settings-back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Home
        </Link>
        <Link to="/" className="cookie-settings-logo">
          <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" />
        </Link>
      </header>

      <div className="cookie-settings-container">
        <h1 className="cookie-settings-title">Cookie Settings</h1>
        <div className="cookie-settings-content">

          <p>
            Manage your cookie preferences below. Essential cookies cannot be
            disabled as they are required for the website to function.
          </p>

          {/* Essential Cookies */}
          <div className="cookie-settings-card">
            <div className="cookie-settings-card-header">
              <div>
                <h2>Essential Cookies</h2>
                <p>Required for basic site functionality. Cannot be disabled.</p>
              </div>
              <div className="cookie-settings-toggle cookie-settings-toggle--disabled">
                <div className="cookie-settings-toggle-track cookie-settings-toggle-track--on">
                  <div className="cookie-settings-toggle-thumb cookie-settings-toggle-thumb--on"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="cookie-settings-card">
            <div className="cookie-settings-card-header">
              <div>
                <h2>Analytics Cookies</h2>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
              <div className="cookie-settings-toggle" onClick={() => setAnalytics(!analytics)}>
                <div className={`cookie-settings-toggle-track ${analytics ? 'cookie-settings-toggle-track--on' : ''}`}>
                  <div className={`cookie-settings-toggle-thumb ${analytics ? 'cookie-settings-toggle-thumb--on' : ''}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="cookie-settings-card">
            <div className="cookie-settings-card-header">
              <div>
                <h2>Marketing Cookies</h2>
                <p>Used to display relevant advertisements across websites.</p>
              </div>
              <div className="cookie-settings-toggle" onClick={() => setMarketing(!marketing)}>
                <div className={`cookie-settings-toggle-track ${marketing ? 'cookie-settings-toggle-track--on' : ''}`}>
                  <div className={`cookie-settings-toggle-thumb ${marketing ? 'cookie-settings-toggle-thumb--on' : ''}`}></div>
                </div>
              </div>
            </div>
          </div>

          <button className="cookie-settings-save" onClick={handleSave}>
            Save Preferences
          </button>

          <p className="cookie-settings-note">
            For more information, read our <Link to="/cookie-policy">Cookie Policy</Link>.
          </p>

        </div>
      </div>

    </div>
  );
};

export default CookieSettings;