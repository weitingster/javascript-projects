import React from "react"
import signature from "../assets/weiting-signature.jpg"

function Signature() {
    return(
      <div className="signature-card">
        <img src={signature} alt="Weiting's Signature"/>
        <div className="contact-info">
          <p>Weiting Xu</p>
          <p>Property Manager</p>
          <p>+1 (416)-779-3068</p>
          <p>weitingxus@gmail.com</p>
        </div>

      </div>
    )
}

export default Signature
