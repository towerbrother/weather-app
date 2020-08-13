import React from "react";

const Error = ({ err }) => (
  <div>
    <p className="error">{`${err.status} - ${err.statusText}`}</p>
  </div>
);

export default Error;
