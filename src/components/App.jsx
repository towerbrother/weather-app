import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";
import Error from "./Error";
import LoadingPage from "./LoadingPage";
import Footer from "./Footer";
import Header from "./Header";
import WeatherContext from "./../context/weatherContext";
import { getWeatherData } from "../utils/utils";
import { CURRENT, FORECAST } from "./../utils/constants";

const App = () => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataCurrent, setDataCurrent] = useState(null);
  const [dataForecast, setDataForecast] = useState(null);
  const [unitMeasure, setUnitMeasure] = useState("metric");
  // these two could become a single custom hook
  const [queryStringCity, setQueryStringCity] = useState("");
  const [queryStringCountry, setQueryStringCountry] = useState("");

  const handleChange = (e) => {
    setQueryStringCountry("");
    const name = e.target.name;
    if (name === "queryStringCity") setQueryStringCity(e.target.value);
    if (name === "queryStringCountry") setQueryStringCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    getWeatherData(
      CURRENT,
      queryStringCity,
      queryStringCountry,
      setDataCurrent,
      setErr,
      setLoading
    );

    getWeatherData(
      FORECAST,
      queryStringCity,
      queryStringCountry,
      setDataForecast,
      setErr,
      setLoading
    );

    setQueryStringCity("");
    setQueryStringCountry("");
  };

  const handleRadioChecked = (e) => {
    setUnitMeasure(e.target.value);
  };

  return (
    <div className="wrapper">
      <Header
        title="Weather App"
        subtitle="Check the weather before getting out of the house!"
      />
      <WeatherContext.Provider
        value={{
          dataCurrent,
          dataForecast,
          queryStringCity,
          queryStringCountry,
          unitMeasure,
          handleChange,
          handleSubmit,
          handleRadioChecked,
        }}
      >
        <div className="App">
          <div className="container">
            <Form />
            {err && <Error err={err} />}
            {loading ? (
              <LoadingPage />
            ) : (
              !err && dataCurrent && dataForecast && <Weather />
            )}
          </div>
        </div>
        <Footer
          author="Giorgio Torre"
          url="https://towerbrother.github.io/portfolio-app"
        />
      </WeatherContext.Provider>
    </div>
  );
};

export default App;
