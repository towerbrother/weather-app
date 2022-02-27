import React, { useContext } from "react";
import WeatherContext from "../context/weatherContext";

const CityNameDisplay: () => JSX.Element = () => {
  const { dataCurrent } = useContext(WeatherContext);

  return (
    <div>
      <h1 className="city-name">
        {`${dataCurrent.city}, ${dataCurrent.country}`}
      </h1>
    </div>
  );
};

export default CityNameDisplay;
