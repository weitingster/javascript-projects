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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tenantNames: "",
      propertyUnits: "",
      rentPrice: "",
      receiptDescription: "",
      emailTo: "",
      emailFrom: ""
    }
    this.handleChangeTenantNames = this.handleChangeTenantNames.bind(this)
    this.handleChangePropertyUnits = this.handleChangePropertyUnits.bind(this)
    this.handleChangeRentPrice = this.handleChangeRentPrice.bind(this)
    this.handleChangeReceiptDescription = this.handleChangeReceiptDescription.bind(this)
    this.handleChangeEmailTo = this.handleChangeEmailTo.bind(this)
    this.handleChangeEmailFrom = this.handleChangeEmailFrom.bind(this)
  }

  handleChangeTenantNames(event) {
    const {name, value} = event.target
    this.setState({
       'tenantNames' : value,
    })
  }


  handleChangePropertyUnits(event) {
    const {name, value} = event.target
    this.setState({
       'propertyUnits': value
    })
  }


  handleChangeRentPrice(event) {
    const {name, value} = event.target
    this.setState({
       'rentPrice': value
    })
  }

  handleChangeReceiptDescription(event) {
    const {name, value} = event.target
    this.setState({
       'receiptDescription': value
    })
  }

  handleChangeEmailTo(event) {
    const {name, value} = event.target
    this.setState({
       'emailSendTo': value
    })
  }

  handleChangeEmailFrom(event) {
    const {name, value} = event.target
    this.setState({
       'emailSendFrom': value
    })
  }

  render() {
    return (
      <div>
        <h1>Weiting's Tenant Receipt Issuance Form</h1>
        <div className="entire-app">
          <div className="container-left">
            <div className="app-container">
              { /* Receipt Inputs */ }
              <EmailSendTo handler={this.handleChangeEmailTo} />
              <br />
              <EmailSendFrom handler={this.handleChangeEmailFrom}/>
              <hr />
              <TenantNames handler={this.handleChangeTenantNames} />
              <PropertyUnits handler={this.handleChangePropertyUnits} />
              <RentPrice handler={this.handleChangeRentPrice} />
              <ReceiptDescription handler={this.handleChangeReceiptDescription} />
            </div>
          </div>

            <hr />
          <div className="container-right">
            <div className="receipt-instructions">
              <p>To: {this.state.emailSendTo}</p>
              <p>From: {this.state.emailSendFrom}</p>
            </div>

            <div className="receipt-container">
            { /* Receipt Design */}
             <h2>Payment Receipt</h2>
              <TodayDate />
              <ReceiptNo />
              <p className="receipt-field"><span>Received From:</span> {this.state.tenantNames}</p>
              <p className="receipt-field"><span>Property Unit:</span> {this.state.propertyUnits}</p>
              <p className="receipt-field"><span>Amount in CAD: $</span>{this.state.rentPrice}</p>
              <p className="receipt-field"><span>Description:</span> {this.state.receiptDescription}</p>
              <Signature />
            </div>
          </div>

        </div>

        {
        // <div className="confirmation-container">
        //    <button>Download Receipt Now</button>
        // </div>
        }

      </div>
    );
  }
}

export default App;
