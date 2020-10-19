import React from "react";
import SecondaryCard from "./SecondaryCard";

const PrimaryCard = ({
  icon,
  max,
  min,
  description,
  sunrise,
  sunset,
  unitMeasure,
}) => {
  return (
    <div className="card-container">
      <SecondaryCard
        icon={icon}
        max={max}
        min={min}
        unitMeasure={unitMeasure}
      />

      <div className="primary-container">
        <div className="primary-first-row">
          <p className="description">{description}</p>
        </div>
        <div className="primary-second-row">
          <div className="icon">{displayWeatherIcon(icon)}</div>
          <div className="sun-container">
            <div className="sunrise-container">
              <div className="sunrise-icon">SUNRISE-ICON</div>
              <div className="sunrise-time">{sunrise}</div>
            </div>
            <div className="sunset-container">
              <div className="sunset-icon">SUNSET-ICON</div>
              <div className="sunset-time">{sunset}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;
