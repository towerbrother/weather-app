import React, { useContext } from "react";
import WeatherContext from "../context/weatherContext";

const Display = () => {
  const { dataCurrent, dataForecast, unitMeasure } = useContext(WeatherContext);

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

export default Display;

// const ForecastDisplay = () => {
//   const { dataForecast, unitMeasure } = useContext(WeatherContext);

//   const displayWeatherIcon = (iconId) => {
//     return (
//       <img
//         id="icon"
//         src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
//         alt="Weather icon"
//       />
//     );
//   };

//   const arrayForecast = dataForecast.list.filter(
//     (item) =>
//       item.dt_txt.slice(11, 19) === dataForecast.list[39].dt_txt.slice(11, 19)
//   );

//   return (
//     <div className="forecast">
//       <div className="forecast-container">
//         {arrayForecast.map((item) => (
//           <div key={item.dt} className="forecast-item">
//             <p className="forecast-date">{item.dt_txt.slice(0, 10)}</p>
//             {displayWeatherIcon(item.weather[0].icon)}
//             {unitMeasure === "metric" ? (
//               <p className="forecast-temp">
//                 {convertCelsius(item.main.temp)}&deg;C
//               </p>
//             ) : (
//               <p className="forecast-temp">
//                 {convertFahrenheit(convertCelsius(item.main.temp))}&deg;F
//               </p>
//             )}
//             <p className="forecast-description">
//               {item.weather[0].description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ForecastDisplay;
