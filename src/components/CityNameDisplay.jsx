import React, { useContext } from "react";
import WeatherContext from "./../context/weatherContext";

const CityNameDisplay = () => {
  const { dataCurrent } = useContext(WeatherContext);

  return (
    <div>
      <h1 className="city-name">
        {`${dataCurrent.name}, ${dataCurrent.sys.country}`}
      </h1>
    </div>
  );
};

export default CityNameDisplay;
