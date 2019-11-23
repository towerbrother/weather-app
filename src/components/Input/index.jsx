import React from "react";
import "./Input.css";

const Input = ({ label, ...props }) => (
  <div className="container">
    {label && <label htmlFor={props.id}>{label}</label>}
    <input {...props} />
  </div>
);

export default Input;
