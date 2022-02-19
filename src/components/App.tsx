import React, { useEffect, useState } from "react";
import Form from "./Form";
import Weather from "./Weather";
import Error from "./Error";
import LoadingPage from "./LoadingPage";
import Footer from "./Footer";
import Header from "./Header";
import WeatherContext from "../context/weatherContext";
import { getWeatherData, getInitialWeatherData } from "../utils/utils";
import { CURRENT, FORECAST } from "../utils/constants";

const App: () => JSX.Element = () => {
  const [err, setErr] = useState<boolean | null | Response>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataCurrent, setDataCurrent] = useState<any>(null);
  const [dataForecast, setDataForecast] = useState<any>(null);
  const [unitMeasure, setUnitMeasure] = useState<string>("metric");
  // these two could become a single custom hook
  const [queryStringCity, setQueryStringCity] = useState<string>("");
  const [queryStringCountry, setQueryStringCountry] = useState<string>("");

  useEffect(() => {
    const currentPositionWeather: () => Promise<void> = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setErr(null);
        setLoading(true);
        getInitialWeatherData(
          CURRENT,
          position.coords.latitude,
          position.coords.longitude,
          setDataCurrent,
          setErr,
          setLoading
        );
        getInitialWeatherData(
          FORECAST,
          position.coords.latitude,
          position.coords.longitude,
          setDataForecast,
          setErr,
          setLoading
        );
      });
    };

    currentPositionWeather();
  }, []);

  const handleChange = (e: {
    target: { name: string; value: React.SetStateAction<string> };
  }) => {
    setQueryStringCountry("");
    const name = e.target.name;
    if (name === "queryStringCity") setQueryStringCity(e.target.value);
    if (name === "queryStringCountry") setQueryStringCountry(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
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

  const handleRadioChecked = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
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
