import React, { useContext } from "react";
import Input from "./Input";
// import Radio from "./Radio";
import WeatherContext from "./../context/weatherContext";

const Form = () => {
  const {
    queryStringCity,
    queryStringCountry,
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
          <button type="submit" className="button" disabled={!queryStringCity}>
            Weather
          </button>
        </div>
        {/* <div className="boxes-container">
          <Radio type="radio" />
        </div> */}
      </form>
    </div>
  );
};

export default Form;
