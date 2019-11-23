import React from "react";
import logo from "./weather-clipart.png";

const Navbar = props => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      backgroundColor: "#d3d3d3"
    }}
  >
    <img
      src={logo}
      style={{
        borderRadius: "30%",
        width: "5%",
        height: "auto",
        padding: "10px"
      }}
    />
    <h3 style={{ fontFamily: "Verdana" }}>reactWeatherApp</h3>
    {/*<About />*/}
  </div>
);

export default Navbar;
