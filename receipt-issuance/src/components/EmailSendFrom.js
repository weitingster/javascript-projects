import React, {Component} from "react"

class EmailSendFrom extends Component {
  render() {
    return(
      <div>
        <h2>From which email should this receipt come from?</h2>
        <select
          value={this.EmailSendFrom}
          onChange={this.props.handler}
          name="emailSendFrom"
        >
          <option value="Choose the landlord's email">Choose the landlord's email</option>
          <option value="weitingxus@gmail.com">LANDLORD: Weiting Xu</option>
        </select>
      </div>
    )
  }
}

export default EmailSendFrom
