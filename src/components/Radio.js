import React from "react";
import Input from "./Input";

const Radio = (props) => {
  return (
    <div className="radio">
      <Input
        label="Metric"
        id="metric"
        name="unitMeasure"
        value="metric"
        type={props.type}
        onChange={props.onRadioChecked}
        checked={props.unitMeasure === "metric"}
      />
      <Input
        label="Imperial"
        id="imperial"
        name="unitMeasure"
        value="imperial"
        type={props.type}
        onChange={props.onRadioChecked}
        checked={props.unitMeasure === "imperial"}
      />
    </div>
  );
};

export default Radio;
