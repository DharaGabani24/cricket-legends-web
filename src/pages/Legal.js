import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const Legal = () => {
  return (
    <div className="legal-page">

      <header className="legal-header">
        <Link to="/" className="legal-back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Home
        </Link>
        <Link to="/" className="legal-logo">
          <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" />
        </Link>
      </header>

      <div className="legal-container">
        <h1 className="legal-title">Legal</h1>
        <div className="legal-content">

          <h2>Terms of Service</h2>
          <p>
            By accessing and using the Gods of Cricket website and game services,
            you agree to be bound by these terms. If you do not agree with any
            part of these terms, please do not use our services.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including but not limited to text,
            graphics, logos, images, audio clips, video clips, and software — is
            the property of Specter Games and is protected by international
            copyright laws.
          </p>

          <h2>User Conduct</h2>
          <p>
            You agree not to use our services for any unlawful purpose or in any
            way that could damage, disable, or impair the service. You shall not
            attempt to gain unauthorized access to any part of the service.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Specter Games shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from your use
            of or inability to use the service.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with
            applicable laws, without regard to conflict of law principles.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of the service after changes constitutes acceptance of the
            modified terms.
          </p>

          <h2>Contact</h2>
          <p>
            For legal inquiries, please contact us at{' '}
            <a href="mailto:legal@specterapp.xyz">legal@specterapp.xyz</a>.
          </p>

        </div>
      </div>

    </div>
  );
};

export default Legal;