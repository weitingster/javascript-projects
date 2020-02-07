import React, {Component} from "react"

class TenantNames extends Component {

  render(props) {
    return(
      <div>
      <h2>Select the tenant who you want to issue the receipt to</h2>
        <select
          value={this.TenantNames}
          onChange={this.props.handleChange}
          name="tenantNames"
        >
          <option value="Choose the tenant(s)">Choose the tenant(s)</option>
          <option value="Adrian Martin">Adrian Martin</option>
          <option value="Ashley Carr">Ashley Carr</option>
          <option value="Hadeer Ali Tarik">Hadeer Ali Tarik</option>
          <option value="Irina Polyakova">Irina Polyakova</option>
          <option value="Lucy Spezzano & John Spezzano">Lucy Spezzano & John Spezzano</option>
          <option value="Masuma Merchant & Minhal Datoo">Masuma Merchant & Minhal Datoo</option>
          <option value="Sharlon Abrahim & Ehsaan Abrahim">Sharlon Abrahim & Ehsaan Abrahim</option>
          <option value="Wrockulee Edwards & Dominique McLaughlin">Wrockulee Edwards & Dominique McLaughlin</option>
        </select>
      </div>
    )
  }
}

export default TenantNames
