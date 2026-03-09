// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './Privacy.css';

// // const Privacy = () => {
// //   return (
// //     <div className="privacy-container">
// //       <Link to="/" className="privacy-back">← Back to Home</Link>
// //       <h1 className="privacy-title">Privacy Policy</h1>
// //       <div className="privacy-content">
// //         <p>Your privacy content...</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Privacy;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Privacy.css';

// const Privacy = () => {
//   return (
//     <div className="privacy-page">

//       {/* Custom header — back button + logo */}
//       <header className="privacy-header">
//         <Link to="/" className="privacy-back">
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <polyline points="15 18 9 12 15 6"></polyline>
//           </svg>
//           Back to Home
//         </Link>

//         <Link to="/" className="privacy-logo">
//           <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" />
//         </Link>
//       </header>

//       <div className="privacy-container">
//         <h1 className="privacy-title">Privacy Policy</h1>
//         <div className="privacy-content">
//           <p>Your privacy content...</p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Privacy;



import React from 'react';
import { Link } from 'react-router-dom';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">

      <header className="privacy-header">
        <Link to="/" className="privacy-back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Home
        </Link>
        <Link to="/" className="privacy-logo">
          <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" />
        </Link>
      </header>

      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <div className="privacy-content">

          <p className="privacy-updated">Last updated: March 2026</p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            create an account, make a purchase, or contact us for support. This
            may include your name, email address, and gameplay data.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, process transactions, send communications, and
            personalize your experience.
          </p>

          <h2>Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share information
            with third-party service providers who assist us in operating our
            services, subject to confidentiality agreements.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            You may also opt out of marketing communications at any time.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at <a href="mailto:privacy@specterapp.xyz">privacy@specterapp.xyz</a>.
          </p>

        </div>
      </div>

    </div>
  );
};

export default Privacy;