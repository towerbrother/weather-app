import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "./Error";

test("render <Error /> correctly", () => {
  const errorTest = {
    status: "errorTestStatus",
    statusText: "errorTestStatusText",
  };
  render(<Error err={errorTest} />);
  const status = screen.getByText(errorTest.status);
  const statusText = screen.getByText(errorTest.statusText);
  expect(status).not.toBeNull();
  expect(statusText).not.toBeNull();
});
