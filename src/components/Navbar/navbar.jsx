import React from "react";
import logo from "./weather-clipart.png";
// import "./Navbar.css";

//QUESTION - why the CSS style does not kick in?

const Navbar = () => (
  <div
    className="navbar"
    style={{
      display: "flex",
      justifyContent: "flex-start",
      backgroundColor: "rgb(160, 210, 252)",
      border: "1px solid rgb(0, 0, 0)"
    }}
  >
    <img
      src={logo}
      alt="logo"
      style={{
        borderRadius: "30%",
        width: "7%",
        height: "auto",
        padding: "10px"
      }}
    />
    <h3 style={{ fontFamily: "Verdana" }}>reactWeatherApp</h3>
    {/*<About /> - route to an about page*/}
    {/*<Github /> - route to the Github repo*/}
  </div>
);

export default Navbar;
