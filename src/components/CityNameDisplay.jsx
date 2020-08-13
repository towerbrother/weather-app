import React from "react";

const CityNameDisplay = ({ dataCurrent, dataForecast }) => {
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
