import React from "react";
import "./Input.css";

const Input = ({ label, ...props }) => (
  <>
    {label && <label htmlFor={props.id}>{label}</label>}
    <input {...props} autoComplete="off" />
  </>
);

export default Input;
