import React from "react";

const Error = ({ err }) => (
  <div className="error">
    <p>{`${err.status} - ${err.statusText}`}</p>
    {err.status === 404 ? (
      <p>Please check your input</p>
    ) : err.status === 401 ? (
      <p>Please check your API key</p>
    ) : (
      <p>You made more than 60 API calls per minute. Try again later.</p>
    )}
  </div>
);

export default Error;
