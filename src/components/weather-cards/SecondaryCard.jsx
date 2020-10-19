import React from "react";

// CURRENT
// date - ??
// icon - dataCurrent.weather[0].icon
// max - dataCurrent.main.temp_max
// min - dataCurrent.main.temp_min

// FORECAST
// const arrayForecast = dataForecast.list.filter((item) => item.dt_txt.slice(11, 19) === dataForecast.list[39].dt_txt.slice(11, 19));
// {arrayForecast.map((item) => (...); // need to get the element "item"

// date - item.dt_txt.slice(0, 10)
// icon - item.weather[0].icon
// max - item.main.temp_max
// min - item.main.temp_min

const SecondaryCard = ({ icon, max, min, unitMeasure }) => {
  return (
    <div className="secondary-container">
      <div className="secondary-first-row">
        <h3 className="date">DAY Xth</h3>
      </div>
      <div className="secondary-second-row">
        <div className="icon">{displayWeatherIcon(icon)}</div>
        {unitMeasure === "metric" ? (
          <>
            <span className="max-temp">{convertCelsius(max)}&deg;C</span>
            <span className="min-temp">{convertCelsius(min)}&deg;C</span>
          </>
        ) : (
          <>
            <span className="max-temp">{convertCelsius(max)}&deg;F</span>
            <span className="min-temp">{convertCelsius(min)}&deg;F</span>
          </>
        )}
      </div>
    </div>
  );
};

export default SecondaryCard;
