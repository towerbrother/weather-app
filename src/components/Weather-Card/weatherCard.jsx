import React from "react";

const WeatherCard = props => {
  const { dataCurrent, dataForecast } = props;

  //to display only 5 elements from "tomorrow"
  // const indexes = [7, 15, 23, 31, 39];
  // const items = indexes.map(index => dataForecast.list[index]);

  const weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-shower",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  };

  const convertCelsius = temp => Math.round((temp - 273.15) * 10) / 10;

  const convertFahrenheit = celsius => celsius * 1.8 + 32;

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

  return (
    <div className="current">
      <h1 className="p-2">
        {dataCurrent.name}, {dataCurrent.sys.country}
      </h1>
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

  // if (dataCurrent && !dataForecast) {
  //   return (
  //     <div className="current">
  //       <h1 className="p-2">
  //         {dataCurrent.name}, {dataCurrent.sys.country}
  //       </h1>
  //       <h5 className="p-2">
  //         <i
  //           className={`wi ${getWeatherIcon(
  //             dataCurrent.weather[0].id
  //           )} display-1`}
  //         ></i>
  //       </h5>
  //       <h2 className="p-2">{convertCelsius(dataCurrent.main.temp)}&deg;</h2>
  //       <span className="px-4">
  //         min: {convertCelsius(dataCurrent.main.temp_min)}
  //       </span>
  //       <span className="px-4">
  //         max: {convertCelsius(dataCurrent.main.temp_max)}
  //       </span>
  //       <h4 className="p-2">{dataCurrent.weather[0].description}</h4>
  //     </div>
  //   );
  // } else if (!dataCurrent && dataForecast) {
  //   return (
  //     <div className="grid-container">
  //       {items.map(item => (
  //         <div key={item.dt} className="grid-item">
  //           <h4 className="p-2">{item.dt_txt}</h4>
  //           <h5 className="p-2">
  //             <i className={`wi ${getWeatherIcon(item.weather[0].id)}`}></i>
  //           </h5>
  //           <h3 className="p-2">{convertCelsius(item.main.temp)}&deg;</h3>
  //           <h4 className="p-2">{item.weather[0].description}</h4>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="container">
  //       <div className="current">
  //         <h1 className="p-2">
  //           {dataCurrent.name}, {dataCurrent.sys.country}
  //         </h1>
  //         <h5 className="p-2">
  //           <i
  //             className={`wi ${getWeatherIcon(
  //               dataCurrent.weather[0].id
  //             )} display-1`}
  //           ></i>
  //         </h5>
  //         <h2 className="p-2">{convertCelsius(dataCurrent.main.temp)}&deg;</h2>
  //         <span className="px-4">
  //           min: {convertCelsius(dataCurrent.main.temp_min)}
  //         </span>
  //         <span className="px-4">
  //           max: {convertCelsius(dataCurrent.main.temp_max)}
  //         </span>
  //         <h4 className="p-2">{dataCurrent.weather[0].description}</h4>
  //       </div>
  //       <div className="grid-container">
  //         {items.map(item => (
  //           <div key={item.dt} className="grid-item">
  //             <h4 className="p-2">{item.dt_txt}</h4>
  //             <h5 className="p-2">
  //               <i className={`wi ${getWeatherIcon(item.weather[0].id)}`}></i>
  //             </h5>
  //             <h3 className="p-2">{convertCelsius(item.main.temp)}&deg;</h3>
  //             <h4 className="p-2">{item.weather[0].description}</h4>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
};

export default WeatherCard;
