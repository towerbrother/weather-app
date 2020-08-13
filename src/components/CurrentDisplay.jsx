import React from "react";

const CurrentDisplay = ({ unitMeasure, dataCurrent }) => {
  const displayWeatherIcon = (iconId) => {
    return (
      <img
        id="icon"
        src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
        alt="Weather icon"
      />
    );
  };

  const convertCelsius = (temp) => Math.round((temp - 273.15) * 10) / 10;

  const convertFahrenheit = (celsius) =>
    Math.round((celsius * 1.8 + 32) * 10) / 10;

  return (
    <div className="current-weather">
      {displayWeatherIcon(dataCurrent.weather[0].icon)}
      {unitMeasure === "metric" ? (
        <>
          <p className="current-temp">
            {convertCelsius(dataCurrent.main.temp)}&deg;C
          </p>
          <span className="current-min-temp">
            min: {convertCelsius(dataCurrent.main.temp_min)}&deg;C
          </span>
          <span className="current-max-temp">
            max: {convertCelsius(dataCurrent.main.temp_max)}&deg;C
          </span>
        </>
      ) : (
        <>
          <p className="current-temp">
            {convertFahrenheit(convertCelsius(dataCurrent.main.temp))}&deg;F
          </p>
          <span className="current-min-temp">
            min: {convertFahrenheit(convertCelsius(dataCurrent.main.temp_min))}
            &deg;F
          </span>
          <span className="current-max-temp">
            max: {convertFahrenheit(convertCelsius(dataCurrent.main.temp_max))}
            &deg;F
          </span>
        </>
      )}
      <h4 className="current-description">
        {dataCurrent.weather[0].description}
      </h4>
    </div>
  );
};

export default CurrentDisplay;
