import React, {Component} from "react"

class RentPrice extends Component {
  render() {
    return(
      <div>
        <h2>How much was paid?</h2>
        <input
          type="text"
          value={this.RentPrice}
          name="rentPrice"
          placeholder="e.g. $1,189"
          onChange={this.props.handler}
        />
      </div>
    )
  }
}

export default RentPrice
