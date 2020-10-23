import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("renders Header correctly", () => {
  const testTitle = "Test title";
  const testSubtitle = "Test subtitle";

  const { getByText } = render(
    <Header title={testTitle} subtitle={testSubtitle} />
  );

  expect(getByText(testTitle)).not.toBeNull();
  expect(getByText(testSubtitle)).not.toBeNull();
});
