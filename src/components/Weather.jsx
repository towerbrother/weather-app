import React from "react";
import CurrentDisplay from "./CurrentDisplay";
import ForecastDisplay from "./ForecastDisplay";
import CityNameDisplay from "./CityNameDisplay";

const Weather = ({ dataCurrent, dataForecast, unitMeasure }) => {
  return (
    <div>
      <CityNameDisplay dataCurrent={dataCurrent} dataForecast={dataForecast} />
      {dataCurrent && dataForecast ? (
        <div>
          <CurrentDisplay dataCurrent={dataCurrent} unitMeasure={unitMeasure} />
          <ForecastDisplay
            dataForecast={dataForecast}
            unitMeasure={unitMeasure}
          />
        </div>
      ) : dataCurrent && !dataForecast ? (
        <CurrentDisplay dataCurrent={dataCurrent} unitMeasure={unitMeasure} />
      ) : (
        <ForecastDisplay
          dataForecast={dataForecast}
          unitMeasure={unitMeasure}
        />
      )}
    </div>
  );
};

export default Weather;
