import React from "react";
import Input from "./Input";

const Radio = ({ type, onRadioChecked, unitMeasure }) => {
  return (
    <div className="radio">
      <Input
        label="Metric"
        id="metric"
        name="unitMeasure"
        value="metric"
        type={type}
        onChange={onRadioChecked}
        checked={unitMeasure === "metric"}
      />
      <Input
        label="Imperial"
        id="imperial"
        name="unitMeasure"
        value="imperial"
        type={type}
        onChange={onRadioChecked}
        checked={unitMeasure === "imperial"}
      />
    </div>
  );
};

export default Radio;
