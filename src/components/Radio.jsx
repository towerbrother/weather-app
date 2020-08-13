import React, { useContext } from "react";
import Input from "./Input";
import WeatherContext from "./../context/weatherContext";

const Radio = ({ type }) => {
  const { unitMeasure, handleRadioChecked } = useContext(WeatherContext);

  return (
    <div className="radio">
      <Input
        label="Metric"
        id="metric"
        name="unitMeasure"
        value="metric"
        type={type}
        onChange={handleRadioChecked}
        checked={unitMeasure === "metric"}
      />
      <Input
        label="Imperial"
        id="imperial"
        name="unitMeasure"
        value="imperial"
        type={type}
        onChange={handleRadioChecked}
        checked={unitMeasure === "imperial"}
      />
    </div>
  );
};

export default Radio;
