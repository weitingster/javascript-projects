import React, {Component} from "react"

class PropertyUnits extends Component {

  render() {
    return(
      <div>
      <h2>Select the property unit associated with this payment</h2>
        <select
          value={this.PropertyUnits}
          onChange={this.props.handler}
          name="propertyUnits"
        >
          <option value="Choose the rental property unit">Choose the rental property unit</option>
          <option value="30 View North Court, Vaughan, Ontario, L4L 8S4">30 View North Court, Vaughan, Ontario, L4L 8S4</option>
          <option value="10 Parklawn Drive, Toronto, Ontario, M8V 0H9">10 Parklawn Drive, Toronto, Ontario, M8V 0H9</option>
          <option value="Upstairs - 30 Westcliffe Crescent, Richmond Hill, Ontario, L4E 0S2">Upstairs - 30 Westcliffe Crescent, Richmond Hill, Ontario, L4E 0S2</option>
          <option value="Basement -30 Westcliffe Crescent, Richmond Hill, Ontario, L4E 0S2">Basement -30 Westcliffe Crescent, Richmond Hill, Ontario, L4E 0S2</option>
          <option value="Upstairs - 343 Tower Hill, Richmond Hill, Ontario, L4E 0A6">Upstairs - 343 Tower Hill, Richmond Hill, Ontario, L4E 0A6</option>
          <option value="Basement - 343 Tower Hill, Richmond Hill, Ontario, L4E 0A6">Basement - 343 Tower Hill, Richmond Hill, Ontario, L4E 0A6</option>
          <option value="1 Bed plus 1 Den - Unit A 73 Skywood Drive, Richmond Hill, Ontario, L4E 4L1">1 Bed plus 1 Den - Unit A 73 Skywood Drive, Richmond Hill, Ontario, L4E 4L1</option>
          <option value="1 Bed - Unit B 73 Skywood Drive, Richmond Hill, Ontario, L4E 4L1">1 Bed - Unit B 73 Skywood Drive, Richmond Hill, Ontario, L4E 4L1</option>
        </select>
      </div>
    )
  }
}

export default PropertyUnits
