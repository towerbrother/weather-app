import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input component when type text", () => {
  it("it renders correctly", () => {
    const testPlaceholder = "Test placeholder";
    const { getByPlaceholderText } = render(
      <Input type="text" placeholder={testPlaceholder} />
    );
    expect(getByPlaceholderText(testPlaceholder)).not.toBeNull(); // why .toBeInTheDocument() does not work?
  });
});

describe("Input component when type radio", () => {
  const testLabel = "Test label";
  const testChecked = false;
  // handleChange...
  it("it renders correctly", () => {
    const { getByLabelText } = render(<Input type="radio" label={testLabel} />);
    expect(getByLabelText(testLabel)).not.toBeNull();
  });
});
