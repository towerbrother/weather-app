import React, { useState, useContext } from "react";
import WeatherCard from "./WeatherCard";
import WeatherContext from "../context/weatherContext";

const Display = () => {
  const { dataCurrent, dataForecast } = useContext(WeatherContext);
  const arrayForecast = dataForecast.list.filter(
    (item) =>
      item.dt_txt.slice(11, 19) === dataForecast.list[39].dt_txt.slice(11, 19)
  );

  const [active, setActive] = useState(false);

  return (
    <div className="cards-display">
      <WeatherCard
        dataCurrent={dataCurrent}
        className={!active ? "active" : ""}
        onClick={() => setActive(true)}
      />
      {arrayForecast.map((item) => (
        <WeatherCard
          key={item.dt}
          item={item}
          className={active ? "active" : ""} // this is actually wrong as all forecast cards at once will activate
          onClick={() => setActive(true)}
        />
      ))}
    </div>
  );
};

export default Display;
