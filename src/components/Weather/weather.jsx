import React from "react";
import CityNameDisplay from "./CityNameDisplay";
import CurrentDisplay from "./CurrentDisplay";
import ForecastDisplay from "./ForecastDisplay";
import "./Weather.css";

const Weather = props => {
  const { dataCurrent, dataForecast, unitMeasure } = props;

  if (unitMeasure === "metric") {
    if (dataCurrent && !dataForecast) {
      return (
        <>
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          <CurrentDisplay dataCurrent={dataCurrent} unitMeasure={unitMeasure} />
        </>
      );
    } else if (!dataCurrent && dataForecast) {
      return (
        <>
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          <ForecastDisplay
            dataForecast={dataForecast}
            unitMeasure={unitMeasure}
          />
        </>
      );
    } else {
      return (
        <>
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          <CurrentDisplay dataCurrent={dataCurrent} unitMeasure={unitMeasure} />
          <ForecastDisplay
            dataForecast={dataForecast}
            unitMeasure={unitMeasure}
          />
        </>
      );
    }
  } else {
    if (dataCurrent && !dataForecast) {
      return (
        <>
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          <CurrentDisplay dataCurrent={dataCurrent} unitMeasure={unitMeasure} />
        </>
      );
    } else if (!dataCurrent && dataForecast) {
      return (
        <>
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          <CurrentDisplay dataCurrent={dataCurrent} unitMeasure={unitMeasure} />
        </>
      );
    } else {
      return (
        <>
          <CityNameDisplay
            dataCurrent={dataCurrent}
            dataForecast={dataForecast}
          />
          <CurrentDisplay dataCurrent={dataCurrent} unitMeasure={unitMeasure} />
          <ForecastDisplay
            dataForecast={dataForecast}
            unitMeasure={unitMeasure}
          />
        </>
      );
    }
  }
};

export default Weather;
