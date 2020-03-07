import React from "react";
import Input from "../Input/Input";

const Checkboxes = props => (
  <div className="checkbox">
    <Input
      label="Current"
      id="showCurrent"
      className="current"
      type={props.type}
      onChange={props.onBoxChecked}
      checked={props.showCurrent}
    />
    <Input
      label="Forecast"
      id="showForecast"
      className="forecast"
      type={props.type}
      onChange={props.onBoxChecked}
      checked={props.showForecast}
    />
  </div>
);

export default Checkboxes;
