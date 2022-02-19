import React, { useContext } from "react";
import Input from "./Input";
import WeatherContext from "../context/weatherContext";

const Form: () => JSX.Element = () => {
  const { queryStringCity, queryStringCountry, handleChange, handleSubmit } =
    useContext(WeatherContext);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <Input
            aria-label="city"
            label=""
            id="city"
            type="text"
            name="queryStringCity"
            placeholder="City..."
            onChange={handleChange}
            value={queryStringCity}
          />
          <Input
            aria-label="country"
            label=""
            id="country"
            type="text"
            name="queryStringCountry"
            placeholder="Country..."
            onChange={handleChange}
            value={queryStringCountry}
          />
          <button type="submit" className="button" disabled={!queryStringCity}>
            Weather
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
