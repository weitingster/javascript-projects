import React from 'react';
import heroImage from '../image/hero-splash.2598968e.jpg'
import lightbulb from '../image/lightbulb.855c9070.svg'
import celebration from '../image/celebration.dd519bf2.svg'
import checklist from '../image/checklist.9a5a3604.svg'
import diamond from '../image/diamond.aa278c18.svg'

function Why() {
    return (
      <div className="why-section section">
        <div className="container-text">
          <h2>Why families love PlayPass</h2>

          <div className="reasons-why-grid">
              <div className="reason-cell">
                <img src={lightbulb} alt="lightbulb icon"/>
                <p>Find New Classes</p>
              </div>
              <div className="reason-cell">
                <img src={checklist} alt="checklist icon"/>
                <p>FAQs About Classes</p>
              </div>
              <div className="reason-cell">
                <img src={celebration} alt="hat and confetti icon"/>
                <p>Try With Drop-ins</p>
              </div>
              <div className="reason-cell">
                <img src={diamond} alt="diamond icon"/>
                <p>Save Money</p>
              </div>
            </div>

          <p>"PlayPass helps me know what to expect by sharing info like stroller parking, what to wear, and what to bring"</p>
          <p>– Katie, mother of Ben (12 months)</p>
        </div>
      </div>
    )
}

export default Why
