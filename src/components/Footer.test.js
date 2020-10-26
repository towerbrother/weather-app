import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

jest.mock("./Radio", () => () => <div>Radio buttons</div>);

test("renders <Footer /> correctly", () => {
  const authorTest = "author";
  const { container } = render(<Footer author={authorTest} />);
  const link = screen.getByText(authorTest);

  expect(link).not.toBeNull();
  expect(container.textContent).toMatch("Radio buttons");
});

test("should navigate to correct url", () => {
  const urlTest = "https://test.com/";
  const authorTest = "author";
  render(<Footer author={authorTest} url={urlTest} />);
  const link = screen.getByText(authorTest);
  expect(link.href).toBe(urlTest);
});
