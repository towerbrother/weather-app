import React from "react";

const Error: ({ err }: any) => JSX.Element = ({ err }: any) => (
  <div className="error">
    <p>{err.status}</p>
    <p>{err.statusText}</p>
  </div>
);

export default Error;
