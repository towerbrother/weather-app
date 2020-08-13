import React, { useContext } from "react";
import CurrentDisplay from "./CurrentDisplay";
import ForecastDisplay from "./ForecastDisplay";
import CityNameDisplay from "./CityNameDisplay";
import WeatherContext from "./../context/weatherContext";

const Weather = () => {
  const { dataCurrent, dataForecast } = useContext(WeatherContext);

  return (
    <div>
      <CityNameDisplay />
      {dataCurrent && dataForecast ? (
        <div>
          <CurrentDisplay />
          <ForecastDisplay />
        </div>
      ) : dataCurrent && !dataForecast ? (
        <CurrentDisplay />
      ) : (
        <ForecastDisplay />
      )}
    </div>
  );
};

export default Weather;
