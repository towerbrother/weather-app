import React, { useContext } from "react";
import WeatherContext from "../context/weatherContext";

const Error: () => JSX.Element = () => {
  const { err } = useContext(WeatherContext);

  return (
    <div className="error">
      <p>{err.status}</p>
      <p>{err.message}</p>
    </div>
  );
};

export default Error;
