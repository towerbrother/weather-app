import React, { useContext } from "react";
import WeatherContext from "./../context/weatherContext";

const CityNameDisplay = () => {
  const { dataCurrent } = useContext(WeatherContext);

  return (
    <div>
      <h1 className="city-name">
        <span>{dataCurrent.name}</span> <span>{dataCurrent.sys.country}</span>
      </h1>
    </div>
  );
};

export default CityNameDisplay;
