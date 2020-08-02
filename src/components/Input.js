import React from "react";

const Input = ({ label, ...props }) => (
  <div>
    {label && <label htmlFor={props.id}>{label}</label>}
    <input {...props} autoComplete="off" />
  </div>
);

export default Input;
