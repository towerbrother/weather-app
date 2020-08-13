import React, { useContext } from "react";
import WeatherContext from "./../context/weatherContext";

const CityNameDisplay = () => {
  const { dataCurrent, dataForecast } = useContext(WeatherContext);

  return dataCurrent ? (
    <h1 className="current-title">
      {dataCurrent.name}, {dataCurrent.sys.country}
    </h1>
  ) : (
    <h1 className="forecast-title">
      {dataForecast.city.name}, {dataForecast.city.country}
    </h1>
  );
};

export default CityNameDisplay;
