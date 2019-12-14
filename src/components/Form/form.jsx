import React from "react";
import Input from "../Input/input";
import "./Form.css";
import Checkboxes from "../Checkboxes/checkboxes";

const Form = ({ onChange, onSubmit, state, onBoxChecked }) => {
  return (
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
      <button
        type="submit"
        className="btn btn-primary"
        //!A && !B == !(A || B)
        //A || B == !(!A && !B)
        disabled={
          !(state.showCurrentWeather || state.showForecast) ||
          !state.queryString
        }
      >
        Search
      </button>
    </form>
  );
};

export default Form;
