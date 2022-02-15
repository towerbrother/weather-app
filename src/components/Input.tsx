import React from "react";
import IInput from "../interfaces/IInput";

const Input: ({ id, label, ...props }: IInput) => JSX.Element = ({ id, label, ...props }: IInput) => (
  <label htmlFor={id}>
    {label && label}
    <input {...props} id={id} autoComplete="off" />
  </label>
);

export default Input;
