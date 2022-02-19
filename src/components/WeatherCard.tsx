import React, { useContext } from "react";
import WeatherContext from "../context/weatherContext";

const WeatherCard: ({ dataCurrent, item }: any) => JSX.Element = ({
  dataCurrent,
  item,
}: any) => {
  const { unitMeasure } = useContext(WeatherContext);

  const displayWeatherIcon = (iconId: string) => {
    return (
      <img
        id="icon"
        src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
        alt="Weather icon"
      />
    );
  };

  const displayDate: (date: string) => string = (date: string) => {
    const dateArray = new Date(date).toString().split(" ");
    const day = dateArray[0];
    const n = dateArray[2];

    switch (n) {
      case "01":
      case "02":
      case "03":
      case "04":
      case "05":
      case "06":
      case "07":
      case "08":
      case "09":
        return `${day} ${n.slice(1, 2)}${
          n === "01" ? "st" : n === "02" ? "nd" : n === "03" ? "rd" : "th"
        }`;
      case "21":
      case "31":
      case "22":
      case "23":
        return `${day} ${n}${n === "22" ? "nd" : n === "23" ? "rd" : "st"}`;
      default:
        return `${day} ${n}th`;
    }
  };

  const convertCelsius: (temp: number) => string = (temp: number) =>
    (Math.round((temp - 273.15) * 10) / 10).toFixed(1);

  const convertFahrenheit: (temp: number) => string = (celsius: number) =>
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
                      parseFloat(convertCelsius(dataCurrent.main.temp_max))
                    )}
                    &deg;F
                  </span>
                  <span className="temp">
                    {convertFahrenheit(
                      parseFloat(convertCelsius(dataCurrent.main.temp_min))
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
                    {convertFahrenheit(
                      parseFloat(convertCelsius(item.main.temp_max))
                    )}
                    &deg;F
                  </span>
                  <span className="temp">
                    {convertFahrenheit(
                      parseFloat(convertCelsius(item.main.temp_min))
                    )}
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
