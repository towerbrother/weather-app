import React, { useContext } from "react";
import CityNameDisplay from "./CityNameDisplay";
import Display from "./Display";
import WeatherContext from "./../context/weatherContext";

const Weather = () => {
  const { dataCurrent, dataForecast } = useContext(WeatherContext);

  return (
    <>
      {dataCurrent && dataForecast && (
        <div>
          <CityNameDisplay />
          <Display />
        </div>
      )}
    </>
  );
};

export default Weather;
