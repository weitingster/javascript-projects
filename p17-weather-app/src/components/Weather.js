import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <div className="weather-card">
          <div className="weather-card-left">
            <h1>Weiting's Weather Finder</h1>
          </div>
          <div className="weather-card-right">
          {this.props.city && this.props.country && <p><span>Location:</span> {this.props.city}, {this.props.country}</p>}
          {this.props.temperature && <p><span>Temperature:</span> {this.props.temperature} F</p>}
          {this.props.description && <p><span>Condition:</span> {this.props.description}</p>}
          {this.props.windspeed && <p><span>Wind Speed:</span> {this.props.windspeed}</p>}
          {this.props.humidity && <p><span>Humidity:</span> {this.props.humidity}</p>}
          {this.props.error && <p>{this.props.error}</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default Weather
