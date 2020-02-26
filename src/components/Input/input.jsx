import React from "react";
import "./Input.css";

const Input = ({ label, ...props }) => (
  <>
    {label && <label htmlFor={props.id}>{label}</label>}
    <input {...props} />
  </>
);

export default Input;
