import React from "react";
import Input from "../Input/input";
import "./Form.css";
import Checkboxes from "../Checkboxes/checkboxes";

const Form = ({ onChange, onSubmit, state, onBoxChecked }) => (
  <form className="form-inline" onSubmit={onSubmit}>
    <Input
      label="City?"
      id="city"
      type="text"
      placeholder="Enter city"
      onChange={onChange}
      value={state.queryString}
    />
    <Checkboxes
      showCurrentWeather={state.showCurrentWeather}
      showForecastWeather={state.showForecastWeather}
      onBoxChecked={onBoxChecked}
      type="checkbox"
    />
    <button type="submit" className="btn btn-light">
      Search
    </button>
  </form>
);

export default Form;
