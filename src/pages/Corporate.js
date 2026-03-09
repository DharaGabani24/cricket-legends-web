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
// import './Pages.css';

// const Corporate = () => {
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
//         <h1 className="privacy-title">Corporate</h1>
//         <div className="privacy-content">
//           <p>Your content...</p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Corporate;


import React from 'react';
import { Link } from 'react-router-dom';
import './Corporate.css';

const Corporate = () => {
  return (
    <div className="corporate-page">

      <header className="corporate-header">
        <Link to="/" className="corporate-back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Home
        </Link>
        <Link to="/" className="corporate-logo">
          <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" />
        </Link>
      </header>

      <div className="corporate-container">
        <h1 className="corporate-title">Corporate</h1>
        <div className="corporate-content">

          <h2>About Specter Games</h2>
          <p>
            Specter Games is an independent game development studio dedicated to
            creating immersive multiplayer experiences. Founded with a passion for
            competitive gaming and cricket, we are building the world's first
            cricket esports platform — Gods of Cricket.
          </p>

          <h2>Our Mission</h2>
          <p>
            To revolutionize cricket gaming by delivering an experience that
            captures the raw emotion, strategy, and thrill of the sport — from
            street-level battles to professional esports tournaments.
          </p>

          <h2>Leadership</h2>
          <p>
            Our team brings together experienced game developers, esports
            professionals, and cricket enthusiasts united by a shared vision of
            making cricket the next great competitive gaming frontier.
          </p>

          <h2>Contact</h2>
          <p>
            For business inquiries, press, or partnership opportunities, please
            reach out to us at <a href="mailto:contact@specterapp.xyz">contact@specterapp.xyz</a>.
          </p>

        </div>
      </div>

    </div>
  );
};

export default Corporate;