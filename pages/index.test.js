import { render, screen } from "@testing-library/react";
import { toHaveAttribute } from "@testing-library/jest-dom";
import HomePage from ".";

test("renders a heading", () => {
  render(<HomePage />);
  const heading = screen.getByRole("heading", {
    name: /Upcoming Events/i,
  });
  expect(heading).toBeInTheDocument();
});

test("renders the event list", () => {
  render(<HomePage />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

test("renders the add event link", () => {
  render(<HomePage />);
  const addEventLink = screen.getByRole("link", {
    name: /Add +/i,
  });
  expect(addEventLink).toHaveAttribute("href", "events/add");
  expect(addEventLink).toBeInTheDocument();
});
