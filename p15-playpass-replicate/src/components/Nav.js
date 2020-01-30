import React from 'react';
import logo from '../image/playpass-logo.svg';

function Nav() {
    return (
      <div className="nav-section">
        <div className="logo-container">
          <img src={logo} alt="Playpass Logo Long Form"/>
        </div>
        <div className="nav-container">
          <button className="activities-cta">Activities</button>
          <ul className="nav-bar-tabs">
            <li className="menu-option">Blog</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
    )
}

export default Nav
