import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import WeatherContext from "../context/weatherContext";
import { IWeatherItem } from "../interfaces/IWeather";

const Display: () => JSX.Element = () => {
  const { dataCurrent, dataForecast } = useContext(WeatherContext);
  return (
    <div className="cards-display">
      {dataCurrent &&
        dataCurrent.items.map((item: IWeatherItem) => (
          <WeatherCard
            key={item.date}
            date={item.date}
            maxTemp={item.maxTemp}
            minTemp={item.minTemp}
            description={item.description}
            icon={item.icon}
          />
        ))}
      {dataForecast &&
        dataForecast.items.map((item: IWeatherItem) => (
          <WeatherCard
            key={item.date}
            date={item.date}
            maxTemp={item.maxTemp}
            minTemp={item.minTemp}
            description={item.description}
            icon={item.icon}
          />
        ))}
    </div>
  );
};

export default Display;
