import React from 'react';
import kidsTiles from '../image/second-cta.3e8f5883.jpg'

function FindActivities() {
    return (
      <div className="find-activities section">
        <div className="container-text">
          <img src={kidsTiles} alt="tiles of kids photos" className="find-activities-image"/>
          <h2>Always pay the lowest price</h2>
          <p>We guarantee you always pay the lowest price through PlayPass</p>
          <button className="find-new">Find New Activities</button>
        </div>
      </div>
    )
  }

export default FindActivities
