import React from 'react';
import './App.css';
import Forms from './components/Forms';
import Weather from './components/Weather';

const API_KEY = "7bfea1e6b601caeeb6b9c54e260ff7fc";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    windspeed: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();

    //pulls from the console.log object which gets returned if there exists values, otherwise return nothing
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: (data.main.temp),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        windspeed: undefined,
        description: undefined,
        error: "Looks like you did not enter proper city and/or country!"
      })
    }
  }

  render() {
    return (
      <div className="weather-app">
      <Forms getWeather={this.getWeather}/>
      <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        windspeed={this.state.windspeed}
        description={this.state.description}
        error={this.state.error}
      />
      </div>
    )
  }
}

export default App
