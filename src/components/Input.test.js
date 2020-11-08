import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
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
  const onChange = jest.fn();
  render(
    <Input type="radio" label={testLabel} checked={false} onChange={onChange} />
  );
  const radio = screen.getByLabelText(testLabel);
  it("renders correctly", () => {
    expect(radio).not.toBeNull();
  });
  // https://github.com/testing-library/jest-dom/issues/107
  it("is unchecked correctly", () => {
    expect(radio).not.toBeChecked();
  });
  it("is checked correctly", () => {
    radio.checked = true;
    expect(radio).toBeChecked();
  });
});
