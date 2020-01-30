import React from 'react';
import logo from '../image/playpass-logo.svg';

function Footer() {
    return (
      <div className="footer-section">
        <div className="grid-3">
          <img src={logo} alt="Playpass logo" />
          <p>
          PlayPass - All rights reserved. PlayPass helps you find, try, and book children's activities in Toronto. Discover new kid activities in Toronto!
          </p>
        </div>
        <div className="grid-3">
          <h4>Company</h4>
          <p>Join as a Partner</p>
          <p>Support</p>
        </div>
        <div className="grid-3">
          <h4>Terms</h4>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>The PlayPass Guarantee</p>
        </div>
      </div>
    )
  }

export default Footer
