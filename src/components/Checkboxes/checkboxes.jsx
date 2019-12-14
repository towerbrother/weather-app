import React from "react";
import "./Checkboxes.css";
import Input from "../Input/input";

const Checkboxes = props => (
  <>
    <Input
      label="Current Weather"
      id="showCurrentWeather"
      type="checkbox"
      onChange={props.onBoxChecked}
      checked={props.showCurrentWeather}
    />
    <Input
      label="Weather Forecast"
      id="showForecast"
      type="checkbox"
      onChange={props.onBoxChecked}
      checked={props.showForecast}
    />
    {/* <label className="form-check-label" htmlFor="showCurrentWeather">
      Current Weather
      <input
        className="form-check-input"
        id="showCurrentWeather"
        type={props.type}
        onChange={props.onBoxChecked}
        defaultChecked
      />
    </label> */}
    {/* {/* <label className="form-check-label" htmlFor="showForecast">
      Weather Forecast
      <input
        className="form-check-input"
        id="showForecast"
        type={props.type}
        onChange={props.onBoxChecked}
        checked={}
      /> */}
    {/* </label> */}
  </>
);

export default Checkboxes;
