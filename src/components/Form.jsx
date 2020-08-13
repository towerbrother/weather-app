import React from "react";
import Input from "./Input";
import Checkboxes from "./Checkboxes";
import Radio from "./Radio";

const Form = ({
  onChange,
  onSubmit,
  onBoxChecked,
  onRadioChecked,
  queryStringCity,
  queryStringCountry,
  showCurrent,
  showForecast,
  unitMeasure,
}) => {
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
            value={queryStringCity}
          />
          <Input
            label=""
            id="country"
            type="text"
            name="queryStringCountry"
            placeholder="Country..."
            onChange={onChange}
            value={queryStringCountry}
          />
          <button
            type="submit"
            className="button"
            //!A && !B == !(A || B)
            //A || B == !(!A && !B)
            disabled={!(showCurrent || showForecast) || !queryStringCity}
          >
            Weather
          </button>
        </div>
        <div className="boxes-container">
          <Checkboxes
            showCurrent={showCurrent}
            showForecast={showForecast}
            onBoxChecked={onBoxChecked}
            type="checkbox"
          />
          <Radio
            onRadioChecked={onRadioChecked}
            unitMeasure={unitMeasure}
            type="radio"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
