import React from "react";
import ICustomInput from "../interfaces/ICustomInput";

const Input: ({ id, label, ...props }: ICustomInput) => JSX.Element = ({ id, label, ...props }: ICustomInput) => (
  <label htmlFor={id}>
    {label && label}
    <input {...props} id={id} autoComplete="off" />
  </label>
);

export default Input;
