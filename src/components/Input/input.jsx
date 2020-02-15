import React from "react";
import "./Input.css";

const Input = ({ label, ...props }) => (
  <>
    {/* the logic below ensures to display only if label is truthy */}
    {label && <label htmlFor={props.id}>{label}</label>}
    <input {...props} />
  </>
);

export default Input;
