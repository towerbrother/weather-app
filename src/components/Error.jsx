import React from "react";

const Error = ({ err }) => (
  <div className="error">
    <p>{`${err.status} - ${err.statusText}`}</p>
    {err.status === 404 ? (
      <p>Not valid input</p>
    ) : err.status === 401 ? (
      <p>Not valid API key</p>
    ) : (
      <p>Too many API calls. Try again later.</p>
    )}
  </div>
);

export default Error;
