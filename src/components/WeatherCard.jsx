import React, { useContext } from "react";
import WeatherContext from "../context/weatherContext";

const WeatherCard = ({ active, dataCurrent, item }) => {
  const { unitMeasure } = useContext(WeatherContext);

  const displayWeatherIcon = (iconId) => {
    return (
      <img
        id="icon"
        src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
        alt="Weather icon"
      />
    );
  };

  const displayDate = (n) => {
    if (n === "01") {
      return n.slice(1, 2) + "st";
    } else if (n === "21" || n === "31") {
      return n + "st";
    } else if (n === "02") {
      return n.slice(1, 2) + "nd";
    } else if (n === "22") {
      return n + "nd";
    } else if (n === "03") {
      return n.slice(1, 2) + "rd";
    } else if (n === "23") {
      return n + "rd";
    } else if (
      n === "04" ||
      n === "05" ||
      n === "06" ||
      n === "07" ||
      n === "08" ||
      n === "09"
    ) {
      return n.slice(1, 2) + "th";
    } else {
      return n + "th";
    }
  };

  const convertCelsius = (temp) => Math.round((temp - 273.15) * 10) / 10;

  const convertFahrenheit = (celsius) =>
    Math.round((celsius * 1.8 + 32) * 10) / 10;

  return (
    <div className="card-container">
      {active && dataCurrent ? (
        <>
          <div className="primary-container">
            <div className="primary-first-row">
              <h3 className="date">Today</h3>
            </div>
            <div className="primary-second-row">
              <div className="icon">
                {displayWeatherIcon(dataCurrent.weather[0].icon)}
              </div>
              <div className="temperatures">
                {unitMeasure === "metric" ? (
                  <>
                    <span className="max-temp">
                      {convertCelsius(dataCurrent.main.temp_max)}&deg;C
                    </span>
                    <span className="min-temp">
                      {convertCelsius(dataCurrent.main.temp_min)}&deg;C
                    </span>
                  </>
                ) : (
                  <>
                    <span className="max-temp">
                      {convertFahrenheit(
                        convertCelsius(dataCurrent.main.temp_max)
                      )}
                      &deg;F
                    </span>
                    <span className="min-temp">
                      {convertFahrenheit(
                        convertCelsius(dataCurrent.main.temp_min)
                      )}
                      &deg;F
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="secondary-container">
            <p className="description">{dataCurrent.weather[0].description}</p>
          </div>
        </>
      ) : active && item ? (
        <>
          <div className="primary-container">
            <div className="primary-first-row">
              <h3 className="date">{displayDate(item.dt_txt.slice(8, 10))}</h3>
            </div>
            <div className="primary-second-row">
              <div className="icon">
                {displayWeatherIcon(item.weather[0].icon)}
              </div>
              <div className="temperatures">
                {unitMeasure === "metric" ? (
                  <>
                    <span className="max-temp">
                      {convertCelsius(item.main.temp_max)}&deg;C
                    </span>
                    <span className="min-temp">
                      {convertCelsius(item.main.temp_min)}&deg;C
                    </span>
                  </>
                ) : (
                  <>
                    <span className="max-temp">
                      {convertFahrenheit(convertCelsius(item.main.temp_max))}
                      &deg;F
                    </span>
                    <span className="min-temp">
                      {convertFahrenheit(convertCelsius(item.main.temp_min))}
                      &deg;F
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="secondary-container">
            <p className="description">{item.weather[0].description}</p>
          </div>
        </>
      ) : !active && dataCurrent ? (
        <>
          <div className="primary-container">
            <div className="primary-first-row">
              <h3 className="date">Today</h3>
            </div>
            <div className="primary-second-row">
              <div className="icon">
                {displayWeatherIcon(dataCurrent.weather[0].icon)}
              </div>
              <div className="temperatures">
                {unitMeasure === "metric" ? (
                  <>
                    <span className="max-temp">
                      {convertCelsius(dataCurrent.main.temp_max)}&deg;C
                    </span>
                    <span className="min-temp">
                      {convertCelsius(dataCurrent.main.temp_min)}&deg;C
                    </span>
                  </>
                ) : (
                  <>
                    <span className="max-temp">
                      {convertFahrenheit(
                        convertCelsius(dataCurrent.main.temp_max)
                      )}
                      &deg;F
                    </span>
                    <span className="min-temp">
                      {convertFahrenheit(
                        convertCelsius(dataCurrent.main.temp_min)
                      )}
                      &deg;F
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="primary-container">
            <div className="primary-first-row">
              <h3 className="date">{displayDate(item.dt_txt.slice(8, 10))}</h3>
            </div>
            <div className="primary-second-row">
              <div className="icon">
                {displayWeatherIcon(item.weather[0].icon)}
              </div>
              <div className="temperatures">
                {unitMeasure === "metric" ? (
                  <>
                    <span className="max-temp">
                      {convertCelsius(item.main.temp_max)}&deg;C
                    </span>
                    <span className="min-temp">
                      {convertCelsius(item.main.temp_min)}&deg;C
                    </span>
                  </>
                ) : (
                  <>
                    <span className="max-temp">
                      {convertFahrenheit(convertCelsius(item.main.temp_max))}
                      &deg;F
                    </span>
                    <span className="min-temp">
                      {convertFahrenheit(convertCelsius(item.main.temp_min))}
                      &deg;F
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
