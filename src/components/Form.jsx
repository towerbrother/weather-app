import React from "react";
import Input from "./Input";
import Checkboxes from "./Checkboxes";
import Radio from "./Radio";

const Form = ({ onChange, onSubmit, state, onBoxChecked, onRadioChecked }) => {
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="input-container">
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
              !(state.showCurrent || state.showForecast) ||
              !state.queryStringCity
            }
          >
            Weather
          </button>
        </div>
        <div className="boxes-container">
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
        </div>
      </form>
    </div>
  );
};

export default Form;
