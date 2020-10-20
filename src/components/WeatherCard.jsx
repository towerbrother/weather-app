import React from "react";
import WeatherContext from "./../../context/weatherContext";

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

  const displayDate = (rowDate) => {
    // if not "Today" then Thu/Wed... and 21st 22nd 23rd 24th
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
            <div className="secondary-first-row">
              <p className="description">
                {dataCurrent.weather[0].description}
              </p>
            </div>
            <div className="secondary-second-row">
              <div className="sun-container">
                <div className="sunrise-container">
                  {/* fontawesome */}
                  <div className="sunrise-icon">SUNRISE-ICON</div>
                  {/* to be found how to get this - how to transform it? function */}
                  <div className="sunrise-time">{sunrise}</div>
                </div>
                <div className="sunset-container">
                  <div className="sunset-icon">SUNSET-ICON</div>
                  <div className="sunset-time">{sunset}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : active && item ? (
        <>
          <div className="primary-container">
            <div className="primary-first-row">
              {/* further slicing needed */}
              <h3 className="date">{displayDate(item.dt_txt.slice(0, 10))}</h3>
            </div>
            <div className="primary-second-row">
              <div className="icon">
                {displayWeatherIcon(item.weather[0].icon)}
              </div>
              <div className="temperatures">
                {unitMeasure === "metric" ? (
                  <>
                    {/* check it actually works */}
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
            <div className="secondary-first-row">
              <p className="description">{item.weather[0].description}</p>
            </div>
            <div className="secondary-second-row">
              <div className="sun-container">
                <div className="sunrise-container">
                  <div className="sunrise-icon">SUNRISE-ICON</div>
                  <div className="sunrise-time">{sunrise}</div>
                </div>
                <div className="sunset-container">
                  <div className="sunset-icon">SUNSET-ICON</div>
                  <div className="sunset-time">{sunset}</div>
                </div>
              </div>
            </div>
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
              <h3 className="date">{displayDate(item.dt_txt.slice(0, 10))}</h3>
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
