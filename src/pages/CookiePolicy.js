import React from 'react';
import { Link } from 'react-router-dom';
import './CookiePolicy.css';

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-page">

      <header className="cookie-policy-header">
        <Link to="/" className="cookie-policy-back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Home
        </Link>
        <Link to="/" className="cookie-policy-logo">
          <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" />
        </Link>
      </header>

      <div className="cookie-policy-container">
        <h1 className="cookie-policy-title">Cookie Policy</h1>
        <div className="cookie-policy-content">

          <p className="cookie-policy-updated">Last updated: March 2026</p>

          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your device when you
            visit our website. They help us provide you with a better experience
            by remembering your preferences and understanding how you interact
            with our site.
          </p>

          <h2>How We Use Cookies</h2>
          <p>
            We use cookies for the following purposes:
          </p>
          <p>
            <strong>Essential Cookies:</strong> Required for the website to function
            properly. These cannot be disabled.
          </p>
          <p>
            <strong>Analytics Cookies:</strong> Help us understand how visitors
            interact with our website by collecting and reporting information
            anonymously.
          </p>
          <p>
            <strong>Marketing Cookies:</strong> Used to track visitors across
            websites to display relevant advertisements.
          </p>

          <h2>Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings.
            Please note that removing or blocking cookies may impact your user
            experience and some features may no longer be available. Visit our{' '}
            <Link to="/cookie-settings">Cookie Settings</Link> page to manage
            your preferences.
          </p>

          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our
            pages. We do not control the dissemination of these cookies. You
            should check the relevant third party's website for more information
            about these cookies.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us
            at <a href="mailto:privacy@specterapp.xyz">privacy@specterapp.xyz</a>.
          </p>

        </div>
      </div>

    </div>
  );
};

export default CookiePolicy;