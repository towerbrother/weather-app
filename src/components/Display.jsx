import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import WeatherContext from "../context/weatherContext";

const Display = () => {
  const { dataCurrent, dataForecast } = useContext(WeatherContext);

  const arrayForecast = dataForecast.list.filter(
    (item) =>
      item.dt_txt.slice(11, 19) === dataForecast.list[39].dt_txt.slice(11, 19)
  );

  return (
    <div className="cards-display">
      <WeatherCard dataCurrent={dataCurrent} />
      {arrayForecast.map((item) => (
        <WeatherCard key={item.dt} item={item} />
      ))}
    </div>
  );
};

export default Display;
