import React from "react";
import Input from "./Input";

const Checkboxes = ({ type, showCurrent, showForecast, onBoxChecked }) => (
  <div className="checkbox">
    <Input
      label="Current"
      id="showCurrent"
      className="current"
      type={type}
      onChange={onBoxChecked}
      checked={showCurrent}
    />
    <Input
      label="Forecast"
      id="showForecast"
      className="forecast"
      type={type}
      onChange={onBoxChecked}
      checked={showForecast}
    />
  </div>
);

export default Checkboxes;
