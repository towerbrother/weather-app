import React from "react";

const Error = ({ err }) => (
  <div className="error">
    <p>{err.status}</p>
    <p>{err.statusText}</p>
  </div>
);

export default Error;
