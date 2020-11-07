import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input component when type text", () => {
  const testPlaceholder = "Test placeholder";
  render(<Input type="text" placeholder={testPlaceholder} />);
  const input = screen.getByPlaceholderText(testPlaceholder);
  it("renders correctly", () => {
    expect(input).not.toBeNull();
  });
  it("updates value on change correctly", () => {
    userEvent.type(input, "Test city");
    expect(input.value).toBe("Test city");
  });
});

describe("Input component when type radio", () => {
  const testLabel = "Test label";
  render(<Input type="radio" label={testLabel} />);
  const radio = screen.getByLabelText(testLabel);
  it("renders correctly", () => {
    expect(radio).not.toBeNull();
  });
});
