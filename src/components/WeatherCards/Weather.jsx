import React from "react";
import CityNameDisplay from "./CityNameDisplay";
import CurrentDisplay from "./CurrentDisplay";
import ForecastDisplay from "./ForecastDisplay";

const Weather = props => {
  const { dataCurrent, dataForecast, unitMeasure } = props;

  return (
    <>
      <CityNameDisplay dataCurrent={dataCurrent} dataForecast={dataForecast} />
      {dataCurrent && dataForecast ? (
        <>
          <CurrentDisplay dataCurrent={dataCurrent} unitMeasure={unitMeasure} />
          <ForecastDisplay
            dataForecast={dataForecast}
            unitMeasure={unitMeasure}
          />
        </>
      ) : dataCurrent && !dataForecast ? (
        <CurrentDisplay dataCurrent={dataCurrent} unitMeasure={unitMeasure} />
      ) : (
        <ForecastDisplay
          dataForecast={dataForecast}
          unitMeasure={unitMeasure}
        />
      )}
    </>
  );
};

export default Weather;
