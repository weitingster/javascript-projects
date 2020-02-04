import React from "react";

class Forms extends React.Component {
  render() {
    return (
      <div>
        <h2>Please type a city and country, then hit the button!</h2>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City..."/>
          <input type="text" name="country" placeholder="Country..."/>
          <button>Show me the weather!</button>
        </form>
      </div>
    )
  }
}

export default Forms
