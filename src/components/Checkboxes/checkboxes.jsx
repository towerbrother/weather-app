import React from "react";
import "./Checkboxes.css";
import Input from "../Input/input";

const Checkboxes = props => (
  <div className="checkbox">
    <Input
      label="Current Weather"
      id="showCurrent"
      className="form-check-input"
      type={props.type}
      onChange={props.onBoxChecked}
      checked={props.showCurrent}
    />
    <Input
      label="Weather Forecast"
      id="showForecast"
      className="form-check-input"
      type={props.type}
      onChange={props.onBoxChecked}
      checked={props.showForecast}
    />
  </div>
);

export default Checkboxes;
