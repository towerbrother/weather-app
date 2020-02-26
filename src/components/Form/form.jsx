import React from "react";
import Input from "../Input/input";
import Checkboxes from "../Checkboxes/checkboxes";
import Radio from "../Radio/radio";
import "./Form.css";

const Form = ({ onChange, onSubmit, state, onBoxChecked, onRadioChecked }) => {
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <Input
          label=""
          id="city"
          type="text"
          placeholder="City..."
          onChange={onChange}
          value={state.queryString}
        />
        <button
          type="submit"
          className="button"
          //!A && !B == !(A || B)
          //A || B == !(!A && !B)
          disabled={
            !(state.showCurrent || state.showForecast) || !state.queryString
          }
        >
          Get Weather
        </button>
        <Checkboxes
          showCurrent={state.showCurrent}
          showForecast={state.showForecast}
          onBoxChecked={onBoxChecked}
          type="checkbox"
        />
        <Radio
          onRadioChecked={onRadioChecked}
          unitMeasure={state.unitMeasure}
          type="radio"
        />
      </form>
    </div>
  );
};

export default Form;
