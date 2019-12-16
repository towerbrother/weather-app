import React from "react";
import Input from "../Input/input";

const RadioButton = props => {
  return (
    <div className="radio">
      <Input
        label="Metric"
        id="metric"
        name="measure"
        value="metric"
        type={props.type}
        onChange={props.onBoxChecked}
        checked
      />
      <Input
        label="Imperial"
        id="imperial"
        name="measure"
        value="imperial"
        type={props.type}
        onChange={props.onBoxChecked}
      />
    </div>
  );
};

export default RadioButton;
