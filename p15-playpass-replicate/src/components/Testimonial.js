import React from 'react';
import momAndKids from '../image/the-workaround.61634c7c.jpg'

function Testimonial() {
    return (
      <div className="testimonial-section section">
        <div className="container-text">
          <img src={momAndKids} alt="Mom and kids on sofa" className="testimonial-image"/>
          <h2>Trusted by over 1000 Toronto Parents</h2>
          <p>"I never would have found gymnastics for Cara if it wasn't for PlayPass!"</p>
          <p>– Liz, mother of Joseph (2 years) and Cara (7 years)</p>
        </div>
      </div>
    )
  }

export default Testimonial
