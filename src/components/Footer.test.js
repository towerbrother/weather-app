import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";

jest.mock("./Radio", () => () => <div>Radio buttons</div>);

test("renders <Footer /> correctly", () => {
  const { container } = render(<Footer />);
  const link = screen.getByText(/Giorgio Torre/i);

  expect(screen.getByText(/Created by/i)).not.toBeNull();
  expect(link).not.toBeNull();
  expect(container.textContent).toMatch("Radio buttons");
});

test("should navigate to correct url", () => {
  const urlTest = "https://test.com/";
  render(<Footer url={urlTest} />);
  const link = screen.getByText(/Giorgio Torre/i);
  expect(link.href).toBe(urlTest);
});
