import React from 'react';
import './App.css';
import EmailSendTo from './components/EmailSendTo'
import EmailSendFrom from './components/EmailSendFrom'
import TodayDate from './components/TodayDate'
import ReceiptNo from './components/ReceiptNo'
import TenantNames from './components/TenantNames'
import PropertyUnits from './components/PropertyUnits'
import RentPrice from './components/RentPrice'
import ReceiptDescription from './components/ReceiptDescription'
import Signature from './components/Signature'


function App() {
  return (
    <div>
      <h1>Weiting's Tenant Receipt Issuance Form</h1>

      <div className="app-container">
        { /* Receipt Inputs */ }
        <p>Please fill out the form to its entirety.</p>
        <EmailSendTo />
        <br />
        <EmailSendFrom />
        <TenantNames />
        <PropertyUnits />
        <RentPrice />
        <ReceiptDescription />
      </div>

      <hr />
      <div class="receipt-instructions">
        <p>Please confirm below and press submit to initiate the automatic send.</p>
        <h2>Confirmation of Emails</h2>
        <p>To: EmailTo</p>
        <p>From: Email From</p>
      </div>

      <div className="receipt-container">
      { /* Receipt Design */}
        <TodayDate />
        <ReceiptNo />
        <p className="receipt-field"><span>Received From:</span> TenantName-Input</p>
        <p className="receipt-field"><span>$ CAD:</span> RentPrice</p>
        <p className="receipt-field"><span>Property Unit:</span> PropertyUnits</p>
        <p className="receipt-field"><span>Description:</span> ReceiptDescription</p>
        <Signature />
      </div>

     <div className="confirmation-container">
        <button>Issue the Receipt Now</button>
     </div>

    </div>
  );
}

export default App;
