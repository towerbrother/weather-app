import React from "react";
import Input from "../Input/Input";
import Checkboxes from "../Checkboxes/Checkboxes";
import Radio from "../Radio/Radio";
import "./Form.css";

const Form = ({ onChange, onSubmit, state, onBoxChecked, onRadioChecked }) => {
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <Input
          label=""
          id="city"
          type="text"
          name="queryStringCity"
          placeholder="City..."
          onChange={onChange}
          value={state.queryStringCity}
        />
        <Input
          label=""
          id="country"
          type="text"
          name="queryStringCountry"
          placeholder="Country..."
          onChange={onChange}
          value={state.queryStringCountry}
        />
        <button
          type="submit"
          className="button"
          //!A && !B == !(A || B)
          //A || B == !(!A && !B)
          disabled={
            !(state.showCurrent || state.showForecast) || !state.queryStringCity
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
