import React, {Component} from "react"

class ReceiptDescription extends Component {
  render() {
    return(
      <div>
        <h2>Brief description of what the payment was for</h2>
        <input
          type="text"
          value={this.ReceiptDescription}
          name="receiptDescription"
          placeholder="e.g. For February 2020 Rent"
          onChange={this.props.handler}
        />
      </div>
    )
  }
}

export default ReceiptDescription
