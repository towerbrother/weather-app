import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Input from "./Input";

describe("Input component when type text", () => {
  const testPlaceholder = "Test placeholder";
  render(<Input type="text" placeholder={testPlaceholder} />);
  const input = screen.getByPlaceholderText(testPlaceholder);
  it("renders correctly", () => {
    expect(input).not.toBeNull(); // why .toBeInTheDocument() does not work?
  });
  it("updates value on change correctly", () => {
    userEvent.type(input, "Test city");
    expect(input).toHaveValue("Test city");
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
  it("is unchecked correctly", () => {
    expect(radio).not.toBeChecked();
  });
  it("is checked correctly", () => {
    userEvent.click(radio);
    expect(radio).toBeChecked();
  });
});
