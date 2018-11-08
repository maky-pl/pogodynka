import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.error && (
            <p className="alert alert-danger" role="alert">
              {this.props.error}
            </p>
          )}
        </div>

        <div className="row intro">
          {this.props.intro && <p className="">{this.props.intro}</p>}
        </div>

        <div className="row justify-content-md-center">
          <div className="col colTemperature">
            {this.props.temperature && (
              <p className="weatherTemperature">
                <span className="align-bottom">
                  {" "}
                  {this.props.temperature}&#8451;
                </span>
              </p>
            )}
          </div>
          <div className="col colIcon">
            {this.props.icon && (
              <p>
                <img
                  className="iconImage"
                  alt="icon "
                  src={require("../images/" + this.props.icon + ".png")}
                />{" "}
              </p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col justify-content-md-center">
            {" "}
            {this.props.country && this.props.city && (
              <p className="weatherCity justify-content-md-center">
                {this.props.city}, {this.props.country}{" "}
                <span>
                  {this.props.description && (
                    <span className="weatherDescription">
                      ({this.props.description})
                    </span>
                  )}
                </span>
              </p>
            )}
          </div>
        </div>
        <div className="row infoRow">
          <div className="col">
            {" "}
            {this.props.humidity && (
              <p className="weatherHumidity">
                <span className="align-bottom">
                  {" "}
                  Humidity: {this.props.humidity}%
                </span>
              </p>
            )}
          </div>
          <div className="col">
            {" "}
            {this.props.pressure && (
              <p className="weatherPressure">
                <span className="align-bottom">
                  {" "}
                  Pressure: {this.props.pressure} hPa
                </span>
              </p>
            )}
          </div>
          <div className="col">
            {this.props.windspeed && (
              <p>
                Wind: {this.props.windspeed} m/s ({this.props.winddeg}&deg;)
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
