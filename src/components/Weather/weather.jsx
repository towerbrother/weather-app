import React from "react";
import CityNameDisplay from "./CityNameDisplay";
import "./Weather.css";

const Weather = props => {
  const { dataCurrent, dataForecast, unitMeasure } = props;

  const displayWeatherIcon = iconId => {
    return (
      <img
        id="icon"
        src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
        alt="Weather icon"
      />
    );
  };

  const convertCelsius = temp => Math.round((temp - 273.15) * 10) / 10;

  const convertFahrenheit = celsius =>
    Math.round((celsius * 1.8 + 32) * 10) / 10;

  // const displayCityCurrent = () => {
  //   return (
  //     <h1 className="current-title">
  //       {dataCurrent.name}, {dataCurrent.sys.country}
  //     </h1>
  //   );
  // };

  // const displayCityForecast = () => {
  //   return (
  //     <h1 className="forecast-title">
  //       {dataForecast.city.name}, {dataForecast.city.country}
  //     </h1>
  //   );
  // };

  const displayCurrentMetric = () => {
    return (
      <div className="current-weather">
        {displayWeatherIcon(dataCurrent.weather[0].icon)}
        <p className="current-temp">
          {convertCelsius(dataCurrent.main.temp)}&deg;C
        </p>
        <span className="current-min-temp">
          min: {convertCelsius(dataCurrent.main.temp_min)}&deg;C
        </span>
        <span className="current-max-temp">
          max: {convertCelsius(dataCurrent.main.temp_max)}&deg;C
        </span>
        <h4 className="current-description">
          {dataCurrent.weather[0].description}
        </h4>
      </div>
    );
  };

  const displayCurrentFahrenheit = () => {
    return (
      <div className="current-weather">
        {displayWeatherIcon(dataCurrent.weather[0].icon)}
        <h2 className="current-temp">
          {convertFahrenheit(convertCelsius(dataCurrent.main.temp))}&deg;F
        </h2>
        <span className="current-min-temp">
          min: {convertFahrenheit(convertCelsius(dataCurrent.main.temp_min))}
          &deg;F
        </span>
        <span className="current-max-temp">
          max: {convertFahrenheit(convertCelsius(dataCurrent.main.temp_max))}
          &deg;F
        </span>
        <h4 className="current-description">
          {dataCurrent.weather[0].description}
        </h4>
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
              <p className="forecast-date">{item.dt_txt.slice(0, 10)}</p>
              {displayWeatherIcon(item.weather[0].icon)}
              <p className="forecast-temp">
                {convertCelsius(item.main.temp)}&deg;C
              </p>
              <p className="forecast-description">
                {item.weather[0].description}
              </p>
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
              <p className="forecast-date">{item.dt_txt.slice(0, 10)}</p>
              {displayWeatherIcon(item.weather[0].icon)}
              <p className="forecast-temp">
                {convertFahrenheit(convertCelsius(item.main.temp))}&deg;F
              </p>
              <p className="forecast-description">
                {item.weather[0].description}
              </p>
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
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          {displayCurrentMetric()}
        </>
      );
    } else if (!dataCurrent && dataForecast) {
      return (
        <>
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          {displayForecastMetric()}
        </>
      );
    } else {
      return (
        <>
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          {displayCurrentMetric()}
          {displayForecastMetric()}
        </>
      );
    }
  } else {
    if (dataCurrent && !dataForecast) {
      return (
        <>
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          {displayCurrentFahrenheit()}
        </>
      );
    } else if (!dataCurrent && dataForecast) {
      return (
        <>
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          {displayForecastFahrenheit()}
        </>
      );
    } else {
      return (
        <>
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          {displayCurrentFahrenheit()}
          {displayForecastFahrenheit()}
        </>
      );
    }
  }
};

export default Weather;
