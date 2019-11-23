import React from "react";
import Input from "../Input";
import "./Form.css";

const Form = ({ onChange, onSubmit, queryString }) => (
  <form className="submitForm" onSubmit={onSubmit}>
    <Input
      label="Which city would you like?"
      id="city"
      onChange={onChange}
      value={queryString}
    />
    <button>Search</button>
  </form>
);

export default Form;
