import React from "react";

const ForecastDisplay = (props) => {
  const { dataForecast, unitMeasure } = props;

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

  const arrayForecast = dataForecast.list.filter(
    (item) =>
      item.dt_txt.slice(11, 19) === dataForecast.list[39].dt_txt.slice(11, 19)
  );

  return (
    <div className="forecast">
      <div className="forecast-container">
        {arrayForecast.map((item) => (
          <div key={item.dt} className="forecast-item">
            <p className="forecast-date">{item.dt_txt.slice(0, 10)}</p>
            {displayWeatherIcon(item.weather[0].icon)}
            {unitMeasure === "metric" ? (
              <p className="forecast-temp">
                {convertCelsius(item.main.temp)}&deg;C
              </p>
            ) : (
              <p className="forecast-temp">
                {convertFahrenheit(convertCelsius(item.main.temp))}&deg;F
              </p>
            )}
            <p className="forecast-description">
              {item.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;
