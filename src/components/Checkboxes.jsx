import React, { useContext } from "react";
import Input from "./Input";
import WeatherContext from "./../context/weatherContext";

const Checkboxes = ({ type }) => {
  const { showCurrent, showForecast, handleBoxChecked } = useContext(
    WeatherContext
  );
  return (
    <div className="checkbox">
      <Input
        label="Current"
        id="showCurrent"
        className="current"
        type={type}
        onChange={handleBoxChecked}
        checked={showCurrent}
      />
      <Input
        label="Forecast"
        id="showForecast"
        className="forecast"
        type={type}
        onChange={handleBoxChecked}
        checked={showForecast}
      />
    </div>
  );
};

export default Checkboxes;
