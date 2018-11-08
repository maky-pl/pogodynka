import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";

const Api_Key = "b975eac6455a5e8f3d86b9260eca4bf9";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
    windspeed: undefined,
    winddeg: undefined,
    icon: undefined,
    error: undefined,
    intro: "Search for weather in your area!"
  };

  getWeather = async e => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`
    );
    const response = await api_call.json();

    if (city && country && response.cod === 200) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        windspeed: response.wind.speed,
        winddeg: response.wind.deg,
        icon: response.weather[0].icon,
        pressure: response.main.pressure,
        intro: undefined,
        error: ""
      });
    } else {
      this.setState({
        error: "Check search values to display weather!"
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container bg">
          <Search loadWeather={this.getWeather} />
          <div className="weatherContainer">
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              windspeed={this.state.windspeed}
              winddeg={this.state.winddeg}
              icon={this.state.icon}
              pressure={this.state.pressure}
              error={this.state.error}
              intro={this.state.intro}
            />
          </div>
        </div>
        <div className="container">
          <div className="row footer">
            <div className="col">
              <p>
                Data provided by:{" "}
                <a
                  href="https://openweathermap.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  openweathermap.org
                </a>
              </p>
            </div>
            <div className="col">
              Photo by:{" "}
              <a
                href="https://www.flickr.com/photos/134444378@N05"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Mariusz Kołodziej
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
