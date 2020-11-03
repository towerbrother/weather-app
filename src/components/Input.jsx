import React from "react";

const Input = ({ label, ...props }) => (
  <label htmlFor={props.id}>
    {label && label}
    <input {...props} autoComplete="off" />
  </label>
);

export default Input;
