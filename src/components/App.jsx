import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";
import Error from "./Error";
import LoadingPage from "./LoadingPage";
import Footer from "./Footer";
import Header from "./Header";
import WeatherContext from "./../context/weatherContext";
import { fetchData } from "./../utils/fetch";
import { current, forecast } from "./../utils/constants";

export const API = "f9b82988a14039290e02b95f5e395184";

const App = () => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataCurrent, setDataCurrent] = useState(null);
  const [dataForecast, setDataForecast] = useState(null);
  const [unitMeasure, setUnitMeasure] = useState("metric");

  // these two could become a single custom hook
  const [queryStringCity, setQueryStringCity] = useState("");
  const [queryStringCountry, setQueryStringCountry] = useState("");

  const getWeatherData = async (
    content,
    queryStringCity,
    queryStringCountry,
    callback
  ) => {
    const data = await fetchData(content, queryStringCity, queryStringCountry);
    callback(data);
  };

  const handleChange = (e) => {
    setQueryStringCountry("");
    const name = e.target.name;
    if (name === "queryStringCity") setQueryStringCity(e.target.value);
    if (name === "queryStringCountry") setQueryStringCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null);

    try {
      getWeatherData(
        current,
        queryStringCity,
        queryStringCountry,
        setDataCurrent
      );
    } catch (err) {
      setErr(err);
      setLoading(loading - 1);
    }

    try {
      getWeatherData(
        forecast,
        queryStringCity,
        queryStringCountry,
        setDataForecast
      );
    } catch (err) {
      setErr(err);
      setLoading(loading - 1);
    }

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
              dataCurrent && dataForecast && <Weather />
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
