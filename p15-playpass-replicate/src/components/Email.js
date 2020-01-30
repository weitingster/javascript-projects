import React from 'react';

function Email() {
    return (
      <div className="email-section section">
        <div className="container-text">
          <h2>Activities just for you</h2>
          <p>We send curated activities to your inbox every week to save you time</p>
        </div>
        <div class="subscribe-container">
          <input className="input-email"/>
          <button className="subscribe">Subscribe!</button>
        </div>
      </div>
    )
  }

export default Email
