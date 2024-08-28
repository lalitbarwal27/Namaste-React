import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("should Contact page button render", () => {
  render(<ContactUs />);
  const button = screen.findByRole("button");

  //assertion
  expect(button).toBeInTheDocument();
});

test("should Contact page input render", () => {
  render(<ContactUs />);
  const button = screen.findAllByRole("input");
  console.log(button);

  //assertion

  expect(button).toBeInTheDocument();
});
