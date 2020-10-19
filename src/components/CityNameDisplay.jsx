import React, { useContext } from "react";
import WeatherContext from "./../context/weatherContext";

const CityNameDisplay = () => {
  const { dataCurrent } = useContext(WeatherContext);

  return (
    <h1 className="current-title">
      {dataCurrent.name}, {dataCurrent.sys.country}
    </h1>
  );
};

export default CityNameDisplay;
