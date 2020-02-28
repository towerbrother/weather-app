import React from "react";
import "./Weather.css";

const Weather = props => {
  const { dataCurrent, dataForecast, unitMeasure } = props;

  const weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-shower",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  };

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

  const convertCelsius = temp => Math.round((temp - 273.15) * 10) / 10;

  const convertFahrenheit = celsius =>
    Math.round((celsius * 1.8 + 32) * 10) / 10;

  const displayCity = () => {
    return (
      <h1 className="p-2">
        {dataCurrent.name}, {dataCurrent.sys.country}
      </h1>
    );
  };

  const displayCurrentMetric = () => {
    return (
      <div className="current-weather">
        <h5 className="p-2">
          <i
            className={`wi ${getWeatherIcon(
              dataCurrent.weather[0].id
            )} display-1`}
          ></i>
        </h5>
        <h2 className="p-2">{convertCelsius(dataCurrent.main.temp)}&deg;C</h2>
        <span className="px-4">
          min: {convertCelsius(dataCurrent.main.temp_min)}&deg;C
        </span>
        <span className="px-4">
          max: {convertCelsius(dataCurrent.main.temp_max)}&deg;C
        </span>
        <h4 className="p-2">{dataCurrent.weather[0].description}</h4>
      </div>
    );
  };

  const displayCurrentFahrenheit = () => {
    return (
      <div className="current-weather">
        <h5 className="p-2">
          <i
            className={`wi ${getWeatherIcon(
              dataCurrent.weather[0].id
            )} display-1`}
          ></i>
        </h5>
        <h2 className="p-2">
          {convertFahrenheit(convertCelsius(dataCurrent.main.temp))}&deg;F
        </h2>
        <span className="px-4">
          min: {convertFahrenheit(convertCelsius(dataCurrent.main.temp_min))}
          &deg;F
        </span>
        <span className="px-4">
          max: {convertFahrenheit(convertCelsius(dataCurrent.main.temp_max))}
          &deg;F
        </span>
        <h4 className="p-2">{dataCurrent.weather[0].description}</h4>
      </div>
    );
  };

  const displayForecastMetric = () => {
    const arrayForecast = dataForecast.list.filter(
      item =>
        item.dt_txt.slice(11, 19) === dataForecast.list[39].dt_txt.slice(11, 19)
    );
    return (
      <div className="forecast">
        <div className="grid-container">
          {arrayForecast.map(item => (
            <div key={item.dt} className="grid-item">
              <h4 className="p-2">{item.dt_txt.slice(0, 10)}</h4>
              <h5 className="p-2">
                <i className={`wi ${getWeatherIcon(item.weather[0].id)}`}></i>
              </h5>
              <h3 className="p-2">{convertCelsius(item.main.temp)}&deg;C</h3>
              <h4 className="p-2">{item.weather[0].description}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const displayForecastFahrenheit = () => {
    const arrayForecast = dataForecast.list.filter(
      item =>
        item.dt_txt.slice(11, 19) === dataForecast.list[39].dt_txt.slice(11, 19)
    );
    return (
      <div className="forecast">
        <div className="grid-container">
          {arrayForecast.map(item => (
            <div key={item.dt} className="grid-item">
              <h4 className="p-2">{item.dt_txt.slice(0, 10)}</h4>
              <h5 className="p-2">
                <i className={`wi ${getWeatherIcon(item.weather[0].id)}`}></i>
              </h5>
              <h3 className="p-2">
                {convertFahrenheit(convertCelsius(item.main.temp))}&deg;F
              </h3>
              <h4 className="p-2">{item.weather[0].description}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (unitMeasure === "metric") {
    if (dataCurrent && !dataForecast) {
      return (
        <>
          {displayCity()}
          {displayCurrentMetric()}
        </>
      );
    } else if (!dataCurrent && dataForecast) {
      return (
        <>
          {displayCity()}
          {displayForecastMetric()}
        </>
      );
    } else {
      return (
        <>
          {displayCity()}
          {displayCurrentMetric()}
          {displayForecastMetric()}
        </>
      );
    }
  } else {
    if (dataCurrent && !dataForecast) {
      return (
        <>
          {displayCity()}
          {displayCurrentFahrenheit()}
        </>
      );
    } else if (!dataCurrent && dataForecast) {
      return (
        <>
          {displayCity()}
          {displayForecastFahrenheit()}
        </>
      );
    } else {
      return (
        <>
          {displayCity()}
          {displayCurrentFahrenheit()}
          {displayForecastFahrenheit()}
        </>
      );
    }
  }
};

export default Weather;
