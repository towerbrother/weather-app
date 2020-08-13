import React, { useContext } from "react";
import Input from "./Input";
import Checkboxes from "./Checkboxes";
import Radio from "./Radio";
import WeatherContext from "./../context/weatherContext";

const Form = () => {
  const {
    queryStringCity,
    queryStringCountry,
    showCurrent,
    showForecast,
    handleChange,
    handleSubmit,
  } = useContext(WeatherContext);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <Input
            label=""
            id="city"
            type="text"
            name="queryStringCity"
            placeholder="City..."
            onChange={handleChange}
            value={queryStringCity}
          />
          <Input
            label=""
            id="country"
            type="text"
            name="queryStringCountry"
            placeholder="Country..."
            onChange={handleChange}
            value={queryStringCountry}
          />
          <button
            type="submit"
            className="button"
            disabled={!(showCurrent || showForecast) || !queryStringCity}
          >
            Weather
          </button>
        </div>
        <div className="boxes-container">
          <Checkboxes type="checkbox" />
          <Radio type="radio" />
        </div>
      </form>
    </div>
  );
};

export default Form;
