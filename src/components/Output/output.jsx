import React from "react";

class Output extends React.Component {
  render() {
    const { data } = this.props;

    const weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-shower",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };

    const convertCelsius = temp => temp - 273.15;

    const getWeatherIcon = iconId => {
      switch (true) {
        case iconId >= 200 && iconId < 300:
          return weatherIcon.Thunderstorm;
        case iconId >= 300 && iconId < 400:
          return weatherIcon.Drizzle;
        case iconId >= 500 && iconId < 600:
          return weatherIcon.Rain;
        case iconId >= 600 && iconId < 700:
          return weatherIcon.Snow;
        case iconId >= 700 && iconId < 800:
          return weatherIcon.Atmosphere;
        case iconId === 800:
          return weatherIcon.Clear;
        case iconId > 800 && iconId < 900:
          return weatherIcon.Clouds;
      }
    };

    return (
      <div className="container">
        <h2 className="p-2">
          {data.name}, {data.sys.country}
        </h2>
        <h5 className="p-2">
          <i
            className={`wi ${getWeatherIcon(data.weather[0].id)} display-1`}
          ></i>
        </h5>
        <h1 className="p-2">{convertCelsius(data.main.temp)}&deg;</h1>
        <span className="px-4">min: {convertCelsius(data.main.temp_min)}</span>
        <span className="px-4">max: {convertCelsius(data.main.temp_max)}</span>
        <h4 className="p-2">{data.weather[0].description}</h4>
      </div>
    );
  }
}

export default Output;
