import React, { useContext } from "react";
import Input from "./Input";
import WeatherContext from "./../context/weatherContext";

const Radio = () => {
  const { unitMeasure, handleRadioChecked } = useContext(WeatherContext);

  return (
    <div className="radio">
      <Input
        label="Metric"
        id="metric"
        name="unitMeasure"
        value="metric"
        type="radio"
        onChange={handleRadioChecked}
        checked={unitMeasure === "metric"}
      />
      <Input
        label="Imperial"
        id="imperial"
        name="unitMeasure"
        value="imperial"
        type="radio"
        onChange={handleRadioChecked}
        checked={unitMeasure === "imperial"}
      />
    </div>
  );
};

export default Radio;
