import React from "react";
import Input from "../Input/input";
import Checkboxes from "../Checkboxes/checkboxes";
import RadioButton from "../RadioButton/radioButton";
import "./Form.css";

const Form = ({ onChange, onSubmit, state, onBoxChecked }) => {
  return (
    <div className="form">
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
        <RadioButton onBoxChecked={onBoxChecked} type="radio" />
        <button
          type="submit"
          className="btn btn-primary"
          //!A && !B == !(A || B)
          //A || B == !(!A && !B)
          disabled={
            !(state.showCurrentWeather || state.showForecast) ||
            !state.queryString
            //filter grey scale / opacity - class that you remove and add + transition
          }
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
