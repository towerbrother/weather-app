import React, { useContext } from "react";
import WeatherContext from "../context/weatherContext";

const WeatherCard = ({ dataCurrent, item }) => {
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

  const displayDate = (date) => {
    const dateArray = new Date(date).toString().split(" ");
    const day = dateArray[0];
    const n = dateArray[2];

    if (n === "01") {
      return n.slice(1, 2) + "st";
    } else if (n === "21" || n === "31") {
      return day + " " + n + "st";
    } else if (n === "02") {
      return day + " " + n.slice(1, 2) + "nd";
    } else if (n === "22") {
      return day + " " + n + "nd";
    } else if (n === "03") {
      return day + " " + n.slice(1, 2) + "rd";
    } else if (n === "23") {
      return day + " " + n + "rd";
    } else if (
      n === "04" ||
      n === "05" ||
      n === "06" ||
      n === "07" ||
      n === "08" ||
      n === "09"
    ) {
      return day + " " + n.slice(1, 2) + "th";
    } else {
      return day + " " + n + "th";
    }
  };

  const convertCelsius = (temp) =>
    (Math.round((temp - 273.15) * 10) / 10).toFixed(1);

  const convertFahrenheit = (celsius) =>
    (Math.round((celsius * 1.8 + 32) * 10) / 10).toFixed(1);

  return (
    <div className="card-container">
      {dataCurrent ? (
        <>
          <div className="first-row">
            <h3 className="date">Today</h3>
          </div>
          <div className="second-row">
            <div className="icon">
              {displayWeatherIcon(dataCurrent.weather[0].icon)}
            </div>
            <div className="temperatures">
              {unitMeasure === "metric" ? (
                <>
                  <span className="temp">
                    {convertCelsius(dataCurrent.main.temp_max)}&deg;C
                  </span>
                  <span className="temp">
                    {convertCelsius(dataCurrent.main.temp_min)}&deg;C
                  </span>
                </>
              ) : (
                <>
                  <span className="temp">
                    {convertFahrenheit(
                      convertCelsius(dataCurrent.main.temp_max)
                    )}
                    &deg;F
                  </span>
                  <span className="temp">
                    {convertFahrenheit(
                      convertCelsius(dataCurrent.main.temp_min)
                    )}
                    &deg;F
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="third-row">
            <p className="description">{dataCurrent.weather[0].description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="first-row">
            <h3 className="date">{displayDate(item.dt_txt)}</h3>
          </div>
          <div className="second-row">
            <div className="icon">
              {displayWeatherIcon(item.weather[0].icon)}
            </div>
            <div className="temperatures">
              {unitMeasure === "metric" ? (
                <>
                  <span className="temp">
                    {convertCelsius(item.main.temp_max)}&deg;C
                  </span>
                  <span className="temp">
                    {convertCelsius(item.main.temp_min)}&deg;C
                  </span>
                </>
              ) : (
                <>
                  <span className="temp">
                    {convertFahrenheit(convertCelsius(item.main.temp_max))}
                    &deg;F
                  </span>
                  <span className="temp">
                    {convertFahrenheit(convertCelsius(item.main.temp_min))}
                    &deg;F
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="third-row">
            <p className="description">{item.weather[0].description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
