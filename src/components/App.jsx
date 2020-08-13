import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";
import Error from "./Error";
import LoadingPage from "./LoadingPage";

const API = "f9b82988a14039290e02b95f5e395184";

const App = () => {
  const [dataCurrent, setDataCurrent] = useState(null);
  const [dataForecast, setDataForecast] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [queryStringCity, setQueryStringCity] = useState("");
  const [queryStringCountry, setQueryStringCountry] = useState("");
  const [showCurrent, setShowCurrent] = useState(true);
  const [showForecast, setShowForecast] = useState(false);
  const [unitMeasure, setUnitMeasure] = useState("metric");

  const handleChange = (e) => {
    setQueryStringCountry("");
    const name = e.target.name;
    if (name === "queryStringCity") setQueryStringCity(e.target.value);
    if (name === "queryStringCountry") setQueryStringCountry(e.target.value);
    // setState({[e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null);
    setDataCurrent(null);
    setDataForecast(null);
    setLoading(showCurrent + showForecast);

    if (showCurrent) {
      fetch(
        `${window.location.protocol}//api.openweathermap.org/data/2.5/weather?q=${queryStringCity},${queryStringCountry}&APPID=${API}`
      )
        .then((res) => {
          if (!res.ok) throw res;
          return res.json();
        })
        .then((dataCurrent) => {
          setDataCurrent(dataCurrent);
          setLoading(false);
        })
        .catch((err) => {
          setErr(err);
          setLoading(loading - 1);
        });
    }

    if (showForecast) {
      fetch(
        `${window.location.protocol}//api.openweathermap.org/data/2.5/forecast?q=${queryStringCity},${queryStringCountry}&APPID=${API}`
      )
        .then((res) => {
          if (!res.ok) throw res;
          return res.json();
        })
        .then((dataForecast) => {
          setDataForecast(dataForecast);
          setLoading(false);
        })
        .catch((err) => {
          setErr(err);
          setLoading(loading - 1);
        });
    }
  };

  const handleBoxChecked = (e) => {
    const id = e.target.id;
    if (id === "showCurrent") setShowCurrent(!showCurrent);
    if (id === "showForecast") setShowForecast(!showForecast);
    // setState({ [e.target.id]: !state[e.target.id] });
  };

  const handleRadioChecked = (e) => {
    setUnitMeasure(e.target.value);
  };

  return (
    <div className="App">
      <div className="content-container">
        <Form
          queryStringCity={queryStringCity}
          queryStringCountry={queryStringCountry}
          showCurrent={showCurrent}
          showForecast={showForecast}
          unitMeasure={unitMeasure}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onBoxChecked={handleBoxChecked}
          onRadioChecked={handleRadioChecked}
        />
        {err && <Error err={err} />}
        {loading ? (
          <LoadingPage />
        ) : (
          (dataCurrent || dataForecast) && (
            <Weather
              dataCurrent={dataCurrent}
              dataForecast={dataForecast}
              unitMeasure={unitMeasure}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
